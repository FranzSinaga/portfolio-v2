'use client'
import { useReadLocalStorage } from 'usehooks-ts'
import BlurFade from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'

import { Theme } from '@/types/theme.type'
import Image from 'next/image'

const projectList = [
  {
    image: '/projects/project-covid.jpg',
    description: 'Build a website to display the number of corona virus cases that occurred in Indonesia',
    title: 'Indonesia Covid Data',
    stacks: ['React.js', 'Bootstrap', 'Rest API']
  },
  {
    image: '/projects/simple-todo-list.png',
    description: 'Building a simple Todo web app to organize the activities you want to do',
    title: 'Simple Todo List',
    stacks: ['React.js', 'Redux', 'Tailwind CSS']
  },
  {
    image: '/projects/portfolio-v1.png',
    description: 'Portfolio website version 1 was created using Next.js and Flowbite UI components',
    title: 'Portfolio V1',
    stacks: ['Next.js', 'Tailwind CSS']
  },
  {
    image: '/projects/portfolio-v2.png',
    description: 'Portfolio website version 2 was created using shadcn/ui, Magic UI and Aceternity UI components',
    title: 'Portfolio V2',
    stacks: ['Next.js', 'Tailwind CSS']
  }
]

export default function Projects() {
  const theme = useReadLocalStorage<Theme>('theme')
  return (
    // <div className='mx-auto flex flex-col space-y-10 max-w-[1200px]'></div>
    <div className='mx-auto mt-5 max-w-[1200px]'>
      <BlurFade inView>
        <h2 className='font-mono text-2xl font-bold'>{'<Projects/>'}</h2>
      </BlurFade>
      <div className={'mb-20 mt-4 grid grid-cols-1 gap-3 md:mb-10 md:grid-cols-3'}>
        {projectList.map((e, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <div className='w-full lg:h-full'>
              <MagicCard className={'cursor-pointer border border-foreground p-4 shadow-2xl'} gradientColor={theme === 'dark' ? '#293E6F' : 'lightgray'}>
                <div className='space-y-2'>
                  <div className='relative h-40 w-full rounded-md'>
                    <Image src={e.image} fill objectFit='cover' objectPosition='top' className='rounded-md' loading='lazy' alt='covid' />
                  </div>
                  <p className='text-xl font-bold'>{e.title}</p>
                  <div className='flex gap-x-2'>
                    {e.stacks.map((stack, index) => (
                      <p className='rounded-full bg-gray-300 px-2 py-1 font-mono text-[10px] dark:bg-gray-500' key={index}>
                        {stack}
                      </p>
                    ))}
                  </div>
                  <p className='text-sm font-light'>{e.description}</p>
                </div>
              </MagicCard>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  )
}
