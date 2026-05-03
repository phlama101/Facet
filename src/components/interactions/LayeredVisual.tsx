'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { LayeredVisualConfig } from '@/lessons-v2/types'

interface Props { config: LayeredVisualConfig }

export default function LayeredVisual({ config }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const totalThickness = config.layers.reduce((s, l) => s + l.thickness, 0)
  const active = config.layers.find(l => l.id === activeId) ?? null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl p-5 space-y-4"
      style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
          Layered Structure
        </span>
        <span className="text-[10px] font-mono" style={{ color: BRAND.textSubtle }}>
          {activeId ? 'Click to deselect' : 'Click a layer'}
        </span>
      </div>

      {config.description && (
        <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
          {config.description}
        </p>
      )}

      {/* Layer stack — proportional heights */}
      <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${BRAND.border}` }}>
        {config.layers.map((layer) => {
          const isActive = layer.id === activeId
          const minPx = 44
          const rawPct = (layer.thickness / totalThickness) * 100
          const heightPx = Math.max(minPx, rawPct * 4)

          return (
            <motion.button
              key={layer.id}
              onClick={() => setActiveId(isActive ? null : layer.id)}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.995 }}
              animate={{
                backgroundColor: isActive ? `${layer.color}25` : `${layer.color}0a`,
              }}
              transition={{ duration: 0.2 }}
              className="w-full flex items-center gap-4 px-4 text-left"
              style={{
                height: `${heightPx}px`,
                borderLeft: `4px solid ${isActive ? layer.color : layer.color + '55'}`,
                borderBottom: `1px solid ${BRAND.border}`,
                transition: 'border-color 0.15s',
              }}
            >
              {/* Depth indicator bar */}
              <div
                className="w-1.5 self-stretch flex-shrink-0 rounded-full my-2"
                style={{ backgroundColor: isActive ? layer.color : `${layer.color}40` }}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: isActive ? layer.color : BRAND.text }}
                  >
                    {layer.label}
                  </span>
                  {layer.sublabel && (
                    <span className="text-[10px] font-mono" style={{ color: BRAND.textSubtle }}>
                      {layer.sublabel}
                    </span>
                  )}
                </div>
                {layer.state && (
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider"
                    style={{ color: isActive ? layer.color : `${layer.color}80` }}
                  >
                    {layer.state}
                  </span>
                )}
              </div>

              {layer.temperature && (
                <span
                  className="text-xs font-mono tabular-nums shrink-0"
                  style={{ color: isActive ? layer.color : BRAND.textSubtle }}
                >
                  {layer.temperature}
                </span>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Detail panel */}
      <div
        className="rounded-lg overflow-hidden min-h-[72px]"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 space-y-3"
              style={{ borderLeft: `3px solid ${active.color}` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold" style={{ color: active.color }}>
                  {active.label}
                </span>
                {active.sublabel && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{
                    backgroundColor: `${active.color}15`,
                    color: active.color,
                  }}>
                    {active.sublabel}
                  </span>
                )}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
                {active.description}
              </p>
              {active.facts.length > 0 && (
                <ul className="space-y-1.5">
                  {active.facts.map((fact, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      className="flex items-start gap-2 text-xs"
                      style={{ color: BRAND.textDim }}
                    >
                      <span className="shrink-0 mt-0.5" style={{ color: active.color }}>▸</span>
                      {fact}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 text-xs text-center"
              style={{ color: BRAND.textSubtle }}
            >
              Select a layer to see its properties
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
