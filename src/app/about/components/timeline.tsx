'use client'
import BlurFade from '@/components/magicui/blur-fade'
import { Tabs } from '@/components/aceternity/tabs'

export const Timeline = () => {
  const tabClass = 'relative h-full w-full overflow-hidden rounded-2xl bg-content-background border p-10 text-foreground'
  const tabs = [
    {
      title: 'MSIG',
      value: 'msig',
      content: (
        <div className={tabClass}>
          <BlurFade inView delay={0.2}>
            <p className='text-xl font-bold md:text-2xl'>MSIG Indonesia</p>
            <p className='text-foreground mb-2'>
              <strong className='font-bold'>Frontend Developer</strong> | February 2023 - Present
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='text-foreground mt-5 list-disc space-y-2 text-left md:ml-5'>
              <li>
                Developed the POLARIS web application using React JS, Tailwind CSS, shadcn/ui components, and TypeScript to optimize fast performance and responsive websites.
              </li>
              <li>Implemented Zustand for state management to streamline data handling within the web application.</li>
              <li>Applied a clean, organized code structure to enhance collaboration and maintainability.</li>
            </ul>
          </BlurFade>
        </div>
      )
    },
    {
      title: 'BRI',
      value: 'bri',
      content: (
        <div className={tabClass}>
          <BlurFade inView delay={0.2}>
            <p className='text-xl font-bold md:text-2xl'>Bank Rakyat Indonesia</p>
            <p className='text-foreground mb-2'>
              <strong className='font-bold'>Frontend Developer</strong> | March 2021 - January 2023
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='text-foreground mt-5 list-disc space-y-2 text-left md:ml-5'>
              <li>Building NDS (New Delivery System) applications using Quasar Framework (Vue)</li>
              <li>Implementing Vuex as state management on web applications to facilitate application development</li>
              <li>Implement Protobuf (Protocol Buffer) as a communication medium between Frontend and Backend to speed up data exchange</li>
              <li>Implementing PWAs to optimize web applications</li>
              <li>Collaborate with Teams using the Agile Scrum method to speed up the web application development process</li>
            </ul>
          </BlurFade>
        </div>
      )
    },
    {
      title: 'Lawencon',
      value: 'lawencon',
      content: (
        <div className={tabClass}>
          <BlurFade inView delay={0.2}>
            <p className='text-xl font-bold md:text-2xl'>Lawencon</p>
            <p className='text-foreground mb-2'>
              <strong className='font-bold'>Frontend Developer</strong> | January 2021 - March 2021
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='text-foreground mt-5 list-disc space-y-2 text-left md:ml-5'>
              <li>Building a LinovHR web application using the Angular framework</li>
              <li>Implementing Redux as state management on web applications to facilitate application development</li>
              <li>Working with other developers to implement the RESTFul API in web application development</li>
            </ul>
          </BlurFade>
        </div>
      )
    },
    {
      title: 'KPT',
      value: 'pariwisata-toba',
      content: (
        <div className={tabClass}>
          <BlurFade inView delay={0.2}>
            <p className='text-xl font-bold md:text-2xl'>Komunitas Pariwisata Toba</p>
            <p className='text-foreground mb-2'>
              <strong className='font-bold'>Freelance Mobile Developer</strong> | October 2020 - January 2021
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='text-foreground mt-5 list-disc space-y-2 font-sans text-base md:ml-5'>
              <li>Build a mobile application SIAPPARA-INANGBAO (Sistem Informasi Pemungutan dan Pelaporan Retribusi Pasar) using React Native</li>
              <li>Designing business processes, databases, and mobile application interface displays</li>
              <li>Successfully assisted market officials in administering user fees at twelve markets in the Humbang Hasundutan district</li>
            </ul>
          </BlurFade>
        </div>
      )
    },
    {
      title: 'Jubelio',
      value: 'jubelio',
      content: (
        <div className={tabClass}>
          <BlurFade inView delay={0.2}>
            <p className='text-xl font-bold md:text-2xl'>Jubelio</p>
            <p className='text-foreground mb-2'>
              <strong className='font-bold'>Intern Web Developer</strong> | October 2020 - January 2021
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='text-foreground mt-5 list-disc space-y-2 text-left md:ml-5'>
              <li>
                Build a Jubelio Finance System using Laravel, a medium for recording customer fines on the use of the Jubelio platform so that it helps companies increase revenue
              </li>
              <li>Re-engineering the Analisa Data Penjualan Jubelio system to help customers improve their sales strategy</li>
              <li>Create SQL Query related to transaction reports, to assist users in managing finances</li>
            </ul>
          </BlurFade>
        </div>
      )
    }
  ]

  return (
    <div className='my-5 flex h-[40rem] w-full flex-col items-start justify-start [perspective:1000px] md:h-[26rem] lg:h-[22rem]'>
      <Tabs activeTabClassName='text-blue-600' tabs={tabs} containerClassName='font-mono' contentClassName='mt-10' />
    </div>
  )
}
