import { Globe, Layers, Activity, Thermometer } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const globalCarbonCycle: Lesson = {
  id: 'clim-201-1-1-1',
  title: 'The Global Carbon Cycle',
  track: 'cli',
  trackName: 'Climate',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'Carbon reservoirs, fluxes, and the anthropogenic perturbation — how carbon moves between atmosphere, land, ocean, and lithosphere',
  sources: [
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report WG1',   url: 'https://www.ipcc.ch/' },
    { org: 'GCP',    title: 'Global Carbon Project',              url: 'https://www.globalcarbonproject.org/' },
    { org: 'NOAA',   title: 'NOAA Earth System Research Lab',     url: 'https://gml.noaa.gov/' },
    { org: 'Nature', title: 'Nature — Carbon Cycle',              url: 'https://www.nature.com/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Carbon\'s grand circulation`,
      body: `Carbon is the skeletal element of life and the chemical pivot of climate. It moves continuously between the atmosphere, land, ocean, and the deep Earth — through biological processes measured in years, chemical exchanges measured in decades, and geological processes measured in millions of years. Understanding the carbon cycle means understanding both why the atmosphere\'s CO₂ concentration is what it is today and why human perturbations to it are so consequential.

**The major carbon reservoirs** vary in size by many orders of magnitude. The **lithosphere** — sedimentary rocks, coal seams, oil and gas fields, organic-rich shales — is by far the largest reservoir, holding approximately 100,000,000 Pg C (one petagram of carbon = one gigatonne of carbon). This carbon is mostly locked away in the slow geological cycle, inaccessible on human timescales except where we actively mine or drill it. The **ocean** is the next largest active reservoir at ~38,000 Pg C, held primarily as dissolved inorganic carbon (bicarbonate and carbonate ions). **Soils and permafrost** together store ~3,000 Pg C — approximately 3.4 times the amount in the atmosphere — making soil carbon dynamics a critical and often underappreciated component of the carbon budget. The **terrestrial biosphere** (all living plants and organisms on land) holds ~2,600 Pg C, concentrated in tropical and boreal forests. The **atmosphere** is the smallest of the major reservoirs at roughly 870 Pg C (as of 2023, corresponding to approximately 420 ppm CO₂) — yet it is the most climatically sensitive, because even small additions to it produce measurable changes in Earth\'s radiative forcing.

**Annual carbon fluxes** reveal the scale of both natural cycling and the human perturbation. The land biosphere exchanges enormous amounts of carbon with the atmosphere through photosynthesis (~120 Pg C/yr gross uptake) and respiration plus decomposition (~120 Pg C/yr gross release), but in the current era of elevated CO₂ and nitrogen deposition the land biosphere is a **net sink of ~3.1 Pg C/yr**. The ocean similarly absorbs ~2.8 Pg C/yr from the atmosphere through gas exchange and biological production. Against these natural sinks, **fossil fuel combustion** emits approximately 10 Pg C/yr, and **land use change** (primarily tropical deforestation) adds another ~1.2 Pg C/yr. The arithmetic of the carbon budget: emissions of ~11.2 Pg C/yr minus land uptake of ~3.1 Pg C/yr minus ocean uptake of ~2.8 Pg C/yr leaves roughly **5 Pg C/yr accumulating in the atmosphere** — the direct cause of the observed ~2.4 ppm/yr rise in atmospheric CO₂.

**The fast and slow carbon cycles** operate on fundamentally different timescales. The fast cycle — photosynthesis, respiration, air-sea gas exchange, and surface ocean chemistry — moves carbon in and out of the atmosphere on timescales of years to decades. The slow geological carbon cycle — silicate weathering, carbonate burial, and volcanic degassing — operates on timescales of hundreds of thousands to millions of years. The slow cycle is the ultimate long-term thermostat for Earth\'s climate: over millions of years, atmospheric CO₂ is regulated by the balance between **silicate weathering** (which consumes CO₂ as rainwater reacts with calcium silicate rocks: CO₂ + CaSiO₃ → CaCO₃ + SiO₂, with the carbonate eventually buried in ocean sediments) and **volcanic and metamorphic degassing** (which returns CO₂ from subducted carbonates to the atmosphere). When the planet warms, silicate weathering accelerates and draws down CO₂; when it cools, weathering slows and volcanic degassing rebuilds CO₂ — a negative feedback operating on ~100,000–1,000,000 year timescales.

**The Keeling Curve** is one of the most important records in environmental science. In 1958, Charles David Keeling began measuring atmospheric CO₂ at Mauna Loa Observatory in Hawaii — a high-altitude site in the middle of the Pacific, chosen to minimise local contamination. The record, continuous to the present, shows two simultaneous patterns: a steady upward trend from 316 ppm in 1958 to 424 ppm in 2023 (+34%), reflecting fossil fuel emissions; and a regular **seasonal oscillation** of 6–8 ppm superimposed on the trend. The seasonal cycle arises from the Northern Hemisphere\'s much larger land mass and vegetated area: each spring and summer, NH photosynthesis pulls CO₂ out of the atmosphere; each autumn and winter, decomposition and reduced photosynthesis release it again. The planet, in effect, breathes once a year.

**Isotopic fingerprints** provide definitive evidence that the observed CO₂ rise is caused by burning fossil fuels rather than by volcanic activity, ocean outgassing, or soil respiration. Two isotopic signals are diagnostic. First, the **Suess effect** in radiocarbon (¹⁴C): fossil fuels are millions of years old — far beyond the ~50,000-year detection limit of radiocarbon — so they contain zero ¹⁴C; as fossil CO₂ is added to the atmosphere, it dilutes the atmospheric ¹⁴C concentration, causing a measurable decline in the ¹⁴C/¹²C ratio. Second, the **δ¹³C Suess effect**: fossil fuels have a distinctively negative δ¹³C signature (~−24 to −28‰) compared with ocean-derived CO₂ (~0‰) or volcanic CO₂ (~−6‰). As fossil CO₂ accumulates in the atmosphere, the δ¹³C of atmospheric CO₂ decreases — a trend measured continuously since the 1970s. These two independent isotopic lines of evidence, neither of which can be produced by natural sources, confirm beyond reasonable doubt that the rise in atmospheric CO₂ from 280 ppm to 420 ppm is anthropogenic in origin.`,
      keyTerms: [
        {
          term: 'carbon reservoir',
          def: 'Any compartment of the Earth system that stores carbon for a period of time. The major reservoirs are the lithosphere (~100,000,000 Pg C, slow cycle), ocean (~38,000 Pg C), soils and permafrost (~3,000 Pg C), terrestrial biosphere (~2,600 Pg C), and atmosphere (~870 Pg C at 420 ppm). Reservoir size determines its buffering capacity; the atmosphere is the smallest major reservoir and therefore most sensitive to flux changes.',
        },
        {
          term: 'carbon flux',
          def: 'The rate of carbon transfer between reservoirs, expressed in Pg C/yr (petagrams of carbon per year; 1 Pg C = 1 Gt C). Key anthropogenic fluxes: fossil fuel combustion ~10 Pg C/yr; land use change ~1.2 Pg C/yr. Key natural sinks: land biosphere uptake ~3.1 Pg C/yr; ocean uptake ~2.8 Pg C/yr. The difference between sources and sinks gives the atmospheric accumulation rate of ~5 Pg C/yr (≈ 2.4 ppm/yr).',
        },
        {
          term: 'Keeling Curve',
          def: 'The continuous record of atmospheric CO₂ concentration measured at Mauna Loa Observatory (Hawaii) by Charles David Keeling beginning in March 1958 and maintained by NOAA and Scripps Institution of Oceanography. It shows an unbroken upward trend from 316 ppm (1958) to over 424 ppm (2023) superimposed on a regular 6–8 ppm seasonal oscillation driven by Northern Hemisphere photosynthesis. The longest direct instrumental CO₂ record in existence.',
        },
        {
          term: 'geological carbon cycle',
          def: `The slow exchange of carbon between the atmosphere, oceans, and lithosphere on timescales of 100,000 to millions of years. The primary removal mechanism is silicate weathering (CO₂ + CaSiO₃ → CaCO₃ + SiO₂), which consumes atmospheric CO₂ and leads to carbonate burial on the seafloor. The primary return mechanism is volcanic and metamorphic degassing of subducted carbonate rocks. This cycle acts as Earth\'s long-term CO₂ thermostat.`,
        },
        {
          term: 'Suess effect',
          def: 'The dilution of atmospheric radiocarbon (¹⁴C) — and the decrease in δ¹³C — caused by the addition of ¹⁴C-free, ¹³C-depleted CO₂ from fossil fuel combustion. Named after physicist Hans Suess, who first identified it in 1955. Because fossil fuels are millions of years old (far beyond the ~50,000-year ¹⁴C detection limit) and are isotopically light (δ¹³C ≈ −24 to −28‰), their combustion produces isotopic signatures in atmospheric CO₂ that cannot be explained by any natural source, providing definitive evidence of fossil fuel origin for the observed CO₂ increase.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Reservoirs, fluxes, the Keeling Curve, and the geological thermostat',
      body: `**Why reservoir size matters.** Think of carbon reservoirs as bank accounts of different sizes and with different withdrawal rules. The atmosphere is a small, liquid account: even modest net withdrawals or deposits (a few Pg C/yr) shift its balance noticeably. The ocean is a large account with slow transfer rates: it is absorbing CO₂ efficiently now, but as more CO₂ dissolves, the ocean\'s buffering capacity decreases (the Revelle factor rises), progressively reducing its uptake efficiency. The lithosphere is a locked vault: carbon in coal and oil is inaccessible through natural processes on human timescales — but industrial mining effectively breaks the lock, transferring millions of years\' worth of lithospheric carbon into the atmosphere in centuries.

**Budget arithmetic and the missing sink.** In the 1990s, scientists noticed that the emissions from fossil fuels and land use change added up to more than the measured atmospheric accumulation and ocean uptake combined. The discrepancy — several Pg C/yr — pointed to a substantial terrestrial carbon sink that had not been directly measured. This was eventually attributed to enhanced plant growth in mid-latitude forests responding to elevated CO₂ (CO₂ fertilisation), warmer growing seasons, and nitrogen deposition from agriculture. The land sink is real but fragile: drought, fire, insect outbreaks, and permafrost thaw can all flip the land from a net sink to a net source, and climate projections suggest the land sink will weaken under high-warming scenarios.

**Reading the Keeling Curve.** The seasonal cycle embedded in the Keeling Curve reveals the Northern Hemisphere\'s vegetated land area in action. The amplitude of the seasonal oscillation (~6–8 ppm at Mauna Loa) has been increasing over recent decades as northern forests and tundra vegetation respond to warmer, longer growing seasons — an early but detectable signal of ecological change in the carbon cycle. The underlying trend (the upward slope) accelerated from ~1 ppm/yr in the 1960s to ~2.4 ppm/yr today, tracking the rise in global fossil fuel emissions. The iconic sawtooth-on-a-slope graph is arguably the most consequential time series in Earth science: it shows in a single image the fingerprint of the anthropogenic perturbation and the seasonal breath of the biosphere.

**The geological carbon cycle and past CO₂ extremes.** On geological timescales, CO₂ has varied between ~150 ppm (Pleistocene glacial maxima) and >4,000 ppm (Cambrian, ~500 Ma). During the Mesozoic (250–66 Ma), CO₂ was generally 2–4× higher than today and the climate was much warmer (no polar ice caps, shallow seas covering continental interiors). The gradual Cenozoic cooling that eventually led to the Quaternary Ice Ages is largely attributed to long-term CO₂ drawdown via silicate weathering as the Himalayas and Tibetan Plateau (uplifted by India-Asia collision, ~50 Ma) exposed vast areas of fresh silicate rock to weathering. This geological context shows that CO₂ is the master control knob for Earth\'s long-term climate — and that the current rate of CO₂ increase (~100× faster than any sustained natural increase in the geological record) is placing the carbon cycle in a regime that has no geological precedent in the past ~50 million years.`,
      cards: [
        {
          name: 'Carbon Reservoirs: From Rocks to Atmosphere',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Lithosphere ~100,000,000 Pg C (slow, geological); ocean ~38,000 Pg C (dissolved inorganic carbon, decades–millennia); soils and permafrost ~3,000 Pg C (vulnerable to warming); terrestrial biosphere ~2,600 Pg C (forests dominant); atmosphere ~870 Pg C at 420 ppm (2023). Smallest reservoir; most climate-sensitive. Reservoir size determines buffering capacity; the smaller the reservoir, the more a given flux perturbs its concentration.',
          examples: 'Permafrost stores ~1,500 Pg C in Arctic soils — twice the current atmospheric pool; thawing could release 37–174 Pg C by 2100 under high-emissions scenarios · Terrestrial biosphere: Amazon rainforest alone holds ~150–200 Pg C · Atlantic deep water: ~500-year ventilation age carries ancient DIC',
        },
        {
          name: 'Annual Carbon Fluxes and Budget',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Fossil fuel emissions ~10 Pg C/yr; land use change ~1.2 Pg C/yr. Natural sinks: land biosphere uptake ~3.1 Pg C/yr; ocean uptake ~2.8 Pg C/yr. Atmospheric accumulation ~5 Pg C/yr (≈ 2.4 ppm/yr). Budget imbalance ≈ 0.3 Pg C/yr (residual uncertainty). Land and ocean sinks together absorb ~55% of emissions; the fraction absorbed has been relatively stable but models project it will decline under higher warming, accelerating atmospheric accumulation.',
          examples: '2023 global fossil CO₂ emissions: ~10.0 Pg C, record high · Ocean uptake measured via pCO₂ surveys (SOCAT) and inversion models · Land sink estimated as residual after measured atmospheric accumulation minus ocean uptake · IPCC AR6: sink fraction ~55% of emissions over 2011–2020',
        },
        {
          name: 'The Keeling Curve and CO₂ Trajectory',
          icon: Activity,
          color: BRAND.accentHot,
          desc: 'Continuous Mauna Loa record since March 1958 (Scripps/NOAA). 1958: 316 ppm; 2023: 424 ppm — a 34% rise in 65 years. Rate of increase: ~1 ppm/yr in 1960s → ~2.4 ppm/yr today. Seasonal oscillation: 6–8 ppm amplitude driven by NH photosynthesis; amplitude increasing. Isotopic evidence embedded in record: falling δ¹³C (Suess effect) and declining ¹⁴C/¹²C fingerprint fossil fuel CO₂. Current CO₂ unprecedented in at least 800,000 years (ice cores) and likely 3–5 million years (Pliocene proxies).',
          examples: 'First 400 ppm reading: May 2013 · Annual minimum (Sept–Oct at Mauna Loa) reflects NH end-of-summer drawdown · Southern Hemisphere record at Cape Grim, Tasmania confirms NH-driven seasonal amplitude · 2016 El Niño year: CO₂ spike from tropical forest drought reducing land sink',
        },
        {
          name: 'Geological Carbon Cycle on Million-Year Timescales',
          icon: Thermometer,
          color: BRAND.coral,
          desc: `Silicate weathering: CO₂ + CaSiO₃ → CaCO₃ + SiO₂; CO₂ consumed, carbonate buried on seafloor. Rate increases with temperature (negative feedback; Earth\'s long-term thermostat). Volcanic/metamorphic degassing: subducted carbonates return CO₂ to atmosphere. Timescale: ~100,000–1,000,000 years for full regulation. Past extremes: Cambrian >4,000 ppm; Pleistocene glacial minima ~180 ppm. Cenozoic cooling: Himalayan uplift accelerated silicate weathering → long-term CO₂ drawdown → glaciation.`,
          examples: 'GEOCARB models: CO₂ >2,000 ppm during Devonian; ~1,500 ppm Triassic · Himalayan uplift ~50 Ma: India-Asia collision exposed fresh silicates; linked to Cenozoic CO₂ drawdown · Deccan Traps (66 Ma): flood basalt degassed CO₂, may have contributed to end-Cretaceous warming · Modern anthropogenic CO₂ rate: ~100× faster than any sustained natural geological source',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The global carbon cycle: sources, sinks, and geological return',
      body: `Follow carbon from combustion and deforestation through the atmosphere, into the land and ocean sinks, and along the slow geological pathway that ultimately returns carbon to the surface through volcanism. Each node represents a major reservoir or process; each edge represents a flux pathway. The same circuit, run forward at fossil fuel emission rates, is loading the atmosphere with carbon far faster than the slow geological cycle can remove it — with the excess accumulating as the observed rise in atmospheric CO₂.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The global carbon cycle from anthropogenic emissions through fast biological sinks to the slow geological return pathway',
        nodes: [
          {
            id: 'emissions',
            label: 'Fossil fuel combustion + land use change',
            description: 'Human activities — burning coal, oil, and natural gas (~10 Pg C/yr) and deforestation/land clearing (~1.2 Pg C/yr) — release approximately 11.2 Pg C/yr into the atmosphere. Fossil fuel CO₂ carries no ¹⁴C and has a distinctively negative δ¹³C signature (~−24 to −28‰), providing isotopic fingerprints that distinguish it unambiguously from natural CO₂ sources such as volcanic degassing or ocean outgassing.',
            color: BRAND.ruby,
          },
          {
            id: 'atm-co2',
            label: 'Atmospheric CO₂ rise',
            description: 'Of the ~11.2 Pg C/yr emitted, approximately 5 Pg C/yr (~44%) accumulates in the atmosphere, driving the observed rise of ~2.4 ppm/yr. The Mauna Loa Keeling Curve records this accumulation continuously since 1958, showing the upward trend from 316 ppm to over 424 ppm superimposed on the seasonal cycle from NH photosynthesis. At current emission rates, CO₂ will reach 450 ppm before 2040.',
            color: BRAND.gold,
          },
          {
            id: 'land-uptake',
            label: 'Land biosphere uptake',
            description: 'Terrestrial ecosystems — primarily mid-latitude and boreal forests responding to elevated CO₂ and warmer growing seasons — absorb approximately 3.1 Pg C/yr. This net sink is the difference between gross photosynthetic uptake (~120 Pg C/yr) and gross respiration/decomposition (~117 Pg C/yr). The land sink is vulnerable to drought, fire, and permafrost thaw: during El Niño-driven tropical droughts, the land sink can collapse or reverse temporarily, producing anomalous atmospheric CO₂ spikes.',
            color: BRAND.jade,
          },
          {
            id: 'ocean-uptake',
            label: 'Ocean CO₂ absorption',
            description: 'The ocean absorbs ~2.8 Pg C/yr through two mechanisms: (1) gas exchange driven by the pCO₂ gradient between the atmosphere and the surface ocean; and (2) the biological pump (photosynthesis by phytoplankton incorporates CO₂ into organic matter that sinks on death). As atmospheric CO₂ rises, ocean uptake increases in absolute terms but decreases in efficiency — the Revelle factor rises from ~10 today toward ~12–14 in high-CO₂ futures, meaning the ocean must increase its dissolved inorganic carbon content proportionally less per unit of atmospheric rise.',
            color: BRAND.accent,
          },
          {
            id: 'geological-burial',
            label: 'Geological carbon burial',
            description: `On million-year timescales, carbon is removed from the ocean-atmosphere system through two pathways: (1) burial of organic carbon in marine sediments (primarily from the biological pump); and (2) silicate weathering — atmospheric CO₂ reacts with calcium silicate rocks (CO₂ + CaSiO₃ → CaCO₃ + SiO₂) producing calcium carbonate that is deposited on the seafloor. Together these processes draw down ~0.1 Pg C/yr — negligible on human timescales but decisive over millions of years as Earth\'s long-term CO₂ thermostat.`,
            color: BRAND.amethyst,
          },
          {
            id: 'volcanic-return',
            label: 'Volcanic return (long-term)',
            description: `Subducted carbonate sediments undergo metamorphism and partial melting in the mantle; the CO₂ is released back to the atmosphere through volcanic arcs and mid-ocean ridge degassing at a rate of ~0.04–0.1 Pg C/yr. This is the closing step of the geological carbon cycle: carbon buried by weathering over millions of years is returned by volcanism, completing a cycle that has regulated Earth\'s atmospheric CO₂ — and therefore climate — across geological time. The current anthropogenic emission rate is ~100× the volcanic flux, overwhelming this regulatory system on human timescales.`,
            color: BRAND.coral,
          },
        ],
        edges: [
          { from: 'emissions',        to: 'atm-co2',        label: '~11.2 Pg C/yr net addition to atmosphere (fossil fuel + land use change)' },
          { from: 'atm-co2',          to: 'land-uptake',    label: '~3.1 Pg C/yr land biosphere net uptake (CO₂ fertilisation + forest regrowth)' },
          { from: 'atm-co2',          to: 'ocean-uptake',   label: '~2.8 Pg C/yr air-sea gas exchange driven by pCO₂ gradient (Henry\'s Law)' },
          { from: 'ocean-uptake',     to: 'geological-burial', label: 'biological pump + carbonate burial on seafloor (~0.1 Pg C/yr net on geological timescales)' },
          { from: 'geological-burial', to: 'volcanic-return', label: 'subduction of carbonate sediments → metamorphic/magmatic CO₂ release (million-year timescale)' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the largest active carbon reservoir on Earth?',
          a: [
            'The atmosphere, because it contains the CO₂ that directly drives climate change and exchanges carbon with all other reservoirs on annual timescales',
            'The terrestrial biosphere, because tropical and boreal forests store more carbon per unit area than any other ecosystem and exchange it rapidly through photosynthesis and respiration',
            'The ocean, which holds approximately 38,000 Pg C as dissolved inorganic carbon — primarily bicarbonate ions — making it the dominant active surface reservoir and a critical long-term carbon sink',
            'Permafrost and soils, which together hold ~3,000 Pg C and are particularly significant because warming is causing them to release carbon rapidly into the atmosphere',
          ],
          correct: 2,
          explain: `The atmosphere (~870 Pg C at 420 ppm) is the smallest of the major active reservoirs, not the largest; its small size is precisely why it is so sensitive to flux imbalances (A is incorrect). The terrestrial biosphere holds ~2,600 Pg C — larger than the atmosphere, but still far smaller than the ocean (B is incorrect). Soils and permafrost (~3,000 Pg C) are larger than the biosphere but still far smaller than the ocean; their vulnerability to warming is ecologically critical but does not make them the largest reservoir (D is incorrect). The ocean at ~38,000 Pg C is by far the largest active surface reservoir, storing approximately 44 times as much carbon as the atmosphere. This carbon is held almost entirely as dissolved inorganic carbon — ~90% as bicarbonate (HCO₃⁻), ~9% as carbonate (CO₃²⁻), and less than 1% as dissolved CO₂ — in chemical equilibrium governed by seawater carbonate chemistry. The lithosphere (~100,000,000 Pg C) is larger still, but is generally classified as part of the slow geological cycle rather than as an \'active\' reservoir accessible on human timescales — except when fossil fuels are extracted and burned, which effectively short-circuits the geological cycle.`,
        },
        {
          q: 'What does the Keeling Curve record and what trend does it show?',
          a: [
            'The Keeling Curve records global mean surface temperature anomalies measured at Mauna Loa since 1958; it shows a steady warming trend of approximately 0.18°C (0.3°F) per decade superimposed on interannual variability from ENSO',
            'The Keeling Curve records atmospheric CO₂ concentration at Mauna Loa Observatory, Hawaii, since March 1958; it shows a continuous upward trend from 316 ppm to over 424 ppm (2023) superimposed on a 6–8 ppm seasonal oscillation caused by Northern Hemisphere photosynthesis',
            'The Keeling Curve records the isotopic ratio ¹³C/¹²C in atmospheric CO₂, providing direct evidence of the Suess effect; the trend shows a steady decrease in δ¹³C proving that fossil fuels are responsible for rising CO₂',
            'The Keeling Curve records ocean surface pCO₂ at a single Pacific location since 1958; it shows atmospheric CO₂ tracking ocean values closely, confirming that the ocean is the primary driver of atmospheric CO₂ variability on interannual timescales',
          ],
          correct: 1,
          explain: 'The Keeling Curve is not a temperature record — it measures atmospheric CO₂ concentration (in parts per million by volume), not temperature (A is incorrect). The δ¹³C record of atmospheric CO₂ does show a declining trend (the Suess effect), and this is measured at Mauna Loa and elsewhere — but this is not what the term "Keeling Curve" specifically refers to; the iconic Keeling Curve is the CO₂ concentration record (C incorrectly identifies what the curve records). The Keeling Curve measures atmospheric CO₂, not ocean pCO₂; the ocean surface pCO₂ has been rising to track the atmospheric increase, not the other way around — the ocean does not drive atmospheric CO₂ on these timescales (D reverses cause and effect). The correct answer is B: the Keeling Curve is the continuous record of atmospheric CO₂ concentration at Mauna Loa Observatory, initiated by Charles David Keeling in March 1958 and continued by Scripps Institution of Oceanography and NOAA. Its two key features are: (1) the long-term upward trend, driven by fossil fuel combustion and land use change, rising from 316 ppm in 1958 to over 424 ppm in 2023 at an accelerating rate (~1 ppm/yr in the 1960s, ~2.4 ppm/yr today); and (2) the regular seasonal oscillation of 6–8 ppm caused by Northern Hemisphere photosynthesis pulling CO₂ down each spring/summer and decomposition releasing it each autumn/winter. Mauna Loa was chosen for its remoteness and altitude, minimising local contamination. The Keeling Curve is the longest direct instrumental record of atmospheric CO₂ and arguably the single most important monitoring dataset in climate science.',
        },
        {
          q: 'Why does atmospheric CO₂ show seasonal oscillations superimposed on a rising trend?',
          a: [
            'The seasonal oscillations reflect annual cycles of volcanic activity, with more volcanic CO₂ degassing during summer months in the Northern Hemisphere when magma chambers are less compressed by glacial ice load',
            'The seasonal oscillations are caused by the annual cycle of ocean surface temperature: warmer summer oceans outgas more CO₂ (Henry\'s Law), raising atmospheric CO₂ in summer, while cooler winter oceans absorb more CO₂, lowering it in winter',
            'The seasonal oscillations reflect the net respiration of the global ocean during stratified summer conditions, when biological productivity is nutrient-limited and decomposition dominates, alternating with winter mixing that restores nutrient supply and boosts photosynthesis',
            'The seasonal oscillations are driven by the much larger land area and vegetation cover of the Northern Hemisphere: NH photosynthesis draws down atmospheric CO₂ in spring and summer (CO₂ minimum in September–October at Mauna Loa), while reduced photosynthesis and decomposition return CO₂ in autumn and winter (CO₂ maximum in May), creating an annual planetary breathing cycle of 6–8 ppm amplitude',
          ],
          correct: 3,
          explain: `Volcanic degassing does vary seasonally in some volcanic regions but not in any pattern correlated with glacial ice load pressure on hemispheric timescales; volcanic CO₂ emissions (~0.04–0.1 Pg C/yr) are also too small to produce the observed seasonal amplitude (A is physically implausible and factually incorrect). Ocean temperature does influence CO₂ solubility (Henry\'s Law), and warmer surface water does hold less dissolved CO₂ — but the ocean effect is largely self-cancelling between hemispheres and is smaller in amplitude than the terrestrial signal; moreover, the phasing would be different from what is observed (B partially contains truth about Henry\'s Law but incorrectly identifies the dominant mechanism and misrepresents the phasing). Ocean biological productivity is nutrient-limited in summer in some regions, but the global ocean is a relatively weak driver of the seasonal CO₂ oscillation compared with the terrestrial biosphere; ocean-atmosphere CO₂ flux does vary seasonally, but not in a pattern that matches the observed Keeling Curve seasonality (C identifies the wrong dominant mechanism). The correct answer is D: the 6–8 ppm seasonal oscillation in the Keeling Curve is driven overwhelmingly by the Northern Hemisphere terrestrial biosphere. The NH has approximately 68% of Earth\'s total land area and a disproportionate share of temperate and boreal forests. Each Northern Hemisphere spring and summer, photosynthesis in these vast forest ecosystems draws down atmospheric CO₂ faster than it is replaced by respiration — producing the annual minimum at Mauna Loa in September–October. Through autumn and winter, reduced photosynthesis combined with continued decomposition of organic matter returns CO₂ to the atmosphere, producing the annual maximum in May. The amplitude of this oscillation (~6–8 ppm at Mauna Loa, ~15 ppm at Arctic sites) has been increasing in recent decades as vegetation grows more vigorously in response to warming and longer growing seasons — a detectable signal of ecosystem-level response to climate change embedded in the Keeling Curve itself.`,
        },
        {
          q: 'What isotopic evidence proves fossil fuels are the source of rising atmospheric CO₂?',
          a: [
            'The increasing concentration of ¹⁸O in atmospheric CO₂ over time, since fossil fuels have a higher ¹⁸O content than CO₂ from natural sources such as ocean outgassing or soil respiration; the ¹⁸O Suess effect provides the clearest isotopic fingerprint of fossil fuel combustion',
            'The rising ¹³C/¹²C ratio (increasing δ¹³C) in atmospheric CO₂, because fossil fuels have a higher carbon-13 content than the natural atmosphere; as fossil CO₂ is added, it enriches the atmosphere in heavy carbon-13, producing a measurable isotopic trend',
            'Two independent isotopic signals confirm fossil fuel origin: (1) declining atmospheric ¹⁴C/¹²C (radiocarbon Suess effect) — fossil fuels are millions of years old and contain no ¹⁴C, so their combustion dilutes atmospheric ¹⁴C; and (2) declining δ¹³C in atmospheric CO₂ — fossil fuels have δ¹³C ≈ −24 to −28‰, much lighter than ocean CO₂ (~0‰) or volcanic CO₂ (~−6‰), shifting the atmospheric δ¹³C progressively negative; neither signal can be produced by natural CO₂ sources',
            'The anomalously high concentration of CO₂ isotopologue ¹³C¹⁶O₂ in industrial regions, measurable by satellite spectrometers, directly images the spatial distribution of fossil fuel emissions and confirms that the global atmospheric CO₂ increase originates from those source regions',
          ],
          correct: 2,
          explain: 'Oxygen-18 in CO₂ does carry isotopic information about CO₂ sources and photosynthesis/respiration fractionation, but the ¹⁸O signal is complicated by exchange with leaf water and soil water and is not the primary isotopic fingerprint used to prove fossil fuel origin; there is no well-known "¹⁸O Suess effect" used for this purpose (A describes a non-standard and incorrect diagnostic). Fossil fuels are depleted in ¹³C relative to the atmosphere, not enriched — they have δ¹³C values of approximately −24 to −28‰ (for organic fossil fuels) compared with the pre-industrial atmospheric value of approximately −6.5‰; adding fossil CO₂ therefore shifts δ¹³C negative, not positive — B has the direction of the δ¹³C trend exactly backwards. While satellite remote sensing of CO₂ isotopologues is an emerging field, the statement in D mischaracterises the ¹³C¹⁶O₂ isotopologue as the key diagnostic and overstates current satellite capabilities for isotopologue-level attribution; the established isotopic evidence is the bulk δ¹³C and ¹⁴C signals (D describes a future/emerging capability as if it were the established evidence). The correct answer is C: two independent, well-measured isotopic signals together provide definitive evidence. (1) The radiocarbon Suess effect: ¹⁴C is produced in the upper atmosphere by cosmic ray bombardment of nitrogen, and has a half-life of 5,730 years; fossil fuels are 10,000–300,000,000 years old — far beyond ¹⁴C detection — and contain zero ¹⁴C; their combustion adds ¹⁴C-free CO₂ to the atmosphere, measurably diluting the atmospheric ¹⁴C/¹²C ratio. This effect was first identified by Hans Suess in 1955 using tree rings and has been measured directly in atmospheric CO₂ continuously since the 1970s (complicated somewhat by nuclear weapons testing in the 1950s–60s, which temporarily elevated atmospheric ¹⁴C). (2) The δ¹³C Suess effect: photosynthesis discriminates against heavy ¹³C, making fossil organic carbon isotopically light (δ¹³C ≈ −24 to −28‰ for coal and oil); the atmospheric δ¹³C was approximately −6.5‰ in 1750 and has declined to approximately −8.5‰ today — a shift in exactly the direction and magnitude expected from progressive fossil fuel CO₂ addition. Neither volcanic CO₂ (δ¹³C ≈ −6‰; contains modern ¹⁴C from mantle-crustal exchange), nor ocean outgassing (δ¹³C ≈ 0‰; modern ¹⁴C), nor soil respiration (δ¹³C ≈ −25‰ but contains modern ¹⁴C from recently fixed carbon) can reproduce the combination of both isotopic shifts simultaneously.',
        },
        {
          q: 'How does the geological carbon cycle regulate CO₂ on million-year timescales?',
          a: [
            'The geological carbon cycle regulates CO₂ through the periodic burial and exhumation of coal deposits: during warm periods, lush vegetation dies and is buried as coal, removing CO₂; during cool periods, tectonic uplift exposes and erodes coal seams, releasing CO₂; this coal burial-erosion cycle maintains CO₂ within habitable bounds on million-year timescales',
            'The geological carbon cycle regulates CO₂ primarily through the ocean\'s biological pump: as CO₂ rises and ocean productivity increases, more organic carbon sinks to the seafloor and is buried, removing CO₂; this productivity-burial feedback operates on timescales of decades to centuries and provides the main CO₂ thermostat for Earth\'s climate across geological time',
            'The geological carbon cycle regulates CO₂ through a temperature-dependent negative feedback involving silicate weathering and volcanic degassing: warmer temperatures accelerate chemical weathering of silicate rocks (CO₂ + CaSiO₃ → CaCO₃ + SiO₂), consuming atmospheric CO₂ and leading to carbonate burial; slower weathering during cool periods allows volcanic CO₂ to accumulate; over ~100,000–1,000,000 year timescales this feedback stabilises CO₂ and prevents runaway warming or snowball conditions',
            'The geological carbon cycle operates through changes in ocean alkalinity driven by seafloor spreading rates: faster spreading produces more submarine volcanism, raises ocean alkalinity, and draws down atmospheric CO₂; slower spreading reduces alkalinity and allows CO₂ to accumulate; this seafloor spreading thermostat explains all major CO₂ variations in the geological record including the current anthropogenic CO₂ rise',
          ],
          correct: 2,
          explain: `Coal burial is part of the organic carbon burial component of the geological carbon cycle, and it did play an important role during the Carboniferous (when the evolution of lignin-rich wood and the lack of efficient wood-decomposing organisms led to massive organic carbon burial and a CO₂ decline). However, coal burial-erosion is not the primary mechanism of the geological CO₂ thermostat, and coal seam erosion is not a major mechanism returning CO₂ on million-year timescales — volcanic/metamorphic degassing of carbonate rocks is far more important (A is incomplete and misleading). The biological pump does bury organic carbon (~0.1 Pg C/yr) and this is one pathway of the geological carbon cycle, but the ocean\'s biological pump is not the "primary" geological CO₂ thermostat — silicate weathering is; moreover, the biological pump operates on decades to centuries (related to ocean circulation timescales), not millions of years, and the feedback described in B (productivity increases with CO₂) is not the dominant thermostatic mechanism at geological timescales (B misidentifies both the mechanism and the timescale). Seafloor spreading rates do influence the long-term volcanic degassing of CO₂ and are thought to contribute to Mesozoic-scale CO₂ variations, but attributing the primary CO₂ regulatory mechanism entirely to spreading rates is incorrect; silicate weathering is the dominant negative feedback, and spreading rates primarily affect the source term (volcanic CO₂), not the sink (D overstates the role of spreading rate and incorrectly attributes the modern anthropogenic CO₂ rise to a natural geological process). The correct answer is C: the geological carbon cycle\'s primary regulatory mechanism is the silicate weathering feedback, first described quantitatively by Walker, Hays, and Kasting (1981). The reaction CO₂ + CaSiO₃ → CaCO₃ + SiO₂ (representing calcium silicate minerals reacting with carbonic acid from dissolved CO₂) is strongly temperature-dependent: warmer temperatures increase reaction rates through both thermodynamic and kinetic effects, and also increase runoff (more physical erosion exposing fresh mineral surfaces). The calcium carbonate produced is transported to the ocean and eventually deposited on the seafloor; when subducted, it undergoes metamorphism and returns CO₂ via volcanism at a rate of ~0.04–0.1 Pg C/yr. The key negative feedback: if CO₂ rises and warms the planet, weathering accelerates, drawing down CO₂ until a new equilibrium is reached; if CO₂ falls and the planet cools (e.g., if volcanism decreases), weathering slows, CO₂ accumulates from residual volcanic degassing, and the planet warms back. This thermostat has kept Earth habitable (liquid water stable at the surface) for at least 4 billion years, but it operates on timescales of ~100,000–1,000,000 years — far too slow to absorb anthropogenic CO₂ emissions, which are being added at ~100× the natural geological flux.`,
        },
      ],
    },
  ],
}

export default globalCarbonCycle
