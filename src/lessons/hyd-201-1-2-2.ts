import { Activity, Globe, Layers, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const nutrientCyclingWaterQuality: Lesson = {
  id: 'hyd-201-1-2-2',
  title: 'Nutrient Cycling and Water Quality in Watersheds',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Nitrogen and phosphorus cycling from watershed to coast: eutrophication, hypoxic zones, riparian buffers, TMDLs, and emerging contaminants in freshwater systems.',
  sources: [
    { org: 'EPA',     title: 'US EPA — Nutrient Pollution and Water Quality',                         url: 'https://www.epa.gov/nutrientpollution' },
    { org: 'USGS',   title: 'USGS — National Water Quality Program',                                  url: 'https://www.usgs.gov/mission-areas/water-resources/science/national-water-quality-program' },
    { org: 'Hubbard Brook', title: 'Hubbard Brook Experimental Forest — Long-Term Ecosystem Research', url: 'https://hubbardbrook.org/' },
    { org: 'EPA',    title: 'EPA — Total Maximum Daily Loads (TMDLs)',                                url: 'https://www.epa.gov/tmdl' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'From nitrogen deposition to coastal dead zones: how nutrients travel through watersheds and reshape aquatic ecosystems',
      body: `Watersheds are biogeochemical reactors. Precipitation, weathering, atmospheric deposition, and human inputs add nitrogen, phosphorus, and other elements to the landscape; biological uptake, transformation, and export to streams determine how much reaches coastal waters. The nutrient dynamics of watersheds sit at the intersection of hydrology, soil science, ecology, and chemistry — and increasingly, of regulatory policy, because excess nitrogen and phosphorus from agricultural and urban sources are the most pervasive causes of freshwater and coastal water quality impairment worldwide.

**The nitrogen cycle in watersheds** begins with atmospheric inputs: wet deposition (dissolved NO₃⁻ and NH₄⁺ in rain) and dry deposition (particulate and gaseous NO₂, HNO₃, NH₃). In forest soils, mineralisation converts organic N to ammonium (NH₄⁺); nitrification (performed by Nitrosomonas and Nitrobacter) oxidises NH₄⁺ to NO₂⁻ and then NO₃⁻. Nitrate is the most mobile N form — anionically repelled from negatively charged soil surfaces — and leaches readily to groundwater and streams. Plant uptake, microbial immobilisation, and denitrification (the anaerobic reduction of NO₃⁻ to N₂ gas by heterotrophic bacteria in waterlogged soils) represent the primary biological sinks. In agricultural systems, synthetic N fertiliser (primarily urea and ammonium nitrate) far exceeds biological demand, and excess N leaves the root zone by leaching or surface runoff. **Tile drainage systems** — subsurface pipes installed at 60–120 cm depth across millions of hectares of Midwestern US cropland — intercept shallow groundwater and deliver it directly to streams, bypassing the denitrification capacity of riparian wetlands and soils. Studies show tile drains deliver approximately 50% of agricultural nitrogen directly to Midwestern streams in this way.

The **Gulf of Mexico hypoxic zone** is the most dramatic consequence of this watershed-scale nitrogen and phosphorus loading. The Mississippi-Atchafalaya River system delivers approximately 1.5 million metric tonnes of nitrogen per year to the Gulf — roughly twice the pre-European-settlement N flux, driven by fertiliser and atmospheric deposition. When this nitrogen reaches the stratified coastal waters of the northern Gulf in late spring, it stimulates massive algal blooms (primarily diatoms and dinoflagellates). As the algae die and sink, bacterial decomposition of the settled organic matter depletes dissolved oxygen in the bottom waters — creating a "dead zone" (DO < 2 mg/L, or < 20% saturation) that typically covers 15,000–20,000 km² each summer, peaking in July. Fish, shrimp, and crabs either flee or suffocate. The zone forms when stratification (warm surface waters over cold bottom waters) prevents re-oxygenation from the atmosphere; it collapses in autumn when hurricanes or cold fronts mix the water column.

**Phosphorus** behaves fundamentally differently from nitrogen in watersheds. Unlike the anion NO₃⁻, phosphate (H₂PO₄⁻, HPO₄²⁻) sorbs strongly to iron and aluminium oxyhydroxides and calcium carbonate in soils, and is delivered to streams primarily **attached to eroding soil particles** rather than in dissolved form. This means sediment control (cover crops, buffer strips, reduced tillage) is the primary lever for reducing particulate phosphorus export. **Point sources** — wastewater treatment plant effluents, industrial discharges — are the dominant phosphorus inputs to many urban streams and lakes, because dissolved reactive phosphorus in sewage is not fully removed by secondary treatment (tertiary treatment with chemical precipitation is required). In **freshwater lakes**, P is typically the limiting nutrient for algal growth (because atmospheric N fixation can partially compensate for N deficiency, while there is no analogous P fixation pathway); in **coastal marine waters**, N is more often limiting, explaining why the Gulf of Mexico hypoxic zone is more strongly driven by N loading than P.

The **Hubbard Brook Experimental Forest** in New Hampshire provided the foundational empirical evidence for watershed nutrient cycling. The landmark 1965–1967 clear-cutting experiment (Likens, Bormann, and colleagues) removed all vegetation from watershed 2 and applied herbicide to prevent regrowth; streamwater NO₃⁻ concentrations rose approximately 40-fold compared to the reference watershed, and annual nitrate export increased from ~2 to ~120 kg/ha/yr. The result demonstrated that forest vegetation uptake is the dominant control on stream nitrate concentrations — something now obvious but at the time a major scientific advance. Hubbard Brook also established the first complete watershed-scale water and element budgets and revealed the importance of acid rain: decades of monitoring showed sulphate and nitrate deposition from coal combustion acidified soils and streams in the Northeast, leaching base cations (Ca²⁺, Mg²⁺) and aluminium from soils to streams.

**Riparian buffers** — zones of native vegetation maintained along stream banks — are the most cost-effective management tool for reducing nonpoint-source nutrient pollution. Denitrification in waterlogged riparian soils can remove 60–90% of groundwater nitrate before it reaches the stream. Experimental data from intensively agricultural watersheds suggest that 30 m wide riparian buffers can remove >80% of incoming nitrate from shallow groundwater. However, buffers are not a complete solution: (1) they do not intercept tile drain water, which bypasses the riparian zone; (2) they lose effectiveness in coarse-textured, well-drained soils where groundwater bypasses the root zone; (3) they do not significantly reduce phosphorus delivered on eroding sediment.

**Total Maximum Daily Loads (TMDLs)** are the central regulatory mechanism in the US for managing water quality impairment. Under Section 303(d) of the Clean Water Act, states must list impaired water bodies (those failing their designated use — fishing, swimming, drinking water — due to a specific pollutant) and establish TMDLs — the maximum daily pollutant load that allows the water body to achieve water quality standards. A TMDL allocates load reductions among point sources (permitted dischargers), nonpoint sources (agricultural, urban runoff), and background sources. The Chesapeake Bay TMDL, established in 2010, is the largest in US history, setting binding limits on N, P, and sediment from a six-state watershed; it requires extensive monitoring, modelling, and agricultural practice changes across 165,000 km².

**Emerging contaminants** are increasingly recognised as a freshwater quality threat beyond classical nutrients and heavy metals. **Pharmaceuticals and personal care products (PPCPs)** — including 17α-ethinylestradiol (EE2, the synthetic oestrogen in oral contraceptives), antibiotics, antidepressants, and analgesics — enter water bodies through wastewater effluent (conventional treatment does not remove them efficiently). EE2 feminises male fish at concentrations of 1–10 ng/L and is detected in rivers downstream of wastewater outfalls at concentrations in this range globally. **Microplastics** — particles < 5 mm from plastic degradation, synthetic fibres from clothing, and microbeads — are now ubiquitous in freshwater systems; their ecological effects on aquatic invertebrates and fish are under active investigation. **PFAS** (per- and polyfluoroalkyl substances, often called "forever chemicals" due to their extreme environmental persistence, addressed in detail in hyd-201-1-2-4) represent perhaps the most widespread emerging groundwater and surface water contamination challenge of the current era.`,
      keyTerms: [
        {
          term: 'Nitrification / Denitrification',
          def: 'Nitrification: aerobic oxidation of NH₄⁺ → NO₂⁻ → NO₃⁻ by autotrophic bacteria (Nitrosomonas, Nitrobacter). Denitrification: anaerobic reduction of NO₃⁻ → N₂O → N₂ by heterotrophic bacteria in waterlogged soils; the primary pathway removing reactive N from watersheds.',
        },
        {
          term: 'Tile Drainage',
          def: 'Subsurface perforated pipes at 60–120 cm depth that intercept shallow groundwater and route it directly to streams. Converts diffuse soil-water flow to rapid conduit flow, bypassing riparian denitrification; delivers ~50% of agricultural N loads in tile-drained Midwestern US watersheds.',
        },
        {
          term: 'Hypoxia (Dead Zone)',
          def: 'Dissolved oxygen depletion (<2 mg/L) in bottom waters caused by decomposition of algal blooms stimulated by excess nutrient loading. Gulf of Mexico hypoxic zone: ~15,000–20,000 km² each summer from Mississippi River N+P loading (~1.5 M tons N/yr).',
        },
        {
          term: 'Riparian Buffer',
          def: 'Zone of native vegetation maintained along stream banks that removes nitrate from shallow groundwater via denitrification and plant uptake. A 30 m buffer can remove >80% of groundwater NO₃⁻, but does not intercept tile-drained water that bypasses the riparian zone.',
        },
        {
          term: 'Total Maximum Daily Load (TMDL)',
          def: 'Regulatory tool under Clean Water Act Section 303(d) that sets the maximum daily pollutant load a water body can receive and still meet water quality standards. Allocates loads among point sources, nonpoint sources, and background; largest US TMDL is the Chesapeake Bay (N, P, sediment from a six-state watershed).',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Nutrient sources, transport pathways, and the eutrophication cascade',
      body: `Eutrophication — the enrichment of water with nutrients, leading to algal blooms, oxygen depletion, and ecosystem degradation — is the endpoint of a chain of processes that begins with nutrient application or deposition on the landscape and ends in aquatic ecosystem collapse. Understanding each link in this chain, and where it can be broken, is the basis for watershed-scale nutrient management.`,
      cards: [
        {
          name: 'Agricultural Nonpoint Sources',
          icon: Globe,
          color: BRAND.accent,
          desc: 'Fertiliser N applied in excess of crop demand leaches as NO₃⁻ through tile drains to streams. Particulate P lost with eroding sediment. Livestock manure adds both. Tile drains deliver ~50% of Midwestern agricultural N directly to waterways, bypassing riparian buffers.',
          examples: 'Iowa nitrogen export to Gulf: ~500,000 t/yr. Chesapeake Bay: agricultural N contributes ~40% of total N load from a watershed of 166,000 km². Corn-soy rotations with tile drainage have the highest N loss rates: 20–50 kg N/ha/yr.',
        },
        {
          name: 'Hubbard Brook Clear-Cut Experiment',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Devegetation of watershed 2 (1965–67) raised stream NO₃⁻ 40-fold vs reference (W6). Annual N export rose from ~2 to ~120 kg/ha/yr. Proved forest uptake is the dominant NO₃⁻ sink — nitrification still occurs, but without plant uptake, leaching is unimpeded.',
          examples: 'Stream became "nitrate-dominated" within one year. Experiment also showed accelerated cation leaching: Ca²⁺ export increased 10×. Hubbard Brook acid rain monitoring (1963–present) documented SO₄²⁻ and NO₃⁻ deposition effects on soil base saturation over decades.',
        },
        {
          name: 'Gulf of Mexico Dead Zone',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Mississippi-Atchafalaya delivers ~1.5 M t N/yr + ~0.15 M t P/yr. Spring flood pulse fuels algal growth in stratified Gulf. Bacterial decomposition of settled algae depletes bottom DO to <2 mg/L. Zone covers 15,000–20,000 km² in July; collapses in autumn mixing.',
          examples: '2017: largest ever measured at 22,720 km² (size of New Jersey). NOAA/LUMCON monitoring since 1985. EPA Hypoxia Task Force target: reduce to <5,000 km² by 2035. Target not approached despite 25 years of voluntary agricultural practices.',
        },
        {
          name: 'P Cycling: Sorption and Release',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Phosphate sorbs to Fe/Al oxyhydroxides (aerobic soils) and desorbs under anoxia (Fe³⁺ → Fe²⁺ releases sorbed P). Legacy P in agricultural soils can be released for decades after N/P inputs stop. Freshwater lakes: P typically limiting. Coastal: N typically limiting.',
          examples: 'Lake Erie western basin: internal P loading from anoxic sediments sustains algal blooms even as external loading declines. Monitoring shows sediment can release >1 mg P/m²/day under summer anoxia — rivalling external loads.',
        },
        {
          name: 'Emerging Contaminants',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'PPCPs (pharmaceuticals, 17α-ethinylestradiol), microplastics, and PFAS enter water via wastewater effluent and stormwater. Conventional treatment <30% removal for many compounds. Endocrine disruptors at 1–10 ng/L feminise male fish. PFAS detected globally (see lesson hyd-201-1-2-4).',
          examples: 'Jobling et al. (1998, Science): intersex fish (oocytes in testis) in 100% of male roach downstream of UK wastewater outfalls. EE2 identified as primary cause. US > 50% of sampled streams contain at least one detectable PPCP.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Watershed Nitrogen Pathway: From Fertiliser to Coastal Hypoxia',
      body: 'Trace the movement of reactive nitrogen from agricultural application through tile drains, streams, and the Mississippi River system to the Gulf of Mexico hypoxic zone — and the management interventions that can intercept nitrogen at each step.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how reactive nitrogen applied as agricultural fertiliser moves through soil, tile drainage, riparian buffers, stream networks, and the Mississippi River to create the Gulf of Mexico hypoxic zone, with management intervention points at each stage',
        nodes: [
          {
            id: 'fertiliser-input',
            label: 'Fertiliser & Atmospheric N Input',
            description: 'Synthetic N fertiliser (urea, ammonium nitrate) applied to cropland at rates often exceeding crop uptake by 30–50%. Atmospheric wet and dry deposition adds 5–20 kg N/ha/yr in the US Midwest. Excess N mineralises to NO₃⁻ in aerobic soils, becoming mobile.',
            color: BRAND.accent,
          },
          {
            id: 'soil-processes',
            label: 'Soil N Cycling (Nitrification / Uptake)',
            description: 'Mineralisation converts organic N to NH₄⁺; nitrification oxidises NH₄⁺ to NO₃⁻. Crop uptake removes 60–80% of applied N in well-managed systems. Remaining NO₃⁻ is available for leaching. Denitrification in poorly drained soils removes some; total soil N transformation determines leaching flux.',
            color: BRAND.jade,
          },
          {
            id: 'tile-drainage',
            label: 'Tile Drainage (Bypass Flow)',
            description: 'Subsurface tile drains intercept shallow groundwater at 60–120 cm depth and route it to ditches and streams within hours to days of a rain event. Tile water contains high NO₃⁻ (5–50 mg/L) and bypasses the riparian buffer zone. Estimates suggest tile drains deliver ~50% of agricultural N to Midwestern streams.',
            color: BRAND.gold,
          },
          {
            id: 'riparian-buffer',
            label: 'Riparian Buffer (Denitrification)',
            description: 'Where groundwater flows through (not around) riparian soils, denitrification in waterlogged organic-rich sediments can remove >80% of incoming NO₃⁻. Effectiveness degrades with coarse soils, shallow water tables, and tile drains that route water past the buffer. 30 m buffer standard for most agricultural settings.',
            color: BRAND.coral,
          },
          {
            id: 'stream-river',
            label: 'Stream and River Transport',
            description: 'NO₃⁻ transported by Mississippi-Missouri-Ohio system. Some in-stream denitrification occurs in hyporheic zones and low-velocity reaches, but large rivers are less efficient N processors per unit length. Total N flux to Gulf: ~1.5 M t/yr. Spring flood pulse coincides with peak agricultural N leaching.',
            color: BRAND.ruby,
          },
          {
            id: 'hypoxic-zone',
            label: 'Gulf of Mexico Hypoxic Zone',
            description: 'N and P stimulate spring algal blooms in stratified Gulf waters. Decomposition of settled algae depletes bottom DO to <2 mg/L. Zone covers 15,000–20,000 km² each summer. Eliminates demersal fish and shrimp habitat. Costs Gulf fishing industry tens of millions per year.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'fertiliser-input',  to: 'soil-processes',   label: 'N applied; mineralisation and nitrification produce mobile NO₃⁻' },
          { from: 'soil-processes',    to: 'tile-drainage',     label: 'Excess NO₃⁻ leaches below root zone to tile drain network' },
          { from: 'soil-processes',    to: 'riparian-buffer',   label: 'Shallow groundwater flow path through riparian zone (where tiles absent)' },
          { from: 'tile-drainage',     to: 'stream-river',      label: 'Tile outfalls discharge directly to ditches and streams, bypassing riparian buffers' },
          { from: 'riparian-buffer',   to: 'stream-river',      label: 'Residual NO₃⁻ after denitrification (20–40%) reaches stream' },
          { from: 'stream-river',      to: 'hypoxic-zone',      label: 'Mississippi-Atchafalaya delivers ~1.5 M t N/yr; spring flood pulse fuels coastal algal growth' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Hubbard Brook clear-cut experiment (1965–67) showed a 40-fold increase in stream NO₃⁻ concentrations after devegetation. What does this demonstrate about forest nitrogen cycling, and why was this finding scientifically significant?',
          a: [
            'The experiment demonstrated that soil nitrification only occurs in the presence of trees; without trees, nitrification stops and NO₃⁻ production ceases; the high stream concentrations came from the herbicide applied to the watershed, not natural nitrification',
            'The experiment demonstrated that forest vegetation uptake is the dominant control on stream nitrate export; nitrification still occurs in bare soil, but without plant uptake to remove NH₄⁺ and NO₃⁻ from the soil solution, NO₃⁻ leaches freely to groundwater and streams; prior to Hubbard Brook, watershed N cycling was poorly understood and it was not established that forests act as a biogeochemical "lock" on nitrogen',
            'The experiment showed that forests cause nitrogen depletion in soils and streams; the 40-fold increase in NO₃⁻ after clear-cutting was actually the result of N previously stored in trees dissolving into streams as wood decayed; the finding revolutionised forest harvesting practices by showing that timber removal releases nutrients',
            'The experiment demonstrated that stream NO₃⁻ is entirely controlled by atmospheric deposition inputs; the 40-fold increase occurred because clear-cutting exposed the soil surface to greater rainfall interception and higher N deposition; the finding is primarily relevant to air quality management rather than forest watershed ecology',
          ],
          correct: 1,
          explain: 'Herbicide was applied to prevent vegetation regrowth, but herbicide itself did not produce the nitrate; the NO₃⁻ came from nitrification of mineralised organic N in the soil (A is incorrect about the herbicide mechanism and incorrect that nitrification requires trees — nitrification is a soil microbial process that occurs in bare soil). Nitrogen stored in tree biomass does eventually mineralise as wood decomposes, but this is not the mechanism responsible for the rapid and large NO₃⁻ increase; the increase began within months, consistent with nitrification proceeding in bare soil without the N sink that growing vegetation provides (C confuses the mechanism). Atmospheric deposition inputs did not increase with clear-cutting; in fact, without canopy interception, actual deposition to the ground might change, but this alone cannot produce a 40-fold NO₃⁻ increase (D). The correct answer is B: Likens and Bormann showed that nitrification in soil proceeds whether or not trees are present, but in an intact forest, trees take up NH₄⁺ and NO₃⁻ as fast as it is produced, keeping stream concentrations very low. Without vegetation as a sink, nitrified N had nowhere to go except downward into the water table and stream. This was foundational because it established that forests are not simply passive conduits but active biogeochemical processors that regulate nutrient export — a principle now central to watershed science and the basis for maintaining forested riparian zones and avoiding deforestation in sensitive watersheds.',
        },
        {
          q: 'Why does tile drainage make riparian buffer strips less effective at reducing agricultural nitrogen loads in Midwestern streams?',
          a: [
            'Tile drains increase the velocity of water through riparian soils, flushing out the denitrifying bacteria that would otherwise remove nitrate; higher water velocity also physically erodes the riparian buffer vegetation',
            'Tile drains route shallow groundwater through subsurface pipes that discharge directly into stream channels, bypassing the riparian buffer zone entirely; since denitrification occurs in the riparian soil and root zone, water that flows through pipes instead of through soil never encounters the microbial and plant communities responsible for nitrate removal',
            'Tile drains increase the total water volume entering streams, which dilutes incoming nitrate below the minimum concentration needed by denitrifying bacteria; paradoxically, more water means less denitrification efficiency',
            'Tile drains carry P-rich water that inhibits denitrification through competitive inhibition of the nitrate reductase enzyme in soil bacteria; the P arriving via tile drains specifically targets the denitrification pathway while leaving other N-cycling processes intact',
          ],
          correct: 1,
          explain: 'Tile drains do not flush denitrifying bacteria from riparian soils (A); the pipes are installed in the field, not in the riparian zone, and the issue is routing, not bacterial disruption. Dilution of nitrate by increased water volume (C) does not inhibit denitrification — denitrification rates are more limited by carbon availability and oxygen than by substrate concentration at the concentrations typical in tile water (5–50 mg NO₃⁻-N/L); furthermore, higher N concentrations in tile water actually provide more substrate for denitrification when water does contact denitrifying soil. The claim that P from tile drains inhibits nitrate reductase (D) is not an established mechanism in the scientific literature; while P loading is a separate water quality concern, it does not specifically inhibit denitrification at field-relevant concentrations. The correct answer is B: tile drainage is a form of flow path interception. In a natural or shallowly-drained agricultural landscape, much shallow groundwater flows laterally through the riparian zone before reaching the stream, contacting the organic-rich, frequently anaerobic riparian soils where denitrification rates are highest. Tile drains collect this water at field edges, route it through underground pipes, and discharge it to ditches or directly to stream channels — effectively short-circuiting the riparian zone. The water that flows through tiles never contacts the denitrifying bacteria or plant roots in the buffer. Studies in Iowa and Minnesota have shown that in tile-drained catchments, <20% of stream water passes through the riparian zone; the rest arrives via the tile network, explaining why buffer strips alone cannot achieve the nutrient load reductions required to address Gulf hypoxia.',
        },
        {
          q: 'In freshwater lakes, phosphorus is typically the limiting nutrient for algal growth, while nitrogen is often limiting in coastal marine systems. What ecological and chemical principles explain this difference in nutrient limitation?',
          a: [
            'Lakes are geologically older than oceans and have had more time to accumulate phosphorus from watershed weathering; the high legacy P in lake sediments means N is always in excess relative to P; in younger coastal systems, P has not yet accumulated, leaving N as the limiting factor',
            'In freshwater, N fixation by cyanobacteria can partially compensate for N deficiency, keeping N from being limiting; P has no analogous biological supply mechanism, so P remains limiting. In marine coastal waters, N fixation is less effective (due to trace metal availability constraints), and the N:P ratio of marine N inputs is often lower than the Redfield ratio, making N limiting. P is also readily recycled from marine sediments under anoxic conditions, relieving P limitation.',
            'Freshwater algae have a fundamentally different biochemistry from marine algae: freshwater species require 10× more phosphorus per cell for their unique membrane lipids, so P is depleted more rapidly; marine algae use nitrogen-based membrane lipids and deplete N preferentially',
            'The difference is purely regulatory: US freshwater lakes are regulated under the Clean Water Act with specific P discharge limits, causing P to be removed from wastewater before it reaches lakes; coastal waters are regulated under different statutes with N discharge limits, causing N to be limiting in regulated coastal systems',
          ],
          correct: 1,
          explain: 'Geological age and legacy P accumulation (A) is not the standard mechanistic explanation for the difference in nutrient limitation between freshwater and marine systems; the Redfield ratio and N fixation differences apply to both young and old systems. The specific membrane lipid biochemistry claim (C) is incorrect; while there are differences in cellular stoichiometry between algal groups, the N-rich vs P-rich membrane distinction described does not accurately reflect the biochemistry of freshwater vs marine algae. Regulatory differences (D) are real but do not explain the fundamental ecological and chemical pattern that was identified long before the Clean Water Act; the pattern is global and observed in unregulated systems. The correct answer is B: the key insight is that nitrogen can be biologically supplied via N₂ fixation by cyanobacteria (N fixers like Anabaena, Aphanizomenon, Nodularia) that are common in freshwater lakes — their ability to draw on the virtually inexhaustible atmospheric N₂ reservoir means that N deficiency can be relieved biologically. Phosphorus, by contrast, has no equivalent biological source; it must come entirely from watershed inputs and sediment recycling. Over time, lakes tend toward P limitation because N fixers can always supply more N when N is scarce, but nobody can fix P. In marine systems, N fixation is constrained by iron availability (iron is scarce in the open ocean) and by the metabolic cost of N fixation in saline conditions; additionally, denitrification in continental shelf sediments removes fixed N at significant rates, and the N:P ratio of riverine inputs is often below the Redfield ratio (16N:1P by atoms), leaving N deficient relative to P. This understanding is critical for management: to reduce freshwater eutrophication, reduce P inputs; to reduce coastal hypoxia, reduce N inputs.',
        },
        {
          q: 'A 30-metre riparian buffer strip is considered highly effective at removing agricultural nitrate from groundwater. Under what conditions does this effectiveness break down, and what alternative or complementary practices can address these limitations?',
          a: [
            'Riparian buffers are universally effective regardless of soil type, hydrology, or tile drainage; the 30 m standard was developed for all agricultural landscape types and is sufficient in all settings; limitations are only relevant to strips narrower than 15 m',
            'Buffer effectiveness degrades in tile-drained landscapes (water bypasses the buffer via pipes), coarse-textured soils (water flows below the root zone before reaching the stream), and where buffers are saturated and have already accumulated nitrate; complementary practices include constructed wetlands to intercept tile drain outfalls, cover crops to reduce leaching in the field, and variable-rate N management to reduce excess fertiliser application at the source',
            'Riparian buffers are only effective in summer when vegetation is actively growing and taking up nitrate; during winter and early spring, buffers provide no benefit; the solution is to replace buffers with concrete-lined channels that reduce sediment delivery in all seasons',
            'Buffer effectiveness is limited only by width; wider buffers (>60 m) always achieve complete nitrate removal regardless of soil or drainage conditions; the limitation is primarily economic (land taken out of production), not hydrological',
          ],
          correct: 1,
          explain: 'Riparian buffers are not universally effective in all landscape settings (A); this overstates the evidence and ignores the extensive literature demonstrating reduced effectiveness under specific hydrological conditions. Concrete-lined channels (C) would eliminate the biological denitrification mechanism entirely and worsen, not improve, downstream water quality by accelerating nutrient transport; this approach fundamentally misunderstands the role of biological processing in riparian zones. Buffer width alone does not guarantee effectiveness (D); a 60 m buffer of coarse sand above tile drains provides far less NO₃⁻ removal than a 30 m buffer of heavy clay with saturated flow conditions because the denitrification pathway requires anaerobic conditions and organic carbon in the riparian soil, not just distance. The correct answer is B: buffer effectiveness degrades under several specific conditions: (1) Tile drainage bypasses the buffer entirely, delivering NO₃⁻ directly to the stream channel via subsurface pipes; addressing this requires constructed wetlands or bioreactor woodchip trenches installed at tile drain outfalls where denitrifying bacteria can process the tile water before it reaches streams. (2) Coarse-textured soils (sandy or gravelly substrates) allow rapid vertical percolation below the root and organic matter zone where denitrification occurs; water moves down and laterally to the stream without contacting reactive riparian soil. (3) When organic carbon is limiting, denitrification rates fall regardless of nitrate availability. Source-reduction practices (precision N management, cover crops, reduced fall fertiliser applications) address the problem before it reaches the buffer; constructed wetlands and bioreactors capture what passes through. This integrated watershed approach — combining source reduction with edge-of-field and riparian zone management — is now the recommended framework for addressing nutrient losses in tile-drained agricultural landscapes.',
        },
        {
          q: 'A wastewater treatment plant discharging to a small urban stream is suspected of causing endocrine disruption in fish populations. The suspected compound is 17α-ethinylestradiol (EE2). What properties of EE2 make conventional wastewater treatment ineffective at its removal, and what treatment technologies can achieve meaningful reduction?',
          a: [
            'EE2 is highly water-soluble and present at such high concentrations that standard secondary treatment (activated sludge) can remove 95%+ of the load; the suspected endocrine disruption is more likely caused by natural oestrogens (estrone, estradiol) rather than the synthetic EE2, which is destroyed by UV disinfection',
            'EE2 is a synthetic steroid oestrogen present in wastewater at very low concentrations (ng/L range), but with an extremely high endocrine potency at these concentrations (feminising fish at 1–10 ng/L); conventional secondary treatment (activated sludge) achieves only 50–70% removal, leaving effluent concentrations sufficient to cause biological effects; advanced treatment options include ozonation, activated carbon adsorption, and membrane bioreactors, which can achieve >90% removal',
            'EE2 is rapidly biodegraded in conventional treatment and does not persist in effluent; the endocrine disruption observed in fish is caused by pesticide runoff (atrazine, endosulfan) from agricultural land upstream, not by wastewater EE2; removing EE2 from wastewater treatment would have no measurable effect on fish populations',
            'EE2 is removed from wastewater by UV disinfection, which is already required at all US wastewater facilities; where endocrine disruption persists downstream of treatment plants, it reflects illegal pharmaceutical dumping by residents rather than treatment plant effluent',
          ],
          correct: 1,
          explain: 'EE2 removal by secondary treatment is 50–70%, not 95%+ (A). Natural oestrogens (estrone, estradiol) are also endocrine disruptors but EE2 is specifically potent because its synthetic structure makes it resistant to degradation — it is not the case that UV disinfection destroys EE2; UV primarily targets pathogen DNA and does not chemically degrade steroids. EE2 has been directly detected in wastewater effluent and linked causally to intersex fish in UK rivers by Jobling et al. (1998) and many subsequent studies; the claim that it is already biodegraded in treatment (C) contradicts extensive measurement data showing ng/L concentrations in effluent globally. UV disinfection at typical wastewater doses does not significantly degrade EE2 (D); pharmaceutical removal is not a standard design criterion of US wastewater treatment infrastructure; addressing trace organics requires additional tertiary treatment. The correct answer is B: EE2 is present in wastewater because women who take oral contraceptives excrete glucuronide conjugates that are deconjugated in the sewer system to free EE2; conventional activated sludge treatment removes 50–70% via sorption to sludge and some biodegradation, but ng/L concentrations remain in effluent. EE2 is biologically active at 1–10 ng/L — concentrations observed in rivers downstream of wastewater outfalls — and feminises male fish (producing vitellogenin, oocytes in testis). Advanced treatment by ozonation (which breaks the oestrogen ring structure) or activated carbon adsorption can achieve >90% removal but adds significant cost. This regulatory and treatment challenge illustrates the broader problem of pharmaceuticals as emerging contaminants: they are biologically designed to be potent at low concentrations, are not targeted by conventional treatment, and are present in essentially all rivers receiving wastewater effluent.',
        },
      ],
    },
  ],
}

export default nutrientCyclingWaterQuality
