import React from 'react'
import BlurFade from '@/components/magicui/blur-fade'

interface Props {
  header: string
  children: React.ReactNode
}

export const StyleGuideContainer = ({ header, children }: Props) => {
  return (
    <BlurFade inView>
      <div className='h-full w-full rounded-lg border'>
        <div className='border-b-2 p-3 text-lg font-black'>
          <h4>{header}</h4>
        </div>
        <div className='p-3'>{children}</div>
      </div>
    </BlurFade>
  )
}
