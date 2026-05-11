import { BRAND } from '@/lib/brand'

function SkeletonCard() {
  return (
    <div
      className="p-5 rounded-sm flex gap-4 animate-pulse"
      style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
    >
      <div className="shrink-0 w-7 h-7 rounded-sm" style={{ backgroundColor: BRAND.border }} />
      <div className="flex-1 space-y-3">
        <div className="flex justify-between">
          <div className="h-2.5 w-16 rounded-sm" style={{ backgroundColor: BRAND.border }} />
          <div className="h-2.5 w-12 rounded-sm" style={{ backgroundColor: BRAND.border }} />
        </div>
        <div className="h-5 w-3/4 rounded-sm" style={{ backgroundColor: BRAND.border }} />
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded-sm" style={{ backgroundColor: BRAND.border }} />
          <div className="h-2 w-2/3 rounded-sm" style={{ backgroundColor: BRAND.border }} />
        </div>
        <div className="flex gap-4 pt-1">
          <div className="h-2 w-10 rounded-sm" style={{ backgroundColor: BRAND.border }} />
          <div className="h-2 w-14 rounded-sm" style={{ backgroundColor: BRAND.border }} />
        </div>
      </div>
    </div>
  )
}

function SkeletonModule() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 pb-2" style={{ borderBottom: `1px solid ${BRAND.border}` }}>
        <div className="w-7 h-7 rounded-sm animate-pulse" style={{ backgroundColor: BRAND.border }} />
        <div className="h-2.5 w-40 rounded-sm animate-pulse" style={{ backgroundColor: BRAND.border }} />
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}

export default function LearnLoading() {
  return (
    <div className="space-y-8">
      {/* Header skeleton */}
      <div className="border-b pb-4 space-y-3 animate-pulse" style={{ borderColor: BRAND.border }}>
        <div className="h-2.5 w-24 rounded-sm" style={{ backgroundColor: BRAND.border }} />
        <div className="h-10 w-3/4 rounded-sm" style={{ backgroundColor: BRAND.border }} />
      </div>

      {/* Search skeleton */}
      <div className="h-10 rounded-sm animate-pulse" style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }} />

      {/* Track filter skeleton */}
      <div className="flex gap-2 animate-pulse">
        {[80, 96, 112, 88, 100, 108, 92].map((w, i) => (
          <div key={i} className="h-8 rounded-sm shrink-0" style={{ width: w, backgroundColor: BRAND.border }} />
        ))}
      </div>

      {/* Course section skeleton */}
      <div className="space-y-10">
        <div className="space-y-2 animate-pulse">
          <div className="h-3 w-20 rounded-sm" style={{ backgroundColor: BRAND.border }} />
          <div className="h-7 w-56 rounded-sm" style={{ backgroundColor: BRAND.border }} />
          <div className="h-2 w-72 rounded-sm" style={{ backgroundColor: BRAND.border }} />
        </div>
        <SkeletonModule />
        <SkeletonModule />
      </div>
    </div>
  )
}
