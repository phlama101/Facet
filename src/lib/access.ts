// Free tier: GEOL 101 M1.1 + M1.2 (8 geology lessons), OCEA 101 M1.1 (4 ocean basin lessons),
// plus beginner minerals interactive lesson.
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
  'minerals-v2',
  // OCEA 101 Module 1.1 — The Ocean Basin
  'ocea-101-1-1-1',
  'ocea-101-1-1-2',
  'ocea-101-1-1-3',
  'ocea-101-1-1-4',
])

export function canAccessLesson(lessonId: string, subscription: string | null | undefined): boolean {
  if (FREE_LESSON_IDS.has(lessonId)) return true
  return subscription === 'pro' || subscription === 'expert'
}
