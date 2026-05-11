'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Save, Trash2, AlertTriangle, CheckCircle2, Eye } from 'lucide-react'
import type { DbLesson } from '@/lib/lesson-store'
import { ICON_NAMES } from '@/lib/icon-map'

interface Props {
  initial?: Partial<DbLesson>
  mode: 'create' | 'edit'
}

const TRACKS = [
  { id: 'geo', name: 'Geology' },
  { id: 'oce', name: 'Oceanography' },
  { id: 'atm', name: 'Meteorology' },
  { id: 'vol', name: 'Volcanology' },
  { id: 'cli', name: 'Climate' },
  { id: 'ast', name: 'Planetary' },
]

const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'SME']
const STATUSES = ['draft', 'review', 'published']

const SECTION_TEMPLATES = {
  intro: `{
  "type": "intro",
  "title": "Section title",
  "body": "Opening paragraph.\\n\\nSecond paragraph with **bold** text.",
  "keyTerms": [
    { "term": "Example term", "def": "Definition here." }
  ]
}`,
  concept: `{
  "type": "concept",
  "title": "Concept section title",
  "body": "Explanatory text here.",
  "cards": [
    {
      "name": "Card name",
      "icon": "Globe",
      "color": "#06b6d4",
      "desc": "Card description.",
      "examples": "Example 1 · Example 2"
    }
  ]
}`,
  quiz: `{
  "type": "quiz",
  "questions": [
    {
      "q": "Question text?",
      "a": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explain": "Explanation of the correct answer."
    }
  ]
}`,
  theory: `{
  "type": "theory",
  "title": "Theory section title",
  "body": "Theoretical explanation.",
  "equations": [
    { "label": "Equation name", "tex": "E = mc^2", "note": "Optional note" }
  ]
}`,
  'case-study': `{
  "type": "case-study",
  "title": "Case study title",
  "location": "Location name",
  "body": "Context and background.",
  "findings": [
    { "label": "Finding label", "detail": "Finding detail." }
  ],
  "citation": "Author et al. (Year). Journal.",
  "doi": "10.xxxx/xxxxx"
}`,
  'data-lab': `{
  "type": "data-lab",
  "title": "Lab title",
  "premise": "What students will investigate.",
  "steps": [
    { "instruction": "Step 1 instruction.", "result": "What they observe." }
  ],
  "conclusion": "What the data shows."
}`,
}

function validateSectionsJson(raw: string): { ok: boolean; error?: string } {
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return { ok: false, error: 'sections must be a JSON array' }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: String(e) }
  }
}

