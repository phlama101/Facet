import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const cloudTypes: Lesson = {
  id: 'cloud-types',
  title: 'Reading the Sky: Cloud Types',
  track: 'atm',
  trackName: 'Meteorology',
  level: 'Beginner',
  duration: '10 min',
  xpReward: 120,
  description: 'Identify the main cloud families and what they tell you about coming weather.',
  sources: [
    { org: 'UCAR',     title: 'Clouds educational resources',           url: 'https://scied.ucar.edu/learning-zone/clouds' },
    { org: 'NOAA NWS', title: 'Ten basic cloud types',                  url: 'https://www.weather.gov/lmk/cloud_classification' },
    { org: 'WMO',      title: 'International Cloud Atlas',              url: 'https://cloudatlas.wmo.int' },
    { org: 'NASA',     title: "Clouds & Earth's energy budget",         url: 'https://science.nasa.gov/earth/climate-change' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The sky is an instrument',
      body: `Clouds are not just weather decoration — they are a free, real-time readout of atmospheric conditions. With a few minutes of observation, you can forecast the next few hours of weather with surprising accuracy.

Modern cloud classification descends from British pharmacist Luke Howard, who proposed the Latin-based naming system in 1803. Today the World Meteorological Organization's International Cloud Atlas is the global standard.

Clouds are classified by two things: **altitude** (how high they form) and **shape** (puffy, flat, or wispy).`,
    },
    {
      type: 'concept',
      title: "The three shape families",
      body: "Every cloud shape descends from three Latin root words in Luke Howard's 1803 system:",
      cards: [
        { name: 'Cumulus', icon: '☁️', color: BRAND.text,    desc: '"Heap" — puffy cauliflower-shaped clouds with flat bottoms. Form from rising warm air.', examples: 'Fair weather · Thunderstorms' },
        { name: 'Stratus', icon: '🌫️', color: BRAND.textDim, desc: '"Layer" — flat, sheet-like clouds that cover broad areas uniformly.', examples: 'Overcast drizzle · Fog' },
        { name: 'Cirrus',  icon: '🪶', color: BRAND.accent,  desc: '"Curl" — thin, wispy, high-altitude clouds made of ice crystals.', examples: 'Horsetail streaks · Halos' },
      ],
    },
    {
      type: 'concept',
      title: 'Altitude prefixes',
      body: `Combine shapes with altitude prefixes to name most clouds:

**Cirro-** (high, above ~6 km): Made of ice crystals. Cirrostratus, cirrocumulus.
**Alto-** (mid, 2–6 km): Mixed water and ice. Altostratus, altocumulus.
**No prefix** (low, below 2 km): Mostly water droplets.
**Nimbo-** or **-nimbus**: Indicates precipitation. Cumulonimbus = thunderstorm.

Quick rules of thumb:

- **Cirrus thickening into altostratus** → rain within 24 hours
- **Cumulus towering into cumulonimbus** → thunderstorms within hours
- **Halo around sun or moon** → storm approaching`,
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'You see thin, wispy clouds made of ice crystals high in the sky. What are they?',
          a: ['Cumulus', 'Stratus', 'Cirrus', 'Nimbostratus'],
          correct: 2,
          explain: 'Cirrus (Latin for "curl") are high-altitude wispy clouds made of ice crystals.',
        },
        {
          q: 'A tall, anvil-shaped cloud producing lightning and heavy rain is called:',
          a: ['Stratocumulus', 'Cumulonimbus', 'Altostratus', 'Cirrocumulus'],
          correct: 1,
          explain: 'Cumulonimbus clouds are towering vertical clouds that produce thunderstorms.',
        },
        {
          q: 'Cirrus clouds gradually thickening across the sky typically indicate:',
          a: ['Stable dry weather', 'A storm approaching within 24 hours', 'An earthquake', 'Temperature rising'],
          correct: 1,
          explain: 'When high cirrus clouds thicken and lower into altostratus, it usually signals an approaching warm front.',
        },
      ],
    },
  ],
}

export default cloudTypes
