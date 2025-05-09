'use client'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import useSWR from 'swr'
import { fetcher } from '@/lib'

import LucideIcon from '../lucide-icon'
import { NotionItemsRes } from '@/types/notion.type'
import { Button } from '../ui/button'
import BlurFade from '../magicui/blur-fade'

const NotionList = () => {
  const { push } = useRouter()

  const {
    data: posts,
    isLoading,
    error,
    mutate,
    isValidating
  } = useSWR<NotionItemsRes>('/api/notion/get-blogs', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const data = posts?.data?.items

  if (isLoading || isValidating)
    return (
      <div className='bg-foreground/30 inset-0 flex w-full animate-pulse items-center justify-center rounded py-18'>
        <p>Loading...</p>
      </div>
    )
  if (error || !data)
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
    <div className='my-2'>
      <ul className='grid grid-cols-1 space-y-3'>
        {data ? (
          data.map((item, key) => (
            <BlurFade key={key} delay={0.25 + key * 0.05} inView>
              <li
                key={item.id}
                onClick={() => push(`/blogs/${item.id}`)}
                className='hover:bg-accent/40 bg-background flex cursor-pointer items-center justify-between rounded-lg p-3 transition-all hover:px-4'
              >
                <div className='ml-2'>
                  <p>{item.title}</p>
                  <p className='flex items-center gap-x-1 text-xs'>
                    <LucideIcon name='Calendar' size={15} />
                    {dayjs(item.created).format('DD MMMM YYYY, HH:mm')}
                  </p>
                </div>
                <div className='mt-2 flex items-center gap-x-1'>
                  {item.tags?.map((e, key) => (
                    <p key={key} className='border-foreground/50 rounded-full border px-2 py-0.5 text-xs'>
                      {e.name}
                    </p>
                  ))}
                </div>
              </li>
            </BlurFade>
          ))
        ) : (
          <p>No Post</p>
        )}
      </ul>
    </div>
  )
}

export default NotionList