export default function LessonEditor({ initial, mode }: Props) {
  const router = useRouter()

  const [id, setId]               = useState(initial?.id ?? '')
  const [title, setTitle]         = useState(initial?.title ?? '')
  const [track, setTrack]         = useState(initial?.track ?? 'geo')
  const [trackName, setTrackName] = useState(initial?.trackName ?? 'Geology')
  const [level, setLevel]         = useState<string>(initial?.level ?? 'Beginner')
  const [duration, setDuration]   = useState(initial?.duration ?? '10 min')
  const [xpReward, setXpReward]   = useState(String(initial?.xpReward ?? 100))
  const [description, setDesc]    = useState(initial?.description ?? '')
  const [sources, setSources]     = useState(
    JSON.stringify(initial?.sources ?? [], null, 2)
  )
  const [sections, setSections]   = useState(
    JSON.stringify(initial?.sections ?? [], null, 2)
  )
  const [isPremium, setIsPremium] = useState(initial?.isPremium ?? false)
  const [status, setStatus]       = useState<string>(initial?.status ?? 'draft')

  const [saving, setSaving]       = useState(false)
  const [deleting, setDeleting]   = useState(false)
  const [saved, setSaved]         = useState(false)
  const [error, setError]         = useState<string | null>(null)
  const [jsonError, setJsonError] = useState<string | null>(null)

  const onTrackChange = useCallback((t: string) => {
    setTrack(t as DbLesson['track'])
    const found = TRACKS.find(tr => tr.id === t)
    if (found) setTrackName(found.name)
  }, [])

  function insertTemplate(type: keyof typeof SECTION_TEMPLATES) {
    try {
      const existing = JSON.parse(sections) as unknown[]
      existing.push(JSON.parse(SECTION_TEMPLATES[type]))
      setSections(JSON.stringify(existing, null, 2))
      setJsonError(null)
    } catch {
      setJsonError('Fix JSON errors before adding a template')
    }
  }

  function validateAndSetSections(raw: string) {
    setSections(raw)
    const result = validateSectionsJson(raw)
    setJsonError(result.ok ? null : result.error ?? null)
  }

  async function save(targetStatus?: string) {
    setError(null)
    setSaved(false)

    const sectionsValidation = validateSectionsJson(sections)
    if (!sectionsValidation.ok) {
      setError(`Sections JSON error: ${sectionsValidation.error}`)
      return
    }

    let parsedSources
    try { parsedSources = JSON.parse(sources) } catch {
      setError('Sources is not valid JSON')
      return
    }

    const payload = {
      id: id.trim(),
      title: title.trim(),
      track,
      trackName,
      level,
      duration: duration.trim(),
      xpReward: parseInt(xpReward, 10) || 100,
      description: description.trim(),
      sources: parsedSources,
      sections: JSON.parse(sections),
      isPremium,
      status: targetStatus ?? status,
    }

    if (!payload.id) { setError('Lesson ID (slug) is required'); return }
    if (!payload.title) { setError('Title is required'); return }

    setSaving(true)
    try {
      const url = mode === 'create'
        ? '/api/admin/cms-lessons'
        : `/api/admin/cms-lessons/${encodeURIComponent(payload.id)}`
      const method = mode === 'create' ? 'POST' : 'PUT'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json() as { error?: string }
      if (!res.ok) throw new Error(json.error ?? `HTTP ${res.status}`)

      if (targetStatus) setStatus(targetStatus)
      setSaved(true)
      if (mode === 'create') router.push(`/admin/lessons/${encodeURIComponent(payload.id)}/edit`)
    } catch (e) {
      setError(String(e))
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete lesson "${id}"? This cannot be undone.`)) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/admin/cms-lessons/${encodeURIComponent(id)}`, { method: 'DELETE' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      router.push('/admin/lessons')
    } catch (e) {
      setError(String(e))
      setDeleting(false)
    }
  }

  const inputCls = 'w-full px-3 py-2 rounded-lg bg-[#0d1117] border border-white/10 text-sm text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-cyan-500/50 transition-colors'
  const labelCls = 'block text-xs font-bold text-[#8b949e] uppercase tracking-wide mb-1.5'
  const selectCls = `${inputCls} cursor-pointer`

  return (
    <div className="space-y-6">
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {saved && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          Saved successfully
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left column — metadata */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 space-y-4">
            <h2 className="text-sm font-bold text-[#e6edf3]">Metadata</h2>

            <div>
              <label className={labelCls}>Lesson ID (slug)</label>
              <input
                className={inputCls}
                value={id}
                onChange={e => setId(e.target.value)}
                placeholder="e.g. geol-101-1-2-5"
                disabled={mode === 'edit'}
              />
              <p className="text-[10px] text-[#8b949e] mt-1">
                Used in /learn/[id] URLs. Cannot be changed after creation.
              </p>
            </div>

            <div>
              <label className={labelCls}>Title</label>
              <input className={inputCls} value={title} onChange={e => setTitle(e.target.value)} placeholder="Lesson title" />
            </div>

            <div>
              <label className={labelCls}>Description</label>
              <textarea
                className={`${inputCls} resize-none`}
                rows={3}
                value={description}
                onChange={e => setDesc(e.target.value)}
                placeholder="One-sentence lesson summary"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Track</label>
                <select className={selectCls} value={track} onChange={e => onTrackChange(e.target.value)}>
                  {TRACKS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Level</label>
                <select className={selectCls} value={level} onChange={e => setLevel(e.target.value)}>
                  {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Duration</label>
                <input className={inputCls} value={duration} onChange={e => setDuration(e.target.value)} placeholder="12 min" />
              </div>
              <div>
                <label className={labelCls}>XP Reward</label>
                <input className={inputCls} type="number" value={xpReward} onChange={e => setXpReward(e.target.value)} min={0} />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                id="isPremium"
                type="checkbox"
                checked={isPremium}
                onChange={e => setIsPremium(e.target.checked)}
                className="w-4 h-4 accent-cyan-500"
              />
              <label htmlFor="isPremium" className="text-sm text-[#e6edf3]">Premium (pro/expert only)</label>
            </div>
          </div>

          {/* Sources */}
          <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 space-y-3">
            <h2 className="text-sm font-bold text-[#e6edf3]">Sources (JSON array)</h2>
            <textarea
              className={`${inputCls} font-mono text-xs resize-none`}
              rows={6}
              value={sources}
              onChange={e => setSources(e.target.value)}
              spellCheck={false}
            />
            <p className="text-[10px] text-[#8b949e]">
              {`[{ "org": "USGS", "title": "...", "url": "https://..." }]`}
            </p>
          </div>

          {/* Status + actions */}
          <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 space-y-4">
            <div>
              <label className={labelCls}>Status</label>
              <select className={selectCls} value={status} onChange={e => setStatus(e.target.value)}>
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => save()}
                disabled={saving}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-[#0d1117] text-sm font-bold hover:bg-cyan-400 disabled:opacity-50 transition-colors"
              >
                <Save className="w-4 h-4" />
                {saving ? 'Saving…' : 'Save'}
              </button>
              {status !== 'published' && (
                <button
                  onClick={() => save('published')}
                  disabled={saving}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold hover:bg-emerald-500/30 disabled:opacity-50 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Publish
                </button>
              )}
              {mode === 'edit' && (
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold hover:bg-red-500/20 disabled:opacity-50 transition-colors ml-auto"
                >
                  <Trash2 className="w-4 h-4" />
                  {deleting ? 'Deleting…' : 'Delete'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right column — sections editor */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#e6edf3]">Sections (JSON array)</h2>
              {jsonError && (
                <span className="text-[10px] text-red-400 font-mono">{jsonError}</span>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(SECTION_TEMPLATES) as Array<keyof typeof SECTION_TEMPLATES>).map(type => (
                <button
                  key={type}
                  onClick={() => insertTemplate(type)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#8b949e] hover:text-[#e6edf3] transition-colors"
                >
                  + {type}
                </button>
              ))}
            </div>

            <textarea
              className={`${inputCls} font-mono text-xs resize-none`}
              rows={30}
              value={sections}
              onChange={e => validateAndSetSections(e.target.value)}
              spellCheck={false}
            />
          </div>

          {/* Icon reference */}
          <div className="p-4 rounded-2xl bg-[#161b22] border border-white/5">
            <p className="text-xs font-bold text-[#8b949e] uppercase tracking-wide mb-2">
              Available icon names for concept cards
            </p>
            <div className="flex flex-wrap gap-1">
              {ICON_NAMES.map(name => (
                <code key={name} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-[#8b949e] font-mono">
                  {name}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
