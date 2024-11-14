'use client'
import * as React from 'react'

import { ThemeList } from '@/lib'
import { useTheme } from '@/hooks/use-theme'

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import LucideIcon from '@/components/lucide-icon'

export function CommandMenu() {
  const { setSelectedTheme } = useTheme()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
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
          <CommandGroup heading='Settings'>
            {ThemeList.map(e => (
              <CommandItem
                onSelect={() => {
                  setSelectedTheme(e.value)
                  setOpen(false)
                }}
              >
                <LucideIcon name={e.icon} size={18} />
                <span>{e.name} Mode</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
