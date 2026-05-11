import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import LessonEditor from '@/components/admin/LessonEditor'
import { LESSONS } from '@/lessons/index'
import type { DbLesson } from '@/lib/lesson-store'
import type { Lesson } from '@/lessons/types'

export const metadata = { title: 'New Lesson — Facet Admin' }

interface Props {
  searchParams: Promise<{ copy?: string }>
}

export default async function NewLessonPage({ searchParams }: Props) {
  const { copy } = await searchParams

  // Pre-populate from a static lesson when using "Migrate to DB"
  let initial: Partial<DbLesson> | undefined
  if (copy && LESSONS[copy]) {
    const src = LESSONS[copy] as Lesson
    initial = {
      id: src.id,
      title: src.title,
      track: src.track,
      trackName: src.trackName,
      level: src.level,
      duration: src.duration,
      xpReward: src.xpReward,
      description: src.description,
      sources: src.sources,
      // Sections from static files have LucideIcon objects which can't be
      // serialised directly. Strip sections so the editor starts blank.
      // Editors can paste in section JSON from the static file.
      sections: [],
      status: 'draft',
      isPremium: false,
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/lessons" className="p-2 rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-black text-[#e6edf3]">
          {copy ? `Migrate: ${copy}` : 'New Lesson'}
        </h1>
      </div>

      {copy && (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
          Migrating static lesson <code className="font-mono">{copy}</code> to the DB.
          Metadata has been pre-filled; paste in the sections JSON from the static file.
        </div>
      )}

      <LessonEditor mode="create" initial={initial} />
    </div>
  )
}
