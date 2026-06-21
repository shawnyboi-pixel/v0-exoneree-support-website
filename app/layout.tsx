import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { RootLayoutClient } from '@/components/root-layout-client'
import { FooterWrapper } from '@/components/footer-wrapper'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
})

export const metadata: Metadata = {
  title: 'Ide Project | Helping Exonerees Every Step of the Way Through',
  description:
    'The Ide Project is a platform dedicated to supporting post-release exonerees.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#9d7c5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} bg-background h-screen w-screen overflow-x-hidden`}
    >
      <body className="font-sans antialiased bg-background m-0 p-0 h-screen w-screen overflow-x-hidden">
        <RootLayoutClient>
          <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1 bg-background">{children}</main>
            <FooterWrapper />
          </div>
        </RootLayoutClient>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
