'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { IntroSection } from '@/lessons/types'
import InteractionRenderer from '@/components/interactions/InteractionRenderer'

interface Props { section: IntroSection }

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function renderBody(text: string) {
  return text.split('\n\n').map((paragraph, i) => {
    const html = escapeHtml(paragraph)
      .replace(/\*\*(.+?)\*\*/g, `<strong style="color:${BRAND.text}">$1</strong>`)
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
    return (
      <motion.p
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs tracking-widest uppercase"
          style={{ color: BRAND.textSubtle }}
        >
          Introduction
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif"
          style={{ fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 1.1, color: BRAND.text }}
        >
          {section.title}
        </motion.h2>
      </div>

      <div className="space-y-4">{renderBody(section.body)}</div>

      {section.keyTerms && section.keyTerms.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="space-y-2"
        >
          <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>Key Terms</p>
          <div className="space-y-2">
            {section.keyTerms.map((kt, i) => (
              <div key={i} className="rounded-lg p-3" style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}>
                <span className="text-xs font-semibold" style={{ color: BRAND.accent }}>{kt.term}</span>
                <p className="text-xs leading-relaxed mt-1" style={{ color: BRAND.textDim }}>{kt.def}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {section.interaction && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <InteractionRenderer interaction={section.interaction} />
        </motion.div>
      )}
    </div>
  )
}
