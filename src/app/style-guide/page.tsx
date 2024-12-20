import { Button } from '@/components/ui/button'
import { cn } from '@/lib'
import { RiTailwindCssFill } from 'react-icons/ri'
import { StyleGuideContainer } from './container'
import { Timer } from 'lucide-react'

export const metadata = {
  title: 'Franz | Style Guide'
}

export default function ComponentUi() {
  const bgColorClassname = 'flex md:h-24 h-20 md:w-24 items-center justify-center border text-xs ring-4 rounded-md'
  return (
    <div className='mx-auto mb-12 mt-5 max-w-[1200px] space-y-4 font-mono '>
      <div className='grid gap-4 lg:grid-cols-2'>
        {/* Buttons */}
        <StyleGuideContainer header={<h4>Buttons</h4>}>
          <div className='space-y-0.5'>
            <p>Button Types</p>
            <div className='flex flex-wrap gap-2'>
              <Button variant={'default'}>Default/Primary</Button>
              <Button variant={'destructive'}>Destructive</Button>
              <Button variant={'secondary'}>Secondary</Button>
              <Button variant={'accent'}>Accent</Button>
              <Button variant={'ghost'}>Ghost</Button>
              <Button variant={'link'}>Link</Button>
              <Button variant={'outline'}>Outline</Button>
            </div>
            <p>Button Size:</p>
            <div className='flex flex-wrap items-center gap-2'>
              <Button size={'lg'}>Large</Button>
              <Button size={'default'}>Default</Button>
              <Button size={'sm'}>small</Button>
              <Button size={'icon'}>
                <Timer />
              </Button>
            </div>
          </div>
        </StyleGuideContainer>

        {/* Background Colors, Border, Ring */}
        <StyleGuideContainer
          header={
            <div className='leading-tight'>
              <h4>Custom Background Colors</h4>
              <p className='text-xs font-normal'>Exclude color in tailwind css: </p>
            </div>
          }
        >
          <>
            <div className='grid grid-cols-3 flex-wrap gap-4 md:flex'>
              <div className={cn(bgColorClassname, 'bg-background text-foreground')}>background</div>
              <div className={cn(bgColorClassname, 'bg-foreground text-background')}>foreground</div>
              <div className={cn(bgColorClassname, 'bg-primary text-primary-foreground')}>primary</div>
              <div className={cn(bgColorClassname, 'bg-secondary text-secondary-foreground')}>secondary</div>
              <div className={cn(bgColorClassname, 'bg-accent text-accent-foreground')}>accent</div>
              <div className={cn(bgColorClassname, 'bg-destructive text-destructive-foreground')}>destructive</div>
              <div className={cn(bgColorClassname, 'bg-muted text-muted-foreground')}>muted</div>
              <div className={cn(bgColorClassname, 'bg-card text-card-foreground')}>card</div>
              <div className={cn(bgColorClassname, 'bg-popover text-popover-foreground')}>popover</div>
            </div>
            <a href='https://tailwindcss.com/docs/customizing-colors' className='mt-4 flex items-center gap-2 text-sm hover:underline' target='_blank'>
              <RiTailwindCssFill />
              Go to Tailwind Colors {'->'}
            </a>
          </>
        </StyleGuideContainer>
      </div>

      {/* Fonts */}
      <StyleGuideContainer header={<h4>Typeface</h4>}>
        <div className='flex flex-wrap gap-x-5 gap-y-2'>
          <h2 className='font-sans font-extrabold'>Geist Sans</h2>
          <h2 className='font-mono font-extrabold'>Geist Mono</h2>
          <h2 className='font-serif font-extrabold'>Cambria</h2>
        </div>
      </StyleGuideContainer>

      {/* Font Sizes */}
      <div className='grid gap-4 lg:grid-cols-2'>
        <StyleGuideContainer header={<h4>Font Sizes</h4>}>
          <div className='space-y-3'>
            <div className='flex flex-col justify-between border-b py-2 md:flex-row'>
              <h1>Heading 1</h1>
              <h1 className='hidden md:block'>72px</h1>
              <h1 className='block md:hidden'>36px</h1>
            </div>
            <div className='flex flex-col justify-between border-b py-2 md:flex-row'>
              <h2>Heading 2</h2>
              <h2 className='hidden md:block'>36px</h2>
              <h2 className='block md:hidden'>24px</h2>
            </div>
            <div className='flex flex-col justify-between border-b py-2 md:flex-row'>
              <h3>Heading 3</h3>
              <h3 className='hidden md:block'>24px</h3>
              <h3 className='block md:hidden'>20px</h3>
            </div>
            <div className='flex flex-col justify-between border-b py-2 md:flex-row'>
              <h4>Heading 4</h4>
              <h3 className='hidden md:block'>20px</h3>
              <h3 className='block md:hidden'>18px</h3>
            </div>
            <div className='flex flex-col justify-between border-b py-2 md:flex-row'>
              <p>Paragraph Regular</p>
              <p>16px</p>
            </div>
            <div className='flex flex-col justify-between border-b py-2 md:flex-row'>
              <p className='text-sm'>Paragraph small</p>
              <p className='text-sm'>14px</p>
            </div>
            <div className='flex flex-col justify-between border-b py-2 md:flex-row'>
              <p className='text-xs'>Paragraph xs</p>
              <p className='text-xs'>12px</p>
            </div>
            <div className='flex flex-col justify-between py-2 md:flex-row'>
              <p className='text-xxs'>Paragraph xxs</p>
              <p className='text-xxs'>10px</p>
            </div>
          </div>
        </StyleGuideContainer>

        <StyleGuideContainer header={<h4>Font Weights</h4>}>
          <div className='space-y-3'>
            <div className='flex  flex-row justify-between border-b py-2'>
              <h4 className='font-extrabold'>Extrabold</h4>
              <h4 className='font-extrabold'>800</h4>
            </div>
            <div className='flex  flex-row justify-between border-b py-2'>
              <h4 className='font-bold'>Bold</h4>
              <h4 className='font-bold'>700</h4>
            </div>
            <div className='flex flex-row justify-between border-b py-2'>
              <h4 className='font-semibold'>Semibold</h4>
              <h4 className='font-semibold'>600</h4>
            </div>
            <div className='flex flex-row justify-between border-b py-2'>
              <h4 className='font-normal'>Normal</h4>
              <h4 className='font-normal'>400</h4>
            </div>
            <div className='flex flex-row justify-between border-b py-2'>
              <h4 className='font-light'>Light</h4>
              <h4 className='font-light'>300</h4>
            </div>
            <div className='flex flex-row justify-between border-b py-2'>
              <h4 className='font-extralight'>Extralight</h4>
              <h4 className='font-extralight'>200</h4>
            </div>
            <div className='flex flex-row justify-between py-2'>
              <h4 className='font-thin'>Thin</h4>
              <h4 className='font-thin'>100</h4>
            </div>
          </div>
        </StyleGuideContainer>
      </div>
    </div>
  )
}
