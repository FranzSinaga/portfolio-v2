import { IS_LOCAL, THEMES_LIST } from '@/lib/constants'
import { Theme, ThemeType } from '@/types/theme.type'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<null | Theme>('theme', null)
  const [themeVariant, setThemeVariant] = useLocalStorage<null | ThemeType>('themeVariant', null)
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const classList = document.documentElement.classList
    const length = classList.length

    if (!selectedTheme) {
      setSelectedTheme('system')
      setThemeVariant(systemTheme)
      classList.add(systemTheme)
    } else {
      const selectedThemeType = THEMES_LIST.find(e => e.value === selectedTheme)
      setThemeVariant(selectedTheme && selectedTheme === 'system' ? systemTheme : selectedThemeType ? selectedThemeType.type : systemTheme)

      classList.remove(classList[length - 1]) // position theme classlist in last index
      classList.add(selectedTheme && selectedTheme === 'system' ? systemTheme : selectedTheme)
    }

    setIsLoading(false)

    if (!IS_LOCAL)
      setTimeout(() => {
        setShowIntro(false)
      }, 2300)
    else setShowIntro(false)
  }, [selectedTheme, setSelectedTheme])

  return { selectedTheme, setSelectedTheme, isLoading, showIntro, themeVariant }
}
