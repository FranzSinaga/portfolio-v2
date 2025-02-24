'use client'

import { useState } from 'react'
import { Dialog } from '@/components/draft-ui/dialog'

const Playground = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='mx-auto mt-5 max-w-[1200px]'>
      <h3 className='font-mono'>Playgrounds</h3>
      <button onClick={() => setOpen(true)} className='bg-primary text-primary-foreground hover:bg-primary/80 rounded-sm transition-colors hover:cursor-pointer'>
        Open Dialog
      </button>
      <Dialog open={open} onOpenChange={e => setOpen(e)} />
    </div>
  )
}

export default Playground
