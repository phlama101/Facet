import type { Lesson } from './types'

const clim201Capstone: Lesson = {
  id: 'clim-201-capstone',
  title: 'Carbon Cycle & Climate Feedbacks: Capstone Assessment',
  track: 'cli',
  trackName: 'Climatology',
  level: 'Advanced',
  duration: '25 min',
  xpReward: 500,
  description:
    'A comprehensive assessment spanning the global carbon cycle, land and ocean carbon sinks, carbon budgets, climate sensitivity, water vapor and cloud feedbacks, carbon cycle feedbacks, climate tipping points, Earth system models, emissions scenarios, and climate intervention.',
  sources: [
    { org: 'IPCC',  title: 'Sixth Assessment Report — Physical Science Basis (AR6 WGI, 2021)',     url: 'https://www.ipcc.ch/report/ar6/wg1/' },
    { org: 'GCP',   title: 'Global Carbon Budget 2023 (Friedlingstein et al., Earth Syst. Sci. Data)', url: 'https://www.globalcarbonproject.org/carbonbudget/' },
    { org: 'NOAA',  title: 'Earth System Research Laboratories — Global Monitoring Laboratory',    url: 'https://gml.noaa.gov/' },
    { org: 'NASA',  title: 'Earth Observatory — Carbon Cycle & Climate',                           url: 'https://earthobservatory.nasa.gov/features/CarbonCycle' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Carbon Cycle & Climate Feedbacks: Capstone Assessment',
      body: `This capstone assessment covers the full arc of the Carbon Cycle & Climate Feedbacks advanced path. Questions span the global carbon cycle and anthropogenic perturbation, land and ocean carbon sinks, the remaining carbon budget for the Paris Agreement targets, equilibrium and transient climate sensitivity, water vapor and cloud feedbacks, carbon cycle feedbacks including permafrost, climate tipping points, Earth system model architecture, SSP emissions scenarios, and proposed climate intervention approaches.

Each of the twenty questions has exactly one correct answer. Distractors are designed to test depth of understanding, not surface recall — partial truths, reversed logic, and plausible-sounding numbers are common traps. Every question is followed by a detailed explanation. Expect to draw on quantitative knowledge alongside mechanistic reasoning.

Allow yourself the full twenty-five minutes.`,
      keyTerms: [],
    },
    {
      type: 'quiz',
      questions: [
        // ── Q1: Global carbon cycle — atmospheric CO₂ annual increase ─────────
        {
          q: 'The Global Carbon Project\'s 2023 carbon budget shows that approximately 11.2 Pg C/yr of CO₂ is emitted by fossil fuel combustion and land use change. Of this, roughly 5 Pg C/yr accumulates in the atmosphere. What annual increase in atmospheric CO₂ concentration does an accumulation of ~5 Pg C/yr correspond to, and what fraction of total emissions does the land biosphere absorb?',
          a: [
            'Approximately 1.0 ppm/yr; the land biosphere absorbs roughly 50% of total emissions',
            'Approximately 2.4 ppm/yr; the land biosphere absorbs roughly 28% of total emissions (~3.1 Pg C/yr)',
            'Approximately 4.0 ppm/yr; the land biosphere absorbs roughly 10% of total emissions (~1.2 Pg C/yr)',
            'Approximately 2.4 ppm/yr; the land biosphere is carbon-neutral and absorbs essentially 0% of anthropogenic emissions',
          ],
          correct: 1,
          explain:
            'Each 1 Pg C added to the atmosphere raises CO₂ by approximately 0.47 ppm; 5 Pg C/yr × 0.47 ppm/Pg C ≈ 2.4 ppm/yr, matching the observed Mauna Loa trend. Of the ~11.2 Pg C/yr emitted, the land biosphere net sink absorbs ~3.1 Pg C/yr — about 28% — primarily through CO₂ fertilisation of photosynthesis and forest regrowth in mid-latitude and boreal regions. Option A gives the 1960s accumulation rate, which has since more than doubled. Option C overstates the accumulation rate and understates the land sink. Option D correctly identifies the accumulation rate but erroneously asserts the land biosphere is carbon-neutral; despite gross deforestation emissions, the intact terrestrial biosphere currently constitutes a significant net sink.',
        },
        // ── Q2: Land carbon sink — CO₂ fertilization ─────────────────────────
        {
          q: 'CO₂ fertilisation is one mechanism sustaining the terrestrial carbon sink. Which statement most accurately describes both its benefits and its limitations?',
          a: [
            'CO₂ fertilisation uniformly increases photosynthesis and biomass in all terrestrial ecosystems and is expected to strengthen indefinitely, ensuring that the land sink will keep pace with rising emissions throughout the 21st century regardless of warming',
            'CO₂ fertilisation enhances the photosynthesis rate of C3 plants (trees, wheat, rice) but not C4 plants (maize, sugarcane); its benefit is increasingly limited by nitrogen, phosphorus, and water availability, and warming-enhanced respiration may erode the net gain — so the land sink fraction of emissions is projected to decline under high-warming scenarios',
            'CO₂ fertilisation benefits only C4 plants because their carbon-concentrating mechanism is saturated at current CO₂ levels; C3 plants are unaffected because rubisco is already operating at near-maximum efficiency',
            'CO₂ fertilisation has been demonstrated only in controlled greenhouse experiments; in the field, elevated CO₂ provides no measurable net carbon gain because increased respiration exactly offsets the photosynthetic boost in every major biome studied to date',
          ],
          correct: 1,
          explain:
            'C3 plants (which include most trees and temperate crops) use rubisco directly and benefit measurably from elevated CO₂ because rubisco is substrate-limited at current ~420 ppm; C4 plants have a CO₂-concentrating mechanism that already saturates rubisco, so they gain little from higher atmospheric CO₂. FACE (Free-Air CO₂ Enrichment) experiments confirm real-world fertilisation gains for C3 species but show these are strongly constrained by nutrient availability: extra carbon fixed by photosynthesis cannot be fully retained in biomass if nitrogen or phosphorus is limiting. Under high-emission scenarios, warming-accelerated soil respiration and more frequent drought and fire are projected to weaken and potentially reverse the land sink by late this century. Option A overestimates the durability of the sink. Option C has the C3/C4 relationship backwards. Option D contradicts the now-robust body of FACE experiment evidence.',
        },
        // ── Q3: Ocean carbon uptake — carbonate chemistry ────────────────────
        {
          q: 'The ocean absorbs CO₂ from the atmosphere partly through its carbonate buffer system. As atmospheric CO₂ rises, the Revelle factor increases. What does a higher Revelle factor imply for ocean carbon uptake efficiency?',
          a: [
            'A higher Revelle factor means the ocean can dissolve more CO₂ per unit rise in atmospheric pCO₂, so uptake efficiency improves as emissions continue',
            'The Revelle factor is unrelated to uptake efficiency; it is simply a measure of the ocean\'s temperature-dependent CO₂ solubility and has no bearing on how much carbon the ocean can absorb per unit of atmospheric CO₂ increase',
            'A higher Revelle factor means the ocean must increase its total dissolved inorganic carbon (DIC) by a larger percentage per unit rise in pCO₂ to maintain equilibrium — reflecting reduced buffer capacity — so the ocean becomes progressively less efficient at absorbing each additional unit of atmospheric CO₂',
            'A higher Revelle factor indicates that carbonate ion concentration is increasing in surface waters, enhancing the ocean\'s ability to neutralise additional CO₂ and accelerating uptake efficiency in tropical regions',
          ],
          correct: 2,
          explain:
            'The Revelle (buffer) factor R is defined as the fractional change in pCO₂ divided by the fractional change in total dissolved inorganic carbon: R = (ΔpCO₂/pCO₂) / (ΔDIC/DIC). A high R means that a small increase in DIC produces a large increase in pCO₂ — i.e., the surface ocean\'s pCO₂ rises steeply for each unit of CO₂ it absorbs, reducing the pCO₂ gradient that drives air-sea flux. Current R ≈ 10; under high-CO₂ futures R may reach 12–14. As CO₂ dissolves it reacts with water to form carbonic acid, consuming carbonate ions (CO₃²⁻) and reducing the alkalinity available for further buffering. Options A and D invert the relationship. Option B incorrectly conflates the Revelle factor with temperature-dependent solubility (Henry\'s Law), which is a separate and real effect but not what the Revelle factor quantifies.',
        },
        // ── Q4: Carbon budget — remaining budget for 1.5 °C ──────────────────
        {
          q: 'The IPCC AR6 WGI report estimated the remaining carbon budget for limiting warming to 1.5 °C (from a 2020 baseline, 50% likelihood). Approximately how large was that budget, and how many years of current emissions does it represent?',
          a: [
            'Approximately 2,500 Pg CO₂; at current emission rates of ~40 Pg CO₂/yr this represents roughly 60 years of emissions',
            'Approximately 500 Pg CO₂; at current emission rates of ~40 Pg CO₂/yr this represents roughly 12 years of emissions',
            'Approximately 100 Pg CO₂; at current emission rates of ~40 Pg CO₂/yr this represents roughly 2–3 years of emissions',
            'Approximately 1,000 Pg CO₂; at current emission rates of ~40 Pg CO₂/yr this represents roughly 25 years of emissions',
          ],
          correct: 1,
          explain:
            'AR6 Table SPM.2 estimated the remaining carbon budget for 1.5 °C at 50% likelihood as approximately 500 Pg CO₂ from a 2020 baseline. Global CO₂ emissions from fossil fuels and land use change total roughly 40 Pg CO₂/yr (≈ 10 Pg C/yr × 3.67 to convert to CO₂ mass). Dividing 500 Pg CO₂ by 40 Pg CO₂/yr gives approximately 12.5 years — meaning the budget was on track to be exhausted around the early 2030s if emissions continued at 2020 rates. Note that the budget has uncertainty ranges of ±220 Pg CO₂ due to climate sensitivity uncertainty and carbon cycle feedbacks. Option A is the 2 °C budget, not 1.5 °C. Option C drastically underestimates the budget. Option D corresponds roughly to the 1.7 °C budget at 50% likelihood.',
        },
        // ── Q5: Equilibrium climate sensitivity (ECS) ─────────────────────────
        {
          q: 'The IPCC AR6 assessed equilibrium climate sensitivity (ECS) with greater confidence than previous reports. What is the AR6 likely range and best estimate, and why was the lower bound of the range raised compared with AR5?',
          a: [
            'AR6 likely range: 1.5–4.5 °C, best estimate 3.0 °C; the lower bound was raised because satellite-era observations of cloud feedback sign resolved a long-standing ambiguity',
            'AR6 likely range: 2.5–4.0 °C, best estimate 3.0 °C; the lower bound was raised because multiple independent lines of evidence — paleoclimate reconstructions, instrumental warming record, and process-based understanding of cloud feedbacks — all became inconsistent with ECS values below about 2.5 °C',
            'AR6 likely range: 1.0–5.0 °C, best estimate 2.5 °C; the lower bound was unchanged from AR5 but the upper bound was extended to reflect newly discovered permafrost feedbacks not included in earlier model ensembles',
            'AR6 likely range: 3.0–5.0 °C, best estimate 4.0 °C; the lower bound was raised because CMIP6 models systematically produce higher sensitivity than earlier generation models and CMIP6 is the gold standard for ECS estimation',
          ],
          correct: 1,
          explain:
            'AR6 assessed ECS as likely 2.5–4.0 °C with a best estimate of 3.0 °C, narrowing and raising the lower bound from the AR5 likely range of 1.5–4.5 °C. The key advance was the synthesis of three independent lines of evidence: (1) the paleoclimate record (last glacial maximum and Eocene climate provide strong constraints), (2) the observed instrumental warming over 1850–2020 combined with measured forcing and ocean heat uptake, and (3) process-based understanding of cloud feedbacks that showed low-ECS states (<2.5 °C) required implausibly negative cloud feedbacks inconsistent with observations. Option A restates the AR5 range. Option C widens rather than narrows the range and gives the wrong best estimate. Option D overstates the range and best estimate; while some CMIP6 models did run hot, AR6 explicitly down-weighted high-sensitivity CMIP6 models that were inconsistent with observed constraints.',
        },
        // ── Q6: Transient vs equilibrium climate response ─────────────────────
        {
          q: 'The transient climate response (TCR) is systematically lower than the equilibrium climate sensitivity (ECS). Which of the following correctly explains this difference and gives approximate values for each?',
          a: [
            'TCR is lower than ECS because CO₂ forcing is time-dependent and weakens after a doubling; TCR ≈ 1.5 °C and ECS ≈ 3.0 °C; the gap reflects diminishing forcing rather than ocean heat uptake',
            'TCR is lower than ECS because the deep ocean acts as a heat reservoir that delays the full surface temperature response; TCR (warming at CO₂ doubling in a 1%/yr ramp, before the forcing is held fixed) ≈ 1.8 °C, while ECS ≈ 3.0 °C; the gap closes as the ocean slowly equilibrates over centuries to millennia',
            'TCR equals ECS on decadal timescales because surface temperatures respond instantaneously to radiative forcing; any apparent difference is an artifact of different CO₂ doubling protocols used by different modelling groups',
            'TCR exceeds ECS because rapid CO₂ forcing activates fast feedbacks (water vapour, lapse rate) that are subsequently dampened by slow ocean feedbacks once equilibrium is approached; TCR ≈ 4.0 °C and ECS ≈ 3.0 °C',
          ],
          correct: 1,
          explain:
            'TCR is defined as the global mean surface temperature change at the time of CO₂ doubling in a standard experiment where CO₂ increases at 1% per year (compounding, doubling after ~70 years). Because the deep ocean has a very large heat capacity and takes centuries to millennia to equilibrate, it continues absorbing heat long after the forcing stabilises, delaying surface warming. The ratio ECS/TCR ≈ 3.0/1.8 ≈ 1.67 reflects the current ocean heat uptake efficiency. AR6 assessed TCR as likely 1.2–2.4 °C (best estimate ~1.8 °C). Option A misidentifies the mechanism as weakening forcing rather than ocean heat uptake. Option C is incorrect — the ocean\'s thermal inertia is real and well-measured, not a protocol artifact. Option D has the relationship backwards; fast feedbacks amplify warming in both TCR and ECS scenarios, and TCR < ECS always in standard climate model diagnostics.',
        },
        // ── Q7: Water vapor feedback type ────────────────────────────────────
        {
          q: 'Water vapor is the largest feedback in the climate system. Is it a positive or negative feedback, and by approximately how much does it amplify warming relative to a no-feedback baseline?',
          a: [
            'Water vapor is a negative feedback because increased evaporation cools the surface; it reduces the no-feedback warming by approximately 50%',
            'Water vapor is a positive feedback that roughly doubles the warming from CO₂ forcing alone; it amplifies the Planck response by a feedback parameter of approximately +1.8 W m⁻² °C⁻¹, making it the single largest positive feedback in the climate system',
            'Water vapor is a positive feedback, but its effect is small (less than 10% amplification) because tropospheric water vapor concentrations are already near saturation and cannot increase significantly with warming',
            'Water vapor feedback is neither purely positive nor negative because it simultaneously warms (greenhouse effect) and cools (increased albedo from cloud formation); the net effect on global mean temperature is negligible',
          ],
          correct: 1,
          explain:
            'As surface temperatures rise, the Clausius-Clapeyron relation dictates that saturation vapour pressure increases by roughly 7% per °C. Relative humidity remains approximately constant, so absolute atmospheric moisture content increases. Since water vapor is a potent greenhouse gas absorbing strongly in the 6.3 µm band and the "dirty window" region, more water vapor amplifies the initial warming — a positive feedback. The water vapor feedback parameter is approximately +1.8 W m⁻² °C⁻¹, making it the single largest individual feedback, roughly doubling the bare-planet Planck response. Option A incorrectly characterises the feedback as negative; while evaporation does provide surface cooling, the dominant effect of increased atmospheric water vapor is greenhouse warming. Option C dramatically underestimates the feedback strength. Option D conflates water vapor with clouds; they are distinct feedbacks with separate parameterisations.',
        },
        // ── Q8: Cloud feedback uncertainty in CMIP6 ──────────────────────────
        {
          q: 'Cloud feedbacks remain the largest source of uncertainty in climate projections. Which statement most accurately characterises the state of cloud feedback science as assessed in IPCC AR6?',
          a: [
            'Low-level marine cloud feedbacks are now fully understood; CMIP6 models unanimously agree that low clouds will decrease with warming, providing a large positive feedback that is the primary reason CMIP6 models are on average warmer than CMIP5 models',
            'The net cloud feedback is assessed as likely positive (best estimate +0.42 W m⁻² °C⁻¹ in AR6), driven predominantly by decreasing low-level marine cloud cover in the subtropics; however, substantial uncertainty remains, particularly for the magnitude of the low-cloud feedback, and this uncertainty is the dominant driver of the spread in ECS across CMIP6 models',
            'Cloud feedbacks are assessed as likely negative overall because increased atmospheric moisture causes more high-level cirrus cloud formation, which reflects more sunlight than it traps longwave radiation; this negative cloud feedback is the main reason ECS is bounded below ~4 °C',
            'AR6 concluded that cloud feedbacks cannot be constrained by either models or observations, and recommended treating the cloud feedback as uniformly distributed between −2 and +2 W m⁻² °C⁻¹ for all probabilistic climate projections',
          ],
          correct: 1,
          explain:
            'AR6 assessed the net cloud feedback as very likely positive, with a best estimate of +0.42 W m⁻² °C⁻¹ and a likely range of 0 to +0.84 W m⁻² °C⁻¹. The dominant contributor is the low-cloud feedback in subtropical marine environments: as the lower troposphere warms, boundary-layer stability decreases, reducing low-cloud fraction and exposing the ocean surface to more solar radiation (a positive feedback). High-cloud altitude rises with warming (thermodynamic scaling), also a positive feedback. The spread in low-cloud feedback is the primary reason CMIP6 models span a wide ECS range. Option A incorrectly claims unanimous model agreement — model spread on low-cloud feedback is precisely the problem. Option C has the sign wrong for the net feedback. Option D misrepresents AR6\'s assessment; substantial constraints on cloud feedbacks were achieved through process understanding and observational emergent constraints.',
        },
        // ── Q9: Carbon cycle feedback gamma (climate-carbon) ─────────────────
        {
          q: 'The climate-carbon cycle feedback parameter γ (gamma) quantifies how much extra CO₂ is released to the atmosphere per degree of global warming, independent of CO₂-induced changes in photosynthesis. Approximately what value did AR6 assess for γ, and what processes drive it?',
          a: [
            'γ ≈ −50 Pg C °C⁻¹; warming increases photosynthesis faster than respiration in tropical forests, so the land biosphere takes up more carbon per degree of warming, creating a negative (stabilising) carbon-climate feedback',
            'γ ≈ +50 Pg C °C⁻¹; warming accelerates soil and permafrost decomposition and reduces ocean solubility, releasing extra CO₂ to the atmosphere per degree of warming and amplifying initial climate forcing',
            'γ ≈ +7 Pg C °C⁻¹; the only significant process is the temperature dependence of CO₂ solubility in surface seawater (Henry\'s Law), which outgasses a small amount of CO₂ per degree of ocean warming',
            'γ ≈ +200 Pg C °C⁻¹; permafrost alone contains enough carbon to release 200 Pg C for every 1 °C of warming, and this dominates all other carbon-climate feedbacks',
          ],
          correct: 1,
          explain:
            'AR6 assessed the land climate-carbon feedback (γ_L) at approximately +50 Pg C °C⁻¹ and the ocean feedback (γ_O) at approximately +15 Pg C °C⁻¹, giving a total γ ≈ +65 Pg C °C⁻¹. The land contribution is dominated by two processes: (1) warming-enhanced soil microbial respiration that exceeds the respiration-photosynthesis balance in many ecosystems, releasing legacy soil carbon, and (2) permafrost thaw releasing ancient organic carbon as CO₂ and CH₄. The ocean contribution arises from reduced CO₂ solubility at higher temperatures and, in some regions, slowed overturning circulation reducing deep-ocean carbon uptake. This positive gamma means that warming itself triggers additional CO₂ release, amplifying the original forcing. Option A incorrectly gives a negative gamma. Option C captures only the ocean solubility mechanism and greatly underestimates γ. Option D overestimates gamma by about a factor of three; permafrost feedback is large but operates gradually over decades to centuries.',
        },
        // ── Q10: Permafrost carbon stock ──────────────────────────────────────
        {
          q: 'Arctic permafrost contains large stocks of organic carbon accumulated over millennia. Approximately how much carbon is stored in permafrost, how does that compare with the current atmospheric CO₂ pool, and what is the dominant greenhouse gas released during waterlogged (anaerobic) permafrost thaw?',
          a: [
            'Approximately 500 Pg C in permafrost; this is roughly 60% of the atmospheric pool; the dominant gas under anaerobic conditions is CO₂ from aerobic decomposition',
            'Approximately 1,500 Pg C in permafrost; this is approximately 1.7× the current atmospheric CO₂ pool (~870 Pg C at ~420 ppm); under waterlogged anaerobic conditions the dominant gas is methane (CH₄), which has a 100-year global warming potential roughly 30× that of CO₂',
            'Approximately 3,000 Pg C in permafrost; this is approximately 3.5× the atmospheric pool; the dominant gas under both aerobic and anaerobic conditions is nitrous oxide (N₂O) because nitrogen cycling dominates Arctic soil biogeochemistry',
            'Approximately 150 Pg C in permafrost; this is less than 20% of the atmospheric pool and too small to significantly affect global climate even under complete thaw scenarios',
          ],
          correct: 1,
          explain:
            'The Northern Hemisphere permafrost zone stores an estimated 1,460–1,600 Pg C (often cited as ~1,500 Pg C) in the top 3 m of frozen soils, representing roughly 1.7 times the carbon currently in the atmosphere as CO₂. Under aerobic conditions (well-drained, thawed active layer), decomposition releases CO₂. Under anaerobic (waterlogged) conditions — common in Arctic lowland lakes, thermokarst wetlands, and peat bogs where drainage is impeded — methanogenic archaea produce CH₄, which has a 100-year GWP of ~28–30 (AR6 values). Both pathways are active; the balance between aerobic and anaerobic decomposition depends on local hydrology, and the CH₄ pathway is especially significant for high-GWP climate forcing. Option A underestimates the permafrost stock by a factor of three. Option C cites the total soil carbon pool (not just permafrost) and incorrectly identifies N₂O as dominant. Option D drastically underestimates the stock.',
        },
        // ── Q11: Greenland ice sheet tipping threshold ────────────────────────
        {
          q: 'The Greenland Ice Sheet (GIS) is considered a potential tipping element. What is the approximate temperature threshold above which the GIS is thought to be committed to near-complete melting, how much sea level rise would result, and over what timescale?',
          a: [
            'The GIS tips irreversibly above +1 °C of local Greenland warming; complete melting would raise global sea level by approximately 1–2 m over the next 100 years',
            'The GIS tips irreversibly above approximately +1.5–2 °C of global mean warming (corresponding to roughly +3–4 °C of local Greenland warming); near-complete melting would contribute approximately 7 m of global mean sea level rise, but on a timescale of centuries to millennia rather than decades',
            'The GIS has no tipping threshold; it responds linearly and reversibly to temperature throughout the range 0–6 °C of global warming, meaning that a return to pre-industrial temperatures would fully restore the ice sheet on a centennial timescale',
            'The GIS tips above +4 °C of global mean warming; near-complete melting would raise sea level by approximately 70 m over 1,000 years, reflecting the combined loss of both the Greenland and West Antarctic ice sheets',
          ],
          correct: 1,
          explain:
            'Multiple lines of evidence — process-based ice sheet models, paleoclimate analogs, and theoretical surface-mass-balance calculations — converge on a threshold of approximately 1.5–2 °C of global mean warming (roughly 3–4 °C locally over Greenland) above which the ice sheet\'s surface mass balance becomes persistently negative and the sheet commits to near-complete deglaciation. The tipping is driven by the melt-elevation feedback: as the ice surface lowers, it descends into warmer air, accelerating melting in a self-reinforcing loop. Complete GIS melting would contribute approximately 7.2 m to global mean sea level, but the process unfolds over centuries to millennia, not decades. Option A underestimates the threshold and the sea level contribution, and misrepresents the timescale. Option C incorrectly denies a tipping threshold; the hysteresis of ice sheets is well-established. Option D inflates both the threshold and the sea level contribution by combining GIS with WAIS.',
        },
        // ── Q12: AMOC tipping point mechanism ────────────────────────────────
        {
          q: 'The Atlantic Meridional Overturning Circulation (AMOC) is considered a potential tipping element. What is the mechanism by which AMOC could undergo an abrupt weakening or collapse, and what would be the primary regional climate consequences for Northwest Europe?',
          a: [
            'AMOC could collapse because rising sea surface temperatures increase evaporation from the tropical Atlantic, drying out deep-water formation sites in the North Atlantic; this would cause rapid warming of 5–10 °C in Northwest Europe over a decade as the heat pump is removed',
            'AMOC could weaken abruptly through a freshwater hosing mechanism: accelerating Greenland and Arctic ice melt injects large volumes of fresh water into the North Atlantic, reducing surface salinity and density, inhibiting deep convection in the Labrador and Nordic Seas — the key driver of AMOC\'s sinking branch; Northwest Europe would experience cooling (or reduced warming relative to the global trend) and changes in precipitation patterns because the northward heat transport that currently warms the region would diminish',
            'AMOC could strengthen abruptly as the Arctic warms and sea ice melts, exposing more open ocean to westerly winds that drive deeper overturning; Northwest Europe would experience more intense summer heatwaves because a stronger AMOC delivers more subtropical warmth',
            'AMOC tipping is driven entirely by wind-stress changes over the Southern Ocean; freshwater input from Greenland is negligible in comparison; Northwest Europe would experience primarily increased storminess rather than temperature change because AMOC primarily drives storm tracks, not mean temperature',
          ],
          correct: 1,
          explain:
            'The canonical AMOC tipping mechanism is the freshwater feedback: AMOC depends on the sinking of dense, cold, salty water in the North Atlantic (primarily in the Labrador Sea and Nordic Seas). If sufficient fresh water is added — from accelerating Greenland ice sheet melt, increased Arctic river runoff, and sea ice melt — surface salinity and density decrease, suppressing convection. Once AMOC weakens past a threshold, reduced poleward salt transport further reduces North Atlantic salinity, creating a positive feedback (the "salt-advection feedback") that can drive irreversible collapse. Proxy records from D-O events and the Younger Dryas provide paleoclimate evidence for abrupt AMOC reorganisations. For Northwest Europe, reduced AMOC means less poleward oceanic heat transport, resulting in relative cooling (or suppressed warming) — offsetting some anthropogenic warming regionally. Option A describes an implausible mechanism and has the sign of the temperature impact reversed. Option C has the AMOC response backwards. Option D incorrectly dismisses freshwater forcing and misidentifies Southern Ocean winds as the dominant driver.',
        },
        // ── Q13: Amazon dieback trigger ───────────────────────────────────────
        {
          q: 'The Amazon rainforest has been described as approaching a tipping point for large-scale dieback. Which combination of stressors is considered most likely to push the Amazon past a tipping threshold, and approximately what fraction of the original forest must be lost before the remaining forest may self-desiccate?',
          a: [
            'Rising CO₂ alone is sufficient to trigger Amazon dieback because enhanced photosynthesis causes excessive biomass accumulation that destabilises the ecosystem; the threshold is reached when carbon stock exceeds 200 Pg C',
            'Deforestation reduces moisture recycling (since trees transpire water that falls again as rain further downwind), and climate-change-driven drought increases fire risk; once approximately 20–25% of the original forest has been cleared, reduced moisture recycling and increased dry-season length may push the remaining forest into a self-reinforcing dieback — a savannification tipping point',
            'Amazon dieback requires simultaneous collapse of both AMOC and the West African Monsoon, which together supply all moisture to the Amazon basin; in isolation, neither deforestation nor regional drought alone can trigger dieback',
            'The Amazon dieback threshold has already been crossed because more than 30% of the original forest has been removed; the remaining forest is now a net carbon source and will be fully replaced by savanna within 20 years under any emissions scenario',
          ],
          correct: 1,
          explain:
            'The Amazon rainforest generates a significant fraction of its own rainfall through evapotranspiration — trees recycle moisture in a "flying rivers" system where easterly trade winds carry moisture inland, where it is transpired, rises, and falls as rain again. Modelling and observational studies (e.g., Lovejoy & Nobre, 2018) estimate that clearing approximately 20–25% of the original forest could reduce regional precipitation sufficiently, combined with climate-change-driven warming and drought, to push eastern and southern Amazonia into a self-reinforcing dieback where the drier conditions prevent forest recovery after fire events, leading to savannification. Current deforestation rates (plus degradation) have removed approximately 17–20% of the original extent, placing the system close to or approaching this threshold. Option A is incorrect — CO₂ fertilisation does not trigger dieback. Option C overstates teleconnection dependencies; moisture recycling within the Amazon basin is the primary concern. Option D overstates the current deforestation fraction and incorrectly asserts the threshold has already been crossed irreversibly.',
        },
        // ── Q14: CMIP6 ensemble purpose ───────────────────────────────────────
        {
          q: 'The Coupled Model Intercomparison Project Phase 6 (CMIP6) involves dozens of modelling groups running standardised experiments. What is the primary scientific purpose of running a multi-model ensemble rather than relying on a single best model?',
          a: [
            'CMIP6 exists to produce a consensus "best estimate" climate projection by averaging all model outputs; the ensemble mean is always more accurate than any individual model, and the primary goal is to deliver a single definitive number for climate sensitivity',
            'CMIP6 is designed to evaluate which modelling group has the best computing infrastructure; the model with the finest spatial resolution automatically provides the most reliable projections and should be used exclusively for policy-relevant assessments',
            'The multi-model ensemble approach quantifies structural model uncertainty — the uncertainty arising from different choices in parameterising unresolved processes (such as clouds, convection, and ocean mixing) — by sampling across diverse model architectures; the spread of model projections under identical forcing scenarios provides a lower bound on uncertainty that could not be obtained from a single model with any amount of tuning',
            'CMIP6 uses multiple models exclusively to detect and correct computational errors; once quality control identifies and eliminates erroneous model runs, only the median-performing model is used for scientific analysis and IPCC assessments',
          ],
          correct: 2,
          explain:
            'Climate models must parameterise processes that occur below their grid resolution — cloud microphysics, subgrid convection, ocean eddy mixing, land surface heterogeneity. Different modelling groups make different scientifically defensible choices in implementing these parameterisations, leading to structurally distinct models that respond differently even to identical forcing scenarios. By running all models under standardised protocols (historical runs, SSP projections, idealised CO₂ ramp experiments), CMIP6 samples this structural uncertainty. The spread among models thus quantifies a key component of projection uncertainty that cannot be reduced simply by adding more compute power to a single model. The ensemble mean is often a useful summary statistic but is not always "most accurate" by all metrics; some individual models outperform the ensemble mean on specific diagnostics. Option A overstates the primacy of ensemble averaging. Option B incorrectly equates resolution with accuracy. Option D mischaracterises the purpose as quality control alone.',
        },
        // ── Q15: Parameterization in climate models ───────────────────────────
        {
          q: 'Climate models cannot explicitly resolve all physical processes. What is "parameterisation" in the context of climate modelling, and why is it both necessary and a source of uncertainty?',
          a: [
            'Parameterisation refers to the calibration of climate models against the observational record; it is necessary to ensure models reproduce historical temperatures and is not a source of uncertainty because once calibrated, parameters are fixed',
            'Parameterisation is the practice of expressing the aggregate effects of processes too small or fast to be explicitly resolved on the model grid — such as individual cloud droplet formation, subgrid convection, or ocean microstructure turbulence — as functions of resolved grid-scale variables using empirically derived or theoretically motivated relationships; it is necessary because resolving all scales is computationally impossible, but introduces uncertainty because the relationships may not generalise to climates different from those used to develop them',
            'Parameterisation refers only to the prescription of external forcings (solar output, greenhouse gas concentrations, aerosol emissions) from observations; it is necessary because these cannot be predicted by the model itself and is a source of uncertainty only in future projections, not in historical simulations',
            'Parameterisation is the numerical scheme used to solve partial differential equations on a discrete grid (finite difference or spectral methods); it is the main source of numerical diffusion errors and uncertainty in climate models, independent of physical assumptions about sub-grid processes',
          ],
          correct: 1,
          explain:
            'Climate models solve the governing equations of fluid dynamics and thermodynamics on a discrete grid with typical horizontal resolutions of 50–100 km (atmospheric) and 25–50 km (oceanic). Processes occurring at smaller scales — individual cumulus convection cells (~1–10 km), cloud microphysics (~µm to mm), boundary-layer turbulence, ocean mesoscale eddies — cannot be explicitly represented. Parameterisations represent their bulk statistical effects: e.g., a convective parameterisation relates the probability of deep convection to grid-scale temperature profiles, humidity, and instability indices. The parameters in these schemes are often constrained by observations in the current climate, but their validity in warmer climates with different atmospheric dynamics is uncertain — this is a key source of climate projection uncertainty, especially for clouds and precipitation. Option A conflates parameterisation with calibration/tuning. Option C describes boundary condition prescription, not parameterisation. Option D describes numerical discretisation schemes, a distinct concept.',
        },
        // ── Q16: SSP scenario nomenclature ───────────────────────────────────
        {
          q: 'IPCC AR6 uses Shared Socioeconomic Pathway (SSP) scenarios combined with radiative forcing levels. What does "SSP2-4.5" specifically mean, and how does it differ from "SSP5-8.5"?',
          a: [
            'SSP2-4.5 means a "medium" societal development pathway (SSP2) combined with 4.5 °C of global warming by 2100; SSP5-8.5 means a "high-fossil-fuel" development pathway (SSP5) combined with 8.5 °C of warming by 2100',
            'SSP2-4.5 denotes a "middle of the road" socioeconomic development narrative (SSP2) combined with a radiative forcing of 4.5 W m⁻² above pre-industrial by 2100; SSP5-8.5 denotes a "fossil-fuel-intensive" development narrative (SSP5) combined with a radiative forcing of 8.5 W m⁻² above pre-industrial by 2100 — the highest-emissions scenario in the AR6 framework',
            'SSP2-4.5 means the second-most-optimistic scenario (SSP2) with 4.5 Gt C/yr of remaining emissions by 2100; SSP5-8.5 means the fifth scenario ordered by emissions level with 8.5 Gt C/yr of remaining emissions; higher SSP numbers always indicate lower emissions',
            'The numbers in SSP2-4.5 and SSP5-8.5 both refer to global mean temperature increase above pre-industrial levels; SSP2 and SSP5 identify the modelling group that produced the scenario (SSP2 = NCAR, SSP5 = GFDL)',
          ],
          correct: 1,
          explain:
            'The SSP framework combines a narrative socioeconomic development pathway (SSP1 through SSP5, describing different futures of population, technology, governance, and land use) with a representative radiative forcing level (1.9, 2.6, 3.4, 4.5, 6.0, 7.0, or 8.5 W m⁻² relative to 1750) reached by 2100. The forcing level determines the CO₂ and greenhouse gas trajectories that are fed into climate models. SSP2 ("middle of the road") describes a future where social, economic, and technological trends do not shift markedly from historical patterns; paired with 4.5 W m⁻², it projects intermediate mitigation. SSP5 ("fossil-fuel development") describes rapid growth and heavy reliance on fossil fuels with limited climate policy; paired with 8.5 W m⁻², it is the highest-end scenario. Option A conflates radiative forcing with temperature change. Option C misinterprets the numeric suffixes as emission quantities. Option D incorrectly identifies the numbers as temperatures and attributes scenarios to specific modelling groups.',
        },
        // ── Q17: Paris Agreement temperature targets ──────────────────────────
        {
          q: 'Article 2 of the Paris Agreement specifies two temperature targets. What are they, and what is the key scientific distinction between the 1.5 °C and 2 °C targets in terms of projected climate impacts?',
          a: [
            'The Paris Agreement targets are 1.0 °C and 2.0 °C above the 1990 baseline; the 1.0 °C target has already been exceeded, making the 2.0 °C target the only operative goal; there is no meaningful difference in projected impacts between the two targets because climate change scales nonlinearly only above 3 °C',
            'The Paris Agreement aims to limit warming to well below 2 °C above pre-industrial levels, and to pursue efforts to limit warming to 1.5 °C; the half-degree difference translates into substantially different outcomes for many systems — including coral reef survival (70–90% loss at 1.5 °C vs. >99% at 2 °C), sea level rise (approximately 0.1 m less at 1.5 °C), extreme heat event frequency, and crop yield impacts — making the distinction scientifically significant',
            'The Paris Agreement specifies only a single 2 °C target; the 1.5 °C figure was added informally at the request of small island states but has no formal legal standing and has not been incorporated into IPCC assessment scenarios',
            'The Paris Agreement targets are 1.5 °C and 3 °C above pre-industrial; at 3 °C all major tipping points are crossed simultaneously, whereas at 1.5 °C no tipping points are activated; this binary distinction is the primary scientific rationale for the targets',
          ],
          correct: 1,
          explain:
            'Article 2.1(a) of the Paris Agreement (adopted December 2015) states: "Holding the increase in the global average temperature to well below 2°C above pre-industrial levels and pursuing efforts to limit the temperature increase to 1.5°C above pre-industrial levels." The 1.5 °C target was included in the legally binding text at the insistence of the Coalition of Small Island States and least-developed countries highly vulnerable to sea level rise. The IPCC Special Report on 1.5 °C (SR1.5, 2018) and AR6 document substantial differences in projected impacts between 1.5 °C and 2 °C: coral reefs (~70–90% severe bleaching at 1.5 °C vs. >99% at 2 °C), global sea level rise (~0.1 m difference by 2100), frequency of extreme heat events (roughly 4× more frequent at 2 °C than at 1.5 °C), and exposure of populations to multi-sector climate risks. Option A uses the wrong baseline and denies impact differences. Option C misrepresents the 1.5 °C target\'s legal status. Option D states wrong targets and incorrectly treats tipping point activation as binary.',
        },
        // ── Q18: Committed warming ────────────────────────────────────────────
        {
          q: '"Committed warming" (also called "warming in the pipeline") refers to additional warming that will occur even if greenhouse gas emissions were to stop completely today. What is the primary physical reason for this commitment, and approximately how much additional warming is currently in the pipeline?',
          a: [
            'Committed warming arises because existing CO₂ in the atmosphere will continue absorbing longwave radiation for about 10 years before being fully absorbed by the ocean; approximately 0.1 °C of additional warming remains in the pipeline',
            'Committed warming arises because CO₂ is chemically inert in the atmosphere and persists for thousands of years, continuously adding new forcing; if emissions stopped today, the committed warming would be approximately 5 °C over the next 1,000 years from existing CO₂ alone',
            'Committed warming arises primarily because the deep ocean has not yet fully warmed to equilibrium with the current radiative forcing; even at constant atmospheric CO₂ (today\'s ~420 ppm), the climate system has not yet fully responded, and approximately 0.3–0.5 °C of additional warming is already committed on top of current observed warming',
            'Committed warming does not exist; once emissions cease, the negative feedbacks (Planck radiation, silicate weathering) will cause rapid cooling within a decade, erasing observed warming and returning global temperatures to pre-industrial levels',
          ],
          correct: 2,
          explain:
            'The energy imbalance at the top of the atmosphere is currently approximately +0.87 W m⁻² (AR6). This means that even if atmospheric CO₂ were instantaneously held constant at today\'s ~420 ppm, the climate system would continue absorbing energy and warming until a new equilibrium is reached. The deep ocean, with its enormous heat capacity, continues drawing heat from the atmosphere and will not equilibrate for centuries. AR6 assessed committed warming (under constant 2019 forcing) at approximately 0.3–0.5 °C above current temperatures, representing the remaining surface warming needed to close the current energy imbalance. Note that if emissions were to stop entirely, atmospheric CO₂ would gradually decline (natural sinks continue operating without new sources), which might partially offset committed warming on decadal to centennial timescales. Option A underestimates the mechanism and magnitude. Option B overestimates committed warming by an order of magnitude and conflates atmospheric CO₂ lifetime with committed warming. Option D is physically incorrect; negative feedbacks operate on too slow a timescale to reverse warming within a decade.',
        },
        // ── Q19: BECCS — what and main limitation ─────────────────────────────
        {
          q: 'Bioenergy with Carbon Capture and Storage (BECCS) plays a prominent role in many IPCC mitigation pathways that limit warming to 1.5 °C. What is BECCS, and what is its most significant real-world limitation?',
          a: [
            'BECCS is a technology that burns biomass for electricity while capturing and storing the CO₂ released; since plants absorbed CO₂ while growing, the process achieves net negative emissions; its main limitation is high capital cost, which can be fully offset by carbon credits from current carbon markets at prices above $20/t CO₂',
            'BECCS combines growing biomass (which photosynthetically removes CO₂ from the atmosphere), burning it for energy, capturing the CO₂ from combustion, and injecting it into geological storage; it is designed to produce net negative emissions; the most significant limitation is the enormous land area required for dedicated energy crops — estimates suggest 1.5 °C-compatible BECCS deployment could require 100–500 million hectares, competing with food production, biodiversity, and water resources, and potentially displacing the same forests that provide natural carbon sinks',
            'BECCS uses bacterial fermentation of crop waste to produce biogas, which is then liquefied and stored in ocean trenches; it is limited primarily by ocean storage leakage rates, which make long-term CO₂ sequestration unreliable',
            'BECCS is identical to conventional carbon capture and storage (CCS) except that biomass co-firing provides a minor efficiency boost; its main limitation is that it cannot achieve negative emissions because the life-cycle CO₂ from biomass harvesting, transport, and processing always exceeds the CO₂ captured at the combustion stack',
          ],
          correct: 1,
          explain:
            'BECCS achieves negative emissions by coupling the biological carbon cycle (photosynthesis draws CO₂ out of the atmosphere into biomass) with geological carbon storage (CCS injects combustion CO₂ underground). If the full supply chain is managed correctly, more CO₂ is removed from the atmosphere (via plant growth) than is emitted to it (from combustion minus capture leakage), yielding net negative emissions. The critical constraint highlighted by studies including Popp et al. (2017) and Smith et al. (2016) is land demand: to remove the billions of tonnes of CO₂ per year implied by many 1.5 °C pathways, BECCS would require 100–500 Mha of dedicated energy crops — equivalent to 1–5 Indias — which would directly conflict with food security, biodiversity conservation, and the very forest carbon sinks needed for other mitigation goals. Option A understates the limitations and overestimates carbon market viability. Option C describes a completely different and non-existent technology. Option D incorrectly asserts BECCS cannot achieve negative emissions when managed correctly.',
        },
        // ── Q20: SAI termination shock ────────────────────────────────────────
        {
          q: 'Stratospheric Aerosol Injection (SAI) is a proposed solar geoengineering approach. What is "termination shock," and why do many scientists and governance experts consider it one of the most serious risks associated with SAI deployment?',
          a: [
            'Termination shock refers to the economic disruption caused by the sudden termination of fossil fuel industries when SAI is deployed at scale; it is a geopolitical risk rather than a physical climate risk and affects primarily oil-exporting nations',
            'Termination shock refers to the abrupt and rapid warming that would occur if an ongoing SAI programme were suddenly halted — for example due to political disagreement, funding collapse, or technical failure — while greenhouse gas concentrations remained high; because SAI masks warming rather than removing CO₂, cessation would expose the full suppressed warming (potentially several degrees Celsius) over years to decades rather than centuries, giving ecosystems and human systems far less time to adapt than if the same warming had occurred gradually over the original emissions trajectory',
            'Termination shock refers to the damage caused to the stratosphere\'s ozone layer when SAI aerosols react with chlorine and bromine compounds; it is a permanent physical shock to the stratosphere that cannot be reversed once SAI begins, making SAI irreversible once initiated',
            'Termination shock is a positive feedback in which SAI aerosols seed additional stratospheric cloud formation, amplifying the initial cooling effect beyond intended levels; it is called "shock" because the system reaches a new, colder steady state that cannot be terminated without rapid catastrophic warming',
          ],
          correct: 1,
          explain:
            'Termination shock is the defining governance risk of SAI. If society were to deploy SAI at scale sufficient to, say, offset 2 °C of warming, it would suppress surface temperatures while greenhouse gas concentrations continued to rise (or remained elevated from past emissions). If the SAI programme were suddenly stopped — due to geopolitical conflict, infrastructure failure, or loss of political will — the full radiative forcing from the accumulated CO₂ and other GHGs would be unmasked, driving rapid warming at rates potentially many times faster than the historical trend. Ecosystems, agriculture, and infrastructure adapted to SAI-moderated temperatures could face severe disruption. This lock-in dynamic creates a scenario where, once SAI begins, stopping it becomes more dangerous than continuing — a profound governance dilemma. Option A describes economic disruption, not the physical climate risk. Option C describes ozone depletion (a real but separate concern, not termination shock). Option D mischaracterises a separate hypothetical cloud-seeding feedback as "termination shock."',
        },
      ],
    },
  ],
}

export default clim201Capstone
