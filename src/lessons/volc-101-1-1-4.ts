import { Flame, Globe, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const volcanicLandformsLesson: Lesson = {
  id: 'volc-101-1-1-4',
  title: 'Volcanic Landforms and Edifice Types',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Beginner',
  duration: '11 min',
  xpReward: 140,
  description: "Every volcanic edifice — from the gentle shield volcanoes of Hawaii to the explosive stratovolcanoes of the Pacific Ring of Fire — is a physical record of eruption style, magma composition, and geological history. Learning to read a volcano's shape is learning to read its past and anticipate its future.",
  sources: [
    { org: 'USGS',     title: 'Types of Volcanic Landforms',                               url: 'https://volcanoes.usgs.gov/vhp/types.html' },
    { org: 'SI-GVP',   title: 'Smithsonian Global Volcanism Program — Volcano Types',      url: 'https://volcano.si.edu/' },
    { org: 'OpenStax', title: 'Physical Geology — Volcanic Structures (CC-BY 4.0)',        url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'NOAA',     title: 'Ocean Exploration — Submarine Volcanoes',                   url: 'https://oceanexplorer.noaa.gov/' },
    { org: 'AGI',      title: 'Glossary of Geology — Volcano Types',                       url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `A volcano\'s shape tells its story`,
      body: `No two volcanoes look exactly alike — and this variety is not random. The shape of a volcanic edifice is a direct physical consequence of eruption style, magma composition, and the balance between construction (lava and tephra added) and destruction (erosion, collapse). A gentle, broad shield volcano with slopes of 2–5° broadcasts its nature immediately: low-viscosity basaltic magma, effusive eruptions, a long history of lava flows accumulating at low angles. A steep-sided stratovolcano rising to 3,000 metres at a 30° angle says something completely different: high-viscosity andesitic or dacitic magma, alternating explosive and effusive eruptions, alternating layers of lava and pyroclastic material that build a composite cone over thousands of years.

The diversity of volcanic landforms also reflects the diversity of volcanic settings. Mid-ocean ridges produce **pillow basalts** — the most abundant volcanic rock on Earth — by submarine effusive eruption. Hotspot systems beneath oceanic plates build enormous **shield volcanoes** that can grow to heights of 10,000 metres from the seafloor (Mauna Loa is taller than Mt. Everest if measured from its base on the ocean floor). Subduction zone arcs produce the classic **stratovolcanoes** (composite cones) that most people picture when they think of volcanoes: Fuji, Rainier, Shasta, Merapi, Pinatubo, Popocatépetl. Continental hotspot systems produce the most dangerous volcanic landforms of all: **calderas** — collapsed craters formed by the catastrophic emptying of a shallow magma reservoir during a supervolcanic eruption.

Understanding volcanic landform types is one of the first skills a volcanologist develops — not just because it allows classification, but because each edifice type predicts the hazards it poses, the eruption style it is capable of, and the monitoring approach that is most relevant. A shield volcano monitored for lava flow paths requires different attention than a caldera system monitored for the first signs of magma chamber reactivation.`,
      keyTerms: [
        { term: 'Shield volcano',     def: 'A broad, gently sloping volcanic edifice (slopes 2–8°) built by the accumulation of highly fluid basaltic lava flows. Named for resemblance to a warrior\'s shield lying flat. Built by effusive eruptions from a central vent and radial fissures. Can be enormous: Mauna Loa (Hawaii) is ~100 km wide and rises ~10,000 m from the seafloor — the largest volcano on Earth by volume.' },
        { term: 'Stratovolcano',      def: 'Also called composite volcano. A steep-sided (slopes 20–35°) cone built by alternating layers of lava flows and pyroclastic deposits (tephra, ash, pyroclastic flow deposits). Typical of subduction zone arcs. Moderately to highly silicic magma (andesitic to dacitic). Can reach 3,000–5,000 m height. Examples: Mt. Fuji, Mt. Rainier, Mt. Pinatubo, Mt. Merapi. The most common type of large subaerial volcano.' },
        { term: 'Cinder cone',        def: 'A small (usually <300 m tall), steep-sided (30–40°) cone built from scoria (cinder) — pyroclastic basaltic material ejected during Strombolian eruptions. Very common, typically monogenetic (one eruption episode). May have a lava flow from the base. Usually short-lived (days to years). Parícutin (Mexico), which grew from a cornfield in 1943, is the most-observed birth of a cinder cone.' },
        { term: 'Caldera',            def: 'A large volcanic depression (1–100 km diameter) formed by the collapse of the ground into a partially emptied magma reservoir during or after a major eruption. Not a crater (which is a simple depression at a vent). Some calderas form incrementally over multiple eruptions; others form catastrophically in minutes during supervolcanic events. Examples: Crater Lake (Oregon), Yellowstone, Toba (Sumatra).' },
        { term: 'Lava dome',          def: 'A mound of highly viscous lava that accumulates around a vent when magma is too viscous to flow far from its source. Grows by internal injection (endogenous dome) or by surface extrusion (exogenous lobe). Associated with dacitic to rhyolitic magma. Can be highly unstable and collapse, producing pyroclastic density currents (block-and-ash flows). The growing dome at Mt. St. Helens after the 1980 eruption is a classic example.' },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: '/visuals/vol.svg',
        alt: 'Cross-section of a stratovolcano showing the magma chamber, central conduit, crater, eruption column, lava flows, pyroclastic layers, and parasitic vent',
        aspectRatio: '16/9',
        credit: 'Facet Earth Sciences',
        annotations: [
          {
            id: 'eruption-column',
            x: 50,
            y: 14,
            label: 'Eruption Column',
            description: 'A plume of ash, gas, and rock fragments (tephra) propelled upward by expanding volcanic gases during explosive eruptions. Eruption columns from major events like the 1991 Pinatubo eruption can reach 35+ km into the stratosphere, injecting sulfur dioxide that forms reflective aerosols and causes temporary global cooling of ~0.5°C for 1–2 years. Collapsing columns produce deadly pyroclastic flows.',
          },
          {
            id: 'crater',
            x: 50,
            y: 24,
            label: 'Summit Crater',
            description: 'The bowl-shaped depression at the volcano summit, formed by explosive eruptions or collapse into the conduit below. Active craters may contain lava lakes, fumaroles (gas vents), or a growing lava dome that builds pressure for future explosive eruptions. Monitoring crater deformation — via GPS, InSAR satellites, and tiltmeters — is central to volcanic hazard assessment and eruption forecasting.',
          },
          {
            id: 'central-conduit',
            x: 53,
            y: 45,
            label: 'Central Conduit',
            description: 'The pipe-like channel through which magma rises from the chamber to the vent at the surface. Conduits are typically 1–50 m in diameter and maintained by repeated magma passage that bakes and strengthens surrounding rock. Conduit geometry controls eruption style: wide open conduits favour effusive lava flows; narrower or plugged conduits build pressure for explosive Plinian eruptions that eject ash globally.',
          },
          {
            id: 'magma-chamber',
            x: 50,
            y: 82,
            label: 'Magma Chamber',
            description: 'A reservoir of partially molten rock stored in the crust, typically 5–15 km below the surface. Magma chambers are complex crystal mush zones — not simple liquid-filled cavities — where 50–80% of the material may be solid. As magma differentiates (heavier minerals sink, lighter ones rise), dissolved gases concentrate, building the overpressure that eventually drives eruptions through the overlying conduit.',
          },
          {
            id: 'lava-flow',
            x: 15,
            y: 70,
            label: 'Lava Flow',
            description: 'Molten rock that erupts relatively gently and flows across the surface, cooling and solidifying as it travels. Basaltic lava flows are hot (~1,100–1,200°C) and fluid, travelling at 1–30 km/h over great distances; silica-rich andesitic and rhyolitic lavas are cooler and more viscous. Lava flows from stratovolcanoes are typically shorter and slower than those from shield volcanoes like those of Hawaii.',
          },
        ],
      },
    },
    {
      type: 'callout' as const,
      variant: 'warning',
      headline: 'Lahars: the hidden volcanic killer',
      body: "Lahars (volcanic mudflows) can travel faster than 100 km/h and travel hundreds of kilometres from a volcano. The 1985 Nevado del Ruiz eruption in Colombia generated lahars that buried the town of Armero 74 km away, killing more than 23,000 people.",
    },
    {
      type: 'concept',
      title: 'Major edifice types, calderas, and volcanic fields',
      body: `**Shield volcanoes: building from the seafloor.** Shield volcanoes are constructed almost entirely from basaltic lava flows, with very little pyroclastic material. Because basaltic lava has low viscosity, it can flow tens of kilometres from the erupting vent before solidifying, producing the characteristic broad, gently sloping form. The Hawaiian volcanoes are the archetypical shields: Mauna Loa covers an area of 5,271 km² and rises 4,169 m above sea level, but its true height from the seafloor is ~10,000 m — making it taller than Mt. Everest by 1,400 m. The island of Hawaii itself is the visible portion of five overlapping shield volcanoes (Kīlauea, Mauna Loa, Mauna Kea, Hualālai, Kohala). At the summit of most shields is a **pit crater** or caldera formed by subsidence when lava drains from the underlying lava lake system. Iceland, which sits on both the Mid-Atlantic Ridge and a mantle plume, is entirely built of shield and fissure-fed basaltic lava — the largest basaltic island on Earth.

**Stratovolcanoes: layered and dangerous.** Stratovolcanoes build their steep, elegant profiles through a long history of alternating eruption styles: periods of effusive lava production interrupted by explosive pyroclastic events that deposit thick layers of ash, lapilli, and pumice. The internal structure of a stratovolcano is a layered cake of lava flows (dense, strong) interbedded with pyroclastic deposits (weaker, more easily eroded). This combination of strong and weak layers makes the flanks of stratovolcanoes prone to **sector collapse** — massive landslides in which a large portion of the cone fails and slides away. The 1980 eruption of Mt. St. Helens began with exactly such a collapse: the bulging north flank, inflated by a cryptodome (shallow magma intrusion), collapsed in a catastrophic landslide that removed 2.5 km³ of the volcano's summit, triggering a **lateral blast** — a directed explosion that devastated 600 km² of forest to the north within minutes.

**Calderas: the super-eruption record.** The most dangerous volcanic structures are not peaks but holes — calderas form not from lava building upward but from catastrophic collapse after magma is rapidly evacuated from a shallow reservoir, and some caldera systems sit beneath unremarkable-looking ground. A caldera forms when a volcano's magma reservoir is rapidly and catastrophically emptied during a large-scale eruption, removing the support from beneath the overlying rock, which then collapses inward. The resulting depression can be 5–100 km in diameter and hundreds to thousands of metres deep. The collapse may occur in a matter of minutes during the most intense phase of a large eruption. Long Valley Caldera (California) formed 760,000 years ago during an eruption that produced ~600 km³ of rhyolitic magma; Yellowstone Caldera formed 640,000 years ago during a ~1,000 km³ eruption; Toba Caldera (Sumatra) formed ~74,000 years ago during the largest known eruption of the Quaternary (~2,800 km³). Post-collapse activity often produces **resurgent calderas** — the caldera floor is lifted by renewed magma intrusion, creating a central dome, and the caldera moat fills with hydrothermal lakes and fumarole fields.

**Lava domes and their hazards.** When highly viscous dacitic or rhyolitic magma reaches the surface, it cannot flow away from the vent — it piles up as a slow-growing dome. Domes grow by both extrusion (new lava is added to the outer surface) and endogenous inflation (new magma is injected into the interior, making the dome swell). The greatest hazard of lava domes is their instability: as a dome grows, its oversteepened flanks may collapse, releasing the hot, gas-charged interior material as a **pyroclastic density current** (block-and-ash flow) — a fast-moving avalanche of hot gas and rock fragments capable of travelling at 100+ km/h. The 1997 collapse of the Soufrière Hills dome (Montserrat) produced block-and-ash flows that destroyed the capital Plymouth. Mt. St. Helens grew a massive dome (150 m/hr at its peak growth rate in 2004–2005) in its crater after the 1980 eruption, monitored continuously as a proxy for magmatic recharge.

**Volcanic fields and monogenetic volcanism.** Not all volcanic activity produces long-lived central vent volcanoes. **Volcanic fields** are broad areas containing hundreds of individual small volcanic centres — cinder cones, maars (explosion craters formed by phreatomagmatic eruptions), lava shields, and lava flows — distributed over tens to hundreds of square kilometres. Each vent in a volcanic field typically has only one eruption episode (monogenetic) before becoming extinct; new eruptions occur at new locations within the field, driven by successive batches of magma rising through the crust. Examples: Michoacán-Guanajuato Volcanic Field (Mexico, 900+ cinder cones), Springerville Volcanic Field (Arizona), Auckland Volcanic Field (New Zealand, directly beneath a city of 1.7 million people). The hazard challenge of volcanic fields is that eruptions can potentially occur anywhere within the field, not at a known central vent.`,
      cards: [
        {
          name: 'Shield Volcanoes vs. Stratovolcanoes',
          icon: Mountain,
          color: BRAND.coral,
          desc: 'Shield: basalt, effusive, slopes 2–8°, very broad and flat, built over 100,000s yr; vent collapses → pit crater; Hawaiian example. Mauna Loa: largest on Earth by volume (75,000 km³). Stratovolcano: andesite/dacite, alternating explosive+effusive, slopes 20–35°, tall and steep, internal lava+tephra layers, prone to sector collapse; subduction zone. Mt. Fuji: 3,776 m; Mt. Rainier: 4,392 m; Merapi: most active in Indonesia. Cinder cone: scoria, Strombolian, small, monogenetic.',
          examples: 'Mauna Kea: 10,210 m from seafloor (taller than Everest) · Parícutin: grew from cornfield in 9 years (1943), reached 424 m, now extinct · Mt. Fuji: last erupted 1707 (Hōei eruption), Plinian to Vulcanian; deposits found in Tokyo',
        },
        {
          name: 'Calderas and Supervolcanism',
          icon: Flame,
          color: BRAND.ruby,
          desc: 'Caldera: collapse depression 1–100 km, formed by magma reservoir emptying. Distinguished from crater (<1 km, at vent). Volcanic Explosivity Index: caldera-forming eruptions are VEI 7–8 (100–1,000 km³). Yellowstone: 45 × 72 km, last VEI-8 at 640 ka. Toba: 100 × 30 km, 74 ka, 2,800 km³, VEI 8. Long Valley: 32 × 17 km, 760 ka. Resurgent domes: post-collapse magma injection → floor uplift. Supervolcano recurrence: 100,000s–millions of years.',
          examples: 'Crater Lake (Oregon): formed 7,700 yr ago when Mt. Mazama collapsed after erupting ~40 km³; lake now 594 m deep · Campi Flegrei (Italy, Naples): active caldera, 40,000 years of unrest, near 3 million residents · Santorini (Greece, ~1600 BCE): Bronze Age Minoan eruption VEI 7 possibly linked to Atlantis legend and Exodus',
        },
        {
          name: 'Lava Domes and Volcanic Fields',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Lava dome: dacite/rhyolite, too viscous to flow, piles up at vent, endogenous+exogenous growth, unstable flanks collapse → block-and-ash flows (PDC). Monitoring: GPS, seismicity, thermal cameras detect dome growth. Volcanic field: hundreds of monogenetic vents (cinder cones, maars, shields) over wide area; eruption can occur anywhere in field. Auckland: 53 volcanoes over 360 km², beneath 1.7 million people, last eruption 550 yr ago.',
          examples: `Mt. St. Helens dome: 1980–86 original + 2004–08 renewed growth (150 m/hr) · Soufrière Hills, Montserrat 1997: dome collapse → block-and-ash flows buried Plymouth · Maar: Ukinrek Maars (Alaska) formed in 1977 in 10 days from phreatomagmatic explosions; Eifel Maars (Germany) contain Europe\'s deepest lakes`,
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A geologist presents two satellite images side by side. Image A shows a massive volcanic edifice with very gentle slopes (2–5°) extending over 100 km in diameter, with a summit depression. Image B shows a steep, conical volcano rising sharply to a pointed summit, approximately 30 km in diameter and 3,000 m tall. Without chemical analysis, what can the geologist infer about the eruption style, magma type, and likely tectonic setting of each volcano?",
          a: [
            "Image A (gentle slopes) is a subduction zone stratovolcano formed from silicic magma; the broad shape reflects collapse of older, steeper cones. Image B (steep cone) is a hotspot shield built from basalt; the steep slopes reflect a very young shield still building its steep early flanks before spreading into the classic gentle shield form",
            "Image A is a shield volcano built from low-viscosity basaltic lava flows that spread far from the vent (slopes 2–5° reflect this); likely hotspot or mid-ocean ridge setting; eruptions are effusive. Image B is a stratovolcano built from alternating lava flows and pyroclastic deposits of andesitic to dacitic magma; steep slopes (20–35°) reflect higher viscosity and alternating eruption styles; likely subduction zone arc setting; eruptions include significant explosive episodes",
            "Both volcanoes are the same type — the difference in slope angle reflects only the age of the volcano; older volcanoes develop gentle slopes from erosion while younger ones have steep slopes; the eruptive histories of both volcanoes are similar, dominated by basaltic lava flows at both the gentle and steep stages",
            "Image B (steep cone) is a shield volcano in its early building stage; Image A (gentle) is a stratovolcano that has been heavily eroded over millions of years; shape alone cannot distinguish volcano type without geochemical analysis of the lavas, so no eruption style inference is possible",
          ],
          correct: 1,
          explain: "Subduction zone stratovolcanoes are steep, not gently sloping (A) — the gentle slope of Image A is inconsistent with a stratovolcano built from higher-viscosity magma; and the broad shape is not the result of collapse of steeper cones (collapse would produce irregular topography, not the smooth broad profile of a shield). Age and erosion (C) do reduce slopes over time, but a 2–5° slope on a 100-km-wide volcano cannot be explained by erosion of a stratovolcano — the original steep slopes and pyroclastic layers would leave a distinctive rugged terrain, not the smooth shield profile. Young shields do not have steep early stages (D) — shields have gentle slopes from their inception because the basaltic lava that builds them flows far from the vent; there is no steep early-stage shield volcano growth phase. The correct answer is B: volcano morphology is directly diagnostic of magma composition and eruption style. A shield volcano's defining characteristic is its broad, gentle profile, which is a direct consequence of low-viscosity basaltic lava spreading far from the vent before solidifying — much like syrup spreading across a pancake. Stratovolcanoes have steep slopes because they erupt more viscous (andesitic to dacitic) lavas that don't flow far, interbedded with pyroclastic deposits that accumulate near the vent; together these build a steep cone. The tectonic setting inference follows from composition: basalt at hotspots and MOR → shield; andesite/dacite at subduction zones → stratovolcano. These morphological-compositional relationships are so consistent globally that geologists routinely use satellite imagery to classify and assess volcanic hazards before any field work.",
        },
        {
          q: "The August 27, 1883 eruption of Krakatau (Indonesia) killed 36,000 people. The vast majority of deaths were not from lava flows or falling rock — they were from a tsunami. A large caldera formed where the island previously stood. Explain the sequence of events that produced both the caldera and the devastating tsunami, and why this eruption type is so much more dangerous than simple lava flow eruptions.",
          a: [
            "The Krakatau eruption produced submarine lava flows that rapidly cooled in seawater; the violent steam explosions from the lava-water contact (phreatic explosions) generated the tsunami; the caldera formed over millions of years of slow subsidence as magma was slowly extracted from the shallow reservoir; the tsunami was larger than typical because Krakatau was in a narrow strait that amplified the waves",
            "The Krakatau eruption catastrophically emptied its shallow magmatic reservoir in a series of massive explosive eruptions; when the magma reservoir was sufficiently depleted of pressure support, the overlying volcanic island — approximately 6 km³ — collapsed into the evacuated chamber in minutes, producing the caldera; the sudden collapse of this volume of rock into the ocean generated the tsunami; the explosion itself injected sulfur dioxide into the stratosphere, causing measurable global cooling of ~0.4°C for ~5 years",
            "The tsunami was produced by the seismic shock of the eruption; the Krakatau explosion registered on seismometers worldwide as equivalent to a magnitude 9 earthquake; the seismic waves from this earthquake propagated through the ocean floor and generated the tsunami independently of any caldera collapse; the caldera formed after the tsunami by separate subsidence processes over the following weeks",
            "The caldera formed when acidic volcanic gases (HF, HCl, SO₂) dissolved in groundwater beneath the island created a highly corrosive solution that chemically dissolved the rock beneath the summit; as the rock was chemically removed over the weeks of the eruption, the summit collapsed to form the caldera; the resulting collapse generated the tsunami",
          ],
          correct: 1,
          explain: "Submarine lava flows causing phreatic explosions (A) is not the mechanism of the 1883 Krakatau tsunami — the eruption was magmatic (not primarily phreatic), and the tsunami was generated by caldera collapse, not by lava-water interaction. Krakatau's caldera did not form over millions of years (A) — it formed acutely during the August 27 eruption over hours. Seismic waves from the eruption (C) — the Krakatau explosion was heard 5,000 km away, but the explosion wave (not a seismic wave) and the caldera collapse, not a magnitude-9 equivalent earthquake, generated the tsunami; the distinction matters because tsunamis generated by collapse have different characteristics than earthquake-generated tsunamis. Acid dissolution of rock (D) is not a volcanic caldera formation mechanism — calderas are formed by physical collapse of the crust into a depressurised magma chamber, not by chemical dissolution. The correct answer is B: the Krakatau sequence is a textbook example of caldera collapse tsunami generation. The eruption sequence began on August 26–27, 1883, with increasingly large Plinian explosions venting the dacitic magma reservoir. The climactic explosions on August 27 (heard 4,800 km away — one of the loudest sounds in recorded history) rapidly evacuated the magma reservoir. With the pressure support removed, the northern two-thirds of Krakatau island collapsed into the emptied chamber, displacing a massive volume of ocean water in seconds. This caldera collapse generated a tsunami of approximately 30 metres height that struck the coastlines of Java and Sumatra within minutes, killing the vast majority of the 36,000 victims. The eruption also injected an estimated 25 km³ of material and large quantities of SO₂ into the stratosphere, producing sulfate aerosols that cooled global temperatures by ~0.4°C and created vivid sunset colours (inspiring artists including Munch and Edvard) for ~2–3 years. This type of tsunami (collapse-generated) is particularly dangerous because it strikes with little warning time, can be larger than earthquake-generated tsunamis in the near field, and can occur even in areas far from known subduction zones if a volcanic island undergoes caldera collapse.",
        },
        {
          q: "Auckland, New Zealand (population 1.7 million) is built on a volcanic field containing 53 monogenetic volcanoes. The most recent eruption was approximately 550 years ago. Volcanologists are asked to prepare a volcanic hazard assessment for the city. What makes this volcanic field uniquely challenging to assess for future eruption location, and what monitoring strategies are most relevant?",
          a: [
            "Auckland's volcanic field is challenging because there is only one central vent under the city; the challenge is predicting when this single vent will next erupt; the primary monitoring strategy is continuous seismic monitoring of the single vent location for signs of magma movement upward through the conduit",
            "Auckland's volcanic field is challenging because eruptions can occur at new locations anywhere within the field — the 53 existing volcanoes are all extinct monogenetic vents that will not re-erupt; a new eruption will open at a different location within the ~360 km² field, and the location of the next vent cannot be predicted without real-time magma intrusion data; monitoring relies on detecting the seismic swarm, ground deformation, and gas emissions that precede vent opening by hours to days, combined with broad-field seismic and GPS networks sensitive to any emerging intrusion",
            "Auckland's volcanic field poses no exceptional hazard challenge because all 53 vents follow predictable eruptive sequences; by studying the order of previous eruptions, volcanologists can predict with confidence which area of the field will next erupt; the primary monitoring strategy is geological mapping of the eruption sequence to identify the next vent in the rotation",
            "Auckland's volcanic field is challenging because the 53 volcanoes are all potentially active and any of them could re-erupt simultaneously; the challenge is monitoring 53 separate volcanic vents simultaneously; modern seismic networks can track which of the 53 vents is showing precursory activity, allowing the city to evacuate just that zone",
          ],
          correct: 1,
          explain: "Auckland's field does not have a single central vent (A) — it has 53 individual, geographically distributed vents spread over 360 km², and any of them is individually monogenetic (one eruption only); the next eruption will not be at an existing vent. Eruption sequences do not follow predictable rotations in volcanic fields (C) — the location of successive monogenetic vents in volcanic fields is controlled by the geometry of subsurface magma ascent pathways, crustal stress, and random processes that cannot be determined from the sequence of past eruptions alone. The 53 existing volcanoes are monogenetic and extinct (A and D correctly identify this), but they will not re-erupt simultaneously — each eruption in the field is a separate, single-episode event; multiple simultaneous eruptions at existing vents would require a fundamentally different magmatic system than what is inferred for the Auckland field. The correct answer is B: the key challenge of volcanic fields is the absence of a persistent central vent. In a stratovolcano, monitoring focuses on the known summit conduit and its plumbing system. In a monogenetic volcanic field, the next eruption will almost certainly be at a new location within the ~360 km² field — but exactly where is unknown until a new intrusion begins propagating toward the surface. Effective monitoring for Auckland therefore requires a broad-coverage network of seismometers, GPS stations, and infrasound sensors distributed across the entire field, capable of detecting an emerging seismic swarm and ground deformation starting hours to days before vent opening. The hazard assessment challenge is: the city has ~360 km² over which the next vent could open; different parts of the city face different risks depending on their proximity to the new vent location. This is why Auckland requires not just monitoring but also pre-planned emergency response scenarios for vent opening in different zones of the city — the most complex volcanic contingency planning challenge of any city in the world.",
        },
        {
          q: 'Crater Lake in Oregon occupies a caldera approximately 8 km in diameter and up to 594 m deep. Before the caldera formed ~7,700 years ago, a high stratovolcano called Mt. Mazama stood on the same site. What sequence of events produced the caldera, and why does the depth of the lake reflect the history of post-collapse volcanism rather than the full depth of the collapse itself?',
          a: [
            'The Crater Lake caldera formed by erosion: the summit of Mt. Mazama was carved away by glaciers during the last ice age, leaving a broad, flat-floored depression; the lake formed when precipitation and snowmelt filled the glacier-excavated basin; the depth of 594 m reflects the total depth of glacial erosion rather than any volcanic collapse',
            'The caldera formed when the summit of Mt. Mazama collapsed into a partially emptied magma reservoir during or after a large Plinian eruption (~40 km³ of rhyodacite erupted); as magma was rapidly withdrawn from the shallow chamber, the overlying edifice lost structural support and subsided inward; the lake surface is far above the floor of the original collapse because post-collapse volcanism built Wizard Island (a cinder cone) and lava flows on the caldera floor, partially refilling the depression; the lake depth of 594 m therefore represents the net depression after post-collapse volcanic infill, not the total subsidence at the time of collapse',
            'Crater Lake formed when a large meteorite impact destroyed the summit of Mt. Mazama ~7,700 years ago; the impact crater was subsequently filled with water from precipitation; the dacitic and rhyodacitic rock around the caldera rim are impact melt sheets, not volcanic products; the round shape and steep walls are characteristic of a hypervelocity impact rather than a volcanic collapse',
            'The caldera formed by gradual subsidence over thousands of years as the magma chamber beneath Mt. Mazama slowly crystallised and contracted; the collapse was not associated with any eruption; Wizard Island is a remnant of the original Mt. Mazama summit that did not collapse; the lake depth simply reflects the total subsidence depth with no post-collapse modification',
          ],
          correct: 1,
          explain: 'Glacial erosion (A) does not produce circular calderas with steep, near-vertical walls and flat floors at the depths observed at Crater Lake; glacier-carved landforms produce U-shaped valleys or cirques, not circular basins; the geological evidence for a catastrophic eruption at ~7,700 BP — including extensive rhyodacitic ignimbrite and tephra deposits found across the Pacific Northwest — rules out a purely erosional origin. A meteorite impact (C) is not supported by any evidence at Crater Lake: there are no shocked quartz minerals, no iridium anomaly, no impactite glass, and no radial ejecta pattern; the thick sequence of pyroclastic deposits (pumice and ash from the ~7,700 BP eruption) found across Oregon, Washington, and as far as British Columbia definitively identifies a volcanic origin. Gradual subsidence without eruption (D) is not the mechanism: a magma chamber does slowly crystallise and contract, but the Crater Lake collapse was catastrophic and eruption-linked — the ignimbrite and fall deposits prove massive rapid magma withdrawal; and Wizard Island is unambiguously a post-collapse cinder cone that grew after the caldera formed, not a pre-existing summit remnant. The correct answer is B: the Crater Lake caldera is a textbook collapse caldera formed during one of the most dramatic eruptions in the recent geological record of North America. Approximately 7,700 years ago, Mt. Mazama erupted ~40–50 km³ of rhyodacitic magma in a catastrophic Plinian event. As the magma reservoir was rapidly evacuated, the ~3,700 m-high stratovolcano above it lost structural support and collapsed inward and downward, creating the caldera. The collapse likely occurred in hours during the most intense phase of the eruption. After the caldera formed, volcanic activity resumed on the caldera floor: Wizard Island (a cinder cone reaching 230 m above the lake surface) and associated lava flows were emplaced, partially filling the depression. The current lake depth of 594 m is the net result of the original collapse depth minus the thickness of post-collapse volcanic infill and sediment accumulation — the total collapse at the time of eruption likely exceeded 1,000 m. The lake itself formed by gradual accumulation of precipitation and groundwater after the caldera sealed.',
        },
      ],
    },
  ],
}

export default volcanicLandformsLesson
