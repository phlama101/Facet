import type { Lesson } from './types'

const rockCycleIntermediate: Lesson = {

  id: 'rock-cycle-intermediate',
  title: "Driving the Rock Cycle: Bowen's Series & Metamorphic Grades",
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '20 min',
  xpReward: 300,
  description:
    "Master the crystallization sequence that shapes all igneous rocks, and learn how index minerals act as buried thermometers — permanently recording the depth and temperature of ancient mountain roots.",
  sections: [
    {
      type: 'intro',
      title: 'Two engines, one cycle',
      body: `You already know the rock cycle's three destinations — igneous, sedimentary, and metamorphic. Now ask the more precise question: **what energy drives each transformation?**

The rock cycle runs on two completely separate engines.

The first is **geothermal heat** — thermal energy from the radioactive decay of uranium, thorium, and potassium deep inside Earth. This engine powers everything that involves melting or high-pressure transformation. The continental geothermal gradient averages **25–30 °C per kilometre of depth** — so at the base of a 35 km crust, temperatures reach roughly 875–1,050 °C. That is hot enough to melt crustal rocks and generate granite magma.

The second engine is **solar radiation**. Sunlight drives evaporation, rainfall, and freeze-thaw cycles — the agents of physical and chemical weathering that break rocks apart and mobilise sediment. Without the Sun, all sedimentary processes would halt. Gravity links the two engines: it transports eroded material downslope toward depositional basins, but generates no energy of its own.

Use the simulation below to explore how the **geothermal gradient** connects depth to temperature across the crust.`,
      interaction: {
        type: 'slider-simulation',
        label: 'Crustal Depth',
        min: 0,
        max: 80,
        step: 1,
        unit: 'km',
        defaultValue: 20,
        outputLabel: 'Temperature & Rock Behavior',
        formula: (depth: number) => {
          const tMin = Math.round(depth * 25)
          const tMax = Math.round(depth * 30)
          if (depth === 0) return 'Surface (0 km) — ~15–25 °C. Weathering and erosion dominate. Sediment accumulates.'
          if (depth <= 5) return `${tMin}–${tMax} °C — shallow burial. Diagenesis: sediments compacting and cementing into sedimentary rock.`
          if (depth <= 12) return `${tMin}–${tMax} °C — greenschist conditions begin. Low-grade metamorphism: shale converting to slate, then phyllite.`
          if (depth <= 20) return `${tMin}–${tMax} °C — amphibolite facies. Medium-grade metamorphism. Garnet and hornblende crystallize. Garnet schist forms.`
          if (depth <= 30) return `${tMin}–${tMax} °C — high-grade metamorphism. Sillimanite zone. Gneiss and migmatite. Near the base of thick crust.`
          if (depth <= 50) return `${tMin}–${tMax} °C — granulite facies / partial melting begins. Lowest-melting fractions generate granite magma. Migmatite zone.`
          return `${tMin}–${tMax} °C — well into the partial and complete melting regime. Magma chambers at this depth feed volcanic systems. New igneous rock will form on cooling.`
        },
        description:
          'The continental geothermal gradient averages 25–30 °C/km (USGS Volcano Hazards Program). Drag to any depth to see the resulting temperature range and the rock-forming process active there.',
      },
    },
    {
      type: 'concept',
      title: "Bowen's Reaction Series: the crystallization roadmap",
      body: `In 1922, petrologist Norman L. Bowen published experimental results showing that minerals crystallize from a cooling magma in a predictable, temperature-controlled sequence — not all at once. This is **Bowen's Reaction Series**, and it explains why radically different rocks can form from the same starting melt.

The series has two branches that run simultaneously as magma cools from ~1,300 °C toward ~650 °C.`,
      points: [
        'Discontinuous branch (iron-magnesium minerals) — each phase reacts with the remaining melt and is replaced by the next: Olivine (~1,200–1,300 °C) → Pyroxene (~1,100–1,200 °C) → Amphibole (~900–1,100 °C) → Biotite mica (~800–900 °C). If cooling is rapid and olivine is removed before reacting, it is preserved as phenocrysts in basalt.',
        'Continuous branch (plagioclase feldspar) — composition shifts gradually throughout cooling. Calcium-rich anorthite crystallizes first at high temperature; as the melt cools, crystals continuously incorporate more sodium, shifting toward sodium-rich albite. A single crystal can preserve a calcium-rich core and sodium-rich rim — a chemical record of its cooling history.',
        'Late-stage minerals (both branches converge near 650–750 °C) — potassium feldspar and muscovite mica appear at ~750 °C. Quartz (SiO₂) crystallizes last at ~650 °C. These are the dominant minerals of granite.',
        'Fractional crystallization: as early-forming minerals lock up Mg, Fe, and Ca, the residual melt becomes progressively enriched in Si, Al, Na, and K. A basaltic melt that undergoes extensive fractional crystallization can yield a residual granite-like magma — explaining why a single volcanic complex can erupt both basalt and rhyolite.',
        'Crystal size = cooling rate: slow underground cooling (intrusive/plutonic) allows large crystals to grow (granite). Rapid surface cooling (extrusive/volcanic) produces fine-grained or glassy textures (basalt, obsidian). Two-stage cooling creates porphyritic texture: large phenocrysts set in a fine groundmass.',
      ],
    },
    {
      type: 'visualization',
      title: "Crystallization sequence: cooling from 1,300 °C",
      body: "Scrub through the crystallization history of a cooling basaltic magma. Each stage records a distinct mineral assembling from the melt as temperature drops.",
      interaction: {
        type: 'timeline-scrubber',
        events: [
          {
            year: '1,300 °C',
            label: 'Magma — fully molten',
            description:
              'Basaltic magma at mantle temperatures. No crystals present — all silicon, aluminum, iron, magnesium, calcium, sodium, and potassium exist as ions in a disordered melt. Density ~2.7 g/cm³; viscosity low enough to flow rapidly when erupted.',
          },
          {
            year: '1,200 °C',
            label: 'Olivine crystallizes first',
            description:
              "The first solid phase appears: olivine ((Mg,Fe)₂SiO₄). Rich in magnesium and iron. If olivine settles by gravity before the melt cools further, Bowen's discontinuous reaction series begins. Olivine is the most abundant mineral in Earth's upper mantle.",
          },
          {
            year: '1,100 °C',
            label: 'Pyroxene replaces olivine',
            description:
              "Olivine reacts with the surrounding melt to form pyroxene (Ca,Mg,Fe silicate). Simultaneously, calcium-rich plagioclase (anorthite) begins crystallizing on the continuous branch. Both reactions draw Ca, Mg, and Fe from the melt, enriching the residual liquid in Si and Na.",
          },
          {
            year: '900 °C',
            label: 'Amphibole zone',
            description:
              'Pyroxene partially reacts with the melt to form amphibole (hornblende). Plagioclase continues incorporating more sodium, shifting from anorthite toward intermediate compositions. The melt is now significantly enriched in silica and alkali metals compared to the original basaltic composition.',
          },
          {
            year: '800 °C',
            label: 'Biotite mica crystallizes',
            description:
              'Biotite mica (K(Mg,Fe)₃AlSi₃O₁₀(OH)₂) forms at the base of the discontinuous branch. Sodium-rich plagioclase (albite-dominant) continues to crystallize. The residual melt is now granite-like in composition: high Si, Al, K, Na — low Mg, Fe, Ca.',
          },
          {
            year: '750 °C',
            label: 'Potassium feldspar and muscovite',
            description:
              'Potassium feldspar (orthoclase, KAlSi₃O₈) and muscovite mica crystallize from the now highly evolved residual melt. These two minerals are key components of granite. At this stage a basaltic starting material has been transformed — through fractional crystallization — into a granite-like residual magma.',
          },
          {
            year: '650 °C',
            label: 'Quartz — last to crystallize',
            description:
              'Quartz (SiO₂) is the final mineral to crystallize from a cooling silicate melt. Its abundance in granite reflects its formation from the most Si-enriched residual fraction. Quartz is chemically inert at surface conditions — which is why it survives weathering and dominates beach sand globally.',
          },
        ],
      },
    },
    {
      type: 'visualization',
      title: 'Barrovian metamorphic zones: minerals as buried thermometers',
      body: 'In 1893, George Barrow mapped metamorphic zones across the Scottish Highlands, each defined by the first appearance of a new index mineral. Select any node to explore what each zone tells us about ancient burial depth.',
      interaction: {
        type: 'node-explorer',
        nodes: [
          {
            id: 'geothermal-gradient',
            label: 'Geothermal Gradient',
            description:
              'The rate of temperature increase with depth — ~25–30 °C/km in continental crust (USGS). This gradient converts the temperature of any index mineral into an approximate burial depth. It is the key that translates rock chemistry into geological history.',
            connections: ['chlorite-zone', 'garnet-zone', 'sillimanite-zone', 'contact-meta'],
          },
          {
            id: 'chlorite-zone',
            label: 'Chlorite Zone (Z1)',
            description:
              '~250–350 °C · ~8–12 km burial. Lowest Barrovian grade. Shale is transformed into slate (fine-grained, splits along cleavage) and then phyllite (silky sheen from aligned chlorite). Chlorite is a green, platy mineral. Represents mild burial — equivalent to sediment being squeezed beneath a young, developing mountain belt.',
            connections: ['geothermal-gradient', 'biotite-zone'],
          },
          {
            id: 'biotite-zone',
            label: 'Biotite Zone (Z2)',
            description:
              '~350–400 °C · ~12–15 km burial. Dark biotite mica appears as the rock is pressed deeper and hotter. The protolith (original shale) is now a biotite schist — coarser grained, with visible mica flakes aligned by directed stress.',
            connections: ['chlorite-zone', 'garnet-zone'],
          },
          {
            id: 'garnet-zone',
            label: 'Garnet Zone (Z3)',
            description:
              '~400–450 °C · ~15–20 km burial. Red-brown almandine garnet porphyroblasts grow. Garnet schist is a key marker in mountain belts worldwide. If you find it at the surface today, at least 15–20 km of overlying rock has since eroded away — an entire mountain range is missing.',
            connections: ['biotite-zone', 'staurolite-zone', 'geothermal-gradient'],
          },
          {
            id: 'staurolite-zone',
            label: 'Staurolite Zone (Z4)',
            description:
              '~500–550 °C · ~20–25 km burial. Staurolite — a dark brown, Fe-Al silicate — crystallizes, often forming distinctive cross-shaped (cruciform) twins. Finding staurolite at the surface immediately tells a geologist that 20–25 km of rock above has since been eroded.',
            connections: ['garnet-zone', 'kyanite-zone'],
          },
          {
            id: 'kyanite-zone',
            label: 'Kyanite Zone (Z5)',
            description:
              '~550–600 °C · ~25–35 km burial. Blue, blade-like kyanite crystals form. Kyanite is highly pressure-sensitive — it marks high-pressure conditions characteristic of deep burial in thickened continental crust. The same chemical formula (Al₂SiO₅) also produces sillimanite and andalusite under different P-T conditions.',
            connections: ['staurolite-zone', 'sillimanite-zone'],
          },
          {
            id: 'sillimanite-zone',
            label: 'Sillimanite Zone (Z6)',
            description:
              "Above 600 °C · above 30 km burial. Highest Barrovian grade. Fine fibrous or columnar sillimanite marks the deepest crustal metamorphism before partial melting begins. Finding sillimanite-bearing gneiss at today's surface means a full mountain range — 30+ km of rock — once stood above it and has since been entirely removed by erosion.",
            connections: ['kyanite-zone', 'geothermal-gradient'],
          },
          {
            id: 'contact-meta',
            label: 'Contact Metamorphism',
            description:
              'Driven by heat from a magma intrusion, not burial depth. Highest grade immediately adjacent to the intrusion (hornfels); grade decreases outward. Forms a concentric metamorphic aureole at any crustal depth — even near the surface where regional burial metamorphism could never operate. Same index minerals, completely different geometry.',
            connections: ['geothermal-gradient'],
          },
          {
            id: 'mountain-exhumation',
            label: 'Exhumation & Exposure',
            description:
              "The process by which deeply buried metamorphic rocks are brought back to the surface. Erosion removes the overlying mountain belt at ~0.1–1 mm/yr; isostatic rebound lifts the remaining crust in response. The Scottish Highlands that Barrow studied represent the deeply exhumed core of a 400-million-year-old mountain belt — once as high as the Himalayas.",
            connections: ['garnet-zone', 'staurolite-zone', 'sillimanite-zone'],
          },
        ],
      },
    },
    {
      type: 'lab',
      title: 'Reconstruct burial histories from rock samples',
      premise:
        "A structural geologist has collected four rock samples from an ancient mountain belt now exposed at the surface. Using Barrow's index minerals and the geothermal gradient (~30 °C/km), reconstruct the burial history of each sample.",
      steps: [
        {
          instruction:
            'Sample 1 is a fine-grained, dark rock with a silky sheen. It splits along well-developed cleavage planes. Under a hand lens you can see tiny aligned flakes of green chlorite and muscovite but no larger porphyroblasts. Identify the rock name, metamorphic zone, and estimate the burial depth and temperature range at which it formed.',
          hint: "Silky sheen, fine-grained, splits along cleavage, green chlorite present — this is the lowest Barrovian zone. The rock is a phyllite (upgraded from slate). Use the 30 °C/km gradient to convert the temperature range of the chlorite zone into depth.",
        },
        {
          instruction:
            'Sample 2 is a coarser schist with abundant biotite mica flakes and euhedral (well-formed) red-brown garnet crystals 3–5 mm across. No staurolite or kyanite is visible. Identify the metamorphic zone, the minimum burial depth implied by the index mineral, and the protolith (original rock type) most likely to have produced this sample.',
          hint: 'Garnet present + biotite + no staurolite = garnet zone (Z3). The protolith of most schists is pelitic (aluminum-rich) sedimentary rock — originally a shale or mudstone. Use the garnet zone temperature to estimate depth with the 30 °C/km gradient.',
        },
        {
          instruction:
            'Sample 3 contains cross-shaped staurolite porphyroblasts clearly visible in hand specimen. The matrix is biotite schist. Kyanite is absent. Reconstruct the pressure-temperature conditions and calculate the minimum thickness of rock that must have been eroded since this rock was at maximum burial depth.',
          hint: 'Staurolite present + no kyanite = staurolite zone (Z4). You know the temperature range. Divide by the geothermal gradient to get depth range. The rock is now at the surface, so the entire burial depth was removed by erosion and isostatic exhumation.',
        },
        {
          instruction:
            'Sample 4 is a coarse gneiss with sillimanite needles (fibrolite) aligned in the foliation. Partial melting textures (leucosome veins of quartz + feldspar cutting across the rock) suggest it briefly crossed the solidus. What is the minimum temperature and depth this rock experienced? What type of large-scale geology explains its presence at the surface today?',
          hint: 'Sillimanite + partial melting = Z6 conditions, above the solidus (≥650 °C, ≥30 km). The rock is now at the surface, so >30 km of rock has been removed. This kind of exposure requires a fully eroded mountain belt — like the Scottish Highlands (Barrow\'s original field area) or the cores of ancient Precambrian cratons.',
        },
      ],
      xpReward: 75,
    },
    {
      type: 'challenge',
      title: 'Crustal P–T conditions sandbox',
      prompt:
        "Adjust burial depth and heat flux to model the pressure-temperature environment in the crust. The system will calculate temperature and pressure, then identify the rock-forming regime and expected mineral assemblage.",
      interaction: {
        type: 'sandbox-simulator',
        prompt: 'Set burial depth and crustal heat flux to simulate pressure-temperature conditions.',
        variables: [
          { id: 'depth', label: 'Burial Depth', min: 0, max: 90, default: 25, unit: 'km' },
          { id: 'heat', label: 'Heat Flux', min: 20, max: 160, default: 65, unit: 'mW/m²' },
        ],
        outputDescription: (vars) => {
          const { depth, heat } = vars
          const temp = Math.round(depth * 28 + heat * 0.4)
          const pressure = Math.round(depth * 0.03 * 10) / 10

          if (depth < 3 && heat < 50) return `P ≈ ${pressure} GPa, T ≈ ${temp} °C — surface/near-surface conditions. Weathering, erosion, and diagenesis dominate. No metamorphism; sediment accumulating.`
          if (depth < 10 && temp < 250) return `P ≈ ${pressure} GPa, T ≈ ${temp} °C — diagenetic zone. Sediments lithifying into sedimentary rock. No index minerals forming yet. Equivalent to burial beneath a young sedimentary basin (e.g., Gulf of Mexico).`
          if (temp >= 250 && temp < 400 && pressure < 0.6) return `P ≈ ${pressure} GPa, T ≈ ${temp} °C — greenschist facies / chlorite–biotite Barrovian zones. Low-grade metamorphism. Shale → phyllite → biotite schist. Chlorite, albite, and epidote are characteristic minerals.`
          if (temp >= 400 && temp < 600 && pressure < 1.2) return `P ≈ ${pressure} GPa, T ≈ ${temp} °C — amphibolite facies / garnet–staurolite–kyanite Barrovian zones. Medium-grade metamorphism. Garnet, hornblende, staurolite crystallizing. Typical of deep crust in an active mountain belt.`
          if (temp >= 600 && temp < 800 && pressure < 1.5) return `P ≈ ${pressure} GPa, T ≈ ${temp} °C — granulite facies / sillimanite zone. High-grade metamorphism. Sillimanite, garnet, and pyroxene. Represents the deepest crustal metamorphism before partial melting. Migmatite textures developing.`
          if (temp >= 700 && depth > 60) return `P ≈ ${pressure} GPa, T ≈ ${temp} °C — ultra-high pressure (UHP) metamorphism. Coesite (high-P SiO₂ polymorph) and diamond may form. Requires very deep burial >80 km — possible in subducted continental crust slabs.`
          if (temp >= 800) return `P ≈ ${pressure} GPa, T ≈ ${temp} °C — above the granite solidus (~750 °C). Partial to complete melting generating granite magma. This is how granite batholiths form at the base of thick continental crust. Cooling of this magma produces the igneous rocks in Bowen's Series.`
          return `P ≈ ${pressure} GPa, T ≈ ${temp} °C — transitional conditions. Intermediate metamorphic grade. Adjust depth or heat flux to reach a clearer facies boundary.`
        },
      },
      xpReward: 90,
    },
    {
      type: 'quiz',
      xpPerQuestion: 25,
      questions: [
        {
          q: "According to Bowen's Reaction Series, which mineral crystallizes LAST from a slowly cooling magma?",
          a: ['Olivine (~1,200–1,300 °C)', 'Calcium-rich plagioclase (~1,100 °C)', 'Amphibole (~900–1,100 °C)', 'Quartz (~650 °C)'],
          correct: 3,
          explain:
            "Quartz (SiO₂) is the final mineral to crystallize in Bowen's Series, at approximately 650 °C. Olivine is the first at ~1,200–1,300 °C. This sequence was experimentally determined by Norman Bowen in 1922 — it explains why quartz is abundant in granite (the last-formed, Si-enriched rock) but absent from early-crystallizing dunite and peridotite.",
        },
        {
          q: 'Two igneous rocks have identical bulk compositions but completely different textures: one has crystals several centimetres across; the other is fine-grained with no visible crystals. What most likely explains this?',
          a: [
            'They formed from different magma sources at different crustal depths',
            'One cooled slowly underground (intrusive); the other cooled rapidly at the surface (extrusive)',
            'One is far older, giving crystals more time to grow regardless of environment',
            'One was later recrystallized by metamorphism, destroying the original texture',
          ],
          correct: 1,
          explain:
            'Crystal size is controlled by cooling rate, not by age or bulk chemistry. Slow underground cooling (intrusive / plutonic) allows individual crystals to grow large over millions of years. Rapid surface cooling (extrusive / volcanic) produces fine-grained or glassy textures. Same composition — different thermal history.',
        },
        {
          q: 'A metamorphic rock contains staurolite crystals. Using Barrow\'s zones, what can be inferred about the conditions of formation?',
          a: [
            'Shallow burial at low pressure — approximately 150–200 °C and < 5 km',
            'Contact metamorphism immediately adjacent to a shallow granite intrusion',
            'Burial of approximately 20–25 km reaching ~500–550 °C',
            'Ultra-high pressure subduction to depths exceeding 80 km',
          ],
          correct: 2,
          explain:
            "Staurolite marks Barrow's fourth zone — approximately 500–550 °C and 20–25 km burial. George Barrow established these zones in the Scottish Highlands in 1893. Finding staurolite at the surface today implies that at least 20 km of overlying rock has been removed by erosion — an entire mountain belt exhumed.",
        },
        {
          q: 'The continental geothermal gradient averages ~28 °C/km. What is the approximate temperature at the base of a 35 km thick continental crust?',
          a: ['175–250 °C', '350–500 °C', '875–1,050 °C', '1,300–1,500 °C'],
          correct: 2,
          explain:
            '35 km × 25 °C/km = 875 °C (lower bound); 35 km × 30 °C/km = 1,050 °C (upper bound). This temperature range overlaps with the solidus of crustal rocks — explaining why deep mountain roots can partially melt and generate granite magmas (USGS Volcano Hazards Program).',
        },
        {
          q: 'Plagioclase feldspar in Bowen\'s continuous series ranges from calcium-rich (anorthite) to sodium-rich (albite). What does a crystal with a Ca-rich core and Na-rich rim indicate about its formation?',
          a: [
            'The crystal formed entirely at one temperature but then two compositions mixed',
            'The core crystallized first at high temperature (Ca-rich); the rim grew later as the melt cooled and became Na-enriched',
            'Sodium replaced calcium after the rock formed through hydrothermal alteration',
            'The core is older than the rim because erosion removed the original Ca-rich surface',
          ],
          correct: 1,
          explain:
            "Zoned plagioclase records its crystallization history within a single crystal. The Ca-rich (anorthite) core formed first at high temperature; as the magma cooled and Ca was depleted, later-growing crystal shells incorporated progressively more Na, producing a Na-rich (albite) rim. This chemical zoning is a direct record of magma evolution.",
        },
        {
          q: 'Which energy source primarily drives weathering, erosion, and sediment transport — the processes that produce sedimentary rocks?',
          a: [
            'Geothermal heat from radioactive decay in the mantle',
            'Tidal friction from the Moon–Earth gravitational system',
            'Solar radiation driving evaporation, rainfall, and freeze-thaw cycles',
            'Gravitational potential energy alone, independent of any other source',
          ],
          correct: 2,
          explain:
            "Solar radiation powers evaporation, rainfall, temperature cycling, and freeze-thaw — the agents that break rocks apart and mobilize sediment. Gravity transports material downhill but provides no energy input of its own; it converts potential energy that the solar-driven water cycle had already stored by lifting water vapor into the atmosphere.",
        },
      ],
    },
  ],
}

export default rockCycleIntermediate
