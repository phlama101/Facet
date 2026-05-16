import { Flame, Thermometer, Atom } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const mantleConvection: Lesson = {
  id: 'geol-101-1-3',
  title: 'The Mantle and Its Convection',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "The mantle is solid rock — yet it flows. Understanding how and why unlocks the engine behind earthquakes, volcanoes, and the entire plate-tectonic system.",
  sources: [
    { org: 'USGS',     title: 'This Dynamic Earth (Kious & Tilling)',    url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'NASA',     title: 'Earth Facts — By the Numbers',            url: 'https://science.nasa.gov/earth/facts/' },
    { org: 'NOAA',     title: 'Ocean Service — Seafloor spreading',      url: 'https://oceanservice.noaa.gov' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',   url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: "Earth's Interior", url: 'https://scied.ucar.edu/learning-zone/earth/earths-interior' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The slow boil',
      body: `Set a pot of thick oatmeal on the stove and watch what happens as it heats. Slow, heavy domes of porridge push up from the bottom, spread sluggishly across the surface, cool down, and sink again at the edges. New domes form. The pattern repeats. This is **convection** — the circulation of a material driven by heat from below — and it is one of the most important processes in all of physics.

Earth's mantle does the same thing. The details are dramatically different: instead of oatmeal, the "fluid" is solid rock. Instead of a stovetop, the heat source is the ancient energy trapped inside a planet formed 4.54 billion years ago, still slowly leaking out. And instead of minutes, one full circulation cycle takes tens to hundreds of millions of years. But the fundamental pattern — hot material rises, cools, sinks — is identical.

In Lesson 1.1.1, we introduced the mantle as "very hot" and "slow-flowing on geologic timescales" without explaining either claim. In Lesson 1.1.2, we observed that oceanic crust is continuously created somewhere and destroyed somewhere else — and we deferred the explanation. Both questions point to the same answer: **mantle convection is the engine driving Earth's surface in motion**.

This lesson explains how solid rock can flow, where the heat driving that flow comes from, what the convection cycle looks like, and how it produces the features we see at Earth's surface.`,
      keyTerms: [
        {
          term: 'Mantle convection',
          def: "The slow, heat-driven circulation of solid rock within Earth's mantle. Hotter, less dense rock rises; cooler, denser rock sinks. The cycle repeats continuously on timescales of millions to hundreds of millions of years, and it is the primary engine driving tectonic-plate motion.",
        },
        {
          term: 'Viscosity',
          def: "A material's resistance to flow. Water has low viscosity; honey has higher viscosity; tar has very high viscosity. The mantle's viscosity is orders of magnitude higher than any everyday material — yet under sustained heat and pressure it still flows, just extraordinarily slowly.",
        },
        {
          term: 'Heat flow',
          def: "The rate at which heat from Earth's interior escapes through the surface, measured in milliwatts per square metre (mW/m²). Locations where hot mantle is rising, such as mid-ocean ridges, have measurably higher heat flow than stable continental interiors.",
        },
        {
          term: 'Radioactive decay',
          def: "The spontaneous breakdown of unstable atomic nuclei — in Earth's case, primarily uranium-238, uranium-235, thorium-232, and potassium-40 — which releases heat as a by-product. This ongoing process inside the mantle and crust is one of the two major sources of Earth's internal heat.",
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'insight',
      headline: "Mantle rock flows at roughly 2–5 cm (0.8–2.0 in) per year — about the speed your fingernails grow",
      body: 'The asthenosphere moves at 2–5 centimetres per year, which is virtually imperceptible on a human timescale. Yet over 50 million years — a geologically modest interval — this motion carries rock over 1,000 km (621 mi). The Atlantic Ocean has been widening at about 2.5 cm (1.0 in) per year since it began opening ~180 million years ago, meaning it has grown from nothing to its current 3,000 km (1864 mi) width entirely through this "fingernail-speed" convection. Time is the variable that turns imperceptible motion into continental-scale rearrangement.',
    },
    {
      type: 'concept',
      title: 'How rock flows — and what it sets in motion',
      body: `The most common misconception about the mantle is that it must be liquid in order to flow. It is not. The mantle is solid rock. But solid does not mean immovable, and understanding the distinction is central to understanding how Earth works.

**Solid-state creep — flow without melting.** At room temperature and atmospheric pressure, rock behaves like a rigid solid. Drop it and it shatters. But in the deep mantle, temperatures exceed 1,000–3,000°C (1832–5432°F) and pressures reach millions of times atmospheric pressure. Under those conditions, the crystal lattices inside rock minerals slowly deform — atoms shuffle from one position to another within the solid structure, allowing the rock to change shape over time without ever melting. Geologists call this **solid-state creep**. The rock remains solid throughout; it simply deforms the way glass in a very old window pane deforms over centuries — almost imperceptibly slowly, but continuously.

Think of it this way: on a timescale of seconds, mantle rock is as rigid as steel. On a timescale of a million years, it flows like a very, very thick syrup. The asthenosphere — the upper portion of the mantle that lies directly beneath the lithosphere — is where this flow happens most easily, because it is hot enough and close enough to its melting point that solid-state creep operates more readily there than in the deeper mantle.

**Two sources of heat.** For convection to continue, the deep mantle must stay hotter than the near-surface mantle. Two processes maintain this temperature gradient.

The first is **residual heat** from Earth's formation. When countless rocky and metallic bodies collided to assemble Earth roughly 4.54 billion years ago, those collisions converted enormous amounts of kinetic energy into heat. The early Earth was partly or largely molten. Since then it has been cooling — but it is so large, and rock conducts heat so poorly, that the original heat is still escaping billions of years later. The deep interior remains far hotter than the surface, and that gradient drives flow.

The second is **radioactive decay**. Scattered throughout the mantle and crust are atoms of uranium-238, uranium-235, thorium-232, and potassium-40. As these unstable nuclei decay, they release heat continuously. This is not a one-time event: it is an ongoing process that has been adding heat to Earth's interior for its entire history, though the rate declines gradually as the radioactive atoms are used up. The combination of residual formation heat and ongoing radioactive decay is what keeps the mantle hot enough to convect today.

**The convection cycle, step by step.** Picture a parcel of rock deep in the lower mantle, heated from below by the outer core and from within by radioactive decay. It warms, expands slightly, and becomes just a little less dense than the surrounding rock. Buoyancy pushes it upward — slowly, perhaps a few centimetres per year on average. As it rises, pressure decreases and it continues to expand. Eventually it approaches the base of the lithosphere, where it spreads outward horizontally, transferring heat to the surface above. Having lost much of its heat, the rock contracts, becomes denser, and begins to sink back down. As it descends, it compresses and warms again from the surrounding rock, eventually returning to the deep mantle to be reheated. The loop is complete: this is a **convection cell**.

These cells are not neat, small circles. They are broad, irregular structures thousands of kilometres across. Multiple cells exist at once throughout the mantle, interacting in complex ways. The overall pattern is less like a simple row of conveyor belts and more like the turbulent interior of a slowly simmering pot — but the underlying physics is the same.

**What convection does at Earth's surface.** This is where the payoff arrives. Mantle convection does not stay hidden in the deep interior — its effects are written all over the surface of the planet.

Where hot mantle rises toward the surface, it pushes up on the lithosphere from below. The plates above are pulled apart by the upwelling flow. As they separate, the pressure on the rising mantle drops, and a small fraction of it partially melts to form magma. That magma rises into the gap and solidifies as new **oceanic crust** — basalt, the same rock that makes up the ocean floor. This is why mid-ocean ridges exist: they are the surface expression of rising mantle convection, and they are the sites where new ocean floor is continuously manufactured.

Where cold, dense mantle sinks, it drags the overlying plate downward with it. Dense oceanic crust follows the sinking mantle back into the interior — a process called **subduction**. This is the mechanism that destroys old oceanic crust. It explains directly why no ocean floor is older than about 200 million years: the oldest oceanic crust has already been pulled back into the mantle and recycled. Continental crust, being far less dense, resists sinking and accumulates at the surface, which is why continental rocks can be billions of years old.

The full story of divergent boundaries, convergent boundaries, and transform faults belongs to Module 1.4. For now, the key point is this: **mantle convection is the engine; plate motion is the output**.

**How we know — two lines of evidence.** Because the mantle is inaccessible to direct observation, the evidence for convection is indirect. Two methods are particularly convincing.

**Heat-flow measurements** use sensitive instruments on the seafloor and in continental drill holes to measure how much heat is leaking out per unit area. The pattern matches convection exactly: mid-ocean ridges — where hot mantle is actively rising — have heat-flow values several times higher than old, cold ocean floor or stable continental cratons. The spatial map of heat flow across the globe is essentially a map of where the mantle is rising and where it is sinking.

**Seismic tomography** is perhaps the most dramatic. By collecting data from thousands of earthquakes and hundreds of seismic stations worldwide, geophysicists can measure how fast seismic waves travel through every part of the mantle — and then use those speed variations to construct three-dimensional images of the mantle's interior, much as a medical CT scanner constructs images of the human body from X-ray measurements. Hot rock transmits seismic waves more slowly; cold rock transmits them faster. Tomographic images clearly show large blobs of slow (hot) material rising beneath mid-ocean ridges and fast (cold) slabs of material plunging downward at subduction zones — exactly what convection predicts.

In the next lesson, we turn to the innermost part of Earth: the core. The core is not only the ultimate heat source for mantle convection — it is also the source of something entirely different and extraordinarily important: Earth's magnetic field.`,
      interaction: {
        type: 'annotated-image' as const,
        src: '/visuals/geo-interior.svg',
        alt: 'Cross-section of Earth\'s interior showing the crust, mantle, outer core, and inner core with depth labels',
        aspectRatio: '16/9',
        credit: 'Facet Earth Sciences',
        annotations: [
          {
            id: 'crust',
            x: 73,
            y: 33,
            label: 'Crust',
            description: 'The outermost solid shell of Earth, ranging from ~5 km (3.1 mi) thick beneath oceans (oceanic crust, basaltic, ~3.0 g/cm³) to ~70 km (43 mi) beneath mountain ranges (continental crust, granitic, ~2.7 g/cm³). All known life and human civilisation exists within or on this thin outer layer. The crust is separated from the mantle by the Mohorovičić discontinuity (Moho), where seismic wave speeds jump abruptly.',
          },
          {
            id: 'mantle',
            x: 17,
            y: 44,
            label: 'Mantle',
            description: 'Earth\'s largest layer by volume (84%), extending from the base of the crust to 2,900 km (1802 mi) depth. The mantle is solid rock but flows plastically over geological timescales, driving tectonic plate movement via convection currents. Temperature ranges from ~600°C (1112°F) at the top to ~4,000°C (7232°F) at the base, and composition transitions from peridotite in the upper mantle to denser mineral phases in the lower mantle.',
          },
          {
            id: 'lower-mantle',
            x: 50,
            y: 56,
            label: 'Lower Mantle',
            description: 'The deeper portion of the mantle (660–2,900 km (410–1802 mi)), where extreme pressure converts rock into high-density mineral phases — chiefly bridgmanite (the most abundant mineral in Earth\'s interior, formed from olivine under extreme pressure) and ferropericlase (an iron-magnesium oxide making up ~20% of this layer). Seismic waves travel faster here, revealing increasing rock rigidity despite rising temperatures. The lower mantle is relatively stable and difficult for tectonic convection currents to penetrate.',
          },
          {
            id: 'outer-core',
            x: 50,
            y: 78,
            label: 'Outer Core',
            description: 'A layer of liquid iron-nickel alloy extending from 2,900 to 5,100 km (3169 mi) depth. Its liquid state is confirmed by the inability of S-waves (shear waves) to pass through it. Convective flow of the conducting liquid outer core generates Earth\'s magnetic field via the geodynamo — our planet\'s protective shield against harmful solar wind particles that would otherwise strip away the atmosphere.',
          },
          {
            id: 'inner-core',
            x: 50,
            y: 89,
            label: 'Inner Core',
            description: 'A solid sphere of iron-nickel alloy at Earth\'s centre, approximately 1,220 km (758 mi) in radius. Despite temperatures of ~5,000–6,000°C (9032–10832°F), extreme pressure (360 GPa) keeps it solid. The inner core rotates slightly faster than the rest of Earth and shows seismic anisotropy — its crystal structure is preferentially aligned along Earth\'s rotation axis, detectable by subtle differences in seismic wave travel times.',
          },
        ],
      },
      cards: [
        {
          name: 'Heat Sources',
          icon: Flame,
          color: BRAND.ruby,
          desc: "Two processes keep the mantle hot enough to convect. Residual heat from Earth's violent formation 4.54 billion years ago is still slowly escaping — the planet is so large and rock conducts heat so poorly that this original heat has not fully dissipated. Ongoing radioactive decay of uranium, thorium, and potassium-40 scattered through the mantle and crust continuously adds more heat, though at a gradually declining rate as those atoms are consumed. Together they maintain the temperature gradient from hot deep interior to cooler near-surface that drives the convection cycle.",
          examples: 'Residual formation heat · Radioactive decay (U, Th, K-40) · Core heat flux',
        },
        {
          name: 'Convection Cycle',
          icon: Thermometer,
          color: BRAND.gold,
          desc: "Hot rock deep in the mantle becomes slightly less dense than surrounding rock, rises buoyantly toward the surface, transfers heat to the lithosphere above, cools, contracts, becomes denser, and sinks back to the depths — where it is reheated and the cycle repeats. Individual convection cells span thousands of kilometres and complete one loop over tens to hundreds of millions of years. The rising limbs of these cells drive plates apart at the surface; the sinking limbs pull plates back into the mantle.",
          examples: 'Hot → rises → cools → sinks → reheats · Timescale: 10s–100s of Ma',
        },
        {
          name: 'Seismic Tomography',
          icon: Atom,
          color: BRAND.amethyst,
          desc: "By measuring how fast seismic waves from thousands of earthquakes travel through every part of the mantle, geophysicists can build three-dimensional images of the mantle's interior — similar to a medical CT scan. Hot rock slows seismic waves (it appears as a low-velocity zone); cold rock speeds them up (high-velocity zone). Tomographic images show large low-velocity plumes rising beneath mid-ocean ridges and high-velocity slabs plunging downward at subduction zones, providing direct visual evidence that mantle convection is actively occurring today.",
          examples: 'Hot mantle → slow waves · Cold slab → fast waves · Global coverage',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Which two processes supply the heat that drives mantle convection?",
          a: [
            'Solar radiation absorbed at Earth\'s surface, and heat released by volcanic eruptions',
            'Friction from tectonic-plate movement, and heat conducted down from the atmosphere',
            'Residual heat left over from Earth\'s formation, and ongoing radioactive decay within the mantle and crust',
            'Heat generated by the Moon\'s tidal pull on Earth\'s interior, and chemical reactions in the mantle',
          ],
          correct: 2,
          explain: "Solar radiation (A) warms the surface but penetrates only metres into the crust — it has no significant effect on the mantle thousands of kilometres below. Tectonic-plate friction (B) generates localised heat at fault zones but is a consequence of convection, not its cause; heat does not conduct downward from a cool atmosphere into a hot mantle. The correct answer is C: residual heat from the violent collisions that assembled Earth 4.54 billion years ago is still slowly escaping from the deep interior, and ongoing radioactive decay of uranium, thorium, and potassium-40 continuously adds heat to the mantle and crust. Tidal forces from the Moon (D) do generate a small amount of heat inside Earth but are far too weak to drive mantle-scale convection — they are not considered a primary heat source.",
        },
        {
          q: "The mantle is solid rock, yet it flows and circulates. What makes this possible?",
          a: [
            'The mantle is not actually solid — it is a liquid that seismic waves happen to pass through as if it were solid',
            'Small pockets of liquid magma are distributed throughout the mantle, and the rock flows between them',
            'Under the extreme heat and pressure of the deep mantle, solid rock slowly deforms over millions of years through a process called solid-state creep — without ever melting',
            'The mantle flows only near the surface in the asthenosphere; the rest of the mantle is completely rigid and does not move',
          ],
          correct: 2,
          explain: "The mantle is definitively solid — S-waves (shear waves, which cannot travel through liquid) pass through it freely, so it cannot be liquid (A is wrong). While small melt fractions can exist locally in the asthenosphere, the mantle does not flow because of distributed pockets of magma — the bulk of the mantle is melt-free solid rock that deforms without melting (B is wrong). The correct answer is C: at temperatures above roughly 1,000°C (1832°F) and under pressures millions of times greater than the atmosphere, crystal lattices in rock minerals deform atom by atom over millions of years, allowing solid rock to flow the way extremely viscous syrup flows — this is solid-state creep. While the asthenosphere does flow more easily than the deeper mantle (D is partly right), the deeper mantle also convects — it is not rigid and immobile; the entire mantle participates in the convection cycle, just at different rates.",
        },
        {
          q: "At a location where a hot mantle plume rises toward Earth's surface, what is the most likely surface result?",
          a: [
            'A deep ocean trench forms as the lithosphere is pulled downward by the rising material',
            'Continental crust thickens as the rising mantle pushes it together from both sides',
            'Plates are pulled apart and new oceanic crust forms from magma rising into the gap — a mid-ocean ridge',
            'The crust above the plume dissolves into the mantle as the heat melts it from below',
          ],
          correct: 2,
          explain: "Deep ocean trenches (A) form where cold, dense material sinks — at subduction zones — which is the opposite of a rising plume; trenches are associated with the downward limb of convection, not the upward limb. Continental crust thickening (B) occurs where two continental plates collide head-on, driven by convergence — not where hot mantle rises; rising mantle causes extension, not compression. The correct answer is C: where hot mantle rises, it pushes the overlying lithosphere upward and pulls plates apart; as the plates separate, pressure on the rising mantle drops, causing partial melting; the resulting magma fills the gap and solidifies as new oceanic crust, building a mid-ocean ridge. Crustal dissolution (D) does not occur — the crust above a rising plume is uplifted and stretched, and limited partial melting of the mantle rock itself provides the magma; the existing crust is not consumed by the heat.",
        },
      ],
    },
  ],
}

export default mantleConvection
