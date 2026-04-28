import type { LessonV2 } from '../types'

const rockCycleV2: LessonV2 = {
  version: 2,
  id: 'rock-cycle-v2',
  title: 'The Rock Cycle',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '15 min',
  xpReward: 200,
  description: 'Explore how rocks transform between igneous, sedimentary, and metamorphic forms — with interactive simulations.',
  sections: [
    {
      type: 'intro',
      title: 'Nothing is permanent',
      body: `The solid ground beneath your feet is anything but permanent. Over millions of years, rocks constantly transform from one type to another through heat, pressure, weathering, and melting.

This endless transformation is called the **rock cycle** — one of Earth's most fundamental processes. A mountain eroding today may become a beach, then a buried sandstone, then a metamorphic gneiss, then molten magma, then a new volcanic rock.

Use the simulation below to explore how temperature drives rock transformation.`,
      interaction: {
        type: 'slider-simulation',
        label: 'Crustal Temperature',
        min: 20,
        max: 1300,
        step: 10,
        unit: '°C',
        defaultValue: 200,
        outputLabel: 'Rock State',
        formula: (temp: number) => {
          if (temp < 150) return 'Surface rock — stable, no transformation'
          if (temp < 300) return 'Low-grade metamorphism beginning'
          if (temp < 600) return 'Metamorphic recrystallization active'
          if (temp < 800) return 'High-grade metamorphic conditions'
          if (temp < 1000) return 'Partial melting — migmatite forming'
          return 'Full melt — magma chamber'
        },
        description: 'Drag the slider to see how increasing crustal temperature changes rock behavior. Most metamorphic rocks form between 300–700°C.',
      },
    },
    {
      type: 'concept',
      title: 'The three rock families',
      body: `Every rock on Earth belongs to one of three great families, each formed by a different process. They can transform into each other given enough time and the right conditions.`,
      points: [
        'Igneous rocks — Born from fire. Form when molten rock (magma or lava) cools and crystallizes. Examples: Granite, Basalt, Obsidian.',
        'Sedimentary rocks — Built from debris. Form when sediments are deposited in layers, compacted, and cemented. Examples: Sandstone, Limestone, Shale.',
        'Metamorphic rocks — Transformed under pressure. Form when existing rocks are altered by extreme heat and pressure without fully melting. Examples: Marble, Slate, Gneiss.',
      ],
    },
    {
      type: 'visualization',
      title: 'How rock types connect',
      body: 'The three rock families are linked by four key processes. Select any node to explore how it connects to others in the cycle.',
      interaction: {
        type: 'node-explorer',
        nodes: [
          {
            id: 'igneous',
            label: 'Igneous Rock',
            description: 'Forms from cooled magma or lava. Slow cooling underground creates large crystals (granite); rapid surface cooling produces fine-grained or glassy textures (basalt, obsidian).',
            connections: ['magma', 'weathering', 'heat-pressure'],
          },
          {
            id: 'sedimentary',
            label: 'Sedimentary Rock',
            description: 'Formed from compacted layers of sediment — sand, silt, organic matter, or shell fragments. The process of lithification turns loose sediment into solid rock over millions of years.',
            connections: ['weathering', 'compaction', 'heat-pressure'],
          },
          {
            id: 'metamorphic',
            label: 'Metamorphic Rock',
            description: 'Formed when igneous or sedimentary rocks are subjected to extreme heat and pressure, causing their minerals to recrystallize without fully melting. Slate, marble, and gneiss are common examples.',
            connections: ['heat-pressure', 'magma'],
          },
          {
            id: 'magma',
            label: 'Magma / Lava',
            description: 'Molten rock beneath the surface (magma) or erupted at the surface (lava). When it cools and solidifies, it becomes igneous rock. The source of all new rock material on Earth.',
            connections: ['igneous', 'metamorphic'],
          },
          {
            id: 'weathering',
            label: 'Weathering & Erosion',
            description: 'Physical and chemical breakdown of surface rocks by wind, water, ice, and biology. Produces sediment that is transported by rivers and glaciers to depositional basins.',
            connections: ['igneous', 'sedimentary'],
          },
          {
            id: 'compaction',
            label: 'Compaction & Cementation',
            description: 'Sediments buried under new layers are squeezed by the weight above. Dissolved minerals in groundwater fill pore spaces and cement grains together, creating solid sedimentary rock.',
            connections: ['sedimentary'],
          },
          {
            id: 'heat-pressure',
            label: 'Heat & Pressure',
            description: 'Deep burial, tectonic collision, or proximity to magma subjects rock to extreme conditions. Minerals recrystallize into new stable forms without melting — the defining process of metamorphism.',
            connections: ['igneous', 'sedimentary', 'metamorphic'],
          },
        ],
      },
    },
    {
      type: 'visualization',
      title: 'Rock cycle through deep time',
      body: 'The rock cycle has been operating for over 4 billion years. Scrub through geological time to see major milestones in Earth\'s rock history.',
      interaction: {
        type: 'timeline-scrubber',
        events: [
          {
            year: '4.54 Ga',
            label: 'Earth forms',
            description: 'Accretion from the solar nebula. The young Earth is entirely molten — a global magma ocean. The first igneous crust begins solidifying as the planet cools.',
          },
          {
            year: '4.4 Ga',
            label: 'First zircons',
            description: 'Zircon crystals from the Jack Hills of Australia are the oldest known minerals, forming from the earliest granitic crust and surviving multiple cycles of erosion.',
          },
          {
            year: '3.8 Ga',
            label: 'First sedimentary rocks',
            description: 'The Isua Supracrustal Belt in Greenland contains the oldest known sedimentary rocks — evidence that liquid water, weathering, and erosion were already active this early.',
          },
          {
            year: '2.7 Ga',
            label: 'Cratons stabilize',
            description: 'Ancient continental shields (cratons) of Archean granite and gneiss become stable. These form the cores of modern continents and have avoided major reworking ever since.',
          },
          {
            year: '540 Ma',
            label: 'Cambrian explosion',
            description: 'The rapid diversification of complex life dramatically increases the rate of biogenic carbonate deposition — organisms building shells and skeletons that become limestone and chalk.',
          },
          {
            year: '250 Ma',
            label: 'Permian mass extinction',
            description: 'The largest mass extinction in Earth history coincides with the Siberian Traps flood basalt event — the most massive igneous eruption since the Archean, releasing vast amounts of CO₂.',
          },
          {
            year: 'Present',
            label: 'The cycle continues',
            description: 'Today, 15–20 tectonic plates are in motion. Subduction zones return oceanic crust to the mantle; mid-ocean ridges produce new basalt; mountain belts expose metamorphic cores to erosion.',
          },
        ],
      },
    },
    {
      type: 'lab',
      title: 'Identify rocks by their formation',
      premise: 'A field geologist collects four rock samples. Using your knowledge of the rock cycle, work through each identification step.',
      steps: [
        {
          instruction: 'Sample A has large interlocking crystals of quartz, feldspar, and mica. The crystals are several millimeters across. Determine the rock type and cooling environment.',
          hint: 'Large crystal size = slow cooling. Slow cooling happens deep underground, away from the surface. This combination points to a specific igneous category.',
        },
        {
          instruction: 'Sample B shows thin parallel layers of fine-grained dark minerals. The rock splits easily along these planes. Identify the metamorphic rock and its likely parent rock.',
          hint: 'Thin, parallel foliation (layering) in fine-grained rock is characteristic of low- to medium-grade metamorphism. The parent rock was likely a fine-grained sedimentary rock.',
        },
        {
          instruction: 'Sample C contains visible shell fragments, coral pieces, and fine carbonate mud cemented together. Name the rock and its depositional environment.',
          hint: 'Shell and coral fragments indicate marine deposition. The calcium carbonate cement and bioclasts together point to a warm, shallow-marine sedimentary environment.',
        },
        {
          instruction: 'Sample D is glassy and black with a conchoidal (curved) fracture. It has no visible crystals. Explain the formation conditions.',
          hint: 'No crystals means the melt cooled so rapidly that crystals had no time to nucleate and grow. This typically happens when magma contacts water or air at the surface very suddenly.',
        },
      ],
      xpReward: 60,
    },
    {
      type: 'challenge',
      title: 'Pressure–Temperature sandbox',
      prompt: 'Adjust crustal depth and heat flux below to model what type of rock would form under your chosen conditions. Observe how changing both variables shifts the outcome.',
      interaction: {
        type: 'sandbox-simulator',
        prompt: 'Set the burial depth and heat flux to simulate pressure-temperature conditions in the crust.',
        variables: [
          { id: 'depth', label: 'Burial Depth', min: 0, max: 80, default: 20, unit: 'km' },
          { id: 'heat', label: 'Heat Flux', min: 20, max: 150, default: 60, unit: 'mW/m²' },
        ],
        outputDescription: (vars) => {
          const { depth, heat } = vars
          const temp = (depth * 25) + (heat * 0.5)
          const pressure = depth * 0.03

          if (depth < 5 && heat < 40) return `At ${depth.toFixed(0)} km depth and low heat flux, surface conditions dominate. Weathering and erosion are active. Sediments accumulate in basins.`
          if (depth < 15 && temp < 300) return `P = ${pressure.toFixed(1)} GPa, T ≈ ${temp.toFixed(0)}°C — diagenesis and early compaction. Sediments are lithifying into sedimentary rock.`
          if (temp < 400 && pressure < 0.8) return `P = ${pressure.toFixed(1)} GPa, T ≈ ${temp.toFixed(0)}°C — greenschist facies. Low-grade metamorphism. Shale → slate → phyllite.`
          if (temp < 600 && pressure < 1.5) return `P = ${pressure.toFixed(1)} GPa, T ≈ ${temp.toFixed(0)}°C — amphibolite facies. Medium-grade metamorphism. Garnet and hornblende form.`
          if (temp < 800) return `P = ${pressure.toFixed(1)} GPa, T ≈ ${temp.toFixed(0)}°C — granulite facies. High-grade metamorphism near the base of the crust. Gneiss and migmatite.`
          return `P = ${pressure.toFixed(1)} GPa, T ≈ ${temp.toFixed(0)}°C — partial to complete melting. Granite magma generated. New igneous rock will form on cooling.`
        },
      },
      xpReward: 75,
    },
    {
      type: 'quiz',
      xpPerQuestion: 25,
      questions: [
        {
          q: 'A rock forms as magma slowly cools 10 km below the surface. What type of rock is it, and what texture would you expect?',
          a: [
            'Sedimentary — fine-grained layers',
            'Metamorphic — foliated bands',
            'Igneous — coarse-grained crystals',
            'Igneous — glassy, no crystals',
          ],
          correct: 2,
          explain: 'Slow underground cooling allows crystals to grow large over millions of years, producing coarse-grained intrusive igneous rocks like granite. Rapid surface cooling produces fine-grained or glassy textures.',
        },
        {
          q: 'Which pressure-temperature condition defines the metamorphic "granulite facies"?',
          a: [
            'Low temperature (<300°C), low pressure',
            'Medium temperature (400–600°C), medium pressure',
            'High temperature (>700°C), high pressure at the base of the crust',
            'Near-melting conditions in the upper mantle',
          ],
          correct: 2,
          explain: 'Granulite facies represents the highest-grade crustal metamorphism short of melting, typically occurring at 700–900°C and 0.8–1.5 GPa near the base of thick continental crust.',
        },
        {
          q: 'Marble is a metamorphic rock. Which parent rock (protolith) does it form from?',
          a: ['Granite', 'Basalt', 'Limestone', 'Shale'],
          correct: 2,
          explain: 'Marble forms when limestone (calcium carbonate) is subjected to heat and pressure, causing its calcite crystals to recrystallize into large, interlocking grains. The fossils and layering of the original limestone are typically destroyed.',
        },
        {
          q: 'What process converts loose sediment into solid sedimentary rock?',
          a: ['Crystallization', 'Lithification (compaction + cementation)', 'Foliation', 'Partial melting'],
          correct: 1,
          explain: 'Lithification encompasses two linked processes: compaction (pressure from overlying sediment squeezes out water and reduces pore space) and cementation (dissolved minerals precipitate in remaining pores, binding grains).',
        },
      ],
    },
  ],
}

export default rockCycleV2
