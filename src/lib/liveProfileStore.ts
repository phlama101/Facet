import { create } from 'zustand'

interface LiveProfileState {
  xp: number | null
  level: number | null
  streak: number | null
  update: (xp: number, level: number, streak: number) => void
}

export const useLiveProfileStore = create<LiveProfileState>((set) => ({
  xp: null,
  level: null,
  streak: null,
  update: (xp, level, streak) => set({ xp, level, streak }),
}))
