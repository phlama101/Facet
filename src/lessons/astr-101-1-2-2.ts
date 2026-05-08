import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'astr-101-1-2-2',
  title: 'Mars: The Red Planet and Its Geological History',
  description: 'Mars\'s geological record of volcanic activity, catastrophic floods, and ancient rivers — and what the evidence tells us about the planet\'s habitability past and present.',
  track: 'ast',
  trackName: 'Planetary Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Globe,
  color: BRAND.amethyst,
  cards: [
    {
      title: 'Martian Geology: Volcanoes, Canyons, and Crustal Dichotomy',
      body: `Mars (radius 3,389 km, ~0.11 Earth masses) preserves one of the Solar System's most complete geological records, largely because it has no plate tectonics — features formed billions of years ago remain visible on the surface.\n\n**Crustal dichotomy:** The most striking feature of Mars is its hemispheric asymmetry — the southern hemisphere is ancient, heavily cratered highland terrain (average ~3–5 km above datum), while the northern hemisphere is younger, smooth lowlands (~2–3 km below datum). The origin is debated: a single giant impact, or degree-1 mantle convection producing differential crustal thickness? The boundary between the two terrains is marked by escarpments and chaotic transition zones.\n\n**Tharsis volcanic province:** The largest volcanic construct in the Solar System, a 5,000-km-wide dome rising ~10 km above datum, with four giant shield volcanoes. **Olympus Mons** (altitude 22 km, diameter 600 km) is the tallest volcano in the Solar System. Because Mars lacks plate tectonics, mantle hotspots build vertically rather than creating island chains — the same hot spot has been feeding Olympus Mons for >1 Gyr. Tharsis volcanism loaded the crust to produce **Valles Marineris** — a tectonic rift canyon system 4,000 km long, up to 7 km deep, and 200 km wide, dwarfing Earth's Grand Canyon.\n\n**Geological timeline:**\n- Noachian (>3.7 Ga): Heavy bombardment, valley networks, lake systems, possibly an ocean.\n- Hesperian (3.7–3.0 Ga): Catastrophic flood channels (outflow channels), declining habitability, magnetic field lost.\n- Amazonian (3.0 Ga–present): Cold and dry; occasional volcanic activity; glacial and periglacial processes.`,
      icon: Globe,
      color: BRAND.amethyst,
    },
    {
      title: 'Water on Mars: Evidence for an Ancient Wet World',
      body: `Multiple lines of evidence document liquid water on ancient Mars:\n\n**Valley networks and dendritic drainage:** Branching valley systems in Noachian highlands resemble terrestrial river networks formed by precipitation or groundwater sapping. **Curiosity rover** data from Gale Crater show well-rounded conglomerate pebbles — transported by flowing water — and fine lacustrine (lake) sediments, indicating a persistent lake existed there ~3.5–3.8 Ga.\n\n**Outflow channels:** Hesperian-aged giant flood channels (e.g., Kasei Vallis, Ares Vallis) — up to 200 km wide — were carved catastrophically by pressurised groundwater released from subsurface aquifers, possibly triggered by volcanic intrusion melting permafrost. Discharge rates may have been 10,000× the Amazon River.\n\n**Mineralogy:** Mars orbiters (MRO, Mars Express) and rovers (Opportunity, Curiosity, Perseverance) have identified hydrated minerals — phyllosilicates (clays), sulfates, carbonates — that require liquid water for their formation. Phyllosilicates (Fe/Mg smectites) in Noachian terrain indicate neutral-to-alkaline water chemistry potentially compatible with life. Sulfates in Hesperian sediments suggest more acidic, evaporative conditions.\n\n**Present water:** Mars today has water ice at both poles (north pole: permanent H₂O ice cap; south pole: CO₂ seasonal cap over a permanent H₂O ice layer) and mid-latitude glaciers buried under rock debris. Radar data (MARSIS instrument, Mars Express) have detected a possible brine lake beneath the south polar ice cap at ~1.5 km depth — though this interpretation is contested.`,
      icon: Telescope,
      color: BRAND.amethyst,
    },
    {
      title: 'Martian Habitability: Past, Present, and the Search for Life',
      body: `Mars is the primary target in the search for past (and possibly extant) life beyond Earth, for three reasons: it had liquid water, a thicker atmosphere, and potentially habitable surface conditions during the Noachian era; its dry, cold present preserves ancient rock records; and it is accessible by robotic exploration.\n\n**Why did Mars lose its habitability?** Two interconnected losses:\n1. **Magnetic field loss (~4 Ga):** Mars's core solidified, shutting down the global dynamo. Without magnetospheric protection, solar wind directly stripped the upper atmosphere through ion pick-up. Over 4 Gyr, Mars lost most of its CO₂ atmosphere (measured by MAVEN spacecraft), reducing surface pressure and eliminating the greenhouse warming needed to keep water liquid.\n2. **Interior cooling:** Mars's small mass meant it cooled faster than Earth. Reduced volcanism meant less CO₂ outgassing to replenish the atmosphere.\n\n**Biosignature searches:** The **Perseverance rover** (landed February 2021) is collecting rock cores from Jezero Crater (an ancient river delta and lake) for eventual return to Earth (Mars Sample Return, targeted mid-2030s). Perseverance carries MOXIE (oxygen production experiment), the Ingenuity helicopter, and instruments for detecting organics and biosignatures. The **ExoMars Rosalind Franklin rover** (ESA/Roscosmos) was designed to drill 2 m into the Martian subsurface — the interior is protected from current UV and cosmic-ray sterilisation.\n\n**Subsurface habitability:** Even if Mars's surface is now sterile, deep aquifers potentially heated by geothermal energy could harbour chemolithotrophic microbes (organisms that derive energy from chemical reactions rather than sunlight), as occur in Earth's deep subsurface.`,
      icon: Wind,
      color: BRAND.amethyst,
    },
  ],
  quiz: [
    {
      question: 'Olympus Mons on Mars is 22 km tall — nearly three times Mount Everest. Why can Martian volcanoes grow so much taller than those on Earth?',
      options: [
        'Mars lacks plate tectonics, so a hotspot remains fixed under one location and continuously adds material to a single volcanic centre rather than producing a chain of smaller volcanoes as the plate moves over it',
        'Mars has weaker gravity (38 % of Earth\'s), which reduces the compressive stress that limits volcano height on Earth',
        'Martian magma has much lower viscosity than Earth\'s, allowing lava to travel farther and build steeper, taller edifices',
        'The absence of erosion by water and wind on Mars allows volcanic edifices to preserve their full height, while Earth\'s volcanoes are eroded down',
      ],
      correctIndex: 0,
      explain: 'On Earth, plate tectonics carries the lithosphere over mantle plumes, creating chains of progressively older volcanoes (e.g., Hawaiian-Emperor chain). Each volcano is active for a limited time before moving off the hotspot. On Mars, the plate doesn\'t move, so magma from a single plume has been feeding one location for over a billion years, stacking enormous volumes of lava into one giant structure.',
    },
    {
      question: 'Curiosity rover found well-rounded conglomerate pebbles at the base of Mount Sharp in Gale Crater. What is the geological significance of this discovery?',
      options: [
        'The rounded shape of pebbles requires transport by flowing water over substantial distances — the pebbles could not have been rounded by wind or impact; this confirms persistent streamflow in Gale Crater ~3.5 Ga',
        'The pebbles show that Mars once had active plate tectonics that transported material from distant mountain ranges',
        'Rounded pebbles indicate ancient glacial transport, confirming an ice age in the Noachian era',
        'The conglomerate matrix contains clay minerals that form only in standing water, not flowing streams, implying a still-water lake rather than a river',
      ],
      correctIndex: 0,
      explain: 'Rounding of gravel-sized clasts requires sustained transport in flowing water — the mechanical abrasion of particle-on-particle collisions smooths angular edges. Wind transport produces frosted surfaces, not rounding to the degree observed. The grain size and sorting of the Hottah rock conglomerate at Gale Crater pointed specifically to a streamflow environment — not a deep lake or slow seepage — at water depths compatible with knee-deep wading.',
    },
    {
      question: 'Mars lost most of its atmosphere over ~4 Gyr despite having volcanism that could have replenished CO₂. What was the critical factor that enabled this atmospheric loss?',
      options: [
        'The loss of the global magnetic field ~4 Ga allowed solar wind to directly erode the upper atmosphere through ion pick-up and sputtering, removing atmospheric gases faster than volcanism could replenish them',
        'Mars\'s low gravity allowed atmospheric gases to escape through Jeans escape (thermal escape of light molecules) at a much higher rate than on larger planets',
        'Photodissociation of CO₂ by solar UV in the upper atmosphere converted CO₂ to C and O, which then escaped to space',
        'Mars cooled so fast that its volcanoes became extinct within 1 Gyr, eliminating CO₂ sources before the atmosphere could become thick enough to sustain itself',
      ],
      correctIndex: 0,
      explain: 'MAVEN spacecraft measurements (2014–present) directly detected solar wind stripping of Mars\'s upper atmosphere and measured the historical escape rates. The magnetic field loss is the pivotal event: Earth\'s magnetosphere deflects the solar wind, protecting its atmosphere; without a dipole field, Mars\'s ionosphere is directly exposed to solar wind pressure and energetic particle bombardment. Mars\'s lower gravity does enhance thermal escape of hydrogen, but solar wind stripping is the dominant mechanism for heavier species like O, C, and N.',
    },
  ],
}

export default lesson
