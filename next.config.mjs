import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'earthobservatory.nasa.gov' },
      { protocol: 'https', hostname: 'photolib.noaa.gov' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default withSentryConfig(nextConfig, {
  // Suppress noisy build output; set CI=true in CI environments to see output
  silent: !process.env.CI,
  // Proxy client-side Sentry requests through Next.js to avoid ad blockers
  tunnelRoute: '/monitoring',
  // Remove Sentry debug logs from production bundles
  disableLogger: true,
  // Source map upload — set SENTRY_ORG and SENTRY_PROJECT env vars to enable
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
})
