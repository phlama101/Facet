-- ─── CMS Lessons ────────────────────────────────────────────────────────────
-- Database-driven lesson storage that overrides static TypeScript files.
-- Lesson IDs match the slugs used in /learn/[id] (e.g. 'geol-101-1-2-1').
-- Sections are stored as JSONB matching the Lesson type in src/lessons/types.ts,
-- with ConceptCard.icon stored as a string (icon name) instead of a component.
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE public.cms_lessons (
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

-- Anyone can read published lessons (the lesson store also uses the service role
-- for server-side fetches, but anon reads are harmless and enable CDN caching).
CREATE POLICY "Published cms_lessons are readable"
  ON public.cms_lessons FOR SELECT
  USING (status = 'published');

-- Only service-role callers (admin API routes) can write.
-- No INSERT/UPDATE/DELETE policies needed — API routes use the service role key,
-- which bypasses RLS.

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

-- ─── Admin flag on profiles ──────────────────────────────────────────────────
-- Lets the admin UI gate access without exposing the service-role key to the client.

ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT false;
