import { useCommandMenuContext } from '@/context/command-menu-context'

import LucideIcon from '../lucide-icon'
import ShowDateTime from './date-time'
import { getOS } from '@/lib'

const BottomSection = () => {
  const { setIsOpen } = useCommandMenuContext()

  return (
    <div className='relative hidden w-full lg:block'>
      <div className='bg-content-background text-foreground border-foreground/50 w-full border-t-2 px-5 py-0.5 font-mono lg:absolute'>
        <div className='mx-auto mt-1 flex max-w-[1200px] flex-col-reverse items-center justify-between gap-y-1 lg:flex-row'>
          <div className='flex items-center justify-center gap-x-1.5'>
            <span className='relative flex h-3 w-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
              <span className='relative inline-flex h-3 w-3 rounded-full bg-green-500'></span>
            </span>
            <p className='text-xs font-semibold'>All systems normal</p>
          </div>

          <div className='flex items-center justify-between gap-2'>
            {/* Command Menu */}
            <div className='hover:bg-accent flex cursor-pointer items-center gap-4 rounded-md border px-2 py-1' onClick={() => setIsOpen(true)}>
              <span className='flex items-center gap-x-1'>
                <LucideIcon size={12} name='Search' />
                <p className='text-xs font-semibold'>Search</p>
              </span>
              <span className='flex items-center gap-x-1 font-extralight'>
                <Shortcut />
                <p className='text-xs'>+</p>
                <p className='text-xs'>K</p>
              </span>
            </div>

            <a target='_blank' href='https://github.com/FranzSinaga/portfolio-v2' className='hover:bg-accent flex cursor-pointer items-center gap-1.5 rounded-md border px-2 py-1'>
              <LucideIcon size={12} name='GitBranch' />
              <p className='text-xs font-semibold'>master</p>
            </a>
            <div className='border-l pl-2'>
              <ShowDateTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Shortcut = () => {
  const os = getOS()

  if (os === 'MacOS') return <LucideIcon size={12} name='Command' />
  return <p className='text-xs'>Ctrl</p>
}

export default BottomSection
