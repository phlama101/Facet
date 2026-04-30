'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Sparkles, BookOpen, ChevronRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST, TRACKS, TRACK_MAP, GEOL_101_MODULES } from '@/lessons/index'
import { LESSONS_V2_LIST } from '@/lessons-v2/index'
import type { TrackId } from '@/lessons/types'

interface DisplayLesson {
  id: string
  title: string
  description: string
  track: string
  level: string
  duration: string
  xpReward: number
  sourceCount?: number
  isV2?: boolean
}

const v2BaseIds = new Set(LESSONS_V2_LIST.map(l => l.id.replace(/-v2$/, '')))

const COMBINED_LIST: DisplayLesson[] = [
  ...LESSONS_V2_LIST.map(l => ({
    id: l.id,
    title: l.title,
    description: l.description,
    track: l.track,
    level: l.level,
    duration: l.duration,
    xpReward: l.xpReward,
    isV2: true,
  })),
  ...LESSON_LIST
    .filter(l => !v2BaseIds.has(l.id))
    .map(l => ({
      id: l.id,
      title: l.title,
      description: l.description,
      track: l.track,
      level: l.level,
      duration: l.duration,
      xpReward: l.xpReward,
      sourceCount: l.sources.length,
      isV2: false,
    })),
]

const COMBINED_MAP = Object.fromEntries(COMBINED_LIST.map(l => [l.id, l]))
const geol101AllIds = new Set(GEOL_101_MODULES.flatMap(m => m.lessonIds))
const STANDALONE_LIST = COMBINED_LIST.filter(l => !geol101AllIds.has(l.id))

