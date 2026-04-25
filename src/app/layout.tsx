import type { Metadata } from 'next'
import './globals.css'
import { PostHogProvider } from '@/components/providers/PostHogProvider'

export const metadata: Metadata = {
  title: { default: 'Facet — Earth Sciences Learning', template: '%s | Facet' },
  description: 'Master Earth sciences through gamified, interactive learning. Geology, oceanography, volcanology, paleontology and more — from beginner to expert.',
  keywords: ['earth science', 'geology', 'oceanography', 'learning', 'education', 'gamified'],
  authors: [{ name: 'Facet' }],
  creator: 'Facet',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Facet',
    title: 'Facet — Earth Sciences Learning',
    description: 'Master Earth sciences through gamified, interactive learning.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facet — Earth Sciences Learning',
    description: 'Master Earth sciences through gamified, interactive learning.',
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface antialiased">
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
