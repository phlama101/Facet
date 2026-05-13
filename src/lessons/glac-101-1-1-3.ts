import { Activity, Globe, Layers, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const glacierMassBalance: Lesson = {
  id: 'glac-101-1-1-3',
  title: 'Glacier Mass Balance and Climate Response',
  track: 'geo',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'How glaciers gain and lose mass, and what mass balance measurements reveal about glacier health and climate change',
  sources: [
    { org: 'WGMS', title: 'WGMS — World Glacier Monitoring Service',            url: 'https://wgms.ch' },
    { org: 'NSIDC', title: 'NSIDC — Glacier Mass Balance',                      url: 'https://nsidc.org' },
    { org: 'USGS',  title: 'USGS — Benchmark Glaciers',                         url: 'https://usgs.gov' },
    { org: 'ESA',   title: 'ESA — Climate Change Initiative Glaciers',           url: 'https://climate.esa.int/en/projects/glaciers' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The glacier\'s bank account: accumulation, ablation, and what the balance reveals',
      body: `Mass balance is the difference between how much mass a glacier gains and how much it loses over a balance year — typically from the end of one melt season to the end of the next. The gain side is accumulation: snowfall, wind-drifted snow, avalanche input, and refreezing of percolation water. The loss side is ablation: surface melting and runoff, calving of icebergs, and sublimation. Specific mass balance (bₙ) is expressed in metres of water equivalent (m w.e.) — the thickness of the water layer that would result if the ice were melted — allowing direct comparison between glaciers of different sizes. Glacier-wide mass balance (B = bₙ × glacier area) converts that to a total mass in kg or Gt.

When annual accumulation exceeds annual ablation, bₙ is positive: the glacier thickens and eventually advances its terminus. When ablation exceeds accumulation, bₙ is negative: the glacier thins throughout and the terminus retreats upvalley. The equilibrium line altitude (ELA) is the elevation where annual accumulation exactly equals annual ablation. Below the ELA lies the ablation zone (net loss, blue glacier ice exposed by melt); above it lies the accumulation zone (net gain, firn preserved year to year). A rising ELA — driven by warming temperatures — shrinks the accumulation zone and is the primary mechanism by which climate change reduces glacier mass.

Global glacier mass loss now averages approximately −280 Gt per year, contributing roughly 0.74 mm per year to global mean sea level rise over the period 2000–2019 (Hugonnet et al., 2021). This is among the three largest contributors to observed sea level rise, alongside thermal expansion and ice-sheet discharge. Benchmark glacier programs — including South Cascade (Washington), Gulkana and Wolverine (Alaska), and Blue (Ontario) — have maintained continuous mass balance records since the 1950s–1960s, providing ground-truth for satellite and model estimates. South Cascade Glacier\'s cumulative mass balance record now stands near −30 m w.e. since 1960, one of the most dramatic sustained losses in the benchmark network.

Mass balance measurements also reveal teleconnections between glaciers and regional climate. Maritime glaciers in Alaska and Patagonia respond rapidly to Pacific sea-surface temperature anomalies (PDO, ENSO). Scandinavian glaciers are sensitive to North Atlantic Oscillation phases that shift winter precipitation patterns. Himalayan glaciers show complex responses that differ from the global trend — some Karakoram glaciers have advanced (the \'Karakoram anomaly\') due to increased winter westerly precipitation. Specific net balance is the annual snapshot; cumulative mass balance integrates every annual value and reveals the long-term trajectory of glacier health.`,
      keyTerms: [
        {
          term: 'mass balance',
          def: 'The net difference between accumulation and ablation over a balance year, expressed in metres of water equivalent (m w.e.).',
        },
        {
          term: 'accumulation',
          def: 'All processes that add mass to a glacier: snowfall, avalanche input, wind redistribution, and refreezing of percolation water.',
        },
        {
          term: 'ablation',
          def: 'All processes that remove mass from a glacier: surface melting and runoff, calving of icebergs, and sublimation.',
        },
        {
          term: 'specific net balance',
          def: 'Annual mass balance per unit area of a glacier, expressed in m water equivalent (m w.e./yr). Positive = gaining mass; negative = losing mass.',
        },
        {
          term: 'equilibrium line altitude',
          def: 'The elevation where annual accumulation exactly equals annual ablation. Divides accumulation zone (above) from ablation zone (below).',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Mass Balance Processes and Measurement',
      body: `Understanding how mass enters and leaves a glacier — and how scientists measure those fluxes — is central to interpreting glacier change in the context of climate. Accumulation and ablation are governed by different physical processes and respond to climate variables in different ways. Measurement methods each capture different components of mass change with different spatial and temporal resolution.`,
      cards: [
        {
          name: 'Accumulation Processes',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Winter snowfall, avalanche input, wind redistribution, freezing rain, and refreezing percolation water add mass above and below the ELA; snowfall is the dominant input in most glaciers.',
          examples: 'Avalanche input can contribute 30–70% of total accumulation in avalanche-prone cirque glaciers · Wind redistribution concentrates snow in lee hollows and strips exposed ridges, creating highly non-uniform accumulation · Superimposed ice forms when meltwater percolates to the cold firn layer and refreezes, contributing mass',
        },
        {
          name: 'Ablation Processes',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Surface melting (dominant in most glaciers), calving (dominant in tidewater/marine-terminating glaciers), sublimation (significant in cold polar and high-altitude settings), and subaqueous melt; energy balance controls surface melt.',
          examples: 'Turbulent heat exchange (sensible + latent heat) can exceed net radiation in summer ablation · Calving from marine-terminating outlet glaciers accounts for ~50% of Greenland\'s total mass loss · Sublimation at the dry Sahara-altitude glaciers of the tropical Andes can account for 30–50% of ablation',
        },
        {
          name: 'Mass Balance Measurement Methods',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Glaciological method (stake networks + snow pits), geodetic method (DEM differencing from lidar/satellite), gravimetric method (GRACE/GRACE-FO), and flux-gate method for marine outlets; each has strengths and errors.',
          examples: 'GRACE satellite detects monthly ice sheet mass changes with precision of ~10 Gt globally · Geodetic mass balance from ICESat-2 laser altimetry has ±0.01 m ice-eq/yr precision · The glaciological method requires >20 stakes per glacier for statistically robust spatial interpolation',
        },
        {
          name: 'Glacier Response to Climate: Lag and Sensitivity',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Glaciers respond to climate through a response time (e-folding time) that scales with thickness and mass turnover; small thin glaciers respond in decades; large ice sheets in centuries to millennia.',
          examples: 'Alpine glaciers have response times of 10–100 years — they are already committed to future retreat from past warming · The specific balance sensitivity of maritime glaciers (~−1.5 m/°C) exceeds that of continental glaciers (~−0.5 m/°C) per degree of warming · Cumulative mass balance records (e.g., South Cascade Glacier: −30 m w.e. since 1960) show accelerating loss',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Glacier Mass Balance System: Annual Flow of Mass',
      body: 'Track how snow and ice move through the mass balance system of a mountain glacier over one year.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Track how snow and ice move through the mass balance system of a mountain glacier over one year',
        nodes: [
          {
            id: 'winter-precip',
            label: 'Winter Precipitation',
            description: 'Snowfall and avalanche input add mass above the ELA. Peak accumulation season.',
            color: BRAND.accent,
          },
          {
            id: 'accumulation-zone',
            label: 'Accumulation Zone',
            description: 'Net annual mass gain. Firn preserved year to year. ELA is upper boundary.',
            color: BRAND.jade,
          },
          {
            id: 'ela',
            label: 'Equilibrium Line Altitude (ELA)',
            description: 'Where annual accumulation equals ablation. Divides accumulation and ablation zones.',
            color: BRAND.accentHot,
          },
          {
            id: 'ablation-zone',
            label: 'Ablation Zone',
            description: 'Net annual mass loss. Blue glacier ice exposed by melt. Stakes measure melt.',
            color: BRAND.gold,
          },
          {
            id: 'melt-runoff',
            label: 'Melt & Runoff',
            description: 'Summer ablation: energy balance drives surface melt. Water runs off to proglacial streams.',
            color: BRAND.coral,
          },
          {
            id: 'terminus',
            label: 'Terminus / Calving Front',
            description: 'Final mass loss: calving, sublimation, or terminal melt. Net mass balance closes here.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'winter-precip',     to: 'accumulation-zone', label: 'Snowfall adds mass' },
          { from: 'accumulation-zone', to: 'ela',                label: 'Firn flows downglacier' },
          { from: 'ela',               to: 'ablation-zone',      label: 'Ice below ELA melts' },
          { from: 'ablation-zone',     to: 'melt-runoff',        label: 'Surface energy balance' },
          { from: 'accumulation-zone', to: 'terminus',           label: 'Glacier advance if +ve balance' },
          { from: 'melt-runoff',       to: 'terminus',           label: 'Net negative → retreat' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A glacier has an annual accumulation of 2.5 m w.e. and annual ablation of 3.2 m w.e. What is the specific net balance, and what does this imply for the glacier?',
          a: [
            '−0.7 m w.e.; the glacier is losing mass and will tend to retreat',
            '+0.7 m w.e.; the glacier is gaining mass and will tend to advance',
            '−3.2 m w.e.; total ablation determines glacier health',
            'The balance cannot be determined without knowing the glacier\'s area',
          ],
          correct: 0,
          explain: `Specific net balance (bₙ) is calculated as accumulation minus ablation: bₙ = 2.5 − 3.2 = −0.7 m water equivalent per year. A negative net balance means the glacier loses more mass annually than it gains. Over time, this leads to thinning of the glacier throughout (not just at the terminus) and eventual retreat of the terminus upvalley. Expressed as a glacier-wide mass balance (B = bₙ × area), this gives the total mass change in tonnes or Gt/yr. A sustained negative mass balance over decades leads to progressive shortening, thinning, and eventual complete loss of small glaciers. The value "−0.7 m w.e./yr" is approximately the global average for mountain glaciers over 2000–2019, representing an accelerating trend of mass loss.`,
        },
        {
          q: 'Which method of measuring glacier mass balance is best suited to detecting rapid, short-term changes in ice sheet mass and does not require fieldwork on the ice?',
          a: [
            'Glaciological method using stake networks and snow pits',
            'Gravimetric method using the GRACE/GRACE-FO satellite pair, which detects changes in Earth\'s gravity field from mass redistribution',
            'Geodetic method using repeat topographic surveys',
            'Flux-gate method measuring ice discharge through cross-sections',
          ],
          correct: 1,
          explain: `The GRACE (Gravity Recovery and Climate Experiment) and successor GRACE-FO satellite missions detect changes in Earth\'s gravitational field at monthly resolution with global coverage. Large mass changes in ice sheets and glaciers shift the local gravity signal measurably. GRACE detects mass changes as small as ~10 Gt over large regions — approximately equivalent to a 1 cm layer of water over a 1,000 km² area. This approach requires no fieldwork and captures all forms of mass change simultaneously (surface melt, calving, basal melt, snowfall). The primary limitation is spatial resolution (~300 km), making it unsuitable for individual mountain glaciers but ideal for ice sheets and large regional glacier systems. GRACE showed Greenland losing ~270 Gt/yr and Antarctica ~150 Gt/yr over 2003–2016.`,
        },
        {
          q: 'Maritime glaciers (e.g., in Alaska, Norway, Patagonia) have much higher mass balance sensitivity to temperature than continental glaciers (e.g., in the Canadian Arctic). Why?',
          a: [
            'Maritime glaciers are located closer to the ocean and therefore receive more solar radiation',
            'Maritime glaciers have much higher mass turnover (accumulation and ablation both several metres per year), so temperature changes drive proportionally larger absolute mass changes',
            'Continental glaciers have more crevasses that drain meltwater efficiently, reducing ablation',
            'Maritime glaciers are at lower elevations where temperature is always above freezing',
          ],
          correct: 1,
          explain: `Mass balance sensitivity (db/dT) quantifies how much specific net balance changes per degree Celsius warming. Maritime glaciers in high-precipitation climates (Alaska, Norway, Patagonia) can have annual accumulation and ablation rates of 3–8 m w.e./yr — the high mass turnover means the energy required to shift the balance significantly is small compared to the total fluxes. A 1°C warming raises the ELA, converting a large fraction of former accumulation area to ablation, removing a large volume of high-turnover ice from the budget. Continental glaciers in dry, cold climates have turnover rates of only 0.2–0.5 m w.e./yr; the same warming raises the ELA less (because ablation per degree is smaller) and removes less high-accumulation area. The Patagonian icefields and Alaska\'s Juneau Icefield are among the world\'s largest contributors to sea level rise per unit area precisely because of this high sensitivity.`,
        },
        {
          q: 'What is "glacier response time" and why does it matter for predicting future glacier change?',
          a: [
            'The time between a climate forcing and the first measurable change in mass balance',
            'The e-folding time scale over which a glacier adjusts its geometry to a new climate — scales with thickness divided by ablation rate',
            'The time required for a glacier to travel from accumulation zone to terminus',
            'The time between satellite overflights used for geodetic mass balance measurements',
          ],
          correct: 1,
          explain: `Glacier response time (τ ≈ H/ȧ, where H is ice thickness and ȧ is specific ablation rate) characterises how quickly a glacier\'s geometry (length, area, volume) adjusts to a step change in climate. Small, thin, high-turnover glaciers (e.g., tropical glaciers with H ~100 m, ȧ ~1–2 m/yr) have response times of 50–100 years. Large, cold, slow glaciers (H ~500 m, ȧ ~0.3 m/yr) have response times of several centuries. This matters because it means current glacier geometry reflects not just today\'s climate but integrated past climate — many glaciers are still adjusting to 20th century warming and are committed to further retreat even if warming stops now ("committed retreat"). Projections must account for this lag, which means stated glacier losses underestimate the ultimate equilibrium response to ongoing emissions.`,
        },
        {
          q: 'GRACE satellite data shows the Greenland Ice Sheet losing mass at approximately 270 Gt/yr. What is the equivalent contribution to global sea level rise?',
          a: [
            'About 0.01 mm/yr — ice sheet losses are too distributed to matter for sea level',
            'About 0.75 mm/yr — representing roughly one-quarter of the total observed sea level rise rate',
            'About 3.5 mm/yr — Greenland alone accounts for most of sea level rise',
            'About 7.5 mm/yr — consistent with projections of 1–2 m sea level rise by 2100',
          ],
          correct: 1,
          explain: `Converting ice mass loss to sea level rise uses the relationship: 1 mm sea level rise = ~362 Gt of ice (mass of a 1 mm layer over the ocean area of 3.62 × 10¹⁴ m²). Therefore, 270 Gt/yr ÷ 362 Gt/mm ≈ 0.75 mm/yr. This is one of the three major contributors to observed global mean sea level rise of ~3.6 mm/yr (2006–2015): thermal expansion (~1.4 mm/yr), mountain glaciers (~0.9 mm/yr), and ice sheets (Greenland ~0.75 + Antarctica ~0.4 = ~1.2 mm/yr combined). Greenland\'s contribution has accelerated from ~0.4 mm/yr in 1992–2001 to ~0.8 mm/yr in 2012–2016. By 2100, Greenland alone is projected (IPCC AR6) to contribute 0.06–0.13 m under intermediate scenarios, with larger contributions under high-emissions pathways.`,
        },
      ],
    },
  ],
}

export default glacierMassBalance
