'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import type { TimelineScrubberConfig } from '@/lessons/types'

interface Props { config: TimelineScrubberConfig }

export default function TimelineScrubber({ config }: Props) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const { events } = config
  const current = events[index]

  function go(next: number) {
    setDir(next > index ? 1 : -1)
    setIndex(next)
  }

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
          Timeline Scrubber
        </span>
        <span className="text-xs font-mono tabular-nums" style={{ color: BRAND.gold }}>
          {index + 1} / {events.length}
        </span>
      </div>

      {/* Scrubber */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono" style={{ color: BRAND.textSubtle }}>
          <span>{events[0]?.year}</span>
          <motion.span
            key={index}
            initial={{ scale: 1.2, color: BRAND.gold }}
            animate={{ scale: 1, color: BRAND.gold }}
            transition={{ duration: 0.25 }}
            className="tabular-nums"
          >
            {current?.year}
          </motion.span>
          <span>{events[events.length - 1]?.year}</span>
        </div>

        <input
          type="range"
          min={0}
          max={events.length - 1}
          step={1}
          value={index}
          onChange={(e) => go(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            accentColor: BRAND.gold,
            background: `linear-gradient(to right, ${BRAND.gold} ${(index / (events.length - 1)) * 100}%, ${BRAND.border} 0%)`,
          }}
        />

        {/* Tick marks */}
        <div className="flex justify-between px-0.5">
          {events.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              animate={{
                width: i === index ? 10 : 6,
                height: i === index ? 10 : 6,
                backgroundColor: i === index ? BRAND.gold : BRAND.border,
                boxShadow: i === index ? `0 0 8px ${BRAND.gold}80` : 'none',
              }}
              transition={{ duration: 0.25 }}
              className="rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Event card */}
      <div
        className="rounded-lg p-4 overflow-hidden"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold" style={{ color: BRAND.gold }}>
                {current?.year}
              </span>
              <span className="text-sm font-semibold" style={{ color: BRAND.text }}>
                {current?.label}
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
              {current?.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between text-xs" style={{ color: BRAND.textSubtle }}>
        <motion.button
          onClick={() => go(Math.max(0, index - 1))}
          disabled={index === 0}
          whileHover={index === 0 ? undefined : { x: -2 }}
          whileTap={index === 0 ? undefined : { scale: 0.97 }}
          className="px-3 py-1 rounded disabled:opacity-30 transition-opacity"
          style={{ border: `1px solid ${BRAND.border}` }}
        >
          ← Prev
        </motion.button>
        <motion.button
          onClick={() => go(Math.min(events.length - 1, index + 1))}
          disabled={index === events.length - 1}
          whileHover={index === events.length - 1 ? undefined : { x: 2 }}
          whileTap={index === events.length - 1 ? undefined : { scale: 0.97 }}
          className="px-3 py-1 rounded disabled:opacity-30 transition-opacity"
          style={{ border: `1px solid ${BRAND.border}` }}
        >
          Next →
        </motion.button>
      </div>
    </motion.div>
  )
}
