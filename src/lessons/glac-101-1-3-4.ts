import { Layers, Globe, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const iceCoresPaleoclimate: Lesson = {
  id: 'glac-101-1-3-4',
  title: 'Ice Cores and Paleoclimate: Reading Frozen Archives',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: `How ice cores from Antarctica and Greenland preserve 800,000-year records of temperature, greenhouse gases, and atmospheric dust — and what they reveal about Earth\'s climate cycles`,
  sources: [
    { org: 'NSIDC', title: 'NSIDC — Ice Core Paleoclimatology',                                              url: 'https://nsidc.org' },
    { org: 'NOAA', title: 'NOAA — National Centers for Environmental Information: Paleoclimatology',         url: 'https://ncei.noaa.gov/access/paleo-search' },
    { org: 'PAGES', title: 'PAGES — Past Global Changes',                                                    url: 'https://pastglobalchanges.org' },
    { org: 'BAS',  title: 'BAS — British Antarctic Survey Ice Core Research',                                url: 'https://bas.ac.uk' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Drilling back 800,000 years: what trapped bubbles, dust, and chemistry reveal about Earth\'s climate`,
      body: `Ice cores drilled from the Antarctic and Greenland ice sheets are among the most information-rich climate archives on Earth. Each annual layer of ice preserves a snapshot of the atmosphere at the time the snow fell. Stable water isotopes — δ¹⁸O (oxygen-18 to oxygen-16 ratio) and δD (deuterium to hydrogen ratio) — record the temperature at which precipitation condensed: colder temperatures produce more negative isotope values through Rayleigh distillation as heavy isotopes rain out preferentially during poleward vapour transport. When firn compacts to ice at pore close-off depth (~830 kg/m³), air bubbles are sealed inside, locking in the atmospheric composition at that moment — providing direct measurements of past CO₂, CH₄, and N₂O concentrations. Dust layers in the ice record aeolian transport from arid source regions: glacial periods show dust fluxes 10–25× higher than interglacials, reflecting expanded deserts and stronger winds. Volcanic tephra layers and sulphate spikes from major eruptions provide precise age markers (isochrons) used to synchronise and date ice core chronologies. Sea salt records storminess and sea ice extent; black carbon records fire activity across continents.

The major ice core sites span a range of time depths and resolutions. The Soviet/Russian Vostok core (East Antarctica) extended the continuous climate record to 420,000 years and four glacial-interglacial cycles when it was completed in 1998. The EPICA (European Project for Ice Coring in Antarctica) Dome C core, drilled to 3,270 m depth and completed in 2004, extended the record to 800,000 years — eight complete glacial cycles. The NEEM (North Greenland Eemian Ice Drilling) core captured the Last Interglacial (Marine Isotope Stage 5e, ~125,000 BP) at high resolution, revealing Greenland temperatures 3–5°C warmer than pre-industrial during that period when global sea level was ~6 m higher. The WAIS Divide core in West Antarctica provides the last 68,000 years at near-annual resolution, enabling precise comparison with Greenland records of abrupt climate events (Dansgaard-Oeschger cycles).

Over 800,000 years, atmospheric CO₂ oscillated between approximately 180 ppm (deep glacial maxima) and 280–300 ppm (interglacial peaks) — a natural range of ~100 ppm. Current atmospheric CO₂ (>420 ppm in 2023) is approximately 50% above the highest natural value in 800,000 years of ice core records and is rising at ~2.5 ppm/year — a rate with no precedent in the entire ice core archive. These glacial-interglacial cycles are paced by Milankovitch orbital forcing: eccentricity cycles (~100,000 years) modulate the shape of Earth\'s orbit around the Sun; obliquity cycles (~41,000 years) modulate the tilt of Earth\'s rotational axis; precession cycles (~23,000 years) modulate the timing of perihelion relative to the seasons. The 100 kyr eccentricity cycle dominates the last 800,000 years of the isotope record, but this cycle has very small direct insolation forcing — indicating that ice sheet–CO₂–albedo feedbacks amplify the weak orbital signal. Before the Mid-Pleistocene Transition (~1.2–0.7 million years ago), the dominant glacial cycle was 41 kyr (obliquity), suggesting a fundamental change in ice sheet dynamics or long-term CO₂ trajectory.`,
      keyTerms: [
        {
          term: 'stable isotope (δ¹⁸O)',
          def: 'Ratio of ¹⁸O to ¹⁶O in ice, expressed relative to a standard (SMOW). More negative values indicate colder condensation temperatures through Rayleigh distillation.',
        },
        {
          term: 'air bubble proxy',
          def: 'Atmospheric gas sealed in ice at pore close-off (~830 kg/m³ firn density); provides direct measurements of past CO₂, CH₄, and N₂O concentrations.',
        },
        {
          term: 'Milankovitch cycle',
          def: `Orbital cycles modulating Earth\'s insolation: eccentricity (~100 kyr), obliquity (~41 kyr), precession (~23 kyr); pacemaker of glacial-interglacial cycles.`,
        },
        {
          term: 'ice age cycle',
          def: 'Glacial-interglacial oscillation of ~100,000 years dominant over last 800,000 years; driven by orbital forcing amplified by CO₂ and ice-albedo feedbacks.',
        },
        {
          term: 'tephra layer',
          def: 'Volcanic ash or sulphate spike deposited globally after major eruptions; provides precise isochronous age markers for correlating and dating ice core records.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Glaciological Proxies and Ice Age Dynamics',
      body: `Ice cores preserve multiple independent climate proxies in the same archive: isotopes for temperature, bubbles for greenhouse gases, dust for aridity, tephra for dating, and sea salt for storminess. The combination allows reconstruction of a comprehensive climate state at each depth. Understanding how each proxy is formed and calibrated is essential to interpreting the 800,000-year record and placing current climate change in its long-term context.`,
      cards: [
        {
          name: 'Stable Isotopes: Thermometers in Ice',
          icon: Layers,
          color: BRAND.accent,
          desc: 'water molecules containing ¹⁸O or D (deuterium) are heavier than those with ¹⁶O or H; heavier isotopes preferentially condense at lower temperatures, so δ¹⁸O and δD values in ice are proxies for temperature at the time of snowfall; calibrated against modern spatial gradients',
          examples: 'A 1°C cooling corresponds to approximately −0.67‰ change in δ¹⁸O in Greenland ice (spatial gradient). EPICA Dome C δD record shows glacial periods 8–10°C colder than the present Holocene at the Antarctic plateau. The Last Interglacial (Marine Isotope Stage 5e, ~125,000 BP) shows δ¹⁸O values in Greenland implying temperatures 3–5°C warmer than pre-industrial, consistent with ~6 m higher sea level.',
        },
        {
          name: 'Trapped Air Bubbles: The Greenhouse Gas Archive',
          icon: Globe,
          color: BRAND.jade,
          desc: 'when firn reaches pore close-off (~830 kg/m³), air bubbles are sealed; extracting and analysing bubble gas gives direct measurements of past atmospheric CO₂, CH₄, and N₂O concentrations at the time of sealing — the only direct record of past atmospheric composition beyond instrumental measurements',
          examples: 'EPICA Dome C bubbles show CO₂ oscillated 180–280 ppm over 800,000 years, always correlated with Antarctic temperature. CH₄ concentrations (160–750 ppb over 800 kyr) closely track Northern Hemisphere summer insolation and wetland extent. Current atmospheric CO₂ (>420 ppm) is 50% above the highest level in 800,000 years of ice core records — clearly outside natural variability.',
        },
        {
          name: 'Dust, Tephra, and Chemical Tracers',
          icon: Activity,
          color: BRAND.coral,
          desc: 'aeolian dust flux in ice cores records atmospheric dust loading and aridity in source regions; volcanic tephra layers provide precise age markers (isochrons) for chronological correlation between cores; sea salt records storminess; black carbon records fire activity',
          examples: 'Dust flux in Antarctic ice was 10–25× higher during glacial periods than interglacials — reflecting expanded deserts, stronger winds, and reduced vegetation cover globally. The 1815 Tambora eruption tephra appears as a volcanic sulphate spike in Greenland ice cores, providing a perfect annual chronological anchor used to calibrate ice core chronologies. The Laschamp geomagnetic excursion (~41,000 BP) appears as a ¹⁰Be (cosmogenic nuclide) peak in Greenland ice, providing an independent age marker.',
        },
        {
          name: 'Ice Age Cycles and Milankovitch Forcing',
          icon: Zap,
          color: BRAND.gold,
          desc: 'orbital cycles modulate insolation: eccentricity (~100 kyr), obliquity (~41 kyr), precession (~23 kyr); the 100 kyr glacial-interglacial cycle dominates the last 800,000 years; ice sheet feedbacks (albedo, CO₂) amplify weak orbital forcing into full glacial cycles; the 41 kyr cycle dominated before ~1 million years ago (Mid-Pleistocene Transition)',
          examples: 'The EPICA Dome C record shows 8 complete glacial-interglacial cycles in 800,000 years, each ~100,000 years long and driven by eccentricity. The correlation between CO₂ and Antarctic temperature in EPICA is r ≈ 0.92 — a remarkably tight relationship across 8 cycles. The Mid-Pleistocene Transition (~1.2–0.7 Ma) saw a shift from 41 kyr to 100 kyr glacial cycles — possibly linked to changing ice sheet dynamics or long-term CO₂ drawdown.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Snowflake to Climate Archive: The Ice Core Preservation Chain',
      body: 'Follow how climate signals are preserved in falling snow, buried in ice, and extracted from cores drilled thousands of years later',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow how climate signals are preserved in falling snow, buried in ice, and extracted from cores drilled thousands of years later',
        nodes: [
          {
            id: 'snowfall-deposition',
            label: 'Snowfall Deposition',
            description: 'Snow carries atmospheric signals: isotopic composition (temperature), dust (aridity), sea salt (storminess), volcanic aerosols.',
            color: BRAND.accent,
          },
          {
            id: 'firn-preservation',
            label: 'Firn Layer Preservation',
            description: 'Annual snow layers compact to firn. Visible seasonal layering. Chemistry partially preserved.',
            color: BRAND.jade,
          },
          {
            id: 'pore-closeoff',
            label: 'Pore Close-off (Air Trapping)',
            description: 'At ~830 kg/m³ depth, air bubbles seal. Atmospheric composition locked in at time of closure.',
            color: BRAND.accentHot,
          },
          {
            id: 'deep-ice-archive',
            label: 'Deep Ice Archive (10,000s–800,000 years)',
            description: 'Annual layers thin under compression. Each cm of deep ice may contain centuries of climate record.',
            color: BRAND.gold,
          },
          {
            id: 'ice-core-drilling',
            label: 'Ice Core Drilling',
            description: 'Hollow drill collects ~10 cm diameter core. Stored at −20°C. Shipped to labs worldwide.',
            color: BRAND.coral,
          },
          {
            id: 'proxy-analysis',
            label: 'Proxy Analysis and Climate Reconstruction',
            description: 'δ¹⁸O/δD (temperature), CO₂/CH₄ (greenhouse gases), dust (aridity), tephra (dating). 800,000-year record assembled.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'snowfall-deposition', to: 'firn-preservation',  label: 'Burial by subsequent snowfall' },
          { from: 'firn-preservation',   to: 'pore-closeoff',      label: 'Densification over decades to centuries' },
          { from: 'pore-closeoff',       to: 'deep-ice-archive',   label: 'Ice flow buries archive deeper' },
          { from: 'deep-ice-archive',    to: 'ice-core-drilling',  label: 'Drill extracts archived ice' },
          { from: 'ice-core-drilling',   to: 'proxy-analysis',     label: 'Laboratory measurements' },
          { from: 'firn-preservation',   to: 'proxy-analysis',     label: 'Visible layers counted for annual chronology' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The EPICA Dome C ice core extends 800,000 years into the past. What is the maximum extent of the CO₂ record it contains, and how does pre-industrial CO₂ compare to today?',
          a: [
            'CO₂ ranged 280–380 ppm; today\'s 420 ppm is only slightly above the natural range',
            'CO₂ ranged 180–280 ppm over 800,000 years, oscillating with glacial cycles; today\'s >420 ppm is ~50% above the maximum of the entire 800,000-year natural record',
            'CO₂ ranged 100–180 ppm; even pre-industrial CO₂ of 280 ppm was above the natural range',
            'CO₂ ranged 180–420 ppm — today\'s values are at the high end but within the natural range',
          ],
          correct: 1,
          explain: 'The EPICA (European Project for Ice Coring in Antarctica) Dome C core, drilled to 3,270 m depth in Antarctica, contains trapped air bubbles spanning 800,000 years and eight complete glacial-interglacial cycles. CO₂ concentrations oscillated between ~180 ppm (deep glacial conditions) and ~280–300 ppm (interglacial peaks). This 100-ppm glacial-interglacial CO₂ swing is itself partly a feedback on orbital forcing — as ice ages cool the ocean, it absorbs more CO₂, and as it warms during interglacials, it releases CO₂, amplifying the warming. Pre-industrial CO₂ (~280 ppm in 1750) was at the upper end of this natural range. Current CO₂ (>420 ppm in 2023) is ~50% above the highest natural value in 800,000 years — and rising at ~2.5 ppm/yr, a rate of increase that has no precedent in the ice core record.',
        },
        {
          q: 'The δ¹⁸O value of ice at a given depth in an ice core records past temperature. What is the physical reason why colder temperatures produce more negative δ¹⁸O values?',
          a: [
            'Cold ice forms from older water that has decayed toward lower ¹⁸O concentrations over thousands of years',
            'As water vapour cools during transport poleward and aloft, heavier isotopes (H₂¹⁸O) preferentially condense and rain out first; by the time water vapour reaches cold polar regions, it is strongly depleted in ¹⁸O, producing very negative δ¹⁸O values in polar precipitation',
            'Cold temperatures favour ¹⁶O over ¹⁸O during photosynthesis in marine organisms, reducing ocean ¹⁸O that feeds the water cycle',
            'Glacial ice simply has lower ¹⁸O content because it forms from snow, which is less dense than rain water',
          ],
          correct: 1,
          explain: 'The isotopic fractionation occurs through Rayleigh distillation. Water evaporates preferentially as ¹H₂¹⁶O (lighter) over ¹H₂¹⁸O (heavier). As the water vapour mass moves poleward and cools, it rains out progressively; heavier molecules condense preferentially, leaving the remaining vapour increasingly depleted in ¹⁸O. The colder the condensation temperature, the stronger this fractionation effect. At a polar site like Vostok (−55°C mean annual temperature), the precipitation is extremely depleted in ¹⁸O (δ¹⁸O ~ −55 to −60‰ SMOW) compared to tropical precipitation (δ¹⁸O ~ −5 to 0‰). During a glaciation, when polar temperatures drop a further 5–10°C, δ¹⁸O shifts by approximately −3 to −7‰. This temperature-δ¹⁸O relationship is calibrated using modern spatial gradients and borehole thermometry, allowing quantitative temperature reconstruction.',
        },
        {
          q: 'Gas bubbles in deep ice cores have a different age than the surrounding ice at the same depth. Why is the gas age always younger than the ice age at a given depth?',
          a: [
            'Gases diffuse upward through the ice after trapping, rejuvenating their apparent age relative to the ice',
            'Air remains in communication with the atmosphere via open firn pores until pore close-off (at ~830 kg/m³), which occurs at a depth below the surface corresponding to decades to centuries after the ice at that depth was deposited as snow — creating a gas age–ice age offset (Δage)',
            'Colder temperatures delay gas trapping, making the gas in cold climates seem younger than expected',
            'Drilling friction generates heat that causes gas to slowly migrate toward younger ice layers',
          ],
          correct: 1,
          explain: 'The gas age-ice age offset (Δage) arises because ice closes off at a depth well below the surface. At high-accumulation Greenland sites (e.g., NEEM), firn reaches pore close-off in ~40–100 years at ~60–80 m depth — Δage ≈ 40–100 years. At low-accumulation Antarctic sites (e.g., Vostok), firn reaches close-off after ~2,000–5,000 years at ~90–100 m — Δage ≈ 2,000–5,000 years. This means that when comparing atmospheric CO₂ (gas record) with Antarctic temperature (ice δ¹⁸O record), the gas record must be shifted by Δage. This offset is critical for determining whether CO₂ leads or lags temperature — current understanding is that orbital forcing drives initial temperature change, which drives CO₂ release from the ocean, which amplifies further warming (a feedback, not a forcing). The Δage correction is one of the most technically challenging aspects of ice core chronology.',
        },
        {
          q: 'The EPICA Dome C record shows that Antarctic temperature and atmospheric CO₂ track each other closely over 800,000 years. What does this reveal about the relationship between CO₂ and temperature?',
          a: [
            'CO₂ always leads temperature by several thousand years, proving it is the primary driver of ice age cycles',
            'CO₂ and temperature are correlated (r ~ 0.92) over 800,000 years, consistent with CO₂ acting as an amplifying feedback to orbital forcing rather than a primary driver — slight leads and lags are both observed',
            'Temperature always leads CO₂ by several thousand years, proving that temperature drives CO₂ and CO₂ has no role in climate',
            'The correlation is spurious — CO₂ and temperature happen to cycle at similar frequencies due to independent orbital forcing of each',
          ],
          correct: 1,
          explain: `The CO₂-temperature relationship in EPICA has been extensively analysed. On orbital timescales, the initial response to changing insolation (obliquity and precession) appears in temperature first, with CO₂ lagging by ~0–1,000 years at glacial terminations. This has sometimes been misinterpreted as \'temperature causes CO₂,\' but this is incomplete: the initial trigger is orbital forcing (insolation), which slightly warms the ocean, releasing dissolved CO₂ (solubility decreases with temperature). The CO₂ increase then acts as a powerful positive feedback, amplifying the warming through the greenhouse effect. Without CO₂ feedback, orbital forcing alone cannot produce the full 8–10°C amplitude of glacial cycles. The tight correlation (r ≈ 0.92) over 800,000 years demonstrates that CO₂ and temperature are intimately coupled — and that the current rapid CO₂ rise from fossil fuel combustion represents a fundamentally different forcing than any seen in the ice core record.`,
        },
        {
          q: `Volcanic tephra layers in ice cores serve as \'time markers\' for chronological correlation. How can a single tephra layer help correlate records from Greenland and Antarctic ice cores?`,
          a: [
            'Tephra layers always produce identical chemical signatures worldwide, allowing any core to be dated to within ±10 years',
            'Major volcanic eruptions inject SO₂ globally, producing distinctive sulphate spikes in ice cores worldwide that are synchronous (same eruption, same year) and can be geochemically fingerprinted — allowing independent dating and correlation between widely separated cores',
            'Tephra layers slow ice flow, creating distinctive depth anomalies detectable in all nearby cores',
            'Tephra always contains enough U-series isotopes for radiometric dating, providing absolute ages',
          ],
          correct: 1,
          explain: `Large volcanic eruptions inject SO₂ (and sometimes tephra particles) into the stratosphere, where it oxidises to sulphuric acid (H₂SO₄) aerosol. This aerosol is globally distributed within 1–2 years, depositing a sulphate spike in both polar ice sheets. The spike can be detected by continuous electrical conductivity measurement (ECM) of ice cores. Additionally, visible tephra (glass shards) with distinctive major-element geochemistry can be extracted from the ice and matched to specific volcanic sources via electron microprobe analysis. The 1257 Samalas (Indonesia), 1815 Tambora, and 1783 Laki (Iceland) eruptions appear as sulphate peaks in both Greenland and Antarctic cores at the same calendar year, providing synchronisation points with annual to sub-annual precision. This \'tephrochronology\' approach is fundamental to ice core chronology and enables comparison of climate signals between the two hemispheres.`,
        },
      ],
    },
  ],
}

export default iceCoresPaleoclimate
