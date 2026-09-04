import BlurFade from '@/components/magicui/blur-fade'
import { AboutMe, Footer, Stacks } from './components'
import { WorkExperience } from '@/components/work-experience'

export const metadata = {
  title: 'Franz | About'
}

const AboutPage = () => {
  return (
    <div className='mt-5'>
      <div className='mx-auto max-w-300 space-y-10'>
        <BlurFade inView>
          <AboutMe />
        </BlurFade>

        <BlurFade inView>
          <h3 className='font-mono font-bold'>Work Experience</h3>
          <BlurFade inView delay={0.2}>
            <div className='flex flex-row flex-wrap'>
              <WorkExperience />
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
