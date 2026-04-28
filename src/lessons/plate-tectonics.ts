import { ArrowLeftRight, Mountain, ArrowRightLeft } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const plateTectonics: Lesson = {
  id: 'plate-tectonics',
  title: 'Plate Tectonics Fundamentals',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '18 min',
  xpReward: 200,
  description: "The unifying theory of geology — how Earth's surface is broken into moving plates.",
  sources: [
    { org: 'USGS',            title: 'This Dynamic Earth (Kious & Tilling)',         url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'USGS',            title: 'How fast do tectonic plates move? (FAQ)',       url: 'https://www.usgs.gov/faqs/how-fast-do-tectonic-plates-move' },
    { org: 'NASA Earth Observatory', title: 'Plate Tectonics feature',               url: 'https://earthobservatory.nasa.gov/features/tectonics' },
    { org: 'EarthScope / IRIS', title: 'Seismology-based tectonics education',       url: 'https://www.earthscope.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A planet in motion',
      body: `Look at a world map. Notice how South America and Africa look like they could fit together? In 1912, meteorologist Alfred Wegener proposed they once did — part of a single supercontinent called **Pangaea**.

His idea was rejected for 50 years. He had no mechanism — no way to explain HOW continents could move. Then in the 1960s, seafloor mapping revealed an entirely new story: Earth's surface is broken into about a dozen rigid **plates** floating on a hot, flowing mantle.

This is plate tectonics — the theory that unifies nearly all of geology.`,
      keyTerms: [
        { term: 'Pangaea',            def: 'The supercontinent that existed roughly 335 to 175 million years ago, before breaking apart into the continents we see today.' },
        { term: 'Lithospheric plate', def: 'A rigid slab of crust and upper mantle that moves as a single unit. Earth has about a dozen major plates and several smaller ones.' },
        { term: 'Subduction',         def: 'The process where one tectonic plate slides beneath another and sinks into the mantle. It drives deep earthquakes, ocean trenches, and volcanic arcs.' },
        { term: 'Mantle convection',  def: 'The slow circulation of hot rock in the mantle driven by heat from Earth\'s core — the engine ultimately responsible for moving tectonic plates.' },
      ],
    },
    {
      type: 'concept',
      title: 'The three boundary types',
      body: 'Plates interact at their edges in three fundamentally different ways:',
      cards: [
        { name: 'Divergent',  icon: ArrowLeftRight, color: BRAND.accent,   desc: 'Plates pull apart. Magma rises to fill the gap, creating new crust.', examples: 'Mid-Atlantic Ridge, East African Rift' },
        { name: 'Convergent', icon: Mountain, color: BRAND.ruby,     desc: 'Plates collide. One plate may dive under another (subduction), building mountains, trenches, and volcanoes.', examples: 'Andes, Himalayas, Mariana Trench' },
        { name: 'Transform',  icon: ArrowRightLeft, color: BRAND.gold,     desc: 'Plates slide past each other horizontally. Produces earthquakes but little volcanism.', examples: 'San Andreas Fault, North Anatolian Fault' },
      ],
    },
    {
      type: 'concept',
      title: 'The evidence and the pace',
      body: `Plate tectonics is one of the best-supported theories in all of science. Multiple independent lines of evidence confirm it.

**Fossil distribution** — Identical fossils of the freshwater reptile *Mesosaurus* appear on both the South American and African coasts. It could not have crossed an ocean — the continents must have once been joined.

**Magnetic striping** — As new seafloor erupts at mid-ocean ridges, it records Earth's magnetic field direction. When the field later reverses, the next eruption records the new direction. This creates parallel stripes of alternating polarity on either side of the ridge — a perfect tape recording of seafloor spreading.

**Direct GPS measurement** — Modern satellites measure plate motion in real time. Per USGS, plates move at roughly the rate fingernails grow — about 2.5 to 15 centimetres per year depending on the plate.

These lines of evidence together explain phenomena that were previously mysterious: why earthquakes cluster in narrow belts, why volcanoes ring the Pacific, and why the ocean floor is nowhere older than about 200 million years.`,
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Mid-Atlantic Ridge is what type of plate boundary?',
          a: ['Convergent', 'Transform', 'Divergent', 'Passive'],
          correct: 2,
          explain: 'The Mid-Atlantic Ridge is divergent — the North American and Eurasian plates are pulling apart.',
        },
        {
          q: 'The Himalayas formed from which type of interaction?',
          a: ['Oceanic-oceanic convergence', 'Continent-continent convergence', 'Divergence', 'Transform motion'],
          correct: 1,
          explain: 'India collided with Asia ~50 million years ago. Neither continental plate subducts easily, so the crust crumpled upward.',
        },
        {
          q: 'What is the typical pace of plate motion, per USGS?',
          a: ['The rate of flowing rivers', 'The rate that fingernails grow', 'The speed of a walking person', 'Thousands of kilometers per year'],
          correct: 1,
          explain: 'USGS explicitly compares plate motion to fingernail growth. Rates range from ~2.5 cm/yr to ~15+ cm/yr.',
        },
      ],
    },
  ],
}

export default plateTectonics
