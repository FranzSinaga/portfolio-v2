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
  },
  {
    link: '/contact',
    name: 'Contact'
  }
]
interface Props {
  selectedTheme: string
  setSelectedTheme: (value: Theme) => void
}

export const MenuList: React.FC<Props> = ({ selectedTheme, setSelectedTheme }) => {
  const currentPath = usePathname()
  return (
    <div className='flex h-[calc(100vh-2.5rem)] flex-col justify-between'>
      <div className={cn('mt-8 text-2xl font-extrabold text-foreground')}>_franz</div>
      <div className='font-base'>
        <ul className='flex flex-col gap-y-5'>
          {menus.map(e => (
            <li key={e.name} className={cn(currentPath === e.link ? 'font-bold text-blue-600' : 'text-foreground', 'cursor-pointer')}>
              <Link href={e.link}>{e.name}</Link>
            </li>
          ))}
        </ul>
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
