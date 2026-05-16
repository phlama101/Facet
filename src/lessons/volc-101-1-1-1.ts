import { Flame, Globe, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const originOfMagma: Lesson = {
  id: 'volc-101-1-1-1',
  title: 'The Origin of Magma',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Beginner',
  duration: '11 min',
  xpReward: 140,
  description: "Magma — molten rock generated deep within the Earth — is the raw material of all volcanic activity. Understanding where and why the solid mantle melts is the foundation of volcanology and explains why volcanoes occur in specific tectonic settings and not others.",
  sources: [
    { org: 'USGS',     title: 'Volcano Hazards Program — How Volcanoes Work',              url: 'https://volcanoes.usgs.gov/vhp/about_volcanoes.html' },
    { org: 'SI-GVP',   title: 'Smithsonian Global Volcanism Program',                      url: 'https://volcano.si.edu/' },
    { org: 'OpenStax', title: 'Physical Geology — Melting and Magma (CC-BY 4.0)',          url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'USGS',     title: 'Volcano Basics — What Is Magma?',                           url: 'https://www.usgs.gov/programs/VHP/volcano-basics' },
    { org: 'AGI',      title: 'American Geosciences Institute — Igneous Rock',             url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Where does magma come from?',
      body: `Beneath the Hawaiian island of Kīlauea, rock that has been solid for millions of years is melting right now — not because the mantle suddenly got hotter, but because rising rock crossed a pressure threshold where it no longer has to be solid. That single counterintuitive idea — that rock can melt by being pushed upward rather than heated — unlocks the entire geography of volcanism on Earth.\n\nEarth's mantle is mostly solid — and yet volcanoes erupt molten rock onto the surface every day. This apparent paradox is resolved when you understand that melting is not simply a matter of temperature. Rock can melt if: its temperature increases enough; the pressure on it decreases enough (decompression melting); or water or other volatiles are added to it (flux melting). These three mechanisms operate in different tectonic settings and produce different types of magma, different volcanic styles, and ultimately different landscapes.

Most of Earth's internal heat budget is dominated by the decay of radioactive isotopes (uranium, thorium, potassium-40) — a process that has been slowly declining in intensity over geological time as the reservoir of these isotopes is depleted. Additional heat comes from the residual heat of Earth's formation and differentiation. This internal heat is conducted very slowly through the solid mantle rock toward the surface, a process so inefficient that the mantle loses heat primarily not by conduction but by **convection** — slow creep of hot rock upward and cold rock downward over millions of years. It is this mantle convection that drives plate tectonics and positions the zones where magma can form.

A common misconception is that the Earth's interior is a vast ocean of magma from which volcanoes draw their supply. In reality, most of the mantle is solid, and the molten rock erupted by volcanoes is generated in the mantle only locally, under conditions that drive the mantle past its melting temperature. Understanding these conditions — the three melting mechanisms — is the key to understanding why volcanoes form where they do.`,
      keyTerms: [
        { term: 'Magma',                  def: 'Molten or partially molten rock within the Earth, including any dissolved gases (volatiles). When magma reaches the surface, it is called lava. Magma is not a uniform substance — its composition (primarily silica content, from ~45% in basalt to ~75% in rhyolite), temperature (700–1,300°C (2372°F)), crystal content, and dissolved volatile content all vary and determine its behaviour.' },
        { term: 'Decompression melting',   def: 'Melting triggered by a decrease in pressure on mantle rock without significant temperature change. As rock rises (in mantle plumes or mid-ocean ridge upwelling), pressure decreases; if temperature stays approximately constant, the rock may cross the solidus (melting point curve) and begin to melt. The primary mechanism at mid-ocean ridges and mantle hotspots.' },
        { term: 'Flux melting',            def: 'Melting of mantle rock caused by the addition of water (and CO₂ and other volatiles), which lowers the melting temperature (solidus) of the rock. The primary mechanism at subduction zones: water released from the subducting oceanic slab rises into the overlying mantle wedge, dramatically lowering its solidus and triggering partial melting.' },
        { term: 'Partial melting',         def: 'The melting of some minerals in a rock while others remain solid. Since different minerals have different melting temperatures, a rock heated toward its solidus will melt progressively, with low-melting-point minerals melting first. The proportion of melt produced (melt fraction) determines the composition of the resulting magma. Partial melting of the mantle typically produces basaltic melt from a peridotite source rock.' },
        { term: 'Solidus',                 def: 'The temperature (at a given pressure) below which a rock is entirely solid. Above the solidus, some melt exists (partial melting); above the liquidus, the rock is entirely molten. The solidus of peridotite (the primary mantle rock) at ~100 km (62 mi) depth is approximately 1,300°C (2372°F), but is lowered to ~1,000°C (1832°F) by the addition of water, explaining flux melting at subduction zones.' },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'magma-viscosity',
        caption: 'Magma viscosity spectrum from basalt (~10² Pa·s) to rhyolite (~10¹¹ Pa·s). Higher SiO₂ content → more polymerised silicate chains → higher viscosity → trapped gas → explosive eruption style.',
        credit: 'Dingwell (1995) · Schmincke (2004)',
      },
    },
    {
      type: 'callout' as const,
      variant: 'fact',
      headline: 'Kīlauea: one of Earth\'s most persistently active volcanoes',
      body: "Kilauea in Hawai'i has been erupting almost continuously since 1983, making it one of the world's most active volcanoes. During major eruptions, lava flows reach temperatures of 1,100–1,200°C (2192°F) — hot enough to vaporize zinc and boil lead.",
    },
    {
      type: 'concept',
      title: 'The three melting mechanisms and their tectonic settings',
      body: `**Why doesn't the mantle just melt everywhere?** Think of the mantle like water in a pressure cooker: the water is far above its normal boiling point (100°C (212°F)), but the elevated pressure keeps it liquid. Release the pressure and it flashes to steam. Mantle rock works the same way — it is above its low-pressure melting point nearly everywhere, but the weight of overlying rock keeps it solid. Only where pressure drops (rising plumes or diverging plates) or where water lowers the melting point (subducting slabs) does it cross from solid into melt.\n\nThe mantle is hot — temperatures at 100 km (62 mi) depth reach ~1,200–1,300°C (2372°F). The reason the mantle is mostly solid despite these temperatures is **pressure**. As pressure increases with depth, the melting temperature of rock increases significantly — the solidus moves to higher temperatures under higher pressure. Earth's mantle temperature profile (the geotherm) parallels but stays below the solidus throughout most of the mantle. It is only in specific locations where the temperature exceeds the solidus — locally, transiently, and through one of the three melting mechanisms — that magma forms.

**Mechanism 1: Decompression melting at mid-ocean ridges and hotspots.** As plates diverge at mid-ocean ridges, the underlying asthenosphere (the partially molten, ductile upper mantle layer) rises to fill the gap. As this solid rock ascends, the pressure on it decreases. The temperature of the rising rock changes very little — it cools adiabatically as it rises (losing heat by expansion) but not significantly. However, the solidus drops rapidly with decreasing pressure. At some depth (the **solidus intersection point**), the descending solidus crosses the nearly constant adiabatic temperature, and the rock begins to melt — without being heated at all. This is decompression melting, and it produces the basaltic magma that erupts along the 65,000 km (40391 mi) global mid-ocean ridge system, generating the entire oceanic crust. Mantle plumes at **hotspots** (Hawaii, Iceland, Yellowstone, Réunion) operate by a similar mechanism: a buoyant plume of anomalously hot mantle rock rises, and as it ascends, decompression melting produces a large volume of basaltic magma. Hotspot magmatism is identified by persistent, fixed-source volcanism that creates chains of progressively older volcanoes as the tectonic plate moves over the stationary plume (e.g., the Hawaiian-Emperor seamount chain).

**Mechanism 2: Flux melting at subduction zones.** When an oceanic plate subducts into the mantle, it carries with it water (stored in hydrous minerals such as serpentine, chlorite, and amphiboles, and in pore space) and CO₂. As the plate descends and pressure increases, these hydrous minerals break down (dehydration reactions) and release water into the hot surrounding mantle wedge. Water dramatically lowers the solidus of mantle peridotite — by as much as 200–300°C (572°F). The mantle wedge above the slab, previously solid at its given temperature and pressure, can now partially melt with the addition of water. This is flux melting, and it produces the magmas that feed the world's subduction zone volcanoes: the Pacific Ring of Fire (Cascades, Andes, Japan, Philippines, Indonesia, New Zealand arc). Subduction zone magmas are more silica-rich and volatile-rich than mid-ocean ridge basalts because of the continental crust contamination and the added volatiles from the slab.

**Mechanism 3: Heat-driven melting at continental rifts and hot spots with thick crust.** In some settings — especially where mantle plumes impinge on thick continental crust — the thermal input from the mantle heats the lower continental crust directly, causing it to melt. This produces magmas of granitic (rhyolitic) composition — high silica, derived from continental crustal melting rather than mantle melting. The Yellowstone supervolcano system is the quintessential example: basaltic magma from a mantle plume intrudes into the lower crust, heats it, and produces rhyolitic crustal melts that power the catastrophic caldera-forming eruptions. The Snake River Plain extending southwest from Yellowstone records the track of the North American plate over this hotspot.

**Mantle plumes and the Wilson Cycle.** Mantle plumes are hypothesised columns of anomalously hot mantle material rising from near the core-mantle boundary. Their existence is inferred from hotspot volcanism, seismic tomography (imaging of Earth's interior using earthquake waves), and the chemistry of hotspot lavas (which sample deeper, more primitive mantle than mid-ocean ridge basalts). Plumes play an important role in the Wilson Cycle — the repeated opening and closing of ocean basins over hundreds of millions of years: plume impingement on continental lithosphere can initiate rifting (as is occurring now in the East African Rift), eventually leading to the formation of a new ocean basin if rifting succeeds.`,
      cards: [
        {
          name: 'Three Melting Mechanisms',
          icon: Flame,
          color: BRAND.ruby,
          desc: 'Decompression melting: pressure drop as rock rises → solidus crosses geotherm → melting; no heating required. Setting: MOR, hotspots. Product: basaltic magma. Flux melting: water from subducting slab enters mantle wedge → solidus lowered 200–300°C (572°F) → partial melting. Setting: subduction zones. Product: andesitic-dacitic magma. Heat-driven melting: mantle plume heats base of thick crust → crustal melting. Setting: continental hotspots. Product: rhyolitic magma.',
          examples: 'Mid-ocean ridges: 65,000 km (40391 mi) of ridge, ~3 km³ (0.72 cu mi)/yr basalt, generates all oceanic crust · Hawaii (decompression): Mauna Loa has erupted continuously from plume for >1 Ma, building 75,000 km³ (17992 cu mi) of basalt · Cascades (flux melting): Mt. St. Helens 1980 VEI 5, andesitic-dacitic magma from Juan de Fuca slab dehydration at ~90 km (56 mi) depth',
        },
        {
          name: 'Partial Melting and Melt Composition',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Mantle peridotite: 40–45% SiO₂. Partial melting (5–25% melt fraction) produces basaltic melt (45–52% SiO₂) because low-melting-point silicate minerals melt first. Higher melt fraction → more Mg-rich, less silicic. Crustal contamination: basaltic magma assimilating continental crust → more silicic (andesitic, dacitic, rhyolitic). Fractional crystallisation: crystals forming and settling leave residual melt more silicic.',
          examples: 'MORB: most abundant magma type on Earth, ~50% SiO₂, erupted at >3 km (1.9 mi) water depth along all ocean ridges · OIB (Ocean Island Basalt): Kīlauea, Piton de la Fournaise (Réunion) — deeper, hotter mantle source, slightly higher K₂O and isotopic enrichment · Arc magmas: Merapi (Indonesia) andesite 55–60% SiO₂, Pinatubo dacite 65–67% SiO₂, Long Valley rhyolite 73%+ SiO₂',
        },
        {
          name: 'Tectonic Settings of Volcanism',
          icon: Mountain,
          color: BRAND.coral,
          desc: `Mid-ocean ridges: decompression, continuous basaltic eruption on seafloor, ~75% of Earth\'s magma output. Subduction zones: Ring of Fire — Pacific subduction arcs, Mediterranean volcanoes (Etna, Vesuvius, Santorini), Caribbean arcs. Hotspots: Hawaii (oceanic), Iceland (MOR+plume), Yellowstone (continental), Réunion, Kerguelen, Deccan traps (India, LIP). Continental rifts: East African Rift (Ol Doinyo Lengai, Erta Ale, Nyiragongo). LIPs (Large Igneous Provinces): massive flood basalt episodes linked to plume heads.`,
          examples: `Ring of Fire: 452 volcanoes, 75% of world\'s active volcanoes, subduction arcs from Alaska to Chile · East African Rift: Ol Doinyo Lengai (the only active carbonatite volcano), Erta Ale lava lake, Nyiragongo — nascent ocean forming · Deccan Traps (~66 Ma): 500,000 km³ (119950 cu mi) flood basalt, erupted within 1 Myr of Chicxulub impact, possible co-cause of end-Cretaceous extinction`,
        },
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
            description: 'A plume of ash, gas, and rock fragments (tephra) propelled upward by expanding volcanic gases during explosive eruptions. Eruption columns from major events like the 1991 Pinatubo eruption can reach 35+ km into the stratosphere, injecting sulfur dioxide that forms reflective aerosols and causes temporary global cooling of ~0.5°C (33°F) for 1–2 years. Collapsing columns produce deadly pyroclastic flows.',
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
            description: 'The pipe-like channel through which magma rises from the chamber to the vent at the surface. Conduits are typically 1–50 m (164 ft) in diameter and maintained by repeated magma passage that bakes and strengthens surrounding rock. Conduit geometry controls eruption style: wide open conduits favour effusive lava flows; narrower or plugged conduits build pressure for explosive Plinian eruptions that eject ash globally.',
          },
          {
            id: 'magma-chamber',
            x: 50,
            y: 82,
            label: 'Magma Chamber',
            description: 'A reservoir of partially molten rock stored in the crust, typically 5–15 km (9.3 mi) below the surface. Magma chambers are complex crystal mush zones — not simple liquid-filled cavities — where 50–80% of the material may be solid. As magma differentiates (heavier minerals sink, lighter ones rise), dissolved gases concentrate, building the overpressure that eventually drives eruptions through the overlying conduit.',
          },
          {
            id: 'lava-flow',
            x: 15,
            y: 70,
            label: 'Lava Flow',
            description: 'Molten rock that erupts relatively gently and flows across the surface, cooling and solidifying as it travels. Basaltic lava flows are hot (~1,100–1,200°C (2192°F)) and fluid, travelling at 1–30 km/h (19 mph) over great distances; silica-rich andesitic and rhyolitic lavas are cooler and more viscous. Lava flows from stratovolcanoes are typically shorter and slower than those from shield volcanoes like those of Hawaii.',
          },
        ],
      },
    },
    {
      type: 'concept',
      title: 'Key takeaways',
      body: `• **Three distinct melting mechanisms**: Decompression melting (mid-ocean ridges and hotspots), flux melting (subduction zones where slab water lowers the solidus by 200–300°C (572°F)), and heat-driven crustal melting (continental hotspots like Yellowstone) each operate in different tectonic settings and produce chemically different magmas.\n\n• **The mantle is mostly solid — melting is local and triggered**: Earth's interior is not a global magma ocean. Rock melts only where one of the three mechanisms pushes it past the solidus locally; the rest of the mantle remains solid despite temperatures above 1,200°C (2192°F), because pressure keeps it that way.\n\n• **Partial melting and magma composition are linked**: Mantle peridotite yields basaltic melt (45–52% SiO₂) at typical melt fractions of 5–25%. The high silica content of arc and continental magmas arises from crustal contamination or the melting of different source rocks — not from the mantle producing silicic melt directly.`,
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Scientists examining drill cores from the East Pacific Rise (a fast-spreading mid-ocean ridge) find fresh basaltic glass immediately below the seafloor at the ridge axis. The glass formed from very rapid quenching of lava on contact with cold seawater. Interestingly, deeper in the core, they find coarser-grained basalt (gabbro), indicating slower cooling. What does this pattern tell us about the magmatic system at a mid-ocean ridge, and what melting mechanism produced this magma?",
          a: [
            "The fresh basaltic glass indicates that the magma was produced by heat-driven melting of the continental crust, which is rich in silica; the glass composition (rapidly quenched) would be rhyolitic; the coarser gabbro beneath represents older, more slowly cooled magma from a previous phase of continental volcanism that was emplaced before the ridge formed",
            "The pattern is consistent with decompression melting at the mid-ocean ridge: as the plates diverge, mantle asthenosphere rises to fill the gap, crossing the solidus through decompression (pressure drop without significant temperature increase); the resulting basaltic magma pools in a shallow magma chamber beneath the ridge axis; lava that erupts onto the seafloor quenches rapidly in cold seawater to glass, while magma that crystallises slowly in the sub-axial magma chamber forms coarser-grained gabbro",
            "The glass represents the products of flux melting driven by seawater infiltrating the hot oceanic crust; seawater entering through fissures interacts with hot rock, releases water into the crust, lowers the solidus, and causes melting; the resulting glass is therefore very heterogeneous in composition, reflecting variable seawater infiltration pathways",
            "The coarse gabbro below the basalt glass represents the source rock from which the basalt melt was extracted by partial melting; the gabbro is the restite — the solid residue left after the low-melting-point fraction was removed to form the basalt; drill cores from ridge axes therefore preserve a cross-section through the partial melting zone itself",
          ],
          correct: 1,
          explain: "Heat-driven crustal melting (A) produces silicic (rhyolitic) magma from continental crust, not the basaltic glass found at mid-ocean ridges; mid-ocean ridges lack continental crust, and MORB is compositionally basaltic, consistent with mantle-derived magma. Seawater infiltration flux melting (C) is not the MOR mechanism — flux melting operates at subduction zones where water enters the hot mantle wedge from a subducting slab; seawater entering oceanic crust at mid-ocean ridges through hydrothermal systems does cause hydrothermal alteration but does not produce a significant magmatic melt; the amounts of water and the geometry are completely different from subduction zone flux melting. The gabbro as restite (D) is incorrect — restite from partial melting would be peridotite (residual mantle), not gabbro; gabbro is a coarse-grained rock of basaltic composition that forms by slow crystallisation of basaltic magma, not a residue from extraction. The correct answer is B: the MOR magmatic system involves a crustal-scale magma plumbing system. Decompression melting of rising asthenosphere produces basaltic melt that accumulates in a sub-axial magma chamber at 1–4 km (2.5 mi) depth. This chamber is not a large pool of liquid rock — seismic studies show it is primarily a mush of crystals with small pockets of melt. Lava erupted from this chamber onto the seafloor is quenched instantly by 2°C (36°F) seawater into volcanic glass (pillow basalts and lava flows). Magma that intrudes the chamber walls and solidifies slowly forms gabbro. The drill core therefore samples a cross-section of the oceanic crust: glass from seafloor eruptions → coarser basalt → gabbro from the crystallised chamber margins.",
        },
        {
          q: "The Cascades volcanic arc (including Mt. Rainier, Mt. St. Helens, Mt. Hood, and Crater Lake/Mt. Mazama) lies parallel to the Pacific Northwest coast of North America, approximately 200 km (124 mi) inland from the subduction zone where the Juan de Fuca plate dives beneath North America. Why do these volcanoes form 200 km (124 mi) inland from the trench rather than at the coast, and why are their lavas andesitic/dacitic rather than basaltic?",
          a: [
            "The 200 km (124 mi) offset from the trench reflects the distance the Juan de Fuca plate must travel before it reaches the depths (80–100 km (62 mi)) where pressure-driven dehydration of slab minerals releases water into the mantle wedge above; the arc position is determined by the slab depth, not surface distance; the andesitic lavas result from the mixing of basaltic mantle melt with silica-rich continental crustal material during ascent through the thick North American crust",
            "Cascades volcanoes are 200 km (124 mi) inland because the Juan de Fuca plate is too cold and dense to produce melting at the subduction zone itself; melting only occurs once the plate has been heated by conduction for millions of years after subduction; the andesitic composition reflects the composition of the Juan de Fuca plate itself, which is intermediate between basalt and granite",
            "The 200 km (124 mi) offset is determined by the position of the Continental Divide; volcanoes cannot form on the seaward side of the Rockies because the weight of the range suppresses magma ascent; the andesitic composition is produced by melting of the Rocky Mountain granite, which is 65–75% SiO₂",
            "The Cascades are 200 km (124 mi) from the coast because volcanic arcs always form this distance from the coast by convention of plate tectonic geometry; the subducting plate produces melt at a fixed 200 km (124 mi) depth, and arc-trench distances are universally fixed by this geometry; andesitic composition is an artifact of magma mixing with ocean water during submarine eruption before the volcanoes emerged above sea level",
          ],
          correct: 0,
          explain: "The cold-plate conduction heating argument (B) is not the mechanism — flux melting is triggered by dehydration of the slab as it reaches specific pressure-temperature conditions (not simply by conduction heating over time); the Juan de Fuca plate is geologically young and relatively warm, not cold. Continental Divide suppression (C) is not a real geological mechanism; the Rockies are far to the east of the Cascades; volcanic arcs form because of mantle wedge flux melting above the slab, not because of surface topographic controls. Fixed 200 km (124 mi) arc-trench distance (D) is a common oversimplification — arc-trench distances actually vary considerably (from 100 km (62 mi) in some arcs to >300 km (186 mi) in others) depending on slab dip angle; and andesitic composition is not caused by contact with seawater. The correct answer is A: the position of a volcanic arc above a subduction zone is controlled by the depth to the slab. Dehydration of subducted oceanic crust and slab sediments begins at ~80–120 km (75 mi) slab depth, where minerals such as serpentine, chlorite, and amphibole become unstable and release their structurally bound water. This water rises into the hotter overlying mantle wedge, lowers the solidus, and triggers flux melting. The surface projection of this 80–120 km (75 mi) slab depth falls ~150–200 km (124 mi) from the trench (depending on slab dip), which is why arc volcanoes are offset from the subduction zone. The andesitic-dacitic composition of Cascades lavas reflects: (1) initial flux melting of the mantle wedge produces basaltic magma; (2) this basaltic magma then rises through ~40 km (25 mi) of North American continental crust, where it may assimilate silicic crustal material and undergo fractional crystallisation, driving the composition toward more silicic andesitic and dacitic values. Mt. St. Helens' 1980 eruption and Crater Lake's ~7,700-year-old caldera-forming eruption are both products of this magmatic system.",
        },
        {
          q: "The Hawaiian-Emperor seamount chain extends for over 5,800 km (3604 mi) across the North Pacific Ocean, with the youngest volcanoes (active today) at the southeastern end (Hawaii island) and progressively older, more eroded volcanoes toward the northwest, ending with the Emperor seamounts at the Kamchatka trench. What does this chain tell us about the mechanism of Hawaiian volcanism and the motion of the Pacific plate?",
          a: [
            "The chain was produced by a mid-ocean ridge that migrated from northwest to southeast over geological time; the oldest seamounts formed when the ridge was in the northwest, and the youngest (Hawaii) formed when the ridge moved to the southeast; the chain therefore records the path of the ridge migration",
            "The Hawaiian-Emperor chain records the passage of the Pacific plate over a fixed mantle hotspot (the Hawaiian plume); the hotspot produces basaltic magma by decompression melting of anomalously hot mantle material; as the Pacific plate moves to the northwest at ~7 cm/yr, each volcanic island becomes extinct as it moves off the hotspot, and a new island forms over the plume; the age progression along the chain allows calculation of past Pacific plate velocity and direction; the bend in the chain at ~47 Ma records a change in Pacific plate direction",
            "The chain records the path of the Juan de Fuca plate subducting beneath the Pacific; the subduction triggers flux melting in the mantle above, and the resulting volcanoes form in a line parallel to the subduction front; the age progression records the rate at which subduction has advanced toward the southeast",
            "The Hawaiian-Emperor chain records episodic eruptions from a single, stationary central vent system that has been erupting at intervals; the oldest seamounts formed first from a single eruption event, followed by progressively younger events; the apparent progression from old northwest to young southeast is an artifact of the seamounts being at different stages of erosion, not actually different ages",
          ],
          correct: 1,
          explain: "A migrating mid-ocean ridge (A) would produce oceanic crust rather than isolated volcanic seamount chains; ridge migration does not produce linear age-progressive chains of isolated volcanoes. Juan de Fuca plate subduction (C) is a real feature, but it is located off the Pacific Northwest coast of North America; the Hawaiian chain is in the central Pacific, far from any subduction zone; subduction zone volcanic arcs are not isolated seamount chains but linear arcs of composite volcanoes. Episodic eruptions from a central vent (D) contradicts the radiometric age data from the chain — samples from the seamounts have been dated and do show a systematic age progression from southeast (youngest) to northwest (oldest), not an artifact of erosion. The correct answer is B: the mantle plume (hotspot) model proposed by J. Tuzo Wilson in 1963 explains the Hawaiian-Emperor chain. A fixed or slowly moving plume of anomalously hot mantle material rises from the deep mantle, producing a large volume of basaltic magma by decompression melting as it rises. This magma erupts through the overlying Pacific plate at a surface location fixed relative to the deep mantle. As the Pacific plate moves northwest at ~7 cm/yr, each island is carried off the hotspot, volcanic activity stops, and erosion begins; a new island begins forming over the hotspot. The result is a time-progressive chain: Hawaii is over the hotspot now (active); Maui is ~5 Ma old (dormant, eroding); Oahu is ~2.5–3.7 Ma; Midway Atoll is ~28 Ma. The sharp bend in the chain between the Hawaiian and Emperor sections records a change in Pacific plate motion at ~47 Ma. Radiometric dating of the seamounts allows reconstruction of Pacific plate velocity history — one of the most important pieces of evidence supporting plate tectonic theory.",
        },
        {
          q: 'Water dissolved in subducting oceanic crust is credited with triggering flux melting in the mantle wedge above a subduction zone. Which of the following best describes the pressure-temperature pathway by which this water is released and how it lowers the solidus of the overlying mantle?',
          a: [
            'As the subducting slab descends, increasing temperature causes the oceanic crust to melt completely, releasing its water into the surrounding mantle as a bulk fluid; the water then rises by buoyancy and physically displaces mantle rock upward, reducing the pressure on that rock and triggering decompression melting — the same mechanism that operates at mid-ocean ridges',
            'Hydrous minerals (serpentine, chlorite, amphibole) in the subducting slab are stable at low pressures but undergo dehydration reactions as pressure and temperature increase with depth, releasing structurally bound water as a fluid or supercritical phase; this water migrates upward into the hot mantle wedge, where it dissolves into the silicate melt network, breaking Si-O bonds and lowering the solidus by 200–300°C (572°F), allowing partial melting of peridotite that would otherwise remain solid at that temperature and pressure',
            'The subducting slab carries seawater in pore spaces down to great depth; at 80–100 km (62 mi) depth this pore water is released by compaction and rises as steam; the steam heats the overlying mantle wedge by convection, raising the temperature above the solidus without any chemical change to the mantle rock; flux melting is therefore thermally driven, not chemically driven',
            'Water in the subducting slab reacts with mantle peridotite to form serpentinite directly in the mantle wedge; when the serpentinite later heats above its stability limit, it decomposes and releases silicic melt that mixes with the surrounding peridotite; flux melting at subduction zones therefore produces ultramafic melt, not the andesitic magma observed at arc volcanoes',
          ],
          correct: 1,
          explain: 'Option A conflates flux melting with decompression melting — the slab does not melt completely at subduction zone depths under normal conditions; hydrous mineral dehydration, not bulk slab melting, is the primary water-release mechanism, and the water lowers the solidus chemically, not by reducing pressure on the wedge. Option C correctly notes that pore water is released but incorrectly describes the mechanism as steam convection heating; the solubility of water in silicate melt is the key chemical effect — water depolymerises the silicate melt network by breaking bridging Si-O bonds, directly lowering the liquidus and solidus temperatures by 200–300°C (572°F), a purely chemical (not thermal) mechanism. Option D misidentifies the product — serpentinite in the wedge does form in some settings, but when it dehydrates it releases a water-rich fluid, not a silicic melt; and arc magmas are predominantly basaltic to andesitic, not ultramafic. The correct answer is B: the flux melting mechanism proceeds in two coupled steps. First, hydrous minerals (primarily serpentine, chlorite, tremolite, and phengite) that were incorporated into the oceanic crust and uppermost mantle during seafloor hydrothermal alteration become thermodynamically unstable as the slab reaches ~80–120 km (75 mi) depth; dehydration reactions release their structurally bound H₂O as a free fluid phase. Second, this fluid migrates upward (driven by buoyancy) into the mantle wedge above, where it dissolves into the peridotite melt fraction. The dissolved water weakens the polymerised silicate network of the incipient melt by breaking Si-O-Si bridging bonds, which lowers the temperature at which the rock begins to melt (the solidus) by 200–300°C (572°F). Mantle wedge peridotite that was sitting 200°C (392°F) below its dry solidus is now above its wet solidus and undergoes partial melting. This is why the position of arc volcanoes corresponds to the surface projection of the 80–120 km (75 mi) slab depth contour.',
        },
        {
          q: 'Partial melting of the mantle produces basaltic magma with roughly 45–52% SiO₂, even though the source rock (peridotite) contains only ~40–45% SiO₂. Why does the melt end up more silica-rich than the rock it came from, and what happens to the residual solid peridotite after melt is extracted?',
          a: [
            'The melt is more silica-rich than the source peridotite because silica physically separates from magnesium and iron under high pressure: SiO₂ molecules are lighter and rise preferentially into the melt fraction while the heavier MgO and FeO sink back into the residual solid; this gravitational silica segregation operates continuously throughout the mantle',
            'The melt is more silica-rich because the low-melting-point minerals in peridotite — primarily clinopyroxene and garnet, which are relatively silica-rich compared to olivine — melt preferentially at lower temperatures; since partial melting extracts these phases first, the melt is enriched in their components (SiO₂, Al₂O₃, CaO) relative to the bulk peridotite; the residual solid (the restite or depleted harzburgite) is left enriched in the high-melting-point, low-silica mineral olivine',
            'The melt is more silica-rich than the source because seawater infiltrating the upper mantle adds silica to the system; mid-ocean ridge volcanism involves seawater cycling through hot rock at hydrothermal systems, and the dissolved silica from seawater contributes to the basaltic composition of MORB; without seawater input, mantle melts would be ultramafic (komatiite-like)',
            'Partial melting does not produce a melt more silica-rich than the source — this is a misconception; the melt fraction always has exactly the same composition as the source rock, since melting is simply a phase change without chemical fractionation; the difference between basalt and peridotite in silica content reflects different tectonic settings, not the same source rock melting to different degrees',
          ],
          correct: 1,
          explain: 'Gravitational silica segregation (A) is not a real geochemical mechanism — SiO₂ is a structural component of silicate minerals, not a free molecule that physically separates by density; the silica enrichment of partial melts is controlled by mineral melting temperatures, not gravitational fractionation of chemical components. Seawater infiltration (C) does occur at mid-ocean ridges in hydrothermal systems, but the silica added by seawater-rock interaction is a minor effect on MORB composition; MORB is produced by melting of subseafloor peridotite, not by seawater silica input, and komatiites (ancient ultramafic lavas) formed in the Archean when the mantle was hotter, not from mantle that lacked seawater contact. Partial melting does produce a melt of different composition from the source (D is incorrect) — this is the fundamental basis of igneous petrology and is empirically demonstrated by comparing basalt compositions with their peridotite source rocks worldwide. The correct answer is B: partial melting is a process of differential fusion controlled by the melting temperatures (solidus) of individual mineral phases. Peridotite is composed primarily of olivine (~60%), orthopyroxene (~25%), clinopyroxene (~10%), and an aluminous phase (garnet or spinel, ~5%). Olivine (Mg₂SiO₄, ~40% SiO₂) has the highest melting point and is most refractory; clinopyroxene and the aluminous phase have lower melting points and are preferentially incorporated into the first melt fractions. Since clinopyroxene (~55% SiO₂) and garnet are richer in SiO₂ than olivine, the initial melt is enriched in silica relative to the bulk peridotite. At typical mantle melt fractions of 5–25%, the resulting basaltic melt contains 45–52% SiO₂ — noticeably more than the bulk peridotite source. The residual solid left behind — called harzburgite (olivine + orthopyroxene, depleted in clinopyroxene and garnet) or dunite (almost pure olivine at high melt fractions) — is depleted in silica, aluminium, calcium, and incompatible trace elements. These depleted residues are denser and more refractory than fertile peridotite and can remain in the mantle lithosphere for billions of years, recording ancient melt extraction events.',
        },
      ],
    },
  ],
}

export default originOfMagma
