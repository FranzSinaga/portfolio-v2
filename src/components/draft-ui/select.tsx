'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib'

import LucideIcon from '../lucide-icon'
import useHandleOpen from '@/hooks/use-handle-open'

interface CustomSelectsProps<TData> {
  value: string
  list: {
    value: TData
    label: string | React.ReactNode
  }[]
  onSelect: (value: TData) => void
  disabled?: boolean
}

export const CustomsSelects = <TData,>({ value, list, onSelect, disabled }: CustomSelectsProps<TData>) => {
  const [position, setPosition] = useState('bottom')
  const { isOpen: open, setIsOpen: setOpen, ref } = useHandleOpen<HTMLDivElement>()

  useEffect(() => {
    if (open && ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const spaceAbove = rect.top

      // If not enough space below, open upwards
      if (spaceBelow < 150 && spaceAbove > spaceBelow) {
        setPosition('top')
      } else {
        setPosition('bottom')
      }
    }
  }, [open])

  const selectedArr = list.filter(e => e.value === value)

  return (
    <div className='w-full font-mono' ref={ref}>
      {/* Value Field */}
      <div
        onClick={() => !disabled && setOpen(!open)}
        className={cn(
          'border-foreground text-foreground flex items-center justify-between rounded-sm border p-0.5 px-3',
          disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
        )}
      >
        <div className='py-1'>{selectedArr.length > 0 ? selectedArr[0].label : '-'}</div>
        <span>
          <LucideIcon name={'ChevronDown'} size={15} className={cn('font-thin transition', open && 'rotate-180')} />
        </span>
      </div>

      <div className='relative'>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              key='box'
              className={`border-foreground absolute ${position === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-10'} bg-content-background text-foreground left-0 w-full rounded-sm border p-2 shadow-lg`}
            >
              <ol className='space-y-0.5'>
                {list.map((e, idx) => (
                  <li
                    key={idx}
                    className='hover:bg-muted cursor-pointer rounded-sm p-1 font-mono text-sm'
                    onClick={() => {
                      onSelect(e.value)
                      setOpen(false)
                    }}
                  >
                    {e.label}
                  </li>
                ))}
              </ol>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}
