import { Zap, Globe, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const coreAndMagneticField: Lesson = {
  id: 'geol-101-1-4',
  title: "Earth's Core and Magnetic Field",
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Deep in Earth's liquid iron core, a self-sustaining dynamo generates the magnetic field that shields life from the Sun's relentless particle stream.",
  sources: [
    { org: 'USGS',     title: 'This Dynamic Earth (Kious & Tilling)',               url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'NASA',     title: "Earth's Magnetosphere",                              url: 'https://science.nasa.gov/earth/atmosphere/earths-magnetosphere/' },
    { org: 'NOAA',     title: 'NCEI Geomagnetism — World Magnetic Model',           url: 'https://www.ngdc.noaa.gov/geomag/' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',              url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Space weather and magnetosphere', url: 'https://scied.ucar.edu' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The invisible shield',
      body: `Right now, at this very moment, a stream of high-energy charged particles is hurtling toward Earth from the Sun at somewhere between 400 and 800 kilometres per second. This is the **solar wind** — a continuous outflow of protons, electrons, and other particles blasted off the Sun's surface. It never stops. Day and night, every day of the year, for billions of years, it has been washing over our planet.

We are alive, in large part, because we have a shield. Not a physical wall — something far more elegant: a **magnetic field** that deflects most of those particles before they ever reach the upper atmosphere. The particles are flung around Earth and continue on into space, never touching the surface. This shield is what makes Earth fundamentally different from a cold, barren rock.

What generates this magnetic field? The answer lies thousands of kilometres underground — in the liquid iron of Earth's outer core, churning in slow but powerful convection currents, organised by the spin of the planet into a pattern that sustains a self-reinforcing electromagnetic loop. This is the **geodynamo**.

In Lesson 1.1.1, we established that the outer core is liquid iron-nickel — proved by the S-wave shadow zone. In Lesson 1.1.3, we saw that the core provides heat that drives mantle convection. Now we look at what the core does for the planet's surface: it generates the field that keeps Earth habitable. This lesson covers the geodynamo, the magnetosphere, and one of the most remarkable pieces of geological evidence ever discovered — the record of Earth's magnetic history written in the rocks of the ocean floor.`,
      keyTerms: [
        {
          term: 'Geodynamo',
          def: "The self-sustaining process by which convection of electrically conducting liquid iron in Earth's outer core, organised by Earth's rotation, generates and maintains the global magnetic field. It is powered by the same heat budget that drives mantle convection.",
        },
        {
          term: 'Magnetosphere',
          def: "The region of space around Earth dominated by Earth's magnetic field. On the sunward side it extends roughly 10 Earth radii into space; on the night side it stretches into a long tail. It deflects the solar wind and protects Earth's atmosphere from erosion.",
        },
        {
          term: 'Solar wind',
          def: "A continuous stream of charged particles — mainly protons and electrons — emitted by the Sun at hundreds of kilometres per second. Without a planetary magnetic field, the solar wind erodes planetary atmospheres over geological time, as it has done to Mars.",
        },
        {
          term: 'Magnetic reversal',
          def: "An event in which Earth's north and south magnetic poles switch positions. Reversals have occurred hundreds of times over geologic history, at irregular intervals, and are permanently recorded in the magnetic properties of rocks that solidified at the time of each reversal.",
        },
      ],
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
            description: 'Earth\'s largest layer by volume (84%), extending from the base of the crust to 2,900 km (1802 mi) depth. The mantle is solid rock but flows plastically over geological timescales, driving tectonic plate movement via convection currents. Temperature ranges from ~600°C (1112°F) at the top to ~4,000°C (7232°F) at the base, and composition transitions from peridotite (upper mantle) to bridgmanite-dominated rock (lower mantle).',
          },
          {
            id: 'lower-mantle',
            x: 50,
            y: 56,
            label: 'Lower Mantle',
            description: 'The deeper portion of the mantle (660–2,900 km (410–1802 mi)), where extreme pressure compresses rock into high-density mineral phases such as bridgmanite and ferropericlase. Seismic waves travel faster here, revealing increasing rock rigidity under confining pressure despite rising temperatures. The lower mantle is relatively stable and difficult for tectonic convection currents to penetrate.',
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
    },
    {
      type: 'callout' as const,
      variant: 'data',
      headline: "Earth's magnetic field has reversed over 180 times in the past 83 million years — at completely unpredictable intervals",
      body: "The most recent reversal — the Brunhes-Matuyama boundary — occurred about 780,000 years ago. Before that, reversals have ranged from as little as 40,000 years apart to a 40-million-year stretch during the Cretaceous with no reversal at all (the 'Cretaceous Normal Superchron'). During a transition, the field weakens to perhaps 10–20% of its normal strength and becomes disorganised — but it has never completely disappeared. The field is currently weakening at roughly 5% per century, though this is well within normal variation.",
    },
    {
      type: 'concept',
      title: 'The dynamo, the shield, and the record in rock',
      body: `**A brief return to the core.** Lesson 1.1.1 established that Earth's core has two parts: the **inner core**, a solid iron-nickel sphere roughly 1,200 km (746 mi) in radius, and the **outer core**, a ~2,200-km-thick shell of liquid iron-nickel alloy surrounding it. Both are searingly hot — temperatures in the outer core reach roughly 4,000–5,000°C (7232–9032°F). The outer core is liquid because the temperature there is above iron's melting point at those pressures; the inner core is solid because the pressure is even higher and forces the iron to remain solid despite comparable temperatures. The liquid state of the outer core is precisely what enables the geodynamo.

**The three ingredients of the geodynamo.** Generating a planetary magnetic field from a liquid metal core requires three things working together.

The first ingredient is **an electrically conducting fluid**. Liquid iron is an excellent conductor of electricity — far better than solid rock. This means it can carry large electric currents, and moving electric currents generate magnetic fields. The raw material is there.

The second ingredient is **convection**. The outer core convects by the same principle as the mantle: it is hotter at its base (heated by the solid inner core and by radioactive decay) than at its top. Hot liquid iron is slightly less dense, so it rises. As it rises toward the cooler base of the mantle, it loses heat, becomes denser, and sinks. This circulation is much faster than mantle convection — the outer core is a liquid, not a solid, and its convection operates on timescales of years to centuries rather than millions of years.

The third ingredient is **Earth's rotation**. Moving fluids on a rotating planet are deflected by the **Coriolis effect** — the same force that makes hurricanes spin counterclockwise in the Northern Hemisphere. In the outer core, the Coriolis effect organises the convecting columns of liquid iron into large helical spirals aligned with Earth's rotation axis. This organised helical flow is what transforms a simple convecting liquid into a self-sustaining generator.

**The feedback loop.** Here is where it becomes remarkable. The organised flow of electrically conducting iron generates electric currents; those currents generate a magnetic field; that magnetic field exerts a force on the moving conducting fluid, reinforcing the organised flow pattern; which sustains the currents; which sustains the field. This is a self-reinforcing loop — a dynamo that powers itself as long as the convection continues. The outer core has been running this loop for at least 3.5 billion years, possibly longer.

The result, as felt at Earth's surface, is a global magnetic field that resembles the field of a bar magnet oriented roughly along Earth's rotation axis — with a magnetic north pole near the geographic north pole and a magnetic south pole near the geographic south pole. The magnetic poles are not exactly at the geographic poles (currently about 11° offset), and they wander slowly over decades and centuries as the outer-core convection pattern shifts.

**The magnetosphere — Earth's planetary shield.** Earth's magnetic field does not stop at the surface. It extends far into space, forming a protective bubble called the **magnetosphere**. When the solar wind hits the magnetosphere, the charged particles are deflected — they cannot easily cross magnetic field lines, so most stream around Earth and continue into deeper space. On the sunward side, the solar wind's pressure compresses the magnetosphere to about 10 Earth radii (~64,000 km (39770 mi)). On the night side, the wind stretches it into a long magnetotail extending hundreds of Earth radii behind the planet.

This deflection has kept Earth's atmosphere intact for billions of years. The solar wind is not a gentle breeze — at full intensity during a solar storm, it can carry enough energy to strip gases from an unprotected planetary atmosphere over geological time. Earth's magnetosphere has been catching these blows for at least 3.5 billion years.

The contrast with Mars makes this concrete. Mars is a similar rocky planet, but smaller. Its iron core cooled and largely solidified about 4 billion years ago, shutting down its dynamo. Without a global magnetic field, the solar wind slowly eroded Mars's once-thicker atmosphere. Today Mars has an atmosphere less than 1% as dense as Earth's — a thin veil of carbon dioxide — and liquid water cannot exist on its surface. The presence of a geodynamo is one of the reasons Earth has oceans and Mars does not.

Where the magnetosphere does admit solar particles — near the magnetic poles, where field lines funnel down into the atmosphere — the result is spectacular rather than dangerous: those particles collide with atmospheric molecules and produce the shimmering curtains of light known as the **aurora** (Northern and Southern Lights). The aurora is, in a sense, the visible proof that the magnetosphere is doing its job.

**Magnetic reversals — the field flips.** Earth's magnetic field is not fixed. Over geologic history, the north and south magnetic poles have swapped positions hundreds of times, in events called **magnetic reversals**. The reversals are not regular or predictable — their timing is entirely irregular. Some periods have seen a reversal every few hundred thousand years; one stretch during the Cretaceous Period (the "Cretaceous Normal Superchron") went about 40 million years without a single reversal. The most recent reversal — the Brunhes-Matuyama boundary — occurred approximately 780,000 years ago. We are currently in a period of "normal" polarity, meaning that compasses point toward geographic north.

During a reversal, the field does not flip instantly. Evidence from sedimentary and volcanic rock records suggests that transitions take thousands to tens of thousands of years, during which the field is weaker and less organised — but it does not disappear entirely.

**Magnetic striping — where it all comes together.** The evidence for reversals is preserved in a remarkable way. As molten basalt erupts at mid-ocean ridges and solidifies into new oceanic crust (introduced in Lessons 1.1.2 and 1.1.3), tiny iron-bearing minerals in the cooling rock align themselves with Earth's magnetic field at that moment — like compass needles that get frozen in place as the rock hardens. When Earth's field later reverses, the next strip of new basalt records the new polarity direction. The strip after that records the next reversal, and so on.

The result is a pattern of parallel bands of rock with alternating magnetic polarity — bands of "normal" polarity interleaved with bands of "reversed" polarity — radiating symmetrically outward on both sides of every mid-ocean ridge in the world. The pattern is symmetric because both sides move away from the ridge at the same rate. Geologists discovered this **magnetic striping** on the ocean floor in the 1950s and 1960s, and it played a central role in convincing the scientific community that seafloor spreading was real. By matching the stripe widths to the known timescale of magnetic reversals, researchers could even calculate how fast the seafloor was spreading at each ridge.

Magnetic striping is one of the most elegant examples in science of how a single observable pattern simultaneously proves two different things — magnetic reversals happening deep in the core, and new oceanic crust being continuously created at mid-ocean ridges. It ties the core, the mantle, and the crust into one coherent story.

**Chapter 1 — complete.** This lesson closes the first chapter of Earth Foundations. We have moved systematically from the outermost layer to the innermost: the crust (Lessons 1 and 2), the mantle and its convection engine (Lesson 3), and now the core and its magnetic dynamo (Lesson 4). Every major layer has been introduced with its composition, physical state, and the evidence that reveals it — and each lesson has resolved the open questions left by the one before it. Chapter 2 zooms back to the surface to ask a different kind of question: what are Earth's rocks actually built from at the scale of individual minerals?`,
      cards: [
        {
          name: 'The Geodynamo',
          icon: Zap,
          color: BRAND.gold,
          desc: "Three ingredients combine to generate Earth's magnetic field: (1) liquid iron in the outer core — an excellent electrical conductor; (2) convection of that liquid, driven by heat from the inner core and radioactive decay; (3) the Coriolis effect of Earth's rotation, which organises the convecting columns into helical spirals. Moving conducting fluid generates electric currents; those currents generate a magnetic field that reinforces the organised flow — a self-sustaining loop that has been running for at least 3.5 billion years.",
          examples: 'Liquid iron · Convection · Coriolis · Self-sustaining loop · 3.5 Ga old',
        },
        {
          name: 'Magnetosphere',
          icon: Globe,
          color: BRAND.accent,
          desc: "Earth's magnetic field extends far into space, forming a protective bubble that deflects the solar wind. On the sunward side the wind compresses it to about 10 Earth radii; on the night side it stretches into a long magnetotail. Without this shield, the solar wind would erode Earth's atmosphere over geological time — exactly what happened to Mars after its dynamo failed ~4 billion years ago. Where field lines funnel particles into the polar atmosphere, aurora form: the visible signature of the magnetosphere at work.",
          examples: '~10 Earth radii sunward · Long magnetotail · Mars contrast · Aurora',
        },
        {
          name: 'Magnetic Reversals',
          icon: Layers,
          color: BRAND.amethyst,
          desc: "Earth's magnetic poles have swapped hundreds of times in geologic history, at irregular intervals — the last reversal was ~780,000 years ago. As new oceanic basalt solidifies at mid-ocean ridges, iron minerals freeze in the orientation of the field at that moment. When the field reverses, the next strip of rock records the new polarity. The result is symmetric bands of alternating polarity on both sides of every ridge — magnetic striping — which proved both that reversals occur and that seafloor spreading is real.",
          examples: 'Last reversal ~780 ka · Hundreds total · Magnetic striping · Seafloor spreading proof',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Which combination of factors generates Earth's magnetic field through the geodynamo?",
          a: [
            "Solid iron in the inner core vibrating at high frequency and emitting electromagnetic waves",
            "The Sun's own magnetic field penetrating Earth's crust and inducing a mirror field in the iron core",
            "Convection of liquid iron in the outer core, the electrical conductivity of that liquid iron, and the organising effect of Earth's rotation",
            "Volcanic eruptions releasing magnetised minerals at the surface, which collectively create a weak planetary field",
          ],
          correct: 2,
          explain: "The inner core is solid and does not vibrate to produce electromagnetic waves — and even if it did, mechanical vibration is not how planetary magnetic fields are generated (A is wrong). The Sun's magnetic field does interact with Earth's magnetosphere, but it does not create Earth's field — Earth had a magnetic field long before the Sun's field ever reached it, and the geodynamo is self-sustaining without any external input (B is wrong). The correct answer is C: three ingredients are needed — liquid iron provides the conducting fluid; convection of that fluid drives the circulation; and Earth's rotation, acting through the Coriolis effect, organises the flow into helical columns that generate and sustain electric currents and thereby the field. Surface volcanic minerals (D) are far too thinly distributed and too close to the surface to generate a global planetary field — they record the existing field but do not create it.",
        },
        {
          q: "If Earth's geodynamo were to shut down permanently and the magnetic field collapsed, what would most likely happen to Earth's atmosphere over the following billions of years?",
          a: [
            "Earth's atmosphere would freeze and precipitate to the surface because the magnetosphere reflects solar heat",
            "The ozone layer would provide full atmospheric protection, so surface conditions would remain essentially unchanged",
            "The solar wind would gradually erode the atmosphere, as it has done to Mars since that planet lost its global magnetic field",
            "Increased cosmic radiation would heat the atmosphere, causing it to expand and escape into space rapidly",
          ],
          correct: 2,
          explain: "The magnetosphere does not reflect solar heat — it deflects charged particles, which are a different thing from sunlight; Earth's temperature is set by the greenhouse effect and solar radiation, not the magnetosphere (A is wrong). The ozone layer protects against ultraviolet radiation but does nothing to stop the solar wind, which is composed of charged particles, not photons — without the magnetosphere, the solar wind would reach the upper atmosphere regardless of ozone (B is wrong). The correct answer is C: the solar wind is a continuous stream of charged particles that, unchecked by a magnetic field, gradually strips light gases from a planetary atmosphere over geological timescales — this is precisely what happened to Mars after its dynamo failed roughly 4 billion years ago, leaving it with less than 1% of Earth's atmospheric pressure today. Cosmic radiation does increase when the field weakens (D has a kernel of truth) but the primary long-term threat is atmospheric erosion by the solar wind, not rapid thermal escape driven by cosmic rays.",
        },
        {
          q: "Ocean-floor basalt shows a symmetric pattern of alternating normally and reversely magnetised rock bands on either side of mid-ocean ridges — magnetic striping. What does this pattern simultaneously demonstrate?",
          a: [
            "That the oceanic crust is made of two chemically different rock types that alternate in bands across the ocean floor",
            "That differential erosion by deep-ocean currents has carved the seafloor into symmetric ridges and troughs over time",
            "Both that Earth's magnetic field has reversed many times in the past, and that new oceanic crust is continuously created by seafloor spreading at mid-ocean ridges",
            "That the ocean floor was deposited in sedimentary layers during alternating periods of high and low sea level throughout geologic history",
          ],
          correct: 2,
          explain: "Ocean-floor basalt is chemically uniform — it is all mafic volcanic rock; the alternating magnetic polarity does not reflect two different rock compositions (A is wrong). Deep-ocean currents erode sediment but do not carve symmetric magnetic-polarity stripes into the solid basaltic crust — erosion and chemical composition are unrelated to magnetic orientation (B is wrong). The correct answer is C: as new basalt solidifies at a mid-ocean ridge, its iron minerals freeze in the direction of Earth's magnetic field at that moment; when the field reverses, the next strip of new basalt records the reversed polarity; because new crust is added symmetrically on both sides of the ridge, the result is mirror-image polarity bands that simultaneously prove magnetic reversals occur in the core and that the seafloor is spreading away from the ridge. The ocean floor is volcanic basalt, not sedimentary layers, and sea-level changes have nothing to do with magnetic polarity orientation in igneous rock (D is wrong).",
        },
      ],
    },
  ],
}

export default coreAndMagneticField
