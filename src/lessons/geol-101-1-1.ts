import { Mountain, Layers, Waves, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const earthInternalStructure: Lesson = {
  id: 'geol-101-1-1',
  title: "Earth's Internal Structure",
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 150,
  description: "From crust to inner core — the four-layer structure of Earth and the seismic evidence that revealed it.",
  sources: [
    { org: 'USGS',                        title: 'This Dynamic Earth (Kious & Tilling)',         url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'USGS',                        title: 'Earthquake Hazards Program — Seismic Waves',   url: 'https://www.usgs.gov/programs/earthquake-hazards' },
    { org: 'NASA',                        title: 'Earth Facts — By the Numbers',                 url: 'https://science.nasa.gov/earth/facts/' },
    { org: 'OpenStax',                    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',        url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: "Earth's Interior",                       url: 'https://scied.ucar.edu/learning-zone/earth/earths-interior' },
  ],
  sections: [
    {
      type: 'intro',
      title: "We've never seen it",
      body: `How do we know what's 6,000 km beneath our feet without ever drilling that deep? The answer is stranger and more elegant than most people expect.

In 1970, Soviet scientists began drilling the deepest hole ever attempted — the Kola Superdeep Borehole in northwestern Russia. After 24 years of effort they reached **12.2 km**. That sounds impressive until you compare it to Earth's radius of **6,371 km**. They had drilled roughly 1/500th of the way through the planet — barely into the crust.

So how do we know what lies below? We have never seen it. No camera, no probe, and no drill has come close to Earth's center.

The answer is that Earth tells us its own story. Every time a major earthquake occurs, it sends waves of energy rippling through the entire planet — waves that seismograph stations around the world record in precise detail. Different materials transmit these **seismic waves** at different speeds and in different ways. By analyzing recordings from thousands of earthquakes, geoscientists have assembled a detailed portrait of Earth's interior — one confirmed by multiple independent lines of evidence.

This lesson introduces the four layers of Earth's interior, the seismic evidence that revealed them, and two different frameworks geologists use to describe the same planet.`,
      keyTerms: [
        {
          term: 'Crust',
          def: "Earth's thin, rocky outermost layer of silicate rock. Thickness ranges from about 7 km beneath the ocean floor to as much as 70 km beneath major mountain ranges.",
        },
        {
          term: 'Mantle',
          def: "The thick layer of silicate rock between the crust and the core, extending from the base of the crust to about 2,900 km depth. It is a plastic solid — technically solid (S-waves pass through it), yet it flows extremely slowly under sustained force, like cold butter or glacial ice. It makes up the majority of Earth's volume.",
        },
        {
          term: 'Core',
          def: "The dense, iron-rich center of Earth, divided into a liquid outer core (roughly 2,900–5,100 km depth) and a solid inner core (roughly 5,100–6,371 km depth).",
        },
        {
          term: 'Seismic wave',
          def: "A wave of mechanical energy released by an earthquake that travels through Earth's interior. The two main types — P-waves and S-waves — behave differently in solid versus liquid material, which is what makes them so informative about the layers they pass through.",
        },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'earth-cross-section',
        caption: "Earth's four-layer interior drawn to approximate scale. The crust ring is exaggerated ~8× for visibility — in reality it is thinner than the shell of an egg relative to the whole.",
        credit: 'USGS / OpenStax Physical Geology',
      },
    },
    {
      type: 'callout' as const,
      variant: 'data',
      headline: "The Kola Borehole drilled for 24 years and reached only 0.19% of the way to Earth's center",
      body: 'After 24 years of drilling, Soviet scientists reached 12.2 km — the deepest hole ever drilled by humans. Earth\'s radius is 6,371 km. That means humanity\'s deepest penetration into the planet barely scratches 1/500th of the distance to the center. At that depth, temperatures exceeded 180 °C — far hotter than predicted — and the rock behaved more like a plastic than a rigid solid, ultimately halting further progress.',
    },
    {
      type: 'concept',
      title: 'Four layers — and how we know',
      body: `Earth is divided into four major layers, nested like the rings of an onion from surface to center: the **crust**, the **mantle**, the **outer core**, and the **inner core**. Each differs in composition, temperature, pressure, and physical state. Think of it like a hard-boiled egg: a paper-thin shell (crust), a thick white (mantle), and a dense yolk (core) — except the yolk has a liquid ring around a solid center, and the "shell" is up to ten times thicker beneath a mountain range than beneath the ocean floor.

**Reading Earth's interior with seismic waves.** Two types of waves travel outward from every earthquake. **P-waves** (compressional, or "primary" waves) compress and expand rock as they travel; they pass through both solid and liquid material. **S-waves** (shear, or "secondary" waves) move rock sideways; they can only travel through solid material and are blocked entirely by liquids.

This difference is the key to unlocking Earth's structure. Beyond roughly **104°** of arc from any earthquake, seismograph stations detect P-waves but receive no direct S-waves. This **S-wave shadow zone** exists because S-waves encounter a liquid layer deep inside Earth and cannot pass through it. That liquid layer is the outer core — and its shadow zone is the single strongest piece of direct evidence that the outer core is molten.

P-wave arrival times also reveal a sharp speed increase about 7–70 km below the surface. This boundary — the **Moho**, or Mohorovičić discontinuity — marks where the crust ends and the mantle begins.

**Two ways to map the same planet.** Geologists use two different layering schemes depending on the question being asked. **Chemical layering** (crust / mantle / core) describes what each zone is *made of*. **Mechanical layering** describes how each zone *behaves*: the crust and the cold, brittle top of the mantle lock together into a single rigid unit called the **lithosphere**. Beneath it sits the **asthenosphere** — upper-mantle rock that, while technically solid, flows slowly over millions of years. These are not competing maps — they answer different questions about the same planet, and both frameworks appear throughout this course.

**Beyond seismology.** Seismic waves are the strongest line of evidence, but not the only one. Earth's average bulk density is about **5.5 g/cm³** — nearly twice the density of typical surface rocks (~2.7 g/cm³). Something far denser must lie at the center. Iron-nickel meteorites, believed to be fragments from the cores of shattered early planetary bodies, match the expected composition of a dense metallic core — an independent chemical fingerprint that aligns precisely with what seismology predicts.

In the next lesson we will zoom into the crust and discover why a thick continental block sits high above a thin slab of ocean floor — and why both qualify as "crust" despite being made of different things.`,
      cards: [
        {
          name: 'Crust',
          icon: Mountain,
          color: BRAND.coral,
          desc: "The thinnest of the four layers and the one where all surface geology, life, and human infrastructure exist. The crust is solid silicate rock rich in oxygen, silicon, aluminum, iron, and magnesium. Its lower boundary — the Moho — is marked by an abrupt increase in seismic-wave speed as waves enter the denser mantle below.",
          examples: 'Kola Borehole (12.2 km) barely scratched it · Oceanic crust ~7 km under Pacific · Continental crust up to 70 km under Himalayas · Moho at ~35 km beneath average continent',
        },
        {
          name: 'Mantle',
          icon: Layers,
          color: BRAND.gold,
          desc: "The largest layer by volume, stretching from the Moho to about 2,900 km depth. The mantle is solid silicate rock — primarily minerals rich in iron and magnesium — under enormous heat and pressure. Over timescales of millions of years it flows extremely slowly. The cold, uppermost part of the mantle is mechanically locked to the crust, forming the lithosphere.",
          examples: "~7–2,900 km depth · Solid silicate (olivine + pyroxene) · ~84% of Earth's volume · Flows at ~2–5 cm/yr in asthenosphere · Peridotite brought to surface at Hess Deep (Pacific) by seafloor spreading",
        },
        {
          name: 'Outer Core',
          icon: Waves,
          color: BRAND.accent,
          desc: "A layer about 2,200 km thick composed of liquid iron-nickel alloy. Its molten state is directly established by the S-wave shadow zone — shear waves cannot travel through liquid and are absorbed at the outer core boundary. Temperatures here reach roughly 4,000–5,000 °C. The motion of this electrically conducting liquid is associated with Earth's magnetic field.",
          examples: `~2,900–5,100 km depth · Liquid iron-nickel · ~2,200 km thick (similar width to the Moon\'s diameter) · S-wave shadow zone proves liquid state · Geodynamo powers Earth\'s magnetic field from here`,
        },
        {
          name: 'Inner Core',
          icon: Globe,
          color: BRAND.amethyst,
          desc: "A solid iron-nickel sphere at Earth's very center, about 1,200 km in radius. Despite temperatures that may reach 5,000–6,000 °C — comparable to the surface of the Sun — the inner core remains solid because the immense pressure suppresses melting. Its solid state was inferred from detailed analysis of how P-waves pass through the exact center of the planet.",
          examples: 'PKIKP seismic wave refraction detects solid state · ~5,100–6,371 km depth · Solid iron-nickel · ~1,200 km radius · Differential rotation ~0.3°/yr',
        },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'seismic-shadow-zone',
        caption: "P-waves reach stations worldwide; S-waves disappear beyond 104° from the earthquake. This S-wave shadow zone is the direct observational proof that the outer core is liquid.",
        credit: 'USGS Earthquake Hazards Program',
      },
    },
    {
      type: 'visualization',
      title: "Earth's Interior at a Glance",
      body: "Click each layer to explore its depth range, temperature, physical state, and the evidence that revealed it.",
      interaction: {
        type: 'layered-visual',
        description: "Cross-section from surface (top) to inner core (bottom). Layer heights are proportional to actual depths.",
        layers: [
          {
            id: 'crust',
            label: 'Crust',
            sublabel: '0 – 70 km',
            color: BRAND.coral,
            thickness: 1,
            state: 'solid',
            temperature: '0 – 900 °C',
            description: "Earth's outermost layer of solid silicate rock, rich in oxygen, silicon, and aluminium. Despite being where all surface geology occurs, the crust is by far the thinnest layer — comparable to the skin of an apple relative to the fruit.",
            facts: [
              'Oceanic crust: ~7 km thick, dense basalt (mafic)',
              'Continental crust: 30–70 km thick, lighter granite/gneiss (felsic)',
              'Moho discontinuity marks the base — seismic P-wave speed jumps here',
              'Makes up only ~1% of Earth\'s volume',
            ],
          },
          {
            id: 'mantle',
            label: 'Mantle',
            sublabel: '70 – 2,900 km',
            color: BRAND.gold,
            thickness: 5,
            state: 'solid (plastic)',
            temperature: '900 – 3,700 °C',
            description: "The thickest layer, comprising ~84% of Earth's volume. The mantle is solid iron-magnesium silicate rock (olivine, pyroxene), yet under geological timescales it flows extremely slowly — a viscous solid rather than a liquid. This plastic flow drives plate tectonics.",
            facts: [
              'Upper mantle (~70–400 km): rigid top forms the lithosphere with crust',
              'Asthenosphere (~100–350 km): partially molten weak zone — plates slide over this',
              'Transition zone (410–660 km): mineral phase changes create seismic discontinuities',
              'Lower mantle (660–2,900 km): denser silicate perovskite under extreme pressure',
            ],
          },
          {
            id: 'outer-core',
            label: 'Outer Core',
            sublabel: '2,900 – 5,100 km',
            color: BRAND.accent,
            thickness: 3,
            state: 'liquid',
            temperature: '3,700 – 5,000 °C',
            description: "The only large-scale liquid layer inside Earth — a turbulent sea of molten iron-nickel alloy. Its liquid state is proven beyond doubt by the S-wave shadow zone: shear seismic waves cannot travel through liquid and vanish at the outer core boundary.",
            facts: [
              'S-waves blocked entirely → liquid state confirmed by seismology',
              'Convecting iron generates Earth\'s magnetic field (geodynamo)',
              '~2,200 km thick — similar width to the Moon\'s diameter',
              'Flows at ~0.2–0.5 mm/s — rapid by geological standards',
            ],
          },
          {
            id: 'inner-core',
            label: 'Inner Core',
            sublabel: '5,100 – 6,371 km',
            color: BRAND.amethyst,
            thickness: 1.8,
            state: 'solid',
            temperature: '~5,000 – 6,000 °C',
            description: "A solid iron-nickel sphere at Earth's very center, despite temperatures rivalling the Sun's surface. Pressure is so extreme (~360 GPa) that it prevents melting — iron cannot become liquid at these pressures even at 6,000 °C.",
            facts: [
              'Radius ~1,220 km — roughly the size of the Moon',
              'Solid despite extreme heat because pressure suppresses the melting point',
              'Rotates very slightly faster than the overlying mantle (~0.3°/yr differential)',
              'P-waves through the core reveal its solid state via refraction patterns',
            ],
          },
        ],
      },
    },
    {
      type: 'concept',
      title: 'Key takeaways',
      body: `• **Seismic waves are our X-ray machine**: The S-wave shadow zone — the belt of silence beyond ~104° from every earthquake — is direct proof that the outer core is liquid, because S-waves cannot travel through fluid. No drill or camera is needed; every major earthquake performs this experiment automatically.

• **Chemical and mechanical layering answer different questions**: The crust/mantle/core scheme describes *what* each layer is made of; the lithosphere/asthenosphere scheme describes *how* each layer behaves. Both are correct and both are useful — choosing between them depends on the question being asked.

• **Density fingerprints confirm the core's composition**: Earth's average density (~5.5 g/cm³) is nearly twice that of surface rocks (~2.7 g/cm³), meaning something very dense must lie at the center. Iron-nickel meteorites — fragments from shattered early planetary bodies — match the expected composition exactly, providing a chemical confirmation that is entirely independent of seismology.`,
      interaction: {
        type: 'annotated-image' as const,
        src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Slice_earth.jpg',
        alt: "Cross-section diagram of Earth's interior showing the crust, mantle, outer core, and inner core",
        aspectRatio: '4/3',
        credit: 'Wikimedia Commons',
        annotations: [
          {
            id: '1',
            x: 50,
            y: 50,
            label: 'Inner Core',
            description: 'The solid iron-nickel sphere at Earth\'s very center, roughly 1,220 km in radius. Despite temperatures of ~5,000–6,000 °C, enormous pressure keeps it solid.',
          },
          {
            id: '2',
            x: 50,
            y: 35,
            label: 'Outer Core',
            description: 'A ~2,200 km thick shell of liquid iron-nickel alloy. Its molten state is proven by the S-wave shadow zone — shear waves cannot pass through this layer.',
          },
          {
            id: '3',
            x: 50,
            y: 20,
            label: 'Mantle',
            description: 'The largest layer by volume (~84% of Earth), composed of solid silicate rock that flows plastically over millions of years, driving plate tectonics.',
          },
          {
            id: '4',
            x: 50,
            y: 8,
            label: 'Crust',
            description: 'Earth\'s thin outermost layer, ranging from ~7 km beneath oceans to ~70 km beneath mountain ranges. All surface geology and life exists here.',
          },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Which of Earth's four layers is a liquid iron-nickel alloy that surrounds a solid iron-nickel sphere?",
          a: [
            'The crust — the thin outer shell of solid silicate rock',
            'The mantle — the thick layer of slowly flowing silicate rock',
            'The outer core — the molten iron-nickel layer proved liquid by S-wave data',
            'The asthenosphere — the slowly deforming zone within the upper mantle',
          ],
          correct: 2,
          explain: `The crust (A) is solid silicate rock at the surface — not metallic and not liquid. The mantle (B) is also solid silicate, far thicker than the crust but compositionally different from the core; it flows slowly as solid rock, not as liquid metal. The outer core (C) is correct: approximately 2,200 km of liquid iron-nickel alloy whose molten state is established by the S-wave shadow zone, surrounding the solid inner core at Earth\'s center. The asthenosphere (D) is a mechanical zone in the upper mantle that flows slowly as solid rock under heat and pressure — it is not metallic, not liquid, and entirely different from the outer core.`,
        },
        {
          q: "What does the S-wave shadow zone — the region beyond ~104° from an earthquake where no direct S-waves arrive — prove about Earth's interior?",
          a: [
            'The mantle is too thick for S-waves to penetrate all the way through',
            'P-waves travel faster than S-waves and outrun them over long distances',
            'The outer core is liquid, because S-waves cannot propagate through liquid material',
            'The inner core deflects all seismic waves back toward Earth\'s surface',
          ],
          correct: 2,
          explain: "S-waves travel through the mantle without difficulty — the shadow zone begins at the core boundary, not the base of the mantle, so (A) is wrong. The speed difference between P-waves and S-waves affects arrival times everywhere but does not create a zone where S-waves go completely missing, so (B) is wrong. The outer core being liquid (C) is correct: shear waves require a rigid solid medium to propagate; when they reach the liquid outer core they are absorbed and cannot continue, leaving a predictable zone of silence on the far side of Earth. The inner core is solid, not a reflective shield; P-waves do pass through it and refract at angles that reveal its solid state, so (D) is wrong.",
        },
        {
          q: 'A student writes: "The lithosphere is just another name for the crust." What is wrong with this statement?',
          a: [
            'Nothing — lithosphere and crust are synonyms in modern geology',
            'The lithosphere includes the crust plus the rigid uppermost mantle, so it is thicker than the crust alone',
            'The crust is thicker than the lithosphere and contains the upper mantle',
            'The lithosphere is a chemical layer defined by composition, while the crust is a mechanical layer defined by rigidity',
          ],
          correct: 1,
          explain: "Lithosphere and crust are not synonyms — confusing them obscures why tectonic plates behave as they do, so (A) is wrong. The lithosphere (B) is correct: defined mechanically as the rigid outer shell of the planet, it includes the entire crust plus the cold, brittle uppermost mantle; it is therefore thicker than the crust alone — typically 100 km or more in total. The relationship in (C) is inverted: the crust is the thinner layer, fully contained within the broader lithosphere. The labels in (D) are reversed: the crust is the chemical layer (defined by silicate composition) and the lithosphere is the mechanical layer (defined by rigidity) — not the other way around.",
        },
      ],
    },
  ],
}

export default earthInternalStructure
