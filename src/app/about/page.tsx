import { Caravan, Code, Component, DiscIcon, Figma, GitMerge, NotebookIcon, Triangle, Gamepad } from 'lucide-react'
import AboutComponent from './about'
import Timeline from './timeline'
import BlurFade from '@/components/magicui/blur-fade'

const Stacks = [
  {
    title: 'Figma',
    description: 'Product design',
    icon: <Figma />
  },
  {
    title: 'Visual Studio Code',
    description: 'Code editor',
    icon: <Code />
  },
  {
    title: 'Notion',
    description: 'Productivity and notes',
    icon: <NotebookIcon />
  },
  {
    title: 'Git',
    description: 'Version Control System',
    icon: <GitMerge />
  },
  {
    title: 'Vercel',
    description: 'Web hosting',
    icon: <Triangle className='fill-white text-white' />
  },
  {
    title: 'Discord',
    description: 'Chat and voice needs',
    icon: <DiscIcon />
  }
]

export default function About() {
  return (
    <div className='relative space-y-10'>
      <BlurFade inView>
        <AboutComponent />
      </BlurFade>

      <BlurFade inView>
        <h2 className='font-mono text-2xl font-bold'>{'<Work_Experience />'}</h2>
        <BlurFade inView delay={0.2}>
          <div className='flex flex-row flex-wrap justify-center'>
            <Timeline />
          </div>
        </BlurFade>
      </BlurFade>

      <BlurFade inView>
        <div className='grid grid-cols-2 gap-x-4'>
          <div className='mt-5 rounded-[10px] bg-gradient-to-br from-[#293E6F] to-black'>
            <div className='p-5 text-white'>
              <BlurFade inView delay={0.2}>
                <p className='text-xl font-bold'>Setup</p>
                <p className='text-base font-light'>I Spend here most of time</p>
              </BlurFade>
              <BlurFade inView delay={0.4}>
                <div className='mt-5 h-52 min-w-full animate-pulse rounded-md bg-gray-300'></div>
              </BlurFade>
            </div>
          </div>

          <div className='mt-5 rounded-[10px] bg-gradient-to-br from-[#293E6F] to-black'>
            <div className='p-5 text-white '>
              <BlurFade inView delay={0.2}>
                <p className='text-xl font-bold'>Stacks</p>
                <p className='text-base font-light'>Things i use all the time</p>
              </BlurFade>
              <BlurFade inView delay={0.4}>
                <div className='mt-5 grid grid-cols-2 gap-2'>
                  {Stacks.map((e, key) => (
                    <div key={key} className='flex items-center gap-x-2 rounded-md bg-white bg-opacity-20 p-2'>
                      {e.icon}
                      <div>
                        <p className='text-sm font-semibold'>{e.title}</p>
                        <p className='text-xs'>{e.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='mt-2 items-center gap-x-2 rounded-md bg-white bg-opacity-20 p-2'>
                  <div>
                    <p className='text-center text-sm font-semibold'>Languages and frameworks</p>
                    <div className='mt-2 flex items-center justify-center gap-x-3'>
                      <DiscIcon size={30} />
                      <Triangle size={30} />
                      <Caravan size={30} />
                      <Component size={30} />
                      <Gamepad size={30} />
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade inView>
        <div className='-mx-5 bg-gradient-to-b from-[#293E6F] to-black pb-20'>
          <div className='mx-20 w-[55vw] pt-10  leading-tight text-white'>
            <BlurFade inView delay={0.2}>
              <p className=' text-[5em] font-bold'>Get to know me!</p>
            </BlurFade>
            <BlurFade inView delay={0.4}>
              <p className='text-[2em] font-semibold'>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
              <button className='mt-5 rounded-full bg-white px-10 py-2 text-xs text-black'>Say hello 👋</button>
            </BlurFade>
          </div>
        </div>
      </BlurFade>
    </div>
  )
}
