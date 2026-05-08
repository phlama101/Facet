'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { Zap, Sparkles, BookOpen, ChevronRight, Check, Compass, Lock } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { FREE_LESSON_IDS } from '@/lib/access'
import {
  LESSON_LIST,
  TRACKS,
  TRACK_MAP,
  GEOL_101_MODULES,
  GEOL_201_MODULES,
  OCEA_101_MODULES,
  ATMO_101_MODULES,
  type CourseModule,
} from '@/lessons/index'
import { LESSONS_V2_LIST } from '@/lessons-v2/index'
import { createClient } from '@/lib/supabase/client'
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

interface Course {
  id: string
  code: string
  title: string
  subtitle: string
  track: TrackId
  modules: CourseModule[]
  color: string
}

const COURSES: Course[] = [
  {
    id: 'geol-101',
    code: 'GEOL 101',
    title: 'Reading the Earth',
    subtitle: 'Introductory geology — minerals, rocks, plate tectonics, surface processes.',
    track: 'geo',
    modules: GEOL_101_MODULES,
    color: BRAND.coral,
  },
  {
    id: 'geol-201',
    code: 'GEOL 201',
    title: 'Earth Through Time',
    subtitle: 'Intermediate geology — geologic time, stratigraphy, fossils, life history.',
    track: 'geo',
    modules: GEOL_201_MODULES,
    color: BRAND.amethyst,
  },
  {
    id: 'ocea-101',
    code: 'OCEA 101',
    title: 'Introduction to Oceanography',
    subtitle: 'The ocean basin, seawater chemistry, circulation, waves, marine biology, and polar ecosystems.',
    track: 'oce',
    modules: OCEA_101_MODULES,
    color: BRAND.accent,
  },
  {
    id: 'atmo-101',
    code: 'ATMO 101',
    title: 'Introduction to Meteorology',
    subtitle: 'Atmospheric structure, composition, solar energy budget, the greenhouse effect, weather systems, and precipitation.',
    track: 'atm',
    modules: ATMO_101_MODULES,
    color: BRAND.gold,
  },
]

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
const courseLessonIds = new Set(COURSES.flatMap(c => c.modules.flatMap(m => m.lessonIds)))
const STANDALONE_LIST = COMBINED_LIST.filter(l => !courseLessonIds.has(l.id))

