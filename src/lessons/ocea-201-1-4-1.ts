import { Thermometer, Waves, Fish, AlertTriangle } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const marineHeatWaves: Lesson = {
  id: 'ocea-201-1-4-1',
  title: 'Marine Heat Waves',
  track: 'oce',
  trackName: 'Marine Chemistry',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Marine heat waves — prolonged anomalous ocean warming events — are intensifying in frequency, duration, and severity under climate change, bleaching coral reefs, collapsing kelp forests, and restructuring marine ecosystems at a pace that challenges the adaptive capacity of ocean life. From the 2013–2016 "Blob" in the northeast Pacific to the 2016 Great Barrier Reef bleaching emergency, these extreme events are transforming the seascape of the 21st-century ocean.',
  sources: [
    { org: 'NOAA',                 title: 'NOAA Coral Reef Watch — Bleaching Alert System',       url: 'https://coralreefwatch.noaa.gov/' },
    { org: 'IPCC',                 title: 'IPCC AR6 WGI — Ocean and Cryosphere Changes',          url: 'https://www.ipcc.ch/report/ar6/wg1/' },
    { org: 'Nature Climate Change', title: 'Frölicher et al. — Marine heat waves under warming',  url: 'https://www.nature.com/nclimate/' },
    { org: 'ICES',                 title: 'ICES Working Group on Marine Heat Waves',               url: 'https://www.ices.dk/' },
    { org: 'NASA',                 title: 'NASA GHRSST Sea Surface Temperature Analysis',         url: 'https://www.nasa.gov/ghrsst' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'When the ocean runs a fever',
      body: `A **marine heat wave (MHW)** is defined as a period of anomalously warm sea surface temperatures lasting at least five consecutive days, with temperatures exceeding the 90th percentile of the local climatological baseline. This precise threshold — developed by Hobday et al. (2016) and now universally adopted — distinguishes sustained extreme warming from ordinary seasonal variability. By this definition, MHWs can span thousands of kilometres and persist for months, fundamentally different in character from the brief, localised warm spells that marine ecosystems have always experienced.

The physical drivers of marine heat waves combine long-term climate change with shorter-scale atmospheric forcing. As anthropogenic greenhouse gas emissions warm the global ocean baseline — sea surface temperatures have risen approximately **0.13°C (32°F) per decade** since 1901, with acceleration since 1970 — the statistical probability of extreme warm anomalies increases dramatically. Because the mean has shifted upward, events that were once rare outliers now occur with far greater frequency. Superimposed on this shifting baseline, atmospheric high-pressure systems suppress wind-driven mixing and cloud cover, allowing solar radiation to warm the surface layer unimpeded. Reduced evaporative cooling and changes in ocean currents — such as the strengthening of western boundary currents like the East Australian Current and the Gulf Stream — also advect anomalously warm water into new regions.

The **2013–2016 "Blob"** in the northeast Pacific became the defining case study of a large-scale MHW. An anomalously persistent high-pressure ridge suppressed winter storms across the Gulf of Alaska, reducing wind-driven mixing and heat loss to the atmosphere. The resulting warm anomaly reached **2.5–4°C (36–39°F) above the climatological mean** across an area of several million km², persisting for nearly three years. The consequences cascaded through the ecosystem: toxic harmful algal blooms of *Pseudo-nitzschia* contaminated shellfish and killed seabirds and marine mammals; the salmon run to the Columbia River collapsed; copepod communities shifted dramatically northward; and warm-water species like Pacific pomfret expanded their ranges hundreds of kilometres poleward.

The 2016 bleaching of the **Great Barrier Reef** remains the most severe mass bleaching event ever recorded on a single reef system. Extended MHW conditions — with SSTs exceeding the bleaching threshold (the local climatological maximum + 1°C (34°F)) for weeks — caused **93% of individual reefs surveyed** to experience some bleaching, with the northern third suffering bleaching so severe that mortality exceeded 50% at many sites. **Degree Heating Weeks (DHW)** — the accumulation of thermal stress above the bleaching threshold, calculated in °C-weeks — exceeded 8 DHW (the threshold associated with severe mortality) across vast stretches of the northern reef. Bleaching in 2016 was followed by further mass bleaching events in 2017, 2020, 2022, and 2024, establishing a new era of near-annual thermal stress unprecedented in the reef's history.

In 2023, both the **Mediterranean Sea** and the **North Atlantic** set new all-time SST records. The North Atlantic exceeded 2°C (36°F) above the 1991–2020 climatological average across vast areas in July–August 2023, a magnitude of anomaly that stunned oceanographers monitoring the Copernicus Climate Change Service datasets. The Mediterranean surpassed 28°C (82°F) across its western basin — extraordinary for a semi-enclosed sea — driving mass mortality events of gorgonian corals, sponges, and seagrass meadows from Spain to Greece. Whether the 2023 North Atlantic anomaly reflects purely natural variability or an early manifestation of a climate state shift remained a subject of intense research and debate.`,
      keyTerms: [
        {
          term: 'marine heat wave (MHW)',
          def: 'A prolonged period of anomalously warm sea temperatures defined by Hobday et al. (2016) as at least five consecutive days with sea surface temperatures exceeding the 90th percentile of the local climatological baseline (typically computed over a 30-year reference period). MHWs are categorised as Moderate, Strong, Severe, or Extreme based on the magnitude of the anomaly above the threshold. They can cover millions of km² and persist for months, distinguishing them from brief local warm spells.',
        },
        {
          term: 'Degree Heating Weeks (DHW)',
          def: `A cumulative metric of coral bleaching thermal stress developed by NOAA Coral Reef Watch, calculated as the accumulation of SST anomalies exceeding the local Maximum Monthly Mean temperature (MMM) + 1°C (34°F), summed over a rolling 12-week window. DHW > 4°C (39°F)-weeks is associated with bleaching; DHW > 8°C (46°F)-weeks is associated with widespread coral mortality. DHW are derived from NOAA\'s daily satellite SST products and provide near-real-time bleaching alerts globally.`,
        },
        {
          term: 'bleaching threshold',
          def: 'The sea surface temperature at which the symbiotic relationship between corals and their photosynthetic dinoflagellate symbionts (Symbiodiniaceae) breaks down. Thermally stressed symbionts produce reactive oxygen species; to limit cellular damage, the coral host expels them, revealing the white calcium carbonate skeleton — bleaching. The bleaching threshold is typically defined as the Maximum Monthly Mean (MMM) + 1°C (34°F) for a given location. Extended exposure above this threshold leads to starvation and mortality if the coral cannot reacquire symbionts.',
        },
        {
          term: 'harmful algal bloom (HAB)',
          def: 'The rapid proliferation of microalgae that produces toxins harmful to marine life, wildlife, and humans. MHWs promote HABs by suppressing wind-driven vertical mixing (reducing nutrient upwelling) while warming surface waters that favour certain toxin-producing species. During the 2013–2016 northeast Pacific MHW, the diatom *Pseudo-nitzschia* produced domoic acid at record concentrations, leading to mass die-offs of sea lions and seabirds and closures of dungeness crab, razor clam, and anchovy fisheries from California to Alaska.',
        },
        {
          term: 'ecosystem cascade',
          def: 'The propagation of an environmental disturbance through successive trophic levels and species interactions in a food web. In the context of MHWs, thermal stress first affects thermal-sensitive foundation species (corals, kelp, seagrasses); their loss removes habitat and food sources for associated species (reef fish, sea urchins, invertebrates), which in turn affects apex predators (sharks, seabirds, marine mammals) and human fishing communities. Cascades can produce ecosystem state shifts that persist long after the MHW itself has ended.',
        },
        {
          term: '90th percentile threshold',
          def: 'The statistical criterion for defining a marine heat wave: the SST value exceeded on only 10% of days in the local climatological record (typically the 1983–2012 or 1991–2020 baseline period). Using a percentile rather than an absolute temperature makes the MHW definition locally relative, capturing events that are extreme for a given location regardless of its base temperature. This allows meaningful comparison of MHWs in tropical and polar seas, where absolute SSTs differ by tens of degrees.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Mechanisms, ecosystem impacts, and economic consequences',
      body: `Marine heat waves arise from a convergence of atmospheric, oceanic, and climate-change forcing. The **background warming trend** shifts the entire SST probability distribution so that what was once a 1-in-50-year event under pre-industrial conditions may recur every 5–10 years today. On top of this shift, synoptic and seasonal atmospheric forcing determines when and where anomalies peak. An anomalously strong subtropical high-pressure system reduces cloud cover, increasing shortwave solar radiation absorbed by the ocean surface; suppresses wind speed, reducing evaporative cooling and mechanical mixing that would otherwise distribute heat through a deeper layer; and blocks the intrusion of cooler air masses. Ocean circulation changes amplify or suppress these effects: El Niño teleconnections redistribute Pacific warm water, western boundary current intensification advects warm water poleward, and reduced upwelling removes a cooling mechanism. MHWs deliver their most ecologically severe impacts not simply through peak temperature but through the combination of intensity, duration, and rate of onset — metrics now tracked globally by the MHW global dataset (Hobday, Oliver, and colleagues at CSIRO and IMOS).`,
      cards: [
        {
          name: 'Kelp Forest and Seagrass Collapse',
          icon: Waves,
          color: BRAND.jade,
          desc: 'Bull kelp (*Nereocystis luetkeana*) and giant kelp (*Macrocystis pyrifera*) are cold-water foundation species that die when exposed to temperatures exceeding ~18–19°C (64–66°F) for extended periods. MHWs simultaneously stress kelp thermally and promote sea urchin barrens by killing urchin predators (sunflower sea stars were decimated by sea star wasting disease, exacerbated by warm water). Seagrass meadows (e.g., *Zostera marina*, *Posidonia oceanica*) also suffer die-offs under sustained warming, releasing stored blue carbon.',
          examples: 'Northern California kelp forests: 95% decline in bull kelp biomass following 2013–2016 MHW and sea urchin population explosion · Western Australia (Shark Bay): >36% of *Amphibolis antarctica* seagrass lost in 2011 MHW · Mediterranean 2023: extensive *Posidonia oceanica* die-off documented from Spain to Greece',
        },
        {
          name: 'Coral Reef Bleaching and Mortality',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: 'Coral bleaching occurs when SSTs exceed the local bleaching threshold (MMM + 1°C (34°F)). Bleached corals can recover if temperatures drop within weeks, but prolonged exposure causes starvation and mortality. The Great Barrier Reef has experienced mass bleaching in 1998, 2002, 2016, 2017, 2020, 2022, and 2024 — with the interval between events compressing from ~27 years (1998–to the 1970s) to nearly annual. Repeated bleaching prevents full recovery between events, driving a net decline in coral cover.',
          examples: '2016 GBR bleaching: 93% of reefs bleached, >50% mortality on northern reefs; DHW exceeded 8°C (46°F)-weeks across hundreds of km · 1998 global bleaching: first global event, coincided with 1997–98 El Niño; estimated 16% of global coral destroyed · 2024 global bleaching: declared fourth global bleaching event by NOAA, affecting all ocean basins simultaneously',
        },
        {
          name: 'Fisheries and Socioeconomic Impacts',
          icon: Fish,
          color: BRAND.gold,
          desc: 'MHWs disrupt fisheries through direct thermal stress on fish physiology, species range shifts, prey-field reorganisation, and HAB-driven closures. Economic losses can reach billions of dollars per event. The 2013–2016 northeast Pacific MHW reduced salmon returns, collapsed the Pacific sardine stock, drove record whale entanglements (whales pursuing prey near shore where fishing gear operates), and prompted multi-year closures of dungeness crab and razor clam fisheries along the US West Coast.',
          examples: '2015 West Coast dungeness crab closure: domoic acid contamination from HABs; estimated loss >$100M to California fishing industry · Pacific salmon: Columbia River fall chinook returns fell to record lows 2015–2016 · Australia 2011 MHW: Western Rock Lobster catch declined ~80% in some areas; total fisheries losses estimated at ~$100M AUD · Global projections: maximum catch potential declines 3–25% under RCP 8.5 by 2100',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Future trajectories and early warning systems',
      body: `Climate projections robustly show that marine heat waves will become dramatically more frequent, longer-lasting, and more intense as global mean surface temperatures rise. Frölicher et al. (2018, *Nature*) showed that under 1.5°C (35°F) of global warming, MHW frequency would be approximately **16 times greater** than in the pre-industrial baseline; under 2°C (36°F) of warming, the increase approaches **23 times**. For events that were roughly 1-in-50-year occurrences in the pre-industrial ocean, projections under high-emissions scenarios (SSP5-8.5) suggest these events will recur **annually** by 2100, essentially making the "extreme" the new normal. The upper ocean is now also warming to greater depths, increasing the heat content available to sustain MHWs. Early warning systems, particularly NOAA's Coral Reef Watch 5 km (3.1 mi) satellite SST product and the Copernicus Marine Service, provide near-real-time bleaching alerts and MHW tracking that are now operationally critical for reef managers and fisheries agencies worldwide.`,
      cards: [
        {
          name: 'Frequency and Duration Projections',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'IPCC AR6 and Frölicher et al. (2018) project that under SSP5-8.5 (high emissions), events once occurring 1 in every 50 years will recur annually by 2100. MHW annual days (days per year meeting the 90th percentile criterion) are projected to increase from ~30 days/year in the current climate to 220–250 days/year globally by 2100 under high emissions — meaning MHW conditions will dominate the annual cycle. The Southern Ocean, North Atlantic, and tropical Pacific show the largest relative increases.',
          examples: 'Pre-industrial: ~1-in-50-year MHW events · 1.5°C (35°F) warming: frequency ×16; 2°C (36°F): ×23 (Frölicher et al. 2018) · SSP5-8.5 by 2100: 1-in-50-year events effectively annual · MHW annual days: ~30/yr current → 220–250/yr at 4°C (39°F) warming · 2023 North Atlantic: anomaly exceeded 2°C (36°F) above climatology across millions of km²',
        },
        {
          name: 'Observing and Early Warning Systems',
          icon: AlertTriangle,
          color: BRAND.amethyst,
          desc: 'NOAA Coral Reef Watch uses daily 5 km (3.1 mi) satellite SST to compute DHW globally, issuing bleaching Watch, Warning, and Alert Level 1/2 notifications that give reef managers days to weeks of advance warning. The Copernicus Marine Environment Monitoring Service (CMEMS) provides pan-European and global MHW tracking. Argo float data contributes subsurface temperature profiles essential for understanding heat content and mixed layer dynamics during MHWs. Integrated forecast systems (seasonal and sub-seasonal models) are becoming capable of predicting MHW onset 1–3 months in advance for some regions.',
          examples: 'NOAA CRW: 5 km (3.1 mi) daily SST, global DHW mapping, operational since 1997 · Copernicus C3S: ERA5 reanalysis confirms 2023 North Atlantic records · TAO/TRITON + Argo: subsurface heat content monitoring critical for Pacific MHW prediction · IMOS (Australia): national MHW tracking integrating ship, buoy, Argo, and satellite data',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From atmospheric forcing to ecosystem cascade: the MHW chain',
      body: `Marine heat waves unfold through a sequence of physical, chemical, and biological changes — from the atmospheric forcing that creates the anomaly to the ecosystem-level and socioeconomic consequences that follow. Follow this chain to understand how a meteorological perturbation becomes an ecological crisis, and how each stage of the cascade feeds into the next.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The causal chain from atmospheric forcing through ocean warming to ecosystem impacts and economic consequences',
        nodes: [
          {
            id: 'atmospheric-forcing',
            label: 'Atmospheric high-pressure forcing',
            description: 'An anomalously persistent subtropical or mid-latitude high-pressure system suppresses cloud formation, increasing the solar shortwave radiation reaching the ocean surface. Reduced wind speed under high-pressure conditions minimises evaporative cooling (the dominant ocean heat loss mechanism) and suppresses wind-driven mixing that would otherwise distribute surface heat through a deeper mixed layer. The result is rapid, sustained warming of a shallow surface layer. The 2013–2016 "Blob" was maintained by an anomalous winter ridge over the Gulf of Alaska — a pattern linked to teleconnections from tropical Pacific SST anomalies and possibly amplified by reduced Arctic sea ice. The 2023 North Atlantic MHW coincided with anomalously low Saharan dust loading (which normally reflects solar radiation) and an exceptionally weak trade wind system.',
            color: BRAND.accentHot,
          },
          {
            id: 'ocean-warming',
            label: 'SST anomaly development and intensification',
            description: 'As the atmospheric forcing sustains itself, sea surface temperatures rise above the local 90th percentile threshold and a marine heat wave is declared. The warming initially confined to the mixed layer (typically 20–50 m (66–164 ft)) spreads vertically if forcing persists; in the "Blob", anomalies penetrated to 100–200 m (328–656 ft) depth, giving the event exceptional heat content. Satellite SST (NOAA GHRSST, CMEMS) tracks the spatial extent in near-real time. Subsurface heat content from Argo floats measures the thermal inertia — a deep warm anomaly persists even after surface forcing abates. Degree Heating Weeks accumulate as SSTs remain above the bleaching threshold, pushing cumulative thermal stress toward the lethal range for corals (DHW > 8°C (46°F)-weeks).',
            color: BRAND.gold,
          },
          {
            id: 'primary-impacts',
            label: 'Thermal stress on foundation species',
            description: 'Marine heat waves impact foundation species — organisms whose presence structures entire ecosystems — first and most severely. Corals bleach as their symbiotic dinoflagellates are expelled; kelp dies as thermal stress exceeds tolerance limits (~18–19°C (64–66°F) for bull kelp) and as reduced upwelling removes the nutrient supply that sustains rapid growth; seagrass meadows suffer from the combined effects of thermal stress, reduced photosynthesis under higher temperatures, and increased susceptibility to disease. The loss of foundation species is not merely a loss of individual organisms — it is the collapse of the physical habitat that supports hundreds of associated species. When kelp disappears, reef fish, invertebrates, and marine mammals lose shelter, nursery habitat, and prey. When corals die, reef-dependent biodiversity — estimated at ~25% of all marine species — loses its structural scaffold.',
            color: BRAND.coral,
          },
          {
            id: 'secondary-impacts',
            label: 'Ecosystem cascade and range shifts',
            description: 'The loss of thermal-sensitive foundation species triggers cascading effects through food webs. Sea urchin populations, normally controlled by predators like sunflower sea stars (decimated by sea star wasting disease — exacerbated by warm water — during the 2013–2016 MHW), explode in kelp forests, overgrazing remaining algae and converting productive kelp forests to urchin barrens. Warmer waters promote harmful algal blooms: *Pseudo-nitzschia* and *Alexandrium* produce domoic acid and saxitoxin respectively, contaminating shellfish, killing sea lions and seabirds, and closing fisheries. Species adapted to cooler temperatures migrate poleward or to greater depths; warm-water species invade from equatorial regions. In the northeast Pacific MHW, tropical copepod species displaced cold-water Calanus populations, reducing the energy-rich lipid content of zooplankton prey and impacting the condition of salmon, seabirds, and whales.',
            color: BRAND.amethyst,
          },
          {
            id: 'fisheries-impacts',
            label: 'Fisheries collapse and HAB closures',
            description: 'The economic consequences of MHWs concentrate in fisheries and aquaculture. HABs force precautionary closures of lucrative shellfish fisheries (dungeness crab, razor clams, mussels) for months or years; commercial fish stocks suffer recruitment failure as warm, nutrient-poor surface waters reduce the plankton prey of juveniles; salmon runs collapse as ocean conditions during the critical early marine phase fail to support survival. The 2015 West Coast dungeness crab closure in the United States was attributed directly to MHW-driven domoic acid HABs, with California fishing industry losses exceeding $100 million. In Australia, the 2011 Western Australia MHW reduced rock lobster and abalone catches and is estimated to have cost the regional fishing industry ~$100 million AUD. Global models project maximum catch potential reductions of 3–25% under high-emissions scenarios by 2100, with greatest impacts in tropical and subtropical regions.',
            color: BRAND.ruby,
          },
          {
            id: 'future-projection',
            label: 'Future frequency: 1-in-50 year → annual by 2100',
            description: `Under the pre-industrial climate, events meeting today\'s 90th percentile threshold for marine heat waves were rare — occurring roughly once every 50 years at any given location. Today, the shifted baseline means such events occur approximately every 5–10 years. Under 1.5°C (35°F) of global warming, Frölicher et al. (2018, *Nature*) calculate MHW frequency increases by a factor of ~16 relative to the pre-industrial; under 2°C (36°F), by a factor of ~23. Under high-emissions scenarios (SSP5-8.5), what are today classified as "rare extreme" MHWs will recur annually by 2100, making the current concept of a "marine heat wave" obsolete — the extreme becomes the baseline. IPCC AR6 confirms this trajectory with high confidence. Managing ocean ecosystems through this transition requires anticipatory governance, early warning systems, and active interventions such as assisted evolution of thermal-tolerant coral genotypes and protection of climate refugia.`,
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'atmospheric-forcing', to: 'ocean-warming',     label: 'suppressed mixing and increased solar input raise SSTs above 90th percentile' },
          { from: 'ocean-warming',       to: 'primary-impacts',   label: 'thermal stress accumulates on corals, kelp, and seagrasses (DHW > 4–8°C (39–46°F)-weeks)' },
          { from: 'primary-impacts',     to: 'secondary-impacts', label: 'loss of foundation species triggers trophic cascades and species range shifts' },
          { from: 'secondary-impacts',   to: 'fisheries-impacts', label: 'HABs, prey collapse, and habitat loss drive fisheries decline and closures' },
          { from: 'fisheries-impacts',   to: 'future-projection', label: 'economic and ecological losses compound as MHW frequency increases' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'How is a marine heat wave (MHW) formally defined according to the Hobday et al. (2016) framework?',
          a: [
            'A marine heat wave is defined as any period during which sea surface temperature exceeds 25°C (77°F) in the tropics or 15°C (59°F) in temperate regions, regardless of duration or local climatological baseline, because these absolute thresholds represent thermal stress for most marine organisms',
            'A marine heat wave is defined as a period of at least five consecutive days during which sea surface temperatures exceed the 90th percentile of the local climatological baseline; events are categorised as Moderate, Strong, Severe, or Extreme based on the magnitude of the anomaly above the threshold',
            'A marine heat wave is defined as an anomalous SST event that causes observable coral bleaching (DHW > 4°C (39°F)-weeks) or kelp mortality in at least three biogeographic regions simultaneously, regardless of the temperature anomaly magnitude or duration',
            'A marine heat wave is defined as any period in which global mean sea surface temperature exceeds 0.5°C (33°F) above the 20th-century average, a threshold derived from the Palmer Drought Severity Index applied to ocean heat content rather than precipitation',
          ],
          correct: 1,
          explain: 'Option A uses absolute temperature thresholds, which are scientifically inappropriate because what constitutes thermal stress for marine ecosystems is locally relative — 25°C (77°F) is unremarkable in the tropics but catastrophic near the poles. Option C conflates the ecological consequence (bleaching, kelp mortality) with the physical definition; MHWs are defined by physical temperature criteria regardless of whether biological impacts are observed, though impacts are often used to assess severity. Option D conflates the global mean SST trend with a local MHW definition and erroneously references the Palmer Drought Severity Index, which is a terrestrial metric. The correct answer is B: Hobday et al. (2016, *Progress in Oceanography*) defined a marine heat wave as a coherent area of anomalously warm sea surface temperatures persisting for at least five consecutive days with temperatures warmer than the 90th percentile of the local 30-year climatological baseline. The five-day minimum distinguishes MHWs from brief warm spells; the 90th percentile threshold makes the definition locally relative, so an MHW in the Norwegian Sea and an MHW on the Great Barrier Reef are both events of comparable relative severity for their respective ecosystems. The four-category (Moderate, Strong, Severe, Extreme) intensity classification is based on how far above the 90th percentile the temperature falls: the threshold to 2× the threshold is Moderate; 2–3× is Strong; 3–4× is Severe; >4× is Extreme.',
        },
        {
          q: 'What was the ecological significance of the 2013–2016 "Blob" marine heat wave in the northeast Pacific?',
          a: [
            'The Blob was primarily significant for its impact on atmospheric circulation — the anomalous SST pattern reinforced the Pacific-North America teleconnection pattern and was the primary cause of the 2012–2016 California drought, but marine ecosystem impacts were limited to a modest northward shift in fish species ranges',
            'The Blob drove a comprehensive ecosystem cascade: SSTs 2.5–4°C (36–39°F) above average for nearly three years promoted record harmful algal blooms of *Pseudo-nitzschia* (producing domoic acid), caused salmon run collapses, drove northward shifts of copepod communities reducing lipid-rich prey quality, devastated sea bird and marine mammal populations, and prompted multi-year closures of dungeness crab and razor clam fisheries',
            'The Blob caused the most severe coral bleaching event in the Great Barrier Reef\'s recorded history, with 93% of reefs surveyed showing bleaching and DHW values exceeding 8°C (46°F)-weeks across the northern reef; its primary significance was demonstrating that tropical coral reefs are the most vulnerable ecosystem to MHWs',
            'The Blob was notable for producing a transient La Niña-like pattern in the tropical Pacific through its influence on Walker circulation strength, but its direct ecological impacts were limited to changes in California kelp forest species composition with no major fisheries closures or harmful algal blooms recorded',
          ],
          correct: 1,
          explain: `Option A correctly identifies the atmospheric influence of the Blob on California drought (which has scientific support) but significantly understates the ecological impacts — the Blob produced one of the most severe documented ecosystem disruptions in northeast Pacific history. Option C incorrectly places the Blob\'s coral bleaching on the Great Barrier Reef; the GBR bleaching in 2016 was driven by a separate MHW in the Coral Sea/western Pacific associated with the 2015–16 El Niño, not the northeast Pacific Blob. Option D also understates the ecological consequences and incorrectly identifies the Blob\'s primary significance. The correct answer is B: the 2013–2016 northeast Pacific MHW (known as "the Blob," named by oceanographer Nick Bond of the University of Washington) was driven by an anomalous atmospheric ridge over the Gulf of Alaska that persisted through multiple winters. It maintained SSTs 2.5–4°C (36–39°F) above the climatological mean across an area of several million km² for approximately three years. The consequences were severe and multi-dimensional: *Pseudo-nitzschia* harmful algal blooms producing domoic acid at record concentrations caused shellfish and anchovy closures from California to Alaska; an estimated 1 million common murre seabirds died of starvation in 2015–16; sea lion pup malnutrition and strandings reached unprecedented levels; Pacific sardine stock collapsed; Columbia River fall chinook salmon returns fell to record lows; and the warm, nutrient-poor conditions fundamentally altered copepod community composition, replacing lipid-rich cold-water species with lipid-poor warm-water ones, cascading effects up to salmon, seabirds, and whales.`,
        },
        {
          q: 'What are Degree Heating Weeks (DHW) and what thresholds are associated with coral bleaching and mortality?',
          a: [
            'DHW measure the cumulative duration of temperatures below the local seasonal minimum, used to quantify cold-stress events that cause coral bleaching in winter; bleaching occurs at DHW > 2 cold-degree-weeks, and mortality at DHW > 5 cold-degree-weeks, particularly in subtropical reef systems such as those in Florida',
            'DHW are calculated as the running sum of daily SST anomalies above the long-term mean over a 52-week window, expressed in °C-weeks; they are used by ICES to track temperate-ocean warm-water intrusions, with a DHW of 10 indicating a full marine heat wave and DHW > 15 associated with benthic invertebrate die-offs in the North Sea',
            'DHW represent the accumulated thermal stress above the local bleaching threshold (Maximum Monthly Mean + 1°C (34°F)) over a rolling 12-week window, expressed in °C-weeks; DHW > 4°C (39°F)-weeks is associated with coral bleaching; DHW > 8°C (46°F)-weeks is associated with severe coral mortality; computed from daily 5 km (3.1 mi) satellite SST by NOAA Coral Reef Watch',
            'DHW are equivalent to Accumulated Cyclone Energy (ACE) but applied to ocean temperatures; they measure the total kinetic energy of warm-water eddies over a hurricane season and are used by NOAA to predict whether Atlantic hurricanes will intensify rapidly over anomalously warm SSTs; the bleaching threshold of DHW > 4 is used only in the Indian Ocean',
          ],
          correct: 2,
          explain: 'Option A confuses thermal bleaching (driven by heat stress) with cold-bleaching, which does occur at very high latitudes but is not the mechanism addressed by DHW, which is a heat-stress metric. Option B incorrectly describes DHW as a 52-week accumulated anomaly relative to the long-term mean; the correct reference is the Maximum Monthly Mean + 1°C (34°F), not the annual mean, and the window is 12 weeks. Option D confuses DHW with the entirely different meteorological metric of Accumulated Cyclone Energy. The correct answer is C: Degree Heating Weeks, developed by NOAA Coral Reef Watch (Strong et al., 1997 and subsequent refinements), quantify the cumulative thermal stress experienced by corals above the local bleaching threshold. The bleaching threshold for any reef location is defined as its Maximum Monthly Mean (MMM) sea surface temperature + 1°C (34°F) — the temperature at which coral thermal tolerance is known to begin breaking down. Each day that SSTs exceed this threshold, the daily anomaly above the threshold is accumulated over a trailing 12-week window. The resulting DHW value (in °C-weeks) is a cumulative heat stress metric: a DHW of 1 represents one week of SSTs at 1°C (34°F) above the bleaching threshold. Peer-reviewed studies and NOAA operational experience establish that DHW > 4°C (39°F)-weeks is associated with bleaching in thermally sensitive corals, and DHW > 8°C (46°F)-weeks is associated with widespread severe bleaching and significant mortality. During the 2016 GBR event, parts of the northern reef experienced DHW > 16°C (61°F)-weeks, far exceeding the mortality threshold.',
        },
        {
          q: 'How do climate projections describe the future frequency of marine heat waves under high-emissions scenarios?',
          a: [
            'Climate projections suggest that marine heat waves will become slightly less frequent under high-emissions scenarios because increased evaporation from a warmer ocean will enhance cloud cover, providing a negative feedback on surface warming that will prevent extreme SST events from occurring more than once every 20–30 years in most ocean regions',
            'Climate projections (Frölicher et al. 2018, IPCC AR6) show that under 1.5°C (35°F) of global warming, MHW frequency increases ~16 times above pre-industrial levels; under 2°C (36°F), ~23 times; under high-emissions scenarios (SSP5-8.5), events that occur once every 50 years in the pre-industrial ocean will recur annually by 2100, effectively transforming extreme events into the new normal ocean state',
            'Climate projections indicate that MHW frequency will increase modestly — by approximately 2 to 3 times above pre-industrial levels under all emissions scenarios — but that MHW intensity will remain similar to present-day events because ocean heat capacity is sufficient to buffer temperature extremes even under high greenhouse gas concentrations',
            'Climate projections show that marine heat waves will increase in frequency only in the Arctic Ocean, where sea ice loss exposes open water to atmospheric warming; in all other ocean basins, the projections show stable or declining MHW frequency because increased rainfall freshens the surface and reduces salinity, lowering the freezing point and buffering against extreme SST events',
          ],
          correct: 1,
          explain: 'Option A is scientifically incorrect — increased cloud cover would indeed provide some negative feedback, but this effect is far outweighed by the direct warming from greenhouse gas forcing; no credible projection shows MHW frequency declining. Option C significantly underestimates the projected increase: a factor of 2–3 above pre-industrial levels is already observed in the current climate (~1.2°C (34°F) warming); projections at 3–4°C (37–39°F) of warming show far more dramatic changes. Option D incorrectly restricts the projection to the Arctic; all ocean basins show substantial MHW frequency increases in high-emissions scenarios, with the largest relative increases in the tropical and mid-latitude oceans where ecosystems are particularly vulnerable. The correct answer is B: Frölicher et al. (2018, *Nature*) used a large ensemble of climate model simulations to quantify how MHW characteristics change with global warming. Their central finding was that MHW frequency (days per year meeting the 90th percentile criterion) scales strongly and approximately linearly with global mean temperature. Under 1.5°C (35°F) of warming, MHWs occur roughly 16 times more often than in the pre-industrial baseline; under 2°C (36°F), roughly 23 times more often. Expressed differently: events classified as occurring once in 50 years in the pre-industrial ocean already occur roughly every 5 years today (~1.2°C (34°F) warming) and will recur annually under 3–4°C (37–39°F) of warming (SSP5-8.5 by 2100). IPCC AR6 (Chapter 9, Cross-Chapter Paper 1) confirms these projections with high confidence, noting that MHW annual days are projected to rise from ~30/year in the current climate to 220–250 days/year globally by 2100 under SSP5-8.5 — meaning MHW conditions will dominate the annual SST cycle, transforming what is currently an extraordinary event into the routine ocean state.',
        },
        {
          q: 'What physical mechanism primarily drives kelp forest collapse during prolonged marine heat waves?',
          a: [
            'Kelp forests collapse during MHWs because warmer water reduces the solubility of CO₂, raising carbonate ion concentrations and increasing ocean pH (alkalinity), which dissolves the calcium carbonate holdfasts that anchor kelp to the rocky substrate; without functional holdfasts, kelp fronds detach and drift away in storms',
            'Kelp forests collapse during MHWs through a combination of direct thermal stress (temperatures exceeding ~18–19°C (64–66°F) kill bull kelp and giant kelp), reduced nutrient supply (warm, stratified surface waters suppress the upwelling of nitrate-rich cold water), and released top-down control by sea urchins (whose predators, including sunflower sea stars, were decimated by sea star wasting disease exacerbated by warm water), leading to urchin barrens',
            'Kelp forest collapse during MHWs is driven primarily by changes in salinity: anomalously warm atmospheric temperatures cause increased evaporation, raising surface salinity above the tolerance range of kelp spores; because kelp reproduction is highly salinity-sensitive, warming events prevent recruitment even when adult kelp survive the thermal stress',
            'MHW-related kelp collapse is driven by increased wave energy: anomalously warm ocean surface temperatures intensify storm systems that track over kelp forests, producing extreme wave heights that mechanically dislodge and destroy kelp canopy faster than the forests can recover; temperature directly kills kelp only when SSTs exceed 28°C (82°F), which rarely occurs in kelp forest regions',
          ],
          correct: 1,
          explain: 'Option A is chemically incorrect in multiple ways: warmer water reduces CO₂ solubility, which raises, not lowers, ocean pH in the short term (though ocean acidification from atmospheric CO₂ uptake lowers pH on longer timescales); and kelp holdfasts are organic tissue, not calcium carbonate — they are unaffected by carbonate chemistry. Option C has no scientific basis: MHWs do not raise surface salinity to kelp-lethal levels, and kelp reproduction (spore release and settlement) is not primarily salinity-limited in the concentration ranges associated with MHWs. Option D misstates the thermal tolerance — bull kelp begins dying at temperatures around 18–19°C (64–66°F), well below 28°C (82°F); the mechanism of wave damage occurs in storms but is not specifically linked to MHW-associated atmospheric warming. The correct answer is B: kelp forests are structured by cold, nutrient-rich water supplied by coastal upwelling, and are dominated by species with relatively narrow thermal tolerance windows. Bull kelp (*Nereocystis luetkeana*) shows growth suppression above ~15–16°C (59–61°F) and mortality above ~18–19°C (64–66°F); giant kelp (*Macrocystis pyrifera*) has similar thermal limits. MHWs damage kelp through three converging mechanisms: (1) direct thermal stress exceeding species-specific thermal limits; (2) reduced upwelling — warm, stratified surface waters deepen the thermocline and suppress the cold, nitrate-rich upwelling that fuels kelp growth, causing nutrient starvation even in plants that survive thermal stress; and (3) sea urchin release from top-down control — during the 2013–2016 MHW, sea star wasting disease (SSWD, linked to a densovirus whose virulence was amplified by warm water) devastated sunflower sea star (*Pycnopodia helianthoides*) populations, the primary urchin predator, causing urchin populations to explode and overgraze remaining kelp. The combination produced a >95% decline in bull kelp in northern California and converted kelp forest to urchin barrens across hundreds of kilometres of coastline.',
        },
      ],
    },
  ],
}

export default marineHeatWaves
