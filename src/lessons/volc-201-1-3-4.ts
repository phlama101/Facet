import { Layers, Activity, Globe, BarChart } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const volcanicGeochemistryTracers: Lesson = {
  id: 'volc-201-1-3-4',
  title: 'Volcanic Geochemistry & Isotopic Tracers',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'Reading mantle source regions through the isotopic and trace element fingerprints of volcanic rocks — Sr-Nd-Pb isotope systems, REE patterns, spider diagrams, and tectonomagmatic discrimination.',
  sources: [
    { org: 'USGS',      title: 'Geochemistry of Volcanic Rocks — Isotopic and Trace Element Methods',             url: 'https://pubs.usgs.gov/of/2002/of02-223/' },
    { org: 'OpenStax',  title: 'Physical Geology — Igneous Rock Geochemistry and Mantle Sources (CC-BY 4.0)',     url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'NOAA NCEI', title: 'PetDB — Global Geochemical Database for Volcanic Rocks',                          url: 'https://www.earthchem.org/petdb' },
    { org: 'AGU',       title: 'Geochemistry, Geophysics, Geosystems — Mantle Isotope Heterogeneity Review',      url: 'https://agupubs.onlinelibrary.wiley.com/journal/15252027' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Reading the mantle through volcanic rocks',
      body: `Every volcanic rock carries a geochemical archive of its entire history — from the source region in the mantle where partial melting began, through the ascent and fractional crystallisation history, to any contamination acquired during passage through the crust. Unlocking this archive requires two complementary toolkits: **radiogenic isotope systems** and **trace element geochemistry**. Together, these methods allow geochemists to identify which part of the mantle a magma came from, whether recycled crustal material is present in the source, how long that material has resided in the mantle, and at what depth and pressure melting occurred. The result is an extraordinarily detailed picture of mantle heterogeneity — far richer than seismological imaging alone could provide.

**Radiogenic isotope systems** exploit the natural radioactive decay of parent isotopes into daughter isotopes. Because the parent-to-daughter ratio in a mineral or rock depends on how much of the parent element was originally incorporated (controlled by crystal-chemical behaviour) and how long the system has been closed, isotope ratios serve as both geochronometers and geochemical fingerprints. The key systems used in volcanic petrology are: (1) **Rb-Sr**: ⁸⁷Rb decays to ⁸⁷Sr (half-life 48.8 Ga); the ratio ⁸⁷Sr/⁸⁶Sr (normalised to the stable isotope ⁸⁶Sr to remove mass fractionation effects) is ~0.7025 in depleted MORB-source mantle, 0.703–0.706 in OIB, and up to 0.710–0.720 in arc lavas contaminated by old continental crust or subducted sediment. (2) **Sm-Nd**: ¹⁴⁷Sm decays to ¹⁴³Nd (half-life 106 Ga); expressed as εNd (epsilon Nd), the deviation in parts per ten-thousand from the chondritic uniform reservoir (CHUR); MORB has εNd +8 to +10 (depleted source, high Sm/Nd), OIB spans +3 to +8, and continental crust is strongly negative (−5 to −20). The Sr-Nd anticorrelation (the **mantle array**) is one of the most robust features of global volcanic datasets: low ⁸⁷Sr/⁸⁶Sr and high εNd define depleted mantle; high ⁸⁷Sr/⁸⁶Sr and low εNd define enriched components.

(3) **U-Pb and Th-Pb**: Three decay chains contribute simultaneously — ²³⁸U→²⁰⁶Pb, ²³⁵U→²⁰⁷Pb, and ²³²Th→²⁰⁸Pb — giving three independent Pb isotope ratios. Plotted on a ²⁰⁶Pb/²⁰⁴Pb vs ²⁰⁷Pb/²⁰⁴Pb diagram (the **Pb-Pb plot**), volcanic suites define trends that reflect the time-integrated U/Pb ratio (μ = ²³⁸U/²⁰⁴Pb) of their source. The **HIMU** mantle component (high-μ) has elevated ²⁰⁶Pb/²⁰⁴Pb (>20.5) and is interpreted as ancient recycled oceanic crust that accumulated radiogenic Pb over hundreds of millions of years in the mantle. (4) **Lu-Hf**: ¹⁷⁶Lu decays to ¹⁷⁶Hf; εHf parallels εNd and extends the isotopic fingerprinting system, particularly useful for distinguishing garnet-bearing vs spinel-bearing mantle sources.

**Trace element geochemistry** provides complementary information about melting conditions and source fertility. Elements are classified by their **partition coefficient** (D = concentration in mineral / concentration in melt): compatible elements (D > 1, e.g., Ni, Cr, Co) concentrate in the residual solid; incompatible elements (D ≪ 1, e.g., Rb, Ba, Nb, La) concentrate in the melt. Plotting element concentrations normalised to chondrite or primitive mantle values on a **spider diagram** reveals characteristic patterns. **Rare earth element (REE) patterns** are particularly diagnostic: because the heavy REE (HREE — Er, Yb, Lu) are strongly compatible in garnet but weakly compatible in spinel and clinopyroxene, a steeply enriched LREE/HREE pattern (high Ce/Yb) indicates melting in the garnet stability field (>80 km (50 mi) depth), while a flat pattern indicates shallow spinel-peridotite melting. The **Nb anomaly** — a pronounced negative Nb-Ta trough on a spider diagram relative to adjacent elements of similar incompatibility — is the diagnostic signature of arc lavas: Nb and Ta are retained in the subducting slab and not added to the mantle wedge by aqueous fluids, while highly fluid-mobile elements (Ba, Rb, Sr, K) are strongly enriched. **Tectonomagmatic discrimination diagrams** — Nb-Y, Ti-Zr-Y, Zr/Y vs Zr — exploit these contrasts to assign an unknown volcanic rock to its tectonic setting from chemistry alone, a powerful tool for ancient terranes where field relationships have been destroyed.`,
      keyTerms: [
        {
          term: 'Radiogenic isotope ratio',
          def: 'The ratio of a radiogenic daughter isotope to a stable reference isotope of the same element (e.g., ⁸⁷Sr/⁸⁶Sr, ¹⁴³Nd/¹⁴⁴Nd). Because the ratio grows through radioactive decay at a rate determined by the parent/reference ratio and elapsed time, it encodes both the age and the original elemental composition of the source. Ratios are measured by thermal ionisation or multicollector ICP mass spectrometry with precisions of ±0.00002 or better.',
        },
        {
          term: 'εNd (epsilon Nd)',
          def: 'A dimensionless notation expressing the ¹⁴³Nd/¹⁴⁴Nd ratio of a sample relative to the Chondritic Uniform Reservoir (CHUR, representing bulk Earth): εNd = [(¹⁴³Nd/¹⁴⁴Nd)sample / (¹⁴³Nd/¹⁴⁴Nd)CHUR − 1] × 10,000. Positive εNd indicates a depleted source (high Sm/Nd, mantle-like); negative εNd indicates an enriched or crustal source (low Sm/Nd). MORB: +8 to +10; OIB: +3 to +8; continental crust: −5 to −20.',
        },
        {
          term: 'HIMU mantle component',
          def: 'A mantle end-member defined by anomalously high ²⁰⁶Pb/²⁰⁴Pb (>20.5), reflecting a high time-integrated μ value (μ = ²³⁸U/²⁰⁴Pb). Interpreted as ancient recycled oceanic crust and lithosphere that was dehydrated during subduction (removing Pb while retaining U), then stored in the deep mantle for 1–2 Ga before entrainment by mantle plumes. Classic HIMU examples: St. Helena and Tubuai (Austral Islands).',
        },
        {
          term: 'Chondrite-normalised REE pattern',
          def: 'A plot of rare earth element concentrations in a volcanic rock divided by their concentrations in chondritic meteorites (representing primitive solar system composition), displayed on a log scale from La (lightest) to Lu (heaviest). The slope reveals the degree of LREE enrichment relative to HREE: a steeply negative slope (LREE enriched) indicates garnet-stability melting at depth (>80 km (50 mi)) and/or an enriched source; a flat pattern indicates shallow spinel-peridotite melting.',
        },
        {
          term: 'Partition coefficient (D)',
          def: 'The equilibrium ratio of the concentration of a trace element in a mineral to its concentration in the coexisting melt: D = C_mineral / C_melt. Compatible elements (D > 1) partition into solid phases during melting and remain in the residue; incompatible elements (D ≪ 1) concentrate in the melt. Garnet has a very high D for HREE (D_Yb ≈ 5–10) but a very low D for LREE (D_La ≈ 0.001), making it the key mineral controlling REE patterns in deep melts.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Isotope systems, mantle components, trace elements, and discrimination diagrams',
      body: `**Radiogenic isotope systems as mantle fingerprints.** The isotopic compositions of volcanic rocks are inherited directly from their mantle source and are not significantly modified by partial melting or fractional crystallisation (unlike major element or trace element concentrations). This makes isotope ratios ideal tracers of source identity. The global dataset of Sr-Nd isotopes from oceanic basalts defines a **mantle array** — an anticorrelation between ⁸⁷Sr/⁸⁶Sr and εNd — that spans from the depleted MORB mantle (DMM) end-member (⁸⁷Sr/⁸⁶Sr ~0.7025, εNd ~+10) to enriched OIB end-members. Plume-related OIB define several isotopic end-members: DMM (depleted), HIMU (high ²⁰⁶Pb/²⁰⁴Pb, recycled oceanic crust), EM1 and EM2 (enriched mantle; EM2 has very high ⁸⁷Sr/⁸⁶Sr ~0.706, interpreted as recycled sediment), and FOZO (a focal zone component common to many plume sources, possibly lower mantle material). Arc lavas plot off the mantle array toward high ⁸⁷Sr/⁸⁶Sr due to slab-derived fluid and sediment contamination.

The Pb isotope system is the most sensitive tracer of long-term U/Pb and Th/Pb history because uranium and lead are strongly fractionated by mantle processes. The **northern hemisphere reference line (NHRL)** and the **geochron** (the primordial Pb growth curve) divide the Pb isotope space into fields corresponding to different mantle reservoirs and recycled components. HIMU plotting to the right of the geochron reflects ancient oceanic crust with elevated μ; most continental crustal samples plot to the upper left. Plotting ²⁰⁸Pb/²⁰⁴Pb vs ²⁰⁶Pb/²⁰⁴Pb allows discrimination of Th/U history independently of U/Pb, providing an additional dimension of source characterisation.

**REE patterns and depth of melting.** The diagnostic power of REE patterns comes from garnet — a mineral stable in the mantle only at pressures above ~2.5 GPa (~80 km (50 mi) depth). Garnet strongly retains HREE in the residue during melting (D_Yb ≈ 5–10), depleting the melt in HREE relative to LREE and producing steep, LREE-enriched patterns (La/Yb > 15 for garnet-facies melts). At shallower depths, the residual mineralogy is spinel-peridotite, in which HREE are weakly compatible (D_Yb ≈ 0.5), and the melt preserves a flatter REE pattern. Therefore, the La/Yb or Ce/Yb ratio of a melt is a direct barometer of melting depth: high Ce/Yb (>15) indicates a garnet-stability source (OIB plume tails, continental intraplate magmas), low Ce/Yb (3–8) indicates shallow MORB-like melting. The **degree of melting** also affects REE patterns: small-degree melts (F ~1%) are more enriched in incompatible LREE than large-degree melts (F ~20%), as incompatible elements are progressively diluted into larger melt fractions.

**Nb anomaly and arc signatures.** One of the most diagnostic geochemical signatures of subduction-zone magmatism is the **negative Nb-Ta anomaly** on a primitive-mantle-normalised spider diagram: a sharp trough at Nb and Ta relative to elements of similar bulk incompatibility (La, Ce on the right; Th, U on the left). This occurs because Nb and Ta are retained in the subducting slab in rutile (TiO₂-structured mineral), while elements like Ba, K, Sr, Pb are highly soluble in aqueous subduction-zone fluids and are efficiently transferred into the mantle wedge. The pattern has the form of a distinctive W-shape at the high-field-strength elements, contrasting sharply with the smooth, hump-shaped spider diagrams of MORB and OIB. Additional arc signatures: high Ba/Nb, high Sr/Nd, positive Pb anomaly, and elevated ⁸⁷Sr/⁸⁶Sr from sediment input.

**Tectonomagmatic discrimination diagrams.** The geochemical contrasts between tectonic settings are large enough that a volcanic rock of unknown origin can often be assigned to its tectonic setting from chemistry alone. The **Nb-Y diagram** of Winchester and Floyd (1977) uses immobile elements (Nb, Y — resistant to metamorphism and hydrothermal alteration) to discriminate between within-plate basalts (high Nb), MORB (intermediate), island arc tholeiites (low Nb, low Y), and calc-alkaline arc basalts. The **Ti-Zr-Y ternary** and **Zr/Y vs Zr** diagrams extend discrimination to more evolved rocks. These diagrams are particularly important for ancient volcanic sequences in metamorphic belts, where original field relationships are lost and major elements have been modified by alteration, but immobile trace elements still record the original tectonic setting. Applications: fingerprinting ophiolites, identifying accreted oceanic terranes, tracing the provenance of volcanic arcs.`,
      cards: [
        {
          name: 'Sr-Nd-Hf Isotope Systems',
          icon: Globe,
          color: BRAND.accent,
          desc: 'Sr (⁸⁷Rb→⁸⁷Sr, t½ 48.8 Ga): MORB ~0.7025, OIB 0.703–0.706, arc lavas up to 0.710 from slab fluid and sediment. Nd (¹⁴⁷Sm→¹⁴³Nd): εNd +8 to +10 MORB, +3 to +8 OIB, negative continental crust. Sr-Nd anticorrelation = mantle array. Hf (¹⁷⁶Lu→¹⁷⁶Hf): εHf parallels εNd; garnet residue in source raises Lu/Hf and increases εHf. Isotopes unchanged by melting — pure source fingerprints.',
          examples: 'Azores OIB: ⁸⁷Sr/⁸⁶Sr ~0.7035, εNd ~+5 — enriched plume component · Hawaii MORB end-member: ⁸⁷Sr/⁸⁶Sr ~0.7025, εNd ~+8 · Andes arc lavas: ⁸⁷Sr/⁸⁶Sr up to 0.707 from Andean basement assimilation',
        },
        {
          name: 'Pb Isotopes & Mantle End-Members',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Three decay chains: ²³⁸U→²⁰⁶Pb, ²³⁵U→²⁰⁷Pb, ²³²Th→²⁰⁸Pb. μ = ²³⁸U/²⁰⁴Pb controls ²⁰⁶Pb growth rate. HIMU: ²⁰⁶Pb/²⁰⁴Pb >20.5, ancient recycled oceanic crust, 1–2 Ga mantle storage. EM2: high ⁸⁷Sr/⁸⁶Sr and ²⁰⁶Pb, recycled pelagic sediment. DMM: lowest radiogenic Pb. Pb-Pb plots delineate mantle reservoirs and identify crustal contamination.',
          examples: 'St. Helena (HIMU): ²⁰⁶Pb/²⁰⁴Pb ~20.8, classic recycled oceanic crust signal · Tristan da Cunha (EM1): low ²⁰⁶Pb/²⁰⁴Pb, delaminated subcontinental lithosphere · Samoa (EM2): highest ⁸⁷Sr/⁸⁶Sr OIB globally ~0.7089, subducted sediment signature',
        },
        {
          name: 'REE Patterns & Melting Depth',
          icon: BarChart,
          color: BRAND.jade,
          desc: 'Chondrite-normalised spider diagrams reveal depth via garnet signature. Garnet: D_Yb ~5–10, D_La ~0.001 → HREE depleted in melt → steep La/Yb >15 = deep (>80 km (50 mi)) garnet-facies melting. Spinel-peridotite: D_Yb ~0.5 → flat pattern, La/Yb 3–8 = shallow MORB melting. Ce/Yb as barometer. Small degree of melting (F ~1%) → more enriched LREE. Compatible elements (Ni, Cr) track fractional crystallisation.',
          examples: 'MORB: flat REE, La/Yb ~1–3, shallow spinel melting at <80 km (50 mi) · Hawaiian tholeiite: La/Yb ~5–8, mixed spinel-garnet source · OIB alkali basalt: La/Yb >20, deep garnet-peridotite melting at >100 km (62 mi)',
        },
        {
          name: 'Arc Signatures & Tectonomagmatic Discrimination',
          icon: Layers,
          color: BRAND.amethyst,
          desc: 'Negative Nb-Ta anomaly on spider diagram: rutile in slab retains Nb-Ta; aqueous fluids carry Ba, K, Sr, Pb into wedge → W-shape trough at Nb-Ta. High Ba/Nb, Sr/Nd, positive Pb anomaly. Discrimination diagrams: Nb-Y (Winchester & Floyd), Ti-Zr-Y ternary, Zr/Y vs Zr use immobile elements — robust through metamorphism and alteration. Applied to ancient terranes to assign tectonic setting from chemistry alone.',
          examples: 'Cascades arc: strongly negative Nb anomaly, Ba/Nb >50 vs MORB ~5 · Pilbara craton greenstone belts: Zr/Y–Nb-Y diagrams identify Archean arc basalts · Philippines ophiolites: Ti-Zr-Y chemistry confirms suprasubduction-zone origin',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From mantle source to isotopic fingerprint: the geochemical tracer pathway',
      body: 'This flow diagram traces how the isotopic and trace-element signature of a mantle source is recorded in an erupted volcanic rock — from source heterogeneity, through partial melting and melt migration, to the analytical signals measured in the laboratory and plotted on discrimination diagrams.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how mantle source heterogeneity and melting conditions are encoded in the radiogenic isotope ratios and trace element patterns of volcanic rocks, and how geochemists decode those signals to fingerprint tectonic settings and identify recycled crustal components',
        nodes: [
          {
            id: 'mantle-source',
            label: 'Mantle Source Region',
            description: 'Heterogeneous mantle contains isotopically distinct domains: depleted MORB mantle (DMM), HIMU (recycled oceanic crust, elevated μ), EM1/EM2 (enriched components, recycled sediment or lithosphere), and FOZO (focal zone, lower mantle). Each domain carries its own ⁸⁷Sr/⁸⁶Sr, εNd, ²⁰⁶Pb/²⁰⁴Pb inherited from billions of years of radioactive decay.',
            color: BRAND.accent,
          },
          {
            id: 'partial-melting',
            label: 'Partial Melting',
            description: 'Pressure release (MORB, OIB) or fluid flux (arcs) triggers partial melting. Degree of melting (F) and residual mineralogy (garnet vs spinel peridotite) control trace element partitioning. Isotope ratios pass unchanged into the melt; incompatible trace elements concentrate preferentially in melt; compatible elements remain in the residue.',
            color: BRAND.accentHot,
          },
          {
            id: 'crustal-contamination',
            label: 'Crustal Contamination / AFC',
            description: 'As melt ascends through the lithosphere and crust, assimilation of wall rock and fractional crystallisation (AFC) can shift isotope ratios toward continental crustal values (higher ⁸⁷Sr/⁸⁶Sr, lower εNd, modified Pb). The magnitude of contamination depends on the thermal regime and magma flux. Sub-arc crustal contamination can mimic slab signatures in some isotope systems.',
            color: BRAND.coral,
          },
          {
            id: 'eruption-sampling',
            label: 'Eruption & Sample Collection',
            description: 'Fresh, unweathered volcanic glass or whole-rock samples are collected. Sample selection criteria: no secondary alteration, no xenoliths, representative of the primary magmatic suite. Isotope ratios in volcanic rocks are essentially frozen at eruption time — even low-temperature weathering affects Sr more than Nd or Pb, so fresh glass is preferred for Sr isotope work.',
            color: BRAND.gold,
          },
          {
            id: 'isotope-analysis',
            label: 'Isotope Ratio Measurement',
            description: 'Samples dissolved in acid; elements separated by ion exchange chromatography; ⁸⁷Sr/⁸⁶Sr, ¹⁴³Nd/¹⁴⁴Nd, ²⁰⁶Pb/²⁰⁴Pb–²⁰⁷Pb/²⁰⁴Pb–²⁰⁸Pb/²⁰⁴Pb measured by TIMS or MC-ICP-MS. Precisions: ±0.00002 for Sr; ±0.3 εNd units. Trace elements by ICP-MS or XRF. Data quality controlled by international reference standards (BHVO-2, BCR-2).',
            color: BRAND.amethyst,
          },
          {
            id: 'discrimination-diagrams',
            label: 'Mantle Source Fingerprinting',
            description: 'Data plotted on Sr-Nd mantle array, Pb-Pb diagrams, chondrite-normalised REE spider diagrams, and tectonomagmatic discrimination diagrams (Nb-Y, Ti-Zr-Y, Zr/Y). Isotope ratios identify which mantle end-member(s) contributed to the source; REE patterns constrain melting depth and degree; Nb anomaly indicates arc vs intraplate; mixing calculations quantify recycled component fractions.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'mantle-source',         to: 'partial-melting',        label: 'Isotope ratios and incompatible element budget inherited by melt' },
          { from: 'partial-melting',        to: 'crustal-contamination',  label: 'Primary melt ascends through lithosphere' },
          { from: 'crustal-contamination',  to: 'eruption-sampling',      label: 'Modified melt erupts and is sampled fresh' },
          { from: 'eruption-sampling',      to: 'isotope-analysis',       label: 'Clean whole-rock or glass powders dissolved and measured' },
          { from: 'isotope-analysis',       to: 'discrimination-diagrams', label: 'Ratios and concentrations plotted on isotope and REE diagrams' },
          { from: 'crustal-contamination',  to: 'discrimination-diagrams', label: 'AFC modelling corrects for crustal overprint' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A volcanic suite from a Pacific island chain shows ⁸⁷Sr/⁸⁶Sr ratios of 0.7028–0.7032, εNd values of +6 to +8, and ²⁰⁶Pb/²⁰⁴Pb of 20.6–21.0. The chondrite-normalised REE pattern shows La/Yb = 18 with strongly depleted HREE. What do these data indicate about the source and melting conditions?',
          a: [
            'The isotopic data (moderate ⁸⁷Sr/⁸⁶Sr, positive εNd, elevated ²⁰⁶Pb/²⁰⁴Pb) indicate a HIMU-influenced OIB source — ancient recycled oceanic crust in the deep mantle plume; the high La/Yb (18) and depleted HREE demonstrate melting occurred in the garnet stability field at depths >80 km (50 mi), consistent with a deep mantle plume source tapped at low degrees of partial melting; together the data point to a deep-mantle plume with a recycled oceanic crust component, melting at high pressure in the garnet peridotite field',
            'The high La/Yb ratio indicates crustal contamination of a MORB-like magma — continental crust has high La/Yb and the isotopic data simply reflect assimilation of old continental basement with high ²⁰⁶Pb/²⁰⁴Pb; the OIB interpretation is incorrect because the εNd values (+6 to +8) are too high for a truly enriched mantle source',
            'The data indicate a typical mid-ocean ridge basalt (MORB) source: ⁸⁷Sr/⁸⁶Sr below 0.703 is characteristic of the depleted MORB mantle, the positive εNd confirms a depleted source, and the high La/Yb simply reflects the shallow pressure of MORB melting in the spinel stability field; no recycled component or plume is required',
            'The elevated ²⁰⁶Pb/²⁰⁴Pb (>20.5) combined with the flat spider diagram typical of MORB proves this is a subduction-zone magma contaminated by pelagic sediment — sediments have high ²⁰⁶Pb from uranium-rich components, and the La/Yb ratio reflects sediment mixing rather than garnet-stability melting',
          ],
          correct: 0,
          explain: '⁸⁷Sr/⁸⁶Sr of 0.7028–0.7032 and εNd of +6 to +8 plot squarely in the OIB field on the mantle array, clearly distinct from depleted MORB (εNd ~+10, ⁸⁷Sr/⁸⁶Sr ~0.7025) and from enriched arc lavas (⁸⁷Sr/⁸⁶Sr up to 0.710). The ²⁰⁶Pb/²⁰⁴Pb >20.5 specifically defines the HIMU component — recycled oceanic crust that accumulated high radiogenic Pb through elevated μ (²³⁸U/²⁰⁴Pb) over 1–2 Ga of mantle storage. A is correct. Continental contamination (B) is inconsistent with positive εNd values — old continental crust has strongly negative εNd (−5 to −20), and would shift the data to high ⁸⁷Sr/⁸⁶Sr and low εNd, the opposite of what is observed. MORB source (C) is ruled out by the La/Yb ratio: shallow spinel-peridotite MORB melting produces La/Yb of ~1–3, not 18; additionally MORB ²⁰⁶Pb/²⁰⁴Pb is typically 17.5–18.5, far below the 20.6–21.0 observed. Subduction-zone contamination (D) by sediment would produce strongly negative Nb anomalies and high ⁸⁷Sr/⁸⁶Sr from marine sediment Sr, inconsistent with the isotopic values given; furthermore, high La/Yb in arcs reflects source enrichment and shallow melting, not the deep garnet signature — the HREE depletion is the diagnostic indicator of garnet stability, not a mixing artefact.',
        },
        {
          q: 'A geochemist analyses an ancient greenstone belt and measures the following for a suite of metabasalts: Nb = 1.5 ppm, Y = 22 ppm, Ti/Zr = 90, Zr/Y = 2.8, and the primitive-mantle-normalised spider diagram shows a pronounced trough at Nb and Ta. What tectonic setting does this chemistry indicate, and which specific geochemical feature is the most diagnostic?',
          a: [
            'The chemistry indicates a within-plate (OIB) setting: the Nb content of 1.5 ppm is consistent with enriched mantle sources, the Zr/Y ratio of 2.8 falls within the intraplate field on the Zr/Y vs Zr diagram, and the Nb-Ta trough simply reflects the low overall concentrations in a primitive melt, not a true subduction signature; no arc interpretation is supported',
            'The chemistry is consistent with MORB: Nb/Y ratios of ~0.07 and Zr/Y ~2.8 fall in the MORB field of discrimination diagrams; the Nb-Ta trough is a typical feature of all oceanic basalts because they are depleted in these elements relative to chondritic abundances; the Ti/Zr ratio of 90 is within the normal range for mid-ocean ridge petrogenesis',
            'The low Nb (1.5 ppm) relative to Y (22 ppm) plots in the volcanic arc basalt (VAB) field of the Nb-Y discrimination diagram; the negative Nb-Ta anomaly on the spider diagram is the most diagnostic feature — it reflects slab rutile retention of Nb-Ta during subduction, while fluid-mobile elements are selectively added to the mantle wedge; Zr/Y ~2.8 and Ti/Zr ~90 are consistent with island arc tholeiite; the greenstone belt likely represents an ancient subduction-zone arc system',
            'The data indicate an extensional back-arc basin setting: Nb depletion in back-arc basins results from proximity to the arc and partial entrainment of arc-like mantle; the Y content of 22 ppm reflects high degrees of melting typical of back-arc extension; Zr/Y of 2.8 confirms back-arc rather than true arc chemistry',
          ],
          correct: 2,
          explain: 'The combination of low Nb (1.5 ppm) relative to Y (22 ppm) — giving Nb/Y ~0.07 — plots unambiguously in the volcanic arc basalt (VAB) field on the Winchester and Floyd Nb-Y diagram; within-plate basalts (OIB) have Nb/Y >0.5, and MORB has Nb/Y ~0.2–0.4, making A and B incorrect. The negative Nb-Ta anomaly is the single most diagnostic arc feature: rutile is stable in the subducted basaltic oceanic crust at pressures above ~2.5 GPa and temperatures below ~800°C (1472°F), and it has partition coefficients for Nb and Ta of 50–200, effectively sequestering these elements in the slab. Aqueous slab-derived fluids, which metasomatise the mantle wedge, are unable to mobilise Nb or Ta because their solubility in aqueous fluids is extremely low; they efficiently transport Ba, K, Sr, and Pb. The result is a mantle wedge — and the arc melts it produces — that is strongly depleted in Nb-Ta relative to all other incompatible elements of similar bulk partition coefficient. C correctly identifies this as the diagnostic feature. Back-arc basins (D) do show some Nb depletion and arc-like chemistry, but Zr/Y ~2.8 with Ti/Zr ~90 and a pronounced Nb-Ta trough together are more consistent with island arc tholeiite than typical back-arc MORB, which plots closer to the MORB field with less pronounced Nb anomalies.',
        },
        {
          q: 'The Sr-Nd isotopic mantle array shows a robust anticorrelation: as ⁸⁷Sr/⁸⁶Sr increases, εNd decreases. What is the fundamental geochemical reason for this anticorrelation, and why do arc lavas plotting off the mantle array toward high ⁸⁷Sr/⁸⁶Sr not necessarily also show very low εNd?',
          a: [
            'The anticorrelation reflects the fact that Rb and Sm are both lithophile elements that behave identically during partial melting — rocks with high Rb always have high Sm; therefore depletion events that raise Sm/Nd always also raise Rb/Sr; arc lavas plot off the array because their Sr isotope ratios are modified by seawater-altered oceanic crust in the subducting slab, which has high ⁸⁷Sr/⁸⁶Sr from seawater exchange (⁸⁷Sr/⁸⁶Sr of seawater ~0.7092) but delivers Sr via aqueous fluid without proportionally shifting Nd isotopes, which are fluid-immobile',
            'The anticorrelation is a coincidence of the two radioactive decay systems having similar half-lives (~50 Ga for each), meaning that rocks of the same age always plot on a line in Sr-Nd space regardless of source composition; arc lavas are younger and therefore do not show the same age-controlled correlation',
            'The anticorrelation occurs because Rb and Nd are both strongly incompatible elements and always co-vary; Sm and Sr are both compatible and always co-vary; therefore mantle depletion (removing melt) always simultaneously depletes Rb (lowering ⁸⁷Sr growth) and enriches Sm/Nd (raising εNd), producing the array; arc lavas have anomalously high ⁸⁷Sr/⁸⁶Sr because arc crust is always older than oceanic crust and has had more time to build up radiogenic Sr',
            'The anticorrelation is produced because Sr is a compatible element in garnet and Nd is incompatible in garnet — high-pressure melting that retains garnet removes Sr from melts more than Nd, so deeper melts have higher εNd and lower ⁸⁷Sr/⁸⁶Sr; arc lavas form by shallow melting without garnet in the residue, so they show higher ⁸⁷Sr/⁸⁶Sr and lower εNd than OIB',
          ],
          correct: 0,
          explain: 'The Rb-Sr and Sm-Nd systems produce the mantle array anticorrelation because of contrasting elemental behaviour during mantle melting events: Rb is highly incompatible (Rb/Sr increases in melts, decreases in depleted residues), so long-depleted mantle has low Rb/Sr and therefore low ⁸⁷Sr/⁸⁶Sr; Sm and Nd are both REE but Nd is more incompatible than Sm, so melting increases Sm/Nd in the residue and depleted mantle has high εNd. The result is that ancient depletion events produce low ⁸⁷Sr/⁸⁶Sr and high εNd simultaneously, while enrichment events (adding melt or metasomatic fluid) do the opposite — generating the anticorrelation. A correctly identifies why arc lavas can have high ⁸⁷Sr/⁸⁶Sr without corresponding low εNd: altered oceanic crust and slab-derived fluids are rich in Sr (seawater-exchanged, ⁸⁷Sr/⁸⁶Sr ~0.709) but Nd is fluid-immobile and stays in the slab — so the fluid component shifts the arc lava Sr isotopes off the mantle array without a proportionate Nd isotope shift. The half-life argument (B) is incorrect — Rb-Sr half-life is 48.8 Ga; Sm-Nd is 106 Ga — they differ by a factor of two, and the correlation is not a coincidence of half-lives but of correlated elemental behaviour during mantle processes. Rb and Nd are not geochemically similar (C misassigns elemental incompatibilities; Sm and Sr behave very differently). Sr is not significantly compatible in garnet — garnet preferentially incorporates HREE and Y, not Sr or Nd (D confuses the role of garnet in the REE system with a spurious Sr-garnet compatibility).',
        },
        {
          q: 'Geochemists studying a basalt suite from the East African Rift find that the samples span a wide range of ⁸⁷Sr/⁸⁶Sr (0.7028 to 0.7075) with a corresponding negative correlation with εNd. Trace element modelling shows that some high-⁸⁷Sr/⁸⁶Sr samples also have elevated SiO₂ and negative Eu anomalies. How should these observations be interpreted, and which isotopic feature would help distinguish subcontinental lithospheric mantle (SCLM) contamination from bulk crustal assimilation?',
          a: [
            'The wide range in ⁸⁷Sr/⁸⁶Sr with negative Eu anomalies and elevated SiO₂ in the high-Sr samples indicates fractional crystallisation of plagioclase — plagioclase preferentially incorporates Eu²⁺ over other REE, so its removal creates a negative Eu anomaly; high SiO₂ reflects evolved magma composition; no crustal contamination is required, and the Sr isotope range reflects source heterogeneity within the SCLM; the εNd correlation is expected because the lithospheric mantle also has ancient low εNd',
            'The Sr isotope range and negative Eu anomalies are both diagnostic of HIMU contamination from recycled oceanic crust — recycled basalt is SiO₂-rich relative to peridotite, and the HIMU component is inherently plagioclase-saturated; the high ⁸⁷Sr/⁸⁶Sr simply reflects the ancient subduction event that created the HIMU component; no crustal assimilation is occurring',
            'The isotopic range, negative Eu anomalies, and high SiO₂ together indicate Assimilation-Fractional Crystallisation (AFC) involving continental crust — negative Eu anomalies indicate plagioclase-bearing crustal lithologies (granitic basement) are being assimilated, which also carries old radiogenic Sr (high ⁸⁷Sr/⁸⁶Sr) and low εNd; to distinguish SCLM contamination (which would shift ⁸⁷Sr/⁸⁶Sr and εNd toward old lithospheric values but would NOT produce Eu anomalies, as the SCLM is plagioclase-free at mantle pressures) from crustal AFC, the presence of negative Eu anomalies in the most contaminated samples is diagnostic of crustal — not lithospheric mantle — contamination',
            'The data indicate hydrothermal alteration of the samples rather than primary geochemical variation — seawater interaction with basalt elevates ⁸⁷Sr/⁸⁶Sr toward the seawater value of 0.709 and depletes Eu through preferential leaching; the εNd correlation is secondary; fresh sample reselection would eliminate the isotopic range; no tectonic or source interpretation is valid without confirming sample freshness first',
          ],
          correct: 2,
          explain: 'Negative Eu anomalies are produced when plagioclase (which uniquely prefers Eu²⁺ over trivalent REE) is involved — either through plagioclase fractionation from the magma or assimilation of plagioclase-bearing rocks. At mantle pressures (>1 GPa), plagioclase is not stable, so the SCLM and asthenospheric mantle contain no plagioclase. Therefore, a negative Eu anomaly in a mantle-derived melt requires either (1) plagioclase fractionation in a shallow magma chamber, or (2) assimilation of continental crust (which is plagioclase-rich). When combined with high ⁸⁷Sr/⁸⁶Sr (old radiogenic Sr from ancient continental crust), elevated SiO₂ (granitic or intermediate crustal composition), and low εNd (negative, crustal-like), the negative Eu anomaly becomes the critical discriminant — it rules out SCLM contamination alone and implicates crustal material. C is correct. A is partly reasonable in invoking plagioclase fractionation for the Eu anomaly, but fractional crystallisation of plagioclase does not shift Sr isotope ratios — it cannot explain the correlated ⁸⁷Sr/⁸⁶Sr increase; mixing and assimilation are required. HIMU (B) has high ²⁰⁶Pb/²⁰⁴Pb, moderate ⁸⁷Sr/⁸⁶Sr (~0.703–0.704), and positive εNd — it does not produce the high ⁸⁷Sr/⁸⁶Sr values of 0.707–0.708 observed, and recycled oceanic crust is not plagioclase-saturated at mantle pressures. Seawater alteration (D) elevates ⁸⁷Sr/⁸⁶Sr toward 0.709 but does not create systematic REE anomalies correlated with isotope ratios, and it does not lower εNd — Nd is fluid-immobile during alteration; the correlated multi-isotope shift argues strongly for a primary magmatic process.',
        },
        {
          q: 'An isotope geochemist plots ²⁰⁶Pb/²⁰⁴Pb vs ²⁰⁷Pb/²⁰⁴Pb for a suite of ocean island basalts and finds that one island plots distinctly above the Northern Hemisphere Reference Line (NHRL) with ²⁰⁶Pb/²⁰⁴Pb = 19.3 and a high ²⁰⁸Pb/²⁰⁴Pb for its ²⁰⁶Pb/²⁰⁴Pb value (high Δ8/4). The island also has high ⁸⁷Sr/⁸⁶Sr (~0.7060) and weakly negative εNd. What mantle end-member does this fingerprint, and what material is inferred to be recycled in the plume source?',
          a: [
            'The fingerprint matches the HIMU mantle end-member — ²⁰⁶Pb/²⁰⁴Pb of 19.3 is in the elevated range characteristic of HIMU, and high Δ8/4 (high ²⁰⁸Pb/²⁰⁴Pb relative to ²⁰⁶Pb/²⁰⁴Pb) reflects a high Th/U source; the high ⁸⁷Sr/⁸⁶Sr is inconsistent with HIMU but can be explained by shallow crustal contamination; HIMU sources are thought to represent recycled ancient oceanic crust stored in the deep mantle for 1–2 Ga',
            'The fingerprint matches the EM2 (Enriched Mantle 2) end-member — high ⁸⁷Sr/⁸⁶Sr (~0.706), weakly negative εNd, moderate ²⁰⁶Pb/²⁰⁴Pb (not extreme HIMU values), and high Δ8/4 indicating elevated Th/U characteristic of terrigenous (continent-derived) pelagic sediment — all consistent with EM2; the recycled material is interpreted as subducted pelagic or terrigenous sediment that entered the deep mantle at an ancient subduction zone and has been stored for hundreds of millions of years before entrainment in a mantle plume',
            'The fingerprint matches the DMM (Depleted MORB Mantle) end-member — the NHRL is defined by depleted MORB mantle, and plotting above the NHRL means the sample is more depleted than average MORB; the high ⁸⁷Sr/⁸⁶Sr is an analytical artefact from incomplete spike equilibration during TIMS analysis; the moderate ²⁰⁶Pb/²⁰⁴Pb is consistent with the depleted upper mantle residue',
            'The fingerprint is unique and does not correspond to any recognised mantle end-member — the combination of elevated ²⁰⁶Pb/²⁰⁴Pb and high ⁸⁷Sr/⁸⁶Sr is internally inconsistent because high-μ (high ²⁰⁶Pb) sources always have low ⁸⁷Sr/⁸⁶Sr; the data must reflect post-eruption seawater contamination of the basalt samples',
          ],
          correct: 1,
          explain: 'The EM2 (Enriched Mantle 2) end-member is defined by: (1) the highest ⁸⁷Sr/⁸⁶Sr among the mantle end-members (~0.706–0.709, exemplified by Samoa with ⁸⁷Sr/⁸⁶Sr up to 0.7089); (2) weakly negative εNd (crustal-like enrichment); (3) moderate ²⁰⁶Pb/²⁰⁴Pb (not extreme HIMU values); (4) high ²⁰⁸Pb/²⁰⁴Pb for a given ²⁰⁶Pb/²⁰⁴Pb (high Δ8/4), reflecting a high Th/U source — terrigenous sediment has high Th/U because Th is enriched in crustal rocks while U is mobilised by oxidising fluids. The high ⁸⁷Sr/⁸⁶Sr reflects the ancient high-Rb/Sr of continental sediment; EM2 is therefore interpreted as recycled terrigenous (continent-derived) pelagic sediment subducted into the deep mantle at ancient subduction zones. B is correct. HIMU (A) is ruled out by the high ⁸⁷Sr/⁸⁶Sr — HIMU end-members (St. Helena, Tubuai) have low ⁸⁷Sr/⁸⁶Sr (~0.7025–0.7030) because ancient oceanic crust has low Rb/Sr; the high ⁸⁷Sr/⁸⁶Sr described is diagnostic of EM2, not HIMU, and cannot be explained away as crustal contamination in an island-ocean setting with no nearby continental crust. DMM (C) plotting above the NHRL is not an indicator of depletion — the NHRL is an empirical reference line through the distribution of Northern Hemisphere basalt Pb data; the high ⁸⁷Sr/⁸⁶Sr of 0.706 is completely irreconcilable with DMM (which has ⁸⁷Sr/⁸⁶Sr ~0.7022–0.7026). The claim that high ²⁰⁶Pb/²⁰⁴Pb and high ⁸⁷Sr/⁸⁶Sr are mutually exclusive (D) is false — EM2 sources commonly have both, because the high Rb/Sr (→ high ⁸⁷Sr/⁸⁶Sr) and moderate U enrichment of sediment can both be present simultaneously; HIMU has high ²⁰⁶Pb AND low ⁸⁷Sr/⁸⁶Sr, but EM2 follows a different evolutionary path.',
        },
      ],
    },
  ],
}

export default volcanicGeochemistryTracers
