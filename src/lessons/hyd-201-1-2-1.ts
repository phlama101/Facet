import { Activity, Globe, Layers, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const transpirationEcohydrology: Lesson = {
  id: 'hyd-201-1-2-1',
  title: 'Transpiration, Stomatal Conductance, and Ecohydrology',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'How plants control the water cycle: Penman-Monteith, stomatal regulation, eddy covariance flux towers, the two-water world, and vegetation feedbacks under climate change.',
  sources: [
    { org: 'FLUXNET', title: 'FLUXNET — Global Network of Eddy Covariance Flux Towers',              url: 'https://fluxnet.org/' },
    { org: 'AmeriFlux', title: 'AmeriFlux — Long-Term Carbon and Water Flux Measurements',           url: 'https://ameriflux.lbl.gov/' },
    { org: 'Nature',  title: 'Brooks et al. (2010) — Ecohydrological separation of water between streams and trees', url: 'https://doi.org/10.1038/nature09516' },
    { org: 'FAO',     title: 'FAO Irrigation and Drainage Paper 56 — Penman-Monteith Reference ET',  url: 'https://www.fao.org/3/X0490E/X0490E00.htm' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Plants as the hidden managers of the water cycle: from leaf stomata to continental ET budgets',
      body: `Evapotranspiration (ET) — the combined loss of water by evaporation from soil and open water surfaces, and transpiration through plant stomata — is the single largest return pathway of water from land to the atmosphere. Globally, ET returns approximately 60–65% of terrestrial precipitation back to the atmosphere. On vegetated continents, transpiration alone accounts for roughly 60–80% of the total ET flux, making plant physiology a first-order control on the hydrological cycle. Yet until recently, ET was the hardest component of the water balance to measure directly. The past three decades have seen a revolution in measurement technology and theoretical understanding — eddy covariance towers, stable isotope tracing, and satellite remote sensing have transformed ecohydrology from a discipline of inference into one of direct observation.

The **Penman-Monteith (PM) equation** is the physically-based standard for estimating potential and actual ET. Developed by Howard Penman in 1948 for open water and refined by John Monteith in 1965 to include vegetation, it couples two physical mechanisms: the energy balance (radiation driving evaporation) and an aerodynamic term (wind removing vapour from the surface). The full form for a vegetated surface is:

λET = [Δ(Rn − G) + ρₐcₚ(eₛ − eₐ)/rₐ] / [Δ + γ(1 + rₛ/rₐ)]

where Δ is the slope of the saturation vapour pressure–temperature curve, Rn is net radiation, G is soil heat flux, ρₐ and cₚ are air density and specific heat, (eₛ − eₐ) is the vapour pressure deficit (VPD), rₐ is aerodynamic resistance, rₛ is surface (stomatal) resistance, and γ is the psychrometric constant. The term rₛ encodes the vegetation's physiological control: when stomata are wide open, rₛ is low (typically 50–100 s/m for well-watered C3 crops); when stomata close under stress, rₛ rises dramatically (>500 s/m), suppressing transpiration below the energy-limited potential.

**Stomatal regulation** is the cellular mechanism by which plants balance carbon gain (CO₂ uptake for photosynthesis) against water loss (transpiration). Guard cells flanking each stoma swell (opening the stoma) when potassium and malate accumulate, driven by light. They shrink (closing the stoma) under elevated VPD, drought stress (declining leaf water potential detected by abscisic acid, ABA), darkness, and — counterintuitively — under elevated ambient CO₂ concentrations (a direct plant response to higher atmospheric CO₂ that reduces stomatal aperture and thus transpiration, a potentially significant negative feedback on the hydrological cycle under climate change). The net effect is that leaf-level stomatal conductance (gₛ, measured in mol/m²/s) integrates environmental forcing and plant physiology into a single number that, aggregated across a canopy, determines the watershed-scale transpiration flux.

**Eddy covariance (EC)** flux towers directly measure the turbulent exchange of water vapour, CO₂, and heat between the land surface and the lower atmosphere. Mounted on towers above the canopy, fast-response (10–20 Hz) sonic anemometers and infrared gas analysers measure the covariance of vertical wind speed fluctuations with water vapour fluctuations (w′q′), yielding a direct half-hourly ET measurement for a footprint of 0.1–1 km². The FLUXNET and AmeriFlux networks now encompass more than 900 sites globally across all major biomes, providing the observational backbone for calibrating and validating land-surface models, remote sensing ET products, and global water cycle assessments.

**Sapflow sensors** provide an independent, tree-scale measurement of transpiration. Granier thermal dissipation probes insert heated needles into the xylem; temperature difference between a heated and reference needle is inversely related to sap velocity. Scaled to stem area and stand density, sapflow quantifies stand-level transpiration with hourly resolution. Sapflow data reveal the hydraulic strategies of different species: isohydric species (e.g., many conifers) maintain nearly constant leaf water potential by strongly reducing stomatal conductance during drought; anisohydric species (many angiosperms) maintain higher conductance but allow leaf water potential to fall, risking embolism.

The **ecohydrological separation hypothesis** (Brooks et al. 2010, *Nature*) challenged a foundational assumption of hydrology: that soil water is a single, well-mixed reservoir from which both streams and plants draw. Using dual stable water isotopes (δD and δ¹⁸O), Brooks et al. found that water transpired by trees had a systematically different isotopic composition from streamflow in the same catchment — suggesting that plants preferentially access tightly bound matrix pore water (with distinct isotopic enrichment from evaporative fractionation or isotopically different recharge events), while mobile, gravitationally drained water feeds streams. The "two-water world" concept has since been replicated across dozens of sites and has profound implications: if plants use a separate water pool from the one that recharges aquifers and sustains streamflow, models that assume a single mixed reservoir will misrepresent both transpiration dynamics and groundwater recharge.

**Vegetation-climate feedbacks** are particularly apparent in deep-rooted ecosystems and drylands. Deep-rooted trees — acacias accessing water at depths of 30–50 m, Amazonian trees tapping deep lateritic soils — sustain transpiration during dry seasons and droughts, recycling water back to the atmosphere for subsequent rainfall in a process of **biotic pump** recycling. The Amazon basin recycles approximately 25–35% of its own rainfall through transpiration. Amazon forest dieback simulations suggest a critical tipping point near ~20% cumulative deforestation (currently at ~17%): beyond this threshold, the moisture recycling feedback collapses, regional precipitation falls below forest viability, and savannisation becomes self-reinforcing. **Urban ecohydrology** examines the contrasting water balance of cities: impervious surfaces suppress infiltration and ET, intensifying runoff and urban heat islands; green infrastructure (street trees, green roofs, permeable pavement, rain gardens) restores partial ET and infiltration pathways, reducing peak flows and urban temperatures simultaneously.`,
      keyTerms: [
        {
          term: 'Evapotranspiration (ET)',
          def: 'Combined water loss from land surfaces to the atmosphere via soil evaporation and plant transpiration. Returns ~60–65% of terrestrial precipitation globally; dominated by transpiration (~60–80% of total ET) in vegetated landscapes.',
        },
        {
          term: 'Penman-Monteith Equation',
          def: 'Physically-based equation for potential and actual ET that combines an energy balance term (net radiation, soil heat flux) and an aerodynamic term (VPD, wind speed) with a surface resistance rₛ encoding stomatal control. FAO-56 version is the global standard for irrigation scheduling and water balance modelling.',
        },
        {
          term: 'Stomatal Conductance (gₛ)',
          def: 'Measure of how readily CO₂ and water vapour diffuse through stomata (mol/m²/s). Controlled by light, VPD, plant water status (ABA), and CO₂ concentration. Integrates plant physiology and environmental forcing into a single variable that governs canopy-scale transpiration.',
        },
        {
          term: 'Eddy Covariance (EC)',
          def: 'Micrometeorological technique measuring turbulent fluxes of H₂O, CO₂, and heat directly. Fast-response sensors (10–20 Hz) at flux towers calculate ET as the covariance of vertical wind speed and water vapour fluctuations. FLUXNET/AmeriFlux provide 900+ sites globally.',
        },
        {
          term: 'Ecohydrological Separation (Two-Water World)',
          def: 'Hypothesis (Brooks et al. 2010, Nature) that plants preferentially access tightly bound matrix pore water (isotopically distinct from gravitational mobile water) while streams are fed by mobile water. Challenges the single-reservoir assumption of classic hydrology and has implications for recharge estimation.',
        },
        {
          term: 'Vapour Pressure Deficit (VPD)',
          def: 'Difference between saturation vapour pressure and actual vapour pressure of air (kPa). The thermodynamic "pull" that drives transpiration. High VPD causes stomatal closure in many species as a drought-avoidance mechanism, directly reducing watershed ET.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Stomatal control, Penman-Monteith, and the plant water use spectrum',
      body: `Plants navigate a fundamental trade-off: stomata must open to admit CO₂ for photosynthesis, but every moment they are open, water escapes. The Penman-Monteith framework quantifies this trade-off in terms measurable from a weather station, while stomatal conductance models (Ball-Berry, Medlyn) link it to leaf-level biochemistry. Understanding the full spectrum — from hydraulic failure risk in anisohydric species to the near-zero transpiration of isohydric species under drought — is essential for predicting how ecosystems will respond to warming and drought stress.`,
      cards: [
        {
          name: 'Penman-Monteith Framework',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Couples energy balance (radiation, soil heat flux) with aerodynamic transport (VPD, wind) and stomatal resistance rₛ. The rₛ term is the key: well-watered crop rₛ ≈ 50–100 s/m; stressed vegetation rₛ > 500 s/m, cutting ET to a fraction of PET.',
          examples: 'FAO-56 Penman-Monteith defines reference ET (ETo) for a grass reference crop (rₛ = 70 s/m); crop coefficients (Kc) scale ETo to actual crops. Used in >100 countries for irrigation scheduling.',
        },
        {
          name: 'Stomatal Guard Cells',
          icon: Zap,
          color: BRAND.jade,
          desc: 'Open under light and low CO₂ (K⁺/malate accumulate, guard cells swell). Close under high VPD, drought stress (ABA signal from roots), darkness, elevated CO₂. Closing reduces rₛ and cuts transpiration but also limits photosynthesis.',
          examples: 'Pine forests reduce stomatal conductance by >80% when VPD exceeds 3 kPa. CO₂ enrichment in FACE experiments reduces stomatal aperture by 10–25%, reducing transpiration and increasing runoff in some projections.',
        },
        {
          name: 'Isohydric vs Anisohydric Strategy',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Isohydric species (many conifers, grape): tightly regulate leaf water potential by closing stomata early in drought. Anisohydric species (oaks, maize): maintain conductance under water stress, risking embolism. Reflects evolutionary trade-off between productivity and hydraulic safety.',
          examples: 'During the 2012 Midwest drought, anisohydric maize maintained ET longer but suffered embolism when water potential dropped to −2 MPa. Isohydric soybean shut down earlier but survived.',
        },
        {
          name: 'Eddy Covariance Flux Towers',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Measure ET (as latent heat, LE) by computing w′q′ covariance at 10–20 Hz. Typical footprint 0.1–1 km². FLUXNET synthesises 900+ global sites. Energy balance closure (Rn − G = H + LE) is rarely perfect (10–30% gap), a known challenge.',
          examples: 'Ameriflux Harvard Forest site: 30+ year record showing drought years suppress ET by 20–30%, wet years enhance it. Global MODIS ET product validated against FLUXNET data — RMSE ~15 W/m².',
        },
        {
          name: 'Amazon Biotic Pump & Tipping Point',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'Deep-rooted Amazonian trees access deep soil water, sustaining transpiration through dry season. Basin recycles ~25–35% of rainfall via transpiration. Deforestation threshold ~20% may trigger self-reinforcing moisture deficit and savannisation.',
          examples: 'Amazon deforestation is currently ~17% (INPE 2023). Modelling suggests precipitation may decline 10–20% if threshold crossed. Biomass loss already detected in eastern Amazon, which has become a net carbon source.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Ecohydrological Water Cycle: From Stomata to Continental ET',
      body: 'Trace the pathway of water from soil and atmospheric forcing through leaf stomata, canopy transpiration, and eddy covariance measurement to the watershed-scale water balance — and how vegetation feedbacks reshape regional climate.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how atmospheric forcing (radiation, VPD, wind) drives stomatal opening and transpiration through the Penman-Monteith framework, measured by eddy covariance flux towers, and how vegetation feedbacks — including the two-water world and Amazon biotic pump — shape the watershed-scale water balance',
        nodes: [
          {
            id: 'atm-forcing',
            label: 'Atmospheric Forcing (Radiation, VPD, Wind)',
            description: 'Net radiation (Rn) provides energy to evaporate water. Vapour pressure deficit (VPD = eₛ − eₐ) sets the thermodynamic demand. Wind (aerodynamic resistance rₐ) removes water vapour from the leaf boundary layer. Together these are the "supply-side" drivers in the Penman-Monteith equation.',
            color: BRAND.accent,
          },
          {
            id: 'stomata',
            label: 'Stomatal Conductance (gₛ)',
            description: 'Guard cells integrate light, VPD, ABA, and CO₂ signals to set stomatal aperture. High gₛ (low rₛ) under well-watered, high-light conditions. Low gₛ (high rₛ) under drought or high VPD. This is the plant physiological control that Monteith (1965) introduced to the Penman equation as surface resistance rₛ.',
            color: BRAND.jade,
          },
          {
            id: 'leaf-transpiration',
            label: 'Leaf Transpiration & Canopy ET',
            description: 'Water vapour diffuses from sub-stomatal cavities through stomata to the leaf boundary layer. Canopy ET = integral of leaf-level transpiration across leaf area index (LAI). Penman-Monteith combines rₐ and rₛ to predict canopy-scale λET. Maximum ET rates: ~6 mm/day for dense tropical forest.',
            color: BRAND.gold,
          },
          {
            id: 'ec-tower',
            label: 'Eddy Covariance Measurement',
            description: 'Flux towers above the canopy measure turbulent H₂O flux (w′q′) at 10–20 Hz. Half-hourly ET is derived from the Reynolds-averaged covariance. Energy balance closure, footprint analysis, and gap-filling algorithms convert raw data to daily/annual ET totals used in water balance and model validation.',
            color: BRAND.coral,
          },
          {
            id: 'two-water-world',
            label: 'Two-Water World (Isotopic Separation)',
            description: 'Brooks et al. (2010) showed via δD/δ¹⁸O that transpired water is isotopically distinct from streamflow in the same catchment. Plants access tightly bound matrix pore water; mobile gravitational water feeds streams. This partitioning means plant water use does not directly compete with groundwater recharge in many settings.',
            color: BRAND.amethyst,
          },
          {
            id: 'vegetation-feedback',
            label: 'Vegetation-Climate Feedback',
            description: 'Transpired water returns to the atmosphere and can fall as rainfall downwind (biotic pump). Amazon recycles 25–35% of precipitation. Deep roots access water unavailable to shallow-rooted crops. Deforestation disrupts this feedback, reducing regional precipitation. Urban green infrastructure partially restores ET, reducing peak runoff and urban heat.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'atm-forcing',        to: 'stomata',            label: 'VPD and radiation drive stomatal response via ABA and guard-cell turgor' },
          { from: 'stomata',            to: 'leaf-transpiration', label: 'gₛ (=1/rₛ) sets diffusive conductance; canopy rₛ enters Penman-Monteith denominator' },
          { from: 'atm-forcing',        to: 'leaf-transpiration', label: 'Rn and aerodynamic term (VPD/rₐ) provide the energetic numerator' },
          { from: 'leaf-transpiration', to: 'ec-tower',           label: 'Turbulent w′q′ covariance integrates canopy ET over the flux footprint (0.1–1 km²)' },
          { from: 'leaf-transpiration', to: 'two-water-world',    label: 'Isotopic composition of transpired vapour reflects bound matrix pore water, not mobile water' },
          { from: 'leaf-transpiration', to: 'vegetation-feedback', label: 'Transpired water enters boundary layer, recycles as regional precipitation downwind' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Penman-Monteith equation includes a surface resistance term rₛ. What does rₛ represent physically, and how does it differ between a well-watered crop and a drought-stressed forest?',
          a: [
            'rₛ represents the aerodynamic resistance between the leaf surface and the measurement height; it increases with wind speed and is higher in forests than crops because trees are taller',
            'rₛ represents the collective resistance of stomata (and to a lesser extent the soil surface) to water vapour diffusion; it is low (~50–100 s/m) when stomata are fully open in a well-watered crop, and rises dramatically (>500 s/m) when stomata close under drought stress, reducing actual ET well below the potential rate',
            'rₛ represents the soil hydraulic resistance to water movement from the root zone to the leaf; it is determined by soil texture and is unrelated to stomatal regulation',
            'rₛ is a calibration constant that varies by vegetation type but is fixed for a given crop or forest type regardless of water availability; drought does not affect its value in the Penman-Monteith formulation',
          ],
          correct: 1,
          explain: 'In the Penman-Monteith equation, the aerodynamic resistance rₐ governs transport from the canopy to the reference height (it does decrease with wind speed, but A incorrectly identifies rₐ as rₛ and inverts the wind relationship). Soil hydraulic resistance (C) is a separate concept from the canopy-integrated rₛ; while soil moisture stress is ultimately transmitted to the leaf via declining water potential and ABA signalling that closes stomata, rₛ in the PM equation represents the stomatal diffusion resistance, not the soil-root hydraulic resistance directly. rₛ is emphatically not fixed (D); it is the primary variable that makes the PM equation applicable to actual (as opposed to potential) ET — drought, darkness, high VPD, and elevated CO₂ all modulate stomatal aperture and thus rₛ on timescales of minutes to hours. The correct answer is B: rₛ encodes the bulk canopy stomatal resistance to water vapour diffusion. For a well-watered C3 crop with fully open stomata, rₛ ≈ 50–100 s/m. Under drought stress, ABA produced in drying roots is transported to guard cells, triggering K⁺ efflux and stomatal closure; rₛ can rise to 500–2000 s/m. This large increase in the denominator of the PM equation (Δ + γ(1 + rₛ/rₐ)) suppresses the ET rate far below the potential, explaining why droughted vegetation transpires a small fraction of what a wet reference surface would.',
        },
        {
          q: 'Eddy covariance flux towers measure ET as the covariance w′q′. What is the known "energy balance closure" problem in EC measurements, and why does it matter for global water cycle estimates?',
          a: [
            'Energy balance closure refers to the requirement that net radiation (Rn) and soil heat flux (G) sum to zero at midnight; flux towers that fail this closure requirement are excluded from FLUXNET databases entirely',
            'EC towers routinely find that the sum of sensible heat flux (H) and latent heat flux (LE) is 10–30% less than the available energy (Rn − G); this systematic underestimation of turbulent fluxes likely reflects low-frequency contributions from large eddies that are missed by the standard 30-minute averaging window, meaning measured ET may underestimate true ET, with implications for global water balance closure',
            'Energy balance closure is an exact requirement of thermodynamics that EC towers always satisfy; apparent closure gaps arise only from calibration errors in individual instruments that are corrected before archiving in FLUXNET',
            'The closure problem only affects CO₂ flux measurements; water vapour fluxes are measured by a different sensor path and are immune to the low-frequency eddy sampling limitation',
          ],
          correct: 1,
          explain: 'EC closure at midnight (A) is not a standard quality criterion; closure is evaluated over 24-hour periods by comparing the sum H + LE against available energy Rn − G. EC instruments do not always satisfy perfect closure (C); the ~10–30% closure gap is one of the most replicated findings in micrometeorology and has been the subject of many investigations. The closure problem affects both H and LE (D), not just CO₂; both are derived from turbulent covariance measurements and share the same low-frequency sampling limitation. The correct answer is B: across FLUXNET sites, (H + LE)/(Rn − G) is typically 0.70–0.90, not 1.0. The most widely accepted explanation is that large, low-frequency (>30 min period) eddies — organised convective structures, secondary circulations — contribute significantly to turbulent exchange but are not captured by the standard 30-minute detrending window. Some researchers apply a Bowen ratio closure correction (scaling LE upward to force closure), which implies global ET estimates from EC networks may be systematically low by 10–30%. This uncertainty propagates into global water cycle assessments and affects how well land-surface models can be validated against flux tower data.',
        },
        {
          q: 'The "two-water world" ecohydrological separation hypothesis (Brooks et al. 2010) challenges the conventional single-reservoir model of catchment hydrology. What did Brooks et al. find, and what does it imply for understanding watershed water balances?',
          a: [
            'Brooks et al. found that trees use the same water as streams — the same δD and δ¹⁸O signatures — confirming the single-reservoir model; the study validated existing catchment models rather than challenging them',
            'Brooks et al. used dual stable isotopes (δD, δ¹⁸O) to show that water transpired by trees is isotopically distinct from streamflow in the same catchments; they inferred that plants preferentially access tightly bound matrix pore water (with distinct isotopic composition) while mobile, gravitationally drained water feeds streams — implying that transpiration and groundwater recharge draw on separate sub-compartments of soil water',
            'Brooks et al. found that streams and trees use water from completely different rainfall events separated by years, demonstrating that groundwater residence times exceed forest root depths everywhere; the study introduced carbon-14 dating as the primary isotope tool in ecohydrology',
            'Brooks et al. measured two distinct water tables in the same watershed — one shallow (accessed by trees) and one deep (feeding the stream) — using piezometers; the physical separation of water tables, not isotopic tracing, is the basis of the two-water world hypothesis',
          ],
          correct: 1,
          explain: 'Brooks et al. did not find matching isotopic signatures in trees and streams (A); they found the opposite — a systematic offset that contradicts the single-reservoir model, which is the basis of the challenge the paper presents. While groundwater residence times can be long and carbon-14 is used in some ecohydrological studies (C), Brooks et al. (2010) used δD and δ¹⁸O (not ¹⁴C) as their primary tracers; the study did not require that trees and streams draw on events separated by years, only that they access isotopically distinct water pools. The two-water world is based on isotopic tracing of water, not physical separation of water tables via piezometers (D); the hypothesis is about water in the same pore space domain but with different mobility and isotopic characteristics. The correct answer is B: Brooks et al. sampled xylem water from trees and streamwater from the same catchments in Oregon and found that the δD–δ¹⁸O signatures of xylem water fell off the local meteoric water line in a manner consistent with evaporative enrichment of tightly bound matrix pore water, while streamwater plots on the meteoric water line as expected for recently mobile precipitation. This suggests soil water consists of at least two pools: mobile gravitational water (macropore flow, rapidly draining, feeds streams) and tightly bound matrix water (micropore water held by capillary and adsorptive forces, accessed by roots, undergoes evaporative isotopic enrichment). Subsequent studies across dozens of sites globally have replicated the separation, though the degree varies with soil type, climate, and season. The finding implies that plant transpiration does not directly compete with stream recharge in many catchments — a significant revision of the assumption in most rainfall-runoff models.',
        },
        {
          q: 'Stomata close under both drought stress and elevated atmospheric CO₂ concentrations. What is the mechanism for CO₂-induced closure, and what are its potential hydrological implications under rising CO₂?',
          a: [
            'Elevated CO₂ increases leaf temperature by reducing evaporative cooling; the resulting heat stress closes stomata as a secondary response; this means CO₂-induced closure is entirely mediated by temperature, not by CO₂ sensing in guard cells',
            'Guard cells directly sense elevated CO₂ through a carbonic anhydrase pathway that raises cytosolic bicarbonate, activating anion channels (SLAC1) that efflux Cl⁻ and malate from guard cells, reducing turgor and closing stomata; this reduced stomatal conductance decreases transpiration per unit leaf area, potentially increasing catchment runoff if leaf area remains constant, and is a physiological feedback that partially offsets increased atmospheric water demand under warming',
            'Elevated CO₂ reduces photosynthesis (CO₂ inhibition at high concentrations), which reduces the demand for open stomata; the reduced demand for CO₂ uptake passively leads to stomatal closure; the hydrological implication is negligible because plants compensate by growing more leaves, maintaining total canopy transpiration',
            'Guard cells respond to CO₂ by increasing gₛ (opening stomata) to maintain a constant internal CO₂ concentration; this means rising atmospheric CO₂ causes stomatal opening and increases transpiration, amplifying rather than reducing the hydrological response to climate change',
          ],
          correct: 1,
          explain: 'While elevated CO₂ does reduce evaporative cooling and modestly increase leaf temperature (A), this thermal effect is not the primary mechanism of CO₂-induced stomatal closure; it is a downstream consequence, not the direct mechanism. The CO₂ response is not passive (C); guard cells actively sense CO₂ through specific molecular pathways, not merely by reducing photosynthetic demand — the claim that plants "compensate by growing more leaves to maintain total transpiration" is only partly true; evidence from FACE experiments and flux tower records shows that elevated CO₂ does reduce stomatal conductance even when leaf area increases. Answer D reverses the observed response; stomata close (gₛ decreases) under elevated CO₂ in most C3 and C4 species — not open — because guard cells detect internal CO₂ concentration (Ci) and regulate aperture to maintain optimal Ci/Cₐ ratios; rising Cₐ allows the same photosynthetic rate with smaller aperture. The correct answer is B: the molecular mechanism involves elevated cytosolic CO₂/HCO₃⁻ activating guard cell anion channels (SLAC1 and SLAH3), causing efflux of Cl⁻ and malate from guard cells; loss of osmotic solutes reduces turgor pressure, narrowing the stomatal pore. Hydrologically, CO₂-induced stomatal closure could be significant: FACE (Free Air CO₂ Enrichment) experiments show ~10–25% reduction in stomatal conductance at doubled CO₂. If this effect is not entirely offset by increased leaf area index, it could increase streamflow by reducing transpiration — a mechanism estimated to have already contributed to observed increases in global river discharge independent of precipitation changes. This represents an important human-caused hydrological forcing in addition to warming and land-use change.',
        },
        {
          q: 'The Amazon forest is described as having a potential "tipping point" near 20% cumulative deforestation. What is the biophysical mechanism linking deforestation to this threshold behaviour, and why is the system potentially irreversible beyond the threshold?',
          a: [
            'The 20% threshold corresponds to the area of forest required to maintain sufficient root biomass to pump groundwater to the surface; below this threshold, water tables fall regionally and all remaining forest dies from root desiccation; the process is gradual and fully reversible once deforestation stops',
            'The Amazon biotic pump recycles ~25–35% of basin precipitation through transpiration, creating moisture that falls as rain further into the continent; as deforestation reduces forest cover and transpiration, regional precipitation declines; below ~20% forest loss, the precipitation reduction may drop below the minimum required to sustain tropical forest; drier conditions then cause further forest mortality and further precipitation decline, creating a self-reinforcing savannisation feedback that is difficult to reverse because the alternative stable state (savanna) also suppresses moisture recycling',
            'The 20% threshold is purely a carbon budget threshold: beyond 20% forest loss, carbon emissions from deforestation exceed the carbon uptake by remaining forest, causing rapid warming that desiccates the remaining trees; the mechanism is carbon-driven, not hydrologically driven, and would be reversed by reforestation',
            'The threshold refers to the fraction of the Amazon that must be cleared to disrupt the Hadley circulation; at 20% deforestation, reduced surface roughness (from forest to pasture conversion) significantly weakens the ITCZ over South America, reducing total tropical rainfall globally by 10–15%; the hydrological mechanism is large-scale atmospheric circulation, not local transpiration recycling',
          ],
          correct: 1,
          explain: `The threshold is not primarily about root biomass and groundwater pumping (A); while hydraulic lift by deep roots is a real process, the tipping point mechanism is about atmospheric moisture recycling, not water table dynamics; and the response is not gradual or easily reversible — that is precisely what makes it a tipping point. The carbon budget framing (C) is partially correct in that the Amazon has already shifted in parts from carbon sink to carbon source, but this is a consequence of moisture stress, not the primary causal mechanism of the hydrological tipping point; reforestation alone, if begun after self-reinforcing savannisation is underway, may not be sufficient to restore the original precipitation regime. The Hadley circulation mechanism (D) is not what is typically meant by the Amazon tipping point; while large-scale deforestation would affect global atmospheric circulation, the 20% threshold is specifically about regional moisture recycling, not ITCZ displacement — and the effect on global rainfall is not 10–15%. The correct answer is B: the Amazon functions as a continental moisture pump. Roughly 50% of Amazonian rainfall originates as ocean moisture (advected from the Atlantic), but 25–35% is recycled internally through forest transpiration — moisture that falls as rain deeper in the basin in a process called "flying rivers." As deforestation reduces forest cover, total transpiration decreases, reducing this moisture recycling feedback. At a critical threshold (estimated at ~20–25% total deforestation based on modelling by Zemp, Lovejoy, and Nobre, though uncertainty is large), the precipitation reduction exceeds the forest's drought tolerance; forest mortality increases, further reducing transpiration and precipitation in a self-reinforcing loop. The alternative stable state — a seasonally dry savanna or cerrado — has much lower transpiration rates and does not restore the moisture recycling needed to sustain tropical forest, making the transition potentially irreversible on human timescales even if deforestation stops.`,
        },
      ],
    },
  ],
}

export default transpirationEcohydrology
