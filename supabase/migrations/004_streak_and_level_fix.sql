-- ─────────────────────────────────────────────────────────────────────────────
-- Migration 004: Fix award_xp — correct level formula + streak tracking
-- ─────────────────────────────────────────────────────────────────────────────
-- Streak rules (UTC days):
--   last_active = today    → streak unchanged (already active today)
--   last_active = yesterday → streak + 1
--   anything older (or NULL) → streak resets to 1
--
-- Level formula (triangular XP curve, matches TypeScript utils.ts):
--   total XP to START level n = 500 * (n-1) * n / 2
--   solved for n given xp:  n = FLOOR((1 + SQRT(1 + 8*xp/500)) / 2)
-- ─────────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION award_xp(p_user_id UUID, p_xp INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_current_xp        INTEGER;
  v_new_xp            INTEGER;
  v_new_level         INTEGER;
  v_last_active       TIMESTAMPTZ;
  v_today_utc         DATE;
  v_last_active_date  DATE;
  v_current_streak    INTEGER;
  v_longest_streak    INTEGER;
  v_new_streak        INTEGER;
BEGIN
  -- Read current state
  SELECT xp, last_active, streak, longest_streak
  INTO   v_current_xp, v_last_active, v_current_streak, v_longest_streak
  FROM   public.profiles
  WHERE  id = p_user_id;

  IF NOT FOUND THEN RETURN; END IF;

  -- Compute new XP and level
  v_new_xp    := v_current_xp + p_xp;
  v_new_level := FLOOR((1.0 + SQRT(1.0 + 8.0 * v_new_xp / 500.0)) / 2.0)::INTEGER;
  v_new_level := GREATEST(v_new_level, 1);

  -- Compute new streak based on UTC dates
  v_today_utc        := (NOW() AT TIME ZONE 'UTC')::DATE;
  v_last_active_date := (v_last_active AT TIME ZONE 'UTC')::DATE;

  IF v_last_active IS NULL THEN
    -- First ever activity
    v_new_streak := 1;
  ELSIF v_last_active_date = v_today_utc THEN
    -- Already active today — keep streak unchanged
    v_new_streak := v_current_streak;
  ELSIF v_last_active_date = v_today_utc - INTERVAL '1 day' THEN
    -- Active yesterday — extend streak
    v_new_streak := v_current_streak + 1;
  ELSE
    -- Gap of more than one day — reset streak
    v_new_streak := 1;
  END IF;

  -- Update profile
  UPDATE public.profiles
  SET
    xp             = v_new_xp,
    level          = v_new_level,
    streak         = v_new_streak,
    longest_streak = GREATEST(v_longest_streak, v_new_streak),
    last_active    = NOW()
  WHERE id = p_user_id;
END;
$$;
