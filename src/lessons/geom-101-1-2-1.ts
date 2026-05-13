import { Activity, Globe, Layers, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const channelMorphology: Lesson = {
  id: 'geom-101-1-2-1',
  title: 'River Channel Morphology and Sediment Transport',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'How stream power, sediment supply, and bed material interact to produce straight, meandering, and braided channel patterns and characteristic bedforms',
  sources: [
    { org: 'USGS',  title: 'USGS — Water Resources',                          url: 'https://www.usgs.gov/mission-areas/water-resources' },
    { org: 'AGU',   title: 'AGU — JGR Earth Surface',                         url: 'https://agupubs.onlinelibrary.wiley.com' },
    { org: 'BGS',   title: 'British Geological Survey',                        url: 'https://www.bgs.ac.uk' },
    { org: 'SEPM',  title: 'SEPM Society for Sedimentary Geology',             url: 'https://www.sepm.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'How stream power, sediment supply, and bed material interact to produce straight, meandering, and braided channel patterns and characteristic bedforms',
      body: `Stream power is the fundamental control on what a river can do to its bed and banks. Total stream power Ω = ρgQS (watts per metre of channel), where ρ is water density (~1000 kg/m³), g is gravitational acceleration, Q is discharge, and S is channel slope. Unit stream power ω = ρgQS/w (W/m²), dividing by channel width w, expresses the energy available per unit bed area and sets the capacity for sediment entrainment and transport.

Sediment entrainment is governed by the Shields criterion. The dimensionless Shields stress τ* = τ/(γs − γ)D compares the bed shear stress τ to the buoyant weight of a grain of diameter D, where γs and γ are the specific weights of sediment and water. When τ* exceeds the critical Shields number (~0.045 for well-sorted sand), grains begin to move as bedload. Coarser gravel requires greater shear stress to entrain, but fine cohesive clays resist entrainment at surprisingly high velocities due to electrochemical bonding — a relationship captured by the Hjulström diagram, which shows that medium sand (0.1–0.5 mm) is the easiest material to erode, while both coarser gravels and finer silts/clays require higher velocities.

As flow velocity increases over a sand bed, bedforms evolve through a predictable sequence. At low velocities the bed is flat (lower-regime plane bed). With increasing velocity, ripples appear in fine sand (D < 0.7 mm); ripples are small (height < 0.04 m, length < 0.6 m) and migrate downstream. At higher velocity, dunes form — larger (height 0.1–1 m, length 1–100 m), also migrating downstream. Dunes dramatically increase hydraulic roughness. With further velocity increase, the upper-regime plane bed develops as dunes wash out; finally antidunes form, migrating upstream in phase with surface waves. This transition from lower to upper regime is marked by a Froude number of 1.

Channel planform — the pattern seen from above — reflects the balance between stream power, sediment supply, and bank strength. Straight channels (sinuosity < 1.05) are rare in nature. Meandering channels (sinuosity > 1.5) have a single sinuous thread, cohesive fine-grained banks, moderate-to-low gradient, and relatively steady discharge. Braided channels have multiple unstable threads separated by bars, non-cohesive coarse sediment, steep gradients, high and variable discharge, and abundant sediment supply. Anastomosed channels are a rarer pattern with multiple stable, low-energy channels separated by vegetated islands.

Width-depth ratio W/D is a key discriminator: meandering channels typically have W/D < 40 and cohesive banks; braided channels have W/D > 40 and non-cohesive gravelly banks. Leopold & Maddock\'s hydraulic geometry relationships describe how channel dimensions adjust with discharge both at-a-station and downstream: width w ∝ Q^0.5, mean depth d ∝ Q^0.4, and mean velocity v ∝ Q^0.1 — the exponents summing to 1 as required by continuity (Q = wdv). Downstream hydraulic geometry captures the systematic widening and deepening from headwaters to river mouth as drainage area and discharge increase.`,
      keyTerms: [
        {
          term: 'Stream Power',
          def: 'Ω = ρgQS (W/m). Rate of energy dissipation per unit channel length; controls sediment transport capacity and channel adjustment.',
        },
        {
          term: 'Shields Criterion',
          def: 'Dimensionless shear stress τ* = τ/(γs−γ)D; sediment moves when τ* exceeds ~0.045 (the critical Shields number for sand).',
        },
        {
          term: 'Bedform',
          def: 'Morphological feature on a river bed shaped by flow: ripples, dunes, plane bed, and antidunes in order of increasing velocity.',
        },
        {
          term: 'Meandering Channel',
          def: 'Single sinuous channel with sinuosity > 1.5, cohesive banks, low slope, and relatively steady discharge.',
        },
        {
          term: 'Braided Channel',
          def: 'Multiple unstable channels divided by bars; characterised by non-cohesive coarse sediment, high discharge variability, and steep gradient.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Stream Power, Bedforms, and Channel Patterns',
      body: `Four interlocking concepts explain how rivers shape their channels: the energy available (stream power), the threshold for particle motion (Shields criterion), the bedforms that develop on the channel floor, and the planform pattern that emerges from the balance of power and resistance.`,
      cards: [
        {
          name: 'Stream Power and Sediment Entrainment',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Stream power Ω = ρgQS controls how much erosion and transport a river can accomplish. The Shields parameter τ* compares bed shear stress to the buoyant weight of a grain; the critical Shields number ~0.045 for sand marks the threshold of motion. Gravel requires higher shear stress; cohesive clays resist entrainment despite low mass.',
          examples: 'Calculating discharge threshold for gravel movement: a 50 mm gravel grain on a 0.001 slope requires roughly Q > 20 m³/s in a 10 m-wide channel before the Shields criterion is met.',
        },
        {
          name: 'Bedforms and the Velocity-Depth Regime',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Ripples form in fine sand (D < 0.7 mm) at low velocity; dunes form at higher velocity and dominate most sandy rivers; upper-regime plane bed and antidunes develop at Froude numbers approaching and exceeding 1. Bedforms control hydraulic roughness — dunes can double Manning\'s n compared to a plane bed.',
          examples: 'Sand dunes 0.5–2 m high migrate through the Missouri River at flood stage; antidunes are visible as standing waves in steep mountain rapids on the Salmon River, Idaho.',
        },
        {
          name: 'Channel Patterns: Meandering vs. Braided',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Meandering channels: single sinuous thread, sinuosity > 1.5, cohesive silty-clay banks, low slope, moderate fine sediment supply. Braided channels: multiple threads, non-cohesive gravel/sand bars, steep gradient, high and variable discharge. The transition is governed by stream power versus bank strength; width-depth ratio > 40 favours braiding.',
          examples: 'The Mississippi River below Cairo exemplifies classic meanders with sinuosity ~2.5; the Waimakariri River, New Zealand, is a textbook braided system — gravel-dominated, flashy, and perpetually reworking its wide braidplain.',
        },
        {
          name: 'Hydraulic Geometry and Channel Adjustment',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Leopold & Maddock\'s at-a-station relationships (w ∝ Q^0.5, d ∝ Q^0.4, v ∝ Q^0.1) show how a single cross-section responds to rising discharge. Downstream hydraulic geometry describes systematic widening and deepening from headwaters to mouth. Channels are not static — they adjust form within years to decades after perturbations such as dam construction.',
          examples: 'Channel width roughly doubles for each order-of-magnitude increase in discharge along a river system. Below Hoover Dam on the Colorado River, the channel narrowed and incised by ~2 m within 15 years of dam closure as sediment-starved flows cut the bed.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Precipitation to Channel Pattern: A Flow of Controls',
      body: 'Trace how a precipitation or snowmelt event cascades through discharge, stream power, and bedform development to ultimately set the channel pattern.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace how a precipitation or snowmelt event cascades through discharge, stream power, and bedform development to ultimately set the channel pattern.',
        nodes: [
          {
            id: 'precipitation',
            label: 'Precipitation / Snowmelt',
            description: 'Rainfall intensity and snowmelt rate determine how quickly water enters the channel network. High-intensity events produce flashy hydrographs critical for braided system dynamics.',
            color: BRAND.accent,
          },
          {
            id: 'discharge',
            label: 'Discharge Increase',
            description: 'Catchment runoff raises Q (m³/s). Discharge determines both total stream power (Ω = ρgQS) and unit stream power (ω = ρgQS/w). At-a-station hydraulic geometry determines how width, depth, and velocity respond.',
            color: BRAND.jade,
          },
          {
            id: 'stream-power',
            label: 'Stream Power',
            description: 'Ω = ρgQS (W/m) sets the energy budget for erosion and transport. Unit stream power ω = Ω/w controls whether the Shields criterion is exceeded for a given grain size, initiating bedload and suspended load transport.',
            color: BRAND.gold,
          },
          {
            id: 'bedform',
            label: 'Bedform Development',
            description: 'As velocity and shear stress rise, the bed transitions: lower plane bed → ripples (fine sand) → dunes → upper plane bed → antidunes. Each stage has distinct roughness, which feeds back on flow depth and velocity.',
            color: BRAND.coral,
          },
          {
            id: 'sediment-transport',
            label: 'Sediment Transport',
            description: 'Bedload moves by rolling, sliding, and saltation once τ* > 0.045. Suspended load carries fine silt and clay. Wash load (clay) stays in suspension at virtually any velocity. Transport rate scales nonlinearly with excess shear stress.',
            color: BRAND.amethyst,
          },
          {
            id: 'channel-pattern',
            label: 'Channel Pattern (Meander or Braid)',
            description: 'Long-term balance of stream power, sediment supply, and bank strength determines planform. High power + abundant coarse sediment + flashy discharge → braided. Moderate power + cohesive banks + steady discharge → meandering. Sinuosity, width-depth ratio, and bar morphology record this balance.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'precipitation',    to: 'discharge',        label: 'Catchment runoff generation' },
          { from: 'discharge',        to: 'stream-power',     label: 'Ω = ρgQS' },
          { from: 'stream-power',     to: 'bedform',          label: 'Shields criterion exceeded' },
          { from: 'bedform',          to: 'sediment-transport', label: 'Grain entrainment & bedload flux' },
          { from: 'sediment-transport', to: 'channel-pattern', label: 'Sediment budget sets planform' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Stream power is defined as Ω = ρgQS. A reach doubles in discharge with no change in slope. By what factor does stream power increase?',
          a: [
            'It remains the same — slope is the dominant control',
            'It doubles, because stream power is directly proportional to Q',
            'It quadruples, because both velocity and depth increase',
            'It increases by a factor of 1.5, because channel width also widens',
          ],
          correct: 1,
          explain: `Stream power Ω = ρgQS is directly proportional to discharge Q. Doubling Q with no change in slope (or density) doubles Ω exactly. This extra power can entrain larger particles, erode banks, and steepen bedforms. In practice channel width also adjusts (w ∝ Q^0.5), slightly moderating the unit stream power ω = Ω/w per unit bed area — unit stream power increases by a factor of ~√2 ≈ 1.41 if width adjusts. But total stream power still exactly doubles.`,
        },
        {
          q: 'The Hjulström diagram shows that very fine clay particles require higher velocities to erode than medium sand, despite being lighter. Why?',
          a: [
            'Electrochemical cohesion between clay particles resists entrainment despite low grain mass',
            'Clay grains are denser than quartz sand grains',
            'Clay particles are too large to be lifted by turbulent eddies',
            'Fine sediments settle too quickly to be kept in motion once entrained',
          ],
          correct: 0,
          explain: `Fine particles have large surface area-to-mass ratios, and electrostatic and van der Waals attraction between clay surfaces creates cohesion that resists entrainment. Once moving, however, clays require much lower velocities to stay in suspension and settle at very low velocities (Stokes settling). This produces the characteristic minimum-erosion-velocity around medium sand (~0.2–0.5 mm) in the Hjulström diagram — coarser grains need more force due to weight, while finer clays need more force due to cohesion.`,
        },
        {
          q: 'What combination of conditions most favours a braided channel pattern over a meandering one?',
          a: [
            'Low sediment supply, cohesive silty banks, low gradient, steady discharge',
            'Moderate sediment supply, mixed grain size, gentle gradient, perennial flow',
            'High sediment supply, non-cohesive coarse gravel/sand, steep gradient, flashy discharge',
            'Very low discharge variability, fine suspended load, wide floodplain, dense riparian vegetation',
          ],
          correct: 2,
          explain: `Braided channels require: high sediment supply relative to transport capacity (so bars build and split the flow), high discharge variability (flashy regime that reworks bars each flood), non-cohesive coarse sediment (gravel/sand that banks cannot hold), and steep gradient (high unit stream power). Cohesive silty banks resist lateral erosion and favour meandering by maintaining a single-thread channel. Braided channels typically have width:depth ratios > 40, while meandering channels have < 40.`,
        },
        {
          q: 'A river is described as having a sinuosity of 2.3. What does this tell you about the channel?',
          a: [
            'The channel slope is 2.3 times steeper than the valley gradient',
            'The channel width is 2.3 times the mean depth',
            'The channel discharge varies by a factor of 2.3 between low and high flow',
            'The channel length is 2.3 times the straight-line valley distance, indicating strong meandering',
          ],
          correct: 3,
          explain: `Sinuosity = channel length / straight-line valley length. A sinuosity of 2.3 means the river takes a path 2.3× longer than the direct valley route, indicating well-developed meander loops. A sinuosity of 1.0 is perfectly straight; 1.0–1.5 is sinuous; > 1.5 is classified as meandering. A sinuosity of 2.3 would produce classic meander loops with regular wavelength approximately 10–11× the channel width, consistent with observations from rivers worldwide from the Mississippi to the Ob.`,
        },
        {
          q: 'When sand dunes form on a river bed, what happens to flow resistance compared to a plane bed, and how does this affect water surface slope?',
          a: [
            'Dunes reduce resistance by smoothing the bed, lowering the water surface slope',
            'Dunes dramatically increase hydraulic resistance; the water surface must slope more steeply to maintain the same discharge, raising upstream stage',
            'Dunes have no effect on resistance but increase velocity by concentrating flow',
            'Dunes reduce flow depth and velocity equally, leaving the water surface slope unchanged',
          ],
          correct: 1,
          explain: `Dunes dramatically increase hydraulic resistance — Manning\'s n roughly doubles compared to a plane bed. Energy is dissipated by flow separation in the lee of each dune crest, creating pressure drag in addition to skin friction. To maintain the same discharge through a more resistant cross-section, the hydraulic gradient (water surface slope) must steepen, raising upstream stage. This is why dune-covered sand-bed rivers can have rapidly rising flood stages. Conversely, during floods the transition from dunes to upper-regime plane bed dramatically reduces resistance and can cause rapid, unexpected drops in water surface elevation.`,
        },
      ],
    },
  ],
}

export default channelMorphology
