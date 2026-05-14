import { Waves, Thermometer, Globe, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const oceanHeatContent: Lesson = {
  id: 'ocea-201-1-3-2',
  title: 'Ocean Heat Content and the Energy Budget',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: `How the ocean stores over 90 % of Earth\'s excess heat — Argo floats, energy imbalance, and the role of ocean heat in sea level rise`,
  sources: [
    { org: 'NOAA',   title: 'NOAA Ocean Heat Content',          url: 'https://www.noaa.gov/' },
    { org: 'NASA',   title: 'NASA Earth Energy Imbalance',       url: 'https://www.nasa.gov/' },
    { org: 'Nature', title: 'Nature — Ocean Warming',            url: 'https://www.nature.com/' },
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report',      url: 'https://www.ipcc.ch/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `The ocean as Earth\'s thermal memory`,
      body: `The climate system is fundamentally an energy accounting problem. Earth absorbs shortwave radiation from the Sun and emits longwave radiation to space; in a stable climate these fluxes balance precisely. But since the mid-twentieth century, rising greenhouse gas concentrations have altered the atmospheric composition sufficiently to create a **planetary energy imbalance**: Earth currently absorbs approximately **0.87 W/m²** more energy than it radiates away. That persistent surplus — less than one watt per square metre averaged over the entire planetary surface — is the engine of ongoing global warming. The question is: where does all that extra energy go?

The answer, overwhelmingly, is the ocean. The ocean covers 71% of Earth\'s surface, has enormous thermal mass, and circulates heat to great depth. Of every 100 joules of excess heat accumulating in the Earth system since the 1970s, more than **90 joules** have been absorbed by seawater. Atmosphere, land, and ice share the remainder. This enormous heat uptake by the ocean is both a buffer — the ocean\'s capacity to absorb heat has slowed surface air temperature rise considerably — and a commitment: heat already sequestered in the deep ocean will continue to influence sea level and ecosystems for centuries even if emissions cease today.

The measure of this accumulated warmth is **ocean heat content (OHC)**: the total thermal energy stored in the ocean, typically expressed for the 0–2,000 m layer where Argo floats now provide near-global observations. The 0–2,000 m OHC has been increasing at a rate of approximately **10 zettajoules per year** (10 × 10²¹ joules/yr) since the early 2000s. To contextualise that rate: 10 ZJ is equivalent to roughly 25 times humanity\'s annual primary energy consumption. Since 1955, the 0–2,000 m layer has gained more than 400 ZJ of heat.

**The Argo float programme** transformed our ability to monitor OHC. Before Argo, ocean heat measurements were sparse, biased toward ship routes, and lacked coverage below 700 m. Argo floats — autonomous profiling instruments roughly the size of a large fire extinguisher — drift at a parking depth of 1,000 m, then periodically descend to 2,000 m and rise slowly to the surface, collecting **CTD profiles** (conductivity, temperature, and depth) through the full 2,000 m water column. On surfacing, data are transmitted via satellite. More than **4,000 active Argo floats** now provide near-global coverage, with profiles every 10 days; this network has been operational since approximately 2005. A newer generation, **Deep Argo**, profiles to 6,000 m, capturing the abyssal ocean that remains below the standard Argo depth and stores a small but climatically significant additional heat inventory.

**OHC as the most robust metric of planetary warming.** Surface air temperature — the quantity most familiar from climate reporting — is highly variable, fluctuating with ENSO events, volcanic aerosols, and short-term atmospheric variability on timescales of years. OHC, by contrast, is a far smoother signal: the thermal inertia of the ocean effectively integrates over atmospheric noise, producing a steadily rising trend that tracks the underlying energy imbalance far more faithfully than surface temperature alone. Climate scientists increasingly argue that OHC is the single most reliable measure of the pace of planetary warming.

Ocean heat has a direct physical link to sea level rise through **thermal expansion** (thermosteric sea level rise): as seawater warms, it expands. Thermosteric expansion currently contributes approximately **38–55% of observed global sea level rise**, the remainder coming from melting glaciers and ice sheets. The 0–700 m layer contributes most immediately; the 700–2,000 m layer and below contribute increasingly as heat penetrates deeper. Even at 2 °C of global warming, committed thermosteric sea level rise from heat already stored would continue for centuries.

Ocean heat is not uniformly distributed. The **North Atlantic**, the **Southern Ocean**, and the **Pacific** each absorb substantial fractions. The Southern Ocean — driven by vigorous wind-driven upwelling and deep water mass formation — has been identified as the dominant heat sink in recent decades, absorbing roughly 35–40% of the total ocean heat gain despite covering only ~20% of ocean area. The **Pacific** has also stored large heat anomalies, modulated by ENSO: during La Niña phases, stronger trade winds drive surface heat into the western Pacific subsurface, temporarily accelerating OHC growth even while surface temperatures pause — a phenomenon observed during the so-called "hiatus" of the 2000s.

Perhaps the most dramatic ecological manifestation of OHC increase is the growing frequency and intensity of **marine heatwaves (MHWs)**: prolonged episodes of anomalously warm sea surface temperature. The **Great Barrier Reef** experienced catastrophic bleaching events in 2016 and 2020 driven by marine heatwaves, with 2016 killing ~50% of corals in the northern reef system. The North Pacific **"Blob"** of 2013–2016 was an extraordinary warm water anomaly — sea surface temperatures 2–6 °C above normal across millions of square kilometres — that disrupted fisheries, caused mass strandings of marine mammals, and triggered harmful algal blooms from Alaska to California. Under 2°C of global warming, MHWs projected to be up to 40 times more frequent than in the pre-industrial baseline.

Ocean heat transport also shapes global climate patterns: ocean currents carry approximately **2 petawatts** of heat poleward (comparable to the atmosphere\'s contribution), moderating the temperature contrast between equator and poles. Climate models are validated in part by how well they reproduce observed OHC trends; agreement between model-simulated and Argo-observed OHC in the 2005–present era provides one of the strongest lines of evidence that models capture the rate of planetary heat uptake correctly.`,
      keyTerms: [
        {
          term: 'ocean heat content',
          def: 'The total thermal energy stored in the ocean, typically quantified for the 0–700 m or 0–2,000 m layer. Expressed in zettajoules (ZJ = 10²¹ J). The 0–2,000 m layer has been gaining ~10 ZJ/yr since the early 2000s and is the most robust measure of the planetary energy imbalance, integrating over short-term atmospheric variability.',
        },
        {
          term: 'Argo float',
          def: 'Autonomous profiling instrument (~1.5 m long) that drifts at a parking depth of 1,000 m, descends to 2,000 m, and rises to the surface while collecting CTD (conductivity, temperature, depth) profiles. Transmits data via satellite. >4,000 active floats provide near-global OHC monitoring every 10 days since ~2005. Deep Argo extends profiling to 6,000 m.',
        },
        {
          term: 'Earth energy imbalance',
          def: 'The difference between solar energy absorbed and longwave energy emitted by Earth, currently ~0.87 W/m² averaged over the global surface. Caused by elevated greenhouse gas concentrations trapping outgoing radiation. >90% of the resulting excess heat accumulates in the ocean. The primary driver of ongoing climate change.',
        },
        {
          term: 'thermosteric sea level rise',
          def: 'Sea level rise caused by thermal expansion of seawater as it warms. Currently accounts for ~38–55% of observed global sea level rise, the rest coming from melting ice. Even at 2°C warming, committed thermosteric rise from heat already stored will continue for centuries after emissions stop.',
        },
        {
          term: 'marine heatwave',
          def: 'A prolonged period of anomalously warm sea surface temperature, defined statistically as SST exceeding the 90th percentile for at least 5 consecutive days. Notable events include the Great Barrier Reef bleaching (2016, 2020) and the North Pacific "Blob" (2013–2016). Frequency and intensity are increasing with rising OHC; projected to be ~40× more frequent at 2°C warming.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four Pillars of Ocean Heat Science',
      body: `Understanding ocean heat content requires integrating the physics of Earth\'s energy budget, the observational infrastructure that measures it, the sea level consequence of ocean warming, and the ecological disruption that marine heatwaves cause. Each of these four pillars connects directly to real-world climate monitoring and policy.

**Energy imbalance and ocean uptake** sit at the foundation. The ~0.87 W/m² imbalance is small relative to the ~240 W/m² of solar energy flowing through the system, but it is persistent — and it is relentlessly accumulating in the ocean. Reconstructions back to 1955 using ship-based XBT (expendable bathythermograph) data show that the trend in OHC is continuous; the Argo era (2005–present) simply provides higher precision and spatial resolution. ENSO modulates OHC interannually: during La Niña, heat is subducted into the western Pacific subsurface, temporarily accelerating OHC growth; during El Niño, that heat re-emerges, releasing energy back to the atmosphere and producing anomalously warm global surface temperatures.

**Argo floats** transformed ocean observation from a sparse, ship-dependent enterprise to a genuine global monitoring network. Before Argo, coverage below 700 m was so poor that deep ocean heat changes were essentially unknown. The 10-day profiling cycle means that Argo can track seasonal and interannual OHC variations in addition to the long-term trend. Data are freely available in real time to any researcher. The programme is overseen by an international consortium; floats are deployed from research ships, commercial vessels, and even aircraft.

**Thermosteric sea level rise** is the most consequential long-term impact of OHC increase for coastal populations. Every 1 ZJ of OHC gain raises global mean sea level by approximately 0.15 mm through thermal expansion alone; with OHC increasing at ~10 ZJ/yr, thermosteric expansion alone contributes ~1.5 mm/yr to the total ~3.7 mm/yr of global sea level rise. The deep ocean (below 2,000 m) contributes an additional expansion signal that is less well observed but climatically important on centennial timescales.

**Marine heatwaves** are perhaps the most vivid ecological signal of ocean warming. They are increasing in frequency (roughly doubling over the past century), duration, and intensity. The 2016 Great Barrier Reef bleaching — the most severe on record at the time — was directly driven by SSTs 1–2°C above the bleaching threshold sustained for months. The North Pacific Blob reorganised the food web across the entire Pacific coast of North America, with cascading effects from phytoplankton to salmon to sea lions. Modelling studies project that under RCP8.5 (high-emissions scenario), permanent MHW conditions will exist over much of the global ocean by 2050.`,
      cards: [
        {
          name: 'Earth\'s Energy Imbalance and Ocean Uptake',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'Earth absorbs ~0.87 W/m² more than it emits, with >90% of excess heat stored in the ocean. OHC in the 0–2,000 m layer rises ~10 ZJ/yr. ENSO modulates annual uptake; La Niña phases subduct heat into Pacific subsurface.',
          examples: 'Since 1955, 0–2,000 m OHC has gained ~400 ZJ · Southern Ocean absorbs ~35–40% of total ocean heat gain · "Hiatus" 2000s: surface T paused while OHC continued rising — heat stored in subsurface Pacific',
        },
        {
          name: 'Argo Floats — Eyes in the Ocean',
          icon: Waves,
          color: BRAND.accent,
          desc: '>4,000 autonomous floats profile temperature and salinity from surface to 2,000 m every 10 days, transmitting via satellite. Near-global coverage since ~2005. Deep Argo extends to 6,000 m. Pre-Argo, deep ocean heat change was essentially unknown.',
          examples: 'Argo detected >300 ZJ of 0–2,000 m heat gain since 2005 · Deep Argo pilot (2019–present): discovers significant heat gain 2,000–6,000 m · Float battery life ~4–5 years; ~800 new floats deployed per year to maintain array',
        },
        {
          name: 'Thermosteric Sea Level Rise',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Ocean warming causes seawater to expand, raising sea level. Thermosteric rise = ~38–55% of observed total global sea level rise (~1.5 mm/yr of ~3.7 mm/yr). Committed rise from already-stored heat will continue for centuries.',
          examples: '1 ZJ OHC gain ≈ 0.15 mm thermosteric sea level rise · 0–700 m expansion dominates near-term signal · Deep ocean (below 2,000 m) contributes additional slow expansion — not yet fully captured by standard Argo',
        },
        {
          name: 'Marine Heatwaves and Ecological Impacts',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Marine heatwaves (SST >90th percentile ≥5 days) are doubling in frequency. Great Barrier Reef 2016 bleaching killed ~50% of northern corals. North Pacific "Blob" 2013–16 disrupted fisheries coast-wide. Projected ~40× more frequent at 2°C warming.',
          examples: 'Great Barrier Reef 2020: second mass bleaching event in 5 years — now affecting middle and southern reef sectors · NE Pacific Blob SST anomaly +6°C over 4 million km² · Mediterranean 2023 MHW: SST 4–5°C above average, seagrass and posidonia die-offs',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Greenhouse Forcing to Sea Level Rise and Marine Heatwaves',
      body: `How anthropogenic greenhouse gas forcing drives Earth\'s energy imbalance, which the ocean absorbs, producing rising OHC with cascading consequences for sea level and marine ecosystems.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: `showing how anthropogenic greenhouse forcing leads to Earth\'s energy imbalance, ocean heat uptake, OHC increase, and downstream consequences for sea level rise and marine heatwaves`,
        nodes: [
          {
            id: 'ghg-forcing',
            label: 'Anthropogenic Greenhouse Forcing',
            description: 'Rising CO₂, CH₄, and N₂O concentrations reduce outgoing longwave radiation. Radiative forcing from CO₂ alone ~2.1 W/m² above pre-industrial levels. Total anthropogenic forcing ~3.3 W/m² (IPCC AR6). Net forcing after aerosol cooling ~2.7 W/m².',
            color: BRAND.gold,
          },
          {
            id: 'energy-imbalance',
            label: 'Earth Energy Imbalance (~0.87 W/m²)',
            description: 'Difference between absorbed solar radiation and emitted longwave radiation, averaged globally. Currently ~0.87 W/m² (2010–2020 mean). Equivalent to detonating ~25 Hiroshima bombs per second, continuously. Measured by CERES satellite instruments and ocean heat content change.',
            color: BRAND.accentHot,
          },
          {
            id: 'ocean-uptake',
            label: 'Ocean Absorbs 90%+ of Excess Heat',
            description: `High heat capacity and volume of the ocean make it the dominant heat reservoir. ~90–93% of Earth\'s energy imbalance accumulates in seawater. Atmosphere, land, and cryosphere share the remaining 7–10%. Ocean uptake slows surface air temperature rise but commits future warming.`,
            color: BRAND.accent,
          },
          {
            id: 'ohc-increase',
            label: 'OHC Increase in 0–2,000 m Layer',
            description: `Ocean heat content rises ~10 ZJ/yr in the 0–2,000 m layer. Observed by >4,000 Argo floats since 2005. Since 1955, total 0–2,000 m OHC gain ~400+ ZJ. OHC is more robust metric of warming than surface air temperature due to ocean\'s thermal inertia.`,
            color: BRAND.jade,
          },
          {
            id: 'thermal-expansion',
            label: 'Thermal Expansion',
            description: 'Warmer seawater is less dense and occupies greater volume. Each 1 ZJ of OHC gain raises global mean sea level ~0.15 mm. Rate: ~1.5 mm/yr thermosteric contribution. Deep ocean expansion adds further slow contribution on centennial timescales.',
            color: BRAND.coral,
          },
          {
            id: 'consequences',
            label: 'Sea Level Rise and Marine Heatwaves',
            description: 'Thermosteric expansion = 38–55% of observed sea level rise (~3.7 mm/yr total). Marine heatwaves (SST >90th percentile ≥5 days) are doubling in frequency: GBR mass bleachings 2016 and 2020, NE Pacific Blob 2013–16. Under 2°C: MHWs ~40× more frequent; committed thermosteric rise continues centuries.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'ghg-forcing',     to: 'energy-imbalance', label: 'Reduces outgoing longwave radiation' },
          { from: 'energy-imbalance', to: 'ocean-uptake',     label: 'Ocean intercepts surplus energy' },
          { from: 'ocean-uptake',    to: 'ohc-increase',      label: 'Heat stored in 0–2,000 m layer' },
          { from: 'ohc-increase',    to: 'thermal-expansion', label: 'Warmer water expands' },
          { from: 'thermal-expansion', to: 'consequences',    label: 'Raises sea level 38–55%' },
          { from: 'ohc-increase',    to: 'consequences',      label: 'Drives marine heatwaves and bleaching' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: `What fraction of Earth\'s excess heat does the ocean absorb, and why is ocean heat content considered a more robust indicator of planetary warming than surface air temperature?`,
          a: [
            'The ocean absorbs about 50% of excess heat; surface air temperature is more robust because it responds faster to changes in the energy balance, giving earlier warning of warming trends',
            'The ocean absorbs more than 90% of Earth\'s excess heat; OHC is more robust than surface air temperature because the thermal inertia of the ocean integrates over short-term atmospheric variability — ENSO, volcanic aerosols, and other fluctuations — producing a steadily rising signal that tracks the underlying energy imbalance more faithfully than the noisier surface temperature record',
            'The ocean absorbs about 70% of excess heat; both OHC and surface air temperature are equally reliable indicators — scientists use surface temperature because it is easier to measure from land stations',
            'The ocean absorbs about 30% of excess heat; most warming occurs in the atmosphere and land surface, with the ocean serving mainly as a short-term buffer that returns heat within decades',
          ],
          correct: 1,
          explain: `The ocean absorbs >90% of Earth\'s excess heat — a fraction confirmed by energy budget analyses and direct OHC measurements. Surface air temperature fluctuates substantially on interannual timescales: El Niño years are anomalously warm; La Niña years and years following major volcanic eruptions (e.g., Pinatubo 1991) are anomalously cool, creating the appearance of "pauses" or "accelerations" in warming. OHC, by contrast, shows a near-monotonic increase because the ocean\'s enormous thermal mass averages over these atmospheric fluctuations. During the so-called warming "hiatus" of the early 2000s, when global surface temperatures temporarily plateaued, OHC continued rising without interruption — the energy imbalance had not changed; it was simply being stored in the deeper ocean rather than expressed at the surface. This is why climate scientists argue OHC is the most physically meaningful metric of the pace of planetary warming.`,
        },
        {
          q: 'What is the Argo float programme, what does it measure, and what was the state of deep ocean heat monitoring before Argo achieved global coverage?',
          a: [
            'Argo is a satellite programme that measures sea surface temperature using infrared radiometers; before Argo, deep ocean temperatures were estimated from surface temperature using theoretical models',
            'Argo is a global array of >4,000 autonomous profiling floats that collect CTD (conductivity, temperature, depth) profiles from the surface to 2,000 m every 10 days, transmitting data via satellite; before Argo achieved near-global coverage (~2005), deep ocean heat measurements were sparse, biased toward ship routes, and coverage below 700 m was so poor that deep ocean heat changes were essentially unknown',
            'Argo is a moored buoy network operated by NOAA that continuously measures temperature and salinity at fixed depths; before Argo, ocean temperature was measured only during research cruises, which provided good spatial coverage but poor temporal resolution',
            'Argo is a numerical ocean model that assimilates satellite sea surface height data to reconstruct subsurface temperatures; before Argo, OHC could only be estimated for the top 100 m of the ocean',
          ],
          correct: 1,
          explain: 'Argo floats are free-drifting autonomous instruments, not satellite-based or moored. Each float descends to a parking depth of 1,000 m, then periodically descends further to 2,000 m and rises slowly to the surface while recording a CTD (conductivity, temperature, depth) profile — measuring temperature and salinity through the full 2,000 m water column. On surfacing, data are transmitted via the Argos or Iridium satellite systems and made publicly available within 24 hours. Before Argo, oceanographic temperature measurements below 700 m were largely limited to ship-deployed expendable bathythermographs (XBTs), which only reached 700–1,000 m, were deployed non-uniformly along shipping lanes, and had known calibration biases. The deep ocean heat content below 700 m was essentially unknown in real time. The Argo era has transformed this: now, global 0–2,000 m OHC can be computed monthly with quantified uncertainty. Deep Argo, which profiles to 6,000 m, is extending this coverage to the abyssal ocean.',
        },
        {
          q: 'What is thermosteric sea level rise, and approximately what fraction of observed global sea level rise does it currently account for?',
          a: [
            'Thermosteric sea level rise is the rise caused by melting Arctic sea ice adding freshwater to the ocean; it currently accounts for about 60–70% of observed sea level rise',
            'Thermosteric sea level rise is the rise caused by thermal expansion of seawater as it warms — warmer water is less dense and occupies more volume; it currently accounts for approximately 38–55% of observed global mean sea level rise, with the remainder coming from melting glaciers and ice sheets',
            'Thermosteric sea level rise is the rise caused by increased river discharge from glacial meltwater; it currently accounts for about 20–25% of observed sea level rise, with thermal expansion contributing only about 10%',
            'Thermosteric sea level rise is the rise caused by changes in ocean salinity reducing seawater density; it accounts for less than 5% of observed sea level rise and is considered negligible in current climate projections',
          ],
          correct: 1,
          explain: 'Thermosteric sea level rise results from thermal expansion: as the ocean warms, seawater density decreases and volume increases, raising sea level without any addition of new water mass. The global mean sea level has been rising at approximately 3.7 mm/yr over the satellite altimetry era (1993–present); thermosteric expansion contributes roughly 1.5 mm/yr, corresponding to the 38–55% range cited in IPCC AR6. The remainder (~45–62%) comes from mass addition: meltwater from mountain glaciers (~21%), the Greenland ice sheet (~21%), the Antarctic ice sheet (~12%), and smaller contributions from changes in land water storage. Distinguishing thermosteric from mass contributions requires combining satellite altimetry (total sea level) with GRACE satellite gravity measurements (mass changes) and Argo OHC data (thermal expansion). Importantly, committed thermosteric rise — from heat already stored in the ocean — will continue for centuries after emissions cease, regardless of future mitigation.',
        },
        {
          q: 'How does ocean heat content differ from surface air temperature as a climate metric, and what does the so-called warming "hiatus" of the early 2000s illustrate about this difference?',
          a: [
            'OHC and surface air temperature measure the same physical quantity and differ only in units; the "hiatus" showed that both metrics simultaneously paused in the early 2000s, confirming that Earth\'s energy imbalance had temporarily decreased due to increased aerosol pollution',
            'Surface air temperature responds primarily to OHC and therefore lags OHC changes by decades; the "hiatus" showed that surface temperature is a leading indicator of OHC, rising before the ocean warms',
            'OHC integrates the total thermal energy stored in the ocean, while surface air temperature measures a thin atmospheric layer subject to ENSO, volcanic, and other short-term variability; the "hiatus" illustrates the difference precisely — global surface temperatures plateaued from roughly 2000–2013 while OHC continued rising without interruption, indicating that the planetary energy imbalance had not changed but that excess heat was being stored in the deeper Pacific rather than expressed at the surface',
            'OHC is a more sensitive metric because it amplifies small temperature changes; the "hiatus" demonstrated that OHC paused even while surface temperatures continued rising, showing OHC is too smooth to detect real climate variability',
          ],
          correct: 2,
          explain: `The so-called surface temperature "hiatus" or "slowdown" of the early 2000s was a period when globally averaged surface air temperature increased more slowly than the long-term trend, attracting considerable attention and some misuse in public discourse. The resolution of the apparent paradox illustrates a fundamental point about OHC versus surface temperature as metrics. During this period, stronger La Niña conditions strengthened Pacific trade winds, subducting warm surface water into the western Pacific subsurface. This transferred heat from the surface (where it would register as surface warming) to the 300–700 m subsurface (where it registered as OHC increase but not as surface warming). Argo data clearly showed OHC rising continuously throughout the "hiatus." The Earth\'s energy imbalance — the root cause of warming — had not changed. Surface air temperature had temporarily paused not because warming stopped but because the ocean was routing the excess heat to depth rather than the atmosphere. This episode confirmed that OHC is the more reliable metric of Earth\'s total heat accumulation.`,
        },
        {
          q: 'What caused the North Pacific "Blob" marine heatwave of 2013–2016 and what were its main ecological consequences?',
          a: [
            'The Blob was caused by a strengthening of the California Current bringing anomalously warm tropical water northward; its main ecological consequence was a major increase in salmon populations due to warmer, more productive conditions',
            'The Blob was caused by a persistent atmospheric high-pressure ridge over the Gulf of Alaska that suppressed the usual wind-driven cooling and mixing of the ocean surface, allowing anomalous sea surface warmth to build and persist; sea surface temperatures were 2–6°C above normal over millions of square kilometres, disrupting the food web from phytoplankton to apex predators — consequences included harmful algal blooms, mass mortality of seabirds and marine mammals, collapse of Pacific cod stocks, and disruption of Pacific salmon runs along the entire North American coast',
            'The Blob was caused by a major submarine volcanic eruption in the Pacific that directly heated the overlying water column; its ecological consequences were confined to the immediate vicinity of the eruption and lasted less than six months',
            'The Blob was caused by El Niño teleconnections in 2015–2016 that diverted warm equatorial water into the North Pacific; its ecological impacts were limited to coral bleaching in Hawaii and had minimal effects on fisheries or marine mammals',
          ],
          correct: 1,
          explain: 'The North Pacific Blob originated in late 2013 when an anomalously persistent high-pressure ridge in the Gulf of Alaska reduced the wind-driven mixing that normally cools the ocean surface and brought in cold, nutrient-rich water from depth. Without this cooling, the surface ocean warmed dramatically — by 2–6°C above climatological means — over an area eventually exceeding 4 million km². The Blob persisted through 2014–2015, interacting with the 2015–16 El Niño to sustain and extend the warm anomaly. Ecological consequences were severe and wide-ranging: (1) Warm, stratified water suppressed upwelling and nutrient input, reducing phytoplankton productivity and shifting community composition. (2) The altered food web propagated upward: forage fish populations declined or shifted geographically; salmon from Alaska to California experienced poor returns; Pacific cod in the Gulf of Alaska suffered a population collapse attributed to increased metabolic demands in warm water combined with poor prey availability. (3) Harmful algal blooms — particularly toxic Pseudo-nitzschia — shut down the Pacific Coast Dungeness crab fishery in 2015, the largest closure in California history. (4) Unprecedented mortality events affected seabirds (Common Murres in Alaska) and sea lions along the California coast. The Blob is a template for the kinds of ecosystem-wide disruption that will become more common as baseline OHC continues to rise.',
        },
      ],
    },
  ],
}

export default oceanHeatContent
