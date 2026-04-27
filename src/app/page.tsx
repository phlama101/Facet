import Link from 'next/link'
import { ArrowRight, Check, Zap, Shield, ExternalLink } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST, TRACKS, INSTITUTIONS } from '@/lessons/index'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'

export const metadata = {
  title: 'Facet — Every facet of earth science',
}

export default function LandingPage() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <FacetBackground />

      {/* Nav */}
      <nav
        className="relative z-10 border-b"
        style={{ borderColor: BRAND.border }}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FacetLogo size={30} />
            <div>
              <div className="font-serif leading-none" style={{ fontSize: '22px' }}>Facet</div>
              <div className="text-[9px] tracking-[0.25em] uppercase mt-0.5" style={{ color: BRAND.textSubtle }}>
                Earth Sciences
              </div>
            </div>
          </div>
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

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-20 md:py-32">
        <div className="max-w-3xl">
          <div
            className="text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ color: BRAND.accent }}
          >
            Introducing Facet
          </div>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
          >
            Every{' '}
            <em style={{ color: BRAND.accent }}>facet</em>
            {' '}of earth science
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed"
            style={{ color: BRAND.textDim, fontSize: '17px' }}
          >
            The specialist learning platform for geology, oceanography, meteorology,
            volcanology, climate science, and planetary science — from first principles
            to expert depth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/learn"
              className="px-6 py-3 rounded-sm flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase transition-all hover:scale-[1.02]"
              style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
            >
              Browse Lessons <ArrowRight size={13} />
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-colors"
              style={{ border: `1px solid ${BRAND.borderHi}`, color: BRAND.text }}
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

      {/* Six tracks */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 pb-20">
        <div
          className="text-[10px] tracking-[0.25em] uppercase mb-2"
          style={{ color: BRAND.textSubtle }}
        >
          Six disciplines
        </div>
        <h2 className="font-serif mb-8" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          Structured by track
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {TRACKS.map(t => (
            <Link
              key={t.id}
              href="/learn"
              className="p-5 rounded-sm relative overflow-hidden group transition-all hover:-translate-y-[2px]"
              style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 blur-3xl transition-opacity pointer-events-none"
                style={{ backgroundColor: t.color }}
              />
              <div
                className="w-9 h-9 rounded-sm flex items-center justify-center mb-3"
                style={{ backgroundColor: `${t.color}20`, border: `1px solid ${t.color}60` }}
              >
                <t.icon size={16} color={t.color} />
              </div>
              <div className="font-serif" style={{ fontSize: '20px' }}>{t.name}</div>
              <div
                className="text-[10px] tracking-[0.15em] uppercase mt-1"
                style={{ color: BRAND.textSubtle }}
              >
                {LESSON_LIST.filter(l => l.track === t.id).length} lessons
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature list */}
      <section
        className="relative z-10 border-t border-b"
        style={{ borderColor: BRAND.border, backgroundColor: BRAND.surface }}
      >
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-3 gap-10">
          {[
            { accent: BRAND.accent,   title: 'Primary sources only', body: 'Every factual claim traces to USGS, NOAA, NASA, or one of our ten partner institutions. No content without a citation.' },
            { accent: BRAND.gold,     title: 'Earn XP as you learn', body: 'Complete lessons and quizzes to earn experience points. Level up, build streaks, and track progress across every track.' },
            { accent: BRAND.amethyst, title: 'Beginner to expert', body: 'From first-principles introductions to graduate-level depth. Structured lessons unlock your ability to think like a geoscientist.' },
          ].map((f, i) => (
            <div key={i}>
              <div
                className="text-[10px] tracking-[0.25em] uppercase mb-2"
                style={{ color: f.accent }}
              >
                {['Integrity', 'Gamification', 'Depth'][i]}
              </div>
              <h3 className="font-serif mb-2" style={{ fontSize: '24px' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.textDim }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic sources */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-20">
        <div className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: BRAND.accent }}>
          Academic integrity
        </div>
        <h2 className="font-serif mb-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
          Every lesson, <em style={{ color: BRAND.accent }}>sourced</em>.
        </h2>
        <p className="text-sm mb-8 max-w-xl leading-relaxed" style={{ color: BRAND.textDim }}>
          Curriculum built from ten peer-reviewed, government, and open-educational institutions.
          No guesswork. Every lesson closes with full citations.
        </p>
        <div className="grid md:grid-cols-2 gap-2">
          {INSTITUTIONS.slice(0, 6).map(inst => (
            <div
              key={inst.abbr}
              className="flex items-center gap-3 px-4 py-3 rounded-sm"
              style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
            >
              <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: inst.color }} />
              <div className="min-w-0">
                <span className="font-serif text-sm">{inst.abbr}</span>
                <span className="text-xs ml-2" style={{ color: BRAND.textSubtle }}>{inst.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/sources"
            className="text-xs tracking-wider uppercase flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: BRAND.accent }}
          >
            View all institutions <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative z-10 border-t"
        style={{ borderColor: BRAND.border }}
      >
        <div className="max-w-6xl mx-auto px-5 py-20 text-center">
          <div className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: BRAND.accent }}>
            Free to start
          </div>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1 }}
          >
            Begin your study today.
          </h2>
          <p className="mt-4 text-sm" style={{ color: BRAND.textDim }}>
            No credit card. No limits on free lessons.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/register"
              className="px-8 py-3 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase transition-all hover:scale-[1.02]"
              style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
            >
              Create Free Account
            </Link>
            <Link
              href="/learn"
              className="px-8 py-3 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase"
              style={{ border: `1px solid ${BRAND.borderHi}`, color: BRAND.text }}
            >
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 border-t"
        style={{ borderColor: BRAND.border }}
      >
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs" style={{ color: BRAND.textSubtle }}>
            <FacetLogo size={14} />
            <span className="font-mono tracking-wider">facet.academy · Every facet of earth science</span>
          </div>
          <div
            className="flex gap-5 text-[10px] tracking-[0.2em] uppercase"
            style={{ color: BRAND.textSubtle }}
          >
            <Link href="/sources">Sources</Link>
            <Link href="/learn">Curriculum</Link>
            <Link href="/register">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
