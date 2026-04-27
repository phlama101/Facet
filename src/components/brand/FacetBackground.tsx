import { BRAND } from '@/lib/brand'

export default function FacetBackground() {
  return (
    <>
      {/* Aurora radial gradients */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: [
            `radial-gradient(ellipse at 20% 10%, rgba(122,215,240,0.08) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 85% 85%, rgba(181,126,220,0.06) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 60% 50%, rgba(127,194,155,0.04) 0%, transparent 60%)`,
          ].join(', '),
        }}
      />

      {/* Crystal facet grid */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="facetPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 0 L120 30 L120 90 L60 120 L0 90 L0 30 Z"
              fill="none" stroke={BRAND.accent} strokeWidth="0.5" />
            <path d="M60 0 L60 120"   stroke={BRAND.accent} strokeWidth="0.3" />
            <path d="M0 30 L120 90"   stroke={BRAND.accent} strokeWidth="0.3" />
            <path d="M120 30 L0 90"   stroke={BRAND.accent} strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#facetPattern)" />
      </svg>

      {/* Fine grain noise */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  )
}
