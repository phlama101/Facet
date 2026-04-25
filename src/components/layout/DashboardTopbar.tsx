'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, LayoutDashboard, BookOpen, Trophy, User, LogOut, Zap, Flame } from 'lucide-react'
import { cn, xpProgress } from '@/lib/utils'

const NAV = [
  { icon: LayoutDashboard, label: 'Dashboard',  href: '/dashboard' },
  { icon: BookOpen,        label: 'Courses',     href: '/courses' },
  { icon: Trophy,          label: 'Leaderboard', href: '/leaderboard' },
  { icon: User,            label: 'Profile',     href: '/profile' },
]

interface Props {
  user: { display_name: string | null; username: string; xp: number; level: number; streak: number; avatar_color: string }
}

export default function DashboardTopbar({ user }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const progress = xpProgress(user.xp)

  const title = NAV.find(n => pathname.startsWith(n.href))?.label ?? 'Facet'

  return (
    <>
      <header className="lg:hidden h-14 flex items-center justify-between px-4 border-b border-white/5 bg-[#161b22] sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2 font-black text-lg">
          <span className="text-xl">🌍</span>
          <span className="text-[#e6edf3]">Facet</span>
        </Link>
        <div className="flex items-center gap-3">
          {user.streak > 0 && (
            <div className="flex items-center gap-1 text-xs font-bold text-orange-400">
              <Flame className="w-4 h-4" />{user.streak}
            </div>
          )}
          <div className="flex items-center gap-1 text-xs font-bold text-cyan-400">
            <Zap className="w-4 h-4" />{user.xp}
          </div>
          <button onClick={() => setOpen(o => !o)} className="p-2 text-[#8b949e]">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative z-50 w-64 bg-[#161b22] border-r border-white/5 flex flex-col">
            <div className="h-14 flex items-center px-5 border-b border-white/5">
              <span className="font-black text-lg text-[#e6edf3]">🌍 Facet</span>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-1">
              {NAV.map(({ icon: Icon, label, href }) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}
                  className={cn('flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    pathname.startsWith(href) ? 'bg-cyan-500/15 text-cyan-400' : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5'
                  )}>
                  <Icon className="w-4 h-4" />{label}
                </Link>
              ))}
            </nav>

            {/* User */}
            <div className="p-3 border-t border-white/5">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-[#0d1117]"
                  style={{ background: user.avatar_color }}>
                  {(user.display_name || user.username)[0].toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#e6edf3] truncate">{user.display_name || user.username}</p>
                  <p className="text-xs text-[#8b949e]">Level {user.level}</p>
                </div>
              </div>
              <form action="/auth/signout" method="post" className="mt-1">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5">
                  <LogOut className="w-4 h-4" />Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
