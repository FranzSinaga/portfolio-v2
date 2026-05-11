import BlurFade from '@/components/magicui/blur-fade'
import {
  IconBrandFigma,
  IconBrandVscode,
  IconBrandNotion,
  IconTriangle,
  IconBrandReact,
  IconBrandVue,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandGolang,
  IconBrandDiscordFilled,
  IconBrandGithubFilled
} from '@tabler/icons-react'

const StacksCollection = [
  {
    title: 'Figma',
    description: 'Product design',
    icon: <IconBrandFigma size={34} />
  },
  {
    title: 'Visual Studio Code',
    description: 'Code editor',
    icon: <IconBrandVscode size={34} className='fill-foreground text-foreground' />
  },
  {
    title: 'Notion',
    description: 'Productivity and notes',
    icon: <IconBrandNotion size={34} />
  },
  {
    title: 'Git',
    description: 'Version Control System',
    icon: <IconBrandGithubFilled size={34} />
  },
  {
    title: 'Vercel',
    description: 'Web hosting',
    icon: <IconTriangle size={34} className='fill-foreground text-foreground' />
  },
  {
    title: 'Discord',
    description: 'Chat and voice needs',
    icon: <IconBrandDiscordFilled size={34} />
  }
]

export const Stacks = () => {
  return (
    <div className='mt-20 rounded-lg border'>
      <div className='text-foreground p-5'>
        <BlurFade inView delay={0.2}>
          <h4 className='font-bold'>Stacks</h4>
          <p className='font-light'>Things i use all the time</p>
        </BlurFade>
        <BlurFade inView delay={0.4} className='space-y-2'>
          <div className='mt-5 grid grid-cols-2 gap-2'>
            {StacksCollection.map((e, key) => (
              <div key={key} className='bg-muted-foreground/5 flex items-center gap-x-2 rounded-md border p-2'>
                {e.icon}
                <div>
                  <p className='text-sm font-semibold'>{e.title}</p>
                  <p className='text-xs'>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='bg-muted-foreground/5 items-center gap-x-2 rounded-md border p-2'>
            <div className='space-y-3'>
              <p className='text-md text-center font-semibold'>Languages and frameworks</p>
              <div className='flex items-center justify-center gap-4'>
                <IconBrandReact size={34} />
                <IconBrandVue size={34} />
                <IconBrandTailwind size={34} className='fill-foreground text-foreground' />
                <IconBrandTypescript size={34} />
                <IconBrandGolang size={40} />
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}
