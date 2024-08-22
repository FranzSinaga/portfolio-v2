'use client'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuList } from '@/components/menu'
import { Button } from '@/components/ui/button'

import { Theme } from '@/types/theme.type'

export default function ClientWrapper({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<null | Theme>('theme', null)
  const [isLoading, setIsLoading] = useState(true)

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
  }, [selectedTheme, setSelectedTheme])

  if (isLoading) return <p>Loading</p>

  return (
    <div className='flex h-full w-full'>
      <aside className='hidden w-[18vw] bg-background p-5 font-mono transition-colors duration-500 lg:block'>
        <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
      </aside>

      <main className='mt-5 w-full rounded-t-[20px] border-x-2 border-t-2 border-foreground  bg-content-background lg:mx-5'>
        <div className='mt-2 block lg:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'link'} className='ml-2 p-2 text-foreground'>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className='bg-gray-200 font-mono dark:bg-[#1c1c1c]'>
              <MenuList selectedTheme={selectedTheme ?? 'dark'} setSelectedTheme={setSelectedTheme} />
            </SheetContent>
          </Sheet>
        </div>
        <div className='custom-scrollbar mt-4 w-full overflow-auto overflow-x-hidden px-5 text-foreground h-[calc(91dvh)] md:h-[calc(87dvh)] lg:h-[calc(95dvh)]'>{children}</div>
      </main>
    </div>
  )
}
