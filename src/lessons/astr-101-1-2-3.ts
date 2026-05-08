import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'astr-101-1-2-3',
  title: "Earth's Moon: A Geological Record in Plain Sight",
  description: "How the Moon preserves 4.5 billion years of Solar System history in its craters, volcanic plains, and highlands — and what Apollo samples revealed about the early Solar System.",
  track: 'ast',
  trackName: 'Planetary Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Telescope,
  color: BRAND.amethyst,
  cards: [
    {
      title: 'Lunar Geology: Highlands, Maria, and Regolith',
      body: `The Moon's surface divides into two distinct terrain types visible to the naked eye:\n\n**Lunar highlands (terrae):** Ancient, heavily cratered, light-coloured crust composed predominantly of anorthosite — calcium-feldspar-rich rock that crystallised from a global magma ocean ~4.5–4.4 Ga. The highlands preserve the most ancient lunar geology. Their high density of craters reflects the Late Heavy Bombardment and early accretionary flux.\n\n**Maria (singular: mare):** Dark, relatively smooth volcanic plains that fill large impact basins. Created by low-viscosity basaltic lava flows between ~3.9–3.0 Ga, the maria represent volcanic flooding of giant impact basins (e.g., Mare Imbrium, Mare Tranquillitatis — where Apollo 11 landed in 1969). Iron- and titanium-rich basalts gave the maria their dark colour. The maria are younger (~3 Ga mean) and less cratered than the highlands.\n\n**Regolith:** The lunar surface is covered by a layer of pulverised rock and impact glass — regolith — created by billions of years of micrometeorite gardening. Typical depth is 5–15 m on the maria, up to tens of metres on the highlands. Regolith lacks the cohesion of soil and can be electrically charged by solar wind, causing fine particles to levitate. **Lunar soil** contains no water-bound minerals and no organics; it is sterile and highly abrasive — a major engineering challenge for future surface operations.\n\n**South Pole-Aitken (SPA) Basin:** The largest confirmed impact structure in the Solar System — 2,500 km diameter and 8 km deep — visible as a large dark region at the lunar south pole. SPA excavated deep into the lunar mantle, potentially exposing primitive lower-crustal and mantle material accessible to future sample-return missions.`,
      icon: Telescope,
      color: BRAND.amethyst,
    },
    {
      title: 'Apollo Samples and What They Tell Us',
      body: `The Apollo programme (1969–1972) returned 382 kg of lunar samples from six landing sites, fundamentally transforming our understanding of the Moon and the early Solar System. Key discoveries:\n\n**Magma ocean hypothesis:** Highland anorthosites are buoyant feldspar crystals that floated to the top of a globe-encircling magma ocean as the Moon cooled after the Giant Impact. Denser minerals (olivine, pyroxene) sank, forming the lower crust and mantle. This lunar magma ocean model is now the standard framework for early planetary differentiation and has been extended to explain differentiation on other terrestrial bodies.\n\n**Precise chronology:** Radiometric dating (U-Pb, Sm-Nd, Rb-Sr, Ar-Ar) of Apollo samples provides the most precise age constraints in planetary science. The giant basins formed 3.9–3.8 Ga; the youngest mare basalts are ~3.0–2.5 Ga; the oldest highland anorthosites crystallised 4.45–4.51 Ga. These ages calibrate the crater-counting chronology used to date surfaces across the Solar System.\n\n**Absence of hydrous minerals and volatile depletion:** Apollo samples are strongly depleted in water and volatile elements (K, Na, Pb, Cl) relative to Earth's mantle — consistent with the extreme temperatures of the Giant Impact vaporising volatiles. Recent work (Hauri et al. 2011; Saal et al.) using sensitive mass spectrometry found small but non-zero water concentrations in lunar volcanic glasses (~50 ppm), suggesting Earth's mantle water inventory influenced the Moon's composition or that some volatiles survived the impact.\n\n**No life, no organic molecules, no aqueous alteration:** Unlike many meteorites, Apollo samples contain no hydrated minerals, no organic compounds, and no biosignatures — the Moon is a sterile body that has never had a biosphere or hydrosphere.`,
      icon: Globe,
      color: BRAND.amethyst,
    },
    {
      title: 'The Moon\'s Influence on Earth and Future Exploration',
      body: `The Moon is not merely a passive satellite — it plays an active role in Earth's geology and has been a critical factor in the development of complex life:\n\n**Tidal locking and tidal heating:** The Moon is tidally locked to Earth (one face always visible), a result of tidal dissipation over ~1 Gyr. The Moon's gravity raises tidal bulges on Earth; the misalignment of these bulges (due to Earth's faster rotation) gradually transfers angular momentum from Earth's spin to the Moon's orbit — the Moon recedes at ~3.8 cm/yr (directly measured by laser ranging to Apollo retroreflectors). Earth's day was ~6 hours long shortly after the Moon formed; tidal deceleration over 4.5 Gyr has lengthened it to 24 hours.\n\n**Axial stabilisation:** Earth's axial tilt (obliquity) oscillates between ~22.1° and 24.5° over ~41,000 years due to gravitational perturbations — a gentle variation that drives Milankovitch climate cycles. Without the Moon's gravitational stabilisation, Earth's obliquity could vary chaotically between 0° and 85° (as Mars does), producing extreme climate swings that might preclude complex life.\n\n**Artemis and future lunar science:** NASA's Artemis programme aims to return humans to the Moon, targeting the south polar region where permanently shadowed craters may contain water ice (confirmed by LCROSS impactor 2009 and LRO reflectometry). Lunar water ice could provide drinking water, oxygen, and hydrogen propellant for missions. Scientifically, SPA Basin samples could provide mantle lithologies never available from Apollo sites, and far-side radio telescopes could observe the cosmic dark ages unimpeded by Earth's radio interference.`,
      icon: Wind,
      color: BRAND.amethyst,
    },
  ],
  quiz: [
    {
      question: 'The lunar highlands are rich in anorthosite (calcium feldspar) while the maria are basaltic. What does this compositional difference reveal about the Moon\'s geological history?',
      options: [
        'Anorthosite crystallised and floated to the top of an early global magma ocean (being less dense than the mafic silicate melt), while the maria formed later from basaltic volcanism that flooded large impact basins',
        'Anorthosite is the primary rock type brought to the surface by the Late Heavy Bombardment; basalt was the original surface composition before impact churning',
        'The highlands and maria represent the two hemispheres of the Moon, which formed from different materials during the Giant Impact — the impactor contributed highland material and Earth contributed mare basalt',
        'Anorthosite indicates areas where volatiles were concentrated and then lost, leaving behind calcium-rich residues; basalt forms where volatiles were retained in the melt',
      ],
      correctIndex: 0,
      explain: 'The Lunar Magma Ocean (LMO) model explains the highlands perfectly: as the early Moon\'s global melt cooled, denser Fe-Mg minerals (olivine, pyroxene) crystallised and sank, while plagioclase feldspar (anorthosite) crystallised at lower temperatures and floated, forming the thick buoyant crust we see as the bright highlands. The maria then formed when large impacts created basins that were later flooded by deep partial melts of the mantle.',
    },
    {
      question: 'Apollo samples contain no hydrated minerals and are depleted in volatile elements compared to Earth\'s mantle. How does this support the Giant Impact hypothesis?',
      options: [
        'The Giant Impact generated temperatures of ~4,000 K in the debris cloud, evaporating volatile elements that were then lost to space; the Moon accreted from the residual volatile-depleted vapour and melt',
        'The Moon formed from Earth\'s solid mantle which had already lost its volatiles to Earth\'s core during differentiation',
        'Volatile depletion is expected because the Moon is smaller than Earth and could not gravitationally retain light elements during formation',
        'Solar wind bombardment over 4.5 Gyr has preferentially removed volatile elements from the lunar surface, producing the observed depletion',
      ],
      correctIndex: 0,
      explain: 'The volatile depletion is a key prediction of the Giant Impact: the impact vaporised a large fraction of both Earth and the impactor, and the resulting plume of vapour lost volatile elements (which have high equilibrium vapour pressures) to space before the Moon condensed. The degree of K/U and K/Th depletion in Apollo samples is consistent with the high temperatures implied by the Giant Impact but inconsistent with a cold-formation scenario.',
    },
    {
      question: 'Laser ranging to Apollo retroreflectors shows the Moon is currently receding from Earth at 3.8 cm/yr. What is the physical mechanism?',
      options: [
        'Earth rotates faster than the Moon orbits; the gravitational pull of Earth\'s tidal bulge (which leads the Moon due to Earth\'s rotation) accelerates the Moon forward in its orbit, transferring angular momentum and causing it to spiral outward',
        'The Moon is slowing its orbital speed due to drag from the Earth\'s magnetosphere, causing its orbit to decay',
        'Solar radiation pressure exerts a continuous outward push on the Moon, gradually increasing its orbital radius over geological time',
        'The Moon recedes because it is losing mass through outgassing, reducing its gravitational attraction to Earth',
      ],
      correctIndex: 0,
      explain: 'This is tidal angular momentum transfer. Earth spins faster (24-hr day) than the Moon orbits (27.3-day period). Earth\'s tidal bulge is dragged slightly ahead of the Earth-Moon line by Earth\'s rotation. This bulge gravitationally pulls the Moon forward in its orbit, adding energy and angular momentum to the Moon\'s orbit. By conservation of total angular momentum, Earth\'s rotation slows (lengthening the day) while the Moon moves to a higher, slower orbit.',
    },
  ],
}

export default lesson
