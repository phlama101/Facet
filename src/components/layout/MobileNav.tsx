'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BookOpen, GitBranch, Trophy, Map } from 'lucide-react'
import { BRAND } from '@/lib/brand'

const TABS = [
  { href: '/dashboard',   label: 'Home',       icon: LayoutDashboard },
  { href: '/learn',       label: 'Learn',      icon: BookOpen },
  { href: '/skill-tree',  label: 'Skills',     icon: GitBranch },
  { href: '/leaderboard', label: 'Ranks',      icon: Trophy },
  { href: '/atlas',       label: 'Atlas',      icon: Map },
]

export default function MobileNav() {
  const pathname = usePathname()

  function isActive(href: string) {
    return href === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(href)
  }

  return (
    <nav
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex items-stretch"
      style={{
        backgroundColor: BRAND.surface,
        borderTop: `1px solid ${BRAND.border}`,
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      aria-label="Mobile navigation"
    >
      {TABS.map(tab => {
        const active = isActive(tab.href)
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors"
            style={{ color: active ? BRAND.accent : BRAND.textSubtle }}
            aria-current={active ? 'page' : undefined}
          >
            <tab.icon size={20} strokeWidth={active ? 2 : 1.5} />
            <span className="text-[9px] tracking-[0.08em] uppercase font-medium">{tab.label}</span>
            {active && (
              <span
                className="absolute top-0 w-6 h-[2px] rounded-full"
                style={{ backgroundColor: BRAND.accent }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
