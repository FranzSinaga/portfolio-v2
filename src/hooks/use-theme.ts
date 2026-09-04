import { IS_LOCAL } from '@/lib/constants'
import { Theme } from '@/types/theme.type'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<Theme>('theme', 'dark')
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(selectedTheme)

    setIsLoading(false)

    if (!IS_LOCAL)
      setTimeout(() => {
        setShowIntro(false)
      }, 2300)
    else setShowIntro(false)
  }, [selectedTheme])

  return { selectedTheme, setSelectedTheme, isLoading, showIntro }
}
