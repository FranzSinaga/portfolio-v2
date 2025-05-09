'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import useSWR from 'swr'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { fetcher } from '@/lib'
import LucideIcon from '../lucide-icon'
import ImageWithLoading from '../image-with-loading'
import { Button } from '../ui/button'
import GoBackDetailBlog from './go-back'

const NotionDetail: React.FC = () => {
  const params = useParams<{ slug: string }>()
  const { slug } = params!

  const {
    data: detail,
    isLoading,
    error,
    mutate,
    isValidating
  } = useSWR<{ html: string }>(`/api/notion/get-blog-detail?pageId=${slug}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const data = detail?.html

  if (isLoading || isValidating)
    return (
      <>
        <GoBackDetailBlog />
        <div className='bg-foreground/30 inset-0 flex w-full animate-pulse items-center justify-center rounded py-18'>
          <p>Loading...</p>
        </div>
      </>
    )
  if (error || !data)
    return (
      <>
        <GoBackDetailBlog />
        <div className='bg-accent flex justify-between rounded-sm p-2 drop-shadow-sm'>
          <div className='flex items-center gap-x-2'>
            <LucideIcon name='Info' size={18} />
            <p className='text-destructive-foreground font-mono'>Something wrong unexpected</p>
          </div>
          <Button variant={'default'} size={'sm'} onClick={() => mutate()}>
            Reload
          </Button>
        </div>
      </>
    )

  return (
    <>
      <GoBackDetailBlog />
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => <h1 className='mt-8 mb-4 text-3xl font-bold' {...props} />,
          h2: ({ ...props }) => <h2 className='mt-6 mb-3 text-2xl font-bold' {...props} />,
          h3: ({ ...props }) => <h3 className='mt-5 mb-2 text-xl font-bold' {...props} />,
          p: ({ ...props }) => <p className='mb-4 leading-relaxed' {...props} />,
          ul: ({ ...props }) => <ul className='mb-4 list-disc pl-8' {...props} />,
          ol: ({ ...props }) => <ol className='mb-4 list-decimal pl-8' {...props} />,
          li: ({ ...props }) => <li className='mb-1' {...props} />,
          blockquote: ({ ...props }) => <blockquote className='bg-background/50 my-4 rounded-r-sm border-l-4 pl-4 italic' {...props} />,
          a: ({ ...props }) => <a className='text-base text-blue-600 hover:underline' {...props} />,
          hr: ({ ...props }) => <hr className='my-6 border-t border-gray-300' {...props} />,
          table: ({ ...props }) => (
            <div className='my-6 overflow-x-auto'>
              <table className='min-w-full border-collapse border border-gray-300' {...props} />
            </div>
          ),
          thead: ({ ...props }) => <thead className='bg-gray-100' {...props} />,
          th: ({ ...props }) => <th className='border border-gray-300 px-4 py-2 text-left' {...props} />,
          td: ({ ...props }) => <td className='border border-gray-300 px-4 py-2' {...props} />,
          img: ({ src, alt }) => {
            if (!src) return null

            // Menggunakan tag img standard HTML
            return <ImageWithLoading src={src} alt={alt || ''} />
          },
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter style={dracula} language={match[1]} PreTag='div'>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className='bg-foreground/80 text-background rounded px-1 py-0.5 text-sm' {...props}>
                {children}
              </code>
            )
          },
          div: ({ node, ...props }) => {
            const url = node?.properties?.['dataBookmark'] as string
            if (url) {
              return (
                <div className='grid space-y-2'>
                  <BookmarkCard url={url} />
                </div>
              )
            }
            return <div {...props}>{url}</div>
          }
        }}
      >
        {data
          ? data.replaceAll(/\[bookmark\]\((.*?)\)/g, (_match, url) => {
              return `<div data-bookmark="${url}"></div>`
            })
          : data}
      </ReactMarkdown>
    </>
  )
}

interface Props {
  url: string
}

export const BookmarkCard = ({ url }: Props) => {
  return (
    <a href={url} target='_blank' className='group mb-2 flex justify-between rounded-md border border-gray-700 bg-[#282A36] p-3 transition-all hover:bg-[#282A36]/80 hover:px-5'>
      <span className='block font-mono text-sm text-blue-400'>{url}</span>
      <LucideIcon name='ChevronRight' className='invisible transition-all group-hover:visible' size={18} />
    </a>
  )
}

export default NotionDetail
