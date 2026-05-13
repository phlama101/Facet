import { Waves, BarChart, Shield, TrendingDown, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const damsReservoirs: Lesson = {
  id: 'hyd-101-1-4-2',
  title: 'Dams, Reservoirs, and River Management',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'Dams have reshaped rivers on every inhabited continent — storing water, generating power, and controlling floods, but also trapping sediment, displacing millions, and transforming the ecology of rivers downstream. This lesson examines how dams work, what they cost, and why river managers are now removing some of them.',
  sources: [
    { org: 'ICOLD',  title: 'International Commission on Large Dams — World Register of Dams',             url: 'https://www.icold-cigb.org/GB/world_register/world_register_of_dams.asp' },
    { org: 'USGS',  title: 'USGS — Dams and Reservoirs',                                                  url: 'https://www.usgs.gov/special-topics/water-science-school/science/dams-and-reservoirs' },
    { org: 'USBR',  title: 'US Bureau of Reclamation — Elwha River Restoration',                         url: 'https://www.usbr.gov/pn/programs/elwha/' },
    { org: 'IHA',   title: 'International Hydropower Association — Hydropower Status Report 2023',        url: 'https://www.hydropower.org/publications/2023-hydropower-status-report' },
    { org: 'WWF',   title: 'WWF — Free-Flowing Rivers',                                                  url: 'https://www.worldwildlife.org/stories/why-free-flowing-rivers-matter' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Engineering rivers: power, water security, and the cost of control',
      body: `Humans have built more than **58,000 large dams** (dams over 15 m height) worldwide, plus hundreds of thousands of smaller structures, transforming rivers from dynamic, flood-pulsed systems into regulated chains of reservoirs. The primary purposes are hydroelectric power generation, irrigation water storage, municipal supply, and flood control. **Hydropower provides approximately 16% of global electricity** and about 71% of all renewable electricity generation — making it the world's dominant renewable energy source. In Brazil, Norway, and several other nations, hydropower supplies more than 80% of national electricity.

The **Three Gorges Dam** on China's Yangtze River is the world's largest power station by installed capacity. Completed in 2006, it produces **22,500 MW** of electricity — enough to power roughly 80 million homes — from its 32 turbine generators. The reservoir extends **410 km** upstream into Chongqing municipality, inundating 13 cities, 140 towns, and 1,350 villages. An estimated **1.3 million people** were displaced over 15 years of construction and filling, making it the largest forced relocation in dam history. Three Gorges exemplifies both the extraordinary scale of what large dams can achieve and the profound social costs they impose.

**Sediment trapping** is one of the most consequential and underappreciated impacts of dams. Rivers carry sediment loads — sand, silt, and clay — that build deltas, replenish beaches, and maintain channel geometry. A dam impounds not just water but the sediment that would otherwise pass downstream. Globally, dams trap an estimated **25–30% of the global river sediment load** that formerly reached the sea, with some estimates placing the total at 3–4 billion tonnes annually. The **Colorado River** now delivers almost no sediment to the Gulf of California; its delta, once 8,000 km² of wetlands and habitat for the vaquita porpoise, has largely dried and eroded. The **Nile Delta** is retreating at rates of 20–50 m per year in some areas because the Aswan High Dam (completed 1970) blocks the annual flood that formerly deposited 100 million tonnes of silt on the delta and in coastal waters.

**Flow regulation** by dams alters the **natural flow regime** — the characteristic pattern of high flows, low flows, seasonal flood pulses, and interannual variability that river ecosystems evolved with. Large storage dams flatten hydrographs: they hold back floods and release water in steady baseflows optimised for power generation or irrigation, rather than the seasonal pulses fish, floodplain vegetation, and riparian birds depend upon. Thermal regimes also change: water released from the deep, cold hypolimnion of a reservoir is colder in summer and warmer in winter than natural river water, stressing cold-water fish species downstream. **Dam removal** is now a significant management tool: the **Elwha River** restoration on Washington State's Olympic Peninsula involved removing two dams (Elwha Dam, 1911; Glines Canyon Dam, 1927), completed 2012–2014. Within three years, Chinook salmon returned 100 km upstream — the largest dam removal and river restoration project in US history.`,
      keyTerms: [
        {
          term: 'Storage Dam',
          def: 'Dam that creates a large reservoir to store water across seasons or years for regulated release. Enables year-round irrigation supply and firm hydropower generation regardless of natural flow variability.',
        },
        {
          term: 'Run-of-River Dam',
          def: 'Dam with minimal reservoir storage that generates power from the natural river flow as it passes through turbines. Lower environmental impact but power output fluctuates with natural discharge.',
        },
        {
          term: 'Sediment Trapping',
          def: 'Retention of sediment in reservoir behind a dam rather than passing downstream. Dams trap an estimated 25–30% of global river sediment, starving deltas and beaches of their natural supply.',
        },
        {
          term: 'Natural Flow Regime',
          def: 'The characteristic pattern of river flows — magnitude, timing, frequency, duration, and rate of change — that river ecosystems evolved with over millennia. Dams alter all five components.',
        },
        {
          term: 'Hydropower',
          def: 'Electricity generated from the potential energy of falling water. Provides ~16% of global electricity and ~71% of renewable electricity globally; the world\'s dominant renewable energy source.',
        },
        {
          term: 'Dam Removal',
          def: 'Deliberate dismantling of a dam to restore natural river flow and sediment transport. The Elwha River removals (2012–14) are the largest dam removal project in US history, restoring salmon access to 100 km of river.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'How Dams Work and What They Provide',
      body: `Dams function by impounding water behind a barrier, raising the water level and creating potential energy that can be released in controlled amounts. The key distinction between dam types lies in how much water they store relative to the river's annual flow — the **storage ratio** — which determines their ability to regulate seasonal variability and their environmental footprint.`,
      cards: [
        {
          name: 'Storage vs Run-of-River',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Storage dams hold months to years of river flow; run-of-river dams hold hours to days. Storage dams produce firm power and enable year-round irrigation but cause greater hydrological alteration.',
          examples: 'Hoover Dam (Nevada): storage ratio ~2 years of Colorado River flow. Bonneville Dam (Columbia River): run-of-river; power fluctuates weekly with flow. Three Gorges: 39 km³ active storage.',
        },
        {
          name: 'Hydropower Generation',
          icon: BarChart,
          color: BRAND.jade,
          desc: 'Power = ρ × g × Q × H × η (density × gravity × flow rate × head × efficiency). Higher head (tall dams) and higher flow both increase output. Turbine efficiency ~85–93%.',
          examples: 'Three Gorges: 22,500 MW installed, ~100 TWh/yr. Itaipu (Brazil/Paraguay): 14,000 MW, 100–106 TWh/yr. Grand Coulee (WA): 6,809 MW. Together these three dams equal ~15% of global hydropower.',
        },
        {
          name: 'Flood Control',
          icon: Shield,
          color: BRAND.gold,
          desc: 'Dams attenuate flood peaks by storing floodwaters and releasing them gradually. Effective when operated in forecast mode (draw down before storm to create storage). Fails if reservoir is full when storm arrives.',
          examples: 'Oroville Dam (CA): designed to reduce 100-yr flood on Feather River. Three Gorges reduced July 2020 Yangtze peak from projected ~85,000 m³/s to ~35,000 m³/s, protecting millions downstream.',
        },
        {
          name: 'Irrigation Storage',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Storage reservoirs capture wet-season flow for release during dry growing seasons. Essential in monsoon and snowmelt-dependent systems where peak flow and peak demand are out of phase.',
          examples: 'Aswan High Dam stores ~132 km³, enabling year-round irrigation of Egypt\'s Nile Valley. Without it, Egyptian agriculture would be limited to the 3-month flood season as before 1970.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Downstream Consequences and River Restoration',
      body: `Every dam creates a hydraulic and ecological discontinuity in the river. Downstream rivers are sediment-starved, thermally altered, and hydrologically simplified. Understanding these consequences has driven a shift in dam management toward **environmental flows** — deliberate releases designed to mimic aspects of the natural hydrograph — and, for obsolete dams, removal.`,
      cards: [
        {
          name: 'Delta Starvation',
          icon: TrendingDown,
          color: BRAND.ruby,
          desc: 'River deltas are built by sediment deposition at the coast. Upstream dams trap sediment, starving deltas of replenishment. Combined with sea level rise, delta retreat accelerates.',
          examples: 'Nile Delta: losing 20–50 m coastline/yr since Aswan Dam. Colorado Delta: reduced from 8,000 km² wetlands to near-zero since dams and diversions. Mekong Delta at risk from >800 upstream dams.',
        },
        {
          name: 'Thermal Pollution',
          icon: Waves,
          color: BRAND.amethyst,
          desc: 'Reservoir stratification stores cold water at depth (hypolimnion). Penstock releases cold, oxygen-poor water in summer; warm water in winter. Disrupts thermal cues for fish migration and spawning.',
          examples: 'Colorado River below Glen Canyon Dam: water temperature 8°C year-round (vs natural 0–25°C seasonal range). Native humpback chub and razorback sucker have declined severely; rainbow trout (non-native) now dominate.',
        },
        {
          name: 'Dam Removal',
          icon: Shield,
          color: BRAND.jade,
          desc: 'Removing dams restores sediment transport, thermal regimes, and fish passage. US has removed >1,800 dams since 1912; ~100/year now removed. Economic trigger: ageing small dams whose removal cost < repair cost.',
          examples: 'Elwha River, WA: two dams removed 2012–14. Chinook salmon returned within 3 years; 100+ km of previously blocked habitat reopened. Sediment plume delivered ~3M tonnes to Strait of Juan de Fuca.',
        },
        {
          name: 'Environmental Flows',
          icon: BarChart,
          color: BRAND.gold,
          desc: 'Deliberate releases from dams to simulate aspects of natural hydrograph — spring pulse, summer baseflow, flushing floods. Required by many dam relicensing agreements to meet ecological standards.',
          examples: 'Glen Canyon Dam Adaptive Management: experimental high flows (800–1,200 m³/s for 3–7 days) rebuild sandbars in Grand Canyon. 2012, 2013, 2016, 2018 releases restored beach habitat for camping and riparian vegetation.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Dam Impacts: From Construction to Downstream Delta',
      body: 'How a large storage dam transforms the river system from its reservoir upstream to the delta it starves far downstream.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how dam construction transforms a river system from reservoir formation and displacement upstream through downstream ecological changes to delta starvation at the coast',
        nodes: [
          {
            id: 'dam-construction',
            label: 'Dam Construction',
            description: 'Concrete or embankment structure placed across river valley. Reservoir fills upstream; communities flooded and displaced. Three Gorges displaced 1.3M people over 15 years.',
            color: BRAND.coral,
          },
          {
            id: 'reservoir',
            label: 'Reservoir',
            description: 'Flooded river valley stores water and sediment. Stratification develops: warm epilimnion atop cold hypolimnion. Evaporation losses can exceed 10% of stored volume in arid climates.',
            color: BRAND.accent,
          },
          {
            id: 'sediment-trap',
            label: 'Sediment Trapping',
            description: 'Reservoir acts as settling basin; suspended sediment drops out. Trap efficiency >80% for most large reservoirs. Reservoir gradually fills with sediment over decades.',
            color: BRAND.gold,
          },
          {
            id: 'regulated-flow',
            label: 'Regulated Downstream Flow',
            description: 'Penstock and spillway releases flatten hydrograph. Flood peaks reduced; dry-season baseflow augmented. Cold hypolimnetic water alters temperature regime year-round.',
            color: BRAND.jade,
          },
          {
            id: 'ecological-change',
            label: 'Downstream Ecology Change',
            description: 'Migratory fish blocked without fish ladders. Floodplain vegetation denied annual flood pulse. Riparian cottonwood recruitment fails without spring floods. Exotic species favoured by stable flows.',
            color: BRAND.amethyst,
          },
          {
            id: 'delta-starvation',
            label: 'Delta Starvation',
            description: 'Sediment-starved river no longer builds its delta. Wave erosion and sea level rise dominate; delta retreats. Nile Delta retreating 20–50 m/yr; Colorado Delta effectively eliminated.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'dam-construction',  to: 'reservoir',         label: 'Valley inundated' },
          { from: 'reservoir',         to: 'sediment-trap',     label: 'Sediment settles out' },
          { from: 'reservoir',         to: 'regulated-flow',    label: 'Controlled release' },
          { from: 'regulated-flow',    to: 'ecological-change', label: 'Altered hydrograph & temperature' },
          { from: 'sediment-trap',     to: 'delta-starvation',  label: 'No sediment reaches coast' },
          { from: 'ecological-change', to: 'delta-starvation',  label: 'Degraded river corridor to coast' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Three Gorges Dam produces 22,500 MW of electricity. What combination of physical factors determines this output?',
          a: [
            'The length of the reservoir (410 km) and the number of displaced people (1.3M); longer reservoirs store more water per person displaced',
            'The hydraulic head (water height above turbines) and the discharge through turbines; power = ρ × g × Q × H × efficiency',
            'The dam\'s age and the hardness of the concrete used; newer concrete dams are more efficient than older masonry ones',
            'The width of the Yangtze River and the annual precipitation in the catchment; wider rivers at wetter locations always produce more power',
          ],
          correct: 1,
          explain: 'A is wrong: reservoir length and displacement numbers are measures of scale and social impact, not determinants of power output. B is correct: hydroelectric power output follows P = ρgQHη, where ρ is water density (~1,000 kg/m³), g is gravitational acceleration (9.81 m/s²), Q is volumetric flow rate through turbines (m³/s), H is the head (vertical drop from reservoir surface to turbine, m), and η is turbine efficiency (~0.85–0.93). Three Gorges has a hydraulic head of ~80–113 m (varies with reservoir level) and a maximum discharge of ~116,000 m³/s through 32 turbines. C is wrong: dam age and concrete type affect structural integrity, not power generation efficiency. D is partially relevant (catchment precipitation determines Q) but river width alone is irrelevant; head is equally critical.',
        },
        {
          q: 'Why does sediment trapping by dams cause delta retreat even far downstream from the dam?',
          a: [
            'Trapped sediment increases reservoir weight, compressing downstream riverbed sediments and lowering the delta surface through subsidence',
            'Dams intercept the sediment load that rivers carry to their mouths; without replenishment, waves and currents erode the delta faster than it can be rebuilt, causing coastline retreat',
            'Sediment-free water released below dams is more erosive and scours the riverbed, deepening the channel and lowering the delta by incision',
            'Thermal stratification in reservoirs traps nutrients along with sediment, causing algal blooms that consume delta sediments through biodegradation',
          ],
          correct: 1,
          explain: 'A is wrong: reservoir weight compressing downstream sediments is not a significant mechanism of delta subsidence; groundwater extraction and natural compaction are the main subsidence causes in deltas. B is correct: river deltas are dynamic equilibrium landforms — they persist only because sediment deposition by the river equals or exceeds removal by waves, tides, and sea level rise. Dams intercept 25–30% of global river sediment loads. With the sediment supply cut off, deltaic sediments eroded by waves are not replaced, and the delta retreats. The Nile Delta has lost significant agricultural land and its coastline retreats 20–50 m/year since Aswan Dam cut sediment supply to near zero. The Colorado Delta has shrunk from 8,000 km² to near-nothing. C describes channel incision below dams (a real but separate impact); D is wrong.',
        },
        {
          q: 'What is the "natural flow regime" and why is maintaining aspects of it important for river ecosystems?',
          a: [
            'The natural flow regime is the pre-dam average annual discharge; maintaining it ensures dams release the same total volume of water even if the timing is different',
            'The natural flow regime refers to the pattern of flows — magnitude, timing, frequency, duration, and rate of change — that characterises a river before human alteration; aquatic species evolved life histories synchronised to this pattern',
            'The natural flow regime is the maximum flood discharge that a river produces; dam operators must always release this flow when it occurs to prevent dam overtopping',
            'The natural flow regime is determined solely by baseflow (groundwater input); surface runoff flows are too variable to define a meaningful ecological regime',
          ],
          correct: 1,
          explain: 'A is wrong: total annual volume matters less ecologically than the timing and variability of flows; a dam that releases the same total volume in a flat steady flow is profoundly different from one mimicking seasonal pulses. B is correct: the natural flow regime concept, developed by Richter et al. (1996) and Poff et al. (1997), recognises that aquatic species evolved with the full statistical character of their native flow regime — spring snowmelt floods that trigger fish spawning, summer low flows that concentrate prey, autumn floods that inundate floodplain nurseries. Dams flatten and simplify hydrographs, severing these ecological cues. Anadromous fish (salmon, shad), floodplain-spawning species (pike, carp), and riparian trees (cottonwood, willow) are particularly sensitive to flow regime alteration. C misdefines the term; D is wrong because surface runoff flows are central to the regime.',
        },
        {
          q: 'Hydropower accounts for approximately what share of global electricity generation, and what type of dam best maximises firm power output?',
          a: [
            'About 5%; run-of-river dams maximise firm power because their low reservoirs lose less water to evaporation',
            'About 16%; large storage dams with high hydraulic head and large reservoirs provide firm power by releasing stored water during low-flow periods and peak demand',
            'About 40%; pumped-storage facilities generate the most electricity by moving water uphill during low demand and releasing it during peak periods',
            'About 30%; run-of-river dams generate the most power because unrestricted river flow through turbines is more efficient than regulated storage releases',
          ],
          correct: 1,
          explain: 'A is wrong: hydropower\'s global share is ~16%, not 5%; run-of-river dams produce variable, not firm, power because output mirrors natural flow fluctuations. B is correct: hydropower provides approximately 16% of global electricity (and ~71% of renewable electricity). Storage dams provide "firm" power — reliable capacity regardless of season — because large reservoirs allow operators to release water at optimal rates during peak demand periods, even during droughts. They can also provide peaking power (ramping output up and down within hours), making them valuable for grid stabilisation. C confuses total hydropower with pumped-storage hydro specifically; pumped storage is ~3% of global capacity and is used for grid balancing, not large-scale generation. D overstates hydropower\'s share and misidentifies which dam type provides firm capacity.',
        },
        {
          q: 'The Elwha River dam removal project (2012–2014) in Washington State produced which ecological outcomes, and what made it significant?',
          a: [
            'The removals produced no significant salmon recovery because the former reservoir sediments were too contaminated with mercury to support spawning; the project is considered a cautionary example',
            'Chinook salmon returned upstream within 3 years of removal, reopening 100 km of previously blocked river habitat; it was the largest dam removal and river restoration project in US history at the time',
            'The removal lowered water temperatures by 5°C, enabling rainbow trout to colonise the upper river for the first time; native salmon did not recover because sea conditions had changed',
            'The project successfully restored salmon runs to their pre-dam levels of 400,000 fish per year within 5 years, proving that dam removal always fully restores river ecosystems rapidly',
          ],
          correct: 1,
          explain: 'A is wrong: sediment contamination was not the primary challenge; the Elwha project did involve managing the release of reservoir sediments but was not considered a failure. B is correct: removal of Elwha Dam (33 m, built 1911) and Glines Canyon Dam (64 m, built 1927) was completed by 2014. Within three years, Chinook salmon were observed spawning in reaches blocked for over a century, and all five Pacific salmon species began recolonising upstream habitat. The project reopened approximately 100 km of river and demonstrated that dam removal can produce rapid, measurable ecological recovery. It remains the largest dam removal project in US history and has inspired over 100 dam removals per year across the US. C is wrong because native salmon, not rainbow trout, were the restoration focus. D overstates recovery speed; full return to pre-dam abundances takes decades and depends on ocean conditions.',
        },
      ],
    },
  ],
}

export default damsReservoirs
