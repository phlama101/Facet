'use client'

import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { VisualizationSection } from '@/lessons/types'
import V1InteractionRenderer from '@/components/interactions/V1InteractionRenderer'

export default function SectionVisualization({ section }: { section: VisualizationSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 size={13} color={BRAND.amethyst} />
          <span
            className="text-[10px] tracking-[0.25em] uppercase font-mono"
            style={{ color: BRAND.amethyst }}
          >
            Visualization
          </span>
        </div>
        <h2
          className="font-serif mb-4"
          style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1.15 }}
        >
          {section.title}
        </h2>
        {section.body && (
          <p className="text-sm leading-relaxed mb-6" style={{ color: BRAND.textDim }}>
            {section.body}
          </p>
        )}
      </div>

      {/* Interactive component */}
      <V1InteractionRenderer interaction={section.interaction} />
    </motion.div>
  )
}
