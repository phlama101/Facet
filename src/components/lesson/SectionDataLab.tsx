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

      {/* Premise */}
      <div
        className="mb-8 p-4 rounded-sm"
        style={{
          backgroundColor: `${BRAND.gold}0c`,
          border: `1px solid ${BRAND.gold}30`,
          borderLeft: `3px solid ${BRAND.gold}`,
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

      {/* Steps with connecting line */}
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-4"
        style={{ color: BRAND.gold }}
      >
        Worked Steps
      </div>

      <div className="relative">
        {/* Vertical connector line */}
        <div
          className="absolute left-[11px] top-6 bottom-6 w-px"
          style={{ backgroundColor: `${BRAND.gold}25` }}
        />

        <div className="space-y-5">
          {section.steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              {/* Step number badge */}
              <div
                className="w-6 h-6 rounded-sm flex items-center justify-center text-[11px] font-mono font-bold shrink-0 relative z-10 mt-0.5"
                style={{
                  backgroundColor: `${BRAND.gold}20`,
                  border: `1px solid ${BRAND.gold}40`,
                  color: BRAND.gold,
                }}
              >
                {i + 1}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm leading-relaxed mb-2" style={{ color: BRAND.text }}>
                  {step.instruction}
                </p>
                <div
                  className="p-3 rounded-sm font-mono text-xs leading-relaxed"
                  style={{
                    backgroundColor: BRAND.surface,
                    border: `1px solid ${BRAND.border}`,
                    color: BRAND.accent,
                  }}
                >
                  {step.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div
        className="mt-8 p-4 rounded-sm"
        style={{
          backgroundColor: BRAND.surface,
          border: `1px solid ${BRAND.border}`,
          borderLeft: `3px solid ${BRAND.gold}`,
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
