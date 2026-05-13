import { LEARNING_PATHS, LESSON_LIST } from '@/lessons/index'
import { BRAND } from '@/lib/brand'

export const LESSON_ID_SET = new Set(LESSON_LIST.map(l => l.id))

export interface AchCtx {
  count: number
  total: number
  streak: number
  xp: number
  level: number
  ids: string[]
}

export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
export type AchCategory = 'lessons' | 'xp' | 'streak' | 'level' | 'path'

export interface Achievement {
  id: string
  name: string
  desc: string
  category: AchCategory
  rarity: Rarity
  color: string
  xpBonus: number
  check: (ctx: AchCtx) => boolean
}

function availableInPath(pathId: string): string[] {
  const path = LEARNING_PATHS.find(p => p.id === pathId)
  if (!path) return []
  return path.chapters.flatMap(c => c.lessonIds).filter(id => LESSON_ID_SET.has(id))
}

export const ACHIEVEMENTS: Achievement[] = [
  // ── Lesson count milestones ───────────────────────────────────────────────
  { id: 'first-step',       name: 'First Facet',         desc: 'Complete your first lesson',         category: 'lessons', rarity: 'common',    color: BRAND.accent,   xpBonus: 50,   check: c => c.count >= 1 },
  { id: 'three-edges',      name: 'Three Edges',          desc: 'Complete 3 lessons',                 category: 'lessons', rarity: 'common',    color: BRAND.jade,     xpBonus: 75,   check: c => c.count >= 3 },
  { id: 'sedimentary-stack',name: 'Sedimentary Stack',    desc: 'Complete 5 lessons',                 category: 'lessons', rarity: 'common',    color: BRAND.gold,     xpBonus: 100,  check: c => c.count >= 5 },
  { id: 'decahedral',       name: 'Decahedral',           desc: 'Complete 10 lessons',                category: 'lessons', rarity: 'uncommon',  color: BRAND.gold,     xpBonus: 200,  check: c => c.count >= 10 },
  { id: 'field-ready',      name: 'Field Ready',          desc: 'Complete 20 lessons',                category: 'lessons', rarity: 'uncommon',  color: BRAND.coral,    xpBonus: 300,  check: c => c.count >= 20 },
  { id: 'deep-section',     name: 'Deep Section',         desc: 'Complete 35 lessons',                category: 'lessons', rarity: 'rare',      color: BRAND.coral,    xpBonus: 500,  check: c => c.count >= 35 },
  { id: 'half-century',     name: 'Half Century',         desc: 'Complete 50 lessons',                category: 'lessons', rarity: 'rare',      color: BRAND.amethyst, xpBonus: 750,  check: c => c.count >= 50 },
  { id: 'rock-record',      name: 'Rock Record',          desc: 'Complete 75 lessons',                category: 'lessons', rarity: 'epic',      color: BRAND.ruby,     xpBonus: 1000, check: c => c.count >= 75 },
  { id: 'century-scholar',  name: 'Century Scholar',      desc: 'Complete 100 lessons',               category: 'lessons', rarity: 'epic',      color: BRAND.gold,     xpBonus: 1500, check: c => c.count >= 100 },
  { id: 'obsidian-scholar', name: 'Obsidian Scholar',     desc: 'Complete every available lesson',    category: 'lessons', rarity: 'legendary', color: BRAND.amethyst, xpBonus: 2000, check: c => c.count >= c.total && c.total > 0 },

  // ── XP milestones ─────────────────────────────────────────────────────────
  { id: 'xp-500',  name: 'Spark',       desc: 'Earn 500 XP',    category: 'xp', rarity: 'common',    color: BRAND.accent,   xpBonus: 50,   check: c => c.xp >= 500 },
  { id: 'xp-1k',   name: 'Brilliant',   desc: 'Earn 1,000 XP',  category: 'xp', rarity: 'uncommon',  color: BRAND.gold,     xpBonus: 150,  check: c => c.xp >= 1000 },
  { id: 'xp-2500', name: 'Crystalline', desc: 'Earn 2,500 XP',  category: 'xp', rarity: 'rare',      color: BRAND.amethyst, xpBonus: 300,  check: c => c.xp >= 2500 },
  { id: 'xp-5k',   name: 'Igneous',     desc: 'Earn 5,000 XP',  category: 'xp', rarity: 'epic',      color: BRAND.ruby,     xpBonus: 500,  check: c => c.xp >= 5000 },
  { id: 'xp-10k',  name: 'Metamorphic', desc: 'Earn 10,000 XP', category: 'xp', rarity: 'legendary', color: BRAND.gold,     xpBonus: 1000, check: c => c.xp >= 10000 },

  // ── Streak milestones ─────────────────────────────────────────────────────
  { id: 'streak-3',   name: 'Three Continuous', desc: 'Maintain a 3-day streak',   category: 'streak', rarity: 'common',    color: BRAND.jade,     xpBonus: 75,   check: c => c.streak >= 3 },
  { id: 'streak-7',   name: 'Steady Hand',      desc: 'Maintain a 7-day streak',   category: 'streak', rarity: 'uncommon',  color: BRAND.jade,     xpBonus: 200,  check: c => c.streak >= 7 },
  { id: 'streak-14',  name: 'Fortnight Force',  desc: 'Maintain a 14-day streak',  category: 'streak', rarity: 'rare',      color: BRAND.gold,     xpBonus: 400,  check: c => c.streak >= 14 },
  { id: 'streak-30',  name: 'Monthly Devotion', desc: 'Maintain a 30-day streak',  category: 'streak', rarity: 'epic',      color: BRAND.amethyst, xpBonus: 750,  check: c => c.streak >= 30 },
  { id: 'streak-100', name: 'Centenarian',      desc: 'Maintain a 100-day streak', category: 'streak', rarity: 'legendary', color: BRAND.ruby,     xpBonus: 2000, check: c => c.streak >= 100 },

  // ── Level milestones ──────────────────────────────────────────────────────
  { id: 'level-5',  name: 'Polished',    desc: 'Reach level 5',  category: 'level', rarity: 'uncommon',  color: BRAND.accent,   xpBonus: 250,  check: c => c.level >= 5 },
  { id: 'level-10', name: 'Hardened Core', desc: 'Reach level 10', category: 'level', rarity: 'rare',    color: BRAND.coral,    xpBonus: 500,  check: c => c.level >= 10 },
  { id: 'level-15', name: 'Crystallised', desc: 'Reach level 15', category: 'level', rarity: 'epic',     color: BRAND.amethyst, xpBonus: 1000, check: c => c.level >= 15 },
  { id: 'level-20', name: 'Masterwork',   desc: 'Reach level 20', category: 'level', rarity: 'legendary',color: BRAND.gold,     xpBonus: 2000, check: c => c.level >= 20 },

  // ── Path completion ───────────────────────────────────────────────────────
  {
    id: 'path-earth-foundations', name: 'Earth Foundations Graduate', desc: 'Complete all Earth Foundations lessons',
    category: 'path', rarity: 'rare', color: BRAND.jade, xpBonus: 750,
    check: c => { const ids = availableInPath('earth-foundations'); return ids.length > 0 && ids.every(id => c.ids.includes(id)) },
  },
  {
    id: 'path-deep-time', name: 'Deep Time Graduate', desc: 'Complete all Deep Time lessons',
    category: 'path', rarity: 'epic', color: BRAND.amethyst, xpBonus: 1500,
    check: c => { const ids = availableInPath('deep-time'); return ids.length > 0 && ids.every(id => c.ids.includes(id)) },
  },
  {
    id: 'path-ocean-systems', name: 'Oceanographer', desc: 'Complete all Ocean Systems lessons',
    category: 'path', rarity: 'rare', color: BRAND.accent, xpBonus: 750,
    check: c => { const ids = availableInPath('ocean-systems'); return ids.length > 0 && ids.every(id => c.ids.includes(id)) },
  },
  {
    id: 'path-atmosphere', name: 'Meteorologist', desc: 'Complete all Atmosphere & Weather lessons',
    category: 'path', rarity: 'rare', color: BRAND.jade, xpBonus: 750,
    check: c => { const ids = availableInPath('atmosphere-weather'); return ids.length > 0 && ids.every(id => c.ids.includes(id)) },
  },
  {
    id: 'path-volcanoes', name: 'Volcanologist', desc: 'Complete all Volcanoes lessons',
    category: 'path', rarity: 'rare', color: BRAND.coral, xpBonus: 750,
    check: c => { const ids = availableInPath('volcanoes'); return ids.length > 0 && ids.every(id => c.ids.includes(id)) },
  },
  {
    id: 'path-climate', name: 'Climate Scientist', desc: 'Complete all Climate, Past & Future lessons',
    category: 'path', rarity: 'epic', color: BRAND.ruby, xpBonus: 1500,
    check: c => { const ids = availableInPath('climate-past-future'); return ids.length > 0 && ids.every(id => c.ids.includes(id)) },
  },
  {
    id: 'path-solar-system', name: 'Solar System Explorer', desc: 'Complete all Solar System lessons',
    category: 'path', rarity: 'rare', color: BRAND.gold, xpBonus: 750,
    check: c => { const ids = availableInPath('solar-system'); return ids.length > 0 && ids.every(id => c.ids.includes(id)) },
  },
  {
    id: 'path-all-complete', name: 'Grand Naturalist', desc: 'Complete every learning path',
    category: 'path', rarity: 'legendary', color: BRAND.amethyst, xpBonus: 5000,
    check: c => {
      const allIds = LEARNING_PATHS.flatMap(p => p.chapters.flatMap(ch => ch.lessonIds).filter(id => LESSON_ID_SET.has(id)))
      return allIds.length > 0 && allIds.every(id => c.ids.includes(id))
    },
  },
]

export const RARITY_LABEL: Record<Rarity, string> = {
  legendary: 'Legendary',
  epic:      'Epic',
  rare:      'Rare',
  uncommon:  'Uncommon',
  common:    'Common',
}

export const ACHIEVEMENT_GROUPS: { key: AchCategory; label: string }[] = [
  { key: 'lessons', label: 'Lesson Milestones' },
  { key: 'xp',     label: 'XP Milestones' },
  { key: 'streak', label: 'Streak Milestones' },
  { key: 'level',  label: 'Level Milestones' },
  { key: 'path',   label: 'Path Completions' },
]

export function computeUnlockedIds(ctx: AchCtx): string[] {
  return ACHIEVEMENTS.filter(a => a.check(ctx)).map(a => a.id)
}
