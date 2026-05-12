import { Waves, Globe, Droplets } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seawaterSalinity: Lesson = {
  id: 'ocea-101-1-2-1',
  title: 'Salinity and Seawater Chemistry',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '11 min',
  xpReward: 140,
  description: "Seawater is not simply salty water. It is a precisely buffered chemical solution containing 96 dissolved elements — and its composition has barely changed in 600 million years.",
  sources: [
    { org: 'NOAA',     title: 'Why is the ocean salty?',                                  url: 'https://oceanservice.noaa.gov/facts/whysalty.html' },
    { org: 'NOAA',     title: 'Seawater Chemistry and Ocean Salinity',                    url: 'https://oceanservice.noaa.gov/education/tutorial_currents/01ocean1.html' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 6 (CC-BY 4.0)',           url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'USGS',     title: 'Dissolved solids and ocean chemistry',                     url: 'https://www.usgs.gov/special-topics/water-science-school/science/dissolved-solids-water' },
    { org: 'IUPAC',    title: 'Standard Atomic Weights and Seawater Composition',         url: 'https://iupac.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The world ocean solution',
      body: `Taste a drop of seawater and the dominant sensation is salt — sodium chloride, the same compound in a kitchen salt shaker. But seawater is a far more complex solution than a simple sodium chloride brine. It contains measurable concentrations of every naturally occurring element on the periodic table, plus dissolved gases, nutrients, organic compounds, and colloidal particles. That complexity arises from billions of years of interaction: rivers carrying dissolved minerals from eroding rock into the sea; seafloor hydrothermal systems adding metals and other elements from the mantle; organisms extracting certain elements to build shells, bones, and tissue; and evaporation concentrating what remains.

What is remarkable about seawater chemistry is its **constancy**. Not its concentration — average ocean salinity varies from 33 to 37 g of dissolved material per kilogram of seawater (typically expressed as practical salinity units, PSU, or simply parts per thousand) depending on location and depth. But the **proportions** of the major dissolved ions are nearly constant everywhere in the ocean, and have been approximately constant for at least the last 600 million years. This **principle of constant proportions**, first recognised by the British chemist William Dittmar in the 1880s after analysing 77 water samples collected by HMS Challenger's 1872–76 voyage, means that measuring the concentration of any one major ion allows you to calculate all the others. It also means the ocean is buffered — controlled by geological processes operating on million-year timescales that prevent any single element from accumulating to toxic levels or being stripped out entirely.

The ocean is the ultimate sink and regulator of Earth's surface chemistry. Rivers continuously deliver dissolved salts to the sea; yet the ocean's salinity has not increased beyond roughly its current value in hundreds of millions of years. Equally, the ocean does not run dry: evaporation removes water but the dissolved salts remain. The balance is maintained by sediment burial (which removes calcium, magnesium, and silica), biological uptake (which cycles nutrients through the water column), and submarine volcanic activity (which both adds and removes elements through hydrothermal exchange).`,
      keyTerms: [
        {
          term: 'Salinity',
          def: 'The total mass of dissolved inorganic material (salts) in seawater, expressed in grams per kilogram of seawater (g/kg) or practical salinity units (PSU). Average ocean salinity is approximately 35 PSU. Ranges from ~2 PSU in the Baltic Sea (nearly landlocked, heavy freshwater input) to ~42 PSU in the Red Sea (high evaporation, restricted circulation).',
        },
        {
          term: 'Chlorinity',
          def: 'The mass of chlorine (and equivalent halogens) per kilogram of seawater, historically used to calculate salinity before modern electronic conductivity methods became standard. The relationship salinity ≈ 1.80655 × chlorinity was established by the 1902 Knudsen-Jacobsen tables and used for most of the twentieth century.',
        },
        {
          term: 'Major ions',
          def: 'The six ions that account for over 99% of the dissolved solids in seawater: chloride (Cl⁻, 55%), sodium (Na⁺, 31%), sulphate (SO₄²⁻, 8%), magnesium (Mg²⁺, 4%), calcium (Ca²⁺, 1%), and potassium (K⁺, 1%). Their relative proportions are nearly constant in all open ocean water (principle of constant proportions).',
        },
        {
          term: 'Residence time',
          def: 'The average time an element or molecule spends in the ocean before being removed by chemical precipitation, biological uptake, or burial in sediment. Sodium has a residence time of ~68 million years (highly soluble, removed slowly). Calcium has ~1 million years (rapidly removed by calcium carbonate shell formation). Aluminium has only ~100 years (quickly removed by adsorption and particle settling).',
        },
        {
          term: 'Haloclime',
          def: 'A zone in the ocean characterised by a rapid change in salinity with depth, separating layers of different salinity. Distinct from the thermocline (temperature change with depth) and pycnocline (density change with depth), though all three often co-occur. Found most prominently at river mouths and in marginal seas with strong freshwater input.',
        },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'wave-anatomy',
        caption: 'Ocean wave anatomy: crest, trough, wavelength, amplitude, and orbital water motion. Orbital circles shrink exponentially with depth; no motion below the wave base (λ/2).',
        credit: 'NOAA / Thurman (1994)',
      },
    },
    {
      type: 'concept',
      title: 'Sources of salt, residence times, and the constancy of seawater',
      body: `**Where does the salt come from?** Seawater salinity has two primary sources: **continental weathering** and **submarine volcanism**. Continental weathering is the primary process: rain water (slightly acidic from dissolved CO₂) falls on rocks, chemically attacks silicate and carbonate minerals, and dissolves soluble ions including sodium, calcium, magnesium, potassium, and bicarbonate. Rivers carry these dissolved ions to the sea. Crucially, river water and seawater have very different ionic compositions: rivers are dominated by calcium and bicarbonate (the products of carbonate mineral dissolution), while the ocean is dominated by sodium and chloride. This means the ocean has a substantial memory: most of the calcium and bicarbonate delivered by rivers has been removed by organisms building calcium carbonate shells, while sodium and chloride — harder to remove — have accumulated over billions of years. Chlorine itself is thought to derive largely from volcanic outgassing: as Earth's mantle degassed in the early history of the planet, hydrogen chloride (HCl) was released and dissolved into the forming ocean. **Hydrothermal vents** at mid-ocean ridges add heat, metals, and some dissolved constituents (iron, manganese, hydrogen sulphide) while removing magnesium and sulphate from seawater — making them a major control on ocean chemistry even today.

**The principle of constant proportions.** The most important property of seawater chemistry is the remarkable constancy of the relative proportions of the major ions. Wherever in the open ocean you sample, and regardless of the total salinity, sodium will be approximately 30.6% of the dissolved material, chloride 55.0%, sulphate 7.7%, magnesium 3.7%, calcium 1.2%, and potassium 1.1%. The reasons are both physical and chemical: ocean water circulates on timescales of ~1,000 years (one complete thermohaline overturn), mixing the contributions of rivers, hydrothermal vents, and evaporation into a single well-homogenised reservoir. The principle breaks down near river mouths, in highly restricted basins (the Baltic Sea, the Black Sea), and in the deep sea where unusual processes operate.

**Residence times.** Different elements have very different residence times in the ocean. The residence time is essentially the ratio of the total amount of an element in the ocean to the rate at which it is added (or removed). An element with a long residence time (like sodium, ~68 million years) is well-mixed and contributes to the principle of constant proportions. An element with a short residence time (like aluminium, ~100 years) is rapidly removed by adsorption onto sinking particles and never reaches equilibrium across the whole ocean — its concentration varies enormously by location. The contrast in residence times between major ions (millions to tens of millions of years) and trace elements (years to thousands of years) is why major ion chemistry is homogenous while trace element chemistry is highly variable.

**Spatial variation in salinity.** While the major ion ratios are constant, total salinity varies significantly across the ocean surface. The highest surface salinities (~37 PSU) occur in the subtropical gyres — regions of persistent high pressure where evaporation greatly exceeds precipitation and there is little freshwater input. The lowest open-ocean surface salinities (~32–33 PSU) occur in the polar regions (where sea ice formation adds freshwater when it melts) and the equatorial zone (heavy rainfall). Estuaries, fjords, and marginal seas like the Baltic can reach salinities well below 10 PSU. The Red Sea (~42 PSU) and Persian Gulf (~45 PSU) are among the saltiest, due to very high evaporation rates and restricted connections to the open ocean.

**Ocean acidification.** Ocean pH is currently ~8.1 — slightly alkaline, maintained by the carbonate buffering system (dissolved CO₂ equilibria with carbonate and bicarbonate ions). Since the Industrial Revolution, the ocean has absorbed approximately one-third of all anthropogenic CO₂ emitted by humans. This CO₂ dissolves in seawater as carbonic acid (H₂CO₃), which dissociates to increase hydrogen ion concentration: **ocean acidification**. Ocean pH has already fallen by 0.1 units since 1750 — a 26% increase in hydrogen ion concentration. Because the pH scale is logarithmic, this represents a geologically rapid change. At the projected rate, by 2100, ocean pH could fall to ~7.8, which would severely impair the ability of calcareous organisms (corals, molluscs, foraminifera, pteropods) to build shells, as the seawater becomes undersaturated with respect to calcium carbonate at shallower depths.

**Biological cycling.** Seawater composition is not just controlled by inorganic chemistry — life plays a dominant role. **Nutrients** (nitrate, phosphate, silicate, iron) are essential for photosynthesis and are nearly depleted in the sunlit surface layer, where phytoplankton absorb them and incorporate them into biomass. When organisms die and sink, they decompose, releasing nutrients back into deep water in a process called the **biological pump**. The distribution of nutrients in the ocean is largely a biological phenomenon: surface waters are stripped of nutrients by photosynthesis; deep waters are enriched by remineralisation. Upwelling zones, where deep nutrient-rich water rises to the surface, are among the most productive ocean environments on Earth.`,
      cards: [
        {
          name: 'Major Ions and Constancy',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Six major ions: Cl⁻ (55%), Na⁺ (31%), SO₄²⁻ (8%), Mg²⁺ (4%), Ca²⁺ (1%), K⁺ (1%). Proportions nearly constant everywhere in open ocean (principle of constant proportions). Total salinity varies (32–37 PSU) but ratios fixed. Salinity can therefore be estimated by measuring any single major ion. Average salinity: ~35 PSU. Measured today by electrical conductivity.',
          examples: 'Atlantic: ~37 PSU subtropical gyre · Baltic: ~7 PSU (diluted by freshwater) · Red Sea: ~42 PSU (high evaporation) · Dead Sea: ~340 PSU (terminal lake, not part of ocean)',
        },
        {
          name: 'Residence Times',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Elements with long residence times are well-mixed (principle of constant proportions). Short residence time = highly variable concentration. Na⁺: ~68 Myr (low removal rate). Ca²⁺: ~1 Myr (shells remove it fast). Fe: ~200 yr (adsorbs to particles). Al: ~100 yr (rapidly scavenged). Ocean overturn time: ~1,000 yr. If residence time >> overturn time → well-mixed. If << overturn time → patchy.',
          examples: 'Sodium: ~68 Ma residence, most abundant cation · Iron: <500 yr, limits phytoplankton in 30% of ocean · Bicarbonate: ~100 kyr, central to carbonate buffer',
        },
        {
          name: 'Ocean Acidification',
          icon: Droplets,
          color: BRAND.coral,
          desc: 'Ocean absorbs ~¼ of anthropogenic CO₂ annually. CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻. pH has fallen from ~8.2 (pre-industrial) to ~8.1 today (−0.1 pH unit = +26% H⁺). By 2100: projected ~7.8 (−0.4 units) under high-emissions scenarios. Reduces carbonate ion concentration → shells dissolve, reef-building impaired. Tropical coral reefs most vulnerable: near aragonite saturation already.',
          examples: 'HOTS station (Hawaii): 30-year pH record shows steady decline · Arctic Ocean: already undersaturated for aragonite seasonally · Great Barrier Reef: calcification rates declining',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "The ocean's average salinity is approximately 35 PSU, yet rivers — which continuously supply dissolved material to the ocean — have very different ionic compositions, dominated by calcium and bicarbonate rather than sodium and chloride. How is the ocean's ionic composition maintained in steady state despite continuous riverine input?",
          a: [
            'Rivers are too small relative to the ocean to significantly change its composition; the volume of river input is negligible compared to the total ocean volume, so the ocean composition has not changed over geological time',
            'Calcium and bicarbonate are rapidly removed from seawater by organisms building calcium carbonate shells and by inorganic precipitation; sodium and chloride have no comparable removal mechanisms and accumulate, while the biologically cycled ions remain at steady-state concentrations through the balance of input and removal',
            'The ocean evaporates calcium and bicarbonate preferentially, returning them to the atmosphere as calcium carbonate aerosol particles; sodium and chloride, being heavier, remain in solution',
            'Submarine volcanoes continuously supply sodium and chloride to the ocean, exactly balancing the river input of calcium and bicarbonate; the two sources together maintain a constant salinity',
          ],
          correct: 1,
          explain: 'Riverine input being negligible (A) is quantitatively wrong — rivers deliver approximately 3.7 billion tonnes of dissolved material to the ocean each year; over geological time this would change ocean composition profoundly if it were not balanced by removal; the ocean is not "too big" for river chemistry to matter. Evaporation of calcium carbonate aerosols (C) does not occur — evaporation concentrates all dissolved ions, not just some, and calcium carbonate is not volatile. Submarine volcanoes delivering exact amounts to balance rivers (D) is not accurate — hydrothermal vents both add and remove elements in complex ways, and their input does not simply balance riverine calcium and bicarbonate. The correct answer is B: the key is differential removal rates; calcium and bicarbonate delivered by rivers are rapidly removed — calcium carbonate (CaCO₃) precipitation by coral reefs, shell-forming plankton (foraminifera, coccolithophores, pteropods), and evaporite minerals efficiently removes calcium from seawater at rates comparable to its river input; sodium and chloride, by contrast, have very few removal mechanisms (only burial in evaporite beds in restricted basins and adsorption in hydrothermal systems) and are therefore much more abundant; the ocean is in a steady state for each element where the input rate equals the removal rate.',
        },
        {
          q: "Why do nutrients like nitrate and phosphate have a characteristic 'nutrient-like' depth profile in the open ocean, with very low concentrations at the surface and high concentrations at depth, in contrast to the uniform depth profiles of major ions like sodium and chloride?",
          a: [
            'Nutrients are physically denser than major ions and therefore sink under gravity to accumulate at depth, while lighter sodium and chloride remain near the surface',
            'Sunlight photodegrades nitrate and phosphate molecules at the ocean surface, breaking them down into gaseous nitrogen and phosphorus that escape to the atmosphere; at depth, away from UV radiation, these molecules remain stable',
            'In the sunlit surface ocean, phytoplankton take up nitrate and phosphate for photosynthesis and growth, stripping them from the surface water; when organisms die and sink, bacterial decomposition releases nutrients back into the water at depth, enriching the deep ocean; since nutrients have short biological residence times, their distribution reflects this biological cycling rather than physical mixing',
            'Nutrients are introduced to the ocean exclusively by submarine hydrothermal vents at depth; they diffuse slowly upward but are consumed by chemosynthetic bacteria before reaching the surface, maintaining low surface concentrations',
          ],
          correct: 2,
          explain: 'Density settling (A) does not apply to dissolved ions — dissolved nutrients are ions or small molecules fully in solution and do not sink under gravity; only particles sink. Photodegradation (B) does occur for some organic compounds but is not a major control on nitrate and phosphate distribution — these are inorganic ions stable in sunlight; the depth profile is not explained by photodegradation. Hydrothermal introduction only (D) is incorrect — hydrothermal vents do add some nutrients but are not the primary source; rivers and atmospheric deposition are major nutrient inputs to the ocean surface. The correct answer is C: the biological pump drives the nutrient depth profile; in the photic zone (upper ~200 m where light penetrates), phytoplankton photosynthesize using nitrate, phosphate, and silicate as essential nutrients for cell growth; as phytoplankton grow and are eaten, their biomass sinks as fecal pellets, aggregates, and dead cells; as these organic particles sink into dark water below the photic zone, bacteria break them down (remineralise them), releasing the bound nutrients as inorganic ions back into deep water; the deep ocean is therefore enriched in nutrients while the surface is depleted; unlike sodium and chloride, which are not biologically reactive and remain uniform with depth, nutrients are rapidly cycled through biology.',
        },
        {
          q: 'Ocean pH has decreased from approximately 8.2 before industrialisation to approximately 8.1 today as the ocean absorbs anthropogenic CO₂. Why is this 0.1 unit change considered ecologically significant despite seeming small?',
          a: [
            'A 0.1 pH unit decrease represents an exact 10% increase in acidity, which is within normal biological tolerance for most marine organisms; the concern is not current acidity but the rate of change, which is faster than organisms can adapt',
            'The pH scale is logarithmic: a 0.1 unit decrease corresponds to a 26% increase in hydrogen ion concentration; additionally, reduced pH lowers carbonate ion concentrations, reducing the calcium carbonate saturation state of seawater and impairing shell-building by corals, molluscs, and foraminifera',
            'The 0.1 unit change represents a shift from basic to neutral pH; most marine organisms evolved in basic conditions and cannot function at neutral pH, so even this small absolute change crosses a critical chemical threshold',
            'The significance is not in pH itself but in the fact that the CO₂ absorbed produces carbonic acid that directly attacks the calcium carbonate structures of marine organisms by dissolving them from the outside',
          ],
          correct: 1,
          explain: 'A 0.1 pH unit is not a 10% change in acidity (A) — the pH scale is logarithmic, meaning a 1 unit change = 10-fold change in H⁺ concentration; 0.1 unit = 10^0.1 = 26% change; this is the core point, and A misrepresents the mathematics. pH 8.1 is still basic (alkaline), not neutral (C) — neutral pH is 7.0; the ocean has not shifted to neutral and will not approach neutral under any plausible scenario; the threshold crossed is not acid/base neutrality but carbonate mineral saturation. Carbonic acid directly dissolving shells from outside (D) does occur at very low saturation states and in some acidic environments, but the primary mechanism is thermodynamic: reduced carbonate ion concentration means organisms must expend more energy to precipitate CaCO₃ from undersaturated water, and shells already formed are prone to dissolution. The correct answer is B: the logarithmic pH scale means a 0.1 unit decline represents a 26% increase in hydrogen ion concentration; moreover, as CO₂ dissolves in seawater, it reacts with water to form carbonic acid, which dissociates to produce H⁺ ions that react with carbonate ions (CO₃²⁻) to form bicarbonate (HCO₃⁻), effectively removing carbonate ions from solution; lower carbonate ion concentration reduces the aragonite and calcite saturation states of seawater, meaning the thermodynamic "pressure" driving carbonate shell formation decreases; organisms like corals, pteropods, and foraminifera must work harder to build shells, and in already-undersaturated conditions, shells dissolve.',
        },
      ],
    },
  ],
}

export default seawaterSalinity
