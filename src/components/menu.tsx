'use client'
import React from 'react'
import Link from 'next/link'
import { MENUS_LIST, THEMES_LIST, cn } from '@/lib'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePathname } from 'next/navigation'

import { Theme } from '@/types/theme.type'
import LucideIcon from './lucide-icon'

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
        <div className={cn('mt-4 p-2 text-2xl font-extrabold text-foreground')}>_franz</div>
        <div className='font-base text-sm'>
          <ul className='flex flex-col gap-y-2'>
            {MENUS_LIST.map(e => {
              const isActive = currentPath === e.link
              return (
                <Link key={e.name} href={e.link}>
                  <li
                    onClick={() => onClick && onClick()}
                    className={cn(
                      isActive ? 'border font-bold text-foreground' : 'text-muted-foreground hover:bg-muted',
                      'flex cursor-pointer items-center gap-x-2 rounded-md py-2 pl-3'
                    )}
                  >
                    <LucideIcon name={e?.icon ?? 'Menu'} size={16} />
                    <p>{e.name}</p>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>

      <div>
        {selectedTheme && (
          <Select value={selectedTheme} onValueChange={(value: Theme) => setSelectedTheme(value)}>
            <SelectTrigger className='w-full'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className='font-mono'>Select Theme</SelectLabel>
                {THEMES_LIST.map(e => (
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
