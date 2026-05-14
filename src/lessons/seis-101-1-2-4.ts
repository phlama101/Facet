import { Activity, Globe, Layers, Zap, Clock } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const earthquakeCycle: Lesson = {
  id: 'seis-101-1-2-4',
  title: 'The Seismic Cycle and Earthquake Recurrence',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: 'Faults rupture in a repeating cycle driven by tectonic loading — interseismic strain accumulation, coseismic rupture, and postseismic relaxation. Paleoseismology reads geological archives of past earthquakes to estimate recurrence intervals, while GPS geodesy tracks the slow elastic distortion of the crust between events.',
  sources: [
    { org: 'USGS',    title: 'USGS — Seismic Cycle',                                           url: 'https://earthquake.usgs.gov/learn/glossary/?term=seismic+cycle' },
    { org: 'PNSN',    title: 'Pacific Northwest Seismic Network — Cascadia Subduction Zone',   url: 'https://pnsn.org/outreach/about-earthquakes/cascadia' },
    { org: 'USGS',    title: 'USGS — Paleoseismology',                                         url: 'https://earthquake.usgs.gov/hazards/qfaults/paleoseismology.php' },
    { org: 'NASA JPL', title: 'NASA JPL — GPS Geodesy and the Earthquake Cycle',               url: 'https://sideshow.jpl.nasa.gov/post/links.html' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Interseismic loading, coseismic rupture, postseismic relaxation: the slow heartbeat of a fault',
      body: `Faults do not rupture randomly — they follow a cycle driven by the steady motion of tectonic plates. In the interseismic phase, the fault is locked and tectonic loading causes elastic strain to accumulate in the surrounding crust over decades to centuries. GPS networks measure this strain accumulation as millimetre-per-year surface velocity gradients across fault zones. When accumulated stress exceeds fault strength, coseismic rupture releases the strain in seconds to minutes, displacing the fault surface by metres.

After the mainshock, the postseismic phase begins. Two main processes operate in parallel: afterslip (aseismic slip on the fault below or adjacent to the rupture zone) and viscoelastic relaxation (slow viscous flow in the lower crust and upper mantle as they adjust to the sudden stress change). GPS networks detect postseismic deformation for months to years after large earthquakes. After the 2011 Tōhoku earthquake, postseismic GPS signals exceeded 1 metre of displacement in some locations over the following year.

Paleoseismology reads the geological record of past earthquakes to estimate recurrence intervals on specific faults. Trench excavations across active faults reveal offset strata, liquefaction features, colluvial wedges, and peat layers that can be radiocarbon dated. On the Cascadia subduction zone, studies of drowned coastal forests and tsunami sand deposits document 19 great (M ~9) earthquakes over the past 10,000 years — a roughly 200–500 year recurrence interval. The most recent Cascadia megathrust rupture occurred on January 26, 1700 CE, identified precisely from Japanese tsunami records.

Seismic gaps — segments of a fault system that have not ruptured recently compared to adjacent segments — have historically been used to identify regions with elevated hazard. However, the seismic gap hypothesis has had mixed predictive success: some gaps fill with anticipated large earthquakes, while others remain quiet because they slip aseismically. Probabilistic Seismic Hazard Analysis (PSHA) now integrates recurrence intervals, magnitude-frequency distributions, and ground-motion models to produce hazard curves used in building codes.`,
      keyTerms: [
        {
          term: 'Interseismic Phase',
          def: 'Period between earthquakes when the fault is locked and strain accumulates elastically.',
        },
        {
          term: 'Coseismic Slip',
          def: 'Rapid fault displacement during an earthquake; releases accumulated elastic strain.',
        },
        {
          term: 'Postseismic Relaxation',
          def: 'Slow deformation after an earthquake via afterslip and viscoelastic flow.',
        },
        {
          term: 'Paleoseismology',
          def: 'Study of past earthquakes through geological evidence in trenches and sediment cores.',
        },
        {
          term: 'Recurrence Interval',
          def: 'Average time between successive earthquakes on the same fault segment.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Phases of the Seismic Cycle',
      body: 'The seismic cycle is the temporal framework for understanding earthquake hazard. Each phase leaves measurable signals in GPS data, seismograms, and geological deposits. Cycle duration ranges from decades (Parkfield segment, M ~6 every ~22 years) to millennia (slow subduction zones).',
      cards: [
        {
          name: 'Interseismic',
          icon: Clock,
          color: BRAND.jade,
          desc: 'Fault locked. Tectonic loading accumulates strain. GPS shows velocity gradient across fault.',
          examples: 'San Andreas: ~45 mm/yr relative plate motion. Locked sections show linear GPS velocity gradient over 50-100 km.',
        },
        {
          name: 'Coseismic',
          icon: Zap,
          color: BRAND.coral,
          desc: 'Rupture releases decades of accumulated strain in seconds. Displacements of 1–20 m in large events.',
          examples: '2011 Tōhoku: up to 50 m coseismic slip on fault; 2–8 m of seafloor displacement generated the tsunami.',
        },
        {
          name: 'Postseismic',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Afterslip (aseismic fault creep) and viscoelastic relaxation continue for months to years.',
          examples: '2010 Maule (Chile) Mw 8.8: postseismic GPS signals 10–30% of coseismic over 2 years.',
        },
        {
          name: 'Paleoseismology',
          icon: Layers,
          color: BRAND.amethyst,
          desc: 'Trench excavations reveal offset layers, liquefaction, and colluvial wedges for radiocarbon dating.',
          examples: 'Cascadia: drowned forests dated to 1700 CE; tsunami deposits document 19 M ~9 events in 10,000 years.',
        },
        {
          name: 'Seismic Gap',
          icon: Globe,
          color: BRAND.accent,
          desc: 'Fault segment that has not ruptured recently; may indicate elevated future hazard.',
          examples: 'Southern Cascadia gap: last M ~9 in 1700. Parkfield segment predicted M 6 ~22-year cycle (confirmed 2004).',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Cascadia Seismic Cycle',
      body: `Trace the evidence chain that reconstructed Cascadia\'s earthquake history and informs modern hazard estimates.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: `Trace the evidence chain that reconstructed Cascadia\'s earthquake history and informs modern hazard estimates.`,
        nodes: [
          {
            id: 'plate-motion',
            label: 'Juan de Fuca Plate',
            description: 'Subducts beneath North America at ~40 mm/yr off the Pacific Northwest coast. Currently in interseismic phase.',
            color: BRAND.jade,
          },
          {
            id: 'locked-zone',
            label: 'Locked Coupling Zone',
            description: 'Fault is fully locked 0–25 km depth. GPS shows landward motion of coastal stations as elastic strain accumulates.',
            color: BRAND.gold,
          },
          {
            id: 'gps-signal',
            label: 'GPS Strain Signal',
            description: 'Coastal GPS stations move ~8–14 mm/yr eastward as the locked fault loads the overriding plate.',
            color: BRAND.accent,
          },
          {
            id: 'rupture',
            label: 'Megathrust Rupture',
            description: 'Every 200–500 years, M ~9 rupture. Fault slips 10–20 m. Coast drops 0.5–2 m. Tsunami generated.',
            color: BRAND.coral,
          },
          {
            id: 'ghost-forest',
            label: 'Ghost Forests',
            description: 'Coastal subsidence drowns tree root zones. Dead standing trees preserved in tidal mudflats provide radiocarbon dates.',
            color: BRAND.ruby,
          },
          {
            id: 'tsunami-record',
            label: 'Japanese Tsunami Records',
            description: 'Jan 27–28 1700 CE: "orphan tsunami" documented in Japan with no local Japanese earthquake. Dated Cascadia rupture to Jan 26, 1700 precisely.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'plate-motion',  to: 'locked-zone',    label: 'Subduction loading' },
          { from: 'locked-zone',   to: 'gps-signal',     label: 'Elastic strain accumulation' },
          { from: 'locked-zone',   to: 'rupture',        label: 'When stress exceeds friction' },
          { from: 'rupture',       to: 'ghost-forest',   label: 'Coastal subsidence' },
          { from: 'rupture',       to: 'tsunami-record', label: 'Pacific-wide tsunami' },
          { from: 'ghost-forest',  to: 'tsunami-record', label: 'Both date the 1700 event' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What does GPS data measure during the interseismic phase of the seismic cycle?',
          a: [
            'Seismic wave velocities in the crust',
            'Elastic strain accumulation expressed as surface velocity gradients across the locked fault',
            'Magma intrusion rates along subduction zones',
            'Aftershock locations following recent mainshocks',
          ],
          correct: 1,
          explain: 'During the interseismic phase the fault is locked, so tectonic loading deforms the surrounding crust elastically. GPS stations on the surface move at rates that reflect both far-field tectonic motion and the elastic distortion caused by the locked fault. The velocity gradient — faster motion on one side, slower on the other — indicates the locked fault zone. This GPS signal is used to estimate how much strain has accumulated and therefore how much energy could be released in a future earthquake.',
        },
        {
          q: 'What two postseismic processes continue for months to years after a large earthquake?',
          a: [
            'Triggered volcanism and GPS rebound',
            'Afterslip on the fault and viscoelastic relaxation in the mantle',
            'P-wave scattering and surface wave amplification',
            'Coulomb stress increase and Omori decay',
          ],
          correct: 1,
          explain: 'After the coseismic rupture, deformation continues through two main mechanisms. Afterslip is aseismic (quiet) fault creep on fault segments that did not rupture seismically, typically below or adjacent to the main rupture zone. Viscoelastic relaxation occurs when the lower crust and upper mantle, which behave as viscous fluids on long timescales, flow to adjust to the sudden stress change. Both processes are detectable with GPS and can produce decimetres to metres of additional surface displacement over the following years.',
        },
        {
          q: 'How was the January 26, 1700 CE Cascadia earthquake precisely dated?',
          a: [
            'Radiocarbon dating of ghost forest trees to within ±5 years',
            'Historical accounts from Indigenous peoples on the Pacific Northwest coast',
            'Japanese written records of an orphan tsunami with no local Japanese earthquake source',
            'A layer of shocked quartz found in sediment cores off the coast',
          ],
          correct: 2,
          explain: 'Radiocarbon dating of ghost forests (coastal trees killed by coseismic subsidence) constrained the Cascadia rupture to the late 17th century, but with ±50-year uncertainty. The precise date — January 26, 1700 — came from Japanese historical records documenting a tsunami on January 27–28, 1700 (local time) that struck the Japanese coast with waves 1–3 metres high but had no corresponding local earthquake in Japan. Back-calculation from tsunami travel time and coastal tide gauge data pinpointed the source to Cascadia.',
        },
        {
          q: 'What is a paleoseismology trench designed to reveal?',
          a: [
            'Deep crustal structure using P-wave refraction',
            'Physical evidence of past earthquakes in offset geological layers and sediment features',
            'The orientation of stress fields from focal mechanism solutions',
            'Aftershock migration patterns over weeks following a mainshock',
          ],
          correct: 1,
          explain: 'Paleoseismology trenches are excavated across active fault traces to expose the stratigraphy of sediment layers. Seismic events leave diagnostic features: offset or faulted sediment layers, colluvial wedges (debris that filled a fault scarp after it appeared), liquefaction features, and sudden peat layer submergence from coseismic subsidence. These features can be radiocarbon dated to establish when past earthquakes occurred, how large they were (from offset magnitude), and therefore what the recurrence interval and characteristic magnitude are for that fault segment.',
        },
        {
          q: 'What is the approximate recurrence interval for M ~9 megathrust earthquakes on the Cascadia subduction zone?',
          a: [
            'Every 50 years',
            'Every 200–500 years',
            'Every 2,000–5,000 years',
            'Every 10,000 years',
          ],
          correct: 1,
          explain: 'Paleoseismic studies of ghost forests, tsunami sand deposits, and subsided marsh sediments along the Cascadia coast document approximately 19 great earthquakes in the past 10,000 years. The average recurrence is roughly 500 years, but intervals range from about 200 to over 1,000 years. The last rupture was January 26, 1700 CE — meaning Cascadia is now 325 years into its next seismic cycle. Probabilistic models suggest the probability of a Cascadia M ~9 in the next 50 years is roughly 10–15%.',
        },
      ],
    },
  ],
}

export default earthquakeCycle
