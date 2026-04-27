import type { Metadata } from 'next'
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { PostHogProvider } from '@/components/providers/PostHogProvider'

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
})

const sans = Inter_Tight({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Facet — Every facet of earth science', template: '%s | Facet' },
  description: 'The specialist earth-sciences learning platform. Geology, oceanography, meteorology, volcanology, climate, and planetary science — from first principles to expert depth.',
  keywords: ['earth science', 'geology', 'oceanography', 'volcanology', 'meteorology', 'learning', 'education'],
  authors: [{ name: 'Facet' }],
  creator: 'Facet',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://facet.academy',
    siteName: 'Facet',
    title: 'Facet — Every facet of earth science',
    description: 'The specialist earth-sciences learning platform.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facet — Every facet of earth science',
    description: 'The specialist earth-sciences learning platform.',
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-brand-bg text-brand-text font-sans antialiased">
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
