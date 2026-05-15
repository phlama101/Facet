'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, BookMarked, X } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { GlossaryEntry } from './page'

const TRACK_LABELS: Record<string, string> = {
  geo: 'Geology',
  oce: 'Oceanography',
  atm: 'Meteorology',
  vol: 'Volcanology',
  cli: 'Climate',
  ast: 'Planetary',
}

interface Props { entries: GlossaryEntry[] }

export default function GlossaryClient({ entries }: Props) {
  const [query, setQuery] = useState('')
  const [activeTrack, setActiveTrack] = useState<string | null>(null)

  const tracks = useMemo(() => {
    const seen = new Set<string>()
    for (const e of entries) {
      const track = e.lessonId.split('-')[0]
      seen.add(track)
    }
    return [...seen].sort()
  }, [entries])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return entries.filter(e => {
      if (activeTrack && !e.lessonId.startsWith(activeTrack)) return false
      if (!q) return true
      return (
        e.term.toLowerCase().includes(q) ||
        e.definition.toLowerCase().includes(q) ||
        (e.examples ?? '').toLowerCase().includes(q)
      )
    })
  }, [entries, query, activeTrack])

  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryEntry[]>()
    for (const entry of filtered) {
      const letter = entry.term[0]?.toUpperCase() ?? '#'
      const key = /[A-Z]/.test(letter) ? letter : '#'
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(entry)
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b))
  }, [filtered])

  const letters = grouped.map(([letter]) => letter)

  return (
    <div className="space-y-5">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookMarked size={16} color={BRAND.accent} />
            <h1 className="font-serif" style={{ fontSize: '28px', lineHeight: 1.1 }}>Glossary</h1>
          </div>
          <p className="text-sm" style={{ color: BRAND.textDim }}>
            {entries.length.toLocaleString()} terms across all earth science disciplines
          </p>
        </div>
        {filtered.length !== entries.length && (
          <div className="text-xs font-mono mt-1 shrink-0" style={{ color: BRAND.textSubtle }}>
            {filtered.length} results
          </div>
        )}
      </div>

      {/* Search + track filters */}
      <div className="space-y-3">
        <div
          className="flex items-center gap-3 px-4 py-2.5 rounded-sm"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <Search size={13} color={BRAND.textSubtle} className="shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search terms and definitions…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-[color:var(--text-subtle)]"
            style={{ color: BRAND.text, '--text-subtle': BRAND.textSubtle } as React.CSSProperties}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ color: BRAND.textSubtle }}>
              <X size={13} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveTrack(null)}
            className="px-3 py-1 rounded-sm text-[10px] tracking-[0.1em] uppercase font-medium transition-colors"
            style={
              activeTrack === null
                ? { backgroundColor: BRAND.accent, color: BRAND.bg }
                : { backgroundColor: BRAND.surface, color: BRAND.textSubtle, border: `1px solid ${BRAND.border}` }
            }
          >
            All
          </button>
          {tracks.map(track => (
            <button
              key={track}
              onClick={() => setActiveTrack(activeTrack === track ? null : track)}
              className="px-3 py-1 rounded-sm text-[10px] tracking-[0.1em] uppercase font-medium transition-colors"
              style={
                activeTrack === track
                  ? { backgroundColor: BRAND.accent, color: BRAND.bg }
                  : { backgroundColor: BRAND.surface, color: BRAND.textSubtle, border: `1px solid ${BRAND.border}` }
              }
            >
              {TRACK_LABELS[track] ?? track}
            </button>
          ))}
        </div>
      </div>

      {/* Letter jump nav */}
      {letters.length > 3 && (
        <div className="flex flex-wrap gap-1">
          {letters.map(letter => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="w-6 h-6 flex items-center justify-center rounded-sm text-[10px] font-mono font-bold transition-colors"
              style={{ backgroundColor: BRAND.surfaceHi, color: BRAND.textSubtle, border: `1px solid ${BRAND.border}` }}
            >
              {letter}
            </a>
          ))}
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center" style={{ color: BRAND.textSubtle }}>
          <div className="text-sm">No terms match &ldquo;{query}&rdquo;</div>
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(([letter, letterEntries]) => (
            <section key={letter} id={`letter-${letter}`}>
              <div
                className="text-[11px] tracking-[0.25em] uppercase font-mono font-bold mb-3 pb-2"
                style={{ color: BRAND.accent, borderBottom: `1px solid ${BRAND.border}` }}
              >
                {letter}
              </div>
              <div className="space-y-0">
                {letterEntries.map((entry, i) => (
                  <div
                    key={`${entry.lessonId}-${entry.term}-${i}`}
                    className="py-4 grid md:grid-cols-[1fr_auto] gap-3 items-start"
                    style={{ borderBottom: `1px solid ${BRAND.border}40` }}
                  >
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span className="font-medium text-sm" style={{ color: BRAND.text }}>
                          {entry.term}
                        </span>
                        <span
                          className="text-[9px] tracking-[0.12em] uppercase px-1.5 py-0.5 rounded-sm"
                          style={{
                            backgroundColor: entry.type === 'concept' ? `${BRAND.accent}15` : `${BRAND.amethyst}15`,
                            color: entry.type === 'concept' ? BRAND.accent : BRAND.amethyst,
                          }}
                        >
                          {entry.type === 'concept' ? 'concept' : 'key term'}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
                        {entry.definition}
                      </p>
                      {entry.examples && (
                        <p className="text-xs mt-1.5 italic" style={{ color: BRAND.textSubtle }}>
                          {entry.examples}
                        </p>
                      )}
                    </div>
                    <Link
                      href={`/learn/${entry.lessonId}`}
                      className="shrink-0 text-[10px] tracking-[0.08em] uppercase whitespace-nowrap transition-opacity hover:opacity-70 md:text-right"
                      style={{ color: BRAND.textSubtle }}
                    >
                      {entry.trackName}
                      <br />
                      <span style={{ color: `${BRAND.textSubtle}80` }}>{entry.lessonTitle}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
