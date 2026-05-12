'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { NodeExplorerConfig, NodeDef } from '@/lessons/types'

interface Props { config: NodeExplorerConfig }

export default function NodeExplorer({ config }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const active = config.nodes.find((n) => n.id === activeId) ?? null

  function isConnected(node: NodeDef): boolean {
    if (!activeId) return false
    const activeNode = config.nodes.find((n) => n.id === activeId)
    if (!activeNode) return false
    return activeNode.connections.includes(node.id) || node.connections.includes(activeId)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl p-5 space-y-4"
      style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
    >
      <span className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
        Node Explorer
      </span>

      {/* Nodes grid */}
      <div className="flex flex-wrap gap-2">
        {config.nodes.map((node) => {
          const isActive = node.id === activeId
          const connected = isConnected(node)
          return (
            <motion.button
              key={node.id}
              onClick={() => setActiveId(isActive ? null : node.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: isActive ? BRAND.accent : connected ? `${BRAND.accent}22` : BRAND.surface,
                color: isActive ? BRAND.bg : connected ? BRAND.accent : BRAND.textDim,
                borderColor: isActive ? BRAND.accent : connected ? BRAND.accent : BRAND.border,
                scale: isActive ? 1.05 : 1,
                boxShadow: isActive ? `0 0 16px ${BRAND.accent}50` : 'none',
              }}
              transition={{ duration: 0.2 }}
              className="px-3 py-1.5 rounded-lg text-sm font-medium"
              style={{ border: '1px solid' }}
            >
              {node.label}
            </motion.button>
          )
        })}
      </div>

      {/* Detail panel */}
      <div
        className="rounded-lg p-4 min-h-[80px] transition-all"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="space-y-2"
            >
              <p className="text-sm font-semibold" style={{ color: BRAND.text }}>{active.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>{active.description}</p>
              {active.connections.length > 0 && (
                <p className="text-xs" style={{ color: BRAND.textSubtle }}>
                  Connected to:{' '}
                  <span style={{ color: BRAND.accent }}>
                    {active.connections.map((id) => config.nodes.find((n) => n.id === id)?.label ?? id).join(', ')}
                  </span>
                </p>
              )}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs"
              style={{ color: BRAND.textSubtle }}
            >
              Select a node to explore its connections.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
