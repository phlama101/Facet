import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'astr-101-1-1-4',
  title: 'Comparative Planetology: Rocky Worlds vs. Giant Planets',
  description: 'Why the Solar System divides into rocky terrestrial planets and giant planets, and what the physical and chemical differences reveal about formation and evolution.',
  track: 'ast',
  trackName: 'Planetary Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Globe,
  color: BRAND.amethyst,
  cards: [
    {
      title: 'Terrestrial Planets: Structure and Diversity',
      body: `The four inner planets — Mercury, Venus, Earth, and Mars — are rocky worlds built primarily from silicates and iron-nickel metal, with radii 0.4–1 Earth radius and densities 3,900–5,500 kg/m³ (uncompressed). Despite sharing the same basic materials and formation zone, they evolved dramatically differently:\n\n**Mercury:** The densest planet relative to size — an anomalously large iron core (~80 % by radius) suggests it was either stripped of its mantle by a giant impact, or preferentially lost silicates during the highly irradiated inner-disc phase. Nearly airless (surface pressure ~10⁻¹⁵ bar), with extreme temperature swings (−180 °C nights to +430 °C days). MESSENGER and BepiColombo missions revealed widespread contraction tectonic features (lobate scarps) as the planet cooled.\n\n**Venus:** Earth's near-twin in size (~0.95 Earth radius) but a vastly different world: surface temperature ~465 °C (hotter than Mercury's dayside) due to a runaway greenhouse effect driven by a dense CO₂ atmosphere (93 bar). Retrograde slow rotation (243-day day, longer than its 225-day year). No detected intrinsic magnetic field. Whether Venus ever had liquid water is debated; recent models suggest it may have been habitable for billions of years before a solar-driven runaway.\n\n**Mars:** Half Earth's diameter, ~0.1 Earth's mass. Lost its global magnetic field ~4 Ga as its core solidified, after which the solar wind eroded its once-thicker atmosphere. Evidence for ancient rivers, lakes, and possibly an ocean (Noachian era, >3.7 Ga) abounds; the question of whether microbial life arose there drives ongoing exploration.\n\n**Earth:** The only planet with active plate tectonics, a liquid-water hydrosphere, and confirmed life — a combination of factors that together regulate CO₂ through the silicate weathering thermostat and stabilise surface temperature over geological time.`,
      icon: Globe,
      color: BRAND.amethyst,
    },
    {
      title: 'Giant Planets: Gas Giants and Ice Giants',
      body: `Beyond the asteroid belt, the Solar System's giants divide into two sub-types:\n\n**Gas Giants — Jupiter and Saturn:**\nComposed primarily of hydrogen and helium (H₂/He), with a small fraction of heavier elements. Jupiter (~317 Earth masses) and Saturn (~95 Earth masses) likely have rocky/icy cores of ~10–20 Earth masses surrounded by layers of metallic hydrogen (a pressure-ionised fluid conducting like a metal at pressures >1 Mbar) generating powerful magnetic fields. Saturn's remarkably low mean density (0.69 g/cm³ — it would float on water) reflects its large gaseous envelope.\n\n**Ice Giants — Uranus and Neptune:**\nSmaller (14–17 Earth masses), denser than the gas giants, and composed predominantly of "ices" — water, methane, and ammonia in supercritical fluid form — around a rocky core. Their blue colour comes from methane gas absorbing red wavelengths. Both have highly tilted magnetic fields offset from their centres, suggesting their interiors are highly non-uniform (possibly convecting conducting-fluid layers rather than a metallic hydrogen dynamo). Uranus's axial tilt of 98° (nearly rolling on its side) suggests a large past impact.\n\n**Ring systems:** Saturn's iconic rings are ~90 % water ice, probably <100 million years old (geologically young), and may represent a tidally disrupted moon. All four giants have ring systems; Saturn's is uniquely bright and extensive.\n\n**Moons as worlds:** The giant planets host 200+ known moons. Several are geologically active: Io (silicate volcanism driven by tidal flexing from Jupiter); Europa and Enceladus (subsurface liquid-water oceans beneath icy crusts, venting through geysers); Titan (dense nitrogen atmosphere, methane lakes — the only body besides Earth with surface liquids).`,
      icon: Telescope,
      color: BRAND.amethyst,
    },
    {
      title: 'Exoplanet Discoveries and What They Reveal About Our Solar System',
      body: `Over 5,700 exoplanets have been confirmed (as of 2024), profoundly reshaping our understanding of how typical or unusual our Solar System is. Key findings:\n\n**Hot Jupiters:** Gas giants orbiting within 0.1 AU of their stars (~3-day periods), too close to have formed there (inside the snow line). Their existence requires **disc migration** — gas giant formation beyond the snow line followed by inward angular-momentum loss via tidal coupling with the gas disc. The rarity of hot Jupiters in our Solar System (Jupiter never migrated inward) may be due to Saturn's stabilising gravitational influence — the "Grand Tack" model suggests Jupiter reached 1.5 AU then was pulled back to its current position by Saturn.\n\n**Super-Earths and sub-Neptunes:** The most common planet type in the galaxy (~1–4 Earth radii), yet absent from the Solar System. Their frequent occurrence (in ~50 % of Sun-like stars) suggests that our terrestrial planet configuration is unusual.\n\n**Occurrence rates:** ~50 % of Sun-like stars have at least one planet; roughly 20 % have a potentially habitable-zone rocky planet. The Milky Way likely contains billions of habitable-zone rocky planets.\n\n**The Solar System's "gap":** The bimodal radius distribution of known exoplanets (the "radius gap" or "Fulton gap" at ~1.8 Earth radii) reveals two distinct populations — rocky super-Earths and sub-Neptunes with gaseous envelopes — separated by atmospheric photoevaporation. Our terrestrial planets all fall well below the gap; our Solar System's lack of super-Earths is increasingly viewed as the result of Jupiter's early influence on the inner disc.`,
      icon: Wind,
      color: BRAND.amethyst,
    },
  ],
  quiz: [
    {
      question: 'Venus is nearly the same size as Earth but has a surface temperature of ~465 °C and no liquid water. What physical process is primarily responsible for the divergence of Venus and Earth despite their similar size and initial position?',
      options: [
        'A runaway greenhouse effect on Venus: its closer position to the Sun raised ocean temperatures enough to evaporate water, and water vapour (a greenhouse gas) further warmed the planet in a positive feedback, eventually dissociating water molecules and driving hydrogen to space — leaving a CO₂-dominated atmosphere',
        'Venus formed without any water because it accreted inside the snow line where no icy planetesimals existed',
        'Venus lacks plate tectonics, so volcanic CO₂ has accumulated without the silicate weathering feedback that removes it on Earth',
        'Venus rotates so slowly that its nightside freezes permanently, creating a temperature gradient that drives CO₂ from the day to nightside, concentrating it near the surface',
      ],
      correctIndex: 0,
      explain: 'The runaway greenhouse is the standard explanation. Earth sits just inside the outer boundary of the "moist greenhouse" instability. Venus, ~30 % closer to the Sun, received more insolation; early warming evaporated more water, increasing the greenhouse effect, which evaporated more water in a positive feedback. Ultraviolet photodissociation of water vapour in the upper atmosphere (followed by hydrogen escape to space) then permanently removed the water inventory. Without liquid water, the carbonate-silicate cycle cannot buffer CO₂, which accumulated from volcanic outgassing.',
    },
    {
      question: 'Saturn has a mean density of ~0.69 g/cm³ — lower than liquid water. How is this physically possible for a planet that exerts a gravitational pull 1.07× that of Earth\'s surface gravity?',
      options: [
        'Saturn\'s enormous volume is dominated by hydrogen and helium gas which have intrinsically low density; the high total mass produces Earth-like surface gravity despite the low average density because surface gravity depends on both mass and radius (g = GM/R²)',
        'Saturn is hollow at its centre with a large void that reduces its average density, while the outer shell produces the observed gravity',
        'Saturn\'s rapid rotation (10.5-hour day) centrifugally inflates the planet, dramatically increasing its volume while adding no mass',
        'Gas at Saturn\'s temperatures has negligible density, but metallic hydrogen at depth is extremely dense; the average of near-zero surface and high-density core gives ~0.69 g/cm³',
      ],
      correctIndex: 0,
      explain: 'Surface gravity g = GM/R². Saturn\'s mass is ~95× Earth\'s, but its radius is ~9.5× Earth\'s. The R² term dominates: (9.5)² = 90.25, so g ≈ 95/90.25 ≈ 1.05× Earth\'s — nearly identical, despite the low density. The paradox dissolves when you recognize that surface gravity depends on how mass is distributed over radius, not on density alone.',
    },
    {
      question: 'The "Fulton gap" in the exoplanet radius distribution — a dearth of planets at ~1.8 Earth radii — is interpreted as evidence for atmospheric photoevaporation. What does this tell us about why our Solar System lacks super-Earths?',
      options: [
        'Super-Earths may have formed in our Solar System but were scattered outward or accreted by Jupiter and the other giant planets during early Solar System evolution, leaving only the smaller terrestrial planets we observe today',
        'The Fulton gap shows that super-Earths cannot form within 1 AU of any star due to temperature constraints on core accretion, explaining the absence in our Solar System',
        'Photoevaporation occurs too slowly in G-type star systems like ours to create the gap, so the absence of super-Earths is unrelated to atmospheric loss',
        'The Fulton gap only applies to planets with hydrogen atmospheres; rocky super-Earths with CO₂ atmospheres like those that may have existed in our Solar System are not subject to photoevaporation',
      ],
      correctIndex: 0,
      explain: 'The "Grand Tack" and related models suggest Jupiter\'s early inward-then-outward migration depleted the inner Solar System of mass and scattered proto-super-Earths. The Fulton gap itself is a separate phenomenon (photoevaporation stripping H/He envelopes from sub-Neptunes, creating a bimodal distribution), but it has confirmed that super-Earths are extremely common around other stars — making our Solar System\'s lack of them anomalous. Jupiter is the prime suspect for our inner Solar System\'s unusual emptiness.',
    },
  ],
}

export default lesson
