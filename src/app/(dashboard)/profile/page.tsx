import { redirect } from 'next/navigation'
import { Lock, Zap, ArrowRight, CheckCircle2 as CheckIcon } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST } from '@/lessons/index'
import { GEOL_101_MODULES, GEOL_201_MODULES } from '@/lessons/index'
import { PLANS } from '@/lib/stripe'
import { levelFromXp, xpProgressPct, xpInLevel, xpNeededForLevel, levelTitle } from '@/lib/utils'
import FacetedAvatar from '@/components/brand/FacetedAvatar'
import FacetLogo from '@/components/brand/FacetLogo'
import ManageBillingButton from '@/components/features/ManageBillingButton'
import ProfileEditForm from '@/components/features/ProfileEditForm'
import type { Profile } from '@/types'

export const metadata = { title: 'Profile' }

// ─── Achievement definitions ──────────────────────────────────────────────────

interface AchCtx {
  count: number        // completed lesson count
  total: number        // total lessons available
  streak: number       // current streak days
  xp: number
  level: number
  ids: string[]        // completed lesson IDs
}

const GEOL_101_IDS = GEOL_101_MODULES.flatMap(m => m.lessonIds)
const GEOL_201_IDS = GEOL_201_MODULES.flatMap(m => m.lessonIds)

const ACHIEVEMENTS: {
  id: string
  name: string
  desc: string
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  color: string
  xpBonus: number
  check: (ctx: AchCtx) => boolean
}[] = [
  // ── Lessons ──
  {
    id: 'first-step',
    name: 'First Facet',
    desc: 'Complete your first lesson',
    rarity: 'common', color: BRAND.accent, xpBonus: 50,
    check: c => c.count >= 1,
  },
  {
    id: 'three-edges',
    name: 'Three Edges',
    desc: 'Complete 3 lessons',
    rarity: 'common', color: BRAND.jade, xpBonus: 75,
    check: c => c.count >= 3,
  },
  {
    id: 'sedimentary-stack',
    name: 'Sedimentary Stack',
    desc: 'Complete 5 lessons',
    rarity: 'common', color: BRAND.gold, xpBonus: 100,
    check: c => c.count >= 5,
  },
  {
    id: 'decahedral',
    name: 'Decahedral',
    desc: 'Complete 10 lessons',
    rarity: 'uncommon', color: BRAND.gold, xpBonus: 200,
    check: c => c.count >= 10,
  },
  {
    id: 'field-ready',
    name: 'Field Ready',
    desc: 'Complete 20 lessons',
    rarity: 'uncommon', color: BRAND.coral, xpBonus: 300,
    check: c => c.count >= 20,
  },
  {
    id: 'deep-section',
    name: 'Deep Section',
    desc: 'Complete 35 lessons',
    rarity: 'rare', color: BRAND.coral, xpBonus: 500,
    check: c => c.count >= 35,
  },
  {
    id: 'obsidian-scholar',
    name: 'Obsidian Scholar',
    desc: 'Complete every available lesson',
    rarity: 'epic', color: BRAND.amethyst, xpBonus: 1000,
    check: c => c.count >= c.total && c.total > 0,
  },

  // ── XP milestones ──
  {
    id: 'xp-500',
    name: 'Spark',
    desc: 'Earn 500 XP',
    rarity: 'common', color: BRAND.accent, xpBonus: 50,
    check: c => c.xp >= 500,
  },
  {
    id: 'xp-1k',
    name: 'Brilliant',
    desc: 'Earn 1,000 XP',
    rarity: 'uncommon', color: BRAND.gold, xpBonus: 150,
    check: c => c.xp >= 1000,
  },
  {
    id: 'xp-2500',
    name: 'Crystalline',
    desc: 'Earn 2,500 XP',
    rarity: 'rare', color: BRAND.amethyst, xpBonus: 300,
    check: c => c.xp >= 2500,
  },
  {
    id: 'xp-5k',
    name: 'Igneous',
    desc: 'Earn 5,000 XP',
    rarity: 'epic', color: BRAND.ruby, xpBonus: 500,
    check: c => c.xp >= 5000,
  },

  // ── Streak ──
  {
    id: 'streak-3',
    name: 'Three Continuous',
    desc: 'Maintain a 3-day streak',
    rarity: 'common', color: BRAND.jade, xpBonus: 75,
    check: c => c.streak >= 3,
  },
  {
    id: 'streak-7',
    name: 'Steady Hand',
    desc: 'Maintain a 7-day streak',
    rarity: 'uncommon', color: BRAND.jade, xpBonus: 200,
    check: c => c.streak >= 7,
  },
  {
    id: 'streak-14',
    name: 'Fortnight Force',
    desc: 'Maintain a 14-day streak',
    rarity: 'rare', color: BRAND.gold, xpBonus: 400,
    check: c => c.streak >= 14,
  },
  {
    id: 'streak-30',
    name: 'Monthly Devotion',
    desc: 'Maintain a 30-day streak',
    rarity: 'epic', color: BRAND.amethyst, xpBonus: 750,
    check: c => c.streak >= 30,
  },

  // ── Level milestones ──
  {
    id: 'level-5',
    name: 'Polished',
    desc: 'Reach level 5',
    rarity: 'uncommon', color: BRAND.accent, xpBonus: 250,
    check: c => c.level >= 5,
  },
  {
    id: 'level-10',
    name: 'Hardened Core',
    desc: 'Reach level 10',
    rarity: 'rare', color: BRAND.coral, xpBonus: 500,
    check: c => c.level >= 10,
  },
  {
    id: 'level-15',
    name: 'Crystallised',
    desc: 'Reach level 15',
    rarity: 'epic', color: BRAND.amethyst, xpBonus: 1000,
    check: c => c.level >= 15,
  },
  {
    id: 'level-20',
    name: 'Masterwork',
    desc: 'Reach level 20',
    rarity: 'legendary', color: BRAND.gold, xpBonus: 2000,
    check: c => c.level >= 20,
  },

  // ── Course completions ──
  {
    id: 'geol-101-complete',
    name: 'GEOL 101 Graduate',
    desc: 'Complete all GEOL 101 lessons',
    rarity: 'rare', color: BRAND.jade, xpBonus: 750,
    check: c => GEOL_101_IDS.length > 0 && GEOL_101_IDS.every(id => c.ids.includes(id)),
  },
  {
    id: 'geol-201-complete',
    name: 'GEOL 201 Graduate',
    desc: 'Complete all GEOL 201 lessons',
    rarity: 'epic', color: BRAND.amethyst, xpBonus: 1500,
    check: c => GEOL_201_IDS.length > 0 && GEOL_201_IDS.every(id => c.ids.includes(id)),
  },
]

