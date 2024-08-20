'use client'
import { useReadLocalStorage } from 'usehooks-ts'
import BlurFade from '@/components/magicui/blur-fade'
import { MagicCard } from '@/components/magicui/magic-card'

import { Theme } from '@/types/theme.type'
import Image from 'next/image'

const projectList = [
  {
    image: <Image src='/projects/project-covid.jpg' fill objectFit='cover' objectPosition='top' className='rounded-md' loading='lazy' alt='covid' />,
    description: 'Build a website to display the number of corona virus cases that occurred in Indonesia',
    title: 'Indonesia Covid Data',
    stacks: ['React Js', 'Bootstrap', 'Rest API']
  },
  {
    image: <Image src='/projects/simple-todo-list.png' fill objectFit='cover' objectPosition='top' className='rounded-md' loading='lazy' alt='covid' />,
    description: 'Building a simple Todo web app to organize the activities you want to do',
    title: 'Simple Todo List',
    stacks: ['React Js', 'Redux', 'Tailwind CSS']
  }
]

export default function Projects() {
  const theme = useReadLocalStorage<Theme>('theme')
  return (
    <div className='mt-5'>
      <BlurFade inView>
        <h2 className='font-mono text-2xl font-bold'>{'<Projects/>'}</h2>
      </BlurFade>
      <div className={'mb-24 mt-4 grid w-full grid-cols-1 gap-4 md:mb-10 md:grid-cols-3'}>
        {projectList.map((e, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <div className='w-full lg:h-full'>
              <MagicCard className={'cursor-pointer border border-foreground p-4 shadow-2xl'} gradientColor={theme === 'dark' ? '#293E6F' : 'lightgray'}>
                <div className='space-y-2'>
                  <div className='relative h-44 w-full rounded-md '>{e.image}</div>
                  <p className='text-xl font-bold'>{e.title}</p>
                  <div className='flex gap-x-2'>
                    {e.stacks.map((stack, index) => (
                      <p className='rounded-full bg-gray-300 px-2 py-1 font-mono text-xs dark:bg-gray-500' key={index}>
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
