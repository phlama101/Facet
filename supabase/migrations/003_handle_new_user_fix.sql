-- =============================================================
-- Migration 003: Fix handle_new_user trigger — username conflicts
-- Run this in Supabase Dashboard → SQL Editor
-- =============================================================

-- The original trigger used a plain INSERT with COALESCE for username.
-- If two users share the same email prefix (or the same explicit username),
-- the INSERT fails with a unique constraint violation, which rolls back the
-- entire auth.users INSERT and prevents account creation.
--
-- This version appends an incrementing suffix until the username is unique.

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  base_username  TEXT;
  final_username TEXT;
  counter        INT := 0;
BEGIN
  base_username := LOWER(TRIM(
    COALESCE(
      NULLIF(NEW.raw_user_meta_data->>'username', ''),
      split_part(NEW.email, '@', 1)
    )
  ));

  -- Remove any characters not safe for a username (keep alphanumeric + _ -)
  base_username := regexp_replace(base_username, '[^a-z0-9_\-]', '', 'g');

  -- Fallback if the result is empty after sanitisation
  IF base_username = '' THEN
    base_username := 'user';
  END IF;

  final_username := base_username;

  -- Increment suffix until unique
  WHILE EXISTS (SELECT 1 FROM public.profiles WHERE username = final_username) LOOP
    counter        := counter + 1;
    final_username := base_username || counter::TEXT;
  END LOOP;

  INSERT INTO public.profiles (id, username, display_name)
  VALUES (
    NEW.id,
    final_username,
    COALESCE(
      NULLIF(TRIM(NEW.raw_user_meta_data->>'display_name'), ''),
      final_username
    )
  );

  RETURN NEW;
END;
$$;
