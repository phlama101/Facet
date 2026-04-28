import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import CourseCard from '@/components/features/CourseCard'
import CoursesFilter from '@/components/features/CoursesFilter'
import { cn, difficultyColor, categoryColor } from '@/lib/utils'
import type { Course } from '@/types'

export const metadata: Metadata = { title: 'Courses' }

const CATEGORIES = [
  { value: 'all', label: 'All Disciplines', icon: '🌐' },
  { value: 'geology',      label: 'Geology',      icon: '🌍' },
  { value: 'oceanography', label: 'Oceanography', icon: '🌊' },
  { value: 'meteorology',  label: 'Meteorology',  icon: '⛅' },
  { value: 'volcanology',  label: 'Volcanology',  icon: '🌋' },
  { value: 'paleontology', label: 'Paleontology', icon: '🦕' },
  { value: 'climatology',  label: 'Climatology',  icon: '🌡️' },
]

interface Props { searchParams: Promise<{ category?: string; difficulty?: string }> }

export default async function CoursesPage({ searchParams }: Props) {
  const params = await searchParams
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let enrollmentIds: string[] = []
  let progressMap: Record<string, number> = {}
  if (user) {
    const { data: enrollments } = await supabase.from('user_course_enrollments').select('course_id, progress_percentage').eq('user_id', user.id)
    const safeEnrollments = enrollments as { course_id: string; progress_percentage: number }[] | null
    if (safeEnrollments) {
      enrollmentIds = safeEnrollments.map(e => e.course_id)
      progressMap = Object.fromEntries(safeEnrollments.map(e => [e.course_id, e.progress_percentage]))
    }
  }

  const category = params.category && params.category !== 'all' ? params.category : null
  const difficulty = params.difficulty && params.difficulty !== 'all' ? params.difficulty : null

  let query = (supabase.from('courses') as any).select('*').eq('published', true).order('order_index')
  if (category) query = query.eq('category', category)
  if (difficulty) query = query.eq('difficulty', difficulty)
  const { data } = await query
  const filtered: Course[] = (data ?? []) as Course[]

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-[#e6edf3]">Course Catalog</h1>
        <p className="text-[#8b949e] mt-1">
          {filtered.length} course{filtered.length !== 1 ? 's' : ''} across 6 earth science disciplines
        </p>
      </div>

      <CoursesFilter categories={CATEGORIES} />

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              enrolled={enrollmentIds.includes(course.id)}
              progress={progressMap[course.id]}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-[#e6edf3] font-semibold">No courses found</p>
          <p className="text-sm text-[#8b949e] mt-1">Try adjusting your filters</p>
        </div>
      )}
    </div>
  )
}
