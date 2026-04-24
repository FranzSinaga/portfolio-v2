'use client'
import { GitHubCalendar } from 'react-github-calendar'

import BlurFade from '@/components/magicui/blur-fade'
import { useTheme } from '@/hooks'
import SocialList from '@/components/social'

export const Footer = () => {
  const { selectedTheme } = useTheme()
  return (
    <div className='flex flex-col items-center justify-center py-10 text-center md:space-y-5'>
      <BlurFade inView delay={0.2} className='mb-5 w-full'>
        <GitHubCalendar
          className='mx-auto'
          username='franzsinaga'
          showWeekdayLabels={true}
          showTotalCount={false}
          colorScheme={selectedTheme === 'dark' ? 'dark' : 'light'}
          blockMargin={4}
          blockSize={typeof window !== 'undefined' && window.innerWidth < 640 ? 8 : 12}
          fontSize={12}
        />
      </BlurFade>
      <BlurFade inView delay={0.4}>
        <h1 className='font-bold'>Get to know me!</h1>
      </BlurFade>
      <BlurFade inView delay={0.6}>
        <h4 className='font-semibold'>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h4>
      </BlurFade>
      <BlurFade inView delay={0.8}>
        <SocialList />
      </BlurFade>
    </div>
  )
}
