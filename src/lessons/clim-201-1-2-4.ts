import { Thermometer, Activity, Globe, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const carbonCycleFeedbacks: Lesson = {
  id: 'clim-201-1-2-4',
  title: 'Carbon Cycle Feedbacks & Climate Sensitivity',
  track: 'cli',
  trackName: 'Climatology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'How feedbacks between the carbon cycle and climate system amplify or dampen warming — permafrost thaw, soil respiration, tropical forest dieback, ocean sink saturation, and Earth system sensitivity.',
  sources: [
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report WG1 Ch. 5',  url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/' },
    { org: 'Nature', title: 'Nature — Carbon Cycle Feedbacks Review',  url: 'https://www.nature.com/' },
    { org: 'NOAA',   title: 'NOAA Global Monitoring Laboratory',       url: 'https://gml.noaa.gov/' },
    { org: 'AGU',    title: 'AGU — Geophysical Research Letters',      url: 'https://www.agu.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Beyond Planck: how carbon cycle feedbacks reshape Earth\'s sensitivity to CO₂`,
      body: `The standard metric of climate sensitivity — equilibrium climate sensitivity (ECS), assessed by IPCC AR6 as likely 2.5–4.0°C with a best estimate of ~3°C per doubling of atmospheric CO₂ — is defined with the carbon cycle held fixed. That is, ECS measures the temperature response to a prescribed CO₂ increase, treating the biosphere and ocean as passive bystanders. In reality, the carbon cycle is deeply coupled to climate: warming alters the ability of land and ocean ecosystems to absorb anthropogenic carbon, and some terrestrial processes actively release additional CO₂ and CH₄ as they warm. When these biogeochemical responses are incorporated, the concept expands to **Earth system sensitivity (ESS)** — a larger, more uncertain, and ultimately more policy-relevant number than ECS alone.

**The carbon–climate feedback framework** quantifies how carbon reservoirs respond to climate change through two parameters. The first, **beta (β)**, describes the concentration-carbon feedback: how terrestrial and ocean carbon sinks respond to rising atmospheric CO₂ independently of warming (the "CO₂ fertilisation" effect on land plants and the solubility pump in oceans). Beta is generally negative — elevated CO₂ enhances photosynthetic carbon uptake in plants and increases ocean dissolution of CO₂, acting as a stabilising feedback that slows the rise of atmospheric CO₂. The second, **gamma (γ)**, describes the climate-carbon feedback: how carbon sinks respond to the warming itself. Gamma is generally positive — warmer soils respire carbon faster, warmer oceans dissolve less CO₂, and stressed ecosystems may transition from carbon sinks to sources. The net effect of these two feedbacks determines whether the land-ocean system amplifies or dampens the atmospheric CO₂ trajectory under any emissions scenario.

**Permafrost** represents the most discussed carbon cycle feedback. Perennially frozen soils in the Arctic and sub-Arctic contain approximately **1,700 Pg of organic carbon** — roughly twice the current atmospheric CO₂ stock — locked in frozen ground that has accumulated over tens of thousands of years. As surface warming thaws the active layer and deepens permafrost degradation, microbial decomposition of this previously frozen organic matter releases CO₂ under aerobic conditions and **methane (CH₄)** under waterlogged anaerobic conditions. Methane is approximately 80× more potent than CO₂ over a 20-year timescale (GWP20). IPCC AR6 assessed the committed permafrost feedback at 0.02–0.09°C additional warming per 1°C of global mean temperature rise by 2100, with deep uncertainty extending past 2100. Current estimates suggest permafrost emissions could contribute an additional 150–200 Pg C by 2100 under high-emission scenarios — a quantity large enough to materially accelerate atmospheric CO₂ rise.

**Soil respiration and the Q10 factor** quantify how microbial carbon release accelerates with temperature. The Q10 parameter describes the factor by which soil respiration rate increases for every 10°C rise in soil temperature. A Q10 of approximately 2 — widely observed in soils globally — means that warming soils by 10°C roughly doubles the rate of microbial decomposition of organic matter, releasing CO₂ to the atmosphere. Globally, soils store ~1,500–2,400 Pg of organic carbon in the top metre alone. Even modest warming of this reservoir, if it exceeds the compensating increase in plant productivity, represents a net positive feedback. Long-term field warming experiments at sites including Harvard Forest (USA) and Subarctic Sweden have confirmed sustained soil carbon loss under chronic warming, suggesting the feedback persists rather than acclimating away.

**Tropical forest dieback** is a threshold feedback with potential for abrupt change. The Amazon basin stores approximately 150–200 Pg of carbon in biomass and soil. Climate model projections consistently show that the eastern and southern Amazon faces hotter, drier conditions under high-emission scenarios, reducing rainfall to levels potentially below the threshold needed to sustain closed-canopy tropical rainforest. Multiple models simulate a "savannisation" transition in which drought stress and fire push large areas from carbon-absorbing forest to carbon-releasing grassland or degraded scrub — a shift that could release 50–100 Pg C over decades. The 2005, 2010, and 2015–2016 Amazon droughts caused measurable shifts from carbon sink to carbon source in affected years, demonstrating the sensitivity of the regional carbon budget to rainfall variability that warming will intensify.

**Ocean carbon sink saturation** operates through a different mechanism. The surface ocean currently absorbs approximately 2.6 Pg C per year — about 26% of annual anthropogenic emissions. This uptake depends on the temperature-sensitive solubility of CO₂ in seawater: colder water dissolves more gas (Henry\'s Law). As ocean surface temperatures rise, solubility decreases, reducing the physical dissolution component of ocean uptake. Additionally, warming strengthens ocean stratification, reducing the ventilation of deep water that carries surface-dissolved carbon into the interior — the "biological pump" and "solubility pump" both weaken. The Southern Ocean, currently the dominant region for anthropogenic carbon uptake, has already shown signs of reduced uptake efficiency during periods of strong westerly winds and enhanced upwelling of CO₂-rich deep water.

**Fire-carbon feedbacks** add a further amplifying loop. As warming drives drought and vegetation stress, wildfire frequency and intensity increase in boreal forests, Mediterranean ecosystems, and drought-prone tropical margins. Fire combusts biomass, releasing stored carbon directly to the atmosphere, while also converting living forest to younger, lower-biomass vegetation with reduced long-term carbon stocks. The 2019–2020 Australian bushfires emitted approximately 0.9 Pg C in a single season — comparable to Australia\'s total annual fossil fuel emissions. Recurring high-severity fires can prevent forest recovery entirely, converting perennial carbon sinks to near-neutral or positive sources.

The **carbon cycle amplification factor** integrates these feedbacks into a single multiplier on the temperature response to a given CO₂ forcing. IPCC AR6 assessed that carbon cycle feedbacks increase the effective ESS relative to ECS by approximately 0.5–1.0°C under scenarios of high cumulative emissions — meaning that the land and ocean carbon cycle will add approximately 15–30% additional warming beyond the physical ECS estimate by 2100 if high emissions continue. This amplification, combined with the long atmospheric lifetime of CO₂ (thousands of years for full equilibration), implies that a substantial fraction of committed warming is already locked in regardless of near-term emissions reductions.`,
      keyTerms: [
        {
          term: 'Earth system sensitivity (ESS)',
          def: 'The total equilibrium warming per doubling of CO₂ when biogeochemical feedbacks — including changes in vegetation, permafrost carbon, ocean carbon uptake, and atmospheric methane — are allowed to respond to the warming, in addition to the physical feedbacks included in ECS (water vapour, lapse rate, clouds, albedo). ESS is larger than ECS and is more relevant to multi-century and geological timescales. IPCC AR6 does not give a precise ESS estimate because it is inherently scenario-dependent, but palaeoclimate evidence suggests ESS may be 4–6°C per CO₂ doubling when slow feedbacks like ice sheets and vegetation biomes are fully equilibrated.',
        },
        {
          term: 'Gamma (γ) — climate-carbon feedback',
          def: 'The parameter quantifying how the net land–ocean carbon sink strength changes in response to warming, independent of CO₂ concentration. A positive gamma means warming reduces carbon uptake or increases carbon release, amplifying atmospheric CO₂ rise and creating a self-reinforcing feedback loop. Key contributors to positive gamma include reduced ocean CO₂ solubility at higher temperatures, accelerated soil and permafrost respiration, and ecosystem stress effects on net primary productivity. IPCC AR6 assessed gamma at approximately +44 Pg C/°C for land and +7 Pg C/°C for ocean (both amplifying), with large uncertainty.',
        },
        {
          term: 'Permafrost carbon feedback',
          def: 'The release of CO₂ and CH₄ from thawing Arctic and sub-Arctic permafrost soils as warming degrades the perennially frozen ground. Permafrost contains ~1,700 Pg of organic carbon accumulated over millennia; thaw exposes this material to microbial decomposition. Aerobic decomposition releases CO₂; waterlogged anaerobic conditions produce CH₄, which has a 20-year GWP of ~80. IPCC AR6 assessed this feedback adds 0.02–0.09°C additional global warming per 1°C rise by 2100, with deep uncertainty beyond that horizon. The feedback is considered "committed" — additional thaw is locked in at current temperatures — and largely irreversible on human timescales.',
        },
        {
          term: 'Q10 factor',
          def: 'The multiplicative factor by which a biological or chemical reaction rate increases for every 10°C rise in temperature. For soil microbial respiration, Q10 values of approximately 2 are widely observed, meaning a 10°C warming roughly doubles the rate of organic matter decomposition and CO₂ release from soils. Because global soils store ~1,500–2,400 Pg of organic carbon in the top metre, even a modest Q10-driven acceleration of soil respiration under future warming represents a large positive climate-carbon feedback if not offset by increased plant carbon uptake. Laboratory and field warming experiments confirm that Q10 effects on soil carbon loss persist for decades without strong thermal acclimation.',
        },
        {
          term: 'Ocean carbon sink saturation',
          def: `The progressive weakening of the ocean\'s capacity to absorb anthropogenic CO₂ as warming reduces the physical solubility of CO₂ in seawater (Henry\'s Law: colder water dissolves more gas) and as increased stratification suppresses the ventilation of surface waters carrying dissolved carbon to the deep ocean interior. The ocean currently absorbs ~26% of annual anthropogenic CO₂ emissions (~2.6 Pg C/yr); IPCC AR6 projects that the fraction absorbed by the ocean will decline as surface temperatures rise, meaning a greater proportion of each unit of human emissions remains in the atmosphere. The Southern Ocean shows early observational evidence of this saturation in periods of anomalously strong westerly winds and enhanced upwelling of deep CO₂-rich water.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Key Concepts',
      body: `Carbon cycle feedbacks are not abstract modelling artefacts — they are active processes already being measured in Arctic soils, tropical forests, and ocean buoy networks. Four mechanisms stand out as the largest, most observationally grounded amplifiers of the warming that CO₂ alone would produce.`,
      cards: [
        {
          name: 'Permafrost Thaw: The Sleeping Carbon Giant',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: '~1,700 Pg C frozen in Arctic soils — twice the atmospheric CO₂ stock. Thaw releases CO₂ (aerobic) and CH₄ (anaerobic, GWP80). IPCC AR6: +0.02–0.09°C additional warming per 1°C rise by 2100. Feedback is committed and largely irreversible on human timescales.',
          examples: 'Siberian permafrost collapse lakes (thermokarst): CH₄ ebullition measured at 2–4 mg CH₄/m²/day · Yukon-Kuskokwim Delta, Alaska: active layer deepening ~4 cm/decade since 1990 · IPCC AR6: 150–200 Pg C projected release by 2100 under SSP5-8.5',
        },
        {
          name: 'Soil Respiration & Q10: Warming Soils Breathe Faster',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Q10 ≈ 2: microbial decomposition doubles per 10°C warming. Global soil carbon ~1,500–2,400 Pg (top 1 m). Warming soils release CO₂; if respiration exceeds plant uptake, net positive feedback. Long-term field experiments show loss persists for decades.',
          examples: 'Harvard Forest soil warming experiment (1991–present): 2°C warming reduced soil C by ~17% over 26 years · Subarctic Sweden: warmed plots lost 15–20% soil C over 20 years · Global Q10 meta-analysis: mean Q10 = 2.1 (range 1.3–3.3) across biomes',
        },
        {
          name: 'Ocean Sink Saturation: Warmer Water Absorbs Less CO₂',
          icon: Globe,
          color: BRAND.accent,
          desc: `Ocean absorbs ~26% of annual anthropogenic CO₂ (~2.6 Pg C/yr). Warming reduces CO₂ solubility (Henry\'s Law) and stratification weakens deep-water ventilation. Sink fraction projected to decline. Southern Ocean shows early saturation signals from enhanced upwelling.`,
          examples: 'Southern Ocean: 1990s sink decline linked to strengthened westerlies and upwelling of deep CO₂-rich water (Le Quéré et al. 2007) · Global Ocean Carbon Atlas: air-sea CO₂ flux maps show reduced uptake in warming regions · IPCC AR6: ocean-carbon gamma ≈ +7 Pg C/°C',
        },
        {
          name: 'Tropical Forest Dieback: Savannisation Threshold',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Amazon stores ~150–200 Pg C; drought and heat can trigger savannisation — forest to grassland transition. 2005, 2010, 2015–16 droughts turned Amazon from sink to source. Fire amplifies the feedback. Potential abrupt release of 50–100 Pg C under high-emission scenarios.',
          examples: '2005 Amazon drought: 1.6 Pg C net source vs. ~0.5 Pg C normal sink (Phillips et al. 2009) · 2019–20 Australian bushfires: ~0.9 Pg C emitted in one season · CMIP6 models: eastern Amazon savannisation projected above +3°C global warming under SSP5-8.5',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Carbon Cycle Feedback Loop Under Warming',
      body: 'How initial CO₂-forced warming propagates through the carbon cycle, triggering positive feedbacks that amplify the original warming signal and add additional CO₂ and CH₄ to the atmosphere.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how CO₂-forced warming triggers cascading carbon cycle feedbacks — permafrost thaw, soil respiration, ocean sink weakening, and tropical dieback — that amplify atmospheric greenhouse gas concentrations and drive further warming',
        nodes: [
          {
            id: 'initial-co2-forcing',
            label: 'Rising Atmospheric CO₂',
            description: 'Fossil fuel combustion and land-use change raise atmospheric CO₂ from 280 ppm (pre-industrial) to over 420 ppm today (~2024). Each doubling of CO₂ produces a direct radiative forcing of ~3.7 W/m², driving surface warming of ~1.1°C (Planck response alone before feedbacks).',
            color: BRAND.accentHot,
          },
          {
            id: 'surface-warming',
            label: 'Surface & Ocean Warming',
            description: 'Radiative forcing from CO₂ raises global mean surface temperature. Ocean surface warms along with land, though more slowly. Current global mean warming is ~1.2°C above pre-industrial. Warming activates carbon cycle feedbacks through multiple pathways simultaneously.',
            color: BRAND.coral,
          },
          {
            id: 'permafrost-thaw',
            label: 'Permafrost Thaw & CH₄/CO₂ Release',
            description: 'Arctic warming (2–4× global mean) thaws permafrost holding ~1,700 Pg C. Aerobic decomposition releases CO₂; anaerobic (waterlogged) decomposition releases CH₄ (GWP80). IPCC AR6 projects 150–200 Pg C release by 2100 under high emissions. Committed and largely irreversible.',
            color: BRAND.amethyst,
          },
          {
            id: 'soil-respiration',
            label: 'Accelerated Soil Respiration (Q10)',
            description: 'Warmer soils decompose organic matter faster: Q10 ≈ 2 means doubling of microbial respiration per 10°C rise. Global soil carbon stock of ~1,500–2,400 Pg in the top metre. If respiration gains exceed photosynthetic uptake, net CO₂ flux to atmosphere increases — a persistent positive feedback confirmed in multi-decadal warming experiments.',
            color: BRAND.gold,
          },
          {
            id: 'ocean-sink-weakening',
            label: 'Ocean Carbon Sink Weakening',
            description: `Warmer ocean surface holds less dissolved CO₂ (Henry\'s Law). Increased stratification suppresses deep-water ventilation, reducing transport of surface carbon to the deep interior. Ocean fraction of annual anthropogenic CO₂ uptake (~26%) projected to decline. Southern Ocean already shows saturation signatures during anomalous upwelling events.`,
            color: BRAND.accent,
          },
          {
            id: 'amplified-co2',
            label: 'Amplified Atmospheric CO₂ & ESS',
            description: 'Carbon released from permafrost, soils, weakened ocean sinks, and fire-disturbance adds to atmospheric CO₂ above the fossil fuel signal alone. The carbon cycle amplification factor increases effective warming relative to ECS by ~0.5–1.0°C under high-emission scenarios. Earth system sensitivity (ESS) exceeds ECS, making long-term committed warming larger and less reversible.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'initial-co2-forcing',  to: 'surface-warming',       label: 'Radiative forcing ~3.7 W/m² per CO₂ doubling' },
          { from: 'surface-warming',      to: 'permafrost-thaw',        label: 'Arctic warms 2–4× global mean' },
          { from: 'surface-warming',      to: 'soil-respiration',       label: 'Q10 accelerates microbial decomposition' },
          { from: 'surface-warming',      to: 'ocean-sink-weakening',   label: 'Reduced CO₂ solubility and stratification' },
          { from: 'permafrost-thaw',      to: 'amplified-co2',          label: 'CO₂ and CH₄ enter atmosphere' },
          { from: 'soil-respiration',     to: 'amplified-co2',          label: 'Net soil CO₂ efflux increases' },
          { from: 'ocean-sink-weakening', to: 'amplified-co2',          label: 'Less anthropogenic CO₂ sequestered' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the difference between equilibrium climate sensitivity (ECS) and Earth system sensitivity (ESS), and why is ESS generally larger?',
          a: [
            'ECS measures temperature response to a CO₂ doubling with the carbon cycle held fixed (physical feedbacks only); ESS includes biogeochemical feedbacks — permafrost thaw, soil respiration, ocean sink weakening — that add additional CO₂ and CH₄ to the atmosphere, amplifying total warming beyond the physical ECS value',
            'ECS includes all feedbacks including the carbon cycle; ESS is a smaller subset that considers only fast physical feedbacks such as water vapour and albedo, making ESS always lower than ECS because fewer feedbacks are active',
            'ECS and ESS are the same quantity measured on different timescales: ECS applies only over decades while ESS applies over millennia; the difference in magnitude is purely due to the longer time allowed for the deep ocean to equilibrate, not to any additional carbon cycle processes',
            'ESS is larger than ECS because it incorporates human land-use change as a forcing rather than a feedback; once land clearing is included as a direct forcing, total warming necessarily exceeds the physical ECS estimate by definition',
          ],
          correct: 0,
          explain: 'ECS is defined for a fixed carbon cycle: it measures how much the global mean surface temperature warms at equilibrium when CO₂ doubles, counting only physical feedbacks (water vapour, lapse rate, clouds, ice-albedo). The carbon cycle — soils, permafrost, ocean uptake, vegetation — is treated as a boundary condition, not a feedback. ESS relaxes this constraint and allows biogeochemical processes to respond to the warming. As temperatures rise, permafrost thaws and releases CO₂ and CH₄; soils respire faster; the ocean absorbs a smaller fraction of anthropogenic CO₂; drought-stressed forests may shift from sink to source. All of these processes add greenhouse gases to the atmosphere beyond the original CO₂ perturbation, producing additional forcing and warming. The cumulative effect is that ESS exceeds ECS by an amount that grows with the magnitude of warming and the timescale considered — palaeoclimate evidence suggests ESS is 4–6°C per CO₂ doubling when slow feedbacks (ice sheets, biomes) are fully equilibrated. Answers B and C incorrectly reverse or equate the definitions. Answer D incorrectly attributes the difference to land-use forcing rather than carbon cycle feedbacks.',
        },
        {
          q: 'Arctic permafrost contains approximately 1,700 Pg of organic carbon. Why does this represent a potentially large positive climate feedback, and what determines whether CO₂ or CH₄ is the primary product of decomposition?',
          a: [
            'Permafrost carbon is a negative feedback because thawing increases soil moisture, which promotes plant growth that absorbs more CO₂ than the decomposition releases; CH₄ is the primary product under all conditions because frozen soils are inherently anaerobic',
            'The 1,700 Pg C stock is smaller than the current atmospheric CO₂ pool and therefore cannot significantly affect global temperatures; the decomposition pathway is determined solely by soil pH, with acidic soils producing CO₂ and alkaline soils producing CH₄',
            'Permafrost thaw releases carbon stored over thousands of years into the atmosphere over decades to centuries, adding CO₂ and CH₄ above the fossil fuel signal and creating a self-amplifying loop; CO₂ is the primary product under aerobic (drained, oxygenated) conditions while CH₄ is produced under anaerobic (waterlogged) conditions — both are released but CH₄ carries ~80× higher GWP over 20 years',
            'Permafrost is a positive feedback only in summer months when active layer thaw occurs; in winter the refreezing re-sequesters all released carbon so the annual net flux is near zero; the CO₂/CH₄ ratio is determined by permafrost depth, with surface soils producing CO₂ and deep soils producing CH₄',
          ],
          correct: 2,
          explain: 'The ~1,700 Pg C in permafrost roughly doubles the current atmospheric carbon stock (~860 Pg C as CO₂), making even a fractional release climatically significant. The organic matter — plant and animal material accumulated over thousands of years of cold-limited decomposition — becomes available to microbial metabolism as thaw deepens the active layer and creates new taliks (unfrozen zones within permafrost). The decomposition pathway depends on oxygen availability: where thawing soils drain (aerobic conditions), heterotrophic bacteria oxidise organic carbon to CO₂ through normal respiration. Where thawing creates waterlogged conditions — as in thermokarst lakes, wetlands, and flooded tundra — methanogenic archaea ferment organic matter to CH₄. Methane has a 20-year global warming potential (GWP20) of approximately 80, meaning its near-term climate impact per molecule is 80× that of CO₂. IPCC AR6 assessed the combined permafrost CO₂ and CH₄ feedback at +0.02–0.09°C additional warming per 1°C of global rise by 2100, with large uncertainty extending beyond. Answer A incorrectly identifies it as a negative feedback and incorrectly claims all conditions are anaerobic. Answer B incorrectly compares the stock size and incorrectly attributes decomposition pathway to pH. Answer D incorrectly claims seasonal re-sequestration cancels the annual flux and incorrectly attributes pathway to depth.',
        },
        {
          q: 'What is the Q10 factor for soil respiration, and how does it translate into a carbon cycle feedback under warming?',
          a: [
            'Q10 is the ratio of atmospheric CO₂ to soil carbon concentration; a Q10 of ~2 means that twice as much CO₂ is in the atmosphere as is in soils, implying that soil carbon stocks are already depleted and cannot contribute further to atmospheric CO₂ under warming',
            'Q10 ≈ 2 means soil microbial respiration roughly doubles for every 10°C rise in soil temperature; because global soils store ~1,500–2,400 Pg C, accelerated decomposition under warming releases CO₂ faster than cooler conditions, creating a positive carbon-climate feedback if respiration gains exceed increases in plant productivity',
            'Q10 describes the 10-year lag between a temperature increase and the soil carbon response; a Q10 of 2 means soils take twice as long to respond as the atmosphere and are therefore a weak feedback over policy-relevant timescales of 30–50 years',
            'Q10 is the fraction of soil organic carbon that decomposes per decade; Q10 = 2 implies 20% of soil carbon is released every decade regardless of temperature, so warming has no marginal effect on the decomposition rate beyond this background rate',
          ],
          correct: 1,
          explain: 'Q10 is a temperature sensitivity coefficient used in ecology and biochemistry: it quantifies the multiplicative factor by which a reaction rate increases for every 10°C rise in temperature. For soil microbial respiration — the decomposition of organic matter by bacteria and fungi — empirically measured Q10 values cluster around 2.0 (range ~1.3–3.3 across biomes, with a global mean ~2.1 from meta-analyses). A Q10 of 2 applied to a 10°C warming scenario means soils respire approximately twice as much CO₂ per unit time compared to the cooler baseline. The feedback significance comes from the reservoir size: global soils hold ~1,500–2,400 Pg of organic carbon in the top metre alone — more than twice the current atmospheric CO₂ stock. If warming accelerates respiration faster than the compensating uptake of CO₂ by plants (net primary productivity may increase with warming and elevated CO₂ via beta/concentration-carbon feedback), the net balance shifts to a source. Long-term field warming experiments at Harvard Forest and in Subarctic Sweden confirm sustained soil carbon loss over 20+ years of chronic warming without strong thermal acclimation. Answer A redefines Q10 incorrectly. Answer C redefines it as a lag time. Answer D redefines it as a fixed decomposition fraction independent of temperature, contradicting its actual meaning.',
        },
        {
          q: 'How does ocean warming drive carbon sink saturation, and which ocean region has shown the earliest observational evidence of this process?',
          a: [
            'Warmer ocean water dissolves more CO₂ (Henry\'s Law increases with temperature), so ocean warming actually increases the ocean carbon sink; saturation is caused instead by rising atmospheric CO₂ concentrations overwhelming the buffer capacity of seawater carbonate chemistry, and occurs uniformly across all ocean basins simultaneously',
            'Ocean warming reduces CO₂ solubility (Henry\'s Law: colder water dissolves more gas) and increases stratification that weakens deep-water ventilation, reducing the efficiency of carbon transport to the interior; the Southern Ocean showed early saturation signals in the 1990s–2000s linked to strengthened westerly winds increasing upwelling of deep CO₂-rich water',
            'Ocean carbon sink saturation occurs only in the tropical Pacific due to ENSO-driven warm pool expansion; other ocean regions are unaffected by warming because deep thermohaline circulation continuously renews the surface layer with cold, low-CO₂ water at rates faster than surface warming can reduce solubility',
            'Ocean warming reduces the biological pump efficiency by killing phytoplankton in warm surface waters, which is the dominant mechanism for carbon sink saturation; the Arctic Ocean shows the first saturation signals because Arctic phytoplankton are most sensitive to temperature increases above 5°C',
          ],
          correct: 1,
          explain: `Henry\'s Law states that the solubility of a gas in liquid decreases as temperature increases — warmer water holds less dissolved CO₂ at equilibrium. For the ocean carbon sink, this has two compounding consequences: (1) Directly, surface ocean waters at higher temperatures absorb less CO₂ per unit of air-sea partial pressure difference (pCO₂ gradient), reducing physical dissolution. (2) Indirectly, surface warming strengthens density stratification between the warm surface mixed layer and cold deep water, suppressing the large-scale overturning and mixing that transports dissolved carbon from the surface into the deep ocean interior — essentially reducing the effective volume of seawater available to sequester carbon. The Southern Ocean is the largest single region for anthropogenic carbon uptake globally, absorbing roughly 40% of the ocean total. In the late 1990s and early 2000s, a period of anomalously strong Southern Ocean westerly winds enhanced Ekman upwelling, bringing old deep water with high natural CO₂ to the surface. This old water, which outgassed CO₂ to the atmosphere, temporarily overwhelmed the anthropogenic uptake signal, causing the Southern Ocean carbon sink to stagnate. Le Quéré et al. (2007) in Science documented this saturation using atmospheric CO₂ inversion data. Answer A incorrectly reverses Henry\'s Law. Answer C incorrectly restricts the effect to the tropical Pacific. Answer D incorrectly identifies biological pump failure and Arctic phytoplankton as the mechanism.`,
        },
        {
          q: 'The IPCC AR6 assessed that carbon cycle feedbacks increase effective warming relative to ECS by approximately 0.5–1.0°C under high-emission scenarios. What is the primary reason this additional warming is considered "committed" and largely irreversible on human timescales?',
          a: [
            'The additional warming is committed because international climate agreements have locked in current emissions trajectories for the next 50 years; the irreversibility is legal rather than physical — once governments ratify emission commitments, the associated warming cannot be avoided regardless of subsequent technological changes',
            'Carbon cycle feedbacks produce committed, irreversible warming primarily because the methane released from permafrost has a very short atmospheric lifetime (~12 years), meaning it cannot be removed by any known technology and continues warming the climate for centuries after release',
            'The committed warming arises because CO₂ already emitted has a very long atmospheric lifetime (hundreds to thousands of years for full equilibration), and once carbon cycle feedbacks release additional CO₂ from permafrost and soils, that carbon cannot be rapidly re-sequestered; permafrost that took millennia to accumulate under cold conditions cannot re-form on human timescales once thawed, making the carbon release one-directional',
            'Committed warming from carbon cycle feedbacks is irreversible because ocean thermal expansion is irreversible; once the deep ocean warms, heat cannot be removed, and this deep ocean heat continuously drives the carbon cycle feedbacks in perpetuity regardless of surface temperature changes',
          ],
          correct: 2,
          explain: 'The concept of "committed warming" from carbon cycle feedbacks has two distinct physical underpinnings. First, CO₂ that is emitted — whether from fossil fuels or from thawing permafrost — has an extremely long atmospheric residence. About 20% of a CO₂ pulse remains in the atmosphere after 1,000 years; full equilibration with the deep ocean and weathering feedbacks takes tens of thousands of years. This means that once permafrost releases CO₂, the radiative effect of that carbon persists for millennia and cannot be meaningfully reversed by allowing permafrost to refreeze (which would take centuries under any optimistic scenario). Second, the carbon stocks themselves are effectively non-renewable on human timescales: the ~1,700 Pg C in permafrost accumulated over ~10,000–50,000 years under the cold conditions of the Holocene and Pleistocene. If the Arctic warms by 4–6°C, those cold conditions will not return for millennia, meaning the organic carbon that decomposes during thaw will not be re-sequestered in permafrost on any policy-relevant timescale. Similarly, tropical soil carbon lost to warming-accelerated respiration or fire cannot be rapidly rebuilt. The IPCC AR6 characterises this as an "irreversible" or "committed" feedback because even aggressive mitigation that stabilises temperatures cannot undo the thaw already set in motion. Answer A incorrectly attributes irreversibility to policy agreements. Answer B incorrectly states that short CH₄ lifetime makes it irreversible — short lifetime actually means it dissipates faster, and the irreversibility arises from CO₂ and the depleted permafrost reservoir. Answer D incorrectly attributes irreversibility to ocean thermal expansion rather than to the carbon cycle dynamics themselves.',
        },
      ],
    },
  ],
}

export default carbonCycleFeedbacks
