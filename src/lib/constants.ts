import { Theme, ThemeType } from '@/types/theme.type'
import { icons } from 'lucide-react'

type iconType = keyof typeof icons
export const THEMES_LIST: { name: string; icon: iconType; value: Theme; type: ThemeType }[] = [
  { name: 'Dark', icon: 'MoonStar', value: 'dark', type: 'dark' },
  { name: 'Light', icon: 'Sun', value: 'light', type: 'light' },
  { name: 'System', icon: 'Cog', value: 'system', type: 'system' }
]

type Menus = 'Home' | 'About' | 'Projects' | 'Style Guide' | 'Contact' | 'Playground' | 'Blogs'
export const MENUS_LIST: { name: Menus; link: string; icon?: iconType }[] = [
  { link: '/', name: 'Home', icon: 'House' },
  { link: '/about', name: 'About', icon: 'UserRound' },
  { link: '/projects', name: 'Projects', icon: 'LaptopMinimal' },
  { link: '/style-guide', name: 'Style Guide', icon: 'Brush' },
  { link: '/blogs', name: 'Blogs', icon: 'Book' }
  // { link: '/playground', name: 'Playground', icon: 'Album' }
  // { link: '/contact', name: 'Contact', icon: 'PhoneCall' }
]

export const IS_LOCAL = process.env.NODE_ENV !== 'production'
export const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL
