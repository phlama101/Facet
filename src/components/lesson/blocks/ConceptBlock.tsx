'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { ConceptSection } from '@/lessons/types'
import InteractionRenderer from '@/components/interactions/InteractionRenderer'

interface Props { section: ConceptSection }

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
        transition={{ duration: 0.4, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
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
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs tracking-widest uppercase"
          style={{ color: BRAND.accent }}
        >
          Concept
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif"
          style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', lineHeight: 1.15, color: BRAND.text }}
        >
          {section.title}
        </motion.h2>
      </div>

      <div className="space-y-4">{renderBody(section.body)}</div>

      {section.points && section.points.length > 0 && (
        <motion.ul
          className="space-y-3 pl-1"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
        >
          {section.points.map((point, i) => (
            <motion.li
              key={i}
              variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { ease: [0.16, 1, 0.3, 1] } } }}
              className="flex gap-3 text-sm leading-relaxed"
              style={{ color: BRAND.textDim }}
            >
              <motion.span
                style={{ color: BRAND.accent, flexShrink: 0, marginTop: '2px' }}
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                ▸
              </motion.span>
              <span>{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}

      {section.cards && section.cards.length > 0 && (
        <motion.div
          className="grid gap-3"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
        >
          {section.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1] } } }}
              className="rounded-lg p-4 space-y-2"
              style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
            >
              <div className="flex items-center gap-2">
                <card.icon size={14} color={card.color} />
                <span className="text-sm font-semibold" style={{ color: card.color }}>{card.name}</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>{card.desc}</p>
              {card.examples && (
                <p className="text-xs" style={{ color: BRAND.textSubtle }}>{card.examples}</p>
              )}
            </motion.div>
          ))}
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
