import { Waves, Flame, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const midOceanRidges: Lesson = {
  id: 'ocea-101-1-1-2',
  title: 'Mid-Ocean Ridges and Hydrothermal Vents',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "At the bottom of every ocean, a 65,000-kilometre volcanic mountain chain continuously forges new seafloor — and hosts ecosystems that survive without a single ray of sunlight.",
  sources: [
    { org: 'NOAA',     title: 'Hydrothermal Vents',                                       url: 'https://oceanservice.noaa.gov/facts/vents.html' },
    { org: 'NOAA',     title: 'Ocean Exploration — Mid-Ocean Ridges',                     url: 'https://oceanexplorer.noaa.gov/facts/mid-ocean-ridge.html' },
    { org: 'USGS',     title: 'Seafloor Spreading and Mid-Ocean Ridges',                  url: 'https://www.usgs.gov/educational-resources' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 3 (CC-BY 4.0)',           url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'MBARI',    title: 'Deep-Sea Research — Hydrothermal Vents',                   url: 'https://www.mbari.org/science/seafloor-processes/chemosynthesis-in-the-deep-sea/' },
  ],
  sections: [
    {
      type: 'intro',
      title: "The planet's longest mountain range",
      body: `In 1977, marine geologists aboard the research submersible *Alvin* descended to the Galapagos Rift, a section of the mid-ocean ridge system in the eastern Pacific. They were testing a hypothesis: if seafloor spreading is driven by hot magma rising from the mantle, the seafloor at the ridge crest should be warm, and seawater percolating through cracks in the basalt should absorb that heat and emerge somewhere. What they found exceeded all expectations. At a depth of 2,500 metres, where the temperature of normal bottom water is just 2°C, they encountered shimmering columns of superheated water pouring from cracks in the seafloor at temperatures above 350°C. Around these **hydrothermal vents**, improbably, lived dense colonies of tubeworms, giant clams, shrimp, crabs, and fish — entirely independent of sunlight for energy. Instead, bacteria oxidised hydrogen sulphide emerging from the vents, producing the chemical energy that fuelled the entire food web. The discovery of hydrothermal vent ecosystems overturned the assumption that all life on Earth depends ultimately on photosynthesis, and opened new hypotheses about where life might exist elsewhere in the solar system.

The hydrothermal vents are a consequence of a larger geological system: the **mid-ocean ridge**. Running through every ocean basin on Earth, the mid-ocean ridge system is a continuous volcanic mountain chain approximately 65,000 kilometres long — roughly the circumference of Earth, and ten times the length of the Andes. It is the most volcanically active feature on the planet's surface. Every year, mid-ocean ridges produce approximately 3 km³ of new basaltic oceanic crust — vastly more volcanic material than all of the world's subaerial volcanoes combined. This continuous creation of new seafloor is the engine of plate tectonics: new crust forms, pushes older crust away from the ridge axis, and ultimately drives the movement of the tectonic plates.

The ridge system was first identified as a continuous global structure by Marie Tharp and Bruce Heezen in the 1950s, using thousands of sonar profiles collected by ships of Columbia University's Lamont-Doherty Geological Observatory. Tharp's meticulous hand-drafting of the seafloor bathymetry, frustrated at several points by the refusal of colleagues to take her data seriously, ultimately produced the first maps to show the global mid-ocean ridge system in its full extent — a scientific contribution that helped launch the plate tectonics revolution.`,
      keyTerms: [
        {
          term: 'Seafloor spreading',
          def: 'The process by which new oceanic crust is continuously created at mid-ocean ridges as magma rises from the mantle, solidifies into basalt and gabbro, and is pushed laterally away from the ridge axis. The rate varies from ~2 cm/yr (Mid-Atlantic Ridge) to ~15 cm/yr (East Pacific Rise). First proposed by Harry Hess in 1960.',
        },
        {
          term: 'Rift valley',
          def: 'The central graben (down-dropped block between two faults) that runs along the crest of a mid-ocean ridge, where new oceanic crust is being pulled apart. Most prominent at slow-spreading ridges like the Mid-Atlantic Ridge, where it can be 30–50 km wide and 1–2 km deep. At fast-spreading ridges it is shallower and less pronounced.',
        },
        {
          term: 'Black smoker',
          def: 'A type of hydrothermal vent that emits superheated, mineral-rich water at temperatures up to 400°C. The dark colour results from precipitation of fine-grained metal sulphide minerals (iron, copper, zinc, lead) as the hot vent fluid mixes with cold seawater. Build chimney structures up to 60 m tall over decades.',
        },
        {
          term: 'Chemosynthesis',
          def: 'The process by which microorganisms use the chemical energy stored in reduced compounds (especially hydrogen sulphide, H₂S) to synthesise organic molecules, without sunlight. Chemosynthetic bacteria at hydrothermal vents and cold seeps are the primary producers of deep-sea vent ecosystems, supporting food chains independent of photosynthesis.',
        },
        {
          term: 'Transform fault',
          def: 'A type of fault that offsets segments of a mid-ocean ridge laterally. Transform faults connect ridge segments and absorb the differential spreading rates between them. They are a third type of plate boundary (beside divergent and convergent) and are sites of shallow earthquakes. The Romanche Transform in the equatorial Atlantic is one of the largest.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Ridge structure, spreading rates, and vent chemistry',
      body: `**Anatomy of a mid-ocean ridge.** Despite its enormous length, the mid-ocean ridge follows a consistent structural pattern. At the ridge crest, magma from the upper mantle pools in a **magma chamber** a few kilometres below the seafloor and periodically erupts, creating pillow basalts — rounded lobes of lava formed when molten rock erupts into cold seawater and quenches instantly into characteristic pillow shapes. The eruptions build up the ridge flanks and add new material to the oceanic crust. The central **rift valley** runs along the crest of slow-spreading ridges, formed by extensional faulting as the crust is pulled apart. At fast-spreading ridges, where the magma supply is more continuous and the crust more buoyant, the rift is subdued or absent, replaced by a gently inflated ridge crest called an **axial high**.

**Spreading rates and ridge morphology.** Not all mid-ocean ridges spread at the same rate. The spreading rate profoundly affects the ridge's shape. **Slow-spreading ridges** (1–4 cm/yr, like the Mid-Atlantic Ridge) have rugged, mountainous flanks, a deep and wide central rift valley, and more faulting than volcanism at the surface. The crust is cooler and more brittle, so earthquakes are common and can extend to considerable depth. **Fast-spreading ridges** (8–15 cm/yr, like the East Pacific Rise) have smooth, gently sloping flanks, a broad axial dome, and a subdued rift; volcanism is more continuous and less episodic. **Intermediate** ridges (4–8 cm/yr, like the Juan de Fuca Ridge off Oregon and Washington) have characteristics between these extremes. The East Pacific Rise is responsible for generating much of the Pacific Ocean floor; the Mid-Atlantic Ridge is opening the Atlantic at approximately the rate fingernails grow on a human hand.

**Transform faults and fracture zones.** Mid-ocean ridges are not straight. They are offset by hundreds of transform faults — fractures perpendicular to the ridge axis where segments of the ridge are shifted laterally by tens to hundreds of kilometres. Between two offset ridge segments, the crust on both sides moves in the same direction but at different distances from the ridge; this creates the lateral shearing motion that gives transform faults their name. Transform faults at mid-ocean ridges are active seismic zones; beyond the ridge offset, inactive fracture zones extend across the ocean floor, recording the geometry of past ridge offsets. The San Andreas Fault in California is a continental transform fault where the Pacific and North American plates slide past each other — geologically equivalent to a mid-ocean transform, except it occurs on land.

**Hydrothermal circulation.** Seawater percolates down through cracks and pores in the newly formed basaltic crust. As it descends toward the hot magma body below, it heats to temperatures exceeding 400°C. At these temperatures and pressures, seawater is a powerful chemical reagent: it strips metals (iron, copper, zinc, cobalt, lead, silver, gold) and other elements from the surrounding basalt. The hot, metal-laden fluid rises back through the crust along fault zones and erupts at the seafloor as hydrothermal vents. Where the fluid is hottest and most metal-rich, it immediately precipitates sulphide minerals as it hits cold seawater, building chimneys of **black smoker** material — sometimes growing at several centimetres per day and reaching tens of metres in height. Cooler, more diffuse flows — **white smokers** — emit milky water rich in barium, calcium, and silicon. Some vents, called **Lost City** vents (discovered in 2000 on the Mid-Atlantic Ridge), are driven not by magmatic heat but by serpentinisation: the reaction of seawater with deep mantle rock (peridotite), which generates hydrogen and heat without a proximate magma body.

**Hydrothermal vent chemistry and the ocean.** Hydrothermal circulation is not just biologically important — it is a major control on ocean chemistry. The global mid-ocean ridge system processes roughly the entire volume of the world's ocean through hydrothermal circulation every 8–10 million years. This circulation removes magnesium and sulphate from seawater and adds calcium, silicon, iron, and manganese — effectively acting as a massive geochemical pump that regulates ocean composition over geological time. The iron and trace metals added by hydrothermal vents near ridges fertilise phytoplankton in the open ocean.

**Vent ecosystems.** Hydrothermal vent communities are among the most remarkable ecosystems on Earth. The primary producers are chemosynthetic **Bacteria** and **Archaea** — microorganisms that oxidise hydrogen sulphide (H₂S) or methane (CH₄) to generate chemical energy, which they use to fix CO₂ into organic compounds. These microbes live both freely in the vent fluid and in symbiotic relationships with macrofauna: tubeworms (*Riftia pachyptila*) host chemosynthetic bacteria in a specialised organ (the trophosome), deriving all their nutrition from their bacterial partners. Giant clams and mussels also harbour chemosynthetic symbionts in their gill tissues. Above the microbial base of the food web, shrimp, crabs, fish, octopuses, and diverse invertebrates form complex communities. Individual vent fields persist for decades or centuries before the magmatic heat source beneath them wanes; when a vent dies, the community dependent on it dies with it, and animals must disperse to colonise new vents. Vent larvae drift in bottom currents and settle at new sites, maintaining the global distribution of vent species across ridge systems thousands of kilometres apart.`,
      cards: [
        {
          name: 'Fast vs Slow Ridges',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Spreading rate determines ridge morphology. Fast ridges (East Pacific Rise, ~12 cm/yr): broad, smooth flanks, axial high, continuous volcanism, minimal rift valley. Slow ridges (Mid-Atlantic Ridge, ~2.5 cm/yr): rugged mountainous flanks, deep wide rift valley, episodic volcanism, more faulting. Intermediate ridges (Juan de Fuca Ridge, ~5 cm/yr): transitional character.',
          examples: 'Mid-Atlantic Ridge: slow, 2.5 cm/yr, Iceland surface exposure · East Pacific Rise: fast, up to 15 cm/yr · Juan de Fuca Ridge: intermediate, active geology off NW USA',
        },
        {
          name: 'Black & White Smokers',
          icon: Flame,
          color: BRAND.coral,
          desc: 'Black smokers: >350°C, precipitate iron-copper-zinc sulphides, form tall chimneys. White smokers: 40–300°C, precipitate barium-calcium-silicon minerals, milky plume. Lost City vents (2000): driven by serpentinisation rather than magmatic heat — peridotite + seawater reaction generates H₂ and heat independently of a magma source. All types support chemosynthetic communities.',
          examples: 'TAG Field (Mid-Atlantic): black smokers at 2,600 m depth · Lost City (Mid-Atlantic): white carbonate chimneys up to 60 m tall · Oases on East Pacific Rise: tubeworm fields discovered 1977',
        },
        {
          name: 'Vent Ecosystems',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Chemosynthesis drives vent food webs instead of photosynthesis. Bacteria and Archaea oxidise H₂S → organic carbon. Tubeworms (Riftia pachyptila): up to 2 m long, no mouth or gut, feed entirely via chemosynthetic symbionts in trophosome. Giant clams, mussels, shrimp, crabs, eelpout fish. Individual vent lifespan: decades to centuries. Species disperse across ocean basins via bottom currents between active vents.',
          examples: 'Riftia pachyptila: growth rate up to 85 cm/yr, world\'s fastest animal growth · Yeti crab: "farms" bacterial mats on its hairy claws · 700+ species unique to hydrothermal vents globally',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Why does the East Pacific Rise (a fast-spreading ridge) have a broad, smooth axial high with a small rift valley, while the Mid-Atlantic Ridge (a slow-spreading ridge) has rugged flanks and a deep, wide central rift valley?',
          a: [
            'The East Pacific Rise is made of younger, hotter basalt that is more buoyant, causing it to float higher and form a dome shape; the Mid-Atlantic Ridge has older, denser basalt that has subsided more',
            'Fast-spreading ridges have a continuous, robust magma supply that keeps the crust warm, buoyant, and volcanically inflated, suppressing the rift; slow-spreading ridges have a more intermittent magma supply, so extensional faulting creates a pronounced rift between volcanic episodes',
            'The different morphologies reflect the age of the ocean basin: the Atlantic Ocean is older than the Pacific, so the Mid-Atlantic Ridge has had more time to develop its deep rift through erosion',
            'The East Pacific Rise lacks a deep rift because it is surrounded by warmer tropical Pacific water that prevents the crust from contracting; the Mid-Atlantic Ridge\'s cold North Atlantic water causes more thermal contraction and rift deepening',
          ],
          correct: 1,
          explain: 'Ridge morphology is not controlled by basalt age (A) — both fast and slow ridges produce the same young basalt at the spreading centre; the age of surrounding crust does not influence the axial morphology. Basin age (C) is not the primary factor — the Pacific is not significantly younger, and erosion does not carve rifts into the deep ocean floor. Water temperature differences (D) are not mechanically significant enough to drive this structural difference. The correct answer is B: at fast-spreading ridges, a nearly continuous supply of magma from the underlying mantle keeps the crust warm, partially molten, and buoyant; the thermal inflation of the crust creates the broad axial high, and the constant volcanism outpaces extensional faulting; at slow-spreading ridges, magma supply is episodic — the crust cools between eruptions, becomes brittle, and is pulled apart by plate divergence, creating normal faults and the characteristic deep, wide rift valley; this difference is one of the most robust relationships in marine geology and has been confirmed by extensive drilling and seismic imaging.',
        },
        {
          q: 'Hydrothermal vent communities depend on chemosynthesis rather than photosynthesis as their energy source. What chemical reaction drives chemosynthesis at most hydrothermal vents, and why does it provide a viable energy source at 2,500 m depth?',
          a: [
            'Vent bacteria use the temperature difference between the hot vent fluid and cold seawater as an energy source, in a biological equivalent of a thermoelectric generator — this is called chemosynthesis because the temperature gradient involves chemical heat energy',
            'Vent bacteria oxidise hydrogen sulphide (H₂S) from the vent fluid using dissolved oxygen from seawater; the energy released by this oxidation reaction is used to fix carbon dioxide into organic molecules, in the same way photosynthesis uses light energy',
            'Vent bacteria photosynthesise using the faint thermal infrared radiation emitted by the hot vent water, which can penetrate the darkness at depth — chemosynthesis is simply a form of photosynthesis adapted to longer wavelengths of light',
            'Vent bacteria use hydrostatic pressure — the enormous weight of the water column above — as their energy source; the mechanical compression of molecules provides the chemical energy equivalent of sunlight for photosynthesis',
          ],
          correct: 1,
          explain: 'Thermoelectric energy conversion (A) does not occur biologically — organisms cannot harvest temperature gradients as an energy source in the way described; chemosynthesis is specifically a biochemical process involving redox chemistry, not thermal gradients. Infrared photosynthesis (C) is not how vent chemosynthesis works — although some researchers have detected extremely faint near-infrared glow from hot vents that might be detected by very sensitive photosynthetic systems in some organisms, this is not the primary energy pathway and "chemosynthesis" specifically refers to chemical energy, not any form of light. Hydrostatic pressure (D) cannot drive biochemical energy synthesis — pressure at depth is hydrostatic equilibrium, not a directional mechanical force that can do thermodynamic work on biological molecules. The correct answer is B: chemosynthetic bacteria at hydrothermal vents oxidise hydrogen sulphide (H₂S → SO₄²⁻) using dissolved oxygen from seawater; this is an exothermic redox reaction that releases energy the bacteria use to power carbon fixation (CO₂ + H₂O → organic carbon); the deep ocean still contains dissolved oxygen carried down from the surface by thermohaline circulation, so the reaction is possible despite the darkness; chemosynthesis is energetically viable because the concentration of H₂S in vent fluid is high and the oxidation reaction releases sufficient free energy to drive carbon fixation.',
        },
        {
          q: "What is the geological significance of transform faults at mid-ocean ridges, and how do they differ from the fracture zones they become beyond the ridge offset?",
          a: [
            'Transform faults and fracture zones are identical features; the different names simply reflect whether the feature has been mapped by ships (fracture zones, discovered earlier) or by submersibles (transform faults, discovered later)',
            'Transform faults are the active segments between offset ridge crests where two plates slide horizontally past each other, producing earthquakes; fracture zones are the extensions of the same structural feature beyond the ridge offsets, but are inactive because both sides of the fracture are on the same plate moving in the same direction',
            'Transform faults offset mid-ocean ridges vertically — one ridge segment is uplifted relative to another; fracture zones are horizontal extensions of transform faults that form only where two ridges spread in opposite directions',
            'Transform faults are caused by the rotation of tectonic plates and only exist in the Northern Hemisphere where the Coriolis effect deflects spreading away from the ridge axis; fracture zones are their Southern Hemisphere equivalents',
          ],
          correct: 1,
          explain: 'The names are not simply a mapping distinction (A) — they describe genuinely different structural and seismic characteristics of the same underlying fracture. Transform faults are not vertical offsets (C) — they are strike-slip (horizontal) faults, and fracture zones are not confined to opposite-direction spreading. Coriolis effects (D) do not create transform faults — the mechanism is the differential spreading along a curved ridge axis, which requires lateral accommodation regardless of hemisphere. The correct answer is B: at a transform fault, the two segments of ridge on either side are offset along the fracture, and the crust between the two ridge segments is moving in opposite directions (away from each respective ridge); this creates a right-lateral or left-lateral strike-slip motion between the two plates, producing shallow earthquakes; beyond the ridge offsets, on either side, both sides of the fracture are on the same plate moving in the same direction (both moving away from their respective ridges), so there is no relative motion across the fault — making it seismically inactive; these inactive extensions are fracture zones and can be traced as visible scarps across thousands of kilometres of ocean floor.',
        },
      ],
    },
  ],
}

export default midOceanRidges
