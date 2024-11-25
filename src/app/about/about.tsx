import LucideIcon from '@/components/lucide-icon'
import BlurFade from '@/components/magicui/blur-fade'

const AboutComponent = () => {
  return (
    <div className='rounded-lg border bg-content-background px-5 pb-5 pt-10 text-foreground md:px-10 '>
      <h1 className='hidden text-4xl'>About</h1>
      <BlurFade inView delay={0.2}>
        <p className='leading-relaxed tracking-wide'>
          I am a <span className='font-bold'>Frontend Developer</span> located in Jakarta, Indonesia. Currently working in one of the biggest banks in Indonesia to build a product
          that meets the user need. I enjoy creating things that come to live on the internet. Interested in web development and curiosity about technology in the{' '}
          <span className='font-bold'>web development </span>
          field. Have experience in building applications to solve a problem and can meet product needs.
        </p>
      </BlurFade>
      <BlurFade inView delay={0.4}>
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
          {/* <span className='cursor-pointer rounded-full bg-gray-400 bg-opacity-40 p-3 transition-opacity duration-200 hover:bg-opacity-50'>
                <Dribbble size={20} />
              </span> */}
        </div>
      </BlurFade>
    </div>
  )
}

export default AboutComponent
