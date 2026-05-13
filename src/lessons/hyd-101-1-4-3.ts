import { TrendingDown, AlertTriangle, Factory, Shield, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const groundwaterDepletionContamination: Lesson = {
  id: 'hyd-101-1-4-3',
  title: 'Groundwater Depletion and Contamination',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'Beneath our feet, the world\'s largest reserve of liquid freshwater is being depleted and poisoned faster than it can recover. From the shrinking Ogallala Aquifer under the American Great Plains to arsenic in Bangladesh\'s drinking wells and PFAS "forever chemicals" spreading silently through suburban aquifers, this lesson explores the hidden crisis threatening the water supply of billions.',
  sources: [
    { org: 'USGS',  title: 'USGS — Groundwater Depletion in the United States',                          url: 'https://pubs.usgs.gov/sir/2013/5079/' },
    { org: 'NASA',  title: 'NASA GRACE-FO — Groundwater Monitoring',                                     url: 'https://grace.jpl.nasa.gov/applications/groundwater/' },
    { org: 'WHO',   title: 'WHO — Arsenic in Drinking Water',                                            url: 'https://www.who.int/news-room/fact-sheets/detail/arsenic' },
    { org: 'EPA',   title: 'US EPA — PFAS Explained',                                                    url: 'https://www.epa.gov/pfas/pfas-explained' },
    { org: 'NGWA',  title: 'National Groundwater Association — Managed Aquifer Recharge',                url: 'https://www.ngwa.org/what-is-groundwater/About-groundwater/managed-aquifer-recharge' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Mining ancient water: depletion, subsidence, and contamination in a hidden world',
      body: `Groundwater is the world's largest store of liquid freshwater — roughly 10.6 million km³, compared to about 93,000 km³ in all rivers and lakes combined. It supplies ~50% of global drinking water and ~40% of irrigation water. Yet in many of the most productive agricultural regions on Earth, groundwater is being extracted far faster than it is replenished, and in others it is being silently contaminated by agricultural chemicals, industrial compounds, and geogenic (naturally occurring) elements.

The **Ogallala (High Plains) Aquifer** underlies approximately 450,000 km² of the central United States and supports irrigation for one of the world's most productive agricultural regions. Water table declines in heavily pumped areas of **Kansas and Texas exceed 1 m per year** in some areas, and cumulative declines since pre-development conditions reach **30–60 m** across large areas. Because Ogallala recharge rates average only about 1–25 mm/year — the aquifer was primarily recharged during wetter Pleistocene climate conditions — the water being pumped is effectively a non-renewable fossil resource. NASA's GRACE satellite data confirm that the Ogallala lost approximately 303 km³ of water between 2002 and 2016, enough water to fill Lake Erie 2.5 times. At current rates, economists estimate that >30% of the southern Ogallala will be economically unviable for irrigation within 25–30 years.

**Land subsidence** — the sinking of the ground surface caused by compaction of aquifer sediments when groundwater is removed — is a direct physical consequence of over-pumping. Clay and silt layers that store water compress irreversibly (inelastic compaction) when drained. **Jakarta, Indonesia** has experienced some of the most dramatic subsidence in the world: the fastest-sinking districts have subsided **4 m** since the 1970s, and portions of North Jakarta are now 1–4 m below sea level. This creates a catastrophic feedback: a sinking city in a sea-level-rise context, where flood protection becomes increasingly difficult. The Indonesian government announced plans to move the capital to Borneo partly as a response to Jakarta's unsustainable subsidence trajectory. California's **Central Valley** has subsided up to **9 m** in places since the early 20th century due to groundwater extraction, with subsidence rates of 28 cm/year measured near Corcoran during the 2012–2016 drought, damaging canals, roads, and bridges.

Groundwater contamination takes multiple forms. **Arsenic** released from aquifer sediments by geochemical processes (principally the reductive dissolution of iron oxyhydroxides under reducing conditions) has poisoned the wells of approximately **50 million people in Bangladesh** — one of the largest mass poisonings in history — as well as millions more in West Bengal (India), Vietnam, Cambodia, and parts of China and Argentina. The arsenic was not introduced by human activity but mobilised from natural sediment minerals by changes in groundwater redox conditions, often exacerbated by intensive pumping. **PFAS** (per- and polyfluoroalkyl substances) — a family of ~9,000 synthetic compounds used in firefighting foam (AFFF), non-stick coatings, and industrial processes — are now detected in groundwater across the United States, Europe, and Australia. Their extraordinary chemical stability (the carbon-fluorine bond is among the strongest in organic chemistry) means they persist in groundwater for decades to centuries, accumulate in organisms, and are associated with thyroid disease, immune suppression, and several cancers. The US EPA set enforceable maximum contaminant levels (MCLs) for six PFAS compounds in drinking water in 2024.`,
      keyTerms: [
        {
          term: 'Ogallala Aquifer',
          def: 'The High Plains Aquifer underlying 450,000 km² of the central US Great Plains. Water table declining >1 m/yr in parts of Kansas and Texas; average recharge <25 mm/yr. Effectively a non-renewable fossil water resource.',
        },
        {
          term: 'Land Subsidence',
          def: 'Irreversible compaction and sinking of the ground surface caused by removal of groundwater from clay-rich aquifer sediments. Jakarta has subsided 4 m; California\'s Central Valley up to 9 m.',
        },
        {
          term: 'Geogenic Contamination',
          def: 'Groundwater contamination from naturally occurring substances (not human pollution) released from aquifer materials. Bangladesh arsenic crisis: ~50 million people exposed to arsenic from sediment minerals mobilised under reducing conditions.',
        },
        {
          term: 'PFAS',
          def: 'Per- and polyfluoroalkyl substances — ~9,000 synthetic "forever chemicals" with extraordinarily persistent C-F bonds. Contaminate groundwater from firefighting foams and industrial uses; linked to cancer and immune effects. EPA set MCLs for 6 PFAS in 2024.',
        },
        {
          term: 'Managed Aquifer Recharge (MAR)',
          def: 'Deliberate recharge of aquifers with treated recycled water, stormwater, or diverted surface water to replenish depleted storage and create hydraulic barriers against saltwater intrusion. Orange County CA: 130 million gallons/day.',
        },
        {
          term: 'Inelastic Compaction',
          def: 'Permanent, irreversible compression of clay-rich aquifer sediments when pore water is removed; the dominant mechanism of land subsidence. Unlike elastic (reversible) compression in sands and gravels, inelastic clay compaction does not recover when water levels rise.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Groundwater Depletion: Scale and Consequences',
      body: `Groundwater depletion is driven by extraction rates that far exceed natural recharge in agricultural regions worldwide. The consequences cascade from declining well yields and rising pumping costs through to land subsidence, ecosystem degradation, and ultimately the exhaustion of irrigation capacity that supports food production for hundreds of millions of people.`,
      cards: [
        {
          name: 'Ogallala Depletion',
          icon: TrendingDown,
          color: BRAND.coral,
          desc: 'Water table declining >1 m/yr in parts of Kansas and Texas. Cumulative depletion: 30–60 m in heavily pumped areas. Recharge: 1–25 mm/yr. GRACE detected 303 km³ lost 2002–2016.',
          examples: 'Kansas: southern High Plains wells average ~9 m decline per decade. Texas Panhandle: some areas have lost >80% of original saturated thickness. Irrigated land has already been abandoned in the most depleted zones.',
        },
        {
          name: 'Land Subsidence',
          icon: TrendingDown,
          color: BRAND.gold,
          desc: 'Clay compaction from groundwater removal is permanent and irreversible. Inelastic deformation reduces both land surface elevation and remaining aquifer storage capacity simultaneously.',
          examples: 'Central Valley, CA: total subsidence up to 9 m; rates 28 cm/yr near Corcoran 2012–16, damaging the Delta-Mendota Canal. Jakarta: 4 m subsidence in 50 years; North Jakarta now 1–4 m below sea level.',
        },
        {
          name: 'Saltwater Intrusion',
          icon: AlertTriangle,
          color: BRAND.ruby,
          desc: 'Coastal over-pumping lowers freshwater heads below sea level, drawing saline water into aquifers. Ghyben-Herzberg: 1 m head decline → ~40 m saltwater interface rise. Contamination is difficult to reverse.',
          examples: 'Miami-Dade County: saltwater intrusion front advanced ~16 km inland since 1900. Maldives: freshwater lens threatened on low atolls by both over-pumping and sea level rise.',
        },
        {
          name: 'Ecosystem Impacts',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Falling water tables cut off groundwater from surface ecosystems. Springs cease; gaining streams turn losing; riparian trees die; wetlands dry. Baseflow to rivers during droughts diminishes.',
          examples: 'Platte River, Nebraska: groundwater decline reduced baseflow 50–70% since 1950s, shrinking critical sandhill crane habitat. Ciénaga de Santa Clara wetland (Mexico) largely lost after Colorado River flow cut off by dams and diversions.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Contamination and Remediation',
      body: `Groundwater contamination is insidious: aquifers are invisible, contamination often has no taste or smell, and slow groundwater flow means plumes can persist for decades even after the source is removed. Addressing contamination requires both source control and often expensive, long-term active remediation.`,
      cards: [
        {
          name: 'Arsenic (Geogenic)',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: 'Naturally occurring arsenic mobilised from iron oxyhydroxide minerals under reducing conditions. Bangladesh: ~50M people exposed via shallow tube wells; WHO limit 10 µg/L routinely exceeded 10–100×.',
          examples: 'Bangladesh: 20M tube wells installed 1970s–1990s to avoid contaminated surface water; 1M+ wells subsequently found arsenic-contaminated above 50 µg/L. Chronic exposure causes skin lesions, cancers of bladder, lung, skin.',
        },
        {
          name: 'PFAS Contamination',
          icon: Factory,
          color: BRAND.amethyst,
          desc: 'C-F bond resists all natural degradation. PFAS spread from airports (AFFF foam), military bases, and industrial sites. Detected in >45% of US tap water samples. Bioaccumulate in organisms and food chains.',
          examples: 'Camp Lejeune, NC: contaminated drinking water 1953–1987 linked to elevated cancer rates in 750,000 residents and personnel. Michigan PFAS contamination from Wolverine Worldwide tannery affected >200 km² of groundwater.',
        },
        {
          name: 'Agricultural Chemicals',
          icon: Factory,
          color: BRAND.gold,
          desc: 'Nitrate from fertiliser leaching is the most widespread groundwater contaminant globally. Pesticides and herbicides (atrazine, glyphosate metabolites) affect shallow unconfined aquifers under agricultural land.',
          examples: 'US: ~10% of community wells and ~20% of private wells exceed EPA nitrate MCL (10 mg/L). Iowa and Nebraska: majority of shallow wells have detectable nitrate from corn/soybean agriculture above background levels.',
        },
        {
          name: 'Managed Aquifer Recharge',
          icon: Shield,
          color: BRAND.jade,
          desc: 'Deliberately recharging aquifers with treated water replenishes depleted storage and can flush contaminants, create saltwater barriers, and bank wet-season water for dry-season use.',
          examples: 'Orange County Water District, CA: 130 M gallons/day of purified recycled water injected into aquifer, supplying ~35% of county drinking water. Tucson, AZ: banks Colorado River water in winter via recharge basins for summer pumping.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Groundwater Under Threat: From Pump to Consequence',
      body: 'How groundwater extraction and land use create cascading threats — from aquifer depletion through contamination pathways to ecosystem and human health impacts.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how over-extraction and surface contamination sources create cascading groundwater threats including depletion, subsidence, contamination, and ecosystem damage, and how managed recharge and remediation can interrupt these pathways',
        nodes: [
          {
            id: 'over-extraction',
            label: 'Over-Extraction',
            description: 'Pumping rate exceeds natural recharge. Ogallala: pumping ~21 km³/yr vs. recharge ~1–3 km³/yr. Unsustainable drawdown accumulates year after year.',
            color: BRAND.coral,
          },
          {
            id: 'contamination-sources',
            label: 'Contamination Sources',
            description: 'Agriculture (nitrate, pesticides), industry (PFAS, solvents, heavy metals), geogenic (arsenic, fluoride). Sources on or near aquifer recharge zones pose highest risk.',
            color: BRAND.ruby,
          },
          {
            id: 'water-table-decline',
            label: 'Water Table Decline',
            description: 'Head drops progressively. Pumping depths increase; energy costs rise 3–5× per well as water level halves. Shallow wells go dry. Springs and baseflow to rivers diminish.',
            color: BRAND.gold,
          },
          {
            id: 'land-subsidence',
            label: 'Land Subsidence',
            description: 'Clay layers compact irreversibly when drained. Jakarta: 4 m in 50 years. Central Valley: up to 9 m total. Infrastructure damage: canals, roads, building foundations.',
            color: BRAND.amethyst,
          },
          {
            id: 'contamination-plume',
            label: 'Contaminant Plumes',
            description: 'Pollutants enter aquifer and migrate slowly with groundwater flow (cm to m per day). PFAS plumes can extend km from source. Arsenic released from sediments as redox conditions shift.',
            color: BRAND.accent,
          },
          {
            id: 'solutions',
            label: 'Solutions',
            description: 'Managed aquifer recharge, irrigation efficiency (drip/precision ag), water pricing reform, extraction caps, source removal and pump-and-treat remediation, alternative water-source development.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'over-extraction',       to: 'water-table-decline',  label: 'Depletes saturated zone' },
          { from: 'over-extraction',       to: 'contamination-plume',  label: 'Pumping accelerates plume migration' },
          { from: 'contamination-sources', to: 'contamination-plume',  label: 'Leach to groundwater' },
          { from: 'water-table-decline',   to: 'land-subsidence',      label: 'Clay compaction' },
          { from: 'contamination-plume',   to: 'water-table-decline',  label: 'Contaminates supply, forces deeper pumping' },
          { from: 'solutions',             to: 'water-table-decline',  label: 'MAR raises water table' },
          { from: 'solutions',             to: 'contamination-plume',  label: 'Pump-and-treat removes plume' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Ogallala Aquifer in Kansas and Texas is declining at rates exceeding 1 m per year in some areas. Why is this rate considered unsustainable even if pumping were reduced to half current levels?',
          a: [
            'Because the Ogallala is a confined artesian aquifer; any extraction permanently destroys the artesian pressure, so even reduced pumping causes irreversible damage',
            'Because natural recharge to the Ogallala is only 1–25 mm/year — thousands of times less than extraction rates — so even halved extraction would still deplete the aquifer, just more slowly',
            'Because the Ogallala is underlain by impermeable granite; pumped water flows out of the basin permanently and cannot be naturally restored even if all pumping stopped',
            'Because Oklahoma and Nebraska have legally blocked recharge water from flowing into Kansas and Texas, making depletion a political rather than hydrological problem',
          ],
          correct: 1,
          explain: 'A is wrong: the Ogallala is primarily an unconfined aquifer, not an artesian system; reduced pumping would slow but not stop depletion because recharge is so minimal. B is correct: the Ogallala Aquifer receives only about 1–25 mm/year of recharge, primarily because the overlying soils and low annual precipitation in the Great Plains allow very little infiltration to reach the water table. Current extraction rates of ~21 km³/year are approximately 10–50 times greater than estimated total recharge. Even halving pumping would still extract 5–25 times the recharge rate, continuing depletion. The Ogallala was primarily recharged during cooler, wetter Pleistocene conditions; it is effectively a non-renewable fossil resource on human timescales. C misidentifies the geology; D confuses political water rights disputes with the physical hydrology.',
        },
        {
          q: 'How does groundwater extraction cause land subsidence, and why is the subsidence in clay-rich aquifer systems permanent?',
          a: [
            'Extraction removes physical support from underground caverns; the cave roofs collapse, creating sinkholes. Refilling caverns with water restores ground elevation',
            'Removing pore water from clay and silt layers increases effective stress on grains; clay rearranges plastically under this stress (inelastic compaction), permanently reducing volume — unlike sand and gravel which rebound elastically when water returns',
            'Pumping cold groundwater causes thermal contraction of rocks, shrinking them uniformly; this subsidence is reversible when warmer surface water infiltrates to replace cold groundwater',
            'Subsidence occurs because wells introduce surface air into aquifers, oxidising organic matter in sediments and releasing CO₂ that escapes upward, leaving voids that collapse',
          ],
          correct: 1,
          explain: 'A describes karst sinkhole collapse, which is a different mechanism; groundwater extraction-driven subsidence in alluvial aquifers does not involve cave-roof collapse. B is correct: in a saturated sediment, the weight of overlying material is supported partly by the solid grain skeleton and partly by pore water pressure. When pumping reduces pore pressure, effective stress on grains increases. Coarse sediments (sand and gravel) deform elastically — they compress slightly under stress and rebound when stress is released. Fine-grained clays and silts have a plastic response: platelet rearrangement under increased stress is permanent and does not reverse when water returns. Clay layers may constitute only 10–20% of aquifer thickness but contribute 80–90% of total subsidence. Jakarta\'s 4 m and California\'s Central Valley\'s 9 m subsidences both resulted from this inelastic clay compaction. C and D are physically incorrect mechanisms.',
        },
        {
          q: 'The Bangladesh arsenic crisis affected approximately 50 million people. What is the source of this arsenic and what triggered its release?',
          a: [
            'Industrial pollution from chemical factories dumping arsenic-containing waste into the Ganges River, which percolated into shallow aquifers',
            'Naturally occurring arsenic in aquifer sediments was mobilised into groundwater by geochemical processes — specifically the reductive dissolution of arsenic-bearing iron oxyhydroxide minerals under the reducing conditions created by organic matter decomposition',
            'Arsenic was introduced into wells by agricultural pesticides used on rice paddies during the Green Revolution; runoff from fields contaminated shallow aquifer recharge zones',
            'Arsenic precipitated from volcanic ash deposited in Bangladesh during historical eruptions; erosion and redeposition in river deltas concentrated the ash in aquifer sediments',
          ],
          correct: 1,
          explain: 'A is wrong: the Bangladesh arsenic crisis is not industrial pollution; it is geogenic (naturally occurring). The arsenic was present in the delta sediments long before industrialisation. B is correct: the Ganges–Brahmaputra–Meghna delta sediments contain iron oxyhydroxide minerals that adsorb arsenic. Under aerobic conditions, these minerals are stable and arsenic stays bound. However, when organic matter (abundant in young delta sediments) decomposes and consumes oxygen, the groundwater becomes reducing (anaerobic). Under these conditions, iron oxyhydroxides dissolve reductively, releasing adsorbed arsenic into solution. The crisis was inadvertently triggered by the 1970s–90s WHO-promoted installation of 20+ million shallow tube wells to provide "clean" water (replacing fecally contaminated surface water), which actually tapped the arsenic-bearing reducing zone. C (agricultural pesticides) and D (volcanic ash) are incorrect mechanisms.',
        },
        {
          q: 'What makes PFAS compounds particularly problematic as groundwater contaminants compared to most other organic pollutants?',
          a: [
            'PFAS are heavier than water and sink to the deepest part of aquifers where they are inaccessible to remediation wells, making pump-and-treat ineffective',
            'PFAS contain carbon-fluorine bonds (among the strongest in organic chemistry) that resist biological, chemical, and photolytic degradation; they persist in groundwater for decades to centuries with no natural attenuation',
            'PFAS form dense non-aqueous phase liquids (DNAPLs) that penetrate deep into aquifers as separate-phase pools that cannot be extracted by conventional pumping',
            'PFAS are naturally produced by soil bacteria and cannot be eliminated by source control because in-situ production continues indefinitely after the anthropogenic source is removed',
          ],
          correct: 1,
          explain: 'A is wrong: PFAS are not heavier than water (they are aqueous-phase contaminants, not DNAPLs); they are typically soluble and mobile in groundwater, not sunken pools. B is correct: PFAS persistence arises from the extraordinary strength of the carbon-fluorine (C-F) bond — with a bond dissociation energy of ~485 kJ/mol, it is among the strongest bonds in organic chemistry. No known natural organism can break the C-F bond efficiently under typical environmental conditions; there is essentially no natural biodegradation. PFAS also resist hydrolysis, photolysis, and oxidative degradation. This means once PFAS contaminate an aquifer, concentrations decline only through dilution and dispersion, not degradation — persistence can extend centuries. Remediation requires energy-intensive treatments like activated carbon filtration, high-temperature incineration, or advanced oxidation processes (electrochemical, sonochemical). C describes a different class of contaminants (chlorinated solvents); D is incorrect — PFAS are purely synthetic.',
        },
        {
          q: 'Managed aquifer recharge (MAR) is used by Orange County, California to produce ~130 million gallons per day. What are the primary benefits of this approach compared to simply storing the same water in surface reservoirs?',
          a: [
            'Underground storage avoids evaporation losses, improves water quality through soil-aquifer filtration, provides drought-proof reserves that cannot evaporate, and in coastal areas creates a hydraulic barrier against saltwater intrusion',
            'Underground storage produces electricity as water infiltrates downward through the aquifer; this hydroelectric bonus makes MAR economically superior to surface reservoirs',
            'Surface reservoirs require more concrete than aquifer injection wells, making MAR significantly cheaper to construct; operational savings alone justify the switch to underground storage',
            'MAR is only beneficial in limestone karst aquifers; in alluvial aquifers like Orange County\'s, the main purpose is contamination dilution rather than water supply augmentation',
          ],
          correct: 0,
          explain: 'A is correct: managed aquifer recharge offers multiple advantages over surface storage. (1) Evaporation: surface reservoirs in California lose 0.5–2 m/yr to evaporation; underground storage loses essentially none. (2) Water quality improvement: as water percolates through unsaturated soils (soil-aquifer treatment), pathogens, organic compounds, and some nutrients are removed through filtration, adsorption, and biodegradation — this is part of Orange County\'s purification train. (3) Drought resilience: aquifer storage can hold water for years without loss; reservoirs evaporate and cannot hold rain years\' water for decade-scale droughts. (4) Saltwater barrier: maintaining positive freshwater head in coastal aquifers through injection prevents saltwater intrusion. Orange County\'s Water Factory 21 / GWRS system purifies secondary-treated wastewater to near-distilled quality using reverse osmosis and advanced oxidation for aquifer injection. B is physically impossible (gravity-fed infiltration generates no electricity). C is oversimplified; costs depend on site conditions. D is wrong: alluvial aquifers are ideal for MAR.',
        },
      ],
    },
  ],
}

export default groundwaterDepletionContamination
