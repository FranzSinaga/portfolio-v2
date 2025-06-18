'use client'
import React from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import { fetcher, PAYLOAD_API_URL } from '@/lib'

import LucideIcon from '../lucide-icon'
import { Button } from '../ui/button'
import BlurFade from '../magicui/blur-fade'

import { Blog } from '@/types/payload.types'

interface Res {
  docs: Blog[]
}

export const GetBlogs = () => {
  const { push } = useRouter()
  const {
    data: posts,
    isLoading,
    error,
    mutate,
    isValidating
  } = useSWR<Res>(`${PAYLOAD_API_URL}/api/blogs?depth=0&where[isPublished][equals]=true`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const docs = posts?.docs

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
    <div className='mt-5 space-y-2'>
      {docs ? (
        docs.map((item, key) => (
          <BlurFade key={key} delay={0.25 + key * 0.05} inView>
            <li
              key={item.id}
              onClick={() => push(`/blogs/${item.slug}`)}
              className='hover:bg-accent/40 bg-background flex cursor-pointer items-start justify-between rounded-lg p-3 transition-all hover:px-4'
            >
              <div className='ml-2 w-full'>
                <div className='flex w-full items-center justify-between gap-x-2'>
                  <p>{item.title}</p>
                  <p className='mt-0.5 flex items-center gap-x-1 text-xs'>
                    <LucideIcon name='Calendar' size={15} />
                    {dayjs(item.updatedAt).format('DD MMMM YYYY, HH:mm')}
                  </p>
                </div>
                <p className='text-xs'>{item.excerpt}</p>
              </div>
            </li>
          </BlurFade>
        ))
      ) : (
        <p>No Post</p>
      )}
    </div>
  )
}
