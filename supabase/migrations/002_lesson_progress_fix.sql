-- =============================================================
-- Migration 002: Fix lesson progress table + XP formula
-- Run this in Supabase Dashboard → SQL Editor
-- =============================================================

-- Drop the old user_lesson_progress table.
-- The old schema stored lesson_id as UUID FK → lessons(id), but the
-- new lesson architecture uses plain string IDs like 'rock-cycle'.
DROP TABLE IF EXISTS public.user_lesson_progress;

-- Recreate with TEXT lesson_id (no FK — lessons live in app code, not DB)
-- and add the `completed` BOOLEAN column the app writes.
CREATE TABLE public.user_lesson_progress (
  id           UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id      UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id    TEXT NOT NULL,
  completed    BOOLEAN DEFAULT TRUE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own read"   ON public.user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own insert" ON public.user_lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own update" ON public.user_lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- Fix the XP-per-level formula. The original used 500; the app uses 250.
CREATE OR REPLACE FUNCTION award_xp(p_user_id UUID, p_xp INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.profiles
  SET
    xp          = xp + p_xp,
    level       = FLOOR((xp + p_xp) / 250) + 1,
    last_active = NOW()
  WHERE id = p_user_id;
END;
$$;
