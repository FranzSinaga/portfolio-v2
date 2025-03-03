'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib'
import { useTheme } from '@/hooks'
import { CommandMenuProvider } from '@/context/command-menu-context'

import MenuList from '@/components/layout/menu'
import LucideIcon from '@/components/lucide-icon'
import BottomSection from '@/components/bottom-section'
import { HyperText } from '@/components/magicui/hyper-text'
import GridPattern from '@/components/magicui/animated-grid-pattern'
import { CommandMenu } from '@/components/command-menu'
import { MobileSidebar } from '@/components/mobile-sidebar'

const PageWrapper = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()
  const { isLoading, showIntro, selectedTheme, setSelectedTheme } = useTheme()
  const [isOpenSheet, setIsOpenSheet] = React.useState(false)

  const mainRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    console.log('Page changed to:', pathname)
    if (mainRef.current) mainRef.current.scrollTop = 0
  }, [pathname])

  if (isLoading) return <></>
  if (showIntro)
    return (
      <div className='text-foreground relative min-h-[100dvh] w-full gap-y-2 overflow-hidden p-2 font-black transition-colors duration-0'>
        <div className='flex h-[calc(100dvh-20px)] flex-col items-center justify-center'>
          <HyperText disableMouseEnter duration={1900} text='Welcome' />
          <p className='text-foreground font-mono text-lg font-bold'>Loading...</p>
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
      <MobileSidebar
        open={isOpenSheet}
        onOpenChange={e => {
          setIsOpenSheet(e)
        }}
      />
      {/* DESKTOP SIDEBAR MENU */}
      <aside id='desktop-sidebar' className='bg-background hidden w-[20dvw] p-5 font-mono transition-colors duration-500 lg:block'>
        <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
      </aside>
      {/* END DESKTOP SIDEBAR MENU */}

      <main className='border-foreground bg-content-background w-full rounded-t-[20px] lg:mt-5 lg:mr-5 lg:border-x-2 lg:border-t-2'>
        {/* MOBILE SHEET MENU */}
        <div id='mobile-sidebar' className='border-foreground/50 bg-content-background sticky top-0 z-10 flex items-center justify-between border-b-2 shadow lg:hidden'>
          <LucideIcon name='Menu' size={45} onClick={() => setIsOpenSheet(true)} className='text-foreground mr-2 cursor-pointer px-3' />

          <Image src={selectedTheme === 'light' ? '/logo-black.png' : '/logo-white.png'} width={25} height={25} alt='icons' />
          <LucideIcon name='Smile' size={45} className='text-foreground mr-2 px-3' />
        </div>
        {/* END MOBILE SHEET MENU */}

        <div
          ref={mainRef}
          className='custom-scrollbar text-foreground mt-4 min-h-dvh w-full overflow-hidden overflow-x-hidden px-5 pb-5 lg:h-[calc(100dvh-74px)] lg:min-h-[calc(100dvh-74px)] lg:overflow-auto lg:overflow-x-hidden'
        >
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

export default PageWrapper
