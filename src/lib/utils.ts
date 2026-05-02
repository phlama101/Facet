import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Triangular XP curve: total XP to start level n = 500 * (n-1) * n / 2
// Level n→n+1 requires exactly 500*n XP.
// Examples: L1→L2 = 500 XP (2 lessons), L2→L3 = 1000 XP, L5→L6 = 2500 XP

export function levelFromXp(xp: number): number {
  // Solve: 500*(n-1)*n/2 = xp  ⟹  n = (1 + √(1 + 8·xp/500)) / 2
  return Math.max(1, Math.floor((1 + Math.sqrt(1 + 8 * xp / 500)) / 2))
}

export function totalXpForLevel(level: number): number {
  return 500 * (level - 1) * level / 2
}

export function xpInLevel(xp: number): number {
  return xp - totalXpForLevel(levelFromXp(xp))
}

export function xpNeededForLevel(level: number): number {
  return 500 * level
}

export function xpProgressPct(xp: number): number {
  const level = levelFromXp(xp)
  return Math.min(100, Math.round((xpInLevel(xp) / xpNeededForLevel(level)) * 100))
}

export function formatXp(xp: number): string {
  return xp >= 1000 ? `${(xp / 1000).toFixed(1)}k` : String(xp)
}

export const LEVEL_TITLES = [
  '',                   // 0 (unused)
  'Field Recruit',      // 1
  'Rock Hound',         // 2
  'Fossil Scout',       // 3
  'Surface Mapper',     // 4
  'Field Geologist',    // 5
  'Stratum Reader',     // 6
  'Seismic Analyst',    // 7
  'Tectonic Scout',     // 8
  'Basin Explorer',     // 9
  'Formation Master',   // 10
  'Deep Time Scholar',  // 11
  'Palaeontologist',    // 12
  'Stratigrapher',      // 13
  'Geomorphologist',    // 14
  'Earth Historian',    // 15
  'Petrologist',        // 16
  'Geodynamicist',      // 17
  'Research Geologist', // 18
  'Geoscientist',       // 19
  'Earth Scientist',    // 20
]

export function levelTitle(level: number): string {
  return LEVEL_TITLES[level] ?? `Earth Scientist ${level - 19}`
}

// Legacy aliases — kept for backward compatibility
/** @deprecated use xpNeededForLevel(level) for the current level's XP ceiling */
export const XP_PER_LEVEL = 500
export const xpProgress = xpProgressPct
export function difficultyColor(_d: string) { return '' }
export function categoryColor(_c: string)   { return '' }
export function rarityColor(_r: string)     { return '' }
export function xpForLevel(level: number)   { return totalXpForLevel(level) }
