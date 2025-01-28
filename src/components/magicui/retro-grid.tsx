import { cn } from '@/lib/utils'

export default function RetroGrid({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:100px]', className)}>
      {/* Grid */}
      <div className='absolute inset-0 [transform:rotateX(0deg)]'>
        <div
          className={cn(
            'animate-grid',

            '[inset:0%_0px] [margin-left:-50%] [height:400vh] [width:700vw] [transform-origin:100%_0_0] [background-size:92px_92px] [background-repeat:repeat]',

            // Light Styles
            '[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]',

            // Dark styles
            'dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]'
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className='absolute inset-0 bg-linear-to-t from-white to-transparent to-90% dark:from-black' />
    </div>
  )
}
