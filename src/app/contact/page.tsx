import { BorderBeam } from '@/components/magicui/border-beam'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className='relative -mx-10 flex h-full flex-col justify-center gap-y-2 '>
      <div className='flex w-full flex-col items-center gap-y-3 text-black dark:text-white'>
        <div className='w-[550px] space-y-2 p-4'>
          <div className='space-y-6 text-left'>
            <h1 className='text-4xl font-bold'>I would love to hear from you!</h1>
            <h2 className='text-xl'>Whether you have a question, want to inquire about our services, or simply want to say hello, feel free to reach out to us.</h2>
          </div>

          <div className='space-y-4'>
            <div className='flex gap-x-2'>
              <Input placeholder='Name' />
              <Input placeholder='Email' />
            </div>
            <Textarea placeholder='Type your message here...' className='resize-none' rows={6} />
          </div>
        </div>
      </div>
    </div>
  )
}
