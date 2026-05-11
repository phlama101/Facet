import Link from 'next/link'
import { getAllDbLessons } from '@/lib/lesson-store'
import { LESSONS } from '@/lessons/index'
import { LESSONS_V2 } from '@/lessons-v2/index'
import { Plus, Database, FileCode2, Eye, Edit2, Pencil } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata = { title: 'Lessons — Facet Admin' }

const STATUS_BADGE: Record<string, string> = {
  published: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  review:    'bg-amber-500/15 text-amber-400 border-amber-500/20',
  draft:     'bg-[#8b949e]/15 text-[#8b949e] border-[#8b949e]/20',
}

export default async function AdminLessonsPage() {
  const dbLessons = await getAllDbLessons()
  const dbLessonIds = new Set(dbLessons.map(l => l.id))

  const staticIds = [
    ...Object.keys(LESSONS),
    ...Object.keys(LESSONS_V2),
  ].filter(id => !dbLessonIds.has(id))

  // Sort static IDs for consistent display
  staticIds.sort()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#e6edf3]">Lessons</h1>
          <p className="text-sm text-[#8b949e] mt-1">
            {dbLessons.length} DB lesson{dbLessons.length !== 1 ? 's' : ''} · {staticIds.length} static-only
          </p>
        </div>
        <Link
          href="/admin/lessons/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-[#0d1117] text-sm font-bold hover:bg-cyan-400 transition-colors"
        >
          <Plus className="w-4 h-4" /> New Lesson
        </Link>
      </div>

      {/* DB-managed lessons */}
      {dbLessons.length > 0 && (
        <section>
          <h2 className="text-xs font-bold text-[#8b949e] uppercase tracking-widest mb-3 flex items-center gap-2">
            <Database className="w-3.5 h-3.5" /> Database Lessons
          </h2>
          <div className="rounded-2xl bg-[#161b22] border border-white/5 overflow-hidden divide-y divide-white/5">
            {dbLessons.map(lesson => (
              <div key={lesson.id} className="flex items-center gap-4 px-5 py-4 hover:bg-white/2 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-sm font-semibold text-[#e6edf3]">{lesson.title}</span>
                    <span className={cn(
                      'px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide border',
                      STATUS_BADGE[lesson.status] ?? STATUS_BADGE.draft
                    )}>
                      {lesson.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-[#8b949e]">
                    <code className="font-mono">{lesson.id}</code>
                    <span>·</span>
                    <span>{lesson.trackName}</span>
                    <span>·</span>
                    <span>{lesson.level}</span>
                    <span>·</span>
                    <span>{lesson.sections.length} section{lesson.sections.length !== 1 ? 's' : ''}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {lesson.status === 'published' && (
                    <Link
                      href={`/learn/${lesson.id}`}
                      target="_blank"
                      className="p-2 rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 transition-colors"
                      title="Preview lesson"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  )}
                  <Link
                    href={`/admin/lessons/${lesson.id}/edit`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#e6edf3] transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" /> Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Static-only lessons */}
      <section>
        <h2 className="text-xs font-bold text-[#8b949e] uppercase tracking-widest mb-3 flex items-center gap-2">
          <FileCode2 className="w-3.5 h-3.5" /> Static-Only Lessons
          <span className="text-[#8b949e]/60 font-normal normal-case tracking-normal">
            — editing requires a code deploy
          </span>
        </h2>
        <div className="rounded-2xl bg-[#161b22] border border-white/5 overflow-hidden divide-y divide-white/5">
          {staticIds.map(id => {
            const lesson = LESSONS[id] ?? LESSONS_V2[id]
            const isV2 = !!LESSONS_V2[id]
            return (
              <div key={id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/2 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-[#e6edf3]">
                      {(lesson as { title?: string })?.title ?? id}
                    </span>
                    {isV2 && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide bg-purple-500/15 text-purple-400 border border-purple-500/20">
                        V2
                      </span>
                    )}
                  </div>
                  <code className="text-xs text-[#8b949e] font-mono">{id}</code>
                </div>
                <Link
                  href={`/admin/lessons/new?copy=${encodeURIComponent(id)}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#8b949e] hover:text-[#e6edf3] transition-colors shrink-0"
                  title="Migrate to DB"
                >
                  <Pencil className="w-3.5 h-3.5" /> Migrate to DB
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
