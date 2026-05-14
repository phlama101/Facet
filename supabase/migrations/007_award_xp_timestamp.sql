-- ─────────────────────────────────────────────────────────────────────────────
-- Migration 007: Anchor streak date calculation to the caller-supplied timestamp.
--
-- Previously award_xp used NOW() to determine "today" for streak logic.
-- If the Node.js API computed todayUTC at 23:59:59 UTC but the Postgres
-- function ran after midnight (00:00:00 UTC), the function saw a 2-day gap
-- between last_active (yesterday) and "today" (now tomorrow), resetting the
-- streak even though the user completed a lesson on the correct day.
--
-- Fix: add an optional p_now TIMESTAMPTZ parameter. The caller passes the
-- timestamp it used for completed_at so both the progress row and the streak
-- logic are anchored to the same reference point. Falls back to NOW() when
-- the parameter is omitted (e.g. direct SQL calls).
-- ─────────────────────────────────────────────────────────────────────────────

DROP FUNCTION IF EXISTS award_xp(UUID, INTEGER);

CREATE OR REPLACE FUNCTION award_xp(
  p_user_id UUID,
  p_xp      INTEGER,
  p_now     TIMESTAMPTZ DEFAULT NULL
)
RETURNS TABLE(new_xp INTEGER, new_level INTEGER, new_streak INTEGER)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_ref_time         TIMESTAMPTZ;
  v_current_xp       INTEGER;
  v_new_xp           INTEGER;
  v_new_level        INTEGER;
  v_last_active      TIMESTAMPTZ;
  v_today_utc        DATE;
  v_last_active_date DATE;
  v_current_streak   INTEGER;
  v_longest_streak   INTEGER;
  v_new_streak       INTEGER;
BEGIN
  -- Anchor all date arithmetic to the caller's timestamp so the streak day
  -- boundary matches the completed_at stored in user_lesson_progress.
  v_ref_time := COALESCE(p_now, NOW());

  -- Lock the profile row so concurrent completions queue here rather than race.
  SELECT xp, last_active, streak, longest_streak
  INTO   v_current_xp, v_last_active, v_current_streak, v_longest_streak
  FROM   public.profiles
  WHERE  id = p_user_id
  FOR UPDATE;

  IF NOT FOUND THEN RETURN; END IF;

  -- XP and level (triangular curve: total XP to start level n = 500·(n-1)·n/2)
  v_new_xp    := v_current_xp + p_xp;
  v_new_level := GREATEST(1, FLOOR((1.0 + SQRT(1.0 + 8.0 * v_new_xp / 500.0)) / 2.0)::INTEGER);

  -- Streak (UTC-day boundaries, anchored to v_ref_time)
  v_today_utc        := (v_ref_time AT TIME ZONE 'UTC')::DATE;
  v_last_active_date := (v_last_active AT TIME ZONE 'UTC')::DATE;

  IF v_last_active IS NULL THEN
    v_new_streak := 1;
  ELSIF v_last_active_date = v_today_utc THEN
    v_new_streak := v_current_streak;            -- already active today
  ELSIF v_last_active_date = v_today_utc - INTERVAL '1 day' THEN
    v_new_streak := v_current_streak + 1;        -- consecutive day
  ELSE
    v_new_streak := 1;                           -- streak broken
  END IF;

  UPDATE public.profiles
  SET
    xp             = v_new_xp,
    level          = v_new_level,
    streak         = v_new_streak,
    longest_streak = GREATEST(v_longest_streak, v_new_streak),
    last_active    = v_ref_time
  WHERE id = p_user_id;

  RETURN QUERY SELECT v_new_xp, v_new_level, v_new_streak;
END;
$$;
