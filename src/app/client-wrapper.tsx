'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuList } from '@/components/menu'
import { Button } from '@/components/ui/button'
import Loader from '@/components/loader'

import { Theme } from '@/types/theme.type'

export default function ClientWrapper({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<null | Theme>('theme', null)
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    var body = document.body
    if (!selectedTheme) {
      setSelectedTheme('dark')
      body.classList.add('dark')
      setIsLoading(false)
    } else {
      body.classList.add(selectedTheme || 'dark')
      setIsLoading(false)
    }
    setTimeout(() => {
      setShowIntro(false)
      body?.classList.add('transition-colors')
      body?.classList.add('duration-500')
    }, 4000)
  }, [selectedTheme, setSelectedTheme])

  if (isLoading) return <></>
  if (showIntro)
    return (
      <div className='mt-[40dvh] flex w-full flex-col items-center gap-y-2 overflow-hidden p-2 transition-colors duration-0'>
        <Loader />
        <p className='font-mono text-lg font-bold text-foreground'>Loading...</p>
      </div>
    )

  return (
    <div className='flex h-full w-full'>
      <aside className='hidden w-[18vw] bg-background p-5 font-mono transition-colors duration-500 lg:block'>
        <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
      </aside>

      <main className='w-full rounded-t-[20px] border-foreground bg-content-background lg:mx-5 lg:mt-5 lg:border-x-2 lg:border-t-2'>
        <div className='sticky top-0 z-10 flex items-center justify-between border-b-2 border-foreground bg-content-background lg:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'link'} className='ml-2 px-3 py-6 text-foreground'>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='bg-gray-200 font-mono dark:bg-[#1c1c1c]'>
              <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
            </SheetContent>
          </Sheet>
          <div className=''>
            <Image src={selectedTheme === 'dark' ? '/logo-white.png' : '/logo-black.png'} width={25} height={25} alt='icons' />
          </div>
          <Button variant={'link'} className='invisible mr-2 px-3 py-6 text-foreground'>
            <Menu />
          </Button>
        </div>
        <div className='custom-scrollbar h- mt-4 w-full overflow-hidden overflow-x-hidden px-5 text-foreground lg:h-[calc(100dvh-38px)] lg:overflow-auto lg:overflow-x-hidden'>
          {children}
        </div>
      </main>
    </div>
  )
}
