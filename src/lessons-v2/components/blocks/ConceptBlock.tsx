'use client'

import { BRAND } from '@/lib/brand'
import type { V2ConceptSection } from '@/lessons-v2/types'
import InteractionRenderer from '../interactions/InteractionRenderer'

interface Props {
  section: V2ConceptSection
}

function renderBody(text: string) {
  return text.split('\n\n').map((paragraph, i) => {
    const html = paragraph
      .replace(/\*\*(.+?)\*\*/g, `<strong style="color:${BRAND.text}">$1</strong>`)
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
    return (
      <p
        key={i}
        className="text-base leading-relaxed"
        style={{ color: BRAND.textDim }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  })
}

export default function ConceptBlock({ section }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
          Concept
        </p>
        <h2
          className="font-serif"
          style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', lineHeight: 1.15, color: BRAND.text }}
        >
          {section.title}
        </h2>
      </div>

      <div className="space-y-4">{renderBody(section.body)}</div>

      {section.points && section.points.length > 0 && (
        <ul className="space-y-2 pl-1">
          {section.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
              <span style={{ color: BRAND.accent, flexShrink: 0, marginTop: '2px' }}>▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {section.interaction && (
        <InteractionRenderer interaction={section.interaction} />
      )}
    </div>
  )
}
