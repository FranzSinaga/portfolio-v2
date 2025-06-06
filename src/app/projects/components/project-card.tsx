'use client'
import Image from 'next/image'
import { useReadLocalStorage } from 'usehooks-ts'

import { MagicCard } from '@/components/magicui/magic-card'

import { ThemeType } from '@/types/theme.type'

interface ProjectCardProps {
  data: { image: string; description: string; title: string; stacks: string[] }
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const theme = useReadLocalStorage<ThemeType>('themeVariant')
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  return (
    <MagicCard
      className={'border-foreground cursor-pointer border p-4 shadow-2xl'}
      gradientColor={theme === 'system' && systemTheme === 'dark' ? '#293E6F' : theme === 'dark' ? '#293E6F' : 'lightgray'}
    >
      <div className='space-y-1'>
        <div className='relative aspect-7/3 rounded-md border border-dotted'>
          <Image src={data.image} fill objectFit='cover' objectPosition='top' className='rounded-md' loading='lazy' alt={data.title} />
        </div>
        <h4 className='font-bold'>{data.title}</h4>
        <div className='flex flex-wrap gap-x-2'>
          {data.stacks.map((stack, index) => (
            <p className='text-xxs rounded-full bg-gray-300 px-2 py-0.5 font-mono dark:bg-gray-500' key={index}>
              {stack}
            </p>
          ))}
        </div>
        <p className='text-sm font-light'>{data.description}</p>
      </div>
    </MagicCard>
  )
}
