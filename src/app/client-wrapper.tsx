'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuList } from '@/components/menu'
import { Button } from '@/components/ui/button'

export default function ClientWrapper({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [selectedTheme, setSelectedTheme] = useLocalStorage('theme', '')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    var body = document.body
    if (!selectedTheme) {
      setSelectedTheme('dark')
      body.classList.add('dark', 'bg-background', 'transition-colors')
      setIsLoading(false)
    } else {
      body.classList.add(selectedTheme, 'bg-background', 'transition-colors')
      setIsLoading(false)
    }
  }, [selectedTheme, setSelectedTheme])

  if (isLoading) return <p>Loading</p>

  return (
    <div className='flex h-full w-full'>
      <aside className='hidden w-[18vw] bg-background px-5 py-5 font-mono text-white transition-colors lg:block '>
        <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
      </aside>

      <main className='mt-5 w-full rounded-t-[20px] border-x border-t border-foreground bg-white transition-colors dark:bg-[#161616] lg:mx-5'>
        <div className='m-5 block lg:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'ghost'}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='bg-gray-200 font-mono dark:bg-[#1c1c1c]'>
              <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
            </SheetContent>
          </Sheet>
        </div>
        <div className='custom-scrollbar h-dvh w-full overflow-auto overflow-x-hidden px-5'>{children}</div>
      </main>
    </div>
  )
}
