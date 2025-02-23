'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import LucideIcon from '@/components/lucide-icon'
const Playground = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='mx-auto mt-5 max-w-[1200px]'>
      <h3 className='font-mono'>Playgrounds</h3>
      <button onClick={() => setOpen(true)} className='bg-primary text-primary-foreground hover:bg-primary/80 rounded-sm transition-colors hover:cursor-pointer'>
        Open Dialog
      </button>
      <Dialog open={open} close={() => setOpen(false)} />
    </div>
  )
}

interface DialogProps {
  open: boolean
  close: () => void
}

export const Dialog = ({ open, close }: DialogProps) => {
  return (
    <>
      <AnimatePresence initial={false}>
        {open ? (
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
                className='border-foreground bg-content-background max-w-3xl rounded-md border py-2'
              >
                {/* Title */}
                <div className='flex items-center justify-between border-b px-4 pb-2'>
                  <h4>Title</h4>
                  <LucideIcon name='X' size={25} className='text-foreground hover:bg-accent rounded-sm p-1 hover:cursor-pointer' onClick={close} />
                </div>

                {/* Content */}
                <div className='custom-scrollbar max-h-[60dvh] overflow-auto p-4'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tempus augue. In eu enim fringilla augue luctus pretium vel vitae sapien. Mauris suscipit
                    risus congue sodales placerat. Donec lacinia lectus nec libero aliquet, et imperdiet ipsum lacinia. Nunc fermentum finibus lacinia. Aenean mattis nibh a lacinia
                    cursus. Nulla id lacus volutpat, vulputate diam a, tempus ipsum. Morbi efficitur a orci ac vestibulum. In hac habitasse platea dictumst. Duis nec convallis dui.
                    Aenean consectetur massa sed nulla ornare mollis. Sed ac eros molestie, iaculis lorem ut, mattis mi. Etiam blandit diam iaculis mi lacinia laoreet. Aliquam
                    tincidunt, lacus non molestie finibus, libero eros congue sapien, sit amet elementum dui magna vel urna. Aenean nunc nibh, mollis pretium ornare sit amet,
                    sodales id tellus. Donec aliquam pharetra vehicula. Maecenas efficitur elit nec ante vulputate vehicula. Morbi sodales efficitur felis ac ornare. Vestibulum non
                    finibus arcu, eu fringilla ligula. Pellentesque faucibus, augue et placerat accumsan, mauris libero tristique tortor, ut molestie diam nisi ac nibh. Morbi
                    feugiat volutpat est, vel tempor nibh suscipit sit amet. Vestibulum faucibus arcu nec varius congue. Integer viverra porta elit. Maecenas nunc nisi, pretium
                    euismod quam a, ultrices elementum nunc. Etiam vitae pulvinar neque. Morbi blandit sed neque eu auctor. Ut aliquet lacinia arcu, porta pretium velit congue non.
                    Proin dictum dictum malesuada. Ut mattis pharetra felis, in vulputate diam sollicitudin sed. Suspendisse potenti. Vivamus porttitor placerat nisi, at elementum
                    nulla lobortis ac. Etiam non magna maximus, egestas nisi vel, molestie metus. Maecenas sapien libero, pharetra sed dapibus quis, ullamcorper eu dolor. Morbi non
                    vestibulum justo, vitae ullamcorper ipsum. Morbi leo metus, pharetra vitae quam vitae, varius tincidunt purus. Phasellus placerat quam in massa fermentum
                    tristique. Nulla consequat vulputate bibendum. Donec pellentesque sit amet neque eleifend placerat. Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Donec non ullamcorper nulla. Nam ut volutpat arcu, non hendrerit ligula. Nullam non sapien quis lectus consectetur molestie
                    ac nec tortor. Phasellus mattis finibus consequat. Donec quis tincidunt felis, et sagittis diam. Nulla varius ex laoreet nisi accumsan, at euismod neque
                    suscipit. Nam laoreet magna ac nisi sodales viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus elementum porttitor. Sed
                    condimentum diam vel gravida dapibus. Vivamus lacinia efficitur purus, sit amet semper est. Donec nec nulla sit amet ante ultrices congue ac at nibh. Nulla quis
                    consequat purus, sed scelerisque leo. Morbi lacinia erat et porttitor malesuada. Maecenas quis diam volutpat, vehicula purus in, tempus mauris. Pellentesque ac
                    leo in nisl tincidunt sollicitudin.
                  </p>
                </div>

                {/* Footer */}
                <div className='flex items-center justify-end border-t px-4 pt-2'>
                  <button className='bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer rounded-sm p-2 text-sm' onClick={close}>
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

export default Playground
