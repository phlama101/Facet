import { createClient } from '@/lib/supabase/server'
import AppNav from '@/components/layout/AppNav'
import AppFooter from '@/components/layout/AppFooter'
import GuestBanner from '@/components/layout/GuestBanner'
import MobileNav from '@/components/layout/MobileNav'
import FacetBackground from '@/components/brand/FacetBackground'
import type { Profile } from '@/types'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  let user = null
  let profile: Profile | null = null

  try {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    user = data?.user ?? null

    if (user) {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      profile = (profileData as Profile | null) ?? {
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
  } catch {
    // Supabase unavailable — render as guest
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-brand-bg">
      <FacetBackground />
      <div className="relative z-10">
        <AppNav profile={profile} />
        {!user && <GuestBanner />}
        <main className="max-w-6xl mx-auto px-5 py-6 md:py-8 pb-24 sm:pb-8">
          {children}
        </main>
        <AppFooter />
        {user && <MobileNav />}
      </div>
    </div>
  )
}
