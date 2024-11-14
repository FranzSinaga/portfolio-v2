'use client'
import Link from 'next/link'
import { ThemeList, cn } from '@/lib'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePathname } from 'next/navigation'

import { Theme } from '@/types/theme.type'
import LucideIcon from './lucide-icon'

const menus = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '/about',
    name: 'About'
  },
  {
    link: '/projects',
    name: 'Projects'
  },
  {
    link: '/style-guide',
    name: 'Style Guide'
  }
  // {
  //   link: '/contact',
  //   name: 'Contact'
  // }
]
interface Props {
  selectedTheme: string
  setSelectedTheme: (value: Theme) => void
  onClick?: () => void
}

export const MenuList: React.FC<Props> = ({ selectedTheme, setSelectedTheme, onClick }) => {
  const currentPath = usePathname()
  return (
    <div className='flex h-[calc(100vh-2.5rem)] w-full flex-col justify-between'>
      <div className='space-y-10'>
        <div className={cn('mt-6 text-2xl font-extrabold text-foreground')}>_franz</div>
        <div className='font-base'>
          <ul className='flex flex-col gap-y-2'>
            {menus.map(e => {
              const isActive = currentPath === e.link
              return (
                <Link key={e.name} href={e.link}>
                  <li
                    onClick={() => onClick && onClick()}
                    className={cn(isActive ? 'border font-bold text-foreground' : 'text-muted-foreground hover:bg-muted', 'cursor-pointer rounded-md py-2 pl-3')}
                  >
                    {e.name}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>

      <div>
        {selectedTheme && (
          <Select value={selectedTheme} onValueChange={(e: Theme) => setSelectedTheme(e)}>
            <SelectTrigger className='w-full'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className='font-mono'>Select Theme</SelectLabel>
                {ThemeList.map(e => (
                  <SelectItem key={e.value} value={e.value} className='font-mono'>
                    <span className='flex items-center justify-between'>
                      <LucideIcon name={e.icon} size={18} />
                      <span className='pl-2 text-xs'>{e.name}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  )
}
