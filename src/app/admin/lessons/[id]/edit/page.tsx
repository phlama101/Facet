import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import LessonEditor from '@/components/admin/LessonEditor'
import { getAllDbLessons } from '@/lib/lesson-store'

export const metadata = { title: 'Edit Lesson — Facet Admin' }

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditLessonPage({ params }: Props) {
  const { id } = await params
  const decodedId = decodeURIComponent(id)

  const all = await getAllDbLessons()
  const lesson = all.find(l => l.id === decodedId)
  if (!lesson) notFound()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/lessons" className="p-2 rounded-lg text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-black text-[#e6edf3]">Edit: {lesson.title}</h1>
        {lesson.status === 'published' && (
          <Link
            href={`/learn/${lesson.id}`}
            target="_blank"
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#8b949e] hover:text-[#e6edf3] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Preview
          </Link>
        )}
      </div>

      <LessonEditor mode="edit" initial={lesson} />
    </div>
  )
}
