import type { Metadata } from 'next'
import { Anton, Barlow, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CoreVision AI Labs — We build AI products that work.',
  description:
    'Berlin-based AI product studio. We ship real AI products — Kreashot, Voltic, GEORAYDAR, AdProfit, IntelliSync, and Market-Intel.',
  keywords: ['AI products', 'Berlin startup', 'ad creative AI', 'market intelligence', 'geo tracking AI'],
  openGraph: {
    title: 'CoreVision AI Labs',
    description: 'We build AI products that work.',
    url: 'https://corevisionailabs.com',
    siteName: 'CoreVision AI Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoreVision AI Labs',
    description: 'We build AI products that work.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${barlow.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
