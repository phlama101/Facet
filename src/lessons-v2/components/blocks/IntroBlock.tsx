'use client'

import { BRAND } from '@/lib/brand'
import type { V2IntroSection } from '@/lessons-v2/types'
import InteractionRenderer from '../interactions/InteractionRenderer'

interface Props {
  section: V2IntroSection
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

export default function IntroBlock({ section }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
          Introduction
        </p>
        <h2
          className="font-serif"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.1, color: BRAND.text }}
        >
          {section.title}
        </h2>
      </div>

      <div className="space-y-4">{renderBody(section.body)}</div>

      {section.interaction && (
        <InteractionRenderer interaction={section.interaction} />
      )}
    </div>
  )
}
