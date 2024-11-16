import LucideIcon from '@/components/lucide-icon'
import GridPattern from '@/components/magicui/animated-grid-pattern'
import BlurFade from '@/components/magicui/blur-fade'
import { cn } from '@/lib'

export default function Index() {
  return (
    <div className='relative -mx-10 flex h-dvh flex-col items-center justify-center gap-y-2 overflow-hidden lg:h-full'>
      <div className='gap-y- z-10 flex flex-col text-black dark:text-white'>
        <BlurFade inView>
          <p className='ml-1 font-mono'>Hello There 👋, I am</p>
        </BlurFade>
        <BlurFade inView delay={0.2}>
          <h1 className='font-bold'>Franz Sinaga</h1>
        </BlurFade>
        <BlurFade inView delay={0.4}>
          <h2 className='ml-1 font-bold'>Frontend Developer</h2>
        </BlurFade>

        <BlurFade inView delay={0.6}>
          <div className='mt-5 flex flex-row flex-wrap items-center gap-[10px]'>
            <a
              href='mailto:sinagafranz12@gmail.com'
              className='flex cursor-pointer items-center gap-x-2 rounded-full bg-gray-400 bg-opacity-40 px-6 py-2 transition-opacity hover:bg-opacity-50'
            >
              <LucideIcon name='Mail' size={16} />
              <span className='tracking-wider'>sinagafranz@gmail.com</span>
            </a>
            <a
              href='https://github.com/FranzSinaga'
              target='_BLANK'
              className='flex cursor-pointer items-center rounded-full bg-gray-400 bg-opacity-40 p-2.5 transition-opacity duration-200 hover:bg-opacity-50'
            >
              <LucideIcon name='Github' size={16} />
            </a>
            <a
              href='https://www.linkedin.com/in/franz-sinaga/'
              target='_BLANK'
              className='flex cursor-pointer items-center rounded-full bg-gray-400 bg-opacity-40 p-2.5 transition-opacity duration-200 hover:bg-opacity-50'
            >
              <LucideIcon name='Linkedin' size={16} />
            </a>
          </div>
        </BlurFade>
      </div>

      <GridPattern
        numSquares={80}
        maxOpacity={0.4}
        duration={1}
        // repeatDelay={1}
        className={cn('[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]', 'inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-0')}
      />
    </div>
  )
}
