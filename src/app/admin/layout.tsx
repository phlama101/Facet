import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import Link from 'next/link'

export const metadata = { title: 'Admin — Facet' }

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login?next=/admin/lessons')

  // Check if migration has run (is_admin column exists)
  const admin = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )

  const { error: migrationCheck } = await admin
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .single()

  const migrationNeeded = migrationCheck?.code === '42703' // column does not exist

  if (migrationNeeded) {
    // Let the setup page render without admin check
    return (
      <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
        <header className="border-b border-white/5 bg-[#161b22]">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <span className="text-sm font-bold text-[#e6edf3]">Facet Admin</span>
            <Link href="/dashboard" className="text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors">← App</Link>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-8">
          {children}
        </main>
      </div>
    )
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin, display_name, username')
    .eq('id', user.id)
    .single()

  const isAdmin = (profile as { is_admin?: boolean } | null)?.is_admin ?? false
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-8">
        <div className="text-center space-y-3">
          <p className="text-2xl font-black text-[#e6edf3]">Access Denied</p>
          <p className="text-[#8b949e]">You don&apos;t have admin access.</p>
          <Link href="/dashboard" className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  const name = (profile as { display_name?: string; username?: string } | null)?.display_name
    ?? (profile as { username?: string } | null)?.username
    ?? user.email

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <header className="border-b border-white/5 bg-[#161b22]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin/lessons" className="text-sm font-bold text-[#e6edf3] hover:text-cyan-400 transition-colors">
              Facet Admin
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/admin/lessons" className="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors">
                Lessons
              </Link>
              <Link href="/admin/setup" className="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors">
                Setup
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#8b949e]">{name}</span>
            <Link href="/dashboard" className="text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors">
              ← App
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}
