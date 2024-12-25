'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuList } from '@/components/menu'
import { Button } from '@/components/ui/button'
import LucideIcon from '@/components/lucide-icon'
import { BottomSection } from '@/components/bottom-section'
import { CommandMenu } from './command-menu'

import { useTheme } from '@/hooks/use-theme'
import { CommandMenuProvider } from '@/context/command-menu-context'
import { HyperText } from '@/components/magicui/hyper-text'
import GridPattern from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib'

export default function ClientWrapper({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isLoading, showIntro, selectedTheme, setSelectedTheme } = useTheme()
  const [isOpenSheet, setIsOpenSheet] = useState(false)

  if (isLoading) return <></>
  if (showIntro)
    return (
      <div className='relative min-h-[100dvh] w-full gap-y-2 overflow-hidden p-2 font-black text-foreground transition-colors duration-0'>
        <div className='flex h-[calc(100dvh-20px)] flex-col items-center justify-center'>
          <HyperText disableMouseEnter duration={1900} text='Welcome' />
          <p className='font-mono text-lg font-bold text-foreground'>Loading...</p>
        </div>
        <GridPattern
          numSquares={80}
          maxOpacity={0.4}
          duration={1}
          className={cn('[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]', 'inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-0')}
        />
      </div>
    )

  return (
    <div className='flex'>
      {/* DESKTOP SIDEBAR MENU */}
      <aside id='desktop-sidebar' className='hidden w-[20dvw] bg-background p-5 font-mono transition-colors duration-500 lg:block'>
        <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
      </aside>
      {/* END DESKTOP SIDEBAR MENU */}

      <main className='w-full rounded-t-[20px] border-foreground bg-content-background lg:mr-5 lg:mt-5 lg:border-x-2 lg:border-t-2'>
        {/* MOBILE SHEET MENU */}
        <div id='mobile-sidebar' className='sticky top-0 z-10 flex items-center justify-between border-b-2 border-foreground bg-content-background lg:hidden'>
          <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
            <SheetTrigger asChild>
              <Button variant={'link'} className='ml-2 px-3 py-6 text-foreground'>
                <LucideIcon name='Menu' />
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='bg-gray-200 font-mono dark:bg-[#1c1c1c]'>
              <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} onClick={() => setIsOpenSheet(false)} />
            </SheetContent>
          </Sheet>
          <div className=''>
            <Image src={selectedTheme === 'dark' ? '/logo-white.png' : '/logo-black.png'} width={25} height={25} alt='icons' />
          </div>
          <Button variant={'link'} className='invisible mr-2 px-3 py-6 text-foreground'>
            <LucideIcon name='Menu' />
          </Button>
        </div>
        {/* END MOBILE SHEET MENU */}

        <div className='custom-scrollbar mt-4 min-h-dvh w-full overflow-hidden overflow-x-hidden px-5 text-foreground lg:h-[calc(100dvh-74px)] lg:min-h-[calc(100dvh-74px)] lg:overflow-auto lg:overflow-x-hidden'>
          {children}
        </div>
        <CommandMenuProvider>
          <BottomSection />
          <CommandMenu />
        </CommandMenuProvider>
      </main>
    </div>
  )
}
