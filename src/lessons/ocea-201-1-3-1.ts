import { Waves, Globe, Thermometer, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const ensoOceanAtmosphere: Lesson = {
  id: 'ocea-201-1-3-1',
  title: 'ENSO — El Niño, La Niña, and the Walker Circulation',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The coupled ocean-atmosphere oscillation that drives global climate variability — from Pacific thermocline tilts to worldwide teleconnections',
  sources: [
    { org: 'NOAA',   title: 'NOAA ENSO Blog',          url: 'https://www.climate.gov/enso' },
    { org: 'WMO',    title: 'WMO ENSO Monitoring',     url: 'https://public.wmo.int/' },
    { org: 'Nature', title: 'Nature — ENSO Research',  url: 'https://www.nature.com/' },
    { org: 'NASA',   title: 'NASA ENSO Portal',         url: 'https://www.nasa.gov/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The Pacific engine of global climate variability',
      body: `Of all the climate phenomena that shape life across the planet, none has more far-reaching consequences than the **El Niño–Southern Oscillation** — ENSO. Every few years, sea-surface temperatures across the central and eastern tropical Pacific swing by 2–5°C (36–41°F), and in response, weather patterns shift across every continent, drought grips Australia and Indonesia while floods devastate Peru and Ecuador, Atlantic hurricanes grow rare while Pacific cyclones intensify. ENSO is not a random fluctuation; it is a self-organised, coupled oscillation between the ocean and the atmosphere — a system so tightly coupled that the ocean cannot change without the atmosphere responding, and the atmosphere cannot shift without the ocean changing in turn.

**The Walker circulation** is the atmospheric engine at the heart of ENSO. Under neutral or La Niña-like conditions, the tropical Pacific surface is a striking contrast: the western Pacific "warm pool" maintains sea-surface temperatures (SSTs) of 29–30°C (84–86°F), while the eastern Pacific, cooled by coastal upwelling off Peru and Ecuador, is 22–24°C (72–75°F). This temperature gradient drives a powerful east-west atmospheric overturning cell — the Walker circulation — in which warm, moist air rises over the western Pacific and the Maritime Continent, flows eastward at upper levels, descends over the cooler eastern Pacific, and returns westward at the surface as the **trade winds**. The trade winds are not merely a consequence of the warm pool; they actively reinforce it, dragging warm surface water westward and piling it up against the Asian coast, where the warm layer can exceed 150 m (492 ft) in depth. Meanwhile, the trade winds drive upwelling of cold, nutrient-rich water along the South American coast.

**El Niño** develops when this self-reinforcing system breaks down. The trigger is often a weakening of the trade winds — perhaps initiated by a burst of westerly wind or by intraseasonal variability — which allows the accumulated warm water in the western Pacific to slosh eastward. As it does, the thermocline — the sharp temperature boundary between the warm surface layer and the cold deep ocean — tilts: it deepens in the east and shoals in the west. With the thermocline pushed down in the eastern Pacific, coastal upwelling no longer brings cold water to the surface, and SSTs in the central and eastern Pacific warm by 2–5°C (36–41°F). The warmer eastern Pacific then shifts the atmospheric convection eastward, which further weakens the trade winds. This **Bjerknes positive feedback** — named after the Norwegian-American meteorologist Jacob Bjerknes, who first described it in 1969 — amplifies the initial warm anomaly: warming reduces the east-west SST gradient, which weakens the trades, which reduces upwelling, which warms the east further, and so on.

**La Niña** is the opposite phase. When trade winds strengthen beyond normal, the warm pool is pushed further west, the thermocline tilts more steeply, upwelling intensifies in the east, and eastern Pacific SSTs cool 1–3°C (34–37°F) below average. La Niña often follows El Niño as the ocean-atmosphere system overshoots neutral and swings toward the cold phase, though the two phases are not perfectly symmetric in magnitude or duration.

**Measuring ENSO.** Scientists monitor ENSO using several standardised indices. The **Niño 3.4 index** measures the sea-surface temperature anomaly averaged over the region 5°N–5°S, 120–170°W in the central-eastern Pacific — the region most sensitive to ENSO variability. An anomaly of +0.5°C (33°F) for five consecutive overlapping three-month periods defines El Niño; −0.5°C (31°F) defines La Niña. The **Oceanic Niño Index (ONI)** is the three-month running mean of the Niño 3.4 anomaly, used operationally by NOAA. ENSO events typically develop in boreal spring and autumn, peak in December (the name "El Niño" — the Christ Child — reflects the Christmas timing of the warm current off Peru noticed by South American fishermen for centuries), and decay by the following year. The typical recurrence interval is **2–7 years**, though the cycle is irregular rather than strictly periodic.

**Global teleconnections** — ENSO\'s remote influences through atmospheric wave patterns — reshape weather across every continent. During El Niño, drought intensifies across **Australia, Indonesia, the Philippines, and southern Africa**; flooding strikes **coastal Peru, Ecuador, and Argentina**; drought affects **northeastern Brazil** and much of **southern Africa**; the Indian monsoon weakens; **Atlantic hurricane activity is suppressed** because El Niño increases upper-level wind shear over the Atlantic, disrupting storm development. During La Niña, the **Pacific Northwest** of North America becomes wetter and cooler; southern Africa and southeastern Australia experience above-average rainfall; **Atlantic hurricane activity increases** as wind shear diminishes. These patterns emerge because ENSO shifts the large-scale atmospheric circulation, displacing the jet streams and altering precipitation patterns thousands of kilometres from the tropical Pacific.

The **1997–98 El Niño** was the strongest on record until the **2015–16 event** surpassed it. The 1997–98 event warmed the central Pacific by more than 4°C (39°F) above average, triggered catastrophic flooding in Peru (where rivers exceeded 1,000 times their normal flow), wildfires across Borneo (contributing to the worst regional air pollution episode of the 20th century), and a collapse of the Peruvian anchoveta fishery that cost billions of dollars. Globally, ENSO-related economic impacts are estimated to run into the hundreds of billions of dollars per event, affecting agriculture, water supply, fisheries, and energy demand from California to Zimbabwe.

**ENSO forecasting** has advanced dramatically since the 1980s. Coupled ocean-atmosphere models — including those from ECMWF, NOAA\'s Climate Forecast System, and the International Research Institute for Climate and Society (IRI) — can provide useful forecasts 6–12 months in advance for strong events, though the **spring predictability barrier** (the difficulty of forecasting through boreal spring) remains a challenge. Accuracy depends critically on ocean heat content observations from the **TAO/TRITON mooring array** in the tropical Pacific and Argo float data.

**ENSO and climate change.** Whether global warming will alter ENSO behaviour is an active research question. Models suggest that **intense El Niño events may become more frequent** as the mean state of the tropical Pacific warms, and that **extreme ENSO precipitation teleconnections may intensify**. However, the projected changes in ENSO periodicity and mean amplitude remain uncertain across different climate models.

**The Madden-Julian Oscillation (MJO)**, a large-scale tropical convective disturbance that propagates eastward around the tropics every 30–60 days, acts as a sub-seasonal modulator of ENSO. MJO-related westerly wind bursts in the western Pacific are among the most important triggers for El Niño onset, and MJO activity can prolong or terminate ENSO events by injecting energy into or draining it from the ocean-atmosphere system. Monitoring the MJO is now a routine part of ENSO forecasting operations worldwide.`,
      keyTerms: [
        {
          term: 'Walker circulation',
          def: 'The east-west atmospheric overturning circulation in the tropical Pacific, driven by the sea-surface temperature gradient between the warm western Pacific warm pool (~29–30°C (84–86°F)) and the cooler eastern Pacific (~22–24°C (72–75°F)). Surface trade winds blow westward at low levels; air rises over the warm pool and Maritime Continent, flows eastward at upper levels, and descends over the cooler eastern Pacific. Weakening of the Walker circulation is both a cause and a consequence of El Niño.',
        },
        {
          term: 'El Niño',
          def: 'The warm phase of ENSO, defined operationally as Niño 3.4 SST anomalies ≥+0.5°C (33°F) for five consecutive overlapping three-month periods. Characterised by eastward shift of the Pacific warm pool, thermocline deepening in the east, reduced coastal upwelling off South America, weakened trade winds, and a broad reorganisation of global atmospheric circulation that produces worldwide teleconnections. Events typically peak in December and recur every 2–7 years.',
        },
        {
          term: 'Bjerknes feedback',
          def: 'The positive ocean-atmosphere feedback that amplifies El Niño and La Niña, named after Jacob Bjerknes (1969). During El Niño onset: weakened trade winds → reduced upwelling → warmer eastern Pacific SSTs → reduced east-west SST gradient → further weakened trades → further SST warming. The self-reinforcing loop causes a small initial perturbation to grow into a full ENSO event. The same mechanism (with signs reversed) amplifies La Niña.',
        },
        {
          term: 'Niño 3.4 index',
          def: `The primary ENSO monitoring index: the sea-surface temperature anomaly averaged over the central-eastern tropical Pacific region 5°N–5°S, 120–170°W. Used because this region shows the largest and most representative SST variability associated with ENSO. The Oceanic Niño Index (ONI) is the three-month running mean of the Niño 3.4 anomaly and is NOAA\'s standard index for classifying El Niño and La Niña events (threshold: ±0.5°C (33°F) for five consecutive overlapping seasons).`,
        },
        {
          term: 'Teleconnection',
          def: 'A statistical and physical link between climate anomalies in geographically remote regions, transmitted through large-scale atmospheric wave patterns (Rossby waves) or changes to the global circulation. ENSO generates some of the most powerful known teleconnections: El Niño drives drought in Australia, flooding in Peru, Atlantic hurricane suppression, and weakened Indian monsoon simultaneously, through its reorganisation of tropical convection and extratropical wave trains.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four pillars of ENSO science',
      body: `ENSO is best understood through four interconnected lenses: the basic physical mechanisms that set up and terminate each phase; the self-reinforcing dynamics that amplify small perturbations; the global atmospheric patterns that carry ENSO\'s influence worldwide; and the observational and modelling systems that enable forecasting under a changing climate. Together, these pillars explain why a sea-surface temperature anomaly in the central Pacific can determine whether it rains in Kenya, whether a hurricane forms in the Gulf of Mexico, or whether Australian farmers face drought.`,
      cards: [
        {
          name: 'The Walker Circulation and ENSO Phases',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Normal conditions: trade winds drive warm surface water westward, deepening the thermocline in the west and shoaling it in the east, sustaining cold upwelling off South America. El Niño: weakened trades allow the warm pool to shift east, thermocline tilts, upwelling weakens, and eastern Pacific SSTs warm 2–5°C (36–41°F). La Niña: enhanced trades intensify the tilt and strengthen upwelling, cooling the east 1–3°C (34–37°F) below average.',
          examples: 'Normal: western Pacific thermocline ~150 m (492 ft) deep; eastern Pacific ~50 m (164 ft) — cold upwelling sustains the Humboldt Current fishery · El Niño 1997–98: Niño 3.4 anomaly peaked at +2.4°C (36°F); Peruvian sea-surface temperatures 5°C (41°F) above normal; anchoveta catch collapsed · La Niña 1988–89: strong cooling of eastern Pacific, major drought in the US Midwest',
        },
        {
          name: 'Bjerknes Feedback: Self-Reinforcing Dynamics',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'The Bjerknes positive feedback loop: a small weakening of trade winds reduces upwelling of cold water, warming the eastern Pacific, which reduces the east-west SST gradient, which further weakens the trades, producing more warming. The loop runs in reverse for La Niña. Termination requires negative feedbacks: warm water recharge/discharge (Recharge Oscillator theory), reflected oceanic Kelvin and Rossby waves, and eventually re-establishment of the thermocline tilt.',
          examples: 'WWBs (westerly wind bursts) in early 1997 triggered Bjerknes feedback → El Niño developed within months · Kelvin waves: downwelling oceanic Kelvin waves propagate eastward at ~2–3 m/s during El Niño onset, deepening eastern thermocline — recorded by TAO mooring array · ENSO termination: reflected Rossby waves return as upwelling Kelvin waves, restoring the thermocline and ending El Niño',
        },
        {
          name: 'Global Teleconnections of ENSO',
          icon: Globe,
          color: BRAND.coral,
          desc: 'ENSO reorganises tropical convection, shifting the Intertropical Convergence Zone and altering Hadley and Walker cells, which in turn excite atmospheric Rossby wave trains into the extratropics. El Niño suppresses Atlantic hurricane activity via increased upper-level wind shear. La Niña enhances Atlantic hurricane seasons and brings drought to East Africa and wetter conditions to Australia. The Indian monsoon is weakened during El Niño and strengthened during La Niña on average, though the relationship has weakened since the 1980s.',
          examples: `El Niño 2015–16: severe drought in South Africa and Zimbabwe; wildfires in Indonesia; flooding in Bolivia and Peru · La Niña 2010–11: catastrophic Queensland floods (Australia\'s costliest natural disaster); 2010 Atlantic hurricane season was the most active since 1950 · El Niño Atlantic suppression: 1997 season had only 8 named storms vs. typical 12 despite warm Atlantic SSTs`,
        },
        {
          name: 'ENSO Prediction and Climate Change',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Coupled ocean-atmosphere models (ECMWF, IRI, CFS) provide useful 6–12 month ENSO forecasts for strong events, limited by the spring predictability barrier and observational gaps. The TAO/TRITON mooring array and Argo floats supply critical subsurface ocean heat content data. Under climate change, model projections suggest more frequent extreme El Niño events and intensified teleconnection impacts, though changes in mean ENSO amplitude and periodicity remain uncertain. The MJO acts as a key sub-seasonal trigger for ENSO onset and termination.',
          examples: 'TAO/TRITON array mooring failure ~2012–2014 degraded ENSO forecast skill — underscoring observational dependency · ECMWF SEAS5 model: useful El Niño skill out to ~9 months lead time · CMIP6 models project ~40% increase in extreme El Niño frequency under 4°C (39°F) warming · MJO westerly wind burst March 2014: false alarm — weakened mid-year without producing full El Niño',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The ENSO cycle: from trade winds to global teleconnections',
      body: `ENSO unfolds through a sequence of linked ocean and atmosphere changes, each step triggering the next through the Bjerknes feedback loop and ultimately reaching the global atmosphere through teleconnections. Follow the chain of causation below — from the initial trade-wind state through El Niño development to worldwide impacts and the eventual return toward neutral or La Niña.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The causal chain from tropical Pacific trade wind state through ENSO development to global teleconnections and return to neutral',
        nodes: [
          {
            id: 'trade-winds',
            label: 'Normal trade winds and thermocline tilt',
            description: 'Under neutral or La Niña-like conditions, easterly trade winds blow along the equatorial Pacific at roughly 5–7 m/s. Surface Ekman transport drags warm water westward, building the western Pacific warm pool to SSTs of 29–30°C (84–86°F) and a thermocline depth of ~150 m (492 ft). The eastern Pacific thermocline sits only ~50 m (164 ft) below the surface; wind-driven upwelling brings cold (18–22°C (64–72°F)), nutrient-rich water to the surface off Ecuador and Peru, supporting the Humboldt Current ecosystem. The east-west SST gradient (~7°C (45°F)) drives the Walker circulation: rising motion over the Maritime Continent, subsidence over the eastern Pacific. This state is self-maintaining through the Bjerknes feedback loop running in its stabilising direction.',
            color: BRAND.accent,
          },
          {
            id: 'bjerknes',
            label: 'Bjerknes feedback triggered',
            description: 'A perturbation — often a westerly wind burst (WWB) associated with the Madden-Julian Oscillation, or intraseasonal variability in tropical convection — weakens the trade winds. This reduction in wind stress has two immediate consequences: (1) surface warm water that was being held in the western Pacific by the trades begins to slide eastward along the equator, and (2) a downwelling oceanic Kelvin wave is excited, propagating eastward at 2–3 m/s along the equatorial waveguide. The Kelvin wave deepens the thermocline as it progresses east over several weeks. With the thermocline depressed, upwelling no longer reaches cold water, and eastern Pacific SSTs begin to rise. The resulting reduction in the east-west SST gradient further weakens the trades — the Bjerknes feedback loop begins to run in the amplifying direction, converting the initial perturbation into a developing El Niño.',
            color: BRAND.accentHot,
          },
          {
            id: 'el-nino',
            label: 'El Niño: eastward warm pool shift',
            description: `El Niño is fully established when Niño 3.4 SST anomalies exceed +0.5°C (33°F) for five consecutive overlapping three-month periods. The central and eastern tropical Pacific warms by 2–5°C (36–41°F) above normal. The western Pacific thermocline shoals as heat content is redistributed eastward (the "discharge" phase in Recharge Oscillator theory). The eastern Pacific thermocline deepens to 80–100 m (262–328 ft), suppressing upwelling almost entirely. The warm pool\'s eastern edge advances across the dateline. Sea level in the eastern Pacific rises 10–30 cm (3.9–11.8 in) above normal as warm water expands. Ocean heat content in the upper 300 m (984 ft) decreases in the western Pacific and increases in the central-eastern Pacific. Strong events (such as 1997–98 and 2015–16) can produce central-eastern Pacific SST anomalies exceeding 3°C (37°F) across a basin-wide swath from the dateline to the South American coast.`,
            color: BRAND.gold,
          },
          {
            id: 'walker-weak',
            label: 'Weakened Walker circulation',
            description: 'With the warm pool displaced eastward, the maximum tropical convection shifts from the Maritime Continent toward the central Pacific. Rising motion weakens or shifts east of its normal position over Indonesia; anomalous subsidence develops over Australia and the Maritime Continent. The Walker cell weakens dramatically: upper-level divergence and lower-level convergence that normally span the full width of the Pacific now occur closer to the dateline. The Southern Oscillation index (SOI) — the normalised sea-level pressure difference between Darwin, Australia and Tahiti — drops strongly negative during El Niño (typically −1 to −2 standard deviations), reflecting the anomalously high pressure over Australia and low pressure over the central Pacific. The weakened Walker circulation is both a product of El Niño and, through reduced trade winds, a driver of further El Niño development.',
            color: BRAND.amethyst,
          },
          {
            id: 'teleconnections',
            label: 'Global teleconnections activate',
            description: 'The shift in tropical convection excites atmospheric Rossby and Kelvin wave trains that propagate into the extratropics, reorganising the global circulation within 2–6 weeks. The Pacific-North America (PNA) pattern strengthens, shifting the jet stream southward and bringing warm, dry conditions to western Canada and Alaska and wet conditions to the Gulf Coast. Across the tropics, anomalous subsidence drives drought in eastern Australia, Indonesia, the Philippines, southern Africa, northeastern Brazil, India, and Central America. Flooding affects coastal Peru, Ecuador, Bolivia, and Argentina. Over the Atlantic, increased upper-level westerly wind shear disrupts tropical cyclone development, typically suppressing Atlantic hurricane activity by 30–50%. The Intertropical Convergence Zone shifts, altering rainfall from East Africa to the Sahel.',
            color: BRAND.coral,
          },
          {
            id: 'return',
            label: 'Return to neutral / La Niña',
            description: 'ENSO events are self-terminating. As the western Pacific discharges its heat content, the subsurface ocean heat reservoir is depleted and negative feedback mechanisms begin to dominate. Reflected Rossby waves — generated as the downwelling Kelvin wave reflects off the South American coast — travel westward along the equatorial Pacific and then reflect back east as upwelling Kelvin waves, progressively cooling the eastern Pacific thermocline and restoring the tilt. Evaporative cooling of the now-warm eastern Pacific surface also acts as a negative feedback. Typically 12–18 months after El Niño onset, SSTs return to neutral, often transitioning into La Niña as the system overshoots — the "recharge" phase refills the western Pacific heat reservoir, re-establishing the conditions for the next El Niño cycle to begin. The full ENSO cycle period ranges from 2–7 years.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'trade-winds', to: 'bjerknes',       label: 'MJO westerly wind burst perturbs trade-wind state' },
          { from: 'bjerknes',    to: 'el-nino',         label: 'Bjerknes loop amplifies warm anomaly to full El Niño' },
          { from: 'el-nino',     to: 'walker-weak',     label: 'Eastward warm pool displacement weakens Walker cell' },
          { from: 'walker-weak', to: 'teleconnections', label: 'Rossby wave trains carry anomalies to extratropics' },
          { from: 'teleconnections', to: 'return',      label: 'Heat discharge and upwelling Kelvin waves restore thermocline' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the Walker circulation and how does it operate under normal (non-ENSO) conditions in the tropical Pacific?',
          a: [
            'The Walker circulation is a north-south atmospheric overturning cell driven by the temperature difference between the equator and the poles; under normal conditions it blows surface air northward in the Pacific and southward at upper levels, maintaining the mid-latitude jet stream',
            'The Walker circulation is the deep ocean thermohaline overturning circulation in the Pacific, driven by density differences between warm surface water and cold deep water; it transports heat from the tropics poleward and is separate from, but coupled to, atmospheric circulation',
            'The Walker circulation is an east-west atmospheric overturning cell in the tropical Pacific driven by the SST gradient between the warm western Pacific (~29–30°C (84–86°F)) and cooler eastern Pacific (~22–24°C (72–75°F)); surface trade winds blow westward, air rises over the warm western Pacific and Maritime Continent, flows eastward at upper levels, descends over the cool eastern Pacific, and returns westward — while simultaneously driving the piling up of warm water in the west and cold upwelling in the east',
            'The Walker circulation is the Pacific trade wind system that blows eastward along the equator during El Niño, reversing direction compared to normal conditions; this eastward flow is what drives warm water from west to east and initiates El Niño warming',
          ],
          correct: 2,
          explain: 'The Walker circulation is an east-west (zonal) atmospheric circulation cell confined to the tropical Pacific, not a north-south or thermohaline circulation. Under normal conditions, the warm western Pacific warm pool (~29–30°C (84–86°F)) generates strong convection and rising air over Indonesia and the Maritime Continent. This air diverges at upper levels and flows eastward, descending over the cooler eastern Pacific (~22–24°C (72–75°F)) where evaporative cooling and coastal upwelling suppress convection. At the surface, the trade winds return westward, closing the loop. Critically, the trade winds actively reinforce the very SST gradient that drives them: by dragging warm surface water westward (building the warm pool) and driving upwelling of cold water in the east (maintaining eastern Pacific cooling). This self-reinforcing circulation is the "normal" state that El Niño disrupts. Option A describes meridional (north-south) circulation, not the zonal Walker cell. Option B confuses the Walker circulation with the oceanic thermohaline circulation, which operates on century timescales and is driven by density differences rather than SST gradients across the tropical Pacific. Option D reverses the normal wind direction — trade winds blow westward (easterly), not eastward, under normal conditions; the eastward surge of warm water during El Niño onset results from the weakening or reversal of the trades, not from the Walker circulation blowing the other way.',
        },
        {
          q: 'How does the Bjerknes feedback amplify El Niño from an initial perturbation into a full-scale event?',
          a: [
            'The Bjerknes feedback is a negative feedback that stabilises the tropical Pacific by damping perturbations; when trade winds weaken slightly, the Bjerknes feedback restores them to normal by cooling the eastern Pacific through increased evaporation, preventing small wind variations from growing into full El Niño events',
            'The Bjerknes feedback is a positive ocean-atmosphere feedback loop: a weakening of trade winds reduces upwelling of cold water in the eastern Pacific → eastern Pacific SSTs warm → east-west SST gradient decreases → trade winds weaken further → less upwelling → more warming; this self-reinforcing amplification converts a small initial trade-wind perturbation (often triggered by a westerly wind burst) into a fully developed El Niño event over several months',
            'The Bjerknes feedback operates solely in the atmosphere: weakened trade winds reduce evaporation from the ocean surface, warming the atmosphere, which reduces the land-sea temperature contrast, which further weakens the trades; the ocean plays no role in the feedback beyond providing latent heat to the atmosphere',
            'The Bjerknes feedback is a thermodynamic process in which the western Pacific warm pool gradually cools by releasing heat to the atmosphere through radiation and evaporation; as it cools, the east-west SST gradient weakens, which reduces the trade winds, which allows the cooled western Pacific water to flow eastward — this is why El Niño events always begin with western Pacific cooling',
          ],
          correct: 1,
          explain: `The Bjerknes feedback is a positive feedback — it amplifies perturbations rather than damping them. Jacob Bjerknes identified in 1969 that the tropical Pacific ocean and atmosphere are so tightly coupled that a perturbation in one drives a response in the other that reinforces the original perturbation. The chain runs as follows: (1) trade winds weaken (perhaps triggered by a westerly wind burst from the MJO); (2) less wind-driven upwelling means less cold water reaches the eastern Pacific surface; (3) eastern Pacific SSTs rise; (4) the east-west SST gradient across the Pacific decreases; (5) the Walker circulation (which is driven by this gradient) weakens; (6) surface trade winds weaken further; (7) back to step 2 — a closed positive feedback loop. This process can convert a modest MJO-related westerly wind burst in January into a fully mature El Niño by December. Option A incorrectly labels the Bjerknes feedback as negative (stabilising) — if it were negative, El Niño events would be self-limiting from their earliest stages and would never grow to the global-scale events observed. Option C is wrong because it omits the ocean\'s central role — the feedback requires the ocean (thermocline changes, upwelling reduction, SST warming) to close the loop; atmospheric-only processes could not produce the observed amplification. Option D incorrectly attributes El Niño initiation to western Pacific cooling and mischaracterises the feedback as purely thermodynamic; El Niño begins with eastern Pacific warming (enabled by reduced upwelling), not western Pacific cooling.`,
        },
        {
          q: 'What does the Niño 3.4 index measure, and what thresholds define El Niño and La Niña conditions?',
          a: [
            'The Niño 3.4 index measures the sea-surface temperature anomaly averaged over the region 5°N–5°S, 120–170°W in the central-eastern tropical Pacific; El Niño is defined as a Niño 3.4 anomaly ≥+0.5°C (33°F) sustained for five consecutive overlapping three-month periods (as the Oceanic Niño Index or ONI), and La Niña as ≤−0.5°C (31°F) for the same duration',
            'The Niño 3.4 index measures the anomaly in sea-level pressure over the central Pacific relative to the Indian Ocean; El Niño is defined by a pressure anomaly greater than +1 hPa for three consecutive months, and La Niña by a pressure anomaly less than −1 hPa',
            'The Niño 3.4 index measures the depth of the thermocline at 3.4°N latitude in the Pacific, averaged from 120°W to 170°W; El Niño is defined as a thermocline deeper than 100 m (328 ft) for two consecutive months, and La Niña as a thermocline shallower than 50 m (164 ft)',
            'The Niño 3.4 index is the Southern Oscillation Index (SOI) normalised to a 3.4-unit scale; El Niño corresponds to an SOI value less than −3.4 standard deviations and La Niña to an SOI greater than +3.4 standard deviations',
          ],
          correct: 0,
          explain: `The Niño 3.4 index is the workhorse ENSO metric used operationally by NOAA and virtually all climate agencies worldwide. It measures the departure of sea-surface temperature from the long-term climatological average in the box 5°N–5°S, 120–170°W — a region in the central-eastern tropical Pacific that lies at the heart of ENSO\'s SST variability and whose temperature anomalies most directly represent the state of the ENSO cycle. The Oceanic Niño Index (ONI) is computed as the three-month running mean of the Niño 3.4 anomaly; this smoothing filters out short-lived fluctuations. NOAA defines El Niño conditions as ONI ≥+0.5°C (33°F) for five consecutive overlapping three-month periods and La Niña as ONI ≤−0.5°C (31°F) for the same duration. The five-season persistence requirement distinguishes bona fide ENSO events from noise. Option B describes a pressure-based index resembling the Southern Oscillation Index (SOI), which measures the Darwin-Tahiti sea-level pressure difference — a real ENSO indicator, but not the Niño 3.4 index, which is an SST-based measure. Option C confuses Niño 3.4 with a thermocline-depth measurement; the "3.4" refers to the longitudinal boundaries of the monitoring region (120°W to 170°W), not to a latitude (3.4°N). Option D confuses the Niño 3.4 index with the SOI; they are related (both track ENSO) but measure different physical quantities — one is an SST anomaly, the other a pressure difference — and neither is simply a rescaled version of the other.`,
        },
        {
          q: 'How does El Niño affect Atlantic hurricane activity, and what is the physical mechanism responsible?',
          a: [
            'El Niño increases Atlantic hurricane activity because warm Pacific SSTs spread eastward into the Gulf of Mexico and Caribbean, raising sea-surface temperatures that fuel hurricane intensification; during El Niño years the Atlantic hurricane season is typically more active than average',
            'El Niño suppresses Atlantic hurricane activity through increased vertical wind shear over the tropical Atlantic; the anomalous upper-level westerly winds associated with El Niño\'s shifted Walker circulation increase the wind shear between lower and upper tropospheric levels, disrupting the vertical structure of developing tropical cyclones and preventing them from intensifying into hurricanes',
            'El Niño affects Atlantic hurricanes solely through changes in sea-surface temperature: cooler Atlantic SSTs during El Niño reduce the energy available to tropical cyclones; the link is direct and thermal, with no atmospheric dynamical component involved',
            'El Niño has no significant effect on Atlantic hurricane activity because the Pacific and Atlantic basins are separated by the Americas; atmospheric circulation anomalies cannot propagate across the continental divide, so Pacific SST changes are confined to Pacific weather systems',
          ],
          correct: 1,
          explain: 'El Niño is one of the strongest known modulators of Atlantic hurricane activity, and the mechanism is atmospheric rather than oceanic. During El Niño, the anomalous warming of the central-eastern Pacific shifts the Walker circulation eastward, producing anomalous upper-level westerly winds over the tropical Atlantic and Caribbean. These westerly anomalies at 200 hPa increase the **vertical wind shear** — the change in wind speed and direction between upper-tropospheric (200 hPa) and lower-tropospheric (850 hPa) levels — over the Atlantic main development region. Tropical cyclones require a nearly uniform wind profile through the troposphere (low shear) to develop their organised, symmetric vortex structure; high shear tilts the storm, ventilates its warm core, and prevents the positive feedback between convection and surface pressure that drives intensification. Statistical analyses of Atlantic hurricane seasons show that active El Niño years (e.g., 1997) typically have 25–50% fewer named storms than neutral years, and inactive seasons (e.g., 1997 had only 8 named storms and 3 hurricanes). Option A is physically incorrect: El Niño does not raise Atlantic or Gulf SSTs through direct thermal connection to the Pacific; the Pacific and Atlantic thermoclines are not connected, and the Isthmus of Panama blocks any oceanic flow. While El Niño can indirectly influence Caribbean SSTs through atmospheric teleconnections, the dominant mechanism is shear, not thermal. Option C incorrectly reduces the mechanism to SST effects alone; the shear mechanism dominates the Atlantic hurricane response to ENSO. Option D incorrectly assumes atmospheric teleconnections cannot bridge the Americas; planetary-scale Rossby and Kelvin wave patterns propagate in the upper troposphere without regard to continental geography, which is precisely how ENSO drives climate anomalies across all continents.',
        },
        {
          q: 'What are the main teleconnection patterns associated with La Niña, and how do they differ from El Niño teleconnections?',
          a: [
            'La Niña teleconnections are identical to El Niño teleconnections in location but opposite in sign for all regions simultaneously: every place that experiences drought during El Niño experiences flooding during La Niña, and vice versa, with no exceptions because the two phases are perfectly symmetric',
            'La Niña teleconnections affect only the Southern Hemisphere because the cold anomalies in the eastern Pacific propagate poleward only in the Southern Hemisphere; the Northern Hemisphere experiences neutral or near-normal conditions during La Niña while the Southern Hemisphere sees pronounced drought or flooding anomalies',
            'La Niña suppresses the Walker circulation just as El Niño does, but through a different mechanism: instead of warming the eastern Pacific, La Niña cools the western Pacific, reducing convection there and weakening the ascending branch of the Walker cell; this produces almost identical atmospheric responses in both hemispheres to those seen during El Niño',
            'La Niña enhances the Walker circulation and intensifies trade winds, producing increased rainfall and flooding over Australia, Indonesia, and the Philippines; drought in coastal Peru and Ecuador; enhanced Atlantic hurricane activity due to reduced upper-level wind shear; a wetter and cooler Pacific Northwest of North America; and above-average rainfall in southern Africa and East Africa; though these patterns are broadly opposite to El Niño, the two phases are asymmetric — La Niña events are generally weaker and more variable than El Niño events, and some regions respond differently in magnitude or timing',
          ],
          correct: 3,
          explain: `La Niña, the cold phase of ENSO, produces a broadly opposite but not perfectly symmetric set of global teleconnections compared to El Niño. The key patterns are: **Australia and Maritime Continent** — enhanced convection, above-average rainfall, flooding (opposite of El Niño\'s drought); **South America (Peru, Ecuador)** — drought and below-average rainfall (opposite of El Niño\'s flooding); **Africa (eastern and southern)** — above-average rainfall in East Africa and southern Africa; **Atlantic basin** — reduced upper-level wind shear compared to El Niño, enabling more active Atlantic hurricane seasons; **North America (Pacific Northwest)** — cooler and wetter than average; **Indian monsoon** — tends toward above-normal rainfall; **northeastern Brazil** — wetter conditions. The asymmetry between phases is scientifically important: La Niña events average somewhat weaker peak anomalies than El Niño events, certain regions (like the northeastern United States) respond to La Niña in ways not simply the reverse of El Niño, and some La Niña events are compound or multi-year (e.g., 2010–2012), while El Niños rarely persist beyond 18 months. Option A overstates the symmetry: while many regions do flip sign between phases, the magnitude, timing, and some regional patterns are not perfectly mirrored. For example, La Niña\'s precipitation increases in Australia tend to be larger relative to La Niña amplitude than El Niño\'s reductions. Option B incorrectly restricts La Niña teleconnections to the Southern Hemisphere; La Niña has well-documented Northern Hemisphere effects including Pacific Northwest precipitation and Atlantic hurricane modulation. Option C mischaracterises the mechanism: La Niña strengthens (not weakens) the Walker circulation by enhancing the east-west SST gradient through cooling of the eastern Pacific; the ascending branch over the Maritime Continent intensifies, not weakens.`,
        },
      ],
    },
  ],
}

export default ensoOceanAtmosphere
