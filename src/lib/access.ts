// Free tier: GEOL 101 M1.1 + M1.2, OCEA 101 M1.1, ATMO 101 M1.1, plus beginner minerals interactive.
export const FREE_LESSON_IDS = new Set([
  // GEOL 101 Module 1.1 — Earth's Internal Structure
  'geol-101-1-1',
  'geol-101-1-2',
  'geol-101-1-3',
  'geol-101-1-4',
  // GEOL 101 Module 1.2 — Minerals
  'geol-101-1-2-1',
  'geol-101-1-2-2',
  'geol-101-1-2-3',
  'geol-101-1-2-4',
  // Interactive
  'minerals',
  // OCEA 101 Module 1.1 — The Ocean Basin
  'ocea-101-1-1-1',
  'ocea-101-1-1-2',
  'ocea-101-1-1-3',
  'ocea-101-1-1-4',
  // ATMO 101 Module 1.1 — Structure of the Atmosphere
  'atmo-101-1-1-1',
  'atmo-101-1-1-2',
  'atmo-101-1-1-3',
  'atmo-101-1-1-4',
  // VOLC 101 Module 1.1 — Magma and Volcanism
  'volc-101-1-1-1',
  'volc-101-1-1-2',
  'volc-101-1-1-3',
  'volc-101-1-1-4',
  // CLIM 101 Module 1.1 — The Climate System
  'clim-101-1-1-1',
  'clim-101-1-1-2',
  'clim-101-1-1-3',
  'clim-101-1-1-4',
  // ASTR 101 Module 1.1 — Solar System Formation
  'astr-101-1-1-1',
  'astr-101-1-1-2',
  'astr-101-1-1-3',
  'astr-101-1-1-4',
])

export function canAccessLesson(lessonId: string, subscription: string | null | undefined): boolean {
  if (FREE_LESSON_IDS.has(lessonId)) return true
  return subscription === 'pro' || subscription === 'expert'
}
