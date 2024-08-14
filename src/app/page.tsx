import GridPattern from '@/components/magicui/animated-grid-pattern'
import BlurIn from '@/components/magicui/blur-in'
import { cn } from '@/lib'

export default function Index() {
  return (
    <div className='relative -mx-10 flex h-full flex-col justify-center gap-y-2 overflow-y-hidden'>
      <div className='text mx-60 flex w-full flex-col gap-y-1 text-black dark:text-white'>
        <BlurIn word={'Hello There 👋, I am'} className='text-lg' />
        <BlurIn word='Franz Sinaga' className='text-7xl font-bold' />
        <BlurIn word='Frontend Developer' className={cn('text-4xl font-bold')} />
      </div>
      <GridPattern
        numSquares={80}
        maxOpacity={0.4}
        duration={1}
        repeatDelay={1}
        className={cn('[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]', 'inset-x-0 inset-y-[-50%] h-[200%] skew-y-0')}
      />
    </div>
  )
}
