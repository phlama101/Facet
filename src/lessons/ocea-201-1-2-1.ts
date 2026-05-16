import { Waves, Activity, Globe, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const biologicalPump: Lesson = {
  id: 'ocea-201-1-2-1',
  title: 'The Biological Pump',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: `How photosynthesis and sinking organic matter transfer carbon from the surface ocean to the deep — Earth\'s most important long-term carbon sink`,
  sources: [
    { org: 'NOAA',   title: 'NOAA Ocean Carbon',                  url: 'https://www.noaa.gov/' },
    { org: 'MBARI',  title: 'MBARI Biological Pump',              url: 'https://www.mbari.org/' },
    { org: 'Nature', title: 'Nature — Carbon Export',             url: 'https://www.nature.com/' },
    { org: 'AGU',    title: 'AGU — Global Biogeochemical Cycles', url: 'https://www.agu.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `The ocean\'s carbon conveyor: from sunlight to the seafloor`,
      body: `Every year, the surface ocean absorbs roughly 2–3 Pg of anthropogenic carbon dioxide from the atmosphere. A large fraction of that uptake is driven not by physical chemistry alone, but by life. In the sunlit upper ocean, phytoplankton — microscopic algae and cyanobacteria — fix dissolved CO₂ into organic carbon through photosynthesis at a global rate of approximately **50 Pg C per year** (primary production). That number rivals the entire terrestrial biosphere. When cells die, are eaten, or aggregate, a fraction of that organic carbon sinks out of the surface layer, carrying carbon from the atmosphere-equilibrated surface ocean to the dark interior. This process — the **biological pump** — is Earth\'s most important long-term mechanism for sequestering carbon from the atmosphere on timescales of centuries to millennia.

The biological pump has two distinct components. The **soft-tissue pump** transfers organic carbon (proteins, lipids, carbohydrates) to depth in the form of sinking particles: dead cells, fecal pellets, and loosely bound aggregates called **marine snow**. Marine snow forms when transparent exopolymer particles (TEP) — sticky polysaccharides exuded by phytoplankton — glue individual cells and detritus into centimetre-scale flocs that sink at speeds of 1–100 m (3–328 ft) per day, far faster than individual cells. The **carbonate pump** (or counter pump) operates in parallel: calcifying organisms such as coccolithophores, foraminifera, and pteropods build shells of calcium carbonate (CaCO₃). When they die, their dense shells sink rapidly, carrying inorganic carbon to depth. The carbonate pump is partially counteractive: the formation of CaCO₃ temporarily releases CO₂ into surface seawater — though the net effect over geological time is carbon burial in sediment.

Not all sinking particles reach the seafloor. **Export production** — the fraction of primary production that crosses the base of the euphotic zone (~100–200 m (328–656 ft) depth) — is typically only **5–20%** of total primary production, and often closer to the lower end in warm, stratified subtropical gyres. The Martin curve (Martin et al., 1987) describes how particle flux attenuates with depth: flux(z) = flux(z₀) × (z/z₀)^(−b), where b ≈ 0.86 for the global ocean average. This power-law relationship — sometimes called the Martin curve or the **remineralisation length scale** — encapsulates a crucial reality: most of the organic carbon exported from the surface is respired by bacteria and zooplankton within the **twilight zone** (200–1000 m (656–3,281 ft) depth), releasing the carbon back as CO₂ into the mid-ocean interior. Only a few percent of export production — perhaps 0.3–3% of primary production — ultimately reaches the seafloor sediments, where it can be buried on geological timescales.

The twilight zone is therefore where the fate of exported carbon is decided. Bacteria colonise sinking particles and enzymatically break down organic molecules (**remineralisation**), releasing CO₂, nitrate, phosphate, and other dissolved nutrients back into the water. Zooplankton such as copepods and krill perform **diel vertical migration** — rising to the surface to feed at night, then sinking to depth in the daytime — physically transporting carbon through the water column in their bodies and in fecal pellets packaged below the remineralisation horizon, bypassing part of the Martin-curve attenuation. These so-called active transport fluxes may contribute an additional 15–40% to total carbon export in some regions.

Measuring the biological pump has long been a challenge. **Sediment traps** — funnel-shaped collectors moored at fixed depths — intercept sinking particles, but they are biased by hydrodynamic effects and zooplankton swimmers that enter the trap. Radionuclide tracers such as thorium-234 (²³⁴Th, half-life 24 days) adsorb strongly to particles and can be used to estimate particle export from surface water ²³⁴Th deficits relative to its soluble parent uranium-238 (²³⁸U), which is conservative in seawater. Large field programmes including **VERTIGO** (Vertical Transport In the Global Ocean, 2004–2005) and **EXPORTS** (EXport Processes in the Ocean from RemoTe Sensing, 2018–ongoing) have deployed autonomous vehicles, floats, and remotely sensed datasets to constrain export fluxes in contrasting biomes — from the productive North Atlantic bloom to the oligotrophic North Pacific gyre.

The efficiency of the biological pump is not fixed. **Pump efficiency** is often expressed as the ratio of export production to primary production (the e-ratio). In cold, well-mixed, nutrient-rich waters such as polar gyres and upwelling zones, the e-ratio can reach 20–50%, because large diatoms and aggregates dominate the community and sink quickly before being fully respired. In warm, stratified subtropical gyres where picophytoplankton dominate, the e-ratio falls below 5%, because small cells are rapidly consumed in microbial loops and little carbon sinks. **Ocean stratification**, which has been strengthening under anthropogenic warming, shoals the mixed layer and cuts off the supply of deep nutrients to the surface, reducing both primary production and pump efficiency. Most climate models project a weakening biological pump under continued warming — with global export production declining by 1–12% by 2100 under high-emissions scenarios — reducing the ocean's capacity to sequester carbon at precisely the moment when atmospheric CO₂ is rising most rapidly. Understanding the controls on biological pump efficiency is therefore one of the central challenges in marine biogeochemistry and climate science.`,
      keyTerms: [
        {
          term: 'biological pump',
          def: 'The suite of biological processes that transfer carbon fixed by phytoplankton in the surface ocean to depth via sinking organic particles, fecal pellets, and active vertical migration. Responsible for maintaining a CO₂ gradient between the deep ocean (enriched) and the surface (depleted), keeping ~150–200 ppm of CO₂ out of the atmosphere on millennial timescales.',
        },
        {
          term: 'export production',
          def: `The flux of organic carbon that sinks below the base of the euphotic zone (~100–200 m (328–656 ft)) or the mixed layer, typically expressed as a fraction of gross primary production (the e-ratio). Globally ~5–20% of primary production is exported, amounting to roughly 5–12 Pg C yr⁻¹. Export production, not primary production, determines the pump\'s net climate impact.`,
        },
        {
          term: 'marine snow',
          def: 'Loosely aggregated particles of organic detritus, living cells, fecal pellets, and transparent exopolymer particles (TEP) larger than 0.5 mm (0.02 in) that sink through the water column at 1–100 m (3–328 ft) per day. Named for their resemblance to falling snow when illuminated underwater. Marine snow is the dominant vehicle for carbon export in most ocean regions.',
        },
        {
          term: 'remineralisation',
          def: 'The bacterial and enzymatic decomposition of sinking organic particles back into dissolved inorganic forms (CO₂, nitrate, phosphate, ammonium). Occurs primarily in the twilight zone (200–1,000 m (656–3,281 ft)). The Martin curve describes how remineralisation attenuates particle flux exponentially with depth; only a small fraction escapes to the deep ocean or sediments.',
        },
        {
          term: 'Martin curve',
          def: 'An empirical power-law relationship describing the attenuation of sinking particle flux with depth: F(z) = F(z₀) × (z/z₀)^(−b), where b ≈ 0.86 (Martin et al., 1987). A shallower b (closer to 0) means efficient transfer to depth; a steeper b means most carbon is remineralised in the upper water column. The value of b varies with ecosystem type, temperature, and particle composition.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The architecture of the biological pump',
      body: `The biological pump is not a single process but an interacting system of physical, chemical, and ecological mechanisms. Understanding its architecture requires distinguishing the two parallel pumps, the controls on export efficiency, and the fate of carbon at each depth horizon.

**The soft-tissue pump and the carbonate pump.** The soft-tissue pump exports organic carbon: when phytoplankton die or are packaged into fecal pellets by zooplankton, they aggregate into marine snow that sinks. The carbonate pump exports calcium carbonate shells: coccolithophores and foraminifera produce CaCO₃ (calcite or aragonite) structures that ballast sinking particles, accelerating their descent. Dense carbonate minerals may actually help organic carbon escape remineralisation by sinking it more quickly — the "ballast hypothesis." However, the carbonate pump also interacts with ocean chemistry: shell dissolution in deep waters releases CO₂, contributing to the deep ocean\'s acidic conditions and the **carbonate compensation depth** (CCD) — the depth below which calcite dissolves faster than it accumulates (~4–4.5 km (2.5–2.8 mi) in the Pacific today).

**Controlling factors on e-ratio.** The e-ratio (export:primary production) depends strongly on community composition. Large, fast-sinking phytoplankton (diatoms, large dinoflagellates) in nutrient-rich, productive waters produce high e-ratios. Small picophytoplankton in warm, stratified, nutrient-poor gyres are recycled rapidly within the **microbial loop** — bacteria consume dissolved organic matter, are eaten by protists, and carbon is respired back to CO₂ before it can sink. Food web structure therefore determines how much carbon the pump exports: "leaky" ecosystems dominated by small cells export little; "efficient" ecosystems dominated by large cells and strong aggregation export much.

**Active transport and diel vertical migration.** Zooplankton perform daily vertical migrations of hundreds of metres — feeding at the surface at night, retreating to depth in daylight to avoid visual predators. They carry ingested carbon downward and respire or defecate it below the mixed layer. This active transport flux is not captured by sediment traps, which only measure passive sinking particles, and may contribute 15–40% of total export in some systems. Mesopelagic fish, particularly myctophids and bristlemouths (the most abundant vertebrates on Earth by number), also perform diel migration and respire carbon at depth.

**The twilight zone and deep storage.** The twilight zone (200–1,000 m (656–3,281 ft)) is a critical horizon: it is too deep for photosynthesis but still receives a rain of organic particles. Most remineralisation (60–90% of export flux) occurs here, releasing CO₂ into mid-ocean waters where it may remain isolated from the atmosphere for decades to centuries. Carbon that survives remineralisation and crosses 1,000 m (3,281 ft) enters the deep ocean, where residence times exceed 1,000 years. Sediment burial — which represents perhaps 0.2–0.5% of primary production — sequesters carbon on geological (million-year) timescales, ultimately driving the long-term regulation of atmospheric CO₂ over Earth history.`,
      cards: [
        {
          name: 'From Photosynthesis to Carbon Export',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Phytoplankton fix ~50 Pg C yr⁻¹ via photosynthesis in the euphotic zone. Export production is ~5–20% of primary production (e-ratio). Large diatoms and fast-sinking aggregates (marine snow) dominate export in productive waters. Microbial loop in warm gyres recycles most carbon before it can sink. Export flux measured by sediment traps and ²³⁴Th radionuclide budgets. EXPORTS and VERTIGO field campaigns constrained global variability.',
          examples: 'North Atlantic bloom: e-ratio ~15–25%, diatom-dominated · North Pacific subtropical gyre: e-ratio ~2–5%, picoplankton-dominated · Southern Ocean: e-ratio ~10–20%, high-latitude diatoms and krill fecal pellets',
        },
        {
          name: 'The Soft-Tissue and Carbonate Pumps',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Soft-tissue pump: exports organic carbon via marine snow, fecal pellets, and active migration. Carbonate pump: coccolithophores and foraminifera produce CaCO₃ shells that sink rapidly — ballast hypothesis suggests carbonate minerals protect associated organic carbon from remineralisation. Carbonate pump is partially counteractive: CaCO₃ precipitation releases CO₂ to surface water. CCD (~4–4.5 km (2.5–2.8 mi), Pacific) marks depth of carbonate dissolution. Both pumps together maintain the deep ocean as a carbon reservoir ~10× the size of the atmospheric pool.',
          examples: 'Coccolithophore blooms: visible from space off NW Europe, contribute ~0.8–1.4 Pg C yr⁻¹ CaCO₃ production · Foraminifera: accumulate in deep-sea sediments, form the basis of paleoclimate ∂¹⁸O records · Pteropods: aragonite shells dissolve shallowest — already threatened by ocean acidification in Arctic',
        },
        {
          name: 'Attenuation and the Twilight Zone',
          icon: ArrowRight,
          color: BRAND.coral,
          desc: 'Martin curve: F(z) = F(z₀) × (z/z₀)^(−b), b ≈ 0.86. ~60–90% of export production remineralised in the twilight zone (200–1,000 m (656–3,281 ft)). Only ~0.3–3% of primary production reaches the seafloor. Diel vertical migration (DVM) actively transports carbon below the mixed layer, bypassing Martin-curve attenuation. Twilight zone carbon residence time: decades to centuries. Deep sediment burial: geological (>Ma) timescale. Mesopelagic fish (myctophids) contribute significantly to active transport; poorly quantified.',
          examples: 'VERTIGO station ALOHA (N. Pacific): 90% of export remineralised above 500 m (1,640 ft) · HOT station: 30-yr time series, export flux ~1.5 mol C m⁻² yr⁻¹ · Antarctic krill: diel migration ~200–400 m (656–1,312 ft), estimated 23 Tg C yr⁻¹ active transport',
        },
        {
          name: 'Climate Feedbacks of the Biological Pump',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Pump efficiency tied to nutrient supply: upwelling zones and polar oceans most efficient. Warming → stronger stratification → shallower mixed layer → reduced nutrient upwelling → lower primary production and lower e-ratio. Most Earth System Models project 1–12% decline in global export production by 2100 (high-emissions scenario). Iron fertilisation proposed as climate intervention: adding iron to HNLC regions (Southern Ocean, N. Pacific, equatorial Pacific) stimulates blooms, but export efficiency and long-term storage remain debated. Ocean acidification threatens carbonate pump: CaCO₃ saturation state declining, pteropod shells dissolving seasonally in Arctic.',
          examples: 'LOHAFEX iron fertilisation experiment (2009): 300 km² (116 sq mi) bloom, limited export below 200 m (656 ft) · Paleo evidence: glacial biological pump more efficient → atmospheric CO₂ ~180 ppm vs 280 ppm interglacial · CMIP6 models: export production −2 to −16% by 2100 under SSP5-8.5',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Carbon flow through the biological pump',
      body: 'Trace the path of carbon from surface CO₂ fixation through phytoplankton growth, aggregation, sinking, twilight-zone remineralisation, and eventual deep-sea storage or sediment burial.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how carbon fixed at the ocean surface by photosynthesis is exported to depth as sinking organic particles and ultimately stored in the deep ocean or buried in sediments',
        nodes: [
          {
            id: 'surface-co2',
            label: 'Surface CO₂ Fixation',
            description: 'Phytoplankton absorb dissolved CO₂ and sunlight to fix ~50 Pg C yr⁻¹ via photosynthesis in the euphotic zone (0–200 m (0–656 ft)). Surface seawater CO₂ equilibrates with the atmosphere on timescales of ~1 year.',
            color: BRAND.accent,
          },
          {
            id: 'phytoplankton',
            label: 'Phytoplankton Growth',
            description: 'Diatoms, coccolithophores, cyanobacteria, and flagellates build biomass using CO₂, nutrients (N, P, Fe, Si), and light. Community composition determines sinking speed and e-ratio: large diatoms export more than small picophytoplankton recycled by the microbial loop.',
            color: BRAND.jade,
          },
          {
            id: 'aggregation',
            label: 'Aggregation into Marine Snow',
            description: 'Transparent exopolymer particles (TEP) glue cells, fecal pellets, and detritus into centimetre-scale aggregates (marine snow). Zooplankton package phytoplankton into dense, fast-sinking fecal pellets. Aggregation rate determines export flux; coagulation theory predicts that bloom senescence triggers rapid aggregation events.',
            color: BRAND.gold,
          },
          {
            id: 'sinking',
            label: 'Sinking Through Water Column',
            description: 'Marine snow sinks at 1–100 m (3–328 ft) day⁻¹; dense fecal pellets at 50–200 m (164–656 ft) day⁻¹; carbonate-ballasted particles fastest. Export flux crosses the base of the euphotic zone (~100 m (328 ft)) at 5–20% of primary production. Diel vertical migration by zooplankton and fish actively transports additional carbon below the mixed layer.',
            color: BRAND.coral,
          },
          {
            id: 'twilight-zone',
            label: 'Twilight Zone Remineralisation',
            description: 'Between 200 and 1,000 m (3,281 ft), bacteria colonise and decompose 60–90% of sinking particles. CO₂, nutrients, and dissolved organic carbon are released back into mid-ocean waters. Martin curve describes this attenuation: F(z) = F(z₀) × (z/z₀)^(−0.86). CO₂ released here is isolated from the atmosphere for decades to centuries.',
            color: BRAND.amethyst,
          },
          {
            id: 'deep-storage',
            label: 'Deep-Sea Storage & Sediment Burial',
            description: 'Particles surviving below 1,000 m (3,281 ft) enter the deep ocean reservoir (~37,000 Pg C dissolved inorganic carbon), where they reside for >1,000 years. ~0.2–0.5% of primary production reaches and is buried in seafloor sediments, sequestering carbon for geological timescales (>Ma). This sediment burial drives long-term atmospheric CO₂ regulation.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'surface-co2',   to: 'phytoplankton',  label: 'Photosynthetic uptake' },
          { from: 'phytoplankton', to: 'aggregation',     label: 'Cell death, grazing, TEP production' },
          { from: 'aggregation',   to: 'sinking',         label: 'Gravity-driven export flux' },
          { from: 'sinking',       to: 'twilight-zone',   label: 'Particle rain through mesopelagic' },
          { from: 'twilight-zone', to: 'surface-co2',     label: 'Upwelling returns remineralised CO₂' },
          { from: 'twilight-zone', to: 'deep-storage',    label: 'Residual flux to deep ocean & sediment' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the biological pump and why does it matter for climate?',
          a: [
            'The biological pump is the thermohaline circulation, which pumps cold, CO₂-rich deep water to the surface in upwelling zones; it matters for climate because it releases CO₂ from the ocean interior to the atmosphere',
            'The biological pump is the suite of biological processes by which phytoplankton fix CO₂ via photosynthesis and sinking organic particles transfer that carbon from the surface ocean to depth; it matters because it maintains the deep ocean as a carbon reservoir, keeping atmospheric CO₂ roughly 150–200 ppm lower than it would be in the pump\'s absence',
            'The biological pump is the process by which marine organisms directly absorb CO₂ from the atmosphere through gas exchange; its climate importance lies in buffering atmospheric CO₂ on daily timescales through respiratory cycles',
            'The biological pump is the calcium carbonate shell production by corals and molluscs; it matters for climate because shell burial in reef sediments stores CO₂ permanently on human timescales',
          ],
          correct: 1,
          explain: `The thermohaline circulation (option A) is a physical, not biological, pump — it plays an important role in carbon transport but is a separate mechanism. Direct gas exchange by organisms (option C) is not what the biological pump means — the relevant process is photosynthesis, which reduces dissolved CO₂, driving atmospheric CO₂ into the ocean by air-sea exchange. Coral reef carbonate production (option D) is part of the carbonate pump, one component of the biological pump, but the reef system itself is not the full concept. Option B is correct: the biological pump encompasses photosynthetic CO₂ fixation by phytoplankton, the aggregation of organic matter into sinking particles (marine snow, fecal pellets), and the transport of that particulate organic carbon to the ocean interior. Without the biological pump, pre-industrial atmospheric CO₂ would be approximately 430–450 ppm rather than ~280 ppm — a climate impact comparable to all current anthropogenic emissions. The pump sustains the deep ocean\'s ~10× larger carbon inventory relative to the atmosphere by continuously exporting newly fixed carbon from the surface.`,
        },
        {
          q: 'What is the Martin curve?',
          a: [
            'A plot of primary production versus sea surface temperature, showing the exponential increase in phytoplankton biomass as the ocean warms above 10°C (50°F)',
            'An empirical power-law relationship describing how the flux of sinking organic particles decreases with depth in the ocean — F(z) = F(z₀) × (z/z₀)^(−b), with b ≈ 0.86 — reflecting that most exported carbon is remineralised by bacteria in the twilight zone before reaching the deep ocean',
            'A curve relating ocean surface chlorophyll concentration to satellite-derived sea surface colour, used to estimate primary production from space',
            'A theoretical relationship showing that carbon export production increases linearly with nutrient (nitrate and phosphate) concentration in the surface ocean',
          ],
          correct: 1,
          explain: 'A primary production vs. temperature relationship (option A) is not the Martin curve. The chlorophyll-to-colour algorithm (option C) describes satellite ocean colour retrieval, which is a remote sensing tool, not the Martin curve. A linear export-nutrient relationship (option D) does not describe the Martin curve; export efficiency is non-linearly related to nutrients and depends on ecosystem structure. Option B correctly identifies the Martin curve as the power-law attenuation relationship published by John Martin and colleagues in 1987 based on sediment trap data from the northeast Pacific: F(z) = F(z₀) × (z/z₀)^(−b). The exponent b ≈ 0.86 means that doubling depth reduces flux to roughly 55% of its shallower value. The Martin curve has been confirmed globally with variations in b from ~0.4 (in cold, polar waters with efficient export) to >1.0 (in warm, stratified subtropical waters with aggressive remineralisation). This relationship has profound implications: a small change in b — driven by temperature, bacterial activity, or particle composition — dramatically alters how much carbon reaches the deep ocean. Climate warming is expected to increase b by accelerating microbial metabolism, weakening deep carbon storage.',
        },
        {
          q: 'What percentage of surface primary production typically reaches the deep ocean (below ~1,000 m (3,281 ft))?',
          a: [
            'Approximately 50–60% of primary production sinks below 1,000 m (3,281 ft), with the remainder consumed by surface grazers',
            'Export production is ~5–20% of primary production, but most of that is remineralised in the twilight zone (200–1,000 m (656–3,281 ft)) by bacteria; only ~1–5% of primary production ultimately reaches depths below 1,000 m (3,281 ft), and well under 1% is buried in sediments',
            'Nearly 100% of primary production eventually sinks to the deep ocean because organic molecules are denser than seawater; the only question is how long it takes',
            'Approximately 30–40% of primary production crosses 1,000 m (3,281 ft) depth in productive upwelling zones, though this falls to near zero in subtropical gyres',
          ],
          correct: 1,
          explain: 'Option A vastly overestimates deep export — 50–60% reaching below 1,000 m (3,281 ft) would imply almost no remineralisation, which contradicts all observations from sediment traps and radionuclide tracers. Option C is wrong because dissolved and colloidal organic matter, while abundant, is largely consumed within the upper ocean by the microbial loop; density alone does not drive sinking, and most organic carbon is respired before it can sink. Option D overestimates even upwelling-zone export; 30–40% of primary production reaching 1,000 m (3,281 ft) has never been observed at any location. Option B reflects the current scientific consensus: globally, export production (crossing the euphotic zone base at ~100–200 m (328–656 ft)) is 5–20% of primary production; the Martin curve then attenuates this by ~90% between 100 m (328 ft) and 1,000 m (3,281 ft), leaving only ~1–5% of primary production crossing the 1,000 m (3,281 ft) horizon. Sediment burial represents another order-of-magnitude reduction: roughly 0.2–0.5% of primary production. These small percentages are nevertheless climate-significant because the total primary production is ~50 Pg C yr⁻¹ — meaning even 0.5% represents ~250 Mt C yr⁻¹ buried permanently.',
        },
        {
          q: 'What is the carbonate pump and how does it interact with the soft-tissue pump?',
          a: [
            'The carbonate pump is the dissolution of seafloor limestone by acidic deep water, releasing CO₂ back to the ocean interior; it opposes the soft-tissue pump by re-releasing buried carbon',
            'The carbonate pump is the production and sinking of calcium carbonate shells by organisms such as coccolithophores, foraminifera, and pteropods; it interacts with the soft-tissue pump via the ballast hypothesis — dense CaCO₃ minerals may accelerate sinking of associated organic carbon, reducing remineralisation — but CaCO₃ formation also releases CO₂ to surface water, partially offsetting the organic carbon export effect',
            'The carbonate pump is the thermohaline transport of bicarbonate ions from the surface to the deep ocean via sinking dense water masses; it works in the same direction as the soft-tissue pump by removing dissolved inorganic carbon from the surface',
            'The carbonate pump only operates in coastal and shelf environments where organisms have access to calcium-rich terrestrial runoff; it is negligible in the open ocean',
          ],
          correct: 1,
          explain: 'Option A describes the carbonate compensation depth (CCD) and carbonate dissolution, which is one aspect of carbonate chemistry, but it describes a diagenetic process, not the carbonate pump itself. Option C conflates thermohaline circulation and carbonate chemistry — dissolved bicarbonate transport by circulation is not the "carbonate pump." Option D is incorrect: coccolithophores and foraminifera are abundant open-ocean organisms; the deep-sea carbonate ooze covering vast areas of the Pacific and Atlantic seafloor is entirely derived from open-ocean organisms. Option B correctly defines the carbonate pump: organisms produce CaCO₃ shells, which sink and carry inorganic carbon to depth. The ballast hypothesis (Armstrong et al., 2002) proposes that CaCO₃ and biogenic silica (opal) minerals, being denser than seawater, increase the sinking speed of aggregates they are associated with, effectively protecting organic carbon from remineralisation by delivering it faster to depth. However, CaCO₃ precipitation in surface water releases CO₂ (2 HCO₃⁻ → CaCO₃ + CO₂ + H₂O), partially counteracting the drawdown of atmospheric CO₂. The ratio of CaCO₃ to organic carbon in sinking particles — the "rain ratio" — is therefore a key parameter in carbon cycle models.',
        },
        {
          q: 'How does ocean warming affect biological pump efficiency?',
          a: [
            'Ocean warming enhances biological pump efficiency by lengthening the growing season for phytoplankton, increasing primary production and export flux in all ocean regions',
            'Ocean warming generally weakens biological pump efficiency: increased stratification reduces nutrient supply to the surface, shifting communities toward small picophytoplankton with low e-ratios, while higher temperatures accelerate bacterial remineralisation in the twilight zone, reducing the fraction of export reaching the deep ocean',
            'Ocean warming has no significant effect on the biological pump because phytoplankton growth rates are limited by light, not temperature, and light availability does not change with warming',
            'Ocean warming strengthens the carbonate pump specifically, because warmer temperatures accelerate calcification by coccolithophores, increasing CaCO₃ export, even as the soft-tissue pump weakens',
          ],
          correct: 1,
          explain: 'Option A is partially true for high-latitude regions where warming may initially extend growing seasons, but globally and on balance, warming weakens pump efficiency; the characterisation "in all ocean regions" is incorrect. Option C is wrong: phytoplankton growth is limited by nutrients in most of the ocean (not light), and temperature significantly affects microbial metabolic rates — bacterial remineralisation accelerates by ~5–10% per degree of warming (Q10 effect), directly reducing deep export. Option D misrepresents the carbonate pump response: ocean acidification, a co-consequence of warming (via CO₂ absorption), reduces CaCO₃ saturation and impairs calcification by coccolithophores and pteropods, particularly in polar waters already approaching aragonite undersaturation. Option B reflects the scientific consensus from CMIP6 Earth System Models and observational records: (1) stronger thermal stratification reduces the entrainment of deep, nutrient-rich water into the sunlit layer, shifting communities toward nutrient-efficient but poorly sinking small cells; (2) the microbial loop processes more carbon before it sinks; (3) higher twilight-zone temperatures increase bacterial remineralisation per unit depth (raising b in the Martin curve), meaning a smaller fraction of export survives to reach the deep ocean. The combined effect is a projected 1–12% decline in global export production by 2100 under high-emissions scenarios, representing a weakening of a major natural carbon sink.',
        },
      ],
    },
  ],
}

export default biologicalPump
