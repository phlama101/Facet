import { Layers, Activity, Globe, Zap, Home } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const groundMotionAmplification: Lesson = {
  id: 'seis-101-1-3-1',
  title: 'Ground Motion, Amplification, and Building Response',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 130,
  description: 'Ground motion is not uniform across a region struck by an earthquake. Site amplification, resonance, and VS30 classification explain why soft sediments can shake 10–30× harder than nearby bedrock — and why matching the natural periods of sediment and structure is catastrophic.',
  sources: [
    { org: 'USGS', title: 'USGS — Site Amplification',                                url: 'https://earthquake.usgs.gov/hazards/hazmaps/conterminous/index.php' },
    { org: 'EERI', title: 'EERI — Reconnaissance Reports on Ground Motion',            url: 'https://www.eeri.org/projects/earthquake-reconnaissance/' },
    { org: 'USGS', title: 'USGS — ShakeMap',                                          url: 'https://earthquake.usgs.gov/data/shakemap/' },
    { org: 'AGU',  title: 'AGU — Basin Effects and Site Response',                     url: 'https://agupubs.onlinelibrary.wiley.com/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Why did Mexico City shake harder than areas far closer to the 1985 epicentre?',
      body: `Ground motion is not uniform across a region struck by an earthquake. The same event produces dramatically different shaking at different locations, even at equal distances from the epicentre. Three factors control this variability: source characteristics (magnitude, depth, rupture directivity), wave propagation path effects (attenuation and focusing as waves travel through heterogeneous crust), and site effects — the local response of surficial geological materials.

Site amplification occurs when seismic waves travel from hard rock into soft sediment. Because soft sediment has lower seismic velocity and density, conservation of energy (specifically, equal energy flux) requires wave amplitude to increase as waves slow down. The ratio of soft-sediment shaking to bedrock shaking can reach 10–30× for soft bay muds and lake sediments. The 1985 Mexico City earthquake (Mw 8.1, epicentre ~350 km away) killed over 10,000 people primarily because Mexico City sits on ancient lake-bed sediments 50–100 m thick with a resonant frequency of ~0.5 Hz — closely matching the dominant period of the arriving surface waves.

Resonance amplification occurs when the dominant period of incoming ground motion matches the natural period of the sediment column or structure. The natural period of a sediment layer is T = 4H/Vs, where H is layer thickness and Vs is shear-wave velocity. For a 50-m soft-clay layer with Vs = 100 m/s, T = 2 s — resonant with long-period surface waves from large distant earthquakes. Similarly, buildings have natural periods of about T ≈ N/10 seconds (N = number of storeys). A 10-storey building (T = 1 s) near Mexico City\'s ancient lake resonated catastrophically in 1985.

USGS ShakeMap combines instrumental records from seismometers, GPS, and strong-motion accelerographs with ground-motion prediction equations (GMPEs) and VS30 (time-averaged shear-wave velocity to 30 m depth) maps to estimate shaking across a region minutes after an earthquake. VS30 < 180 m/s indicates very soft sediment; VS30 > 760 m/s indicates rock. National seismic hazard maps incorporate VS30 to classify site classes (A through E in the NEHRP scheme), which building codes use to prescribe appropriate structural design.`,
      keyTerms: [
        {
          term: 'Site Amplification',
          def: 'Increase in ground motion amplitude as seismic waves enter soft sediment from hard rock.',
        },
        {
          term: 'Resonance',
          def: 'Catastrophic amplification when ground motion period matches natural period of sediment or structure.',
        },
        {
          term: 'VS30',
          def: 'Time-averaged shear-wave velocity to 30 m depth; proxy for site stiffness used in building codes.',
        },
        {
          term: 'GMPE',
          def: 'Ground Motion Prediction Equation; empirical model relating magnitude, distance, and site class to expected shaking.',
        },
        {
          term: 'ShakeMap',
          def: 'USGS near-real-time map of shaking intensity following an earthquake, using GMPEs and site data.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Site Effects That Control Shaking',
      body: 'Local geology exerts dominant control on shaking intensity. Identical bedrock motions at depth can produce radically different surface motions depending on sediment thickness, stiffness, and water content. Engineering seismology quantifies these effects to inform building codes and hazard maps.',
      cards: [
        {
          name: 'Impedance Contrast',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Wave amplitude increases entering softer material: A ∝ (ρV)^(-0.5). Factor of 5-30× at rock-to-mud transitions.',
          examples: 'San Francisco Bay mud (Vs ~100 m/s) vs Bay Area bedrock (Vs ~900 m/s): ~9× impedance ratio → 3× amplitude amplification.',
        },
        {
          name: 'Basin Trapping',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Sedimentary basins trap waves, creating reverberations. Duration of shaking can be 3-5× longer than at nearby rock sites.',
          examples: 'Los Angeles Basin: 1994 Northridge M 6.7 shaking lasted 20-30 s in basin vs 5-10 s on surrounding bedrock.',
        },
        {
          name: 'Resonance',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Soil natural period T = 4H/Vs. Match with building period = catastrophic amplification.',
          examples: '1985 Mexico City: lake sediment T ≈ 2 s. 8-15 storey buildings (T ≈ 0.8-1.5 s) suffered 90%+ collapse rate.',
        },
        {
          name: 'VS30 Classification',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'NEHRP site classes: A (rock, VS30 >1500) to E (soft soil, VS30 <180). Class E can amplify 3-5× vs Class A.',
          examples: 'Seattle\'s glacial outwash (VS30 ~300) vs underlying glaciomarine clay (VS30 ~100): 2-3× additional amplification.',
        },
        {
          name: 'ShakeMap',
          icon: Home,
          color: BRAND.accent,
          desc: 'Real-time shaking map interpolating seismometer data with GMPEs and VS30. Available ~5 min after event.',
          examples: 'Used for FEMA emergency response allocation within 30 min of M 5+ earthquakes in the US.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Ground Motion Path from Source to Structure',
      body: 'How seismic wave energy travels from a fault, through heterogeneous rock and sediment, to shake a building.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how seismic wave energy travels from a fault rupture, through crustal rock and a sedimentary basin, to shake a building at the surface',
        nodes: [
          {
            id: 'source',
            label: 'Earthquake Source',
            description: 'Rupture initiates at hypocenter. Seismic waves radiate outward. Rupture directivity concentrates energy in rupture propagation direction.',
            color: BRAND.coral,
          },
          {
            id: 'crustal-path',
            label: 'Crustal Path',
            description: 'Waves attenuate with distance (geometric spreading + anelastic attenuation). Q factor determines how fast amplitude decays.',
            color: BRAND.gold,
          },
          {
            id: 'basin-entry',
            label: 'Basin Entry',
            description: 'Waves enter low-velocity sedimentary basin. Impedance contrast amplifies amplitude. Basin geometry can focus waves.',
            color: BRAND.jade,
          },
          {
            id: 'site-response',
            label: 'Local Site Response',
            description: 'Soft sediment amplifies and filters ground motion. Resonance frequency: f = Vs/(4H). Nonlinear behaviour at high strains.',
            color: BRAND.ruby,
          },
          {
            id: 'ground-surface',
            label: 'Surface Ground Motion',
            description: 'PGA (peak ground acceleration), PGV (velocity), PGD (displacement) and response spectra characterise the motion.',
            color: BRAND.amethyst,
          },
          {
            id: 'building',
            label: 'Building Response',
            description: 'Structure resonates at its natural period T ≈ N/10 s. Resonance with site period is catastrophic; off-resonance is safer.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'source',        to: 'crustal-path',   label: 'P and S waves radiate' },
          { from: 'crustal-path',  to: 'basin-entry',    label: 'Arrive at basin edge' },
          { from: 'basin-entry',   to: 'site-response',  label: 'Amplified by impedance contrast' },
          { from: 'site-response', to: 'ground-surface', label: 'Modified motion reaches surface' },
          { from: 'ground-surface', to: 'building',      label: 'Excites structural resonance' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Why does soft sediment amplify seismic waves relative to hard rock?',
          a: [
            'Soft sediment has higher friction, slowing wave attenuation',
            'Conservation of energy flux requires amplitude to increase as wave velocity decreases entering softer material',
            'Soft sediment reflects all incoming S-waves, doubling their amplitude',
            'P-waves convert entirely to surface waves when entering soft sediment',
          ],
          correct: 1,
          explain: 'Seismic wave energy flux (power per unit area) must be conserved as a wave crosses a boundary between two materials. Energy flux = ρV × (amplitude)². When a wave enters softer sediment where density ρ and velocity V are both lower, the product ρV decreases, so amplitude must increase to maintain constant energy flux. This impedance contrast effect can amplify shaking by factors of 5–30× at soft-sediment sites compared to nearby bedrock, and is the primary reason Mexico City experienced catastrophic damage in 1985 despite being 350 km from the earthquake epicentre.',
        },
        {
          q: 'What is the natural resonant period of a 30 m thick sediment layer with Vs = 150 m/s?',
          a: [
            '0.2 seconds',
            '0.5 seconds',
            '0.8 seconds',
            '2 seconds',
          ],
          correct: 2,
          explain: 'The natural period of a sediment layer is T = 4H/Vs. With H = 30 m and Vs = 150 m/s: T = 4 × 30 / 150 = 120/150 = 0.8 s. This means the sediment resonates most strongly with ground motions having periods near 0.8 seconds — which corresponds to frequencies around 1.25 Hz. Buildings with natural periods near 0.8 s (roughly 8-storey structures) would experience resonance amplification at this site.',
        },
        {
          q: 'What does VS30 measure and why is it important for seismic hazard?',
          a: [
            'Vertical S-wave velocity at 30 km depth, used to locate earthquake hypocenters',
            'Time-averaged shear-wave velocity in the top 30 m; proxy for site stiffness used in building codes',
            'Maximum S-wave velocity recorded within 30 seconds of earthquake onset',
            'Surface wave velocity at periods of 30 seconds for regional structure studies',
          ],
          correct: 1,
          explain: 'VS30 is the harmonic average shear-wave velocity from the surface down to 30 m depth. It serves as a standardised proxy for site stiffness because it can be measured efficiently and correlates well with site amplification. NEHRP site classes use VS30 thresholds: Class A (rock) has VS30 > 1,500 m/s and minimal amplification; Class E (soft soil) has VS30 < 180 m/s and can amplify ground motion 3–5× relative to bedrock. Modern building codes prescribe different design forces for each site class.',
        },
        {
          q: 'The 1985 Mexico City earthquake killed over 10,000 people despite the epicentre being ~350 km away. What was the primary cause?',
          a: [
            'The earthquake was unusually shallow, raising its effective magnitude near the surface',
            'Lake-bed sediments beneath the city resonated at ~0.5–2 Hz, amplifying long-period surface waves from the distant source',
            'Building codes had been updated but were not yet enforced in the city',
            'The earthquake triggered a cascade of volcanic eruptions beneath the city',
          ],
          correct: 1,
          explain: 'Mexico City sits on the dried bed of ancient Lake Texcoco — soft clay sediments 50–100 m thick with shear-wave velocities as low as 60 m/s. The natural period of this sediment column is about 2 seconds (f ≈ 0.5 Hz). The Mw 8.1 earthquake, though 350 km away, generated strong surface waves at exactly these long periods. The lake-bed sediment amplified shaking 5–50× relative to nearby rock sites, and 8–15 storey buildings whose natural periods matched the sediment period experienced catastrophic resonance. The disaster directly motivated improvements to site characterisation in building codes worldwide.',
        },
        {
          q: 'USGS ShakeMap provides shaking estimates within minutes after an earthquake. What data does it combine?',
          a: [
            'Only GPS deformation data from nearby CORS stations',
            'Seismometer/accelerograph recordings, ground-motion prediction equations, and VS30 site maps',
            'Real-time satellite imagery and soil classification maps from geological surveys',
            'Aftershock locations and Omori\'s Law predictions for future shaking',
          ],
          correct: 1,
          explain: 'ShakeMap integrates multiple data sources. Instrumental data from seismometers and accelerographs provide ground truth at specific locations. Ground Motion Prediction Equations (GMPEs) — empirical models calibrated on thousands of past recordings — interpolate shaking between instrument locations as a function of magnitude, distance, and site class. VS30 maps derived from topographic slope (as proxy) or direct measurements adjust predicted shaking for local site conditions. The result is an isoseismal map of estimated PGA, PGV, and MMI across the affected region, available 5–10 minutes after the event for emergency response.',
        },
      ],
    },
  ],
}

export default groundMotionAmplification
