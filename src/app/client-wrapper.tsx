'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuList } from '@/components/menu'
import { Button } from '@/components/ui/button'
import Intro from '@/components/intro'

import { useTheme } from '@/hooks/use-theme'

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
      <div className='mt-[40dvh] flex w-full flex-col items-center gap-y-2 overflow-hidden p-2 transition-colors duration-0'>
        <Intro />
        <p className='font-mono text-lg font-bold text-foreground'>Loading...</p>
      </div>
    )

  return (
    <div className='flex'>
      {/* DESKTOP SIDEBAR MENU */}
      <aside className='hidden w-[20dvw] bg-background p-5 font-mono transition-colors duration-500 lg:block'>
        <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
      </aside>
      {/* END DESKTOP SIDEBAR MENU */}

      <main className='w-full rounded-t-[20px] border-foreground bg-content-background lg:mt-5 lg:border-x-2 lg:border-t-2'>
        {/* MOBILE SHEET MENU */}
        <div className='sticky top-0 z-10 flex items-center justify-between border-b-2 border-foreground bg-content-background lg:hidden'>
          <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
            <SheetTrigger asChild>
              <Button variant={'link'} className='ml-2 px-3 py-6 text-foreground'>
                <Menu />
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
            <Menu />
          </Button>
        </div>
        {/* END MOBILE SHEET MENU */}

        <div className='custom-scrollbar mt-4 min-h-dvh w-full overflow-hidden overflow-x-hidden px-5 text-foreground lg:h-[calc(100dvh-38px)] lg:min-h-[calc(100dvh-38px)] lg:overflow-auto lg:overflow-x-hidden'>
          {children}
        </div>
      </main>
    </div>
  )
}
