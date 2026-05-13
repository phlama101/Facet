import { Waves, Globe, Thermometer, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const amocThermohaline: Lesson = {
  id: 'ocea-201-1-3-3',
  title: 'AMOC and the Thermohaline Circulation',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The Atlantic Meridional Overturning Circulation — density-driven deep circulation, heat transport, and evidence for weakening under climate change',
  sources: [
    { org: 'NOAA',  title: 'NOAA AMOC Research',              url: 'https://www.noaa.gov/' },
    { org: 'RAPID', title: 'RAPID AMOC Array',                url: 'https://rapid.ac.uk/' },
    { org: 'Nature', title: 'Nature — AMOC Research',         url: 'https://www.nature.com/' },
    { org: 'IPCC',  title: 'IPCC Sixth Assessment Report',    url: 'https://www.ipcc.ch/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The ocean\'s conveyor belt: density, heat, and the risk of a tipping point',
      body: `The Atlantic Meridional Overturning Circulation (AMOC) is one of the most consequential features of Earth\'s climate system — a planetary-scale conveyor of heat, salt, and carbon that keeps Northern Europe habitable and distributes warmth across the entire Atlantic basin. Its engine is not wind but density: differences in temperature and salinity that cause water masses to sink, flow at depth, and resurface thousands of kilometres and centuries later.

At the surface, warm and salty water carried northward by the North Atlantic Current — the Atlantic branch of the Gulf Stream system — loses heat to the atmosphere as it travels toward higher latitudes. As this water cools, its density increases until it becomes dense enough to sink. Deep convection occurs primarily in two regions: the **Labrador Sea**, between Canada and Greenland, and the **Nordic Seas** (the Norwegian and Greenland Seas), east of Iceland. At these sites, surface water descends to depths of 1,000–3,000 m, forming **North Atlantic Deep Water (NADW)** — a well-defined cold, salty, oxygen-rich water mass that flows southward through the Atlantic Ocean at depth. NADW eventually mixes with and is supplemented by **Antarctic Bottom Water (AABW)**, the densest water on Earth, formed by intense cooling on the Antarctic continental shelves. The return limb of the overturning brings water back toward the surface through gradual upwelling, particularly in the Southern Ocean, completing the circulation loop that may take 500–1,500 years per cycle.

The climate significance of AMOC is primarily its heat transport. The circulation moves approximately **1.3 petawatts (PW) of heat northward** across the subtropical Atlantic — roughly 1.3 × 10¹⁵ watts, comparable to a million large power stations running continuously. This flux keeps Northern Europe 5–10°C warmer than it would otherwise be at equivalent latitudes: Oslo (60°N) has winters comparable to New York (41°N); without AMOC, much of Western Europe would have a climate closer to Labrador or Siberia.

The strength of AMOC is monitored continuously by the **RAPID array**, a trans-Atlantic mooring system deployed at 26.5°N since 2004. RAPID measures ocean temperature, salinity, and current velocity profiles across the full width of the Atlantic, allowing calculation of the total northward volume transport in Sverdrup units (1 Sv = 10⁶ m³/s). The long-term mean transport from RAPID data is approximately **17 Sv**, though the circulation exhibits substantial variability on timescales from days to decades. Critically, RAPID data show a **decline of roughly 15% since 2004**, a trend that extends back further in time when combined with indirect proxy evidence.

The proxy-based record of AMOC variability — reconstructed from ocean sediment records, ocean heat content fingerprints, and sea surface temperature (SST) patterns — suggests that the circulation has been weakening since the mid-20th century. A landmark 2018 study by Caesar and colleagues used an **SST fingerprint** — the pattern of anomalous cooling in the North Atlantic subpolar gyre, consistent with reduced heat delivery by AMOC — to extend the monitoring record back to ~1850. Their analysis suggests AMOC today is at its weakest state in at least 1,000 years.

The leading mechanism proposed for this weakening is **freshwater forcing from accelerating Greenland ice sheet melt**. Fresh meltwater is less dense than saline ocean water and sits at the surface of the Labrador Sea, suppressing the deep convection that drives the circulation. As Greenland melting has accelerated — losing over 280 billion tonnes of ice per year in recent decades — the freshwater lid over key convection sites has thickened, reducing the depth and intensity of deep water formation. This constitutes a negative feedback on the AMOC itself: as the circulation weakens, less heat is delivered to the convection regions, reducing winter ocean heat loss, further stabilising the surface layer against convection.

This dynamic raises the possibility of a **tipping point**: a threshold beyond which AMOC weakening becomes self-sustaining and the circulation collapses to a qualitatively different, much weaker state. Evidence that such tipping behaviour is physically possible comes from Earth\'s own history. The **Younger Dryas** (~12,900–11,700 years BP) was a geologically abrupt return to near-glacial conditions that interrupted the warming following the last glacial maximum. Greenland ice core records show temperatures over Greenland dropped by 10–15°C within decades — one of the most dramatic climate shifts in the late Quaternary. The widely accepted mechanism is a pulse of freshwater into the North Atlantic from draining glacial Lake Agassiz and the retreating Laurentide ice sheet, which disrupted AMOC and shut down the heat conveyor. The event ended just as abruptly, with temperatures rising again by ~10°C within decades as AMOC resumed. The Younger Dryas demonstrates conclusively that the circulation can switch rapidly between strong and collapsed states, and that the consequences for Northern Hemisphere climate are severe.

The popular film *The Day After Tomorrow* (2004) dramatised an AMOC collapse as producing near-instantaneous freezing of the Northern Hemisphere — a scenario that misrepresents both the timescale (decades, not days) and the magnitude (regional cooling of a few to perhaps 10°C, not global ice age conditions). The Younger Dryas analogy is more sobering in slower, systemic ways: reorganisation of rainfall patterns, shifts in the positioning of the Atlantic Intertropical Convergence Zone (ITCZ) affecting monsoon systems across Africa and South Asia, and significant sea level rise along the US East Coast (where AMOC weakening reduces the centrifugal sea level depression currently maintained by the strong western boundary current).

The **IPCC Sixth Assessment Report (AR6, 2021)** assessed that AMOC will **very likely weaken over the 21st century** under all high-emission scenarios. A complete collapse before 2100 is assessed as **unlikely but not ruled out** — the uncertainty is large because the models used in AR6 may underestimate AMOC sensitivity to freshwater forcing. More recent statistical analyses of early warning signals in AMOC indicators have suggested the circulation may be closer to a tipping point than AR6 models indicate, though this interpretation is actively debated. The consensus remains that prudent risk management — given the severe and potentially irreversible consequences of collapse — argues for aggressive emissions reduction to keep both warming and Greenland melt within bounds where AMOC can remain in its present strong state.`,
      keyTerms: [
        {
          term: 'AMOC',
          def: 'The Atlantic Meridional Overturning Circulation — the large-scale overturning current system in the Atlantic Ocean in which warm, salty surface water flows northward, sinks in the North Atlantic, returns southward as cold deep water, and eventually upwells. It transports ~1.3 PW of heat northward, profoundly moderating Northern European and North Atlantic climate.',
        },
        {
          term: 'thermohaline circulation',
          def: 'The global ocean circulation driven by density differences created by variations in temperature (thermo-) and salinity (haline). Denser, colder or saltier water sinks and spreads at depth; less dense water rises to replace it at the surface. AMOC is the Atlantic component of this global thermohaline system, sometimes called the "global ocean conveyor belt."',
        },
        {
          term: 'NADW',
          def: 'North Atlantic Deep Water — the dense, cold, oxygen-rich water mass formed by deep convection in the Labrador Sea and Nordic Seas. NADW flows southward at depths of 1,000–3,000 m, constituting the deep limb of AMOC. It is a major reservoir of anthropogenic CO₂ transported into the deep ocean.',
        },
        {
          term: 'RAPID array',
          def: 'A trans-Atlantic array of moored instruments deployed at 26.5°N since 2004 to continuously monitor the strength of AMOC. Named after the RAPID programme funded by the UK Natural Environment Research Council. The array has measured a mean transport of ~17 Sv and has detected a ~15% decline in AMOC strength since 2004.',
        },
        {
          term: 'Younger Dryas',
          def: 'A geologically abrupt cold episode (~12,900–11,700 BP) that interrupted post-glacial warming in the Northern Hemisphere. Greenland ice cores record cooling of 10–15°C in decades. Widely attributed to a pulse of glacial meltwater that disrupted AMOC. Named for the cold-tolerant wildflower Dryas octopetala whose pollen reappears in European sediments from this interval.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Structure, monitoring, forcing, and historical analogues',
      body: `AMOC integrates physical oceanography, climate dynamics, and palaeoclimate evidence across multiple timescales. Understanding its four key dimensions — the heat-transport mechanism, the observational record from RAPID, the freshwater forcing mechanism, and the Younger Dryas analogue — provides the framework for evaluating both its current state and future risk.`,
      cards: [
        {
          name: 'The AMOC and North Atlantic Heat Transport',
          icon: Waves,
          color: BRAND.accent,
          desc: 'AMOC carries ~1.3 PW of heat northward — the dominant mechanism keeping Northern Europe 5–10°C warmer than equivalent latitudes. Warm, salty surface water cools and sinks in the Labrador Sea and Nordic Seas, forming NADW at 1,000–3,000 m depth, which flows south and upwells in the Southern Ocean. The return flow closes the loop.',
          examples: 'Oslo (60°N) has average January temperatures similar to New York (41°N) · NADW oxygen content and radiocarbon age confirm deep water formation timescales of centuries · AABW — formed on Antarctic shelves — is the densest water on Earth and fills the deepest ocean basins below NADW',
        },
        {
          name: 'RAPID Array Evidence for Weakening',
          icon: Activity,
          color: BRAND.jade,
          desc: 'The RAPID array at 26.5°N has monitored AMOC continuously since 2004, measuring a long-term mean of ~17 Sv with a ~15% decline over the observational period. Combined with the SST fingerprint method of Caesar et al. (2018), the record suggests AMOC is now at its weakest in at least 1,000 years.',
          examples: 'RAPID mean transport: ~17 Sv (1 Sv = 1 million m³/s) · Caesar et al. 2018 (Nature): SST cold blob in North Atlantic subpolar gyre consistent with ~3 Sv weakening since ~1950 · RAPID data show high variability: day-to-day fluctuations of ±5 Sv, complicating trend detection',
        },
        {
          name: 'Freshwater Forcing and the Tipping Point Risk',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'Greenland meltwater — currently >280 Gt/yr — reduces surface salinity and density in the Labrador Sea, suppressing deep convection. This weakens AMOC, potentially triggering a positive feedback that could drive the circulation toward a tipping point: a threshold beyond which collapse becomes self-sustaining and irreversible on human timescales.',
          examples: 'Greenland ice loss: ~280 Gt/yr average (2002–2019, GRACE satellite data) · Labrador Sea convection depth has shoaled measurably in recent decades · IPCC AR6: AMOC very likely to weaken further; collapse before 2100 unlikely but not ruled out · Early warning signal analyses: some indicators suggest proximity to tipping point, though actively debated',
        },
        {
          name: 'Historical Analogue: The Younger Dryas',
          icon: Globe,
          color: BRAND.coral,
          desc: 'The Younger Dryas (~12,900–11,700 BP) demonstrates AMOC can collapse within decades and drive cooling of 10–15°C over Greenland. A pulse of glacial meltwater disrupted deep convection; the event ended abruptly as AMOC resumed. It confirms the circulation has two stable states and that transitions between them can be geologically instantaneous.',
          examples: 'GISP2 Greenland ice core: 10–15°C cooling in <100 years at Younger Dryas onset · Source of freshwater forcing: drainage of glacial Lake Agassiz and Laurentide ice sheet retreat · Duration: ~1,200 years of cold conditions before abrupt re-warming · Day After Tomorrow misconception: collapse in days/hours has no physical basis; decades-scale transitions are the realistic scenario',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'AMOC Circulation: From Surface to Depth and Back',
      body: 'How warm surface water travels north, sinks to form deep water, flows south at depth, and upwells to complete the overturning loop.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how AMOC circulates warm salty surface water northward, drives deep convection and NADW formation, returns water southward at depth, and completes the loop through Southern Ocean upwelling',
        nodes: [
          {
            id: 'warm-surface-flow',
            label: 'Warm salty surface water moves north',
            description: 'The North Atlantic Current carries warm (~12–20°C), relatively salty (~36 psu) surface water northward from the subtropical Atlantic. This surface limb of AMOC transports roughly 1.3 PW of heat toward the poles, releasing energy to the overlying atmosphere and moderating European climate.',
            color: BRAND.accentHot,
          },
          {
            id: 'cooling-densification',
            label: 'Cooling and densification',
            description: 'As surface water moves poleward it loses heat to the cold atmosphere, dropping from ~12°C in the subpolar gyre to near-freezing in the Nordic Seas and Labrador Sea. Cooling increases seawater density. Evaporation concentrates salt, raising salinity and density further. When density exceeds that of the underlying water column, the surface layer becomes gravitationally unstable.',
            color: BRAND.accent,
          },
          {
            id: 'deep-convection',
            label: 'Deep convection in Labrador/Nordic Seas',
            description: 'In the Labrador Sea and Norwegian–Greenland Seas, destabilised surface water undergoes open-ocean deep convection — vertical overturning of the water column driven by buoyancy loss. Convection chimneys can penetrate to 1,000–2,500 m depth in intense winters, ventilating the deep ocean with oxygenated water and carrying dissolved CO₂ to depth.',
            color: BRAND.jade,
          },
          {
            id: 'nadw-southward',
            label: 'NADW formation and southward flow',
            description: 'Convected water mixes and equilibrates to form North Atlantic Deep Water (NADW) — cold (~2–4°C), salty (~34.9 psu), oxygen-rich. NADW flows southward at 1,000–3,000 m depth through the Atlantic as a deep western boundary current, transporting roughly 17 Sv (Sverdrups). RAPID\'s moorings at 26.5°N directly measure this southward transport.',
            color: BRAND.amethyst,
          },
          {
            id: 'southern-ocean-upwelling',
            label: 'Upwelling in Southern Ocean',
            description: 'NADW eventually upwells in the Southern Ocean, driven by strong westerly winds and Antarctic Circumpolar Current dynamics. Some water returns at intermediate depth; some mixes with Antarctic Bottom Water (AABW) — the densest water on Earth, formed on Antarctic continental shelves — which fills the deepest basins below NADW.',
            color: BRAND.gold,
          },
          {
            id: 'return-surface-flow',
            label: 'Return surface flow',
            description: 'Upwelled water warms and freshens as it flows northward through the South Atlantic, eventually rejoining the subtropical North Atlantic and the warm surface limb of AMOC. A complete circuit may take 500–1,500 years. Freshwater input from Greenland melt at the convection sites disrupts this cycle by reducing surface water density and suppressing sinking.',
            color: BRAND.coral,
          },
        ],
        edges: [
          { from: 'warm-surface-flow',    to: 'cooling-densification',  label: 'Poleward heat loss to atmosphere' },
          { from: 'cooling-densification', to: 'deep-convection',        label: 'Density exceeds deep water; sinking begins' },
          { from: 'deep-convection',       to: 'nadw-southward',         label: 'NADW formed at 1,000–3,000 m depth' },
          { from: 'nadw-southward',        to: 'southern-ocean-upwelling', label: 'Deep southward flow exits South Atlantic' },
          { from: 'southern-ocean-upwelling', to: 'return-surface-flow', label: 'Wind-driven upwelling returns water to surface' },
          { from: 'return-surface-flow',   to: 'warm-surface-flow',      label: 'Surface flow rejoins northward limb' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What drives the Atlantic Meridional Overturning Circulation?',
          a: [
            'Wind stress from the westerly wind belts pushes surface water northward and forces cold water to upwell in the tropics, creating a thermally driven overturning loop',
            'Density differences caused by cooling and salinity concentration drive dense water to sink in the North Atlantic; the resulting pressure gradient draws warm surface water northward and returns cold deep water southward — thermohaline forcing',
            'Tidal forcing from the Moon and Sun creates vertical mixing that drives net northward flow in the Atlantic\'s upper layers, with compensating return flow at depth',
            'The Coriolis effect deflects northward-flowing water westward, creating a pressure gradient that forces the water to sink along the western margin of the Atlantic',
          ],
          correct: 1,
          explain: 'AMOC is a thermohaline circulation: "thermo" for temperature and "haline" for salinity — both of which determine seawater density. As warm, salty North Atlantic surface water flows poleward it loses heat to the atmosphere, becoming denser. In the Labrador Sea and Nordic Seas this dense water sinks to 1,000–3,000 m depth, a process called deep convection. This sinking drives the overturning: deep water flows south as NADW, and the resulting mass deficit at depth draws warm surface water northward to replace it, maintaining the continuous loop. Wind (option A) drives gyres and the surface expression of the Gulf Stream system, but is not the primary engine of the deep overturning limb. Tidal mixing (C) contributes to maintaining stratification globally but does not drive AMOC directly. The Coriolis effect (D) shapes the path of boundary currents but is not an energy source for overturning.',
        },
        {
          q: 'What does the RAPID array measure and what has it found since 2004?',
          a: [
            'RAPID measures surface chlorophyll concentrations across the Atlantic at 26°N and has found increasing phytoplankton productivity linked to stronger upwelling as AMOC weakens',
            'RAPID measures trans-Atlantic temperature, salinity, and velocity profiles at 26.5°N to calculate total AMOC volume transport; it has recorded a long-term mean of ~17 Sv and a decline of approximately 15% in AMOC strength since the array was deployed',
            'RAPID measures sea surface height at 26°N using radar altimeters on a single research vessel that crosses the Atlantic annually; it has found stable AMOC transport with no significant trend since 2004',
            'RAPID measures deep-sea CO₂ concentrations at 26°N and has found accelerating carbon uptake in the North Atlantic deep water as AMOC weakens and less CO₂ is outgassed at the surface',
          ],
          correct: 1,
          explain: 'The RAPID array (Rapid Climate Change programme, UK NERC) consists of moored instrument arrays deployed across the full width of the Atlantic at 26.5°N. The moorings measure temperature, salinity, and current velocity at multiple depths, from which the total volume transport of AMOC — in Sverdrup units (1 Sv = 10⁶ m³/s) — is continuously calculated. The mean transport since 2004 is approximately 17 Sv, with substantial short-term variability (day-to-day fluctuations of ±5 Sv). The long-term trend shows a decline of roughly 15% over the observational period, consistent with independent proxy reconstructions showing AMOC weakening since the mid-20th century. The system measures ocean physics directly, not chlorophyll (A) or CO₂ concentrations (D). The measurement is made by a permanent mooring array, not a research vessel (C).',
        },
        {
          q: 'Why might Greenland ice melt threaten AMOC stability?',
          a: [
            'Greenland melt raises global sea level, which deepens the Atlantic basin and reduces the pressure gradient that drives northward surface flow, directly slowing AMOC',
            'Freshwater released by Greenland\'s melting ice sheet is less dense than the saline North Atlantic surface water; it accumulates on the Labrador Sea surface, reducing the density contrast needed for deep convection, thereby suppressing the sinking that drives AMOC',
            'Greenland melt increases Arctic sea ice extent, which insulates the ocean surface from winter cooling and prevents the temperature drop needed for North Atlantic surface water to become dense enough to sink',
            'Runoff from Greenland is cold, which cools the North Atlantic Surface water so rapidly that it sinks before reaching the Nordic Seas, disrupting the normal convection pathway and diverting NADW formation to shallower depths',
          ],
          correct: 1,
          explain: 'The mechanism linking Greenland melt to AMOC weakening operates through density. Seawater density increases with decreasing temperature and increasing salinity. Deep convection in the Labrador Sea and Nordic Seas occurs when the surface water becomes denser than the water beneath it — a condition normally met each winter as the ocean loses heat to the cold atmosphere. Fresh meltwater from Greenland (density ~1,000 kg/m³) is significantly less dense than salty North Atlantic water (~1,026 kg/m³). When large volumes of fresh meltwater flow into the Labrador Sea and adjacent convection regions, they create a buoyant, stable surface layer that resists winter convection. Even if the surface cools to near-freezing, the salinity — and therefore density — remains too low for the water to sink as deep as it would without the freshwater cap. AMOC weakens as a result. Option A (sea level) is physically incorrect — the sea level rise from Greenland is global and would not differentially affect AMOC pressure gradients in the relevant way. Option C misrepresents the sea ice mechanism. Option D inverts the effect — cold fresh water near the surface would be buoyant, not prone to early sinking.',
        },
        {
          q: 'What was the Younger Dryas and what does it tell us about AMOC collapse?',
          a: [
            'The Younger Dryas was a brief warm period ~12,900 years ago caused by AMOC strengthening; it demonstrates that AMOC intensification produces abrupt warming events that can melt ice sheets on millennial timescales',
            'The Younger Dryas was an abrupt return to near-glacial conditions (~12,900–11,700 BP) caused by a pulse of glacial meltwater that disrupted AMOC; Greenland ice cores record cooling of 10–15°C within decades; the event demonstrates that AMOC can collapse rapidly between two stable states and that the resulting climate impact is severe and hemisphere-wide',
            'The Younger Dryas was a gradual cooling over ~10,000 years caused by orbital forcing; it is unrelated to AMOC and demonstrates only that ice ages can occur without ocean circulation changes',
            'The Younger Dryas was a regional European cold period caused by volcanic aerosols; it is too localised to provide information about global AMOC circulation changes and is not used as an analogue for future AMOC behaviour',
          ],
          correct: 1,
          explain: 'The Younger Dryas (~12,900–11,700 BP) is the most frequently cited geological analogue for AMOC disruption. It was not a gradual cooling but an abrupt return to near-glacial conditions that interrupted the warming trend following the Last Glacial Maximum. High-resolution Greenland ice core records (GISP2, GRIP, NGRIP) show temperature over Greenland dropped by 10–15°C within decades at the onset — a transition so rapid it is visible within single ice-core years. The accepted mechanism is a massive pulse of freshwater — from the drainage of proglacial Lake Agassiz and accelerated melting of the retreating Laurentide ice sheet — into the North Atlantic, which suppressed AMOC just as Greenland meltwater is beginning to do today. AMOC collapsed to a much weaker state, reducing northward heat transport, and the Northern Hemisphere cooled dramatically. The event lasted ~1,200 years before AMOC abruptly resumed, warming Greenland by ~10°C within decades. The Younger Dryas thus demonstrates that: (1) the Atlantic overturning has two distinct stable states; (2) freshwater forcing can trigger collapse; (3) the climate response to collapse is large, fast, and hemisphere-wide. Option A inverts the mechanism. Options C and D mischaracterise the event\'s cause, scale, and palaeoceanographic relevance.',
        },
        {
          q: 'How would a major AMOC weakening affect European climate?',
          a: [
            'AMOC weakening would increase European temperatures because reduced northward heat transport would trap more heat in the tropical Atlantic, warming the entire Northern Hemisphere including Europe',
            'AMOC weakening would significantly cool Northwestern Europe — potentially by 3–8°C in the most affected regions — as the circulation currently delivers ~1.3 PW of heat northward; it would also shift monsoon systems, raise sea level along the US East Coast, and alter precipitation patterns across the Atlantic sector',
            'AMOC weakening would have no direct effect on European temperatures because Europe\'s climate is determined by its westerly winds and continental position, not by ocean heat transport',
            'AMOC weakening would cool Europe slightly (1–2°C) but this would be fully offset by greenhouse warming, making the net effect neutral; it is therefore not considered a priority climate risk',
          ],
          correct: 1,
          explain: 'AMOC currently delivers approximately 1.3 petawatts (PW) of heat northward — an enormous flux that maintains Northwestern Europe 5–10°C warmer than it would otherwise be at equivalent latitudes. Norway, the UK, and Ireland all experience far milder climates than equivalent latitudes in Canada or Russia. A major AMOC weakening would reduce this heat delivery, producing substantial cooling across Northwestern Europe — climate models project regional cooling of 3–8°C in severely affected scenarios, partially offset by background greenhouse warming. But the impacts extend beyond European temperature. AMOC drives the position of the Atlantic Intertropical Convergence Zone (ITCZ); weakening shifts it southward, disrupting the West African and South Asian monsoon systems on which billions of people depend. Sea level along the US East Coast would rise by an additional 30–50 cm as the centrifugal depression of sea level currently maintained by the Gulf Stream system diminishes. Arctic sea ice extent would increase. Option A incorrectly claims weakening traps more heat in the tropics — reduced northward transport means more heat stays in the tropics, but this does not warm Europe, which depends on receiving that transported heat. Option C dismisses ocean heat transport entirely, which is incorrect — oceanographic measurements confirm the heat delivery. Option D underestimates the potential cooling and misrepresents the IPCC\'s risk assessment.',
        },
      ],
    },
  ],
}

export default amocThermohaline
