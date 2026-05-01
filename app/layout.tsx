import { LOCALE, SITE_URL } from '@global/global.constants'
import { AppProvider } from '@context/app/app.context'
import type { GlobalChildren } from '@global/global.types'
import type { Metadata } from 'next'
import '@styles/app.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: '/assets/favicons/favicon.ico', sizes: 'any' },
      { url: '/assets/favicons/favicon.svg', type: 'image/svg+xml' },
      {
        url: '/assets/favicons/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/assets/favicons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  }
}

export default function RootLayout({ children }: GlobalChildren) {
  return (
    <html lang={LOCALE}>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
