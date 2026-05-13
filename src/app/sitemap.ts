import type { MetadataRoute } from 'next'
import { LESSONS, LEARNING_PATHS } from '@/lessons/index'

const BASE = 'https://facet.academy'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/learn`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const lessonRoutes: MetadataRoute.Sitemap = Object.values(LESSONS).map(lesson => ({
    url: `${BASE}/learn/${lesson.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...lessonRoutes]
}
