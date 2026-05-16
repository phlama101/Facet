import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const marsGeology: Lesson = {
  id: 'astr-101-1-2-2',
  title: 'Mars: The Red Planet and Its Geological History',
  track: 'ast',
  trackName: 'Planetary Science',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 140,
  description: "Mars's geological record of volcanic activity, catastrophic floods, and ancient river networks — and what the evidence tells us about the planet's ancient habitability and the search for past life.",
  sources: [
    { org: 'NASA',     title: 'NASA Mars Exploration Program — Mars Science and Missions Overview', url: 'https://mars.nasa.gov/' },
    { org: 'NASA',     title: 'NASA Perseverance Rover — Jezero Crater and Astrobiology', url: 'https://mars.nasa.gov/mars2020/' },
    { org: 'USGS',     title: 'USGS Astrogeology — Martian Geologic Map and Surface History', url: 'https://astrogeology.usgs.gov/' },
    { org: 'OpenStax', title: 'Astronomy 2e — Mars (CC-BY 4.0)', url: 'https://openstax.org/books/astronomy-2e/pages/10-1-the-geology-of-mars' },
    { org: 'AGI',      title: 'Glossary of Geology — Noachian/Hesperian/Amazonian; Outflow Channel; Phyllosilicate', url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A world with a rich past — and an uncertain biological story',
      body: `Mars has captivated scientists and the public alike for over a century, and with good reason. Of all the Solar System's bodies, Mars presents the most compelling evidence for a past environment that could have supported life: ancient river valleys and lake sediments, hydrated minerals that form only in liquid water, and a geological history spanning from a warm, wet early period through a progressive drying and freezing to the cold, arid world we observe today. At just over half Earth's diameter and one-tenth its mass, Mars is the largest of the three "failed" inner planets that didn't quite reach Earth's threshold of sustained geological activity.

Unlike Earth, Mars has no plate tectonics — a consequence of its smaller mass cooling faster and its lithosphere stiffening into a single rigid shell. Without subduction and recycling, Mars preserves geological features billions of years old with astonishing clarity. Its surface is essentially a geological textbook: the ancient, heavily cratered southern highlands record the Late Heavy Bombardment; the enormous Tharsis volcanic province records billions of years of stationary hot-spot volcanism; Valles Marineris records the tectonic consequences of loading a thick lithosphere with too much volcanic rock; and the outflow channels record catastrophic flood events that may have briefly filled a northern ocean.

The central question driving Mars exploration today is whether microbial life arose during the Noachian era (~4.1–3.7 Ga), when the planet had liquid water, a thicker atmosphere, and possibly habitable surface conditions. If life ever existed on Mars, it may have retreated to the subsurface as the surface became uninhabitable, and traces of ancient biosignatures could be preserved in sedimentary rocks in Jezero Crater — the landing site chosen for NASA's **Perseverance rover** (2021) precisely because it preserves an ancient river delta and lake system. The collected rock cores, awaiting return to Earth by the Mars Sample Return mission (~2033), represent arguably the most important scientific samples in the history of planetary exploration.`,
      keyTerms: [
        { term: 'crustal dichotomy', def: 'The most fundamental feature of Martian geology: the southern hemisphere is ancient (>4 Ga), heavily cratered highland terrain elevated ~3–5 km (3.1 mi) above datum, while the northern hemisphere is younger (~3 Ga), smooth lowland terrain lying ~2–3 km (1.9 mi) below datum. The origin of this hemispheric asymmetry is debated: leading hypotheses include a single giant impactor that excavated a giant basin covering the northern hemisphere (the "Borealis Basin" hypothesis), or degree-1 mantle convection producing differential crustal thickness and volcanic resurfacing. The boundary between the two terrains — the dichotomy boundary — is marked by escarpments and chaotic transition zones.' },
        { term: 'Tharsis volcanic province', def: 'The largest volcanic construct in the Solar System, a 5,000-km-wide dome rising ~10 km (6.2 mi) above the Martian datum. Tharsis contains four giant shield volcanoes: Olympus Mons (altitude 22 km (14 mi), diameter 600 km (373 mi), the tallest volcano in the Solar System), Ascraeus Mons, Pavonis Mons, and Arsia Mons. The enormous mass of Tharsis loaded the Martian lithosphere, bending it and creating the Valles Marineris rift system. Because Mars lacks plate tectonics, mantle hotspots build vertically into one location rather than creating island chains as on Earth. Volcanic activity at Tharsis may have continued episodically until relatively recently (~100 Ma).' },
        { term: 'outflow channel', def: 'Enormous catastrophic flood channels on Mars, typically 10–200 km (124 mi) wide and hundreds to thousands of kilometres long, carved by sudden release of pressurised groundwater from subsurface aquifers. Outflow channels are predominantly Hesperian in age (~3.5–3.0 Ga) and are concentrated around the Chryse Planitia region. The triggering mechanism is thought to be volcanic intrusion melting thick permafrost, causing overpressured aquifers to burst through to the surface. Peak discharge rates may have been 10,000× the Amazon River, carving the channels in geologically brief periods (~weeks to months). Outflow floods may have temporarily created shallow seas or ice-covered lakes in the northern lowlands.' },
        { term: 'phyllosilicate', def: 'Clay minerals such as iron/magnesium smectites (e.g., nontronite, saponite) that form by aqueous alteration of silicate rocks. On Mars, phyllosilicates are abundant in ancient Noachian terrain (~4.1–3.7 Ga), where orbital spectroscopy (OMEGA/CRISM instruments) has detected them in hundreds of locations. Their presence indicates prolonged contact between liquid water and rock at near-neutral pH — conditions potentially habitable. They are distinct from sulfates (found in Hesperian-aged deposits), which indicate more acidic and evaporative conditions. Jezero Crater, Perseverance\'s landing site, contains phyllosilicate-bearing delta deposits representing a particularly compelling astrobiological target.' },
        { term: 'Mars Sample Return', def: 'A multi-mission campaign to collect samples from the Martian surface and return them to Earth for analysis. Phase 1 (ongoing): NASA\'s Perseverance rover collecting and caching rock and regolith samples from Jezero Crater. Phase 2 (planned ~2028): ESA\'s Earth Return Orbiter and NASA\'s Sample Retrieval Lander delivered to Mars. Phase 3 (~2033): Samples ferried to orbit by a Mars Ascent Vehicle and returned to Earth in a sealed container. The MSR campaign is the most complex interplanetary mission ever attempted and represents the only way to apply the full power of terrestrial laboratory analysis — including biosignature detection — to Martian samples.' },
      ],
    },
    {
      type: 'concept',
      title: 'Volcanic giants, ancient floods, hydrated minerals, and the search for Martian life',
      body: `**Martian geology and the absence of plate tectonics.** Mars's most consequential geological characteristic is the absence of plate tectonics. On Earth, the lithosphere is divided into ~15 major plates that continuously recycle ocean floor, drive volcanic arcs, and build mountain ranges. Mars's smaller mass caused it to cool faster, stiffening its lithosphere into a single rigid shell that cannot subduct. As a result, geological features that formed billions of years ago survive essentially unmodified. The **crustal dichotomy** — a hemispheric-scale asymmetry dividing heavily cratered southern highlands from smooth northern lowlands — may record either a giant impact or degree-1 mantle convection in the first few hundred million years of Martian history. The **Tharsis volcanic province** records the consequence of a fixed mantle hotspot erupting for billions of years in one location: **Olympus Mons**, at 22 km (14 mi) altitude and 600 km (373 mi) diameter, is the tallest and most voluminous volcano in the Solar System. Its summit caldera sits at an elevation where the atmospheric pressure is barely 0.1 % of Earth sea level. **Valles Marineris** — a connected system of rifts 4,000 km (2486 mi) long, 200 km (124 mi) wide, and 7 km (4.3 mi) deep — formed as Tharsis's enormous mass flexed and fractured the lithosphere around it; it is not a river-carved canyon but a tectonic feature.

**Water on ancient Mars: mineralogical evidence.** The geological periods of Mars are defined largely by the weathering chemistry recorded in surface minerals. The **Noachian era** (>3.7 Ga): **phyllosilicates** — clay minerals requiring prolonged contact with neutral-pH liquid water — are found by orbital spectroscopy across hundreds of Noachian terrain exposures. **Valley networks** — dendritic drainage patterns in southern highlands — resemble terrestrial erosional features and record either precipitation-fed or groundwater-sapping rivers. Curiosity rover's discovery of rounded conglomerate pebbles at Gale Crater confirmed sustained streamflow in an ancient fluvial system. The **Hesperian era** (3.7–3.0 Ga): **sulfates** record more acidic conditions; **outflow channels** record catastrophic releases of pressurised groundwater, possibly creating temporary lakes or shallow seas in the northern lowlands. The **Amazonian era** (3.0 Ga–present): cold and dry; periglacial and glacial processes; occasional volcanic eruptions; thick dust mantle. Each era records a step-change in water availability and habitability.

**The loss of Mars's habitability.** Two interconnected processes made Mars uninhabitable. First, **core solidification**: Mars's small mass meant it cooled faster than Earth. Its iron core solidified around ~4 Ga, shutting down the global dynamo. Without a magnetospheric shield, the solar wind directly ionised and eroded the Martian atmosphere through ion pick-up and sputtering — a process directly measured by NASA's MAVEN spacecraft (2014–present), which found that Mars still loses ~100 grams of atmosphere per second to the solar wind and was losing far more early in its history when the young Sun was more active. Second, **reduced volcanic outgassing**: as the interior cooled, volcanic activity declined, reducing the resupply of CO₂ to the atmosphere. Together, these processes progressively thinned the atmosphere below the threshold for liquid water at the surface.

**Astrobiology and Mars Sample Return.** The best preserved record of early Martian conditions exists in sedimentary rocks in ancient lake and river systems. **Jezero Crater** — a 49-km-diameter impact crater that hosted a lake ~3.5–3.8 Ga, fed by a river that deposited a well-preserved delta — is the target of Perseverance rover. Perseverance collects rock cores using a coring drill and seals them in titanium sample tubes for future retrieval. If early Mars had liquid water, energy sources, and organic chemicals, the necessary conditions for life were present. Proving or disproving that life arose requires the molecular-level analysis possible only in terrestrial laboratories — the rationale for Mars Sample Return. Even if life is not found, negative results from a well-preserved ancient lake environment would provide critical constraints on the origin of life, comparing conditions on Mars with those where life did originate on Earth.`,
      cards: [
        {
          name: 'Martian Geology: Volcanoes, Rifts, and Crustal Dichotomy',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'Radius 3,389 km (2106 mi); 0.11 M⊕; no plate tectonics. Crustal dichotomy: southern highlands (>4 Ga, heavily cratered, ~3–5 km (3.1 mi) above datum) vs. northern lowlands (younger, smoother, ~2–3 km (1.9 mi) below datum); origin debated (giant impact vs. degree-1 convection). Tharsis dome: 5,000 km (3107 mi) wide, 10 km (6.2 mi) high; four giant shield volcanoes; Olympus Mons 22 km (14 mi) altitude (tallest Solar System volcano). Valles Marineris: tectonic rift system 4,000 km (2486 mi) long, 7 km (4.3 mi) deep; formed by Tharsis lithospheric flexure. Geological periods: Noachian (>3.7 Ga, wet/warm), Hesperian (3.7–3.0 Ga, transitional), Amazonian (3.0 Ga–present, cold/dry).',
          examples: 'Olympus Mons: 600 km (373 mi) diameter (same size as France); 3× Mauna Kea total height; caldera 80 km (50 mi) across · Valles Marineris: comparison — Grand Canyon is 446 km (277 mi) long vs. 4,000 km (2486 mi) (9× longer) · Spirit rover: Columbia Hills = ancient hydrothermal system; goethite found (forms in water) · Nili Fossae: largest phyllosilicate deposit on Mars; exposed by Isidis impact; potentially most habitable ancient terrain',
        },
        {
          name: 'Water on Mars: Evidence for an Ancient Wet World',
          icon: Telescope,
          color: BRAND.amethyst,
          desc: 'Noachian phyllosilicates (Fe/Mg smectites): neutral-pH liquid water required; detected in hundreds of locations by OMEGA/CRISM. Valley networks: dendritic drainage in southern highlands (~3.7–3.8 Ga); sustained rainfall or groundwater. Curiosity conglomerate pebbles (Gale Crater, 3.5 Ga): rounded by sustained streamflow (not wind or impact). Outflow channels: Kasei Vallis, Ares Vallis (200 km (124 mi) wide); catastrophic pressurised groundwater release; possible temporary northern ocean. Present water: ice at both poles (north: permanent H₂O; south: H₂O under CO₂); mid-latitude buried glaciers. MARSIS radar (Mars Express): possible brine lake 1.5 km (0.9 mi) below south polar cap (contested).',
          examples: 'Opportunity rover: Meridiani Planum hematite "blueberries" (Fe concretions) = ancient standing water · Curiosity: recurring slope lineae (RSL) — dark seasonal streaks; interpreted as briny seeps (debated) · CRISM spectrometer: mapped >100 distinct hydrated mineral phases; each records specific water chemistry/temperature · Mars Global Surveyor: gully features in crater walls suggesting recent (geologically) groundwater seepage',
        },
        {
          name: 'Martian Habitability and the Search for Life',
          icon: Wind,
          color: BRAND.amethyst,
          desc: 'Habitability lost via: (1) core solidification ~4 Ga → loss of global magnetic field → solar wind atmospheric stripping (MAVEN: ~100 g/s atmospheric loss measured); (2) interior cooling → less volcanism → less CO₂ replenishment → atmosphere too thin for liquid water. Noachian Mars: possibly habitable surface for ~500 Myr–1 Gyr. Perseverance at Jezero Crater (ancient delta + lake, 3.5–3.8 Ga): collecting rock cores for Mars Sample Return (~2033); looking for preserved organics and biosignatures. Subsurface: potential chemolithotrophic life in geothermally heated deep aquifers. If life arose on Mars: panspermia possible — ~100 meteorites from Mars found on Earth.',
          examples: 'Jezero delta: 250 m (820 ft) thick sedimentary sequence; Perseverance found organic compounds in Wildcat Ridge sample — non-biological origin not ruled out · ExoMars Rosalind Franklin rover (ESA/Roscosmos): designed to drill 2 m (7 ft) below surface radiation zone; launch delayed · Mars meteorite ALH84001: 1996 claim of microfossils sparked NASA astrobiology program; consensus: abiotic (non-biological) origin · SHERLOC (Perseverance): UV Raman spectrometer; detected aromatic organics in multiple samples',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Olympus Mons on Mars is 22 km (14 mi) tall — nearly three times Mount Everest. Why can Martian volcanoes grow so much taller than those on Earth?',
          a: [
            'Mars lacks plate tectonics, so a hotspot stays fixed under one location and continuously adds material to a single volcanic centre rather than creating a chain of smaller volcanoes as the plate moves',
            'Mars has weaker gravity (38 % of Earth\'s), which reduces the compressive stress that limits volcano height on Earth',
            'Martian magma has much lower viscosity than Earth\'s, allowing lava to travel farther and build steeper, taller edifices',
            'The absence of erosion by water and wind preserves the full height of Martian volcanoes, while Earth\'s volcanoes are eroded down',
          ],
          correct: 0,
          explain: `On Earth, plate tectonics carries the lithosphere over mantle plumes, creating chains of progressively older volcanoes (e.g., Hawaiian-Emperor chain). Each volcano is active for a limited time before moving off the hotspot. On Mars, the plate doesn\'t move, so magma from a single plume has been feeding one location for over a billion years, stacking enormous volumes of lava into one giant structure.`,
        },
        {
          q: 'Curiosity rover found well-rounded conglomerate pebbles at the base of Mount Sharp in Gale Crater. What is the geological significance?',
          a: [
            'Rounded pebbles require transport by flowing water over substantial distances; they cannot be rounded by wind or impact, confirming persistent streamflow in Gale Crater ~3.5 Ga',
            'The pebbles show that Mars once had active plate tectonics that transported material from distant mountain ranges',
            'Rounded pebbles indicate ancient glacial transport, confirming an ice age in the Noachian era',
            'The conglomerate matrix contains clay minerals that form only in standing water, implying a lake rather than a river',
          ],
          correct: 0,
          explain: 'Rounding of gravel-sized clasts requires sustained transport in flowing water — mechanical abrasion smooths angular edges. Wind transport produces frosted surfaces, not rounding to the observed degree. The grain size and sorting of the Hottah and Link rock conglomerates pointed specifically to streamflow at depths compatible with wading, not deep lake deposition.',
        },
        {
          q: 'Mars lost most of its atmosphere over ~4 Gyr despite ongoing volcanism that could have replenished CO₂. What was the critical enabling factor?',
          a: [
            'Loss of the global magnetic field ~4 Ga allowed solar wind to directly erode the upper atmosphere through ion pick-up and sputtering, removing gases faster than volcanism could replenish them',
            'Mars\'s low gravity allowed thermal (Jeans) escape of atmospheric gases at a much higher rate than on larger planets',
            'Photodissociation of CO₂ by solar UV converted it to C and O, which escaped to space as the atmosphere thinned',
            'Mars cooled so rapidly that its volcanoes became extinct within 1 Gyr, eliminating CO₂ sources before the atmosphere could thicken',
          ],
          correct: 0,
          explain: `MAVEN spacecraft measurements directly detected solar wind stripping of Mars\'s upper atmosphere and measured the historical escape rates. The magnetic field loss is the pivotal event: Earth\'s magnetosphere deflects the solar wind; without a dipole field, Mars\'s ionosphere is directly exposed to solar wind pressure and energetic particle bombardment. While Mars\'s lower gravity enhances Jeans escape for light atoms, solar wind stripping is the dominant mechanism for heavier species like O, C, and N.`,
        },
      ],
    },
  ],
}

export default marsGeology
