'use client'

import { useState } from 'react'
import { BRAND } from '@/lib/brand'
import type { TimelineScrubberConfig } from '@/lessons-v2/types'

interface Props {
  config: TimelineScrubberConfig
}

export default function TimelineScrubber({ config }: Props) {
  const [index, setIndex] = useState(0)

  const { events } = config
  const current = events[index]

  return (
    <div
      className="rounded-xl p-5 space-y-4"
      style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
    >
      <span className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
        Timeline Scrubber
      </span>

      {/* Scrubber */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono" style={{ color: BRAND.textSubtle }}>
          <span>{events[0]?.year}</span>
          <span style={{ color: BRAND.gold }}>{current?.year}</span>
          <span>{events[events.length - 1]?.year}</span>
        </div>

        <input
          type="range"
          min={0}
          max={events.length - 1}
          step={1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            accentColor: BRAND.gold,
            background: `linear-gradient(to right, ${BRAND.gold} ${(index / (events.length - 1)) * 100}%, ${BRAND.border} 0%)`,
          }}
        />

        {/* Tick marks */}
        <div className="flex justify-between">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ backgroundColor: i === index ? BRAND.gold : BRAND.border }}
            />
          ))}
        </div>
      </div>

      {/* Event card */}
      <div
        className="rounded-lg p-4 space-y-2"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-sm font-mono font-bold"
            style={{ color: BRAND.gold }}
          >
            {current?.year}
          </span>
          <span className="text-sm font-semibold" style={{ color: BRAND.text }}>
            {current?.label}
          </span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
          {current?.description}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between text-xs" style={{ color: BRAND.textSubtle }}>
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="px-3 py-1 rounded disabled:opacity-30 transition-opacity"
          style={{ border: `1px solid ${BRAND.border}` }}
        >
          ← Prev
        </button>
        <span className="self-center">
          {index + 1} / {events.length}
        </span>
        <button
          onClick={() => setIndex((i) => Math.min(events.length - 1, i + 1))}
          disabled={index === events.length - 1}
          className="px-3 py-1 rounded disabled:opacity-30 transition-opacity"
          style={{ border: `1px solid ${BRAND.border}` }}
        >
          Next →
        </button>
      </div>
    </div>
  )
}
