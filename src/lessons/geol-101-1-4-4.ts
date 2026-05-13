import { Flame, Waves, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const hotspotsAndPlumes: Lesson = {
  id: 'geol-101-1-4-4',
  title: 'Hotspots and Mantle Plumes',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Kīlauea sits 3,200 km from the nearest plate boundary. The Hawaiian Islands grow older to the northwest like a timestamp trail — each island the frozen record of a plate moving over a fixed heat source in the mantle.",
  sources: [
    { org: 'USGS',        title: 'Hawaiian Volcano Observatory (Public Domain)',  url: 'https://www.usgs.gov/observatories/hvo' },
    { org: 'USGS',        title: 'Volcano Hazards Program',                       url: 'https://www.usgs.gov/programs/VHP' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Plate Tectonics',          url: 'https://www.nps.gov/subjects/geology/plate-tectonics.htm' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',         url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Plate tectonics',         url: 'https://scied.ucar.edu/learning-zone/earth/plate-tectonics' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Volcanoes in the middle of nowhere',
      body: `The Big Island of Hawaiʻi sits 3,200 kilometres from the nearest plate boundary — squarely in the interior of the Pacific Plate, nowhere near a trench, ridge, or transform fault. Yet Kīlauea is one of the most persistently active volcanoes on Earth, erupting lava almost continuously for decades. Standard plate tectonic theory, as developed in Lessons 1.4.1 through 1.4.3, predicts volcanism at spreading centres and at subduction zones. It says nothing, at first glance, about why a volcano should exist in the middle of a plate.

Look northwest along the Hawaiian chain and the explanation begins to emerge. Maui, to the northwest of the Big Island, last erupted roughly 500 years ago and is geologically much older. Oʻahu — home to Honolulu — is about 3 million years old and volcanically extinct. Kauaʻi, the oldest of the main islands, is about 5 million years old. Beyond Kauaʻi, the chain continues as a line of submerged seamounts stretching thousands of kilometres to the northwest, with seamounts dated progressively older — all the way to the Emperor Seamount Chain near the Aleutian Trench, where the oldest seamounts are about 80 million years old. The age progression is not coincidental. It is a record, written in volcanic rock, of a tectonic plate moving steadily over a fixed heat source.

That heat source is a **mantle plume** — a narrow column of anomalously hot rock rising from deep in the mantle, generating magma through decompression melting as it ascends. The plume is approximately stationary; the Pacific Plate moves over it. Each time the plate carries an active volcanic edifice away from the plume, a new volcano begins to form above the fixed heat source. The old volcano is cut off from its magma supply, becomes dormant, is eroded by waves, and eventually subsides below sea level as the ocean floor cools and contracts — becoming a seamount. The Hawaiian-Emperor seamount chain is simultaneously a trail of the Pacific Plate's history and a clock recording the age of every piece of ocean floor that passed over the plume.`,
      keyTerms: [
        {
          term: 'Hotspot',
          def: "A long-lived zone of anomalously high intraplate volcanic activity, attributed to a mantle plume rising from deep in the mantle. Hotspots are approximately fixed relative to the moving plates above them, producing age-progressive chains of volcanic islands and seamounts that record plate motion direction and speed.",
        },
        {
          term: 'Mantle plume',
          def: "A narrow, buoyant upwelling of anomalously hot mantle rock, possibly originating at the core-mantle boundary (~2,900 km depth). As the plume rises and pressure decreases, the rock undergoes decompression melting, generating basaltic magma that erupts through the overlying lithospheric plate.",
        },
        {
          term: 'Seamount chain',
          def: "A linear series of submarine volcanoes (seamounts) and volcanic islands produced as a tectonic plate moves over a fixed hotspot. Age increases systematically with distance from the currently active volcano above the plume.",
        },
        {
          term: 'Flood basalt',
          def: "An exceptionally large outpouring of basaltic lava, produced when the head of a newly arriving mantle plume melts voluminously on contact with the base of the lithosphere. Covers areas of hundreds of thousands to millions of square kilometres in geologically short time. Also called a Large Igneous Province (LIP). Examples: Deccan Traps (~66 Ma), Columbia River Basalt (~17 Ma).",
        },
        {
          term: 'Intraplate volcanism',
          def: "Volcanic activity occurring within the interior of a tectonic plate, far from any plate boundary. Hotspots and mantle plumes are the primary cause. Distinguished from boundary volcanism (spreading centres and subduction arcs) by its intraplate location and typically basaltic, non-explosive character.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Fixed heat, moving plate',
      body: `**How a mantle plume works.** Deep in the mantle — possibly at the boundary between the mantle and the iron core at ~2,900 km depth — anomalously hot rock becomes buoyant and begins to rise. This rising column, the mantle plume, is narrow (perhaps 100–300 km in diameter) and moves slowly upward through the surrounding mantle over tens of millions of years. As the plume head approaches the base of the lithosphere and pressure decreases, the rock partially melts through **decompression melting** — the same process that generates basalt at mid-ocean ridges, but here occurring in the middle of a plate rather than at a spreading centre. The magma produced is primarily **basaltic** — mafic and relatively fluid — because there is no subducting slab releasing water to alter the melt composition (as there is at subduction zones), and no mixing with felsic continental crust (at oceanic hotspots). The basalt erupts at the surface and builds broad, gently sloping **shield volcanoes** — the characteristic form of Hawaiian-type volcanism, where lava flows freely rather than exploding.

**The age-progressive chain — a plate speedometer.** The key insight is that the mantle plume is approximately stationary while the tectonic plate moves over it. The currently active volcano sits directly above the plume. As the plate carries this volcano away from the heat source, its magma supply is cut off, eruptions cease, and the volcano becomes a dormant island. Erosion attacks the flanks; the cooling ocean floor contracts and subsides; within a few million years the extinct island has been eroded down to sea level and then below, becoming a **seamount**. Meanwhile, a new volcano has begun growing directly over the plume — the next link in the chain. The result is a trail of volcanic edifices that grows systematically older with distance from the active plume. By measuring the ages of the seamounts and islands and the distances between them, geologists can calculate the speed of the plate: distance divided by age equals velocity. For the Pacific Plate, this calculation yields approximately **9 cm per year** — consistent with GPS measurements of the plate's current motion. The Hawaiian-Emperor chain is one of the most precise natural odometers in geology.

**The Emperor Seamount Chain bend.** Northwest of Kauaʻi, the Hawaiian chain extends as a line of seamounts trending northwest — the direction the Pacific Plate is currently moving. But approximately 2,800 km northwest of Kauaʻi, the chain makes a sharp ~60° bend and the older Emperor Seamount Chain trends nearly due north. The seamounts at the bend are dated to approximately 50 million years ago. This bend is not caused by the plume moving — it records a change in the direction of Pacific Plate motion at ~50 Ma, when the plate's trajectory abruptly shifted from northward to its current northwestward direction. The cause of this directional change is debated — it may be related to the collision of India with Asia beginning at roughly the same time, which reorganised stresses throughout the Indo-Pacific plate system. Whatever the cause, the chain's geometry is an unambiguous record of the plate's motion history, preserving a directional change that happened 50 million years ago as clearly as a bend in a road on a map.

**Iceland — hotspot on a ridge.** Iceland is anomalous among ocean islands: it is the only place where a mid-ocean ridge rises above sea level. The reason is that the Mid-Atlantic Ridge happens to pass directly over a mantle plume — the Iceland hotspot. The result is a double heat source: the ridge generates basalt through normal decompression melting at the spreading centre, and the hotspot simultaneously generates an additional pulse of magma from below. This combined heat melts more mantle rock than either source alone, producing an unusually thick section of oceanic crust (~30 km, versus the normal ~7 km) that stands high enough above the ocean floor to form an island. Iceland is being torn apart by the spreading centre and is simultaneously volcanically active from both processes — it erupts basalt so frequently that it has produced an estimated one-third of all lava erupted on Earth's surface in the past 500 years.

**Yellowstone — a continental hotspot.** Not all hotspots lie under oceanic plates. The Yellowstone hotspot is situated beneath the thick felsic crust of the North American continent, producing dramatically different results from its Hawaiian counterpart. When the basaltic magma generated by the plume encounters the 35–40 km of granitic continental crust above it, the basalt heats and partially melts the surrounding felsic rock. The resulting magma is **rhyolitic** — silica-rich, gas-rich, and extremely viscous — the opposite of the fluid basalts of Hawaii. Rhyolitic magma cannot flow freely; pressure builds until it erupts catastrophically, producing the largest volcanic explosions on Earth. Yellowstone has produced three supereruptions in the past 2 million years, each creating a massive caldera (the Yellowstone caldera is 72 × 55 km across). The trail of ancient calderas — the **Snake River Plain** — stretches southwest across Idaho, recording the path of the North American Plate as it moved southwest over the fixed Yellowstone hotspot. The oldest caldera in the chain is in northern Nevada, ~17 million years old.

**Flood basalts — plume heads arriving.** When a mantle plume first arrives at the base of the lithosphere, its head is enormous — potentially 1,000 km across — and has been heating and expanding for millions of years during its ascent. The initial eruption of this plume head produces a **flood basalt** or **Large Igneous Province (LIP)**: a catastrophic outpouring of basaltic lava that covers hundreds of thousands to millions of square kilometres in geologically brief time (1–3 million years). The **Deccan Traps** of India — 2 million km² of basalt, erupted around 66 million years ago — coincide with the arrival of the plume that now underlies Réunion Island in the Indian Ocean. The **Columbia River Basalt** of the Pacific Northwest — erupted 17–6 million years ago — marks the arrival of the Yellowstone plume head, before the North American Plate's westward motion carried the continent over the narrowing plume tail that now feeds Yellowstone. After the catastrophic plume-head eruption, the magma supply settles into the more modest, sustained output of the plume tail — the source of the ongoing hotspot chain.

**Chapter 4 — complete.** This lesson closes Chapter 4. You now have a complete framework for plate tectonics: the theory and its evidence (Lesson 1), the three boundary types (Lesson 2), the mechanics of subduction and mountain building (Lesson 3), and intraplate volcanism from mantle plumes (Lesson 4). Chapter 5 will apply this framework at the landscape scale — reading the surface features of Earth as products of the tectonic, volcanic, and erosional processes you now understand.`,
      cards: [
        {
          name: 'Mantle Plumes',
          icon: Flame,
          color: BRAND.ruby,
          desc: "Narrow buoyant column of anomalously hot mantle rises from depth (possibly core-mantle boundary at 2,900 km). Decompression melting as it ascends → basaltic magma. No subducting slab → no water input → mafic, fluid eruptions (not explosive andesitic arc volcanism). Builds broad shield volcanoes with gentle slopes (Mauna Loa, Mauna Kea — measured from ocean floor, the tallest mountains on Earth). ~50 recognised hotspots worldwide: Hawaii, Iceland, Yellowstone, Galápagos, Réunion.",
          examples: 'Kīlauea: near-continuous eruption · Mauna Loa: largest shield volcano · Réunion: Indian Ocean hotspot · Galápagos: Pacific hotspot',
        },
        {
          name: 'Island Chains as Plate Speedometers',
          icon: Waves,
          color: BRAND.accent,
          desc: "Fixed plume + moving plate = age-progressive trail. Hawaiian chain: Big Island active now → Maui ~1 Ma → Oʻahu ~3 Ma → Kauaʻi ~5 Ma → seamounts to ~80 Ma. Distance ÷ age = plate speed (~9 cm/yr for Pacific Plate). Emperor Seamount Chain bends 60° at ~50 Ma: records abrupt shift in Pacific Plate motion direction. Iceland sits on Mid-Atlantic Ridge + hotspot → double heat source → 30 km thick crust → island above sea level on otherwise submerged ridge.",
          examples: 'Hawaiian chain: 9 cm/yr NW · Emperor bend: 50 Ma motion change · Iceland: ridge + hotspot · Galápagos: active spreading centre nearby',
        },
        {
          name: 'Continental Hotspots & Flood Basalts',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Yellowstone: hotspot under thick felsic continental crust. Basaltic plume magma partially melts crust → silica-rich rhyolite → explosive caldera eruptions. Three supereruptions in 2 Ma. Snake River Plain = trail of ancient calderas as N. America moved SW (~9 cm/yr). Flood basalts (Large Igneous Provinces): plume head arrival → catastrophic outpouring. Columbia River Basalt: 17 Ma, Pacific NW, Yellowstone plume head. Deccan Traps: 66 Ma, India, 2 million km², Réunion plume head.",
          examples: 'Yellowstone caldera: 72×55 km · Snake River Plain: hotspot trail · Deccan Traps: 2M km² · Columbia River Basalt: 17 Ma LIP',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "The Hawaiian Islands form a chain in which the Big Island is volcanically active today while Kauaʻi, 550 km to the northwest, is geologically extinct and ~5 million years old. Beyond Kauaʻi, a chain of seamounts extends thousands of kilometres further northwest with ages up to ~80 million years. What process produces this age-progressive pattern?",
          a: [
            "The Hawaiian hotspot migrates slowly to the southeast over time, abandoning older volcanic centres and building new ones; Kauaʻi was active when the hotspot sat beneath it and the Big Island will be abandoned as the hotspot moves further southeast",
            "A fixed mantle plume supplies magma to the base of the Pacific Plate; as the plate moves northwest over the stationary plume, each successive volcano becomes active directly above the heat source and then goes extinct as the plate carries it away — producing a chain that grows older with distance from the active plume",
            "The Hawaiian Islands formed simultaneously at a mid-ocean spreading centre and then drifted apart as the Pacific Plate spread in both directions; the age difference reflects the time elapsed since each island separated from the ridge axis",
            "Periodic pulses of intraplate volcanic activity, triggered by changes in Pacific Plate subduction rate, created each island in a separate episode; the northwest-to-southeast age gradient reflects the migration of the subduction zone that controls the pulse timing",
          ],
          correct: 1,
          explain: "The hotspot does not migrate to the southeast (A) — paleomagnetic and geological evidence indicates that the Hawaiian plume has been approximately stationary relative to the deep mantle for tens of millions of years; it is the Pacific Plate that moves, not the plume. The correct answer is B: the Hawaiian mantle plume is a fixed heat source in the deep mantle; the Pacific Plate moves northwest over it at ~9 cm per year; the volcano directly above the plume receives magma and is active; as the plate carries that volcano away from the plume, its magma supply is cut off and it becomes extinct; a new volcano begins forming above the plume; over millions of years, this produces a chain in which age increases systematically with distance from the currently active edifice — exactly the pattern observed from the Big Island to the 80-million-year-old Emperor seamounts. The simultaneous formation at a spreading centre (C) would produce symmetric age patterns on both sides of a ridge axis, not a one-directional chain; the Hawaiian Islands are entirely on one side of the East Pacific Rise. Subduction-controlled pulses (D) do not produce the precise age-progressive geometry observed — each island would require an independent magma source, which is inconsistent with the continuous, smooth age gradient from the Big Island to the oldest Emperor seamounts.",
        },
        {
          q: "Hawaiian volcanoes erupt fluid basaltic lava in relatively gentle, effusive eruptions. Yellowstone produces explosive rhyolitic eruptions that have created calderas 72 km across. Both are produced by mantle plumes. What accounts for this dramatic difference?",
          a: [
            "The Hawaiian plume is more powerful than the Yellowstone plume; stronger plumes generate higher temperatures that produce less viscous basaltic magma, while weaker plumes produce cooler, more viscous rhyolite",
            "Hawaii is at an earlier evolutionary stage of hotspot development — all hotspots begin with basaltic eruptions and transition to increasingly explosive rhyolitic activity as the magma chamber matures and the crust thickens above it over millions of years",
            "The Hawaiian plume rises beneath thin oceanic crust (~7 km) and erupts basaltic magma directly with little crustal interaction; the Yellowstone plume rises beneath thick continental crust (~40 km) and its basaltic magma heats and partially melts the surrounding silica-rich continental rock, producing rhyolitic magma that is far more viscous and erupts explosively",
            "The difference is water content: Hawaiian basalt is dry because it ascends through dry oceanic crust; Yellowstone magma absorbs water from water-saturated continental rocks, dramatically increasing its viscosity and explosive potential",
          ],
          correct: 2,
          explain: "Plume power (A) does not systematically determine magma composition — the composition of hotspot magma is primarily controlled by what it interacts with on its way to the surface, not by the plume's absolute temperature; both Hawaii and Yellowstone produce basaltic primary magma from the plume itself. Hotspots do not universally evolve from basaltic to rhyolitic (B) — Hawaii has been erupting basalt for tens of millions of years with no trend toward silicic composition because it remains over thin oceanic crust; only continental hotspots produce rhyolite, and this is a function of crustal thickness and composition, not age. The correct answer is C: both plumes generate the same type of primary magma — basalt from decompression melting of the mantle; at Hawaii, this basalt erupts through ~7 km of oceanic crust with minimal interaction, preserving its mafic, low-viscosity character; at Yellowstone, the basaltic magma encounters ~40 km of felsic continental crust (granite and related rocks) and transfers its heat into the overlying crust, partially melting it and producing silica-rich, gas-rich, highly viscous rhyolitic magma; this rhyolite cannot flow easily and erupts catastrophically when pressure builds sufficiently. Water content (D) does play a role in volcanic explosivity generally, but the primary driver at Yellowstone is the high silica content of the crustal melt, not absorbed water — and continental crust is not uniformly water-saturated.",
        },
        {
          q: "The Hawaiian Island chain trends northwest, but at a point approximately 2,800 km northwest of Kauaʻi it bends sharply and the older Emperor Seamount Chain trends nearly due north. Seamounts at the bend are dated to ~50 million years ago. What geological event does this bend record?",
          a: [
            "The Hawaiian mantle plume shifted position approximately 50 million years ago, changing the direction of magma supply and therefore the direction in which new seamounts were added to the chain",
            "A change in the direction of Pacific Plate motion approximately 50 million years ago — the plate previously moved roughly northward (building the Emperor chain) and then abruptly changed to a northwestward direction (building the Hawaiian chain), with the bend precisely recording the timing and angle of this shift",
            "The bend records the collision of two separate and unrelated mantle plumes — one responsible for the Emperor chain and a different one for the Hawaiian chain — that happened to connect at the 50 million year mark",
            "Ocean currents progressively displaced the seamounts from their original positions over 80 million years, creating an apparent bend; the original chain was actually straight and the bend is an artefact of seafloor subsidence and current-driven displacement",
          ],
          correct: 1,
          explain: "Mantle plume migration (A) is not supported by the evidence — the deep mantle is far more viscous and stable than the surface lithosphere; palaeomagnetic studies of the Emperor seamounts indicate the plume moved somewhat in its early history but the ~60° bend is primarily a plate motion signal, not a plume motion signal. The correct answer is B: the Hawaiian-Emperor chain is a record of the Pacific Plate's motion history; for the ~30 million years before 50 Ma, the Pacific Plate moved roughly northward, building the Emperor Seamount Chain; at ~50 Ma, the plate's motion direction changed abruptly by ~60° to the current northwest direction, and from that point the Hawaiian chain began growing in its current orientation; the bend in the seamount chain thus precisely records the timing (~50 Ma) and angle (~60°) of this plate motion change — a tectonic event possibly related to the simultaneous collision of India with Asia, which reorganised stresses across the Indo-Pacific plate system. Two separate plumes (C) would require independent magma sources with no genetic connection — geochronological and geochemical data from the full chain show a continuous, coherent history consistent with a single fixed plume and a plate direction change. Ocean currents (D) do not displace seamounts — seamounts are anchored to the oceanic crust and move only with the plate; seafloor subsidence is vertical (as the oceanic crust cools and thickens), not lateral, and cannot produce a horizontal bend in a chain.",
        },
        {
          q: "The Deccan Traps of India cover approximately 2 million km² with basalt up to 2 km thick and erupted around 66 million years ago — coinciding with the end-Cretaceous mass extinction. What process produced this enormous volume of basalt in such a geologically short time, and what distinguishes this type of volcanism from ordinary hotspot chain volcanism?",
          a: [
            "The Deccan Traps formed by rapid seafloor spreading at an ancient mid-ocean ridge that has since been subducted; the basalt was erupted along thousands of kilometres of ridge and later compressed by plate collision into the Indian subcontinent",
            "The Deccan Traps were produced by the head of a newly arriving mantle plume — the Réunion plume — reaching the base of the lithosphere; the enormous plume head, far larger than the subsequent narrow plume tail, released a catastrophic outpouring of basalt in 1–2 million years before the activity settled into the more modest hotspot chain that now feeds Réunion Island",
            "The Deccan Traps formed by the collision of India with Asia 66 million years ago; the compressional forces squeezed large volumes of melt out of the Indian continental crust, flooding the surface with basalt in the same way that the Himalayas later pushed up mountains",
            "The Deccan Traps are the product of subduction-zone arc volcanism from an ancient oceanic plate that has been fully consumed; because arc volcanoes are closely spaced, their combined output over millions of years built up the thick plateau of basalt now visible in India",
          ],
          correct: 1,
          explain: "Mid-ocean ridge basalt (A) is erupted at spreading centres in thin, continuous sheets — it does not accumulate in thick continental plateaux; moreover, ridge basalt would be found as oceanic crust on the seafloor, not as a continental flood basalt province; the Deccan Traps overlie Indian continental crust and are clearly not oceanic in origin. The correct answer is B: Large Igneous Provinces (LIPs) such as the Deccan Traps are produced when the head of a newly arriving mantle plume reaches the base of the lithosphere; the plume head is enormous — up to 1,000 km across — because it has been heating and expanding during its slow ascent from the deep mantle; on contact with the lithosphere, the plume head releases a catastrophic pulse of basaltic magma that floods hundreds of thousands of square kilometres in just 1–3 million years; after the initial plume-head eruption, the magma supply settles into the more modest, sustained output of the narrow plume tail — the same tail that now feeds the ongoing Réunion hotspot chain in the Indian Ocean; the Deccan Traps and the Columbia River Basalt are the two most studied examples of this plume-head arrival process. India did not collide with Asia until approximately 50 million years ago (C) — the Deccan eruptions at 66 Ma predate the collision by ~16 million years; continental collision produces metamorphism and uplift, not flood basalt; there is no mechanism by which collision squeezes basalt out of continental crust. Arc volcanism (D) produces andesitic to rhyolitic magmas characteristic of subduction zones — not the flood basalts of the Deccan Traps; and even densely spaced arc volcanoes produce far too little volume per unit area to build a 2-km-thick plateau over 2 million km².",
        },
      ],
    },
  ],
}

export default hotspotsAndPlumes
