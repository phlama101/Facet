'use client'

import { BRAND } from '@/lib/brand'

interface FacetInputProps {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  onEnter?: () => void
  rightButton?: React.ReactNode
}

export default function FacetInput({
  label, value, onChange, placeholder, type = 'text', onEnter, rightButton,
}: FacetInputProps) {
  return (
    <div>
      <label
        className="text-[10px] tracking-[0.2em] uppercase block mb-1.5"
        style={{ color: BRAND.textDim }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => onEnter && e.key === 'Enter' && onEnter()}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full px-3 py-2.5 rounded-sm text-sm outline-none transition-colors"
          style={{
            backgroundColor: BRAND.bg,
            border: `1px solid ${BRAND.border}`,
            color: BRAND.text,
            fontFamily: 'var(--font-sans)',
          }}
          onFocus={e => { e.currentTarget.style.borderColor = BRAND.accent }}
          onBlur={e  => { e.currentTarget.style.borderColor = BRAND.border }}
        />
        {rightButton && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightButton}
          </div>
        )}
      </div>
    </div>
  )
}
