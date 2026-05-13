import { Layers, Globe, Activity, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const fluvialGeomorphology: Lesson = {
  id: 'hyd-101-1-2-3',
  title: 'Fluvial Geomorphology: How Rivers Shape Landscapes',
  track: 'cli',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: 'Hjulström\'s diagram, Lane\'s balance, meanders and braids: the dynamic geometry of rivers',
  sources: [
    { org: 'USGS', title: 'USGS — Rivers, Streams, and Creeks',                          url: 'https://www.usgs.gov/special-topics/water-science-school/science/rivers-streams-and-creeks' },
    { org: 'USGS', title: 'USGS — Channel Processes and Geomorphology',                  url: 'https://www.usgs.gov/centers/gecsc/science/channel-processes-geomorphology' },
    { org: 'AGU',  title: 'AGU — Journal of Geophysical Research: Earth Surface',        url: 'https://agupubs.onlinelibrary.wiley.com/journal/21699011' },
    { org: 'USDA', title: 'USDA — Stream Corridor Restoration',                          url: 'https://www.nrcs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb1044574.pdf' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Hjulström\'s diagram, Lane\'s balance, meanders and braids: the dynamic geometry of rivers',
      body: `Rivers simultaneously erode, transport, and deposit sediment, sculpting valleys and floodplains over timescales from days to millennia. The fundamental control is the balance between the energy available in flowing water (governed by discharge and slope) and the resistance of the bed and banks (governed by sediment size, cohesion, and vegetation). When energy exceeds resistance, erosion occurs; when transport capacity falls below sediment supply, deposition occurs; balanced conditions produce a graded, stable channel.

The Hjulström diagram (1935) plots flow velocity versus grain size and defines three fields: erosion (velocity high enough to entrain particles), transport (velocity sufficient to keep particles moving but not entrain new ones), and deposition (velocity too low to move particles). Paradoxically, clay and silt require higher velocities to erode than fine sand because cohesion and electrostatic forces between clay particles must be overcome. Once clay is eroded and suspended, however, it settles only at very low velocities. Bedload (coarse sand, gravel, cobbles rolling and saltating along the bed) and suspended load (fine sand, silt, clay carried in the water column) respond to flow differently and transport at different concentrations.

Lane\'s balance equation (1955) elegantly summarises alluvial river behaviour: Q_s × D₅₀ ∝ Q_w × S, where Q_s is sediment supply, D₅₀ is median grain size, Q_w is water discharge, and S is channel slope. This balance predicts how rivers respond to perturbations: dam construction reduces both Q_s and Q_w, but downstream channels often degrade (incise) because the clear water released from the dam has extra erosional capacity that it uses to pick up sediment from the bed. Conversely, increased sediment supply (from land disturbance) causes aggradation (deposition) that raises channel beds and increases flood risk.

Channel planform varies systematically with slope and sediment supply. Meandering channels (sinuosity > 1.5) form in low-gradient floodplains with cohesive banks; lateral migration creates point bars on the inside of bends and undercuts cut banks on the outside. Meanders migrate, grow, and occasionally cut off to form oxbow lakes. Braided channels form where sediment supply is high relative to discharge and banks are non-cohesive — multiple threads weave between mid-channel bars. Anastomosing channels have multiple stable, interconnected channels with heavily vegetated islands. The wandering gravel-bed river type transitions between meandering and braiding with changing flow conditions.`,
      keyTerms: [
        {
          term: 'Hjulström Diagram',
          def: 'Graph of flow velocity vs grain size defining fields of erosion, transport, and deposition; shows cohesive clay requires higher velocity to erode than sand.',
        },
        {
          term: 'Lane\'s Balance',
          def: 'Q_s × D₅₀ ∝ Q_w × S; predicts channel aggradation or degradation in response to changes in sediment supply or discharge.',
        },
        {
          term: 'Bedload',
          def: 'Coarse sediment (gravel, cobbles) rolling and saltating along the channel bed; moves during high flows.',
        },
        {
          term: 'Sinuosity',
          def: 'Ratio of channel length to valley length; meandering channels have sinuosity > 1.5.',
        },
        {
          term: 'Oxbow Lake',
          def: 'Abandoned meander loop cut off when a river shortens its path during a flood; gradually silts up over decades.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Channel Types and Their Controls',
      body: `Channel morphology responds to the dominant controls in a watershed: gradient, discharge variability, and sediment calibre. Each channel type has a characteristic planform, cross-section, and behaviour. Understanding which channel type exists — and what controls it — is essential for effective river management and restoration.`,
      cards: [
        {
          name: 'Meandering',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Sinuosity >1.5. Low gradient, cohesive banks. Point bars inside bends; cut banks outside. Meanders migrate laterally.',
          examples: 'Mississippi River: sinuosity 2.0-3.5. Meanders migrate 1-30 m/yr. 1929 artificial cutoffs straightened 270 km; river is re-meandering.',
        },
        {
          name: 'Braided',
          icon: ArrowRight,
          color: BRAND.coral,
          desc: 'Multiple unstable channels divided by bars. High sediment supply, non-cohesive banks, variable discharge. Width-depth ratio > 50.',
          examples: 'Waimakariri River, NZ: braided across 2 km width. Outwash rivers from glaciers (e.g., Skeiðará, Iceland) classically braided.',
        },
        {
          name: 'Hjulström Threshold',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Minimum velocity to erode, transport, or deposit each grain size. Clay more resistant to erosion than fine sand despite smaller size (cohesion).',
          examples: 'Fine sand (0.3 mm) erodes at ~20 cm/s. Clay (0.001 mm) requires ~100 cm/s. Suspended silt deposits only below ~1 cm/s.',
        },
        {
          name: 'Lane\'s Balance',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Qs × D50 ∝ Qw × S. Dam traps sediment → clear water erodes channel bed (degradation). Deforestation → more Qs → aggradation.',
          examples: 'Colorado River below Hoover Dam: channel degraded 7.5 m in 65 km over 14 years as clear water eroded bed free of sediment supply.',
        },
        {
          name: 'Floodplain',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'Flat land flanking a channel, built and periodically inundated by overbank floods. Contains oxbow lakes, point bar deposits, and backswamp clays.',
          examples: 'Mississippi floodplain: up to 100 km wide in places. Supports 12 million people and some of North America\'s most productive farmland.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Meander Evolution: From Bend to Oxbow Lake',
      body: 'The life cycle of a river meander from initial sinuosity through migration, neck cut-off, and oxbow lake formation.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The life cycle of a river meander from initial sinuosity through migration, neck cut-off, and oxbow lake formation.',
        nodes: [
          {
            id: 'initial-bend',
            label: 'Initial Channel Bend',
            description: 'Small irregularity in a straight channel creates a curve. Helical (secondary) flow develops: fast outer bank, slow inner bank. This sets up positive feedback for meander growth.',
            color: BRAND.accent,
          },
          {
            id: 'meander-growth',
            label: 'Meander Growth',
            description: 'High velocity erodes the cut bank (outer bend). Point bar deposits on inner bend. Meander migrates laterally and amplifies. Sinuosity increases over decades to centuries.',
            color: BRAND.jade,
          },
          {
            id: 'neck-cutoff',
            label: 'Neck Narrows',
            description: 'As meander amplifies, the neck between adjacent bends narrows. During a major flood, the river may breach the thin neck, finding a shorter, steeper path.',
            color: BRAND.gold,
          },
          {
            id: 'cutoff-event',
            label: 'Neck Cut-Off',
            description: 'River cuts through the neck during flood. Meander loop is abandoned. New straight channel has steeper gradient — river shortens and gradient increases.',
            color: BRAND.coral,
          },
          {
            id: 'oxbow-formation',
            label: 'Oxbow Lake',
            description: 'Abandoned loop becomes isolated. Inlet and outlet gradually silt up. Still water supports wetland vegetation and high biodiversity. Gradually fills with fine sediment over decades.',
            color: BRAND.ruby,
          },
          {
            id: 'floodplain-deposit',
            label: 'Floodplain Sequence',
            description: 'Repeated cut-off and migration events build the floodplain: interbedded point-bar sands, overbank silts, oxbow lake clays. Record of river\'s lateral migration preserved in stratigraphy.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'initial-bend',     to: 'meander-growth',    label: 'Helical flow amplifies bend' },
          { from: 'meander-growth',   to: 'neck-cutoff',       label: 'Meander grows; neck narrows' },
          { from: 'neck-cutoff',      to: 'cutoff-event',      label: 'Flood breaches neck' },
          { from: 'cutoff-event',     to: 'oxbow-formation',   label: 'Loop isolated' },
          { from: 'oxbow-formation',  to: 'floodplain-deposit', label: 'Silts up over decades' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Hjulström diagram shows that clay particles require a higher velocity to erode than fine sand. Why?',
          a: [
            'Clay particles are more dense than sand and therefore resist erosion by gravity',
            'Clay particles are held together by cohesion and electrostatic forces between grains, requiring more energy to entrain than the purely mechanical grain-size threshold would predict',
            'Clay is always wet and lubricates the channel bed, making clay beds slippery and resistant to erosion',
            'Clay particles are too fine to be measured by velocity; the Hjulström diagram only applies to silt-sized particles and coarser',
          ],
          correct: 1,
          explain: 'The Hjulström diagram reveals an apparent paradox: fine sediments (clay, silt) require higher flow velocities to initiate erosion than medium sand, even though they are lighter. The reason is cohesion: clay minerals carry negative surface charges and adsorb cations from porewater, creating strong electrostatic and van der Waals forces between adjacent particles. Clay beds are effectively "glued together" and require significant shear stress to disrupt. Once eroded, however, clay particles are so fine that they remain in suspension at very low velocities (< 1 cm/s). This means that clay-rich floodplains and estuarine muds are resistant to initial erosion but, once disturbed, transport clay far into the ocean as turbid plumes.',
        },
        {
          q: 'What does Lane\'s balance equation (Q_s × D₅₀ ∝ Q_w × S) predict about channel behaviour when a dam is built upstream?',
          a: [
            'The channel will aggrade (fill with sediment) immediately downstream of the dam as sediment accumulates behind the structure',
            'The channel will degrade (incise into its bed) because the dam traps sediment (reducing Q_s) while releasing relatively clear water that still has erosional capacity',
            'The channel will widen dramatically because the dam causes bank-full discharge to increase downstream',
            'The channel will steepen its gradient in the years after dam construction, increasing flood risk at downstream communities',
          ],
          correct: 1,
          explain: 'Lane\'s balance tells us that Q_s × D₅₀ must balance Q_w × S. When a dam is built, it traps most of the sediment that would normally flow downstream (Q_s decreases dramatically), but releases nearly the same water (Q_w is roughly maintained). To re-establish balance, the channel must reduce Q_w × S — since water cannot be reduced, the channel must reduce slope (S) by incising into its bed. The clear, sediment-free water released from the dam has excess energy and picks up bed sediment to compensate for the missing supply. This downstream channel degradation has occurred below most major dams worldwide: the Colorado River degraded 7.5 m below Hoover Dam over 14 years, and similar patterns occur below the Three Gorges Dam on the Yangtze.',
        },
        {
          q: 'What physical process drives lateral meander migration?',
          a: [
            'Groundwater seeping from floodplain sediments undercuts banks preferentially on the inside of bends',
            'Secondary (helical) flow in meander bends directs high-velocity water toward the outer bank and bed material toward the inner bank, causing erosion of the cut bank and deposition of a point bar',
            'Seasonal flood waters alternately saturate both banks equally, causing uniform lateral bank failure',
            'Wind-driven wave action against the cut bank during flood events drives meander migration downstream',
          ],
          correct: 1,
          explain: 'In a river bend, centrifugal force pushes water toward the outside of the curve, creating a super-elevation of the water surface there. This drives a secondary circulation (helical flow): water near the surface moves toward the outer bank, descends, then moves along the bed back toward the inner bank. This spiral current continuously transports coarse bed material from the outer to the inner bank. The concentrated high-velocity flow at the outer bank erodes the cut bank (often at rates of 1–30 m/year for large rivers). Simultaneously, the slower, upwelling water at the inner bank deposits its sediment load, building the point bar. Together, erosion on the outside and deposition on the inside migrate the entire meander bend laterally while maintaining approximately constant cross-sectional area.',
        },
        {
          q: 'What distinguishes a braided channel from a meandering channel?',
          a: [
            'Braided channels only occur in tropical regions; meandering channels only in temperate climates',
            'Braided channels have multiple unstable threads separated by bars, typically in high-sediment-supply, non-cohesive bank settings; meandering channels have a single sinuous thread with cohesive banks',
            'Braided channels flow faster than meandering channels because multiple threads reduce hydraulic resistance',
            'Braided channels are younger than meandering channels; they evolve into meanders over decades',
          ],
          correct: 1,
          explain: 'Channel planform is controlled by the balance between stream power (discharge × slope) and sediment supply relative to transport capacity. Braided channels form when sediment supply is high relative to transport capacity, causing frequent deposition of mid-channel bars that force the flow to split around them. Non-cohesive sandy or gravelly banks erode easily, widening the channel. High temporal variability in discharge (snowmelt rivers, glacial outwash) also promotes braiding because low flows cannot transport the coarse sediment deposited during high flows. Meandering requires cohesive banks (clay-rich or vegetated) that resist erosion and force lateral bend migration rather than bank breaching. The two channel types represent different positions along the stream power spectrum, and rivers can transition between them in response to climate or land-use changes.',
        },
        {
          q: 'What geological record does a river floodplain preserve, and why is it valuable?',
          a: [
            'Floodplains preserve a record of volcanic ash falls; used for tephrochronology of eruption history',
            'Floodplains preserve interbedded point-bar sands, overbank silts, and oxbow lake clays that record past river migration, flood magnitudes, and land-use change over centuries to millennia',
            'Floodplains only record the most recent flood event; all earlier deposits are eroded by subsequent floods',
            'Floodplains preserve compressed organic matter that becomes petroleum after millions of years; used for oil exploration',
          ],
          correct: 1,
          explain: 'Floodplain stratigraphy is a rich archive of hydrological history. Point-bar sands record lateral migration events; overbank fines (silt and clay deposited during floods) record flood frequency and magnitude; oxbow lake sediments record the timing of meander cut-offs and contain pollen, seeds, and organic matter for palaeoclimate reconstruction. Radionuclide dating (¹⁴C, ²¹⁰Pb, ¹³⁷Cs) places deposits in time. Increases in erosion following European settlement, agricultural intensification, and deforestation are often visible as distinct changes in sedimentation rate or grain size in floodplain cores. This record is used by fluvial geomorphologists to distinguish natural variability from human-caused change in river systems.',
        },
      ],
    },
  ],
}

export default fluvialGeomorphology
