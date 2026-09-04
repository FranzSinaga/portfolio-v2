import React from 'react'
import { IconInfoCircle } from '@tabler/icons-react'

import { Button } from '../ui/button'

export const AsyncState = ({ isLoading, error, onRetry, children }: { isLoading: boolean; error: boolean; onRetry: () => void; children: React.ReactNode }) => {
  if (isLoading)
    return (
      <div className='bg-foreground/30 inset-0 flex w-full animate-pulse items-center justify-center rounded py-18'>
        <p>Loading...</p>
      </div>
    )

  if (error)
    return (
      <div className='bg-accent flex justify-between rounded-sm p-2 drop-shadow-sm'>
        <div className='flex items-center gap-x-2'>
          <IconInfoCircle size={18} />
          <p className='text-destructive-foreground font-mono'>Something wrong unexpected</p>
        </div>
        <Button variant={'default'} size={'sm'} onClick={onRetry}>
          Reload
        </Button>
      </div>
    )

  return <>{children}</>
}
