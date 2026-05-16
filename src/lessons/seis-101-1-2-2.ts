import { Activity, Zap, Globe, BarChart, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seismicMagnitude: Lesson = {
  id: 'seis-101-1-2-2',
  title: 'Measuring Earthquake Size: Magnitude and Intensity',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: `From Richter\'s wiggles to moment magnitude: how we put a number on an earthquake`,
  sources: [
    { org: 'USGS', title: 'USGS — Earthquake Magnitude, Energy, and Shaking', url: 'https://earthquake.usgs.gov/learn/topics/magnitude_vs_intensity.php' },
    { org: 'USGS', title: 'USGS — Seismic Moment',                            url: 'https://earthquake.usgs.gov/learn/glossary/?term=seismic+moment' },
    { org: 'IRIS', title: 'IRIS — Earthquake Magnitude',                       url: 'https://www.iris.edu/hq/programs/education_and_outreach/retm' },
    { org: 'USGS', title: 'USGS — Modified Mercalli Intensity Scale',          url: 'https://earthquake.usgs.gov/learn/topics/mercalli.php' },
  ],
  sections: [
    {
      type: 'intro',
      title: `From Richter\'s wiggles to moment magnitude: how we put a number on an earthquake`,
      body: `When Charles Richter devised his local magnitude scale in 1935, he simply compared the largest wave amplitude recorded on a Wood-Anderson seismometer at 100 km (62 mi) to a reference amplitude. The result was logarithmic: each whole number step represents a 10× increase in ground shaking amplitude and roughly 31.6× more released energy. Richter\'s scale worked beautifully for shallow Californian earthquakes but broke down for very large or distant events — it saturated, reporting nothing bigger than about M 8.

Modern seismology uses the moment magnitude scale (Mw), derived from the seismic moment M₀ = μ × A × D, where μ is the shear modulus of the rock (~30 GPa in the crust), A is the area of the fault rupture, and D is the average displacement across that area. From M₀ (measured in newton-metres), Mw = (2/3) log₁₀(M₀) − 6.07. Mw is consistent across all sizes and distances, and it is now the standard for scientific reporting and hazard assessment.

Magnitude and intensity are different quantities. Magnitude is a single number describing the energy released at the source. Intensity measures shaking at a particular location and varies with distance, local geology, building type, and depth. The Modified Mercalli Intensity (MMI) scale runs from I (imperceptible) to XII (total destruction). A M 6.5 earthquake beneath a city can produce MMI VIII–IX damage, while the same magnitude at 100 km (62 mi) depth produces far less shaking.

The energy difference between magnitude steps is dramatic. A M 8.0 releases about 1,000× more energy than a M 6.0, and a M 9.0 releases about 1,000,000× more. The 2011 Tōhoku earthquake (Mw 9.0) released more energy than all earthquakes recorded worldwide in a typical year. Understanding magnitude scale non-linearity is critical for communicating seismic risk to the public and for prioritising engineering investments.`,
      keyTerms: [
        {
          term: 'Seismic Moment (M₀)',
          def: 'Physical measure of earthquake size: M₀ = μ × A × D. Units: N·m.',
        },
        {
          term: 'Moment Magnitude (Mw)',
          def: 'Standard magnitude scale derived from M₀; does not saturate for large earthquakes.',
        },
        {
          term: 'MMI Scale',
          def: 'Modified Mercalli Intensity scale (I–XII) measuring shaking at a specific location.',
        },
        {
          term: 'Magnitude Saturation',
          def: 'Failure of older scales (Richter, surface-wave) to distinguish earthquakes above M ~8.',
        },
        {
          term: 'Energy Scaling',
          def: 'Each magnitude unit = 31.6× more energy released.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Magnitude Scales Compared',
      body: `Different scales dominate different eras and applications. Richter (ML) set the template; body-wave and surface-wave magnitudes extended it; moment magnitude (Mw) resolved saturation for giant earthquakes. Real-time networks now also use Energy Magnitude (Me) and Duration Magnitude.`,
      cards: [
        {
          name: 'Richter (ML)',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Local magnitude from Wood-Anderson amplitude at 100 km (62 mi). Saturates above ~M 7.',
          examples: 'Still used in California for local M < 6 events. Reference: 1994 Northridge M 6.7.',
        },
        {
          name: 'Moment Magnitude',
          icon: BarChart,
          color: BRAND.jade,
          desc: 'Mw derived from seismic moment M₀ = μ×A×D. No saturation. Global standard.',
          examples: '2011 Tōhoku Mw 9.0; 1960 Valdivia Mw 9.5 (largest instrumentally recorded).',
        },
        {
          name: 'MMI Intensity',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Location-specific shaking intensity (I–XII) based on human felt reports and damage.',
          examples: 'MMI I: detected only by instruments. MMI X: major landslides, rails bent.',
        },
        {
          name: 'Energy Scaling',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'Each unit step = 10× amplitude, ~31.6× energy. Three steps = 31,623× energy.',
          examples: 'M 5 vs M 8: 31,623× energy difference. M 9 Tōhoku ≈ all M ≤ 8 in a year.',
        },
        {
          name: 'Depth Effect',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Deep earthquakes produce less surface damage than shallow ones of equal magnitude.',
          examples: '2013 Okhotsk Mw 8.3 at 609 km (378 mi) depth caused minor damage; far less than a shallow M 7.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Fault Rupture to Magnitude Number',
      body: 'Follow the measurement chain from fault slip to the Mw number reported by seismic networks.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the measurement chain from fault slip to the Mw number reported by seismic networks.',
        nodes: [
          {
            id: 'fault-slip',
            label: 'Fault Slip',
            description: 'Rock on both sides of fault moves. Average displacement D and rupture area A are the physical inputs.',
            color: BRAND.coral,
          },
          {
            id: 'seismic-moment',
            label: 'Seismic Moment M₀',
            description: 'M₀ = μ × A × D. For a M 7.0, M₀ ≈ 3.5 × 10¹⁸ N·m.',
            color: BRAND.gold,
          },
          {
            id: 'seismogram',
            label: 'Seismogram Record',
            description: 'Broadband seismometers record ground velocity across 0.001–50 Hz. Long-period waves carry moment information.',
            color: BRAND.jade,
          },
          {
            id: 'spectral-fit',
            label: 'Spectral Fitting',
            description: 'Seismologists invert the long-period spectral plateau of the seismogram to extract M₀.',
            color: BRAND.amethyst,
          },
          {
            id: 'mw-calc',
            label: 'Mw = (2/3)log(M₀) − 6.07',
            description: 'Standard formula converts M₀ to a human-readable moment magnitude. M₀ in N·m.',
            color: BRAND.accent,
          },
          {
            id: 'intensity-map',
            label: 'ShakeMap',
            description: 'USGS ShakeMap combines Mw, depth, distance and local site amplification to map MMI across the region.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'fault-slip',     to: 'seismic-moment', label: 'Physical source parameters' },
          { from: 'seismic-moment', to: 'seismogram',     label: 'Radiates elastic waves' },
          { from: 'seismogram',     to: 'spectral-fit',   label: 'Long-period analysis' },
          { from: 'spectral-fit',   to: 'mw-calc',        label: 'M₀ extracted' },
          { from: 'mw-calc',        to: 'intensity-map',  label: 'Combined with site data' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What does M₀ = μ × A × D represent?',
          a: [
            'Seismic moment: shear modulus × rupture area × average displacement',
            'Moment magnitude formula with saturation correction',
            'Richter scale formula for wood-anderson amplitudes',
            'Energy radiated as seismic waves per unit rupture area',
          ],
          correct: 0,
          explain: 'Seismic moment M₀ is the physical measure of earthquake size. μ is rock rigidity (~30 GPa in crust), A is the fault area that ruptured, and D is the average slip distance. Together they capture how much rock moved over how large an area, giving a size measure that scales correctly for all earthquakes from M 1 to M 9.5.',
        },
        {
          q: 'Why did the Richter scale need to be replaced for very large earthquakes?',
          a: [
            'It was too difficult to calculate in the field',
            'It saturated — all very large earthquakes registered around M 8 regardless of true size',
            'It only worked for deep-focus earthquakes',
            'It required unreliable Wood-Anderson instruments that broke in large shaking',
          ],
          correct: 1,
          explain: 'Magnitude saturation occurs because the wave periods used by the Richter and surface-wave scales are shorter than the source duration of very large earthquakes. Once the earthquake is large enough that the fault rupture takes longer than the measured wave period, additional slip does not increase the measured amplitude. Moment magnitude (Mw) uses long-period (low-frequency) waves that carry accurate size information even for Mw 9+ events.',
        },
        {
          q: 'A city 80 km (50 mi) from an M 6.5 earthquake experiences MMI VII shaking. What does this tell us?',
          a: [
            'The earthquake had magnitude 7 at the epicentre',
            'Shaking intensity depends on distance, depth, and site conditions, not just magnitude',
            'MMI VII means the earthquake depth was exactly 80 km (50 mi)',
            'The earthquake released 7 × 10¹⁸ N·m of seismic moment',
          ],
          correct: 1,
          explain: 'Magnitude is a single source number; intensity is the local shaking experience and varies across the affected region. MMI VII at 80 km (50 mi) from an M 6.5 reflects site conditions, crustal attenuation, and possibly basin amplification at that specific location. Another city at the same distance might experience MMI VI or VIII depending on local geology.',
        },
        {
          q: 'How much more energy does an M 8.0 release compared to an M 6.0?',
          a: [
            '10 times more',
            '100 times more',
            'Approximately 1,000 times more',
            '10,000 times more',
          ],
          correct: 2,
          explain: `Each magnitude step corresponds to about 31.6× more energy (10^1.5). Over two steps (M 6 to M 8), that\'s 31.6² ≈ 1,000×. This is why large earthquakes dominate global seismic energy release: a single M 9.0 earthquake releases more energy than all M ≤ 8 earthquakes combined in a typical year.`,
        },
        {
          q: 'Which earthquake scale does NOT saturate for the largest events?',
          a: [
            'Richter (ML)',
            'Surface-wave magnitude (Ms)',
            'Body-wave magnitude (Mb)',
            'Moment magnitude (Mw)',
          ],
          correct: 3,
          explain: 'Moment magnitude (Mw) is derived from seismic moment M₀, which is computed from long-period (low-frequency) waves with periods longer than the source duration even of the largest earthquakes. It therefore captures the true size of Mw 9.0+ megathrust events. Richter, surface-wave, and body-wave magnitudes all use shorter-period waves that saturate at or below M 8.',
        },
      ],
    },
  ],
}

export default seismicMagnitude
