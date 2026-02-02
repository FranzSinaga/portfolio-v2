'use client'
import React, { useState } from 'react'
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import { fetcher, PAYLOAD_API_URL } from '@/lib'

import LucideIcon from '../lucide-icon'
import { Button } from '../ui/button'

import { Blog } from '@/types/payload.types'
import GoBackDetailBlog from '../blogs/go-back'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, CopyCheck } from 'lucide-react'

interface Res {
  docs: Blog[]
}

export const GetDetailBlog = () => {
  const params = useParams<{ slug: string }>()
  const { slug } = params!
  const {
    data: posts,
    isLoading,
    error,
    mutate,
    isValidating
  } = useSWR<Res>(`${PAYLOAD_API_URL}/api/franz-blogs?depth=1&where[slug][equals]=${slug}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const docs = posts?.docs[0]

  if (isLoading || isValidating)
    return (
      <div className='bg-foreground/30 inset-0 flex w-full animate-pulse items-center justify-center rounded py-18'>
        <p>Loading...</p>
      </div>
    )
  if (error || !docs)
    return (
      <div className='bg-accent flex justify-between rounded-sm p-2 drop-shadow-sm'>
        <div className='flex items-center gap-x-2'>
          <LucideIcon name='Info' size={18} />
          <p className='text-destructive-foreground font-mono'>Something wrong unexpected</p>
        </div>
        <Button variant={'default'} size={'sm'} onClick={() => mutate()}>
          Reload
        </Button>
      </div>
    )

  return (
    <>
      <GoBackDetailBlog />
      <article className='space-y-3 font-mono'>
        {docs.content.root.children.map((e, index) => {
          if (e.type === 'paragraph' && e.children?.length === 0) return <br key={index} />
          return (
            <div key={index}>
              {e.tag === 'h1' && <h1>{e.children?.map(text => formatText({ format: text.format, text: text.text }))}</h1>}
              {e.tag === 'h2' && <h2>{e.children?.map(text => formatText({ format: text.format, text: text.text }))}</h2>}
              {e.tag === 'h3' && <h3>{e.children?.map(text => formatText({ format: text.format, text: text.text }))}</h3>}
              {e.tag === 'h4' && <h4>{e.children?.map(text => formatText({ format: text.format, text: text.text }))}</h4>}
              {e.tag === 'h5' && <h5>{e.children?.map(text => formatText({ format: text.format, text: text.text }))}</h5>}
              {e.tag === 'h6' && <h6>{e.children?.map(text => formatText({ format: text.format, text: text.text }))}</h6>}
              {e.type === 'paragraph' && (
                <p>
                  {e.children?.map(text =>
                    formatText({
                      format: text.format,
                      text: text.type === 'link' ? (text.children ? text.children[0].text : '') : text.text,
                      isLink: text.type === 'link',
                      linkFields: text.type === 'link' ? text.fields : undefined
                    })
                  )}
                </p>
              )}

              {/* Block Quote */}
              {e.type === 'quote' && (
                <>
                  {e.children?.map((text, key) => (
                    <p key={key} className='my-2 border-l-4 border-gray-700/80 py-1 pl-1'>
                      <span className='mx-2 inline-block font-serif font-medium italic'>{text.text}</span>
                    </p>
                  ))}
                </>
              )}

              {/* Unordered List/Ordered List */}
              {(e.tag === 'ul' || e.tag === 'ol') && (
                <div className='ml-4'>
                  <ol className={e.tag === 'ul' ? 'list-disc' : 'list-decimal'}>
                    {e.children?.map((properties, key) => (
                      <li key={key}>
                        {properties.children?.map(item => {
                          return formatText({ format: item.format, text: item.text })
                        })}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Code Block */}
              {e.type === 'block' && (
                <>
                  {e.fields.blockType === 'code-block' && <CodeBlockComponents name={e.fields.blockName} code={e.fields.code} language={e.fields.language} showLineNumbers />}
                  {e.fields.blockType === 'upload-block' && (
                    <div className='flex w-full flex-col items-center justify-center'>
                      <picture className='w-full'>
                        <img src={`${PAYLOAD_API_URL}${e.fields.upload.url}`} alt={`${e.fields.upload.alt}`} className='w-full' />
                      </picture>
                    </div>
                  )}
                </>
              )}

              {/* horzontal rule */}
              {e.type === 'horizontalrule' && <hr className='my-2' />}
            </div>
          )
        })}
      </article>
    </>
  )
}

const CodeBlockComponents = ({ name, code, language, showLineNumbers }: { name: string; code: string; language: string; showLineNumbers?: boolean }) => {
  type CopyStatus = 'Copy' | 'Copied!' | 'Failed'

  const [copyStatus, setCopyStatus] = useState<CopyStatus>('Copy')
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopyStatus('Copied!')
      setTimeout(() => setCopyStatus('Copy'), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
      setCopyStatus('Failed')
      setTimeout(() => setCopyStatus('Copy'), 2000)
    }
  }

  return (
    <div className='rounded border p-2'>
      <div className='flex items-center justify-between'>
        <p className='text-xs'>{name}</p>
        <Button onClick={handleCopy} size='xs' variant={'ghost'}>
          <span className='flex gap-x-1'>
            {copyStatus === 'Copy' ? <Copy size={6} /> : <CopyCheck size={6} />}
            {copyStatus}
          </span>
        </Button>
      </div>
      <SyntaxHighlighter style={dracula} showLineNumbers={showLineNumbers} language={language} PreTag='div'>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

interface formatTextParam {
  format: string
  text: string
  isLink?: boolean
  linkFields?: { linkType: string; newTab: string; url: string; [k: string]: string }
}

const formatText = ({ format, text, isLink, linkFields }: formatTextParam) => {
  const classes = []

  if (Number(format) & 1) classes.push('font-bold') // Bold
  if (Number(format) & 2) classes.push('italic') // Italic
  if (Number(format) & 4) classes.push('line-through') // Strikethrough
  if (Number(format) & 8) classes.push('underline') // Underline

  const isCode = (Number(format) & 16) > 0

  if (isLink)
    return (
      <span key={text}>
        <a href={linkFields?.url} target={linkFields?.newTab ? '_blank' : '_self'} className='text-sm text-blue-400 hover:underline'>
          {text}
        </a>
      </span>
    )

  if (isCode)
    return (
      <code className='rounded bg-slate-700 p-0.5 text-white' key={text + format}>
        {text}
      </code>
    )

  return (
    <span key={text + format} className={classes.join(' ')}>
      {text}
    </span>
  )
}
