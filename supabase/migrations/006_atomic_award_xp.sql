-- ─────────────────────────────────────────────────────────────────────────────
-- Migration 006: Make award_xp atomic via SELECT FOR UPDATE row lock.
--
-- Previously the function did a plain SELECT followed by a separate UPDATE.
-- Two concurrent calls for different lessons could both read the same stale xp
-- value and then one write would silently overwrite the other, losing XP.
--
-- The fix: SELECT ... FOR UPDATE acquires an exclusive row-level lock so that
-- concurrent calls queue instead of racing.  The function now also returns the
-- new profile values so the caller can echo them in its HTTP response without
-- an extra round-trip.
-- ─────────────────────────────────────────────────────────────────────────────

-- Drop first because CREATE OR REPLACE cannot change a function's return type.
-- The original award_xp() returned VOID; the new version returns a TABLE row.
DROP FUNCTION IF EXISTS award_xp(UUID, INTEGER);

CREATE OR REPLACE FUNCTION award_xp(p_user_id UUID, p_xp INTEGER)
RETURNS TABLE(new_xp INTEGER, new_level INTEGER, new_streak INTEGER)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
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

  -- Streak (UTC-day boundaries)
  v_today_utc        := (NOW() AT TIME ZONE 'UTC')::DATE;
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
    last_active    = NOW()
  WHERE id = p_user_id;

  RETURN QUERY SELECT v_new_xp, v_new_level, v_new_streak;
END;
$$;
