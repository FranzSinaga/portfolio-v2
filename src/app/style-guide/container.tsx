import BlurFade from '@/components/magicui/blur-fade'
import React from 'react'

interface Props {
  header: React.ReactNode
  children: React.ReactNode
}

export const StyleGuideContainer = ({ header, children }: Props) => {
  return (
    <BlurFade inView>
      <div className='h-full w-full rounded-lg border'>
        <div className='border-b-2 p-3 text-lg font-bold'>{header}</div>
        <div className=' p-3'>{children}</div>
      </div>
    </BlurFade>
  )
}
