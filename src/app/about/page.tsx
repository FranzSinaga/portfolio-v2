import BlurFade from '@/components/magicui/blur-fade'
import AboutComponent from './about'
import Timeline from './timeline'
import Stacks from './stacks'
import Footer from './footer'

export const metadata = {
  title: 'Franz | About'
}

export default function About() {
  return (
    <div className='mt-5 space-y-10'>
      <div className='mx-auto max-w-[1200px] space-y-10'>
        <BlurFade inView>
          <AboutComponent />
        </BlurFade>

        <BlurFade inView>
          <h2 className='font-mono text-2xl font-bold'>{'Work Experience'}</h2>
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
