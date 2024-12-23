import { useCommandMenuContext } from '@/context/command-menu-context'
import LucideIcon from './lucide-icon'
import { DateTime } from './date-time'

export const BottomSection = () => {
  const { setIsOpen } = useCommandMenuContext()

  return (
    <div className='relative w-full'>
      <div className='w-full border-t-2 bg-content-background px-5 py-0.5 font-mono text-foreground lg:absolute'>
        <div className='mx-auto flex max-w-[1200px] flex-col-reverse justify-between gap-y-1 lg:flex-row'>
          <div className='flex items-center justify-center gap-x-1.5'>
            <span className='relative flex h-3 w-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
              <span className='relative inline-flex h-3 w-3 rounded-full bg-green-500'></span>
            </span>
            <p className='text-xs font-semibold'>All systems normal</p>
          </div>

          <div className='flex items-center justify-between gap-2'>
            {/* Command Menu */}
            <div className='flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 hover:bg-muted' onClick={() => setIsOpen(true)}>
              <p className='text-xs font-semibold'>Command menu</p>
              <span className='rounded-md border border-dashed p-1'>
                <LucideIcon size={12} name='Command' />
              </span>
              <p className='flex items-center justify-center rounded-md border border-dashed px-1.5 py-0.5 text-xs'>K</p>
            </div>

            <a target='_blank' href='https://github.com/FranzSinaga/portfolio-v2' className='flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 hover:bg-muted'>
              <LucideIcon size={16} name='GitBranch' />
              <p className='text-xs font-semibold'>master</p>
            </a>
            <div className='border-l pl-2'>
              <DateTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
