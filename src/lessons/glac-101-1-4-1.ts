import { BarChart, Activity, Globe, Droplets, TrendingDown } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const measuringGlacierRetreat: Lesson = {
  id: 'glac-101-1-4-1',
  title: 'Measuring Glacier Retreat: Mass Balance and Remote Sensing',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'Glaciers worldwide are losing mass at accelerating rates — but how do scientists actually measure this? From stakes drilled into the ice to satellites weighing entire ice sheets from orbit, this lesson explores the methods that quantify glacier retreat and what the data reveal about the pace and scale of cryosphere change.',
  sources: [
    { org: 'WGMS',    title: 'World Glacier Monitoring Service — Global Glacier Change Bulletin',            url: 'https://wgms.ch' },
    { org: 'NASA',    title: 'NASA — ICESat-2 Mission: Ice, Cloud, and Land Elevation Satellite',           url: 'https://icesat-2.gsfc.nasa.gov' },
    { org: 'GRACE',   title: 'NASA GRACE-FO — Gravity Recovery and Climate Experiment Follow-On',          url: 'https://gracefo.jpl.nasa.gov' },
    { org: 'NSIDC',   title: 'NSIDC — State of the Cryosphere: Mountain Glaciers',                         url: 'https://nsidc.org/cryosphere/sotc/glacier.html' },
    { org: 'IPCC',    title: 'IPCC AR6 WGI — Chapter 9: Ocean, Cryosphere and Sea Level Change (2021)',    url: 'https://www.ipcc.ch/report/ar6/wg1/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Weighing glaciers from space: from ablation stakes to gravity anomalies',
      body: `A glacier gains mass through **accumulation** — snowfall, avalanche deposition, and wind-blown drift — and loses it through **ablation** — melt, evaporation/sublimation, and calving of icebergs. The **mass balance** is the net difference between these two fluxes, expressed in metres of water equivalent (m w.e.) per year or in gigatonnes (Gt, 10⁹ metric tonnes). A glacier in equilibrium has zero net mass balance over a multi-year average. A glacier losing more mass than it gains has a negative mass balance and is retreating. The **equilibrium line altitude (ELA)** is the elevation at which annual accumulation equals annual ablation — above the ELA lies the accumulation zone (net gain); below it, the ablation zone (net loss). As climate warms, the ELA rises, shrinking the accumulation zone and expanding the ablation zone, ultimately causing the glacier to thin and retreat. The ELA is one of the most sensitive indicators of climate change on a glacier surface.

The classic method for measuring mass balance is the **glaciological method**: a network of stakes drilled into the ice at different elevations records surface height change each season, while snow pits measure accumulation. When integrated over the glacier's hypsometry (area-elevation distribution), stake readings yield a winter mass balance (accumulation season) and a summer mass balance (ablation season), summing to the net annual balance. This method provides high temporal resolution but covers only the limited number of glaciers where permanent monitoring networks exist. The **World Glacier Monitoring Service (WGMS)** coordinates the global network of **reference glaciers** — currently around 40 glaciers with continuous records exceeding 30 years on every glaciated continent — and publishes standardised mass balance data that form the backbone of global assessments. The longest continuous record belongs to Storglaciären in northern Sweden, monitored since 1946.

The **geodetic mass balance** method uses repeat surface topography surveys — from airborne LiDAR, terrestrial radar, or satellite altimetry — to directly measure volume change, which is then converted to mass change using a density assumption (~900 kg/m³ for ice, ~600–700 kg/m³ for mixed firn/ice). **ICESat-2** (NASA, launched 2018) uses a 532-nm green laser photon-counting system to measure ice surface elevations with centimetre-level precision and ~91-day repeat coverage over both poles. **TanDEM-X** (DLR, ESA) produces a near-global Digital Elevation Model from bistatic radar interferometry, enabling centimetre-scale change detection over multi-year periods. The **GRACE** and **GRACE-FO** satellite gravity missions (2002–present) offer a fundamentally different approach: they measure tiny changes in Earth's gravity field caused by redistribution of mass at the surface. As ice sheets and glaciers lose mass, the local gravitational pull weakens, and the twin GRACE satellites — flying 220 km apart — detect this by measuring changes in their separation to within 1 micron. GRACE data show **Greenland losing approximately 270 Gt/yr** and **Antarctica losing approximately 150 Gt/yr** averaged over the 2002–2022 period, with both rates accelerating since the 1990s.

The scale of global glacier loss is now well-quantified. Swiss Alpine glaciers have lost approximately **60% of their total volume since 1850**, and the current loss rate (~1–2% of remaining volume per year) means that two-thirds of remaining Swiss glacier volume will be gone by 2100 under moderate emissions scenarios. The Himalayan and Karakoram ranges — sometimes called the **"Third Pole"** — contain the largest ice mass outside the polar regions and supply meltwater to rivers that provide freshwater to approximately **1.9 billion people** across South and East Asia. WGMS reference glacier data show that globally, the average specific mass balance of monitored glaciers has become increasingly negative since the 1970s, with the 2010–2020 decade recording the most negative decade-mean mass balance in the instrumental record.`,
      keyTerms: [
        {
          term: 'mass balance',
          def: 'The net difference between mass gained through accumulation (snowfall, wind-blown snow) and mass lost through ablation (melt, sublimation, calving), expressed in metres of water equivalent (m w.e.) per year or gigatonnes (Gt).',
        },
        {
          term: 'equilibrium line altitude (ELA)',
          def: 'The elevation on a glacier where annual accumulation exactly equals annual ablation; the boundary between the upper accumulation zone (net gain) and the lower ablation zone (net loss). A rising ELA signals glacier mass loss.',
        },
        {
          term: 'geodetic mass balance',
          def: 'Mass balance derived from repeat surface topography measurements (LiDAR, satellite altimetry, radar) that directly measure volume change; converted to mass using ice/firn density assumptions. Independent of the glaciological stake network.',
        },
        {
          term: 'ICESat-2',
          def: 'NASA Ice, Cloud and Land Elevation Satellite-2 (launched 2018); uses green-laser photon counting to measure ice surface elevations with centimetre precision at 91-day repeat intervals over both poles.',
        },
        {
          term: 'GRACE gravity anomaly',
          def: 'Changes in Earth\'s gravity field detected by the twin GRACE/GRACE-FO satellites as ice sheets and glaciers gain or lose mass; enables direct mass balance measurement of entire ice sheets without surface surveys.',
        },
        {
          term: 'WGMS reference glacier',
          def: 'One of approximately 40 glaciers worldwide with continuous mass balance records exceeding 30 years, coordinated by the World Glacier Monitoring Service to provide a standardised baseline for global climate assessments.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Methods for Measuring Glacier Mass Change',
      body: `Three broad observational approaches quantify glacier mass change across different spatial scales and temporal resolutions. Each has specific strengths, limitations, and sources of uncertainty. The most robust assessments combine all three, using geodetic and gravimetric methods to calibrate and extend the sparse glaciological stake network to the global scale.`,
      cards: [
        {
          name: 'Glaciological Method: Stakes, Pits, and Reference Glaciers',
          icon: Activity,
          color: BRAND.accent,
          desc: 'networks of ablation stakes (drilled into ice) and snow pits measure seasonal surface height and density changes across a glacier; annual winter balance (accumulation) and summer balance (ablation) are summed to net balance; area-weighted integration over hypsometry gives specific mass balance (m w.e./yr); WGMS coordinates ~40 long-term reference glaciers on every glaciated continent',
          examples: 'Storglaciären (Sweden): continuous record since 1946 — the world\'s longest. South Cascade Glacier (USA) and Sarennes (France Alps) have multi-decadal records showing consistent negative trends. Swiss reference glaciers averaged −0.8 m w.e./yr during 2010–2020 — nearly double the long-term 20th-century mean. The 2022 melt season saw some Swiss glaciers lose 4–6 m w.e. in a single year, erasing up to 3% of their remaining volume.',
        },
        {
          name: 'Satellite Altimetry and Geodetic Mass Balance',
          icon: BarChart,
          color: BRAND.jade,
          desc: 'repeat satellite elevation measurements detect surface height change; ICESat-2 (NASA, 2018) uses 532-nm photon-counting LiDAR at centimetre precision, 91-day repeat; TanDEM-X (DLR) delivers bistatic radar elevation models at ~1 m resolution globally; height change converted to mass via density assumptions (900 kg/m³ ice, 600–850 kg/m³ firn); covers entire glacier populations — not just reference sites',
          examples: 'ICESat-2 detected that Greenland\'s Jakobshavn Isbræ (fastest glacier on Earth, 40–50 m/day) thinned up to 130 m between 2003 and 2019 at its terminus. A global assessment using ICESat (2000–2019) found all glacier regions losing mass, with the highest per-area loss rates in the Canadian Arctic, Alaska, and Iceland. TanDEM-X detected a +0.5 m/yr thickening of East Antarctica\'s interior from increased snowfall — the only large glacierised region in slight positive balance.',
        },
        {
          name: 'GRACE Gravity Mission: Weighing Ice Sheets from Space',
          icon: Globe,
          color: BRAND.gold,
          desc: 'twin GRACE satellites (2002–2017) and GRACE-FO (2018–present) orbit 220 km apart at ~500 km altitude; changes in ice sheet mass alter local gravity, shifting inter-satellite separation by ~1 micron; monthly gravity fields detect mass changes at 300–400 km resolution; no density assumption needed; ideal for Greenland and Antarctic ice sheets; also detects groundwater change and ocean mass redistribution',
          examples: 'Greenland has lost on average ~270 Gt/yr (2002–2022) with the rate accelerating from ~100 Gt/yr in 2002–2006 to >300 Gt/yr in some recent years. Antarctica loses ~150 Gt/yr overall, dominated by West Antarctica (particularly Pine Island and Thwaites glaciers). The Pamir and Karakoram showed anomalous near-zero or slightly positive mass balance 2000–2010 (the "Karakoram Anomaly"), attributed to anomalous winter precipitation increase — though now showing renewed loss.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Regional Glacier Loss: Alps, Himalayas, and the Third Pole',
      body: `Global satellite datasets and long-term monitoring networks reveal that virtually every glacierised region on Earth is experiencing net mass loss, but the rates and societal consequences differ dramatically by region. Two regions with outsized human significance are the Swiss/European Alps — among the most intensively monitored and visually documented glacier systems — and the Hindu Kush–Himalaya–Karakoram system, the "Third Pole," whose meltwater sustains freshwater supply to the most densely populated parts of Asia.`,
      cards: [
        {
          name: 'Swiss Alps: 60% Volume Loss Since 1850',
          icon: TrendingDown,
          color: BRAND.coral,
          desc: 'Swiss glaciers have lost approximately 60% of their total ice volume since the 1850 Little Ice Age maximum; current loss rate ~1–2% per year of remaining volume; under RCP4.5, roughly two-thirds of remaining Swiss glacier volume disappears by 2100; under RCP8.5, less than 5% of 2020 volume remains; loss rates have accelerated since the 1980s, with the 2022 season setting records for single-year mass loss',
          examples: 'Rhône Glacier (Uri Alps): retreated ~3 km since 1874; terminus photographs since 1870 show near-continuous recession. Aletsch Glacier (largest in Alps, ~80 km²): lost ~3 km of length since 1900 and continues at ~50 m/yr. In summer 2022, Swiss glaciers collectively lost ~6% of their remaining volume in a single season — unprecedented in the observational record. By 2050, most Swiss glaciers below ~3,000 m ELA are projected to have disappeared entirely.',
        },
        {
          name: 'The Third Pole: Himalayan Glaciers and 1.9 Billion People',
          icon: Droplets,
          color: BRAND.amethyst,
          desc: 'the Hindu Kush–Karakoram–Himalaya–Tibetan Plateau system contains ~100,000 km² of glacier ice — the largest freshwater reservoir outside the poles; meltwater feeds the Indus, Ganges, Brahmaputra, Yangtze, and Yellow rivers, supplying freshwater to ~1.9 billion people; most Himalayan glaciers are in net negative balance; peak water — maximum meltwater runoff as glaciers shrink — expected mid-21st century for many basins, followed by declining river discharge as ice diminishes',
          examples: 'Gangotri Glacier (India, source of Ganges headwaters): retreating at ~20 m/yr; lost ~2 km since 1990. 2019 IPCC Special Report on Ocean and Cryosphere projected Himalayan glaciers to lose 36–64% of their mass by 2100 depending on emissions scenario. The Indus basin is most glacier-dependent: glacier meltwater provides 40–70% of summer river discharge in Pakistan, sustaining the world\'s largest contiguous irrigation network. "Peak water" for Indus headwater catchments is expected around 2050–2060, after which annual runoff from glacier melt will decline as ice reserves are depleted.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Snowfall to Satellite: The Mass Balance Measurement Chain',
      body: 'Follow how glacier mass change is detected across scales — from a single ablation stake in the ice to gravity anomalies measured from orbit — and how these methods are combined into global estimates of ice loss.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow how glacier mass change is detected across scales — from a single ablation stake in the ice to gravity anomalies measured from orbit',
        nodes: [
          {
            id: 'accumulation-zone',
            label: 'Accumulation Zone (above ELA)',
            description: 'Snow accumulates above the equilibrium line altitude. Pit measurements record winter snowpack density and depth. Stakes drilled here show net height gain. Firn compaction must be corrected for.',
            color: BRAND.accent,
          },
          {
            id: 'ablation-zone',
            label: 'Ablation Zone (below ELA)',
            description: 'Bare ice exposed by summer melt. Ablation stakes record thinning in centimetres per day. Greatest thinning rates at the glacier terminus. Meltwater runoff measured at proglacial stream gauges.',
            color: BRAND.coral,
          },
          {
            id: 'ela-migration',
            label: 'ELA Migration with Climate',
            description: 'As temperature rises, ELA shifts upward. Accumulation zone shrinks; ablation zone expands. Glaciers with ELA above their highest elevation have no accumulation zone and are committed to disappearance.',
            color: BRAND.gold,
          },
          {
            id: 'geodetic-survey',
            label: 'Geodetic Survey (ICESat-2, TanDEM-X)',
            description: 'Repeat satellite elevation maps capture the entire glacier surface. Height differences between surveys converted to volume change. Centimetre-level precision detects even slow changes. Covers all glaciated regions globally.',
            color: BRAND.jade,
          },
          {
            id: 'grace-gravity',
            label: 'GRACE Gravity Anomaly Detection',
            description: 'Ice mass loss reduces local gravitational pull. GRACE satellite pair detects separation changes of ~1 micron caused by mass redistribution. No density assumption required — directly measures mass. Ideal for ice sheet-scale budgets.',
            color: BRAND.amethyst,
          },
          {
            id: 'global-mass-budget',
            label: 'Global Glacier Mass Budget',
            description: 'Methods cross-validated and combined: WGMS stake data, ICESat-2 altimetry, GRACE gravity. Global assessment: ~270 Gt/yr from Greenland, ~150 Gt/yr from Antarctica, ~300 Gt/yr from mountain glaciers. Together contributing ~1.8 mm/yr to sea level rise.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'accumulation-zone', to: 'ela-migration',     label: 'ELA position integrates accumulation vs. ablation' },
          { from: 'ablation-zone',     to: 'ela-migration',     label: 'Ablation zone expansion drives ELA rise' },
          { from: 'ela-migration',     to: 'geodetic-survey',   label: 'Surface elevation changes captured by repeat altimetry' },
          { from: 'accumulation-zone', to: 'geodetic-survey',   label: 'Firn height change measured from orbit' },
          { from: 'ablation-zone',     to: 'geodetic-survey',   label: 'Ice thinning recorded at centimetre scale' },
          { from: 'geodetic-survey',   to: 'global-mass-budget', label: 'Volume change converted to mass (density correction)' },
          { from: 'grace-gravity',     to: 'global-mass-budget', label: 'Independent direct mass measurement cross-validates altimetry' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The equilibrium line altitude (ELA) on a glacier separates the accumulation zone from the ablation zone. What happens to the ELA as climate warms, and why does a rising ELA accelerate mass loss beyond simple melting?',
          a: [
            'The ELA descends as climate warms, exposing more accumulation-zone ice to summer temperatures and increasing total ablation',
            'The ELA rises as climate warms, shrinking the accumulation zone and expanding the ablation zone — the glacier must dynamically thin and retreat upslope, and any glacier whose ELA rises above its highest elevation is committed to disappearance regardless of future temperature stabilisation',
            'The ELA stays constant but the ablation zone thins faster, so the glacier retreats in length but maintains roughly constant area',
            'The ELA rises slightly but has little effect on mass balance because accumulation increases in proportion to warm air\'s increased moisture-holding capacity',
          ],
          correct: 1,
          explain: 'The ELA rises with increasing temperature because the 0°C summer isotherm moves upslope: ablation now exceeds accumulation at elevations that previously had net gain. This compresses the accumulation zone (smaller area above ELA) and expands the ablation zone (larger area below ELA), creating a strongly negative mass balance. The effect is self-reinforcing: as the ablation zone expands, the glacier thins and the surface drops in elevation, exposing previously higher ice to warmer lower-altitude air — a positive feedback. If the ELA rises above the glacier\'s highest point, there is no longer any zone of net accumulation and the glacier is "decoupled" from the climate in the sense that it will disappear even without further warming. Many small Alpine glaciers have already reached this committed-disappearance state. Option A is the reverse of reality. Option C ignores the fundamental role of the area ratio between accumulation and ablation zones. Option D overstates the effect of increased precipitation, which in many mountain ranges has not kept pace with increased ablation.',
        },
        {
          q: 'The GRACE satellite mission measures glacier and ice sheet mass change by detecting changes in Earth\'s gravity field. What fundamental advantage does this approach have over satellite altimetry (ICESat-2), and what is its main limitation?',
          a: [
            'GRACE directly measures mass change without requiring assumptions about ice or firn density, making it more accurate for absolute mass budgets; its main limitation is coarse spatial resolution (~300–400 km), which cannot resolve individual glaciers or distinguish adjacent ice-covered regions',
            'GRACE has finer spatial resolution than ICESat-2 and can detect changes in individual alpine glaciers; its main limitation is that it only measures mass change, not the spatial distribution of thinning',
            'GRACE measures the volume of ice lost, which is more meaningful than mass because it directly relates to sea level rise; its main limitation is that it requires an independent measurement of ice density to convert to sea level equivalent',
            'GRACE and ICESat-2 are equivalent in both accuracy and spatial resolution; GRACE\'s only advantage is that it can operate through cloud cover since it uses gravity rather than laser pulses',
          ],
          correct: 0,
          explain: 'The key distinction is that GRACE measures mass directly — a change in gravitational field corresponds to a definite change in mass (in Gt), requiring no knowledge of whether the surface change is ice, firn, or water, and no density assumption. ICESat-2 and radar altimetry measure height change; converting height change to mass requires knowing the density of the material lost or gained (ice ≈ 900 kg/m³, firn ≈ 600–850 kg/m³, snow ≈ 300–500 kg/m³). In the firn zone near the ELA where both ice and compacting snow are present, this density uncertainty is significant. GRACE\'s critical limitation is spatial resolution: the monthly gravity solutions resolve mass changes at scales of ~300–400 km, which is too coarse to isolate individual mountain glaciers (often 1–100 km²) or even to distinguish the contributions of neighbouring ice catchments. For Greenland and Antarctica, where the ice sheet fills the entire resolution footprint, GRACE is ideal. For individual alpine glaciers, geodetic methods (ICESat-2, TanDEM-X) are essential. Option B is wrong: GRACE resolution is coarser, not finer, than ICESat-2. Option C is wrong: GRACE measures mass, and volume (not mass) is what requires density to convert to SLR equivalent. Option D is wrong: GRACE and ICESat-2 have fundamentally different accuracies and resolutions.',
        },
        {
          q: 'Swiss Alpine glaciers have lost approximately 60% of their total ice volume since the 1850 Little Ice Age maximum. What makes the current rate of loss qualitatively different from earlier 20th-century retreat?',
          a: [
            'Earlier 20th-century retreat was driven by natural solar variability; the current acceleration is driven entirely by anthropogenic greenhouse gas forcing, making it qualitatively different in cause even if rates are similar',
            'The rate of mass loss has accelerated significantly since the 1980s, and many glaciers have now crossed or are approaching committed disappearance thresholds — their ELA has risen above their accumulation zones — meaning that even if temperatures stabilised at current levels, much of the remaining ice would eventually disappear; this non-linearity makes current loss qualitatively different from earlier continuous but slower retreat',
            'The current loss is qualitatively different only because of better measurement technology — ICESat-2 and GRACE detect losses that would have been missed by earlier photogrammetric surveys, inflating the apparent current rate compared to the past',
            'Current loss is different because glacier retreat is now driven by black carbon deposition from Asian industry reducing surface albedo, whereas earlier retreat was driven purely by temperature increase',
          ],
          correct: 1,
          explain: 'While glaciers have been retreating from the 1850 Little Ice Age maximum throughout the 20th century, the post-1980s acceleration reflects both increased temperature forcing and crossing of important non-linear thresholds. Several small Alpine glaciers now have their ELA above their highest elevation point, meaning no net accumulation occurs anywhere on the glacier — these are committed to disappearance. The 2022 mass balance season was exceptional: Swiss glaciers lost ~6% of their remaining volume in a single year, and some glacier termini are now on steep rock slopes where mass loss causes cliff-face collapse rather than gradual retreat. This is qualitatively different from earlier retreat that was gradual and potentially reversible with cooler conditions. Option A is partially true (anthropogenic forcing is real) but the question asks about what makes the rate qualitatively different, not just the cause. Option C incorrectly claims measurement improvements are responsible — long-term photogrammetric surveys and aerial photographs independently confirm the acceleration in recent decades. Option D overstates the role of black carbon, which has a real but secondary effect compared to air temperature.',
        },
        {
          q: 'The Hindu Kush–Himalayan region is called the "Third Pole" and its glaciers supply freshwater to approximately 1.9 billion people. What is "peak water" in this context, and why is it a critical concept for downstream water security?',
          a: [
            'Peak water refers to the moment when all Himalayan glaciers simultaneously reach their maximum summertime melt rate, producing record high river flows; after peak water, rivers return to their baseline non-glacial discharge',
            'Peak water is the point in time when annual meltwater runoff from a shrinking glacier system reaches its maximum, after which runoff declines as the remaining ice volume is too small to sustain current melt rates; this matters because regions dependent on glacier meltwater for summer irrigation will face reduced water availability after the peak, even as the overall population and agricultural demand grows',
            'Peak water describes the maximum global sea level that will be reached when all Himalayan glaciers melt; after this point, sea level stabilises as there is no more ice to contribute to ocean volume',
            'Peak water is a hydrology term describing the annual spring snowmelt flood peak in glaciated basins; it is the same as normal river peak flow and has always occurred each spring regardless of glacier size',
          ],
          correct: 1,
          explain: 'Peak water is a fundamental concept in glaciology and water resource management. As a glacier retreats, it initially releases more meltwater than it receives (drawing down its stored ice capital), so river discharge from melt actually increases above the long-term average — this is the pre-peak phase. At peak water, the glacier\'s area and thickness have diminished to the point where maximum melt generation is reached; beyond this, the smaller glacier produces less total melt volume, and annual discharge begins declining toward a new lower equilibrium set by snowmelt and groundwater alone. For the Indus basin of Pakistan, glacier meltwater provides 40–70% of summer river discharge that feeds the world\'s largest contiguous irrigation network; peak water is projected around 2050–2060 for many upper Indus tributaries, after which agricultural water availability will decline at the same time that population pressure is increasing. Option A confuses peak melt rate with cumulative annual runoff — peak water refers to total annual runoff peaking over decadal timescales, not daily flow peaks. Option C conflates two separate concepts (peak water and sea level contribution). Option D describes normal seasonal hydrology unrelated to glacier change.',
        },
        {
          q: 'GRACE data show that Greenland loses approximately 270 Gt/yr and Antarctica approximately 150 Gt/yr. How much sea level rise do these figures correspond to, and which regions contribute the most to total global glacier sea level rise?',
          a: [
            'Each 1 Gt of ice lost raises global sea level by approximately 1 mm; thus Greenland and Antarctica together contribute ~4 mm/yr to global sea level rise, which exceeds the ~3.7 mm/yr total observed rise',
            'Each 1 Gt of ice lost raises global sea level by approximately 1/360 mm (since the ocean surface area is ~360 million km²); 270 + 150 = 420 Gt/yr ≈ 1.2 mm/yr from ice sheets, plus ~0.8 mm/yr from mountain glaciers and ~1.7 mm/yr from thermal expansion, summing to ~3.7 mm/yr total observed sea level rise',
            'Each 1 Gt of ice raises sea level by 0.01 mm; total ice sheet contribution is ~4.2 mm/yr, but this is largely offset by isostatic rebound raising the land surface under the ice sheets, so net sea level contribution is near zero',
            'Sea level rise from glacier loss depends on where the glacier is located relative to the ocean; Greenland ice raises Pacific sea level but not Atlantic, while Antarctic ice only raises Southern Ocean levels — regional patterns prevent a single global figure',
          ],
          correct: 1,
          explain: 'The unit conversion is: 1 Gt = 10¹² kg = 10⁹ m³ of water. The ocean surface area is approximately 3.6 × 10¹⁴ m² (360 million km²). Therefore, 1 Gt of ice melting into the ocean raises sea level by 10⁹ m³ ÷ 3.6 × 10¹⁴ m² ≈ 2.78 × 10⁻⁶ m ≈ 1/360 mm. For 420 Gt/yr from ice sheets: 420 × (1/360) ≈ 1.17 mm/yr. Mountain glaciers globally lose approximately ~290 Gt/yr ≈ 0.8 mm/yr. Thermal expansion (steric sea level rise from ocean warming) contributes ~1.7 mm/yr. Together these sum to approximately 3.7 mm/yr — consistent with satellite altimetry observations of current global mean sea level rise rate. Option A applies a wildly incorrect conversion factor (1 Gt ≠ 1 mm of SLR). Option C\'s isostatic rebound claim is real but affects land elevation, not ocean level — rebound lifts the land surface as ice unloads it, but the meltwater still enters the ocean, raising sea level by the same amount. Option D incorrectly implies regional containment of melt — ocean water communicates globally; while there are small regional gravity effects (a shrinking ice sheet reduces local sea level by losing its gravitational pull), globally the sea level budget applies.',
        },
      ],
    },
  ],
}

export default measuringGlacierRetreat
