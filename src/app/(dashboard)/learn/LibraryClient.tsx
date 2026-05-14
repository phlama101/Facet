'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import {
  Mountain, Waves, Wind, Flame, Thermometer, Telescope,
  Zap, Sparkles, ChevronRight, ChevronDown, ChevronUp,
  Check, Lock, Search, X, Play, ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { FREE_LESSON_IDS } from '@/lib/access'
import PathIcon from '@/components/ui/PathIcon'

// ─── Types received from server ───────────────────────────────────────────────

export interface LeanLesson {
  id: string
  title: string
  description: string
  track: string
  level: string
  duration: string
  xpReward: number
}

export interface LeanChapter {
  id: string
  title: string
  description?: string
  iconId?: string
  lessonIds: string[]
}

export interface LeanPath {
  id: string
  title: string
  subtitle: string
  track: string
  level: string
  color: string
  iconId?: string
  prerequisites?: string[]
  chapters: LeanChapter[]
}

export interface LeanTrack {
  id: string
  name: string
  color: string
}

export interface ContinueInfo {
  lessonId: string
  pathTitle: string
  courseColor: string
  completedInCourse: number
  totalInCourse: number
}

interface Props {
  paths: LeanPath[]
  lessons: Record<string, LeanLesson>
  standaloneIds: string[]
  tracks: LeanTrack[]
  initialCompletedIds: string[]
  initialSubscription: string
  continueInfo: ContinueInfo | null
}

// ─── Track icon lookup (client-only, no lessons/index import) ─────────────────

const TRACK_ICONS: Record<string, LucideIcon> = {
  geo: Mountain,
  oce: Waves,
  atm: Wind,
  vol: Flame,
  cli: Thermometer,
  ast: Telescope,
}

// ─── Lesson card (search results / standalone grid) ──────────────────────────

function LessonCard({
  lesson, step, isCompleted, isLocked, trackColor,
}: {
  lesson: LeanLesson
  step?: number
  isCompleted?: boolean
  isLocked?: boolean
  trackColor: string
}) {
  const TrackIcon = TRACK_ICONS[lesson.track]
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
        style={{ backgroundColor: trackColor }}
      />
      {step != null && (
        <div
          className="shrink-0 w-7 h-7 rounded-sm flex items-center justify-center text-[11px] font-mono font-bold mt-0.5"
          style={isCompleted
            ? { backgroundColor: `${BRAND.jade}20`, color: BRAND.jade, border: `1px solid ${BRAND.jade}50` }
            : { backgroundColor: `${trackColor}18`, color: trackColor, border: `1px solid ${trackColor}40` }}
        >
          {isCompleted ? <Check size={12} strokeWidth={2.5} /> : step}
        </div>
      )}
      <div className="relative flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {step == null && TrackIcon && (
              <div
                className="w-7 h-7 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: `${trackColor}20`, border: `1px solid ${trackColor}60` }}
              >
                <TrackIcon size={13} color={trackColor} />
              </div>
            )}
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono" style={{ color: trackColor }}>
              {lesson.level}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {isLocked && (
              <span
                className="flex items-center gap-1 text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${BRAND.textSubtle}18`, color: BRAND.textSubtle, border: `1px solid ${BRAND.border}` }}
              >
                <Lock size={8} /> Naturalist
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
          <span className="flex items-center gap-1" style={{ color: BRAND.gold }}>
            <Zap size={10} fill={BRAND.gold} /> {lesson.xpReward} XP
          </span>
        </div>
      </div>
    </Link>
  )
}

// ─── Continue learning hero banner ────────────────────────────────────────────

