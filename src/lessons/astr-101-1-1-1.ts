import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'astr-101-1-1-1',
  title: 'The Nebular Hypothesis and Formation of the Solar System',
  description: 'How a cloud of interstellar gas and dust collapsed under gravity to form the Sun and its family of planets 4.6 billion years ago.',
  track: 'ast',
  trackName: 'Planetary Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Telescope,
  color: BRAND.amethyst,
  cards: [
    {
      title: 'The Solar Nebula and Collapse',
      body: `The Solar System formed ~4.567 billion years ago from a rotating cloud of gas and dust known as the **solar nebula** — a dense region within a giant molecular cloud (GMC) roughly 99 % hydrogen and helium by mass, with ~1 % heavier elements forged in earlier generations of stars.\n\nCollapse was likely triggered by a nearby supernova shockwave, which compressed the nebula past the Jeans mass threshold — the critical mass at which self-gravity exceeds thermal and magnetic pressure, causing runaway collapse. Evidence for this trigger comes from **short-lived radionuclides**: the decay products of ²⁶Al (half-life 0.7 Myr) and ⁶⁰Fe found in meteorites at concentrations too high to have accumulated over time without a contemporaneous supernova injection.\n\nAs the cloud collapsed, conservation of angular momentum caused it to spin faster and flatten into a **protoplanetary disc** (proplyd) — a rotating flattened structure with the proto-Sun accumulating mass at the centre. The disc's midplane provided a dense, shielded environment where solid particles could grow. Proplyds are directly observed around young T Tauri stars in the Orion Nebula via Hubble Space Telescope imaging, confirming that this early stage is common in star formation.`,
      icon: Telescope,
      color: BRAND.amethyst,
    },
    {
      title: 'From Dust Grains to Planetesimals',
      body: `Planet formation proceeds through a hierarchy of size scales, each dominated by different physical processes:\n\n**Dust grains (μm–mm):** In the cold disc midplane, icy and rocky grains collide and stick via van der Waals and electrostatic forces, forming fluffy aggregates. The **snow line** (roughly 2–3 AU in the early Solar System) marks the temperature below which water ice is stable; beyond it, solid material is ~4× more abundant, enabling faster growth.\n\n**Pebbles (cm–m):** The "metre-sized barrier" is a long-standing problem: decimetres- to metre-sized objects drift rapidly inward through aerodynamic gas drag faster than they can grow. Two mechanisms overcome this: **pebble accretion** (where planetesimals sweep up pebble-sized drift particles efficiently due to their extended gravitational cross-section) and **streaming instability** (where pebbles clump in dense filaments and gravitationally collapse directly into 100-km planetesimals, bypassing the barrier entirely).\n\n**Planetesimals (km):** Once ~1–100 km in size, gravity dominates over collisional strength. Gravitational focusing amplifies collision cross-sections, entering a **runaway accretion** phase in which the largest bodies grow disproportionately fast. The timescale to form Moon-sized planetary embryos ("oligarchs") in the inner disc is ~10⁵–10⁶ years.`,
      icon: Globe,
      color: BRAND.amethyst,
    },
    {
      title: 'The Disc\'s Chemistry and the Snow Line',
      body: `Temperature decreases radially outward in the protoplanetary disc, creating distinct condensation zones that determine what solid materials are available for planet construction:\n\n**Inner disc (<700 K):** Only refractory materials condense — iron-nickel metal, silicates (olivine, pyroxene), calcium-aluminium-rich inclusions (CAIs). These are the building blocks of the terrestrial planets. CAIs are the oldest known Solar System solids (4.5673 Ga, dated by Pb-Pb chronometry) and serve as the t=0 reference for Solar System chronology.\n\n**Snow line (~150–170 K, ~2–3 AU):** Water ice becomes stable, dramatically increasing solid surface density. Beyond the snow line, worlds can grow cores large enough to gravitationally capture hydrogen and helium gas — explaining why giant planets form preferentially beyond ~3–4 AU.\n\n**Outer disc (<50 K):** CO, N₂, CH₄, and noble gas ices condense. This region contributes to comets and outer Solar System bodies.\n\nThe chemical diversity of meteorites preserves this zoning: **carbonaceous chondrites** (formed beyond the snow line) contain abundant hydrated silicates and organics, while **ordinary chondrites** (formed closer to the Sun) are drier and more reduced. **Chondrules** — mm-scale spherules of rapidly solidified melt scattered through chondrites — record brief (<minutes) heating events, possibly from nebular shocks or lightning, that are still not fully understood.`,
      icon: Wind,
      color: BRAND.amethyst,
    },
  ],
  quiz: [
    {
      question: 'Meteorite studies show elevated concentrations of decay products from ²⁶Al (half-life 0.7 Myr) in calcium-aluminium-rich inclusions. What does this evidence suggest about Solar System formation?',
      options: [
        'A nearby supernova injected freshly synthesised ²⁶Al into the solar nebula shortly before or during collapse, providing both a formation trigger and a high-resolution chronometer',
        'The Sun itself synthesised ²⁶Al in its core and distributed it outward through the solar wind during the T Tauri phase',
        'All molecular clouds contain uniform ²⁶Al from background galactic nucleosynthesis at the observed concentrations',
        'The ²⁶Al formed by spallation reactions as cosmic rays irradiated the proto-solar disc over billions of years',
      ],
      correctIndex: 0,
      explain: '²⁶Al has such a short half-life (0.7 Myr) that any produced before Solar System formation would have decayed away. The only explanation for the high concentrations found in CAIs — the oldest Solar System solids — is that a supernova recently injected ²⁶Al shortly before or during nebular collapse. This also makes ²⁶Al-²⁶Mg a powerful chronometer for early Solar System events.',
    },
    {
      question: 'The "streaming instability" was proposed to explain how planetesimals form. What specific problem in the standard incremental growth model does it solve?',
      options: [
        'The metre-sized barrier: objects of ~0.1–10 m drift inward too rapidly through gas drag to accumulate into larger bodies, so streaming instability provides a direct gravitational collapse pathway from pebbles to ~100-km planetesimals',
        'The dust-grain sticking problem: micron-sized grains repel each other electrostatically, so streaming instability provides the energy to overcome electrostatic barriers',
        'The runaway accretion problem: planetesimals grow too fast and consume the disc before planets form, so streaming instability slows accretion to the observed timescale',
        'The snow line problem: icy pebbles inside the snow line cannot survive long enough to contribute to terrestrial planet formation',
      ],
      correctIndex: 0,
      explain: 'The metre-sized barrier arises because aerodynamic gas drag causes metre-scale objects to spiral inward on ~100-year timescales — too fast for further growth to occur. Streaming instability bypasses this by causing pebble-sized particles to spontaneously concentrate in dense filaments through aerodynamic interactions, then gravitationally collapse directly into ~100-km-class planetesimals that are immune to drift.',
    },
    {
      question: 'The snow line in the early Solar System controlled where giant planets could form. What is the primary reason giant planets are found beyond ~3–4 AU rather than in the inner Solar System?',
      options: [
        'Beyond the snow line, water ice greatly increases solid surface density, allowing cores to grow massive enough (~10 Earth masses) to gravitationally capture hydrogen and helium gas before the disc disperses',
        'The inner disc is too hot for any solids to condense, so terrestrial planets form instead because no ices are available to build large cores',
        'Giant planet formation requires the absence of a magnetic field, which only exists in the outer disc beyond the reach of the T Tauri stellar wind',
        'Rocky planetesimals in the inner disc are too dense to reach escape velocity and accrete gas, while icy outer planetesimals are less dense and can expand to capture gas envelopes',
      ],
      correctIndex: 0,
      explain: 'Core accretion theory requires two conditions: a solid core of ~10 Earth masses to trigger runaway gas accretion, and a gas disc that has not yet dispersed. Beyond the snow line, ice roughly quadruples solid surface density, accelerating core growth. Cores that reach ~10 M⊕ before the disc disperses (~1–10 Myr) can capture their gaseous envelopes. Inside the snow line, cores grow more slowly and the disc disperses before they become massive enough.',
    },
  ],
}

export default lesson
