import { Waves, Activity, Zap, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const marinePrimaryProduction: Lesson = {
  id: 'ocea-201-1-2-2',
  title: 'Marine Primary Production',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'Phytoplankton, light, nutrients, and the controls on photosynthesis that drive the ocean food web and global carbon cycle',
  sources: [
    { org: 'NASA',   title: 'NASA Ocean Color Program',          url: 'https://oceancolor.gsfc.nasa.gov/' },
    { org: 'MBARI',  title: 'MBARI Biological Oceanography',     url: 'https://www.mbari.org/' },
    { org: 'Nature', title: 'Nature — Phytoplankton',            url: 'https://www.nature.com/' },
    { org: 'NOAA',   title: 'NOAA Ocean Service',                url: 'https://www.noaa.gov/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Invisible forests: the phytoplankton that feed the ocean and regulate the climate',
      body: `Look out over the ocean and you see what appears to be an empty blue desert. Yet the ocean produces roughly 50 petagrams of carbon per year through photosynthesis — approximately equal to the net primary production of all terrestrial ecosystems combined. This biological production is carried out almost entirely by phytoplankton: single-celled photosynthetic organisms too small to see without a microscope, drifting in the sunlit upper ocean. Their collective metabolism underpins the entire marine food web and plays a central role in the global carbon cycle.

Phytoplankton diversity is extraordinary. **Diatoms** — encased in intricate silica shells called frustules — are among the most productive phytoplankton, dominating cold, nutrient-rich upwelling zones and spring blooms at high latitudes. **Coccolithophores** build calcium carbonate plates and are globally abundant; when they die and sink, their calcite shells export carbon to the deep ocean. **Dinoflagellates** are often mixotrophic, able to photosynthesize or ingest prey; some produce toxins responsible for harmful algal blooms (red tides). Among the tiniest are the cyanobacteria **Prochlorococcus** and **Synechococcus**: Prochlorococcus, discovered only in 1988, is the most abundant photosynthetic organism on Earth, with an estimated global population of 10²⁷ cells. It thrives in warm, nutrient-poor tropical waters where its tiny size (0.6 µm) gives it a high surface area–to-volume ratio for capturing scarce nutrients.

The most fundamental control on photosynthesis is light. Sunlight penetrates seawater but is rapidly absorbed and scattered with depth; the **euphotic zone** — where light exceeds approximately 1% of surface irradiance and net photosynthesis is possible — extends to roughly 200 m in the clearest open-ocean water, but may be as shallow as 20 m in turbid coastal waters. Near the surface, paradoxically, light can be too intense: **photoinhibition** occurs when excess radiation damages photosynthetic machinery, reducing production just below the sea surface. The depth of peak production often lies a few tens of metres down, in a **deep chlorophyll maximum** (DCM) where light and nutrient availability are optimally balanced.

Harold Sverdrup\'s **critical depth hypothesis** (1953) elegantly explains the explosive spring blooms observed at high latitudes. In winter, strong winds deepen the mixed layer to hundreds of metres, so phytoplankton spend most of their time in darkness and photosynthesis cannot keep pace with respiration — the water is a net heterotrophic system. In spring, solar heating shallows the mixed layer, trapping phytoplankton in the euphotic zone. When the mixed layer depth drops below the **critical depth** (the depth at which depth-integrated photosynthesis equals depth-integrated respiration), bloom conditions are met. The shallow mixed layer also brings nutrients from the deep winter overturn to the surface; cells multiply exponentially until nutrients are exhausted.

Nutrients — chiefly nitrogen (as nitrate, NO₃⁻), phosphorus (phosphate, PO₄³⁻), and silicon (silicic acid, required by diatoms) — are the other master switch on production. The **oligotrophic gyres** of the subtropical oceans — including the Sargasso Sea in the North Atlantic and the South Pacific Gyre — are the ocean\'s deserts: warm surface water, permanent stratification, and negligible upward nutrient supply keep production extremely low (~30 g C m⁻² yr⁻¹). In contrast, eastern boundary upwelling systems (California, Peru-Humboldt, Benguela) bring cold, nutrient-rich deep water to the surface and support production rates 10–20× higher, sustaining some of the world\'s most productive fisheries.

In parts of the Southern Ocean, the Subarctic Pacific, and the equatorial Pacific, macronutrients remain abundant yet chlorophyll is low — these **HNLC** (high-nutrient, low-chlorophyll) regions are limited by iron, a trace metal. Iron fertilization experiments (IronEx in the equatorial Pacific, SOIREE and LOHAFEX in the Southern Ocean) confirmed that adding iron to HNLC waters triggers phytoplankton blooms, demonstrating the critical role of iron as a micronutrient.

Phytoplankton size spectra matter for the food web and carbon export. Large cells like diatoms (~20–200 µm, **microplankton**) support short, efficient food chains (diatom → copepod → fish) and, when they die, sink rapidly, exporting carbon to depth via the **biological pump**. Tiny picoplankton like Prochlorococcus (~0.6–2 µm) support long, lossy microbial food webs and contribute little to sinking export. The ratio of carbon to chlorophyll varies widely (20–200 g C / g Chl-a) depending on species, light, and nutrient status — a key source of uncertainty in converting satellite chlorophyll retrievals to actual carbon production.

Satellites have transformed our view of ocean productivity. Ocean-color sensors — SeaWiFS (1997–2010), MODIS-Aqua (2002–present), and PACE (2024–) — measure the spectral reflectance of the ocean surface and retrieve chlorophyll a concentrations as a proxy for phytoplankton biomass. Global maps reveal the stark contrast between productive upwelling zones and coastal regions (high chlorophyll, green) and the barren subtropical gyres (low chlorophyll, blue). Long time series now show alarming trends: as the ocean warms and stratification intensifies, subtropical gyres are expanding, phytoplankton ranges are shifting poleward, and total ocean NPP may be declining in some regions — with cascading consequences for marine food webs and the ocean\'s capacity to absorb CO₂.`,
      keyTerms: [
        {
          term: 'net primary production',
          def: 'The rate at which photosynthetic organisms fix carbon through photosynthesis minus the carbon they lose through their own respiration; approximately 50 Pg C yr⁻¹ in the global ocean, roughly equal to terrestrial NPP.',
        },
        {
          term: 'euphotic zone',
          def: 'The sunlit upper layer of the ocean where light exceeds ~1% of surface irradiance and net photosynthesis can occur; extends to roughly 200 m in clear open-ocean water, but much shallower in turbid coastal waters.',
        },
        {
          term: 'spring bloom',
          def: 'An explosive, seasonally-triggered increase in phytoplankton biomass at mid-to-high latitudes in spring, driven by shallowing of the mixed layer (increasing light availability) combined with elevated nutrient concentrations from winter deep mixing.',
        },
        {
          term: 'chlorophyll a',
          def: 'The primary photosynthetic pigment in all phytoplankton groups; absorbs red and blue light for photosynthesis and reflects green wavelengths. Measured by satellite ocean-color sensors as the dominant proxy for phytoplankton biomass and productivity.',
        },
        {
          term: 'Sverdrup critical depth hypothesis',
          def: 'Harald Sverdrup\'s 1953 model explaining spring bloom initiation: a bloom begins when the mixed layer shoals above the critical depth — the depth at which depth-integrated photosynthesis equals depth-integrated community respiration — allowing net phytoplankton growth.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Controls on Production, Phytoplankton Diversity, and Ocean Productivity Regimes',
      body: `Marine primary production is not uniformly distributed — it is concentrated in regions where light and nutrients are simultaneously available. The interplay of stratification, mixing, light, nutrients, and trace metals creates distinct productivity regimes ranging from hyper-productive upwelling zones to near-lifeless subtropical gyres. Understanding these controls, and the diverse phytoplankton communities adapted to each regime, is central to understanding the ocean food web and the biological pump.`,
      cards: [
        {
          name: 'Controls on Marine Photosynthesis',
          icon: Zap,
          color: BRAND.jade,
          desc: 'Light (euphotic zone depth, photoinhibition near surface, deep chlorophyll maximum) and nutrients (N, P, Si, Fe) co-limit phytoplankton growth. Sverdrup\'s critical depth model links mixed layer depth to bloom timing. Iron limits production in HNLC regions despite ample macronutrients.',
          examples: 'Southern Ocean HNLC: NO₃⁻ ~25 µM yet chlorophyll <0.3 mg m⁻³ without Fe · IronEx I (1993): Fe addition → 6× chlorophyll increase in 7 days · Critical depth ~100 m triggers North Atlantic spring bloom in March–April',
        },
        {
          name: 'Phytoplankton Diversity and Function',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Diatoms (silica shells, large cells) dominate productive cold waters and drive carbon export. Prochlorococcus (0.6 µm) dominates warm oligotrophic gyres; most abundant photosynthetic organism on Earth. Coccolithophores calcify and export carbon. Dinoflagellates can form toxic blooms. Size class (pico/nano/micro) determines food web structure and export efficiency.',
          examples: 'Prochlorococcus: 10²⁷ cells globally, responsible for ~20% of ocean O₂ production · Diatom spring bloom: North Atlantic surface chlorophyll rises from 0.1 to >5 mg m⁻³ in weeks · Emiliania huxleyi coccolithophore bloom: visible from space as turquoise swirls',
        },
        {
          name: 'Oligotrophic Gyres vs. Productive Upwelling Zones',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Subtropical gyres (Sargasso Sea, South Pacific): permanent stratification blocks nutrient supply; NPP ~30 g C m⁻² yr⁻¹; dominated by picoplankton. Eastern boundary upwelling zones (California Current, Peru-Humboldt, Benguela): wind-driven Ekman divergence brings cold, nutrient-rich deep water to surface; NPP ~300–600 g C m⁻² yr⁻¹; dominated by diatoms; support ~20% of world fish catch on ~1% of ocean area.',
          examples: 'Sargasso Sea surface NO₃⁻ <0.05 µM vs. California upwelling: 20–30 µM · Peru-Humboldt system: ~10% of global fish catch · South Pacific Gyre: clearest water on Earth (Secchi depth >80 m)',
        },
        {
          name: 'Satellite Ocean Color and Remote Sensing',
          icon: Waves,
          color: BRAND.gold,
          desc: 'Ocean-color sensors (SeaWiFS, MODIS-Aqua, PACE) measure water-leaving radiance spectra to retrieve chlorophyll a, an index of phytoplankton biomass. High-chlorophyll water scatters green wavelengths; low-chlorophyll water appears deep blue. Global chlorophyll maps reveal productivity patterns. C:Chl ratios (20–200) introduce uncertainty in converting chlorophyll to carbon production.',
          examples: 'MODIS-Aqua: daily global ocean coverage at 4 km resolution since 2002 · Global NPP algorithm (VGPM): estimates ~50 Pg C yr⁻¹ · Time series shows subtropical gyre expansion of ~1% per year since 1998 · PACE (2024): hyperspectral sensor distinguishes phytoplankton species composition',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Marine Production Cycle: From Solar Energy to Carbon Export',
      body: 'How light and nutrients flow through the phytoplankton community to fuel the marine food web and drive the biological pump.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how solar energy and nutrients are transformed by phytoplankton into organic carbon that fuels the marine food web and drives deep ocean carbon export via the biological pump',
        nodes: [
          {
            id: 'solar-radiation',
            label: 'Solar radiation penetrates euphotic zone',
            description: 'Sunlight attenuates exponentially with depth. The euphotic zone (0–200 m in clear water) receives enough light for net photosynthesis. Photoinhibition suppresses production near the very surface; the deep chlorophyll maximum sits at the optimal depth. Seasonal and latitude changes in day length and solar angle drive bloom timing.',
            color: BRAND.gold,
          },
          {
            id: 'nutrients',
            label: 'Nutrients available in mixed layer',
            description: 'Nitrate, phosphate, silicic acid (for diatoms), and iron must be present in the euphotic zone. Deep winter mixing replenishes surface nutrients from below; summer stratification cuts off the supply. Upwelling systems deliver cold, nutrient-rich water continuously. HNLC regions have ample macronutrients but are limited by iron.',
            color: BRAND.jade,
          },
          {
            id: 'photosynthesis',
            label: 'Phytoplankton photosynthesis',
            description: 'Phytoplankton use light energy and dissolved CO₂ to fix inorganic carbon into organic compounds: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Diverse functional groups (diatoms, coccolithophores, Prochlorococcus, dinoflagellates) partition the niche space by cell size, nutrient affinity, and light preference. Gross primary production (~100 Pg C yr⁻¹) minus autotrophic respiration yields NPP (~50 Pg C yr⁻¹).',
            color: BRAND.accent,
          },
          {
            id: 'bloom-growth',
            label: 'Carbon fixation and bloom growth',
            description: 'When the critical depth criterion is met (mixed layer < critical depth) and nutrients are available, phytoplankton populations double rapidly (doubling times: 0.5–2 days). Spring blooms at high latitudes build massive biomass within weeks. Bloom development is tracked globally by satellite ocean-color sensors measuring surface chlorophyll a.',
            color: BRAND.coral,
          },
          {
            id: 'grazing-sinking',
            label: 'Grazing and sinking',
            description: 'Zooplankton (copepods, krill) graze phytoplankton, transferring energy up the food web. Dead cells, fecal pellets, and aggregates sink as particulate organic carbon (POC) — the biological pump. Sinking rate increases with cell size; diatom aggregates sink at >100 m day⁻¹. The fraction of NPP exported below the euphotic zone (export ratio, e-ratio) ranges from ~5% in oligotrophic gyres to ~30% in productive upwelling zones.',
            color: BRAND.amethyst,
          },
          {
            id: 'nutrients-regenerated',
            label: 'Nutrients regenerated or exported',
            description: 'Bacteria remineralise most sinking organic matter back to dissolved inorganic nutrients in the mesopelagic (100–1,000 m). Only ~10–20% of export flux survives to the deep ocean (>1,000 m), where carbon can be sequestered for centuries to millennia. Nutrients returned to the surface by mixing fuel future production; nutrients that reach the deep ocean are removed from the surface cycle until upwelled.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'solar-radiation',   to: 'photosynthesis',     label: 'Light energy absorbed by chlorophyll' },
          { from: 'nutrients',         to: 'photosynthesis',     label: 'Dissolved N, P, Si, Fe taken up by cells' },
          { from: 'photosynthesis',    to: 'bloom-growth',       label: 'Net carbon fixation drives cell division' },
          { from: 'bloom-growth',      to: 'grazing-sinking',    label: 'Biomass accumulates until nutrients or grazers limit growth' },
          { from: 'grazing-sinking',   to: 'nutrients-regenerated', label: 'Remineralisation in mesopelagic returns nutrients' },
          { from: 'nutrients-regenerated', to: 'nutrients',      label: 'Winter mixing or upwelling returns nutrients to euphotic zone' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the Sverdrup critical depth hypothesis, and what physical event triggers the spring bloom according to this model?',
          a: [
            'The critical depth hypothesis states that a bloom begins when sea surface temperature rises above 10°C in spring, warming the water enough for phytoplankton metabolic rates to exceed grazing mortality by zooplankton',
            'The critical depth hypothesis holds that a bloom begins when the mixed layer shoals above the critical depth — the depth at which depth-integrated photosynthesis equals depth-integrated community respiration — so that phytoplankton spend enough time in the lit zone for net population growth',
            'The critical depth hypothesis predicts that blooms begin when the nutricline rises above 200 m depth, delivering nitrate and phosphate directly into the euphotic zone without any change in stratification or mixed layer depth',
            'The critical depth hypothesis defines the maximum depth at which phytoplankton chlorophyll a is detectable by satellite ocean-color sensors; blooms begin when this depth falls below the ocean\'s thermocline',
          ],
          correct: 1,
          explain: 'In winter at high latitudes, deep wind-driven mixing distributes phytoplankton throughout a mixed layer that may extend to 200–400 m — well below the euphotic zone (~50–100 m in winter). Cells spend the majority of their time in darkness, so depth-integrated community respiration exceeds depth-integrated photosynthesis and there is no net growth. Harald Sverdrup (1953) defined the critical depth as the depth at which these two integrated rates are exactly equal. In spring, solar heating stratifies the surface ocean, rapidly shoaling the mixed layer to perhaps 20–50 m. Once the mixed layer depth drops below the critical depth, phytoplankton are retained in the euphotic zone long enough for photosynthesis to outpace respiration and bloom conditions are met. The hypothesis correctly predicts that blooms begin not simply when light increases, but specifically when stratification provides adequate light integration time — which is why the North Atlantic bloom begins in March–April while the Southern Ocean bloom can be delayed until December–January.',
        },
        {
          q: 'Why are tropical ocean gyres such as the Sargasso Sea highly unproductive despite having warm temperatures, abundant sunlight, and large surface area?',
          a: [
            'Tropical gyres are unproductive because high water temperatures denature phytoplankton enzymes, preventing photosynthesis from occurring efficiently above 25°C even when light and nutrients are available',
            'Tropical gyres have abundant nutrients but are limited by light; the intense tropical sun causes photoinhibition throughout the entire euphotic zone, suppressing net photosynthesis to near zero across the gyre',
            'Permanent stratification in tropical gyres creates a strong, shallow thermocline that isolates the warm surface layer from the deep nutrient reservoir below; with no upwelling or winter convection to replenish nutrients, surface waters become severely depleted in nitrate, phosphate, and iron, limiting phytoplankton growth despite ample sunlight',
            'Tropical gyres are productive in terms of gross photosynthesis, but the high temperatures accelerate respiration even faster, so net primary production is near zero even though gross production is high',
          ],
          correct: 2,
          explain: 'Temperature does not directly inhibit phytoplankton photosynthesis at 25–30°C — most tropical phytoplankton are well adapted to these conditions. Photoinhibition does occur near the very surface, but the deep chlorophyll maximum typically forms at 75–150 m in clear subtropical water, avoiding the most inhibitory irradiances. High respiration (option D) is a partial effect but is not the dominant reason for oligotrophy. The fundamental limitation in subtropical gyres is nutrient supply. The permanent, year-round thermocline (driven by consistent solar heating) acts as a physical barrier between nutrient-depleted surface water and the nutrient-rich deep ocean. There is no seasonal winter convection to overturn and replenish nutrients as there is at high latitudes, and there is no wind-driven upwelling as there is at eastern ocean boundaries. Surface nitrate concentrations fall below 0.05 µM — about 500× lower than in upwelling zones. The sparse phytoplankton that do grow are dominated by tiny Prochlorococcus and Synechococcus, which have very high nutrient affinity due to their large surface area-to-volume ratio, allowing them to scavenge the trace quantities of nutrients that diffuse up through the pycnocline.',
        },
        {
          q: 'What organism accounts for the largest share of global ocean photosynthesis, and what adaptations allow it to thrive where nutrients are extremely scarce?',
          a: [
            'Diatoms, because their large cell size and robust silica frustules allow them to store nutrients internally during feast-famine cycles and rapidly sink to the surface during upwelling events',
            'Dinoflagellates, because they can migrate vertically to access deep nutrients at night and return to the surface for photosynthesis during the day, giving them a competitive advantage across all ocean productivity regimes',
            'Prochlorococcus, a cyanobacterium approximately 0.6 µm in diameter; its extremely small cell size maximises the surface area-to-volume ratio for nutrient uptake, its genome is the smallest of any photosynthetic organism (allowing minimal metabolic overhead), and it uses divinyl chlorophyll adapted to the blue light that penetrates to depth in clear oligotrophic water',
            'Emiliania huxleyi, the dominant coccolithophore; its calcium carbonate plates reflect excess irradiance, preventing photoinhibition, and its calcification reaction generates CO₂ internally for use in photosynthesis when dissolved CO₂ is limiting',
          ],
          correct: 2,
          explain: 'Prochlorococcus, discovered by Sallie Chisholm and colleagues in 1988, is estimated to have a global population of ~10²⁷ cells and to contribute roughly 20% of total ocean net primary production — the largest single contribution of any organism. Its dominance in the vast, nutrient-poor subtropical gyres reflects several adaptations: (1) Cell size ~0.6 µm gives the highest possible surface area-to-volume ratio, maximising uptake rate per unit biomass at vanishingly low nutrient concentrations; (2) Its genome (~1.7 Mb) is among the smallest of any free-living photosynthetic organism, encoding only essential functions and reducing the nitrogen and phosphorus needed to maintain cellular machinery; (3) It uses divinyl chlorophyll a and b rather than monovinyl chlorophylls, absorbing blue wavelengths (which penetrate deeper in clear water) more efficiently than the green/red wavelengths used by most other phytoplankton; (4) It lacks catalase and other oxidative stress enzymes that most organisms need in high-light environments — reflecting its adaptation to the perpetually low-light deep euphotic zone of oligotrophic gyres. Diatoms dominate in productive cold and upwelling systems but contribute less globally because those zones are much smaller in area.',
        },
        {
          q: 'How do satellite ocean-color sensors estimate ocean primary production, and what is the key source of uncertainty in converting their measurements to carbon fixation rates?',
          a: [
            'Satellites measure the heat emitted by phytoplankton during respiration using thermal infrared sensors; primary production is estimated from the respiration rate using a standard respiratory quotient; the main uncertainty is that different species have different respiratory quotients',
            'Ocean-color sensors measure the spectral reflectance of the ocean surface; high chlorophyll a concentrations shift reflectance toward green wavelengths; satellites retrieve chlorophyll a as a proxy for phytoplankton biomass, and models convert chlorophyll to NPP using photosynthesis-irradiance relationships; the primary uncertainty is the highly variable carbon-to-chlorophyll ratio (20–200 g C g Chl⁻¹), which depends on species, light history, and nutrient status',
            'Satellites measure dissolved oxygen in surface water using UV fluorescence; since photosynthesis produces oxygen at a known stoichiometry, primary production is calculated directly; the main uncertainty is that oxygen also exchanges with the atmosphere, making the photosynthetic contribution difficult to isolate',
            'Ocean-color sensors detect bioluminescence emitted by phytoplankton at night; intensity is proportional to cell density, and production is estimated from growth rate models; the main uncertainty is that only some phytoplankton species produce detectable bioluminescence',
          ],
          correct: 1,
          explain: 'Ocean-color satellites do not measure thermal emission, dissolved oxygen, or bioluminescence — they measure the intensity and spectral distribution of sunlight reflected back out of the ocean surface (water-leaving radiance). Chlorophyll a, the primary photosynthetic pigment in all phytoplankton, strongly absorbs red and blue light while reflecting green; high chlorophyll concentrations therefore shift the ocean\'s spectral reflectance toward longer (greener) wavelengths relative to the very blue, chlorophyll-poor open ocean. Algorithms — originally empirical band-ratio approaches, now including more complex bio-optical models — retrieve surface chlorophyll a concentration from these spectral signatures. Net primary production models (such as the Vertically Generalised Production Model, VGPM) then combine chlorophyll a, sea surface temperature, and photosynthetically active radiation (PAR) to estimate NPP. The dominant source of uncertainty is the carbon-to-chlorophyll ratio: phytoplankton regulate their chlorophyll content in response to light (photo-acclimation) and nutrient availability, so the same chlorophyll concentration can represent very different amounts of actual cellular carbon and photosynthetic capacity. This ratio varies approximately 10-fold across conditions (from ~20 g C g Chl⁻¹ in low-light, nutrient-rich water to ~200 g C g Chl⁻¹ in high-light, nutrient-poor water), propagating directly into NPP estimates.',
        },
        {
          q: 'Why do spring blooms occur at high latitudes but not in the tropical ocean, even though the tropics receive more sunlight year-round?',
          a: [
            'Tropical phytoplankton grow year-round at a slow, steady rate rather than in seasonal pulses because the warm temperatures maintain high grazing pressure from zooplankton throughout the year, preventing biomass accumulation even when nutrients are briefly supplied',
            'The tropics lack spring blooms because solar radiation is too intense near the equator; photoinhibition prevents phytoplankton from accumulating biomass whenever irradiance exceeds a critical threshold, which occurs throughout the year in tropical surface waters',
            'At high latitudes, winter deep mixing replenishes surface nutrients while temporarily suppressing phytoplankton growth; when spring stratification shallows the mixed layer below the critical depth, cells are retained in the euphotic zone with both light and nutrients available, triggering an exponential bloom; in the tropics, permanent stratification keeps surface nutrients chronically depleted year-round, so even though stratification shallows seasonally there are no nutrients available for a bloom',
            'High-latitude spring blooms are caused by the return of migrating zooplankton from deep overwintering depths in spring; as zooplankton sink, they release nutrients that fertilise the surface; in the tropics, zooplankton remain shallow year-round and continuously recycle nutrients, preventing bloom-scale phytoplankton accumulation',
          ],
          correct: 2,
          explain: 'The spring bloom at high latitudes is fundamentally a story about two prerequisites being met simultaneously: adequate light (controlled by mixed layer depth relative to the critical depth) and adequate nutrients. The crucial factor distinguishing high latitudes from the tropics is not primarily light or temperature — it is the seasonal nutrient cycle enabled by winter deep mixing. At high latitudes (poleward of ~40°), winter cooling and storms mix the water column to 200–400 m, drawing nutrient-rich deep water to the surface; this same mixing suppresses photosynthesis by distributing phytoplankton through mostly dark water. In spring, when stratification abruptly shallows the mixed layer, phytoplankton suddenly have both light (they are confined to the euphotic zone) and nutrients (recently supplied by winter convection), and populations explode. In the tropics, permanent stratification has been in place year-round for millennia; the shallow mixed layer is chronically cut off from deep nutrient supply, and surface nitrate and phosphate are essentially undetectable (<0.05 µM). Seasonal changes in tropical stratification are modest compared to high latitudes, and there is no winter convection event to pre-load the surface with nutrients. Zooplankton grazing (option A) contributes to the balance — top-down control does help prevent bloom accumulation in the tropics — but it is not the primary explanation; even if all grazers were removed from a tropical gyre, production would remain nutrient-limited.',
        },
      ],
    },
  ],
}

export default marinePrimaryProduction
