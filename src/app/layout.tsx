import type { Metadata } from 'next'

import './globals.scss'
import { PageHeader } from './components'

const metadata: Metadata = {
  title: ' UX | Liv Mari',
  description: `A human-centred product designer`,
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang={'en'}>
      <body>
        <PageHeader />

        {children}
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout
