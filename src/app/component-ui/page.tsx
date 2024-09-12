import { Button } from '@/components/ui/button'

export default function ComponentUi() {
  return (
    <div className='space-y-4 font-mono'>
      <div className='space-y-2'>
        <p>Button Components</p>
        <div className='flex gap-x-2'>
          <Button variant={'default'}>Default</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'secondary'}>Secondary</Button>
        </div>
      </div>
    </div>
  )
}
