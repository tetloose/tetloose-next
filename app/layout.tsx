import { AppProvider } from '@context/App/App.context'
import { Grid } from '@foundations/Grid/Grid.component'
import { Notification } from '@atoms/Notification/Notification.component'
import { Footer } from '@layouts/Footer/Footer.component'
import { Header } from '@layouts/Header/Header.component'
import type { GlobalChildren } from '@global/global.types'
import type { Metadata } from 'next'
import '@styles/app.scss'

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
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

export default async function RootLayout({ children }: GlobalChildren) {
  return (
    <html lang='en'>
      <body>
        <Notification />
        <AppProvider>
          <Grid
            tag={'div'}
            height={{ default: 'viewport-fullscreen' }}
            rows={{ default: ['min-content', 'auto', 'min-content'] }}
            columns={{ default: [1] }}
          >
            <Header />
            <Grid.Item
              tag={'main'}
              rows={{ default: [2] }}
              columns={{ default: [1] }}
            >
              {children}
            </Grid.Item>
            <Footer />
          </Grid>
        </AppProvider>
      </body>
    </html>
  )
}
