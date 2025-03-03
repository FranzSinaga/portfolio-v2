import React from 'react'
import { cn } from '@/lib'
import { Command as CommandPrimitive } from 'cmdk'

type CommandProps = React.ComponentPropsWithRef<typeof CommandPrimitive>
const Command: React.FC<CommandProps> = ({ ref, ...props }) => <CommandPrimitive ref={ref} {...props} />
Command.displayName = CommandPrimitive.displayName

type CommandItemProps = React.ComponentPropsWithRef<typeof CommandPrimitive.Item>
const CommandItem: React.FC<CommandItemProps> = ({ className, ref, ...props }) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
)
CommandItem.displayName = 'CommandItem'

type CommandGroupProps = React.ComponentPropsWithRef<typeof CommandPrimitive.Group>
const CommandGroup: React.FC<CommandGroupProps> = ({ className, ref, ...props }) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase',
      className
    )}
    {...props}
  />
)
CommandGroup.displayName = 'CommandGroup'

type CommandEmptyProps = React.ComponentPropsWithRef<typeof CommandPrimitive.Empty>
const CommandEmpty: React.FC<CommandEmptyProps> = ({ className, ref, ...props }) => <CommandPrimitive.Empty ref={ref} className={cn('py-20 text-center', className)} {...props} />
CommandEmpty.displayName = 'CommandEmpty'

type CommandListProps = React.ComponentPropsWithRef<typeof CommandPrimitive.List>
const CommandList: React.FC<CommandListProps> = ({ className, ref, ...props }) => (
  <CommandPrimitive.List ref={ref} className={cn('custom-scrollbar max-h-[300px] overflow-x-hidden overflow-y-auto px-2 font-mono', className)} {...props} />
)
CommandList.displayName = 'CommandList'

type CommandInputProps = React.ComponentPropsWithRef<typeof CommandPrimitive.Input>
const CommandInput: React.FC<CommandInputProps> = ({ className, ref, ...props }) => (
  <CommandPrimitive.Input
    ref={ref}
    className={cn('placeholder:text-foreground/50 w-full border-none bg-transparent font-mono text-base outline-none', className)}
    autoFocus
    placeholder='Search...'
    {...props}
  />
)
CommandInput.displayName = 'CommandInput'

export { Command, CommandInput, CommandGroup, CommandList, CommandEmpty, CommandItem }
