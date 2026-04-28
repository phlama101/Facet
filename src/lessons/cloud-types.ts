import { Cloud, CloudFog, Feather } from 'lucide-react'
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

A cloud forms when rising, moist air cools below its **dew point** — the temperature at which water vapour condenses into tiny liquid droplets or ice crystals around microscopic particles called condensation nuclei. The type of cloud that forms depends on how fast the air rises, how moist it is, and at what altitude condensation occurs.

Modern cloud classification descends from British pharmacist Luke Howard, who proposed the Latin-based naming system in 1803. Today the World Meteorological Organization's International Cloud Atlas is the global standard.

Clouds are classified by two properties: **altitude** (how high they form) and **shape** (puffy, layered, or wispy).`,
      keyTerms: [
        { term: 'Condensation', def: 'The process by which water vapour cools and converts into liquid water droplets or ice crystals, forming clouds, fog, and dew.' },
        { term: 'Precipitation', def: 'Any form of water — rain, drizzle, snow, sleet, or hail — that falls from clouds and reaches the ground.' },
        { term: 'Dew point',    def: 'The temperature at which air becomes saturated and water vapour begins to condense. The altitude where air cools to its dew point is where cloud base forms.' },
      ],
    },
    {
      type: 'concept',
      title: "The three shape families",
      body: "Every cloud shape descends from three Latin root words in Luke Howard's 1803 system:",
      cards: [
        { name: 'Cumulus', icon: Cloud, color: BRAND.coral,    desc: '"Heap" (Latin) — puffy, cauliflower-shaped clouds with flat bottoms and bright white tops. They form when warm air rises rapidly and cools. Small cumulus are harmless; tall ones become thunderstorms.', examples: 'Fair-weather cumulus · Cumulonimbus' },
        { name: 'Stratus', icon: CloudFog, color: BRAND.amethyst, desc: '"Layer" (Latin) — flat, featureless sheets that spread horizontally across the sky. They form in stable air with slow, widespread lifting. Bring persistent drizzle rather than heavy rain.', examples: 'Overcast drizzle · Fog · Nimbostratus' },
        { name: 'Cirrus',  icon: Feather, color: BRAND.accent,  desc: '"Curl of hair" (Latin) — thin, wispy filaments at high altitude (above 6 km), composed entirely of ice crystals. Often the first sign of an approaching weather system.', examples: 'Mares\' tails · Cirrostratus halos' },
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

Quick forecast rules of thumb — what to look for:

**Cirrus gradually thickening and lowering into altostratus** — a warm front is approaching; rain is likely within 12–24 hours.

**Cumulus base darkening and towers growing rapidly** — unstable air; expect thunderstorms within hours.

**A halo around the sun or moon** — light refracting through cirrostratus ice crystals; often precedes rain by 12–24 hours.`,
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
