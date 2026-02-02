import { Figma, Triangle } from 'lucide-react'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { FaDiscord, FaGitAlt, FaReact, FaVuejs } from 'react-icons/fa'
import { RiNotionFill, RiTailwindCssFill } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'

import BlurFade from '@/components/magicui/blur-fade'

const StacksCollection = [
  {
    title: 'Figma',
    description: 'Product design',
    icon: <Figma />
  },
  {
    title: 'Visual Studio Code',
    description: 'Code editor',
    icon: <VscVscode size={25} />
  },
  {
    title: 'Notion',
    description: 'Productivity and notes',
    icon: <RiNotionFill size={25} />
  },
  {
    title: 'Git',
    description: 'Version Control System',
    icon: <FaGitAlt size={25} />
  },
  {
    title: 'Vercel',
    description: 'Web hosting',
    icon: <Triangle className='fill-foreground text-foreground' />
  },
  {
    title: 'Discord',
    description: 'Chat and voice needs',
    icon: <FaDiscord size={25} />
  }
]

export const Stacks = () => {
  return (
    <>
      <div className=''>
        {/* <div className='rounded-[10px] border md:mt-5'>
          <div className='text-foreground p-5'>
            <BlurFade inView delay={0.2}>
              <h4 className='font-bold'>Setup</h4>
              <p className='font-light'>I Spend here most of time</p>
            </BlurFade>
            <BlurFade inView delay={0.4}>
              <div className='mt-5 aspect-7/3 min-w-full animate-pulse rounded-md bg-gray-300'></div>
            </BlurFade>
          </div>
        </div> */}

        <div className='rounded-lg border'>
          <div className='text-foreground p-5'>
            <BlurFade inView delay={0.2}>
              <h4 className='font-bold'>Stacks</h4>
              <p className='font-light'>Things i use all the time</p>
            </BlurFade>
            <BlurFade inView delay={0.4}>
              <div className='mt-5 grid grid-cols-2 gap-2'>
                {StacksCollection.map((e, key) => (
                  <div key={key} className='bg-content-background flex items-center gap-x-2 rounded-md border p-2'>
                    {e.icon}
                    <div>
                      <p className='text-sm font-semibold'>{e.title}</p>
                      <p className='text-xs'>{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='bg-content-background mt-2 items-center gap-x-2 rounded-md border p-2'>
                <div>
                  <p className='text-md text-center font-semibold'>Languages and frameworks</p>
                  <div className='mt-3 flex items-center justify-center gap-x-2'>
                    <FaReact size={30} />
                    <FaVuejs size={30} />
                    <RiTailwindCssFill size={30} />
                    <BiLogoJavascript size={30} />
                    <BiLogoTypescript size={30} />
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </>
  )
}
