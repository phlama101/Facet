import { create } from 'zustand'

interface ProgressState {
  xp: number
  earnedSections: Set<string>
  addXP: (amount: number, sectionKey?: string) => void
  markSection: (key: string) => void
  hasSectionXP: (key: string) => boolean
  reset: () => void
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  xp: 0,
  earnedSections: new Set(),

  addXP: (amount, sectionKey) => {
    if (sectionKey && get().earnedSections.has(sectionKey)) return
    set((state) => {
      const next = new Set(state.earnedSections)
      if (sectionKey) next.add(sectionKey)
      return { xp: state.xp + amount, earnedSections: next }
    })
  },

  markSection: (key) => {
    set((state) => {
      const next = new Set(state.earnedSections)
      next.add(key)
      return { earnedSections: next }
    })
  },

  hasSectionXP: (key) => get().earnedSections.has(key),

  reset: () => set({ xp: 0, earnedSections: new Set() }),
}))
