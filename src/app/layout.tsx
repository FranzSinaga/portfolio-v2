import ClientWrapper from './client-wrapper'
import { ScreenIndicator } from '@/components/signal-indicator'
import './globals.css'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

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
      <body className='transition-colors duration-500'>
        <div id='wrapper' className='bg-background transition-colors duration-500'>
          <ClientWrapper>{children}</ClientWrapper>
        </div>
        {process.env.NODE_ENV !== 'production' && <ScreenIndicator />}
      </body>
    </html>
  )
}
