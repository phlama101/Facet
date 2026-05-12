'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Zap, Flame, LogOut, UserPlus } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import FacetLogo from '@/components/brand/FacetLogo'
import { createClient } from '@/lib/supabase/client'
import type { Profile } from '@/types'

const NAV_TABS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/learn',     label: 'Learn' },
  { href: '/atlas',     label: 'Atlas' },
  { href: '/profile',   label: 'Profile' },
  { href: '/billing',   label: 'Billing' },
  { href: '/sources',   label: 'Sources' },
]

interface AppNavProps {
  profile: Profile | null
}

export default function AppNav({ profile }: AppNavProps) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav style={{ borderBottom: `1px solid ${BRAND.border}` }}>
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3">
          <FacetLogo size={30} />
          <div>
            <div className="font-serif leading-none" style={{ fontSize: '24px' }}>Facet</div>
            <div
              className="text-[9px] tracking-[0.25em] uppercase mt-0.5"
              style={{ color: BRAND.textSubtle }}
            >
              Earth Sciences
            </div>
          </div>
        </Link>

        {/* Right badges */}
        <div className="flex items-center gap-2 md:gap-3">
          {profile && (
            <>
              <div
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-sm"
                style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
              >
                <Flame size={13} color={BRAND.coral} fill={BRAND.coral} />
                <span className="font-mono text-xs font-semibold">{profile.streak}</span>
              </div>
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm"
                style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
              >
                <Zap size={13} color={BRAND.gold} fill={BRAND.gold} />
                <span className="font-mono text-xs font-semibold">{profile.xp.toLocaleString()}</span>
              </div>
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center font-mono text-xs font-bold"
                style={{ background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.amethyst})`, color: BRAND.bg }}
              >
                {profile.level}
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 rounded-sm transition-colors"
                style={{ color: BRAND.textDim }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = BRAND.surfaceHi }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
                title="Sign out"
              >
                <LogOut size={14} />
              </button>
            </>
          )}

          {!profile && (
            <Link
              href="/register"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
            >
              <UserPlus size={11} /> <span className="hidden sm:inline">Sign Up</span><span className="sm:hidden">Join</span>
            </Link>
          )}
        </div>
      </div>

      {/* Tab row */}
      <div className="max-w-6xl mx-auto px-5 flex gap-1 overflow-x-auto">
        {NAV_TABS.map(tab => {
          const isActive = tab.href === '/dashboard'
            ? pathname === '/dashboard'
            : pathname.startsWith(tab.href)
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="px-4 py-3 text-xs font-medium tracking-[0.12em] uppercase transition-colors relative whitespace-nowrap"
              style={{ color: isActive ? BRAND.text : BRAND.textSubtle }}
            >
              {tab.label}
              {isActive && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: BRAND.accent }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
