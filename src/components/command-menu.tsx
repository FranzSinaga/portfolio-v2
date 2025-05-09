'use client'
import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'

import { useCommandMenuContext } from '@/context/command-menu-context'
import { useTheme, useHandleOpen } from '@/hooks'
import { MENUS_LIST, THEMES_LIST } from '@/lib'

import LucideIcon from './lucide-icon'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'

export const CommandMenu = () => {
  const { push } = useRouter()

  const { isOpen: open, setIsOpen: setOpen } = useCommandMenuContext()

  const { isOpen, setIsOpen, ref } = useHandleOpen<HTMLDivElement>(open)
  const { setSelectedTheme, selectedTheme } = useTheme()
  const listRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => setOpen(isOpen), [isOpen])
  React.useEffect(() => {
    setIsOpen(open)
    setTimeout(() => {
      if (open && listRef.current) {
        listRef.current.scrollTop = 0
      }
    }, 100)
  }, [open])
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
      <AnimatePresence initial={false}>
        {open && isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            key='box'
            className='text-foreground fixed top-0 right-0 z-50 h-dvh w-dvw backdrop-blur-xs'
          >
            <div className='flex h-full items-center justify-center'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  duration: 0.3,
                  scale: { visualDuration: 0.3 }
                }}
                ref={ref}
                className='border-foreground bg-content-background w-lg rounded-md border py-2'
              >
                <Command label='Command Menu' loop shouldFilter>
                  <div className='flex items-center justify-between border-b'>
                    <div className='flex items-center justify-center gap-x-2 px-4 pb-2'>
                      <LucideIcon name='Search' size={15} />
                      <CommandInput placeholder='Search...' />
                    </div>
                    <LucideIcon name='X' size={25} className='text-foreground hover:bg-accent mr-2 rounded-sm p-1 hover:cursor-pointer' onClick={() => setOpen(false)} />
                  </div>

                  {/* Content */}
                  <CommandList ref={listRef}>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading='Menus'>
                      {MENUS_LIST.map(e => {
                        return (
                          <CommandItem
                            key={e.link}
                            value={e.name}
                            onSelect={() => {
                              push(e.link)
                              setOpen(false)
                            }}
                          >
                            <div className='flex items-center gap-2 px-2 py-1'>
                              <LucideIcon name={e?.icon ?? 'Menu'} size={20} />
                              <p className='text-sm'>{e.name}</p>
                            </div>
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
                              value={e.value}
                              onSelect={() => {
                                setSelectedTheme(e.value)
                                setOpen(false)
                              }}
                            >
                              <div className='flex items-center gap-2 px-2 py-1'>
                                <LucideIcon name={e?.icon ?? 'Menu'} size={20} />
                                <p className='text-sm'>{e.name}</p>
                              </div>
                            </CommandItem>
                          )
                        }
                      })}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
