'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Zap, BookOpen, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Courses', href: '/courses' },
  { label: 'Disciplines', href: '/#disciplines' },
  { label: 'Pricing', href: '/#pricing' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'bg-[#0d1117]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.04)]' : 'bg-transparent'
    )}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-black text-xl tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-sm shadow-glow-cyan">
            🌍
          </div>
          <span className="text-[#e6edf3]">Facet</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === l.href
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5'
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-[#8b949e] hover:text-[#e6edf3] font-medium px-4 py-2 transition-colors">
            Sign In
          </Link>
          <Link href="/register" className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] text-sm font-bold rounded-lg transition-all shadow-glow-cyan">
            <Zap className="w-3.5 h-3.5" />
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 text-[#8b949e] hover:text-[#e6edf3]">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0d1117]/95 backdrop-blur-xl px-6 py-5 space-y-2">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium text-[#8b949e] hover:text-[#e6edf3] hover:bg-white/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
            <Link href="/login" onClick={() => setOpen(false)} className="block text-center py-2.5 text-sm font-medium text-[#8b949e] border border-white/10 rounded-lg hover:text-[#e6edf3] transition-colors">
              Sign In
            </Link>
            <Link href="/register" onClick={() => setOpen(false)} className="block text-center py-2.5 text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] rounded-lg transition-colors">
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
