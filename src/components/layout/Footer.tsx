import Link from 'next/link'
import { Github, Twitter, Globe } from 'lucide-react'

const LINKS = {
  Disciplines: [
    { label: 'Geology', href: '/courses?category=geology' },
    { label: 'Oceanography', href: '/courses?category=oceanography' },
    { label: 'Meteorology', href: '/courses?category=meteorology' },
    { label: 'Volcanology', href: '/courses?category=volcanology' },
    { label: 'Paleontology', href: '/courses?category=paleontology' },
    { label: 'Climatology', href: '/courses?category=climatology' },
  ],
  Platform: [
    { label: 'Browse Courses', href: '/courses' },
    { label: 'Leaderboard', href: '/leaderboard' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Dashboard', href: '/dashboard' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0d1117] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-black text-xl tracking-tight mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-sm">
                🌍
              </div>
              <span className="text-[#e6edf3]">Facet</span>
            </Link>
            <p className="text-sm text-[#8b949e] leading-relaxed max-w-[200px]">
              Gamified earth science learning for curious minds at every level.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: '#' },
                { icon: <Github className="w-4 h-4" />, href: '#' },
                { icon: <Globe className="w-4 h-4" />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#8b949e] hover:text-[#e6edf3] transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-bold text-[#e6edf3] uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8b949e]">
          <p>© {new Date().getFullYear()} Facet. All rights reserved.</p>
          <p>Built for Earth scientists, by Earth scientists 🌋</p>
        </div>
      </div>
    </footer>
  )
}
