import { Building, Shield, Layers, Activity, Gauge } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seismicEngineeringBuildingCodes: Lesson = {
  id: 'seis-101-1-4-3',
  title: 'Seismic Engineering and Building Codes',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'Two buildings stand 50 metres apart in the same city. One collapses in a moderate earthquake; the other survives a far larger one unscathed. The difference is not luck — it is the application of seismic engineering principles codified over a century of hard lessons. Understanding ductility, base isolation, and the tragic legacy of soft-storey collapses reveals why earthquakes kill people through buildings, not shaking.',
  sources: [
    { org: 'USGS', title: 'USGS — Earthquake Hazards Program: Engineering Seismology', url: 'https://earthquake.usgs.gov/research/engineering/' },
    { org: 'FEMA', title: 'FEMA — Reducing the Risks of Nonstructural Earthquake Damage', url: 'https://www.fema.gov/emergency-managers/risk-management/earthquake' },
    { org: 'NIST', title: 'NIST — NEHRP Recommended Seismic Provisions for New Buildings (2020)', url: 'https://www.nehrp.gov/pdf/2020ProvisionsPart1.pdf' },
    { org: 'INGV', title: 'INGV — 2023 Turkey-Syria Earthquake Field Investigations', url: 'https://www.ingv.it/it/stampa-e-urp/produzione-scientifica' },
    { org: 'Caltech SCEDC', title: 'Caltech SCEDC — Strong Motion Data for Engineering Applications', url: 'https://scedc.caltech.edu/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Earthquakes Don\'t Kill People — Buildings Do`,
      body: `The phrase is attributed to seismologist Nicholas Ambraseys, and the data back it up. The vast majority of earthquake fatalities result not from ground shaking itself but from the structural failure of the buildings people occupy. The 2023 Turkey-Syria earthquake sequence (Mw 7.8 and Mw 7.5) killed over 56,000 people — overwhelmingly through building collapse — despite the same region having survived comparable historical earthquakes. Modern seismic engineering and building codes exist to break this pattern; the Turkey-Syria disaster demonstrated what happens when codes are not enforced, construction quality is inadequate, and soft-storey configurations proliferate.

**Ductility** is the cornerstone concept of seismic engineering. A brittle material or structure breaks suddenly when deformed beyond its elastic limit; a ductile one deforms substantially — absorbing and dissipating energy — before failure. The goal of modern seismic design is not to prevent all damage but to ensure ductile failure modes: structural members yield and bend without fracturing, allowing a building to absorb the energy of an earthquake while remaining standing. **Reinforced concrete** achieves ductility through careful detailing of steel rebar at beam-column joints; **unreinforced masonry** (stone, brick, or concrete block without internal steel) is inherently brittle and the predominant killer in low-income seismic zones worldwide.

Building codes translate PSHA-derived seismic hazard into structural requirements through three mechanisms. First, **design spectra** specify the minimum lateral force (proportional to floor weight) that each floor must resist as a function of the building's natural period. Second, **detailing requirements** prescribe the spacing, size, and lap length of reinforcement to ensure ductile behaviour at critical joints. Third, **occupancy importance factors** elevate design demands for hospitals, schools, and emergency facilities — structures that must remain functional after an earthquake. Japan's 1981 New Seismic Design Code, updated after the 1978 Miyagi earthquake, set a global benchmark; buildings designed to this code performed dramatically better in the 2011 Tōhoku event than pre-1981 structures.

**Soil-structure resonance** compounds site amplification effects when a building's natural period matches the dominant period of the underlying soil. A 10-storey reinforced concrete frame has a natural period of roughly 1 second (T ≈ N/10). If it sits on 40 m of soft clay with Vs = 100 m/s (soil period = 4 × 40 / 100 = 1.6 s — close to the building period at longer-period surface waves), resonance dramatically amplifies inter-storey drift. The 1985 Mexico City earthquake and the 1999 İzmit earthquake both demonstrated this mechanism: medium-height buildings on soft alluvium suffered catastrophic collapse while nearby short and tall buildings — whose periods were mismatched to the soil — survived.`,
      keyTerms: [
        {
          term: 'Ductility',
          def: 'The capacity of a structural material or system to undergo large inelastic deformations without fracture, absorbing seismic energy and preventing sudden collapse; the most important single property for earthquake-resistant design.',
        },
        {
          term: 'Moment Frame',
          def: 'A structural system in which beams and columns are rigidly connected at joints so that the frame resists lateral forces through bending; seismic moment frames are detailed to yield in a ductile fashion at beam ends rather than column bases.',
        },
        {
          term: 'Shear Wall',
          def: 'A stiff vertical structural element (reinforced concrete, masonry, or plywood) that resists lateral seismic forces primarily through shear behaviour; more rigid but less ductile than moment frames, often combined with moment frames in dual systems.',
        },
        {
          term: 'Base Isolation',
          def: 'A seismic protection strategy in which the building structure is decoupled from ground motion by mounting it on flexible bearings (lead-rubber, high-damping rubber, or friction pendulum systems) that absorb and slow horizontal displacement, dramatically reducing forces transmitted to the structure above.',
        },
        {
          term: 'Soft Storey',
          def: 'A floor level significantly weaker or more flexible than adjacent stories, typically a ground floor open on one or more sides for parking or commercial use; concentrates inelastic drift at one level and is among the most deadly structural configurations in earthquakes.',
        },
        {
          term: 'Soil-Structure Resonance',
          def: `Amplified structural response that occurs when a building\'s natural period closely matches the dominant period of the site\'s soil column, causing mutual reinforcement of motion between structure and ground; responsible for disproportionate collapse of medium-height buildings on soft sediment.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Structural Systems and Their Seismic Behaviour',
      body: 'The choice of structural system determines how a building dissipates seismic energy. Modern seismic design uses a hierarchy of "intended yield mechanisms" — pre-selecting where and how the structure will deform to ensure energy absorption before collapse.',
      cards: [
        {
          name: 'Ductile Moment Frames',
          icon: Building,
          color: BRAND.coral,
          desc: 'Steel or reinforced-concrete frames with rigid beam-column connections designed to yield at beam ends ("strong column, weak beam" principle). Ductile post-yield behaviour allows 3–5% inter-storey drift before collapse — far exceeding brittle systems.',
          examples: `California\'s concrete moment frames, revised after the 1971 Sylmar earthquake revealed poor rebar detailing, now require closely-spaced confinement ties. San Francisco\'s 55-storey Millennium Tower uses a concrete core-wall plus perimeter moment frame system.`,
        },
        {
          name: 'Shear Walls and Dual Systems',
          icon: Shield,
          color: BRAND.jade,
          desc: 'Reinforced concrete or structural steel shear walls provide stiff lateral resistance that limits drift; combined with moment frames in "dual systems," shear walls carry most lateral load while moment frames provide ductile reserve capacity if walls crack.',
          examples: `Japan\'s multi-family apartment towers (mansions) almost universally use RC shear-wall construction. San Francisco City Hall\'s 1990s retrofit added steel braced frames and a base isolation system beneath the historic masonry structure.`,
        },
        {
          name: 'Base Isolation',
          icon: Gauge,
          color: BRAND.gold,
          desc: `Flexible bearings at the building base lengthen the structure\'s effective period to 2–4 seconds, shifting its response away from the dominant period of earthquake ground motion. Floor accelerations are typically reduced by 60–80% compared to fixed-base designs.`,
          examples: 'Tokyo Skytree (634 m): uses a central concrete shaft with viscous oil dampers. San Francisco City Hall retrofit (1999): 530 lead-rubber and high-damping rubber isolators allow 50 cm of relative displacement. Christchurch Cathedral repair plan uses lead-rubber isolators to preserve historic fabric while meeting NZS1170.5.',
        },
        {
          name: 'Unreinforced Masonry (URM)',
          icon: Layers,
          color: BRAND.ruby,
          desc: 'Stone, brick, or plain concrete block construction without internal steel reinforcement is inherently brittle, heavy, and lethal. Walls shear or overturn; floors pancake. URM buildings account for the majority of earthquake fatalities worldwide.',
          examples: '2023 Turkey-Syria Mw 7.8: many collapsed buildings were poor-quality reinforced concrete or effectively unreinforced masonry with minimal rebar. 2010 Haiti Mw 7.0: ~200,000 deaths primarily from poorly constructed concrete block construction with negligible detailing.',
        },
        {
          name: 'Soft-Storey Configuration',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Open ground floors for parking (pilotis) or commercial space create a storey with dramatically lower stiffness. Under lateral loading, the soft storey absorbs nearly all inter-storey drift, concentrating plastic deformation until the ground floor columns fail in shear.',
          examples: '1999 Kocaeli (İzmit), Turkey: hundreds of soft-storey pilotis apartment blocks collapsed, killing ~17,000. 2023 Turkey: pre-1999 soft-storey buildings again dominated collapse statistics. Retroactive retrofit with concrete or steel infill walls is the primary remediation.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Lessons from the 2023 Turkey-Syria Earthquake',
      body: 'The February 6, 2023 Kahramanmaraş earthquake sequence (Mw 7.8 followed by Mw 7.5 nine hours later) killed more than 56,000 people across southern Turkey and northern Syria. It became one of the most intensely studied structural-failure events in the history of seismic engineering.',
      cards: [
        {
          name: 'Code vs. Construction Quality',
          icon: Shield,
          color: BRAND.coral,
          desc: 'Turkey adopted modern seismic design codes (TEC 2007, updated in TEC 2018) comparable to European and Japanese standards. Post-earthquake surveys found that the majority of collapsed buildings were constructed before or in violation of code provisions — poor concrete quality, insufficient rebar, and soft-storey configurations were endemic.',
          examples: 'Turkish Disaster and Emergency Management Authority (AFAD) inspections found collapsed buildings had concrete cylinder strength often below 10 MPa (minimum code requirement: 20 MPa) and rebar splice lengths less than half the required development length at column bases.',
        },
        {
          name: 'Zoning Amnesties and Their Consequences',
          icon: Building,
          color: BRAND.jade,
          desc: 'Turkey issued broad construction amnesty laws (2018 imar barışı) that legalised millions of non-compliant structures in exchange for fees, without requiring structural remediation. Engineering societies warned this would have catastrophic consequences in a seismic event; the 2023 earthquake confirmed these predictions.',
          examples: 'An estimated 7.5 million housing units across Turkey were regularised without structural inspection. In Antakya (Hatay province), a city largely on river alluvium, ~70% of buildings were destroyed or severely damaged — one of the highest structural loss rates ever recorded in a modern city.',
        },
        {
          name: 'Ground Failure and Site Amplification',
          icon: Layers,
          color: BRAND.gold,
          desc: 'The Kahramanmaraş region sits on thick alluvial sediments in the East Anatolian Fault valley. Soil amplification from soft river deposits and localised liquefaction compounded structural vulnerability. Buildings on rock outcrops or well-compacted soils nearby suffered far lower collapse rates.',
          examples: 'Erzin district (Hatay province, located on competent rock) reported zero building collapses despite strong shaking — a striking contrast to neighbouring alluvial districts. This pattern reproduced the site-amplification lessons of 1999 Kocaeli, where alluvial plains experienced 2-3× greater damage than nearby rock sites.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Why Buildings Collapse: From Ground Motion to Structural Failure',
      body: 'The chain of mechanisms linking earthquake ground motion to building collapse, and where engineering interventions break that chain.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The causal chain from seismic ground motion through structural response to potential collapse, showing where modern seismic engineering and building codes intervene',
        nodes: [
          {
            id: 'ground-motion',
            label: 'Seismic Ground Motion',
            description: `Horizontal accelerations and velocities at the building base. PGA of 0.3–0.6 g is typical for a damaging near-field event. Spectral accelerations at the building\'s natural period govern structural demands.`,
            color: BRAND.coral,
          },
          {
            id: 'site-response',
            label: 'Site Amplification',
            description: 'Soft sediments amplify and lengthen ground motion. Soil period matching building period produces resonance. VS30 <180 m/s (Site Class E) can amplify ground motion 3–5× relative to bedrock — the primary variable differentiating damage within a city.',
            color: BRAND.gold,
          },
          {
            id: 'lateral-force',
            label: 'Lateral Inertial Force',
            description: `As the ground accelerates, the building\'s mass wants to stay still. The result is a horizontal force = mass × acceleration applied at each floor. Taller buildings concentrate force at upper floors; soft stories concentrate demand at the weak level.`,
            color: BRAND.jade,
          },
          {
            id: 'structural-response',
            label: 'Structural Response',
            description: 'Modern ductile structures yield progressively — beams before columns — dissipating energy without fracture. Brittle structures (URM, poorly-detailed RC) crack suddenly and lose load-carrying capacity. Soft stories concentrate drift and fail in shear.',
            color: BRAND.amethyst,
          },
          {
            id: 'collapse-mechanism',
            label: 'Collapse or Survival',
            description: 'Ductile structures with adequate detailing survive: inter-storey drift may reach 3–5% with severe but repairable damage. Soft-storey and URM structures collapse when column shear capacity is exceeded — typically at 1–2% drift. Pancake collapse kills occupants.',
            color: BRAND.ruby,
          },
          {
            id: 'intervention',
            label: 'Engineering Interventions',
            description: 'Code-compliant design (design spectra + ductile detailing), base isolation (reduces floor acceleration 60–80%), shear-wall infill retrofit (eliminates soft storey), and seismic zoning (prohibits URM in high-hazard zones) break the collapse chain.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'ground-motion', to: 'site-response', label: 'Amplified by local soil' },
          { from: 'site-response', to: 'lateral-force', label: 'Applied to building mass' },
          { from: 'lateral-force', to: 'structural-response', label: 'Structure deforms' },
          { from: 'structural-response', to: 'collapse-mechanism', label: 'Ductile yield vs brittle failure' },
          { from: 'intervention', to: 'structural-response', label: 'Ductile design reduces demands' },
          { from: 'intervention', to: 'site-response', label: 'Zoning avoids soft-soil sites' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Modern seismic codes require buildings to undergo large inelastic deformations rather than remaining elastic during a design-level earthquake. What engineering principle justifies accepting structural damage in order to prevent collapse?',
          a: [
            'Inelastic deformation reduces the building\'s mass, lowering seismic forces proportionally',
            'Ductile yielding dissipates seismic energy through plastic deformation, preventing the brittle fracture that would otherwise cause sudden collapse',
            'Buildings that deform inelastically trigger EEW systems, allowing occupants to evacuate before collapse',
            'Inelastic deformation increases the building period, shifting it away from the fundamental resonance frequency of the fault',
          ],
          correct: 1,
          explain: 'B is correct: designing for ductile yielding exploits the ability of steel and well-confined concrete to absorb energy by deforming plastically without fracturing. The goal is "life safety" — occupants can evacuate a severely damaged but standing building. Trying to keep a building fully elastic during a large earthquake would require enormously overbuilt structures; ductile design achieves life safety at a fraction of the cost. A is wrong: inelastic deformation does not materially change mass. C is wrong: there is no such coupling between building deformation and EEW. D is wrong: significant period elongation occurs but is a secondary effect, not the primary justification for ductile design.',
        },
        {
          q: 'Base isolation dramatically reduces floor accelerations in an earthquake. What is the physical mechanism by which it achieves this reduction?',
          a: [
            'The isolators absorb seismic waves before they enter the building, preventing energy transfer from the ground',
            'Flexible isolators lengthen the building\'s effective period to 2–4 seconds, shifting the structural response to a frequency range where earthquake ground motion has much lower energy content',
            'The isolators increase the building\'s mass, which by Newton\'s second law reduces the acceleration for a given force',
            'Lead plugs within the isolators convert seismic energy to heat, completely eliminating horizontal floor motion',
          ],
          correct: 1,
          explain: `B is correct: earthquake ground motion contains most energy at periods of 0.1–1 second. A fixed-base 3-storey building has a natural period of ~0.3 s, squarely in the high-energy range. Base isolators make the building-isolator system behave as if the building sits on a very long pendulum with period 2–4 s, far outside the peak energy content. Floor accelerations (and therefore forces on the structure and its contents) are typically reduced by 60–80%. A is wrong: isolators permit relative displacement between ground and building; they do not block wave transmission. C is wrong: mass increase marginally raises demand, not reduce it; Newton\'s F=ma works the other way. D has partial truth (lead plugs do dissipate energy as heat) but this is a secondary damping effect, not the primary period-lengthening mechanism.`,
        },
        {
          q: 'Why does a "soft storey" at the ground floor of a building create a disproportionate collapse risk compared to a uniformly stiff structure of the same total height?',
          a: [
            'The ground floor is always weakest because it bears the largest vertical load from floors above',
            'Lateral seismic drift concentrates in the most flexible storey; a soft ground floor absorbs nearly all inter-storey displacement, subjecting its columns to shear forces and rotations far exceeding those distributed across the height in a regular structure',
            'Ground floors typically have lower concrete quality due to foundation formwork practices, compounding the stiffness problem',
            'Soft-storey buildings have longer natural periods, making them susceptible to long-period surface waves from distant large earthquakes',
          ],
          correct: 1,
          explain: 'B is correct: in a laterally loaded building, each storey takes a fraction of the total displacement proportional to its flexibility. If the ground floor is 5× more flexible than other floors, it absorbs ~5× more drift. This concentrates plastic rotation demand at ground-floor column bases, driving them rapidly to failure in shear or flexure while upper floors remain largely undamaged. The characteristic mode is sudden "pancake" collapse of the ground floor. A is wrong: gravity load distribution alone does not determine lateral vulnerability. C is wrong: concrete quality is a separate issue. D is partially true for very tall soft-storey buildings but is not the primary collapse mechanism for typical 4–8 storey pilotis structures.',
        },
        {
          q: 'The 2023 Turkey-Syria earthquake killed over 56,000 people despite Turkey having modern seismic design codes. What factor most directly explains the gap between code quality and actual building performance?',
          a: [
            'The earthquake exceeded the design-basis ground motion by more than a factor of three at most collapse sites',
            'Construction quality was systematically below code requirements, with substandard concrete, inadequate rebar detailing, and structural amnesties that legalised non-compliant buildings without remediation',
            'The codes were not updated after the 1999 Kocaeli earthquake and so did not include modern ductility provisions',
            'Soft soil amplification in the Kahramanmaraş basin was unexpectedly severe and not captured in the national seismic hazard model',
          ],
          correct: 1,
          explain: `B is correct: post-earthquake investigations by AFAD, university teams, and international reconnaissance groups consistently found that collapsed buildings had concrete compressive strengths well below the code minimum of 20 MPa (many tested at 8–12 MPa), rebar with inadequate hooks, lap splices, and confinement ties, and structural configurations (soft stories, short columns) prohibited by code. Turkey\'s 2018 imar barışı (construction amnesty) legalised approximately 7.5 million non-compliant structures by fee payment, not structural upgrade. A is wrong: while some sites exceeded median PSHA predictions, field survey data show well-constructed code-compliant buildings near collapse zones survived. C is wrong: Turkey adopted a modern code with full ductility provisions in 2007, updated in 2018. D is true in some areas but explains a fraction of collapses; structural quality is the dominant variable.`,
        },
        {
          q: 'An engineer compares two 10-storey reinforced concrete buildings on the same soil: Building A uses a ductile special moment frame; Building B uses unreinforced masonry infill walls with a thin RC frame. Both are designed for the same gravity loads. In a Mw 6.5 earthquake at 15 km, which is more likely to collapse, and why?',
          a: [
            'Building A, because moment frames are more flexible and experience larger drift than stiff masonry buildings',
            'Building B, because unreinforced masonry is brittle and fails suddenly when shear stress exceeds its (low) capacity, without the progressive energy-absorbing yielding of a ductile RC moment frame',
            'Both perform identically because they carry the same gravity loads and have the same floor mass',
            'Building B performs better because the masonry infill walls stiffen the structure, reducing lateral deflection during the earthquake',
          ],
          correct: 1,
          explain: `B is correct: unreinforced masonry has very low shear tensile strength (~0.1–0.3 MPa) and zero ductility. When seismic forces produce diagonal tensile stress exceeding this limit, masonry walls fail suddenly and completely, shedding load to the frame and often triggering progressive collapse. Building A\'s special moment frame is designed with closely-spaced confinement steel at beam-column joints, allowing columns and beams to yield and absorb energy through plastic deformation over many cycles before failure. A is wrong: larger drift in a ductile system is a feature, not a failure mode; the structure can accommodate it. C is wrong: structural system determines collapse vulnerability far more than gravity load levels. D is partially true for stiffness (masonry infill does stiffen initially) but the sudden brittle failure when the masonry cracks eliminates this advantage and often triggers worse behaviour through short-column effects.`,
        },
      ],
    },
  ],
}

export default seismicEngineeringBuildingCodes
