import { Theme } from '@/types/theme.type'
import { icons } from 'lucide-react'

type iconType = keyof typeof icons
export const THEMES_LIST: { name: string; icon: iconType; value: Theme }[] = [
  { name: 'Dark', icon: 'MoonStar', value: 'dark' },
  { name: 'Light', icon: 'Sun', value: 'light' },
  { name: 'System', icon: 'Cog', value: 'system' }
]

type Menus = 'Home' | 'About' | 'Projects' | 'Style Guide' | 'Contact' | 'Playground'
export const MENUS_LIST: { name: Menus; link: string; icon?: iconType }[] = [
  { link: '/', name: 'Home', icon: 'House' },
  { link: '/about', name: 'About', icon: 'UserRound' },
  { link: '/projects', name: 'Projects', icon: 'LaptopMinimal' },
  { link: '/style-guide', name: 'Style Guide', icon: 'Brush' }
  // { link: '/playground', name: 'Playground', icon: 'Album' },
  // { link: '/contact', name: 'Contact', icon: 'PhoneCall' }
]

export const IS_LOCAL = process.env.NODE_ENV !== 'production'
