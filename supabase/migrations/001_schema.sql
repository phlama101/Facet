-- =============================================================
-- Facet — Earth Sciences Learning Platform
-- Supabase / PostgreSQL Schema + Seed Data
-- =============================================================

-- ─── Extensions ───────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── Profiles (extends auth.users) ───────────────────────────
CREATE TABLE public.profiles (
  id              UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username        TEXT UNIQUE NOT NULL,
  display_name    TEXT,
  bio             TEXT DEFAULT '',
  avatar_color    TEXT DEFAULT '#06b6d4',
  xp              INTEGER DEFAULT 0,
  level           INTEGER DEFAULT 1,
  streak          INTEGER DEFAULT 0,
  longest_streak  INTEGER DEFAULT 0,
  last_active     TIMESTAMPTZ DEFAULT NOW(),
  subscription    TEXT DEFAULT 'free' CHECK (subscription IN ('free','pro','expert')),
  stripe_customer_id TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on sign-up
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, username, display_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ─── Courses ──────────────────────────────────────────────────
CREATE TABLE public.courses (
  id               UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug             TEXT UNIQUE NOT NULL,
  title            TEXT NOT NULL,
  description      TEXT,
  long_description TEXT,
  category         TEXT NOT NULL,
  difficulty       TEXT NOT NULL CHECK (difficulty IN ('beginner','intermediate','advanced','expert')),
  icon             TEXT NOT NULL,
  color            TEXT NOT NULL,
  gradient         TEXT NOT NULL,
  total_xp         INTEGER DEFAULT 0,
  estimated_hours  REAL DEFAULT 2,
  prerequisites    JSONB DEFAULT '[]',
  tags             JSONB DEFAULT '[]',
  is_premium       BOOLEAN DEFAULT FALSE,
  order_index      INTEGER DEFAULT 0,
  published        BOOLEAN DEFAULT TRUE,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Modules ─────────────────────────────────────────────────
CREATE TABLE public.modules (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  course_id   UUID REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  title       TEXT NOT NULL,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  xp_reward   INTEGER DEFAULT 50
);

-- ─── Lessons ─────────────────────────────────────────────────
CREATE TABLE public.lessons (
  id           UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  module_id    UUID REFERENCES modules(id) ON DELETE CASCADE NOT NULL,
  title        TEXT NOT NULL,
  content      TEXT NOT NULL,
  key_concepts JSONB DEFAULT '[]',
  fun_fact     TEXT,
  type         TEXT DEFAULT 'text',
  order_index  INTEGER DEFAULT 0,
  xp_reward    INTEGER DEFAULT 25,
  read_time    INTEGER DEFAULT 5
);

-- ─── Quizzes ─────────────────────────────────────────────────
CREATE TABLE public.quizzes (
  id            UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  module_id     UUID REFERENCES modules(id) ON DELETE CASCADE NOT NULL,
  title         TEXT NOT NULL,
  description   TEXT,
  xp_reward     INTEGER DEFAULT 100,
  passing_score INTEGER DEFAULT 70
);

CREATE TABLE public.quiz_questions (
  id             UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  quiz_id        UUID REFERENCES quizzes(id) ON DELETE CASCADE NOT NULL,
  question       TEXT NOT NULL,
  type           TEXT DEFAULT 'multiple_choice',
  options        JSONB NOT NULL,
  correct_answer TEXT NOT NULL,
  explanation    TEXT,
  order_index    INTEGER DEFAULT 0
);

-- ─── User Progress ───────────────────────────────────────────
CREATE TABLE public.user_course_enrollments (
  id                  UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id             UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id           UUID REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  enrolled_at         TIMESTAMPTZ DEFAULT NOW(),
  completed_at        TIMESTAMPTZ,
  progress_percentage REAL DEFAULT 0,
  UNIQUE(user_id, course_id)
);

CREATE TABLE public.user_lesson_progress (
  id           UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id      UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id    UUID REFERENCES lessons(id) ON DELETE CASCADE NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

CREATE TABLE public.user_quiz_attempts (
  id           UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id      UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  quiz_id      UUID REFERENCES quizzes(id) ON DELETE CASCADE NOT NULL,
  score        REAL NOT NULL,
  passed       BOOLEAN DEFAULT FALSE,
  xp_earned    INTEGER DEFAULT 0,
  answers      JSONB DEFAULT '{}',
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Achievements ────────────────────────────────────────────
CREATE TABLE public.achievements (
  id              UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title           TEXT NOT NULL,
  description     TEXT,
  icon            TEXT NOT NULL,
  color           TEXT DEFAULT '#f97316',
  xp_reward       INTEGER DEFAULT 50,
  condition_type  TEXT NOT NULL,
  condition_value INTEGER DEFAULT 1,
  rarity          TEXT DEFAULT 'common' CHECK (rarity IN ('common','rare','epic','legendary'))
);

CREATE TABLE public.user_achievements (
  id             UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id        UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE NOT NULL,
  earned_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- ─── RLS Policies ────────────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.profiles FOR SELECT USING (TRUE);
CREATE POLICY "Own write" ON public.profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.courses FOR SELECT USING (published = TRUE);

ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.modules FOR SELECT USING (TRUE);

ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.lessons FOR SELECT USING (TRUE);

ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Auth read" ON public.quizzes FOR SELECT USING (auth.uid() IS NOT NULL);

ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Auth read" ON public.quiz_questions FOR SELECT USING (auth.uid() IS NOT NULL);

ALTER TABLE public.user_course_enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own read" ON public.user_course_enrollments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own write" ON public.user_course_enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own update" ON public.user_course_enrollments FOR UPDATE USING (auth.uid() = user_id);

ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own read" ON public.user_lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own write" ON public.user_lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.user_quiz_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own read" ON public.user_quiz_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own write" ON public.user_quiz_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON public.achievements FOR SELECT USING (TRUE);

ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own read" ON public.user_achievements FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own write" ON public.user_achievements FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ─── Leaderboard view ────────────────────────────────────────
CREATE OR REPLACE VIEW public.leaderboard AS
  SELECT
    p.id, p.username, p.display_name, p.avatar_color, p.xp, p.level, p.streak,
    ROW_NUMBER() OVER (ORDER BY p.xp DESC) AS rank
  FROM public.profiles p
  ORDER BY p.xp DESC;

-- ─── XP update helper ────────────────────────────────────────
CREATE OR REPLACE FUNCTION award_xp(p_user_id UUID, p_xp INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.profiles
  SET
    xp    = xp + p_xp,
    level = FLOOR((xp + p_xp) / 500) + 1,
    last_active = NOW()
  WHERE id = p_user_id;
END;
$$;

-- =============================================================
-- SEED DATA
-- =============================================================

-- ─── Achievements ────────────────────────────────────────────
INSERT INTO public.achievements (id, title, description, icon, color, xp_reward, condition_type, condition_value, rarity) VALUES
  ('a1000000-0000-0000-0000-000000000001', 'First Steps',      'Complete your first lesson',              '🌱', '#10b981', 25,  'lessons_completed',  1,  'common'),
  ('a1000000-0000-0000-0000-000000000002', 'Rock Solid',       'Complete 10 lessons',                     '🪨', '#f97316', 75,  'lessons_completed',  10, 'common'),
  ('a1000000-0000-0000-0000-000000000003', 'Deep Diver',       'Complete 25 lessons',                     '🌊', '#06b6d4', 150, 'lessons_completed',  25, 'rare'),
  ('a1000000-0000-0000-0000-000000000004', 'Scholar',          'Complete 50 lessons',                     '📚', '#8b5cf6', 300, 'lessons_completed',  50, 'epic'),
  ('a1000000-0000-0000-0000-000000000005', 'Perfect Score',    'Score 100% on any quiz',                  '⭐', '#f59e0b', 100, 'perfect_quiz',       1,  'rare'),
  ('a1000000-0000-0000-0000-000000000006', 'Quiz Master',      'Pass 10 quizzes',                         '🏆', '#f97316', 200, 'quizzes_passed',     10, 'epic'),
  ('a1000000-0000-0000-0000-000000000007', 'On a Roll',        '3-day learning streak',                   '🔥', '#ef4444', 50,  'streak',             3,  'common'),
  ('a1000000-0000-0000-0000-000000000008', 'Week Warrior',     '7-day learning streak',                   '⚡', '#f97316', 100, 'streak',             7,  'rare'),
  ('a1000000-0000-0000-0000-000000000009', 'Month Master',     '30-day learning streak',                  '🌟', '#8b5cf6', 500, 'streak',             30, 'legendary'),
  ('a1000000-0000-0000-0000-000000000010', 'Course Conqueror', 'Complete your first course',              '🎓', '#10b981', 200, 'courses_completed',  1,  'rare'),
  ('a1000000-0000-0000-0000-000000000011', 'Tectonic Titan',   'Complete the Plate Tectonics course',     '🌍', '#f97316', 250, 'course_specific',    1,  'epic'),
  ('a1000000-0000-0000-0000-000000000012', 'Ocean Explorer',   'Complete the Oceanography course',        '🐋', '#06b6d4', 250, 'course_specific',    2,  'epic'),
  ('a1000000-0000-0000-0000-000000000013', 'Vulcanologist',    'Complete the Volcanology course',         '🌋', '#ef4444', 300, 'course_specific',    3,  'epic'),
  ('a1000000-0000-0000-0000-000000000014', 'Earth Master',     'Reach Level 20',                          '👑', '#f59e0b', 1000,'level_reached',      20, 'legendary'),
  ('a1000000-0000-0000-0000-000000000015', 'Speed Learner',    'Complete 5 lessons in one day',           '⚡', '#8b5cf6', 75,  'daily_lessons',      5,  'rare');

-- ─── Courses ──────────────────────────────────────────────────
INSERT INTO public.courses (id, slug, title, description, long_description, category, difficulty, icon, color, gradient, total_xp, estimated_hours, tags, is_premium, order_index) VALUES
(
  'c1000000-0000-0000-0000-000000000001',
  'foundations-of-earth-science',
  'Foundations of Earth Science',
  'Discover the building blocks of our planet — from its layered interior to the rocks and minerals that shape its surface.',
  'Begin your geological journey with a comprehensive introduction to Earth science. You''ll explore the internal structure of our planet, learn how to identify minerals and rocks, and understand the rock cycle that has shaped Earth''s surface for billions of years. No prior knowledge required — just curiosity.',
  'geology', 'beginner', '🌍', '#f97316',
  'from-orange-500/20 to-amber-500/5',
  550, 4.5,
  '["rocks", "minerals", "earth layers", "rock cycle"]',
  FALSE, 1
),
(
  'c1000000-0000-0000-0000-000000000002',
  'plate-tectonics',
  'Dynamic Plate Tectonics',
  'Unravel the forces that move continents, build mountains, and trigger earthquakes and tsunamis across our restless planet.',
  'Plate tectonics is the grand unifying theory of Earth science. This course takes you deep into the mechanisms that drive continental drift, the formation of mountain ranges, ocean trenches, and the seismic activity that shapes our world. You''ll analyse real-world geological events through the lens of plate motion.',
  'geology', 'intermediate', '⛰️', '#f97316',
  'from-amber-500/20 to-orange-500/5',
  700, 6.0,
  '["tectonics", "earthquakes", "mountains", "volcanoes"]',
  FALSE, 2
),
(
  'c1000000-0000-0000-0000-000000000003',
  'oceanic-worlds',
  'Oceanic Worlds',
  'Plunge into Earth''s oceans — exploring currents, marine geology, deep-sea ecosystems, and the ocean''s role in climate.',
  'Covering over 70% of Earth''s surface, oceans are its most dominant feature. This course explores ocean basins, water chemistry, circulation patterns, marine ecosystems from the sunlit zone to the hadal abyss, and how the ocean drives global climate. Includes case studies on El Niño, coral bleaching, and deep-sea vents.',
  'oceanography', 'intermediate', '🌊', '#06b6d4',
  'from-cyan-500/20 to-blue-500/5',
  700, 6.5,
  '["oceans", "currents", "marine life", "tides"]',
  FALSE, 3
),
(
  'c1000000-0000-0000-0000-000000000004',
  'volcanology',
  'Volcanology & Igneous Processes',
  'Explore the fiery world of volcanoes — from magma genesis deep in the mantle to the eruptions that reshape landscapes.',
  'Volcanoes are Earth''s most dramatic geological feature. This advanced course covers magma formation and differentiation, the classification and behaviour of volcanic systems worldwide, eruption dynamics, pyroclastic flows, and the long-term effects of volcanism on climate, landscape, and life. Includes studies of Kilauea, Pinatubo, and supervolcano systems.',
  'volcanology', 'advanced', '🌋', '#ef4444',
  'from-red-500/20 to-orange-500/5',
  850, 8.0,
  '["volcanoes", "magma", "eruptions", "igneous rocks"]',
  TRUE, 4
),
(
  'c1000000-0000-0000-0000-000000000005',
  'atmospheric-science',
  'Atmospheric Science & Meteorology',
  'Decode the complex systems that drive our weather — from atmospheric layers and pressure systems to extreme weather events.',
  'Earth''s atmosphere is a thin, dynamic shell of gas that makes life possible. This course takes a rigorous look at atmospheric composition, thermodynamics, cloud physics, and the synoptic-scale systems that produce weather. Advanced topics include jet streams, cyclogenesis, mesoscale convective systems, and numerical weather prediction.',
  'meteorology', 'advanced', '⛅', '#3b82f6',
  'from-blue-500/20 to-sky-500/5',
  800, 7.5,
  '["atmosphere", "weather", "climate", "clouds"]',
  TRUE, 5
),
(
  'c1000000-0000-0000-0000-000000000006',
  'paleontology',
  'Paleontology: Life Through Deep Time',
  'Journey through 3.8 billion years of life — reading the fossil record to understand evolution, mass extinctions, and Earth''s biotic history.',
  'Paleontology bridges geology and biology in a tour through life''s extraordinary history on Earth. This course covers fossilisation processes, biostratigraphy, the major eons and eras, key evolutionary transitions, and the five mass extinction events. You''ll develop skills in reading the fossil record and connecting ancient environments to modern biodiversity.',
  'paleontology', 'advanced', '🦕', '#f59e0b',
  'from-amber-500/20 to-yellow-500/5',
  900, 9.0,
  '["fossils", "evolution", "extinction", "deep time"]',
  TRUE, 6
),
(
  'c1000000-0000-0000-0000-000000000007',
  'climate-dynamics',
  'Climate Dynamics & Earth''s Future',
  'Master the science of climate — feedbacks, tipping points, paleoclimate proxies, and evidence-based future projections.',
  'This expert-level course examines Earth''s climate system with scientific rigour. Topics span Milankovitch cycles, carbon cycle feedbacks, abrupt climate transitions, cryosphere dynamics, sea-level science, and IPCC methodologies. Designed for those who want a research-grade understanding of climate change and Earth''s future under different emissions scenarios.',
  'climatology', 'expert', '🌡️', '#10b981',
  'from-emerald-500/20 to-teal-500/5',
  1200, 12.0,
  '["climate", "greenhouse effect", "carbon cycle", "IPCC"]',
  TRUE, 7
),
(
  'c1000000-0000-0000-0000-000000000008',
  'structural-geology',
  'Structural Geology & Geodynamics',
  'Decode deformed rocks, fault systems, and the deep forces of Earth''s interior driving mountain building and basin formation.',
  'Structural geology is the discipline that reads deformation recorded in rocks to reconstruct the tectonic history of regions. This expert course covers stress and strain analysis, fold and fault mechanics, orogen evolution, and geodynamic modelling. Students will interpret geological cross-sections, stereonets, and seismic profiles.',
  'geology', 'expert', '🔬', '#8b5cf6',
  'from-purple-500/20 to-violet-500/5',
  1300, 14.0,
  '["structural geology", "faults", "folds", "orogenesis"]',
  TRUE, 8
);

-- ─── Modules (Course 1: Foundations) ─────────────────────────
INSERT INTO public.modules (id, course_id, title, description, order_index, xp_reward) VALUES
('b1010000-0000-0000-0000-000000000001', 'c1000000-0000-0000-0000-000000000001', 'Earth''s Internal Structure',    'Explore the layered interior of our planet.',                          1, 60),
('b1010000-0000-0000-0000-000000000002', 'c1000000-0000-0000-0000-000000000001', 'Minerals: The Building Blocks',  'Learn how to identify and classify Earth''s minerals.',                2, 60),
('b1010000-0000-0000-0000-000000000003', 'c1000000-0000-0000-0000-000000000001', 'Rocks & the Rock Cycle',         'Understand how rocks form, transform, and are recycled.',              3, 60);

-- ─── Modules (Course 2: Plate Tectonics) ─────────────────────
INSERT INTO public.modules (id, course_id, title, description, order_index, xp_reward) VALUES
('b2010000-0000-0000-0000-000000000001', 'c1000000-0000-0000-0000-000000000002', 'Continental Drift & Seafloor Spreading', 'The evidence and mechanisms behind moving plates.', 1, 70),
('b2010000-0000-0000-0000-000000000002', 'c1000000-0000-0000-0000-000000000002', 'Plate Boundaries & Tectonics',           'Divergent, convergent, and transform boundaries.',  2, 70),
('b2010000-0000-0000-0000-000000000003', 'c1000000-0000-0000-0000-000000000002', 'Earthquakes & Seismology',               'How seismic waves reveal Earth''s structure.',       3, 70);

-- ─── Modules (Course 3: Oceanic Worlds) ──────────────────────
INSERT INTO public.modules (id, course_id, title, description, order_index, xp_reward) VALUES
('b3010000-0000-0000-0000-000000000001', 'c1000000-0000-0000-0000-000000000003', 'Ocean Basins & Properties',  'Geography and chemistry of the world''s oceans.', 1, 70),
('b3010000-0000-0000-0000-000000000002', 'c1000000-0000-0000-0000-000000000003', 'Ocean Circulation',          'Gyres, thermohaline circulation, and El Niño.',   2, 70),
('b3010000-0000-0000-0000-000000000003', 'c1000000-0000-0000-0000-000000000003', 'Deep Sea Environments',      'Life and geology at the ocean floor.',             3, 70);

-- ─── Lessons (Module 1.1 — Earth's Internal Structure) ────────
INSERT INTO public.lessons (id, module_id, title, content, key_concepts, fun_fact, order_index, xp_reward, read_time) VALUES
(
  'd1010100-0000-0000-0000-000000000001',
  'b1010000-0000-0000-0000-000000000001',
  'Journey to the Centre of the Earth',
  '## What Lies Beneath Our Feet?

Earth is not a uniform sphere of rock. Like a hard-boiled egg, it has distinct concentric layers — each with unique composition, temperature, and physical properties.

### The Four Main Layers

**1. The Crust**
The crust is Earth''s outermost shell and the layer we live on. There are two types:
- **Continental crust**: 30–70 km thick, composed mainly of granite-rich rocks (silicon and aluminium — *sial*)
- **Oceanic crust**: only 5–10 km thick, denser, composed of basalt-rich rocks (silicon and magnesium — *sima*)

**2. The Mantle**
Extending from the base of the crust to ~2,900 km depth, the mantle makes up about 84% of Earth''s volume. It is solid rock, yet behaves plastically over geological time — flowing like an extremely viscous fluid.

The upper mantle contains the **asthenosphere** (~100–700 km deep), a partially molten, ductile layer critical for plate tectonic movement.

**3. The Outer Core**
From 2,900 to 5,100 km depth, the outer core is liquid iron-nickel alloy. Electric currents flowing through this molten metal generate **Earth''s magnetic field** — our invisible shield against solar wind.

**4. The Inner Core**
Despite temperatures exceeding 5,400°C, the inner core (5,100–6,370 km) is **solid iron-nickel** compressed by immense pressure (~3.6 million atmospheres). It rotates slightly faster than the rest of the Earth — about 0.3–0.5° per year more.

### How Do We Know?

We cannot drill to these depths. Our knowledge comes from **seismology** — studying how seismic waves (P-waves and S-waves) travel through Earth''s interior. Key observations:
- S-waves (shear waves) cannot travel through liquids — they disappear at the core-mantle boundary, revealing the liquid outer core
- P-wave shadow zones help map the inner/outer core boundary',
  '["crust", "mantle", "outer core", "inner core", "seismology", "asthenosphere", "lithosphere"]',
  'If you could travel at highway speed (100 km/h) to Earth''s centre, the journey would take 64 days — and you''d be vaporised long before you arrived.',
  1, 25, 7
),
(
  'd1010100-0000-0000-0000-000000000002',
  'b1010000-0000-0000-0000-000000000001',
  'The Lithosphere & Asthenosphere',
  '## Earth''s Moving Skin

### The Lithosphere
The **lithosphere** — from the Greek *lithos* (stone) — is Earth''s rigid outer shell comprising both the crust and the uppermost, cooler part of the mantle. It extends to a depth of roughly 100 km under the oceans and up to 200 km under old continental cratons.

The lithosphere is broken into tectonic plates — the foundation of plate tectonics theory.

### The Asthenosphere
Directly below the lithosphere lies the **asthenosphere** (from *asthenes*, meaning weak). Despite being solid rock, it deforms plastically under long-term stress due to high temperature (1,300°C) and moderate pressure conditions that keep it near its melting point.

This "plastic" behaviour allows the rigid lithospheric plates to glide over the asthenosphere — like rafts on a sea of slowly flowing rock.

### Isostasy: Earth''s Buoyancy System
Isostasy describes the gravitational equilibrium between the lithosphere and asthenosphere. Just as an iceberg floats with most of its mass below water, continental crust *floats* on the denser mantle.

When glaciers melt (reducing the weight on crust), the land **rebounds upward** — a process called **post-glacial rebound**. Scandinavia is still rising at ~1 cm/year since the last ice age ended 10,000 years ago.',
  '["lithosphere", "asthenosphere", "isostasy", "post-glacial rebound", "tectonic plates"]',
  'Scandinavia is rising from the sea at nearly 1 cm per year — a slow-motion rebound from the weight of ice sheets that melted 10,000 years ago.',
  2, 25, 6
);

-- ─── Lessons (Module 1.2 — Minerals) ─────────────────────────
INSERT INTO public.lessons (id, module_id, title, content, key_concepts, fun_fact, order_index, xp_reward, read_time) VALUES
(
  'd1020100-0000-0000-0000-000000000001',
  'b1010000-0000-0000-0000-000000000002',
  'What is a Mineral?',
  '## Defining Minerals

A **mineral** is a naturally occurring, inorganic, solid substance with a definite chemical composition and an ordered crystalline structure. Every one of these criteria must be met:

| Criterion | Meaning |
|---|---|
| Naturally occurring | Formed by geological processes, not manufactured |
| Inorganic | Not produced by living organisms (coal is not a mineral) |
| Solid | Not liquid (mercury) or gas |
| Definite composition | Consistent chemical formula (e.g., quartz = SiO₂) |
| Crystalline structure | Atoms arranged in a repeating 3-D lattice |

### The Silicate Framework
Over 90% of Earth''s crust consists of **silicate minerals** — built around silicon-oxygen tetrahedra (SiO₄). Major silicate groups include:
- **Feldspars** (most abundant mineral group): potassium feldspar (KAlSi₃O₈), plagioclase
- **Quartz**: pure SiO₂, extremely resistant to weathering
- **Micas**: biotite and muscovite — sheet silicates with perfect cleavage
- **Pyroxenes and amphiboles**: chain silicates found in mafic rocks
- **Olivine**: (Mg,Fe)₂SiO₄ — dominant mineral in the upper mantle

### Identifying Minerals
Geologists identify minerals using physical properties:
- **Hardness** (Mohs scale 1–10): talc = 1, diamond = 10
- **Cleavage/fracture**: how a mineral breaks
- **Lustre**: metallic, vitreous, resinous
- **Colour and streak**: true colour vs pigment colour
- **Crystal system**: cubic, hexagonal, orthorhombic, etc.',
  '["mineral", "silicate", "Mohs scale", "crystalline structure", "feldspar", "quartz"]',
  'Diamond is the hardest natural substance on Earth (Mohs 10), but it is not the toughest — it can shatter when struck. Hardness ≠ toughness.',
  1, 25, 8
);

-- ─── Quizzes ──────────────────────────────────────────────────
INSERT INTO public.quizzes (id, module_id, title, description, xp_reward, passing_score) VALUES
('e1010000-0000-0000-0000-000000000001', 'b1010000-0000-0000-0000-000000000001', 'Earth''s Internal Structure Quiz', 'Test your knowledge of Earth''s layers and properties.', 100, 70),
('e1020000-0000-0000-0000-000000000001', 'b1010000-0000-0000-0000-000000000002', 'Minerals Quiz', 'Identify and classify common minerals.', 100, 70),
('e2010000-0000-0000-0000-000000000001', 'b2010000-0000-0000-0000-000000000001', 'Continental Drift Quiz', 'Assess your understanding of plate motion theory.', 120, 70),
('e3010000-0000-0000-0000-000000000001', 'b3010000-0000-0000-0000-000000000001', 'Ocean Basins Quiz', 'Test your ocean science fundamentals.', 120, 70);

-- ─── Quiz Questions (Earth''s Structure) ─────────────────────
INSERT INTO public.quiz_questions (quiz_id, question, options, correct_answer, explanation, order_index) VALUES
(
  'e1010000-0000-0000-0000-000000000001',
  'Which layer of the Earth is responsible for generating the planet''s magnetic field?',
  '["The solid inner core", "The liquid outer core", "The asthenosphere", "The continental crust"]',
  'The liquid outer core',
  'Electric currents in the liquid iron-nickel outer core generate Earth''s magnetic field through the geodynamo process.',
  1
),
(
  'e1010000-0000-0000-0000-000000000001',
  'What is the approximate depth of the boundary between Earth''s mantle and outer core?',
  '["~670 km", "~1,400 km", "~2,900 km", "~5,100 km"]',
  '~2,900 km',
  'The core-mantle boundary (CMB) lies approximately 2,900 km below Earth''s surface and is one of the most dramatic compositional changes in the planet.',
  2
),
(
  'e1010000-0000-0000-0000-000000000001',
  'S-waves cannot travel through the outer core. What does this tell us?',
  '["The outer core is very hot", "The outer core is liquid", "The outer core is made of iron", "The outer core rotates fast"]',
  'The outer core is liquid',
  'Shear waves (S-waves) can only propagate through solid materials. Their absence in the outer core shadow zone proved it is liquid.',
  3
),
(
  'e1010000-0000-0000-0000-000000000001',
  'What is the term for the rigid outer shell comprising Earth''s crust and uppermost mantle?',
  '["Asthenosphere", "Mesosphere", "Lithosphere", "Hydrosphere"]',
  'Lithosphere',
  'The lithosphere is Earth''s rigid outer shell, comprising the crust and the uppermost brittle mantle, typically 100–200 km thick.',
  4
),
(
  'e1010000-0000-0000-0000-000000000001',
  'Oceanic crust is generally __ than continental crust.',
  '["Thicker and less dense", "Thinner and less dense", "Thicker and denser", "Thinner and denser"]',
  'Thinner and denser',
  'Oceanic crust is ~5–10 km thick and composed of denser basaltic rock (density ~3.0 g/cm³), while continental crust is 30–70 km thick and granitic (~2.7 g/cm³).',
  5
);

-- ─── Quiz Questions (Minerals) ────────────────────────────────
INSERT INTO public.quiz_questions (quiz_id, question, options, correct_answer, explanation, order_index) VALUES
(
  'e1020000-0000-0000-0000-000000000001',
  'What mineral is rated 10 on the Mohs hardness scale?',
  '["Corundum", "Quartz", "Feldspar", "Diamond"]',
  'Diamond',
  'Diamond is the hardest natural mineral at Mohs 10. It is pure carbon in a cubic crystal structure, making it extremely resistant to scratching.',
  1
),
(
  'e1020000-0000-0000-0000-000000000001',
  'Which mineral group makes up over 90% of Earth''s crust?',
  '["Carbonates", "Oxides", "Silicates", "Sulfides"]',
  'Silicates',
  'Silicates — built around silicon-oxygen (SiO₄) tetrahedra — are by far the most abundant mineral group, comprising over 90% of Earth''s crust.',
  2
),
(
  'e1020000-0000-0000-0000-000000000001',
  'A mineral''s streak is the colour of its __ .',
  '["Crystal face in sunlight", "Powdered form on an unglazed porcelain plate", "Internal cleavage plane", "Surface oxidation layer"]',
  'Powdered form on an unglazed porcelain plate',
  'Streak (the colour of a mineral''s powder) is often more diagnostic than surface colour, which can be altered by impurities. Hematite has a red-brown streak even when metallic silver in appearance.',
  3
),
(
  'e1020000-0000-0000-0000-000000000001',
  'What chemical formula represents the mineral quartz?',
  '["CaCO₃", "FeS₂", "SiO₂", "Al₂O₃"]',
  'SiO₂',
  'Quartz is silicon dioxide (SiO₂), one of the most common minerals in Earth''s crust, found in granite, sandstone, and many metamorphic rocks.',
  4
),
(
  'e1020000-0000-0000-0000-000000000001',
  'Olivine, a major mineral in the upper mantle, belongs to which mineral class?',
  '["Carbonate", "Oxide", "Sulfate", "Silicate"]',
  'Silicate',
  'Olivine ((Mg,Fe)₂SiO₄) is a nesosilicate (isolated SiO₄ tetrahedra) and is the most abundant mineral in Earth''s upper mantle.',
  5
);
