import { IS_LOCAL } from '@/lib/constants'
import { Theme } from '@/types/theme.type'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
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

    !IS_LOCAL
      ? setTimeout(() => {
          setShowIntro(false)
          body?.classList.add('transition-colors')
          body?.classList.add('duration-500')
        }, 4000)
      : setShowIntro(false)
  }, [selectedTheme, setSelectedTheme])

  return { selectedTheme, setSelectedTheme, isLoading, showIntro }
}
