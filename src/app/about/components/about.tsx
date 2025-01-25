import BlurFade from '@/components/magicui/blur-fade'
import SocialList from '@/components/social'

export const AboutMe = () => {
  return (
    <div className='bg-content-background text-foreground rounded-lg border px-5 pt-10 pb-5 md:px-10'>
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
        <SocialList />
      </BlurFade>
    </div>
  )
}
