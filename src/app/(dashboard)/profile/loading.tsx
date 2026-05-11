import { BRAND } from '@/lib/brand'

function Bone({ w, h, className = '' }: { w?: string; h?: string; className?: string }) {
  return (
    <div
      className={`rounded-sm animate-pulse ${className}`}
      style={{ width: w ?? '100%', height: h ?? '14px', backgroundColor: BRAND.border }}
    />
  )
}

export default function ProfileLoading() {
  return (
    <div className="space-y-8">
      {/* Identity card */}
      <div
        className="grid md:grid-cols-3 gap-6 items-center p-6 md:p-8 rounded-sm animate-pulse"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-center gap-5 md:col-span-2">
          <div className="w-16 h-16 rounded-full shrink-0" style={{ backgroundColor: BRAND.border }} />
          <div className="space-y-3 flex-1">
            <Bone h="10px" w="60px" />
            <Bone h="32px" w="200px" />
            <Bone h="10px" w="140px" />
          </div>
        </div>
        <div className="space-y-3 text-right">
          <Bone h="64px" w="80px" className="ml-auto" />
          <Bone h="10px" w="120px" className="ml-auto" />
          <Bone h="2px" />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="p-4 rounded-sm text-center animate-pulse space-y-2"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <Bone h="28px" w="64px" className="mx-auto" />
            <Bone h="10px" w="80px" className="mx-auto" />
          </div>
        ))}
      </div>

      {/* Subscription card */}
      <div
        className="p-6 rounded-sm animate-pulse space-y-4"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex justify-between">
          <div className="space-y-2">
            <Bone h="10px" w="40px" />
            <Bone h="24px" w="120px" />
          </div>
          <Bone h="32px" w="100px" />
        </div>
        <Bone h="10px" w="80%" />
      </div>

      {/* Achievements */}
      <div className="space-y-4">
        <Bone h="12px" w="120px" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              className="p-4 rounded-sm animate-pulse space-y-2"
              style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
            >
              <Bone h="10px" w="60%" />
              <Bone h="14px" w="80%" />
              <Bone h="10px" w="50%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