function ContinueBanner({
  lesson,
  pathTitle,
  courseColor,
  completedInCourse,
  totalInCourse,
}: {
  lesson: LeanLesson
  pathTitle: string
  courseColor: string
  completedInCourse: number
  totalInCourse: number
}) {
  const trackColor = TRACK_ICONS[lesson.track] ? courseColor : BRAND.accent
  const pct = totalInCourse > 0 ? (completedInCourse / totalInCourse) * 100 : 0
  const lessonNum = completedInCourse + 1

  return (
    <Link
      href={`/learn/${lesson.id}`}
      className="group block relative overflow-hidden rounded-sm transition-all hover:-translate-y-[2px]"
      style={{ backgroundColor: BRAND.surface, border: `1px solid ${courseColor}50` }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(120deg, ${courseColor}12 0%, transparent 55%)` }}
      />
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-sm"
        style={{ backgroundColor: courseColor }}
      />
      <div className="relative pl-6 pr-5 py-6 flex items-center gap-5">
        <div
          className="shrink-0 w-12 h-12 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105"
          style={{ backgroundColor: `${courseColor}22`, border: `1px solid ${courseColor}55` }}
        >
          <Play size={18} color={courseColor} fill={courseColor} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="text-[9px] tracking-[0.2em] uppercase font-mono font-bold px-2 py-0.5 rounded-sm"
              style={{ backgroundColor: `${courseColor}20`, color: courseColor, border: `1px solid ${courseColor}40` }}
            >
              {pathTitle}
            </span>
            <span className="text-[9px] tracking-[0.15em] uppercase font-mono" style={{ color: BRAND.textSubtle }}>
              Lesson {lessonNum} of {totalInCourse}
            </span>
          </div>
          <h2 className="font-serif leading-tight" style={{ fontSize: 'clamp(20px, 3vw, 26px)', color: BRAND.text }}>
            {lesson.title}
          </h2>
          <div className="mt-1.5 flex items-center gap-4 text-[10px] tracking-[0.12em] uppercase" style={{ color: BRAND.textSubtle }}>
            <span>{lesson.duration}</span>
            <span style={{ color: trackColor }}>{lesson.level}</span>
            <span className="flex items-center gap-1" style={{ color: BRAND.gold }}>
              <Zap size={9} fill={BRAND.gold} /> {lesson.xpReward} XP
            </span>
          </div>
        </div>
        <div className="shrink-0 hidden sm:block">
          <p className="text-[10px] font-mono text-right mb-2" style={{ color: BRAND.textSubtle }}>
            {completedInCourse} / {totalInCourse} complete
          </p>
          <div className="w-36 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: `${courseColor}18` }}>
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${pct}%`, backgroundColor: courseColor }}
            />
          </div>
        </div>
        <ChevronRight
          size={16}
          className="shrink-0 transition-transform group-hover:translate-x-1"
          style={{ color: courseColor }}
        />
      </div>
    </Link>
  )
}

// ─── Collapsed path card ──────────────────────────────────────────────────────

