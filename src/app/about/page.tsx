import BlurFade from '@/components/magicui/blur-fade'
import { AboutMe, Footer, Stacks, Timeline } from './components'

export const metadata = {
  title: 'Franz | About'
}

const AboutPage = () => {
  return (
    <div className='mt-5 space-y-10'>
      <div className='mx-auto max-w-[1200px] space-y-10'>
        <BlurFade inView>
          <AboutMe />
        </BlurFade>

        <BlurFade inView>
          <h2 className='font-mono font-bold'>{'Work Experience'}</h2>
          <BlurFade inView delay={0.2}>
            <div className='flex flex-row flex-wrap'>
              <Timeline />
            </div>
          </BlurFade>
        </BlurFade>

        <BlurFade inView>
          <Stacks />
        </BlurFade>
      </div>

      <BlurFade inView>
        <Footer />
      </BlurFade>
    </div>
  )
}

export default AboutPage
