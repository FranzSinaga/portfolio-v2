'use client'
import { Dialog } from '@/components/ui/dialog'
import { useState } from 'react'

export const DialogDetailProjects = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>open</button>
      <Dialog open={open} onOpenChange={e => setOpen(e)} />
    </>
  )
}
