import { Waves, Mountain, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const oceanFloorGeography: Lesson = {
  id: 'ocea-101-1-1-1',
  title: 'Mapping the Ocean Floor',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 140,
  description: "Seventy-one percent of Earth's surface lies underwater — and for most of human history it was invisible. The ocean floor is the planet's most geographically diverse terrain, from vast sediment plains to mountains taller than Everest.",
  sources: [
    { org: 'NOAA',     title: 'Ocean Floor Features',                             url: 'https://oceanservice.noaa.gov/facts/oceandepth.html' },
    { org: 'NOAA',     title: 'How do we explore the ocean?',                     url: 'https://oceanexplorer.noaa.gov/facts/exploration.html' },
    { org: 'USGS',     title: 'Seafloor Mapping and Ocean Floor Features',        url: 'https://www.usgs.gov/special-topics/water-science-school/science/ocean-floor-features' },
    { org: 'OpenStax', title: 'Introduction to Oceanography (CC-BY 4.0)',          url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'MBARI',    title: 'Seafloor Geology and Mapping',                      url: 'https://www.mbari.org/technology/seafloor-mapping/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The hidden world beneath the waves',
      body: `The ocean floor is the largest and least explored terrain on Earth — less than 25% has been mapped at the resolution we routinely apply to the surface of Mars. Its average depth of 3.7 kilometres (2.3 mi) means the ocean holds a volume so vast that if you melted all of Antarctica, sea level would rise only about 60 metres (197 ft) — still leaving most of the deep seafloor untouched.

The ocean is not simply a uniform basin filled with water. It is a topographically complex world — mountain ranges thousands of kilometres long, plains larger than any continent, trenches so deep that Mount Everest could disappear within them with a kilometre to spare. Yet until the mid-twentieth century, almost none of this was known. The ocean floor was assumed to be a featureless, sediment-draped abyss, largely because the only tools available for sounding its depth were weighted lines dropped by hand from ships — a process so slow and imprecise that a comprehensive global survey was essentially impossible.

The technology that changed everything was sonar (Sound Navigation and Ranging), developed during World War I to detect submarines. By emitting pulses of sound from the ship and measuring the time for the echo to return from the seafloor, ships could measure depth continuously as they sailed. The first systematic sonar surveys, carried out by the US Navy and civilian research ships from the 1940s onward, began to reveal the true character of the ocean bottom. **Marie Tharp**, a geologist working at Columbia University's Lamont-Doherty Geological Observatory, spent years compiling thousands of sonar profiles into the first scientific maps of the Atlantic seafloor. Her maps revealed the Mid-Atlantic Ridge — a continuous underwater mountain range running the full length of the ocean basin — and convinced her colleague Bruce Heezen that the ocean floor was geologically active. The combination of Tharp and Heezen's work, and the broader Navy mapping programme, provided much of the data that would eventually confirm **seafloor spreading** (the continuous creation of new ocean floor at mid-ocean ridges, which pushes existing seafloor outward) and **plate tectonics** (the theory that Earth's surface is divided into large moving plates).

Today, multibeam sonar and satellite-derived gravity measurements have mapped the ocean floor at resolutions of 1–2 kilometres (0.6–1.2 mi). Remarkably, less than 25% of the ocean floor has been mapped at the resolution of 100 metres (328 ft) or better — the standard we apply routinely to land surfaces and to the surfaces of Mars and the Moon. The deep ocean remains the least explored terrain on Earth.`,
      keyTerms: [
        {
          term: 'Continental shelf',
          def: 'The gently sloping, shallow (0–200 m (0–656 ft)) submerged extension of the continent, averaging about 75 km (47 mi) wide but ranging from nearly absent (off active margins like the US west coast) to over 1,000 km (621 mi) wide (off Australia and the Arctic). Geologically it is continental crust, not oceanic. It is where most marine fisheries and hydrocarbon resources are found.',
        },
        {
          term: 'Continental slope',
          def: 'The steeper seaward face of the continental shelf, descending from the shelf break (at roughly 200 m (656 ft) depth) to the continental rise or ocean floor at 2,000–5,000 m (6,562–16,405 ft). Gradients of 3–6°, cut by submarine canyons. The boundary between continental and oceanic crust is typically somewhere beneath the slope.',
        },
        {
          term: 'Abyssal plain',
          def: `The vast, nearly flat ocean floor at depths of 3,000–6,000 m (9,843–19,686 ft), accounting for about 40% of Earth\'s total surface. Formed by the gradual accumulation of fine-grained sediment that buries the rough basaltic topography of old oceanic crust. The flattest terrain on Earth.`,
        },
        {
          term: 'Mid-ocean ridge',
          def: 'A continuous underwater volcanic mountain system formed where tectonic plates diverge and new oceanic crust is created by seafloor spreading. The Mid-Ocean Ridge system is 65,000 km (40,391 mi) long — the longest mountain range on Earth — and rises 2,000–3,000 m (6,562–9,843 ft) above the surrounding seafloor.',
        },
        {
          term: 'Ocean trench',
          def: 'A long, narrow, steep-sided depression in the ocean floor formed where one tectonic plate subducts beneath another. The deepest places on Earth. The Mariana Trench in the western Pacific reaches 11,034 m (36,203 ft) below sea level at Challenger Deep.',
        },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'ocean-floor-topography',
        caption: 'Ocean floor cross-section from continental shelf to mid-ocean ridge and trench. Vertical scale exaggerated to show bathymetric structure; actual slopes are gentler.',
        credit: 'NOAA / Heezen & Tharp (1977)',
      },
    },
    {
      type: 'callout' as const,
      variant: 'data',
      headline: 'Deeper than Everest is tall',
      body: "The deepest known point on Earth is Challenger Deep in the Mariana Trench at 10,935 metres (35,878 ft) — deep enough to submerge Mount Everest with over 2 km (1.2 mi) of water to spare.",
    },
    {
      type: 'concept',
      title: 'Ocean floor provinces',
      body: `**From shore to abyss: five major zones.** The ocean floor is conventionally divided into distinct bathymetric (depth) provinces, each with characteristic depth, geology, and biological communities. Moving from the coastline into the deep ocean, these are the continental shelf, continental slope, continental rise, abyssal plain, and mid-ocean ridge system (with trenches where plates converge). Think of it like stepping off a curb onto a gently sloping driveway (the continental shelf), then suddenly reaching the edge of a cliff (the shelf break), descending a steep hillside (the continental slope), crossing a vast flat parking lot (the abyssal plain), and then arriving at a mountain range taller than anything on land (the mid-ocean ridge) — all in total darkness.

**Continental shelf.** The shelf is the shallowest part of the ocean floor — rarely deeper than 200 metres (656 ft) and with gradients often less than 1 in 1,000 (virtually flat). It is geologically part of the continent: the crust beneath is continental felsic rock, not the dense basalt of true ocean floor. The shelf edge (shelf break) at roughly 200 m (656 ft) marks the transition to steeper terrain. Shelf width is controlled by tectonic setting: **passive margins** (where no active subduction is occurring) have broad shelves, because sediment shed from the continent accumulates over millions of years with nothing to remove it. The US Atlantic coast, the North Sea, and Australia's northwest shelf are passive-margin examples with shelves extending hundreds of kilometres. **Active margins** (with nearby subduction zones, such as the US Pacific coast) have narrow or absent shelves, because the subducting plate drags the shelf sediment downward. Economically, continental shelves contain most of the world's productive fisheries, coral reefs, and offshore oil and gas fields.

**Continental slope and rise.** Beyond the shelf break, the gradient steepens dramatically. The continental slope descends at 3–6° — steep enough to channel sediment down into the deep ocean via **turbidity currents**: dense, sediment-laden flows that scour submarine canyons and deposit their load at the base of the slope. The largest submarine canyons — including the Monterey Canyon off California and the Congo Canyon off West Africa — rival the Grand Canyon in scale. At the base of the slope, where the gradient flattens again, is the **continental rise**: a thick wedge of sediment accumulated from turbidite flows over tens of millions of years.

**Abyssal plain.** The abyssal plain occupies the deep ocean floor beyond the continental rise, at depths of 3,000–6,000 m (9,843–19,686 ft). These are the most flat and featureless terrains on Earth: gradients less than 1 in 10,000 over thousands of kilometres. The flatness is not original — the underlying basaltic crust is rough, formed by volcanism at mid-ocean ridges — but it is buried under thick accumulations of fine-grained sediment that has settled slowly through the water column over millions of years. Abyssal plains are dotted with **seamounts** (underwater volcanoes that did not break the surface) and **guyots** (flat-topped seamounts, their peaks planed off by wave erosion when they were once at or above sea level). Where seamounts emerge above the ocean surface they form oceanic islands: the Hawaiian Islands, the Azores, the Canary Islands.

**Mid-ocean ridge system.** Running through every ocean basin is the mid-ocean ridge system — 65,000 km (40,391 mi) of continuous underwater mountain range. The ridges rise 2,000–3,000 m (6,562–9,843 ft) above the surrounding seafloor and in places reach sea level (Iceland sits on the Mid-Atlantic Ridge). The central rift valley at the ridge crest, where new oceanic crust is actively forming, is typically 30–50 km (19–31 mi) wide and 1–2 km (0.6–1.2 mi) deep. The rate of seafloor spreading controls the shape of the ridge: **fast-spreading ridges** (like the East Pacific Rise, which spreads at up to 15 cm/yr) have broad, gently sloping flanks and shallow rift valleys; **slow-spreading ridges** (like the Mid-Atlantic Ridge, 2–3 cm/yr) have steep, rugged flanks and deep rift valleys. The ridge system is Earth's most volcanically active zone.

**Trenches.** Where oceanic lithosphere is subducted back into the mantle, ocean trenches form — the deepest places on Earth. Trenches are long (thousands of kilometres), narrow (tens of kilometres wide), and extremely deep. The western Pacific margin is rimmed by a nearly continuous chain of trenches — the Mariana, Tonga, Kuril, Japan, Ryukyu, Philippine, and others. The **Mariana Trench** reaches 11,034 m (36,203 ft) at Challenger Deep, named for HMS Challenger, which made the first oceanographic sounding there in 1875. At these depths, the pressure exceeds 1,100 atmospheres — enough to crush any unprotected vessel. A handful of crewed submersibles have reached the bottom; much of what we know about trench biology comes from remote-operated vehicles (ROVs).

**Mapping technology: how we know what we know.** Three generations of technology have mapped the ocean floor. Echo sounding (single-beam sonar), used from the 1920s through 1970s, measured depth along a single line beneath the ship. **Multibeam sonar** (developed in the 1970s) simultaneously measures depth across a wide swath beneath the ship — up to 10 km (6.2 mi) wide in deep water — building up dense bathymetric maps as the ship sails. Modern multibeam surveys resolve features as small as 50–100 m (164–328 ft). **Satellite altimetry** measures the surface elevation of the ocean itself, which varies slightly (by up to 20 m (66 ft) globally) because the gravitational pull of dense seafloor features draws water toward them. By measuring these gravity-induced surface undulations, satellites can infer the existence of ridges, seamounts, and trenches even in unsurveyed areas, providing a global picture at about 1 km (0.6 mi) resolution. For the highest resolution, ROVs and autonomous underwater vehicles (AUVs) now carry hull-mounted multibeam systems that can map small areas with centimetre-scale resolution.`,
      cards: [
        {
          name: 'Continental Margin',
          icon: Mountain,
          color: BRAND.coral,
          desc: 'The transition from continental to oceanic crust. Passive margins (no nearby subduction) have broad shelves, thick sediment wedges, and gradual slopes — most of the Atlantic coast. Active margins (adjacent subduction) are narrow and steep — most of the Pacific coast. The shelf break at ~200 m (656 ft) is the legal boundary for Exclusive Economic Zones (EEZs) under international law.',
          examples: 'US Atlantic: broad passive margin, shelf up to 200 km (124 mi) · US Pacific: narrow active margin, shelf <20 km (12 mi) · Monterey Canyon: 3,600 m (11,812 ft) deep submarine gorge off California · North Sea: passive margin, shelf 500 km (311 mi) wide, major fishing ground',
        },
        {
          name: 'Abyssal Plain & Seamounts',
          icon: Waves,
          color: BRAND.accent,
          desc: "Abyssal plains cover ~40% of Earth's surface — the largest environment on the planet. Flat because turbidite sediments bury the rough basaltic basement. Over 100,000 seamounts exist globally, mostly in the Pacific. Guyots (flat-topped seamounts) record ancient sea levels: their planed summits were at sea level when formed, then subsided as oceanic crust cooled and thickened.",
          examples: 'Sohm Abyssal Plain (N Atlantic): 900,000 km² (347,490 sq mi) · Emperor Seamount Chain: 6,000 km (3,728 mi) from Hawaii to the Aleutian Trench · Davidson Seamount (California): 2,280 m (7,481 ft) tall, never reached surface · Pacific abyssal plains: deepest recorded flatness, gradients <1 in 10,000',
        },
        {
          name: 'Trenches & Ridges',
          icon: Globe,
          color: BRAND.amethyst,
          desc: `Mid-ocean ridges (65,000 km (40,391 mi)) are Earth\'s longest mountain range, continuously creating oceanic crust. Ocean trenches (max ~11,034 m (36,203 ft) at Mariana Trench) are where old crust returns to the mantle. Together they form a conveyor belt: crust is born at ridges and destroyed at trenches. The age of ocean floor is 0–~200 Ma — far younger than the >4 Ga oldest continental crust.`,
          examples: 'Mid-Atlantic Ridge: 2.5 cm/yr spreading, Iceland sits above it · East Pacific Rise: 15 cm/yr, broadest ridge on Earth · Mariana Trench: 11,034 m (36,203 ft) depth, Challenger Deep',
        },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: '/visuals/oce.svg',
        alt: 'Cross-section of the ocean floor showing the continental shelf, continental slope, abyssal plain, mid-ocean ridge, deep-sea trench, and seamount with depth scale',
        aspectRatio: '16/9',
        credit: 'Facet Earth Sciences',
        annotations: [
          {
            id: 'continental-shelf',
            x: 8,
            y: 48,
            label: 'Continental Shelf',
            description: 'The gently sloping underwater extension of the continent, reaching depths of 0–200 m (0–656 ft) over widths of 50–350 km (31–217 mi). Continental shelves are geologically part of the continent (continental crust), biologically rich due to sunlight penetration and nutrient upwelling, and economically critical for fisheries and offshore hydrocarbon resources. They end abruptly at the shelf break, where the slope steepens dramatically.',
          },
          {
            id: 'abyssal-plain',
            x: 35,
            y: 63,
            label: 'Abyssal Plain',
            description: 'The vast, remarkably flat deep-ocean floor at 3,000–6,000 m (9,843–19,686 ft) depth, blanketed by slow-settling sediment — clay particles, siliceous ooze from diatom shells, and calcareous ooze from foraminifera — that smooths all topographic features. Abyssal plains cover ~50% of Earth\'s surface, making them the largest geographic feature on the planet, yet they were essentially unknown until sonar mapping in the 20th century.',
          },
          {
            id: 'mid-ocean-ridge',
            x: 64,
            y: 37,
            label: 'Mid-Ocean Ridge',
            description: 'A continuous underwater mountain range where new oceanic crust is created by seafloor spreading — molten rock wells up between separating plates and solidifies. The global mid-ocean ridge system is 65,000 km (40,391 mi) long, the longest mountain range on Earth. Hydrothermal vents along the ridge support unique ecosystems powered by chemosynthesis rather than photosynthesis, independent of sunlight.',
          },
          {
            id: 'trench',
            x: 82,
            y: 84,
            label: 'Ocean Trench',
            description: 'The deepest ocean features, formed where dense oceanic crust subducts beneath another plate. Trenches reach depths exceeding 10,000 m (32,810 ft) (the Mariana Trench is 11,034 m (36,203 ft)). They are geologically active zones of frequent large earthquakes, including megathrust events (M9+). Despite crushing pressures and total darkness, hadal zones (>6,000 m (19,686 ft)) host specially adapted organisms including amphipods and snailfish.',
          },
          {
            id: 'seamount',
            x: 91,
            y: 57,
            label: 'Seamount',
            description: 'An underwater volcano rising more than 1,000 m (3,281 ft) from the seafloor but not reaching the ocean surface. Seamounts are typically extinct hot-spot volcanoes carried away from their magma source by plate movement. They serve as biodiversity hotspots, concentrating marine life that feeds on currents deflected upward by the seamount\'s flanks. There are estimated to be over 100,000 seamounts worldwide.',
          },
        ],
      },
    },
    {
      type: 'concept',
      title: 'Key takeaways',
      body: `• **Continental shelves are flooded continental crust**: Despite being underwater, shelves are geologically part of the continent — underlain by felsic rock, not oceanic basalt. Passive margins (like the US Atlantic coast) have wide shelves; active margins (like the US Pacific coast) have narrow ones due to nearby subduction.

• **Abyssal plains are the flattest terrain on Earth — but only because of sediment burial**: The underlying basaltic crust is rough; millennia of slowly settling particles (clay, shell fragments, volcanic ash) fill every depression, producing gradients less than 1 in 10,000 over thousands of kilometres.

• **All ocean floor younger than ~200 Ma — because it is continuously recycled**: Oceanic crust is denser than continental crust, so it inevitably subducts at convergent boundaries. The mid-ocean ridge system (65,000 km (40,391 mi) long) continuously creates new crust; trenches destroy old crust. No ocean floor survives longer than about 200 million years.`,
    },
    {
      type: 'visualization',
      title: 'The ocean floor conveyor belt',
      body: `The ocean floor is not permanent — it is continuously manufactured at mid-ocean ridges and destroyed at subduction zones in a cycle that takes ~100–200 million years to complete. This conveyor belt explains why no ocean floor older than ~200 Ma exists anywhere on Earth today, even though the ocean basins themselves have existed for billions of years. Explore each stage of the cycle below.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The plate tectonic cycle that continuously creates and destroys oceanic crust',
        nodes: [
          {
            id: 'mantle',
            label: 'Mantle Upwelling',
            description: 'Hot asthenospheric mantle rock rises buoyantly beneath mid-ocean ridges. Decompression melting — pressure drop as rock ascends — generates basaltic magma. The mantle provides the engine that drives the entire ocean floor cycle.',
            color: BRAND.ruby,
          },
          {
            id: 'ridge',
            label: 'Mid-Ocean Ridge',
            description: `Magma erupts at the rift valley at the ridge crest, forming new basaltic oceanic crust. The 65,000 km (40,391 mi) ridge system is Earth\'s most volcanically active zone. Spreading rates range from 2–3 cm/yr (Mid-Atlantic Ridge) to up to 15 cm/yr (East Pacific Rise).`,
            color: BRAND.coral,
          },
          {
            id: 'spreading',
            label: 'Seafloor Spreading',
            description: `New crust moves laterally away from the ridge as more magma intrudes behind it. The seafloor records Earth\'s magnetic polarity reversals as symmetrical stripes on either side — the paleomagnetic "barcode" that proved seafloor spreading in the 1960s.`,
            color: BRAND.gold,
          },
          {
            id: 'abyssal',
            label: 'Abyssal Plain',
            description: 'As oceanic crust moves away from the ridge it cools, contracts, and subsides from ~2,500 m (8,202 ft) at the ridge crest to ~5,000–6,000 m (16,405–19,686 ft) in the far-field abyssal plain. Fine sediment gradually buries the rough basaltic topography, producing the flattest terrain on Earth.',
            color: BRAND.accent,
          },
          {
            id: 'trench',
            label: 'Ocean Trench',
            description: 'When old, cold, dense oceanic lithosphere meets a continent or island arc, it bends downward and subducts into the mantle. The Mariana Trench reaches 11,034 m (36,203 ft). Subduction generates earthquakes and arc volcanism as the slab releases water, lowering the mantle melting point.',
            color: BRAND.amethyst,
          },
          {
            id: 'subduction',
            label: 'Slab Recycling',
            description: 'The subducted oceanic slab sinks through the mantle over tens of millions of years, reaching the lower mantle or core-mantle boundary. Seismic tomography images fossil slabs at depth. Over geological timescales, slab material remixes into the mantle and may re-emerge at future hotspots.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'mantle',    to: 'ridge',     label: 'decompression melting → basalt eruption' },
          { from: 'ridge',     to: 'spreading', label: 'lateral plate motion from ridge push' },
          { from: 'spreading', to: 'abyssal',   label: 'cooling, subsidence, sediment burial' },
          { from: 'abyssal',   to: 'trench',    label: 'plate convergence at subduction zone' },
          { from: 'trench',    to: 'subduction',label: 'dense old crust sinks into mantle' },
          { from: 'subduction',to: 'mantle',    label: 'slab recycled back to mantle over ~Myr' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The continental shelf is geologically distinct from the true ocean floor. What type of crust underlies continental shelves, and what tectonic setting produces a wide versus narrow shelf?',
          a: [
            'Continental shelves are underlain by oceanic basaltic crust that has been partially covered by sediment from the adjacent continent; shelf width is controlled by the rate of sediment supply, with high-sediment rivers producing wider shelves',
            'Continental shelves are underlain by continental felsic crust — they are geologically part of the continent, not the ocean; passive margins lacking active subduction accumulate wide shelves, while active margins with adjacent subduction zones have narrow or absent shelves',
            'Continental shelves are underlain by a mixture of oceanic and continental crust called transitional crust; shelf width reflects the age of the adjacent continent, with older cratons producing wider shelves',
            'Continental shelves are underlain by dense oceanic crust and are maintained by the accumulation of calcium carbonate from marine organisms; warm tropical waters produce wider shelves because coral reef growth is faster',
          ],
          correct: 1,
          explain: `Oceanic basalt (A) does not underlie continental shelves — the crust under shelves is the same felsic, granitic continental rock that underlies the adjacent land surface; the shelf is simply the flooded edge of the continent. Transitional crust (C) exists as a concept, but shelf width is not primarily controlled by continental age. Calcium carbonate and coral reefs (D) contribute to shallow tropical sediment but do not explain global shelf width patterns. The correct answer is B: continental shelves are underlain by continental crust and are legally and geologically part of the continent; passive margins — where no subduction occurs and sediment can accumulate undisturbed over hundreds of millions of years — develop broad shelves hundreds of kilometres wide (e.g. the US Atlantic margin, the North Sea, Australia\'s northwest shelf); active margins — where the subducting plate steepens the adjacent continental slope and where tectonic compression inhibits sediment accumulation — have narrow or absent shelves (e.g. the US Pacific margin, Chile).`,
        },
        {
          q: 'Abyssal plains are described as the flattest terrain on Earth, yet the oceanic crust beneath them is rough and irregular. What process creates this extreme flatness?',
          a: [
            'Hydrothermal circulation of seawater through the seafloor dissolves high-standing features over millions of years, smoothing the basaltic basement to a featureless plain',
            'The seafloor subsides uniformly after it moves away from mid-ocean ridges as the oceanic crust cools, compresses laterally, and flattens out under the weight of the overlying water column',
            'Fine-grained sediment settling slowly through the water column from the surface ocean, combined with turbidite deposits from continental slopes, gradually buries the rough basaltic topography over tens of millions of years',
            'Plate tectonic compression at passive margins compacts the oceanic crust laterally, reducing vertical relief and creating the flat abyssal surface',
          ],
          correct: 2,
          explain: 'Hydrothermal dissolution (A) does alter seafloor chemistry but does not physically smooth topography — hydrothermal activity is concentrated near ridges and does not flatten the distant abyssal seafloor. Thermal subsidence (B) is real — oceanic crust does subside as it cools moving away from the ridge — but subsidence affects the overall depth of the ocean floor, not its local flatness; the cooled basalt is still rough. Lateral compression (D) does not occur at passive margins — passive margins are tectonically quiet. The correct answer is C: the basaltic oceanic crust created at mid-ocean ridges has a rough, hummocky surface formed by volcanic eruptions and faulting; as this crust moves away from the ridge and subsides, fine particles raining out of the water column (clay minerals, microfossil shells, wind-blown dust) accumulate at rates of a few millimetres per thousand years; turbidite currents flowing down continental slopes deposit coarser sediment layers; over tens of millions of years, these accumulations build up to hundreds of metres thick, filling the low spots and burying the rough basement, producing the extraordinarily flat abyssal plains.',
        },
        {
          q: 'Why does essentially no ocean floor older than approximately 200 million years exist on Earth today, even though the ocean basins themselves are billions of years old?',
          a: [
            'The early ocean floor was composed of a different rock type that has since been chemically weathered and dissolved by seawater, leaving only the younger basaltic crust that forms today',
            'Ancient impacts by large meteorites during the Late Heavy Bombardment (~3.9 Ga) destroyed all pre-existing ocean floor; the current ocean floor has been continuously regenerated since then',
            'Oceanic crust is continuously created at mid-ocean ridges and consumed at subduction zones; because oceanic crust is denser than continental crust, it inevitably subducts when it meets a continent or another plate, meaning all old oceanic crust has been recycled back into the mantle',
            'Sea level has risen over geological time, and the weight of increasing water has caused older ocean floor to be forced downward into the mantle through a process of gravitational foundering',
          ],
          correct: 2,
          explain: `Early ocean floor was basaltic just like today\'s (A) — there is no evidence for a fundamentally different rock type that was selectively dissolved. Meteorite impacts (B) did not globally resurface the ocean floor — the Late Heavy Bombardment predates any surviving oceanic crust by billions of years, and impact resurfacing of the ocean floor is not a recognised mechanism. Gravitational foundering from water weight (D) is not a mechanism for crust removal — water pressure is hydrostatic and does not force subduction. The correct answer is C: the plate tectonic cycle creates new oceanic crust at mid-ocean ridges and destroys old oceanic crust at subduction zones; because oceanic crust (basalt and gabbro, density ~3.0 g/cm³) is denser than the mantle asthenosphere at depth (once cooled and loaded), it will sink into the mantle when it encounters a subduction zone; unlike continental crust (granitic, density ~2.7 g/cm³), which is too buoyant to subduct to significant depth, oceanic crust is routinely consumed; the conveyor belt operates continuously — the western Pacific contains the oldest surviving ocean floor at ~200 million years, and even this is within reach of nearby trenches.`,
        },
        {
          q: 'Satellite altimetry can infer the locations of mid-ocean ridges, seamounts, and trenches without a ship ever sailing over them. What physical property of the ocean surface makes this possible?',
          a: [
            'The ocean surface is slightly warmer above ridges and seamounts because of the volcanic heat they emit; satellites measure this thermal signature with infrared sensors and convert the temperature differences into maps of seafloor topography',
            'Ridges and seamounts deflect surface ocean currents, creating visible eddies and ripple patterns on the ocean surface; satellites track these disturbances and use them to infer the depth and shape of underlying seafloor features',
            'Dense seafloor features such as ridges and seamounts exert a stronger gravitational pull on the water above them, drawing the ocean surface upward by up to several metres; satellites measure these gentle undulations in sea-surface height, which reflect the gravitational signature of the underlying topography',
            'Salt concentrations are higher above ridges and seamounts because hydrothermal activity adds dissolved minerals to the water; satellites detect this salinity anomaly with microwave sensors and reconstruct the locations of elevated seafloor features',
          ],
          correct: 2,
          explain: 'Thermal infrared detection (A) cannot see through kilometres of water to map seafloor heat — ocean surface temperature anomalies from ridge heat are undetectable at the surface because the overlying water column absorbs and disperses the signal. Current deflection patterns (B) are real but produce diffuse and complex signals that cannot be reliably decoded into precise bathymetric maps; the altimetry method does not rely on current patterns. Salinity anomalies (D) from hydrothermal activity are real but too small and diluted over the water column to produce measurable satellite signatures. The correct answer is C: gravity is the mechanism. A large mass of rock — a seamount or ridge — has higher density than surrounding water and exerts a greater gravitational attraction on the water immediately above it, pulling the sea surface upward by a few metres relative to surrounding areas; conversely, trenches (denser water replaces missing rock) create a slight surface depression. These sea-surface height anomalies, just a few centimetres to metres across thousands of kilometres, are measurable by radar altimeters on satellites (such as GEOSAT, ERS-1, and modern altimetry missions); by mapping these subtle variations, scientists can infer the locations and approximate sizes of seafloor features at about 1 km (0.6 mi) resolution, even in areas that have never been visited by a ship.',
        },
      ],
    },
  ],
}

export default oceanFloorGeography
