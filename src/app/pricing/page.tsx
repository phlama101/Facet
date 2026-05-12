'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Check, X, Zap, ArrowRight, Sparkles, BookOpen,
  Trophy, Download, GraduationCap, FlaskConical,
  Users, Microscope, Star,
} from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { PLANS } from '@/lib/stripe'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'

// ─── feature comparison ───────────────────────────────────────────────────────

const COMPARISON: { heading: string; rows: { label: string; free: boolean | string; pro: boolean | string; expert: boolean | string }[] }[] = [
  {
    heading: 'Content',
    rows: [
      { label: 'Earth Foundations — Ch. 1 & 2 (8 lessons)', free: true,  pro: true,  expert: true  },
      { label: 'Earth Foundations — all 5 chapters (26 lessons)', free: false, pro: true,  expert: true  },
      { label: 'Deep Time — Earth Through History',         free: false, pro: true,  expert: true  },
      { label: 'All future learning paths',                 free: false, pro: true,  expert: true  },
      { label: 'Expert & advanced paths',                   free: false, pro: false, expert: true  },
    ],
  },
  {
    heading: 'Learning System',
    rows: [
      { label: 'Quizzes, XP & level progression', free: true,  pro: true,  expert: true  },
      { label: 'Achievement badges',               free: true,  pro: true,  expert: true  },
      { label: 'Streak tracker & progress dashboard', free: true, pro: true, expert: true },
      { label: 'Interactive labs & simulations',   free: false, pro: true,  expert: true  },
      { label: 'Global leaderboards & rankings',   free: false, pro: true,  expert: true  },
    ],
  },
  {
    heading: 'Premium Access',
    rows: [
      { label: 'Early access to new courses', free: false, pro: false, expert: true },
      { label: 'Priority support',            free: false, pro: false, expert: true },
    ],
  },
]

const PLANS_UI = [
  {
    key: 'free',
    ...PLANS.free,
    accent: BRAND.jade,
    badge: null as string | null,
    cta: 'Start Free',
    ctaHref: '/register' as string | null,
  },
  {
    key: 'pro',
    ...PLANS.pro,
    accent: BRAND.accent,
    badge: 'Most Popular' as string | null,
    cta: 'Upgrade to Scholar',
    ctaHref: null as string | null,
    priceId: PLANS.pro.priceId ?? null,
  },
  {
    key: 'expert',
    ...PLANS.expert,
    accent: BRAND.amethyst,
    badge: null as string | null,
    cta: 'Upgrade to Earth Scientist',
    ctaHref: null as string | null,
    priceId: PLANS.expert.priceId ?? null,
  },
]

const PLAN_ICONS = [BookOpen, FlaskConical, Microscope]

const FAQ_ITEMS = [
  {
    q: 'What\'s included in the free plan?',
    a: 'The first two chapters of Earth Foundations are fully available at no cost — 8 lessons covering Earth\'s interior and minerals. It\'s a complete introduction to the foundations of geology, with no card required.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes. Paid plans are billed monthly with no lock-in. Cancel from your billing page at any time and you\'ll retain access until the end of your billing period.',
  },
  {
    q: 'What are interactive labs?',
    a: 'Interactive labs are rich simulations built into lessons — drag-and-drop mineral sorters, plate tectonic simulators, rock cycle flow diagrams, and more. They\'re available in all Scholar and Earth Scientist lessons.',
  },
  {
    q: 'Where does the content come from?',
    a: 'All lessons are sourced from federal agencies (USGS, NOAA, NASA) and peer-reviewed educational materials (OpenStax, AGI Glossary). Every claim is traceable to primary sources.',
  },
  {
    q: 'Will there be more paths beyond Earth Foundations and Deep Time?',
    a: 'Yes — we\'re building paths in Oceanography, Atmospheric Science, Volcanology, and Planetary Science. Scholar and Earth Scientist plans include all future paths as they launch.',
  },
  {
    q: 'What\'s the difference between Scholar and Earth Scientist?',
    a: 'Scholar unlocks the full path catalog — Earth Foundations, Deep Time, and all future paths as they launch. Earth Scientist adds expert advanced paths, early access before public launch, and priority support.',
  },
]

// ─── component ───────────────────────────────────────────────────────────────

