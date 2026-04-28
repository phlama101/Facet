'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check, Zap, ArrowRight, Sparkles } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { PLANS } from '@/lib/stripe'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'

export default function PricingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)

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
      if (json.url) {
        window.location.href = json.url
      }
    } finally {
      setLoading(null)
    }
  }

  const plans = [
    {
      key: 'free',
      ...PLANS.free,
      accent: BRAND.jade,
      badge: null,
      cta: 'Start Free',
      ctaHref: '/register',
      priceId: null,
    },
    {
      key: 'pro',
      ...PLANS.pro,
      accent: BRAND.accent,
      badge: 'Most Popular',
      cta: 'Start 7-Day Trial',
      ctaHref: null,
      priceId: PLANS.pro.priceId ?? null,
    },
    {
      key: 'expert',
      ...PLANS.expert,
      accent: BRAND.amethyst,
      badge: null,
      cta: 'Start 7-Day Trial',
      ctaHref: null,
      priceId: PLANS.expert.priceId ?? null,
    },
  ]

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

      <section className="relative z-10 max-w-5xl mx-auto px-5 pt-20 pb-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-6 text-[10px] tracking-[0.25em] uppercase"
            style={{ backgroundColor: `${BRAND.accent}12`, border: `1px solid ${BRAND.accent}30`, color: BRAND.accent }}
          >
            <Sparkles size={11} />
            Pricing
          </div>
          <h1
            className="font-serif mb-4"
            style={{ fontSize: 'clamp(36px, 6vw, 60px)', lineHeight: 1.05 }}
          >
            Learn earth science<br />at your own depth
          </h1>
          <p className="max-w-xl mx-auto text-[15px] leading-relaxed" style={{ color: BRAND.textDim }}>
            Start free with three complete courses. Unlock the full curriculum — including advanced and expert content — with a paid plan. Try free for 7 days.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className="relative flex flex-col rounded-sm p-6"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${plan.badge ? `${plan.accent}50` : BRAND.border}`,
                boxShadow: plan.badge ? `0 0 32px ${plan.accent}12` : 'none',
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-sm text-[9px] tracking-[0.25em] uppercase font-semibold"
                  style={{ backgroundColor: plan.accent, color: BRAND.bg }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name + price */}
              <div className="mb-6">
                <div
                  className="text-[10px] tracking-[0.25em] uppercase mb-2"
                  style={{ color: plan.accent }}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-1.5">
                  <span
                    className="font-serif"
                    style={{ fontSize: '48px', lineHeight: 1, color: BRAND.text }}
                  >
                    {plan.price === 0 ? 'Free' : `$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="mb-2 text-sm" style={{ color: BRAND.textSubtle }}>/mo</span>
                  )}
                </div>
                {plan.price > 0 && (
                  <p className="text-xs mt-1.5" style={{ color: BRAND.textSubtle }}>
                    7-day free trial · Cancel anytime
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: plan.accent }}
                      strokeWidth={2.5}
                    />
                    <span style={{ color: BRAND.textDim }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.ctaHref ? (
                <Link
                  href={plan.ctaHref}
                  className="w-full py-3 rounded-sm text-sm font-semibold tracking-[0.05em] text-center transition-opacity hover:opacity-80"
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
                  className="w-full py-3 rounded-sm text-sm font-semibold tracking-[0.05em] transition-opacity hover:opacity-80 disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: plan.accent,
                    color: BRAND.bg,
                  }}
                >
                  {loading === plan.key ? (
                    <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                  ) : (
                    <>
                      <Zap size={14} />
                      {plan.cta}
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* FAQ / reassurance */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          {[
            { q: 'No card required to start', a: 'The free plan never expires. Enroll in three courses with no payment details needed.' },
            { q: 'Cancel any time', a: 'Paid plans are month-to-month. Cancel from your billing page — no questions, no lock-in.' },
            { q: 'Sources you can trust', a: 'All content is sourced from USGS, NOAA, NASA, and peer-reviewed educational materials.' },
          ].map(({ q, a }) => (
            <div key={q} className="p-5 rounded-sm" style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}>
              <div className="font-serif mb-2" style={{ fontSize: '17px' }}>{q}</div>
              <p className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
