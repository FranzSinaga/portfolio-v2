import AnimatedBgHero from '@/components/animated-bg-color'
import BlurFade from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

export default function Contact() {
  return (
    <AnimatedBgHero className='-mx-10'>
      <div className='flex h-full flex-col justify-center gap-y-2 '>
        <div className='flex w-full flex-col items-center gap-y-3'>
          <div className='space-y-2 p-4 md:w-[550px]'>
            <div className='space-y-4 text-left'>
              <BlurFade>
                <h1 className='text-4xl font-bold'>I would love to hear from you!</h1>
              </BlurFade>
              <BlurFade delay={0.2}>
                <h2 className='text-xl'>Whether you have a question, want to inquire about our services, or simply want to say hello, feel free to reach out to us.</h2>
              </BlurFade>
            </div>

            <BlurFade delay={0.4}>
              <div className='space-y-4'>
                <div className='flex gap-x-2'>
                  <Input placeholder='Name' />
                  <Input placeholder='Email' />
                </div>
                <Textarea placeholder='Type your message here...' className='resize-none' rows={6} />
              </div>
            </BlurFade>
            <BlurFade delay={0.6} className='flex justify-end w-full'>
              <Button variant={'outline'} className='space-x-1'>
                <Send size={15} /> <p>Send Message</p>
              </Button>
            </BlurFade>
          </div>
        </div>
      </div>
    </AnimatedBgHero>
  )
}
