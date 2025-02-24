'use client'
import { AnimatePresence, motion } from 'motion/react'
import LucideIcon from '../lucide-icon'
import useHandleOpen from '@/hooks/use-handle-open'
import { useEffect } from 'react'

interface DialogProps {
  open: boolean
  onOpenChange: (value: boolean) => void
}

export const Dialog = ({ open, onOpenChange }: DialogProps) => {
  const { isOpen, setIsOpen, ref } = useHandleOpen<HTMLDivElement>(open)

  useEffect(() => setIsOpen(open), [open])
  useEffect(() => onOpenChange(isOpen), [isOpen])

  return (
    <>
      <AnimatePresence initial={false}>
        {open && isOpen ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} key='box' className='fixed top-0 right-0 z-50 h-dvh w-dvw backdrop-blur-xs'>
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
                className='border-foreground bg-content-background max-w-2xl rounded-md border py-2'
              >
                {/* Title */}
                <div className='flex w-full items-center justify-between border-b px-4 pb-2'>
                  <div className='flex flex-col -space-y-1'>
                    <h4>Title</h4>
                    <p className='text-foreground/80 text-xs'>Subtitle Here and here</p>
                  </div>
                  <LucideIcon name='X' size={25} className='text-foreground hover:bg-accent rounded-sm p-1 hover:cursor-pointer' onClick={() => onOpenChange(false)} />
                </div>

                {/* Content */}
                <div className='custom-scrollbar max-h-[60dvh] overflow-auto p-4'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tempus augue. In eu enim fringilla augue luctus pretium vel vitae sapien. Mauris suscipit
                    risus congue sodales placerat. Donec lacinia lectus nec libero aliquet, et imperdiet ipsum lacinia. Nunc fermentum finibus lacinia. Aenean mattis nibh a lacinia
                    cursus. Nulla id lacus volutpat, vulputate diam a, tempus ipsum. Morbi efficitur a orci ac vestibulum. In hac habitasse platea dictumst. Duis nec convallis dui.
                    Aenean consectetur massa sed nulla ornare mollis. Sed ac eros molestie, iaculis lorem ut, mattis mi. Etiam blandit diam iaculis mi lacinia laoreet. Aliquam
                    tincidunt, lacus non molestie finibus, libero eros congue sapien, sit amet elementum dui magna vel urna. Aenean nunc nibh, mollis pretium ornare sit amet, Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tempus augue. In eu enim fringilla augue luctus pretium vel vitae sapien. Mauris suscipit risus
                    congue sodales placerat. Donec lacinia lectus nec libero aliquet, et imperdiet ipsum lacinia. Nunc fermentum finibus lacinia. Aenean mattis nibh a lacinia
                    cursus. Nulla id lacus volutpat, vulputate diam a, tempus ipsum. Morbi efficitur a orci ac vestibulum. In hac habitasse platea dictumst. Duis nec convallis dui.
                    Aenean consectetur massa sed nulla ornare mollis. Sed ac eros molestie, iaculis lorem ut, mattis mi. Etiam blandit diam iaculis mi lacinia laoreet. Aliquam
                    tincidunt, lacus non molestie finibus, libero eros congue sapien, sit amet elementum dui magna vel urna. Aenean nunc nibh, mollis pretium ornare sit amet, Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tempus augue. In eu enim fringilla augue luctus pretium vel vitae sapien. Mauris suscipit risus
                    congue sodales placerat. Donec lacinia lectus nec libero aliquet, et imperdiet ipsum lacinia. Nunc fermentum finibus lacinia. Aenean mattis nibh a lacinia
                    cursus. Nulla id lacus volutpat, vulputate diam a, tempus ipsum. Morbi efficitur a orci ac vestibulum. In hac habitasse platea dictumst. Duis nec convallis dui.
                    Aenean consectetur massa sed nulla ornare mollis. Sed ac eros molestie, iaculis lorem ut, mattis mi. Etiam blandit diam iaculis mi lacinia laoreet. Aliquam
                    tincidunt, lacus non molestie finibus, libero eros congue sapien, sit amet elementum dui magna vel urna. Aenean nunc nibh, mollis pretium ornare sit amet,
                  </p>
                </div>

                {/* Footer */}
                <div className='flex items-center justify-end px-4 pt-2'>
                  <button className='bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer rounded-sm p-2 text-sm' onClick={() => onOpenChange(false)}>
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
