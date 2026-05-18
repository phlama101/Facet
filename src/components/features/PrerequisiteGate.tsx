import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'

interface Props {
  lessonTitle: string
  prerequisitePathTitle: string
  prerequisitePathId: string
}

export default function PrerequisiteGate({ lessonTitle, prerequisitePathTitle, prerequisitePathId }: Props) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <div className="text-center max-w-sm w-full">
        <div
          className="w-14 h-14 rounded-sm flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: `${BRAND.gold}15`, border: `1px solid ${BRAND.gold}30` }}
        >
          <BookOpen size={22} style={{ color: BRAND.gold }} />
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: BRAND.gold }}>
          Foundation Required
        </div>
        <h1 className="font-serif mb-3" style={{ fontSize: '28px', lineHeight: 1.1 }}>
          Finish the foundation first
        </h1>
        <p className="text-sm leading-relaxed mb-1" style={{ color: BRAND.textDim }}>
          <strong style={{ color: BRAND.text }}>{lessonTitle}</strong>
        </p>
        <p className="text-sm leading-relaxed mb-8" style={{ color: BRAND.textDim }}>
          builds on concepts from <strong style={{ color: BRAND.text }}>{prerequisitePathTitle}</strong>.
          Complete that path before moving on.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href={`/learn?path=${prerequisitePathId}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: BRAND.gold, color: BRAND.bg }}
          >
            Go to {prerequisitePathTitle} <ArrowRight size={14} />
          </Link>
          <Link
            href="/learn"
            className="text-xs transition-opacity hover:opacity-70"
            style={{ color: BRAND.textSubtle }}
          >
            ← Back to lessons
          </Link>
        </div>
      </div>
    </div>
  )
}
