// @next/next/no-img-elemen
'use client'

import React, { useEffect, useState } from 'react'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useParams } from 'next/navigation'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Markdown from 'react-markdown'

const NotionDetail: React.FC = () => {
  const params = useParams<{ slug: string }>()
  const { slug } = params!

  const [data, setData] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/notion/get-blog-detail?pageId=${slug}`)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()

        setData(result.html)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching data:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className='mx-auto max-w-3xl px-4 py-8'>
      <Markdown
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
          blockquote: ({ ...props }) => <blockquote className='bg-foreground my-4 border-l-4 pl-4 italic' {...props} />,
          a: ({ ...props }) => <a className='text-blue-600 hover:underline' {...props} />,
          hr: ({ ...props }) => <hr className='my-6 border-t border-gray-300' {...props} />,
          table: ({ ...props }) => (
            <div className='my-6 overflow-x-auto'>
              <table className='min-w-full border-collapse border border-gray-300' {...props} />
            </div>
          ),
          thead: ({ ...props }) => <thead className='bg-gray-100' {...props} />,
          th: ({ ...props }) => <th className='border border-gray-300 px-4 py-2 text-left' {...props} />,
          td: ({ ...props }) => <td className='border border-gray-300 px-4 py-2' {...props} />,
          img: ({ src, alt, ...props }) => {
            if (!src) return null

            // Menggunakan tag img standard HTML
            return (
              <picture>
                <img src={src} alt={alt || ''} className='my-4 h-auto w-full max-w-full rounded' loading='lazy' {...props} />
              </picture>
            )
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
          }
        }}
      >
        {data}
      </Markdown>
    </div>
  )
}

export default NotionDetail
