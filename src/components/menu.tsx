'use client'
import Link from 'next/link'
import { cn } from '@/lib'
import { capitalizeFirstLetter } from '@/lib'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MoonStar, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Theme } from '@/types/theme.type'

const ThemeList: { name: Theme; icon: React.ReactElement }[] = [
  { name: 'dark', icon: <MoonStar size={20} /> },
  { name: 'light', icon: <Sun size={20} /> }
]

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
                <li
                  onClick={() => isActive && onClick && onClick()}
                  key={e.name}
                  className={cn(isActive ? 'border bg-muted font-bold text-blue-600' : 'text-foreground', 'cursor-pointer rounded-md py-2 pl-3')}
                >
                  <Link href={e.link}>{e.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div>
        {selectedTheme && (
          <Select
            value={selectedTheme}
            onValueChange={(e: Theme) => {
              var body = document.body
              setSelectedTheme(e)
              body.className = ''
              body.classList.add(e, 'bg-background', 'transition-colors')
            }}
          >
            <SelectTrigger className='w-full'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className='font-mono'>Select Theme</SelectLabel>
                {ThemeList.map(e => (
                  <SelectItem key={e.name} value={e.name} className='font-mono'>
                    <span className='flex items-center justify-between'>
                      {e.icon}
                      <span className='pl-2 text-xs'>{capitalizeFirstLetter(e.name)}</span>
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
