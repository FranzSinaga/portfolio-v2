'use client'
import { useReadLocalStorage } from 'usehooks-ts'
import Particles from '@/components/magicui/particles'
import { ThemeType } from '@/types/theme.type'

const GlobalNotFound = () => {
  const selectedTheme = useReadLocalStorage<ThemeType>('themeVariant')
  return (
    <div className='relative flex h-full flex-col items-center justify-center overflow-hidden'>
      <div className='flex flex-col gap-y-4 text-center text-black dark:text-white'>
        <h1 className='text-7xl font-bold'>404</h1>
        <h2 className='text-2xl font-bold'>{'Page Not Found'}</h2>
      </div>
      <Particles className='absolute inset-0' quantity={200} ease={80} color={selectedTheme === 'dark' ? '#ffffff' : 'black'} refresh />
    </div>
  )
}

export default GlobalNotFound
