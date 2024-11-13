import { Button } from '@/components/ui/button'
import { cn } from '@/lib'
import { RiTailwindCssFill } from 'react-icons/ri'
import { StyleGuideContainer } from './container'

export default function ComponentUi() {
  const bgColorClassname = 'flex h-24 w-24 items-center justify-center border text-xs ring-4 rounded-md'
  return (
    <div className='mb-4 space-y-4 font-mono'>
      {/* Buttons */}
      <StyleGuideContainer header={<p>Buttons</p>}>
        <div className='flex gap-x-2'>
          <Button variant={'default'}>Default</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'accent'}>Accent</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'outline'}>Outline</Button>
        </div>
      </StyleGuideContainer>

      {/* Background Colors, Border, Ring */}
      <StyleGuideContainer
        header={
          <div className='leading-tight'>
            <p className='text-lg'>Custom Background Colors</p>
            <p className='text-xs font-normal'>Exclude color in tailwind css: </p>
          </div>
        }
      >
        <>
          <div className='flex flex-wrap gap-4'>
            <div className={cn(bgColorClassname, 'bg-background text-foreground')}>background</div>
            <div className={cn(bgColorClassname, 'bg-foreground text-background')}>foreground</div>
            <div className={cn(bgColorClassname, 'bg-primary text-primary-foreground')}>primary</div>
            <div className={cn(bgColorClassname, 'bg-secondary text-secondary-foreground')}>secondary</div>
            <div className={cn(bgColorClassname, 'bg-accent text-accent-foreground')}>primary</div>
            <div className={cn(bgColorClassname, 'bg-destructive text-destructive-foreground')}>destructive</div>
            <div className={cn(bgColorClassname, 'bg-muted text-muted-foreground')}>muted</div>
            <div className={cn(bgColorClassname, 'bg-card text-card-foreground')}>card</div>
            <div className={cn(bgColorClassname, 'bg-popover text-popover-foreground')}>popover</div>
          </div>
          <a href='https://tailwindcss.com/docs/customizing-colors' className='mt-2 flex items-center gap-2 text-sm hover:underline' target='_blank'>
            <RiTailwindCssFill />
            Go to Tailwind Colors {'->'}
          </a>
        </>
      </StyleGuideContainer>

      {/* Fonts */}
      <StyleGuideContainer header={<p>Font Family</p>}>
        <div className='flex w-max gap-x-5'>
          <p className='font-sans text-2xl font-extrabold'>Geist Sans</p>
          <p className='font-mono text-2xl font-extrabold'>Geist Mono</p>
          <p className='font-serif text-2xl font-extrabold'>Cambria</p>
        </div>
      </StyleGuideContainer>

      {/* Font Sizes */}
      <StyleGuideContainer header={<p>Font Sizes</p>}>
        <div className='space-y-3'>
          <div className='flex justify-between border-b py-2 text-xs'>
            <p>text-xs</p>
            <p>12px</p>
          </div>
          <div className='flex justify-between border-b py-2 text-sm'>
            <p>text-sm</p>
            <p>14px</p>
          </div>
          <div className='flex justify-between border-b py-2 text-base'>
            <p>text-base</p>
            <p>16px</p>
          </div>
          <div className='flex justify-between border-b py-2 text-lg'>
            <p>text-lg</p>
            <p>18px</p>
          </div>
          <div className='flex justify-between border-b py-2 text-xl'>
            <p>text-xl</p>
            <p>20px</p>
          </div>
          <div className='flex justify-between border-b py-2 text-2xl'>
            <p>text-2xl</p>
            <p>24px</p>
          </div>
          <div className='flex justify-between border-b py-2 text-3xl'>
            <p>text-3xl</p>
            <p>30px</p>
          </div>
          <div className='flex justify-between border-b py-2 text-4xl'>
            <p>text-4xl</p>
            <p>36px</p>
          </div>
          <div className='flex justify-between text-5xl'>
            <p>text-5xl</p>
            <p>48px</p>
          </div>
        </div>
      </StyleGuideContainer>
    </div>
  )
}
