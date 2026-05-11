import { BRAND } from '@/lib/brand'

export default function AtlasLoading() {
  return (
    <div className="-mx-5 -mt-6 md:-mt-8">
      <div
        className="w-full animate-pulse flex items-center justify-center"
        style={{
          height: 'calc(100vh - 64px)',
          backgroundColor: BRAND.surface,
          borderTop: `1px solid ${BRAND.border}`,
        }}
      >
        <div className="text-center space-y-3">
          <div
            className="w-12 h-12 rounded-full mx-auto"
            style={{ backgroundColor: BRAND.border }}
          />
          <div
            className="text-[10px] tracking-[0.25em] uppercase font-mono"
            style={{ color: BRAND.textSubtle }}
          >
            Loading atlas…
          </div>
        </div>
      </div>
    </div>
  )
}
