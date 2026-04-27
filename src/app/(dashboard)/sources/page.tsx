import { ExternalLink, Shield } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { INSTITUTIONS } from '@/lessons/index'

export const metadata = { title: 'Sources' }

export default function SourcesPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="border-b pb-4" style={{ borderColor: BRAND.border }}>
        <div className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: BRAND.accent }}>
          Academic Integrity
        </div>
        <h1
          className="font-serif"
          style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1 }}
        >
          Every lesson, <em style={{ color: BRAND.accent }}>sourced</em>.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
          Facet&apos;s curriculum is built entirely from peer-reviewed, government, and open-educational
          sources. No content is generated from guesswork or unverifiable material. Every lesson
          closes with a citation list you can inspect and trace.
        </p>
      </div>

      {/* Content principles */}
      <div
        className="p-5 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-start gap-3">
          <Shield size={18} color={BRAND.jade} className="flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-serif" style={{ fontSize: '20px' }}>Our content principles</div>
            <ul className="mt-2 text-xs space-y-1.5" style={{ color: BRAND.textDim }}>
              <li>· Every factual claim is traceable to a named, reputable source</li>
              <li>· Government (public-domain) and open-licensed (CC-BY) content preferred</li>
              <li>· Copyrighted material is paraphrased and properly attributed, never reproduced</li>
              <li>· Sources appear on the lesson completion screen, not buried in a footer</li>
              <li>· Lessons are reviewed against primary sources before publication</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Institutions */}
      <div>
        <h2 className="font-serif mb-5" style={{ fontSize: '30px' }}>
          Our source institutions
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {INSTITUTIONS.map(inst => (
            <div
              key={inst.abbr}
              className="p-5 rounded-sm relative overflow-hidden"
              style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
            >
              {/* Left colour stripe */}
              <div
                className="absolute top-0 left-0 w-[3px] h-full"
                style={{ backgroundColor: inst.color }}
              />
              <div className="pl-3">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-serif" style={{ fontSize: '22px' }}>{inst.abbr}</span>
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: BRAND.textSubtle }}
                  >
                    {inst.type}
                  </span>
                </div>
                <div className="text-sm mt-0.5" style={{ color: BRAND.text }}>{inst.name}</div>
                <div
                  className="font-mono text-[10px] mt-2 flex items-center gap-1"
                  style={{ color: BRAND.accent }}
                >
                  <ExternalLink size={9} /> {inst.url}
                </div>
                <p className="text-xs mt-3 leading-relaxed" style={{ color: BRAND.textDim }}>
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase block mb-1"
                    style={{ color: BRAND.textSubtle }}
                  >
                    Contributes
                  </span>
                  {inst.contributes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership */}
      <div
        className="p-6 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <h3 className="font-serif" style={{ fontSize: '24px' }}>Partnership inquiries</h3>
        <p className="text-sm mt-2 leading-relaxed" style={{ color: BRAND.textDim }}>
          Facet partners with educational institutions, government agencies, and research
          organizations to develop and review curriculum. If you represent an earth-science
          organization, reach out to{' '}
          <span style={{ color: BRAND.accent }}>partnerships@facet.academy</span>.
        </p>
      </div>
    </div>
  )
}
