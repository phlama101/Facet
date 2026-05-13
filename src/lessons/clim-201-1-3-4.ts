import { Activity, Globe, Thermometer, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const carbonRemovalGeoengineering: Lesson = {
  id: 'clim-201-1-3-4',
  title: 'Carbon Removal & Climate Intervention',
  track: 'cli',
  trackName: 'Climatology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'Technologies and strategies for removing CO2 from the atmosphere and reducing solar radiation — from BECCS and direct air capture to solar geoengineering — with costs, co-benefits, and risks.',
  sources: [
    { org: 'IPCC',    title: 'IPCC Sixth Assessment Report WG3 — Mitigation of Climate Change', url: 'https://www.ipcc.ch/report/ar6/wg3/' },
    { org: 'Nature',  title: 'Nature — Carbon Dioxide Removal and Solar Geoengineering',        url: 'https://www.nature.com/' },
    { org: 'IEA',     title: 'IEA — Direct Air Capture: A Key Technology for Net Zero',         url: 'https://www.iea.org/reports/direct-air-capture' },
    { org: 'NAS',     title: 'National Academies — Reflecting Sunlight: Recommendations for Solar Geoengineering', url: 'https://www.nationalacademies.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Beyond emission cuts: carbon removal and solar intervention in a 1.5°C world',
      body: `Every credible 1.5°C pathway assessed by IPCC AR6 relies not only on eliminating greenhouse gas emissions but on actively removing CO₂ from the atmosphere. This dependence on **Carbon Dioxide Removal (CDR)** arises from a stubborn arithmetic reality: residual emissions from hard-to-abate sectors — agriculture, aviation, cement, shipping — cannot be driven to zero by mid-century using currently available technologies. CDR fills the gap between achievable gross reductions and the net-zero state that 1.5°C requires. In overshoot scenarios, where temperatures temporarily exceed 1.5°C before returning below target, CDR must compensate not just for residual emissions but for excess CO₂ already accumulated in the atmosphere. IPCC AR6 WG3 assessed median CDR deployment of **1–10 Pg CO₂/yr by 2050** across 1.5°C-compatible scenarios — a scale that dwarfs current CDR capacity of roughly 0.002 Pg CO₂/yr (dominated by legacy afforestation and nascent direct air capture plants).

CDR methods span a wide spectrum of maturity, cost, permanence, and land-water demand. **Bioenergy with Carbon Capture and Storage (BECCS)** combines the cultivation of biomass crops (which absorb CO₂ from the atmosphere as they grow) with combustion or fermentation for energy, followed by capture and geological sequestration of the resulting CO₂ stream. The theoretical potential is large — estimates of ~10 Pg C/yr have been cited — but the land-use cost is profound: supplying BECCS at the scale assumed in many AR5 scenarios would require land areas comparable to the size of India or the United States, competing directly with food production, biodiversity conservation, and water availability. This **land-use tradeoff** is the defining constraint on BECCS deployment and has led to substantial downward revision of BECCS reliance in more recent integrated assessment models.

**Direct Air Capture (DAC)** avoids the land constraint of BECCS by using engineered sorbents or liquid solvents to extract CO₂ directly from ambient air. Carbon Engineering (acquired by Occidental Petroleum) and Climeworks (Switzerland) are the leading commercial operators. Current costs range from approximately **$300–1,000 per tonne of CO₂** depending on technology, energy source, and site; economic analyses project costs could fall to $150–300/t CO₂ at scale with learning-by-doing and dedicated low-carbon energy. DAC is highly energy-intensive: capturing one tonne of CO₂ requires approximately 1,500–2,000 kWh of electricity or 5–8 GJ of heat, meaning DAC powered by fossil electricity would emit more CO₂ than it captures. Genuinely negative-emission DAC requires zero-carbon energy.

**Enhanced weathering** accelerates the geological weathering process by grinding silicate rocks — principally olivine (Mg₂SiO₄) and basalt — to fine powders and spreading them on agricultural land or coastal environments. Rainwater dissolves the silicate minerals, consuming atmospheric CO₂ in the reaction and releasing alkalinity (bicarbonate ions) that flows into the ocean, where it is eventually sequestered as carbonate sediments. **Ocean alkalinity enhancement (OAE)** applies this principle directly to the ocean surface. Both approaches have the potential co-benefit of agricultural soil amendment (nutrients, pH correction) but face challenges in quantifying removal rates, monitoring geochemical changes, and managing potential trace metal toxicity.

**Ocean iron fertilization (OIF)** exploits the observation that large areas of the Southern Ocean and equatorial Pacific are rich in nitrate and phosphate but iron-limited: adding iron stimulates phytoplankton blooms that draw down surface CO₂. Field experiments (LOHAFEX, SOIREE, IronEx) demonstrated the bloom-enhancement effect but revealed that much of the organic carbon sinks only shallowly, decomposing before it reaches depth, meaning net atmospheric removal is small per unit iron added. OIF also carries risks of oxygen depletion (dead zones) in subsurface waters, shifts in species composition, and interference with existing fisheries.

**Afforestation and reforestation** — planting trees on currently non-forested land and restoring previously forested land — represent the most mature CDR approach. Global estimates suggest 0.5–3.6 Pg CO₂/yr is achievable through forest expansion, though competition with agricultural land, water requirements, and permanence (fire, drought, disease) remain concerns. **Soil carbon management** (cover crops, reduced tillage, biochar application) offers additional gigatonne-scale potential at low cost but is difficult to monitor and verify. **Blue carbon** — the carbon sequestered in coastal and marine ecosystems including mangroves, seagrasses, and saltmarshes — sequesters carbon at rates 5–10× higher per unit area than terrestrial forests; protecting and restoring these ecosystems yields CDR alongside biodiversity and fisheries co-benefits.

Distinct from CDR, **Solar Radiation Management (SRM)** approaches do not remove CO₂ but instead reduce the solar energy reaching Earth\'s surface, masking the greenhouse warming effect without addressing its atmospheric cause. **Stratospheric Aerosol Injection (SAI)** would deliver sulfate or calcium carbonate particles into the lower stratosphere at ~20 km altitude, mimicking the cooling effect of large volcanic eruptions. The 1991 eruption of **Mt Pinatubo** (Philippines) injected ~20 Mt of SO₂, producing approximately 0.5°C of global cooling over 1–2 years — providing the best natural analogue for SAI. Climate model simulations indicate that SAI at a scale of 1–8 Tg S/yr could offset ~1–2°C of global warming, but with regional heterogeneity: reduced precipitation in some monsoon regions, altered stratospheric dynamics, and ozone depletion.

The most alarming risk of SAI is **termination shock**: if injection were to cease abruptly — due to geopolitical conflict, economic failure, or political decision — the masked warming would re-emerge rapidly over years rather than decades, potentially exposing ecosystems and human systems to a rate of warming far exceeding anything in the historical record. **Marine Cloud Brightening (MCB)** — spraying seawater from ships to increase droplet number and hence reflectivity of low marine clouds — is a lower-altitude, more regional, and more reversible SRM option. The proposed **space mirror** concept (L1 Lagrange point reflector) remains entirely theoretical due to prohibitive launch costs.

Governance of both CDR and especially SRM is deeply underdeveloped relative to the urgency of deployment decisions. The **ENMOD Convention** (1977) prohibits hostile modification of the environment as a weapon of war; it does not address unilateral geoengineering. No international body currently has authority to permit, prohibit, or regulate SRM deployment. The **moral hazard** concern — that the prospect of geoengineering reduces political pressure to cut emissions — is empirically contested but politically significant. Unilateral deployment of SAI by one state could impose weather and precipitation changes on other states without consent, raising questions of liability, compensation, and sovereignty that existing international law does not resolve.`,
      keyTerms: [
        {
          term: 'Carbon Dioxide Removal (CDR)',
          def: 'Human activities that remove CO₂ from the atmosphere and durably store it in geological, terrestrial, or ocean reservoirs. Distinguished from emission reductions by actively drawing down atmospheric CO₂. Methods range from nature-based (afforestation, soil carbon, blue carbon) to technological (direct air capture, BECCS, enhanced weathering). IPCC AR6 finds that achieving net zero and returning from overshoot requires CDR deployment of 1–10 Pg CO₂/yr by 2050 in 1.5°C pathways. Permanence of storage (years to millennia), land and energy requirements, and cost vary enormously across methods.',
        },
        {
          term: 'BECCS (Bioenergy with Carbon Capture and Storage)',
          def: 'A CDR approach combining biomass cultivation (which sequesters CO₂ as plants grow) with combustion or fermentation for energy production, followed by capture and permanent geological storage of the resulting CO₂. Produces both energy and net-negative CO₂ emissions simultaneously. Theoretical global potential ~10 Pg C/yr, but land-use demand (comparable to the area of India at high deployment levels) conflicts with food security, water availability, and biodiversity. IPCC AR6 WG3 models have substantially reduced BECCS reliance compared to AR5 pathways due to land-use constraints.',
        },
        {
          term: 'Direct Air Capture (DAC)',
          def: 'An engineered CDR technology that uses chemical sorbents or liquid solvents to extract CO₂ directly from ambient air (~420 ppm), independent of emission source location. Leading operators include Climeworks (solid sorbent, Iceland) and Carbon Engineering/Occidental (liquid solvent, Texas). Current costs: $300–1,000/t CO₂; projected to fall to $150–300/t CO₂ at scale. Energy requirements: ~1,500–2,000 kWh electricity or 5–8 GJ heat per tonne CO₂. Requires zero-carbon energy to achieve genuine net-negative emissions. Avoids the land competition constraints of BECCS.',
        },
        {
          term: 'Stratospheric Aerosol Injection (SAI)',
          def: 'A Solar Radiation Management approach that injects sulfate or calcium carbonate particles into the lower stratosphere (~20 km) to scatter incoming sunlight, reducing global mean surface temperature. Analogous to the cooling effect of large volcanic eruptions — Mt Pinatubo (1991) cooled Earth by ~0.5°C for 1–2 years after injecting ~20 Mt SO₂. Climate models suggest 1–8 Tg S/yr could offset 1–2°C of global warming, but with regional precipitation changes, ozone effects, and no reduction in ocean acidification. Subject to termination shock risk if deployment ceases abruptly.',
        },
        {
          term: 'Termination shock',
          def: 'The rapid, intense warming that would occur if solar geoengineering (particularly SAI) were suddenly halted after a period of sustained deployment, while atmospheric CO₂ remained elevated. If SAI masked 1–2°C of greenhouse warming and injection ceased abruptly, that masked warming would re-emerge over years rather than decades, potentially exposing ecosystems to warming rates far exceeding anything in historical experience. Termination shock is considered the primary physical risk of SAI and motivates arguments that once begun, SAI would be essentially irreversible — creating a long-term geopolitical commitment.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four CDR and SRM approaches across the intervention spectrum',
      body: `Carbon removal and solar intervention methods differ profoundly in their mechanism, scalability, cost, permanence, and risk profile. Understanding the four principal categories reveals why no single approach can carry the full CDR burden, and why SRM introduces governance challenges that CDR does not.

**BECCS and terrestrial CDR** exploit the carbon cycle\'s existing biological machinery. Plants and trees remove CO₂ through photosynthesis; the challenge is ensuring that carbon is stored durably rather than returned to the atmosphere through decomposition, fire, or land-use change. BECCS adds geological sequestration to create permanent storage, but at the cost of large land areas and water consumption. Afforestation, soil carbon, and blue carbon are lower-cost and deliver co-benefits, but their permanence is limited by disturbance risks. The aggregate potential of nature-based CDR is real but finite — estimated at 1.5–3 Pg CO₂/yr sustainably without compromising food security and biodiversity, far short of the 5–10 Pg CO₂/yr many scenarios require.

**Direct air capture** provides the only genuinely land-unconstrained CDR option at potentially unlimited scale, limited only by energy availability and cost. Its industrial character means monitoring, reporting, and verification (MRV) is straightforward relative to biological methods. However, the energy demand is enormous: supplying 1 Pg CO₂/yr of DAC would require approximately 1,500–2,000 TWh of electricity — comparable to the entire current electricity consumption of the United States — all of which must be zero-carbon. The capital cost at this scale would be in the trillions of dollars.

**Enhanced weathering and ocean alkalinity enhancement** spread the geological carbon cycle across agricultural fields and ocean surfaces. Unlike BECCS or DAC, these approaches do not store CO₂ in an identifiable reservoir but rather accelerate its natural conversion to bicarbonate in ocean water, where it remains for millennia. Measurement uncertainty — quantifying exactly how much CO₂ was removed per tonne of rock spread — is a major barrier to credibility in carbon markets.

**Stratospheric aerosol injection** acts on the incoming solar flux rather than the CO₂ stock. It is fast (months to deploy at scale versus decades for CDR), cheap (estimated at $2–8 billion/yr for ~1°C of cooling — orders of magnitude less than CDR at equivalent scale), and reversible in principle (though termination shock makes reversal dangerous in practice). It does not reduce ocean acidification, does not address CO₂ as a long-term commitment, and creates a geopolitical hostage dynamic: once deployed at scale, any state or faction that interrupts supply imposes catastrophic warming rates on the entire planet.`,
      cards: [
        {
          name: 'BECCS & Nature-Based CDR',
          icon: Layers,
          color: BRAND.jade,
          desc: 'BECCS combines biomass energy with geological CO₂ storage for negative emissions; ~10 Pg C/yr theoretical potential but vast land-use demand. Afforestation, soil carbon, and blue carbon (mangroves, seagrasses) offer lower-cost CDR with biodiversity co-benefits but limited permanence.',
          examples: 'Drax power station (UK): cofiring biomass + CCS pilot, ~1 Mt CO₂/yr target · Global mangrove restoration: ~0.02 Pg CO₂/yr · Soil biochar trials (sub-Saharan Africa): 0.5–2 t CO₂/ha/yr · IPCC AR6: nature-based CDR ceiling ~3 Pg CO₂/yr without food/biodiversity tradeoffs',
        },
        {
          name: 'Direct Air Capture (DAC)',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Engineered sorbents extract CO₂ from ambient air (~420 ppm); no land constraint. Current cost $300–1,000/t CO₂; projected $150–300/t at scale. Requires ~1,500 kWh/t CO₂ of zero-carbon electricity. Climeworks (Iceland) and Carbon Engineering (Canada) are leading commercial operators.',
          examples: 'Climeworks Orca plant (Iceland): 4,000 t CO₂/yr capacity, powered by geothermal · Climeworks Mammoth plant (2024): 36,000 t CO₂/yr · 45Q tax credit (USA): $180/t CO₂ for DAC + storage · IEA target: 70 Mt CO₂/yr DAC capacity by 2030 for net-zero pathway',
        },
        {
          name: 'Enhanced Weathering & Ocean Alkalinity',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Crushed silicate rocks (olivine, basalt) spread on farmland or ocean surfaces accelerate natural weathering; CO₂ converted to bicarbonate ions stored in ocean for millennia. Ocean alkalinity enhancement (OAE) applies alkalinity directly to seawater. Co-benefit: soil nutrients, reduced ocean acidification.',
          examples: 'UNDO (UK): basalt spreading trials across European farms · Planetary Technologies (Canada): OAE pilot in Atlantic coastal waters · Potential: 0.5–4 Pg CO₂/yr globally from agricultural enhanced weathering · Challenge: MRV uncertainty ±30–50% per tonne limits carbon market credibility',
        },
        {
          name: 'Solar Radiation Management (SAI & MCB)',
          icon: Thermometer,
          color: BRAND.amethyst,
          desc: 'SAI injects sulfate particles into the stratosphere (~20 km) to scatter sunlight; Mt Pinatubo analogue (−0.5°C for 1–2 yr). Marine cloud brightening (MCB) enhances low-cloud reflectivity via seawater spray. Both mask warming without reducing CO₂; SAI subject to termination shock, ozone depletion, and unilateral deployment risk.',
          examples: 'Mt Pinatubo (1991): 20 Mt SO₂ → −0.5°C global cooling, 1–2 yr · SCoPEx experiment (Harvard): cancelled 2021 after governance disputes · MARINE programme (UK): MCB field trial near Farallon Islands · NAS 2021 report: recommended $100M research programme before any deployment decisions',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Atmospheric CO₂ to Carbon Removal and Solar Intervention Pathways',
      body: 'How CDR and SRM approaches interact with the carbon cycle and Earth\'s energy balance, from biomass growth and geological storage through to stratospheric aerosol injection and its termination shock risk.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how CDR and SRM pathways interact with atmospheric CO₂ and the climate system, from nature-based removal and direct air capture through to stratospheric aerosol injection and the governance challenge of termination shock',
        nodes: [
          {
            id: 'atmospheric-co2',
            label: 'Elevated Atmospheric CO₂ (~422 ppm)',
            description: 'Atmospheric CO₂ has risen from 280 ppm pre-industrial to ~422 ppm today, driving ~1.2°C of global warming. IPCC AR6 median 1.5°C pathways require removing 5–10 Pg CO₂/yr from this reservoir by 2050, in addition to near-complete emission cuts, to return to target after temporary overshoot.',
            color: BRAND.coral,
          },
          {
            id: 'cdr-biological',
            label: 'Biological CDR (BECCS, Forests, Blue Carbon)',
            description: 'Photosynthesis sequesters atmospheric CO₂ into biomass. BECCS then captures the CO₂ released on combustion and stores it geologically. Afforestation, soil carbon, and blue carbon (mangroves, seagrasses) store carbon in ecosystems. Combined sustainable potential: ~1.5–3 Pg CO₂/yr without compromising food security or biodiversity.',
            color: BRAND.jade,
          },
          {
            id: 'cdr-technological',
            label: 'Technological CDR (DAC, Enhanced Weathering)',
            description: 'Direct Air Capture uses chemical sorbents to extract CO₂ from ambient air at $300–1,000/t; projects scale toward 36,000 t CO₂/yr (Climeworks Mammoth). Enhanced weathering accelerates silicate dissolution, converting CO₂ to bicarbonate for millennial ocean storage. Both avoid land constraints of BECCS but require large zero-carbon energy inputs.',
            color: BRAND.accent,
          },
          {
            id: 'geological-storage',
            label: 'Geological & Ocean Storage',
            description: 'CO₂ captured by BECCS or DAC is injected into depleted oil/gas reservoirs, saline aquifers, or basalt formations for geological timescales (>10,000 years). Enhanced weathering stores carbon as oceanic bicarbonate for ~10,000 years. Storage permanence distinguishes CDR from temporary biological sinks that can re-release CO₂ through fire or land-use change.',
            color: BRAND.gold,
          },
          {
            id: 'srm-sai',
            label: 'Solar Radiation Management (SAI)',
            description: 'Stratospheric aerosol injection introduces sulfate or calcium carbonate particles at ~20 km altitude, scattering incoming solar radiation. Mt Pinatubo analogue: 20 Mt SO₂ → ~0.5°C cooling for 1–2 years. SAI models suggest 1–8 Tg S/yr could offset 1–2°C of warming but alters regional precipitation and depletes stratospheric ozone. Does not reduce ocean acidification or address CO₂ accumulation.',
            color: BRAND.amethyst,
          },
          {
            id: 'termination-shock',
            label: 'Termination Shock & Governance Risk',
            description: 'If SAI ceased abruptly after masking 1–2°C of warming, the unmasked CO₂-driven warming would re-emerge over years, imposing extreme warming rates on ecosystems and human systems. No international governance framework currently exists to authorise, regulate, or prohibit unilateral SAI deployment. ENMOD (1977) covers hostile use only. Moral hazard risk: geoengineering prospect may reduce emission-reduction urgency.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'atmospheric-co2',    to: 'cdr-biological',    label: 'Photosynthesis and biomass accumulation draw down CO₂' },
          { from: 'atmospheric-co2',    to: 'cdr-technological',  label: 'DAC sorbents and weathering reactions extract CO₂ directly' },
          { from: 'cdr-biological',     to: 'geological-storage', label: 'BECCS captures combustion CO₂ for permanent sequestration' },
          { from: 'cdr-technological',  to: 'geological-storage', label: 'DAC-captured CO₂ injected into saline aquifers or basalt' },
          { from: 'atmospheric-co2',    to: 'srm-sai',            label: 'Elevated CO₂ drives deployment pressure for SRM' },
          { from: 'srm-sai',            to: 'termination-shock',  label: 'Sustained SAI dependency creates irreversible lock-in risk' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Why do virtually all IPCC AR6 1.5°C pathways require large-scale Carbon Dioxide Removal (CDR), even in scenarios with aggressive emission cuts?',
          a: [
            'CDR is needed primarily to offset natural carbon cycle feedbacks such as permafrost thaw and Amazon dieback, which will release CO₂ regardless of human emission reductions; the human emission cuts alone would be sufficient to reach 1.5°C if those natural feedbacks did not exist',
            'Because residual emissions from hard-to-abate sectors — including agriculture, aviation, cement, and shipping — cannot feasibly reach zero by mid-century, CDR must compensate for these remaining emissions to achieve net zero; in overshoot scenarios, CDR must also remove excess atmospheric CO₂ to return temperatures below 1.5°C',
            'CDR is required because solar radiation management approaches like SAI are politically infeasible, so CDR must substitute for the cooling effect that SRM would otherwise provide; without SRM, more CDR is needed to compensate',
            'IPCC AR6 requires CDR only as a precautionary measure to create a buffer against uncertainty in future emissions trajectories; if countries meet their current NDC pledges, CDR would not actually be needed for 1.5°C pathways',
          ],
          correct: 1,
          explain: 'IPCC AR6 WG3 assessed that essentially all 1.5°C pathways require CDR for two distinct reasons. First, some sectors cannot technically reach zero gross emissions by mid-century with currently available technologies: enteric fermentation in livestock produces methane biologically; cement production releases CO₂ from limestone decomposition chemically (CaCO₃ → CaO + CO₂), independent of energy source; aviation requires energy-dense liquid fuels; shipping and heavy industry face similar constraints. These residual emissions, totalling potentially 2–5 Pg CO₂-eq/yr by mid-century even under aggressive mitigation, must be offset by CDR to achieve net zero. Second, many credible 1.5°C scenarios involve temporary overshoot — temperatures exceed 1.5°C before returning below target — requiring CDR to actively draw down the excess atmospheric CO₂. Answer A incorrectly frames CDR as purely compensating for natural feedbacks rather than residual anthropogenic emissions. Answer C incorrectly conflates SRM and CDR as substitutes — they address entirely different aspects of the climate problem. Answer D understates the certainty of CDR requirements: even with full NDC implementation, residual emissions from hard-to-abate sectors make CDR necessary.',
        },
        {
          q: 'What is the primary constraint limiting large-scale deployment of BECCS, and how does direct air capture differ in this respect?',
          a: [
            'BECCS is constrained by the limited global supply of geological storage formations for CO₂; direct air capture faces the same constraint because both ultimately require injecting CO₂ into underground reservoirs, so neither can scale independently of available storage capacity',
            'BECCS is limited by the efficiency of carbon capture technology at biomass power plants, which currently achieves only 60–70% capture rates; direct air capture achieves near-100% capture rates, making it more effective per unit of biomass or energy processed',
            'The primary constraint on BECCS is land: growing sufficient biomass for gigatonne-scale CDR would require areas comparable to the size of India or the United States, competing with food production, biodiversity, and water availability; direct air capture extracts CO₂ from ambient air using engineered sorbents, requiring minimal land but large amounts of zero-carbon energy',
            'BECCS is mainly constrained by cost — it is the most expensive CDR option at $800–2,000/t CO₂ — while direct air capture is already cheaper at $50–100/t CO₂, making BECCS economically unviable compared to DAC at any deployment scale',
          ],
          correct: 2,
          explain: 'The defining constraint on BECCS is land. Supplying BECCS at the scale assumed in many IPCC AR5 scenarios (3–7 Pg CO₂/yr) would require cultivating dedicated biomass crops — primarily switchgrass, Miscanthus, or fast-growing trees — across hundreds of millions of hectares. Studies estimate this could require 430–580 Mha of additional cropland, an area comparable to current global cropland extent. This creates direct conflicts with food security, deforestation pressure, water use (biomass crops are water-intensive), and biodiversity conservation. These land-use tradeoffs led to substantial downward revision of BECCS reliance in IPCC AR6 WG3 compared to AR5. Direct air capture (DAC) is fundamentally different in this respect: the sorbent contactors occupy a small physical footprint because they process ambient air, which is roughly 420 ppm CO₂ — much more dilute than flue gas (10–15% CO₂) but accessible anywhere. DAC\'s constraint is not land but energy: ~1,500–2,000 kWh of electricity per tonne CO₂ captured, all of which must be zero-carbon to achieve genuine net-negative emissions. Answer A incorrectly identifies geological storage as the primary constraint — while storage capacity requires assessment at specific sites, global geological storage potential is estimated at 10,000+ Pg CO₂, not a near-term constraint. Answer D inverts the cost comparison: DAC currently costs $300–1,000/t CO₂, substantially more than BECCS estimates of $100–200/t CO₂ at scale.',
        },
        {
          q: 'How does stratospheric aerosol injection (SAI) compare to carbon dioxide removal (CDR) as a climate intervention, and what is termination shock?',
          a: [
            'SAI and CDR are broadly equivalent approaches: both reduce atmospheric CO₂ concentrations, both address ocean acidification, and both carry comparable governance challenges; the main difference is cost, with SAI being more expensive due to the specialised aircraft needed for stratospheric delivery',
            'SAI reduces incoming solar radiation to mask the warming effect of elevated CO₂ without removing CO₂ from the atmosphere; unlike CDR, it does not reduce ocean acidification, and its deployment creates termination shock risk — if SAI were abruptly halted, the masked greenhouse warming would re-emerge over years, potentially at rates far exceeding historical experience, because CO₂ concentrations remain elevated',
            'SAI works by injecting aerosols that chemically react with stratospheric CO₂, converting it to inert compounds; it therefore both reduces solar radiation and removes CO₂, making it superior to CDR methods that only address one aspect of the problem; termination shock refers to the disruption to stratospheric chemistry if injection ceases',
            'SAI and CDR both target the same mechanism — reducing the greenhouse effect by altering the radiative properties of the atmosphere — but SAI is more permanent than CDR because aerosol particles remain in the stratosphere for decades, while CO₂ captured by CDR eventually returns to the atmosphere as biological sinks degrade',
          ],
          correct: 1,
          explain: 'SAI and CDR address the climate problem through fundamentally different mechanisms, making them non-equivalent and complementary rather than substitutable. CDR removes CO₂ from the atmosphere, reducing both the greenhouse forcing and ocean acidification (which is driven by CO₂ dissolution in seawater, independent of temperature). SAI reduces the amount of solar radiation reaching Earth\'s surface, masking the warming symptom without treating the cause: atmospheric CO₂ remains elevated, ocean acidification continues, and the thermal commitment from CO₂ persists. This distinction has profound implications for reversibility. If CDR stops, atmospheric CO₂ concentrations stabilise at a higher level but do not spike. If SAI stops while CO₂ remains elevated, the masked warming — potentially 1–2°C — re-emerges over years as aerosols settle out of the stratosphere. This rapid re-warming (termination shock) could impose rates of temperature change far exceeding anything ecosystems have experienced, potentially several decades\' worth of gradual warming compressed into a few years. Stratospheric aerosols also do not chemically react with CO₂ (Answer C is wrong) — they scatter sunlight physically. SAI aerosols persist for 1–2 years in the stratosphere, not decades (Answer D is wrong).',
        },
        {
          q: 'What makes the 1991 Mt Pinatubo eruption an important natural analogue for stratospheric aerosol injection research?',
          a: [
            'Mt Pinatubo provides an analogue because it released large quantities of CO₂ along with sulfur dioxide, allowing scientists to compare the relative cooling effects of different greenhouse and aerosol species injected simultaneously into the stratosphere',
            'Mt Pinatubo is relevant because the eruption permanently altered the stratospheric aerosol layer, providing a sustained 30-year record of the radiative, chemical, and climate effects of elevated stratospheric sulfate loading comparable to what deliberate SAI would produce',
            'The 1991 Pinatubo eruption injected approximately 20 Mt of SO₂ into the lower stratosphere, producing a global mean cooling of approximately 0.5°C lasting 1–2 years; this observed cooling, its spatial pattern, its effects on stratospheric ozone and regional precipitation, and its subsequent decay as aerosols settled provide the most detailed real-world test of how the climate system responds to stratospheric sulfate loading — the same mechanism proposed for deliberate SAI',
            'Pinatubo is used as an analogue because it occurred in a tropical location, demonstrating that SAI deployment aircraft would need to launch from equatorial regions to achieve global aerosol distribution; eruptions at mid or high latitudes do not produce the hemispheric coverage required for effective geoengineering',
          ],
          correct: 2,
          explain: 'The June 1991 eruption of Mt Pinatubo in the Philippines was the second-largest volcanic eruption of the 20th century and the most thoroughly instrumented major eruption to date. It injected approximately 20 Mt of SO₂ into the lower stratosphere (~20–25 km altitude), which oxidised to form sulfate aerosol particles over subsequent weeks and months. Multiple independent observational records — surface temperature stations, radiosondes, satellite instruments (ERBE, SAGE II, UARS) — documented: (1) a global mean cooling of approximately 0.5°C that peaked ~12 months after the eruption and persisted for ~2 years; (2) stratospheric warming due to aerosol absorption of near-infrared radiation; (3) ~5% reduction in global diffuse solar radiation at the surface; (4) a ~6% reduction in stratospheric ozone (heterogeneous chemistry on sulfate aerosol particles); (5) altered precipitation patterns including reduced Indian monsoon rainfall in 1992. These observations provide the best available constraint for climate model simulations of SAI because they represent actual stratospheric sulfate aerosol loading at climate-relevant magnitude. Answer A is wrong because Pinatubo released relatively little CO₂ compared to its SO₂; volcanic CO₂ is a very minor contribution to the atmospheric burden. Answer B is wrong because the Pinatubo aerosol layer decayed over ~2 years, not 30 years — aerosols settle gravitationally from the stratosphere. Answer D overstates the locational constraint — while tropical injections do distribute aerosol more symmetrically between hemispheres, the Pinatubo analogue value is primarily about the total aerosol budget and radiative effect, not just geographic distribution.',
        },
        {
          q: 'Why do governance challenges present unique risks for solar geoengineering compared to carbon dioxide removal, and what is the "moral hazard" concern?',
          a: [
            'CDR governance is straightforward because carbon removal is a purely domestic activity that affects only the country performing it; solar geoengineering raises international governance challenges because stratospheric aerosols disperse globally, meaning one country\'s SAI deployment alters weather and precipitation for all other countries without their consent, while no international legal framework currently authorises or prohibits this',
            'Solar geoengineering is more governable than CDR because it produces immediate, measurable temperature effects that can be attributed to specific actors, making international monitoring and compliance straightforward; CDR governance is harder because CO₂ removal is invisible and unverifiable at the scale needed',
            'Both SAI and CDR face identical governance challenges; the key difference is that CDR technologies are privately owned by corporations, creating intellectual property barriers, while SAI would necessarily be operated by governments, making it subject to democratic accountability that CDR lacks',
            'Governance challenges for SAI are primarily technical rather than political: the main obstacle is developing aircraft capable of sustained stratospheric flight, and once this engineering problem is solved, international governance of SAI deployment would follow automatically through existing UNFCCC mechanisms',
          ],
          correct: 0,
          explain: 'Solar geoengineering — particularly SAI — creates a fundamentally different governance challenge from CDR because of its inherently transboundary nature. When sulfate particles are injected into the stratosphere at sufficient scale to offset significant global warming, the aerosol cloud distributes globally over months, altering incoming solar radiation on every continent. Climate model simulations consistently show that SAI producing global mean cooling is not climatically neutral regionally: monsoon systems may weaken (reduced precipitation in South Asia and West Africa has been modelled), precipitation patterns shift, and the cooling is not uniformly distributed. This means that a state or group of states that unilaterally deployed SAI would be imposing altered weather and precipitation on other states — states that did not consent to this intervention and may experience significant agricultural, water, and ecosystem harm. The current international legal landscape provides essentially no framework for this: the ENMOD Convention (1977) prohibits only hostile environmental modification as a weapon of war; the UNFCCC addresses emissions; the CBD and UNCLOS have limited provisions. No treaty body can currently authorise, prohibit, or regulate SAI deployment. The **moral hazard** concern is that the existence and perceived feasibility of SAI as a "cheap" climate fix (~$2–8 billion/yr for ~1°C cooling) reduces political urgency for the far more expensive and socially disruptive work of cutting emissions. Empirical studies on moral hazard show mixed results — some experiments show it reduces mitigation willingness, others do not — but the political salience of the argument is significant. Answer B incorrectly claims SAI is more governable; the opposite is true. Answer C incorrectly equates the governance challenges. Answer D incorrectly assumes UNFCCC mechanisms would naturally extend to SAI.',
        },
      ],
    },
  ],
}

export default carbonRemovalGeoengineering
