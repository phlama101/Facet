import { BRAND } from '@/lib/brand'
import type { IntroSection } from '@/lessons/types'

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

export default function SectionIntro({ section }: { section: IntroSection }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-3"
        style={{ color: BRAND.textSubtle }}
      >
        Introduction
      </div>
      <h2
        className="font-serif mb-6"
        style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1.15 }}
      >
        {section.title}
      </h2>

      {renderBody(section.body)}

      {section.keyTerms && (
        <div
          className="mt-8 p-5 rounded-sm"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <div
            className="text-[10px] tracking-[0.25em] uppercase mb-3"
            style={{ color: BRAND.accent }}
          >
            Key Terms
          </div>
          <div className="space-y-3">
            {section.keyTerms.map((kt, i) => (
              <div key={i}>
                <div
                  className="font-serif"
                  style={{ fontSize: '18px', color: BRAND.gold }}
                >
                  {kt.term}
                </div>
                <div className="text-sm mt-0.5" style={{ color: BRAND.textDim }}>
                  {kt.def}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
