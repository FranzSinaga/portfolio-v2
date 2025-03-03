import React from 'react'
import { useHandleOpen, useTheme } from '@/hooks'
import { AnimatePresence, motion } from 'motion/react'

import MenuList from './layout/menu'
import LucideIcon from './lucide-icon'

interface SidebarProps {
  open: boolean
  onOpenChange: (value: boolean) => void
}

export const MobileSidebar = ({ open, onOpenChange }: SidebarProps) => {
  const { isOpen, setIsOpen, ref } = useHandleOpen<HTMLDivElement>(open)

  React.useEffect(() => setIsOpen(open), [open])
  React.useEffect(() => onOpenChange(isOpen), [isOpen])

  const { selectedTheme, setSelectedTheme } = useTheme()
  return (
    <>
      <AnimatePresence mode='wait' initial={false}>
        {open && isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            key='box'
            className='fixed top-0 right-0 z-50 h-dvh w-dvw bg-black/80 backdrop-blur-xs'
          >
            <div className='flex h-full items-center'>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3 }}
                ref={ref}
                className='bg-content-background max-w-[75dvw] rounded-r-lg border py-2 md:max-w-md'
              >
                <div className='custom-scrollbar h-dvh w-[75dvw] p-4 md:w-md'>
                  <div className='relative'>
                    <div className='absolute right-0 cursor-pointer'>
                      <LucideIcon name='X' size={20} />
                    </div>
                  </div>
                  <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} onClick={() => onOpenChange(false)} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
