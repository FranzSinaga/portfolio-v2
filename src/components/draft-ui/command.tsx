import React from 'react'
import { cn } from '@/lib'
import { Command as CommandPrimitive } from 'cmdk'

const Command = React.forwardRef<React.ElementRef<typeof CommandPrimitive>, React.ComponentPropsWithoutRef<typeof CommandPrimitive>>(({ ...props }, ref) => (
  <CommandPrimitive ref={ref} {...props} />
))
Command.displayName = CommandPrimitive.displayName

// CommandPrimitive
const CommandItem = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        "data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
)
CommandItem.displayName = 'CommandItem'

const CommandGroup = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase',
        className
      )}
      {...props}
    />
  )
)
CommandGroup.displayName = 'CommandGroup'

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>(
  ({ className, ...props }, ref) => <CommandPrimitive.Empty ref={ref} className={cn('py-20 text-center', className)} {...props} />
)
CommandEmpty.displayName = 'CommandEmpty'

const CommandList = React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.List ref={ref} className={cn('custom-scrollbar max-h-[300px] overflow-x-hidden overflow-y-auto px-2 font-mono', className)} {...props} />
  )
)
CommandList.displayName = 'CommandList'

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Input
      ref={ref}
      className={cn('placeholder:text-foreground/50 w-full border-none bg-transparent font-mono text-base outline-none', className)}
      autoFocus
      placeholder='Search...'
      {...props}
    />
  )
)
CommandInput.displayName = 'CommandInput'

export { Command, CommandInput, CommandGroup, CommandList, CommandEmpty, CommandItem }
