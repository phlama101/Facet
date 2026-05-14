'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Zap, X, Share2, Check as CheckIcon, UserPlus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import { TRACK_MAP, LEARNING_PATHS, LESSONS } from '@/lessons/index'
import { useProgressStore } from '@/lib/progressStore'
import type { Lesson } from '@/lessons/types'
import FacetBackground from '@/components/brand/FacetBackground'
import SectionRenderer from './SectionRenderer'

interface Props {
  lesson: Lesson
  onClose: () => void
  onComplete: (xpEarned: number, quizScore?: { correct: number; total: number }) => void
  nextLesson?: { id: string; title: string }
  onCompleteAndNext?: (xpEarned: number, quizScore?: { correct: number; total: number }) => void
  onCompleteAndGoTo?: (xpEarned: number, quizScore: { correct: number; total: number } | undefined, lessonId: string) => void
  isGuest?: boolean
}

export default function LessonRenderer({ lesson, onClose, onComplete, nextLesson, onCompleteAndNext, onCompleteAndGoTo, isGuest = false }: Props) {
  const [sectionIdx, setSectionIdx] = useState(0)
  const [dir, setDir] = useState(1)
  const [quizDone, setQuizDone] = useState(false)
  const [quizResult, setQuizResult] = useState<{ correct: number; total: number } | null>(null)
  const [exitConfirm, setExitConfirm] = useState(false)
  const [shared, setShared] = useState(false)

  const { reset } = useProgressStore()

  const track = TRACK_MAP[lesson.track]
  const trackColor = track?.color ?? BRAND.accent
  const sections = lesson.sections
  const total = sections.length
  const cur = sections[sectionIdx]
  const progress = ((sectionIdx + 1) / total) * 100

  const isLastSection = sectionIdx === total - 1
  const isQuizSection = cur?.type === 'quiz'
  const showNav = !isQuizSection && !(isLastSection && quizDone)

  const currentPath = LEARNING_PATHS.find(p =>
    p.chapters.some(ch => ch.lessonIds.includes(lesson.id))
  )

  // Up to 2 lessons from the same path (skip those already adjacent via nextLesson)
  const recommended: { id: string; title: string; color: string }[] = (() => {
    if (!currentPath) return []
    const allIds = currentPath.chapters.flatMap(ch => ch.lessonIds)
    const skipId = nextLesson?.id
    return allIds
      .filter(id => id !== lesson.id && id !== skipId)
      .slice(-3) // take lessons further along the path
      .map(id => {
        const l = LESSONS[id]
        return l ? { id, title: l.title, color: TRACK_MAP[l.track]?.color ?? BRAND.accent } : null
      })
      .filter((x): x is { id: string; title: string; color: string } => x !== null)
      .slice(0, 2)
  })()

  // When this is the last lesson in the path, suggest the next path to start
  const nextPath = (() => {
    if (nextLesson || !currentPath) return null
    return LEARNING_PATHS.find(p => p.prerequisites?.includes(currentPath.id)) ?? null
  })()

  function goNext() {
    if (sectionIdx < total - 1) {
      setDir(1)
      setSectionIdx(sectionIdx + 1)
    }
  }
  function goPrev() {
    if (sectionIdx > 0) {
      setDir(-1)
      setSectionIdx(sectionIdx - 1)
    }
  }

  function handleQuizComplete(correct: number, total: number) {
    setQuizResult({ correct, total })
    setQuizDone(true)
  }

  function handleFinish() {
    onComplete(lesson.xpReward, quizResult ?? undefined)
    reset()
  }

  async function handleShare() {
    const text = `Just completed "${lesson.title}" on Facet Earth Sciences — earning ${lesson.xpReward} XP! 🌍 facet.earth/learn/${lesson.id}`
    if (navigator.share) {
      try { await navigator.share({ text }) } catch { /* user dismissed */ }
    } else {
      await navigator.clipboard.writeText(text)
      setShared(true)
      setTimeout(() => setShared(false), 2500)
    }
  }

  const nextLabel: Record<string, string> = {
    concept: 'Concept', visualization: 'Visualization',
    lab: 'Lab', challenge: 'Challenge', quiz: 'Quiz', intro: 'Intro',
    theory: 'Theory', 'case-study': 'Case Study', 'data-lab': 'Data Lab',
  }

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <FacetBackground />

      {/* Sticky top bar */}
      <div
        className="relative z-10 border-b sticky top-0 backdrop-blur-sm"
        style={{ borderColor: BRAND.border, backgroundColor: 'rgba(14,15,20,0.9)' }}
      >
        <div className="max-w-3xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          {exitConfirm ? (
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: BRAND.ruby }}>Quit quiz?</span>
              <button
                onClick={onClose}
                className="text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: `${BRAND.ruby}20`, color: BRAND.ruby, border: `1px solid ${BRAND.ruby}50` }}
              >
                Exit
              </button>
              <button
                onClick={() => setExitConfirm(false)}
                className="flex items-center gap-1 text-xs tracking-wider uppercase transition-opacity hover:opacity-70"
                style={{ color: BRAND.textDim }}
              >
                <X size={11} /> Stay
              </button>
            </div>
          ) : (
            <button
              onClick={isQuizSection ? () => setExitConfirm(true) : onClose}
              className="flex items-center gap-2 text-xs tracking-wider uppercase transition-opacity hover:opacity-70"
              style={{ color: BRAND.textDim }}
            >
              <ArrowLeft size={14} /> Exit
            </button>
          )}

          {/* Progress bar */}
          <div className="flex-1 max-w-xs">
            <div
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Lesson progress: section ${sectionIdx + 1} of ${total}`}
              className="h-[3px] rounded-full overflow-hidden"
              style={{ backgroundColor: BRAND.border }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: trackColor, boxShadow: `0 0 8px ${trackColor}80` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <div className="text-[10px] tracking-[0.2em] uppercase font-mono" style={{ color: BRAND.textSubtle }}>
            {sectionIdx + 1} / {total}
          </div>
        </div>
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-5 py-8 md:py-12">
        {/* Lesson header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            {track?.icon && <track.icon size={14} color={trackColor} />}
            <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: trackColor }}>
              {lesson.trackName} · {lesson.level}
            </span>
          </div>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.05 }}
          >
            {lesson.title}
          </h1>
        </motion.div>

        {/* Section content */}
        <div className="mb-12">
          <AnimatePresence mode="wait" custom={dir}>
            {!quizDone && (
              <motion.div
                key={sectionIdx}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionRenderer
                  section={cur}
                  sectionIndex={sectionIdx}
                  lessonId={lesson.id}
                  onQuizComplete={handleQuizComplete}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Lesson complete screen */}
          <AnimatePresence>
            {quizDone && quizResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative text-center space-y-6 py-8 overflow-hidden"
              >
                {/* Confetti */}
                {[...Array(14)].map((_, i) => {
                  const angle = (i / 14) * Math.PI * 2
                  const dist = 120 + Math.random() * 60
                  const colors = [trackColor, BRAND.gold, BRAND.jade, BRAND.amethyst]
                  return (
                    <motion.span
                      key={i}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                      animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0, scale: 1, rotate: Math.random() * 360 }}
                      transition={{ duration: 1.3, delay: 0.3 }}
                      className="pointer-events-none absolute left-1/2 top-1/2 w-2 h-2 rounded-sm"
                      style={{ background: colors[i % colors.length] }}
                    />
                  )
                })}

                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 220, damping: 14 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mx-auto"
                  style={{ backgroundColor: `${trackColor}1A`, boxShadow: `0 0 32px ${trackColor}40` }}
                >
                  <Zap size={36} color={trackColor} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <h2 className="font-serif text-3xl" style={{ color: BRAND.text }}>Lesson Complete</h2>
                  <p className="text-sm" style={{ color: BRAND.textDim }}>
                    Quiz: {quizResult.correct}/{quizResult.total} correct
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55, type: 'spring', stiffness: 260, damping: 18 }}
                  className="inline-block px-6 py-4 rounded-xl mx-auto"
                  style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}`, boxShadow: `0 0 24px ${trackColor}25` }}
                >
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: BRAND.textSubtle }}>XP Earned</p>
                  <p className="text-4xl font-mono font-bold" style={{ color: trackColor }}>
                    +{lesson.xpReward}
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleShare}
                  className="flex items-center gap-2 mx-auto px-5 py-2 rounded-sm text-xs tracking-[0.1em] uppercase font-medium transition-colors"
                  style={{ color: BRAND.textDim, border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
                >
                  {shared
                    ? <><CheckIcon size={12} style={{ color: BRAND.jade }} /> Copied to clipboard</>
                    : <><Share2 size={12} /> Share this lesson</>
                  }
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="flex flex-col items-center gap-3"
                >
                  {nextLesson && onCompleteAndNext && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onCompleteAndNext(lesson.xpReward, quizResult ?? undefined)}
                      className="flex items-center gap-2 mx-auto px-8 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase"
                      style={{ backgroundColor: trackColor, color: BRAND.bg }}
                    >
                      Next: {nextLesson.title} <ArrowRight size={14} />
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleFinish}
                    className="flex items-center gap-2 mx-auto px-8 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase"
                    style={nextLesson
                      ? { color: BRAND.textDim, border: `1px solid ${BRAND.border}`, borderRadius: '0.5rem', padding: '0.5rem 1.5rem' }
                      : { backgroundColor: trackColor, color: BRAND.bg }}
                  >
                    {nextLesson
                      ? (isGuest ? 'Back to Library' : 'Back to Dashboard')
                      : (isGuest ? 'Explore More Lessons' : 'Save & Continue')
                    }
                    {!nextLesson && <ArrowRight size={14} />}
                  </motion.button>
                </motion.div>

                {/* Guest sign-up nudge */}
                {isGuest && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="w-full px-4 py-3 rounded-sm flex items-center justify-between gap-3"
                    style={{
                      backgroundColor: `${BRAND.accent}0D`,
                      border: `1px solid ${BRAND.accent}30`,
                    }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <UserPlus size={14} style={{ color: BRAND.accent, flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: BRAND.textDim }}>
                        Create a free account to save your progress and earn XP.
                      </span>
                    </div>
                    <a
                      href="/register"
                      className="shrink-0 text-xs px-3 py-1.5 rounded-sm font-semibold"
                      style={{ backgroundColor: BRAND.accent, color: '#0A0E1A' }}
                    >
                      Sign up free
                    </a>
                  </motion.div>
                )}

                {/* Next path recommendation */}
                {nextPath && (() => {
                  const firstLessonId = nextPath.chapters[0]?.lessonIds[0]
                  if (!firstLessonId) return null
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.85 }}
                      className="w-full mt-2"
                    >
                      <div className="text-[9px] tracking-[0.2em] uppercase mb-2 text-center" style={{ color: BRAND.textSubtle }}>
                        Up Next — Start a new path
                      </div>
                      <button
                        onClick={() => onCompleteAndGoTo
                          ? onCompleteAndGoTo(lesson.xpReward, quizResult ?? undefined, firstLessonId)
                          : onComplete(lesson.xpReward, quizResult ?? undefined)
                        }
                        className="w-full flex items-center gap-4 px-5 py-4 rounded-sm text-left transition-opacity hover:opacity-85"
                        style={{
                          backgroundColor: `${nextPath.color}12`,
                          border: `1px solid ${nextPath.color}40`,
                        }}
                      >
                        <div
                          className="w-2 h-8 rounded-full shrink-0"
                          style={{ backgroundColor: nextPath.color }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold truncate" style={{ color: BRAND.text }}>
                            {nextPath.title}
                          </div>
                          {nextPath.subtitle && (
                            <div className="text-[11px] mt-0.5 truncate" style={{ color: BRAND.textDim }}>
                              {nextPath.subtitle}
                            </div>
                          )}
                        </div>
                        <ArrowRight size={14} color={nextPath.color} className="shrink-0" />
                      </button>
                    </motion.div>
                  )
                })()}

                {/* You might also like */}
                {recommended.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="w-full mt-2"
                  >
                    <div className="text-[9px] tracking-[0.2em] uppercase mb-2 text-center" style={{ color: BRAND.textSubtle }}>
                      Also in this path
                    </div>
                    <div className="flex flex-col gap-2">
                      {recommended.map(rec => (
                        <button
                          key={rec.id}
                          onClick={() => onCompleteAndGoTo
                            ? onCompleteAndGoTo(lesson.xpReward, quizResult ?? undefined, rec.id)
                            : onComplete(lesson.xpReward, quizResult ?? undefined)
                          }
                          className="flex items-center gap-3 px-4 py-2.5 rounded-sm text-left w-full transition-opacity hover:opacity-80"
                          style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
                        >
                          <div
                            className="w-1.5 h-6 rounded-full shrink-0"
                            style={{ backgroundColor: rec.color }}
                          />
                          <span className="text-xs flex-1 truncate" style={{ color: BRAND.textDim }}>
                            {rec.title}
                          </span>
                          <ArrowRight size={11} color={BRAND.textSubtle} />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {showNav && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between pt-6 border-t"
            style={{ borderColor: BRAND.border }}
          >
            <motion.button
              onClick={goPrev}
              disabled={sectionIdx === 0}
              whileHover={sectionIdx === 0 ? undefined : { x: -2 }}
              whileTap={sectionIdx === 0 ? undefined : { scale: 0.97 }}
              className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase px-4 py-2 rounded-sm disabled:opacity-30 transition-opacity"
              style={{ color: BRAND.textDim }}
            >
              <ArrowLeft size={12} /> Previous
            </motion.button>

            {/* Section dots */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-[160px] sm:max-w-none scrollbar-none">
              {sections.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDir(i > sectionIdx ? 1 : -1); setSectionIdx(i) }}
                  animate={{ width: i === sectionIdx ? 16 : 6, backgroundColor: i === sectionIdx ? trackColor : BRAND.border }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full shrink-0"
                />
              ))}
            </div>

            <motion.button
              onClick={goNext}
              disabled={isLastSection}
              whileHover={isLastSection ? undefined : { x: 2 }}
              whileTap={isLastSection ? undefined : { scale: 0.97 }}
              className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-5 py-2.5 rounded-sm disabled:opacity-30"
              style={{ backgroundColor: isLastSection ? 'transparent' : trackColor, color: isLastSection ? BRAND.textDim : BRAND.bg, border: isLastSection ? `1px solid ${BRAND.border}` : 'none' }}
            >
              {sections[sectionIdx + 1]
                ? `To ${nextLabel[sections[sectionIdx + 1].type] ?? 'Next'}`
                : 'Continue'}
              <ArrowRight size={12} />
            </motion.button>
          </motion.div>
        )}
      </main>
    </div>
  )
}
