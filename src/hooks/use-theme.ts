import { IS_LOCAL } from '@/lib/constants'
import { Theme } from '@/types/theme.type'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useLocalStorage<null | Theme>('theme', null)
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const body = document.body
    body.className = ''
    body.classList.add('transition-colors', 'duration-500', 'bg-background')

    if (selectedTheme) {
      body.classList.add(selectedTheme)
    } else {
      setSelectedTheme('dark')
      body.classList.add('dark')
    }
    setIsLoading(false)

    if (!IS_LOCAL)
      setTimeout(() => {
        setShowIntro(false)
      }, 4000)
    else setShowIntro(false)
  }, [selectedTheme, setSelectedTheme])

  return { selectedTheme, setSelectedTheme, isLoading, showIntro }
}
