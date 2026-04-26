import type { Course, Module, Lesson, QuizQuestion } from '@/types'

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1000000-0000-0000-0000-000000000001',
    slug: 'foundations-of-earth-science',
    title: 'Foundations of Earth Science',
    description: 'Discover the building blocks of our planet — from its layered interior to the rocks and minerals that shape its surface.',
    category: 'geology',
    difficulty: 'beginner',
    icon: '🌍',
    color: '#f97316',
    gradient: 'from-orange-500/20 to-amber-500/5',
    total_xp: 550,
    estimated_hours: 4.5,
    tags: ['rocks', 'minerals', 'earth layers', 'rock cycle'],
    is_premium: false,
    order_index: 1,
    module_count: 3,
    lesson_count: 8,
  },
  {
    id: 'c1000000-0000-0000-0000-000000000002',
    slug: 'plate-tectonics',
    title: 'Dynamic Plate Tectonics',
    description: 'Unravel the forces that move continents, build mountains, and trigger earthquakes across our restless planet.',
    category: 'geology',
    difficulty: 'intermediate',
    icon: '⛰️',
    color: '#f97316',
    gradient: 'from-amber-500/20 to-orange-500/5',
    total_xp: 700,
    estimated_hours: 6.0,
    tags: ['tectonics', 'earthquakes', 'mountains'],
    is_premium: false,
    order_index: 2,
    module_count: 3,
    lesson_count: 9,
  },
  {
    id: 'c1000000-0000-0000-0000-000000000003',
    slug: 'oceanic-worlds',
    title: 'Oceanic Worlds',
    description: 'Plunge into Earth\'s oceans — exploring currents, marine geology, deep-sea ecosystems, and the ocean\'s role in climate.',
    category: 'oceanography',
    difficulty: 'intermediate',
    icon: '🌊',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-blue-500/5',
    total_xp: 700,
    estimated_hours: 6.5,
    tags: ['oceans', 'currents', 'marine life'],
    is_premium: false,
    order_index: 3,
    module_count: 3,
    lesson_count: 9,
  },
  {
    id: 'c1000000-0000-0000-0000-000000000004',
    slug: 'volcanology',
    title: 'Volcanology & Igneous Processes',
    description: 'Explore the fiery world of volcanoes — from magma genesis deep in the mantle to eruptions that reshape landscapes.',
    category: 'volcanology',
    difficulty: 'advanced',
    icon: '🌋',
    color: '#ef4444',
    gradient: 'from-red-500/20 to-orange-500/5',
    total_xp: 850,
    estimated_hours: 8.0,
    tags: ['volcanoes', 'magma', 'eruptions'],
    is_premium: true,
    order_index: 4,
    module_count: 3,
    lesson_count: 9,
  },
  {
    id: 'c1000000-0000-0000-0000-000000000005',
    slug: 'atmospheric-science',
    title: 'Atmospheric Science & Meteorology',
    description: 'Decode the complex systems that drive our weather — from atmospheric layers and pressure systems to extreme events.',
    category: 'meteorology',
    difficulty: 'advanced',
    icon: '⛅',
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-sky-500/5',
    total_xp: 800,
    estimated_hours: 7.5,
    tags: ['atmosphere', 'weather', 'climate'],
    is_premium: true,
    order_index: 5,
    module_count: 3,
    lesson_count: 9,
  },
  {
    id: 'c1000000-0000-0000-0000-000000000006',
    slug: 'paleontology',
    title: 'Paleontology: Life Through Deep Time',
    description: 'Journey through 3.8 billion years of life — reading the fossil record to understand evolution and mass extinctions.',
    category: 'paleontology',
    difficulty: 'advanced',
    icon: '🦕',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-yellow-500/5',
    total_xp: 900,
    estimated_hours: 9.0,
    tags: ['fossils', 'evolution', 'extinction'],
    is_premium: true,
    order_index: 6,
    module_count: 3,
    lesson_count: 9,
  },
  {
    id: 'c1000000-0000-0000-0000-000000000007',
    slug: 'climate-dynamics',
    title: 'Climate Dynamics & Earth\'s Future',
    description: 'Master the science of climate — feedbacks, tipping points, paleoclimate proxies, and evidence-based projections.',
    category: 'climatology',
    difficulty: 'expert',
    icon: '🌡️',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-500/5',
    total_xp: 1200,
    estimated_hours: 12.0,
    tags: ['climate', 'greenhouse effect', 'carbon cycle'],
    is_premium: true,
    order_index: 7,
    module_count: 4,
    lesson_count: 12,
  },
  {
    id: 'c1000000-0000-0000-0000-000000000008',
    slug: 'structural-geology',
    title: 'Structural Geology & Geodynamics',
    description: 'Decode deformed rocks, fault systems, and the deep forces driving mountain building and basin formation.',
    category: 'geology',
    difficulty: 'expert',
    icon: '🔬',
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 to-violet-500/5',
    total_xp: 1300,
    estimated_hours: 14.0,
    tags: ['structural geology', 'faults', 'folds'],
    is_premium: true,
    order_index: 8,
    module_count: 4,
    lesson_count: 12,
  },
]

