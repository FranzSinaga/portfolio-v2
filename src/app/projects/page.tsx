'use client'
import { useReadLocalStorage } from 'usehooks-ts'
import BlurFade from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'

import { Theme } from '@/types/theme.type'

export default function Projects() {
  const theme = useReadLocalStorage<Theme>('theme')
  return (
    <div className='relative mt-5 space-y-10 pb-5'>
      <BlurFade inView className='space-y-10'>
        <h1 className='font-mono text-2xl font-bold'>{'<Projects />'}</h1>
        <div className={'grid w-full grid-cols-3 gap-4 pb-10 '}>
          {[...Array(7)].map((e, idx) => (
            <BlurFade key={e} delay={0.25 + idx * 0.05} inView>
              <div className='h-[500px] w-full lg:h-full' key={e}>
                <MagicCard className={'flex cursor-pointer flex-col border border-foreground p-4 shadow-2xl'} gradientColor={theme === 'dark' ? '#293E6F' : 'lightgray'}>
                  <div className='h-32 w-full animate-pulse rounded-sm bg-gray-400' />
                  <p className='mt-2 text-xl font-bold'>Title Projects</p>
                  <p className='mt-3 text-sm font-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                </MagicCard>
              </div>
            </BlurFade>
          ))}
        </div>
      </BlurFade>
    </div>
  )
}