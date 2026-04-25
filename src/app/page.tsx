'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, Star, Zap, Trophy, Users, BookOpen,
  ChevronRight, Check, Globe, Flame, Wind, Layers,
  Clock, BarChart3, Award, Play, Lock
} from 'lucide-react'
import { PLANS } from '@/lib/stripe'
import { MOCK_COURSES } from '@/lib/mock-data'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { cn, difficultyColor } from '@/lib/utils'

/* ─── Animation helpers ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

const DISCIPLINES = [
  { icon: '🌍', label: 'Geology',      desc: 'Rocks, minerals, Earth\'s crust',   color: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/20', glow: 'rgba(249,115,22,0.15)', href: '/courses?category=geology' },
  { icon: '🌊', label: 'Oceanography', desc: 'Oceans, currents, marine systems',   color: 'from-cyan-500/20 to-cyan-500/5',   border: 'border-cyan-500/20',   glow: 'rgba(6,182,212,0.15)',  href: '/courses?category=oceanography' },
  { icon: '⛅', label: 'Meteorology',  desc: 'Weather, atmosphere, storms',       color: 'from-blue-500/20 to-blue-500/5',   border: 'border-blue-500/20',   glow: 'rgba(59,130,246,0.15)', href: '/courses?category=meteorology' },
  { icon: '🌋', label: 'Volcanology',  desc: 'Magma, eruptions, igneous rocks',   color: 'from-red-500/20 to-red-500/5',    border: 'border-red-500/20',    glow: 'rgba(239,68,68,0.15)',  href: '/courses?category=volcanology' },
  { icon: '🦕', label: 'Paleontology', desc: 'Fossils, deep time, evolution',     color: 'from-amber-500/20 to-amber-500/5', border: 'border-amber-500/20',  glow: 'rgba(245,158,11,0.15)', href: '/courses?category=paleontology' },
  { icon: '🌡️', label: 'Climatology',  desc: 'Climate change, carbon cycles',     color: 'from-emerald-500/20 to-emerald-500/5', border: 'border-emerald-500/20', glow: 'rgba(16,185,129,0.15)', href: '/courses?category=climatology' },
]

const FEATURES = [
  { icon: <Zap className="w-5 h-5" />, color: 'text-cyan-400', bg: 'bg-cyan-400/10', title: 'Gamified Learning', desc: 'Earn XP, level up, unlock achievements and climb the leaderboard as you master new concepts.' },
  { icon: <BookOpen className="w-5 h-5" />, color: 'text-orange-400', bg: 'bg-orange-400/10', title: 'Expert-Crafted Content', desc: 'From curious beginner to PhD-level — each course is built on university-standard curricula.' },
  { icon: <Trophy className="w-5 h-5" />, color: 'text-amber-400', bg: 'bg-amber-400/10', title: 'Interactive Quizzes', desc: 'Adaptive quizzes with instant feedback, detailed explanations, and performance analytics.' },
  { icon: <BarChart3 className="w-5 h-5" />, color: 'text-emerald-400', bg: 'bg-emerald-400/10', title: 'Progress Tracking', desc: 'Visual dashboards show exactly where you are, what\'s next, and how far you\'ve come.' },
  { icon: <Users className="w-5 h-5" />, color: 'text-purple-400', bg: 'bg-purple-400/10', title: 'Global Community', desc: 'Learn alongside thousands of earth science enthusiasts. Compare progress on live leaderboards.' },
  { icon: <Globe className="w-5 h-5" />, color: 'text-blue-400', bg: 'bg-blue-400/10', title: 'Mobile-First Design', desc: 'Learn anywhere, anytime. Fully responsive — lessons and quizzes work perfectly on any device.' },
]

const STEPS = [
  { n: '01', icon: <BookOpen className="w-6 h-6" />, title: 'Choose Your Discipline', desc: 'Pick from 8 courses spanning all major earth science fields — from beginner geology to expert climatology.' },
  { n: '02', icon: <Play className="w-6 h-6" />, title: 'Complete Lessons', desc: 'Work through rich, illustrated lessons at your own pace. Each one earns you XP toward your next level.' },
  { n: '03', icon: <Zap className="w-6 h-6" />, title: 'Take Quizzes', desc: 'Test your knowledge with interactive quizzes. Get instant feedback and earn bonus XP for perfect scores.' },
  { n: '04', icon: <Trophy className="w-6 h-6" />, title: 'Level Up & Earn Badges', desc: 'Collect achievements, climb global leaderboards, and watch your expertise grow course by course.' },
]

const TESTIMONIALS = [
  { name: 'Priya Mehta', role: 'Geology Undergrad', avatar: '👩‍🔬', text: 'Facet made plate tectonics click in a way three textbooks never could. The gamification keeps me coming back every day.' },
  { name: 'James Okonkwo', role: 'High School Teacher', avatar: '👨‍🏫', text: 'I use Facet to supplement my earth science curriculum. The quizzes are excellent and the content is genuinely graduate-quality.' },
  { name: 'Sofia Chen', role: 'Environmental Consultant', avatar: '👩‍💼', text: 'The climate dynamics course is the best online resource I\'ve found. Dense material made digestible and actually fun.' },
]

const STATS = [
  { value: '8', label: 'Disciplines' },
  { value: '50+', label: 'Modules' },
  { value: '200+', label: 'Lessons' },
  { value: '12K+', label: 'Learners' },
]

/* ─── Component ────────────────────────────────────────────── */
export default function LandingPage() {
  const featuredCourses = MOCK_COURSES.slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0d1117] overflow-x-hidden">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg dot-grid overflow-hidden pt-20">
        {/* Animated orbs */}
        <div className="orb-1 absolute top-1/4 left-1/6 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[80px] pointer-events-none" />
        <div className="orb-2 absolute bottom-1/4 right-1/6 w-[350px] h-[350px] rounded-full bg-orange-500/6 blur-[80px] pointer-events-none" />
        <div className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/4 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-sm text-cyan-400 mb-8 font-medium"
          >
            <Zap className="w-3.5 h-3.5" />
            Gamified Earth Science Learning — Free to Start
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]"
          >
            <span className="text-[#e6edf3]">Explore Earth&apos;s</span>
            <br />
            <span className="text-gradient-hero">Hidden Layers</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From tectonic plates to ocean abysses — master Earth sciences through
            interactive lessons, gamified quizzes, and a global community of curious minds.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/register" className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] font-bold rounded-xl text-base transition-all duration-200 shadow-glow-cyan hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]">
              Start Learning Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/courses" className="flex items-center gap-2 px-8 py-4 glass border border-white/10 hover:border-white/20 text-[#e6edf3] font-semibold rounded-xl text-base transition-all duration-200">
              <BookOpen className="w-4 h-4 opacity-70" />
              Browse Courses
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-12 flex items-center justify-center gap-4 text-sm text-[#8b949e]"
          >
            <div className="flex -space-x-2">
              {['#06b6d4','#f97316','#10b981','#8b5cf6','#f59e0b'].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0d1117] flex items-center justify-center text-xs font-bold" style={{ background: c }}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span><strong className="text-[#e6edf3]">12,000+</strong> learners already exploring</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-medium text-[#e6edf3]">4.9</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.5 } }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8b949e] text-xs"
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-[#161b22]/60 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="space-y-1">
              <p className="text-3xl font-black text-gradient-cyan">{s.value}</p>
              <p className="text-sm text-[#8b949e]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Disciplines ───────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">What You&apos;ll Study</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e6edf3] mb-4">Six Earth Science Disciplines</h2>
          <p className="text-[#8b949e] max-w-xl mx-auto">Curated courses across every major branch of earth science — from the surface to the core.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {DISCIPLINES.map((d, i) => (
            <motion.div key={d.label} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.5}>
              <Link href={d.href} className={cn('group relative flex flex-col gap-3 p-6 rounded-2xl bg-gradient-to-br', d.color, 'border', d.border, 'card-hover overflow-hidden cursor-pointer')}>
                <div className="text-4xl">{d.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-[#e6edf3] group-hover:text-white">{d.label}</h3>
                  <p className="text-sm text-[#8b949e] mt-0.5">{d.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8b949e] group-hover:text-white group-hover:translate-x-1 transition-all mt-auto self-end" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured Courses ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#161b22]/40">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-end justify-between mb-14">
            <div>
              <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">Popular Right Now</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#e6edf3]">Featured Courses</h2>
            </div>
            <Link href="/courses" className="hidden md:flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCourses.map((course, i) => (
              <motion.div key={course.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}>
                <Link href={`/courses/${course.slug}`} className="group block h-full">
                  <div className={cn('h-full flex flex-col p-6 rounded-2xl bg-gradient-to-br', course.gradient, 'border border-white/6 card-hover')}>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{course.icon}</span>
                      <span className={cn('text-xs px-2.5 py-1 rounded-full border font-medium capitalize', difficultyColor(course.difficulty))}>
                        {course.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#e6edf3] group-hover:text-white mb-2 leading-snug">{course.title}</h3>
                    <p className="text-sm text-[#8b949e] flex-1 leading-relaxed">{course.description}</p>
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8b949e]">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.estimated_hours}h</span>
                      <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-cyan-400" /> {course.total_xp} XP</span>
                      <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {course.lesson_count} lessons</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
          <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Why Facet</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e6edf3] mb-4">Built for Deep Learning</h2>
          <p className="text-[#8b949e] max-w-xl mx-auto">Every feature is designed to make earth science not just understandable, but genuinely addictive.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.4}
              className="p-6 rounded-2xl bg-[#161b22] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center mb-4', f.bg, f.color)}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-[#e6edf3] mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#161b22]/40 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">Your Path</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#e6edf3]">How Facet Works</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {STEPS.map((step, i) => (
              <motion.div key={step.n} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400 z-10 relative">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-500 text-[#0d1117] text-xs font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#e6edf3] mb-2">{step.title}</h3>
                <p className="text-sm text-[#8b949e] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e6edf3] mb-4">Start Free, Go Deep</h2>
          <p className="text-[#8b949e] max-w-xl mx-auto">Try Facet at no cost. Upgrade when you&apos;re ready to unlock the full earth science curriculum.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(PLANS).map(([key, plan], i) => {
            const isPopular = key === 'pro'
            return (
              <motion.div key={key} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className={cn(
                  'relative flex flex-col p-7 rounded-2xl border transition-all',
                  isPopular
                    ? 'bg-gradient-to-b from-cyan-500/10 to-transparent border-cyan-500/30 shadow-glow-cyan'
                    : 'bg-[#161b22] border-white/6 hover:border-white/10'
                )}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-[#0d1117] text-xs font-bold rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-xs font-bold text-[#8b949e] uppercase tracking-widest mb-2">{plan.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#e6edf3]">${plan.price}</span>
                    {plan.price > 0 && <span className="text-[#8b949e] text-sm">/mo</span>}
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-[#8b949e]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.price === 0 ? '/register' : `/register?plan=${key}`}
                  className={cn(
                    'w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-200',
                    isPopular
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] shadow-glow-cyan'
                      : 'bg-white/5 hover:bg-white/10 text-[#e6edf3] border border-white/10'
                  )}
                >
                  {plan.price === 0 ? 'Get Started Free' : `Start ${plan.name}`}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#161b22]/30">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#e6edf3]">Loved by Earth Scientists</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="p-6 rounded-2xl bg-[#161b22] border border-white/5"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[#8b949e] text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.avatar}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#e6edf3]">{t.name}</p>
                    <p className="text-xs text-[#8b949e]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-32 px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-orange-500/10 blur-xl" />
          <p className="text-6xl mb-6">🌍</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e6edf3] mb-6">Begin Your Geological Journey</h2>
          <p className="text-[#8b949e] text-lg mb-10 max-w-xl mx-auto">
            Join 12,000+ learners discovering the science behind the planet beneath your feet. Free forever, upgrade when you&apos;re ready.
          </p>
          <Link href="/register" className="group inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] font-bold rounded-xl text-base transition-all duration-200 shadow-glow-cyan hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]">
            Create Free Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-5 text-xs text-[#8b949e]">No credit card required · Cancel anytime</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
