import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-2',
  title: 'Sea Level Rise, Ice Sheet Dynamics, and Cryosphere Change',
  track: 'cli',
  trackName: 'Climate Science',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 140,
  description: 'How the cryosphere — glaciers, ice sheets, sea ice, and permafrost — is responding to warming, what drives sea level rise, and what the projections imply for coastlines this century and beyond.',
  sources: [
    { org: 'IPCC',  title: 'IPCC AR6 WGI Chapter 9 — The Ocean, Cryosphere and Sea Level (2021)',              url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-9/' },
    { org: 'NASA',  title: 'NASA Sea Level Change Portal — Satellite Altimetry and GRACE-FO Data',            url: 'https://sealevel.nasa.gov/' },
    { org: 'NSIDC', title: 'National Snow and Ice Data Center — Sea Ice, Glaciers, and Permafrost Overview',  url: 'https://nsidc.org/' },
    { org: 'NOAA',  title: 'NOAA Arctic Report Card — Annual Assessment of Arctic Environmental Change',       url: 'https://arctic.noaa.gov/Report-Card' },
    { org: 'AGI',   title: 'Glossary of Geology — Marine Ice Sheet Instability, Permafrost, Sea Level',       url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A world reshaped by melting ice',
      body: `Global mean sea level (GMSL) has risen approximately **20 cm** since 1900, with the rate accelerating from ~1.7 mm/yr over the 20th century to more than 4 mm/yr in the 2020s — a rate unprecedented in at least 3,000 years. At current rates, and under plausible warming scenarios, sea level rise will displace hundreds of millions of people living in coastal zones by the end of this century, threaten the very existence of small island nations, and require multi-trillion-dollar adaptations to coastal infrastructure worldwide.

Sea level rise has three main contributors: thermal expansion of warming ocean water (~40 % of the current rate); melting of mountain glaciers (~20 %); and mass loss from the Greenland and Antarctic ice sheets (~40 %, and rapidly growing). The ice sheet contribution is the most uncertain but potentially most consequential: Greenland contains enough ice to raise sea levels by ~7 m if fully melted, and West Antarctica ~3–5 m, over timescales of centuries to millennia.

Beyond sea level, the broader cryosphere — sea ice, permafrost, and mountain glaciers — is changing in ways that reshape atmospheric circulation, freshwater supply, and carbon cycling. Arctic sea ice has lost ~40 % of its summer extent since 1979; permafrost is thawing across Siberia, Alaska, and northern Canada, threatening to release billions of tonnes of ancient carbon. Each component connects to others through feedback loops, making the cryosphere one of the most consequential and least linear components of the Earth system.`,
      keyTerms: [
        { term: 'Global mean sea level (GMSL)', def: 'The average height of the ocean surface globally, measured by tide gauges (records since ~1880) and satellite altimetry (since 1993). GMSL has risen ~20 cm since 1900, with an accelerating rate reaching >4 mm/yr in the 2020s. Contributions: steric (thermal expansion, ~40 %), glaciers (~20 %), Greenland ice sheet (~15 %), Antarctic ice sheet (~15 %), land water storage (~10 %). Satellite altimetry (TOPEX/Poseidon, Jason series, Sentinel-6) provides the highest-precision record; GRACE/GRACE-FO satellite gravimetry independently measures ice mass changes.' },
        { term: 'Marine Ice Sheet Instability (MISI)', def: 'A positive feedback mechanism affecting ice grounded below sea level on a retrograde bed (deepening inland). When the grounding line retreats into deeper water, warm ocean water can access larger areas of ice base, increasing melting, reducing ice shelf buttressing, and driving faster glacier flow — further retreating the grounding line in a potentially self-sustaining process. West Antarctic ice streams (Thwaites, Pine Island) are considered most vulnerable. If triggered, MISI could commit several metres of sea level rise over centuries regardless of future emissions.' },
        { term: 'Ice-albedo feedback', def: 'A positive climate feedback in which loss of reflective snow and ice exposes darker ocean or land surfaces (albedo 0.06 vs. 0.85 for fresh snow), absorbing more solar radiation and amplifying warming. The most important amplifier of Arctic warming: Arctic surface albedo has decreased by ~8 % since 1979 due to sea ice loss. The feedback also operates on land via permafrost thaw exposing dark soil and reducing snow cover duration. Ice-albedo feedback is a major driver of polar amplification — the 3–4× amplification of Arctic warming relative to the global mean.' },
        { term: 'Permafrost carbon feedback', def: 'Perennially frozen soil covering ~24 % of Northern Hemisphere land contains an estimated 1,500 GtC (roughly 2× the current atmospheric CO₂ inventory). Thawing permafrost allows microbial decomposition of previously frozen organic matter, releasing CO₂ (aerobic conditions) or CH₄ (anaerobic conditions in waterlogged soils). CH₄ has ~30× the warming potential of CO₂ over 100 years. The feedback is difficult to model due to thermokarst (ground collapse), talik formation, and abrupt permafrost degradation. Current observations: widespread active-layer deepening across Siberia, Alaska, and Canada; permafrost temperatures rising at 0.3–0.5 °C/decade in the Arctic.' },
        { term: 'Steric sea level rise', def: 'Sea level rise due to thermal expansion of ocean water as it warms — warmer water occupies more volume without any change in mass. Currently contributes ~40 % of the observed sea level rise rate. The contribution grows over time as ocean warming penetrates to greater depths. Even if all emissions stopped, thermal expansion would continue for centuries as the deep ocean equilibrates with current atmospheric temperatures. Halosteric effects (density changes due to salinity) are smaller and locally important (e.g., in meltwater-influenced regions like the North Atlantic).' },
      ],
    },
    {
      type: 'concept',
      title: 'Ice sheet dynamics, sea ice, permafrost, and sea level projections',
      body: `**Components of sea level rise and their acceleration.** Sea level rise results from three main sources. Thermal (steric) expansion: as the ocean warms, water expands; this contributes ~40 % of the current rise rate and will continue even if GHG concentrations stabilise. Mountain glaciers: glaciers on every continent are retreating, contributing ~20 % of current rise. Their contribution is the most immediate and predictable, though most will be largely gone by 2100 under high-emission scenarios. Ice sheets: the Greenland Ice Sheet (GIS) and Antarctic Ice Sheet (AIS) together now contribute ~40 % of the observed rise, and this fraction is growing. Satellite gravimetry (GRACE/GRACE-FO) has confirmed mass losses tripling since the 1990s.

**Ice sheet dynamics and Marine Ice Sheet Instability.** The most uncertain and consequential component of sea level rise projections is the potential destabilisation of marine ice sheets. The West Antarctic Ice Sheet (WAIS) rests on a retrograde bed — the bedrock deepens inland — making it susceptible to Marine Ice Sheet Instability (MISI): warm Circumpolar Deep Water intrudes beneath ice shelves (Pine Island, Thwaites), melts them from below, reduces their buttressing on inland glaciers, and allows faster flow to the ocean. As the grounding line retreats into deeper water, the process can accelerate. **Thwaites Glacier** — nicknamed the "doomsday glacier" — is already retreating; its loss alone could eventually contribute 65 cm to sea level, with cascading failures potentially adding several metres over centuries. IPCC AR6 projects likely GMSL rise of 0.32–0.62 m by 2100 under SSP1-2.6 (low emissions) and 0.63–1.01 m under SSP5-8.5 (high emissions), but "low-likelihood high-impact" scenarios involving ice sheet instability could exceed 2 m by 2100.

**Arctic sea ice loss and the ice-albedo feedback.** Arctic September (minimum) sea ice extent has declined at ~13 % per decade since satellite observations began in 1979, and Arctic sea ice is projected to become essentially ice-free in summer before 2050 under all emission scenarios. The loss of highly reflective white sea ice (albedo ~0.85) replaces it with dark open water (albedo ~0.06–0.09), absorbing more solar energy and amplifying Arctic warming — the ice-albedo feedback. While sea ice loss does not directly raise sea level (floating ice), it reshapes atmospheric circulation by reducing the temperature gradient between the Arctic and mid-latitudes, potentially weakening and destabilising the polar jet stream, contributing to more persistent extreme weather in mid-latitudes (a research area of active debate).

**Permafrost thaw and carbon release.** Permafrost stores approximately 1,500 GtC in frozen organic matter. As permafrost thaws, microbial decomposition releases CO₂ under aerobic conditions and the more potent CH₄ under waterlogged anaerobic conditions. The permafrost carbon feedback represents a significant amplifier of anthropogenic warming that most Earth system models underestimate — abrupt thaw processes like thermokarst lake formation and retrogressive thaw slumps can release carbon 10× faster than gradual top-down thaw. Arctic air temperatures are rising at 3–4 °C per degree of global warming; permafrost is warming at 0.3–0.5 °C/decade and the active layer depth (seasonally thawed zone) is increasing across Siberia, Alaska, and Canada.`,
      cards: [
        {
          name: 'Sea Level Rise: Budget and Projections',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'Current GMSL rise rate: >4 mm/yr (accelerating from 1.7 mm/yr over 20th century). Budget: ~40 % steric thermal expansion; ~20 % mountain glaciers; ~40 % ice sheets (growing). GRACE-FO confirms ice mass losses tripling since 1990s. AR6 projections for 2100: 0.32–0.62 m (SSP1-2.6) to 0.63–1.01 m (SSP5-8.5); low-likelihood high-impact (MISI/MICI): >2 m possible. Long-term: each 1 °C of warming commits ~2–3 m sea level rise on multi-century timescales as ice sheets equilibrate. Greenland: 7 m sea level equivalent; WAIS: 3–5 m. High-tide flooding in US cities already 5× more frequent than in 1960.',
          examples: 'Thwaites Glacier: grounding line retreating 1.2 km/yr; 65 cm sea level commitment alone · South Florida: king tides regularly flood Brickell Ave; Miami Beach spending $500M on pumps and road raising · Tuvalu, Kiribati, Marshall Islands: mean elevation <2 m; existential threat at <1 m of GMSL rise',
        },
        {
          name: 'Marine Ice Sheet Instability (MISI)',
          icon: Thermometer,
          color: BRAND.ruby,
          desc: 'WAIS vulnerability: grounded below sea level; retrograde bed (deepens inland); warm Circumpolar Deep Water warming ice shelf cavities. MISI mechanism: warm water → ice shelf thinning → loss of buttressing → faster glacier flow → grounding line retreats into deeper water → more exposure to warm water → self-sustaining. Thwaites: already retreating at unprecedented rate; connected to WAIS interior; loss could destabilise adjacent glaciers (Pine Island, Haynes, Pope, Smith, Kohler). East Antarctic ice sheet: mostly above sea level; more stable but Wilkes Basin has marine-based sections. Ice shelf collapse (Larsen B 2002): tributaries accelerated 8× after shelf loss.',
          examples: 'Pine Island Glacier: lost 5 ice shelves since 1994; flow speed doubled; one of largest contributors to SLR · Larsen B collapse 2002: 3,250 km² in 35 days; showed ice shelves can collapse rapidly · ITGC (International Thwaites Glacier Collaboration): 2018–2028 research; found warm Atlantic water directly contacting Thwaites grounding line',
        },
        {
          name: 'Sea Ice, Permafrost, and Cryosphere Feedbacks',
          icon: Wind,
          color: BRAND.gold,
          desc: 'Arctic September sea ice: −13 %/decade since 1979; ice-free summers projected before 2050 all scenarios. Ice-albedo feedback: albedo 0.85 (ice) → 0.06 (water); amplifies Arctic warming 3–4× global mean. Mountain glaciers: retreating on every continent; Hindu Kush–Himalaya glaciers (800 million people dependent); "peak water" passed in some catchments. Permafrost: 1,500 GtC stored; thaw releases CO₂ + CH₄; models underestimate abrupt thaw; 0.3–0.5 °C/decade permafrost warming observed. Glacial Lake Outburst Floods (GLOFs): increasing with glacier retreat; major hazard in Andes, Himalayas, Central Asia.',
          examples: 'Jakobshavn Glacier, Greenland: doubled speed since 1990s; one of fastest-moving glaciers on Earth; now contributing ~1 mm SLR/yr alone · Siberian thermokarst lakes: expanding rapidly; emitting CH₄; visible from space · Athabasca Glacier, Canada: retreated 1.5 km since 1900; viewable from Icefields Parkway',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The rate of global mean sea level rise has accelerated from ~1.7 mm/yr in the 20th century to >4 mm/yr in the 2020s. What primarily drives this acceleration?',
          a: [
            'Growing contributions from ice sheet mass loss (Greenland and Antarctica), which have tripled since the 1990s as marine-terminating glaciers accelerated',
            'Thermal expansion increasing exponentially as deep ocean waters warm faster than surface waters',
            'Mountain glacier loss, which has become the dominant contributor as all glaciers enter rapid retreat',
            'Changes in land water storage from groundwater extraction masking the true rate in earlier decades',
          ],
          correct: 0,
          explain: 'The acceleration is primarily driven by the rising ice-sheet contribution. Glacier discharge from Greenland and Antarctica increased roughly threefold between the 1990s and 2010s as warm ocean water melted ice shelves from below and destabilised grounding lines. Thermal expansion and mountain glaciers contribute significantly but have not tripled in rate.',
        },
        {
          q: 'Why is the West Antarctic Ice Sheet considered particularly vulnerable to rapid, potentially irreversible retreat?',
          a: [
            'Its bed deepens inland (retrograde slope), so once a grounding line retreats past a sill, warm ocean water can access deeper ice, potentially triggering self-sustaining retreat',
            'West Antarctica receives less snowfall than East Antarctica, so mass balance is more easily tipped negative',
            'Its ice shelves are thinner than those of East Antarctica, making them more sensitive to air temperature increases',
            'It sits at lower latitude than East Antarctica and therefore receives more solar radiation',
          ],
          correct: 0,
          explain: 'MISI arises specifically because the retrograde bed geometry means retreat moves the grounding line into progressively deeper water. Deeper water drives more basal melting and faster flow, which drives further retreat — a positive feedback. This geometry is the key vulnerability, not snowfall, shelf thickness, or latitude.',
        },
        {
          q: 'Thawing permafrost is considered an important climate feedback. Why do most climate models partially underestimate this feedback?',
          a: [
            'Permafrost carbon decomposition processes (soil microbiology, thermokarst dynamics) are poorly represented in Earth system models, so the carbon released per degree of warming is likely larger than current projections suggest',
            'The total carbon stored in permafrost soils is small relative to the ocean carbon reservoir, so the impact is negligible on century timescales',
            'Methane from permafrost oxidises to CO₂ within hours, eliminating its climate impact before reaching the atmosphere',
            'Permafrost is only found in areas where warming is below the global average, so the local feedback does not influence global temperature',
          ],
          correct: 0,
          explain: 'Permafrost contains ~1,500 GtC — roughly twice the current atmospheric CO₂ burden. Abrupt thaw processes (thermokarst lake formation, retrogressive slumps) can release carbon 10× faster than the gradual top-down thaw captured by most land-surface models. Methane\'s high warming potential and the enormous carbon inventory make this a first-order concern that current models consistently underestimate.',
        },
      ],
    },
  ],
}

export default lesson
