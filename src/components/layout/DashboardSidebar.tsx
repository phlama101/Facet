'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, BookOpen, Trophy, User,
  Zap, LogOut, ChevronRight, Flame
} from 'lucide-react'
import { cn, xpProgress, levelFromXp } from '@/lib/utils'

const NAV = [
  { icon: LayoutDashboard, label: 'Dashboard',   href: '/dashboard' },
  { icon: BookOpen,        label: 'Courses',      href: '/courses' },
  { icon: Trophy,          label: 'Leaderboard',  href: '/leaderboard' },
  { icon: User,            label: 'Profile',      href: '/profile' },
]

interface Props {
  user: { display_name: string | null; username: string; xp: number; level: number; streak: number; avatar_color: string }
}

export default function DashboardSidebar({ user }: Props) {
  const pathname = usePathname()
  const progress = xpProgress(user.xp)
  const xpInLevel = user.xp - (user.level - 1) * 500

  return (
    <aside className="hidden lg:flex flex-col w-60 shrink-0 bg-[#161b22] border-r border-white/5 h-screen sticky top-0">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2.5 font-black text-lg tracking-tight">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-xs">🌍</div>
          <span className="text-[#e6edf3]">Facet</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map(({ icon: Icon, label, href }) => {
          const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(href))
          return (
            <Link key={href} href={href} className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group',
              active
                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5'
            )}>
              <Icon className={cn('w-4 h-4 shrink-0', active ? 'text-cyan-400' : 'text-[#8b949e] group-hover:text-[#e6edf3]')} />
              {label}
              {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-cyan-400/60" />}
            </Link>
          )
        })}
      </nav>

      {/* User card */}
      <div className="border-t border-white/5 p-3">
        <div className="p-3 rounded-xl bg-[#1c2333]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-[#0d1117] shrink-0"
              style={{ background: user.avatar_color }}>
              {(user.display_name || user.username)[0].toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#e6edf3] truncate">{user.display_name || user.username}</p>
              <p className="text-xs text-[#8b949e]">Level {user.level}</p>
            </div>
            {user.streak > 0 && (
              <div className="ml-auto flex items-center gap-0.5 text-xs font-bold text-orange-400">
                <Flame className="w-3.5 h-3.5" />{user.streak}
              </div>
            )}
          </div>

          {/* XP bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-[#8b949e]">
              <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-cyan-400" />{user.xp} XP</span>
              <span>{xpInLevel}/500</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-700"
                style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <form action="/auth/signout" method="post" className="mt-1">
          <button type="submit" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 transition-all">
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </form>
      </div>
    </aside>
  )
}
