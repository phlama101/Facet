import { Globe, Activity, Zap, ArrowRight, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const streamflowTrendsClimate: Lesson = {
  id: 'hyd-201-1-3-1',
  title: 'Streamflow Trends Under Climate Change',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'How a warming climate is reshaping global river flows — from the drying Colorado Basin to the wetting high latitudes — and why traditional flood-frequency statistics built on historical records are no longer reliable.',
  sources: [
    { org: 'GRDC',   title: 'Global Runoff Data Centre — Long-term Discharge Records',                          url: 'https://www.bafg.de/GRDC/EN/Home/homepage_node.html' },
    { org: 'Science', title: 'Milly et al. (2008) — Stationarity Is Dead: Whither Water Management?',          url: 'https://www.science.org/doi/10.1126/science.1151915' },
    { org: 'ISIMIP',  title: 'Inter-Sectoral Impact Model Intercomparison Project',                             url: 'https://www.isimip.org/' },
    { org: 'IPCC',    title: 'IPCC AR6 WG1 Chapter 8 — Water Cycle Changes',                                   url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/' },
    { org: 'USBR',    title: 'US Bureau of Reclamation — Colorado River Basin Study',                          url: 'https://www.usbr.gov/lc/region/programs/crbstudy.html' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'How warming is rewriting the global map of river flows — and why historical statistics no longer predict the future',
      body: `Global river flow is being reshaped by warming in ways that are becoming measurable in the observational record. The GRDC database — spanning thousands of gauging stations and covering much of the 20th century — shows a coherent spatial pattern: general drying across Mediterranean Europe, southern Africa, and the southwestern United States, and wetting trends across northern latitudes and eastern North America. These patterns broadly match the fingerprint of thermodynamically forced changes in the hydrological cycle rather than natural variability alone.

The Clausius-Clapeyron relation is the governing thermodynamic principle: for each degree Celsius of warming, the atmosphere can hold approximately 7% more water vapour at saturation. This "moisture scaling" intensifies precipitation events because a warmer, moister atmosphere delivers more water per storm when lifting occurs. The complication, however, is that more intense precipitation events do not necessarily mean more total annual precipitation — in many subtropical and semi-arid regions, the number of wet days is decreasing even as individual events become heavier, leading to longer dry spells between more intense storms. The net effect on annual runoff thus depends on the balance between precipitation totals, the intensity distribution, and evapotranspiration, which also rises with temperature.

The Colorado River exemplifies the compounding mechanisms driving streamflow decline. A 20-year megadrought from 2000 to 2022 produced a flow deficit of roughly 20% relative to the 20th-century mean, dropping Lake Mead and Lake Powell to approximately 25% of capacity by 2022. Three mechanisms interacted: (1) reduced winter snowpack, the source of most Colorado River flow; (2) increased evapotranspiration as temperatures rose, extracting more water from soils and vegetation before it could reach stream channels; and (3) the structural vulnerability of overallocation — the 1922 Colorado River Compact divided the river based on gauged flows during an anomalously wet decade, apportioning more water among states than the river carried in average years. The Amazon offers a contrasting story: two 1-in-100-year droughts in 2005 and 2010 triggered a fire-deforestation-drought positive feedback in which burned forest lost the capacity to recycle moisture through transpiration, reducing regional rainfall in subsequent years.

Attribution science using CMIP6 model ensembles projects 10–30% runoff decreases in semi-arid regions by 2100 under high-emissions scenarios (SSP5-8.5), with increases in wet tropical regions. But perhaps the most important scientific insight for water management came from Milly and colleagues writing in Science in 2008: "Stationarity Is Dead." Their argument was that traditional engineering design — flood frequencies, safe yield calculations, dam spillway capacities — was built on the statistical assumption that past hydrological variability is a reliable guide to future variability (stationarity). Under climate change, this assumption fails. The result is that infrastructure designed for, say, a 100-year flood based on historical data may face that flow level every few decades going forward. Compounding this is a cascade of modeling uncertainty: uncertainty in GCMs (the dominant source) propagates through regional climate downscaling and into hydrological model simulations, making confident projection at the river-basin scale a substantial challenge. The ISIMIP project coordinates cross-sector impact assessments using standardised warming scenarios precisely to disentangle model uncertainty from scenario uncertainty in such projections.`,
      keyTerms: [
        {
          term: 'Clausius-Clapeyron Scaling',
          def: 'Thermodynamic relation stating the atmosphere holds ~7% more water vapour per °C of warming, intensifying precipitation events even where annual totals change little.',
        },
        {
          term: 'Megadrought',
          def: 'A multi-decadal drought of exceptional severity. The 2000–2022 Colorado Basin megadrought is the most intense in at least 1,200 years of tree-ring records.',
        },
        {
          term: 'Stationarity (hydrological)',
          def: 'The assumption that past climate variability is representative of future variability. Declared "dead" by Milly et al. (2008) because climate change invalidates historical flood-frequency statistics.',
        },
        {
          term: 'CMIP6 / SSP Scenarios',
          def: 'Coupled Model Intercomparison Project phase 6 models driven by Shared Socioeconomic Pathways. SSP5-8.5 is the high-emissions benchmark used for climate impact projections.',
        },
        {
          term: 'ISIMIP',
          def: 'Inter-Sectoral Impact Model Intercomparison Project: coordinates standardised multi-model hydrological and ecosystem impact assessments across sectors and warming levels.',
        },
        {
          term: 'Uncertainty Cascade',
          def: 'The hierarchy of modelling uncertainty in hydrology: GCM uncertainty > regional climate model uncertainty > hydrological model uncertainty, limiting confidence in basin-scale runoff projections.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Regional Streamflow Responses to Warming',
      body: `Warming-driven changes in global river flows are not uniform. They reflect the interplay of Clausius-Clapeyron moisture scaling, shifting precipitation seasonality, rising evapotranspiration demand, and regional atmospheric circulation changes. Understanding which regions are drying and which are wetting — and why — is foundational to climate adaptation planning for water resources.`,
      cards: [
        {
          name: 'Drying: Mediterranean & Semi-Arid',
          icon: Zap,
          color: BRAND.accent,
          desc: 'Mediterranean Europe, southern Africa, and the southwestern US show robust drying trends in GRDC records. Poleward expansion of the subtropical dry belt reduces precipitation. Rising ET erodes runoff even where rainfall is stable.',
          examples: 'Colorado River: 20-year megadrought (2000–2022), ~20% flow deficit. Cape Town Day Zero crisis 2018. Spain and Portugal: streamflow declines of 20–40% since 1960 linked to both reduced precipitation and higher ET.',
        },
        {
          name: 'Wetting: High Latitudes & Eastern N. America',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Northern Canada, Siberia, and Scandinavia show increasing runoff from intensified precipitation and permafrost thaw. Eastern North America shows modest wetting. Increased Arctic river discharge is freshening the Arctic Ocean.',
          examples: 'Eurasian arctic rivers (Ob, Yenisei, Lena): combined freshwater discharge to Arctic Ocean increased ~7% since 1936. Mississippi Basin: increasing high-flow events linked to Clausius-Clapeyron-driven precipitation intensification.',
        },
        {
          name: 'Colorado River: Compounding Mechanisms',
          icon: Layers,
          color: BRAND.coral,
          desc: '1922 Colorado River Compact allocated water based on an anomalously wet decade. Reduced snowpack + higher ET + overallocation = structural crisis. Lake Mead and Powell fell to ~25% capacity by 2022.',
          examples: 'Overallocation: the Compact apportioned ~18.5 km³ (4.4 cu mi)/yr; modern gauged flows average ~15 km³ (3.6 cu mi)/yr. Warming adds ~0.5°C (33°F) of effective ET-driven loss per degree of regional temperature increase, beyond precipitation changes alone.',
        },
        {
          name: 'Amazon: Fire-Deforestation-Drought Feedback',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Two 1-in-100-year droughts (2005 and 2010) drove record wildfires. Deforested and burned areas lose moisture recycling via transpiration, reducing regional rainfall in subsequent seasons — a positive feedback that amplifies climate-driven drying.',
          examples: '2010 Amazon drought: record low river levels; 3 billion tonnes of CO₂ emitted from drought-stressed forest. The Amazon may be approaching a tipping point where southeastern areas transition from rainforest to savanna under combined deforestation and drought pressure.',
        },
        {
          name: 'Non-Stationarity & Design Flood Implications',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Milly et al. (2008): "Stationarity Is Dead." Flood frequency analysis based on historical records underestimates future risk in drying regions and underestimates flood frequency in wetting regions. Infrastructure designed for historical return periods is now miscalibrated.',
          examples: 'IPCC AR6: 1-in-50-year floods become ~1-in-10-year events at 2°C (36°F) in many temperate river basins. Dam spillways designed for 1% annual exceedance probability (100-year flood) based on pre-1980 records may face that flow every 20–30 years by mid-century.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Attribution Science and Hydrological Projections',
      body: `Attributing observed streamflow changes to climate forcing and projecting future runoff requires a hierarchy of models and a quantitative understanding of their uncertainties. The science has advanced significantly, but the cascade from GCM to regional climate model to hydrological model means that basin-scale projections carry substantial uncertainty even when the global-scale signal is clear.`,
      cards: [
        {
          name: 'CMIP6 Runoff Projections',
          icon: Globe,
          color: BRAND.accent,
          desc: 'SSP5-8.5 scenario: 10–30% runoff decrease in semi-arid regions by 2100; increase in wet tropics. SSP2-4.5 shows smaller but qualitatively similar spatial pattern. Uncertainty bands are large at basin scale.',
          examples: 'Mediterranean basin: robust 20–40% runoff reduction across most CMIP6 models by 2100 under high emissions. Amazon: models diverge on magnitude, but most project drying in the southeast and mixed changes in the north and west.',
        },
        {
          name: 'Attribution: Observed Trends',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Detection-attribution methods compare observed streamflow trends to model-simulated natural variability. Many regional drying and wetting trends are now attributable to anthropogenic forcing at high confidence, particularly in mid-latitudes.',
          examples: 'Murray-Darling Basin, Australia: observed runoff decline since 1975 is attributable partly to anthropogenic forcing. Colorado Basin megadrought: ~47% of the severity attributable to warming via ET (Williams et al. 2022, Nature Climate Change).',
        },
        {
          name: 'Modelling Uncertainty Cascade',
          icon: Layers,
          color: BRAND.gold,
          desc: 'GCM uncertainty is the largest source of spread in hydrological projections, followed by regional climate model choice, then hydrological model structure. Emission scenario uncertainty becomes dominant beyond ~2050.',
          examples: 'Rhine Basin study: GCM spread accounts for ~60% of total runoff projection uncertainty; hydrological model only ~15%. Reducing GCM spread — through better constraint of climate sensitivity and cloud feedbacks — would most improve hydrological projection confidence.',
        },
        {
          name: 'ISIMIP: Cross-Sector Coordination',
          icon: Zap,
          color: BRAND.coral,
          desc: 'ISIMIP provides bias-corrected GCM outputs at standardised warming levels (1.5°C (35°F), 2°C (36°F), 3°C (37°F), 4°C (39°F)) to hydrological, agricultural, health, and ecosystem models, enabling internally consistent global impact assessments.',
          examples: 'ISIMIP2b: found that limiting warming to 1.5°C (35°F) vs 2°C (36°F) avoids significant river flood exposure for ~11 million people globally. Used to underpin IPCC AR6 Impacts chapter assessments and Paris Agreement target comparisons.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Streamflow Change Cascade: From Warming to Basin Impacts',
      body: 'Tracing how warming propagates through the hydrological system — from Clausius-Clapeyron moisture scaling and ET increases through snowpack loss and overallocation to basin-scale streamflow deficits and infrastructure risk.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how anthropogenic warming drives changes in precipitation intensity, evapotranspiration, and snowpack, which cascade through the catchment water balance to alter river flows, challenge legacy water allocations, and invalidate historical flood-frequency statistics',
        nodes: [
          {
            id: 'warming-driver',
            label: 'Anthropogenic Warming',
            description: 'Rising GHG concentrations increase global mean temperature. Each degree Celsius raises saturation vapour pressure ~7% (Clausius-Clapeyron) and increases atmospheric evaporative demand. CMIP6 ensemble projects 2–5°C (41°F) warming by 2100 depending on emission pathway.',
            color: BRAND.accent,
          },
          {
            id: 'precipitation-shift',
            label: 'Precipitation Intensification & Redistribution',
            description: 'Clausius-Clapeyron scaling intensifies individual precipitation events globally. But total annual rainfall decreases in the expanding subtropical dry belt (Mediterranean, southern Africa, SW USA). More precipitation falls as rain rather than snow at mid-elevations, shifting runoff timing earlier in the water year.',
            color: BRAND.jade,
          },
          {
            id: 'snowpack-loss',
            label: 'Snowpack and Glacier Decline',
            description: 'Warming shifts precipitation from snow to rain and advances snowmelt. Sierra Nevada April 1 snowpack has declined 20–30% since 1950. Glaciers retreat, reducing late-summer meltwater buffer. Snowpack loss is the dominant driver of streamflow timing shifts in mountain-fed rivers.',
            color: BRAND.gold,
          },
          {
            id: 'et-increase',
            label: 'Rising Evapotranspiration Demand',
            description: 'Warming increases potential ET via higher vapour pressure deficit. Actual ET rises in vegetated catchments with available soil moisture. In the Colorado Basin, warming-driven ET increase accounts for ~47% of the 2000–2022 megadrought severity. ET increases erode runoff independent of precipitation changes.',
            color: BRAND.coral,
          },
          {
            id: 'streamflow-decline',
            label: 'Net Streamflow Decline',
            description: 'Combined precipitation reduction, ET increase, and snowpack loss produce 10–30% runoff decreases in semi-arid regions under high-emission scenarios. Seasonality shifts: earlier spring peak, lower summer baseflow. Lake Mead and Powell fell to ~25% capacity by 2022.',
            color: BRAND.ruby,
          },
          {
            id: 'non-stationarity',
            label: 'Non-Stationarity: Infrastructure Risk',
            description: 'Historical flood frequencies underestimate future risk. Design return periods calibrated to pre-warming records are now miscalibrated. Milly et al. (2008): "Stationarity Is Dead." ISIMIP projections show 1-in-50-year floods becoming 1-in-10-year events in many river basins by 2°C (36°F) of warming.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'warming-driver',      to: 'precipitation-shift', label: 'Clausius-Clapeyron scaling and circulation changes' },
          { from: 'warming-driver',      to: 'snowpack-loss',        label: 'Rain-on-snow shift and earlier melt' },
          { from: 'warming-driver',      to: 'et-increase',          label: 'Higher VPD increases atmospheric moisture demand' },
          { from: 'precipitation-shift', to: 'streamflow-decline',   label: 'Reduced total rainfall in subtropical regions' },
          { from: 'snowpack-loss',       to: 'streamflow-decline',   label: 'Lower peak and late-season flows' },
          { from: 'et-increase',         to: 'streamflow-decline',   label: 'Soil moisture extracted before reaching channels' },
          { from: 'streamflow-decline',  to: 'non-stationarity',     label: 'Shifts flood and low-flow return periods' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Clausius-Clapeyron relation predicts ~7% more atmospheric moisture per °C of warming. Why does this intensification of individual precipitation events not necessarily translate to higher annual streamflow in semi-arid regions?',
          a: [
            'Clausius-Clapeyron scaling only applies to tropical precipitation; in semi-arid regions, precipitation is dominated by frontal systems whose intensity is controlled by wind shear rather than atmospheric moisture content',
            'Intensified individual events deliver more water per storm, but in semi-arid regions the concurrent decrease in the number of wet days and increase in evapotranspiration demand mean that more precipitation is lost to ET and soil moisture recharge rather than appearing as streamflow, and longer inter-storm dry periods allow soil moisture deficits to deepen before the next event',
            'Higher atmospheric moisture reduces the lapse rate and stabilises the atmosphere, suppressing convective uplift in semi-arid regions and preventing the intensified moisture from precipitating out; the net effect on precipitation is therefore close to zero',
            'Annual streamflow is controlled entirely by groundwater baseflow, which is unaffected by surface precipitation intensity; therefore Clausius-Clapeyron-driven intensification of storm events has no impact on annual river discharge',
          ],
          correct: 1,
          explain: 'Clausius-Clapeyron scaling intensifies individual precipitation events by increasing the moisture available for condensation during lifting, but annual streamflow is the integral of all precipitation minus evapotranspiration, interception, and soil moisture recharge over the year. In semi-arid regions, three factors counteract the intensification signal: (1) declining wet-day frequency — the expansion of the subtropical dry belt under warming reduces how often storms actually occur, even if each is heavier; (2) increasing evapotranspiration demand — rising temperatures increase VPD and hence actual ET, consuming more of each precipitation event before it reaches stream channels, especially when storms are infrequent and soils are deeply depleted between events; (3) infiltration capacity effects — intense events on crusted or hydrophobic soils generate high runoff ratios, but much of that runoff is flash flooding that exits basins quickly rather than recharging groundwater and sustaining baseflow. The net result is that even where precipitation totals are stable, annual streamflow can decline because of higher ET losses and unfavourable runoff timing.',
        },
        {
          q: 'The 1922 Colorado River Compact apportioned water among seven US states based on early 20th-century flow records. Why does this make the Colorado River system structurally vulnerable to climate change beyond the direct hydrological impacts?',
          a: [
            'The 1922 Compact allocated water based on an anomalously wet decade, apportioning more water among states (~18.5 km³ (4.4 cu mi)/yr) than the river carries in average years (~15 km³ (3.6 cu mi)/yr); warming-driven reductions are therefore superimposed on a pre-existing structural deficit in which the river was already overallocated before any climate change signal',
            'The 1922 Compact did not include water for Mexico, so all reductions in flow fall entirely on US states, which amplifies the domestic policy impact of any streamflow decrease but does not change the physical hydrology of the basin',
            'The 1922 Compact prioritised agricultural water rights over municipal uses; as warming reduces flow, cities face disproportionate cuts because their rights are junior to agricultural rights established in 1922, creating a political rather than hydrological vulnerability',
            'The 1922 Compact was based on a Compact assumption of stationarity in precipitation patterns; its vulnerability is entirely legal rather than physical, because states can renegotiate allocations through interstate compact amendments when flows decline',
          ],
          correct: 0,
          explain: 'The 1922 Colorado River Compact was negotiated during 1905–1922, which tree-ring and dendrohydrological records show was the wettest multi-decade period in at least 1,200 years of reconstructed Colorado River flow. The Compact allocated approximately 18.5 km³ (4.4 cu mi)/yr between the upper and lower basins, plus a treaty commitment to Mexico. But the long-term average annual flow of the Colorado is approximately 15 km³ (3.6 cu mi)/yr — meaning the river was structurally overallocated from the very beginning, before any climate change signal was detectable. Warming-driven reductions of 10–20% (from increased ET and reduced snowpack) are therefore not simply subtracting from an adequate baseline; they are compounding an existing 20–30% structural deficit. By 2022, this combination had driven storage in the two main reservoirs (Mead and Powell) to approximately 25% of capacity, threatening both water supply and hydropower generation. This case is a canonical example of how institutional frameworks built on stationarity assumptions become structurally misaligned with a non-stationary climate.',
        },
        {
          q: 'Milly et al. (2008) declared "Stationarity Is Dead" for water management. What specific consequences does non-stationarity have for the design of flood-control infrastructure?',
          a: [
            'Non-stationarity means that flood return periods will always become shorter under warming, so all flood-control infrastructure must be redesigned for zero return period — that is, for continuous flood conditions — which is technically and financially impossible',
            'Non-stationarity invalidates the use of historical flood-frequency statistics (which assume that the past distribution of floods is representative of future floods) for setting design standards; infrastructure designed for a 1% annual exceedance probability flood based on historical records may face that flow level far more frequently in the future, meaning that dams, spillways, levees, and bridges are potentially under-designed for future climate conditions',
            'Non-stationarity only affects regions where precipitation is increasing; in drying regions, historical flood records overestimate future flood risk, so infrastructure in those regions is over-designed and expensive maintenance budgets can be safely reduced',
            'Non-stationarity is primarily a concern for hydrological models rather than infrastructure design; flood engineers have always used safety factors that accommodate natural variability, and those safety factors are sufficient to cover climate change-driven changes in flood frequency within the 50–100 year design life of most infrastructure',
          ],
          correct: 1,
          explain: 'Flood frequency analysis — the statistical backbone of flood-risk engineering — uses the annual maximum series or peaks-over-threshold methods fitted to probability distributions (GEV, Log-Pearson III) to estimate flows with specified return periods (e.g., the 100-year flood, which has a 1% annual exceedance probability). The core assumption is stationarity: that the statistical distribution of floods in the historical record accurately represents the future. Milly et al. (2008) argued that climate change violates this assumption because the underlying climate state — which drives the precipitation and temperature that generate floods — is shifting outside the range of the historical observational period. Practical consequences include: (1) Dam spillways sized for the historical 1-in-100-year flood may be inadequate for the future 1-in-20-year flood; (2) FEMA flood maps based on historical frequency analysis misrepresent current and future risk; (3) insurance loss models calibrated to historical records underestimate losses. The solution involves non-stationary frequency analysis incorporating climate projections into flood frequency models, but this is technically complex and introduces additional uncertainty from the modelling cascade. The 2017 Oroville Dam emergency spillway failure (California) is frequently cited as an example of infrastructure capacity potentially being mismatched with future hydrology.',
        },
        {
          q: 'CMIP6 models project 10–30% runoff decreases in semi-arid regions by 2100 under SSP5-8.5. What is the primary source of uncertainty in these basin-scale projections and how does ISIMIP address it?',
          a: [
            'The primary source of uncertainty is the hydrological model structure; different bucket-model, soil-water-balance, and land-surface schemes produce dramatically different runoff projections from identical climate forcing, and ISIMIP addresses this by mandating a single approved hydrological model for all participating institutions',
            'The primary source of uncertainty is the emission scenario itself; all models agree on the hydrological response but disagree on how much CO₂ society will emit, and ISIMIP addresses this by running all projections under a single worst-case scenario (SSP5-8.5) to provide a conservative bound',
            'The primary source of uncertainty is the GCM, which produces the largest spread in projected temperature and precipitation at regional scales; regional climate model choice and hydrological model structure contribute additional but smaller uncertainty; ISIMIP addresses this by providing bias-corrected GCM output at standardised warming levels to multiple hydrological models, enabling decomposition of total uncertainty into its components',
            'The primary source of uncertainty is natural internal variability; multi-decadal ocean circulation modes (AMO, PDO) dominate basin-scale runoff variability over the 21st century, overwhelming the forced climate change signal; ISIMIP addresses this by running 50-member large ensembles to average out internal variability',
          ],
          correct: 2,
          explain: 'In the cascade from global forcing to local hydrological impacts, multiple layers of modelling uncertainty compound. Studies systematically partitioning uncertainty in basin-scale runoff projections consistently find that GCM uncertainty (arising from differences in model-simulated climate sensitivity, cloud feedbacks, and atmospheric circulation) accounts for the largest share of total projection spread — typically 50–70% of the variance in runoff projections at the basin scale. Regional climate model (RCM) choice adds perhaps 15–25%, and the choice of hydrological model contributes a further 10–20%. Emission scenario uncertainty becomes progressively more important after mid-century but is not the dominant source in the near term. ISIMIP addresses this by providing standardised, bias-corrected GCM climate forcing from multiple GCMs at specific warming levels (1.5°C (35°F), 2°C (36°F), 3°C (37°F), 4°C (39°F) above pre-industrial) to multiple sectoral models (hydrology, agriculture, fisheries, health). This design allows researchers to separate GCM uncertainty from model uncertainty and scenario uncertainty, and to produce internally consistent impact assessments across sectors. The standardisation also enables direct comparison of impacts at Paris Agreement warming targets.',
        },
      ],
    },
  ],
}

export default streamflowTrendsClimate
