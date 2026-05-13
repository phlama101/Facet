import { Waves, Globe, Activity, Thermometer } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seawaterCarbonateChemistry: Lesson = {
  id: 'ocea-201-1-1-1',
  title: 'Seawater Carbonate Chemistry',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The carbonate system — CO₂ dissolution, dissolved inorganic carbon, alkalinity, and the chemical buffering of seawater',
  sources: [
    { org: 'NOAA',   title: 'NOAA Ocean Acidification Program',  url: 'https://oceanacidification.noaa.gov/' },
    { org: 'MBARI',  title: 'MBARI Ocean Chemistry',             url: 'https://www.mbari.org/' },
    { org: 'IPCC',   title: 'IPCC Ocean and Cryosphere Report',  url: 'https://www.ipcc.ch/' },
    { org: 'Nature', title: 'Nature — Ocean Chemistry',          url: 'https://www.nature.com/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The chemistry of seawater and the fate of CO₂',
      body: `The ocean is not a passive container of water — it is the most chemically active reservoir on Earth\'s surface, and at the centre of that chemistry is carbon dioxide. Roughly 26% of all anthropogenic CO₂ emitted since industrialisation has been absorbed by the oceans. Without that uptake, atmospheric CO₂ concentrations today would be substantially higher, and the pace of climate change would have been faster. Yet the ocean\'s capacity to absorb CO₂ is limited by its own chemistry in ways that are becoming increasingly consequential as emissions continue.

When CO₂ gas from the atmosphere dissolves in seawater, it does not simply sit inertly as dissolved gas. It reacts with water molecules in a cascade of equilibrium reactions that redistribute carbon across multiple chemical forms. First, dissolved CO₂ (written CO₂* to indicate the sum of true dissolved CO₂ and the trace amounts of carbonic acid H₂CO₃ it produces) reacts with water to form carbonic acid, which rapidly dissociates into bicarbonate (HCO₃⁻) and a hydrogen ion (H⁺), and then partially further into carbonate (CO₃²⁻) and a second H⁺. The full equilibrium is:

CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ ⇌ 2H⁺ + CO₃²⁻

The three dissolved inorganic forms — CO₂*, HCO₃⁻, and CO₃²⁻ — together constitute **dissolved inorganic carbon (DIC)**. In modern surface seawater, which has a pH of roughly 8.1, bicarbonate dominates: about 90% of DIC is HCO₃⁻, roughly 9% is CO₃²⁻, and less than 1% is CO₂*. This distribution shifts substantially with depth, temperature, and pressure.

The amount of CO₂ dissolved at the air-sea interface is governed by Henry\'s Law: the concentration of dissolved gas is proportional to its partial pressure in the overlying atmosphere (pCO₂). Cold water absorbs more CO₂ than warm water for the same pCO₂ — which is why the polar oceans are disproportionately important as carbon sinks. As atmospheric CO₂ has risen from ~280 ppm in 1750 to over 420 ppm today, the gradient driving gas into the ocean has steepened, but the ocean\'s ability to keep absorbing CO₂ efficiently is constrained by a key quantity called the **Revelle factor** (also called the buffer factor). At typical open-ocean conditions, the Revelle factor is approximately 10, meaning that a 1% increase in seawater pCO₂ produces only a ~0.1% increase in DIC. Put differently, the ocean must increase its DIC content tenfold less than the proportional change in surface CO₂ pressure — which sounds efficient, but is actually a limitation: it means the ocean absorbs far less CO₂ per unit of pCO₂ increase than simple dissolution would suggest. As more CO₂ is absorbed, the Revelle factor increases, progressively reducing the efficiency of the ocean as a carbon sink.

The capacity of seawater to resist changes in pH as CO₂ is added is measured by **total alkalinity (TA)**. Alkalinity is a charge-balance quantity — essentially the excess of base cations over strong acid anions, dominated in seawater by bicarbonate and carbonate contributions. High alkalinity means the seawater has more buffering capacity: it can absorb more H⁺ (produced when CO₂ dissolves) before pH drops significantly. Modern open-ocean alkalinity is approximately 2,300–2,400 μmol kg⁻¹. Unlike DIC, alkalinity is not directly changed by CO₂ dissolution — it is altered by processes that add or remove calcium carbonate (CaCO₃), such as biological shell formation and dissolution.

A critical consequence of CO₂ absorption is the effect on calcium carbonate minerals. The **saturation state** (Ω) of seawater with respect to calcite or aragonite — the two main CaCO₃ polymorphs — is defined as Ω = [Ca²⁺][CO₃²⁻] / Ksp, where Ksp is the solubility product. When Ω > 1, waters are supersaturated and shells and reefs can form; when Ω < 1, CaCO₃ dissolves. As CO₂ absorbs into seawater, it drives the carbonate equilibrium toward bicarbonate, lowering [CO₃²⁻] and thus Ω. Aragonite, the form of CaCO₃ used by corals, pteropods, and many molluscs, is more soluble than calcite and reaches undersaturation at shallower depths and lower CO₂ concentrations. The depth at which Ω = 1 is called the saturation horizon; below it, shells dissolve rather than accumulate. In the modern ocean, increased CO₂ has shoaled the aragonite saturation horizon — bringing dissolution conditions closer to the surface and into the depth range of shallow-water ecosystems.

Long-term monitoring at Station ALOHA in the North Pacific subtropical gyre has provided some of the clearest evidence of these changes. Since measurements began in the 1980s, surface-water pCO₂ has tracked the atmospheric rise almost exactly, surface pH has dropped by ~0.1 units since 1750, and aragonite saturation state has declined measurably. Because pH is logarithmic, a 0.1-unit decrease represents a ~26% increase in hydrogen ion concentration — a substantial shift for organisms that evolved in a relatively stable chemical environment over millions of years.

Ocean carbonate chemistry thus links the atmosphere, the biological productivity of the surface ocean, the fate of calcifying organisms, and the long-term geological cycling of carbon through seafloor sediments. Understanding its equilibria is foundational to assessing both how the ocean functions as a carbon sink today and how its capacity will change as atmospheric CO₂ continues to rise.`,
      keyTerms: [
        {
          term: 'dissolved inorganic carbon',
          def: 'The total concentration of inorganic carbon species dissolved in seawater: DIC = [CO₂*] + [HCO₃⁻] + [CO₃²⁻], where CO₂* includes dissolved CO₂ and H₂CO₃. In modern surface seawater at pH ~8.1, bicarbonate (HCO₃⁻) accounts for ~90% of DIC, carbonate ~9%, and CO₂* less than 1%.',
        },
        {
          term: 'total alkalinity',
          def: 'A measure of seawater\'s acid-neutralising capacity, defined as the excess of proton acceptors over proton donors relative to a reference level. In seawater it is dominated by bicarbonate and carbonate ions (~2,300–2,400 μmol kg⁻¹ in open-ocean surface water). Alkalinity quantifies the buffering capacity of seawater and is altered by CaCO₃ formation and dissolution, not by CO₂ dissolution alone.',
        },
        {
          term: 'Revelle factor',
          def: 'The ratio of the fractional change in seawater pCO₂ to the fractional change in DIC at constant temperature, salinity, and alkalinity. A Revelle factor of ~10 means that a 1% rise in DIC produces a ~10% rise in pCO₂. Equivalently, for a given increase in atmospheric CO₂, the ocean absorbs far less carbon than a simple solubility calculation would predict. The factor increases as more CO₂ is absorbed, progressively reducing ocean uptake efficiency.',
        },
        {
          term: 'saturation state (Ω)',
          def: 'The ratio of the ion product [Ca²⁺][CO₃²⁻] to the solubility product Ksp for a given CaCO₃ mineral (calcite or aragonite). When Ω > 1 seawater is supersaturated and CaCO₃ can precipitate; when Ω < 1 seawater is undersaturated and CaCO₃ dissolves. Rising CO₂ lowers [CO₃²⁻], reducing Ω and shoaling the depth at which shells dissolve.',
        },
        {
          term: 'partial pressure of CO₂ (pCO₂)',
          def: 'The pressure exerted by CO₂ in a gas mixture, or the equivalent equilibrium pressure of a dissolved gas in seawater (also called fugacity for dissolved CO₂). By Henry\'s Law, dissolved CO₂ concentration is proportional to pCO₂. Surface-ocean pCO₂ has risen from ~280 μatm in pre-industrial times to over 420 μatm today, tracking atmospheric levels and driving net CO₂ flux into the ocean.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The four pillars of seawater carbonate chemistry',
      body: `**Why seawater chemistry matters for climate and life.** The carbonate system is the central regulatory mechanism governing ocean pH, the carbon sink capacity of the ocean, and the habitability of marine environments for calcifying organisms. Four interrelated concepts — the carbonate equilibrium cascade, alkalinity and buffering, mineral saturation states, and air-sea CO₂ exchange — together describe how carbon moves between the atmosphere and the deep ocean, and why ocean chemistry is changing under rising atmospheric CO₂.

**The carbonate equilibrium in practice.** The equilibrium CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ ⇌ 2H⁺ + CO₃²⁻ is governed by two dissociation constants (K₁ and K₂) that depend on temperature, salinity, and pressure. At the warm temperatures and moderate pressures of the surface ocean, the equilibrium favours bicarbonate. In cold deep water at high pressure, CO₂* solubility increases and the equilibrium shifts. This temperature and pressure dependence means the ocean actively pumps carbon downward via the **biological pump** (surface organisms incorporate DIC into organic matter and shells; when they die they sink, exporting carbon to depth) and the **solubility pump** (cold high-latitude surface water absorbs CO₂ and sinks as deep water, carrying dissolved carbon away from the atmosphere for centuries to millennia).

**Alkalinity controls buffering but is not changed by CO₂.** This is the most counterintuitive but essential fact in carbonate chemistry: adding CO₂ to seawater changes DIC but not alkalinity. This is because CO₂ is a neutral gas; its dissolution adds carbon but not charge. What changes is the partitioning among the DIC species. The buffering operates because as H⁺ is produced, carbonate (CO₃²⁻) captures it to form bicarbonate (CO₃²⁻ + H⁺ → HCO₃⁻), resisting the pH drop. But this consumption of CO₃²⁻ also lowers the saturation state Ω, creating a direct link between ocean acidification and CaCO₃ dissolution.

**Saturation horizons shift with depth and time.** The aragonite saturation horizon sits at roughly 100–200 m in some tropical and subtropical regions, and at much shallower or surface-water levels in parts of the Southern Ocean and subarctic Pacific. As atmospheric CO₂ rises, this horizon shoals — threatening pteropods, corals, and other aragonite-secreting organisms in waters that were formerly supersaturated. MBARI time-series data from Monterey Bay have documented seasonal excursions of aragonite undersaturation reaching surface waters, particularly in upwelling zones where cold CO₂-rich deep water reaches the surface.

**The Revelle factor increases as CO₂ rises.** In pre-industrial surface seawater (pH ~8.2), the Revelle factor was approximately 8–9. In present-day surface water it is approximately 10–11. In a high-CO₂ future it will be 12–14. This progressive increase means each additional unit of atmospheric CO₂ is taken up less efficiently by the ocean — a positive feedback that accelerates atmospheric CO₂ accumulation as natural carbon sinks become less effective.`,
      cards: [
        {
          name: 'The Carbonate Equilibrium System',
          icon: Waves,
          color: BRAND.accent,
          desc: 'CO₂ dissolves and distributes across three DIC species (CO₂*, HCO₃⁻, CO₃²⁻) governed by temperature-, salinity-, and pressure-dependent equilibrium constants K₁ and K₂. At surface-ocean pH ~8.1, ~90% of DIC is bicarbonate. The biological and solubility pumps exploit this equilibrium to export carbon to the deep ocean.',
          examples: 'DIC ~2,000 μmol kg⁻¹ in surface ocean · Bicarbonate dominant at pH 8.1 · Deep Pacific DIC ~2,300 μmol kg⁻¹ · K₁ = 10⁻⁶, K₂ = 10⁻⁹·³ at 25°C, salinity 35',
        },
        {
          name: 'Alkalinity and Buffering Capacity',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Total alkalinity (~2,300–2,400 μmol kg⁻¹ in open ocean) measures the seawater\'s ability to resist pH change. CO₂ dissolution does not change TA — it shifts the DIC speciation, consuming CO₃²⁻ as it buffers H⁺. CaCO₃ formation lowers TA (removes 2 mol of alkalinity per mol precipitated); CaCO₃ dissolution raises it.',
          examples: 'Open-ocean surface TA ~2,350 μmol kg⁻¹ · Mediterranean higher TA due to evaporation · CaCO₃ dissolution raises TA and partially re-absorbs CO₂ · Riverine weathering of silicates and carbonates delivers alkalinity to ocean',
        },
        {
          name: 'Calcite and Aragonite Saturation',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Ω = [Ca²⁺][CO₃²⁻]/Ksp determines whether CaCO₃ precipitates or dissolves. Aragonite (corals, pteropods, molluscs) is ~50% more soluble than calcite; its saturation horizon is shallower. Rising CO₂ lowers [CO₃²⁻], reducing Ω and shoaling saturation horizons, exposing surface-dwelling calcifiers to undersaturation.',
          examples: 'Tropical surface-ocean Ω-aragonite ~3–4; corals build reefs · Southern Ocean Ω-aragonite approaching 1 seasonally · Aragonite saturation horizon ~200 m in tropics, near-surface in polar seas · Pteropod shells visibly dissolving in Southern Ocean samples',
        },
        {
          name: 'CO₂ Exchange at the Air-Sea Interface',
          icon: Thermometer,
          color: BRAND.gold,
          desc: 'Net CO₂ flux follows the pCO₂ gradient (Henry\'s Law): ocean pCO₂ < atmospheric pCO₂ drives uptake; the reverse drives outgassing. Cold polar water absorbs more CO₂ per unit area. The Revelle factor (~10 today, rising) limits uptake efficiency. Station ALOHA shows surface pCO₂ tracking atmospheric CO₂ rise, pH declining ~0.1 units since 1750.',
          examples: 'Pre-industrial atmospheric pCO₂ ~280 μatm; current >420 μatm · North Atlantic and Southern Ocean are major CO₂ sinks · Equatorial Pacific is a net CO₂ source (upwelling of deep CO₂-rich water) · Ocean has absorbed ~26% of anthropogenic CO₂ emissions',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The carbonate chemistry cascade',
      body: `Follow CO₂ from the atmosphere through the seawater carbonate system to its ultimate fate as calcium carbonate on the seafloor. Each step in the cascade represents a chemical reaction or equilibrium that governs where carbon goes and how long it stays. The same pathway, running in reverse or with altered inputs, underlies ocean acidification — increasing atmospheric CO₂ drives more dissolution at the top of the cascade, ultimately reducing carbonate ion concentrations and threatening calcifying organisms at the base.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The seawater carbonate chemistry cascade from atmospheric CO₂ to CaCO₃ precipitation and dissolution',
        nodes: [
          {
            id: 'atm-co2',
            label: 'Atmospheric CO₂',
            description: 'Carbon dioxide in the atmosphere currently exceeds 420 ppm, up from ~280 ppm in 1750. Its partial pressure (pCO₂) drives dissolution into surface seawater according to Henry\'s Law. Cold, high-latitude surface waters have lower pCO₂ and absorb more CO₂ per unit area than warm tropical waters.',
            color: BRAND.gold,
          },
          {
            id: 'dissolved-co2',
            label: 'Dissolved CO₂ (aq)',
            description: 'CO₂ dissolves in seawater to form dissolved CO₂ (CO₂*), which includes a trace amount of true carbonic acid (H₂CO₃). Together these are denoted CO₂* and constitute less than 1% of total DIC in modern surface seawater. The Revelle factor (~10) limits how much CO₂ the ocean can absorb for a given rise in atmospheric pCO₂.',
            color: BRAND.accent,
          },
          {
            id: 'carbonic-acid',
            label: 'Carbonic acid (H₂CO₃)',
            description: 'Dissolved CO₂ hydrates to form carbonic acid (CO₂ + H₂O ⇌ H₂CO₃). This reaction is slow relative to the subsequent dissociation steps, making H₂CO₃ a transient intermediate. The equilibrium strongly favours dissolved CO₂ over H₂CO₃ by a factor of ~650, so most of what is written H₂CO₃ in textbooks is actually dissolved CO₂.',
            color: BRAND.coral,
          },
          {
            id: 'bicarbonate',
            label: 'Bicarbonate (HCO₃⁻)',
            description: 'H₂CO₃ rapidly dissociates (first dissociation, pK₁ ~6.0 in seawater) to produce bicarbonate (HCO₃⁻) and a hydrogen ion. At the pH of modern seawater (~8.1), this equilibrium strongly favours bicarbonate — ~90% of DIC is in this form. The released H⁺ lowers pH and drives ocean acidification when CO₂ input exceeds the buffering capacity.',
            color: BRAND.jade,
          },
          {
            id: 'carbonate',
            label: 'Carbonate (CO₃²⁻)',
            description: 'A fraction of bicarbonate undergoes a second dissociation (pK₂ ~9.1 in seawater) to produce carbonate ion (CO₃²⁻) and another H⁺. At pH 8.1, ~9% of DIC is carbonate. As CO₂ absorption drives pH down, carbonate ion concentration falls — directly reducing the saturation state (Ω) for calcite and aragonite and threatening shell-forming organisms.',
            color: BRAND.amethyst,
          },
          {
            id: 'caco3',
            label: 'CaCO₃ precipitation/dissolution',
            description: 'When Ω = [Ca²⁺][CO₃²⁻]/Ksp > 1, calcium carbonate precipitates as calcite (foraminifera, coccoliths) or aragonite (corals, pteropods). When Ω < 1, shells dissolve. Rising CO₂ lowers [CO₃²⁻], shoaling the saturation horizon. Below the calcite compensation depth (CCD, ~4,500 m in the Atlantic), all CaCO₃ dissolves before reaching the seafloor.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'atm-co2',      to: 'dissolved-co2',  label: 'air-sea gas exchange driven by pCO₂ gradient (Henry\'s Law)' },
          { from: 'dissolved-co2', to: 'carbonic-acid',  label: 'CO₂ + H₂O ⇌ H₂CO₃ (slow hydration step)' },
          { from: 'carbonic-acid', to: 'bicarbonate',    label: 'H₂CO₃ ⇌ H⁺ + HCO₃⁻ (first dissociation, pK₁ ~6.0)' },
          { from: 'bicarbonate',   to: 'carbonate',      label: 'HCO₃⁻ ⇌ H⁺ + CO₃²⁻ (second dissociation, pK₂ ~9.1)' },
          { from: 'carbonate',     to: 'caco3',          label: 'Ca²⁺ + CO₃²⁻ ⇌ CaCO₃ (Ω > 1 precipitates; Ω < 1 dissolves)' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What does dissolved inorganic carbon (DIC) measure in seawater?',
          a: [
            'The total concentration of all carbon-containing compounds in seawater, including organic molecules, dissolved gases, and mineral particles',
            'The summed concentration of all inorganic carbon species dissolved in seawater: CO₂*, HCO₃⁻, and CO₃²⁻',
            'The concentration of CO₂ gas dissolved at the ocean surface as measured by Henry\'s Law equilibrium with the atmosphere',
            'The mass of carbon stored in marine organisms per unit volume of seawater',
          ],
          correct: 1,
          explain: 'DIC is the sum of the three inorganic carbon species in solution: dissolved CO₂ (written CO₂* to include the trace H₂CO₃), bicarbonate (HCO₃⁻), and carbonate (CO₃²⁻). It does not include organic carbon (option A). Option C describes only the dissolved CO₂* fraction, which is less than 1% of DIC in modern surface seawater. Option D describes biomass, an entirely different quantity. In modern surface seawater at pH ~8.1, DIC totals approximately 2,000 μmol kg⁻¹, of which ~90% is bicarbonate, ~9% is carbonate, and less than 1% is CO₂*.',
        },
        {
          q: 'Why is the Revelle factor important for understanding ocean CO₂ uptake?',
          a: [
            'A high Revelle factor means the ocean can absorb large quantities of CO₂ efficiently, because it indicates a large reservoir of alkalinity available to neutralise carbonic acid',
            'The Revelle factor describes the ratio of CO₂ in the deep ocean to CO₂ at the surface, explaining why deep-water upwelling releases CO₂ to the atmosphere',
            'A Revelle factor of ~10 means that for a given fractional increase in DIC, seawater pCO₂ rises about ten times as much — so the ocean must increase its DIC substantially to absorb relatively little additional CO₂, limiting uptake efficiency; as more CO₂ is absorbed the factor rises further, progressively reducing the ocean\'s effectiveness as a carbon sink',
            'The Revelle factor measures the ratio of total alkalinity to DIC and determines the pH of seawater; a higher ratio corresponds to higher pH and lower CO₂ absorption',
          ],
          correct: 2,
          explain: 'A high Revelle factor (option A) does not indicate high uptake efficiency — it indicates the opposite. The Revelle factor is defined as (ΔpCO₂/pCO₂) / (ΔDIC/DIC). A value of ~10 means that a 1% increase in DIC drives a ~10% increase in seawater pCO₂. Working in reverse: to maintain equilibrium with a rising atmosphere, the ocean\'s DIC needs to increase only about one-tenth as much as the atmospheric pCO₂ change — but precisely because the pCO₂ response is amplified, the ocean must absorb less carbon than a simple linear solubility would suggest. Option B describes the biological pump and upwelling, not the Revelle factor. Option D confuses Revelle factor with the alkalinity-to-DIC ratio. The key implication is that as ocean CO₂ absorption continues, the Revelle factor increases from ~10 today toward ~12–14 in high-CO₂ scenarios, making each additional tonne of atmospheric CO₂ harder for the ocean to absorb.',
        },
        {
          q: 'What happens to aragonite saturation state (Ω-aragonite) as seawater pH decreases due to rising atmospheric CO₂?',
          a: [
            'Ω-aragonite increases because lower pH makes calcium ions more soluble, raising the ion product [Ca²⁺][CO₃²⁻]',
            'Ω-aragonite is unaffected by pH changes because the solubility product Ksp is a fixed constant that does not depend on hydrogen ion concentration',
            'Ω-aragonite decreases because lower pH shifts the carbonate equilibrium toward bicarbonate, reducing [CO₃²⁻] and therefore lowering the ion product [Ca²⁺][CO₃²⁻] relative to Ksp',
            'Ω-aragonite first increases and then decreases as pH falls, because bicarbonate initially provides additional carbonate through further dissociation before undersaturation is reached',
          ],
          correct: 2,
          explain: 'Saturation state is defined as Ω = [Ca²⁺][CO₃²⁻] / Ksp. Seawater calcium concentrations ([Ca²⁺]) are relatively constant across the ocean on short timescales. When CO₂ dissolves, it produces H⁺, which drives the reaction CO₃²⁻ + H⁺ → HCO₃⁻ — consuming carbonate ion and reducing [CO₃²⁻]. With [Ca²⁺] essentially unchanged and [CO₃²⁻] falling, the numerator decreases, so Ω falls. This is why ocean acidification directly threatens calcifying organisms: aragonite, being ~50% more soluble than calcite, reaches Ω < 1 at lower CO₂ levels and shallower depths than calcite. Option A is incorrect — lower pH decreases [CO₃²⁻], not increases it. Option B incorrectly ignores the pH-dependence of [CO₃²⁻] concentration. Option D describes no recognised chemical mechanism.',
        },
        {
          q: 'What is the dominant form of dissolved inorganic carbon in modern surface seawater at pH ~8.1?',
          a: [
            'Dissolved CO₂ (CO₂*), because Henry\'s Law equilibrium with the atmosphere makes it the most abundant dissolved carbon species',
            'Carbonate (CO₃²⁻), because the high pH of seawater fully deprotonates carbonic acid and drives all DIC into the carbonate form',
            'Carbonic acid (H₂CO₃), because it is the immediate product of CO₂ dissolution and accumulates faster than it dissociates',
            'Bicarbonate (HCO₃⁻), which comprises approximately 90% of DIC at the pH of modern seawater',
          ],
          correct: 3,
          explain: 'The distribution of DIC species is controlled by the two dissociation equilibria and seawater pH. At pH 8.1, which lies between pK₁ (~6.0) and pK₂ (~9.1) in seawater, the dominant species is bicarbonate (HCO₃⁻) at ~90%, with carbonate (CO₃²⁻) at ~9% and CO₂* at less than 1%. Option A is incorrect: dissolved CO₂* is a tiny fraction of total DIC despite being in equilibrium with atmospheric CO₂ — the first dissociation (pK₁ ~6.0) is below ambient pH so the equilibrium strongly favours HCO₃⁻ over CO₂*. Option B is incorrect: full conversion to CO₃²⁻ would require pH above pK₂ (~9.1), well above modern seawater pH. Option C is incorrect: H₂CO₃ is an unstable transient intermediate — dissolved CO₂ hydrates slowly to H₂CO₃, which then almost immediately dissociates; true H₂CO₃ concentration is negligible.',
        },
        {
          q: 'What does total alkalinity (TA) physically measure in seawater?',
          a: [
            'The total concentration of dissolved CO₂ species, representing how much carbon the seawater has already absorbed from the atmosphere',
            'The seawater\'s acid-neutralising capacity — the excess of bases (principally HCO₃⁻ and CO₃²⁻) over strong acids — which determines how much H⁺ can be added before pH drops significantly',
            'The pH of seawater adjusted for temperature and salinity, giving a measure of how acidic or basic the seawater is relative to pure water',
            'The concentration of calcium and magnesium ions that support carbonate mineral precipitation, determining how fast coral reefs can grow',
          ],
          correct: 1,
          explain: 'Total alkalinity is a charge-balance quantity — formally it is the excess of proton acceptors over proton donors at a reference proton condition. In practical seawater chemistry, TA ≈ [HCO₃⁻] + 2[CO₃²⁻] + [B(OH)₄⁻] + minor contributions, totalling ~2,300–2,400 μmol kg⁻¹ in open-ocean surface water. This measures the buffering capacity: when CO₂ dissolves and produces H⁺, the bicarbonate and carbonate ions capture the H⁺ (CO₃²⁻ + H⁺ → HCO₃⁻; HCO₃⁻ + H⁺ → CO₂* + H₂O), resisting pH change. Option A describes DIC, not TA. Option C describes pH, not TA — though they are related, they are distinct quantities. Option D describes ion concentrations relevant to saturation state calculations, not TA. Critically, adding CO₂ to seawater does not change TA — it changes DIC and the speciation within it; TA is altered only by processes that add or remove alkalinity, such as CaCO₃ dissolution (raises TA) or precipitation (lowers TA).',
        },
      ],
    },
  ],
}

export default seawaterCarbonateChemistry
