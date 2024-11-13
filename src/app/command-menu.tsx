'use client'

import * as React from 'react'
import { MoonStar, Sun } from 'lucide-react'

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { useTheme } from '@/hooks/use-theme'

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
      {/* <p className='text-sm text-muted-foreground'>
        Press{' '}
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
          <span className='text-xs'>⌘</span>k
        </kbd>
      </p> */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList className='custom-scrollbar'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem
              onSelect={() => {
                setSelectedTheme('light')
                setOpen(false)
              }}
            >
              <Sun />
              <span>Light Mode</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setSelectedTheme('dark')
                setOpen(false)
              }}
            >
              <MoonStar />
              <span>Dark Mode</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
