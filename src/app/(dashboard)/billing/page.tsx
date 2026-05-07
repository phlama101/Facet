import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  Check, Zap, CreditCard, BookOpen, FlaskConical,
  Microscope, ArrowRight, CheckCircle2, Shield,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { PLANS } from '@/lib/stripe'
import type { Profile } from '@/types'
import BillingUpgradeButton from '@/components/features/BillingUpgradeButton'
import ManageBillingButton from '@/components/features/ManageBillingButton'

export const metadata = { title: 'Billing' }

type Tier = 'free' | 'pro' | 'expert'

const TIER_META: Record<Tier, { label: string; color: string; icon: React.ElementType }> = {
  free:   { label: 'Explorer',      color: BRAND.jade,     icon: BookOpen },
  pro:    { label: 'Scholar',       color: BRAND.accent,   icon: FlaskConical },
  expert: { label: 'Earth Scientist', color: BRAND.amethyst, icon: Microscope },
}

export default async function BillingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login?next=/billing')

  const { data: profileRow } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  const profile: Profile = (profileRow as Profile | null) ?? {
    id: user.id,
    username: user.email?.split('@')[0] ?? 'explorer',
    display_name: null, bio: null, avatar_color: '#7AD7F0',
    xp: 0, level: 1, streak: 0, longest_streak: 0,
    last_active: new Date().toISOString(),
    subscription: 'free', created_at: new Date().toISOString(),
  }

  const tier = (profile.subscription ?? 'free') as Tier
  const { label: tierLabel, color: tierColor } = TIER_META[tier]
  const isPaid = tier !== 'free'
  const isExpert = tier === 'expert'
  const isPro = tier === 'pro'

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">

      {/* Header */}
      <div>
        <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
          Account
        </div>
        <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 5vw, 40px)' }}>Billing</h1>
      </div>

      {/* Current plan card */}
      <div
        className="rounded-sm overflow-hidden"
        style={{ border: `1px solid ${tierColor}40`, backgroundColor: BRAND.surface }}
      >
        {/* Card header */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ backgroundColor: `${tierColor}08`, borderBottom: `1px solid ${tierColor}25` }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${tierColor}18`, border: `1px solid ${tierColor}35` }}
            >
              {tier === 'free'   && <BookOpen   size={16} color={tierColor} />}
              {tier === 'pro'    && <FlaskConical size={16} color={tierColor} />}
              {tier === 'expert' && <Microscope  size={16} color={tierColor} />}
            </div>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase font-mono" style={{ color: tierColor }}>
                Current Plan
              </div>
              <div className="font-serif mt-0.5" style={{ fontSize: '20px' }}>
                {tierLabel}
                {isPaid && (
                  <span className="ml-2 text-xs font-sans font-normal" style={{ color: BRAND.textSubtle }}>
                    ${tier === 'pro' ? PLANS.pro.price : PLANS.expert.price}/mo
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isPaid && (
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] tracking-[0.15em] uppercase"
                style={{ backgroundColor: `${BRAND.jade}15`, border: `1px solid ${BRAND.jade}30`, color: BRAND.jade }}
              >
                <CheckCircle2 size={11} />
                Active
              </div>
            )}
            {!isPaid && (
              <div
                className="px-2.5 py-1 rounded-sm text-[10px] tracking-[0.15em] uppercase"
                style={{ backgroundColor: `${BRAND.jade}15`, border: `1px solid ${BRAND.jade}30`, color: BRAND.jade }}
              >
                Free Forever
              </div>
            )}
          </div>
        </div>

        {/* Features included */}
        <div className="px-6 py-4">
          <div className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: BRAND.textSubtle }}>
            Included in your plan
          </div>
          <ul className="grid sm:grid-cols-2 gap-2">
            {PLANS[tier].features.map(f => (
              <li key={f} className="flex items-start gap-2 text-[13px]">
                <Check size={12} className="mt-0.5 shrink-0" strokeWidth={2.5} style={{ color: tierColor }} />
                <span style={{ color: BRAND.textDim }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        {isPaid && (
          <div
            className="px-6 py-4 flex flex-wrap items-center gap-3"
            style={{ borderTop: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surfaceHi }}
          >
            <ManageBillingButton />
            <p className="text-[11px]" style={{ color: BRAND.textSubtle }}>
              Change payment method, view invoices, and cancel — all in the billing portal.
            </p>
          </div>
        )}

        {!isPaid && (
          <div
            className="px-6 py-4 flex items-center gap-2"
            style={{ borderTop: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surfaceHi }}
          >
            <Shield size={12} color={BRAND.textSubtle} />
            <p className="text-[11px]" style={{ color: BRAND.textSubtle }}>
              Free plan — no credit card required, no expiry.
            </p>
          </div>
        )}
      </div>

      {/* Upgrade section — only shown if not already on highest plan */}
      {!isExpert && (
        <div className="space-y-3">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
              {isPro ? 'Available upgrade' : 'Upgrade your plan'}
            </div>
            <p className="text-sm" style={{ color: BRAND.textDim }}>
              {isPro
                ? 'Unlock expert modules, early access to new courses, and priority support.'
                : 'Unlock the full course catalog and interactive labs — cancel anytime.'}
            </p>
          </div>

          <div className={`grid gap-4 ${isPro ? '' : 'sm:grid-cols-2'}`}>
            {/* Pro card — only shown for free users */}
            {!isPro && (
              <UpgradeCard
                tier="pro"
                label="Scholar"
                price={PLANS.pro.price}
                priceId={PLANS.pro.priceId ?? ''}
                color={BRAND.accent}
                icon={FlaskConical}
                features={PLANS.pro.features}
                badge="Most Popular"
              />
            )}

            {/* Expert card — shown for both free and pro users */}
            <UpgradeCard
              tier="expert"
              label="Earth Scientist"
              price={PLANS.expert.price}
              priceId={PLANS.expert.priceId ?? ''}
              color={BRAND.amethyst}
              icon={Microscope}
              features={PLANS.expert.features}
              badge={isPro ? 'Upgrade' : null}
            />
          </div>
        </div>
      )}

      {/* FAQ strip */}
      <div
        className="rounded-sm p-5 space-y-4"
        style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
      >
        <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>
          Billing FAQ
        </div>
        {[
          {
            q: 'Can I cancel at any time?',
            a: "Yes. Use the billing portal to cancel — you'll retain access until the end of your current billing period.",
          },
          {
            q: 'How do I change my payment method or view invoices?',
            a: isPaid
              ? 'Click "Manage Billing" above to open the Stripe billing portal where you can update your card, download invoices, and manage your subscription.'
              : 'Upgrade to a paid plan to access the billing portal for invoices and payment management.',
          },
          {
            q: "What's the difference between Scholar and Earth Scientist?",
            a: "Scholar unlocks the full course catalog — GEOL 101 complete, GEOL 201, and all future 100/200-level courses. Earth Scientist adds expert 300-level modules, early access to new courses before public launch, and priority support.",
          },
        ].map(({ q, a }) => (
          <div key={q}>
            <div className="text-[12px] font-medium mb-1" style={{ color: BRAND.text }}>{q}</div>
            <div className="text-[12px] leading-relaxed" style={{ color: BRAND.textDim }}>{a}</div>
          </div>
        ))}
        <div className="pt-2">
          <Link
            href="/pricing"
            className="text-[11px] tracking-wider uppercase flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: BRAND.accent }}
          >
            View full pricing page <ArrowRight size={11} />
          </Link>
        </div>
      </div>

    </div>
  )
}

function UpgradeCard({
  tier, label, price, priceId, color, icon: Icon, features, badge,
}: {
  tier: string
  label: string
  price: number
  priceId: string
  color: string
  icon: React.ElementType
  features: readonly string[]
  badge: string | null
}) {
  return (
    <div
      className="relative flex flex-col rounded-sm p-5"
      style={{ border: `1px solid ${color}45`, backgroundColor: BRAND.surface }}
    >
      {badge && (
        <div
          className="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-sm text-[9px] tracking-[0.2em] uppercase font-semibold"
          style={{ backgroundColor: color, color: BRAND.bg }}
        >
          {badge}
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
        >
          <Icon size={14} style={{ color }} />
        </div>
        <div>
          <div className="text-[10px] tracking-[0.2em] uppercase font-mono" style={{ color }}>
            {label}
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-serif" style={{ fontSize: '22px' }}>${price}</span>
            <span className="text-xs" style={{ color: BRAND.textSubtle }}>/mo</span>
          </div>
        </div>
      </div>

      <p className="text-[11px] mb-4 -mt-1" style={{ color: BRAND.textSubtle }}>Cancel anytime · No lock-in</p>

      <ul className="space-y-2 mb-5 flex-1">
        {features.map(f => (
          <li key={f} className="flex items-start gap-2 text-[12px]">
            <Check size={11} className="mt-0.5 shrink-0" strokeWidth={2.5} style={{ color }} />
            <span style={{ color: BRAND.textDim }}>{f}</span>
          </li>
        ))}
      </ul>

      <BillingUpgradeButton
        priceId={priceId}
        planKey={tier}
        label={`Upgrade to ${label}`}
        accent={color}
        solid
      />
    </div>
  )
}
