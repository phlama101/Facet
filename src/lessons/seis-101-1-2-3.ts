import { Globe, Layers, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const focalMechanisms: Lesson = {
  id: 'seis-101-1-2-3',
  title: 'Focal Mechanisms and Stress in the Crust',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: 'Beach balls and stress shadows: reading the fingerprint of a fault from seismograms alone',
  sources: [
    { org: 'USGS', title: 'USGS — Focal Mechanisms Explained',                       url: 'https://earthquake.usgs.gov/learn/topics/beachball.php' },
    { org: 'IRIS', title: 'IRIS — Beach Ball Diagrams',                              url: 'https://www.iris.edu/hq/inclass/animation/focal_mechanisms_beachball' },
    { org: 'AGU',  title: 'AGU — Coulomb Stress Transfer',                           url: 'https://agupubs.onlinelibrary.wiley.com/' },
    { org: 'USGS', title: 'USGS — Aftershock Sequences and Omori\'s Law',            url: 'https://earthquake.usgs.gov/learn/glossary/?term=aftershock' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Beach balls and stress shadows: reading the fingerprint of a fault from seismograms alone',
      body: `Every earthquake radiates seismic energy in a characteristic four-lobed pattern called a radiation pattern. In two lobes (compressional quadrants), the first P-wave motion is toward the seismometer (compressional arrival); in the other two (dilatational quadrants), the first motion is away from the seismometer (tensional arrival). By recording first P-wave polarities at seismometers distributed around the earthquake, seismologists can reconstruct the orientation of the two possible fault planes and the direction of slip — a solution called the focal mechanism.

Focal mechanisms are displayed as "beach ball" diagrams — equal-area stereographic projections of the lower focal hemisphere. Dark quadrants represent compressional first motion; white quadrants represent dilatational first motion. The boundary between dark and white quadrants traces the two nodal planes, one of which is the actual fault plane and the other the auxiliary plane. Strike-slip faults produce a characteristic four-quadrant pattern with alternating dark and light regions. Normal faults show a light center (dark patches at the poles). Reverse/thrust faults show a dark center (light patches at the poles).

After a mainshock, stress is redistributed across the surrounding crust. Coulomb stress transfer (ΔCFS = Δτ − μ′Δσ_n) describes how shear stress increase and normal stress decrease can bring nearby fault segments closer to failure. Regions of increased Coulomb stress — called stress shadows — can trigger aftershocks or even future mainshocks. Studies of the 1992 Landers and 1994 Northridge earthquakes showed that Coulomb stress changes predicted aftershock locations with reasonable accuracy.

Aftershock sequences follow Omori\'s Law: the aftershock rate decays as 1/(t + c)^p where t is time since mainshock, c is a small constant (~0.01 days), and p is typically close to 1. Most sequences decay rapidly: after a week, daily aftershock rates are far lower than the day of the mainshock, though significant aftershocks (within 1–2 magnitude units of the mainshock) can still occur weeks to months later. The Gutenberg-Richter relation (log N = a − bM, b ≈ 1) describes the frequency-magnitude distribution of both mainshocks and aftershocks.`,
      keyTerms: [
        {
          term: 'Focal Mechanism',
          def: 'Reconstruction of fault plane orientation and slip direction from P-wave first-motion polarities.',
        },
        {
          term: 'Beach Ball Diagram',
          def: 'Stereographic projection of focal mechanism; dark = compressional; light = dilatational.',
        },
        {
          term: 'Nodal Planes',
          def: 'The two perpendicular planes in a focal mechanism; one is the actual fault plane.',
        },
        {
          term: 'Coulomb Stress Transfer',
          def: 'Change in stress on surrounding faults after a mainshock; positive ΔCFS promotes future rupture.',
        },
        {
          term: 'Omori\'s Law',
          def: 'Aftershock rate decays as 1/(t+c)^p; p ≈ 1 in most sequences.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Reading Fault Type from Beach Ball Diagrams',
      body: `The beach ball pattern encodes fault type at a glance. Three end-member patterns correspond to the three main fault regimes. Real faults are often oblique — combinations of dip-slip and strike-slip — producing intermediate patterns.`,
      cards: [
        {
          name: 'Strike-Slip',
          icon: ArrowRight,
          color: BRAND.coral,
          desc: 'Four-quadrant alternating pattern. P axis horizontal; T axis horizontal. Pure lateral motion.',
          examples: 'San Andreas Fault (right-lateral). 1906 San Francisco M 7.9 shows classic strike-slip beach ball.',
        },
        {
          name: 'Normal Fault',
          icon: Layers,
          color: BRAND.jade,
          desc: 'White center with dark poles. Extensional regime: hanging wall drops. T axis horizontal.',
          examples: 'Basin and Range, East African Rift. 1959 Hebgen Lake M 7.2 (Montana) normal mechanism.',
        },
        {
          name: 'Reverse/Thrust',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Dark center with white poles. Compressional regime: hanging wall rises. P axis horizontal.',
          examples: 'Himalaya, Cascadia subduction. 2011 Tōhoku Mw 9.0 shows thrust beach ball with dark center.',
        },
        {
          name: 'Coulomb Stress',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'ΔCFS = Δτ − μ\'Δσ_n. Positive = closer to failure; negative = stress shadow.',
          examples: '1999 Izmit (M 7.6) raised ΔCFS on the Düzce segment; Düzce ruptured 87 days later (M 7.2).',
        },
        {
          name: 'Omori Decay',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Aftershock rate n(t) = K/(t+c)^p. p ≈ 1; sequences decay within days to weeks.',
          examples: '2010 Canterbury M 7.1 (NZ): thousands of aftershocks in first week, exponential decline over months.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Stress Transfer and Aftershock Triggering',
      body: 'How a mainshock redistributes stress and triggers aftershocks on nearby fault segments.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how a mainshock redistributes Coulomb stress across the surrounding crust, loading some fault segments toward failure while unloading others, and generating an aftershock sequence that decays following Omori\'s Law',
        nodes: [
          {
            id: 'mainshock',
            label: 'Mainshock Rupture',
            description: 'Fault segment locks and releases. Rupture propagates at ~3 km/s, radiating seismic waves and redistributing static stress.',
            color: BRAND.coral,
          },
          {
            id: 'coulomb-calc',
            label: 'Coulomb Stress Calculation',
            description: 'ΔCFS = Δτ − μ\'Δσ_n computed on surrounding fault planes. Positive values raise failure probability.',
            color: BRAND.gold,
          },
          {
            id: 'stress-increase',
            label: 'Stress-Loaded Zones',
            description: 'Fault tips and adjacent parallel segments typically receive increased Coulomb stress. These are aftershock-rich regions.',
            color: BRAND.ruby,
          },
          {
            id: 'stress-shadow',
            label: 'Stress Shadow',
            description: 'Regions where ΔCFS is negative. Seismicity is suppressed relative to background rate for years after mainshock.',
            color: BRAND.amethyst,
          },
          {
            id: 'aftershock-seq',
            label: 'Aftershock Sequence',
            description: 'Triggered earthquakes follow Omori\'s Law: n(t) = K/(t+c)^p. Rate highest immediately after mainshock.',
            color: BRAND.jade,
          },
          {
            id: 'guten-richter',
            label: 'Gutenberg-Richter',
            description: 'log N = a − bM (b ≈ 1). For every M 6 aftershock expect ~10 M 5 and ~100 M 4 aftershocks.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'mainshock',      to: 'coulomb-calc',   label: 'Static stress change' },
          { from: 'coulomb-calc',   to: 'stress-increase', label: 'Positive ΔCFS lobes' },
          { from: 'coulomb-calc',   to: 'stress-shadow',   label: 'Negative ΔCFS zones' },
          { from: 'stress-increase', to: 'aftershock-seq', label: 'Triggers failure' },
          { from: 'aftershock-seq', to: 'guten-richter',   label: 'Magnitude distribution' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What do the dark quadrants of a beach ball diagram represent?',
          a: [
            'Regions where the fault is buried deeper',
            'Compressional first P-wave motion toward the station',
            'Dilatational first P-wave motion away from the station',
            'Areas of maximum ground shaking intensity',
          ],
          correct: 1,
          explain: 'Beach ball diagrams are projections of the lower focal hemisphere showing first-motion P-wave polarity. Dark (shaded) quadrants mark directions from which compressional arrivals were recorded — the P-wave first motion is a push toward the seismometer. White (unshaded) quadrants mark dilatational arrivals — the first motion is a pull away from the seismometer. The boundary between dark and white traces the two nodal planes.',
        },
        {
          q: 'A beach ball has a dark center with white patches at the top and bottom (poles). What fault type does this indicate?',
          a: [
            'Strike-slip fault',
            'Normal fault',
            'Reverse or thrust fault',
            'Oblique-extensional fault',
          ],
          correct: 2,
          explain: 'A reverse or thrust fault operates in a compressional stress regime where the crust is being shortened. The P axis (greatest compressive stress) is approximately horizontal, and the T axis (least compressive) is approximately vertical. This geometry produces a dark (compressional) center in the beach ball and white (dilatational) patches near the poles. Subduction zone megathrusts all display this dark-center pattern.',
        },
        {
          q: 'What does a positive Coulomb stress change (ΔCFS > 0) on a nearby fault segment indicate?',
          a: [
            'The segment was ruptured by the mainshock and is now relaxed',
            'The segment has moved into a stress shadow and is less likely to rupture',
            'The segment has been brought closer to failure and aftershocks are more likely',
            'The segment experienced extensional stress, reducing fault friction',
          ],
          correct: 2,
          explain: 'Coulomb stress change ΔCFS = Δτ − μ\'Δσ_n: positive values mean increased shear stress and/or reduced normal (clamping) stress on the fault plane. Both effects bring the fault closer to the Coulomb failure criterion. After the 1999 Izmit earthquake, ΔCFS on the adjacent Düzce fault segment was positive; the Düzce segment ruptured 87 days later in an M 7.2 event, consistent with stress transfer triggering.',
        },
        {
          q: 'Omori\'s Law describes aftershock rate as n(t) = K/(t+c)^p with p ≈ 1. What does this mean practically?',
          a: [
            'Aftershock rates are constant for weeks after the mainshock',
            'Aftershock rates increase over time as stress re-accumulates',
            'Aftershock rates decay rapidly, roughly halving each time the elapsed time doubles',
            'The largest aftershock always occurs exactly one day after the mainshock',
          ],
          correct: 2,
          explain: 'With p ≈ 1, Omori\'s Law gives n(t) ∝ 1/t (for t >> c). This means if the aftershock rate is 100/day on day 1, it will be ~50/day on day 2, ~33/day on day 3, etc. Within a week most sequences have decayed substantially from peak rates. However, significant aftershocks (within 1–2 magnitudes of the mainshock) can still occur weeks to months later, which is why post-earthquake safety assessments extend well beyond the first few days.',
        },
        {
          q: 'How many nodal planes appear in a focal mechanism solution, and how do seismologists determine which is the actual fault plane?',
          a: [
            'One nodal plane; it is uniquely determined by first-motion data',
            'Two nodal planes; identified by comparing with independent geological fault mapping',
            'Three nodal planes; the middle one is always the real fault plane',
            'Four nodal planes; they correspond to P, S, Love, and Rayleigh wave patterns',
          ],
          correct: 1,
          explain: 'First-motion analysis always produces two perpendicular nodal planes — the actual fault plane and the mathematically equivalent auxiliary plane. P-wave data alone cannot distinguish between them because the radiation patterns are symmetric. Seismologists resolve the ambiguity using independent evidence: mapped surface fault traces, aftershock distribution (aftershocks align with the real fault plane), InSAR or GPS surface deformation patterns, or finite-fault rupture models.',
        },
      ],
    },
  ],
}

export default focalMechanisms
