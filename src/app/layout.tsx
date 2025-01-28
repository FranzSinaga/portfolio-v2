import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { IS_LOCAL } from '@/lib/constants'

import ScreenIndicator from '@/components/screen-indicator'
import PageWrapper from '@/components/layout/page-wrapper'

import './globals.css'

export const metadata = {
  title: 'Franz',
  description:
    'Experienced web developer who showcases responsive and easy-to-use web applications. Skilled in front-end technologies, with a focus on clean code and innovative solutions.'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable} `}>
      <body className='bg-background transition-colors duration-500'>
        <div id='wrapper'>
          <PageWrapper>{children}</PageWrapper>
        </div>
        {IS_LOCAL && <ScreenIndicator />}
      </body>
    </html>
  )
}

export default RootLayout