export const MOCK_MODULES: Record<string, Module[]> = {
  'c1000000-0000-0000-0000-000000000001': [
    { id: 'b1010000-0000-0000-0000-000000000001', course_id: 'c1000000-0000-0000-0000-000000000001', title: "Earth's Internal Structure", description: "Explore the layered interior of our planet.", order_index: 1, xp_reward: 60 },
    { id: 'b1010000-0000-0000-0000-000000000002', course_id: 'c1000000-0000-0000-0000-000000000001', title: "Minerals: The Building Blocks", description: "Learn to identify and classify Earth's minerals.", order_index: 2, xp_reward: 60 },
    { id: 'b1010000-0000-0000-0000-000000000003', course_id: 'c1000000-0000-0000-0000-000000000001', title: "Rocks & the Rock Cycle", description: "Understand how rocks form, transform, and are recycled.", order_index: 3, xp_reward: 60 },
  ],
}

export const MOCK_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'qq1',
    quiz_id: 'e1010000-0000-0000-0000-000000000001',
    question: "Which layer of the Earth is responsible for generating the planet's magnetic field?",
    options: ['The solid inner core', 'The liquid outer core', 'The asthenosphere', 'The continental crust'],
    correct_answer: 'The liquid outer core',
    explanation: 'Electric currents in the liquid iron-nickel outer core generate Earth\'s magnetic field through the geodynamo process.',
    order_index: 1,
  },
  {
    id: 'qq2',
    quiz_id: 'e1010000-0000-0000-0000-000000000001',
    question: "What is the approximate depth of the core-mantle boundary?",
    options: ['~670 km', '~1,400 km', '~2,900 km', '~5,100 km'],
    correct_answer: '~2,900 km',
    explanation: 'The core-mantle boundary lies approximately 2,900 km below Earth\'s surface.',
    order_index: 2,
  },
  {
    id: 'qq3',
    quiz_id: 'e1010000-0000-0000-0000-000000000001',
    question: "S-waves cannot travel through the outer core. What does this tell us?",
    options: ['The outer core is very hot', 'The outer core is liquid', 'The outer core is made of iron', 'The outer core rotates fast'],
    correct_answer: 'The outer core is liquid',
    explanation: 'Shear waves (S-waves) can only propagate through solid materials. Their absence proves the outer core is liquid.',
    order_index: 3,
  },
  {
    id: 'qq4',
    quiz_id: 'e1010000-0000-0000-0000-000000000001',
    question: "What is the rigid outer shell comprising Earth's crust and uppermost mantle called?",
    options: ['Asthenosphere', 'Mesosphere', 'Lithosphere', 'Hydrosphere'],
    correct_answer: 'Lithosphere',
    explanation: 'The lithosphere is Earth\'s rigid outer shell, comprising the crust and the uppermost brittle mantle.',
    order_index: 4,
  },
  {
    id: 'qq5',
    quiz_id: 'e1010000-0000-0000-0000-000000000001',
    question: "Compared to continental crust, oceanic crust is generally:",
    options: ['Thicker and less dense', 'Thinner and less dense', 'Thicker and denser', 'Thinner and denser'],
    correct_answer: 'Thinner and denser',
    explanation: 'Oceanic crust (~5–10 km thick, ~3.0 g/cm³) is thinner and denser than continental crust (30–70 km thick, ~2.7 g/cm³).',
    order_index: 5,
  },
]