function LessonCard({ lesson, step, isCompleted, isLocked }: { lesson: DisplayLesson; step?: number; isCompleted?: boolean; isLocked?: boolean }) {
  const track = TRACK_MAP[lesson.track as TrackId]
  if (!track) return null
  return (
    <Link
      href={`/learn/${lesson.id}`}
      className="text-left p-5 rounded-sm transition-all hover:-translate-y-[2px] relative overflow-hidden group flex gap-4"
      style={{
        backgroundColor: BRAND.surface,
        border: `1px solid ${isCompleted ? `${BRAND.jade}50` : BRAND.border}`,
        opacity: isLocked ? 0.7 : 1,
      }}
    >
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity pointer-events-none"
        style={{ backgroundColor: track.color }}
      />
      {step != null && (
        <div
          className="shrink-0 w-7 h-7 rounded-sm flex items-center justify-center text-[11px] font-mono font-bold mt-0.5"
          style={isCompleted
            ? { backgroundColor: `${BRAND.jade}20`, color: BRAND.jade, border: `1px solid ${BRAND.jade}50` }
            : { backgroundColor: `${track.color}18`, color: track.color, border: `1px solid ${track.color}40` }
          }
        >
          {isCompleted ? <Check size={12} strokeWidth={2.5} /> : step}
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
          <div className="flex items-center gap-2">
            {isLocked && (
              <span
                className="flex items-center gap-1 text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${BRAND.textSubtle}18`, color: BRAND.textSubtle, border: `1px solid ${BRAND.border}` }}
              >
                <Lock size={8} /> Scholar
              </span>
            )}
            {isCompleted && (
              <span
                className="flex items-center gap-1 text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${BRAND.jade}18`, color: BRAND.jade, border: `1px solid ${BRAND.jade}40` }}
              >
                <Check size={8} strokeWidth={3} /> Done
              </span>
            )}
            {lesson.isV2 && !isLocked && (
              <span
                className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${BRAND.accent}20`, color: BRAND.accent, border: `1px solid ${BRAND.accent}40` }}
              >
                Interactive
              </span>
            )}
          </div>
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

function moduleAnchorId(courseId: string, moduleId: string) {
  return `mod-${courseId}-${moduleId}`
}

function shortModuleLabel(title: string) {
  // Title format: "Module 1.2 — Minerals"
  const dashSplit = title.split('—')
  if (dashSplit.length >= 2) {
    const left = dashSplit[0].trim().replace(/^Module\s+/i, '')
    const right = dashSplit.slice(1).join('—').trim()
    return { num: left, name: right }
  }
  return { num: '', name: title }
}

export default function LearnPage() {
  const [activeTrack, setActiveTrack] = useState<TrackId | 'all'>('all')
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set())
  const [subscription, setSubscription] = useState<string>('free')
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return
      Promise.all([
        (supabase.from('user_lesson_progress') as any)
          .select('lesson_id')
          .eq('user_id', user.id),
        (supabase.from('profiles') as any)
          .select('subscription')
          .eq('id', user.id)
          .single(),
      ]).then(([progressRes, profileRes]: [{ data: { lesson_id: string }[] | null }, { data: { subscription?: string } | null }]) => {
        if (progressRes.data) setCompletedIds(new Set(progressRes.data.map(r => r.lesson_id)))
        if (profileRes.data?.subscription) setSubscription(profileRes.data.subscription)
      })
    })
  }, [])

  const visibleCourses = useMemo(
    () => activeTrack === 'all' ? COURSES : COURSES.filter(c => c.track === activeTrack),
    [activeTrack],
  )

  const filteredStandalone = activeTrack === 'all'
    ? STANDALONE_LIST
    : STANDALONE_LIST.filter(l => l.track === activeTrack)

  const hasAnything = visibleCourses.length > 0 || filteredStandalone.length > 0

  // Track which module is currently in view, to highlight the active pill in the nav.
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (observerRef.current) observerRef.current.disconnect()

    const ids = visibleCourses.flatMap(c => c.modules.map(m => moduleAnchorId(c.id, m.id)))
    const elements = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          // Choose the entry highest on the page (smallest top)
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          )
          setActiveAnchor(top.target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    )

    elements.forEach(el => observer.observe(el))
    observerRef.current = observer
    return () => observer.disconnect()
  }, [visibleCourses])

  const scrollToAnchor = (anchor: string) => {
    const el = document.getElementById(anchor)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top: y, behavior: 'smooth' })
    setActiveAnchor(anchor)
  }

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

      {/* Sticky course/module quick-jump navigator */}
      {visibleCourses.length > 0 && (
        <div
          className="sticky top-0 z-20 -mx-2 px-2 py-3 backdrop-blur-md"
          style={{
            backgroundColor: `${BRAND.bg}d9`,
            borderBottom: `1px solid ${BRAND.border}`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Compass size={11} style={{ color: BRAND.textSubtle }} />
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono" style={{ color: BRAND.textSubtle }}>
              Jump to module
            </span>
          </div>
          <div className="space-y-2">
            {visibleCourses.map(course => {
              const availableInCourse = course.modules.reduce(
                (n, m) => n + m.lessonIds.filter(id => COMBINED_MAP[id]).length,
                0,
              )
              return (
                <div key={course.id} className="flex items-center gap-2 overflow-x-auto pb-0.5">
                  <button
                    onClick={() => scrollToAnchor(`course-${course.id}`)}
                    className="shrink-0 px-2.5 py-1 rounded-sm text-[10px] font-mono tracking-[0.1em] uppercase font-bold flex items-center gap-1.5 transition-colors"
                    style={{
                      backgroundColor: `${course.color}1a`,
                      color: course.color,
                      border: `1px solid ${course.color}55`,
                    }}
                  >
                    <BookOpen size={10} />
                    {course.code}
                  </button>
                  {course.modules.map((m, i) => {
                    const anchor = moduleAnchorId(course.id, m.id)
                    const isActive = activeAnchor === anchor
                    const available = m.lessonIds.filter(id => COMBINED_MAP[id]).length
                    const allDone = available > 0 && m.lessonIds.every(id => completedIds.has(id))
                    const { num } = shortModuleLabel(m.title)
                    const moduleNumber = num || `M${i + 1}`
                    return (
                      <button
                        key={m.id}
                        onClick={() => scrollToAnchor(anchor)}
                        className="shrink-0 px-2.5 py-1 rounded-sm text-[10px] font-mono tracking-[0.05em] flex items-center gap-1.5 transition-all whitespace-nowrap"
                        style={{
                          backgroundColor: isActive ? course.color : BRAND.surface,
                          color: isActive ? BRAND.bg : (available > 0 ? BRAND.text : BRAND.textSubtle),
                          border: `1px solid ${isActive ? course.color : BRAND.border}`,
                          opacity: available > 0 ? 1 : 0.5,
                        }}
                        title={m.title}
                      >
                        <span>{moduleNumber}</span>
                        {allDone && <Check size={9} strokeWidth={3} style={{ color: isActive ? BRAND.bg : BRAND.jade }} />}
                      </button>
                    )
                  })}
                  <span
                    className="shrink-0 ml-1 text-[9px] font-mono tracking-[0.1em] uppercase"
                    style={{ color: BRAND.textSubtle }}
                  >
                    {availableInCourse} live
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

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

      {/* Course sections */}
      {visibleCourses.map(course => {
        const totalLessons = course.modules.reduce((n, m) => n + m.lessonIds.length, 0)
        const availableLessons = course.modules.reduce(
          (n, m) => n + m.lessonIds.filter(id => COMBINED_MAP[id]).length,
          0,
        )
        const completedInCourse = course.modules.reduce(
          (n, m) => n + m.lessonIds.filter(id => completedIds.has(id)).length,
          0,
        )

        return (
          <section key={course.id} id={`course-${course.id}`} className="space-y-10 scroll-mt-28">
            {/* Course header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase mb-2 px-2.5 py-1 rounded-sm"
                  style={{ backgroundColor: `${course.color}18`, color: course.color, border: `1px solid ${course.color}40` }}
                >
                  <BookOpen size={10} />
                  {course.code}
                </div>
                <h2 className="font-serif" style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.1 }}>
                  {course.title}
                </h2>
                <p className="text-xs mt-1 max-w-xl" style={{ color: BRAND.textSubtle }}>
                  {course.subtitle}
                </p>
                <p className="text-[10px] mt-2 font-mono tracking-[0.1em]" style={{ color: BRAND.textSubtle }}>
                  {availableLessons} of {totalLessons} lessons live · {course.modules.length} modules
                  {completedInCourse > 0 && ` · ${completedInCourse} completed`}
                </p>
              </div>
            </div>

            {/* Modules */}
            {course.modules.map((module, mi) => {
              const moduleLessons = module.lessonIds
                .map(id => COMBINED_MAP[id])
                .filter(Boolean) as DisplayLesson[]
              const totalInModule = module.lessonIds.length
              const availableCount = moduleLessons.length
              const isComplete = availableCount === totalInModule
              const completedInModule = module.lessonIds.filter(id => completedIds.has(id)).length
              const allDone = availableCount > 0 && completedInModule === totalInModule
              const { num, name } = shortModuleLabel(module.title)

              return (
                <div
                  key={module.id}
                  id={moduleAnchorId(course.id, module.id)}
                  className="space-y-3 scroll-mt-32"
                >
                  {/* Module header */}
                  <div className="flex items-center gap-3 pb-2" style={{ borderBottom: `1px solid ${BRAND.border}` }}>
                    <div
                      className="w-7 h-7 rounded-sm flex items-center justify-center text-[10px] font-mono font-bold shrink-0"
                      style={allDone
                        ? { backgroundColor: `${BRAND.jade}18`, color: BRAND.jade, border: `1px solid ${BRAND.jade}50` }
                        : { backgroundColor: `${course.color}18`, color: course.color, border: `1px solid ${course.color}40` }
                      }
                    >
                      {allDone ? <Check size={12} strokeWidth={2.5} /> : (num || mi + 1)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-mono text-[11px] tracking-[0.15em] uppercase truncate"
                        style={{ color: BRAND.textDim }}
                      >
                        {name || module.title}
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
                        <LessonCard
                          key={lesson.id}
                          lesson={lesson}
                          step={i + 1}
                          isCompleted={completedIds.has(lesson.id)}
                          isLocked={!FREE_LESSON_IDS.has(lesson.id) && subscription === 'free'}
                        />
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
          </section>
        )
      })}

      {/* Standalone / other-track lessons */}
      {filteredStandalone.length > 0 && (
        <div className="space-y-4">
          {visibleCourses.length > 0 && (
            <div className="border-t pt-6" style={{ borderColor: BRAND.border }}>
              <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
                Standalone Lessons
              </div>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-3">
            {filteredStandalone.map(lesson => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={completedIds.has(lesson.id)}
                isLocked={!FREE_LESSON_IDS.has(lesson.id) && subscription === 'free'}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
