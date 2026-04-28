import type { LessonV2 } from './types'
import rockCycleV2 from './lessons/rock-cycle-v2'

export const LESSONS_V2: Record<string, LessonV2> = {
  'rock-cycle-v2': rockCycleV2,
}

export const LESSONS_V2_LIST: LessonV2[] = Object.values(LESSONS_V2)

export function isLessonV2(lesson: unknown): lesson is LessonV2 {
  return typeof lesson === 'object' && lesson !== null && (lesson as LessonV2).version === 2
}
