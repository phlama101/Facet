'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Zap, Flame, LogOut, UserPlus,
  LayoutDashboard, BookOpen, GitBranch, Trophy, Map, User, CreditCard, Library,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import FacetLogo from '@/components/brand/FacetLogo'
import { createClient } from '@/lib/supabase/client'
import type { Profile } from '@/types'

type TabDef = { href: string; label: string; icon: LucideIcon }

const PRIMARY_TABS: TabDef[] = [
  { href: '/dashboard',   label: 'Dashboard',   icon: LayoutDashboard },
  { href: '/learn',       label: 'Learn',       icon: BookOpen },
  { href: '/skill-tree',  label: 'Skill Tree',  icon: GitBranch },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/atlas',       label: 'Atlas',       icon: Map },
]

const SECONDARY_TABS: TabDef[] = [
  { href: '/profile',  label: 'Profile',  icon: User },
  { href: '/billing',  label: 'Billing',  icon: CreditCard },
  { href: '/sources',  label: 'Sources',  icon: Library },
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

  function isTabActive(href: string) {
    return href === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(href)
  }

  return (
    <nav style={{ borderBottom: `1px solid ${BRAND.border}` }}>
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3">
          <FacetLogo size={30} />
          <div>
            <div className="font-serif leading-none" style={{ fontSize: '24px' }}>Facet</div>
            <div className="text-[9px] tracking-[0.25em] uppercase mt-0.5" style={{ color: BRAND.textSubtle }}>
              Earth Sciences
            </div>
          </div>
        </Link>

        {/* Right badges */}
        <div className="flex items-center gap-2 md:gap-3">
          {profile && (
            <>
              {/* Streak */}
              <div
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-sm"
                style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
              >
                <Flame size={13} color={BRAND.coral} fill={BRAND.coral} />
                <span className="font-mono text-xs font-semibold">{profile.streak}</span>
              </div>

              {/* XP */}
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm"
                style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
              >
                <Zap size={13} color={BRAND.gold} fill={BRAND.gold} />
                <span className="font-mono text-xs font-semibold">{profile.xp.toLocaleString()}</span>
              </div>

              {/* Level badge */}
              <div
                className="flex items-center gap-1 px-2.5 py-1 rounded-sm"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.accent}22, ${BRAND.amethyst}22)`,
                  border: `1px solid ${BRAND.accent}50`,
                }}
              >
                <span className="text-[9px] tracking-[0.1em] uppercase font-mono" style={{ color: BRAND.accent }}>Lv</span>
                <span className="font-mono text-sm font-bold leading-none" style={{ color: BRAND.text }}>{profile.level}</span>
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
              <UserPlus size={11} />
              <span className="hidden sm:inline">Sign Up</span>
              <span className="sm:hidden">Join</span>
            </Link>
          )}
        </div>
      </div>

      {/* Tab row — hidden on mobile (replaced by MobileNav) */}
      <div className="hidden sm:flex max-w-6xl mx-auto px-5 items-stretch gap-0.5 overflow-x-auto">
        {PRIMARY_TABS.map(tab => {
          const active = isTabActive(tab.href)
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="px-3 py-3 text-xs font-medium tracking-[0.1em] uppercase transition-colors relative whitespace-nowrap flex items-center gap-1.5"
              style={{ color: active ? BRAND.text : BRAND.textSubtle }}
            >
              <tab.icon size={12} />
              <span className="hidden sm:inline">{tab.label}</span>
              {active && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: BRAND.accent }} />
              )}
            </Link>
          )
        })}

        {/* Divider between primary and secondary tabs */}
        <div className="w-px my-2.5 mx-1 self-stretch" style={{ backgroundColor: BRAND.border }} />

        {SECONDARY_TABS.map(tab => {
          const active = isTabActive(tab.href)
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="px-3 py-3 text-xs font-medium tracking-[0.1em] uppercase transition-colors relative whitespace-nowrap flex items-center gap-1.5"
              style={{ color: active ? BRAND.text : `${BRAND.textSubtle}80` }}
            >
              <tab.icon size={12} />
              <span className="hidden sm:inline">{tab.label}</span>
              {active && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: BRAND.accent }} />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
