import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function xpForLevel(level: number) {
  return level * 500
}

export function levelFromXp(xp: number) {
  return Math.floor(xp / 500) + 1
}

export function xpProgress(xp: number) {
  const level = levelFromXp(xp)
  const xpInLevel = xp - (level - 1) * 500
  return Math.round((xpInLevel / 500) * 100)
}

export function formatXp(xp: number): string {
  return xp >= 1000 ? `${(xp / 1000).toFixed(1)}k` : String(xp)
}

export function difficultyColor(difficulty: string): string {
  const map: Record<string, string> = {
    beginner:     'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    intermediate: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    advanced:     'text-orange-400 bg-orange-400/10 border-orange-400/20',
    expert:       'text-purple-400 bg-purple-400/10 border-purple-400/20',
  }
  return map[difficulty] ?? 'text-gray-400 bg-gray-400/10 border-gray-400/20'
}

export function categoryColor(category: string): string {
  const map: Record<string, string> = {
    geology:      '#f97316',
    oceanography: '#06b6d4',
    meteorology:  '#3b82f6',
    volcanology:  '#ef4444',
    paleontology: '#f59e0b',
    climatology:  '#10b981',
  }
  return map[category] ?? '#8b949e'
}

export function rarityColor(rarity: string): string {
  const map: Record<string, string> = {
    common:    'text-gray-300',
    rare:      'text-blue-400',
    epic:      'text-purple-400',
    legendary: 'text-amber-400',
  }
  return map[rarity] ?? 'text-gray-300'
}
