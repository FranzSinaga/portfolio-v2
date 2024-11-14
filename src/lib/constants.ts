import { Theme } from '@/types/theme.type'
import { icons } from 'lucide-react'

export const ThemeList: { name: string; icon: keyof typeof icons; value: Theme }[] = [
  { name: 'Dark', icon: 'MoonStar', value: 'dark' },
  { name: 'Light', icon: 'Sun', value: 'light' }
]

export const IS_LOCAL = process.env.NODE_ENV !== 'production'
