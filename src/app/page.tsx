import GridPattern from '@/components/magicui/animated-grid-pattern'
import BlurFade from '@/components/magicui/blur-fade'
import { HyperText } from '@/components/magicui/hyper-text'
import SocialList from '@/components/social'
import { cn } from '@/lib'

export const metadata = {
  title: 'Franz | Home'
}

const Index = () => {
  return (
    <div className='relative flex h-dvh flex-col items-center justify-center overflow-hidden lg:h-full'>
      <div className='z-10 flex flex-col text-black dark:text-white'>
        <BlurFade inView>
          <p className='ml-1 font-mono'>Hello There 👋, I am</p>
        </BlurFade>
        <BlurFade inView delay={0.2}>
          <HyperText className='text-4xl font-bold lg:text-7xl' text='Franz Sinaga' />
        </BlurFade>
        <BlurFade inView delay={0.4}>
          <h2 className='ml-1 font-bold'>Frontend Developer</h2>
        </BlurFade>

        <BlurFade inView delay={0.6}>
          <SocialList />
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

export default Index