export default function PricingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  async function startCheckout(priceId: string, planKey: string) {
    setLoading(planKey)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const json = await res.json() as { url?: string; error?: string }
      if (json.error === 'Unauthorized') {
        router.push(`/register?next=/pricing`)
        return
      }
      if (json.url) window.location.href = json.url
    } finally {
      setLoading(null)
    }
  }

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <FacetBackground />

      {/* Nav */}
      <nav className="relative z-10 border-b" style={{ borderColor: BRAND.border }}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <FacetLogo size={28} />
            <div>
              <div className="font-serif leading-none" style={{ fontSize: '20px' }}>Facet</div>
              <div className="text-[9px] tracking-[0.25em] uppercase mt-0.5" style={{ color: BRAND.textSubtle }}>
                Earth Sciences
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
              style={{ color: BRAND.textDim }}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
            >
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-5">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div className="text-center pt-20 pb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-6 text-[10px] tracking-[0.25em] uppercase"
            style={{ backgroundColor: `${BRAND.accent}12`, border: `1px solid ${BRAND.accent}30`, color: BRAND.accent }}
          >
            <Sparkles size={11} />
            Pricing
          </div>
          <h1
            className="font-serif mb-5"
            style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.05 }}
          >
            Learn earth science<br />at your own depth
          </h1>
          <p
            className="max-w-lg mx-auto leading-relaxed"
            style={{ fontSize: '16px', color: BRAND.textDim }}
          >
            Start free with Earth Foundations — two complete chapters, no card required. Unlock the
            full curriculum and interactive labs with a paid plan.
          </p>
        </div>

        {/* ── Plan cards ───────────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-4 pb-20">
          {PLANS_UI.map((plan, i) => {
            const Icon = PLAN_ICONS[i]
            return (
              <div
                key={plan.key}
                className="relative flex flex-col rounded-sm p-6"
                style={{
                  backgroundColor: BRAND.surface,
                  border: `1px solid ${plan.badge ? `${plan.accent}55` : BRAND.border}`,
                  boxShadow: plan.badge ? `0 0 40px ${plan.accent}10` : 'none',
                }}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-sm text-[9px] tracking-[0.25em] uppercase font-semibold whitespace-nowrap"
                    style={{ backgroundColor: plan.accent, color: BRAND.bg }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Icon + plan name */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${plan.accent}18`, border: `1px solid ${plan.accent}30` }}
                  >
                    <Icon size={16} style={{ color: plan.accent }} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: plan.accent }}>
                      {plan.name}
                    </div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-serif" style={{ fontSize: '32px', lineHeight: 1, color: BRAND.text }}>
                        {plan.price === 0 ? 'Free' : `$${plan.price}`}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-xs" style={{ color: BRAND.textSubtle }}>/mo</span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.price > 0 && (
                  <p className="text-xs mb-5 -mt-1" style={{ color: BRAND.textSubtle }}>
                    Cancel anytime · No lock-in
                  </p>
                )}

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px]">
                      <Check size={13} className="mt-0.5 shrink-0" style={{ color: plan.accent }} strokeWidth={2.5} />
                      <span style={{ color: BRAND.textDim }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.ctaHref ? (
                  <Link
                    href={plan.ctaHref}
                    className="w-full py-2.5 rounded-sm text-sm font-semibold text-center transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: `${plan.accent}18`,
                      border: `1px solid ${plan.accent}40`,
                      color: plan.accent,
                    }}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <button
                    onClick={() => plan.priceId && startCheckout(plan.priceId, plan.key)}
                    disabled={loading === plan.key || !plan.priceId}
                    className="w-full py-2.5 rounded-sm text-sm font-semibold transition-opacity hover:opacity-80 disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ backgroundColor: plan.accent, color: BRAND.bg }}
                  >
                    {loading === plan.key ? (
                      <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                    ) : (
                      <>
                        <Zap size={13} />
                        {plan.cta}
                        <ArrowRight size={13} />
                      </>
                    )}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Feature comparison ───────────────────────────────────────────── */}
        <div className="pb-20">
          <h2
            className="font-serif text-center mb-10"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
          >
            Compare plans
          </h2>

          <div
            className="rounded-sm overflow-hidden"
            style={{ border: `1px solid ${BRAND.border}` }}
          >
            {/* Column headers */}
            <div
              className="grid grid-cols-4 text-[10px] tracking-[0.2em] uppercase"
              style={{ backgroundColor: BRAND.surface, borderBottom: `1px solid ${BRAND.border}` }}
            >
              <div className="p-4" />
              {PLANS_UI.map(p => (
                <div
                  key={p.key}
                  className="p-4 text-center font-semibold"
                  style={{ color: p.accent }}
                >
                  {p.name}
                </div>
              ))}
            </div>

            {COMPARISON.map((group, gi) => (
              <div key={group.heading}>
                {/* Group heading */}
                <div
                  className="px-4 py-2 text-[10px] tracking-[0.25em] uppercase"
                  style={{
                    color: BRAND.textSubtle,
                    backgroundColor: BRAND.surfaceHi,
                    borderTop: gi === 0 ? 'none' : `1px solid ${BRAND.border}`,
                    borderBottom: `1px solid ${BRAND.border}`,
                  }}
                >
                  {group.heading}
                </div>

                {group.rows.map((row, ri) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-4 items-center"
                    style={{
                      borderBottom: ri < group.rows.length - 1 ? `1px solid ${BRAND.border}` : 'none',
                      backgroundColor: ri % 2 === 0 ? BRAND.bg : BRAND.surface,
                    }}
                  >
                    <div className="px-4 py-3 text-[13px]" style={{ color: BRAND.textDim }}>
                      {row.label}
                    </div>
                    {([row.free, row.pro, row.expert] as (boolean | string)[]).map((val, ci) => (
                      <div key={ci} className="py-3 flex justify-center">
                        {val === true ? (
                          <Check size={15} style={{ color: PLANS_UI[ci].accent }} strokeWidth={2.5} />
                        ) : val === false ? (
                          <X size={14} style={{ color: BRAND.borderHi }} />
                        ) : (
                          <span className="text-xs" style={{ color: PLANS_UI[ci].accent }}>{val}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Trust / sources ──────────────────────────────────────────────── */}
        <div className="pb-20 text-center">
          <div
            className="text-[10px] tracking-[0.25em] uppercase mb-6"
            style={{ color: BRAND.textSubtle }}
          >
            Content sourced from
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['USGS', 'NOAA', 'NASA', 'NSF', 'OpenStax', 'AGI', 'EarthScope', 'SI-GVP'].map(org => (
              <span
                key={org}
                className="px-3 py-1.5 rounded-sm text-[11px] tracking-[0.15em] uppercase font-mono"
                style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}`, color: BRAND.textDim }}
              >
                {org}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs" style={{ color: BRAND.textSubtle }}>
            Federal agencies and peer-reviewed materials only — public domain and CC-BY licensed.
          </p>
        </div>

        {/* ── Stats strip ──────────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20 rounded-sm overflow-hidden"
          style={{ border: `1px solid ${BRAND.border}` }}
        >
          {[
            { n: '50+', label: 'Structured lessons' },
            { n: '10', label: 'Trusted source orgs' },
            { n: '20+', label: 'Achievements to unlock' },
            { n: '250 XP', label: 'Per lesson completed' },
          ].map(s => (
            <div
              key={s.label}
              className="px-6 py-5 text-center"
              style={{ backgroundColor: BRAND.surface }}
            >
              <div className="font-serif mb-1" style={{ fontSize: '28px', color: BRAND.accent }}>{s.n}</div>
              <div className="text-[11px] tracking-[0.1em] uppercase" style={{ color: BRAND.textSubtle }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <div className="pb-24">
          <h2
            className="font-serif text-center mb-10"
            style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}
          >
            Frequently asked
          </h2>

          <div className="space-y-2 max-w-2xl mx-auto">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-sm overflow-hidden"
                style={{ border: `1px solid ${openFaq === i ? `${BRAND.accent}40` : BRAND.border}` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors hover:opacity-80"
                  style={{ backgroundColor: BRAND.surface }}
                >
                  <span className="text-sm font-medium" style={{ color: BRAND.text }}>{item.q}</span>
                  <span
                    className="shrink-0 w-5 h-5 flex items-center justify-center rounded-sm transition-transform"
                    style={{
                      backgroundColor: `${BRAND.accent}18`,
                      color: BRAND.accent,
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-5 pb-4 text-[13px] leading-relaxed"
                    style={{ backgroundColor: BRAND.surface, color: BRAND.textDim }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer CTA ───────────────────────────────────────────────────── */}
        <div
          className="mb-16 py-12 px-8 rounded-sm text-center"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <div className="flex justify-center mb-4">
            <Star size={20} style={{ color: BRAND.gold }} />
          </div>
          <h2 className="font-serif mb-3" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>
            Start learning for free
          </h2>
          <p className="max-w-md mx-auto text-sm leading-relaxed mb-6" style={{ color: BRAND.textDim }}>
            Earth Foundations — two complete chapters, completely free. No card required. Begin your first lesson in seconds.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            Create free account <ArrowRight size={14} />
          </Link>
          <p className="mt-3 text-xs" style={{ color: BRAND.textSubtle }}>
            No credit card required
          </p>
        </div>

      </div>
    </div>
  )
}
