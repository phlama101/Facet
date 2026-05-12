'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { SandboxSimulatorConfig } from '@/lessons/types'

interface Props { config: SandboxSimulatorConfig }

export default function SandboxSimulator({ config }: Props) {
  const initVars = Object.fromEntries(config.variables.map((v) => [v.id, v.default]))
  const [vars, setVars] = useState<Record<string, number>>(initVars)

  function setVar(id: string, value: number) {
    setVars((prev) => ({ ...prev, [id]: value }))
  }

  const output = config.outputDescription(vars)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl p-5 space-y-5"
      style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
          Sandbox Simulator
        </span>
      </div>

      <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
        {config.prompt}
      </p>

      {/* Variables */}
      <div className="space-y-4">
        {config.variables.map((variable) => {
          const val = vars[variable.id]
          const pct = ((val - variable.min) / (variable.max - variable.min)) * 100
          return (
            <div key={variable.id} className="space-y-1.5">
              <div className="flex justify-between text-xs" style={{ color: BRAND.textDim }}>
                <span>{variable.label}</span>
                <motion.span
                  key={val}
                  initial={{ scale: 1.2, color: BRAND.amethyst }}
                  animate={{ scale: 1, color: BRAND.amethyst }}
                  transition={{ duration: 0.2 }}
                  className="font-mono font-semibold tabular-nums"
                >
                  {val} {variable.unit}
                </motion.span>
              </div>
              <input
                type="range"
                min={variable.min}
                max={variable.max}
                step={(variable.max - variable.min) / 100}
                value={val}
                onChange={(e) => setVar(variable.id, Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  accentColor: BRAND.amethyst,
                  background: `linear-gradient(to right, ${BRAND.amethyst} ${pct}%, ${BRAND.border} 0%)`,
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Output */}
      <div
        className="rounded-lg p-4 overflow-hidden"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <p className="text-xs mb-2" style={{ color: BRAND.textSubtle }}>Result</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={output}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm leading-relaxed"
            style={{ color: BRAND.text }}
          >
            {output}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
