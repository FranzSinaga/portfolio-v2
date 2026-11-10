'use client'
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import { fetcher, PAYLOAD_API_URL } from '@/lib'

import { AsyncState } from '../async-state'
import { RichText } from '../rich-text'

import { Blog } from '@/types/payload.types'
import GoBackDetailBlog from '../blogs/go-back'

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

  return (
    <AsyncState isLoading={isLoading || isValidating} error={!!error || !docs} onRetry={() => mutate()}>
      <GoBackDetailBlog />
      <article className='space-y-3 font-mono'>
        <RichText content={docs?.content} />
      </article>
    </AsyncState>
  )
}
