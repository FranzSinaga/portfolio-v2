'use client'
import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import LucideIcon from '../lucide-icon'
import useHandleOpen from '@/hooks/use-handle-open'
import { MENUS_LIST, THEMES_LIST } from '@/lib'
import { useTheme } from '@/hooks'
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { useCommandMenuContext } from '@/context/command-menu-context'

export const CommandMenu = () => {
  const { push } = useRouter()

  const { isOpen: open, setIsOpen: setOpen } = useCommandMenuContext()

  const { isOpen, setIsOpen, ref } = useHandleOpen<HTMLDivElement>(open)
  const { setSelectedTheme, selectedTheme } = useTheme()

  React.useEffect(() => setIsOpen(open), [open])
  React.useEffect(() => setOpen(isOpen), [isOpen])

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
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.4,
                  scale: { visualDuration: 0.4 }
                }}
                ref={ref}
                className='border-foreground bg-content-background w-lg rounded-md border py-2'
              >
                {/* Title */}
                <Command label='Command Menu'>
                  {/* Search Input */}
                  <div className='flex items-center justify-between border-b'>
                    <div className='flex items-center justify-center gap-x-2 px-4 pb-2'>
                      <LucideIcon name='Search' size={15} />
                      <Command.Input className='placeholder:text-foreground/50 w-full border-none bg-transparent font-mono text-base outline-none' placeholder='Search...' />
                    </div>
                    <LucideIcon name='X' size={25} className='text-foreground hover:bg-accent mr-2 rounded-sm p-1 hover:cursor-pointer' onClick={() => setOpen(false)} />
                  </div>

                  {/* Content */}
                  <div className='custom-scrollbar max-h-[40dvh] overflow-auto'>
                    <Command.List className='mt-3 px-2 font-mono'>
                      <Command.Empty className='py-20 text-center'>No results found.</Command.Empty>

                      <Command.Group>
                        <GroupHeading heading='Menus' />
                        {MENUS_LIST.map(e => {
                          return (
                            <Command.Item
                              key={e.link}
                              onSelect={() => {
                                push(e.link)
                                setOpen(false)
                              }}
                              className='hover:bg-accent rounded-sm py-2 hover:cursor-pointer'
                            >
                              <div className='flex items-center gap-2 px-2 py-1'>
                                <LucideIcon name={e?.icon ?? 'Menu'} size={20} />
                                <p className='text-sm'>{e.name}</p>
                              </div>
                            </Command.Item>
                          )
                        })}
                      </Command.Group>

                      <Command.Group>
                        <GroupHeading heading='Themes' />
                        {THEMES_LIST.map(e => {
                          if (e.value !== selectedTheme) {
                            return (
                              <Command.Item
                                key={e.value}
                                onSelect={() => {
                                  setSelectedTheme(e.value)
                                  setOpen(false)
                                }}
                                className='hover:bg-accent rounded-sm py-2 hover:cursor-pointer'
                              >
                                <div className='flex items-center gap-2 px-2 py-1'>
                                  <LucideIcon name={e?.icon ?? 'Menu'} size={20} />
                                  <p className='text-sm'>{e.name}</p>
                                </div>
                              </Command.Item>
                            )
                          }
                        })}
                      </Command.Group>
                    </Command.List>
                  </div>
                </Command>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

const GroupHeading = ({ heading }: { heading: string }) => {
  return <div className='text-foreground/50 px-2 pb-1 text-xs font-semibold uppercase'>{heading}</div>
}
