import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AtlasMap from '@/components/features/AtlasMap'

export const metadata = { title: 'Living Atlas' }

export default async function AtlasPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login?next=/atlas')

  const [profileRes, progressRes] = await Promise.all([
    supabase.from('profiles').select('subscription').eq('id', user.id).single(),
    supabase.from('user_lesson_progress').select('lesson_id').eq('user_id', user.id).eq('completed', true),
  ])

  const subscription =
    (profileRes.data as { subscription?: string } | null)?.subscription ?? 'free'
  const completedLessonIds: string[] =
    (progressRes.data as { lesson_id: string }[] | null)?.map(r => r.lesson_id) ?? []

  return (
    <div className="-mx-5 -mt-6 md:-mt-8 px-5 pt-4 pb-0">
      <AtlasMap subscription={subscription} completedLessonIds={completedLessonIds} />
    </div>
  )
}