function LessonCard({ lesson, step }: { lesson: DisplayLesson; step?: number }) {
  const track = TRACK_MAP[lesson.track as TrackId]
  if (!track) return null
  return (
    <Link
      href={`/learn/${lesson.id}`}
      className="text-left p-5 rounded-sm transition-all hover:-translate-y-[2px] relative overflow-hidden group flex gap-4"
      style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
    >
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity pointer-events-none"
        style={{ backgroundColor: track.color }}
      />
      {step != null && (
        <div
          className="shrink-0 w-7 h-7 rounded-sm flex items-center justify-center text-[11px] font-mono font-bold mt-0.5"
          style={{ backgroundColor: `${track.color}18`, color: track.color, border: `1px solid ${track.color}40` }}
        >
          {step}
        </div>
      )}
      <div className="relative flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {step == null && (
              <div
                className="w-7 h-7 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: `${track.color}20`, border: `1px solid ${track.color}60` }}
              >
                <track.icon size={13} color={track.color} />
              </div>
            )}
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-mono"
              style={{ color: track.color }}
            >
              {lesson.level}
            </span>
          </div>
          {lesson.isV2 && (
            <span
              className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${BRAND.accent}20`, color: BRAND.accent, border: `1px solid ${BRAND.accent}40` }}
            >
              Interactive
            </span>
          )}
        </div>
        <h3 className="font-serif leading-tight" style={{ fontSize: '20px' }}>
          {lesson.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed line-clamp-2" style={{ color: BRAND.textDim }}>
          {lesson.description}
        </p>
        <div
          className="mt-3 flex items-center gap-4 text-[10px] tracking-[0.15em] uppercase"
          style={{ color: BRAND.textSubtle }}
        >
          <span>{lesson.duration}</span>
          {lesson.sourceCount != null && <span>{lesson.sourceCount} sources</span>}
          <span className="flex items-center gap-1" style={{ color: BRAND.gold }}>
            <Zap size={10} fill={BRAND.gold} /> {lesson.xpReward} XP
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function LearnPage() {
  const [activeTrack, setActiveTrack] = useState<TrackId | 'all'>('all')

  const showGeol101 = activeTrack === 'all' || activeTrack === 'geo'

  const filteredStandalone = activeTrack === 'all'
    ? STANDALONE_LIST
    : STANDALONE_LIST.filter(l => l.track === activeTrack)

  const hasAnything = showGeol101 || filteredStandalone.length > 0

  return (
    <div className="space-y-8 animate-fade-in">
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
          const count = t.id === 'geo'
            ? COMBINED_LIST.filter(l => l.track === t.id).length
            : STANDALONE_LIST.filter(l => l.track === t.id).length + (t.id === 'geo' ? 0 : 0)
          const total = COMBINED_LIST.filter(l => l.track === t.id).length
          if (total === 0) return null
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
              <span style={{ opacity: 0.6 }}>({total})</span>
            </button>
          )
        })}
      </div>

      {/* Empty state */}
      {!hasAnything && (
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
      )}

      {/* GEOL 101 — structured course section */}
      {showGeol101 && (
        <div className="space-y-10">
          {/* Course header */}
          <div className="flex items-start justify-between">
            <div>
              <div
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase mb-2 px-2.5 py-1 rounded-sm"
                style={{ backgroundColor: `${BRAND.coral}18`, color: BRAND.coral, border: `1px solid ${BRAND.coral}40` }}
              >
                <BookOpen size={10} />
                GEOL 101
              </div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.1 }}>
                Reading the Earth
              </h2>
              <p className="text-xs mt-1" style={{ color: BRAND.textSubtle }}>
                {GEOL_101_MODULES.reduce((n, m) => n + m.lessonIds.filter(id => COMBINED_MAP[id]).length, 0)} lessons available across {GEOL_101_MODULES.length} modules
              </p>
            </div>
          </div>

          {/* Modules */}
          {GEOL_101_MODULES.map((module, mi) => {
            const moduleLessons = module.lessonIds
              .map(id => COMBINED_MAP[id])
              .filter(Boolean) as DisplayLesson[]
            const totalInModule = module.lessonIds.length
            const availableCount = moduleLessons.length
            const isComplete = availableCount === totalInModule

            return (
              <div key={module.id} className="space-y-3">
                {/* Module header */}
                <div className="flex items-center gap-3 pb-2" style={{ borderBottom: `1px solid ${BRAND.border}` }}>
                  <div
                    className="w-6 h-6 rounded-sm flex items-center justify-center text-[11px] font-mono font-bold shrink-0"
                    style={{ backgroundColor: `${BRAND.coral}18`, color: BRAND.coral, border: `1px solid ${BRAND.coral}40` }}
                  >
                    {mi + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-mono text-[11px] tracking-[0.15em] uppercase"
                      style={{ color: BRAND.textDim }}
                    >
                      {module.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono" style={{ color: BRAND.textSubtle }}>
                      {availableCount} / {totalInModule}
                    </span>
                    {!isComplete && (
                      <span
                        className="text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${BRAND.gold}18`, color: BRAND.gold, border: `1px solid ${BRAND.gold}40` }}
                      >
                        In progress
                      </span>
                    )}
                  </div>
                </div>

                {/* Lesson cards */}
                {availableCount > 0 ? (
                  <div className="grid md:grid-cols-2 gap-3">
                    {moduleLessons.map((lesson, i) => (
                      <LessonCard key={lesson.id} lesson={lesson} step={i + 1} />
                    ))}
                  </div>
                ) : (
                  <div
                    className="p-4 rounded-sm text-center"
                    style={{ backgroundColor: BRAND.surface, border: `1px dashed ${BRAND.border}` }}
                  >
                    <p className="text-[11px]" style={{ color: BRAND.textSubtle }}>Lessons coming soon</p>
                  </div>
                )}

                {/* Upcoming placeholder slots */}
                {!isComplete && availableCount > 0 && (
                  <div className="flex items-center gap-2 pt-1">
                    <ChevronRight size={12} style={{ color: BRAND.textSubtle }} />
                    <span className="text-[10px]" style={{ color: BRAND.textSubtle }}>
                      {totalInModule - availableCount} more lesson{totalInModule - availableCount !== 1 ? 's' : ''} coming soon
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Standalone / other-track lessons */}
      {filteredStandalone.length > 0 && (
        <div className="space-y-4">
          {showGeol101 && (
            <div className="border-t pt-6" style={{ borderColor: BRAND.border }}>
              <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
                Standalone Lessons
              </div>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-3">
            {filteredStandalone.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
