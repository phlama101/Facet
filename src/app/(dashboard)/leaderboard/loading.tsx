import { BRAND } from '@/lib/brand'

function Bone({ w, h }: { w?: string; h?: string }) {
  return (
    <div
      className="rounded-sm animate-pulse"
      style={{ width: w ?? '100%', height: h ?? '14px', backgroundColor: BRAND.border }}
    />
  )
}

export default function LeaderboardLoading() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 animate-pulse">
        <div className="space-y-3">
          <Bone h="28px" w="200px" />
          <Bone h="12px" w="260px" />
        </div>
        <div
          className="p-3 rounded-sm text-center animate-pulse space-y-2"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <Bone h="10px" w="60px" />
          <div className="mx-auto"><Bone h="24px" w="40px" /></div>
        </div>
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-6 py-6">
        {[64, 80, 56].map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-3 animate-pulse">
            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: BRAND.border }} />
            <div className="w-20 rounded-sm" style={{ height: h, backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }} />
          </div>
        ))}
      </div>

      {/* Table rows */}
      <div className="space-y-2">
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 rounded-sm animate-pulse"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <Bone h="14px" w="24px" />
            <div className="w-9 h-9 rounded-full shrink-0" style={{ backgroundColor: BRAND.border }} />
            <div className="flex-1 space-y-2">
              <Bone h="12px" w="120px" />
              <Bone h="10px" w="80px" />
            </div>
            <Bone h="12px" w="60px" />
          </div>
        ))}
      </div>
    </div>
  )
}
