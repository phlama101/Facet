'use client'

import { useState } from 'react'
import { Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { useProgressStore } from '@/lessons-v2/store/progressStore'
import type { V2ChallengeSection } from '@/lessons-v2/types'
import InteractionRenderer from '../interactions/InteractionRenderer'

interface Props {
  section: V2ChallengeSection
  sectionKey: string
}

export default function ChallengeBlock({ section, sectionKey }: Props) {
  const [claimed, setClaimed] = useState(false)
  const { addXP, hasSectionXP } = useProgressStore()

  const xp = section.xpReward ?? 75
  const alreadyClaimed = hasSectionXP(sectionKey)

  function claimXP() {
    if (alreadyClaimed || claimed) return
    addXP(xp, sectionKey)
    setClaimed(true)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.gold }}>
          Challenge
        </p>
        <h2
          className="font-serif"
          style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', lineHeight: 1.15, color: BRAND.text }}
        >
          {section.title}
        </h2>
      </div>

      <div
        className="rounded-xl p-5"
        style={{ backgroundColor: `${BRAND.gold}0D`, border: `1px solid ${BRAND.gold}33` }}
      >
        <p className="text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
          {section.prompt}
        </p>
      </div>

      {section.interaction && (
        <InteractionRenderer interaction={section.interaction} />
      )}

      <button
        onClick={claimXP}
        disabled={alreadyClaimed || claimed}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-opacity disabled:opacity-50"
        style={{ backgroundColor: BRAND.gold, color: BRAND.bg }}
      >
        <Zap size={14} />
        {alreadyClaimed || claimed ? `✓ +${xp} XP Earned` : `Complete Challenge · +${xp} XP`}
      </button>
    </div>
  )
}
