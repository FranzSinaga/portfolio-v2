import { Theme, ThemeType } from '@/types/theme.type'
import type { Icon } from '@tabler/icons-react'
import { IconBook2, IconDeviceLaptop, IconHome, IconMoonStars, IconSettings, IconSun, IconUser } from '@tabler/icons-react'

export const THEMES_LIST: { name: string; icon: Icon; value: Theme; type: ThemeType }[] = [
  { name: 'Dark', icon: IconMoonStars, value: 'dark', type: 'dark' },
  { name: 'Light', icon: IconSun, value: 'light', type: 'light' },
  { name: 'System', icon: IconSettings, value: 'system', type: 'system' }
]

type Menus = 'Home' | 'About' | 'Projects' | 'Style Guide' | 'Contact' | 'Playground' | 'Blogs'
export const MENUS_LIST: { name: Menus; link: string; icon?: Icon }[] = [
  { link: '/', name: 'Home', icon: IconHome },
  { link: '/about', name: 'About', icon: IconUser },
  { link: '/projects', name: 'Projects', icon: IconDeviceLaptop },
  { link: '/blogs', name: 'Blogs', icon: IconBook2 }
  // { link: '/style-guide', name: 'Style Guide', icon: IconPaint }
  // { link: '/playground', name: 'Playground', icon: 'Album' }
  // { link: '/contact', name: 'Contact', icon: 'PhoneCall' }
]

export const IS_LOCAL = process.env.NODE_ENV !== 'production'
export const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL
