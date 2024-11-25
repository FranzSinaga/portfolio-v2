import React from 'react'
import { cn } from '@/lib'
import './style.css'

const AnimatedBgHero = ({
  className,
  children
}: Readonly<{
  className: string
  children: React.ReactNode
}>) => {
  return (
    <section className={cn('relative flex h-full items-center justify-center overflow-hidden', className)}>
      <div className='features_gradient-wrapper'>
        <div className={`features_gradient features_gradient-1 bg-[#a7b0c9] dark:bg-[#293E6F]`}></div>
        <div className={`features_gradient features_gradient-2 bg-[#a7b0c9] dark:bg-[#293E6F]`}></div>
        <div className={`features_gradient features_gradient-3 bg-[#a7b0c9] dark:bg-[#293E6F]`}></div>
      </div>
      <div className='text- container z-10 mx-auto'>{children}</div>
    </section>
  )
}

export default AnimatedBgHero
