import GridPattern from '@/components/magicui/animated-grid-pattern'
import BlurIn from '@/components/magicui/blur-in'
import { cn } from '@/lib'

export default function Index() {
  return (
    <div className='relative -mx-10 flex h-full flex-col items-center justify-center gap-y-2 overflow-hidden'>
      <div className='z-10 flex flex-col gap-y- text-black dark:text-white'>
        <BlurIn word={'Hello There 👋, I am'} className='text-lg font-mono ml-1' />
        <BlurIn word='Franz Sinaga' className='text-5xl font-bold md:text-7xl' />
        <BlurIn word='Frontend Developer' className={cn('text-2xl font-bold md:text-4xl ml-1')} />
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
