import Script from 'next/script'
import React from 'react'
// import dynamic from 'next/dynamic'

const Timeline = () => {
  return (
    <>
      <Script src='https://unpkg.com/flowbite@1.5.3/dist/flowbite.js' defer />
      <div className='max-w-3xl md:flex md:justify-end'>
        <div className='mb-4'>
          <ul className='flex flex-row flex-wrap text-sm font-medium md:max-w-xs' id='myTab' data-tabs-toggle='#myTabContent' role='tablist'>
            <li className='mr-' role='presentation'>
              <button
                className='inline-block border-b-2 border-l-0 border-blue-600 p-4 text-left text-blue-600 hover:text-blue-600 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-500 md:w-48 md:border-b-0 md:border-l-2'
                id='profile-tab'
                data-tabs-target='#profile'
                type='button'
                role='tab'
                aria-controls='profile'
                aria-selected='true'
              >
                BRI
              </button>
            </li>
            <li className='mr-2' role='presentation'>
              <button
                className='inline-block border-b-2 border-l-0 border-blue-600 p-4 text-left text-blue-600 hover:text-blue-600 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-500 md:w-48 md:border-b-0 md:border-l-2'
                id='dashboard-tab'
                data-tabs-target='#dashboard'
                type='button'
                role='tab'
                aria-controls='dashboard'
                aria-selected='false'
              >
                Lawencon
              </button>
            </li>
            <li className='mr-2' role='presentation'>
              <button
                className='inline-block border-b-2 border-l-0 border-blue-600 p-4 text-left text-blue-600 hover:text-blue-600 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-500 md:w-48 md:border-b-0 md:border-l-2'
                id='settings-tab'
                data-tabs-target='#settings'
                type='button'
                role='tab'
                aria-controls='settings'
                aria-selected='false'
              >
                Komunitas Pariwisata <br />
                Toba
              </button>
            </li>
            <li role='presentation'>
              <button
                className='inline-block border-b-2 border-l-0 border-blue-600 p-4 text-left text-blue-600 hover:text-blue-600 dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-500 md:w-48 md:border-b-0 md:border-l-2'
                id='contacts-tab'
                data-tabs-target='#contacts'
                type='button'
                role='tab'
                aria-controls='contacts'
                aria-selected='false'
              >
                Jubelio
              </button>
            </li>
          </ul>
        </div>
        <div id='myTabContent' className='w-full'>
          <div className='rounded-lg bg-gray-50 p-4 dark:bg-gray-800' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
            <p className='text-md mb-2 text-black dark:text-gray-400'>
              <strong className='font-large text-gray-800 dark:text-white'>Frontend Developer</strong> | March 2021 - Present
            </p>
            <ul className='ml-5 list-disc'>
              <li className='text-sm text-black dark:text-gray-400'>Building NDS (New Delivery System) applications using Quasar Framework (Vue)</li>
              <li className='text-sm text-black dark:text-gray-400'>Implementing Vuex as state management on web applications to facilitate application development</li>
              <li className='text-sm text-black dark:text-gray-400'>
                Implement Protobuf (Protocol Buffer) as a communication medium between Frontend and Backend to speed up data exchange
              </li>
              <li className='text-sm text-black dark:text-gray-400'>Implementing PWAs to optimize web applications</li>
              <li className='text-sm text-black dark:text-gray-400'>Collaborate with Teams using the Agile Scrum method to speed up the web application development process</li>
            </ul>
          </div>
          <div className='hidden  rounded-lg bg-gray-50 p-4 dark:bg-gray-800' id='dashboard' role='tabpanel' aria-labelledby='dashboard-tab'>
            <p className='text-md mb-2 text-black dark:text-gray-400'>
              <strong className='font-large text-gray-800 dark:text-white'>Frontend Developer</strong> | January 2021 - March 2021
            </p>
            <ul className='ml-5 list-disc'>
              <li className='text-sm text-black dark:text-gray-400'>Building a LinovHR web application using the Angular framework</li>
              <li className='text-sm text-black dark:text-gray-400'>Implementing Redux as state management on web applications to facilitate application development</li>
              <li className='text-sm text-black dark:text-gray-400'>Working with other developers to implement the RESTFul API in web application development</li>
            </ul>
          </div>
          <div className='hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800' id='settings' role='tabpanel' aria-labelledby='settings-tab'>
            <p className='text-md mb-2 text-black dark:text-gray-400'>
              <strong className='font-large text-gray-800 dark:text-white'>Freelance Mobile Developer</strong> | October 2020 - January 2021
            </p>
            <ul className='ml-5 list-disc'>
              <li className='text-sm text-black dark:text-gray-400'>
                Build a mobile application SIAPPARA-INANGBAO (Sistem Informasi Pemungutan dan Pelaporan Retribusi Pasar) using React Native
              </li>
              <li className='text-sm text-black dark:text-gray-400'>Designing business processes, databases, and mobile application interface displays</li>
              <li className='text-sm text-black dark:text-gray-400'>
                Successfully assisted market officials in administering user fees at twelve markets in the Humbang Hasundutan district
              </li>
            </ul>
          </div>
          <div className='hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800' id='contacts' role='tabpanel' aria-labelledby='contacts-tab'>
            <p className='text-md mb-2 text-black dark:text-gray-400'>
              <strong className='font-large text-gray-800 dark:text-white'>Intern Web Developer</strong> | October 2020 - January 2021
            </p>
            <ul className='ml-5 list-disc'>
              <li className='text-sm text-black dark:text-gray-400 '>
                Build a Jubelio Finance System using Laravel, a medium for recording customer fines on the use of the Jubelio platform so that it helps companies increase revenue
              </li>
              <li className='text-sm text-black dark:text-gray-400'>Re-engineering the Analisa Data Penjualan Jubelio system to help customers improve their sales strategy</li>
              <li className='text-sm text-black dark:text-gray-400'>Create SQL Query related to transaction reports, to assist users in managing finances</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
