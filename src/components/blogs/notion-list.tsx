'use client'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import useSWR from 'swr'
import { fetcher } from '@/lib'

import LucideIcon from '../lucide-icon'
import { NotionItemsRes } from '@/types/notion.type'

const NotionList = () => {
  const { push } = useRouter()

  const { data: posts, isLoading, error } = useSWR<NotionItemsRes>('/api/notion/get-blogs', fetcher)
  const data = posts?.data?.items

  if (isLoading)
    return (
      <div className='bg-foreground/30 inset-0 flex w-full animate-pulse items-center justify-center rounded py-18'>
        <p>Loading...</p>
      </div>
    )
  if (error || !data) return <div>Error: {error}</div>

  return (
    <div className='my-2'>
      <ul className='grid grid-cols-1 space-y-3'>
        {data ? (
          data.map(item => (
            <li
              key={item.id}
              onClick={() => push(`/blogs/${item.id}`)}
              className='hover:bg-background/20 bg-background flex cursor-pointer items-center justify-between rounded-lg p-3 transition-all hover:px-4'
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
          ))
        ) : (
          <p>No Post</p>
        )}
      </ul>
    </div>
  )
}

export default NotionList
