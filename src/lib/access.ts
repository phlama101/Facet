// Free tier: Earth Foundations Ch.1 + Ch.2, plus Ch.1 of every other path.
export const FREE_LESSON_IDS = new Set([
  // Earth Foundations — Chapter 1: Earth's Interior
  'geol-101-1-1',
  'geol-101-1-2',
  'geol-101-1-3',
  'geol-101-1-4',
  // Earth Foundations — Chapter 2: Minerals & Crystals
  'geol-101-1-2-1',
  'geol-101-1-2-2',
  'geol-101-1-2-3',
  'geol-101-1-2-4',
  // Interactive
  'minerals',
  // Ocean Systems — Chapter 1: The Ocean Basin
  'ocea-101-1-1-1',
  'ocea-101-1-1-2',
  'ocea-101-1-1-3',
  'ocea-101-1-1-4',
  // Atmosphere & Weather — Chapter 1: Atmospheric Structure
  'atmo-101-1-1-1',
  'atmo-101-1-1-2',
  'atmo-101-1-1-3',
  'atmo-101-1-1-4',
  // Volcanoes — Chapter 1: Magma & Volcanism
  'volc-101-1-1-1',
  'volc-101-1-1-2',
  'volc-101-1-1-3',
  'volc-101-1-1-4',
  // Climate, Past & Future — Chapter 1: The Climate System
  'clim-101-1-1-1',
  'clim-101-1-1-2',
  'clim-101-1-1-3',
  'clim-101-1-1-4',
  // Solar System — Chapter 1: Solar System Formation
  'astr-101-1-1-1',
  'astr-101-1-1-2',
  'astr-101-1-1-3',
  'astr-101-1-1-4',
])

export function canAccessLesson(lessonId: string, subscription: string | null | undefined): boolean {
  if (FREE_LESSON_IDS.has(lessonId)) return true
  return subscription === 'pro' || subscription === 'expert'
}
