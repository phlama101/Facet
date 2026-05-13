'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Mountain, Waves, Wind, Flame, Thermometer, Telescope, ArrowRight, Check } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'
import type { TrackId } from '@/lessons/types'

const TRACKS: { id: TrackId; label: string; icon: React.ElementType; color: string; desc: string; firstLesson: string }[] = [
  { id: 'geo', label: 'Geology',       icon: Mountain,    color: BRAND.coral,     desc: 'Rocks, deep time, earthquakes & plate tectonics',     firstLesson: 'geol-101-1-2-1' },
  { id: 'oce', label: 'Oceanography',  icon: Waves,       color: BRAND.accent,    desc: 'Ocean circulation, marine life & seafloor chemistry',  firstLesson: 'ocea-101-1-1-1' },
  { id: 'atm', label: 'Meteorology',   icon: Wind,        color: BRAND.gold,      desc: 'Atmosphere, weather systems & climate patterns',       firstLesson: 'atmo-101-1-1-1' },
  { id: 'vol', label: 'Volcanology',   icon: Flame,       color: BRAND.ruby,      desc: 'Magma, eruptions & volcanic hazards',                  firstLesson: 'volc-101-1-1-1' },
  { id: 'cli', label: 'Climate',       icon: Thermometer, color: BRAND.jade,      desc: 'Earth\'s climate history, feedbacks & projections',    firstLesson: 'clim-101-1-1-1' },
  { id: 'ast', label: 'Planetary',     icon: Telescope,   color: BRAND.amethyst,  desc: 'Solar system formation, exoplanets & astrobiology',   firstLesson: 'astr-101-1-1-1' },
]

export default function OnboardPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<TrackId | null>(null)

  useEffect(() => {
    if (localStorage.getItem('facet_onboarded')) {
      router.replace('/dashboard')
    }
  }, [router])

  function finish(trackId: TrackId) {
    localStorage.setItem('facet_onboarded', '1')
    const track = TRACKS.find(t => t.id === trackId)!
    router.push(`/learn/${track.firstLesson}`)
  }

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center px-5 py-12"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text }}
    >
      <FacetBackground />

      <div className="relative z-10 w-full max-w-xl">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center"><FacetLogo size={48} /></div>

              <div className="space-y-2">
                <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: BRAND.accent }}>
                  Welcome to Facet
                </div>
                <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 6vw, 52px)', lineHeight: 1.05 }}>
                  Earth science,<br />
                  <em style={{ color: BRAND.accent }}>one layer at a time</em>
                </h1>
                <p className="text-sm leading-relaxed mx-auto max-w-sm" style={{ color: BRAND.textDim }}>
                  Interactive lessons, real science, and a progress system that keeps you coming back. Let&apos;s find where you&apos;d like to start.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setStep(1)}
                  className="flex items-center justify-center gap-2 px-7 py-3 rounded-sm text-sm font-semibold tracking-[0.1em] uppercase"
                  style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
                >
                  Choose my first track <ArrowRight size={14} />
                </motion.button>
                <button
                  onClick={() => { localStorage.setItem('facet_onboarded', '1'); router.push('/learn') }}
                  className="px-7 py-3 rounded-sm text-sm tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
                  style={{ border: `1px solid ${BRAND.border}`, color: BRAND.textDim }}
                >
                  Browse all lessons
                </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="pick-track"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="text-center space-y-1">
                <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: BRAND.accent }}>Step 1 of 1</div>
                <h2 className="font-serif" style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.1 }}>
                  What draws you to Earth science?
                </h2>
                <p className="text-xs" style={{ color: BRAND.textSubtle }}>Pick one to start — you can always explore others later.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {TRACKS.map(track => {
                  const isSelected = selected === track.id
                  return (
                    <motion.button
                      key={track.id}
                      onClick={() => setSelected(isSelected ? null : track.id)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative text-left p-4 rounded-sm transition-all"
                      style={{
                        backgroundColor: isSelected ? `${track.color}12` : BRAND.surface,
                        border: `1px solid ${isSelected ? track.color : BRAND.border}`,
                        boxShadow: isSelected ? `0 0 16px ${track.color}20` : 'none',
                      }}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: track.color }}
                        >
                          <Check size={10} color={BRAND.bg} strokeWidth={3} />
                        </motion.div>
                      )}
                      <div className="flex items-center gap-2.5 mb-2">
                        <track.icon size={16} color={track.color} />
                        <span className="text-sm font-semibold" style={{ color: isSelected ? track.color : BRAND.text }}>
                          {track.label}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>{track.desc}</p>
                    </motion.button>
                  )
                })}
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={() => setStep(0)}
                  className="px-5 py-2.5 rounded-sm text-xs tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
                  style={{ color: BRAND.textDim }}
                >
                  Back
                </button>
                <motion.button
                  whileHover={selected ? { scale: 1.02 } : undefined}
                  whileTap={selected ? { scale: 0.97 } : undefined}
                  onClick={() => selected && finish(selected)}
                  disabled={!selected}
                  className="flex items-center gap-2 px-7 py-2.5 rounded-sm text-sm font-semibold tracking-[0.1em] uppercase disabled:opacity-40 transition-opacity"
                  style={{ backgroundColor: selected ? (TRACKS.find(t => t.id === selected)?.color ?? BRAND.accent) : BRAND.surface, color: selected ? BRAND.bg : BRAND.textDim, border: selected ? 'none' : `1px solid ${BRAND.border}` }}
                >
                  Start learning <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
