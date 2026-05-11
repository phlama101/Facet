'use client'

import { useState } from 'react'
import { CheckCircle2, Copy, AlertTriangle, ExternalLink, ChevronRight } from 'lucide-react'

const MIGRATION_SQL = `CREATE TABLE public.cms_lessons (
  id          TEXT PRIMARY KEY,
  title       TEXT NOT NULL,
  track       TEXT NOT NULL CHECK (track IN ('geo','oce','atm','vol','cli','ast')),
  track_name  TEXT NOT NULL,
  level       TEXT NOT NULL DEFAULT 'Beginner'
                CHECK (level IN ('Beginner','Intermediate','Advanced','Expert','SME')),
  duration    TEXT NOT NULL DEFAULT '10 min',
  xp_reward   INTEGER NOT NULL DEFAULT 100,
  description TEXT NOT NULL DEFAULT '',
  sources     JSONB NOT NULL DEFAULT '[]',
  sections    JSONB NOT NULL DEFAULT '[]',
  is_premium  BOOLEAN NOT NULL DEFAULT false,
  status      TEXT NOT NULL DEFAULT 'draft'
                CHECK (status IN ('draft','review','published')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by  UUID REFERENCES auth.users(id)
);

ALTER TABLE public.cms_lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published cms_lessons are readable"
  ON public.cms_lessons FOR SELECT
  USING (status = 'published');

CREATE OR REPLACE FUNCTION update_cms_lessons_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER cms_lessons_updated_at
  BEFORE UPDATE ON public.cms_lessons
  FOR EACH ROW EXECUTE FUNCTION update_cms_lessons_updated_at();

ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT false;`

export default function AdminSetupPage() {
  const [copied, setCopied] = useState(false)
  const [grantLoading, setGrantLoading] = useState(false)
  const [grantResult, setGrantResult] = useState<{ ok?: boolean; error?: string } | null>(null)
  const [seedLoading, setSeedLoading] = useState(false)
  const [seedResult, setSeedResult] = useState<{ seeded?: number; skipped?: number; failed?: number } | null>(null)

  function copySQL() {
    navigator.clipboard.writeText(MIGRATION_SQL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  async function grantAdmin() {
    setGrantLoading(true)
    setGrantResult(null)
    try {
      const res = await fetch('/api/admin/grant-self-admin', { method: 'POST' })
      const json = await res.json() as { message?: string; error?: string }
      if (res.ok) {
        setGrantResult({ ok: true })
      } else {
        setGrantResult({ error: json.error ?? `HTTP ${res.status}` })
      }
    } catch (e) {
      setGrantResult({ error: String(e) })
    } finally {
      setGrantLoading(false)
    }
  }

  async function seedLessons() {
    setSeedLoading(true)
    setSeedResult(null)
    try {
      const res = await fetch('/api/admin/seed-lessons', { method: 'POST' })
      const json = await res.json() as { seeded?: number; skipped?: number; failed?: number; error?: string }
      if (res.ok) {
        setSeedResult({ seeded: json.seeded, skipped: json.skipped, failed: json.failed })
      } else {
        setSeedResult({ failed: 1 })
      }
    } catch (e) {
      setSeedResult({ failed: 1 })
    } finally {
      setSeedLoading(false)
    }
  }

  const stepCls = 'p-5 rounded-2xl bg-[#161b22] border border-white/5 space-y-4'
  const btnCls = 'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors disabled:opacity-50'

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-black text-[#e6edf3]">CMS Setup</h1>
        <p className="text-sm text-[#8b949e] mt-1">
          Three steps to activate the DB-driven lesson CMS.
        </p>
      </div>

      {/* Step 1 */}
      <div className={stepCls}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-sm font-black text-cyan-400">1</div>
          <h2 className="font-bold text-[#e6edf3]">Run the database migration</h2>
        </div>
        <p className="text-sm text-[#8b949e]">
          Open the{' '}
          <a
            href="https://supabase.com/dashboard/project/sgiupkiqhwgejlhbyehp/sql/new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 inline-flex items-center gap-1"
          >
            Supabase SQL Editor <ExternalLink className="w-3 h-3" />
          </a>
          {' '}and run this SQL:
        </p>
        <div className="relative">
          <pre className="text-[11px] font-mono text-[#8b949e] bg-[#0d1117] rounded-xl p-4 overflow-x-auto leading-relaxed">
            {MIGRATION_SQL}
          </pre>
          <button
            onClick={copySQL}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-[#e6edf3] font-semibold transition-colors"
          >
            {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Step 2 */}
      <div className={stepCls}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-sm font-black text-cyan-400">2</div>
          <h2 className="font-bold text-[#e6edf3]">Grant yourself admin access</h2>
        </div>
        <p className="text-sm text-[#8b949e]">
          After the migration runs, click below to set yourself as the first admin.
          This only works when no admins exist yet.
        </p>
        {grantResult?.ok && (
          <div className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            Admin access granted — reload the page to continue.
          </div>
        )}
        {grantResult?.error && (
          <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            {grantResult.error}
          </div>
        )}
        <button
          onClick={grantAdmin}
          disabled={grantLoading || grantResult?.ok}
          className={`${btnCls} bg-cyan-500 text-[#0d1117] hover:bg-cyan-400`}
        >
          <ChevronRight className="w-4 h-4" />
          {grantLoading ? 'Granting…' : grantResult?.ok ? 'Done ✓' : 'Grant admin access'}
        </button>
      </div>

      {/* Step 3 */}
      <div className={stepCls}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-sm font-black text-cyan-400">3</div>
          <h2 className="font-bold text-[#e6edf3]">Seed existing lessons (optional)</h2>
        </div>
        <p className="text-sm text-[#8b949e]">
          Migrate all 100+ existing static TypeScript lessons into the DB as draft records.
          You can then edit and publish them without code deploys.
        </p>
        {seedResult && (
          <div className={`flex items-center gap-2 text-sm px-4 py-3 rounded-xl border ${
            (seedResult.failed ?? 0) > 0
              ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
              : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            Seeded {seedResult.seeded} lessons · {seedResult.skipped} already existed · {seedResult.failed} failed
          </div>
        )}
        <button
          onClick={seedLessons}
          disabled={seedLoading}
          className={`${btnCls} bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30`}
        >
          <ChevronRight className="w-4 h-4" />
          {seedLoading ? 'Seeding…' : 'Seed static lessons'}
        </button>
      </div>
    </div>
  )
}
