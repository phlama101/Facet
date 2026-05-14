import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { Metadata } from 'next'
import SettingsClient from './SettingsClient'
import type { Profile } from '@/types'

export const metadata: Metadata = { title: 'Settings' }

export default async function SettingsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('username, display_name')
    .eq('id', user.id)
    .single()

  const p = profile as Pick<Profile, 'username' | 'display_name'> | null

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="font-serif" style={{ fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 1 }}>
          Settings
        </h1>
      </div>
      <SettingsClient
        email={user.email ?? ''}
        displayName={p?.display_name ?? null}
        username={p?.username ?? user.email?.split('@')[0] ?? 'explorer'}
      />
    </div>
  )
}
