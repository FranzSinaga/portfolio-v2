import AnimatedBgHero from '@/components/aninated-bg-color'
import BlurFade from '@/components/magicui/blur-fade'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <AnimatedBgHero className='-mx-10'>
      <div className='flex h-full flex-col justify-center gap-y-2 '>
        <div className='flex w-full flex-col items-center gap-y-3 text-black dark:text-white'>
          <div className='space-y-2 p-4 md:w-[550px]'>
            <div className='space-y-6 text-left'>
              <BlurFade>
                <h1 className='text-4xl font-bold'>I would love to hear from you!</h1>
                <h2 className='text-xl'>Whether you have a question, want to inquire about our services, or simply want to say hello, feel free to reach out to us.</h2>
              </BlurFade>
            </div>

            <BlurFade delay={0.25}>
              <div className='space-y-4'>
                <div className='flex gap-x-2'>
                  <Input placeholder='Name' />
                  <Input placeholder='Email' />
                </div>
                <Textarea placeholder='Type your message here...' className='resize-none' rows={6} />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </AnimatedBgHero>
  )
}
