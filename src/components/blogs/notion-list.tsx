'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'

import LucideIcon from '../lucide-icon'
import { MyNotionItem } from '@/types/notion.type'

const NotionList = () => {
  const { push } = useRouter()

  const [data, setData] = useState<MyNotionItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/notion/get-blogs')

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await response.json()
        setData(result.items)
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
    <div className='my-2'>
      <ul className='grid grid-cols-1 gap-y-3'>
        {data.map(item => (
          <li
            key={item.id}
            onClick={() => push(`/blogs/${item.id}`)}
            className='hover:bg-accent bg-background/70 flex cursor-pointer items-center justify-between rounded-lg p-3 transition-all'
          >
            <div className='ml-2'>
              <p>{item.title}</p>
              <p className='text-xs'>{dayjs(item.created).format('DD MMMM YYYY, HH:mm')}</p>
            </div>
            <div className='mt-2 flex items-center gap-x-2'>
              {item.tags?.map((e, key) => (
                <p key={key} className='rounded-full border px-2 py-0.5 text-xs'>
                  {e.name}
                </p>
              ))}
              <LucideIcon name='CircleChevronRight' size={20} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotionList
