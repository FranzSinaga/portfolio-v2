import GridPattern from '@/components/magicui/animated-grid-pattern'
import BlurFade from '@/components/magicui/blur-fade'
import BlurIn from '@/components/magicui/blur-in'
import { cn } from '@/lib'
import { Dribbble, Github, Linkedin, Mail } from 'lucide-react'

export default function Index() {
  return (
    <div className='relative -mx-10 flex h-full flex-col items-center justify-center gap-y-2 overflow-hidden'>
      <div className='gap-y- z-10 flex flex-col text-black dark:text-white'>
        <BlurFade inView>
          <p className='ml-1 font-mono text-lg'>
            Hello There <span className='text-xl'>👋</span>, I am
          </p>
        </BlurFade>
        <BlurFade inView delay={0.2}>
          <h1 className='text-5xl font-bold md:text-7xl'>Franz Sinaga</h1>
        </BlurFade>
        <BlurFade inView delay={0.4}>
          <h2 className='ml-1 text-2xl font-bold md:text-4xl'>Frontend Developer</h2>
        </BlurFade>
        <BlurFade inView delay={0.6}>
          <div className='mt-5 flex flex-col gap-[10px] text-sm md:flex-row'>
            <a
              href='mailto:sinagafranz12@gmail.com'
              className='flex cursor-pointer items-center gap-x-2 rounded-full bg-gray-400 bg-opacity-40 px-6 py-3 transition-opacity hover:bg-opacity-50'
            >
              <Mail size={20} />
              <span className='tracking-wider'>sinagafranz@gmail.com</span>
            </a>
            <div className='flex gap-x-[10px]'>
              <a
                href='https://github.com/FranzSinaga'
                target='_BLANK'
                className='cursor-pointer rounded-full bg-gray-400 bg-opacity-40 p-3 transition-opacity duration-200 hover:bg-opacity-50'
              >
                <Github size={20} />
              </a>
              <a
                href='https://www.linkedin.com/in/franz-sinaga/'
                target='_BLANK'
                className='cursor-pointer rounded-full bg-gray-400 bg-opacity-40 p-3 transition-opacity duration-200 hover:bg-opacity-50'
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </BlurFade>
        {/* <div className='relative mx-7 mt-5 rounded-lg border-2 border-foreground bg-gradient-to-bl from-slate-900 to-blue-950 p-6 font-mono text-[10px] text-white md:mx-0 md:w-[600px] md:text-sm'>
          <p>profile.json</p>
          <p className='mt-2'>
            {'1| {'}
            <br />
            {'2| '}&emsp; github:{' '}
            <a className='text-blue-400 hover:text-blue-500 hover:underline' href='https://github.com/FranzSinaga' target='_blank'>
              https://github.com/FranzSinaga
            </a>
            <br />
            {'3| '}&emsp; linkedin:{' '}
            <a className='text-blue-400 hover:text-blue-500 hover:underline' href='https://www.linkedin.com/in/franz-sinaga/' target='_blank'>
              https://www.linkedin.com/in/franz-sinaga/
            </a>
            <br />
            {'4| }'}
            <br />
            {'5|'}
          </p>
        </div> */}
      </div>

      <GridPattern
        numSquares={80}
        maxOpacity={0.4}
        duration={1}
        repeatDelay={1}
        className={cn('[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]', 'inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-0')}
      />
    </div>
  )
}
