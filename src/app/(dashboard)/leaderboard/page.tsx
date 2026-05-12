import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import type { LeaderboardEntry } from '@/types'
import { Trophy, Flame, Zap, Crown } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = { title: 'Leaderboard' }

export default async function LeaderboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: dbLeaderboard } = await supabase.from('leaderboard').select('*').limit(50)
  const board: LeaderboardEntry[] = (dbLeaderboard ?? []) as LeaderboardEntry[]

  const { data: profile } = user
    ? await supabase.from('profiles').select('xp, level').eq('id', user.id).single()
    : { data: null }

  const userRank = user && profile
    ? board.findIndex(e => e.id === user.id) + 1
    : null

  const top3 = board.slice(0, 3)
  const rest = board.slice(3)

  const PODIUM_ORDER = [1, 0, 2] // silver, gold, bronze visual layout
  const PODIUM_HEIGHT = ['h-24', 'h-32', 'h-20']
  const PODIUM_LABEL = ['🥈', '🥇', '🥉']
  const PODIUM_GLOW = ['shadow-[0_0_20px_rgba(148,163,184,0.2)]', 'shadow-[0_0_30px_rgba(245,158,11,0.3)]', 'shadow-[0_0_20px_rgba(180,83,9,0.2)]']

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-[#e6edf3]">Global Leaderboard</h1>
          <p className="text-[#8b949e] mt-1">Top earth science learners ranked by total XP</p>
        </div>
        {userRank && (
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
            <p className="text-xs text-[#8b949e]">Your Rank</p>
            <p className="text-2xl font-black text-cyan-400">#{userRank}</p>
          </div>
        )}
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-4 py-6">
        {PODIUM_ORDER.map((pos, i) => {
          const entry = top3[pos] as LeaderboardEntry | undefined
          if (!entry) return null
          return (
            <div key={entry.id} className="flex flex-col items-center gap-2 w-28">
              <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-lg font-black text-[#0d1117]"
                style={{ background: entry.avatar_color, borderColor: entry.avatar_color }}>
                {(entry.display_name || entry.username)[0].toUpperCase()}
              </div>
              <p className="text-xs font-bold text-[#e6edf3] text-center truncate w-full text-center">{entry.display_name || entry.username}</p>
              <p className="text-xs text-cyan-400 font-bold">{entry.xp.toLocaleString()} XP</p>
              <div className={cn('w-full rounded-t-xl flex items-center justify-center text-2xl', PODIUM_HEIGHT[i], PODIUM_GLOW[i],
                pos === 0 ? 'bg-amber-500/20 border border-amber-500/30' :
                pos === 1 ? 'bg-slate-400/10 border border-slate-400/20' :
                'bg-amber-700/15 border border-amber-700/20'
              )}>
                {PODIUM_LABEL[i]}
              </div>
            </div>
          )
        })}
      </div>

      {/* Rankings table */}
      <div className="rounded-2xl bg-[#161b22] border border-white/5 overflow-hidden">
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-4 px-5 py-3 border-b border-white/5 text-xs font-bold text-[#8b949e] uppercase tracking-wide">
          <span>Rank</span><span>Learner</span><span className="text-right">Streak</span><span className="text-right">XP</span>
        </div>

        <div className="divide-y divide-white/3">
          {rest.map((entry, i) => {
            const isMe = user && entry.id === user.id
            return (
              <div key={entry.id} className={cn('grid grid-cols-[auto_1fr_auto_auto] gap-x-4 px-5 py-3.5 items-center transition-colors',
                isMe ? 'bg-cyan-500/5 border-l-2 border-cyan-500' : 'hover:bg-white/2')}>
                <span className="text-sm font-bold text-[#8b949e] w-8 text-center">#{entry.rank}</span>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-[#0d1117] shrink-0"
                    style={{ background: entry.avatar_color }}>
                    {(entry.display_name || entry.username)[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className={cn('text-sm font-semibold truncate', isMe ? 'text-cyan-400' : 'text-[#e6edf3]')}>
                      {entry.display_name || entry.username}
                      {isMe && <span className="ml-1.5 text-[10px] text-cyan-400/70">(you)</span>}
                    </p>
                    <p className="text-xs text-[#8b949e]">Level {entry.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-orange-400 justify-end">
                  <Flame className="w-3.5 h-3.5" />{entry.streak}
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-cyan-400 justify-end">
                  <Zap className="w-3.5 h-3.5" />{entry.xp.toLocaleString()}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
