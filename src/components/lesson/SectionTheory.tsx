import { BRAND } from '@/lib/brand'
import type { TheorySection } from '@/lessons/types'

function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    const parts = para.split(/\*\*(.*?)\*\*/g).map((chunk, j) =>
      j % 2 === 1
        ? <strong key={j} style={{ color: BRAND.gold, fontWeight: 600 }}>{chunk}</strong>
        : chunk
    )
    return (
      <p key={i} className="mb-4 leading-[1.8] text-[16px]" style={{ color: BRAND.text }}>
        {parts}
      </p>
    )
  })
}

export default function SectionTheory({ section }: { section: TheorySection }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-3"
        style={{ color: BRAND.amethyst }}
      >
        Theory
      </div>
      <h2
        className="font-serif mb-6"
        style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1.15 }}
      >
        {section.title}
      </h2>

      {renderBody(section.body)}

      {section.equations && section.equations.length > 0 && (
        <div className="mt-8">
          <div
            className="text-[10px] tracking-[0.25em] uppercase mb-4"
            style={{ color: BRAND.amethyst }}
          >
            Key Equations
          </div>
          <div className="space-y-2">
            {section.equations.map((eq, i) => (
              <div
                key={i}
                className="rounded-sm overflow-hidden"
                style={{
                  border: `1px solid ${BRAND.amethyst}30`,
                  borderLeft: `3px solid ${BRAND.amethyst}`,
                  backgroundColor: BRAND.surface,
                }}
              >
                <div className="px-4 pt-3 pb-2">
                  <div
                    className="text-[10px] tracking-[0.2em] uppercase mb-2"
                    style={{ color: BRAND.amethyst }}
                  >
                    {eq.label}
                  </div>
                  <div
                    className="font-mono text-sm leading-relaxed"
                    style={{ color: BRAND.text }}
                  >
                    {eq.tex}
                  </div>
                </div>
                {eq.note && (
                  <div
                    className="px-4 py-2 text-xs leading-relaxed"
                    style={{
                      color: BRAND.textDim,
                      borderTop: `1px solid ${BRAND.amethyst}20`,
                      backgroundColor: `${BRAND.amethyst}08`,
                    }}
                  >
                    {eq.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
