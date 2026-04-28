'use client'

import { useState } from 'react'
import { BRAND } from '@/lib/brand'
import type { NodeExplorerConfig, NodeDef } from '@/lessons-v2/types'

interface Props {
  config: NodeExplorerConfig
}

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
    <div
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
            <button
              key={node.id}
              onClick={() => setActiveId(isActive ? null : node.id)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: isActive
                  ? BRAND.accent
                  : connected
                  ? `${BRAND.accent}22`
                  : BRAND.surface,
                color: isActive ? BRAND.bg : connected ? BRAND.accent : BRAND.textDim,
                border: `1px solid ${isActive ? BRAND.accent : connected ? BRAND.accent : BRAND.border}`,
              }}
            >
              {node.label}
            </button>
          )
        })}
      </div>

      {/* Detail panel */}
      <div
        className="rounded-lg p-4 min-h-[80px] transition-all"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        {active ? (
          <div className="space-y-2">
            <p className="text-sm font-semibold" style={{ color: BRAND.text }}>
              {active.label}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
              {active.description}
            </p>
            {active.connections.length > 0 && (
              <p className="text-xs" style={{ color: BRAND.textSubtle }}>
                Connected to:{' '}
                <span style={{ color: BRAND.accent }}>
                  {active.connections
                    .map((id) => config.nodes.find((n) => n.id === id)?.label ?? id)
                    .join(', ')}
                </span>
              </p>
            )}
          </div>
        ) : (
          <p className="text-xs" style={{ color: BRAND.textSubtle }}>
            Select a node to explore its connections.
          </p>
        )}
      </div>
    </div>
  )
}