const RARITY_LABEL: Record<string, string> = {
  legendary: 'Legendary',
  epic:      'Epic',
  rare:      'Rare',
  uncommon:  'Uncommon',
  common:    'Common',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

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
  const completedIds: string[] = ((progressRows ?? []) as { lesson_id: string }[]).map(r => r.lesson_id)

  const xp      = profile.xp
  const level   = levelFromXp(xp)
  const pct     = xpProgressPct(xp)
  const xpThis  = xpInLevel(xp)
  const xpNext  = xpNeededForLevel(level)
  const title   = levelTitle(level)
  const total   = LESSON_LIST.length
  const pctDone = total > 0 ? (completedIds.length / total) * 100 : 0

  const joinDate    = new Date(profile.created_at)
  const displayName = profile.display_name ?? profile.username
  const initials    = displayName.slice(0, 2).toUpperCase()

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

  return (
    <div className="space-y-8 animate-fade-in">

      {/* ── Identity card ─────────────────────────────────────────────────── */}
      <div
        className="grid md:grid-cols-3 gap-6 items-center p-6 md:p-8 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-center gap-5 md:col-span-2">
          <FacetedAvatar initials={initials} size="lg" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>
                Member
              </div>
              <ProfileEditForm displayName={displayName} bio={profile.bio} />
            </div>
            <h1
              className="font-serif truncate"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1 }}
            >
              {displayName}
            </h1>
            {profile.bio && (
              <p className="text-xs mt-1 line-clamp-2" style={{ color: BRAND.textDim }}>
                {profile.bio}
              </p>
            )}
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
          <div
            className="text-[10px] tracking-[0.2em] uppercase mt-1"
            style={{ color: BRAND.accent, opacity: 0.7 }}
          >
            {title}
          </div>
          <div className="mt-2 font-mono text-xs" style={{ color: BRAND.textDim }}>
            {xpThis} / {xpNext} XP to level {level + 1}
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

      {/* ── Stats row ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Total XP',       value: xp.toLocaleString(), color: BRAND.accent },
          { label: 'Day Streak',     value: String(profile.streak), color: BRAND.gold },
          { label: 'Lessons Done',   value: `${completedIds.length} / ${total}`, color: BRAND.jade },
        ].map(s => (
          <div
            key={s.label}
            className="p-4 rounded-sm text-center"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <div className="font-serif mb-1" style={{ fontSize: '28px', color: s.color }}>{s.value}</div>
            <div className="text-[10px] tracking-[0.2em] uppercase" style={{ color: BRAND.textSubtle }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Subscription ──────────────────────────────────────────────────── */}
      {(() => {
        const tier       = profile.subscription as 'free' | 'pro' | 'expert'
        const plan       = PLANS[tier]
        const isPaid     = tier !== 'free'
        const accentColor = tier === 'expert' ? BRAND.amethyst : tier === 'pro' ? BRAND.accent : BRAND.jade

        return (
          <div
            className="p-6 rounded-sm"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
                  Plan
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif" style={{ fontSize: '24px' }}>{plan.name}</span>
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm font-semibold"
                    style={{ backgroundColor: `${accentColor}18`, color: accentColor, border: `1px solid ${accentColor}35` }}
                  >
                    {tier}
                  </span>
                </div>
                {isPaid && (
                  <ul className="mt-3 space-y-1.5">
                    {plan.features.slice(0, 3).map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs" style={{ color: BRAND.textDim }}>
                        <CheckIcon size={11} style={{ color: accentColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="shrink-0 flex flex-col items-end gap-2">
                {isPaid ? (
                  <ManageBillingButton />
                ) : (
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-semibold transition-opacity hover:opacity-80"
                    style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
                  >
                    <Zap size={12} /> Upgrade <ArrowRight size={12} />
                  </a>
                )}
              </div>
            </div>

            {!isPaid && (
              <div
                className="mt-4 pt-4 text-xs leading-relaxed"
                style={{ borderTop: `1px solid ${BRAND.border}`, color: BRAND.textDim }}
              >
                You&apos;re on the free plan — GEOL 101 (26 lessons) is fully included.
                Upgrade to unlock GEOL 201, advanced labs, leaderboards, and all future courses.
              </div>
            )}
          </div>
        )
      })()}

      {/* ── Overall curriculum progress ────────────────────────────────────── */}
      <div
        className="p-6 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif" style={{ fontSize: '24px' }}>Curriculum Progress</h3>
          <span className="font-mono text-xs" style={{ color: BRAND.textSubtle }}>
            {completedIds.length} / {total} lessons
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
        <div className="mt-2 text-xs" style={{ color: BRAND.textSubtle }}>
          {Math.round(pctDone)}% complete
        </div>
      </div>

      {/* ── Achievements ──────────────────────────────────────────────────── */}
      <div>
        <div
          className="flex items-end justify-between mb-5 pb-3 border-b"
          style={{ borderColor: BRAND.border }}
        >
          <div>
            <h2 className="font-serif" style={{ fontSize: '30px' }}>Achievements</h2>
            <p className="text-xs mt-1" style={{ color: BRAND.textSubtle }}>
              Earn XP bonuses by unlocking achievements
            </p>
          </div>
          <span className="font-mono text-xs shrink-0" style={{ color: BRAND.textSubtle }}>
            {unlockedCount} / {achievements.length}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {achievements.map(a => (
            <div
              key={a.id}
              className="p-4 rounded-sm text-center transition-opacity"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${a.unlocked ? `${a.color}55` : BRAND.border}`,
                opacity: a.unlocked ? 1 : 0.45,
              }}
            >
              <div className="w-10 h-10 mx-auto mb-2">
                {a.unlocked
                  ? <FacetLogo size={40} accent={a.color} />
                  : (
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: BRAND.border, border: `1px solid ${BRAND.borderHi}` }}
                    >
                      <Lock size={14} color={BRAND.textSubtle} />
                    </div>
                  )
                }
              </div>
              <div className="font-serif leading-tight" style={{ fontSize: '14px' }}>{a.name}</div>
              <div
                className="text-[9px] tracking-[0.1em] uppercase mt-1 leading-tight"
                style={{ color: BRAND.textSubtle }}
              >
                {a.desc}
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5">
                <span
                  className="text-[9px] tracking-[0.2em] uppercase font-mono"
                  style={{ color: a.unlocked ? a.color : BRAND.textSubtle }}
                >
                  {RARITY_LABEL[a.rarity]}
                </span>
                {a.xpBonus > 0 && (
                  <span
                    className="text-[9px] font-mono"
                    style={{ color: a.unlocked ? BRAND.gold : BRAND.textSubtle }}
                  >
                    +{a.xpBonus} XP
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
