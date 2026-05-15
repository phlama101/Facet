-- ─────────────────────────────────────────────────────────────────────────────
-- Migration 008: Spaced-repetition review cards
--
-- Each row tracks the SM-2 state for one quiz question from a static lesson.
-- lesson_id is TEXT (matches the string IDs in the TypeScript lesson bundle).
-- question_index is the zero-based position in the flattened quiz question
-- array across all quiz sections of that lesson.
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE public.user_review_cards (
  id               UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id          UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id        TEXT NOT NULL,
  question_index   INTEGER NOT NULL,
  interval_days    INTEGER DEFAULT 1,
  ease_factor      REAL DEFAULT 2.5,
  due_at           TIMESTAMPTZ NOT NULL,
  last_reviewed_at TIMESTAMPTZ,
  review_count     INTEGER DEFAULT 0,
  UNIQUE(user_id, lesson_id, question_index)
);

ALTER TABLE public.user_review_cards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own read"   ON public.user_review_cards FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own insert" ON public.user_review_cards FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own update" ON public.user_review_cards FOR UPDATE USING (auth.uid() = user_id);
