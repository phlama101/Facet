import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'astr-101-1-1-2',
  title: 'Differentiation, Accretion, and the Late Heavy Bombardment',
  description: 'How planets separated into layered interiors, how the Moon formed, and the violent episode of impacts that reshaped the inner Solar System roughly 600–800 million years after formation.',
  track: 'ast',
  trackName: 'Planetary Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Globe,
  color: BRAND.amethyst,
  cards: [
    {
      title: 'Planetary Differentiation and Core Formation',
      body: `When a planet accretes enough mass, the energy released by infalling material and the decay of short-lived radionuclides (especially ²⁶Al) raises interior temperatures above the **iron melting point** (~1,200–1,500 °C at relevant pressures). Once iron melts, its high density (7,900 kg/m³ vs ~3,000 kg/m³ for silicate) causes it to sink through a partially molten silicate **magma ocean**, segregating into a metallic core — a process called **differentiation**.\n\nDifferentiation has profound consequences:\n1. **Siderophile element depletion:** Iron-loving elements (Ni, Co, Ir, Pt, Au) are stripped from the mantle as iron sinks. Earth's upper mantle contains ~50× more platinum-group elements (PGEs) than differentiation models predict — the **late veneer hypothesis** proposes that a small fraction of chondritic material was accreted after core formation, adding the observed PGE excess.\n2. **Core structure:** Earth's core has a liquid outer core (convecting, generating the geomagnetic field) and a solid inner core (solidifying over geologic time as the planet cools). Mars and the Moon have largely solidified cores, explaining their weak or absent dipole fields.\n3. **Radiometric dating of differentiation:** The Hf-W system (¹⁸²Hf → ¹⁸²W, t½ = 9 Myr) places Earth's core formation within ~30 Myr of Solar System formation.`,
      icon: Globe,
      color: BRAND.amethyst,
    },
    {
      title: 'The Giant Impact and Formation of the Moon',
      body: `The leading hypothesis for lunar origin is the **Giant Impact (Theia hypothesis):** approximately 50–100 Myr after Solar System formation, a Mars-sized protoplanet (Theia) collided with the proto-Earth at a glancing angle. The impact vaporised and ejected a large mass of material into Earth orbit, which rapidly coalesced into the Moon.\n\nEvidence supporting the Giant Impact:\n• **Earth-Moon isotopic similarity:** Apollo samples show that Earth and Moon share near-identical oxygen, titanium, silicon, and chromium isotope ratios — unlike nearly all meteorite classes. A glancing impact would have mixed Earth and Theia material thoroughly.\n• **Lunar iron depletion:** The Moon has a small core (~20 % by mass vs ~30 % for Earth), consistent with the impactor's iron having already differentiated into a core and remaining bound to Earth after impact.\n• **Angular momentum:** The Earth-Moon system's total angular momentum matches simulations of high-energy oblique impacts.\n• **Volatile depletion:** The Moon is strongly depleted in volatile elements (K, Na, water), consistent with the extreme temperatures (~4,000 K) of the impact plume.\n\nRemaining puzzles include the near-perfect isotopic match between Earth and Moon (suggesting either the impactor had Earth-like composition, or post-impact equilibration homogenised the reservoir).`,
      icon: Telescope,
      color: BRAND.amethyst,
    },
    {
      title: 'The Late Heavy Bombardment',
      body: `Lunar samples returned by Apollo missions (1969–1972) showed a clustering of impact-reset ages between ~3.8–4.1 Ga — far too young to represent the tail end of normal accretion. This observation, combined with the high density of lunar craters, led to the **Late Heavy Bombardment (LHB)** hypothesis: a cataclysmic spike in impact rate ~600–700 Myr after Solar System formation.\n\nThe **Nice model** (named after the Côte d'Azur Observatory) provides a dynamical explanation: gravitational interactions between Jupiter and Saturn caused them to cross a mutual orbital resonance, destabilising the orbits of Uranus and Neptune and scattering a vast reservoir of outer Solar System bodies inward. This resonance crossing sent a flood of icy planetesimals (and Kuiper Belt objects) into the inner Solar System, producing the LHB.\n\n**Biological significance:** The LHB ended just before the earliest evidence for life on Earth (~3.7–4.0 Ga). Whether the bombardment repeatedly sterilised early life (making Earth's life a rare survivor) or delivered water and organics that helped initiate life is debated. Deep-sea hydrothermal vent communities might have survived as refugia.\n\n**Revision of the LHB:** More recent crater chronology work suggests the apparent spike may partly reflect a statistical bias — most datable craters on the Moon cluster in one or two large impact basins (Imbrium, Serenitatis) that reset the radiometric clock widely. The true bombardment history may have been a more gradual decline from the end of accretion.`,
      icon: Wind,
      color: BRAND.amethyst,
    },
  ],
  quiz: [
    {
      question: 'Earth\'s upper mantle contains ~50× more platinum-group elements (PGEs) than expected after iron differentiated into the core. The late veneer hypothesis explains this by proposing:',
      options: [
        'A small fraction of chondritic material (comets, asteroids) accreted after core formation, adding PGEs to the mantle before they could be stripped into the core',
        'PGEs are incompatible with iron and were rejected from the core as it solidified, re-enriching the mantle over time',
        'Earth\'s mantle partially re-melted after core formation, allowing PGEs to remigrate upward from the core-mantle boundary',
        'The Hf-W chronometer indicates core formation was incomplete, leaving PGEs partially in the mantle',
      ],
      correctIndex: 0,
      explain: 'If PGEs arrived after the iron core had segregated, they had no iron phase to partition into and instead distributed through the silicate mantle. The late veneer is estimated at ~0.5 % of Earth\'s mass — enough to explain the observed PGE excess. This timing also coincides with delivery of water and carbon to Earth, making the late veneer relevant to habitability as well.',
    },
    {
      question: 'The Giant Impact hypothesis for Moon formation is strongly supported by the near-identical oxygen isotope ratios of Earth and Moon. Why is isotopic similarity between two bodies unusual, and what does it reveal?',
      options: [
        'Different Solar System regions have distinct isotope ratios reflecting their formation zone; Earth-Moon identity suggests impact mixing thoroughly homogenised both bodies\' material, or that Theia formed in the same isotopic reservoir as Earth',
        'Oxygen isotopes are identical across the Solar System, so the similarity is expected and provides no constraint on impact models',
        'High-temperature impact processing destroys isotopic differences, so any large impact would produce isotopic similarity regardless of the impactor\'s origin',
        'The Moon formed from Earth\'s outer mantle through rotational fission, which naturally conserves isotopic ratios without requiring a Giant Impact',
      ],
      correctIndex: 0,
      explain: 'Meteorite groups from different Solar System regions have distinct Δ¹⁷O values — a fingerprint of formation location. That Earth and Moon share nearly identical values means either (a) Theia formed at the same heliocentric distance as Earth, or (b) the violent impact mixed and equilibrated the isotopic reservoir of both bodies in the vapour plume. This isotopic constraint is one of the hardest tests for Giant Impact models.',
    },
    {
      question: 'The Nice model explains the Late Heavy Bombardment as a consequence of planetary migration. What orbital event is the direct trigger?',
      options: [
        'Jupiter and Saturn crossing a mutual mean-motion resonance, which destabilised the orbits of Uranus, Neptune, and a massive reservoir of outer Solar System planetesimals, scattering them inward',
        'Jupiter migrating inward to the asteroid belt, scattering asteroid belt objects toward the inner planets',
        'Neptune\'s outward migration into the Kuiper Belt, directly ejecting comets into inner Solar System crossing orbits',
        'Solar wind pressure during the T Tauri phase sweeping large dust particles inward, increasing the impact rate on the terrestrial planets',
      ],
      correctIndex: 0,
      explain: 'In the Nice model, the specific resonance crossing (often described as 2:1 resonance between Jupiter and Saturn) produces a rapid shift in the orbits of all four giant planets. Uranus and Neptune are scattered outward into a vast disc of primordial planetesimals; the resulting gravitational perturbations send a flood of bodies inward, explaining the ~4.1–3.8 Ga impact spike recorded in Apollo samples.',
    },
  ],
}

export default lesson
