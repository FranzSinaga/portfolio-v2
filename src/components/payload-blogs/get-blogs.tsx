'use client'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import { fetcher, PAYLOAD_API_URL, truncate } from '@/lib'

import BlurFade from '../magicui/blur-fade'
import { AsyncState } from '../async-state'

interface Res {
  docs: Array<{
    id: number
    slug: string
    title: string
    excerpt?: string
  }>
}

const query = new URLSearchParams({
  depth: '1',
  'where[isPublished][equals]': 'true',
  'select[slug]': 'true',
  'select[title]': 'true',
  'select[excerpt]': 'true'
})

export const GetBlogs = () => {
  const { push } = useRouter()
  const {
    data: posts,
    isLoading,
    error,
    mutate,
    isValidating
  } = useSWR<Res>(`${PAYLOAD_API_URL}/api/franz-blogs?${query}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const docs = posts?.docs

  return (
    <AsyncState isLoading={isLoading || isValidating} error={!!error || !docs} onRetry={() => mutate()}>
      <div className='mt-5 space-y-2'>
        {docs ? (
          docs.map((item, key) => (
            <BlurFade key={key} delay={0.25 + key * 0.05} inView>
              <li
                key={item.id}
                onClick={() => push(`/blogs/${item.slug}`)}
                className='hover:bg-accent bg-background flex cursor-pointer items-start justify-between rounded-lg p-3 transition-all hover:px-4'
              >
                <div className='ml-2 w-full'>
                  <div className='flex w-full items-center justify-between gap-x-2'>
                    <p className='font-medium'>{item.title}</p>
                    {/* <p className='mt-0.5 flex items-center gap-x-1 text-xs'>
                    <IconCalendar size={15} />
                    {dayjs(item.updatedAt).format('DD MMMM YYYY, HH:mm')}
                  </p> */}
                  </div>
                  {item.excerpt && <p className='text-muted-foreground mt-2 text-sm'>{truncate(item.excerpt, 210)}</p>}
                </div>
              </li>
            </BlurFade>
          ))
        ) : (
          <p>No Post</p>
        )}
      </div>
    </AsyncState>
  )
}
