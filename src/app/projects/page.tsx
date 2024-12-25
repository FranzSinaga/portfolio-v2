import BlurFade from '@/components/magicui/blur-fade'
import { DialogDetailProjects } from './details'
import { ProjectsCard } from './projects-card'

export const metadata = {
  title: 'Franz | Projects'
}

const projectList = [
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
  },
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
    image: '/projects/portfolio-margaretta.png',
    description: 'Building high performance and great user experience portofolio for client using shadcn/ui and Magic UI components',
    title: 'Web Portfolio',
    stacks: ['Remix', 'Tailwind CSS']
  }
]

export default function Projects() {
  return (
    <div className='mx-auto my-5 max-w-[1200px]'>
      <BlurFade inView>
        <h3 className='font-mono font-bold'>{'Projects'}</h3>
      </BlurFade>
      {/* <DialogDetailProjects /> */}
      <div className='mt-4 grid grid-cols-1 gap-3 md:mb-10 md:grid-cols-2 lg:grid-cols-3'>
        {projectList.map((e, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <div className='w-full lg:h-full'>
              <ProjectsCard data={e} />
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  )
}