function CourseHeader({
  path,
  isExpanded,
  onToggle,
  completedCount,
  availableCount,
  completedIds,
  lessons,
}: {
  path: LeanPath
  isExpanded: boolean
  onToggle: () => void
  completedCount: number
  availableCount: number
  completedIds: Set<string>
  lessons: Record<string, LeanLesson>
}) {
  const pct = availableCount > 0 ? Math.round((completedCount / availableCount) * 100) : 0
  const allDone = availableCount > 0 && completedCount === availableCount
  const FallbackIcon = TRACK_ICONS[path.track] ?? Mountain

  return (
    <button
      onClick={onToggle}
      className="w-full text-left p-5 rounded-sm transition-all hover:bg-white/[0.02] group"
      style={{
        backgroundColor: BRAND.surface,
        border: `1px solid ${isExpanded ? `${path.color}40` : BRAND.border}`,
      }}
      aria-expanded={isExpanded}
    >
      <div className="flex items-start gap-4">
        <div
          className="shrink-0 w-11 h-11 rounded-sm flex items-center justify-center mt-0.5"
          style={{ backgroundColor: `${path.color}18`, border: `1px solid ${path.color}40` }}
        >
          <PathIcon iconId={path.iconId} category="paths" fallback={FallbackIcon} color={path.color} size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[9px] tracking-[0.2em] uppercase font-mono font-bold mb-0.5" style={{ color: path.color }}>
                {path.level}
              </div>
              <h2 className="font-serif leading-tight" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)' }}>
                {path.title}
              </h2>
            </div>
            <div className="shrink-0 w-7 h-7 rounded-sm flex items-center justify-center" style={{ color: BRAND.textSubtle }}>
              {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </div>
          </div>
          <p className="text-xs mt-1 pr-8 line-clamp-1" style={{ color: BRAND.textSubtle }}>
            {path.subtitle}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div
              className="flex-1 max-w-[200px] h-1 rounded-full overflow-hidden"
              style={{ backgroundColor: `${path.color}20` }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, backgroundColor: allDone ? BRAND.jade : path.color }}
              />
            </div>
            <span className="text-[10px] font-mono shrink-0" style={{ color: BRAND.textSubtle }}>
              {completedCount} / {availableCount}
            </span>
            {allDone && (
              <span
                className="flex items-center gap-1 text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full shrink-0"
                style={{ backgroundColor: `${BRAND.jade}18`, color: BRAND.jade, border: `1px solid ${BRAND.jade}40` }}
              >
                <Check size={8} strokeWidth={3} /> Complete
              </span>
            )}
            {!allDone && completedCount > 0 && !isExpanded && (
              <span className="text-[10px] shrink-0" style={{ color: path.color }}>{pct}%</span>
            )}
          </div>
          {!isExpanded && path.chapters.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {path.chapters.slice(0, 5).map((ch, i) => {
                const available = ch.lessonIds.some(id => lessons[id])
                const done = available && ch.lessonIds
                  .filter(id => lessons[id])
                  .every(id => completedIds.has(id))
                return (
                  <span
                    key={ch.id}
                    className="flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-sm leading-none"
                    style={{
                      backgroundColor: done ? `${BRAND.jade}12` : available ? `${path.color}10` : BRAND.surfaceHi,
                      color: done ? BRAND.jade : available ? BRAND.textDim : BRAND.textSubtle,
                      border: `1px solid ${done ? `${BRAND.jade}30` : available ? `${path.color}20` : BRAND.border}`,
                    }}
                  >
                    {done
                      ? <Check size={7} strokeWidth={3} />
                      : <span className="opacity-50">{i + 1}</span>
                    }
                    <span>{ch.title}</span>
                  </span>
                )
              })}
              {path.chapters.length > 5 && (
                <span
                  className="text-[9px] font-mono px-2 py-0.5 rounded-sm"
                  style={{ color: BRAND.textSubtle, backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
                >
                  +{path.chapters.length - 5} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </button>
  )
}

// ─── Linear lesson row (inside expanded chapter) ─────────────────────────────

function LinearLessonRow({
  lesson, step, isCompleted, isLocked, color,
}: {
  lesson: LeanLesson
  step: number
  isCompleted: boolean
  isLocked: boolean
  color: string
}) {
  return (
    <Link
      href={`/learn/${lesson.id}`}
      className="flex items-start gap-3 px-3 py-3 rounded-sm transition-all hover:-translate-y-[1px] group relative overflow-hidden"
      style={{
        backgroundColor: BRAND.surfaceHi,
        border: `1px solid ${isCompleted ? `${BRAND.jade}35` : BRAND.border}`,
        opacity: isLocked ? 0.75 : 1,
      }}
    >
      <div
        className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-mono font-bold shrink-0 mt-0.5"
        style={isCompleted
          ? { backgroundColor: `${BRAND.jade}20`, color: BRAND.jade, border: `1px solid ${BRAND.jade}50` }
          : { backgroundColor: `${color}15`, color: color, border: `1px solid ${color}35` }}
      >
        {isCompleted ? <Check size={10} strokeWidth={2.5} /> : step}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-medium leading-snug truncate" style={{ color: isLocked ? BRAND.textSubtle : BRAND.text }}>
          {lesson.title}
        </div>
        <div className="text-[11px] leading-snug mt-0.5 line-clamp-1" style={{ color: BRAND.textSubtle }}>
          {lesson.description}
        </div>
        <div className="flex items-center gap-2 text-[10px] mt-1" style={{ color: BRAND.textSubtle }}>
          <span>{lesson.duration}</span>
          <span className="flex items-center gap-0.5" style={{ color: BRAND.gold }}>
            <Zap size={8} fill={BRAND.gold} /> {lesson.xpReward}
          </span>
        </div>
      </div>
      {isLocked
        ? <Lock size={11} className="mt-0.5" style={{ color: BRAND.textSubtle, flexShrink: 0 }} />
        : <ChevronRight size={12} className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color }} />
      }
    </Link>
  )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function moduleAnchorId(pathId: string, chapterId: string) {
  return `mod-${pathId}-${chapterId}`
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LibraryClient({
  paths,
  lessons,
  standaloneIds,
  tracks,
  initialCompletedIds,
  initialSubscription,
  continueInfo: initialContinueInfo,
}: Props) {
  const [activeTrack, setActiveTrack] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => new Set(initialCompletedIds))
  const [subscription, setSubscription] = useState(initialSubscription)
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null)
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(
    () => new Set([paths[0]?.id ?? ''])
  )
  const [continueInfo, setContinueInfo] = useState(initialContinueInfo)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Debounce search: only recompute results 150ms after the user stops typing
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 150)
    return () => clearTimeout(timer)
  }, [searchQuery])

  // Re-fetch progress client-side to stay fresh (server data is at render time)
  useEffect(() => {
    import('@/lib/supabase/client').then(({ createClient }) => {
      const supabase = createClient()
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (!user) return
        Promise.all([
          (supabase.from('user_lesson_progress') as any)
            .select('lesson_id, completed_at')
            .eq('user_id', user.id)
            .order('completed_at', { ascending: false }),
          (supabase.from('profiles') as any)
            .select('subscription')
            .eq('id', user.id)
            .single(),
        ]).then(([progressRes, profileRes]: [
          { data: { lesson_id: string; completed_at: string }[] | null },
          { data: { subscription?: string } | null },
        ]) => {
          if (profileRes.data?.subscription) setSubscription(profileRes.data.subscription)

          const rows = progressRes.data ?? []
          if (rows.length === 0) return

          const completedSet = new Set(rows.map(r => r.lesson_id))
          setCompletedIds(completedSet)

          const mostRecentId = rows[0].lesson_id
          const activePath = paths.find(p =>
            p.chapters.some(c => c.lessonIds.includes(mostRecentId)),
          )
          if (!activePath) return

          setExpandedCourses(new Set([activePath.id]))

          const availableIds = activePath.chapters
            .flatMap(c => c.lessonIds)
            .filter(id => lessons[id])
          const completedInCourse = availableIds.filter(id => completedSet.has(id)).length
          const totalInCourse = availableIds.length

          let nextId: string | null = null
          outer: for (const chapter of activePath.chapters) {
            for (const id of chapter.lessonIds) {
              if (!completedSet.has(id) && lessons[id]) {
                nextId = id
                break outer
              }
            }
          }

          if (nextId) {
            setContinueInfo({
              lessonId: nextId,
              pathTitle: activePath.title,
              courseColor: activePath.color,
              completedInCourse,
              totalInCourse,
            })
          }
        })
      })
    })
  }, [paths, lessons])

  // Per-track completion stats for filter buttons
  const trackCompletionMap = useMemo(() => {
    const map: Record<string, { completed: number; total: number }> = {}
    Object.values(lessons).forEach(l => {
      if (!map[l.track]) map[l.track] = { completed: 0, total: 0 }
      map[l.track].total++
      if (completedIds.has(l.id)) map[l.track].completed++
    })
    return map
  }, [lessons, completedIds])

  const earnedXp = useMemo(
    () => Array.from(completedIds).reduce((sum, id) => sum + (lessons[id]?.xpReward ?? 0), 0),
    [completedIds, lessons],
  )

  function toggleCourse(courseId: string) {
    setExpandedCourses(prev => {
      const next = new Set(prev)
      if (next.has(courseId)) next.delete(courseId)
      else next.add(courseId)
      return next
    })
  }

  const visiblePaths = useMemo(
    () => activeTrack === 'all' ? paths : paths.filter(p => p.track === activeTrack),
    [activeTrack, paths],
  )

  const standaloneLessons = useMemo(
    () => standaloneIds
      .map(id => lessons[id])
      .filter((l): l is LeanLesson => l != null)
      .filter(l => activeTrack === 'all' || l.track === activeTrack),
    [standaloneIds, lessons, activeTrack],
  )

  const isSearching = debouncedQuery.length > 0

  const searchResults = useMemo(() => {
    const q = debouncedQuery.toLowerCase()
    if (!q) return []
    return Object.values(lessons).filter(l => {
      if (activeTrack !== 'all' && l.track !== activeTrack) return false
      return l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)
    })
  }, [debouncedQuery, activeTrack, lessons])

  const hasAnything = isSearching
    ? searchResults.length > 0
    : visiblePaths.length > 0 || standaloneLessons.length > 0

  // Observe chapter sections that are currently expanded
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (observerRef.current) observerRef.current.disconnect()

    const expandedIds = visiblePaths
      .filter(p => expandedCourses.has(p.id))
      .flatMap(p => p.chapters.map(ch => moduleAnchorId(p.id, ch.id)))

    const elements = expandedIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
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
  }, [visiblePaths, expandedCourses])

  const scrollToAnchor = (anchor: string) => {
    const el = document.getElementById(anchor)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top: y, behavior: 'smooth' })
    setActiveAnchor(anchor)
  }

  const expandAndScroll = (courseId: string) => {
    setExpandedCourses(prev => {
      if (prev.has(courseId)) return prev
      return new Set([...prev, courseId])
    })
    setTimeout(() => scrollToAnchor(`course-${courseId}`), 50)
  }
  // expandAndScroll is available for future use (e.g. deep-link into a chapter)
  void expandAndScroll

  const continueLesson = continueInfo ? lessons[continueInfo.lessonId] : null

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="border-b pb-5" style={{ borderColor: BRAND.border }}>
        <div className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: BRAND.accent }}>
          Lesson Library
        </div>
        <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1 }}>
          Every <em style={{ color: BRAND.accent }}>facet</em> of earth science
        </h1>
        {completedIds.size > 0 && (
          <div
            className="flex items-center gap-4 mt-4 text-[10px] tracking-[0.1em] uppercase font-mono"
            style={{ color: BRAND.textSubtle }}
          >
            <span className="flex items-center gap-1.5">
              <Check size={10} strokeWidth={2.5} style={{ color: BRAND.jade }} />
              {completedIds.size} lesson{completedIds.size !== 1 ? 's' : ''} complete
            </span>
            <span style={{ color: BRAND.border }}>·</span>
            <span className="flex items-center gap-1" style={{ color: BRAND.gold }}>
              <Zap size={9} fill={BRAND.gold} />
              {earnedXp.toLocaleString()} XP earned
            </span>
          </div>
        )}
      </div>

      {/* Continue learning hero */}
      {continueLesson && continueInfo && !isSearching && (
        <ContinueBanner
          lesson={continueLesson}
          pathTitle={continueInfo.pathTitle}
          courseColor={continueInfo.courseColor}
          completedInCourse={continueInfo.completedInCourse}
          totalInCourse={continueInfo.totalInCourse}
        />
      )}

      {/* Search */}
      <div role="search" className="relative">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: BRAND.textSubtle }}
        />
        <input
          type="text"
          placeholder="Search lessons by title or topic…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-10 py-2.5 rounded-sm text-sm bg-transparent outline-none"
          style={{
            backgroundColor: BRAND.surface,
            border: `1px solid ${searchQuery ? BRAND.accent : BRAND.border}`,
            color: BRAND.text,
          }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-sm transition-opacity hover:opacity-70"
            aria-label="Clear search"
          >
            <X size={13} style={{ color: BRAND.textSubtle }} />
          </button>
        )}
      </div>

      {/* Track filter */}
      <div role="group" aria-label="Filter by track" className="flex gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTrack('all')}
          aria-pressed={activeTrack === 'all'}
          className="px-4 py-2 rounded-sm text-[10px] tracking-[0.15em] uppercase whitespace-nowrap transition-all"
          style={{
            backgroundColor: activeTrack === 'all' ? BRAND.accent : BRAND.surface,
            color: activeTrack === 'all' ? BRAND.bg : BRAND.text,
            border: `1px solid ${activeTrack === 'all' ? BRAND.accent : BRAND.border}`,
          }}
        >
          All
        </button>
        {tracks.map(t => {
          const stats = trackCompletionMap[t.id] || { completed: 0, total: 0 }
          if (stats.total === 0) return null
          const isActive = activeTrack === t.id
          const hasProgress = completedIds.size > 0 && stats.completed > 0
          const TrackIcon = TRACK_ICONS[t.id]
          return (
            <button
              key={t.id}
              onClick={() => setActiveTrack(t.id)}
              aria-pressed={isActive}
              className="px-4 py-2 rounded-sm text-[10px] tracking-[0.15em] uppercase whitespace-nowrap flex items-center gap-2 transition-all"
              style={{
                backgroundColor: isActive ? t.color : BRAND.surface,
                color: isActive ? BRAND.bg : BRAND.text,
                border: `1px solid ${isActive ? t.color : BRAND.border}`,
              }}
            >
              {TrackIcon && <TrackIcon size={12} />}
              {t.name}
              <span style={{ opacity: 0.65 }}>
                ({hasProgress ? `${stats.completed}/${stats.total}` : stats.total})
              </span>
            </button>
          )
        })}
      </div>

      {/* Sticky chapter nav */}
      {!isSearching && visiblePaths.some(c => expandedCourses.has(c.id)) && (
        <div
          className="sticky top-0 z-20 -mx-2 px-2 py-2 backdrop-blur-md"
          style={{ backgroundColor: `${BRAND.bg}d9`, borderBottom: `1px solid ${BRAND.border}` }}
        >
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
            {visiblePaths.filter(p => expandedCourses.has(p.id)).flatMap(path =>
              path.chapters.map((ch, i) => {
                const anchor = moduleAnchorId(path.id, ch.id)
                const isActive = activeAnchor === anchor
                const available = ch.lessonIds.some(id => lessons[id])
                const allDone = available && ch.lessonIds.filter(id => lessons[id]).every(id => completedIds.has(id))
                return (
                  <button
                    key={anchor}
                    onClick={() => scrollToAnchor(anchor)}
                    className="shrink-0 px-2.5 py-1 rounded-sm text-[10px] font-mono flex items-center gap-1.5 transition-all whitespace-nowrap"
                    style={{
                      backgroundColor: isActive ? path.color : BRAND.surface,
                      color: isActive ? BRAND.bg : available ? BRAND.text : BRAND.textSubtle,
                      border: `1px solid ${isActive ? path.color : BRAND.border}`,
                      opacity: available ? 1 : 0.45,
                    }}
                    title={ch.title}
                  >
                    {allDone
                      ? <Check size={8} strokeWidth={3} style={{ color: isActive ? BRAND.bg : BRAND.jade }} />
                      : <span>{i + 1}</span>
                    }
                    <span className="hidden sm:inline">{ch.title}</span>
                  </button>
                )
              })
            )}
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
          <h3 className="font-serif" style={{ fontSize: '22px' }}>
            {isSearching ? 'No lessons found' : 'Coming soon'}
          </h3>
          <p className="text-xs mt-2" style={{ color: BRAND.textSubtle }}>
            {isSearching
              ? `No lessons match "${debouncedQuery}". Try a different keyword.`
              : "We're building lessons for this track."}
          </p>
          {isSearching && (
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 rounded-sm text-[10px] tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
              style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}`, color: BRAND.text }}
            >
              Clear search
            </button>
          )}
        </div>
      )}

      {/* Search results */}
      {isSearching && searchResults.length > 0 && (
        <div className="space-y-4">
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono" style={{ color: BRAND.textSubtle }}>
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
          </span>
          <div className="grid md:grid-cols-2 gap-3">
            {searchResults.map(lesson => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                trackColor={tracks.find(t => t.id === lesson.track)?.color ?? BRAND.accent}
                isCompleted={completedIds.has(lesson.id)}
                isLocked={!FREE_LESSON_IDS.has(lesson.id) && subscription === 'free'}
              />
            ))}
          </div>
        </div>
      )}

      {/* Path sections */}
      {!isSearching && visiblePaths.map(path => {
        const availableIds = path.chapters.flatMap(ch => ch.lessonIds).filter(id => lessons[id])
        const availableCount = availableIds.length
        const completedCount = availableIds.filter(id => completedIds.has(id)).length
        const isExpanded = expandedCourses.has(path.id)
        const FallbackIcon = TRACK_ICONS[path.track] ?? Mountain

        return (
          <section key={path.id} id={`course-${path.id}`} className="scroll-mt-28">
            <CourseHeader
              path={path}
              isExpanded={isExpanded}
              onToggle={() => toggleCourse(path.id)}
              completedCount={completedCount}
              availableCount={availableCount}
              completedIds={completedIds}
              lessons={lessons}
            />

            {isExpanded && (
              <div className="mt-3">
                <div
                  className="flex items-center gap-2 px-1 mb-5 text-[10px]"
                  style={{ color: BRAND.textSubtle }}
                >
                  <ArrowRight size={10} />
                  <span>Study chapters in order — each builds on the previous</span>
                </div>

                {(() => {
                  const activeChapterIdx = path.chapters.findIndex(ch => {
                    const avail = ch.lessonIds.filter(id => lessons[id])
                    const done = avail.filter(id => completedIds.has(id))
                    return avail.length > 0 && done.length < avail.length
                  })
                  return path.chapters.map((chapter, ci) => {
                    const chapterLessons = chapter.lessonIds
                      .map(id => lessons[id])
                      .filter((l): l is LeanLesson => l != null)
                    const availableInChapter = chapterLessons.length
                    const totalInChapter = chapter.lessonIds.length
                    const completedInChapter = chapter.lessonIds.filter(id => completedIds.has(id)).length
                    const allChapterDone = availableInChapter > 0 && completedInChapter === availableInChapter
                    const isCurrentChapter = ci === activeChapterIdx
                    const isLast = ci === path.chapters.length - 1

                    return (
                      <div
                        key={chapter.id}
                        id={moduleAnchorId(path.id, chapter.id)}
                        className="flex gap-4 scroll-mt-32"
                      >
                        <div className="flex flex-col items-center shrink-0" style={{ width: '28px' }}>
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 z-10"
                            style={allChapterDone
                              ? { backgroundColor: `${BRAND.jade}20`, color: BRAND.jade, border: `1px solid ${BRAND.jade}50` }
                              : isCurrentChapter
                                ? { backgroundColor: path.color, color: BRAND.bg, border: `1px solid ${path.color}` }
                                : { backgroundColor: BRAND.surfaceHi, color: BRAND.textSubtle, border: `1px solid ${BRAND.border}` }}
                          >
                            {allChapterDone ? <Check size={11} strokeWidth={2.5} /> : ci + 1}
                          </div>
                          {!isLast && (
                            <div
                              className="w-px flex-1 my-1"
                              style={{ backgroundColor: allChapterDone ? `${BRAND.jade}40` : BRAND.border, minHeight: '24px' }}
                            />
                          )}
                        </div>

                        <div className={`flex-1 min-w-0 ${isLast ? 'pb-2' : 'pb-8'}`}>
                          <div className="flex items-start gap-2 mb-3" style={{ minHeight: '28px' }}>
                            <div
                              className="w-6 h-6 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: `${path.color}10`, border: `1px solid ${path.color}25` }}
                            >
                              <PathIcon
                                iconId={chapter.iconId}
                                category="chapters"
                                fallback={FallbackIcon}
                                color={path.color}
                                size={12}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h3
                                  className="font-mono text-[11px] tracking-[0.12em] uppercase font-semibold truncate"
                                  style={{ color: allChapterDone ? BRAND.textSubtle : BRAND.text }}
                                >
                                  {chapter.title}
                                </h3>
                                {allChapterDone && (
                                  <Check size={11} strokeWidth={2.5} style={{ color: BRAND.jade, flexShrink: 0 }} />
                                )}
                                {!allChapterDone && completedInChapter > 0 && (
                                  <span className="text-[9px] font-mono shrink-0" style={{ color: path.color }}>
                                    {completedInChapter}/{availableInChapter}
                                  </span>
                                )}
                                {availableInChapter === 0 && (
                                  <span className="text-[9px] tracking-[0.1em] uppercase shrink-0" style={{ color: BRAND.textSubtle }}>
                                    Coming soon
                                  </span>
                                )}
                              </div>
                              {chapter.description && (
                                <p className="text-[11px] mt-0.5 leading-snug line-clamp-2" style={{ color: BRAND.textSubtle }}>
                                  {chapter.description}
                                </p>
                              )}
                            </div>
                          </div>

                          {availableInChapter > 0 && (
                            <div className="space-y-1.5">
                              {chapterLessons.map((lesson, i) => (
                                <LinearLessonRow
                                  key={lesson.id}
                                  lesson={lesson}
                                  step={i + 1}
                                  isCompleted={completedIds.has(lesson.id)}
                                  isLocked={!FREE_LESSON_IDS.has(lesson.id) && subscription === 'free'}
                                  color={path.color}
                                />
                              ))}
                              {totalInChapter > availableInChapter && (
                                <div className="pl-8 pt-1 text-[10px]" style={{ color: BRAND.textSubtle }}>
                                  + {totalInChapter - availableInChapter} more coming soon
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })
                })()}

                <button
                  onClick={() => toggleCourse(path.id)}
                  className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase transition-opacity hover:opacity-70 ml-10 mt-2"
                  style={{ color: BRAND.textSubtle }}
                >
                  <ChevronUp size={12} /> Collapse path
                </button>
              </div>
            )}
          </section>
        )
      })}

      {/* Standalone lessons */}
      {!isSearching && standaloneLessons.length > 0 && (
        <div className="space-y-4">
          {visiblePaths.length > 0 && (
            <div className="border-t pt-6" style={{ borderColor: BRAND.border }}>
              <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
                Standalone Lessons
              </div>
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-3">
            {standaloneLessons.map(lesson => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                trackColor={tracks.find(t => t.id === lesson.track)?.color ?? BRAND.accent}
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
