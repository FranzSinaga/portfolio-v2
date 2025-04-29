import { IS_LOCAL } from '@/lib/constants'
import { Theme } from '@/types/theme.type'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<null | Theme>('theme', null)
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const classList = document.documentElement.classList
    const length = classList.length

    if (!selectedTheme) {
      setSelectedTheme('system')
      classList.add(systemTheme)
    } else {
      console.log(document.documentElement.classList)
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

  return { selectedTheme, setSelectedTheme, isLoading, showIntro }
}
