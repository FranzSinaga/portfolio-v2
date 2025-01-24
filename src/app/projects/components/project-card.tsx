'use client'
import { useReadLocalStorage } from 'usehooks-ts'
import Image from 'next/image'
import { Theme } from '@/types/theme.type'
import { MagicCard } from '@/components/magicui/magic-card'

interface ProjectCardProps {
  data: { image: string; description: string; title: string; stacks: string[] }
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const theme = useReadLocalStorage<Theme>('theme')
  return (
    <MagicCard className={'cursor-pointer border border-foreground p-4 shadow-2xl'} gradientColor={theme === 'dark' ? '#293E6F' : 'lightgray'}>
      <div className='space-y-1'>
        <div className='relative aspect-[7/3] rounded-md border border-dotted'>
          <Image src={data.image} fill objectFit='cover' objectPosition='top' className='rounded-md' loading='lazy' alt={data.title} />
        </div>
        <h4 className='font-bold'>{data.title}</h4>
        <div className='flex flex-wrap gap-x-2'>
          {data.stacks.map((stack, index) => (
            <p className='rounded-full bg-gray-300 px-2 py-0.5 font-mono text-xxs dark:bg-gray-500' key={index}>
              {stack}
            </p>
          ))}
        </div>
        <p className='text-sm font-light'>{data.description}</p>
      </div>
    </MagicCard>
  )
}
