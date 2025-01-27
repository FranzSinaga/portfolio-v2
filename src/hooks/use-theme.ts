import { IS_LOCAL, THEMES_LIST } from '@/lib/constants'
import { Theme } from '@/types/theme.type'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<null | Theme>('theme', null)
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    if (!selectedTheme) setSelectedTheme(systemTheme)

    THEMES_LIST.forEach(theme => {
      if (selectedTheme === 'system') document.documentElement.classList.toggle('dark', systemTheme === 'dark')
      else document.documentElement.classList.toggle(theme.value, selectedTheme === theme.value)
    })

    setIsLoading(false)

    if (!IS_LOCAL)
      setTimeout(() => {
        setShowIntro(false)
      }, 2300)
    else setShowIntro(false)
  }, [selectedTheme, setSelectedTheme])

  return { selectedTheme, setSelectedTheme, isLoading, showIntro }
}
