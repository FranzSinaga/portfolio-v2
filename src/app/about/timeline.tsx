'use client'

import BlurFade from '@/components/magicui/blur-fade'
import { Tabs } from '@/components/ui/tabs'

export default function Timeline() {
  const tabClass = 'relative h-full w-full overflow-hidden rounded-2xl bg-content-background border p-10 text-foreground'
  const tabs = [
    {
      title: 'BRI',
      value: 'bri',
      content: (
        <div className={tabClass}>
          <BlurFade inView delay={0.2}>
            <p className=' text-xl font-bold md:text-4xl'>Bank Rakyat Indonesia</p>
            <p className='mb-2 text-base text-foreground'>
              <strong className='font-bold'>Frontend Developer</strong> | March 2021 - January 2023
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='mt-5 list-disc space-y-2 text-left font-sans text-base text-foreground md:ml-5'>
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
            <p className=' text-xl font-bold md:text-4xl'>Lawencon</p>
            <p className='mb-2 text-base text-foreground'>
              <strong className='font-bold'>Frontend Developer</strong> | January 2021 - March 2021
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='mt-5 list-disc space-y-2 text-left font-sans text-base text-foreground md:ml-5'>
              <li>Building a LinovHR web application using the Angular framework</li>
              <li>Implementing Redux as state management on web applications to facilitate application development</li>
              <li>Working with other developers to implement the RESTFul API in web application development</li>
            </ul>
          </BlurFade>
        </div>
      )
    },
    {
      title: 'Toba',
      value: 'pariwisata-toba',
      content: (
        <div className={tabClass}>
          <BlurFade inView delay={0.2}>
            <p className=' text-xl font-bold md:text-4xl'>Komunitas Pariwisata Toba</p>
            <p className='mb-2 text-base text-foreground'>
              <strong className='font-bold'>Freelance Mobile Developer</strong> | October 2020 - January 2021
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='mt-5 list-disc space-y-2 font-sans text-base text-foreground md:ml-5'>
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
            <p className='text-xl font-bold md:text-4xl'>Jubelio</p>
            <p className='mb-2 text-base text-foreground'>
              <strong className='font-bold'>Intern Web Developer</strong> | October 2020 - January 2021
            </p>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <ul className='mt-5 list-disc space-y-2 text-left font-sans text-base text-foreground md:ml-5'>
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
    <div className='my-5 mb-14 flex h-[42rem] w-full flex-col items-start justify-start [perspective:1000px] md:h-[22rem]'>
      <Tabs activeTabClassName='text-blue-600' tabs={tabs} containerClassName='font-mono' contentClassName='mt-12' />
    </div>
  )
}
