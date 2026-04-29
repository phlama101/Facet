import type { LessonV2 } from '../types'

const plateTectonicsV2: LessonV2 = {
  version: 2,
  id: 'plate-tectonics-v2',
  title: 'Plate Tectonics: A Planet in Motion',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '20 min',
  xpReward: 250,
  description:
    "Understand the unifying theory of all geology — how Earth's lithospheric plates move, interact at boundaries, and shape every mountain range, ocean trench, and volcanic arc on the planet.",
  sections: [
    {
      type: 'intro',
      title: 'A planet in motion',
      body: `Look at a world map. Notice how South America and Africa look like they could fit together like puzzle pieces? In 1912, meteorologist Alfred Wegener proposed they once did — part of a single supercontinent he called **Pangaea**.

His idea was rejected for 50 years. He had no mechanism — no way to explain *how* continents could plow through solid oceanic crust. Then in the 1960s, systematic seafloor mapping revealed an entirely new picture: Earth's surface is broken into roughly a dozen rigid **lithospheric plates** floating on a slow-flowing, partially molten mantle.

This is plate tectonics — the theory that unifies nearly all of geology. It explains where earthquakes cluster, why volcanoes ring the Pacific, and why the ocean floor is nowhere older than about 200 million years.

Use the simulation below to explore how **spreading rate** controls seafloor age — the same data that cracked the mystery of continental drift.`,
      interaction: {
        type: 'slider-simulation',
        label: 'Spreading Rate',
        min: 1,
        max: 18,
        step: 0.5,
        unit: 'cm/yr',
        defaultValue: 5,
        outputLabel: 'Seafloor Age at 500 km from Ridge',
        formula: (rate: number) => {
          const ageMa = Math.round(500 / rate * 10) / 10
          if (rate <= 2) return `${ageMa} Ma — ultra-slow spreading (Gakkel Ridge, Arctic). Very limited volcanism; mantle rock sometimes exposed directly at the seafloor.`
          if (rate <= 5) return `${ageMa} Ma — slow spreading (Mid-Atlantic Ridge). Rugged, faulted topography; central rift valley; well-preserved magnetic stripes.`
          if (rate <= 9) return `${ageMa} Ma — intermediate spreading (Juan de Fuca Ridge). Mixed topography; transition between rifted and domed ridge crests.`
          if (rate <= 14) return `${ageMa} Ma — fast spreading (East Pacific Rise). Smooth, broad ridge dome; high volcanic output; seafloor very young near ridge flanks.`
          return `${ageMa} Ma — super-fast spreading (southern East Pacific Rise, ~18 cm/yr — fastest on Earth). Very young crust, extremely high magma supply, near-continuous eruption.`
        },
        description:
          'Spreading rate determines seafloor age at any given distance from a mid-ocean ridge. USGS measures real-time plate motion by GPS — rates range from ~1 cm/yr (slowest) to ~18 cm/yr (fastest).',
      },
    },
    {
      type: 'concept',
      title: 'The three boundary types',
      body: 'Plates interact at their edges in three fundamentally different ways. Each boundary type produces a distinct signature of earthquakes, volcanism, and topography.',
      points: [
        'Divergent boundaries — plates pull apart. Magma rises to fill the gap, creating new oceanic crust. Forms mid-ocean ridges underwater and rift valleys on continents. Examples: Mid-Atlantic Ridge (ocean), East African Rift (continent).',
        'Convergent boundaries — plates collide. If one plate is denser oceanic crust, it subducts (sinks) beneath the other, generating deep trenches, volcanic arcs, and powerful earthquakes. If both plates are continental, neither subducts easily — crust crumples upward into mountain ranges. Examples: Andes (oceanic-continental), Himalayas (continental-continental), Mariana Trench (oceanic-oceanic).',
        'Transform boundaries — plates slide past each other horizontally. Produces earthquakes but minimal volcanism, since crust is neither created nor destroyed. Examples: San Andreas Fault (California), North Anatolian Fault (Turkey).',
        'Hotspots — a special fourth case. Stationary plumes of superheated mantle melt through a moving plate above them, creating chains of volcanic islands that age away from the active vent. Examples: Hawaiian Island chain, Yellowstone supervolcano.',
      ],
    },
    {
      type: 'visualization',
      title: 'Plate boundary system explorer',
      body: 'Every boundary type produces a distinct set of geological features. Select any node to see how boundaries, forces, and landforms are connected.',
      interaction: {
        type: 'node-explorer',
        nodes: [
          {
            id: 'divergent',
            label: 'Divergent Boundary',
            description:
              'Plates pull apart driven by mantle convection. Magma upwells to fill the gap, solidifying as new oceanic basalt. On the seafloor this creates mid-ocean ridges — the longest mountain ranges on Earth. On continents, the same process creates rift valleys that may eventually open into new oceans (e.g., East African Rift is opening today).',
            connections: ['mid-ocean-ridge', 'rift-valley', 'magnetic-striping'],
          },
          {
            id: 'convergent',
            label: 'Convergent Boundary',
            description:
              "Plates collide. Denser oceanic crust subducts beneath less dense plate material, generating a trench, volcanic arc, and deep earthquakes (down to 700 km). Continental-continental collision produces mountain belts with no volcanism — neither plate wants to subduct. The world's highest peaks (Himalayas, Tibetan Plateau) formed this way.",
            connections: ['subduction', 'volcanic-arc', 'trench', 'mountain-belt'],
          },
          {
            id: 'transform',
            label: 'Transform Boundary',
            description:
              'Plates slide horizontally past each other along a strike-slip fault. No crust is created or destroyed. Produces shallow, frequent earthquakes along the fault zone. The San Andreas Fault (California) moves at ~5 cm/yr — in 15 million years, Los Angeles will be adjacent to San Francisco.',
            connections: ['earthquake'],
          },
          {
            id: 'subduction',
            label: 'Subduction Zone',
            description:
              "The process where denser oceanic crust dives beneath a lighter plate and sinks into the mantle. As it descends, pressure and heat release water from minerals into the overlying mantle wedge — lowering the melting point and generating magma. This magma rises to feed volcanic arcs. Home to Earth's deepest and most powerful earthquakes.",
            connections: ['convergent', 'trench', 'volcanic-arc'],
          },
          {
            id: 'mid-ocean-ridge',
            label: 'Mid-Ocean Ridge',
            description:
              'A submarine mountain range where diverging plates spread apart and new oceanic crust forms continuously. The Mid-Ocean Ridge system is ~65,000 km long — the longest topographic feature on Earth. Spreading rates range from ~1 cm/yr (Arctic Gakkel Ridge) to ~18 cm/yr (East Pacific Rise).',
            connections: ['divergent', 'magnetic-striping'],
          },
          {
            id: 'trench',
            label: 'Ocean Trench',
            description:
              'The deepest features on Earth\'s surface — formed where subducting oceanic crust bends downward. The Mariana Trench (western Pacific) reaches 11 km below sea level. Trenches mark the surface expression of a subduction zone; the subducted plate continues sinking at angles of 30–70° into the mantle.',
            connections: ['subduction', 'convergent'],
          },
          {
            id: 'volcanic-arc',
            label: 'Volcanic Arc',
            description:
              "A curved chain of volcanoes formed above a subduction zone, fed by water-fluxed melts rising from the subducting slab. Island arcs form in ocean (Japan, Indonesia, Aleutians); continental arcs form where oceanic plate subducts beneath a continent (Andes, Cascades). The Pacific 'Ring of Fire' is essentially a connected system of volcanic arcs.",
            connections: ['subduction', 'convergent'],
          },
          {
            id: 'mountain-belt',
            label: 'Mountain Belt',
            description:
              "Forms at continent-continent convergent boundaries where neither plate subducts. Crust thickens and rises as the plates compress — the Himalayas are still growing at ~5 mm/yr as India continues colliding with Asia. The deep roots of mountain belts can reach granulite-facies metamorphic conditions.",
            connections: ['convergent'],
          },
          {
            id: 'magnetic-striping',
            label: 'Magnetic Striping',
            description:
              "As new seafloor erupts at a mid-ocean ridge, it records Earth's magnetic field direction. When the field periodically reverses, the next eruption records the new polarity. This creates symmetric stripes of alternating polarity on either side of the ridge — a tape recording of seafloor spreading that proved continental drift in the 1960s.",
            connections: ['divergent', 'mid-ocean-ridge'],
          },
          {
            id: 'earthquake',
            label: 'Earthquake',
            description:
              "Earthquakes cluster tightly along plate boundaries — the pattern that originally revealed the plate mosaic to seismologists. Shallow quakes (0–70 km) occur at all boundary types. Deep quakes (70–700 km) occur only at subduction zones, tracing the descending slab. Transform faults generate shallow, strike-slip quakes with no associated volcanism.",
            connections: ['transform', 'subduction', 'convergent'],
          },
          {
            id: 'rift-valley',
            label: 'Rift Valley',
            description:
              "A continental rift forms when divergence stretches and thins the crust, causing a central block to drop along parallel faults. The East African Rift is currently splitting Africa — a new ocean may open there in ~10 million years, just as the Atlantic opened from a continental rift 180 million years ago.",
            connections: ['divergent'],
          },
        ],
      },
    },
    {
      type: 'visualization',
      title: 'Pangaea to present: 335 million years of drift',
      body: "Earth's continents have been continuously rearranging. Scrub through the timeline to see how today's familiar geography emerged from a single landmass.",
      interaction: {
        type: 'timeline-scrubber',
        events: [
          {
            year: '335 Ma',
            label: 'Pangaea fully assembled',
            description:
              'All major continents are fused into a single landmass — Pangaea — surrounded by the global ocean Panthalassa. The supercontinent spans from pole to pole. Identical fossils of the freshwater reptile Mesosaurus on both South America and Africa record this union.',
          },
          {
            year: '200 Ma',
            label: 'First rifting: Laurasia and Gondwana',
            description:
              'Pangaea begins to break apart. A rift splits the supercontinent into Laurasia (North America + Europe + Asia) in the north and Gondwana (South America + Africa + Antarctica + Australia + India) in the south. The Tethys Sea begins opening between them.',
          },
          {
            year: '180 Ma',
            label: 'Central Atlantic opens',
            description:
              'North America and Africa begin separating as a new mid-ocean ridge system forms. The Central Atlantic Ocean is born. This is the same ridge system — the Mid-Atlantic Ridge — that is still active and still widening today at ~2.5 cm/yr.',
          },
          {
            year: '130 Ma',
            label: 'South Atlantic opens',
            description:
              'South America and Africa separate as rifting propagates southward. The South Atlantic Ocean opens. Their matching coastlines and shared Mesosaurus fossils preserve the record of this separation — the observation that launched Wegener\'s continental drift hypothesis.',
          },
          {
            year: '65 Ma',
            label: 'India races north',
            description:
              "India has fully separated from Gondwana and is moving rapidly northward at ~15 cm/yr — the fastest known continental drift rate in the geological record. The Tethys Ocean is closing ahead of it. India is still several thousand kilometers south of Asia.",
          },
          {
            year: '50 Ma',
            label: 'India-Asia collision begins',
            description:
              "India collides with Asia, closing the Tethys Ocean and beginning the uplift of the Himalayas and Tibetan Plateau. Neither continental plate subducts easily, so the crust crumples and thickens. The Himalayan range continues rising today at ~5 mm/yr.",
          },
          {
            year: 'Present',
            label: 'The mosaic today',
            description:
              'GPS satellites measure real-time plate motion with millimeter precision, confirming drift rates from 1 cm/yr to 18 cm/yr. The Pacific Ocean is currently shrinking; the Atlantic is widening; the East African Rift may eventually open a new ocean. The cycle never stops.',
          },
        ],
      },
    },
    {
      type: 'lab',
      title: 'Reading the evidence for plate tectonics',
      premise:
        'Plate tectonics is confirmed by multiple independent lines of evidence. Work through each dataset as a geologist would, drawing conclusions from observations.',
      steps: [
        {
          instruction:
            'A researcher maps the age of oceanic crust outward from the Mid-Atlantic Ridge. Crust at the ridge is 0 Ma. At 500 km, it is 10 Ma. At 1,000 km, it is 20 Ma. Calculate the spreading rate (total from both sides) and identify whether this is slow, intermediate, or fast spreading.',
          hint: 'Spreading rate = distance ÷ age. Since the crust moves away from the ridge in both directions simultaneously, the full spreading rate is what you calculate. Compare your result to the known range of 1–18 cm/yr.',
        },
        {
          instruction:
            'Paleomagnetic surveys of the South Atlantic seafloor reveal symmetric stripes of normal and reversed polarity on both sides of the Mid-Atlantic Ridge. The outermost reversed stripe on both sides is 2,500 km from the ridge and dates to 65 Ma. What does the symmetry prove about the origin of oceanic crust?',
          hint: 'If both plates carry a mirror image of the same reversal record, the crust on both sides must have formed at the same location — the ridge. The symmetry is only possible if new crust was created at the ridge and moved outward in both directions simultaneously.',
        },
        {
          instruction:
            "Identical fossils of the freshwater fish Lystrosaurus are found in Antarctica, India, and South Africa — continents now separated by thousands of kilometers of deep ocean. Scientists rule out transoceanic migration. What two explanations remain, and which does the fossil evidence support?",
          hint: "The only alternatives are: (1) a land bridge once existed, or (2) the continents were once connected. Marine sediment studies show no sunken land bridges. Fossil age (~255 Ma) matches the timing of Pangaea, strongly supporting continental connection rather than a land bridge.",
        },
        {
          instruction:
            "GPS measurements show that Los Angeles (Pacific Plate) moves northwest at ~4.6 cm/yr relative to San Francisco (North American Plate). If the San Andreas Fault is a transform boundary, calculate how far Los Angeles will have traveled in 1 million years, and describe what happens at the surface during this motion.",
          hint: "Multiply rate × time. At a transform boundary, crust slides horizontally — it is neither created nor destroyed. The motion accumulates as strain in the fault zone, periodically releasing as earthquakes. The 1906 San Francisco earthquake resulted from ~6 m of sudden slip along this fault.",
        },
      ],
      xpReward: 70,
    },
    {
      type: 'challenge',
      title: 'Subduction style simulator',
      prompt:
        'Adjust the oceanic plate age and convergence rate to model what type of subduction zone and volcanic arc would form. Older, colder crust subducts at steeper angles and generates different arc types.',
      interaction: {
        type: 'sandbox-simulator',
        prompt: 'Set the age of the subducting oceanic plate and the plate convergence rate.',
        variables: [
          { id: 'age', label: 'Oceanic Plate Age', min: 5, max: 180, default: 60, unit: 'Ma' },
          { id: 'rate', label: 'Convergence Rate', min: 1, max: 20, default: 7, unit: 'cm/yr' },
        ],
        outputDescription: (vars) => {
          const { age, rate } = vars
          const density = 2.9 + age * 0.002
          const angle = Math.min(75, 20 + age * 0.35 + rate * 0.5)
          const depth = Math.round(angle * 8)

          if (age < 20) {
            return `Young plate (${age.toFixed(0)} Ma) — buoyant, warm, low density (~${density.toFixed(2)} g/cm³). Subduction angle ~${angle.toFixed(0)}°. Shallow slab geometry. Produces a broad, distributed volcanic arc far inland (e.g., flat-slab subduction beneath the Andes). Seismicity is spread over a wide area.`
          }
          if (age < 60 && rate < 5) {
            return `Intermediate-age plate (${age.toFixed(0)} Ma), slow convergence (${rate.toFixed(1)} cm/yr). Subduction angle ~${angle.toFixed(0)}°. Arc volcanism at moderate depth (~${depth} km above slab). Well-defined volcanic front. Similar to the Cascadia subduction zone (Juan de Fuca Plate, ~9 Ma, ~4 cm/yr).`
          }
          if (age >= 60 && rate >= 8) {
            return `Old, cold plate (${age.toFixed(0)} Ma), fast convergence (${rate.toFixed(1)} cm/yr). High density (~${density.toFixed(2)} g/cm³). Steep subduction angle ~${angle.toFixed(0)}°. Deep slab (~${depth} km). Narrow, well-defined volcanic arc. Back-arc extension likely (e.g., western Pacific island arc systems like Japan or Tonga).`
          }
          if (age > 100) {
            return `Very old plate (${age.toFixed(0)} Ma) — dense, cold crust (~${density.toFixed(2)} g/cm³). High subduction angle (~${angle.toFixed(0)}°). Deep slab seismicity to ~${depth} km. Produces the deepest ocean trenches. The oldest subducting Pacific crust (~170 Ma) dives into the Mariana Trench at this type of geometry.`
          }
          return `Plate age ${age.toFixed(0)} Ma, convergence ${rate.toFixed(1)} cm/yr. Density ~${density.toFixed(2)} g/cm³. Subduction angle ~${angle.toFixed(0)}°. Arc above slab at ~${depth} km depth. Standard subduction zone — volcanic arc with intermediate magma composition (andesite-dominant). Moderate earthquake hazard.`
        },
      },
      xpReward: 85,
    },
    {
      type: 'quiz',
      xpPerQuestion: 20,
      questions: [
        {
          q: 'The Mid-Atlantic Ridge is what type of plate boundary?',
          a: ['Convergent — plates colliding', 'Transform — plates sliding past each other', 'Divergent — plates pulling apart', 'Subduction zone — one plate diving under another'],
          correct: 2,
          explain:
            'The Mid-Atlantic Ridge is a divergent boundary — the North American and Eurasian plates (in the north) and the South American and African plates (in the south) are pulling apart. New oceanic basalt erupts continuously at the ridge, widening the Atlantic by ~2.5 cm/yr.',
        },
        {
          q: 'The Himalayas formed from which type of plate interaction?',
          a: [
            'Oceanic-oceanic convergence, forming an island arc',
            'Continental-continental convergence, neither plate subducting',
            'A divergent boundary creating a continental rift',
            'A transform boundary generating strike-slip movement',
          ],
          correct: 1,
          explain:
            "India collided with Asia approximately 50 million years ago. Because both plates carry low-density continental crust, neither subducts easily. Instead, the crust crumpled and thickened, building the highest mountain range on Earth. The Himalayas are still rising at ~5 mm/yr.",
        },
        {
          q: 'Magnetic striping on the seafloor provided key evidence for plate tectonics. What does the symmetry of the stripes on either side of a mid-ocean ridge prove?',
          a: [
            'The ocean formed by filling a depression with water from space',
            'New crust forms at the ridge and moves outward in both directions',
            'Earth\'s magnetic field is constant and has never reversed',
            'Oceanic crust is older near the ridges than near the continents',
          ],
          correct: 1,
          explain:
            "The mirror-image pattern of reversed and normal magnetic stripes on both flanks of a mid-ocean ridge can only form if new crust erupts at the ridge, records the current field, and then moves symmetrically outward as spreading continues. It's a tape recording of seafloor spreading.",
        },
        {
          q: 'Per USGS GPS measurements, tectonic plates move at roughly what rate?',
          a: [
            'Millimeters per year — imperceptibly slow even over a lifetime',
            'About the rate of fingernail growth (~2–15 cm/yr)',
            'About 1 meter per year — noticeable over decades',
            'Several kilometers per year — fast enough to measure directly with a ruler',
          ],
          correct: 1,
          explain:
            "USGS explicitly compares plate motion to fingernail growth. Rates range from ~1 cm/yr for the slowest plates to ~18 cm/yr for the fastest (southern East Pacific Rise). GPS satellites now measure these motions directly in real time, confirming rates that match geological estimates from seafloor ages.",
        },
        {
          q: 'A volcanic arc forms on the overriding plate above a subduction zone. What process generates the magma that feeds this arc?',
          a: [
            'Direct melting of the descending oceanic plate by frictional heat',
            'Water released from the subducting slab lowers the melting point of the mantle wedge above it',
            'Decompression melting as the overriding plate rises',
            'Heat from the subducted continental crust melting the oceanic crust above it',
          ],
          correct: 1,
          explain:
            "As the subducting oceanic slab descends, increasing pressure and temperature release water from hydrated minerals (serpentinite, amphibole). This water migrates upward into the hot mantle wedge above the slab, dramatically lowering the melting point of peridotite and generating magma that rises to feed the volcanic arc.",
        },
        {
          q: 'Which line of evidence for plate tectonics involves identical fossil species found on continents now separated by deep ocean?',
          a: [
            'Magnetic striping of the seafloor',
            'GPS measurement of plate motion',
            'Paleobiogeographic distribution (matching fossil assemblages)',
            'Ocean floor age gradient from mid-ocean ridges',
          ],
          correct: 2,
          explain:
            "Identical fossils of freshwater organisms like Mesosaurus and Lystrosaurus on now-separated continents cannot be explained by transoceanic migration — they can't cross deep salt water. The only explanation is that those continents were once joined. Wegener used this evidence as one of his original arguments for continental drift in 1912.",
        },
      ],
    },
  ],
}

export default plateTectonicsV2
