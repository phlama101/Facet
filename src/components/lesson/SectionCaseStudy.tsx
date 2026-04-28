import { MapPin, ExternalLink } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { CaseStudySection } from '@/lessons/types'

function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    const parts = para.split(/\*\*(.*?)\*\*/g).map((chunk, j) =>
      j % 2 === 1
        ? <strong key={j} style={{ color: BRAND.gold, fontWeight: 600 }}>{chunk}</strong>
        : chunk
    )
    return (
      <p key={i} className="mb-4 leading-[1.75] text-[15px]" style={{ color: BRAND.text }}>
        {parts}
      </p>
    )
  })
}

export default function SectionCaseStudy({ section }: { section: CaseStudySection }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-3"
        style={{ color: BRAND.jade }}
      >
        Case Study
      </div>
      <h2
        className="font-serif mb-4"
        style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1.15 }}
      >
        {section.title}
      </h2>

      {/* Location badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-7"
        style={{
          backgroundColor: `${BRAND.jade}12`,
          border: `1px solid ${BRAND.jade}35`,
        }}
      >
        <MapPin size={12} color={BRAND.jade} strokeWidth={2} />
        <span className="text-xs tracking-[0.08em]" style={{ color: BRAND.jade }}>
          {section.location}
        </span>
      </div>

      {renderBody(section.body)}

      {/* Findings */}
      <div className="mt-8">
        <div
          className="text-[10px] tracking-[0.25em] uppercase mb-3"
          style={{ color: BRAND.jade }}
        >
          Key Findings
        </div>
        <div className="space-y-2">
          {section.findings.map((f, i) => (
            <div
              key={i}
              className="rounded-sm overflow-hidden"
              style={{
                border: `1px solid ${BRAND.border}`,
                borderLeft: `3px solid ${BRAND.jade}`,
                backgroundColor: BRAND.surface,
              }}
            >
              <div className="px-4 pt-3 pb-1">
                <div
                  className="text-[11px] font-semibold tracking-[0.05em] uppercase mb-1.5"
                  style={{ color: BRAND.jade }}
                >
                  {f.label}
                </div>
              </div>
              <div
                className="px-4 pb-3 text-sm leading-relaxed"
                style={{ color: BRAND.textDim }}
              >
                {f.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Citation */}
      <div
        className="mt-6 p-4 rounded-sm"
        style={{
          backgroundColor: BRAND.surface,
          border: `1px solid ${BRAND.border}`,
        }}
      >
        <div
          className="text-[10px] tracking-[0.2em] uppercase mb-1.5 flex items-center gap-1.5"
          style={{ color: BRAND.textSubtle }}
        >
          <ExternalLink size={9} />
          Primary Source
        </div>
        <div className="text-xs leading-relaxed" style={{ color: BRAND.textDim }}>
          {section.citation}
        </div>
        {section.doi && (
          <div
            className="text-[10px] font-mono mt-2"
            style={{ color: BRAND.accent }}
          >
            doi: {section.doi}
          </div>
        )}
      </div>
    </div>
  )
}
