import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardSidebar from '@/components/layout/DashboardSidebar'
import DashboardTopbar from '@/components/layout/DashboardTopbar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const safeProfile = profile ?? {
    id: user.id,
    username: user.email?.split('@')[0] ?? 'explorer',
    display_name: user.user_metadata?.display_name ?? null,
    avatar_color: '#06b6d4',
    xp: 0,
    level: 1,
    streak: 0,
    longest_streak: 0,
  }

  return (
    <div className="flex min-h-screen bg-[#0d1117]">
      <DashboardSidebar user={safeProfile} />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar user={safeProfile} />
        <main className="flex-1 p-6 lg:p-8 max-w-6xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
