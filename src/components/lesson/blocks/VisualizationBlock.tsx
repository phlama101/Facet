'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { VisualizationSection } from '@/lessons/types'
import InteractionRenderer from '@/components/interactions/InteractionRenderer'

interface Props { section: VisualizationSection }

export default function VisualizationBlock({ section }: Props) {
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
          Visualization
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

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.12 }}
        className="text-base leading-relaxed"
        style={{ color: BRAND.textDim }}
      >
        {section.body}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        <InteractionRenderer interaction={section.interaction} />
      </motion.div>
    </div>
  )
}
