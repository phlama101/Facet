import { Layers, Globe, Activity, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const karstCaves: Lesson = {
  id: 'geom-101-1-3-3',
  title: 'Karst Landscapes, Caves, and Speleothems',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'How carbonate dissolution creates underground drainage systems, sinkholes, caves, and spectacular speleothem formations — and what cave deposits reveal about past climates',
  sources: [
    { org: 'NSS',  title: 'NSS — National Speleological Society',          url: 'https://caves.org' },
    { org: 'USGS', title: 'USGS Karst Interest Group',                     url: 'https://usgs.gov' },
    { org: 'KWI',  title: 'Karst Waters Institute',                        url: 'https://karstwaters.org' },
    { org: 'NSS',  title: 'Journal of Cave and Karst Studies',             url: 'https://caves.org/pub/journal' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'How carbonate dissolution creates underground drainage systems, sinkholes, caves, and spectacular speleothem formations — and what cave deposits reveal about past climates',
      body: `Karst is a landscape shaped by the dissolution of soluble bedrock — primarily limestone and dolomite — by slightly acidic groundwater. The fundamental reaction is: CaCO₃ + CO₂ + H₂O ↔ Ca²⁺ + 2HCO₃⁻. This equation is reversible: dissolution proceeds forward when water is aggressive (undersaturated in calcite), and calcite precipitates when CO₂ degasses and the reaction runs backward — the mechanism that grows every stalactite and stalagmite. Dissolution is greatly enhanced by soil CO₂, which reaches 10–100× atmospheric levels from root respiration and microbial decomposition, producing carbonic acid far more aggressive than rain alone. Cold water also holds more dissolved CO₂ (Henry\'s Law), making high-latitude and alpine karst systems highly effective dissolvers. Organic acids from humic soils provide additional acidity in some settings.

Surface karst landforms record the progressive dissolution of the landscape. Karren are small-scale etched or grooved limestone surfaces produced by sheetflow or soil dissolution. Dolines (sinkholes) are the most ubiquitous karst landform — closed depressions formed either by gradual solution from above or by sudden collapse of a cave roof. Florida, the eastern United States, and the Yucatán Peninsula of Mexico host thousands of sinkholes; the Yucatán\'s cenotes (flooded sinkholes) served as sacred water sources for the ancient Maya. Uvalas are clusters of coalesced dolines forming larger compound depressions. Poljes are large, flat-floored karst depressions — sometimes hundreds of square kilometres — that may flood seasonally. Tower karst forms in humid tropical settings where intense dissolution isolates residual limestone towers rising abruptly from alluvial plains, as seen dramatically at Guilin, China and Halong Bay, Vietnam. Cockpit karst, as in Jamaica, displays a pitted terrain of conical hills and star-shaped depressions.

Cave development passes through two major stages. In the phreatic stage, passages develop below the water table where water fills all voids; dissolution proceeds in all directions, producing oval or circular tube cross-sections; flow is slow and pressure-controlled. As the regional base level drops — through river incision or sea-level fall — the water table descends, leaving phreatic passages as dry fossil conduits while vadose drainage develops above. Vadose passages are canyon-like, cut rapidly by fast-flowing streams, and can incise tens of metres into pre-existing phreatic tubes. Multiple cave levels in the same system record successive water-table positions and can be used to reconstruct landscape incision rates.

Speleothems (cave mineral deposits) grow wherever CaCO₃-saturated drip water enters a cave air space with lower pCO₂, degasses CO₂, and precipitates calcite. Stalactites hang from the ceiling; stalagmites rise from the floor; where they meet, columns form. Flowstone carpets floors and walls; cave pearls grow concentrically around grains in floor pools. Speleothems are precisely dated by uranium-thorium (U-Th) disequilibrium: uranium (U⁶⁺, soluble) enters the calcite lattice at deposition while thorium (Th⁴⁺, insoluble) is excluded; ²³⁰Th subsequently grows in from ²³⁴U decay at a known rate. This provides ages from ~2 years to ~600,000 years with precisions of ±0.1–1%. Oxygen isotope ratios (δ¹⁸O) in speleothem calcite record past moisture sources and rainfall intensity; Mg/Ca ratios record prior calcite precipitation and effective rainfall. Speleothem records from Dongge Cave (China), Botuvera Cave (Brazil), and Hulu Cave (China) have transformed understanding of monsoon variability and even helped calibrate the radiocarbon timescale. Approximately 20% of Earth\'s ice-free land surface underlies karst topography.`,
      keyTerms: [
        {
          term: 'Carbonate Dissolution',
          def: 'CaCO₃ + CO₂ + H₂O ↔ Ca²⁺ + 2HCO₃⁻; forward reaction dissolves limestone; reverse reaction precipitates calcite as speleothems when CO₂ degasses.',
        },
        {
          term: 'Sinkhole (Doline)',
          def: 'Closed surface depression in karst terrain formed by solution from above or collapse of a subsurface cave void; most ubiquitous karst landform.',
        },
        {
          term: 'Speleothem',
          def: 'Cave mineral deposit (stalactite, stalagmite, flowstone) formed by CaCO₃ precipitation as drip water degasses CO₂ into cave air.',
        },
        {
          term: 'Phreatic Zone',
          def: 'Zone below the water table where cave passages are water-filled; phreatic dissolution produces rounded, tubular passage cross-sections.',
        },
        {
          term: 'U-Th Dating',
          def: 'Uranium-thorium disequilibrium dating of speleothems; works from ~2 to ~600,000 years; exploits uranium incorporation and thorium exclusion during calcite precipitation.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Karst Processes and Landforms',
      body: `Karst systems operate across scales from molecular dissolution chemistry to landscape-scale drainage reorganisation. Understanding each component — from the chemistry that drives dissolution, to the surface landforms it creates, to the cave passages it carves, to the speleothems that archive past climates — reveals an interconnected system linking atmosphere, soil, rock, and groundwater.`,
      cards: [
        {
          name: 'Carbonate Dissolution Chemistry',
          icon: Layers,
          color: BRAND.accent,
          desc: 'CaCO₃ + CO₂ + H₂O → Ca²⁺ + 2HCO₃⁻; open-system dissolution enhanced by soil CO₂; equilibrium and saturation indices; aggressiveness of speleogenetic water; dolomite dissolution.',
          examples: 'Saturation index (SI = log[IAP/Ksp]) determines whether water dissolves or precipitates calcite; aggressive recharge water (SI < 0) dissolves cave walls, while cave air CO₂ degassing (pCO₂ drops from 0.01–0.1 atm in soil to ~0.0003 atm in cave) drives SI positive and precipitates speleothems.',
        },
        {
          name: 'Surface Karst Landforms',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Karren (small-scale etched forms), dolines/sinkholes (most common karst feature), tower karst (tropical humid karst with isolated residual hills), cockpit karst.',
          examples: 'Guilin limestone towers, China: residual hills rising 100–200 m (328–656 ft) from alluvial plains shaped by intense subtropical dissolution; Halong Bay, Vietnam: drowned tower karst; Florida sinkhole collapse events destroying roads and homes over the Floridan Aquifer; Yucatán cenotes used by Maya as sacred water sources.',
        },
        {
          name: 'Cave Development: Phreatic and Vadose Stages',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Phreatic: water-table-controlled, circular passages dissolve in all directions, large trunk passages; vadose: above water table, streams cut canyons into phreatic passages; cave levels record former water table positions and landscape incision.',
          examples: 'Mammoth Cave (Kentucky): 687 km (427 mi) mapped, multiple levels recording successive Ohio River incision stages; Lechuguilla Cave (New Mexico): formed by H₂SO₄ rising from below (sulfuric acid speleogenesis) rather than descending meteoric water; Waitomo Glowworm Cave (New Zealand): active vadose stream passage with bioluminescent larvae.',
        },
        {
          name: 'Speleothems as Climate Archives',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Stalactites, stalagmites, flowstone grow by CaCO₃ precipitation as CO₂ degasses; U-Th dating (2 years to 600,000 years); δ¹⁸O records moisture source and temperature; Mg/Ca records rainfall intensity.',
          examples: 'Dongge Cave (China) stalagmite records Asian Summer Monsoon variability over 160,000 years with sub-centennial resolution; Botuvera Cave (Brazil) records South American Monsoon intensity shifts linked to insolation forcing; Hulu Cave (China) U-Th-dated record helped calibrate the radiocarbon timescale beyond tree rings.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Karst System: From Rainwater to Climate Archive',
      body: `How carbonate dissolution links atmospheric CO₂, soil chemistry, surface landforms, cave development, and speleothem climate records in a single integrated system.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how rainwater charged with soil CO₂ becomes aggressive, dissolves limestone at the surface and underground, carves cave passages through phreatic and vadose stages, and ultimately precipitates speleothems that archive past climate conditions',
        nodes: [
          {
            id: 'rainwater-soil-co2',
            label: 'Rainwater + Soil CO₂',
            description: 'Rainwater (pH ~5.6) absorbs soil CO₂ (10–100× atmospheric) to form carbonic acid (H₂CO₃). Resulting pH 4.5–5.5 creates aggressive water strongly undersaturated with respect to calcite.',
            color: BRAND.accent,
          },
          {
            id: 'aggressive-water',
            label: 'Aggressive Water Forms',
            description: 'Saturation index SI < 0; dissolution capacity proportional to degree of undersaturation. Open-system dissolution (continuous CO₂ supply from soil) far more aggressive than closed-system. Water can dissolve several hundred mg/L CaCO₃.',
            color: BRAND.jade,
          },
          {
            id: 'surface-dissolution',
            label: 'Surface Dissolution: Karren & Dolines',
            description: `Aggressive water etches exposed limestone surfaces (karren) and preferentially dissolves along joints and bedding planes. Enlarging voids create dolines (sinkholes) by solution from above or cavity collapse. ~20% of Earth\'s land surface underlies karst.`,
            color: BRAND.coral,
          },
          {
            id: 'phreatic-development',
            label: 'Phreatic Cave Development',
            description: 'Below water table: water fills all voids; dissolution proceeds in all directions; passages develop oval/circular cross-sections along joints and bedding planes. Slow flow; large trunk conduits form over thousands to millions of years.',
            color: BRAND.ruby,
          },
          {
            id: 'vadose-modification',
            label: 'Vadose Modification',
            description: 'As base level drops, water table descends; phreatic tubes drain and become vadose. Streams incise canyon passages into phreatic floors. Multiple cave levels record successive water-table positions and landscape incision history.',
            color: BRAND.amethyst,
          },
          {
            id: 'speleothem-climate',
            label: 'Speleothem Precipitation / Climate Archive',
            description: 'Drip water entering cave air (low pCO₂ ~0.0003 atm) degasses CO₂; SI rises above 0; calcite precipitates as stalactites, stalagmites, flowstone. U-Th dating + δ¹⁸O + Mg/Ca provide high-resolution paleoclimate records to 600 ka.',
            color: BRAND.gold,
          },
        ],
        edges: [
          { from: 'rainwater-soil-co2',   to: 'aggressive-water',      label: 'Carbonic acid dissolution capacity' },
          { from: 'aggressive-water',     to: 'surface-dissolution',   label: 'Attacks exposed limestone surfaces' },
          { from: 'surface-dissolution',  to: 'phreatic-development',  label: 'Water infiltrates and enlarges conduits' },
          { from: 'phreatic-development', to: 'vadose-modification',   label: 'Base-level drop drains phreatic tubes' },
          { from: 'vadose-modification',  to: 'speleothem-climate',    label: 'CO₂ degassing precipitates calcite' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The dissolution equation for limestone (CaCO₃ + CO₂ + H₂O ↔ Ca²⁺ + 2HCO₃⁻) is reversible. Under what conditions does the reaction proceed backward to precipitate calcite (CaCO₃)?',
          a: [
            'When water temperature increases above 25°C, solubility of calcite decreases and precipitation occurs spontaneously',
            'When water becomes supersaturated due to evaporation in an arid surface environment, calcite precipitates as a desert crust (caliche)',
            'When CO₂ partial pressure decreases — in cave air, pCO₂ is much lower than in soil water (~0.0003 atm vs. 0.01–0.1 atm); as aggressive water enters the cave and CO₂ degasses into cave air, equilibrium shifts right-to-left and calcite precipitates; this is how stalactites and stalagmites grow',
            'When magnesium ions from dolomite dissolution compete with calcium for carbonate ions, driving calcite out of solution',
          ],
          correct: 2,
          explain: 'When CO₂ partial pressure decreases: in cave air, pCO₂ is much lower than in soil water (~0.0003 atm vs. 0.01–0.1 atm); as aggressive water enters the cave and CO₂ degasses into cave air, the equilibrium shifts right-to-left (calcite precipitation); this is how stalactites and stalagmites grow; faster drip rates and lower cave pCO₂ drive faster precipitation rates, recording past rainfall intensity.',
        },
        {
          q: 'Sinkholes (dolines) in Florida have caused catastrophic collapses destroying homes and roads. What specific geological condition makes Florida particularly vulnerable?',
          a: [
            'Florida sits on young volcanic rock that is inherently unstable and prone to collapse under the weight of buildings',
            'Thick Eocene-Oligocene limestone overlain by a thin veneer of sand and clay: Florida rests on the Florida Platform, hundreds of metres of carbonate rocks with a high water table; dissolution has created an extensive karst aquifer (Floridan Aquifer); when groundwater is over-pumped or drought lowers the water table, support for void roofs is lost and sudden cover-collapse sinkholes occur',
            'Florida has unusually acidic rainfall due to proximity to the Gulf of Mexico, accelerating dissolution faster than any other US state',
            'Florida\'s limestone is exceptionally pure (>99% CaCO₃) leaving no insoluble residue to support overlying sediments after dissolution',
          ],
          correct: 1,
          explain: 'Thick Eocene-Oligocene limestone overlain by a thin veneer of sand and clay: Florida rests on the Florida Platform, a sequence of carbonate rocks hundreds of metres thick with a high water table; dissolution has created an extensive karst aquifer (Floridan Aquifer); when groundwater is over-pumped or drought lowers the water table, support for the roof of a void is lost and sudden sinkhole collapse occurs; cover-collapse sinkholes (vs. slower solution sinkholes) are responsible for catastrophic events.',
        },
        {
          q: 'Tower karst landscapes like those around Guilin, China, develop tall isolated limestone towers rising abruptly from flat plains. What specific combination of factors creates this distinctive morphology?',
          a: [
            'High rainfall intensity in tropical/subtropical humid climate combined with a high water table in the surrounding plain: intense dissolution attacks limestone from all sides; the alluvial water table controls the level to which towers can be undercut; as the plain lowers, towers become increasingly isolated; warm humid conditions maximize dissolution and biogenic soil CO₂; similar morphology in Halong Bay, Puerto Rico\'s mogotes, and Cuba',
            'Tectonic uplift of a limestone plateau followed by rapid river incision that carves individual towers from the original surface; uplift rate determines tower height',
            'Alternating resistant and soluble limestone beds create selective dissolution that removes soft layers and leaves hard beds as the tower summits',
            'Coastal wave erosion undercuts limestone cliffs, leaving isolated sea stacks that become towers as sea level falls and exposes the surrounding seafloor as flat plains',
          ],
          correct: 0,
          explain: `High rainfall intensity in tropical/subtropical humid climate combined with a high water table in the surrounding plain: intense dissolution produces aggressive water that attacks limestone from all sides; the water table in the surrounding alluvium controls the level to which towers can be undercut; as the plain is lowered, towers become increasingly isolated; the warm, humid conditions maximize dissolution rates and biogenic soil CO₂; similar morphology occurs in Halong Bay (Vietnam), Puerto Rico\'s mogotes, and Cuba.`,
        },
        {
          q: 'U-Th (uranium-thorium) dating is the preferred method for dating speleothems. Why is this method particularly well-suited to cave calcite?',
          a: [
            'Cave calcite contains high concentrations of uranium because carbonate rocks are naturally uranium-rich, providing a large signal for measurement',
            'U-Th dating requires no initial condition assumptions because both uranium and thorium are incorporated equally at deposition, simplifying the age equation',
            'Cave calcite is protected from cosmic rays underground, eliminating the main source of error that affects surface exposure dating methods',
            'Speleothems incorporate uranium from solution but exclude thorium: when calcite precipitates, uranium (U⁶⁺, highly soluble) co-precipitates but thorium (Th⁴⁺, insoluble) is excluded; ²³⁰Th grows in from ²³⁴U decay at a known rate; the ²³⁰Th/²³⁴U ratio gives ages from ~2 to ~600,000 years with precision of ±1–1,000 years — perfectly suited to Quaternary climate records inaccessible to radiocarbon (>50,000 years)',
          ],
          correct: 3,
          explain: 'Speleothems incorporate uranium from solution but exclude thorium: when calcite precipitates from drip water, uranium (as U⁶⁺, highly soluble) co-precipitates with the calcite, but thorium (Th⁴⁺, insoluble) is excluded; ²³⁰Th then grows in from ²³⁴U decay with a known half-life; the ²³⁰Th/²³⁴U ratio gives the age with precision of ±1–1,000 years depending on age; this works from ~2 years to ~600,000 years — perfectly suited to Quaternary climate records inaccessible to radiocarbon (>50,000 years).',
        },
        {
          q: 'Why do speleothem δ¹⁸O values in monsoon regions record rainfall amount rather than temperature?',
          a: [
            'Monsoon rainfall is always warm and isothermal, so temperature cannot vary enough to produce measurable δ¹⁸O signals in monsoon regions',
            'The \'amount effect\': in tropical and subtropical monsoon regions, intense rainfall events are isotopically lighter (more negative δ¹⁸O) than light rainfall, because intense convective rainfall preferentially rains out heavy isotopes in the updraft column, delivering isotopically depleted water to the surface; this dominates in Asian and South American monsoon regions; polar and high-latitude sites instead record temperature (the \'temperature effect\')',
            'Monsoon regions have no seasonal temperature variation, forcing all δ¹⁸O variability to be controlled by moisture source changes rather than local temperature',
            'Cave calcite in tropical monsoon regions recrystallises seasonally due to high temperatures, erasing the original temperature signal and leaving only the hydrological signal intact',
          ],
          correct: 1,
          explain: `The \'amount effect\': in tropical and subtropical monsoon regions, intense rainfall events are isotopically lighter (more negative δ¹⁸O) than light rainfall events, because intense convective rainfall preferentially rains out heavy isotopes in the updraft column, delivering isotopically depleted water to the surface; this is the dominant control in Asian and South American monsoon regions; in contrast, polar and high-latitude sites record temperature (the \'temperature effect\'); distinguishing these effects is critical for paleoclimate interpretation of cave records.`,
        },
      ],
    },
  ],
}

export default karstCaves
