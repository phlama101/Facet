'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { IntroSection } from '@/lessons/types'

function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    const parts = para.split(/\*\*(.*?)\*\*/g).map((chunk, j) =>
      j % 2 === 1
        ? <strong key={j} style={{ color: BRAND.gold, fontWeight: 600 }}>{chunk}</strong>
        : chunk
    )
    return (
      <p key={i} className="mb-4 leading-[1.75] text-[15px]" style={{ color: BRAND.text }}>
        {parts}
      </p>
    )
  })
}

function KeyTermItem({ term, def }: { term: string; def: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-sm overflow-hidden transition-colors"
      style={{
        border: `1px solid ${open ? BRAND.accent : BRAND.border}`,
        borderLeft: `3px solid ${open ? BRAND.accent : BRAND.border}`,
        backgroundColor: open ? BRAND.surfaceHi : BRAND.surface,
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span
          className="font-serif text-[17px] leading-snug"
          style={{ color: open ? BRAND.accent : BRAND.text }}
        >
          {term}
        </span>
        <div
          className="w-5 h-5 rounded-sm flex items-center justify-center shrink-0"
          style={{ backgroundColor: open ? `${BRAND.accent}20` : BRAND.surfaceHi }}
        >
          {open
            ? <Minus size={11} color={BRAND.accent} />
            : <Plus size={11} color={BRAND.textSubtle} />
          }
        </div>
      </button>
      {open && (
        <div
          className="px-4 pb-4 text-sm leading-relaxed"
          style={{ color: BRAND.textDim, borderTop: `1px solid ${BRAND.accent}20` }}
        >
          <div className="pt-3">{def}</div>
        </div>
      )}
    </div>
  )
}

export default function SectionIntro({ section }: { section: IntroSection }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-3"
        style={{ color: BRAND.textSubtle }}
      >
        Introduction
      </div>
      <h2
        className="font-serif mb-6"
        style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1.15 }}
      >
        {section.title}
      </h2>

      {renderBody(section.body)}

      {section.keyTerms && section.keyTerms.length > 0 && (
        <div className="mt-8">
          <div
            className="text-[10px] tracking-[0.25em] uppercase mb-3"
            style={{ color: BRAND.accent }}
          >
            Key Terms — tap to expand
          </div>
          <div className="space-y-1.5">
            {section.keyTerms.map((kt, i) => (
              <KeyTermItem key={i} term={kt.term} def={kt.def} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
