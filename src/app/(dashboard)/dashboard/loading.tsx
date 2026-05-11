import { BRAND } from '@/lib/brand'

function SkeletonBlock({ w, h }: { w?: string; h?: string }) {
  return (
    <div
      className="rounded-sm animate-pulse"
      style={{ width: w ?? '100%', height: h ?? '16px', backgroundColor: BRAND.border }}
    />
  )
}

export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stat cards row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className="p-4 rounded-sm animate-pulse space-y-3"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <SkeletonBlock h="10px" w="60px" />
            <SkeletonBlock h="28px" w="80px" />
            <SkeletonBlock h="10px" w="100px" />
          </div>
        ))}
      </div>

      {/* Main content area */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="md:col-span-2 space-y-6">
          <div
            className="p-6 rounded-sm animate-pulse space-y-4"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <SkeletonBlock h="12px" w="80px" />
            <SkeletonBlock h="24px" w="200px" />
            <div className="space-y-3">
              {[0, 1, 2].map(i => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-sm shrink-0" style={{ backgroundColor: BRAND.border }} />
                  <div className="flex-1 space-y-2">
                    <SkeletonBlock h="14px" w="60%" />
                    <SkeletonBlock h="10px" w="40%" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <div
            className="p-5 rounded-sm animate-pulse space-y-3"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <SkeletonBlock h="10px" w="70px" />
            <SkeletonBlock h="40px" w="60px" />
            <SkeletonBlock h="10px" w="120px" />
          </div>
          <div
            className="p-5 rounded-sm animate-pulse space-y-3"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <SkeletonBlock h="10px" w="90px" />
            <div className="space-y-2">
              {[0, 1, 2].map(i => (
                <div key={i} className="flex justify-between">
                  <SkeletonBlock h="10px" w="120px" />
                  <SkeletonBlock h="10px" w="40px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
