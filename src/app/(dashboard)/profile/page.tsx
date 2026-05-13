import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Lock, Zap, ArrowRight, CheckCircle2 as CheckIcon, Share2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST, LEARNING_PATHS } from '@/lessons/index'
import { PLANS } from '@/lib/stripe'
import { levelFromXp, xpProgressPct, xpInLevel, xpNeededForLevel, levelTitle } from '@/lib/utils'
import { ACHIEVEMENTS, ACHIEVEMENT_GROUPS, RARITY_LABEL, type AchCtx } from '@/lib/achievements'
import FacetedAvatar from '@/components/brand/FacetedAvatar'
import FacetLogo from '@/components/brand/FacetLogo'
import ManageBillingButton from '@/components/features/ManageBillingButton'
import ProfileEditForm from '@/components/features/ProfileEditForm'
import type { Profile } from '@/types'

export const metadata = { title: 'Profile' }

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
  const publicProfileUrl = `/u/${profile.username}`

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
              <span className="hidden sm:inline">·</span>
              <Link
                href={publicProfileUrl}
                className="flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: BRAND.accent }}
              >
                <Share2 size={10} /> Public profile
              </Link>
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
          { label: 'Total XP',     value: xp.toLocaleString(),                  color: BRAND.accent },
          { label: 'Day Streak',   value: String(profile.streak),               color: BRAND.gold   },
          { label: 'Lessons Done', value: `${completedIds.length} / ${total}`,  color: BRAND.jade   },
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
        const tier        = profile.subscription as 'free' | 'pro' | 'expert'
        const planKey     = tier === 'expert' ? 'pro' : tier
        const plan        = PLANS[planKey]
        const isPaid      = tier !== 'free'
        const accentColor = isPaid ? BRAND.accent : BRAND.jade

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
                You&apos;re on the free plan — Earth Foundations Ch. 1 & 2 plus Chapter 1 of every other path
                are always free. Upgrade to Naturalist to unlock all current and future learning paths.
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
          className="flex items-end justify-between mb-2 pb-3 border-b"
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

        <div className="space-y-8">
          {ACHIEVEMENT_GROUPS.map(({ key, label }) => {
            const group = achievements.filter(a => a.category === key)
            const groupUnlocked = group.filter(a => a.unlocked).length
            return (
              <div key={key}>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: BRAND.textSubtle }}
                  >
                    {label}
                  </div>
                  <span className="text-[10px] font-mono" style={{ color: BRAND.textSubtle }}>
                    {groupUnlocked}/{group.length}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2.5">
                  {group.map(a => (
                    <div
                      key={a.id}
                      title={`${a.name}: ${a.desc}${a.unlocked ? ` (+${a.xpBonus} XP)` : ' — locked'}`}
                      className="p-3.5 rounded-sm text-center transition-opacity cursor-default"
                      style={{
                        backgroundColor: BRAND.surface,
                        border: `1px solid ${a.unlocked ? `${a.color}55` : BRAND.border}`,
                        opacity: a.unlocked ? 1 : 0.4,
                      }}
                    >
                      <div className="w-9 h-9 mx-auto mb-2">
                        {a.unlocked
                          ? <FacetLogo size={36} accent={a.color} />
                          : (
                            <div
                              className="w-9 h-9 rounded-sm flex items-center justify-center"
                              style={{ backgroundColor: BRAND.border, border: `1px solid ${BRAND.borderHi}` }}
                            >
                              <Lock size={13} color={BRAND.textSubtle} />
                            </div>
                          )
                        }
                      </div>
                      <div className="font-serif leading-tight" style={{ fontSize: '13px' }}>{a.name}</div>
                      <div
                        className="text-[9px] tracking-[0.08em] uppercase mt-1 leading-tight"
                        style={{ color: BRAND.textSubtle }}
                      >
                        {a.desc}
                      </div>
                      <div className="mt-2 flex items-center justify-center gap-1.5">
                        <span
                          className="text-[9px] tracking-[0.15em] uppercase font-mono"
                          style={{ color: a.unlocked ? a.color : BRAND.textSubtle }}
                        >
                          {RARITY_LABEL[a.rarity]}
                        </span>
                        {a.xpBonus > 0 && (
                          <span
                            className="text-[9px] font-mono"
                            style={{ color: a.unlocked ? BRAND.gold : BRAND.textSubtle }}
                          >
                            +{a.xpBonus}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
