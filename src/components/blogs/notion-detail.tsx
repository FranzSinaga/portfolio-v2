'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import useSWR from 'swr'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getLinkPreview } from 'link-preview-js'
import { fetcher } from '@/lib'
import LucideIcon from '../lucide-icon'
import ImageWithLoading from '../image-with-loading'
import Image from 'next/image'

const NotionDetail: React.FC = () => {
  const { push } = useRouter()
  const params = useParams<{ slug: string }>()
  const { slug } = params!

  const { data: detail, isLoading, error } = useSWR<{ html: string }>(`/api/notion/get-blog-detail?pageId=${slug}`, fetcher)
  const data = detail?.html

  if (isLoading)
    return (
      <>
        <p onClick={() => push('/blogs')} className='hover:bg-accent mb-3 flex w-max cursor-pointer items-center gap-x-1 rounded-full px-2 py-1 font-mono'>
          <LucideIcon name='ArrowLeft' size={16} />
          Go Back
        </p>
        <div className='bg-foreground/30 inset-0 flex w-full animate-pulse items-center justify-center rounded py-18'>
          <p>Loading...</p>
        </div>
      </>
    )
  if (error || !data) return <div>Error: {error}</div>

  return (
    <>
      <p onClick={() => push('/blogs')} className='hover:bg-accent mb-3 flex w-max cursor-pointer items-center gap-x-1 rounded-full px-2 py-1 font-mono'>
        <LucideIcon name='ArrowLeft' size={16} />
        Go Back
      </p>
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

interface UsedProps {
  title: string
  description: string
  images: string[]
}

export const BookmarkCard = ({ url }: Props) => {
  const [data, setData] = useState<UsedProps | null>(null)

  useEffect(() => {
    getLinkPreview(url)
      .then(data => setData(data as UsedProps))
      .catch(() => {})
  }, [url])

  if (!data)
    return (
      <a href={url} target='_blank' className='mb-2 rounded-md border-gray-700 bg-[#282A36] p-4 hover:bg-[#282A36]/80 hover:underline'>
        <span className='mt-2 block text-sm text-blue-400'>{url}</span>
      </a>
    )

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='mb-2 flex max-w-full gap-4 rounded-lg border border-gray-700 bg-[#282A36] p-4 text-white hover:bg-[#282A36]/80'
    >
      <div className=''>
        <h3 className='text-lg font-semibold'>{data.title}</h3>
        <p className='mt-1 text-sm text-gray-400'>{data.description}</p>
        <span className='mt-2 block text-sm text-blue-400'>{url}</span>
      </div>
      {data.images?.[0] ? <Image src={data.images[0]} alt='thumbnail' className='h-24 w-40 rounded object-cover' /> : null}
    </a>
  )
}

export default NotionDetail
