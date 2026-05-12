'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { FlowSimulatorConfig } from '@/lessons/types'

interface Props { config: FlowSimulatorConfig }

export default function FlowSimulator({ config }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [step, setStep] = useState(0)

  const active = config.nodes.find(n => n.id === activeId) ?? null

  // Build adjacency: for each node, what does it flow to and from?
  const flowsFrom = (id: string) =>
    config.edges.filter(e => e.to === id).map(e => ({ ...e, node: config.nodes.find(n => n.id === e.from)! }))
  const flowsTo = (id: string) =>
    config.edges.filter(e => e.from === id).map(e => ({ ...e, node: config.nodes.find(n => n.id === e.to)! }))

  // Animated step-through of the entire flow
  const nodeOrder = config.nodes.map(n => n.id)
  const cycleStep = (dir: 1 | -1) => {
    const next = (step + dir + config.nodes.length) % config.nodes.length
    setStep(next)
    setActiveId(config.nodes[next].id)
  }

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
          Flow Simulator
        </span>
        <div className="flex gap-2">
          <motion.button
            onClick={() => cycleStep(-1)}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-2 py-1 rounded text-[10px]"
            style={{ border: `1px solid ${BRAND.border}`, color: BRAND.textDim }}
          >
            ← Prev
          </motion.button>
          <motion.button
            onClick={() => cycleStep(1)}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="px-2 py-1 rounded text-[10px]"
            style={{ border: `1px solid ${BRAND.border}`, color: BRAND.textDim }}
          >
            Next →
          </motion.button>
        </div>
      </div>

      {config.description && (
        <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
          {config.description}
        </p>
      )}

      {/* Node chain with flow arrows */}
      <div className="flex flex-wrap items-center gap-1.5">
        {config.nodes.map((node, i) => {
          const isActive = node.id === activeId
          const isStepActive = config.nodes[step]?.id === node.id
          const edgeAfter = config.edges.find(e => e.from === node.id && e.to === config.nodes[i + 1]?.id)

          return (
            <div key={node.id} className="flex items-center gap-1.5">
              <motion.button
                onClick={() => { setActiveId(isActive ? null : node.id); setStep(i) }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: isActive ? `${node.color}25` : isStepActive ? `${node.color}15` : BRAND.surface,
                  borderColor: isActive ? node.color : isStepActive ? `${node.color}60` : BRAND.border,
                  boxShadow: isActive ? `0 0 14px ${node.color}40` : 'none',
                }}
                transition={{ duration: 0.2 }}
                className="px-3 py-2 rounded-lg text-xs font-medium"
                style={{ border: '1px solid' }}
              >
                <span style={{ color: isActive ? node.color : BRAND.text }}>{node.label}</span>
              </motion.button>

              {i < config.nodes.length - 1 && (
                <motion.div
                  animate={{
                    opacity: edgeAfter ? 1 : 0.3,
                    color: edgeAfter && (isActive || config.nodes[i + 1]?.id === activeId)
                      ? node.color
                      : BRAND.textSubtle,
                  }}
                  transition={{ duration: 0.2 }}
                  title={edgeAfter?.label}
                >
                  <ArrowRight size={12} />
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      {/* Detail panel */}
      <div
        className="rounded-lg overflow-hidden min-h-[88px]"
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
              <span className="text-sm font-semibold" style={{ color: active.color }}>
                {active.label}
              </span>
              <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
                {active.description}
              </p>

              {/* Flow connections */}
              <div className="flex flex-wrap gap-3 text-[10px]">
                {flowsFrom(active.id).length > 0 && (
                  <div>
                    <span className="font-mono uppercase tracking-wider" style={{ color: BRAND.textSubtle }}>Receives from: </span>
                    {flowsFrom(active.id).map(e => (
                      <span key={e.from} className="ml-1" style={{ color: e.node.color }}>
                        {e.node.label}
                      </span>
                    ))}
                  </div>
                )}
                {flowsTo(active.id).length > 0 && (
                  <div>
                    <span className="font-mono uppercase tracking-wider" style={{ color: BRAND.textSubtle }}>Flows to: </span>
                    {flowsTo(active.id).map(e => (
                      <span key={e.to} className="ml-1" style={{ color: e.node.color }}>
                        {e.node.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
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
              Click a node or use Prev/Next to step through the flow
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
