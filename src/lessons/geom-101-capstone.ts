import { Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const geom101Capstone: Lesson = {
  id: 'geom-101-capstone',
  title: 'Geomorphology: Path Assessment',
  track: 'geo',
  trackName: 'Geomorphology',
  level: 'Advanced',
  duration: '25 min',
  xpReward: 500,
  description: 'Comprehensive assessment across all three chapters of Geomorphology',
  sources: [
    { org: 'USGS',    title: 'USGS — Geology and Geomorphology',        url: 'https://www.usgs.gov' },
    { org: 'BGS',     title: 'BGS British Geological Survey',           url: 'https://www.bgs.ac.uk' },
    { org: 'GSA',     title: 'GSA Geological Society of America',       url: 'https://www.geosociety.org' },
    { org: 'AGU',     title: 'AGU — Earth Surface Processes',           url: 'https://www.agu.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Comprehensive assessment across all three chapters of Geomorphology',
      body: `This capstone covers the full Geomorphology learning path: weathering, soils, mass wasting, and hillslope evolution (Chapter 1); channel morphology, floodplains and terraces, deltas and estuaries, and coastal evolution (Chapter 2); and aeolian processes, dunes and loess, karst and caves, and periglacial and permafrost landscapes (Chapter 3). Twenty questions test conceptual understanding, quantitative reasoning, and the ability to apply geomorphic principles to real-world landscape scenarios.

You\'ll be asked to interpret landform evidence, evaluate process relationships, reason about physical and chemical mechanisms from frost wedging to speleothem formation, and assess landscape response to climate and tectonic forcing. A score of 80 % or higher earns full XP and path completion. Take your time — each question has exactly one correct answer, and the explanations will reinforce your understanding regardless of the outcome.`,
      keyTerms: [],
    },
    {
      type: 'quiz',
      questions: [
        // ── Chapter 1: Weathering, Soils, Mass Wasting, Hillslopes ──────────
        {
          q: 'Why is freeze-thaw (frost) weathering most effective when temperatures cycle between 0 °C and −5 °C?',
          a: [
            'Ice contracts below −5 °C, pulling rock walls inward and widening cracks by tension',
            'Water expands ~9 % on freezing, generating up to 207 MPa in confined pores; below −5 °C most pore water is already frozen and further expansion is minimal, while above 0 °C no freezing occurs',
            'Supercooled water at exactly 0 °C has maximum surface tension, hydraulically forcing joints apart',
            'Repeated freezing below −5 °C dissolves silicate minerals by cryogenic hydrolysis',
          ],
          correct: 1,
          explain: 'Frost wedging exploits water\'s anomalous 9 % volumetric expansion on freezing. In confined rock pores this generates pressures up to 207 MPa — far exceeding the tensile strength of most rocks (5–25 MPa). The 0 °C to −5 °C window is optimal because larger pores still contain liquid water that can migrate and refreeze while smaller pores have already frozen, maximising the hydraulic pressure differential. Below −5 °C most pore water is already solid and further volumetric change is minimal; above 0 °C no phase change occurs at all. Alpine and periglacial rockfall is therefore concentrated in seasons and elevations where temperatures repeatedly cycle through this narrow range, making alpine regions like the Himalayas and Rockies particularly susceptible.',
        },
        {
          q: 'The hydrolysis of potassium feldspar is a dominant weathering reaction in granite landscapes. What are the three main products?',
          a: [
            'Kaolinite, K⁺ ions in solution, and dissolved silica (SiO₂)',
            'Quartz, potassium carbonate (K₂CO₃), and water',
            'Smectite, calcium bicarbonate (Ca(HCO₃)₂), and oxygen gas',
            'Hematite, potassium hydroxide (KOH), and silicic acid',
          ],
          correct: 0,
          explain: 'Hydrolysis of K-feldspar (KAlSi₃O₈) produces kaolinite Al₂Si₂O₅(OH)₄ as a stable secondary clay mineral, K⁺ ions that are released into soil solution and transported by rivers to the ocean, and dissolved silica (H₄SiO₄ / SiO₂) that may be leached away or reprecipitate as opaline silica. The reaction rate approximately doubles per 10 °C increase in temperature (Arrhenius kinetics), which is why granite saprolite in tropical West Africa or Amazonia can reach 30–100 m depth while polar equivalents are only centimetres thick. Quartz — the most weathering-resistant primary mineral — is not a hydrolysis product; it is the residual mineral that concentrates in soils and sand deposits after more reactive minerals decompose.',
        },
        {
          q: 'Jenny\'s CLORPT equation expresses soil formation as a function of five state factors. Which set lists all five correctly?',
          a: [
            'Climate, organisms, relief (topography), parent material, and time',
            'Chemistry, leaching, organic matter, rainfall, and porosity',
            'Clay content, loam texture, organic horizons, rock type, and precipitation',
            'Compaction, lithology, oxidation, reaction pH, and temperature',
          ],
          correct: 0,
          explain: 'Hans Jenny (1941) formalised soil formation as S = f(cl, o, r, p, t) — a function of climate (cl), organisms (o), relief (r), parent material (p), and time (t). Climate sets the intensity of weathering and leaching; organisms drive organic matter addition, bioturbation, and nitrogen cycling; relief controls drainage, erosion rate, and microclimate; parent material constrains the starting mineralogy and texture; and time integrates the cumulative effect of all other factors. CLORPT explains patterns such as deeper, redder soils on well-drained ridges vs. gleyed soils in poorly drained valley bottoms, or the contrast between prairie Mollisols (rich in organic matter under grassland climate) and tropical Ultisols (intensely leached under warm, humid conditions).',
        },
        {
          q: 'A soil profile shows horizons in sequence from surface downward: O, A, E, B, C. What process defines the E horizon?',
          a: [
            'Illuvial enrichment of clays, iron oxides, and humus transported from above',
            'Eluviation — the downward leaching of clays, iron oxides, aluminium, and organic matter by percolating acidic water, leaving a bleached, coarse-textured residue',
            'Evaporation concentrating salts from capillary-rising groundwater',
            'Erosion of the original A horizon exposing unweathered C material',
          ],
          correct: 1,
          explain: 'The E (eluviation) horizon lies beneath the A horizon and above the B horizon and is defined by the loss of material — clays, iron oxides, aluminium oxides, and dissolved organic matter — that is carried downward in suspension or solution by percolating, acidic, organic-rich water. This removal leaves a pale, coarse-textured layer dominated by quartz and other resistant minerals. The corresponding B (illuviation) horizon below receives and accumulates this translocated material, producing darker, clay-enriched, or iron-pan horizons. The O–A–E–B contrast is most pronounced in Spodosols (podzols) of cool, humid, coniferous-forest environments such as Scandinavia, boreal Canada, and highland Britain, where organic acids from needle litter drive intense eluviation.',
        },
        {
          q: 'The factor of safety (FS) for slope stability is the ratio of resisting to driving forces. At what FS value is the slope exactly at the point of failure?',
          a: [
            'FS = 0, meaning all resistance has been consumed by driving forces',
            'FS = 1.0, meaning resisting and driving forces are exactly equal — limit equilibrium',
            'FS = 2.0, the conventional engineering failure threshold',
            'FS = 0.5, representing half the maximum possible resistance',
          ],
          correct: 1,
          explain: 'The factor of safety (FS = resisting forces / driving forces) quantifies how far a slope is from failure. FS > 1.0 means resistance exceeds driving force and the slope is stable; FS < 1.0 means driving force exceeds resistance and active failure is occurring. Exactly at FS = 1.0, the slope is in limit equilibrium — on the verge of failure. Engineers design slopes for FS ≥ 1.5 (routine cut slopes) to FS ≥ 2.0 (critical structures) to provide safety margins for uncertainties in pore water pressure, material strength, and loading. In natural landscapes, slopes approach FS = 1.0 progressively through rainfall infiltration raising pore pressures, undercutting by streams, or earthquake loading — the Oso (Washington State, 2014) landslide is a tragic example of a slope that had multiple previous small failures as FS gradually declined.',
        },
        {
          q: 'Which geomorphic transport law describes hillslope soil creep and bioturbation in humid, vegetated landscapes?',
          a: [
            'Non-linear transport in which flux approaches infinity as slope nears the critical angle, producing planar near-threshold hillslopes',
            'Linear diffusion: sediment flux is proportional to local slope gradient, producing broadly convex hillcrest profiles',
            'Threshold-dependent transport in which no flux occurs below a critical slope angle, producing stepped terraces',
            'Flux is independent of slope and driven entirely by raindrop splash and overland flow',
          ],
          correct: 1,
          explain: 'The linear diffusion hillslope transport law (qs = −K∇z, flux proportional to slope gradient) applies to creep-dominated processes — freeze-thaw heave, wetting-drying expansion, tree-throw, and faunal burrowing. This law produces the characteristic convex upper hillslope profile: the hilltop has the lowest slope and lowest flux; slopes steepen downhill, increasing flux to maintain sediment continuity (steady-state). The broadly rounded "whaleback" convex summits of the Appalachians, the Cotswolds, and many cratonic landscapes reflect millennia of diffusive transport. Non-linear transport laws apply in rapidly eroding landscapes where slopes approach the angle of internal friction, producing planar near-threshold hillslopes such as those in the tectonically active Oregon Coast Range.',
        },
        {
          q: 'Cosmogenic nuclide dating (¹⁰Be, ²⁶Al) is used to determine hillslope erosion rates and exposure ages. What is the underlying principle?',
          a: [
            'Radioactive decay of ¹⁰Be in quartz grains begins when sediment is buried, recording the time since deposition',
            'High-energy cosmic rays penetrate the atmosphere and produce ¹⁰Be in quartz minerals at Earth\'s surface; ¹⁰Be accumulates in proportion to surface exposure time, with activity decreasing exponentially with depth, allowing erosion rates and exposure ages to be calculated',
            'Uranium in quartz fission tracks form at a known rate, and track density records the time since surface cooling',
            '¹⁰Be is incorporated into quartz from atmospheric dust and records the age of soil formation',
          ],
          correct: 1,
          explain: 'Cosmogenic nuclides are produced in situ when high-energy secondary cosmic rays (primarily spallation neutrons and muons) interact with target minerals at or near Earth\'s surface — for ¹⁰Be, the target is ²⁸Si in quartz. Production rates decrease exponentially with depth (e-folding length ~60 cm in rock). At a surface of known age and zero inheritance, ¹⁰Be concentration equals the production rate × exposure time. For an eroding surface, the steady-state ¹⁰Be concentration equals the production rate divided by the erosion rate, because deeper (lower-concentration) rock is continuously being exhumed. By measuring ¹⁰Be concentration in surface quartz grains, geomorphologists can calculate basin-wide erosion rates, landslide timing, and terrace abandonment ages. This technique has revealed erosion rate contrasts of 10–1,000× between tectonically active and stable cratonic landscapes.',
        },
        // ── Chapter 2: Channel Morphology, Floodplains, Deltas, Coastal ─────
        {
          q: 'Specific stream power (ω = ρgQS/w) doubles when discharge Q doubles at constant width. What best explains why this disproportionately increases bedload transport?',
          a: [
            'Sediment transport is linearly proportional to specific stream power, so flux exactly doubles',
            'Bedload transport scales as the cube of excess shear stress above the entrainment threshold, so doubling ω raises transport capacity by much more than a factor of two',
            'The Manning roughness coefficient decreases when discharge doubles, amplifying the power increase',
            'Doubling discharge halves the channel width through bank erosion, further concentrating power',
          ],
          correct: 1,
          explain: 'Bedload transport formulae (Meyer-Peter & Müller, Einstein, Wilcock-Crowe) express flux as a high power of excess shear stress above the critical Shields threshold: qs ∝ (τ* − τ*c)^n where n ≈ 1.5–3. When specific stream power doubles, bed shear stress increases, and excess shear stress above the threshold rises dramatically — even small increases in τ* above the critical value produce large transport rate increases because of the non-linear exponent. This is why bedload transport is "event-dominated": rare, high-discharge floods (2× to 10× median discharge) move the vast majority of gravel-bed sediment while lower flows contribute little. In the Colorado River, a single large flood can move more sediment than years of moderate flow combined.',
        },
        {
          q: 'The Shields parameter (θ* = τ_b / ((ρ_s − ρ_w)gD)) describes sediment entrainment. What does the critical value θ*_c ≈ 0.047–0.06 represent?',
          a: [
            'The threshold grain Reynolds number below which viscous forces dominate over turbulent lift',
            'The dimensionless bed shear stress at which grains of diameter D on the channel bed are about to be entrained — the mobility threshold for incipient motion',
            'The Froude number at which the flow transitions from subcritical to supercritical',
            'The ratio of grain settling velocity to shear velocity at which suspension begins',
          ],
          correct: 1,
          explain: 'The Shields parameter θ* = τ_b / ((ρ_s − ρ_w)gD) compares the boundary shear stress τ_b (force per unit bed area exerted by the flow) to the submerged weight of a grain of diameter D (density ρ_s, submerged in water density ρ_w). When θ* reaches the critical Shields parameter θ*_c ≈ 0.047 (fine sand) to 0.06 (gravel), grains at the threshold are in incipient motion — just beginning to be transported. Above this value the bed is mobile; below it the bed is stable. The Shields diagram plots θ*_c against grain Reynolds number to account for viscous effects at small grain scales. It underpins channel design, habitat assessment, and river restoration: engineers use it to select substrate sizes that remain stable under design flows and to predict sediment mobility in regulated rivers.',
        },
        {
          q: 'A river channel switches from meandering to braided planform. Which change most commonly drives this transition?',
          a: [
            'A decrease in sediment supply causes incision and straightening of the channel',
            'Increased sediment supply relative to transport capacity, combined with a high bedload:suspended-load ratio, overwhelms single-thread stability and forces multi-thread bar deposition',
            'Reduced discharge variability allows vegetation colonisation that stabilises banks into a single sinuous thread',
            'Increased bank cohesion from clay deposition forces flow into a single meandering channel',
          ],
          correct: 1,
          explain: 'Braided channels develop when sediment supply exceeds transport capacity — typically where bedload:suspended-load ratios are high and discharge is variable. Excess sediment is deposited as mid-channel bars that split flow into multiple threads; each thread further deposits, creating a network of unstable, shifting channels. Classic braided settings include proglacial outwash (sandurs) downstream of glaciers, semi-arid catchments delivering high sediment pulses after storms, and reaches below landslide dams. Meandering channels require moderate, consistent discharge; cohesive, vegetation-stabilised banks; lower bedload:suspended-load ratios; and stream power close to the threshold for bank erosion. The transition from meandering to braiding after widespread deforestation in New Zealand illustrates how land-use change can shift the sediment:transport balance and alter channel planform.',
        },
        {
          q: 'A knickpoint migrates upstream through a bedrock river after base-level fall. What happens to the channel steepness index (ksn) upstream and downstream of it?',
          a: [
            'ksn is uniformly elevated everywhere after base-level fall, because the entire drainage network adjusts simultaneously',
            'ksn is elevated downstream of the knickpoint (adjusted reach) and lower upstream of it (relict landscape), producing two distinct segments on a χ-z profile',
            'ksn decreases downstream of the knickpoint because incision flattens the channel gradient',
            'ksn is identical on both sides because drainage area does not change as the knickpoint migrates',
          ],
          correct: 1,
          explain: 'When base level falls — through tectonic uplift, glacial isostatic rebound, or sea-level drop — a wave of incision (knickpoint) migrates upstream. Below the knickpoint the channel has adjusted to the new lower base level, producing steeper reaches with higher ksn. Above the knickpoint the channel retains its pre-disturbance, lower-gradient (relict) profile with lower ksn. On a χ (chi) transform plot — which normalises along-channel distance for drainage area — this appears as two linear segments with contrasting slopes meeting at the knickpoint. The contrast ksn_downstream / ksn_upstream scales with the magnitude of base-level change and differential rock uplift. Mapping knickpoints and ksn across drainage networks is now a standard tool in tectonic geomorphology for inferring spatial and temporal patterns of rock uplift across orogens.',
        },
        {
          q: 'The Bruun Rule (1962) predicts shoreline response to sea-level rise. What is its core principle?',
          a: [
            'Sea-level rise deepens the nearshore, reducing wave energy and allowing the shoreline to prograde',
            'The beach profile shifts landward and upward to maintain its equilibrium shape; eroded upper-beach sediment is deposited offshore, producing measurable shoreline retreat proportional to sea-level rise',
            'Sea-level rise increases longshore drift velocity, transporting sediment away from beaches and causing retreat',
            'Shoreline retreat equals twice the sea-level rise rate because barrier islands trap sediment landward',
          ],
          correct: 1,
          explain: 'The Bruun Rule is based on the concept of an equilibrium beach profile that adjusts to wave energy distribution. When sea level rises, the existing profile must shift upward and landward to re-establish equilibrium. Material is eroded from the upper beach and shoreface and deposited offshore (seaward of the depth of closure), maintaining the profile shape. The predicted retreat rate is R = S × L / (h + B): where S is sea-level rise rate, L is the active profile width, h is depth of closure, and B is the berm height. Despite simplifying assumptions (closed cross-shore sediment budget, no longshore supply, no overwash or dune contribution), the Bruun Rule remains the foundational model for projecting beach erosion under future sea-level rise and is used in coastal engineering and national shoreline management plans worldwide, often as a first-order estimate before more complex models are applied.',
        },
        {
          q: 'Which type of delta morphology forms where tidal currents are strong and river discharge is moderate, as in the Ganges-Brahmaputra and Niger deltas?',
          a: [
            'Bird-foot (elongate) delta, characterised by distributary mouth bars and rapid offshore progradation',
            'Tide-dominated delta with long, finger-like tidal sand ridges perpendicular to the shoreline and a funnel-shaped river mouth',
            'Wave-dominated delta with a smooth, cuspate shoreline produced by longshore sediment redistribution',
            'Crevasse-splay-dominated delta with frequent avulsions and no persistent distributary channels',
          ],
          correct: 1,
          explain: 'Galloway\'s (1975) ternary classification distinguishes river-dominated (Mississippi bird-foot), wave-dominated (Nile, São Francisco, Danube), and tide-dominated (Ganges-Brahmaputra, Niger, Fly River) end members. Where tidal currents are strong, tidal energy reworks sediment into elongate sand ridges and bars oriented parallel to tidal flow (perpendicular to the shoreline), and the river mouth opens into a broad funnel-shaped estuary. Distributary channels are wide, shallow, and flanked by mangrove-covered tidal flats. The Ganges-Brahmaputra Sundarbans is the world\'s largest tide-dominated delta, a low-lying labyrinth of tidal channels, chars, and mangroves. Understanding delta type is critical for petroleum geology (reservoir architecture differs dramatically between end members) and for assessing subsidence and flood risk in densely populated Asian mega-deltas.',
        },
        // ── Chapter 3: Aeolian, Karst, Periglacial ─────────────────────────
        {
          q: 'Saltation is the dominant mode of aeolian sand transport. Which description best captures the saltation mechanism?',
          a: [
            'Slow rolling and sliding of grains along the surface under gentle, sustained winds',
            'Ballistic transport in low asymmetric hops; each landing grain ejects stationary bed grains through impact splash, sustaining a cloud of transport above the static threshold wind speed',
            'Suspension of sand particles to heights of kilometres by turbulent thermals above hot desert surfaces',
            'Chemical dissolution of calcium carbonate cement releasing sand grains from desert pavement',
          ],
          correct: 1,
          explain: 'Saltation (Latin saltare, to leap) describes sand grains lifted into the airstream by turbulent fluctuations or grain impact, following steep, asymmetric ballistic trajectories. On impact with the bed, each grain transfers momentum, ejecting multiple stationary grains (splash / reptation) and sustaining a dense saltation cloud even when wind speed drops below the static threshold required to initially mobilise the bed. Saltation accounts for 75–85 % of sand transport in dune fields, moving grains 0.2–2 mm in diameter. Coarser particles (> 2 mm) move by creep (rolling), while finer silt and clay (< 0.1 mm) are lofted into suspension and can travel thousands of kilometres — Saharan dust reaches the Amazon Basin (fertilising nutrient-poor soils) and the Caribbean, a striking illustration of continental-scale aeolian connectivity.',
        },
        {
          q: 'Barchan dunes form in areas of unidirectional wind and limited sand supply. What produces their crescentic shape with downwind-pointing horns?',
          a: [
            'Bidirectional seasonal winds erode the dune flanks symmetrically, rotating the crest into a crescent',
            'Migration speed is inversely proportional to dune thickness; the thinner flanks advance faster than the thicker centre, extending downwind as horns',
            'Salt crystallisation hardens the central dune core; the unfixed outer edges collapse into horns over time',
            'Vegetation colonises the windward face of the crest, retarding its migration while bare flanks advance',
          ],
          correct: 1,
          explain: 'Barchan morphology is a direct consequence of the inverse relationship between migration rate and dune height (c ∝ 1/H, from Bagnold): thinner flanks migrate faster than the thick central body, extending downwind as pointed horns. Sand climbs the gentle stoss (windward) slope, avalanches over the slip face (angle of repose ~34°) and is deposited on the lee. The crescentic shape is self-maintaining under unidirectional winds and limited sand supply. Barchans are found on the coastal Peruvian desert, the Namib, the Rub\' al Khali (Saudi Arabia), and extensively on Mars. In ergs (sand seas) with ample supply, barchans coalesce into barchanoid ridges and eventually transverse dunes as sand availability increases, illustrating the morphodynamic continuum of aeolian bedforms.',
        },
        {
          q: 'Cave formation in limestone karst depends on dissolution of CaCO₃. What chemical equilibrium drives this process?',
          a: [
            'Oxidation of pyrite produces sulphuric acid (H₂SO₄) that dissolves limestone along bedding planes',
            'CO₂ dissolved in water forms carbonic acid (H₂CO₃), which reacts with CaCO₃ to yield soluble Ca²⁺ and 2HCO₃⁻; CO₂ degassing reverses the reaction and precipitates calcite as speleothems',
            'Organic acids secreted by bacterial biofilms chemically dissolve calcite crystal lattices in cave passages',
            'Hydraulic pressure from groundwater mechanically fractures limestone; chemical dissolution is secondary',
          ],
          correct: 1,
          explain: 'The fundamental karst equation is CaCO₃ + CO₂ + H₂O ⇌ Ca²⁺ + 2HCO₃⁻. Soil and rain water absorb CO₂ (soil air has PCO₂ 10–100× atmospheric due to root respiration and decomposition), forming carbonic acid. This weak acid dissolves calcite preferentially along joints, bedding planes, and fractures, widening them over millennia. When CO₂-charged groundwater enters a cave with lower PCO₂ (air-filled voids), the reaction reverses: Ca²⁺ and HCO₃⁻ reprecipitate as calcite, forming stalactites, stalagmites, and flowstones (speleothems). Sulphuric acid speleogenesis (H₂S oxidation) occurs in specific cave systems such as Lechuguilla Cave and Carlsbad Caverns but is not the dominant global mechanism. Karst landscapes occupy ~12–15 % of ice-free land and provide freshwater to ~25 % of the global population through carbonate aquifers.',
        },
        {
          q: 'U-Th (uranium-thorium) dating is preferred over radiocarbon for speleothems. Why?',
          a: [
            'Radiocarbon dating requires organic material; speleothem calcite is inorganic and contains no carbon at all',
            'Speleothems incorporate uranium but exclude thorium at formation, creating a closed-system clock; U-Th covers up to ~600,000 years with precisions of ±0.1–1 %, far exceeding the ~50,000-year limit and dead-carbon uncertainty of ¹⁴C',
            'Radiocarbon ages are unreliable for any material older than 5,000 years because cosmic-ray production rates varied unpredictably',
            'U-Th provides annual-layer resolution because uranium is deposited only during dry seasons',
          ],
          correct: 1,
          explain: 'Speleothem calcite incorporates trace uranium (0.01–10 ppm, substituting for Ca²⁺) but excludes thorium, which is insoluble in typical groundwater. At deposition the ²³⁰Th/²³⁴U ratio is effectively zero. After formation, ²³⁴U (t₁/₂ ≈ 245 kyr) decays to ²³⁰Th (t₁/₂ ≈ 75.4 kyr), and the growing ²³⁰Th/²³⁴U ratio is measurable by TIMS or MC-ICP-MS with sub-1 % precision. The range is ~1,000 to ~600,000 years. ¹⁴C dating of speleothem calcite requires dead-carbon corrections (limestone in the groundwater adds ¹⁴C-dead carbon, making ages appear older) and is limited to ~50,000 years. U-Th-dated speleothem δ¹⁸O and δ¹³C records have revolutionised continental palaeoclimatology, capturing Asian monsoon variability (Dongge Cave), Dansgaard-Oeschger events, and glacial-interglacial oscillations at millimetre-scale resolution.',
        },
        {
          q: 'Permafrost is ground at or below 0 °C for two or more consecutive years. Which region contains the largest area?',
          a: [
            'Antarctica, beneath the East Antarctic Ice Sheet and surrounding exposed bedrock',
            'Russia (Siberia), which holds approximately 65 % of the world\'s permafrost by area, with continuous permafrost reaching 1,500 m depth in Yakutia',
            'Canada, which has the world\'s deepest known permafrost in the High Arctic Archipelago',
            'Alaska and the Yukon, which together account for the majority of North American permafrost',
          ],
          correct: 1,
          explain: 'Russia contains by far the largest permafrost area globally — approximately 65 % of the total ~14–18 million km² — largely in the vast Siberian lowlands where continuous permafrost (present everywhere beneath the surface) extends south to roughly 55–60 °N. The deepest known permafrost (~1,500 m) is in northeastern Yakutia. Global permafrost stores an estimated 1,500 Gt of organic carbon — roughly twice the carbon in the current atmosphere — making permafrost degradation one of the most consequential climate feedbacks under anthropogenic warming. Canada (~7 million km²) is second, with extensive discontinuous and sporadic permafrost in boreal peatlands. Antarctic permafrost exists but is largely under ice or in exposed nunataks and stores negligible organic carbon.',
        },
        {
          q: 'Thermokarst lakes expand rapidly across Arctic tundra as permafrost degrades. What is the primary geomorphic mechanism?',
          a: [
            'Active-layer freeze-thaw heave pushes the ground surface upward, creating lake-filled depressions between mounds',
            'Thawing of ice-rich permafrost (ice wedges, segregated ice lenses) removes ground ice whose volume is replaced by water; the overlying sediment subsides into the cavity, forming depressions that collect and expand surface water',
            'Spring snowmelt overwhelms tundra drainage capacity, permanently ponding water in surface depressions',
            'Permafrost thaw raises groundwater pressure, driving artesian springs that overflow and pond at the surface',
          ],
          correct: 1,
          explain: 'Thermokarst forms when ground ice melts and the overlying sediment loses its structural support and subsides. Ice-wedge polygons, segregated ice lenses, and massive ground ice bodies can constitute 50–80 % of permafrost volume by ice content. When the active layer deepens or permafrost degrades laterally, ice thaws and the vacated space collapses into irregular depressions (alases, thaw lakes, retrogressive thaw slumps). Water accumulates in the depressions, absorbing solar radiation and warming the surrounding permafrost, causing lateral and downward expansion — a positive feedback. Thermokarst lakes currently cover ~20 % of Arctic coastal plains and have expanded measurably since the 1970s. They release CO₂ and CH₄ from previously frozen organic matter, contributing to the permafrost carbon feedback: warming → thaw → carbon release → more warming.',
        },
      ],
    },
  ],
}

export default geom101Capstone
