import BlurFade from '@/components/magicui/blur-fade'
import SocialList from '@/components/social'

export const AboutMe = () => {
  return (
    <div className='text-foreground space-y-4 rounded-lg border px-5 py-10 md:p-10'>
      <h1 className='hidden'>About</h1>
      <BlurFade inView delay={0.2}>
        <p className='leading-relaxed tracking-wide'>
          I am a <span className='font-bold'>Frontend Engineer</span> based in Indonesia with over 5 years of experience building scalable, high-performance web applications.
          Experienced in developing modern applications using <span className='font-bold'>React, Vue.js, and TypeScript</span>, with a strong focus on clean architecture,
          maintainability, and user experience.
          <br /> Currently, I work at one of the leading insurance companies in Indonesia, where I develop enterprise-grade web applications and reusable frontend systems.
          Previously, I contributed to digital product development in one of the largest banks in Indonesia. <br />I enjoy turning complex business requirements into intuitive and
          efficient user interfaces, while continuously exploring modern web technologies, frontend architecture, performance optimization, and developer experience.
        </p>
      </BlurFade>
      <BlurFade inView delay={0.4}>
        <SocialList />
      </BlurFade>
    </div>
  )
}
