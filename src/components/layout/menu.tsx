'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { MENUS_LIST, cn } from '@/lib'

import { Theme } from '@/types/theme.type'

interface Props {
  selectedTheme: string
  setSelectedTheme: (value: Theme) => void
  onClick?: () => void
}

const MenuList = ({ selectedTheme, setSelectedTheme, onClick }: Props) => {
  const currentPath = usePathname()
  const isDark = selectedTheme === 'dark'
  return (
    <div className='flex h-[calc(100vh-2.5rem)] w-full flex-col justify-between'>
      <div className='space-y-10'>
        <div className='mt-4 flex w-full justify-center'>
          <div className={cn('text-foreground mt-4 p-2 text-2xl font-extrabold tracking-widest')}>_franz</div>
        </div>
        <div className='font-base text-sm'>
          <ul className='flex flex-col gap-y-2'>
            {MENUS_LIST.map(e => {
              const Icon = e.icon
              const isActive = e.link === '/' ? currentPath === '/' : currentPath.startsWith(e.link)
              return (
                <Link key={e.name} href={e.link}>
                  <li
                    onClick={() => onClick && onClick()}
                    className={cn(
                      isActive ? 'text-foreground border font-bold' : 'text-muted-foreground hover:bg-muted',
                      'flex cursor-pointer items-center gap-x-2 rounded-md py-2 pl-3'
                    )}
                  >
                    {Icon && <Icon size={20} />}
                    <p>{e.name}</p>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>

      {selectedTheme && (
        <button
          type='button'
          role='switch'
          aria-checked={isDark}
          aria-label='Dark mode'
          onClick={() => setSelectedTheme(isDark ? 'light' : 'dark')}
          className='bg-muted relative flex h-8 w-16 shrink-0 cursor-pointer items-center justify-between self-start rounded-full border px-[7px]'
        >
          <span className={cn('bg-foreground absolute top-[3px] left-[3px] size-6 rounded-full transition-transform motion-reduce:transition-none', isDark && 'translate-x-8')} />
          <IconSun size={16} className={cn('relative transition-colors', isDark ? 'text-muted-foreground' : 'text-background')} />
          <IconMoonStars size={16} className={cn('relative transition-colors', isDark ? 'text-background' : 'text-muted-foreground')} />
        </button>
      )}
    </div>
  )
}

export default MenuList
