import { cn } from '@/lib'

import GridPattern from '@/components/magicui/animated-grid-pattern'
import BlurFade from '@/components/magicui/blur-fade'
import SocialList from '@/components/social'

export const metadata = {
  title: 'Franz | Home'
}

const Home = () => {
  return (
    <div className='relative flex h-dvh flex-col items-center justify-center overflow-hidden lg:h-full'>
      <div className='flex flex-col text-black dark:text-white'>
        <BlurFade inView>
          <p className='ml-1 font-serif'>Hello There 👋, I am</p>
        </BlurFade>
        <BlurFade inView delay={0.2}>
          <h2 className='text-4xl font-bold lg:text-7xl'>Franz Sinaga</h2>
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

export default Home
