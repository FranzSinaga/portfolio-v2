import GridPattern from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib'

export default function Index() {
  return (
    <div className='relative -mx-10 flex h-full flex-col justify-center gap-y-2 overflow-y-hidden'>
      <div className='flex w-full flex-col gap-y-3 text-center text-black dark:text-white'>
        <p className='text-lg'>
          Hello There <span>👋</span>, I am
        </p>
        <h1 className='text-7xl font-bold'>Franz Sinaga</h1>
        <h2 className={cn('text-4xl font-bold')}>{'Frontend Developer'}</h2>
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
