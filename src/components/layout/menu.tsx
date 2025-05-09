'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENUS_LIST, THEMES_LIST, cn } from '@/lib'

import LucideIcon from '../lucide-icon'
import { Select } from '../ui/select'

import { Theme } from '@/types/theme.type'

interface Props {
  selectedTheme: string
  setSelectedTheme: (value: Theme) => void
  onClick?: () => void
}

const MenuList = ({ selectedTheme, setSelectedTheme, onClick }: Props) => {
  const currentPath = usePathname()
  return (
    <div className='flex h-[calc(100vh-2.5rem)] w-full flex-col justify-between'>
      <div className='space-y-10'>
        <div className='mt-4 flex w-full justify-center'>
          <div className={cn('text-foreground mt-4 p-2 text-2xl font-extrabold tracking-widest')}>_franz</div>
        </div>
        <div className='font-base text-sm'>
          <ul className='flex flex-col gap-y-2'>
            {MENUS_LIST.map(e => {
              const isActive = currentPath === e.link
              return (
                <Link key={e.name} href={e.link}>
                  <li
                    onClick={() => onClick && onClick()}
                    className={cn(
                      isActive ? 'text-foreground border font-bold' : 'text-muted-foreground hover:bg-muted',
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

      {selectedTheme && (
        <Select<Theme>
          value={selectedTheme}
          list={THEMES_LIST.map(e => {
            return {
              value: e.value,
              label: (
                <span className='flex items-center gap-x-2 text-xs'>
                  <LucideIcon name={e.icon} size={18} />
                  {e.name}
                </span>
              )
            }
          })}
          onSelect={(value: Theme) => setSelectedTheme(value)}
        />
      )}
    </div>
  )
}

export default MenuList
