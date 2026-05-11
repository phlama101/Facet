import { BRAND } from '@/lib/brand'

export default function LessonLoading() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: BRAND.bg }}
    >
      {/* Top bar skeleton */}
      <div
        className="sticky top-0 border-b"
        style={{ backgroundColor: BRAND.bg, borderColor: BRAND.border }}
      >
        <div className="max-w-3xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <div className="h-3 w-12 rounded-sm animate-pulse" style={{ backgroundColor: BRAND.border }} />
          <div className="flex-1 max-w-xs h-[3px] rounded-full animate-pulse" style={{ backgroundColor: BRAND.border }} />
          <div className="h-3 w-8 rounded-sm animate-pulse" style={{ backgroundColor: BRAND.border }} />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-3xl mx-auto px-5 py-10 space-y-8 animate-pulse">
        {/* Track label */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-40 rounded-sm" style={{ backgroundColor: BRAND.border }} />
        </div>
        {/* Title */}
        <div className="space-y-3">
          <div className="h-10 w-4/5 rounded-sm" style={{ backgroundColor: BRAND.border }} />
          <div className="h-10 w-2/3 rounded-sm" style={{ backgroundColor: BRAND.border }} />
        </div>
        {/* Body paragraphs */}
        <div className="space-y-3 pt-4">
          {[100, 95, 88, 92, 70].map((w, i) => (
            <div key={i} className="h-4 rounded-sm" style={{ width: `${w}%`, backgroundColor: BRAND.border }} />
          ))}
        </div>
        <div className="space-y-3">
          {[90, 85, 93, 60].map((w, i) => (
            <div key={i} className="h-4 rounded-sm" style={{ width: `${w}%`, backgroundColor: BRAND.border }} />
          ))}
        </div>
        {/* Key terms */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} className="p-3 rounded-sm space-y-2" style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}>
              <div className="h-3 w-3/4 rounded-sm" style={{ backgroundColor: BRAND.border }} />
              <div className="h-2.5 w-full rounded-sm" style={{ backgroundColor: BRAND.border }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
