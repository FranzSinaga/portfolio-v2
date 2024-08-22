import BlurFade from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className='-mx-5 flex flex-col items-center border-t'>
      <div className='mb-10 pt-16 text-center leading-tight text-foreground md:mx-auto md:w-[55rem]'>
        <BlurFade inView delay={0.2}>
          <p className='text-5xl font-bold md:text-[5em]'>Get to know me!</p>
        </BlurFade>
        <BlurFade className='mt-5' inView delay={0.4}>
          <p className='text-2xl font-semibold md:text-[2em]'>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          {/* <button className='text-md mt-5 rounded-full bg-white px-10 py-2 text-black'></button> */}
        </BlurFade>
        <BlurFade inView delay={0.6}>
          <Button variant={'outline'} className='mt-5 space-x-1 bg-content-background'>
            Say hello <span className='animate-aurora'>👋</span>
          </Button>
        </BlurFade>
      </div>
    </div>
  )
}

export default Footer
