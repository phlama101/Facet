import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Zap, Flame, BookOpen, TrendingUp, Trophy } from 'lucide-react'
import { createAdminClient } from '@/lib/supabase/admin'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST } from '@/lessons/index'
import { levelFromXp, xpProgressPct, xpInLevel, xpNeededForLevel, levelTitle } from '@/lib/utils'
import { ACHIEVEMENTS, ACHIEVEMENT_GROUPS, RARITY_LABEL, type AchCtx } from '@/lib/achievements'
import FacetedAvatar from '@/components/brand/FacetedAvatar'
import FacetLogo from '@/components/brand/FacetLogo'
import type { Metadata } from 'next'
import type { Profile } from '@/types'

interface Props {
  params: Promise<{ username: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params
  return {
    title: `${username} — Facet`,
    description: `${username}'s earth science learning profile on Facet.`,
  }
}

export default async function PublicProfilePage({ params }: Props) {
  const { username } = await params
  const admin = createAdminClient()

  const { data: profileRow } = await admin
    .from('profiles')
    .select('id, username, display_name, avatar_color, xp, level, streak, longest_streak, created_at')
    .eq('username', username)
    .single()

  if (!profileRow) notFound()

  const profile = profileRow as Pick<Profile,
    'id' | 'username' | 'display_name' | 'avatar_color' | 'xp' | 'level' | 'streak' | 'longest_streak' | 'created_at'
  >

  const { data: progressRows } = await admin
    .from('user_lesson_progress' as never)
    .select('lesson_id')
    .eq('user_id', profile.id)
    .eq('completed', true)
  const completedIds: string[] = ((progressRows ?? []) as { lesson_id: string }[]).map(r => r.lesson_id)

  const xp      = profile.xp
  const level   = levelFromXp(xp)
  const pct     = xpProgressPct(xp)
  const xpThis  = xpInLevel(xp)
  const xpNext  = xpNeededForLevel(level)
  const title   = levelTitle(level)
  const total   = LESSON_LIST.length

  const displayName = profile.display_name ?? profile.username
  const initials    = displayName.slice(0, 2).toUpperCase()
  const joinDate    = new Date(profile.created_at)

  const ctx: AchCtx = {
    count: completedIds.length,
    total,
    streak: profile.streak,
    xp,
    level,
    ids: completedIds,
  }

  const achievements = ACHIEVEMENTS.map(a => ({ ...a, unlocked: a.check(ctx) }))
  const unlockedCount = achievements.filter(a => a.unlocked).length

  const rarityOrder: Record<string, number> = { legendary: 0, epic: 1, rare: 2, uncommon: 3, common: 4 }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text }}
    >
      {/* Nav bar */}
      <header
        className="sticky top-0 z-10 px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${BRAND.border}`, backgroundColor: `${BRAND.bg}f0`, backdropFilter: 'blur(8px)' }}
      >
        <Link href="/" className="flex items-center gap-2">
          <FacetLogo size={22} />
          <span className="text-sm font-semibold tracking-tight" style={{ color: BRAND.text }}>Facet</span>
        </Link>
        <Link
          href="/login"
          className="px-4 py-1.5 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase"
          style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
        >
          Sign in
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10 space-y-8">

        {/* Identity card */}
        <div
          className="p-6 rounded-sm flex items-center gap-5"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <FacetedAvatar initials={initials} size="lg" />
          <div className="flex-1 min-w-0">
            <div className="font-serif text-2xl leading-tight truncate" style={{ color: BRAND.text }}>
              {displayName}
            </div>
            <div className="text-xs mt-0.5 font-mono" style={{ color: BRAND.textSubtle }}>
              @{profile.username}
            </div>
            <div className="text-[11px] mt-2" style={{ color: BRAND.textDim }}>
              Level {level} · {title} · Joined {joinDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total XP',  value: xp.toLocaleString(),     icon: Zap,       accent: BRAND.gold   },
            { label: 'Lessons',   value: completedIds.length,      icon: BookOpen,  accent: BRAND.jade   },
            { label: 'Streak',    value: `${profile.streak}d`,     icon: Flame,     accent: BRAND.coral  },
            { label: 'Level',     value: level,                    icon: TrendingUp,accent: BRAND.accent  },
          ].map(({ label, value, icon: Icon, accent }) => (
            <div
              key={label}
              className="p-4 rounded-sm flex flex-col gap-1"
              style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
            >
              <div className="flex items-center gap-2">
                <Icon size={12} color={accent} />
                <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: BRAND.textSubtle }}>{label}</span>
              </div>
              <div className="font-serif text-2xl" style={{ color: accent }}>{value}</div>
            </div>
          ))}
        </div>

        {/* XP progress bar */}
        <div
          className="p-5 rounded-sm"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <div className="flex items-end justify-between mb-3">
            <span className="font-serif" style={{ fontSize: '22px', color: BRAND.accent }}>Lv {level} — {title}</span>
            <span className="text-[11px] font-mono" style={{ color: BRAND.textSubtle }}>
              {xpThis.toLocaleString()} / {xpNext.toLocaleString()} XP
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
            <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: BRAND.accent }} />
          </div>
        </div>

        {/* Achievements */}
        <div
          className="rounded-sm overflow-hidden"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <div
            className="px-5 py-3 flex items-center justify-between"
            style={{ borderBottom: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surfaceHi }}
          >
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>
              Achievements
            </div>
            <div className="flex items-center gap-1.5">
              <Trophy size={12} color={BRAND.gold} />
              <span className="text-[11px] font-mono" style={{ color: BRAND.gold }}>
                {unlockedCount} / {ACHIEVEMENTS.length}
              </span>
            </div>
          </div>

          {ACHIEVEMENT_GROUPS.map(group => {
            const groupAchs = achievements
              .filter(a => a.category === group.key)
              .sort((a, b) => (rarityOrder[a.rarity] ?? 9) - (rarityOrder[b.rarity] ?? 9))
            const unlockedInGroup = groupAchs.filter(a => a.unlocked)
            if (unlockedInGroup.length === 0) return null
            return (
              <div key={group.key}>
                <div
                  className="px-5 py-2 text-[9px] tracking-[0.25em] uppercase"
                  style={{ color: BRAND.textSubtle, borderBottom: `1px solid ${BRAND.border}80`, backgroundColor: `${BRAND.surfaceHi}80` }}
                >
                  {group.label}
                </div>
                <div className="divide-y" style={{ borderColor: BRAND.border }}>
                  {groupAchs.map(a => (
                    <div
                      key={a.id}
                      className="px-5 py-3 flex items-start gap-3"
                      style={{ opacity: a.unlocked ? 1 : 0.35 }}
                    >
                      <div
                        className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          backgroundColor: a.unlocked ? `${a.color}18` : BRAND.surfaceHi,
                          border: `1px solid ${a.unlocked ? `${a.color}40` : BRAND.border}`,
                        }}
                      >
                        <Zap size={14} color={a.unlocked ? a.color : BRAND.textSubtle} fill={a.unlocked ? a.color : 'none'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium" style={{ color: a.unlocked ? BRAND.text : BRAND.textSubtle }}>
                            {a.name}
                          </span>
                          <span
                            className="text-[9px] tracking-[0.15em] uppercase px-1.5 py-0.5 rounded-sm"
                            style={{
                              backgroundColor: a.unlocked ? `${a.color}18` : BRAND.surfaceHi,
                              color: a.unlocked ? a.color : BRAND.textSubtle,
                            }}
                          >
                            {RARITY_LABEL[a.rarity]}
                          </span>
                        </div>
                        <div className="text-[11px] mt-0.5" style={{ color: BRAND.textDim }}>
                          {a.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className="p-6 rounded-sm text-center"
          style={{ backgroundColor: `${BRAND.accent}08`, border: `1px solid ${BRAND.accent}25` }}
        >
          <div className="text-sm font-medium mb-1" style={{ color: BRAND.text }}>
            Start your own earth science journey
          </div>
          <div className="text-[11px] mb-4" style={{ color: BRAND.textDim }}>
            Free access to Chapter 1 of every learning path. No credit card required.
          </div>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            Join Facet
          </Link>
        </div>

      </main>
    </div>
  )
}
