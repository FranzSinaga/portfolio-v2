'use client'
import Link from 'next/link'
import { cn } from '@/lib'
import { capitalizeFirstLetter } from '@/lib'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MoonStar, Sun } from 'lucide-react'

type ThemeType = 'dark' | 'light'

const Theme = [
  { name: 'dark', icon: <MoonStar size={20} /> },
  { name: 'light', icon: <Sun size={20} /> }
]
interface Props {
  selectedTheme: string
  setSelectedTheme: (value: string) => void
}

export const MenuList: React.FC<Props> = ({ selectedTheme, setSelectedTheme }) => {
  return (
    <div className='flex h-[calc(100vh-2.5rem)] flex-col justify-between'>
      <div className={cn('mt-5 text-2xl font-extrabold text-black dark:text-white')}>_franz</div>
      <div className={'font-bold text-black dark:text-white'}>
        <ul className='flex flex-col gap-y-5'>
          <li className='cursor-pointer'>
            <Link href='/'>Home</Link>
          </li>
          <li className='cursor-pointer'>About_Me</li>
          <li className='cursor-pointer'>Projects</li>
          <li className='cursor-pointer'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        {selectedTheme && (
          <Select
            value={selectedTheme}
            onValueChange={(e: ThemeType) => {
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
                {Theme.map(e => (
                  <SelectItem key={e.name} value={e.name} className='font-mono'>
                    <span className='flex items-center justify-between'>
                      {e.icon}
                      <span className='pl-2'>{capitalizeFirstLetter(e.name)}</span>
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
