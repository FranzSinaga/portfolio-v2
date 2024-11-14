import BlurFade from '@/components/magicui/blur-fade'
import React from 'react'

interface Props {
  header: React.ReactNode
  children: React.ReactNode
}

export const StyleGuideContainer = ({ header, children }: Props) => {
  return (
    <BlurFade inView>
      <div className='rounded-t-lg border p-3 text-lg font-bold'>{header}</div>
      <div className='rounded-b-lg border-x border-b p-3'>{children}</div>
    </BlurFade>
  )
}
