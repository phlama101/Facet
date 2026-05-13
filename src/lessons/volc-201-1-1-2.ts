import { Flame, Layers, Activity, Thermometer } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const bowensReactionSeries: Lesson = {
  id: 'volc-201-1-1-2',
  title: 'Bowen\'s Reaction Series & Magmatic Differentiation',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'How basaltic magma evolves into andesite, dacite, and rhyolite through fractional crystallization, assimilation, and magma mixing — the Bowen\'s reaction series and igneous rock diversity.',
  sources: [
    { org: 'USGS',     title: 'Volcano Hazards Program — Magma Composition and Differentiation',  url: 'https://volcanoes.usgs.gov/vhp/magma.html' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 3 — Minerals and Igneous Rocks (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'USGS',     title: 'Kīlauea Volcano — Hawaiian Volcanic Observatory',                  url: 'https://www.usgs.gov/volcanoes/kilauea' },
    { org: 'AGI',      title: 'American Geosciences Institute — Igneous Petrology Resources',     url: 'https://www.americangeosciences.org/geoscience-currents/igneous-petrology' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Why does one mantle source produce so many different rocks?',
      body: `Stand at the rim of Kīlauea\'s summit caldera and you are watching basaltic magma — ~50% SiO₂, erupted at 1,150°C — pour from a mantle source that has changed little in composition for millions of years. Drive 200 km to the Cascades or look across the Pacific to the Andes and you find volcanoes erupting andesite, dacite, and rhyolite: silica contents of 55–75%, eruption temperatures of 700–900°C, and explosive styles capable of VEI 6–8 eruptions. The mantle beneath them is still broadly peridotitic. So where does the silicic diversity come from?

The answer was worked out systematically by Norman Levi Bowen between 1912 and 1928, through meticulous high-pressure crystallization experiments at the Geophysical Laboratory in Washington, D.C. Bowen demonstrated that as a basaltic magma cools from ~1,300°C downward, minerals crystallize in a predictable sequence — not all at once, but one after another — and that if those crystals are removed from the melt (by gravitational settling, filter pressing, or flotation), the residual liquid evolves progressively toward more silica-rich, lower-temperature compositions. This is **fractional crystallization**, and Bowen\'s crystallization sequence — now universally called **Bowen\'s Reaction Series** — is the master template of igneous petrology.

The series has two branches that merge at lower temperatures. The **discontinuous series** (also called the ferromagnesian branch) describes how mafic minerals change character with falling temperature: olivine (Mg₂SiO₄) crystallizes first at ~1,300°C; at ~1,200°C it reacts with the melt to form pyroxene (augite); at ~1,050°C pyroxene is replaced by hornblende (an amphibole); and at ~800°C biotite (a mica) crystallizes. The word "discontinuous" reflects the fact that each step is a distinct chemical transformation, not a gradual compositional shift — olivine and pyroxene have fundamentally different crystal structures. Each reaction consumes the earlier mineral and produces a new one that is richer in silicon and aluminium and poorer in magnesium and iron.

The **continuous series** describes plagioclase feldspar, which forms a complete solid-solution series from calcium-rich anorthite (CaAl₂Si₂O₈, ~1,550°C) at the high-temperature end to sodium-rich albite (NaAlSi₃O₈, ~1,100°C) at the low-temperature end. The feldspar composition changes continuously as the magma cools, with each crystal\'s rim becoming progressively more sodium-rich as the core remains calcium-rich (zoning). The word "continuous" reflects this unbroken compositional gradation. Both branches converge at the bottom of the series where quartz, potassium feldspar, and muscovite crystallize in granitic and rhyolitic magmas.

If crystals remain in chemical equilibrium with the melt throughout cooling (equilibrium crystallization), the bulk composition of the system does not change significantly — early olivine reacts completely with the melt to produce pyroxene, and so on. But in nature, crystals frequently sink or are physically separated from the melt before they can react. This **fractional crystallization** (or crystal fractionation) progressively removes the early-crystallizing, Mg- and Fe-rich, SiO₂-poor minerals, leaving a melt that becomes progressively richer in SiO₂, K₂O, Na₂O, and incompatible trace elements. Starting from a basaltic melt (~50% SiO₂), 60–80% fractional crystallization can produce a residual melt of dacitic or rhyolitic composition (~65–75% SiO₂). The separated crystals accumulate at the floor or walls of the magma chamber as **cumulate rocks** — dunites, pyroxenites, gabbros — whose bulk compositions are complementary to the differentiated melt.

Hawaii\'s Kīlauea tholeiitic basalt series illustrates the principle at a natural laboratory scale. Successive lavas from the summit reservoir show systematic enrichment in FeO and TiO₂ and depletion in MgO as olivine and pyroxene fractionate — a chemical trend called **iron enrichment** or **tholeiitic differentiation**. The Daly gap — the global scarcity of rocks with intermediate SiO₂ contents of ~52–60% — is a direct consequence of the reaction series: the discontinuous series minerals react and are removed rapidly, driving magma composition rapidly through the intermediate range, so intermediate compositions are short-lived and rarely preserved.`,
      keyTerms: [
        {
          term: 'Bowen\'s Reaction Series',
          def: 'The experimentally determined sequence in which minerals crystallize from a cooling basaltic magma, comprising a discontinuous ferromagnesian branch (olivine → pyroxene → hornblende → biotite) and a continuous plagioclase branch (anorthite → albite). Established by N.L. Bowen (1928) and foundational to igneous petrology.',
        },
        {
          term: 'Fractional Crystallization',
          def: 'The process by which crystals are physically removed from a magma (by settling, flotation, or wall-rock adherence) as they form, preventing back-reaction with the melt and driving the residual liquid progressively toward more silica-rich, incompatible-element-enriched compositions. The primary mechanism of magmatic differentiation.',
        },
        {
          term: 'Partition Coefficient (Kd)',
          def: 'The ratio of an element\'s concentration in a mineral to its concentration in the coexisting melt at equilibrium (Kd = C_mineral / C_melt). Compatible elements (Kd > 1) are preferentially incorporated into crystallizing minerals and are depleted in the residual melt. Incompatible elements (Kd << 1) are excluded from minerals and become concentrated in the melt — and ultimately in late-stage granitic or rhyolitic magmas.',
        },
        {
          term: 'Assimilation and Fractional Crystallization (AFC)',
          def: 'A coupled magmatic process in which a mafic magma simultaneously crystallizes minerals (fractional crystallization) and incorporates (assimilates) surrounding wall-rock or country rock. AFC typically drives the melt toward more silicic compositions because continental crust is SiO₂-rich; it also shifts radiogenic isotope ratios (e.g., ⁸⁷Sr/⁸⁶Sr) toward crustal values, providing a geochemical fingerprint of contamination.',
        },
        {
          term: 'Magma Mixing',
          def: 'The hybridization of two compositionally distinct magmas (typically a hot, mafic recharge magma and a cooler, silicic resident magma) to produce intermediate hybrid compositions. Recognized petrographically by disequilibrium textures: resorbed or rounded crystal margins, reverse zoning, quenched mafic enclaves, and coexisting mineral populations that could not have crystallized from a single melt.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four processes driving magmatic differentiation',
      body: 'Basaltic magma does not remain basaltic unless it erupts immediately. Within a magma chamber, four interrelated processes — fractional crystallization, cumulate formation, AFC contamination, and magma mixing — reshape its composition toward the full spectrum of igneous rock types.',
      cards: [
        {
          name: 'Fractional Crystallization',
          icon: Thermometer,
          color: BRAND.ruby,
          desc: 'Early-crystallizing olivine and pyroxene sink as cumulates, removing Mg and Fe and enriching the residual melt in SiO₂, K, Na, and incompatible elements. SiO₂ rises from ~50% (basalt) to ~70%+ (rhyolite) as fractionation advances.',
          examples: 'Kīlauea tholeiite series: MgO drops from 9 wt% to 4 wt% as olivine fractionates, FeO enrichment defines the tholeiitic trend on a TAS diagram · Bowen\'s discontinuous series: olivine (1,300°C) → pyroxene (1,200°C) → hornblende (1,050°C) → biotite (800°C)',
        },
        {
          name: 'Cumulates & the Daly Gap',
          icon: Layers,
          color: BRAND.gold,
          desc: 'Crystals settling to the chamber floor or adhering to walls form cumulate rocks (dunite, pyroxenite, gabbro). Rapid reaction-series transitions drive compositions through the 52–60% SiO₂ range quickly, producing the Daly gap — global scarcity of intermediate lavas.',
          examples: 'Bushveld Complex, South Africa: 8 km of layered cumulates — dunite → pyroxenite → norite → anorthosite — crystallized from a giant mafic magma body · Daly gap: worldwide TAS plots show abundant basalt (<52%) and rhyolite (>68%) but relatively rare andesite-dacite in oceanic settings',
        },
        {
          name: 'AFC Contamination',
          icon: Flame,
          color: BRAND.coral,
          desc: 'Ascending mafic magma melts and incorporates silicic country rock (assimilation), simultaneously crystallizing cumulates (fractional crystallization). AFC raises SiO₂, shifts ⁸⁷Sr/⁸⁶Sr toward crustal values, and can trigger volatile exsolution and explosive eruptions.',
          examples: 'Cascade arc andesites: basaltic parents assimilate Precambrian continental crust during ascent → elevated ⁸⁷Sr/⁸⁶Sr (>0.706) fingerprints contamination · Yellowstone rhyolites: mantle basalt AFC with ~40 km of silicic crust produces 73%+ SiO₂ melts feeding caldera-forming supereruptions',
        },
        {
          name: 'Magma Mixing & Hybridism',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Hot mafic recharge magma injected into a silicic reservoir hybridizes to intermediate compositions. Disequilibrium textures — resorbed olivine in dacite, reverse-zoned plagioclase, mafic enclaves — are the petrographic fingerprints. Mixing can trigger eruption by raising temperature and pressure.',
          examples: 'Chaos Crags, Lassen (California): mafic enclaves with quenched glassy margins in dacite lava — recharge magma injected hours before eruption · Mount Pinatubo 1991: seismic unrest 2 months before VEI 6 eruption attributed to mafic recharge into a dacitic magma reservoir',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Bowen\'s Reaction Series: Crystallization Sequence',
      body: 'Trace the path of a cooling basaltic magma through Bowen\'s discontinuous and continuous branches. Each node represents a mineral or rock type; edges show the temperature-driven transitions and fractionation steps that produce Earth\'s igneous diversity.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Crystallization sequence from high-temperature mafic minerals to low-temperature silicic minerals and derivative magma compositions',
        nodes: [
          {
            id: 'basalt-melt',
            label: 'Basaltic Melt',
            description: 'Initial magma ~1,250–1,300°C. Composition ~50% SiO₂, rich in MgO and FeO. Mantle-derived tholeiite or alkali basalt.',
            color: BRAND.ruby,
          },
          {
            id: 'olivine-pyroxene',
            label: 'Olivine + Ca-Plagioclase',
            description: 'First minerals to crystallize: forsteritic olivine (Fo₈₀–₉₀) and anorthitic plagioclase (An₈₀–₉₀) at ~1,200–1,300°C. Cumulates sink → gabbro / dunite.',
            color: BRAND.accentHot,
          },
          {
            id: 'pyroxene-plagioclase',
            label: 'Pyroxene + Intermediate Plagioclase',
            description: 'At ~1,100–1,200°C olivine reacts to augite; plagioclase shifts to An₅₀–₇₀. Residual melt enriched in SiO₂ to ~52–56%. Andesitic composition range.',
            color: BRAND.gold,
          },
          {
            id: 'hornblende-biotite',
            label: 'Hornblende + Biotite',
            description: 'At ~800–1,050°C amphibole and mica crystallize; Na-plagioclase (An₂₀–₄₀) dominates. Residual melt reaches 60–68% SiO₂. Dacitic composition.',
            color: BRAND.jade,
          },
          {
            id: 'kfsp-qtz',
            label: 'K-Feldspar + Quartz + Muscovite',
            description: 'Below ~800°C: alkali feldspar, quartz, and muscovite crystallize from a rhyolitic residual melt (~70–75% SiO₂). Incompatible elements (Rb, Cs, U, Th) highly concentrated.',
            color: BRAND.amethyst,
          },
          {
            id: 'igneous-spectrum',
            label: 'Igneous Rock Spectrum',
            description: 'Full TAS classification: basalt (45–52%) → andesite (52–63%) → dacite (63–68%) → rhyolite (>68% SiO₂). Cumulates form dunite, pyroxenite, and gabbro at depth.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'basalt-melt',         to: 'olivine-pyroxene',      label: 'Cooling to ~1,200°C; olivine + anorthite crystallize first' },
          { from: 'olivine-pyroxene',     to: 'pyroxene-plagioclase',  label: 'Discontinuous reaction: olivine → pyroxene ~1,100°C' },
          { from: 'pyroxene-plagioclase', to: 'hornblende-biotite',    label: 'Pyroxene → hornblende; plagioclase zoning continues' },
          { from: 'hornblende-biotite',   to: 'kfsp-qtz',              label: 'Final crystallization <800°C; melt → rhyolite composition' },
          { from: 'kfsp-qtz',            to: 'igneous-spectrum',       label: 'Full differentiation series; cumulates + evolved melts' },
          { from: 'olivine-pyroxene',     to: 'igneous-spectrum',      label: 'Crystal settling → cumulate rocks (dunite, gabbro)' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A petrologist examining a basaltic lava from Kīlauea finds olivine phenocrysts with forsteritic cores (Fo₈₅) and fayalitic rims (Fo₅₀), surrounded by a groundmass of augite and labradorite. Which process most directly explains this mineral zoning pattern, and what does it tell us about the crystallization history?',
          a: [
            'The olivine zoning records magma mixing: Fo₈₅ cores crystallized from a primitive mafic recharge magma that was injected into a more evolved resident magma carrying Fo₅₀ rim compositions; the two magmas hybridized before eruption, producing a single lava with phenocrysts from both magmas',
            'The zoning records fractional crystallization in a cooling, evolving magma: olivine began crystallizing at high temperature from a Mg-rich melt (Fo₈₅ core); as the melt cooled and fractionated, its FeO/MgO ratio rose; later olivine growth and rim overgrowths formed at lower temperatures from a more Fe-rich melt (Fo₅₀), reflecting the progressive evolution of the magma toward lower Fo values — a classic record of incomplete reaction between early crystals and evolving melt',
            'The Fo₈₅ cores represent xenocrysts — olivine grains assimilated from dunite xenoliths in the mantle wall-rock — while the Fo₅₀ rims crystallized from the host basaltic melt; the rim composition reflects equilibrium with the bulk melt, while the core composition reflects the xenolith source',
            'The zoning records decompression during magma ascent: olivine crystallized at depth under high pressure as Fo₈₅, and as the magma rose rapidly and pressure dropped, the melt became undersaturated in MgO relative to FeO; Fo₅₀ rims grew at lower pressure as the melt composition adjusted to the new pressure conditions during rapid ascent',
          ],
          correct: 1,
          explain: 'Normal zoning in olivine (Fo-rich core to Fe-rich rim) is the canonical record of fractional crystallization. Olivine crystallizes early from primitive Mg-rich melt at high temperature; as the magma cools and Mg is extracted into crystals, the melt\'s MgO decreases and FeO/MgO ratio increases, so later crystal growth produces progressively more Fe-rich olivine. This is directly predicted by Bowen\'s discontinuous series. Option A (magma mixing) would typically produce reverse or patchy zoning, or olivine populations with two distinct core compositions — not a smooth normal zonation from Fo₈₅ to Fo₅₀ in a single grain. Option C (xenocrysts) is plausible for anomalously primitive Fo-rich crystals, but xenocryst cores are typically rounded and corroded rather than sharply bounded, and the rim composition would then reflect only the host melt; a xenocryst scenario would not produce a systematic graded zonation. Option D (decompression zoning) is not the primary mechanism — decompression affects volatile solubility and crystallization pressure, but the Fo content of olivine is overwhelmingly controlled by the melt\'s FeO/MgO ratio (the Fe-Mg exchange Kd between olivine and melt is ~0.30), not by pressure directly. The correct interpretation is fractional crystallization: the continuous change in Fo content from core to rim records the progressive Fe-enrichment of the melt as olivine removed Mg from it.',
        },
        {
          q: 'The Rayleigh fractionation equation for a trace element during crystal fractionation is: CL = C₀ × F^(D−1), where CL is the concentration in the residual melt, C₀ is the initial concentration, F is the fraction of melt remaining, and D is the bulk partition coefficient. A magma initially contains 10 ppm of a highly incompatible element (D = 0.01) and 100 ppm of a compatible element (D = 10). After 80% crystallization (F = 0.20), what are the approximate concentrations of each element in the residual melt, and what principle does this illustrate?',
          a: [
            'Both elements have roughly doubled in concentration to ~20 ppm and ~200 ppm respectively, because 80% crystallization reduces the melt volume to one-fifth, concentrating all elements equally regardless of their partition coefficients; Rayleigh fractionation affects all elements identically',
            'The incompatible element (D = 0.01) reaches approximately 46 ppm (enriched ~4.6×), while the compatible element (D = 10) drops to approximately 0.01 ppm (depleted >99%); this illustrates that incompatible elements concentrate in the residual melt and ultimately in evolved silicic magmas, while compatible elements are stripped from the melt into crystal phases — explaining why Rb, Cs, U, Th, and REE are enriched in granites relative to basalts',
            'The incompatible element drops to ~5 ppm because incompatible elements preferentially enter any crystallizing phase; the compatible element rises to ~300 ppm because compatible elements remain in the melt when minerals cannot accommodate them; D values less than 1 always indicate depletion in the melt',
            'Both elements reach similar concentrations of ~50 ppm because the Rayleigh equation applies only when D = 1; at D values far from 1, the system equilibrates and both elements approach the average of their initial concentrations weighted by the crystal fraction',
          ],
          correct: 1,
          explain: 'Applying the Rayleigh fractionation equation: For the incompatible element (D = 0.01, F = 0.20): CL = 10 × (0.20)^(0.01−1) = 10 × (0.20)^(−0.99) ≈ 10 × 4.66 ≈ 46.6 ppm. For the compatible element (D = 10, F = 0.20): CL = 100 × (0.20)^(10−1) = 100 × (0.20)^9 = 100 × 5.12×10⁻⁷ ≈ 0.000051 ppm — effectively zero. This is the fundamental divergence of trace elements during magmatic differentiation: incompatible elements (large-ion lithophile elements: Rb, Cs, Ba, K, U, Th, Pb; and high-field-strength elements: Nb, Ta, Zr, Hf, REE) are excluded from all common crystallizing minerals (D << 1) and concentrate dramatically in the residual melt. By 80% crystallization, an element with D = 0.01 is enriched 4–5× in the melt. After 90% crystallization (F = 0.10), it would be enriched ~10×. This explains why granites and rhyolites are enriched 10–100× in these elements compared to basalts. Compatible elements (Ni, Cr, Co, Sc enter olivine and pyroxene with D >> 1) are efficiently stripped from the melt early in crystallization and are depleted to near-zero in evolved silicic magmas. Option A is wrong — simple volume concentration (1/F) would give 5× enrichment for all elements at F = 0.20, but the Rayleigh equation shows that D controls whether an element is enriched or depleted relative to that simple dilution factor. Options C and D have the D-value effects backwards and misconstrue the equation.',
        },
        {
          q: 'A geochemist analyzing lavas from a subduction zone arc finds that lavas with higher SiO₂ contents also have progressively higher ⁸⁷Sr/⁸⁶Sr ratios (from 0.7035 in the basalts to 0.7085 in the dacites), while ¹⁴³Nd/¹⁴⁴Nd ratios decrease in the same direction. Fractional crystallization alone cannot produce significant changes in radiogenic isotope ratios. What process explains these co-variations, and what does it imply about the magmatic system?',
          a: [
            'The isotopic variations record equilibrium crystallization rather than fractional crystallization; in equilibrium crystallization, early-forming minerals like plagioclase preferentially incorporate radiogenic ⁸⁷Sr, leaving the residual melt with higher ⁸⁶Sr and thus a lower ⁸⁷Sr/⁸⁶Sr ratio in the basalts; the dacites are simply the most equilibrated products and show the original mantle isotope ratios',
            'The co-variation of rising SiO₂ with rising ⁸⁷Sr/⁸⁶Sr and falling ¹⁴³Nd/¹⁴⁴Nd is a classic fingerprint of Assimilation and Fractional Crystallization (AFC): as mantle-derived basaltic magma rises through old continental crust (which has high ⁸⁷Sr/⁸⁶Sr from long-term Rb decay and low ¹⁴³Nd/¹⁴⁴Nd from long isolation), it assimilates crustal material while simultaneously crystallizing cumulates; both assimilation and fractionation drive the melt toward higher SiO₂, and assimilation mixes in crustal isotope signatures — the more contamination, the more silicic and isotopically crustal the product',
            'The isotopic shift records magma mixing: the basalts represent a mantle end-member magma with low ⁸⁷Sr/⁸⁶Sr, while the dacites are a second end-member magma derived from melting of subducted oceanic sediments (which have high ⁸⁷Sr/⁸⁶Sr from marine carbonate); intermediate compositions are hybrids of these two magmas, so SiO₂ and ⁸⁷Sr/⁸⁶Sr increase together across the mixing array',
            'The variations record progressive dehydration of the subducting slab: as the slab dehydrates at greater depths, the released fluids carry successively higher ⁸⁷Sr/⁸⁶Sr into the mantle wedge; the deeper the dehydration, the more radiogenic Sr is added to the wedge melt, and deeper dehydration also liberates more SiO₂ from the slab, producing the co-variation',
          ],
          correct: 1,
          explain: 'Radiogenic isotope ratios (⁸⁷Sr/⁸⁶Sr, ¹⁴³Nd/¹⁴⁴Nd, ²⁰⁶Pb/²⁰⁴Pb) are not fractionated by any mineral-melt partitioning process — isotopes of the same element have essentially identical Kd values. Fractional crystallization cannot therefore change these ratios. The only way to shift isotope ratios is to mix with material that has a different ratio. Old continental crust has elevated ⁸⁷Sr/⁸⁶Sr (because it has had billions of years to produce radiogenic ⁸⁷Sr from ⁸⁷Rb decay in Rb-enriched crust) and depressed ¹⁴³Nd/¹⁴⁴Nd (because its low Sm/Nd ratio has yielded relatively little ¹⁴³Nd over time). AFC modelling (after DePaolo, 1981) uses the coupled mass-balance equations for isotopes and major elements to determine the assimilation rate relative to crystallization rate (r = Ma/Mc). The mixing-like trends in SiO₂ vs. ⁸⁷Sr/¹⁴³Nd space are diagnostic of AFC rather than simple two-component magma mixing, because AFC produces a curved trajectory (not a straight mixing line) reflecting simultaneous chemical evolution and isotopic contamination. Option A is wrong because isotopic equilibrium fractionation between plagioclase and melt is negligible for Sr. Option C (slab sediment mixing) is a real process but would produce different major-element trends — sediment melts are not simply more silicic versions of the basalt, and two-magma mixing would produce straight lines in isotope-ratio vs. 1/Sr diagrams. Option D is creative but incorrect: slab fluids do carry radiogenic Sr, but they do not carry significant SiO₂ in fluid form; and deeper dehydration enriches the wedge in water (flux melting), not in SiO₂.',
        },
        {
          q: 'On a Total Alkali-Silica (TAS) diagram used to classify volcanic rocks, the x-axis shows SiO₂ wt% and the y-axis shows Na₂O + K₂O wt%. Where does a tholeiitic basalt from Kīlauea plot relative to a high-K andesite from a continental arc, and why do these two rocks occupy different fields despite both being "volcanic rocks"?',
          a: [
            'Both rocks plot in the same basalt field because the TAS diagram classifies all rocks with <63% SiO₂ as basaltic regardless of alkali content; the alkali axis is only relevant for distinguishing felsic rocks like rhyolite from trachyte',
            'The Kīlauea tholeiite plots in the basalt field at approximately 50% SiO₂ and low total alkalis (~3–4 wt% Na₂O + K₂O); the high-K continental arc andesite plots in the andesite or trachyandesite field at ~58–63% SiO₂ and higher total alkalis (~5–7 wt%); they occupy different TAS fields because they have different silica contents (reflecting different degrees of differentiation) and different alkali contents (reflecting different source mantle compositions and crustal AFC histories)',
            'The Kīlauea tholeiite plots in the rhyolite field because Hawaiian basalts have undergone extensive fractional crystallization in the deep oceanic crust, producing silica-rich summit lavas; the continental andesite plots in the basalt field because arc magmas are derived directly from undifferentiated mantle peridotite',
            'Both rocks plot along the same differentiation trend on the TAS diagram because all magmas on Earth originate from the same mantle source and therefore follow identical differentiation paths; the TAS diagram shows only the position along this single universal path, not fundamentally different magma types',
          ],
          correct: 1,
          explain: 'The TAS (Total Alkali-Silica) classification diagram, standardized by Le Bas et al. (1986) for volcanic rocks, separates igneous rocks into fields based on both their silica content (a proxy for differentiation) and total alkali content (Na₂O + K₂O, which reflects source composition and differentiation style). Kīlauea tholeiitic basalt is a low-alkali basalt: typically ~49–51% SiO₂ and ~3–4 wt% total alkalis, plotting squarely in the basalt field. It reflects a hot, relatively shallow MORB-like mantle source with minimal crustal contamination. A high-K continental arc andesite plots at ~58–62% SiO₂ and ~5–7 wt% total alkalis, in the andesite or trachyandesite field. The higher SiO₂ reflects differentiation through AFC with silicic continental crust; the higher K₂O reflects the K-enriched nature of subduction-zone magmas (where slab-derived fluids and sediment melts add K to the mantle wedge source), as well as crustal contamination. The TAS diagram therefore simultaneously captures two independent magmatic variables — degree of differentiation (SiO₂) and source/contamination character (alkalis) — which is why it divides into so many distinct named fields. Option A is wrong — the TAS diagram has distinct fields throughout the SiO₂ range and alkali content is diagnostic for basalt-to-andesite classification (alkaline vs. subalkaline series). Options C and D are factually incorrect about both rock types and the meaning of the diagram.',
        },
        {
          q: 'A volcanologist examining thin sections from a dacite lava at a composite volcano identifies the following textures: (1) large plagioclase phenocrysts with sieve texture (porous, spongy interiors with clear rims); (2) olivine crystals with reaction coronas of orthopyroxene; (3) round, dark-colored mafic enclaves with glassy margins. Which process best explains all three observations simultaneously, and what is the significance of these disequilibrium textures for eruption forecasting?',
          a: [
            'All three textures record slow equilibrium cooling of a dacitic magma in a deep magma chamber: sieve textures in plagioclase form by subsolidus recrystallization over thousands of years; reaction coronas on olivine record the normal discontinuous series reaction of olivine to pyroxene; and mafic enclaves are restite fragments from partial melting of the source rock that were carried up with the magma',
            'All three textures are fingerprints of magma mixing triggered by mafic recharge: sieve (resorbed) plagioclase forms when hot, compositionally distinct mafic magma partially dissolves the earlier plagioclase phenocrysts before new clear rims crystallize from the hybrid melt; olivine reaction coronas form because olivine stable in the mafic recharge magma is out of equilibrium (too Mg-rich) with the dacitic resident melt; glassy-margined mafic enclaves are globules of the incompletely mixed recharge magma that quenched against the cooler dacitic host — their glassy margins record rapid thermal quenching; together these textures indicate that a hot mafic injection recently intruded the dacitic reservoir, potentially destabilizing it and increasing eruption probability',
            'Sieve texture in plagioclase records decompression during rapid magma ascent, which causes volatile exsolution and partial dissolution of phenocrysts; olivine reaction coronas record the pressure-dependent discontinuous series reaction (olivine is only stable at high pressure; at shallow depths it reacts to orthopyroxene); and mafic enclaves are xenoliths of the mafic country rock through which the dacite intruded; none of these textures indicate mixing, only decompression effects during ascent',
            'The sieve-textured plagioclase records assimilation of a plagioclase-rich (anorthosite) xenolith that partially dissolved in the dacitic magma, leaving porous cores; the olivine reaction coronas record contamination of the dacite with a peridotite xenolith (mantle rock) that was disaggregated during ascent; the mafic enclaves are fragments of this same peridotite xenolith; all three features record xenolith assimilation, not magma mixing',
          ],
          correct: 1,
          explain: 'Magma mixing triggered by mafic recharge is one of the most important eruption-triggering processes at composite volcanoes, and the three textures described are its classic petrographic signatures. Sieve (resorbed) texture in plagioclase forms when the plagioclase composition crystallized from one melt becomes unstable in a new, hotter or compositionally different hybrid melt: the feldspar partially dissolves (creating the spongy interior) before new, stable plagioclase overgrows it with clear rims that record the new hybrid melt composition. This is reverse or patchy zoning. Olivine reaction coronas of orthopyroxene form because olivine, stable in a mafic melt, is not in equilibrium with the SiO₂-rich dacitic host — it reacts with the silicic melt according to the discontinuous series reaction (olivine + SiO₂-rich melt → pyroxene), forming a reaction rim of orthopyroxene. Glassy-margined mafic enclaves are the most direct evidence of mixing: they are globules of mafic recharge magma that were too viscous or too rapidly cooled to fully homogenize with the host dacite. Their quenched glassy margins record the temperature shock of mafic melt entering a cooler, more viscous dacitic magma. For eruption forecasting, these textures are significant because they document that a hot mafic injection occurred — this injection adds heat, volatiles, and mass to the reservoir, potentially triggering rapid volatile exsolution and over-pressurization. The 1991 Pinatubo eruption is the canonical example: mafic recharge into a dacitic reservoir caused seismic unrest and ultimately a VEI 6 eruption within weeks. Option A is wrong on multiple counts: sieve texture is not a subsolidus equilibrium process; Bowen\'s reaction series olivine → pyroxene operates within a single evolving melt, not between incompatible magmas; and mafic enclaves are not restite (restite would be refractory, coarse-grained, and lack glassy margins). Option C partially correct on decompression for sieve texture in some cases but cannot explain olivine in a dacite or the enclaves. Option D (xenolith assimilation) cannot explain sieve texture in magmatic plagioclase or produce glassy-margined enclaves.',
        },
      ],
    },
  ],
}

export default bowensReactionSeries
