import { Activity, AlertTriangle, Globe, TrendingUp, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const inducedSeismicity: Lesson = {
  id: 'seis-101-1-4-4',
  title: 'Induced Seismicity: When Humans Trigger Earthquakes',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'Oklahoma went from one of the least seismically active states in the contiguous US to having more M 3+ earthquakes per year than California — not from plate tectonics, but from wastewater disposal wells associated with oil and gas production. Induced seismicity is now a major regulatory and scientific challenge, blurring the line between natural hazard and engineered risk.',
  sources: [
    { org: 'USGS', title: 'USGS — Induced Earthquakes and Wastewater Disposal', url: 'https://www.usgs.gov/programs/earthquake-hazards/induced-earthquakes' },
    { org: 'IRIS', title: 'IRIS/EarthScope — Induced Seismicity Research Program', url: 'https://www.iris.edu/hq/programs/education_and_outreach' },
    { org: 'USGS', title: 'USGS — 2016 One-Year Seismic Hazard Forecast for the Central and Eastern US', url: 'https://earthquake.usgs.gov/hazards/induced/' },
    { org: 'NRC', title: 'NRC — Induced Seismicity Potential in Energy Technologies (2012)', url: 'https://www.nrc.gov/reading-rm/doc-collections/nuregs/contract/cr7046/' },
    { org: 'INGV', title: 'INGV — Pohang Geothermal EGS Induced Seismicity Investigation', url: 'https://www.ingv.it/it/stampa-e-urp/produzione-scientifica' },
  ],
  sections: [
    {
      type: 'intro',
      title: `From One Earthquake per Decade to One per Day: Oklahoma\'s Induced Seismicity Surge`,
      body: `For most of the 20th century, Oklahoma experienced roughly one to two magnitude 3.0 or greater earthquakes per year — background seismicity consistent with the low tectonic strain of the midcontinent. Then, between 2009 and 2015, earthquake rates surged by a factor of more than 300. By 2015, Oklahoma was recording over 900 M 3+ events annually, more than California. The cause was not a sudden change in the tectonic stress field but the injection of enormous volumes of saltwater — a byproduct of oil and gas production — into deep disposal wells that intersected pre-existing, critically-stressed faults in the Precambrian crystalline basement.

The physical mechanism linking fluid injection to seismicity is **pore pressure diffusion**. When high-pressure wastewater is injected into a permeable formation, elevated fluid pressure migrates outward through connected pore space and along fault planes. **Effective stress** on a fault equals total normal stress minus pore fluid pressure. When pore pressure increases sufficiently to reduce effective normal stress, the **Coulomb failure criterion** — which governs fault slip — can be satisfied by the existing tectonic shear stress, triggering slip on faults that were previously locked. Critically, injection need not directly contact a fault: pressure diffusion can activate faults kilometres from the injection well over timescales of months to years.

A crucial and frequently misunderstood distinction: the two primary technologies in unconventional oil and gas production — **wastewater disposal** and **hydraulic fracturing** — have very different induced-seismicity profiles. Hydraulic fracturing (fracking) injects fluid at very high pressure for short durations to fracture reservoir rock; it occasionally triggers small earthquakes (typically M < 2.5) very close to the wellbore, rarely causing felt events. Wastewater disposal wells, by contrast, inject millions of barrels of co-produced brine continuously at high volumes into deep formations, generating sustained pore pressure perturbations that reach pre-existing basement faults. The vast majority of significant induced seismicity events — including all M 5+ events in the Oklahoma surge — are associated with wastewater disposal, not fracking.

The culmination of Oklahoma's induced seismicity crisis was the September 3, 2016 Mw 5.8 Pawnee earthquake — the largest instrumentally recorded earthquake in Oklahoma's history, and one of the most intensively studied induced events worldwide. It caused structural damage across a wide area, including cracked masonry in Pawnee, Tulsa, and Stillwater. USGS analysis linked the earthquake to high-volume wastewater disposal into the Arbuckle formation (a deep carbonate unit directly overlying crystalline basement) in the months and years preceding the event. The Pawnee earthquake contributed to regulatory changes that reduced injection volumes in affected areas; by 2019, Oklahoma's M 3+ rate had dropped by ~75% from its 2015 peak, demonstrating that induced seismicity is manageable through operational changes.`,
      keyTerms: [
        {
          term: 'Induced Seismicity',
          def: 'Earthquakes caused or triggered by human activities that alter subsurface stress, pore pressure, or fluid pathways — including wastewater disposal, reservoir impoundment, geothermal energy extraction, and mining.',
        },
        {
          term: 'Pore Pressure Diffusion',
          def: 'The migration of elevated fluid pressure through permeable rock or along fault zones following fluid injection; the primary mechanism by which injection wells trigger earthquakes on faults potentially kilometres from the injection point.',
        },
        {
          term: 'Effective Stress',
          def: 'Total confining stress minus pore fluid pressure; governs the frictional resistance of faults. Increasing pore pressure reduces effective stress and can bring a critically-stressed fault to the Coulomb failure criterion without any change in the background tectonic stress.',
        },
        {
          term: 'Traffic Light Protocol',
          def: 'A real-time operational management system for injection wells (or geothermal operations) that defines seismicity thresholds: green = continue; yellow = reduce injection rate; red = halt operations; used to limit induced earthquake magnitudes before they cause damage.',
        },
        {
          term: 'Critically Stressed Fault',
          def: 'A fault that is near the Coulomb failure criterion under background tectonic stress — already close to slipping — and therefore susceptible to triggering by even small additions of pore pressure; midcontinent crystalline basement is riddled with such faults at depth.',
        },
        {
          term: 'EGS (Enhanced Geothermal System)',
          def: 'Geothermal energy technology that stimulates fluid circulation through hot but low-permeability rock by hydraulic fracturing or fluid injection; associated with induced seismicity, most notably the Mw 5.5 Pohang, South Korea earthquake in 2017.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Mechanisms of Induced Seismicity',
      body: 'Multiple industrial operations can induce seismicity, but they operate through distinct mechanisms with different magnitudes, distances, and timescales. Understanding which operations carry which risks is essential for both regulation and mitigation.',
      cards: [
        {
          name: 'Wastewater Disposal Wells',
          icon: Activity,
          color: BRAND.coral,
          desc: 'High-volume, sustained injection of co-produced brine into deep formations generates pore pressure fronts that migrate outward for years. Activation of basement faults kilometres from injection is well-documented. By far the dominant cause of significant (M ≥ 4) induced seismicity in the US.',
          examples: 'Oklahoma 2009-2016: >900 M 3+ events/year at peak, Mw 5.8 Pawnee 2016. Prague, OK Mw 5.7 (2011): linked to Wilzetta disposal wells injecting into the Arbuckle formation. Czech wastewater injection triggered M 4.4 events in Silesia in 2013.',
        },
        {
          name: 'Hydraulic Fracturing (Fracking)',
          icon: Zap,
          color: BRAND.jade,
          desc: 'High-pressure, short-duration fracturing of reservoir rock. Induced events are typically M < 2.5, felt rarely, and confined to near-wellbore distances (~500 m (1640 ft)). A much smaller seismicity risk than disposal, though public perception often conflates the two.',
          examples: 'UK: Preston New Road (Lancashire) fracking operations induced M 2.9 in 2019, triggering regulatory halt under strict UK traffic light protocol (threshold: M 0.5). British Columbia: fracking-triggered events up to M 4.4 at Kiskatinaw area, but M > 3 remains rare.',
        },
        {
          name: 'Reservoir Impoundment',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Large reservoirs increase pore pressure and vertical stress on underlying faults. Effects are felt within months to years of filling. Particularly hazardous in tectonically active regions where reservoirs sit above pre-existing fault systems.',
          examples: '1967 Koyna Dam, India (Mw 6.3): killed ~177 people; the textbook case of reservoir-triggered seismicity. Three Gorges Dam, China: induced M 4.6 (2008) and subsequent seismicity, though the massive 2008 Sichuan M 7.9 was tectonic.',
        },
        {
          name: 'Geothermal EGS',
          icon: TrendingUp,
          color: BRAND.amethyst,
          desc: 'Stimulating hot dry rock requires high-pressure fluid injection to create or extend fracture networks. EGS operations have triggered significant induced seismicity, most dramatically at Pohang, South Korea (2017), raising questions about the balance between renewable energy benefits and seismic risk.',
          examples: 'Pohang, South Korea (November 15, 2017): Mw 5.5 induced by EGS stimulation at depth of 4–5 km (3.1 mi). Injured 90+ people and caused ~$52 million in damage. An independent panel concluded the EGS project was the most likely trigger. Basel, Switzerland (2006): M 3.4 EGS event shut down project.',
        },
        {
          name: 'Mining and Underground Excavation',
          icon: AlertTriangle,
          color: BRAND.ruby,
          desc: 'Removal of material changes stress on surrounding rock. Collapse of mine voids (pillar failure) generates "rockbursts" — sudden seismic events that can reach M 5+ in deep gold and platinum mines. Surface mine blasting produces local seismic signals but rarely activates tectonic faults.',
          examples: 'South African gold mines (Witwatersrand): routinely experience M 2–4 mine-induced seismicity at depths of 3–4 km (2.5 mi). 2009 Crandall Canyon, Utah: M 3.9 event caused mine collapse killing 6 miners + 3 rescuers. Poland: Legnica-Glogów copper mining area has M 4+ induced events annually.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Managing Induced Seismicity: Traffic Light Protocols and Regulatory Responses',
      body: 'Induced seismicity, unlike natural seismicity, is partially controllable. The key management tool is the Traffic Light Protocol (TLP), which pre-defines injection-rate responses to observed seismicity thresholds. Effective implementation requires real-time monitoring, pre-defined thresholds, and regulatory authority to enforce halts.',
      cards: [
        {
          name: 'Traffic Light Protocols',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: 'TLPs define seismicity-based operational thresholds: green (M below threshold, continue), yellow (reduce injection), red (halt). Thresholds vary by context: UK fracking TLP threshold is M 0.5; Oklahoma disposal TLPs typically use M 2.5–3.5. Tighter thresholds reduce maximum induced magnitude but impose operational costs.',
          examples: 'Oklahoma Corporation Commission: implemented area-of-review requirements and volume-reduction directives in 2016 after Pawnee M 5.8. By 2019, M 3+ rates fell ~75%. Netherlands: Groningen gas field TLP reduced injection pressure after M 3.6 (2012) and further curtailment after M 3.4 (2018), eventually ending production.',
        },
        {
          name: 'USGS Induced Hazard Maps',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Since 2016, USGS produces annual one-year seismic hazard forecasts for the central and eastern US that explicitly include both natural and induced seismicity. These inform emergency planning for states experiencing operational seismicity surges.',
          examples: '2016 USGS forecast: Oklahoma, southern Kansas, and north Texas elevated to hazard levels comparable to parts of California for the first time in recorded history. The 2023 forecast showed significant reduction in Oklahoma hazard, tracking the operational changes that followed 2015-2016 regulatory actions.',
        },
        {
          name: 'NORM and Co-injection Hazards',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Co-produced brine from oil and gas formations contains **NORM (naturally occurring radioactive material)** — primarily radium-226 and radium-228 — at concentrations that can exceed EPA drinking water standards. Re-injection of NORM-bearing brine into disposal wells creates subsurface radiological concerns in addition to seismicity risk.',
          examples: 'EPA estimates 280,000 m³/day of brine produced from US oil and gas operations, ~90% reinjected. Appalachian Basin brine (Marcellus Shale) has radium activities up to 9,000 pCi/L — far exceeding 5 pCi/L drinking water limit. NORM co-injection creates long-term legacy concerns at disposal well sites.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'How Wastewater Injection Triggers Basement Earthquakes',
      body: 'The step-by-step physical process by which deep disposal well injection activates pre-existing faults through pore pressure diffusion, leading to the Oklahoma seismicity surge.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'How sustained wastewater injection into deep formations generates pore pressure diffusion that activates pre-existing critically-stressed basement faults, and how traffic light protocols intervene',
        nodes: [
          {
            id: 'oil-production',
            label: 'Oil & Gas Production',
            description: 'Hydraulic fracturing in tight shale formations (e.g., Mississippian Lime, Woodford Shale) produces large volumes of co-produced saltwater brine — often 10 barrels of water per barrel of oil. This brine cannot be treated economically and must be disposed of.',
            color: BRAND.coral,
          },
          {
            id: 'disposal-well',
            label: 'Wastewater Disposal Well',
            description: 'Brine is injected under pressure (typically 10–30 MPa wellhead pressure) into a deep porous formation — the Arbuckle Group in Oklahoma sits at 1.5–3 km (1.9 mi) depth, directly above Precambrian crystalline basement. Millions of barrels are injected per month at high-volume wells.',
            color: BRAND.gold,
          },
          {
            id: 'pressure-diffusion',
            label: 'Pore Pressure Diffusion',
            description: 'Elevated fluid pressure migrates outward through connected pore space at rates of ~100–500 m/month. Pressure fronts reach basement faults 2–5 km (3.1 mi) from the injection well within months to years. Critically stressed faults — close to Coulomb failure — respond to even 0.1 MPa of added pore pressure.',
            color: BRAND.jade,
          },
          {
            id: 'fault-reactivation',
            label: 'Basement Fault Reactivation',
            description: 'Increased pore pressure reduces effective normal stress on the fault, satisfying the Coulomb failure criterion. The existing tectonic shear stress — accumulated over millennia — drives slip. The fault ruptures, releasing energy as a felt or damaging earthquake.',
            color: BRAND.ruby,
          },
          {
            id: 'earthquake',
            label: 'Induced Earthquake',
            description: `Magnitude depends on fault size, stress drop, and prior seismic history. Oklahoma events ranged from M 2 microseismicity to M 5.8 Pawnee. Aftershock sequences follow normal Omori\'s Law decay. Unlike tectonic events, induced sequences can be truncated by halting injection.`,
            color: BRAND.amethyst,
          },
          {
            id: 'traffic-light',
            label: 'Traffic Light Protocol Response',
            description: 'Real-time monitoring detects seismicity above threshold. Yellow: reduce injection rate 25–50%. Red: halt injection. After halt, pore pressure slowly dissipates but fault may remain near-critical for months. Oklahoma rate reductions in 2016 produced measurable seismicity decline within 6 months.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'oil-production', to: 'disposal-well', label: 'Brine re-injection' },
          { from: 'disposal-well', to: 'pressure-diffusion', label: 'Sustained high-volume injection' },
          { from: 'pressure-diffusion', to: 'fault-reactivation', label: 'Coulomb stress threshold reached' },
          { from: 'fault-reactivation', to: 'earthquake', label: 'Fault ruptures' },
          { from: 'earthquake', to: 'traffic-light', label: 'Magnitude threshold exceeded' },
          { from: 'traffic-light', to: 'disposal-well', label: 'Rate reduction or halt' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: `Oklahoma\'s seismicity surge from 2009–2016 is primarily attributed to wastewater disposal rather than hydraulic fracturing (fracking). What physical distinction between these two operations explains the difference in their induced seismicity profiles?`,
          a: [
            'Hydraulic fracturing uses more chemically reactive fluids that dissolve fault-sealing minerals',
            'Wastewater disposal involves sustained high-volume injection over months to years into formations adjacent to basement faults, generating pore pressure diffusion fronts that can activate distant pre-existing faults; fracking injects briefly at high pressure near the wellbore and rarely triggers events above M 2.5',
            'Hydraulic fracturing occurs at shallower depths than disposal wells, keeping injected fluid away from seismogenic basement rock',
            'Disposal wells target saline formations while fracking targets fresh-water aquifers, and seismicity is triggered by chemical reactions with saline brines',
          ],
          correct: 1,
          explain: 'B is correct: the key differences are volume, duration, depth, and proximity to basement faults. Disposal wells inject millions of barrels of brine continuously into deep formations (e.g., the Arbuckle Group at 2–3 km (1.9 mi) in Oklahoma, directly above Precambrian basement), generating sustained pore pressure perturbations that diffuse outward over kilometres and months. Fracking injects fluid for hours to days at high pressure into the producing formation, primarily to open reservoir fractures; induced seismicity is confined to a ~500 m (1640 ft) radius and rarely exceeds M 2.5. A is wrong: fluid chemistry is not the primary seismicity driver. C is partially true for some regions but Oklahoma disposal wells specifically target formations adjacent to basement. D is wrong: ion chemistry has minimal bearing on Coulomb failure triggering.',
        },
        {
          q: 'Pore pressure diffusion allows injection wells to trigger earthquakes on faults kilometres away and months after injection begins. What property of the subsurface controls the distance and timescale of this pressure migration?',
          a: [
            'The total volume of injected fluid, which acts as a pressure reservoir that can reach distant faults when full',
            'The hydraulic diffusivity of the formation — a function of permeability and compressibility — which sets how fast the pressure front migrates laterally; high diffusivity means faster, farther migration',
            'The temperature gradient between injected fluid and formation water, which drives convective pressure transport',
            'The injection well depth, since pressure diffuses downward more efficiently than laterally in stratified rock',
          ],
          correct: 1,
          explain: 'B is correct: hydraulic diffusivity D = k/(μ × S), where k is permeability, μ is fluid viscosity, and S is specific storage (compressibility). For the Arbuckle formation in Oklahoma, estimated diffusivity values of ~0.1–1 m²/s mean pressure fronts advance ~100–300 m/month — consistent with earthquake locations migrating outward from injection wells over months to years. A is wrong: total volume matters for pressure maintenance but does not directly control diffusion geometry. C is wrong: temperature-driven convection plays a negligible role compared to pressure-gradient-driven Darcy flow at these depths. D is wrong: while gravity affects vertical migration somewhat, lateral migration through permeable formations is the dominant pathway for basement fault activation.',
        },
        {
          q: `Traffic Light Protocols (TLPs) define operational thresholds for induced seismicity management. The UK uses an M 0.5 red-light threshold for fracking, while Oklahoma\'s disposal well TLPs typically trigger action at M 2.5–3.5. What trade-off drives the choice of threshold level?`,
          a: [
            'Higher thresholds save money by allowing more injection before shutdown, while lower thresholds prevent any felt seismicity regardless of economic impact',
            'Lower thresholds impose more frequent operational interruptions and higher costs, but limit the maximum magnitude of induced events before they cause public felt shaking or structural damage; the threshold reflects a policy choice between economic efficiency and seismic risk tolerance',
            'UK geology prevents earthquakes above M 0.5 regardless of threshold choice, making strict thresholds cost-free',
            'TLP thresholds are set purely by seismic network detection limits — you can only respond to earthquakes you can detect',
          ],
          correct: 1,
          explain: 'B is correct: TLP design involves a fundamental trade-off. Very low thresholds (M 0.5) halt operations at the onset of any detected seismicity, preventing escalation to felt or damaging events but causing frequent shutdowns with significant economic cost. Higher thresholds (M 3.5) allow operations to continue through substantial seismicity, risking occasional felt events or minor damage. The 2019 Preston New Road M 2.9 event (below the red-light halt threshold of the time, which had been re-evaluated) resulted in regulatory cessation of fracking in England — illustrating that public and political risk tolerance is often lower than pure engineering calculations suggest. A is wrong: the trade-off is nuanced and context-dependent, not simply money vs. zero seismicity. C is wrong: UK geological structures are capable of hosting M 4+ natural earthquakes. D is wrong: modern seismic networks detect M 0.5 and smaller routinely; the threshold reflects risk management, not detection capability.',
        },
        {
          q: 'The 2017 Pohang, South Korea Mw 5.5 earthquake has been attributed to Enhanced Geothermal System (EGS) injection. What makes EGS a particularly challenging context for induced seismicity management compared to conventional disposal wells?',
          a: [
            'EGS operations are unregulated, unlike the strictly controlled oil and gas sector',
            'EGS requires stimulating permeability in hot dry rock at great depth by high-pressure fluid injection — the same process that creates seismicity risk is the fundamental mechanism enabling the energy technology, making it impossible to reduce injection pressure without eliminating the resource',
            'EGS operations always occur near population centres, while oil and gas disposal wells are in remote areas',
            'Geothermal fluid is more chemically reactive than oil-field brine, dissolving fault gouge and reducing friction',
          ],
          correct: 1,
          explain: `B is correct: EGS faces a fundamental tension between the technology\'s purpose and seismic risk. Creating a permeable heat-exchange zone requires fracturing low-permeability rock through sustained fluid injection at elevated pressures — but this is exactly the operation that builds pore pressure on nearby faults. Unlike a disposal well (where reducing injection rate is operationally simple), reducing EGS injection pressure also reduces fracture network development and heat extraction, compromising the energy production goal. At Pohang, the EGS project injected fluid at 4–5 km (3.1 mi) depth in a region with critically-stressed basement faults; an independent panel concluded EGS stimulation most likely advanced the fault to failure. A is wrong: EGS is subject to permitting and regulation in all jurisdictions that have deployed it. C is wrong: many high-volume disposal fields are near population centres (Oklahoma, Netherlands). D is wrong: chemistry plays a minor role in fault activation compared to pore pressure.`,
        },
        {
          q: `Following Oklahoma\'s M 5.8 Pawnee earthquake in 2016, state regulators reduced permitted injection volumes in the Arbuckle formation. Within three years, M 3+ earthquake rates dropped by ~75%. What does this response demonstrate about induced seismicity compared to natural seismicity, and what residual risks remain?`,
          a: [
            'It demonstrates that all seismicity in Oklahoma was induced and that complete cessation of injection would produce zero earthquakes within weeks',
            'It demonstrates that induced seismicity is partially controllable through operational management — earthquake rates respond to injection changes — but residual seismicity can persist for years after injection reduction because pore pressure diffuses slowly and pre-loaded faults may slip independently',
            'It demonstrates that tectonic seismicity in Oklahoma was amplified by injection, and the 75% reduction represents the portion that was induced, with the remaining 25% reverting to the pre-1990s baseline',
            'It demonstrates only that seismicity naturally varies cyclically, and the rate reduction coincided with a natural seismic lull unrelated to regulatory actions',
          ],
          correct: 1,
          explain: 'B is correct and captures both the optimistic and cautionary aspects of the Oklahoma story. The strong temporal correlation between injection-volume reductions mandated in 2015-2016 and the subsequent seismicity decline provides compelling evidence that the surge was operationally induced and is operationally controllable. However, pore pressure diffusion means elevated pressures persist in the subsurface for years after injection reduction, and faults that were brought close to failure by years of injection remain critically stressed. Aftershock sequences from the 2016 Pawnee M 5.8 continued for months. A is wrong: complete cessation would not immediately produce zero seismicity, and some background natural seismicity predates injection. C is partially true in that Oklahoma has background seismicity, but the 300× rate increase was clearly injection-driven. D is contradicted by the strong spatial and temporal correlations between specific well operations and seismicity clusters, along with pore pressure modeling that matches observed seismicity migration.',
        },
      ],
    },
  ],
}

export default inducedSeismicity
