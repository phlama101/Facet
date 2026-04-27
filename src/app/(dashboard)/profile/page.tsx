import { redirect } from 'next/navigation'
import { Lock } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST } from '@/lessons/index'
import { levelFromXp, xpProgressPct, xpInLevel, XP_PER_LEVEL } from '@/lib/utils'
import FacetedAvatar from '@/components/brand/FacetedAvatar'
import FacetLogo from '@/components/brand/FacetLogo'
import type { Profile } from '@/types'

export const metadata = { title: 'Profile' }

const ACHIEVEMENTS = [
  { id: 'first-step',   name: 'First Facet',  desc: 'Complete your first lesson', threshold: (c: number) => c >= 1,               rarity: 'common' },
  { id: 'trio',         name: 'Three Edges',  desc: 'Complete 3 lessons',          threshold: (c: number) => c >= 3,               rarity: 'uncommon' },
  { id: 'scholar',      name: 'Faceted',      desc: 'Complete all lessons',        threshold: (c: number, t: number) => c >= t && t > 0, rarity: 'rare' },
  { id: 'streak-week',  name: 'Steady Hand',  desc: '7-day streak',                threshold: (_c: number, _t: number, s: number) => s >= 7, rarity: 'uncommon' },
  { id: 'xp-1k',        name: 'Brilliant',    desc: 'Earn 1,000 XP',               threshold: (_c: number, _t: number, _s: number, xp: number) => xp >= 1000, rarity: 'rare' },
  { id: 'level-5',      name: 'Polished',     desc: 'Reach level 5',               threshold: (_c: number, _t: number, _s: number, _xp: number, lv: number) => lv >= 5, rarity: 'legendary' },
] as const

const RARITY_COLOR: Record<string, string> = {
  legendary: BRAND.amethyst,
  rare:      BRAND.gold,
  uncommon:  BRAND.jade,
  common:    BRAND.accent,
}

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profileRow } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  const profile: Profile = (profileRow as Profile | null) ?? {
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

  const { data: progressRows } = await supabase
    .from('user_lesson_progress' as never)
    .select('lesson_id')
    .eq('user_id', user.id)
    .eq('completed', true)
  const completed: string[] = ((progressRows ?? []) as { lesson_id: string }[]).map(r => r.lesson_id)

  const xp       = profile.xp
  const level    = levelFromXp(xp)
  const pct      = xpProgressPct(xp)
  const xpThis   = xpInLevel(xp)
  const total    = LESSON_LIST.length
  const pctDone  = total > 0 ? (completed.length / total) * 100 : 0
  const joinDate = new Date(profile.created_at)
  const displayName = profile.display_name ?? profile.username
  const initials = displayName.slice(0, 2).toUpperCase()

  const achievements = ACHIEVEMENTS.map(a => ({
    ...a,
    unlocked: a.threshold(completed.length, total, profile.streak, xp, level),
  }))

  return (
    <div className="space-y-8 animate-fade-in">

      {/* Identity card */}
      <div
        className="grid md:grid-cols-3 gap-6 items-center p-6 md:p-8 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-center gap-5 md:col-span-2">
          <FacetedAvatar initials={initials} size="lg" />
          <div className="min-w-0">
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>
              Member
            </div>
            <h1
              className="font-serif truncate"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1 }}
            >
              {displayName}
            </h1>
            <div
              className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs"
              style={{ color: BRAND.textDim }}
            >
              <span className="font-mono">@{profile.username}</span>
              <span className="hidden sm:inline">·</span>
              <span>
                Joined{' '}
                {joinDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          <div
            className="font-serif leading-none"
            style={{ fontSize: 'clamp(56px, 9vw, 80px)', color: BRAND.accent }}
          >
            {level}
          </div>
          <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>
            Current Level
          </div>
          <div className="mt-2 font-mono text-xs" style={{ color: BRAND.textDim }}>
            {xpThis} / {XP_PER_LEVEL} XP
          </div>
          <div
            className="mt-2 h-[2px] w-full rounded-full overflow-hidden"
            style={{ backgroundColor: BRAND.border }}
          >
            <div
              className="h-full transition-all duration-1000"
              style={{ width: `${pct}%`, backgroundColor: BRAND.accent }}
            />
          </div>
        </div>
      </div>

      {/* Curriculum progress */}
      <div
        className="p-6 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif" style={{ fontSize: '24px' }}>Overall Curriculum</h3>
          <span className="font-mono text-xs" style={{ color: BRAND.textSubtle }}>
            {completed.length} / {total}
          </span>
        </div>
        <div
          className="h-[4px] rounded-full overflow-hidden"
          style={{ backgroundColor: BRAND.border }}
        >
          <div
            className="h-full transition-all duration-1000"
            style={{
              width: `${pctDone}%`,
              background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.amethyst})`,
            }}
          />
        </div>
      </div>

      {/* Achievements */}
      <div>
        <div
          className="flex items-end justify-between mb-5 pb-3 border-b"
          style={{ borderColor: BRAND.border }}
        >
          <h2 className="font-serif" style={{ fontSize: '30px' }}>Achievements</h2>
          <span className="font-mono text-xs" style={{ color: BRAND.textSubtle }}>
            {achievements.filter(a => a.unlocked).length} / {achievements.length}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {achievements.map(a => {
            const rc = RARITY_COLOR[a.rarity]
            return (
              <div
                key={a.id}
                className="p-4 rounded-sm text-center transition-opacity"
                style={{
                  backgroundColor: BRAND.surface,
                  border: `1px solid ${a.unlocked ? `${rc}60` : BRAND.border}`,
                  opacity: a.unlocked ? 1 : 0.5,
                }}
              >
                <div className="w-12 h-12 mx-auto mb-2">
                  {a.unlocked
                    ? <FacetLogo size={48} accent={rc} />
                    : (
                      <div
                        className="w-12 h-12 rounded-sm flex items-center justify-center"
                        style={{ backgroundColor: BRAND.border, border: `1px solid ${BRAND.borderHi}` }}
                      >
                        <Lock size={16} color={BRAND.textSubtle} />
                      </div>
                    )
                  }
                </div>
                <div className="font-serif" style={{ fontSize: '17px' }}>{a.name}</div>
                <div
                  className="text-[9px] tracking-[0.15em] uppercase mt-1"
                  style={{ color: BRAND.textSubtle }}
                >
                  {a.desc}
                </div>
                <div
                  className="mt-2 text-[9px] tracking-[0.25em] uppercase font-mono"
                  style={{ color: rc }}
                >
                  {a.rarity}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
