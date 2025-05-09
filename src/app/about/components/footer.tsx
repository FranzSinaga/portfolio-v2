import BlurFade from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <div className='-mx-5 flex flex-col items-center'>
      <div className='text-foreground mx-2 mb-10 max-w-[40rem] pt-16 text-center leading-tight md:mx-auto lg:max-w-[55rem]'>
        <BlurFade inView delay={0.2}>
          <h1 className='font-bold'>Get to know me!</h1>
        </BlurFade>
        <BlurFade className='mt-5' inView delay={0.4}>
          <h4 className='font-semibold'>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h4>
        </BlurFade>
        <BlurFade inView delay={0.6}>
          <Button variant={'outline'} className='bg-content-background mt-5 space-x-1'>
            <a href='mailto:sinagafranz12@gmail.com' className='font-mono text-sm'>
              Say Hello 👋
            </a>
          </Button>
        </BlurFade>
      </div>
    </div>
  )
}
