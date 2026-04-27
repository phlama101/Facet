import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 250 XP per level — matches prototype
export const XP_PER_LEVEL = 250

// Legacy aliases kept for backward compatibility
export const xpProgress = xpProgressPct
export function difficultyColor(_d: string) { return '' }
export function categoryColor(_c: string)   { return '' }
export function rarityColor(_r: string)     { return '' }
export function xpForLevel(level: number)   { return (level - 1) * XP_PER_LEVEL }
export function formatXp(xp: number)        { return xp >= 1000 ? `${(xp / 1000).toFixed(1)}k` : String(xp) }

export function levelFromXp(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1
}

export function xpInLevel(xp: number): number {
  const level = levelFromXp(xp)
  return xp - (level - 1) * XP_PER_LEVEL
}

export function xpProgressPct(xp: number): number {
  return Math.min(100, Math.round((xpInLevel(xp) / XP_PER_LEVEL) * 100))
}
