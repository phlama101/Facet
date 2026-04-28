'use client'

import { useState } from 'react'
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { useProgressStore } from '@/lessons-v2/store/progressStore'
import type { V2LabSection } from '@/lessons-v2/types'
import InteractionRenderer from '../interactions/InteractionRenderer'

interface Props {
  section: V2LabSection
  sectionKey: string
}

export default function LabBlock({ section, sectionKey }: Props) {
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [openHints, setOpenHints] = useState<Set<number>>(new Set())
  const [claimed, setClaimed] = useState(false)
  const { addXP, hasSectionXP } = useProgressStore()

  const xp = section.xpReward ?? 50
  const allDone = completed.size === section.steps.length
  const alreadyClaimed = hasSectionXP(sectionKey)

  function toggle(i: number) {
    setCompleted((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  function toggleHint(i: number) {
    setOpenHints((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  function claimXP() {
    if (alreadyClaimed || claimed) return
    addXP(xp, sectionKey)
    setClaimed(true)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.jade }}>
          Lab
        </p>
        <h2
          className="font-serif"
          style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', lineHeight: 1.15, color: BRAND.text }}
        >
          {section.title}
        </h2>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
        {section.premise}
      </p>

      {section.interaction && (
        <InteractionRenderer interaction={section.interaction} />
      )}

      {/* Steps */}
      <div className="space-y-3">
        {section.steps.map((step, i) => {
          const done = completed.has(i)
          const hintOpen = openHints.has(i)
          return (
            <div
              key={i}
              className="rounded-lg overflow-hidden"
              style={{
                border: `1px solid ${done ? BRAND.jade : BRAND.border}`,
                backgroundColor: done ? `${BRAND.jade}0D` : BRAND.surfaceHi,
              }}
            >
              <div className="flex items-start gap-3 p-4">
                <button
                  onClick={() => toggle(i)}
                  className="mt-0.5 shrink-0 transition-colors"
                  style={{ color: done ? BRAND.jade : BRAND.border }}
                >
                  <CheckCircle2 size={18} />
                </button>
                <div className="flex-1 space-y-2">
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: done ? BRAND.textDim : BRAND.text,
                      textDecoration: done ? 'line-through' : 'none',
                    }}
                  >
                    <span className="font-mono text-xs mr-2" style={{ color: BRAND.textSubtle }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step.instruction}
                  </p>

                  {step.hint && (
                    <button
                      onClick={() => toggleHint(i)}
                      className="flex items-center gap-1 text-xs transition-opacity hover:opacity-80"
                      style={{ color: BRAND.gold }}
                    >
                      {hintOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      {hintOpen ? 'Hide hint' : 'Show hint'}
                    </button>
                  )}

                  {hintOpen && step.hint && (
                    <p
                      className="text-xs leading-relaxed pl-3 border-l"
                      style={{ color: BRAND.gold, borderColor: `${BRAND.gold}40` }}
                    >
                      {step.hint}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* XP claim */}
      {allDone && (
        <button
          onClick={claimXP}
          disabled={alreadyClaimed || claimed}
          className="w-full py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-opacity disabled:opacity-50"
          style={{
            backgroundColor: BRAND.jade,
            color: BRAND.bg,
          }}
        >
          {alreadyClaimed || claimed ? `✓ +${xp} XP Earned` : `Claim +${xp} XP`}
        </button>
      )}
    </div>
  )
}
