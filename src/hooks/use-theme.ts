import { IS_LOCAL } from '@/lib/constants'
import { Theme } from '@/types/theme.type'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const themeList: Theme[] = ['dark', 'light']

// TODO: Change this code using localStorage in future
export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<null | Theme>('theme', null)
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const body = document.documentElement

    if (selectedTheme) {
      body.classList.remove(...themeList)
      body.classList.add(selectedTheme)
    } else {
      setSelectedTheme('dark')
      body.classList.add('dark')
    }
    setIsLoading(false)

    if (!IS_LOCAL)
      setTimeout(() => {
        setShowIntro(false)
      }, 2300)
    else setShowIntro(false)
  }, [selectedTheme, setSelectedTheme])

  return { selectedTheme, setSelectedTheme, isLoading, showIntro }
}
