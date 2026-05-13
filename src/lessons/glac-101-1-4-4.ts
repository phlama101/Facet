import { AlertTriangle, Waves, Shield, Map, Activity, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const glacialHazards: Lesson = {
  id: 'glac-101-1-4-4',
  title: 'Glacial Hazards: Floods, Avalanches, and Ice Collapse',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'As glaciers retreat, they leave behind unstable ice, growing meltwater lakes, and weakened mountain slopes. Glacial lake outburst floods, ice avalanches, and surge glaciers represent some of the most destructive natural hazards in high-mountain environments — and climate change is making them both more frequent and more dangerous.',
  sources: [
    { org: 'ICIMOD',  title: 'ICIMOD — Glacial Lake Outburst Floods in the Hindu Kush Himalayas',              url: 'https://icimod.org' },
    { org: 'UNDRR',   title: 'UNDRR — Sendai Framework: Reducing Disaster Risk from Glacial Hazards',         url: 'https://undrr.org' },
    { org: 'IPCC',    title: 'IPCC SROCC — Special Report on Ocean and Cryosphere in a Changing Climate (2019)', url: 'https://www.ipcc.ch/srocc/' },
    { org: 'USGS',    title: 'USGS — Glacial Lake Outburst Floods: Science for a Risky World',                url: 'https://usgs.gov' },
    { org: 'Nature',  title: 'Veh et al. (2020) — Declining glacial lake outburst floods from Thian Shan',    url: 'https://www.nature.com/articles/s41558-019-0669-7' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'When ice becomes a hazard: floods, avalanches, and surges in a warming world',
      body: `Glaciers are not merely passive responders to climate change — they are active geomorphic agents whose retreat transforms the landscape in ways that create new and intensifying hazards. As glaciers shrink, they expose steep, unstable rock slopes that were previously buttressed and frozen. They leave behind moraines — ridges of unconsolidated glacial debris — that can dam the meltwater lakes forming in newly deglaciated valleys. They produce surges, sudden accelerations in ice flow that can destroy everything in a glacier's path. And they generate ice avalanches when hanging glaciers or glacier snouts become mechanically unstable.

**Glacial Lake Outburst Floods (GLOFs)** are among the most catastrophic hydrological events on Earth. They occur when a natural dam retaining a glacial lake fails suddenly, releasing vast volumes of water downstream as a torrent that can carry ice blocks, boulders, and sediment with enormous destructive power. **Moraine-dammed lakes** form where glacial retreat leaves a terminal moraine ridge as a dam; these are inherently unstable because moraines are unconsolidated till, not solid rock, and can fail through overtopping, piping (internal seepage), or earthquake triggering. **Ice-dammed lakes** form where a glacier blocks a valley or tributary; they drain periodically when the ice dam fails — either by flotation when water pressure exceeds the weight of the ice dam, or through subglacial drainage tunnels (**jökulhlaups**). The number and area of glacial lakes globally has increased by approximately 50% since 1990 as glaciers retreat, dramatically expanding GLOF exposure.

The **2013 Kedarnath disaster** in Uttarakhand, India, is among the most devastating GLOF events in recorded history. Heavy monsoon rainfall combined with the sudden drainage of a moraine-dammed lake above the Kedarnath temple triggered a debris flow that killed at least **5,748 people** (official figure; actual deaths estimated above 5,000–10,000, with many bodies never recovered) and destroyed infrastructure worth billions of dollars. The event highlighted the particular vulnerability of Hindu Kush–Himalayan communities to GLOF risk, where expanding glacial lakes sit above densely populated river valleys.

**Ice avalanches** represent a different but related hazard. Hanging glaciers on steep mountain slopes can detach suddenly when the ice becomes warm enough to slide on its meltwater-lubricated base, or when the supporting frozen ground beneath the glacier thaws. The **Kolka–Karmadon ice and rock avalanche** in North Ossetia (Russia) on September 20, 2002, began as a hanging glacier and rock mass detachment from the Kazbek massif that entrained and bulldozed Kolka Glacier entirely. The resulting mass of ice, rock, and debris travelled ~19 km down the Genaldon valley at speeds exceeding 180 km/h, killing approximately **140 people** including a film crew and scientists. It remains one of the most well-documented high-mountain mass movement disasters.

**Surge glaciers** are a distinct class: glaciers that periodically shift from slow creep to catastrophically rapid flow (100–1,000× normal velocity), typically due to a build-up and sudden release of meltwater at the glacier base that hydroplanes the glacier on a pressurised water layer. Surge behaviour is not directly caused by climate change but surging glaciers create hazards through rapid advance, ice dam formation, and altered meltwater routing. Their distribution — concentrated in Svalbard, Alaska, the Karakoram, and Iceland — helps define where ice-dam GLOFs are possible.`,
      keyTerms: [
        {
          term: 'GLOF (Glacial Lake Outburst Flood)',
          def: 'A sudden, large-magnitude flood produced when a glacial lake dam (moraine, ice, or bedrock) fails catastrophically, releasing stored water with high sediment and ice loads at destructive velocities.',
        },
        {
          term: 'moraine-dammed lake',
          def: 'A proglacial lake retained by an unconsolidated terminal moraine ridge; vulnerable to failure by overtopping, piping, or seismic triggering; the most common type of GLOF source in the Himalayas.',
        },
        {
          term: 'jökulhlaup',
          def: 'An Icelandic term for a glacially outburst flood, originally describing subglacial volcanic-melt floods in Iceland; now used broadly for ice-dammed lake drainage events, whether triggered by geothermal activity, flotation, or subglacial drainage.',
        },
        {
          term: 'ice avalanche',
          def: 'The sudden detachment and rapid downslope movement of ice from a hanging glacier, serac, or glacier snout; particularly dangerous when coupled with rock slope failure to produce a combined ice-rock avalanche.',
        },
        {
          term: 'surge glacier',
          def: 'A glacier that periodically shifts from slow creep to catastrophically fast flow (100–1,000× normal speed) through a switch in basal hydrological regime; can advance kilometres in months and form ice dams.',
        },
        {
          term: 'GLOF early warning system',
          def: 'Monitoring and alert infrastructure combining lake-level sensors, seismic instruments, satellite radar change detection, and community communication systems to provide advance warning of GLOF events to downstream populations.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'GLOF Mechanisms and the Kedarnath Disaster',
      body: `GLOFs are not random events — they follow predictable physical failure mechanisms tied to dam type, lake volume, triggering factors, and downstream valley geometry. Understanding these mechanisms enables better hazard mapping, early warning system design, and risk reduction. The 2013 Kedarnath event illustrates how GLOF risk compounds with seasonal monsoon loading and the particular vulnerabilities of Hindu Kush–Himalayan communities.`,
      cards: [
        {
          name: 'Moraine Dam Failure: Mechanisms and Cascade',
          icon: Waves,
          color: BRAND.accent,
          desc: 'moraine dams are unconsolidated glacial till — not solid rock; failure occurs by: (1) overtopping when lake fills to dam crest, generating erosional downcut; (2) piping — internal seepage channels enlarge through water pressure until the dam is undermined; (3) ice-calving waves — ice calving from a retreating glacier into the lake generates displacement waves that overtop the dam; (4) seismic triggering — earthquakes liquify or destabilise the unconsolidated moraine; once failure initiates, it is typically self-reinforcing and propagates to full drainage',
          examples: '2013 Kedarnath (India): moraine-dammed lake above Chorabari Glacier, combined with extreme monsoon rainfall, triggered a debris flow killing 5,748+ people. Imja Lake (Nepal): one of the fastest-growing glacial lakes in the Himalayas, dammed by a moraine ~30 m high; volume reached ~100 million m³ by 2016; subject of an international GLOF risk reduction engineering project that lowered the lake level by ~3.4 m in 2016. Dig Tsho (Nepal, 1985): moraine dam failure released 5 million m³ of water and debris, killing 5 people and destroying the nearly-completed Namche Hydropower Project in minutes.',
        },
        {
          name: 'Ice-Dammed Lakes and Jökulhlaups',
          icon: Activity,
          color: BRAND.gold,
          desc: 'ice dams form where glaciers block tributary valleys or proglacial basins; drainage occurs when: (1) the lake level rises to the point where the water pressure exceeds the ice dam\'s weight, flotation occurs at the base, and a subglacial drainage path opens; (2) water temperature or geothermal heating melts a tunnel through the dam; (3) earthquake or calving event destabilises the ice dam; jökulhlaups from ice-dammed lakes can be periodic (same glacier, multiple events) or one-time; peak discharge can be enormous relative to lake volume',
          examples: 'Vatnajökull, Iceland (1996): subglacial eruption under Grímsvötn created a jökulhlaup with peak discharge ~45,000 m³/s — comparable to the Amazon River — crossing the Skeiðarársandur outwash plain in hours. Merzbacher Lake (Kyrgyzstan): drains annually from ice-dam flotation; produces predictable but destructive floods downstream. Russell Fjord, Alaska: periodically blocked by Hubbard Glacier advances; if the dam holds as the glacier advances further, it could impound a lake larger than Lake Ontario before failing.',
        },
        {
          name: 'Expanding Glacial Lakes: Growing Risk',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: 'global satellite inventories show glacial lake number increased by ~53% and area by ~51% between 1990 and 2018 as glaciers retreated; new lakes form at glacier termini and in overdeepened basins as ice melts away; the largest volume lake systems are in Tibet, Patagonia, and the Himalayas; population exposure to GLOF risk has increased in parallel with lake growth; climate projections indicate continued lake expansion through at least 2060–2070 across all major mountain ranges',
          examples: 'Hindu Kush–Himalayas: ~5,000 glacial lakes inventoried; 203 assessed as potentially dangerous by ICIMOD. Nepal alone has ~21 high-risk glacial lakes. Between 2000 and 2018, glacial lakes in High Mountain Asia grew by ~13% in total area. Peru (Cordillera Blanca): Palcacocha Lake, above Huaraz city (300,000 people), has grown from 0.5 to 17 million m³ since the 1960s due to glacier retreat; it was the source of a 1941 GLOF that killed ~4,000–6,000 people; now monitored 24/7.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Ice Avalanches, Surge Glaciers, and Early Warning',
      body: `Ice avalanches and surge glaciers occupy different positions in the hazard landscape — one is sudden and localised, the other is periodic and spatially extensive. Both illustrate how ice dynamics, not just melt, create hazards. Early warning systems for glacial hazards are advancing rapidly, combining satellite monitoring with ground sensors and community-based alert systems.`,
      cards: [
        {
          name: 'Ice Avalanches and the Kolka–Karmadon Event',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'hanging glaciers on slopes >35° are mechanically unstable once basal temperatures warm above −10°C; progressive warming enables basal sliding; serac collapse and ice cliff failures are common on steep glacier fronts; rock slope destabilisation (paraglacial relaxation of formerly ice-supported valley walls) compounds the hazard; large ice-rock avalanches can travel at >100 m/s and affect valleys tens of kilometres below the source',
          examples: 'Kolka–Karmadon (Russia, 2002): ~130 million m³ of ice and rock detached from the Dzhimarai-Khokh headwall at ~4,500 m elevation; entrained Kolka Glacier entirely; debris transported 19 km at up to 180 km/h; killed ~140 people including a film crew. Hintereisferner ice avalanche (Austria, 2017): serac collapse onto a popular hiking route. Chamoli disaster (India, 2021): rock and ice detachment from Ronti Peak triggered a cascading event that destroyed two hydropower dams and killed 200+ people. Monte Rosa hanging glacier (Italy): monitored continuously for serac stability; several large calving events in past two decades.',
        },
        {
          name: 'Surge Glaciers: Periodic Catastrophic Advance',
          icon: Map,
          color: BRAND.jade,
          desc: 'surge glaciers alternate between slow quiescent phases (build-up of ice in reservoir zone) and rapid surge phases (100–1,000× normal velocity) lasting months to years; surges driven by thermal or hydrological switch at the glacier base — cold-to-warm thermal switch (Svalbard) or pressurised water build-up (temperate glaciers); surge advances can create ice dams, reroute rivers, override infrastructure, and produce dramatic terminal moraine ridges; ~1% of glaciers globally are surge-type',
          examples: 'Variegated Glacier (Alaska): surged 1982–1983 at up to 65 m/day; terminus advanced ~2 km; extensively studied. Karakoram has one of the highest densities of surge glaciers globally — Braldu and Hispar glaciers have historically dammed lakes upstream. Medvezhiy Glacier (Tajikistan): surged 7 times between 1916 and 1974, each time damming Abdukagor River and threatening downstream valleys. Svalbard: ~13% of glaciers are surge-type; surges not accelerated by climate change but their frequency can be modulated by meltwater availability.',
        },
        {
          name: 'GLOF Early Warning Systems',
          icon: Shield,
          color: BRAND.ruby,
          desc: 'modern GLOF early warning systems combine: (1) automated lake-level sensors with telemetry to downstream warning centres; (2) seismic sensors detecting dam failure or mass movements; (3) infrasound arrays detecting large ice and rock movements; (4) satellite radar (Sentinel-1 SAR) for continuous lake monitoring regardless of cloud cover; (5) community-based alert systems with sirens, SMS, and radio; (6) glacial lake risk assessments using topographic and dam stability modelling',
          examples: 'Imja Lake EWS (Nepal): 7 automatic water-level stations installed 2016–2018; connected to downstream community warning sirens in Chhukung village. ICIMOD multi-hazard EWS in Hindu Kush Himalaya: covers 5,000+ km² and links glacier lake monitoring to community preparedness. Peru Palcacocha EWS: 24/7 monitoring of lake level and moraine stability; coordinates with Huaraz city emergency services. Pakistan (GLOFAS): satellite-based GLOF forecasting system covering Hindukush–Karakoram glacial lake inventory; issues hazard alerts downstream.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Glacial Retreat to Flood: The GLOF Event Chain',
      body: 'Follow the physical chain from glacier retreat and lake formation through dam failure to downstream flood impact — and where early warning systems can interrupt the chain.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the physical chain from glacier retreat through glacial lake outburst flood to downstream impacts',
        nodes: [
          {
            id: 'glacier-retreat',
            label: 'Glacier Retreat and Overdeepening',
            description: 'As a glacier retreats, it leaves behind an overdeepened basin (carved by glacial erosion) and a terminal moraine ridge at its former maximum extent. Meltwater and precipitation accumulate in the basin, forming a proglacial lake.',
            color: BRAND.accent,
          },
          {
            id: 'lake-growth',
            label: 'Proglacial Lake Formation and Growth',
            description: 'The lake expands as the glacier retreats further. Iceberg calving from the glacier terminus creates wave action. The moraine dam is subject to slow seepage (piping). Lake volume and hydrostatic pressure on the moraine increase year by year.',
            color: BRAND.jade,
          },
          {
            id: 'trigger',
            label: 'Dam Failure Trigger',
            description: 'Triggering events: extreme rainfall overtopping the dam; ice/rock avalanche into the lake generating displacement wave; earthquake destabilising the moraine; progressive piping failure as seepage enlarges internal channels. Failure often occurs very rapidly once initiated.',
            color: BRAND.gold,
          },
          {
            id: 'outburst-flood',
            label: 'GLOF Peak Discharge',
            description: 'Once the dam breaches, stored water (millions to hundreds of millions of m³) drains in hours. Peak discharge can be thousands to tens of thousands of m³/s. The flood entrains boulders, sediment, and ice blocks, transforming into a hyperconcentrated debris flow that has far greater destructive power than clear water.',
            color: BRAND.coral,
          },
          {
            id: 'downstream-impact',
            label: 'Downstream Valley Destruction',
            description: 'The GLOF scours valley sides, removes bridges, destroys settlements and infrastructure, and deposits massive debris fans. The 2013 Kedarnath GLOF killed 5,748+ people. Valleys can be reshaped in hours. Risk is highest within 50–100 km of the lake source.',
            color: BRAND.ruby,
          },
          {
            id: 'early-warning',
            label: 'Early Warning and Risk Reduction',
            description: 'Lake-level sensors and seismic arrays detect dam instability or failure; telemetry sends automated alerts to downstream communities within minutes; sirens and SMS messages trigger evacuation. Engineering interventions (siphons, spillways) can lower lake levels before failure. Satellite SAR monitors lake size continuously.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'glacier-retreat',   to: 'lake-growth',        label: 'Meltwater fills overdeepened basin behind moraine' },
          { from: 'lake-growth',       to: 'trigger',            label: 'Increasing lake volume raises dam stress' },
          { from: 'trigger',           to: 'outburst-flood',     label: 'Dam breach releases stored water catastrophically' },
          { from: 'outburst-flood',    to: 'downstream-impact',  label: 'Flood scours valley, entrains debris, destroys infrastructure' },
          { from: 'lake-growth',       to: 'early-warning',      label: 'Satellite and ground sensors monitor lake size and dam stability' },
          { from: 'trigger',           to: 'early-warning',      label: 'Seismic and level sensors detect failure initiation' },
          { from: 'early-warning',     to: 'downstream-impact',  label: 'Timely alerts reduce casualties (not always successful)' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Moraine-dammed glacial lakes are considered more hazardous than bedrock-dammed lakes. What is the physical reason for this, and what are the main failure mechanisms that distinguish moraine dams from solid rock dams?',
          a: [
            'Moraine-dammed lakes are larger and hold more water than bedrock-dammed lakes, making their failure more dangerous purely because of volume — the structural properties of the dam itself are not the key factor',
            'Moraine dams are composed of unconsolidated till — mixed sediment without the cohesion or structural integrity of bedrock; they are vulnerable to overtopping with rapid erosional downcut, piping (progressive internal seepage erosion), and liquefaction during earthquakes; once failure initiates in a moraine dam, positive feedback accelerates breaching, whereas a bedrock dam must fail all at once rather than progressively',
            'Moraine dams are more hazardous because they are always taller than bedrock dams; the extra height creates greater hydraulic head that produces higher peak discharge when the dam fails',
            'Moraine dams are inherently unstable because the ice within them is melting, reducing dam volume by ~5% per year; this steady volume loss is what drives failure, rather than any hydrological trigger',
          ],
          correct: 1,
          explain: 'The key distinction is the material properties of the dam. Bedrock dams are cohesive, have shear strength comparable to rock, and cannot be piped or eroded through by seepage — failure requires overtopping to the point of rock scour or structural fracture. Moraine dams are composed of glacially deposited till: a mixture of boulders, gravel, sand, and clay with no cohesion between particles beyond frictional contact. Three major failure mechanisms apply: (1) Overtopping — if lake level rises above the crest (from heavy rain, a calving wave, or ice/rock avalanche displacement), water begins eroding the downstream face; fine material is removed rapidly, and the dam progressively downcuts and fails; (2) Piping — water seeping through the dam follows small paths of least resistance; if flow velocity is sufficient to entrain particles (the "critical shear stress" is exceeded), internal erosion progressively enlarges the seepage channel until the roof collapses into a drainage tunnel; this can occur without visible surface signs; (3) Seismic liquefaction — an earthquake can cause saturated, unconsolidated sediment to momentarily behave like a liquid, causing the dam to flow or slump catastrophically. Option A is wrong — dam material is the critical distinguishing factor, not solely volume. Option C is wrong — moraine dam height varies greatly and height alone does not determine hazard relative to bedrock dams. Option D is wrong — ice within moraines is often already melted or minimal; the hazard is structural, not volumetric ice loss.',
        },
        {
          q: 'The 2002 Kolka–Karmadon ice-rock avalanche in Russia killed approximately 140 people and travelled 19 km down the Genaldon valley. What combination of factors made this event so much more destructive than a typical glacier calving or serac collapse?',
          a: [
            'The event was catastrophic primarily because of the large human population living directly on the glacier tongue, which is unusual for Caucasus valleys and would not be a risk factor in typical high-mountain environments',
            'A combination of factors amplified the destruction: the detachment included not just glacier ice but a large rock slope failure from ~4,500 m, which entrained the entire Kolka Glacier (not just a serac); the combined ice-rock mass had enormous momentum and low friction on the steep valley floor; the event transformed into a hyperconcentrated flow that maintained high velocity over 19 km; the speed (~180 km/h) meant there was effectively no warning time for valley inhabitants',
            'The event was catastrophic because the glacier was a surge glacier that had been in an active surge phase for 10 years prior to the catastrophic collapse; surge motion pre-fractured the ice making it uniquely vulnerable to detachment as a single unit',
            'The event killed so many people primarily because a film crew and scientists had deliberately camped near the glacier terminus to observe what they expected would be a routine calving event; without this coincidence, the same physical event would have been unobserved and recorded as a minor hazard',
          ],
          correct: 1,
          explain: 'The Kolka–Karmadon event was exceptional in scale for several compounding reasons. First, the source was not a single serac but a combined rock and ice slope failure from the Dzhimarai-Khokh headwall — the mobilised mass estimated at ~130 million m³ included both the hanging glacier and a substantial rock component. Second, the descending mass entrained Kolka Glacier in its entirety — a process called "glacier entrainment" where the high-velocity impact overrode and mobilised the glacier, adding its ~100 m³ × several km² of ice to the flowing mass. Third, the confined valley topography (steep walls, narrow floor) focused the flow and prevented lateral dispersion, maintaining high momentum over 19 km. Fourth, the transition from solid ice-rock to a partially liquefied flow reduced friction and enabled the extreme run-out distance. Fifth, the speed (~50 m/s average, with peak estimates much higher) meant warning time was measured in seconds to minutes — insufficient for evacuation. The event was also notable scientifically because it was studied retrospectively in detail, producing important insights into large-scale ice-rock avalanche dynamics. Option A is wrong — while a film crew was present, the valley was also inhabited and the event destroyed the village of Nizhniy Karmadon. Option C is incorrect — Kolka was not in an active surge phase immediately prior; some scientists have noted prior anomalous behaviour but it was not a documented surge event. Option D contains a partial truth but misidentifies casualty causation — valley inhabitants, not just the film crew, were among the dead.',
        },
        {
          q: 'Global inventories show that the number and area of glacial lakes have increased by approximately 50% since 1990. Why does this mean GLOF risk is growing even in areas where no significant glacier retreat occurred before?',
          a: [
            'GLOF risk is growing because population growth in mountain regions has increased the number of people living in valleys downstream of glaciers, while the glacial lakes themselves have not significantly changed; risk = hazard × vulnerability, and only the vulnerability component has changed',
            'As glaciers retreat into higher elevations, newly exposed overdeepened basins fill with meltwater, creating lakes that did not exist in living memory or in historical hazard assessments; communities downstream have never experienced a GLOF from these new lakes, have no cultural memory of the hazard, and are often not included in existing risk maps — creating exposure to a hazard that is both physically new and institutionally unrecognised',
            'Glacial lake expansion increases GLOF risk only in regions with active seismic zones, because moraine dams in non-seismic regions cannot fail without an earthquake trigger; the 50% growth in lake area only matters for earthquake-prone mountain ranges',
            'The 50% increase in lake area increases GLOF risk because larger lakes always fail faster and produce larger peak discharges than smaller lakes; lake volume is the only variable that controls GLOF magnitude and frequency',
          ],
          correct: 1,
          explain: 'The formation of new glacial lakes in recently deglaciated terrain creates a qualitatively new hazard in areas that have no historical experience with GLOFs. This matters for several reasons: (1) Hazard mapping and land use planning are typically based on historical events — communities settled in valleys where no GLOF has ever been recorded have often not been assessed for this risk, even if a new lake formed in the past 10–20 years upstream; (2) Cultural knowledge and institutional memory of GLOF risk do not exist for new lakes — contrast with communities near Palcacocha (Peru) or Imja (Nepal), which have historical GLOF experience and some institutional awareness; (3) Overdeepened basins (formed by glacial erosion below the surrounding terrain) often have no natural drainage outlet, meaning water accumulates until it either slowly drains subglacially or builds up until the moraine is overtopped — a threshold behaviour with no gradual warning; (4) The combination of new lakes, inadequate mapping, growing downstream populations, and the absence of early warning systems creates a "hazard surprise" scenario documented in Peru, Nepal, Bhutan, and Pakistan. Option A only addresses vulnerability, not the equally important hazard side. Option C is wrong — moraine dams can fail through multiple mechanisms (overtopping, piping) that do not require seismicity. Option D is partially correct (volume does affect peak discharge) but wrong that lake volume is "the only variable" — dam type, geometry, valley gradient, and debris load all matter greatly.',
        },
        {
          q: 'Surge glaciers periodically accelerate to 100–1,000 times their normal flow velocity. What drives a glacier surge, and why do surge glaciers create unique hazards that non-surging glaciers do not?',
          a: [
            'Surges are caused by climate change: warmer temperatures increase surface melt, which lubricates the glacier base and triggers the velocity increase; as climate warms, all glaciers will eventually become surge-type',
            'Surges are driven by a switch in basal hydrological regime — either a thermal transition (cold bed becomes temperate and begins sliding) or a hydrological switch where subglacial drainage reorganises from efficient channelled flow to distributed pressurised sheets that hydroplane the glacier; this creates unique hazards including rapid terminus advance that overrides infrastructure, formation of ice dams that can impound large upstream lakes, and sudden changes in meltwater routing that flood valley bottoms',
            'Surge glaciers accelerate because massive snowfalls in their accumulation zones add weight that compresses the glacier and pushes it forward; the surge is simply a glacier responding to an unusual accumulation event, and ceases when the snowfall returns to normal',
            'Surge behaviour is not hazardous because surge glaciers always announce themselves by calving large icebergs months before the surge begins; downstream communities have ample warning and can evacuate before the glacier advance reaches populated areas',
          ],
          correct: 1,
          explain: 'Surge mechanisms are distinct from climate-driven acceleration and are not simply explained by surface melt increase. Two primary mechanisms are recognised: (1) Thermal surges (Svalbard-type): during the quiescent phase, a cold-based glacier accumulates ice in a reservoir zone; eventually the ice becomes thick enough that geothermal heat plus frictional heating at the base warms the basal ice to the pressure melting point; basal sliding initiates, triggering rapid flow; (2) Hydrological surges (Alaskan-type): the glacier alternates between an efficient subglacial drainage system (low water pressure, slow flow) and a distributed pressurised drainage system where many small linked cavities carry water at high pressure; the switch to distributed drainage hydroplanes the glacier on a pressurised water layer. Unique hazards from surge behaviour include: (a) Rapid terminus advance — Bering Glacier surged ~100 m/day in 1993–1994, advancing into a proglacial lake and threatening infrastructure; (b) Ice dam formation — Hubbard Glacier (Alaska) periodically surges across the mouth of Russell Fjord, creating an ice-dammed lake that threatens a catastrophic release; (c) Jökulhlaup generation — ice dams formed by surging glaciers store water that drains suddenly when the dam fails; (d) Route disruption — mountain passes blocked by surging glacier ice. Option A incorrectly attributes surges to climate change; surge glaciers have always existed and are not becoming more common with warming (though their meltwater availability may modulate surge periodicity). Option C describes a simple overloading mechanism that does not explain the characteristic quiescent-surge cycle. Option D is wrong — surges can initiate and advance kilometres in hours to days with no reliable advance warning from calving alone.',
        },
        {
          q: 'GLOF early warning systems (EWS) combine multiple technologies to provide advance warning to downstream communities. What is the most fundamental limitation of even the best EWS, and how does this affect risk management strategy?',
          a: [
            'The most fundamental limitation is cost — EWS systems are prohibitively expensive even for wealthy countries; the most practical risk management strategy is therefore to encourage all mountain communities to relocate to coastal areas',
            'Even a well-designed EWS only addresses the warning stage — it cannot prevent the GLOF itself, and its effectiveness depends critically on: (1) adequate warning time (some GLOF travel times to populated areas are minutes to tens of minutes — sometimes insufficient for evacuation); (2) reliable communication reaching all vulnerable residents; (3) community preparedness and trust in the system; and (4) regular maintenance and calibration; this means EWS must be combined with land use planning, engineered hazard mitigation (lake level lowering), and community education to form a comprehensive risk management strategy',
            'The most fundamental limitation of EWS is that they can only detect lake-level changes, not the other GLOF trigger types (seismic, calving wave, piping); since most GLOFs are triggered by factors other than simple lake overflow, lake-level sensors miss the majority of GLOF events and provide false security',
            'Early warning systems are fully effective for GLOF risk management — the technology is mature enough that no GLOF in a monitored watershed can now cause significant casualties; the remaining risk is entirely in unmonitored, remote glacial lakes that are inaccessible to sensor installation',
          ],
          correct: 1,
          explain: 'This question addresses the fundamental difference between hazard monitoring and risk management. Even a technically perfect EWS — one that detects every GLOF initiation and sends an instant alarm — cannot by itself protect downstream populations if: (1) The travel time from dam to community is less than the time needed to evacuate — for Kedarnath-type events where villages are only 5–15 km below the source, a GLOF may arrive in 15–30 minutes even if detected instantly; (2) The communication system fails to reach all at-risk people — mobile networks in remote mountain areas are often unreliable, and language and literacy barriers can prevent effective alert reception; (3) Communities have not received training and do not know what to do when alarms sound — a siren is useless if the response is to stand and look at the mountain; (4) Evacuation routes are themselves vulnerable to GLOF inundation — if the single road out of a valley is the valley floor, a GLOF can cut off escape. This is why the international consensus is that EWS is one component of integrated risk reduction that must include: engineering interventions (siphons or spillways to lower lake levels before failure), land use zoning (preventing new construction in the highest-risk zones), community preparedness drills, and glacial lake hazard assessment informing development planning. Option C is wrong — modern EWS combines lake-level sensors, seismic sensors, infrasound arrays, and satellite radar, not just lake-level monitoring. Option D is wrong — even monitored systems have failed (e.g., Peru Palcacocha 1941 before modern EWS, and subsequent near-misses), and the 2021 Chamoli event in India — which involved a hydropower area — demonstrates that even well-monitored areas can be surprised by cascading hazards.',
        },
      ],
    },
  ],
}

export default glacialHazards
