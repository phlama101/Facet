'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Sparkles, Check } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST, TRACKS, TRACK_MAP } from '@/lessons/index'
import type { TrackId } from '@/lessons/types'

export default function LearnPage() {
  const [activeTrack, setActiveTrack] = useState<TrackId | 'all'>('all')
  // Guest can view all lessons freely; completed state requires auth (omitted for public page)
  const filtered = activeTrack === 'all'
    ? LESSON_LIST
    : LESSON_LIST.filter(l => l.track === activeTrack)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="border-b pb-4" style={{ borderColor: BRAND.border }}>
        <div className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: BRAND.accent }}>
          Lesson Library
        </div>
        <h1
          className="font-serif"
          style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1 }}
        >
          Every <em style={{ color: BRAND.accent }}>facet</em> of earth science
        </h1>
      </div>

      {/* Track filter */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTrack('all')}
          className="px-4 py-2 rounded-sm text-[10px] tracking-[0.15em] uppercase whitespace-nowrap transition-all"
          style={{
            backgroundColor: activeTrack === 'all' ? BRAND.accent : BRAND.surface,
            color: activeTrack === 'all' ? BRAND.bg : BRAND.text,
            border: `1px solid ${activeTrack === 'all' ? BRAND.accent : BRAND.border}`,
          }}
        >
          All
        </button>
        {TRACKS.map(t => {
          const count = LESSON_LIST.filter(l => l.track === t.id).length
          const isActive = activeTrack === t.id
          return (
            <button
              key={t.id}
              onClick={() => setActiveTrack(t.id)}
              className="px-4 py-2 rounded-sm text-[10px] tracking-[0.15em] uppercase whitespace-nowrap flex items-center gap-2 transition-all"
              style={{
                backgroundColor: isActive ? t.color : BRAND.surface,
                color: isActive ? BRAND.bg : BRAND.text,
                border: `1px solid ${isActive ? t.color : BRAND.border}`,
              }}
            >
              <t.icon size={12} />
              {t.name}
              <span style={{ opacity: 0.6 }}>({count})</span>
            </button>
          )
        })}
      </div>

      {/* Lesson grid */}
      {filtered.length === 0 ? (
        <div
          className="p-12 rounded-sm text-center"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <Sparkles size={24} color={BRAND.textSubtle} className="mx-auto mb-3" />
          <h3 className="font-serif" style={{ fontSize: '22px' }}>Coming soon</h3>
          <p className="text-xs mt-2" style={{ color: BRAND.textSubtle }}>
            We&apos;re building lessons for this track.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {filtered.map(lesson => {
            const track = TRACK_MAP[lesson.track]
            return (
              <Link
                key={lesson.id}
                href={`/learn/${lesson.id}`}
                className="text-left p-5 rounded-sm transition-all hover:-translate-y-[2px] relative overflow-hidden group"
                style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity pointer-events-none"
                  style={{ backgroundColor: track.color }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-sm flex items-center justify-center"
                        style={{ backgroundColor: `${track.color}20`, border: `1px solid ${track.color}60` }}
                      >
                        <track.icon size={14} color={track.color} />
                      </div>
                      <span
                        className="text-[10px] tracking-[0.2em] uppercase font-mono"
                        style={{ color: track.color }}
                      >
                        {lesson.level}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: '24px', lineHeight: 1.1 }}
                  >
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
                    {lesson.description}
                  </p>
                  <div
                    className="mt-4 flex items-center gap-4 text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: BRAND.textSubtle }}
                  >
                    <span>{lesson.duration}</span>
                    <span>{lesson.sources.length} sources</span>
                    <span className="flex items-center gap-1" style={{ color: BRAND.gold }}>
                      <Zap size={10} fill={BRAND.gold} /> {lesson.xpReward} XP
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
