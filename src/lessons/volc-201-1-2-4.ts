import { Flame, Layers, Globe, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const subductionZoneGeochemistry: Lesson = {
  id: 'volc-201-1-2-4',
  title: 'Subduction Zone Geochemistry & Arc Magmas',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The chemical signature of subduction — how fluids and melts from the descending slab metasomatize the mantle wedge and generate the distinctive geochemical fingerprint of arc volcanoes.',
  sources: [
    { org: 'USGS',    title: 'Cascades Volcano Observatory — Arc Magmatism and Subduction',          url: 'https://www.usgs.gov/observatories/cvo' },
    { org: 'AGU',     title: 'Tatsumi & Eggins — Subduction Zone Magmatism (Blackwell, 1995)',       url: 'https://agupubs.onlinelibrary.wiley.com' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 10 — Igneous Rocks and Tectonics (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'EarthChem', title: 'PetDB — Global Compilation of Arc Lava Geochemistry',                url: 'https://www.earthchem.org/petdb' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Reading the slab\'s chemical message`,
      body: `When an oceanic plate descends into Earth\'s mantle at a subduction zone, it does not simply disappear. The slab carries a chemical cargo — water bound into hydrous minerals, marine sediment rich in incompatible elements, altered ocean crust bearing sulfate and carbonate — that it releases progressively as it heats and compresses on its journey downward. Those released fluids and melts rise buoyantly into the overlying mantle wedge, transforming it chemically (a process called **mantle wedge metasomatism**) and ultimately generating the distinctive magmas that feed the world\'s most explosive volcanoes: the arc stratovolcanoes of the Cascades, the Andes, Japan, and Kamchatka.

The geochemical signature of arc lavas is unmistakable on any **multi-element spider diagram** — a plot of element concentrations normalized to a reference (usually primitive mantle). Arc lavas show striking enrichment in **fluid-mobile elements** (Ba, K, Rb, Sr, Pb) that are easily scavenged by hydrous fluids and carried up from the slab, but equally striking depletion in **high-field-strength elements** (HFSE: Nb, Ta, Ti) that are relatively insoluble in aqueous fluids and remain locked in residual minerals like rutile in the slab. This characteristic pattern — the **Nb–Ta trough** flanked by enriched Ba and K — is the single most diagnostic fingerprint of subduction-related magmatism and can be used to identify ancient arc terranes in the geological record.

**Slab dehydration** proceeds sequentially as the slab descends. At 50–150 km depth, serpentinite breaks down releasing large volumes of water and Ba, K, Rb, and Sr; at 70–200 km, chlorite and amphibole (particularly hornblende and pargasite) dehydrate, delivering further fluid-mobile elements into the wedge; at >200 km depth, phengite — a potassium-rich white mica — is the last major hydrous mineral to break down, explaining why arc lavas above deeper slabs tend to be enriched in K₂O (the **K–h relationship**, where K content at a fixed SiO₂ increases with slab depth h). This successive mineral breakdown creates a depth-dependent chemical factory: different arc segments above steeper or shallower slab dips carry distinct geochemical imprints traceable to specific mineral reactions.

Two distinct fluid/melt components mix to generate arc magmas. The dominant component in most arcs is an **aqueous fluid** derived from slab dehydration, rich in fluid-mobile elements but poor in HFSE; this fluid fluxes the mantle wedge, lowering the solidus and inducing **flux melting** without requiring elevated temperature. At subduction zones where the slab is young and hot (< ~25 Ma), or where the slab dips steeply and heats rapidly, the oceanic crust itself can melt — producing **adakitic** melts (named after Adak Island in the Aleutians). Adakites have high Sr/Y ratios (commonly >40), low Y and Yb concentrations (because garnet in the high-pressure residue retains these elements), and slightly elevated MgO from reaction with the mantle wedge en route. In the Andes, Nevado del Ruiz (Colombia) overlies a normally configured arc system; the Austral Volcanic Zone of southern Chile shows adakitic geochemistry where the young Chile Ridge is being subducted. In Archean times, when the mantle was hotter and oceanic crust was thicker, slab melting was more widespread, and the resulting adakitic melts — now preserved as **Tonalite–Trondhjemite–Granodiorite (TTG)** suites — form the cores of most Archean cratons.

The **calc-alkaline series** dominates most arc settings and is defined by a trend toward silica enrichment with moderate iron enrichment followed by iron depletion at high SiO₂ — the result of early crystallisation of magnetite, which removes iron and causes the melt to evolve toward the silica-rich calc-alkaline trend (the **Miyashiro criterion**). Calc-alkaline andesites and dacites, intermediate in SiO₂ (55–65%), are the most common arc eruptive products at volcanoes like Mount St. Helens and Mount Rainier in the Cascades, and Nevado del Ruiz in the Andes. **Tholeiitic** arcs — where iron enrichment continues to higher SiO₂ — occur where the subducted slab is young or the arc extends above a backarc spreading centre; the Izu–Bonin arc and parts of the Aleutians show this trend. **Ratios such as Ba/Nb and Ba/La** serve as quantitative proxies for the slab fluid contribution: high Ba/Nb (arc lavas typically >20; MORB typically ~2–4) indicates a slab fluid imprint, because Ba is fluid-mobile while Nb is not.`,
      keyTerms: [
        {
          term: 'Mantle wedge metasomatism',
          def: 'The chemical alteration of the mantle wedge peridotite by hydrous fluids and partial melts rising from the subducting slab. Fluid-mobile elements (Ba, K, Rb, Sr, Pb) are added to the wedge, lowering its solidus and changing its mineralogy (phlogopite, amphibole, and chlorite are metasomatic products). Metasomatism is why arc mantle is compositionally distinct from mid-ocean ridge or ocean-island mantle: it has been chemically pre-conditioned by repeated subduction inputs.',
        },
        {
          term: 'Fluid-mobile elements (FME)',
          def: 'Elements that partition strongly into aqueous fluids under subduction-zone pressure–temperature conditions, enabling them to be efficiently transported from the slab into the mantle wedge. Key FMEs: Ba, K, Rb, Sr, Pb, and Cs. Their enrichment in arc lavas relative to N-MORB (as shown on spider diagrams) directly reflects slab fluid input. Ba/Nb and Ba/La ratios are widely used as quantitative slab-fluid proxies because Ba is mobile while Nb and La represent the unfluxed mantle component.',
        },
        {
          term: 'HFSE depletion (Nb–Ta trough)',
          def: 'High-field-strength elements (Nb, Ta, Ti, Zr, Hf) have high ionic charge and small ionic radii, making them highly insoluble in aqueous fluids. At subduction conditions, rutile and titanite in the slab retain HFSE, preventing their transfer into the mantle wedge. Arc lavas therefore show pronounced negative Nb, Ta, and Ti anomalies on primitive-mantle-normalised spider diagrams — the "Nb–Ta trough" — flanked by positive Ba and K spikes. This pattern is the single most diagnostic indicator of a subduction-zone origin for any volcanic rock.',
        },
        {
          term: 'Adakite',
          def: 'A volcanic rock type produced when the subducting oceanic crust itself melts (rather than dehydrating and fluxing the wedge). Defined geochemically by: SiO₂ > 56 wt%, Al₂O₃ > 15 wt%, Sr/Y > 40, Y < 18 ppm, Yb < 1.9 ppm, and low HREE concentrations. The high Sr/Y and low HREE reflect melting in the presence of garnet (which retains Y and Yb in residue). Forms when slabs are young and hot (< ~25 Ma), steep, or thin; also the dominant magma type in the Archean, where hotter mantle caused pervasive slab melting, generating TTG complexes.',
        },
        {
          term: 'Flux melting',
          def: 'Partial melting of the mantle wedge induced not by elevated temperature but by the addition of water (and other volatiles) from slab dehydration, which lowers the peridotite solidus by up to ~100–200°C. The descending slab releases fluids at specific depths as successive hydrous minerals break down; these fluids rise buoyantly into the hot mantle wedge, crossing the shifted solidus and generating melt without a temperature increase. Flux melting is the dominant mechanism for magma generation at subduction zones and explains why arc volcanoes are located ~100–130 km above the slab surface (the "volcanic front" geometry).',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The arc geochemical toolkit: tracers, ratios, and mixing',
      body: `Arc geochemists have developed a set of element ratios and diagrams that decode subduction processes from lava compositions. Understanding which elements behave as fluid-mobile, which remain in the residue, and which track specific mineral reactions allows discrimination between slab fluid contributions, sediment melt inputs, and the underlying depleted MORB mantle (DMM) wedge.

**Ba/Nb and Ba/La as slab fluid proxies.** Ba is highly mobile in aqueous slab fluids; Nb and La are not (La is fluid-immobile but melt-mobile, making Ba/La useful for separating fluid vs. melt contributions). In N-MORB, Ba/Nb ≈ 2–4 and Ba/La ≈ 1. In typical arc lavas, Ba/Nb routinely exceeds 20–40, reflecting massive Ba addition from slab fluids relative to the immobile Nb. Mount St. Helens high-silica andesites show Ba/Nb values of 50–80; Kamchatka arc basalts range from 20 to >100 across different arc segments. When Ba/La is high but Ba/Nb is moderate, sediment melts (which carry La) are a more important contribution than pure aqueous fluid.

**Two-component mixing: fluid vs. sediment melt.** Arc lavas in most settings reflect mixing between (1) an aqueous slab fluid component rich in FMEs and (2) a sediment-derived melt component, recognisable by elevated Th/La (Th is mobile in silicic melts; La is not fluid-mobile), elevated ¹⁰Be (a cosmogenic isotope formed in surficial sediments, providing direct proof of sediment recycling), and a negative εNd signature. The relative contributions vary along strike: the Cascades arc shows a large sediment-melt signal from the subducted Juan de Fuca plate\'s thick terrigenous sediment cover; the Kamchatka arc is dominated by fluid contributions over much of its length.

**The K–h relationship.** Arc lavas directly above shallower slab segments tend to be basaltic to basaltic-andesite with low K₂O; those above deeper portions of the slab (farther from the trench) are more silicic and potassium-rich, grading from calc-alkaline through high-K calc-alkaline to shoshonitic. This "K–h relationship" reflects the depth-dependent breakdown of potassium-bearing minerals in the slab (amphibole and phengite break down at progressively greater depths), delivering K-rich fluids to progressively deeper wedge regions.`,
      cards: [
        {
          name: 'Slab Dehydration Sequence',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Successive mineral breakdown with depth releases fluid-mobile elements into the wedge. Serpentinite → 50–150 km: releases H₂O, Ba, K, Rb, Sr. Chlorite → 70–100 km: releases H₂O, Cr. Amphibole (hornblende, pargasite) → 70–200 km: major H₂O source, releases Ba, Sr, Pb. Phengite → 200–300 km: last major K carrier; breakdown explains high-K arc lavas above deep slabs. Rutile persists throughout, retaining Nb, Ta, Ti → HFSE depletion in all arc lavas.',
          examples: 'Cascades: shallow Juan de Fuca slab (~80 km beneath volcanic front) → low-K basaltic andesites at Newberry · Japan arc: deep Pacific slab → high-K shoshonites in back-arc · Andes: phengite breakdown signature in potassic lavas of the Central Volcanic Zone',
        },
        {
          name: 'Spider Diagram Fingerprint',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Primitive-mantle-normalised spider diagram: arc lavas show Ba–K–Rb–Sr–Pb spikes (fluid-mobile elements from slab fluids) flanking a pronounced Nb–Ta–Ti trough (HFSE retained by rutile in slab). Ba/Nb > 20 = slab fluid imprint; MORB Ba/Nb ≈ 2–4. High Th/La = sediment melt contribution. Negative εNd = ancient sediment recycling. ¹⁰Be excess = direct proof of shallow (<10 Ma) sediment subduction. Ba/La ratio separates fluid vs. sediment melt contributions.',
          examples: 'Mount St. Helens dacite: Ba/Nb ≈ 60, pronounced Nb trough, elevated Sr/Y · Nevado del Ruiz (Colombia): calc-alkaline andesite, Ba/Nb > 40, Pb spike from subducted carbonate sediment · Kamchatka Klyuchevskoy basalt: Ba/Nb > 80, among the highest fluid signatures of any arc worldwide',
        },
        {
          name: 'Adakites and Slab Melting',
          icon: Flame,
          color: BRAND.ruby,
          desc: 'Adakites form when slab melts rather than merely dehydrates. Conditions: young/hot slab (<25 Ma), steep subduction, or flat-slab with thin wedge. Diagnostic: Sr/Y > 40 (garnet retains Y), low Yb < 1.9 ppm (garnet-bearing residue), La/Yb > 20, SiO₂ > 56%, Al₂O₃ > 15%. High Sr from plagioclase dissolution in basaltic slab. Archean TTG suites = ancient adakites; built most Archean cratons when hot mantle caused widespread slab melting. Modern examples: Austral Volcanic Zone (Chile Ridge subduction), Adak Island (Aleutians).',
          examples: 'Cerro Pampa (Patagonia): textbook adakite from Chile Ridge subduction, Sr/Y > 100 · Adak Island (Aleutians): low-Y lavas first described here in 1978 — name origin · Archean Barberton TTG (South Africa): Sr/Y up to 150, interpreted as hot Archean slab melt',
        },
        {
          name: 'Calc-Alkaline vs. Tholeiitic Arcs',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Calc-alkaline series: dominant arc trend; early magnetite crystallisation removes Fe, driving melt toward silica-rich compositions. AFM diagram: inflected path away from Fe apex. Andesite–dacite–rhyolite sequence. High H₂O in melt stabilises early magnetite (key control). Tholeiitic arcs: Fe enrichment continues; forms where slab is young, arc thin, or backarc spreading active. Discriminated by Miyashiro FeO*/MgO criterion. Cascades and Andes = calc-alkaline; Izu–Bonin and parts of Aleutians = tholeiitic. Subduction erosion vs. accretion controls sediment flux and arc geochemistry over million-year timescales.',
          examples: 'Mount Rainier andesite: calc-alkaline, 60% SiO₂, high Sr/Nd; evolved by fractional crystallisation + crustal assimilation · Izu–Bonin arc: tholeiitic basalt–andesite; minimal sediment input, depleted slab signal · Aleutian arc: transitions from calc-alkaline (eastern, thick sediment) to tholeiitic (western, thin crust)',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Subduction Geochemical Factory: From Slab to Eruption',
      body: 'Follow the flow of elements and fluids from the descending oceanic slab through the mantle wedge to the arc volcano at the surface. Each stage adds a distinct chemical signature that is ultimately preserved in arc lava compositions.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Six-stage pathway showing how slab dehydration, mantle wedge metasomatism, flux melting, and crustal processing combine to generate the distinctive geochemical signature of arc magmas.',
        nodes: [
          {
            id: 'slab',
            label: 'Subducting Slab',
            description: 'Altered oceanic crust (~6 km) and overlying marine sediment (~0.5 km) descend into the mantle. The slab carries hydrous minerals (serpentinite, chlorite, amphibole, phengite), fluid-mobile elements (Ba, K, Rb, Sr, Pb) in altered basalt and sediment, and high-field-strength elements (Nb, Ta, Ti) locked in rutile. The slab surface reaches ~80–130 km depth beneath the volcanic front, where P–T conditions drive hydrous mineral breakdown.',
            color: BRAND.accent,
          },
          {
            id: 'dehydration',
            label: 'Slab Dehydration',
            description: 'As temperature and pressure increase with depth, hydrous minerals break down in a predictable sequence: serpentinite at 50–150 km, chlorite at 70–100 km, amphibole at 70–200 km, and phengite at 200–300 km. Each reaction releases supercritical aqueous fluid rich in fluid-mobile elements (Ba, K, Rb, Sr, Pb). Rutile is stable throughout the dehydration sequence, sequestering Nb, Ta, and Ti and preventing their transfer upward — the origin of the HFSE depletion in arc lavas.',
            color: BRAND.accentHot,
          },
          {
            id: 'sediment',
            label: 'Sediment Melt / Fluid',
            description: 'Subducted marine sediment contributes a geochemically distinct second component. At high temperatures near the slab surface, sediment may partially melt or release fluid enriched in Th, La, U, Pb, and ¹⁰Be. High Th/La in arc lavas indicates a sediment melt contribution. Elevated ¹⁰Be (a cosmogenic isotope produced only in surficial sediments) is direct isotopic proof that young sediment has been recycled through the subduction zone and is now being sampled by the arc magmas. This component is large in the Cascades (thick terrigenous Juan de Fuca sediment) and small in sediment-poor arcs like Tonga.',
            color: BRAND.gold,
          },
          {
            id: 'wedge',
            label: 'Mantle Wedge Metasomatism',
            description: 'Slab-derived fluids and melts rise buoyantly into the hot mantle wedge peridotite (T ≈ 1,000–1,300°C at ~80 km depth). They metasomatize the wedge: Ba, K, Sr, Pb, and Rb are absorbed into the peridotite mineral lattice or into secondary phlogopite and amphibole. This lowers the peridotite solidus by 100–200°C via flux melting — the slab fluid enables partial melting without any temperature increase. The metasomatised wedge now carries the combined chemical signatures of the depleted MORB mantle plus the slab-derived overprint: high Ba/Nb, high Sr/Y, and depleted Nb–Ta.',
            color: BRAND.amethyst,
          },
          {
            id: 'melt',
            label: 'Primary Arc Melt Generation',
            description: `Flux melting generates primary hydrous basaltic melt (3–5 wt% H₂O) from the metasomatised wedge at ~80–130 km depth, approximately 100–130 km above the slab surface. The melt inherits the wedge\'s geochemical signature: elevated Ba, K, Rb, Sr, Pb; depleted Nb, Ta, Ti; MORB-like HREE (heavy rare earth elements) unless garnet is in the residue. If the slab itself melts (young or hot slab), adakitic melt with high Sr/Y and low Y is generated directly from the eclogitic slab at >45 km. Both melt types rise through the wedge, reacting with peridotite and gaining MgO en route.`,
            color: BRAND.coral,
          },
          {
            id: 'eruption',
            label: 'Arc Volcano Eruption',
            description: 'Primary basaltic magma ascends through the crust, fractionating (losing olivine, pyroxene, magnetite) and potentially assimilating crustal material to produce the andesites, dacites, and rhyolites typical of arc stratovolcanoes. High water content (2–6 wt% in evolved melts) promotes early magnetite crystallisation, driving the calc-alkaline trend. High dissolved water also causes explosive fragmentation of viscous silicic melts — the reason arc volcanoes produce Plinian eruptions. Final erupted lavas carry the full integrated chemical signature: Ba–K–Rb–Sr–Pb enrichment, Nb–Ta–Ti trough, Ba/Nb > 20, and — if adakitic — high Sr/Y and low Yb.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'slab', to: 'dehydration', label: 'increasing P–T drives mineral breakdown' },
          { from: 'slab', to: 'sediment', label: 'sediment layer melts or releases fluid' },
          { from: 'dehydration', to: 'wedge', label: 'FME-rich fluids rise into wedge' },
          { from: 'sediment', to: 'wedge', label: 'Th, La, ¹⁰Be added to wedge' },
          { from: 'wedge', to: 'melt', label: 'flux melting of metasomatised peridotite' },
          { from: 'melt', to: 'eruption', label: 'fractionation and crustal assimilation' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Arc lavas consistently show positive Ba and K anomalies alongside a pronounced negative Nb–Ta trough on primitive-mantle-normalised spider diagrams. What single subduction-zone process best explains both features simultaneously?',
          a: [
            'Partial melting of subducted oceanic basalt enriches Ba and K because these elements are compatible in eclogite residue at high pressure; Nb and Ta are depleted because they partition into the melt during slab melting, making arc lavas Nb-poor and Ba-rich',
            'Slab dehydration transfers fluid-mobile elements (Ba, K, Rb, Sr) into the mantle wedge via aqueous fluids, while high-field-strength elements (Nb, Ta, Ti) remain sequestered in stable rutile in the slab residue; wedge melts therefore inherit the Ba–K enrichment but not the Nb–Ta, producing both features in a single process',
            'Crustal contamination during magma ascent through continental arc crust enriches Ba and K (both abundant in continental sediments) while diluting the original mantle Nb–Ta content; the pattern is a mixing line between primitive arc basalt (Nb-rich) and continental crust (Ba-rich)',
            'MORB-source depleted mantle is naturally enriched in Ba and K relative to Nb and Ta, so arc lavas inherit this depleted mantle signature without any slab contribution; the spider-diagram pattern reflects source depletion rather than subduction-zone fluid addition',
          ],
          correct: 1,
          explain: 'The dual pattern — FME enrichment + HFSE depletion — arises from the contrasting behaviour of these element groups in aqueous subduction fluids. Ba, K, Rb, Sr, and Pb have large ionic radii and low charge, making them highly soluble in hydrous slab fluids; they are efficiently transferred from the slab into the mantle wedge and ultimately into arc melts. Nb, Ta, and Ti have high charge and small radii (high field strength), making them insoluble in aqueous fluids and highly compatible in rutile, a TiO₂ mineral that is stable in the slab throughout its dehydration history and retains virtually all the HFSE. Option A is incorrect: in eclogite (the high-P form of subducted basalt), Ba and K are not compatible — they are among the first elements to be expelled into fluids precisely because they do not fit into garnet or omphacite lattices. Option C is wrong as the primary explanation: crustal contamination can contribute to Ba/Nb elevation in mature arc systems, but many oceanic arc basalts (with minimal crustal interaction) show the same pattern, proving slab derivation is fundamental. Option D is incorrect: depleted MORB mantle (DMM) actually has very low Ba and K, not elevated values — the arc enrichment in these elements is genuinely anomalous relative to DMM and requires a slab source.',
        },
        {
          q: 'A geochemist analyses lavas from two volcanoes above the same subduction zone: Volcano A (closer to the trench, ~80 km above the slab) has low K₂O (0.4 wt%) at 52% SiO₂; Volcano B (farther from the trench, ~150 km above the slab) has high K₂O (2.1 wt%) at the same SiO₂. What process explains this K–h relationship, and which slab mineral is the primary K-carrier at depth?',
          a: [
            'The K–h relationship reflects crustal thickness: Volcano B is situated on thicker continental crust, which contributes more crustal K during magma ascent through assimilation; the K carrier is K-feldspar in the continental crust, not a slab mineral',
            'The K–h relationship arises because the mantle wedge is enriched in K at greater depth due to upwelling of deep, K-rich asthenosphere; hotter, deeper upwelling beneath Volcano B carries more K from the lower mantle, generating K-rich magmas independent of the slab',
            'The K–h relationship reflects depth-dependent breakdown of potassium-bearing hydrous minerals in the slab: amphibole and serpentinite release K at shallow depths (< ~150 km) affecting Volcano A, but phengite — a K-rich white mica stable to >200–300 km — only breaks down at the greater depth beneath Volcano B, delivering K-rich fluids to the deep wedge and generating high-K magmas',
            'The K–h relationship is a pressure effect on magma differentiation: higher confining pressure beneath Volcano B causes K to behave as a compatible element during fractional crystallisation, concentrating K in the residual melt; lower pressure at Volcano A allows K to remain compatible in feldspar and be removed from the melt',
          ],
          correct: 2,
          explain: 'The K–h relationship (Dickinson, 1975) is one of the best-established systematics in arc petrology: K₂O at a fixed SiO₂ increases with the depth h to the slab beneath the volcanic centre. This reflects the depth-dependent dehydration of K-bearing minerals in the slab. At shallow depths (< ~150 km), K is primarily released by serpentinite and chlorite breakdown — these deliver moderate K concentrations to the shallow wedge, producing low-K arc magmas above shallower slab segments. Phengite (KAl₂(AlSi₃)O₁₀(OH)₂), however, is one of the most pressure-stable hydrous minerals in the subducted oceanic crust and pelagic sediment, remaining stable to pressures corresponding to ~200–300 km depth. When it finally breaks down at these greater depths — releasing a K-concentrated fluid into the deep wedge — the resulting magmas are distinctively K-enriched. Volcano B, directly above the deeper slab, taps this phengite-derived K signal. Option A (crustal assimilation) is a real process in thick-crust arcs but does not explain the systematic correlation with slab depth, especially in oceanic arcs with thin crust. Option B is incorrect: deep mantle upwelling does not preferentially deliver K; the lower mantle is K-depleted. Option D misapplies fractional crystallisation: K is highly incompatible (strongly partitioned into melt) at all crustal pressures, and pressure does not reverse this behaviour.',
        },
        {
          q: 'Volcanic rocks from an Archean greenstone belt are analysed and found to have: SiO₂ = 67%, Al₂O₃ = 16%, Sr/Y = 85, Y = 8 ppm, Yb = 0.7 ppm, and La/Yb = 35. What magma type do these compositions indicate, and what does their abundance in the Archean (but rarity in modern arcs) imply about early Earth?',
          a: [
            'These compositions match adakites: high SiO₂ (> 56%), high Al₂O₃ (> 15%), very high Sr/Y (> 40), low Y (< 18 ppm) and Yb (< 1.9 ppm), and high La/Yb (> 20) are the defining geochemical criteria; adakites require garnet in the melt residue, which occurs when the oceanic crust itself melts at sufficient pressure (> ~1.5 GPa, ~45–50 km depth); their abundance as Tonalite–Trondhjemite–Granodiorite (TTG) suites in Archean terranes implies that slab melting — not fluid-flux melting of the wedge — was the dominant magma-generation mechanism in the Archean, consistent with a hotter early Earth where young, buoyant slabs were more easily melted rather than dehydrated',
            'These compositions indicate high-silica rhyolites produced by extensive fractional crystallisation of basaltic arc magma; their abundance in the Archean reflects the greater prevalence of evolved silicic arc volcanism when continental crust was actively growing; they are rare in modern arcs because modern arcs produce more intermediate andesitic compositions',
            'These compositions indicate continental collision granites generated when two Archean cratons collided, causing crustal thickening and high-pressure melting of the lower crust; their abundance in the Archean reflects the high frequency of continent–continent collisions during early crustal growth; high Sr/Y reflects high-pressure garnet-bearing residue in the thick collisional crust',
            'These compositions indicate ocean-island basalts (OIB) from mantle plumes that were common in the Archean; high Sr/Y reflects the deep melting column of plume-related volcanism; their rarity in modern arcs reflects the decline in mantle plume activity as Earth cooled and convection slowed',
          ],
          correct: 0,
          explain: 'The combination of Sr/Y = 85, Y = 8 ppm, and Yb = 0.7 ppm uniquely identifies adakitic composition. These values are diagnostic because Sr/Y > 40, Y < 18 ppm, and Yb < 1.9 ppm are only produced when garnet is a stable residual phase during melt generation — garnet strongly retains Y and the heavy rare earth elements (HREE including Yb) while allowing Sr to pass into the melt. Garnet is stable in the oceanic crust only at pressures exceeding ~1.5 GPa (~45–50 km depth), which is the eclogite stability field. Normal subduction-zone flux melting of the mantle wedge peridotite occurs in the spinel-lherzolite stability field, producing magmas with low Sr/Y and moderate HREE — the opposite of adakitic. Option B is wrong: high-SiO₂ rhyolites from fractional crystallisation of arc basalts do not have elevated Sr/Y — fractional crystallisation removes plagioclase (which takes Sr), lowering Sr, and does not create garnet in the residue, so Y and Yb remain high. Option C partially uses the same garnet argument, but TTG suites are geochemically and geologically distinct from S-type collision granites, which have very different Nd and Sr isotope signatures and lower Mg#. Option D is incorrect: mantle plume-derived OIB has low SiO₂ (typically < 52%), low Al₂O₃, and MORB-like Sr/Y; plumes do not generate garnet-residue compositions at low pressure. The abundance of TTG suites (= ancient adakites) forming ~70% of Archean continental nuclei is one of the primary lines of evidence that Archean plate tectonics operated with hotter, more buoyant slabs that melted rather than merely dehydrated.',
        },
        {
          q: 'A researcher proposes that elevated ¹⁰Be concentrations measured in arc lavas from the Cascades provide "direct proof of sediment subduction." Why is ¹⁰Be such a powerful tracer for this purpose, and what would alternative explanations for high ¹⁰Be need to overcome?',
          a: [
            '¹⁰Be is produced in the mantle at depth by cosmic-ray muon reactions with ¹⁰B in deep mantle minerals; elevated ¹⁰Be in arc lavas reflects the depth of slab subduction and mantle interaction; it is a tracer of slab depth, not sediment recycling, because ¹⁰Be production increases at greater depth in the mantle',
            '¹⁰Be (half-life ~1.4 Ma) is produced exclusively by cosmogenic spallation reactions in the uppermost few metres of Earth\'s surface and ocean sediments by cosmic-ray bombardment; it therefore exists only in young surficial material (< ~8–10 Ma, given its short half-life); its presence in arc lavas at concentrations orders of magnitude above mantle background proves unambiguously that recently formed surface sediment has been subducted and recycled within ~1–8 Ma — no other process can deliver ¹⁰Be into mantle-derived magmas, because the mantle itself contains essentially no ¹⁰Be and in situ production during magma ascent is negligible',
            'Elevated ¹⁰Be in arc lavas reflects post-eruptive surface contamination of lava flows by cosmic-ray produced ¹⁰Be in superficial soil; the lava absorbs ¹⁰Be from soil dust after eruption; the signal is therefore a surface alteration artefact and does not reflect source conditions in the mantle or slab',
            '¹⁰Be is produced in the upper mantle by radioactive decay of ¹⁰B during high-temperature metasomatic reactions between slab fluids and peridotite; elevated ¹⁰Be in arc lavas reflects the intensity of fluid–rock interaction in the mantle wedge rather than recycling of surficial sediment',
          ],
          correct: 1,
          explain: `The power of ¹⁰Be as a tracer rests on two facts: (1) its production mechanism — exclusively by spallation of atmospheric ¹⁶O and ¹⁴N by cosmic rays, with subsequent delivery to the ocean floor as particles in marine sediment — means it exists only in surficial material, not in the mantle; and (2) its half-life of ~1.387 Ma means that after ~8–10 half-lives (~10 Ma), essentially all ¹⁰Be has decayed to ¹⁰B. Therefore, detecting ¹⁰Be above mantle background in a volcanic rock is unambiguous evidence that the source included recently surfaced (<~8–10 Ma old) sediment — the sediment must have been subducted and incorporated into the melt source within the last few million years. The Cascades are particularly well-suited for this tracer because the Juan de Fuca plate carries a thick sequence of young terrigenous sediment shed from the North American margin, with high ¹⁰Be concentrations. Option A is wrong: ¹⁰Be is not produced in the mantle; cosmic-ray penetration depth is limited to the uppermost few metres of Earth\'s surface, and muon-induced reactions at mantle depths are negligible. Option C (surface contamination) is ruled out because ¹⁰Be in carefully processed magmatic mineral separates (e.g., fresh olivine phenocrysts) from arc lavas still shows elevated values — the signal is in the melt, not on the rock surface; and the concentrations in arc lavas follow systematic geochemical patterns consistent with sediment mixing, not random surface exposure. Option D invents a production mechanism that does not exist: ¹⁰Be is not produced by radioactive decay of ¹⁰B; ¹⁰B is stable and does not produce ¹⁰Be.`,
        },
        {
          q: 'Mount St. Helens (Cascades) and Klyuchevskoy (Kamchatka) are both active arc stratovolcanoes above subducting oceanic plates. If Ba/Nb for Mt. St. Helens basaltic andesites is ~60 and for Klyuchevskoy basalts is ~90, but MORB has Ba/Nb ≈ 3, what does this difference between the two arc volcanoes most likely indicate about the slab fluid contribution, and which type of subduction parameter would best explain a higher Ba/Nb at Klyuchevskoy?',
          a: [
            'Higher Ba/Nb at Klyuchevskoy indicates the Kamchatka arc produces more evolved (silicic) lavas than the Cascades; Ba increases during fractional crystallisation because it is incompatible, while Nb decreases; higher Ba/Nb is simply a measure of differentiation, not slab fluid input',
            'The difference in Ba/Nb between Mt. St. Helens and Klyuchevskoy is geologically insignificant and within normal analytical uncertainty; both values simply reflect that arc lavas have higher Ba/Nb than MORB; no subduction parameters can be inferred from such small differences in Ba/Nb between two different arcs',
            'Higher Ba/Nb at Klyuchevskoy indicates a larger contribution from subducted continental sediment; the Pacific plate carries thick terrigenous sediment from the Asian continent that is enriched in Ba, whereas the Juan de Fuca plate beneath the Cascades carries thin oceanic sediment with low Ba; sediment thickness, not slab fluid flux, controls Ba/Nb in arc lavas',
            'Both Ba/Nb values far exceed MORB (~3), confirming a slab fluid signature at both volcanoes; Klyuchevskoy\'s higher Ba/Nb indicates a larger slab fluid contribution relative to the undepleted wedge mantle component; this could reflect a faster subduction rate (delivering more fluid per unit time), older/colder slab (releasing more Ba-rich fluid per unit area of subducted seafloor), or greater slab dehydration efficiency; the Pacific plate subducting beneath Kamchatka is indeed old (~100 Ma, cold, dense) and subducts steeply and rapidly (~7 cm/yr), consistent with high fluid flux',
          ],
          correct: 3,
          explain: 'Option A is incorrect in its mechanistic reasoning: Ba is indeed highly incompatible (preferentially expelled from crystallising phases into melt) so it does increase during differentiation, but Nb is also incompatible and increases during differentiation as well; the Ba/Nb ratio does not systematically increase during normal fractional crystallisation because both elements have similar bulk distribution coefficients in typical arc crystal assemblages. Ba/Nb variation in arc basalts (minimally differentiated) is therefore a genuine source signal, not a differentiation effect. Option B understates the interpretive power of inter-arc geochemical comparisons: systematic differences in Ba/Nb, Ba/La, and related ratios between different arc systems are among the primary tools used to constrain fluid flux, slab age, and sediment input across the global subduction factory (GEOROC and PetDB databases document these variations for hundreds of arc segments). Option C partially identifies a real effect (terrigenous sediment does carry Ba), but the Juan de Fuca plate beneath the Cascades actually carries a comparatively thick terrigenous sediment cover (~1–2 km of Cascadia Basin turbidites) — if sediment Ba were the dominant control, the Cascades would show higher Ba/Nb, not lower. The correct answer is D: both values exceeding MORB Ba/Nb by 20–30× confirm subduction imprinting at both volcanoes; the quantitative difference reflects slab fluid intensity. The Pacific plate subducting at Kamchatka is ~100 Ma old, cold, dense, and subducts at high velocity (~7–8 cm/yr) and steep dip, conditions that promote efficient, voluminous dehydration — particularly serpentinite and chlorite breakdown releasing Ba-rich fluids. The Juan de Fuca plate is young (<10 Ma near the subduction zone), warmer, and lighter, producing a somewhat smaller fluid flux per unit area. Slab age (and thus temperature) and subduction rate are the primary controls on Ba/Nb variation across the global arc database.',
        },
      ],
    },
  ],
}

export default subductionZoneGeochemistry
