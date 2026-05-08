import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'astr-101-1-2-4',
  title: 'Asteroids, Meteorites, and the Asteroid Belt',
  description: 'The asteroid belt as a fossil record of Solar System formation, meteorite types as samples of planetary interiors and primordial material, and the role of asteroid impacts in Earth\'s history.',
  track: 'ast',
  trackName: 'Planetary Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Wind,
  color: BRAND.amethyst,
  cards: [
    {
      title: 'The Asteroid Belt and Its Populations',
      body: `The asteroid belt (2.2–3.3 AU) contains the remnant solid material of the inner Solar System — planetesimals that never accreted into a full-sized planet because Jupiter's gravitational resonances repeatedly excited their orbits, driving collisions and scattering before accretion could complete. The total mass of the asteroid belt is only ~4 % of the Moon's mass — far less than a planet's worth of material.\n\n**Compositional gradient:** Asteroids show a systematic variation with heliocentric distance:\n- **S-type (silicaceous):** Inner belt (~2–2.5 AU); silicate-rich, similar to stony meteorites. Brighter.\n- **C-type (carbonaceous):** Outer belt (~2.5–3.3 AU); dark, carbon-rich, primitive composition close to solar abundances. Most abundant type overall.\n- **M-type (metallic):** Scattered throughout; thought to represent exposed metallic cores of differentiated bodies that were stripped of their mantles by collisions.\n\n**Major asteroids:** **Ceres** (diameter 940 km) is the only dwarf planet in the asteroid belt. **Dawn** spacecraft (2011–2018) revealed Ceres to be an icy body with briny material erupting from its interior (bright spots in Occator Crater = sodium carbonate deposits from briny water). **Vesta** (530 km) is a differentiated rocky body with a giant impact crater (Rheasilvia, 505 km) that excavated to the mantle — its debris scattered HED meteorites to Earth.\n\n**Kirkwood gaps:** Orbital resonances with Jupiter (4:1, 3:1, 5:2, 2:1) clear the asteroid belt of objects at specific semi-major axes, creating visible gaps in the distribution.`,
      icon: Wind,
      color: BRAND.amethyst,
    },
    {
      title: 'Meteorites: Samples of Solar System History',
      body: `Meteorites are fragments of asteroids (and occasionally Mars or the Moon) that survive passage through Earth's atmosphere. They provide direct physical samples of Solar System materials spanning 4.567 Gyr of history.\n\n**Classification:**\n- **Chondrites (~85 % of falls):** Undifferentiated primitive meteorites containing **chondrules** (rapidly cooled silicate spherules), **calcium-aluminium-rich inclusions (CAIs)** (the oldest Solar System solids, t₀ reference), and metal grains. They record conditions in the solar nebula. Subdivided by oxidation state and water content into ordinary (H, L, LL), enstatite (EH, EL), and carbonaceous chondrites (CI, CM, CV, CR…).\n- **Achondrites (~8 %):** From differentiated parent bodies; include HED meteorites (from Vesta), SNC meteorites (from Mars), lunar meteorites, and ungrouped achondrites from disrupted differentiated asteroids.\n- **Iron meteorites (~5 %):** Metallic cores of differentiated asteroids, shattered by collisions. Widmanstätten pattern — interlocking kamacite and taenite lamellae forming at ~1–10 °C/Myr — requires millions of years of slow cooling only possible deep inside a large asteroid.\n- **Stony-iron (pallasite, ~1 %):** Core-mantle boundary material; beautiful olivine crystals embedded in metal.\n\n**CI carbonaceous chondrites** are the most primitive: their elemental abundances (except for volatile gases) match the Sun's photospheric composition to within measurement uncertainty, making them the reference standard for solar abundances and the building block composition of the inner Solar System.\n\n**Extraterrestrial organics:** Carbonaceous chondrites (especially CM and CI) contain complex organic molecules: amino acids (over 80 types), nucleobases, sugars, and lipid-like compounds formed abiotically in the solar nebula or on parent body surfaces. They demonstrate that organic chemistry precedes life in the Solar System.`,
      icon: Telescope,
      color: BRAND.amethyst,
    },
    {
      title: 'Near-Earth Asteroids, Impacts, and Planetary Defence',
      body: `**Near-Earth Asteroids (NEAs)** are asteroids with perihelia <1.3 AU, brought into Earth-crossing orbits by gravitational perturbations from Jupiter and the Yarkovsky effect (thermal radiation from a rotating asteroid creates a small but persistent recoil thrust, slowly changing semi-major axis over millions of years).\n\n**Impact history:** Large impacts have shaped Earth's history:\n- **Chicxulub (66 Ma):** 10–15 km impactor at Yucatán, Mexico, produced ~180 km crater, global ejecta layer, years-long impact winter, and the end-Cretaceous mass extinction (non-avian dinosaurs + ~75 % of species). The **iridium anomaly** at the K-Pg boundary worldwide — platinum-group elements enriched in chondritic meteorites — is the chemical fingerprint of this impact.\n- **Tunguska (1908):** ~50 m body exploded ~10 km above Siberia, flattening 2,000 km² of forest — equivalent to a 10–15 megaton nuclear weapon. No crater formed.\n- **Chelyabinsk (2013):** ~20 m object, airburst over Russia, ~1,500 injuries (mostly from shattered windows), captured on dashcams worldwide.\n\n**Planetary defence:** NASA's **DART mission** (September 2022) successfully redirected the moonlet **Dimorphos** by kinetic impactor, shortening its orbital period by ~33 minutes — the first demonstration of asteroid deflection. The Planetary Defense Coordination Office (PDCO) catalogs PHAs (Potentially Hazardous Asteroids); >95 % of NEAs >1 km are now known, and none pose an impact threat in the next century. The greatest current risk is from uncatalogued objects in the 50–1,000 m range.`,
      icon: Globe,
      color: BRAND.amethyst,
    },
  ],
  quiz: [
    {
      question: 'The asteroid belt\'s total mass is only ~4 % of the Moon\'s mass — far less than a planet\'s worth of material. Why didn\'t the asteroid belt material form a full-sized planet?',
      options: [
        'Jupiter\'s gravitational resonances repeatedly excited asteroid orbits to high eccentricities and inclinations, causing collisions that shattered rather than merged planetesimals, and scattered material out of the belt before a planet could grow',
        'The asteroid belt region was swept clean of nebular gas before solid bodies could grow large enough for runaway accretion to operate',
        'The asteroid belt materials are too compositionally heterogeneous to stick together effectively; S-type and C-type asteroids have different densities that prevent them from merging',
        'The Sun\'s radiation pressure at 2–3 AU is too strong to allow solid bodies to remain gravitationally bound to each other',
      ],
      correctIndex: 0,
      explain: 'Jupiter formed rapidly and its mean-motion resonances with the asteroid belt region stir orbital velocities to values where collisions are destructive rather than accretional. The Kirkwood gaps show this resonance clearing in action. Grand Tack models also suggest Jupiter migrated inward through the asteroid belt, directly depleting its mass. The net result is a graveyard of embryos and rubble rather than a planet.',
    },
    {
      question: 'CI carbonaceous chondrites have elemental abundances that match the Sun\'s photosphere nearly exactly. What makes this match scientifically significant?',
      options: [
        'It confirms that CI chondrites are the least-processed, most primitive Solar System material available — they preserve the original bulk composition of the solar nebula before any differentiation or volatile loss, making them the reference standard for Solar System chemistry',
        'It proves that CI chondrites formed directly from solar wind particles that condensed on parent bodies near the Sun and later migrated outward',
        'The match allows geologists to verify that mass spectrometry techniques are accurate, since we can compare meteorite data against astronomical solar spectroscopy',
        'It shows that the Sun and the asteroid belt share the same isotopic composition, disproving models that predict isotopic gradients across the Solar System',
      ],
      correctIndex: 0,
      explain: 'CI chondrites have lost very few elements — only the most volatile gases (H, He, noble gases) are depleted relative to solar abundances. Every other element matches to within analytical uncertainty. This means CI chondrites essentially sample the bulk building-block composition of the Solar System. This match is used routinely in astrophysics to infer stellar compositions, in geochemistry to estimate the composition of planetary building blocks, and in cosmochemistry as a benchmark for nebular models.',
    },
    {
      question: 'The 2022 DART mission demonstrated asteroid deflection by shortening Dimorphos\'s orbital period by ~33 minutes. Why is changing an asteroid\'s orbital period a useful approach to planetary defence?',
      options: [
        'A small change in orbital period, applied years or decades in advance, accumulates into a large positional offset along the orbit by the time of the predicted impact, shifting the asteroid\'s trajectory to miss Earth entirely',
        'Shortening the orbital period directly reduces the asteroid\'s orbital speed, causing it to fall into the Sun rather than continuing on an Earth-crossing trajectory',
        'The orbital period change signals to future asteroid-mining missions where the asteroid will be located, allowing resource extraction before a potential impact',
        'Changing the orbital period causes the asteroid to enter a stable Kirkwood gap resonance with Jupiter, permanently removing it from Earth-crossing orbits',
      ],
      correctIndex: 0,
      explain: 'The key concept is that orbital mechanics amplifies small velocity changes over time. If you change an asteroid\'s velocity by a tiny fraction — even a millimetre per second — it will be in a slightly different position each orbit. Over 10–20 years, this small change in position along the orbit accumulates to shift the asteroid by thousands of kilometres relative to its original predicted path. The challenge is acting early enough for this amplification to work. DART demonstrated this deflection is physically achievable.',
    },
  ],
}

export default lesson
