import { Button } from '@/components/ui/button'
import { RiTailwindCssFill } from 'react-icons/ri'

export default function ComponentUi() {
  return (
    <div className='space-y-4 font-mono 2xl:font-serif'>
      <div className='space-y-2'>
        <p className='text-base'>Button Components</p>
        <div className='flex gap-x-2'>
          <Button variant={'default'}>Default</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'accent'}>Accent</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'outline'}>Outline</Button>
        </div>
      </div>
      <div className='space-y-2'>
        <div className='leading-tight'>
          <p className='text-base'>Custom Background Colors</p>
          <p className='text-xs'>Exclude color in tailwind css</p>
        </div>
        <div className='flex flex-wrap gap-4'>
          <div className='flex h-24 w-24 items-center justify-center border bg-background text-xs text-foreground ring-4'>background</div>
          <div className='flex h-24 w-24 items-center justify-center border bg-foreground text-xs text-background ring-4'>foreground</div>
          <div className='flex h-24 w-24 items-center justify-center border bg-primary text-xs text-primary-foreground ring-4'>primary</div>
          <div className='flex h-24 w-24 items-center justify-center border bg-secondary text-xs text-secondary-foreground ring-4'>secondary</div>
          <div className='flex h-24 w-24 items-center justify-center border bg-accent text-xs text-accent-foreground ring-4'>primary</div>
          <div className='flex h-24 w-24 items-center justify-center border bg-destructive text-xs text-destructive-foreground ring-4'>destructive</div>
          <div className='flex h-24 w-24 items-center justify-center border bg-muted text-xs text-muted-foreground ring-4'>muted</div>
          <div className='flex h-24 w-24 items-center justify-center border bg-card text-xs text-card-foreground ring-4'>card</div>
          <div className='flex h-24 w-24 items-center justify-center border bg-popover text-xs text-popover-foreground ring-4'>popover</div>
        </div>
      </div>
      <div>
        <p className='text-base'>Other Color</p>
        <a href='https://tailwindcss.com/docs/customizing-colors' className='flex items-center gap-2 text-sm hover:underline' target='_blank'>
          <RiTailwindCssFill />
          Go to Tailwind Colors {'->'}
        </a>
      </div>
    </div>
  )
}
