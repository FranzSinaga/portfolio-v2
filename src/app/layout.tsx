import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { ScreenIndicator } from '@/components/signal-indicator'
import ClientWrapper from './client-wrapper'

import { IS_LOCAL } from '@/lib/constants'
import './globals.css'

export const metadata = {
  title: 'Franz',
  description:
    'Experienced web developer who showcases responsive and easy-to-use web applications. Skilled in front-end technologies, with a focus on clean code and innovative solutions.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable}
    `}
    >
      <body>
        <div id='wrapper' className='bg-background transition-colors duration-500'>
          <ClientWrapper>{children}</ClientWrapper>
        </div>
        {IS_LOCAL && <ScreenIndicator />}
      </body>
    </html>
  )
}
