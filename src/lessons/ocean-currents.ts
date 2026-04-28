import { Wind, Waves } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const oceanCurrents: Lesson = {
  id: 'ocean-currents',
  title: 'Ocean Currents & the Global Conveyor',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '15 min',
  xpReward: 180,
  description: 'How heat, salt, and wind drive the circulation that shapes global climate.',
  sources: [
    { org: 'NOAA',          title: 'What is the global ocean conveyor belt?',        url: 'https://oceanservice.noaa.gov/facts/conveyor.html' },
    { org: 'NOAA',          title: 'Thermohaline Circulation tutorial',              url: 'https://oceanservice.noaa.gov/education/tutorial_currents/05conveyor1.html' },
    { org: 'NASA SVS',      title: 'The Great Ocean Conveyor Belt',                  url: 'https://svs.gsfc.nasa.gov/3658/' },
    { org: 'NOAA Climate.gov', title: 'Thermohaline circulation resource',          url: 'https://www.climate.gov' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The ocean is always moving',
      body: `The ocean is not a still bathtub. According to NOAA, constant motion takes the form of a **global ocean conveyor belt** — a combined system of wind-driven surface currents and deep, density-driven flows.

Together, these currents move vast amounts of heat, salt, and nutrients around the planet. The Gulf Stream, for example, transports warm Caribbean water northeast across the Atlantic, affecting conditions in northern Europe.`,
    },
    {
      type: 'concept',
      title: 'The two circulation systems',
      body: 'Ocean circulation operates at two very different depths and speeds:',
      cards: [
        { name: 'Surface Currents', icon: Wind, color: BRAND.accent,   desc: 'Driven by prevailing winds in the top ~400 m. Fast (up to 2 m/s), organized into gyres.', examples: 'Gulf Stream, Kuroshio, Humboldt' },
        { name: 'Thermohaline',     icon: Waves, color: BRAND.amethyst, desc: 'Density-driven. Per NOAA, a water parcel takes roughly 1,000 years to complete the journey.', examples: 'The global conveyor belt' },
      ],
    },
    {
      type: 'concept',
      title: 'The Coriolis deflection',
      body: `Earth rotates, and this rotation deflects moving fluids — including ocean water. This is the **Coriolis effect**.

In the Northern Hemisphere, currents are deflected to the **right**. In the Southern Hemisphere, to the **left**. This is why:

- Gyres rotate clockwise in the North Atlantic
- Gyres rotate counter-clockwise in the South Atlantic
- Hurricanes spin in opposite directions across the equator

The effect is strongest at the poles and zero at the equator.`,
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Per NOAA, roughly how long does a water parcel take to complete the global ocean conveyor belt?',
          a: ['About 1 year', 'About 10 years', 'About 1,000 years', 'About 1 million years'],
          correct: 2,
          explain: 'NOAA estimates approximately 1,000 years for a complete journey along the global conveyor belt.',
        },
        {
          q: 'What drives thermohaline circulation?',
          a: ['Wind patterns', "Moon's gravity", 'Differences in temperature and salinity', "Earth's rotation alone"],
          correct: 2,
          explain: 'Thermohaline ("thermo" = heat, "haline" = salt) circulation is driven by density differences.',
        },
        {
          q: 'In the Northern Hemisphere, the Coriolis effect deflects moving water:',
          a: ['To the left', 'To the right', 'Straight down', 'Toward the equator'],
          correct: 1,
          explain: "Earth's rotation deflects moving fluids to the right in the Northern Hemisphere.",
        },
      ],
    },
  ],
}

export default oceanCurrents
