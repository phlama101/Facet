import { Zap, Library, ExternalLink, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from '@/lessons/types'

interface LessonCompleteProps {
  lesson: Lesson
  correctCount: number
  totalQuestions: number
  xpEarned: number
  alreadyCompleted: boolean
  onSave: () => void
  nextLesson?: { id: string; title: string }
  onNext?: () => void
}

export default function LessonComplete({
  lesson,
  correctCount,
  totalQuestions,
  xpEarned,
  alreadyCompleted,
  onSave,
  nextLesson,
  onNext,
}: LessonCompleteProps) {
  const flawless = correctCount === totalQuestions

  return (
    <div className="text-center py-8 animate-fade-in">
      {/* Gem trophy */}
      <div className="w-20 h-20 mx-auto mb-6">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <defs>
            <linearGradient id="trophyGrad" x1="0" y1="0" x2="80" y2="80">
              <stop offset="0%"   stopColor={BRAND.accent} />
              <stop offset="100%" stopColor={BRAND.gold} />
            </linearGradient>
          </defs>
          <path d="M40 4 L72 24 L60 68 L20 68 L8 24 Z" fill="url(#trophyGrad)" />
          <path d="M40 4 L20 68"  stroke={BRAND.bg} strokeWidth="0.5" opacity="0.5" />
          <path d="M40 4 L60 68"  stroke={BRAND.bg} strokeWidth="0.5" opacity="0.5" />
          <path d="M8 24 L72 24"  stroke={BRAND.bg} strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <div
        className="text-[10px] tracking-[0.3em] uppercase mb-2"
        style={{ color: BRAND.accent }}
      >
        Lesson Complete
      </div>
      <h2
        className="font-serif"
        style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', lineHeight: 1.05 }}
      >
        {flawless ? 'Flawless.' : 'Well done.'}
      </h2>
      <p className="mt-3 text-sm" style={{ color: BRAND.textDim }}>
        You got {correctCount} of {totalQuestions} correct.
      </p>

      {/* XP badge */}
      <div
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.gold}` }}
      >
        <Zap size={14} color={BRAND.gold} fill={BRAND.gold} />
        <span className="font-mono text-sm font-semibold" style={{ color: BRAND.gold }}>
          +{xpEarned} XP
        </span>
        {alreadyCompleted && (
          <span className="text-[10px] ml-1" style={{ color: BRAND.textSubtle }}>(review)</span>
        )}
      </div>

      {/* Sources */}
      {lesson.sources && lesson.sources.length > 0 && (
      <div
        className="mt-10 text-left p-5 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Library size={14} color={BRAND.jade} />
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: BRAND.jade }}
          >
            Sources for This Lesson
          </span>
        </div>
        <div className="space-y-2.5">
          {lesson.sources.map((s, i) => (
            <div key={i} className="text-xs flex items-start gap-2">
              <span
                className="font-mono text-[10px] mt-0.5 flex-shrink-0"
                style={{ color: BRAND.textSubtle }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <span style={{ color: BRAND.gold, fontWeight: 600 }}>{s.org}</span>
                <span style={{ color: BRAND.textDim }}> — {s.title}</span>
                <div
                  className="font-mono text-[10px] mt-0.5 flex items-center gap-1"
                  style={{ color: BRAND.accent }}
                >
                  <ExternalLink size={9} /> {s.url}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      <div className="mt-8 flex flex-col items-center gap-3">
        {nextLesson && onNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-8 py-3 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            Next: {nextLesson.title} <ArrowRight size={12} />
          </button>
        )}
        <button
          onClick={onSave}
          className="px-8 py-3 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase transition-transform hover:scale-[1.02]"
          style={nextLesson
            ? { color: BRAND.textDim, border: `1px solid ${BRAND.border}` }
            : { backgroundColor: BRAND.accent, color: BRAND.bg }}
        >
          {nextLesson ? 'Back to Dashboard' : 'Save & Continue'}
        </button>
      </div>
    </div>
  )
}
