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
      body: `Every sailor, farmer, and pilot who lived before weather satellites learned to read the sky as a survival skill — and the rules they discovered still work today. You already have everything you need: your eyes, a few minutes, and the vocabulary to name what you see.

Clouds are not just weather decoration — they are a free, real-time readout of atmospheric conditions. With a few minutes of observation, you can forecast the next few hours of weather with surprising accuracy.

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
        { name: 'Cumulus', icon: Cloud, color: BRAND.coral,    desc: '"Heap" (Latin) — puffy, cauliflower-shaped clouds with flat bottoms and bright white tops. They form when warm air rises rapidly and cools. Small cumulus are harmless; tall ones become thunderstorms. Think of them as bubbles in boiling water — wherever the surface heats up fastest, air rises and a cloud bubble pops up above it.', examples: 'Fair-weather cumulus over Colorado plains on a summer afternoon · Cumulonimbus over the Gulf Coast producing evening thunderstorms' },
        { name: 'Stratus', icon: CloudFog, color: BRAND.amethyst, desc: '"Layer" (Latin) — flat, featureless sheets that spread horizontally across the sky. They form in stable air with slow, widespread lifting. Bring persistent drizzle rather than heavy rain.', examples: 'Marine stratus blanketing San Francisco Bay every June · Nimbostratus producing 24-hour steady rain ahead of a mid-Atlantic winter storm' },
        { name: 'Cirrus',  icon: Feather, color: BRAND.accent,  desc: '"Curl of hair" (Latin) — thin, wispy filaments at high altitude (above 6 km), composed entirely of ice crystals. Often the first sign of an approaching weather system. They look feathery because ice crystals fall and evaporate before reaching lower altitudes, leaving a streaky trail called a "fallstreak."', examples: 'Mares\' tails streaming ahead of a Pacific storm approaching the US West Coast · Cirrostratus halos seen in the UK 12–18 hours before frontal rain' },
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

Think of the prefix system like a zip code for the atmosphere: the prefix tells you the altitude neighbourhood, the root word tells you the shape, and together they pinpoint exactly what you're looking at and what weather it brings.

Quick forecast rules of thumb — what to look for:

**Cirrus gradually thickening and lowering into altostratus** — a warm front is approaching; rain is likely within 12–24 hours.

**Cumulus base darkening and towers growing rapidly** — unstable air; expect thunderstorms within hours.

**A halo around the sun or moon** — light refracting through cirrostratus ice crystals; often precedes rain by 12–24 hours.`,
    },
    {
      type: 'concept',
      title: 'Key takeaways',
      body: `• **Cloud shape reveals air motion**: Puffy cumulus form in rising, unstable air; flat stratus form in stable, gently lifting air; wispy cirrus mark moisture at high altitudes where it is already freezing. Shape is a direct signature of how the atmosphere is moving.

• **Altitude prefixes tell you what clouds are made of**: Cirro- clouds (above 6 km) are pure ice crystals; alto- clouds (2–6 km) are mixed ice and water; low clouds are mostly liquid droplets — and this difference determines whether they produce rain, snow, or nothing at all.

• **Cloud sequences forecast weather**: Cirrus thickening into altostratus over 6–12 hours is one of the most reliable signs of an approaching warm front; rapidly growing cumulus towers with darkening bases warn of thunderstorms within hours. The sky gives you time to prepare if you know the pattern.`,
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
