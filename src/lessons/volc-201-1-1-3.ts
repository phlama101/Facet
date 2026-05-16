import { Flame, Mountain, Globe, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const magmaTypesTectonicSettings: Lesson = {
  id: 'volc-201-1-1-3',
  title: 'Magma Types & Tectonic Settings',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The relationship between tectonic setting and magma composition — from tholeiitic basalts at mid-ocean ridges to calc-alkaline andesites at subduction zones and alkalic lavas at hotspots.',
  sources: [
    { org: 'USGS',    title: 'Volcano Hazards Program — Magma Types and Tectonic Settings',     url: 'https://volcanoes.usgs.gov/vhp/magma.html' },
    { org: 'SI-GVP',  title: 'Smithsonian Global Volcanism Program — Eruption Characteristics', url: 'https://volcano.si.edu/' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed. — Igneous Rock Composition (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'AGU',     title: 'Journal of Geophysical Research — Subduction Zone Magmatism',     url: 'https://agupubs.onlinelibrary.wiley.com/journal/21562202' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Where a magma is born shapes what it becomes',
      body: `Walk into any introductory petrology course and you will encounter a single powerful idea: the place where magma originates determines its chemical fingerprint, and that fingerprint governs nearly everything — how it erupts, what hazard it poses, and what rock it leaves behind. A basalt erupted on the floor of the Pacific is chemically, physically, and behaviourally a different substance from the andesite pouring down the flanks of a Cascades stratovolcano or the rhyolite filling the Yellowstone caldera system. Understanding why requires connecting plate tectonics to magma geochemistry.

**The four main magma types by silica content.** Geologists classify magmas — and the rocks they crystallise into — primarily by their SiO₂ (silica) weight percent. **Basalt** contains less than 52% SiO₂, is dark-coloured (mafic), and is hot (1,000–1,300°C (2372°F)) with low viscosity (~10²–10³ Pa·s). **Andesite** ranges from 52–63% SiO₂, is intermediate in colour and temperature (800–1,000°C (1832°F)), and has moderate viscosity. **Dacite** spans 63–68% SiO₂ and is increasingly silicic, pale-coloured, and viscous. **Rhyolite** exceeds 68% SiO₂, erupts at temperatures as low as 700°C (though often higher), and can reach viscosities of ~10⁸ Pa·s — a factor of one million more viscous than basalt. This viscosity contrast is the single most important control on eruption style: low-viscosity basalt effuses in rivers of lava while rhyolite traps its gas until it explodes.

**Tectonic setting shapes mantle source and contamination path.** The silica content and trace-element signature of an erupted magma are not random — they are a direct consequence of (1) which part of the mantle or crust melted, (2) how much melting occurred, (3) what fluids or contaminants were added, and (4) how long the magma evolved before erupting. Mid-ocean ridges tap a depleted, dry upper mantle; subduction zones introduce slab-derived water and sediment into the wedge above, triggering wet melting and producing volatile-rich, silicic magmas; hotspots draw on deep, enriched mantle plumes; and continental rifts stretch and thin the lithosphere, allowing both low-degree alkalic melts and, where crust melts, high-silica rhyolites.

**Geochemical diagrams for classification.** Petrologists use several standard diagrams to classify lavas and identify their tectonic affinity. The **Total Alkali-Silica (TAS) diagram** plots Na₂O+K₂O versus SiO₂ and defines the basalt-andesite-dacite-rhyolite fields for volcanic rocks. The **AFM diagram** (A = Na₂O+K₂O, F = total FeO, M = MgO) distinguishes calc-alkaline trends (which curve away from the Fe apex — tholeiitic trend of iron enrichment) from calc-alkaline trends (which curve away before reaching the Fe apex). The **Jensen cation plot** is a refined version that resolves high-Mg basalt and komatiite fields. Together these tools allow geologists to assign a lava to its tectonic birthplace even millions of years after its eruption, using chemistry alone.

**Viscosity and eruption style.** Because SiO₂ polymerises the silicate melt into long chains and three-dimensional networks, each step up the silica ladder multiplies viscosity. A typical basalt at 1,200°C (2192°F) flows at ~10² Pa·s — comparable to thick motor oil. Andesitic magma at 1,000°C (1832°F) reaches ~10⁴–10⁵ Pa·s. Dacite approaches 10⁶–10⁷ Pa·s. Rhyolite, particularly when cooled toward its eruption temperature, can reach 10⁸ Pa·s or higher — a near-solid at human timescales. Dissolved water lowers viscosity by depolymerising the melt, but as rhyolitic magma ascends and pressure drops, that water exsolves, the melt stiffens, bubbles cannot escape, and magmatic fragmentation converts the magma to an explosive cloud of tephra and gas. Basalt, by contrast, lets its gas bubble out gently, producing lava fountains and effusive flows rather than explosive columns.`,
      keyTerms: [
        {
          term: 'MORB (Mid-Ocean Ridge Basalt)',
          def: `Tholeiitic basalt erupted at mid-ocean spreading centres. Depleted in incompatible trace elements (low K, Rb, Ba) relative to primitive mantle because the sub-ridge asthenosphere has been repeatedly melted and stripped of these elements. SiO₂ ~49–52%. Very low viscosity. Constitutes the upper oceanic crust worldwide and is Earth\'s most voluminous magma type. N-MORB (normal) is more depleted than E-MORB (enriched, near hotspots).`,
        },
        {
          term: 'Calc-alkaline series',
          def: 'A magmatic suite — basalt → andesite → dacite → rhyolite — characteristic of subduction zone arcs. Distinguished by: (1) moderate iron enrichment during differentiation (iron plateau rather than the strong enrichment of the tholeiitic series); (2) relatively high Al₂O₃; (3) high volatile (H₂O) content inherited from dehydrating subducted slab; (4) intermediate to high SiO₂. On the AFM diagram, the calc-alkaline trend curves away from the Fe apex. Associated with explosive, hazardous volcanism.',
        },
        {
          term: 'OIB (Ocean Island Basalt)',
          def: 'Basalt erupted at oceanic hotspots (e.g., Hawaii, Réunion, Canary Islands) above deep mantle plumes. Enriched in incompatible trace elements (high K, Rb, Nb, Ta) relative to MORB, reflecting a less-depleted, deep mantle source that has not been as extensively melted over geological time. Two varieties: tholeiitic OIB (high-volume shield-building, e.g., Kilauea) and alkalic OIB (lower-degree melting, enriched; e.g., late-stage post-shield eruptions). Distinguished from MORB on spider diagrams by characteristic Nb-Ta enrichment.',
        },
        {
          term: 'Tholeiitic differentiation',
          def: 'A differentiation trend in which the residual melt becomes strongly enriched in iron (FeO*) during early fractional crystallisation before eventually turning toward silicic compositions. Expressed as a pronounced Fe-enrichment limb on the AFM diagram. Characteristic of magmas in low-pressure, anhydrous (dry) systems: MOR, oceanic hotspots, and some continental rifts. Contrasts with calc-alkaline differentiation in subduction zones where dissolved water stabilises Fe-oxides early, suppressing iron enrichment.',
        },
        {
          term: 'Bimodal volcanism',
          def: 'An eruption suite dominated by two compositional end-members — mafic (basalt) and silicic (rhyolite) — with a conspicuous gap in intermediate (andesite/dacite) compositions. Characteristic of continental rift zones (e.g., Basin and Range, East African Rift). Basalt intrudes from below, heating the lower crust and generating rhyolitic partial melts; the two magmas rarely mix because of the extreme viscosity contrast. The absence of abundant andesite distinguishes bimodal suites from subduction zone calc-alkaline suites.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four tectonic settings, four magmatic signatures',
      body: `**Mid-ocean ridges — the tholeiitic factory.** At divergent boundaries, decompression melting of the upwelling asthenosphere produces tholeiitic MORB. The sub-ridge mantle is depleted in incompatible elements (K, Rb, Ba, Nb) because it has been tapped repeatedly over Earth\'s history. Melting degrees are high (~15–25% partial melting), producing relatively uniform basalt with SiO₂ ~50% and very low water contents (<0.1 wt%). The result is a high-temperature, low-viscosity magma that erupts effusively, building pillow lavas on the seafloor and creating the upper oceanic crust. On the AFM diagram, MORB differentiates along the tholeiitic trend, reaching Fe-rich compositions (ferrobasalt) before any andesite appears.

**Subduction zones — calc-alkaline diversity.** The dominant volcanic hazard setting on Earth. As oceanic lithosphere descends, it dehydrates: serpentinite, amphibole, and hydrous minerals in the slab release water into the overlying mantle wedge. This water dramatically lowers the solidus of the peridotite wedge, triggering wet melting at temperatures 100–200°C (180–360°F) below the dry solidus. The primary melt is hydrous basalt or basaltic andesite, but as it ascends through 30–50 km (31 mi) of arc crust, fractional crystallisation, assimilation of crustal material, and mixing drive the magma toward andesitic, dacitic, and rhyolitic compositions. Water content (up to 6 wt% dissolved) stabilises magnetite early in crystallisation, suppressing iron enrichment and producing the calc-alkaline trend. The result is the most compositionally diverse volcanic system on Earth — Kilauea\'s effusive basalt is replaced here by the full spectrum from basaltic andesite to Plinian rhyolite.

**Hotspots — enriched plumes, dual chemistry.** Mantle plumes sourced from the deep mantle (possibly the core-mantle boundary) carry geochemically enriched material — higher concentrations of incompatible elements (K, Nb, Ta, Ti), elevated ³He/⁴He ratios, and distinct Sr-Nd-Pb isotopic signatures reflecting ancient recycled material or primitive undepleted mantle. Where plumes impinge on oceanic lithosphere (Hawaii, Réunion, Galapagos), the primary magmas are OIB tholeiites during the main shield-building phase and alkalic basalts during post-shield and rejuvenated stages when melting degree decreases. Where plumes interact with thick continental lithosphere (Yellowstone, Afar), extensive crustal melting produces large volumes of rhyolite alongside the basalt, creating a bimodal character distinct from subduction suites.

**Continental rifts — bimodal suites.** Where continents are pulled apart, decompression melting produces small volumes of alkalic basalt with low melting degrees. The thermal input from repeated basaltic intrusions melts the lower continental crust, generating rhyolite. Because the two end-member magmas rarely mix, intermediate compositions are scarce — defining bimodal volcanism. The East African Rift (Afar, Kenya, Ethiopia) and the Basin and Range Province (western North America) are classic examples. As rifting proceeds toward ocean opening, the magmatic signature evolves from alkalic continental rift basalts toward tholeiitic MORB — a geochemical record of lithospheric thinning preserved in the rift stratigraphy.`,
      cards: [
        {
          name: 'Mid-Ocean Ridge: Tholeiitic MORB',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Decompression melting of depleted asthenosphere; ~15–25% partial melt. SiO₂ ~50%, very dry (<0.1 wt% H₂O), Fe-enriching tholeiitic trend. High T (1,200°C (2192°F)+), low viscosity (~10² Pa·s). Effusive pillow lavas. Forms oceanic crust. Most voluminous magma on Earth.',
          examples: 'Mid-Atlantic Ridge (slow-spreading, pillow basalt, hydrothermal black smokers) · East Pacific Rise (fast-spreading, sheet flows) · Iceland (MOR above Icelandic plume — anomalously thick crust, E-MORB compositions)',
        },
        {
          name: 'Subduction Zone: Calc-Alkaline Arc',
          icon: Flame,
          color: BRAND.ruby,
          desc: 'Slab dehydration fluxes water into mantle wedge, triggering wet melting 100–200°C (180–360°F) below dry solidus. Calc-alkaline series: basalt→andesite→dacite→rhyolite. High H₂O (up to 6 wt%): early magnetite stabilisation suppresses Fe enrichment. Explosivity increases with SiO₂. Most hazardous volcanic setting on Earth.',
          examples: 'Soufrière Hills, Montserrat (andesite lava dome, block-and-ash flows) · Pinatubo 1991 (dacite, VEI 6, 5 km³ (1.2 cu mi), global cooling 0.5°C (1°F)) · Cascade Arc, USA (andesite–dacite stratovolcanoes: Rainier, Hood, Shasta)',
        },
        {
          name: 'Hotspot: OIB & Alkalic Lavas',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Deep enriched mantle plume; OIB enriched in K, Nb, Ta vs. MORB. Main shield phase: tholeiitic OIB (high-degree melt, high-volume). Post-shield: alkalic basalt (lower-degree melt, lower-volume). High ³He/⁴He — primitive mantle signature. Over continents: crustal melting adds rhyolite → bimodal.',
          examples: 'Kilauea, Hawaii (tholeiitic OIB, ~0.1 km³ (0.024 cu mi)/yr, lava tubes, effusive) · Piton de la Fournaise, Réunion (tholeiitic, annual eruptions) · Yellowstone (hotspot over continent — bimodal basalt + rhyolite caldera system, 640 ka supereruption 1,000 km³ (240 cu mi))',
        },
        {
          name: 'Continental Rift: Bimodal Suite',
          icon: Mountain,
          color: BRAND.amethyst,
          desc: 'Lithospheric extension → decompression melting → alkalic basalt (low-degree melt). Basaltic intrusions heat lower crust → rhyolitic partial melts. Bimodal gap: basalt and rhyolite coexist; andesite scarce because extreme viscosity contrast prevents mixing. Geochemical transition toward MORB as rifting matures.',
          examples: 'East African Rift (Afar, Erta Ale basalt lava lake; Ethiopian rift rhyolite calderas; bimodal volcanics from Kenya to Afar) · Basin and Range Province, USA (alkali basalt cinder cones + rhyolite domes) · Taupo Volcanic Zone, New Zealand (back-arc rift, prolific rhyolite, Taupo 26.5 ka = 530 km³ (127 cu mi))',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From mantle source to eruption style',
      body: 'Trace how tectonic setting controls the mantle source tapped, the melting process, magma composition, and ultimately eruption style. Each node shows a key step in the chain from plate tectonics to volcanic hazard.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'A six-node flow showing how tectonic setting determines mantle source, melting mechanism, magma composition, viscosity, and eruption style — from divergent boundaries and hotspots to subduction arcs and continental rifts.',
        nodes: [
          {
            id: 'setting',
            label: 'Tectonic Setting',
            description: 'The tectonic context determines everything downstream. Four primary settings produce distinct magmas: (1) mid-ocean ridges (divergent boundaries) — decompression melting of upwelling asthenosphere; (2) subduction zones (convergent boundaries) — slab dehydration triggers wet mantle wedge melting; (3) hotspots — deep plume-driven melting; (4) continental rifts — lithospheric extension causes decompression melting and lower-crustal partial melting.',
            color: BRAND.accent,
          },
          {
            id: 'source',
            label: 'Mantle/Crustal Source',
            description: 'Each setting taps a different geochemical reservoir. MOR: depleted MORB-source mantle (low K, Rb, Nb) — repeatedly melted over geological time. Subduction zones: depleted wedge peridotite fluxed with slab-derived H₂O and sediment (high volatile, high Ba/Nb). Hotspots: enriched deep-mantle plume (high K, Nb, Ta, ³He/⁴He). Continental rifts: subcontinental lithospheric mantle ± lower crustal partial melts (high SiO₂ component). Each source imprints a distinctive trace-element and isotopic fingerprint on the magma.',
            color: BRAND.jade,
          },
          {
            id: 'melting',
            label: 'Melting Mechanism',
            description: 'How melting is triggered controls melt fraction and composition. Decompression melting (MOR, hotspots, rifts): upward movement of hot mantle crosses the solidus as pressure drops; high melt fractions (15–25%) at ridges, lower fractions (<5%) at rifts. Flux melting (subduction): water from the dehydrating slab lowers the mantle wedge solidus by 100–200°C (180–360°F), triggering melting at depths of 80–130 km (81 mi). Higher water content in the primary melt leads to more oxidised, more silicic magmas during subsequent evolution.',
            color: BRAND.gold,
          },
          {
            id: 'composition',
            label: 'Magma Composition (SiO₂)',
            description: 'Melting mechanism and source determine primary melt SiO₂. MOR decompression: ~49–52% SiO₂ (basalt). Hotspot decompression: ~45–52% SiO₂ (tholeiitic to alkalic basalt). Subduction flux melting: primary basalt ~50–53%, but fractional crystallisation + crustal assimilation during ascent drives the magma to andesite (52–63%), dacite (63–68%), or rhyolite (>68%). Continental rift: alkalic basalt (<52%) + rhyolite (>68%) with a compositional gap — the bimodal suite. Classification diagrams (TAS, AFM, Jensen) assign each lava to its setting.',
            color: BRAND.coral,
          },
          {
            id: 'viscosity',
            label: 'Viscosity & Volatile Content',
            description: 'SiO₂ polymerises the silicate melt into chains and networks, exponentially increasing viscosity: basalt ~10²–10³ Pa·s; andesite ~10⁴–10⁵ Pa·s; dacite ~10⁶–10⁷ Pa·s; rhyolite ~10⁸ Pa·s. Dissolved H₂O lowers viscosity by breaking Si-O bonds — but as magma ascends and pressure drops, water exsolves, stiffening the melt and nucleating bubbles. High-viscosity magmas trap gas bubbles; when bubble pressure exceeds melt tensile strength, magmatic fragmentation occurs. Low-viscosity basalt lets gas escape continuously, preventing pressure build-up.',
            color: BRAND.amethyst,
          },
          {
            id: 'eruption',
            label: 'Eruption Style & Hazard',
            description: 'Viscosity and volatile content determine eruption character. Basalt (MOR/hotspot): effusive lava flows, lava fountains, Strombolian bursts — low explosive hazard, predictable flow paths (Kilauea 2018: 1.2 km³ (0.29 cu mi) basalt, 1 fatality). Andesite/dacite (subduction): dome-forming, block-and-ash flows, sub-Plinian to Plinian columns — high hazard (Pinatubo 1991: VEI 6, 800 deaths). Rhyolite (continental/subduction): Plinian to Ultra-Plinian, caldera-forming supereruptions — catastrophic (Yellowstone 640 ka: ~1,000 km³ (240 cu mi)). Bimodal (rift): alternating effusive basalt and explosive rhyolite.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'setting', to: 'source', label: 'determines reservoir tapped' },
          { from: 'source', to: 'melting', label: 'source composition + fluid input' },
          { from: 'melting', to: 'composition', label: 'melt fraction → SiO₂ range' },
          { from: 'composition', to: 'viscosity', label: 'SiO₂ controls polymerisation' },
          { from: 'viscosity', to: 'eruption', label: 'viscosity + volatiles → style' },
          { from: 'setting', to: 'eruption', label: 'tectonic context sets hazard profile' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Geochemists analysing lavas from a Pacific island chain find strongly depleted trace-element patterns (very low K, Rb, Ba, Nb relative to primitive mantle), SiO₂ of ~50%, and ³He/⁴He ratios indistinguishable from MORB. The lavas show a strong iron-enrichment trend on the AFM diagram. Which tectonic setting and magma series best explains these characteristics?',
          a: [
            'A continental rift setting producing bimodal alkalic basalt; alkalic basalts are always depleted in incompatible elements and show iron enrichment on the AFM diagram; the low ³He/⁴He confirms a depleted lithospheric mantle source beneath the rift',
            'A subduction zone arc producing calc-alkaline basaltic andesite; the depleted trace-element pattern reflects slab-derived fluids that strip incompatible elements from the wedge; the Fe-enrichment trend on the AFM diagram is characteristic of calc-alkaline series undergoing early iron enrichment before magnetite crystallisation',
            'A mid-ocean ridge setting producing tholeiitic MORB; the depleted incompatible-element signature reflects a MORB-source asthenosphere that has been repeatedly partially melted and stripped of incompatible elements; the Fe-enrichment trend on the AFM diagram is the tholeiitic differentiation series; MORB-like ³He/⁴He confirms a depleted upper-mantle source rather than a deep enriched plume',
            'A hotspot setting producing enriched OIB; hotspot plumes are always characterised by strongly depleted trace-element patterns; the high ³He/⁴He relative to the mantle average indicates a deep primitive mantle source that has never been melted, making the depletion pattern diagnostic of OIB',
          ],
          correct: 2,
          explain: "Continental rift alkalic basalts (A) are characterised by enriched — not depleted — incompatible-element patterns; low-degree melting of the subcontinental lithospheric mantle concentrates incompatibles in the melt. They also show low ³He/⁴He, not MORB-like values. Subduction zone calc-alkaline lavas (B) show characteristic spidergrams with a negative Nb-Ta anomaly (slab fluid signature) and a positive Ba/Nb ratio; they do not show MORB-like flat depleted patterns; and the AFM calc-alkaline trend curves away from the Fe apex — it does not produce strong Fe enrichment. OIB (D) is the opposite of the described pattern: OIB is enriched in K, Rb, Nb, Ta, and Ti relative to MORB and has elevated ³He/⁴He (often 8–30 RA vs. MORB ~8 RA and continental ~0.1 RA); the question states ³He/⁴He indistinguishable from MORB, ruling out a deep plume enriched source. The correct answer is C: MORB. The MORB source (depleted upper asthenosphere) is characterised by low concentrations of incompatible elements — K, Rb, Ba, Nb — because it has been repeatedly melted and those elements have been preferentially partitioned into earlier melts over Earth\'s history. SiO₂ ~50%, Fe-enriching tholeiitic differentiation on the AFM diagram (MORB differentiates to ferrobasalt before any andesite), and MORB-like ³He/⁴He are the three diagnostic fingerprints. This combination unambiguously places the lavas at a mid-ocean spreading centre or in a back-arc basin environment.",
        },
        {
          q: `The 1991 eruption of Mount Pinatubo (Philippines) produced ~5 km³ (1.2 cu mi) of dacite (SiO₂ ~65–67%) in a VEI 6 Plinian eruption, while the contemporaneous 1990–2018 activity at Kilauea (Hawaii) produced basalt (SiO₂ ~50%) in effusive lava flows. Both eruptions released large volumes of SO₂. Why did Pinatubo\'s eruption style differ so dramatically from Kilauea\'s despite both releasing significant volatiles?`,
          a: [
            'The difference is primarily due to eruption rate: Pinatubo erupted its magma much more rapidly than Kilauea, and the high eruption rate itself caused the magma to fragment regardless of viscosity; if Kilauea had erupted at the same rate as Pinatubo it would also have produced a Plinian column',
            'The difference is primarily due to tectonic setting determining water content: Pinatubo is at a subduction zone where slab dehydration delivers 3–6 wt% dissolved H₂O into the arc magma; this high water content dramatically reduces viscosity during magma storage, but when the dacite ascends rapidly and depressurises, the water exsolves, the viscosity increases by several orders of magnitude, bubbles cannot escape through the stiffened melt, and magmatic fragmentation occurs; Kilauea\'s basalt, from a hotspot, has very low dissolved H₂O (<0.5 wt%) and low SiO₂ — its already-low viscosity allows bubbles to rise and escape without fragmenting the melt',
            'Both Pinatubo and Kilauea erupt chemically similar magmas; the difference in eruption style is controlled entirely by the conduit geometry: Pinatubo had a sealed conduit capped by a summit lava dome that amplified pressure; Kilauea has an open conduit system with a summit lava lake that acts as a pressure valve; neither SiO₂ content nor tectonic setting plays a significant role',
            'The eruption style difference reflects the depth of the magma chamber: Pinatubo\'s magma chamber was shallow (3–8 km (5.0 mi) depth), where high lithostatic pressure forced volatile exsolution rapidly; Kilauea\'s magma chamber is deeper (30–60 km (37 mi)), where volatiles remain dissolved; shallow chambers always produce Plinian eruptions regardless of composition',
          ],
          correct: 1,
          explain: "Eruption rate (A) is partially correlated with explosive intensity, but it is a consequence rather than a primary cause; the reason Pinatubo\'s eruption rate itself was explosive is the high viscosity of dacitic magma preventing degassing at depth. Eruption rate alone cannot produce Plinian columns from basaltic magma — basaltic fire fountains represent high eruption rates but not Plinian fragmentation. Conduit geometry (C) plays a minor role in specific eruption dynamics but both Kilauea and Pinatubo have had open and closed conduit phases; the statement that both erupt chemically similar magmas is factually false — basalt (50% SiO₂) and dacite (65–67% SiO₂) differ fundamentally. Magma chamber depth (D) is not the primary control: Kilauea\'s summit magma reservoir is actually at ~2–4 km (2.5 mi) depth, similar to or shallower than arc chambers; chamber depth alone does not determine explosive style. The correct answer is B: the interplay of tectonic-setting-controlled volatile content and SiO₂-controlled viscosity. Subduction zone magmas acquire large amounts of water (3–6 wt% H₂O) from the dehydrating slab — far more than MORB or OIB (~0.1–0.5 wt%). In storage, dissolved water depolymerises the silicate melt and reduces viscosity, keeping the system mobile. But when this water-rich dacitic magma ascends and pressure falls below the solubility limit, water exsolves explosively. The simultaneous loss of the plasticising effect of dissolved water causes the melt viscosity to spike by orders of magnitude. Bubbles now cannot rise through the stiffened melt; pressure builds; the melt shatters into pyroclasts — Plinian fragmentation. Kilauea\'s basalt has low SiO₂ (little polymerisation) and low water — its viscosity is already orders of magnitude lower than dacite even before water exsolution, and bubbles escape passively.",
        },
        {
          q: 'On an AFM (Alkalis-FeO-MgO) ternary diagram, volcanic suites from the Cascades arc (a subduction zone) and the Mid-Atlantic Ridge both start at similar primitive basaltic compositions near the MgO apex, but their differentiation trends diverge sharply. Describe the two trends and explain the geochemical process responsible for the difference.',
          a: [
            'Both suites follow identical Fe-enriching tholeiitic trends because both are derived from partial melting of the upper mantle; the AFM diagram cannot distinguish subduction zone from mid-ocean ridge magmas, and the two trends only appear to diverge because of different analytical methods used by different research groups studying each area',
            'The Cascades suite trends toward the A (alkali) apex, reflecting increasing K and Na during differentiation due to assimilation of K-rich continental crust; the MAR suite trends toward the Fe apex because oceanic magmas lack continental crust to assimilate; both suites differentiate by fractional crystallisation, but the source of alkali enrichment differs',
            'The Cascades suite shows iron enrichment (tholeiitic) and the Mid-Atlantic Ridge suite shows iron depletion (calc-alkaline); subduction zones always produce iron-rich differentiation sequences because the slab delivers iron-rich fluids into the wedge; mid-ocean ridges produce calc-alkaline sequences because cold seawater circulating through the crust removes iron by hydrothermal alteration',
            'The Mid-Atlantic Ridge suite follows the tholeiitic trend: strong Fe enrichment before any silica enrichment, driven by fractional crystallisation of olivine and pyroxene from anhydrous basalt without early magnetite stabilisation, producing iron-rich ferrobasalt; the Cascades suite follows the calc-alkaline trend: differentiation curves away from the Fe apex toward the A corner at intermediate compositions, because the high dissolved water content of subduction zone magmas stabilises magnetite (Fe₃O₄) early in crystallisation, removing iron from the melt and suppressing Fe enrichment',
          ],
          correct: 3,
          explain: "Both suites following identical trends (A) is factually incorrect and contradicted by decades of published geochemical data; the AFM diagram was specifically developed to discriminate tholeiitic from calc-alkaline differentiation trends, and the distinction is well-established. The Cascades suite trending toward the alkali apex (B) misidentifies the calc-alkaline trend: the calc-alkaline trend does not reach the alkali apex — it curves away from the Fe apex at intermediate FeO/MgO ratios (a characteristic inflection point) without necessarily trending strongly toward high alkalis. MOR magmas do not avoid continents — the distinction is about oxidation state and water content, not crustal assimilation. Option C inverts the correct identification: MOR tholeiites show Fe enrichment; subduction zone calc-alkaline suites show Fe suppression. The correct answer is D: the key geochemical process is the role of dissolved water in controlling the early crystallisation of magnetite. Mid-ocean ridge basalts are generated from dry depleted mantle with very little dissolved H₂O. Under these anhydrous, reducing conditions, magnetite (Fe₃O₄) does not crystallise early; instead olivine and pyroxene dominate the early crystallisation sequence. Because these minerals are Mg-rich and Fe-poor relative to the melt, the residual melt becomes progressively enriched in iron — the tholeiitic Fe-enrichment trend on the AFM diagram. In subduction zone arc magmas, dissolved water (3–6 wt%) raises the oxygen fugacity of the melt. This stabilises magnetite as an early crystallising phase. Magnetite is Fe₃O₄ — ~72% iron by weight. Its early removal drains iron from the melt before Fe-enrichment can develop, causing the differentiation trend to curve away from the Fe apex at moderate FeO/MgO ratios — the diagnostic calc-alkaline inflection. The result is more silicic (andesitic, dacitic) residual melts than the iron-enriched ferrobasalt endpoint of tholeiitic differentiation.",
        },
        {
          q: 'Geologists mapping the Basin and Range Province of the western USA find two abundant rock types: (1) alkali basalt cinder cones and lava flows, and (2) rhyolite domes and ignimbrites. Andesite and dacite are rare. What tectonic setting produces this bimodal distribution, and why is the intermediate compositional gap present?',
          a: [
            'The bimodal distribution is characteristic of a continental rift zone; crustal extension allows small-degree partial melting of the subcontinental lithospheric mantle, producing alkali basalt; basaltic intrusions into the lower crust provide heat that drives partial melting of felsic crustal rocks, generating rhyolite; the two magma types rarely mix because the extreme viscosity contrast (~10⁶× difference between basalt and rhyolite at the same temperature) prevents significant hybridisation, leaving a compositional gap at andesitic/dacitic compositions',
            'The bimodal distribution reflects a subduction zone arc where the slab is very steeply dipping; steep subduction causes the arc to shift compositionally, producing basalt and rhyolite instead of the normal andesite; intermediate compositions are absent because the steep slab angle prevents the partial pressures of water needed to produce andesite',
            'Bimodal basalt-rhyolite suites are diagnostic of hotspot volcanism; the Hawaiian Islands show an identical bimodal distribution with shield basalts and later alkalic rhyolites; the Basin and Range is underlain by the Yellowstone hotspot track, which produces basalt where the plume directly melts the mantle and rhyolite where it melts the overlying continental crust',
            'The bimodal distribution reflects magma mixing: when basalt and granitic country rock mix in equal proportions, the hybrid composition is rhyolite; when basalt mixes with sedimentary rock, it produces andesite; the absence of andesite in the Basin and Range shows that basalt is mixing only with crystalline basement, not with sedimentary cover',
          ],
          correct: 0,
          explain: "The correct answer is A: continental rift zones produce bimodal suites through two distinct, largely independent processes. First, decompression melting during lithospheric extension taps the subcontinental lithospheric mantle at low melt fractions (<5%), producing alkali-enriched basalt (low-degree melts concentrate incompatible elements). Second, the sustained heat flux from basaltic intrusions into the lower crust eventually raises crustal temperatures above the water-saturated solidus of felsic crustal rocks, generating rhyolitic partial melts. These two magma types — hot, low-viscosity basalt and cooler, extremely high-viscosity rhyolite — coexist in the same volcanic province but are effectively immiscible at geological timescales. The viscosity contrast (~10⁶-fold) means that even when the two magmas contact each other in a conduit, convective mixing is inhibited; they tend to erupt separately rather than hybridising to produce andesite. This creates the characteristic bimodal gap. Steep subduction (B) does shift the volcanic arc away from the trench and can affect the degree of crustal contamination, but it does not mechanically produce a bimodal gap; subduction zones produce calc-alkaline series (basalt through rhyolite) regardless of slab angle; there is no mechanism by which slab dip creates a gap at intermediate compositions. The Yellowstone hotspot (C) does produce bimodal volcanism, but the Basin and Range Province as a whole is a continental extensional rift system, not a hotspot track; the Snake River Plain represents the Yellowstone track, but the broader Basin and Range with its hundreds of alkali basalt and rhyolite centres reflects rifting, not a single hotspot. Magma mixing (D) does not work this way: mixing basalt with any crustal rock in equal proportions produces an intermediate hybrid, not rhyolite; rhyolite is generated by partial melting of crustal rocks, not by mixing; and the absence of andesite is the opposite of what mixing would produce — mixing would generate abundant intermediate compositions. By contrast, subduction zone calc-alkaline suites span the full compositional range because fractional crystallisation within arc crust systematically evolves basaltic primary melts through andesite and dacite to rhyolite via crystal removal — a continuous process rather than two discrete melt sources.",
        },
        {
          q: 'A volcanologist is shown two geochemical spider (multi-element normalised) diagrams for anonymous volcanic rocks. Rock A shows a smooth, gently sloping pattern enriched in incompatible elements (high K, Rb, Nb, Ba relative to primitive mantle) and a high ³He/⁴He ratio. Rock B shows a strongly depleted pattern with a prominent negative Nb-Ta anomaly (Nb and Ta are low relative to adjacent elements K and La) and a high Ba/Nb ratio. Which assignment of tectonic setting is correct?',
          a: [
            'Rock A is MORB from a mid-ocean ridge (the enriched pattern reflects the depleted mantle source); Rock B is OIB from a hotspot (the negative Nb anomaly reflects plume interaction with the overlying lithosphere)',
            'Rock A is a continental rift alkalic basalt or OIB from a hotspot (the enriched incompatible-element pattern and high ³He/⁴He reflect a deep, less-depleted mantle source — primitive or enriched plume material); Rock B is an arc basalt or basaltic andesite from a subduction zone (the negative Nb-Ta anomaly is the classic slab fluid signature — slab-derived aqueous fluids and sediment melts enrich Ba, K, and Pb relative to the high-field-strength elements Nb and Ta, which are retained in residual slab phases such as rutile)',
            'Rock A is a subduction zone arc lava (high K and Ba reflect slab fluid addition to the mantle wedge); Rock B is MORB (the depleted pattern with low Nb reflects the depleted MORB mantle source; the apparent Nb anomaly is an artefact of normalisation to primitive mantle rather than a true geochemical signature)',
            'Both rocks are from the same tectonic setting — a mature island arc; Rock A represents the early shield-building phase with enriched OIB-like compositions; Rock B represents the later arc phase after the plume waned and subduction began to contribute slab fluids; the transition from enriched to depleted-with-Nb-anomaly records the tectonic evolution of a single hotspot-to-arc system',
          ],
          correct: 1,
          explain: "Option A inverts the key identifications: MORB is depleted — its spider diagram shows low concentrations of incompatible elements relative to primitive mantle, not a smooth enriched pattern. The MORB-source asthenosphere has been repeatedly melted and stripped of incompatible elements. OIB does have enriched patterns, but a negative Nb-Ta anomaly is not a feature of hotspot lavas — Nb-Ta anomalies are the diagnostic fingerprint of subduction. Option C partially recognises that high K and Ba can reflect slab fluids, but it then misidentifies Rock B as MORB: MORB does not have a negative Nb-Ta anomaly — in fact, Nb is slightly enriched relative to primitive mantle in MORB on many normalisation schemes, and the Nb-Ta anomaly is specifically absent from MORB; calling the Nb anomaly an artefact of normalisation contradicts the extensive literature on this subject. Option D is an invented scenario with no geological basis; the transition from OIB to subduction arc compositions in a single edifice would require the tectonic setting to change beneath the volcano, which requires millions of years. The correct answer is B. The negative Nb-Ta anomaly is the single most diagnostic feature of subduction zone magmatism in spider diagrams. It arises because Nb and Ta are high-field-strength elements (HFSE) that are strongly retained in rutile (TiO₂ with Nb-Ta substitution) in the subducting oceanic crust even during high-pressure dehydration and partial melting. The slab-derived fluid or melt that fluxes the mantle wedge is therefore depleted in Nb and Ta but enriched in fluid-mobile elements: Ba, K, Rb, Sr, Pb. The wedge peridotite melts with this Nb-Ta-poor, Ba-K-rich signature imprinted, producing the characteristic negative Nb-Ta anomaly flanked by elevated Ba and K on the spider diagram. Rock A\'s smooth enriched pattern with high ³He/⁴He (indicating a less-degassed, deep mantle source — primitive or lower mantle plume material) is diagnostic of OIB or continental rift alkalic basalt, both of which tap enriched mantle sources with no subduction fluid influence.",
        },
      ],
    },
  ],
}

export default magmaTypesTectonicSettings