export const MOCK_LESSON: Lesson = {
  id: 'd1010100-0000-0000-0000-000000000001',
  module_id: 'b1010000-0000-0000-0000-000000000001',
  title: 'Journey to the Centre of the Earth',
  content: `## What Lies Beneath Our Feet?

Earth is not a uniform sphere of rock. Like a hard-boiled egg, it has distinct concentric layers — each with unique composition, temperature, and physical properties.

### The Four Main Layers

**1. The Crust**
The crust is Earth's outermost shell and the layer we live on. There are two types:
- **Continental crust**: 30–70 km thick, composed mainly of granite-rich rocks
- **Oceanic crust**: only 5–10 km thick, denser, composed of basalt-rich rocks

**2. The Mantle**
Extending to ~2,900 km depth, the mantle makes up about 84% of Earth's volume. The **asthenosphere** (~100–700 km deep) is a partially molten, ductile layer critical for plate tectonic movement.

**3. The Outer Core**
From 2,900 to 5,100 km depth, the outer core is liquid iron-nickel alloy. Electric currents generate **Earth's magnetic field** — our invisible shield against solar wind.

**4. The Inner Core**
Despite temperatures exceeding 5,400°C, the inner core is **solid iron-nickel** compressed by immense pressure (~3.6 million atmospheres).

### How Do We Know?
Our knowledge comes from **seismology** — studying how seismic waves travel through Earth's interior. S-waves cannot travel through liquids, revealing the liquid outer core.`,
  key_concepts: ['crust', 'mantle', 'outer core', 'inner core', 'seismology', 'asthenosphere', 'lithosphere'],
  fun_fact: "If you could travel at 100 km/h to Earth's centre, the journey would take 64 days — and you'd be vaporised long before you arrived.",
  type: 'text',
  order_index: 1,
  xp_reward: 25,
  read_time: 7,
}

export const MOCK_LEADERBOARD = [
  { id: '1', username: 'geo_marcus', display_name: 'Marcus T.', avatar_color: '#06b6d4', xp: 8420, level: 17, streak: 23, rank: 1 },
  { id: '2', username: 'volcanic_vera', display_name: 'Vera K.', avatar_color: '#ef4444', xp: 7850, level: 16, streak: 15, rank: 2 },
  { id: '3', username: 'ocean_elena', display_name: 'Elena R.', avatar_color: '#3b82f6', xp: 7200, level: 15, streak: 42, rank: 3 },
  { id: '4', username: 'seismic_sam', display_name: 'Sam P.', avatar_color: '#f97316', xp: 6750, level: 14, streak: 8, rank: 4 },
  { id: '5', username: 'paleo_priya', display_name: 'Priya M.', avatar_color: '#8b5cf6', xp: 6100, level: 13, streak: 19, rank: 5 },
  { id: '6', username: 'strata_leo', display_name: 'Leo B.', avatar_color: '#10b981', xp: 5800, level: 12, streak: 11, rank: 6 },
  { id: '7', username: 'tectonic_zara', display_name: 'Zara H.', avatar_color: '#f59e0b', xp: 5200, level: 11, streak: 6, rank: 7 },
  { id: '8', username: 'mineral_max', display_name: 'Max D.', avatar_color: '#06b6d4', xp: 4700, level: 10, streak: 3, rank: 8 },
]
