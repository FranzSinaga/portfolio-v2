import BlurFade from '@/components/magicui/blur-fade'
import { Github, Linkedin, Mail } from 'lucide-react'

const AboutComponent = () => {
  return (
    <div className='rounded-[10px] border bg-content-background'>
      {/* bg-gradient-to-br from-[#293E6F] to-black */}
      <div className='px-5 pb-5 pt-10 text-foreground md:px-10 '>
        <BlurFade inView delay={0.2}>
          <p className='text-base leading-relaxed tracking-wide md:text-lg'>
            I am a <span className='font-bold'>Frontend Developer</span> located in Jakarta, Indonesia. Currently working in one of the biggest banks in Indonesia to build a
            product that meets the user need. I enjoy creating things that come to live on the internet. Interested in web development and curiosity about technology in the{' '}
            <span className='font-bold'>web development </span>
            field. Have experience in building applications to solve a problem and can meet product needs.
          </p>
        </BlurFade>
        <BlurFade inView delay={0.4}>
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
              {/* <span className='cursor-pointer rounded-full bg-gray-400 bg-opacity-40 p-3 transition-opacity duration-200 hover:bg-opacity-50'>
                <Dribbble size={20} />
              </span> */}
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

export default AboutComponent
