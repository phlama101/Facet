'use client'

import { useState } from 'react'
import { BRAND } from '@/lib/brand'
import type { ConceptSection } from '@/lessons/types'

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

export default function SectionConcept({
  section,
  sectionNumber,
}: {
  section: ConceptSection
  sectionNumber: number
}) {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-3"
        style={{ color: BRAND.textSubtle }}
      >
        Section {sectionNumber}
      </div>
      <h2
        className="font-serif mb-6"
        style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1.15 }}
      >
        {section.title}
      </h2>

      {renderBody(section.body)}

      {section.cards && (
        <div className="mt-8 grid md:grid-cols-2 gap-3">
          {section.cards.map((card, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              className="text-left p-5 rounded-sm transition-all"
              style={{
                backgroundColor: activeCard === i ? BRAND.surfaceHi : BRAND.surface,
                border: `1px solid ${activeCard === i ? card.color : BRAND.border}`,
              }}
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <div
                className="font-serif"
                style={{ fontSize: '22px', color: card.color }}
              >
                {card.name}
              </div>
              <div className="text-xs mt-2 leading-relaxed" style={{ color: BRAND.textDim }}>
                {card.desc}
              </div>
              {card.examples && (
                <div
                  className="mt-3 text-[10px] tracking-[0.15em] uppercase font-mono"
                  style={{ color: BRAND.textSubtle }}
                >
                  {card.examples}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
