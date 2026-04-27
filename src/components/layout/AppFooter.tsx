import FacetLogo from '@/components/brand/FacetLogo'
import { BRAND } from '@/lib/brand'

export default function AppFooter() {
  return (
    <footer style={{ borderTop: `1px solid ${BRAND.border}` }} className="mt-16">
      <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs" style={{ color: BRAND.textSubtle }}>
          <FacetLogo size={14} />
          <span className="font-mono tracking-wider">facet.academy · Every facet of earth science</span>
        </div>
        <div
          className="flex gap-5 text-[10px] tracking-[0.2em] uppercase"
          style={{ color: BRAND.textSubtle }}
        >
          <span>Curriculum</span>
          <span>Sources</span>
          <span>Community</span>
          <span>Educators</span>
        </div>
      </div>
    </footer>
  )
}
