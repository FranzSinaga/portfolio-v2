'use client'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export const DateTime = () => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <time className='hidden text-end md:block'>
      <p className='text-xs font-semibold'>{dayjs(time).format('ddd YYYY-MM-DD HH:mm')}</p>
    </time>
  )
}
