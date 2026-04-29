import type { LessonV2 } from './types'
import rockCycleV2 from './lessons/rock-cycle-v2'
import mineralsV2 from './lessons/minerals-v2'
import plateTectonicsV2 from './lessons/plate-tectonics-v2'
import rockCycleIntermediateV2 from './lessons/rock-cycle-intermediate-v2'

export const LESSONS_V2: Record<string, LessonV2> = {
  'rock-cycle-v2': rockCycleV2,
  'minerals-v2': mineralsV2,
  'plate-tectonics-v2': plateTectonicsV2,
  'rock-cycle-intermediate-v2': rockCycleIntermediateV2,
}

export const LESSONS_V2_LIST: LessonV2[] = Object.values(LESSONS_V2)

export function isLessonV2(lesson: unknown): lesson is LessonV2 {
  return typeof lesson === 'object' && lesson !== null && (lesson as LessonV2).version === 2
}
