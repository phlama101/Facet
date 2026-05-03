'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { ConceptSection } from '@/lessons/types'
import V1InteractionRenderer from '@/components/interactions/V1InteractionRenderer'

function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    const parts = para.split(/\*\*(.*?)\*\*/g).map((chunk, j) =>
      j % 2 === 1
        ? <strong key={j} style={{ color: BRAND.gold, fontWeight: 600 }}>{chunk}</strong>
        : chunk
    )
    return (
      <p key={i} className="mb-4 leading-[1.8] text-[16px]" style={{ color: BRAND.text }}>
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

      {section.interaction && (
        <div className="mt-8">
          <V1InteractionRenderer interaction={section.interaction} />
        </div>
      )}

      {section.cards && (
        <div className="mt-8 space-y-2">
          {section.cards.map((card, i) => {
            const Icon = card.icon
            const isOpen = activeCard === i
            return (
              <div
                key={i}
                className="rounded-sm overflow-hidden"
                style={{
                  border: `1px solid ${isOpen ? card.color : BRAND.border}`,
                  borderLeft: `3px solid ${isOpen ? card.color : BRAND.border}`,
                  backgroundColor: isOpen ? BRAND.surfaceHi : BRAND.surface,
                  transition: 'border-color 0.15s, background-color 0.15s',
                }}
              >
                <button
                  onClick={() => setActiveCard(isOpen ? null : i)}
                  className="w-full text-left flex items-center gap-4 px-5 py-4"
                >
                  {/* Icon badge */}
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${card.color}1A` }}
                  >
                    <Icon size={18} color={card.color} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className="font-serif leading-tight"
                      style={{ fontSize: '18px', color: isOpen ? card.color : BRAND.text }}
                    >
                      {card.name}
                    </div>
                    {!isOpen && card.examples && (
                      <div
                        className="text-[10px] tracking-[0.12em] uppercase font-mono mt-0.5 truncate"
                        style={{ color: BRAND.textSubtle }}
                      >
                        {card.examples}
                      </div>
                    )}
                  </div>

                  {isOpen
                    ? <ChevronUp size={14} color={BRAND.textSubtle} className="shrink-0" />
                    : <ChevronDown size={14} color={BRAND.textSubtle} className="shrink-0" />
                  }
                </button>

                {isOpen && (
                  <div
                    className="px-5 pb-5"
                    style={{ borderTop: `1px solid ${card.color}25` }}
                  >
                    <p className="text-sm leading-relaxed pt-4" style={{ color: BRAND.textDim }}>
                      {card.desc}
                    </p>
                    {card.examples && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {card.examples.split(' · ').map(ex => (
                          <span
                            key={ex}
                            className="px-2.5 py-1 rounded-sm text-[11px] font-mono"
                            style={{
                              backgroundColor: `${card.color}15`,
                              color: card.color,
                              border: `1px solid ${card.color}30`,
                            }}
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
