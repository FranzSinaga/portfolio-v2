'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'

import { MENUS_LIST, THEMES_LIST } from '@/lib'
import { useTheme } from '@/hooks/use-theme'

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import LucideIcon from '@/components/lucide-icon'
import { useCommandMenuContext } from '@/context/command-menu-context'

const CommandMenu = () => {
  const { push } = useRouter()
  const { setSelectedTheme, selectedTheme } = useTheme()
  const { isOpen: open, setIsOpen: setOpen } = useCommandMenuContext()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        if (!open) setOpen(true)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList className='custom-scrollbar'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />
          <CommandGroup heading='Menus'>
            {MENUS_LIST.map(e => {
              return (
                <CommandItem
                  key={e.link}
                  onSelect={() => {
                    console.log(e.link)
                    push(e.link)
                    setOpen(false)
                  }}
                >
                  <LucideIcon name={e?.icon ?? 'Menu'} size={16} />
                  {e.name}
                </CommandItem>
              )
            })}
          </CommandGroup>
          <CommandGroup heading='Themes'>
            {THEMES_LIST.map(e => {
              if (e.value !== selectedTheme) {
                return (
                  <CommandItem
                    key={e.value}
                    onSelect={() => {
                      setSelectedTheme(e.value)
                      setOpen(false)
                    }}
                  >
                    <LucideIcon name={e.icon} size={18} />
                    <span>{e.name} Mode</span>
                  </CommandItem>
                )
              }
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu
