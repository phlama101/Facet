'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { SliderConfig } from '@/lessons-v2/types'

interface Props { config: SliderConfig }

export default function SliderSimulation({ config }: Props) {
  const [value, setValue] = useState(config.defaultValue)
  const output = config.formula(value)
  const pct = ((value - config.min) / (config.max - config.min)) * 100

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
          Interactive Simulation
        </span>
        <span className="text-xs font-mono" style={{ color: BRAND.accent }}>
          {config.label}
        </span>
      </div>

      {/* Slider */}
      <div className="space-y-3">
        <div className="flex justify-between text-xs" style={{ color: BRAND.textDim }}>
          <span>{config.min} {config.unit}</span>
          <motion.span
            key={value}
            initial={{ scale: 1.15, color: BRAND.accent }}
            animate={{ scale: 1, color: BRAND.text }}
            transition={{ duration: 0.25 }}
            className="font-semibold tabular-nums"
          >
            {value} {config.unit}
          </motion.span>
          <span>{config.max} {config.unit}</span>
        </div>

        <div className="relative">
          <input
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              accentColor: BRAND.accent,
              background: `linear-gradient(to right, ${BRAND.accent} ${pct}%, ${BRAND.border} 0%)`,
            }}
          />
        </div>
      </div>

      {/* Output */}
      <motion.div
        className="rounded-lg p-4 text-center"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        animate={{ boxShadow: `0 0 16px ${BRAND.accent}20` }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs mb-2" style={{ color: BRAND.textSubtle }}>
          {config.outputLabel}
        </p>
        <AnimatePresence mode="wait">
          <motion.p
            key={String(output)}
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="text-2xl font-mono font-bold tabular-nums"
            style={{ color: BRAND.accent }}
          >
            {output}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {config.description && (
        <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
          {config.description}
        </p>
      )}
    </motion.div>
  )
}
