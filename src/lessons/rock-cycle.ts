import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const rockCycle: Lesson = {
  id: 'rock-cycle',
  title: 'The Rock Cycle',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 150,
  description: 'How rocks transform between igneous, sedimentary, and metamorphic forms over deep time.',
  sources: [
    { org: 'USGS',     title: 'Rocks and Minerals Educational Resources', url: 'https://www.usgs.gov/educational-resources' },
    { org: 'OpenStax', title: 'Introduction to Geology (CC-BY)',           url: 'https://openstax.org' },
    { org: 'AGI',      title: 'Glossary of Geology (5th ed.)',             url: 'https://americangeosciences.org' },
    { org: 'PRI',      title: 'Earth@Home Digital Encyclopedia',           url: 'https://earthathome.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Nothing is permanent',
      body: `The solid ground beneath your feet is anything but permanent. Over millions of years, rocks constantly transform from one type to another through heat, pressure, weathering, and melting.

This endless transformation is called the **rock cycle** — one of Earth's most fundamental processes. A mountain eroding today may become a beach tomorrow, then a buried sandstone, then a metamorphic gneiss, then molten magma, then a volcanic rock.

Understanding the rock cycle means understanding how Earth itself works.`,
      keyTerms: [
        { term: 'Lithosphere', def: "Earth's rigid outer layer, including the crust and upper mantle." },
        { term: 'Deep time',   def: 'The geological timescale — millions to billions of years.' },
      ],
    },
    {
      type: 'concept',
      title: 'The three rock families',
      body: 'Every rock on Earth belongs to one of three great families, each formed by a different process:',
      cards: [
        { name: 'Igneous',     icon: '🔥', color: BRAND.ruby,  desc: 'Born from fire. Forms when molten rock (magma or lava) cools and crystallizes.', examples: 'Granite, basalt, obsidian, pumice' },
        { name: 'Sedimentary', icon: '🏖️', color: BRAND.gold,  desc: 'Built from debris. Forms when sediments (sand, mud, shells) are compacted and cemented.', examples: 'Sandstone, limestone, shale, conglomerate' },
        { name: 'Metamorphic', icon: '💎', color: BRAND.jade,  desc: 'Transformed under pressure. Forms when existing rocks are altered by heat and pressure without fully melting.', examples: 'Marble, slate, gneiss, schist' },
      ],
    },
    {
      type: 'concept',
      title: 'The transformation processes',
      body: `Four key processes drive the cycle:

**1. Cooling & crystallization** — When magma cools slowly underground it forms coarse-grained rocks like granite. When lava cools rapidly at the surface it forms fine-grained rocks like basalt.

**2. Weathering & erosion** — Wind, water, ice, and biological activity break rocks apart. Rivers and glaciers transport the fragments to basins.

**3. Compaction & cementation** — Layer after layer of sediment buries older layers. Pressure squeezes out water and dissolved minerals "glue" grains together into solid rock.

**4. Heat & pressure** — Deep burial or tectonic forces can bake and squeeze rocks until their minerals recrystallize into new arrangements — without ever fully melting.

Any rock can become any other rock, given enough time and the right conditions.`,
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A rock forms as magma slowly cools deep underground. What type of rock is it?',
          a: ['Sedimentary', 'Metamorphic', 'Igneous', 'Biological'],
          correct: 2,
          explain: 'Igneous rocks form from cooled magma or lava. Slow cooling underground produces coarse-grained varieties like granite.',
        },
        {
          q: 'Which process turns sand and shell fragments into sandstone?',
          a: ['Melting', 'Compaction and cementation', 'Crystallization', 'Fossilization'],
          correct: 1,
          explain: 'Sediments are buried under new layers, compacted by pressure, and cemented by minerals dissolved in groundwater.',
        },
        {
          q: 'Marble is a metamorphic rock. What was it before metamorphism?',
          a: ['Granite', 'Basalt', 'Limestone', 'Shale'],
          correct: 2,
          explain: 'Marble forms when limestone is subjected to heat and pressure, causing its calcite crystals to recrystallize into interlocking grains.',
        },
      ],
    },
  ],
}

export default rockCycle
