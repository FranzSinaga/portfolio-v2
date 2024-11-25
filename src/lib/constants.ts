import { Theme } from '@/types/theme.type'
import { icons } from 'lucide-react'

type iconType = keyof typeof icons
export const THEMES_LIST: { name: string; icon: iconType; value: Theme }[] = [
  { name: 'Dark', icon: 'MoonStar', value: 'dark' },
  { name: 'Light', icon: 'Sun', value: 'light' }
]

type Menus = 'Home' | 'About' | 'Projects' | 'Style Guide' | 'Contact'
export const MENUS_LIST: { name: Menus; link: string; icon?: iconType }[] = [
  { link: '/', name: 'Home', icon: 'Home' },
  { link: '/about', name: 'About', icon: 'UserRound' },
  { link: '/projects', name: 'Projects', icon: 'LaptopMinimal' },
  { link: '/style-guide', name: 'Style Guide', icon: 'Brush' },
  // { link: '/contact', name: 'Contact', icon: 'PhoneCall' }
]

export const IS_LOCAL = process.env.NODE_ENV !== 'production'
