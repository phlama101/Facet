'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { V2IntroSection } from '@/lessons-v2/types'
import InteractionRenderer from '../interactions/InteractionRenderer'

interface Props { section: V2IntroSection }

function renderBody(text: string) {
  return text.split('\n\n').map((paragraph, i) => {
    const html = paragraph
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
