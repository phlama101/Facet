import { createClient } from '@/lib/supabase/server'
import AppNav from '@/components/layout/AppNav'
import AppFooter from '@/components/layout/AppFooter'
import GuestBanner from '@/components/layout/GuestBanner'
import FacetBackground from '@/components/brand/FacetBackground'
import type { Profile } from '@/types'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let profile: Profile | null = null
  if (user) {
    const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
    profile = (data as Profile | null) ?? {
      id: user.id,
      username: user.email?.split('@')[0] ?? 'explorer',
      display_name: user.user_metadata?.display_name ?? null,
      bio: null,
      avatar_color: '#7AD7F0',
      xp: 0,
      level: 1,
      streak: 0,
      longest_streak: 0,
      last_active: new Date().toISOString(),
      subscription: 'free',
      created_at: new Date().toISOString(),
    }
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-brand-bg">
      <FacetBackground />
      <div className="relative z-10">
        <AppNav profile={profile} />
        {!user && <GuestBanner />}
        <main className="max-w-6xl mx-auto px-5 py-6 md:py-8">
          {children}
        </main>
        <AppFooter />
      </div>
    </div>
  )
}
