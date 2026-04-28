'use client'

import { useState } from 'react'
import { BRAND } from '@/lib/brand'
import type { SliderConfig } from '@/lessons-v2/types'

interface Props {
  config: SliderConfig
}

export default function SliderSimulation({ config }: Props) {
  const [value, setValue] = useState(config.defaultValue)

  const output = config.formula(value)

  return (
    <div
      className="rounded-xl p-5 space-y-4"
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
      <div className="space-y-2">
        <div className="flex justify-between text-xs" style={{ color: BRAND.textDim }}>
          <span>{config.min} {config.unit}</span>
          <span className="font-semibold" style={{ color: BRAND.text }}>
            {value} {config.unit}
          </span>
          <span>{config.max} {config.unit}</span>
        </div>

        <input
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            accentColor: BRAND.accent,
            background: `linear-gradient(to right, ${BRAND.accent} ${((value - config.min) / (config.max - config.min)) * 100}%, ${BRAND.border} 0%)`,
          }}
        />
      </div>

      {/* Output */}
      <div
        className="rounded-lg p-4 text-center"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <p className="text-xs mb-1" style={{ color: BRAND.textSubtle }}>
          {config.outputLabel}
        </p>
        <p className="text-2xl font-mono font-bold" style={{ color: BRAND.accent }}>
          {output}
        </p>
      </div>

      {config.description && (
        <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
          {config.description}
        </p>
      )}
    </div>
  )
}
