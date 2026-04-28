import { BRAND } from '@/lib/brand'
import type { DataLabSection } from '@/lessons/types'

function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    const parts = para.split(/\*\*(.*?)\*\*/g).map((chunk, j) =>
      j % 2 === 1
        ? <strong key={j} style={{ color: BRAND.gold, fontWeight: 600 }}>{chunk}</strong>
        : chunk
    )
    return (
      <p key={i} className="mb-3 leading-[1.75] text-[15px]" style={{ color: BRAND.text }}>
        {parts}
      </p>
    )
  })
}

export default function SectionDataLab({ section }: { section: DataLabSection }) {
  return (
    <div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-3"
        style={{ color: BRAND.gold }}
      >
        Data Lab
      </div>
      <h2
        className="font-serif mb-6"
        style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', lineHeight: 1.15 }}
      >
        {section.title}
      </h2>

      <div
        className="mb-8 p-4 rounded-sm"
        style={{
          backgroundColor: `${BRAND.gold}0d`,
          border: `1px solid ${BRAND.gold}30`,
        }}
      >
        <div
          className="text-[10px] tracking-[0.25em] uppercase mb-2"
          style={{ color: BRAND.gold }}
        >
          Premise
        </div>
        {renderBody(section.premise)}
      </div>

      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-4"
        style={{ color: BRAND.gold }}
      >
        Worked Steps
      </div>
      <div className="space-y-5">
        {section.steps.map((step, i) => (
          <div key={i}>
            <div className="flex gap-3 mb-2">
              <div
                className="w-6 h-6 rounded-sm shrink-0 flex items-center justify-center text-xs font-mono font-bold"
                style={{
                  backgroundColor: `${BRAND.gold}20`,
                  color: BRAND.gold,
                }}
              >
                {i + 1}
              </div>
              <p
                className="text-sm leading-relaxed pt-0.5"
                style={{ color: BRAND.text }}
              >
                {step.instruction}
              </p>
            </div>
            <div
              className="ml-9 p-3 rounded-sm font-mono text-xs leading-relaxed"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${BRAND.border}`,
                color: BRAND.accent,
              }}
            >
              {step.result}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-8 p-4 rounded-sm"
        style={{
          backgroundColor: BRAND.surface,
          border: `1px solid ${BRAND.border}`,
        }}
      >
        <div
          className="text-[10px] tracking-[0.25em] uppercase mb-2"
          style={{ color: BRAND.gold }}
        >
          Conclusion
        </div>
        {renderBody(section.conclusion)}
      </div>
    </div>
  )
}
