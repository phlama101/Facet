// Free tier includes GEOL 101 Module 1.1 (Earth's Internal Structure) and
// Module 1.2 (Minerals) — 8 lessons total — plus the beginner minerals interactive lesson.
export const FREE_LESSON_IDS = new Set([
  'geol-101-1-1',
  'geol-101-1-2',
  'geol-101-1-3',
  'geol-101-1-4',
  'geol-101-1-2-1',
  'geol-101-1-2-2',
  'geol-101-1-2-3',
  'geol-101-1-2-4',
  'minerals-v2',
])

export function canAccessLesson(lessonId: string, subscription: string | null | undefined): boolean {
  if (FREE_LESSON_IDS.has(lessonId)) return true
  return subscription === 'pro' || subscription === 'expert'
}
