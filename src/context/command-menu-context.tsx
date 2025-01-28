'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type CommandMenuContextType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const CommandMenuContext = createContext<CommandMenuContextType | undefined>(undefined)

export const CommandMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <CommandMenuContext.Provider value={{ isOpen, setIsOpen }}>{children}</CommandMenuContext.Provider>
}

export const useCommandMenuContext = (): CommandMenuContextType => {
  const context = useContext(CommandMenuContext)
  if (!context) {
    throw new Error('useCommandMenuContext must be used within a CommandMenuProvider')
  }
  return context
}
