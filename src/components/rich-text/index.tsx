'use client'
import React from 'react'
import { formatText, PAYLOAD_API_URL } from '@/lib'

import { Button } from '../ui/button'

import { RichText as RichTextContent } from '@/types/payload.types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { IconCopy, IconCopyCheck } from '@tabler/icons-react'

export const RichText = ({ content }: { content?: RichTextContent | null }) => {
  return (
    <>
      {content?.root.children.map((e, index) => {
        if (e.type === 'paragraph' && e.children?.length === 0) return <br key={index} />
        return (
          <div key={index}>
            {e.tag === 'h1' && <h1>{e.children?.map((text, i) => formatText({ format: text.format, text: text.text, index: i }))}</h1>}
            {e.tag === 'h2' && <h2>{e.children?.map((text, i) => formatText({ format: text.format, text: text.text, index: i }))}</h2>}
            {e.tag === 'h3' && <h3>{e.children?.map((text, i) => formatText({ format: text.format, text: text.text, index: i }))}</h3>}
            {e.tag === 'h4' && <h4>{e.children?.map((text, i) => formatText({ format: text.format, text: text.text, index: i }))}</h4>}
            {e.tag === 'h5' && <h5>{e.children?.map((text, i) => formatText({ format: text.format, text: text.text, index: i }))}</h5>}
            {e.tag === 'h6' && <h6>{e.children?.map((text, i) => formatText({ format: text.format, text: text.text, index: i }))}</h6>}
            {e.type === 'paragraph' && (
              <p>
                {e.children?.map((text, i) =>
                  formatText({
                    format: text.format,
                    text: text.type === 'link' ? (text.children ? text.children[0].text : '') : text.text,
                    isLink: text.type === 'link',
                    linkFields: text.type === 'link' ? text.fields : undefined,
                    index: i
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
                      {properties.children?.map((item, i) => {
                        return formatText({ format: item.format, text: item.text, index: i })
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
    </>
  )
}

const CodeBlockComponents = ({ name, code, language, showLineNumbers }: { name: string; code: string; language: string; showLineNumbers?: boolean }) => {
  type CopyStatus = 'Copy' | 'Copied!' | 'Failed'

  const [copyStatus, setCopyStatus] = React.useState<CopyStatus>('Copy')
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
    <div className='border p-2'>
      <div className='flex items-center justify-between'>
        <p className='text-muted-foreground text-xs'>{name}</p>
        <Button onClick={handleCopy} size='xs' variant={'ghost'}>
          <span className='flex gap-x-1'>
            {copyStatus === 'Copy' ? <IconCopy size={6} /> : <IconCopyCheck size={6} />}
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
