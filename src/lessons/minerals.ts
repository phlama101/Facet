import { Globe, Atom, Snowflake, FlaskConical, Gem } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const minerals: Lesson = {
  id: 'minerals',
  title: 'Minerals vs. Rocks',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '10 min',
  xpReward: 120,
  description: 'Learn what defines a mineral and how geologists identify them.',
  sources: [
    { org: 'USGS',                title: 'Mineral Resources Program',             url: 'https://www.usgs.gov/programs/mineral-resources-program' },
    { org: 'AGI',                 title: 'Glossary of Geology definitions',        url: 'https://americangeosciences.org/publications/glossary' },
    { org: 'OpenStax',            title: 'Introduction to Earth Science',          url: 'https://openstax.org' },
    { org: 'National Park Service', title: 'Mohs hardness scale for park geology', url: 'https://www.nps.gov/subjects/geology' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The building blocks',
      body: `People often use "rock" and "mineral" interchangeably — but to a geologist they're very different things.

A **mineral** is a single, pure substance with a specific chemical formula and crystal structure. A **rock** is a mixture of one or more minerals stuck together.

Granite, for example, is a rock — you can see the individual pink (feldspar), white (quartz), and black (mica) mineral grains if you look closely. Each of those grains is a distinct mineral with its own chemistry and crystal form.

There are over 5,500 known minerals, but just a handful — quartz, feldspar, mica, calcite, olivine, pyroxene — make up the vast majority of Earth's crust.`,
      keyTerms: [
        { term: 'Mineral',       def: 'A naturally occurring, inorganic, solid substance with a specific chemical formula and an ordered crystalline structure. Must meet all five defining criteria.' },
        { term: 'Crystal',       def: 'A solid in which atoms are arranged in a regular, repeating three-dimensional pattern. This internal order gives each mineral its characteristic shape, cleavage, and optical properties.' },
        { term: 'Mohs hardness', def: 'A relative 1-to-10 scale ranking minerals by their resistance to being scratched, developed by Friedrich Mohs in 1812.' },
      ],
    },
    {
      type: 'concept',
      title: 'The five criteria',
      body: 'To qualify as a mineral (per AGI and USGS definitions), a substance must meet all five of these requirements:',
      cards: [
        { name: '1. Naturally occurring', icon: Globe, color: BRAND.jade,     desc: 'Must form through geological processes — not synthesized in a lab.' },
        { name: '2. Inorganic',           icon: Atom, color: BRAND.accent,   desc: 'Not produced by living organisms (pearls and coral do not count as minerals).' },
        { name: '3. Solid',               icon: Snowflake, color: BRAND.amethyst, desc: 'Liquids and gases are excluded — though ice IS a mineral.' },
        { name: '4. Definite formula',    icon: FlaskConical, color: BRAND.coral,    desc: 'Fixed composition, like quartz = SiO₂ or halite = NaCl.' },
        { name: '5. Crystalline',         icon: Gem, color: BRAND.gold,     desc: 'Atoms arranged in an orderly, repeating 3D pattern.' },
      ],
    },
    {
      type: 'concept',
      title: 'The Mohs hardness scale',
      body: `Hardness is one of the most useful properties for identifying a mineral in the field — and all you need are a few everyday objects. A harder mineral will always scratch a softer one.

**1. Talc** — scratched by a fingernail with ease; the softest mineral
**2. Gypsum** — just scratched by a fingernail (~2.5)
**3. Calcite** — a copper coin (~3.5) scratches it
**4. Fluorite** — scratched by a steel knife or nail file (~5.5)
**5. Apatite** — a steel knife barely scratches it
**6. Orthoclase feldspar** — scratches glass; a file barely marks it
**7. Quartz** — the hardest common mineral; scratches glass easily
**8. Topaz** — scratches quartz
**9. Corundum** — ruby and sapphire; scratches topaz
**10. Diamond** — scratches everything; the hardest natural substance

The scale is **relative, not linear**: diamond is roughly four times harder than corundum by absolute measurement, not just one step harder. Always test in both directions — if two minerals don't scratch each other, they have similar hardness.`,
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Which of these is a ROCK, not a mineral?',
          a: ['Quartz', 'Granite', 'Halite', 'Calcite'],
          correct: 1,
          explain: 'Granite is a rock composed of multiple minerals — typically quartz, feldspar, and mica.',
        },
        {
          q: 'A mineral scratches glass but is scratched by a steel file. What is its Mohs hardness?',
          a: ['About 2', 'About 5-6', 'About 8-9', 'Exactly 10'],
          correct: 1,
          explain: 'Steel files are about 6.5 on the Mohs scale, and glass is about 5.5.',
        },
        {
          q: 'Why does ice count as a mineral, but liquid water does not?',
          a: ['Ice is inorganic', 'Ice is solid and crystalline', 'Ice is rarer', 'Arbitrary tradition'],
          correct: 1,
          explain: 'A mineral must be solid with a crystalline structure. Ice meets all five criteria; liquid water fails the "solid" test.',
        },
      ],
    },
  ],
}

export default minerals
