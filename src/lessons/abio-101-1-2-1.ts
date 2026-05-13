import { Globe, Thermometer, Waves, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const marsHabitability: Lesson = {
  id: 'abio-101-1-2-1',
  title: 'Mars Habitability Past and Present',
  track: 'ast',
  trackName: 'Astrobiology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'Ancient river valleys, subsurface brines, and the search for past or present Martian life',
  sources: [
    { org: 'NASA',   title: 'NASA Mars Exploration Program',    url: 'https://mars.nasa.gov/' },
    { org: 'ESA',    title: 'ESA Mars Express',                 url: 'https://www.esa.int/' },
    { org: 'USGS',   title: 'USGS Astrogeology Science Center', url: 'https://astrogeology.usgs.gov/' },
    { org: 'Nature', title: 'Nature — Mars Research',           url: 'https://www.nature.com/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Red Planet, blue past: when Mars had rivers, lakes, and possibly life',
      body: `Mars today is a barren, frigid desert — but the geological record carved into its surface tells a radically different story. Understanding whether Mars was ever habitable, and whether microbial life could persist there today, requires reading that record carefully across three major geological eras that together span 4.5 billion years.

**The three Martian geological periods.** Planetary scientists divide Martian history into three eons defined by crater counting and mineralogical evidence from orbit. The **Noachian period** (~4.1–3.7 Ga) was Mars at its most Earth-like: impacts were frequent, volcanic activity was intense, and liquid water was widespread enough to carve valley networks, deposit sediments, and alter silicate minerals into phyllosilicates (clay minerals) that require water for formation. The **Hesperian period** (~3.7–3.0 Ga) saw a transition: volcanic outgassing continued but the surface dried substantially, sulphate mineral deposition dominated, and water activity shifted toward episodic large-scale floods rather than persistent rivers. The **Amazonian period** (3.0 Ga–present) is the long, cold, dry phase that persists today — glacial and periglacial processes dominate, and liquid water at the surface is thermodynamically prohibited under the current thin atmosphere.

**Ancient water — valley networks and outflow channels.** The most dramatic evidence for Noachian habitability is the global network of valley systems. Over 40,000 km of branching valley networks — analogous to river drainage systems on Earth — have been mapped from Mars Global Surveyor (MGS) and THEMIS infrared imaging. These valleys have tributaries, meanders, and alluvial fans that indicate persistent liquid water flow over geological timescales, not brief impact-melt episodes. Separate from valley networks, enormous outflow channels — some wider than the Amazon and deeper than the Grand Canyon — carved catastrophically during the Hesperian when subsurface ice melted rapidly, perhaps triggered by volcanic intrusions. These floods emptied into the northern lowlands, where a transient ocean may have existed.

**Curiosity and Gale Crater.** The most direct habitability evidence from surface exploration comes from NASA\'s Curiosity rover, which has operated in Gale Crater since 2012. Gale preserves a 5 km sedimentary mound (Aeolis Mons / Mount Sharp) built by lake and wind deposits. Curiosity\'s analysis of mudstone at the base of the mound revealed ancient lake sediments with pH-neutral to slightly alkaline chemistry, low salinity, and all the chemical ingredients needed for life: carbon, hydrogen, nitrogen, oxygen, phosphorus, and sulfur (CHNOPS). The lake environment was habitable approximately 3.5 Ga, representing some of the most compelling evidence that at least one Martian site had conditions suitable for microbial life during the Noachian–Hesperian transition.

**Perseverance and Jezero Crater.** NASA\'s Perseverance rover, operating in Jezero Crater since 2021, targets a well-preserved ancient river delta. Orbital spectroscopy identified carbonates and olivine-bearing units on the crater rim, and delta deposits show the kind of layered stratigraphy expected from sustained lacustrine sedimentation. Perseverance is collecting rock cores for eventual return to Earth — the Mars Sample Return campaign — where they can be analysed for biosignatures with laboratory-grade instruments far beyond what any rover can carry.

**ALH84001 — the meteorite that started a debate.** In 1996 David McKay and colleagues announced that the Martian meteorite ALH84001 — ejected from Mars ~17 Ma ago and found in Antarctica — contained possible evidence of ancient Martian life. The four lines of evidence were: carbonate globules formed at low temperatures, complex organic molecules (polycyclic aromatic hydrocarbons), magnetite crystals similar in morphology to those produced by magnetotactic bacteria, and putative nanometre-scale fossils. The announcement made global headlines but was rapidly and extensively criticised: each line of evidence has an abiotic explanation. The magnetite chains, in particular, can form by inorganic thermal decomposition of carbonate; the "nanofossils" are smaller than the minimum cell size considered physically viable; and the PAHs are consistent with terrestrial contamination or abiotic synthesis. Today the scientific consensus is that ALH84001 does not provide credible evidence for ancient Martian life, but the controversy permanently elevated astrobiology as a discipline and drove the current Mars exploration programme.

**Present Mars — thin, cold, and challenging.** Modern Mars is almost unrecognisable from its Noachian self. The atmosphere is 95.3% CO₂ but at only ~0.6% of Earth\'s surface pressure (about 6 mbar), far too thin to maintain liquid water at the surface: water sublimes directly from ice to vapour under most Martian conditions. Mean surface temperature is approximately −63 °C, with polar winters reaching −125 °C. Mars lost most of its magnetosphere around 4.0–3.9 Ga, which allowed the solar wind to strip atmospheric gases over billions of years — the MAVEN mission has directly measured this ongoing loss at a rate of ~100 grams per second.

**Subsurface liquid water — radar evidence.** The most exciting contemporary habitability target is the Martian subsurface. ESA\'s Mars Express carries the MARSIS (Mars Advanced Radar for Subsurface and Ionosphere Sounding) instrument, which in 2018 reported a 20 km-wide radar-bright interface buried ~1.5 km beneath the south polar layered deposits — interpreted as a subglacial liquid water lake, likely kept liquid by dissolved perchlorate salts that depress the freezing point. The SHARAD radar on MRO has also mapped layered water ice in both polar caps and mid-latitude deposits. Although alternative interpretations (frozen CO₂, clay minerals, or conductive basal sediments) have been proposed for the MARSIS signal, and subsequent studies have raised questions about whether geothermal heat is sufficient to maintain liquid water at that depth, the subsurface remains the most plausible current habitability target, analogous to subglacial lakes like Antarctica\'s Lake Vostok.

**Recurring slope lineae (RSL).** Dark, seasonal streaks called recurring slope lineae appear on steep slopes in equatorial and mid-latitude regions during warm seasons and fade in winter. Initially interpreted as evidence for contemporary near-surface briny water flows, RSL are now more controversially regarded: recent studies suggest they may be produced by dry granular flows triggered by CO₂ frost sublimation or wind, not liquid water. The debate is ongoing, but RSL demonstrate that Mars still has active surface processes tied to seasonal temperature cycles.

**Methane detections and the mystery of Martian chemistry.** Curiosity\'s Sample Analysis at Mars (SAM) instrument has detected methane at concentrations around 7 parts per billion (ppb) in periodic spikes, with a background level near or below detection. Methane is astrobiologically interesting because biological methanogenesis produces it on Earth, and it is also chemically unstable in the Martian atmosphere (photodissociation destroys it within ~300 years), implying a recent or ongoing source. However, the spikes are controversial: independent measurements by ESA\'s Trace Gas Orbiter have found no methane above ~0.05 ppb, and abiotic sources — serpentinisation, UV-driven synthesis — can produce methane without life.

**Perchlorate salts.** NASA\'s Phoenix lander discovered perchlorate (ClO₄⁻) salts in the Martian arctic soil in 2008, and perchlorates have since been detected at multiple sites. Perchlorates are highly relevant to habitability in two contradictory ways: they lower the freezing point of brines, potentially enabling liquid water in the shallow subsurface at temperatures as low as −70 °C; but they are also strongly oxidising, and at Martian UV radiation levels they generate highly reactive chlorine radicals that destroy organic molecules. This means perchlorate brines simultaneously enable and threaten liquid-water habitability — a paradox that complicates both the search for life and the interpretation of organic molecule detections.

**Where to look now.** The scientific consensus today is that if Martian life ever existed, it was most likely microbial and Noachian in age, and if it persists today, it is most likely in the deep subsurface — away from UV radiation, in contact with briny water, and potentially sustained by chemical energy from water-rock reactions (serpentinisation, radiolysis). Jezero Crater\'s delta sediments, accessible to Perseverance, represent the best near-term surface target. The subsurface remains the long-term frontier, awaiting drilling missions beyond anything currently planned.`,
      keyTerms: [
        {
          term: 'Noachian period',
          def: 'The oldest Martian geological era (~4.1–3.7 Ga), characterised by heavy meteorite bombardment, intense volcanism, widespread liquid water, and the formation of clay minerals (phyllosilicates) that require aqueous alteration. Named after Noachis Terra, a heavily cratered southern highland region. The Noachian represents the time window most scientists consider most plausible for Martian habitability.',
        },
        {
          term: 'Valley network',
          def: 'Branching systems of river valleys carved into Martian highlands during the Noachian period, with tributaries, alluvial fans, and meanders indicating persistent liquid water flow. Over 40,000 km of valley networks have been mapped globally by Mars Global Surveyor and THEMIS instruments. They are the primary geomorphological evidence for a warmer, wetter ancient Mars.',
        },
        {
          term: 'ALH84001',
          def: 'A Martian meteorite (~4.5 Ga crystallisation age) found in the Allan Hills region of Antarctica and ejected from Mars approximately 17 Ma ago. In 1996 McKay et al. claimed it contained evidence of ancient Martian life — carbonate globules, magnetite chains, PAH organics, and nanometre-scale structures interpreted as microfossils. Subsequent research identified abiotic explanations for each feature; the consensus today does not support a biological interpretation.',
        },
        {
          term: 'Recurring slope lineae',
          def: 'Dark, narrow streaks (0.5–5 m wide, up to hundreds of metres long) that appear and extend on steep Martian slopes during warm seasons and fade in colder periods. Initially interpreted as evidence for present-day briny water flows, more recent analysis favours dry granular flow or CO₂-driven processes. RSL remain an area of active research and debate regarding modern Mars water activity.',
        },
        {
          term: 'Perchlorate',
          def: 'A chlorine-oxygen salt (ClO₄⁻) discovered in Martian soil by the Phoenix lander (2008) and detected at multiple sites since. Perchlorates lower the freezing point of water, enabling brines stable at temperatures below −70 °C, which extends potential liquid water habitats. However, under Martian UV irradiation perchlorates generate reactive chlorine radicals that oxidise and destroy organic molecules — making them simultaneously enabling for liquid water and destructive to organic biosignatures.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four Phases of Mars Habitability Research',
      body: `Mars habitability science has evolved through four distinct research phases, each driven by new spacecraft data and technological capabilities. Together they trace our changing understanding of Mars from a geologically dead, dry world to a planet with a complex water history, active subsurface chemistry, and unresolved questions about past or present microbial life.`,
      cards: [
        {
          name: 'Ancient Mars — Water and Habitable Lakes',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Noachian Mars (4.1–3.7 Ga) hosted valley networks, lakes, and habitable lake environments. Curiosity found pH-neutral, low-salinity mudstone in Gale Crater (~3.5 Ga) with all CHNOPS elements. Perseverance targets Jezero delta sediments. This era represents the primary window for Martian life.',
          examples: 'Gale Crater mudstone: pH-neutral lake, ~3.5 Ga, CHNOPS chemistry confirmed by Curiosity SAM/APXS · Jezero Crater: preserved river delta with carbonate and olivine units, target of Perseverance sample collection for Mars Sample Return · Valley networks: >40,000 km mapped by MGS/THEMIS, indicating sustained Noachian fluvial activity',
        },
        {
          name: 'The ALH84001 Controversy',
          icon: Activity,
          color: BRAND.jade,
          desc: 'The 1996 McKay et al. claim that Martian meteorite ALH84001 contained biosignatures — carbonate globules, magnetite chains, PAH organics, putative nanofossils — galvanised astrobiology. Each line of evidence has since received an abiotic explanation; the consensus rejects a biological interpretation, but the controversy launched modern Mars exploration.',
          examples: 'Magnetite chains: morphologically similar to magnetotactic bacteria but reproducible by thermal decomposition of carbonate · Nanofossils: dimensions (~20–100 nm) are below the minimum physically viable cell size (~200–300 nm) · PAH organics: consistent with terrestrial contamination or abiotic interstellar/solar-system synthesis · Legacy: ALH84001 directly motivated NASA\'s Mars exploration programme and the founding of astrobiology as a formal discipline',
        },
        {
          name: 'Modern Mars — Subsurface Water Evidence',
          icon: Globe,
          color: BRAND.coral,
          desc: 'MARSIS radar detected a 20 km subglacial reflector ~1.5 km beneath the south polar cap (2018), interpreted as a perchlorate brine lake. Recurring slope lineae suggested seasonal brines but now favour dry granular flows. Methane spikes (~7 ppb) detected by Curiosity remain controversial. The deep subsurface is the leading present-day habitability target.',
          examples: 'MARSIS south polar bright reflector: 20 km wide, ~1.5 km depth, interpreted as perchlorate brine lake; alternative explanations (clays, CO₂ ice) debated · Curiosity methane: episodic spikes ~7 ppb vs ESA TGO upper limit ~0.05 ppb — discrepancy unresolved · Phoenix perchlorate discovery (2008): ClO₄⁻ at ~0.5 wt% in arctic soil, lowers brine freezing point to −70 °C',
        },
        {
          name: 'Mars Atmosphere and Habitability Constraints',
          icon: Thermometer,
          color: BRAND.gold,
          desc: 'Present Mars has a 6 mbar CO₂ atmosphere — 0.6% of Earth\'s — with a mean surface temperature of −63 °C. Loss of the global magnetosphere ~4.0 Ga allowed solar wind stripping (MAVEN measures ~100 g/s ongoing loss). UV flux at the surface is intense. Perchlorates oxidise organics. These factors make surface habitability effectively impossible today.',
          examples: 'MAVEN mission: directly measured ion escape rates confirming ongoing atmospheric loss of ~100 g/s · UV environment: Mars surface receives ~1,000× more UV-C than Earth\'s surface due to thin atmosphere and no ozone layer · Perchlorate oxidation: laboratory experiments show perchlorates under Martian UV destroy amino acids orders of magnitude faster than dry UV alone · Triple point of water: at 6 mbar, liquid water is thermodynamically unstable — surface water ice sublimes directly to vapour',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Mars Habitability Through Time: Noachian to Present',
      body: 'The habitability of Mars has been governed by the interplay of volcanic outgassing, water availability, atmospheric evolution, and magnetosphere loss — tracing a path from a warm wet world to a cold dry surface with a potentially habitable subsurface.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how Mars transitioned from a warm wet Noachian world through atmospheric collapse to present cold dry surface conditions, with subsurface habitability as the modern target',
        nodes: [
          {
            id: 'noachian',
            label: 'Noachian Warm/Wet Mars',
            description: 'From ~4.1–3.7 Ga: intense volcanism sustained a thicker CO₂/H₂O atmosphere, greenhouse warming allowed liquid water, valley networks and lakes formed, phyllosilicate (clay) minerals precipitated. Most favourable period for surface habitability.',
            color: BRAND.accent,
          },
          {
            id: 'valley-networks',
            label: 'Valley Networks and Lakes',
            description: 'Over 40,000 km of branching river valley systems carved into southern highlands. Gale Crater lake (~3.5 Ga) preserved pH-neutral mudstone with CHNOPS chemistry. Jezero Crater delta formed by sustained river input. These environments were demonstrably habitable.',
            color: BRAND.jade,
          },
          {
            id: 'climate-transition',
            label: 'Mars Climate Transition',
            description: 'Hesperian (~3.7–3.0 Ga): volcanic outgassing declined, surface dried, sulphate minerals replaced clays, episodic catastrophic floods replaced persistent rivers. Atmospheric pressure fell as CO₂ was sequestered in carbonates and escaped to space.',
            color: BRAND.gold,
          },
          {
            id: 'magnetosphere-loss',
            label: 'Loss of Magnetosphere',
            description: 'Mars lost its global dynamo magnetic field ~4.0–3.9 Ga, likely when the molten iron core solidified. Without a protective magnetosphere, solar wind sputtering stripped atmospheric ions. MAVEN measures ongoing loss of ~100 g/s. This loss drove the long-term transition from habitable to hostile surface conditions.',
            color: BRAND.ruby,
          },
          {
            id: 'cold-dry-surface',
            label: 'Present Cold/Dry Surface',
            description: 'Amazonian Mars (3.0 Ga–present): 6 mbar CO₂ atmosphere, mean −63 °C, liquid water thermodynamically unstable. Intense UV flux at surface. Perchlorate salts oxidise organics. Recurring slope lineae probably dry granular flows. Curiosity methane spikes unresolved. Surface is effectively uninhabitable.',
            color: BRAND.coral,
          },
          {
            id: 'subsurface-target',
            label: 'Subsurface Habitability Target',
            description: 'The deep subsurface is shielded from UV and cosmic rays, may contact perchlorate brines stable below −70 °C, and could be sustained by serpentinisation or radiolysis. MARSIS detected a candidate subglacial brine lake 1.5 km beneath the south polar cap. The subsurface is the leading target for extant Martian life.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'noachian',          to: 'valley-networks',   label: 'Sustained liquid water carved drainage systems' },
          { from: 'noachian',          to: 'climate-transition', label: 'Declining volcanism and water loss' },
          { from: 'climate-transition', to: 'magnetosphere-loss', label: 'Atmospheric stripping accelerated without field' },
          { from: 'magnetosphere-loss', to: 'cold-dry-surface',  label: 'Solar wind erosion over billions of years' },
          { from: 'cold-dry-surface',   to: 'subsurface-target', label: 'Brines retreat to depth, shielded from surface' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Noachian geological period on Mars is most notable for which combination of characteristics?',
          a: [
            'Extensive polar glaciation, absence of volcanism, and a dense nitrogen atmosphere similar to present-day Titan',
            'Widespread liquid water, valley network formation, phyllosilicate (clay) mineral deposition, and conditions considered most favourable for surface habitability — roughly 4.1–3.7 Ga',
            'Dominance of sulphate mineral deposition, catastrophic outflow channels, and the final phase of the global magnetic dynamo',
            'The Amazonian transition to cold dry conditions, loss of the magnetosphere, and establishment of the current 6 mbar CO₂ atmosphere',
          ],
          correct: 1,
          explain: 'The Noachian (~4.1–3.7 Ga) is defined by heavy impact bombardment and, critically for habitability, by sustained liquid water activity evidenced by global valley network systems spanning more than 40,000 km, by delta and alluvial fan deposits, and by phyllosilicate (clay) minerals that can only form through prolonged aqueous alteration of silicate rock. These clay minerals — detected from orbit by instruments including CRISM on MRO — require water-to-rock ratios and timescales inconsistent with brief impact-melt events. Answer A describes conditions not applicable to any Martian period; Mars never had a nitrogen-dominated atmosphere. Answer C better describes the Hesperian. Answer D conflates the Amazonian with the event of magnetosphere loss, which occurred near the end of the Noachian. The Noachian is the period that both surface rovers (Curiosity, Perseverance) are targeting for biosignature searches precisely because its environmental conditions — near-neutral pH, low salinity, available chemical energy, persistent liquid water — most closely resemble environments on Earth where life thrives.',
        },
        {
          q: 'What is the Martian meteorite ALH84001, and why did the 1996 McKay et al. claim generate intense scientific controversy?',
          a: [
            'ALH84001 is a basaltic shergottite launched from Mars by a recent volcanic eruption; McKay claimed it contained active spores that germinated in the laboratory, which was controversial because it implied extant Martian life',
            'ALH84001 is a ~4.5 Ga Martian rock ejected by impact ~17 Ma ago and found in Antarctica; McKay et al. claimed four lines of evidence for ancient Martian biosignatures — carbonate globules, magnetite chains, PAH organics, and nanofossils — but each feature was subsequently shown to have plausible abiotic explanations',
            'ALH84001 is a carbonaceous chondrite from the asteroid belt that contaminated Antarctic ice; the controversy arose because its organic molecules were misidentified as Martian in origin by mass spectrometry',
            'ALH84001 is a fragment of the Martian moon Phobos captured by Earth\'s gravity; McKay claimed its composition proved Mars had plate tectonics, which contradicted orbital observations of the Martian surface',
          ],
          correct: 1,
          explain: 'ALH84001 (Allan Hills 84001) is an orthopyroxenite — an ancient igneous rock crystallised ~4.5 Ga — confirmed as Martian by its trapped gas composition matching the Martian atmosphere as measured by Viking. Cosmic ray exposure dating indicates it was ejected from Mars ~17 Ma ago and landed in Antarctica ~13,000 years ago. McKay et al. (1996, Science) presented four lines of putative biosignature evidence. (1) Carbonate globules: formed at low temperatures (claimed <80 °C, required for life), but subsequent work showed they could form at high temperatures from impact or volcanic processes. (2) Magnetite crystals: structurally similar to those made by magnetotactic bacteria, but laboratory synthesis via thermal decomposition of carbonate reproduces them abiotically. (3) PAH organics: consistent with terrestrial contamination during 13,000 years in Antarctic ice or abiotic synthesis. (4) Nanometre-scale ovoid structures (~20–100 nm): proposed as nanofossils, but at those sizes there is insufficient volume to contain the minimum biochemical machinery for life (~200–300 nm minimum). The controversy was pivotal: it did not prove Martian life, but it galvanised NASA, ESA, and the broader scientific community to take Mars astrobiology seriously, leading directly to the current Mars Sample Return programme.',
        },
        {
          q: 'What was the most significant habitability-related finding from Curiosity rover\'s analysis of sediments at Gale Crater?',
          a: [
            'Curiosity detected active methane-producing microorganisms in surface soil samples using its Sample Analysis at Mars (SAM) instrument, providing direct evidence for extant Martian life',
            'Curiosity found evidence of an ancient lake environment with pH-neutral chemistry, low salinity, and all the chemical elements needed to support life (CHNOPS) approximately 3.5 billion years ago',
            'Curiosity discovered that Gale Crater sediments contain fossilised microbial mats similar to stromatolites found in Archean rocks on Earth, preserved in iron-rich mudstone',
            'Curiosity measured a modern groundwater table less than 10 metres below the crater floor, demonstrating that liquid water is currently accessible at shallow depths in equatorial Mars',
          ],
          correct: 1,
          explain: 'Curiosity arrived at Gale Crater in August 2012 and drilled into fine-grained mudstone (the "Sheepbed" mudstone unit) at the base of the sedimentary sequence in 2013. APXS, ChemCam, and SAM instrument analysis revealed that these sediments had been deposited in a lake or fluvial environment ~3.5 billion years ago with a remarkably Earth-like geochemistry: pH near neutral to slightly alkaline (approximately 7–8), low salinity, moderate oxidation state, and all six elements essential for known life — carbon, hydrogen, nitrogen, oxygen, phosphorus, and sulfur (CHNOPS). The iron mineralogy (mix of oxidised and reduced iron phases) indicated chemical energy sources that chemolithotrophic microorganisms could have exploited. This result established Gale Crater as the first Martian site definitively confirmed to have been habitable. Answer A is incorrect: Curiosity detected methane spikes but not living organisms; it has no capability to directly detect life. Answer C is incorrect: no macroscopic biosignatures have been found. Answer D is incorrect: Curiosity found no evidence of a modern near-surface water table.',
        },
        {
          q: 'What did the MARSIS radar instrument on ESA\'s Mars Express detect beneath the south polar cap of Mars, and why is the interpretation uncertain?',
          a: [
            'MARSIS detected a large deposit of dry ice (CO₂) beneath the water-ice polar cap, confirming that Mars once had a much denser CO₂ atmosphere that was frozen at the poles',
            'MARSIS detected a 20 km-wide radar-bright reflector ~1.5 km beneath the south polar layered deposits, interpreted as a subglacial liquid water lake — likely a perchlorate brine — but alternative explanations including frozen CO₂, clay minerals, or conductive basal sediments remain viable',
            'MARSIS detected a network of subsurface lava tubes beneath the south polar cap, analogous to those found in volcanic regions on Earth, which could provide thermally stable habitats insulated from the cold surface',
            'MARSIS detected an ancient impact basin filled with compacted sediment beneath the polar ice, providing evidence that the south polar region was ice-free and potentially habitable during the Hesperian period',
          ],
          correct: 1,
          explain: 'In 2018, Orosei et al. (Science) reported that MARSIS (Mars Advanced Radar for Subsurface and Ionosphere Sounding) detected an anomalously bright radar reflection at a depth of approximately 1.5 km beneath the south polar layered deposits (SPLD), with a lateral extent of about 20 km. The brightness of the basal reflector — exceeding that of the overlying ice — is consistent with liquid water, because liquid water is a strong radar reflector. The liquid water hypothesis requires the brine to be kept liquid at approximately −68 °C or below, which perchlorate salts can achieve at the concentrations detected elsewhere on Mars. However, the interpretation is contested: subsequent studies have pointed out that clay minerals (smectites) and certain CO₂ ice configurations can also produce bright basal reflectors without requiring liquid water. Furthermore, thermal models suggest that current geothermal heat flow beneath the SPLD is likely insufficient to maintain liquid water at that depth without an additional heat source. Despite this uncertainty, the MARSIS result remains the most direct evidence for contemporary liquid water on Mars and motivates continued investigation of the polar subsurface as a habitability target.',
        },
        {
          q: 'Perchlorate salts (ClO₄⁻) were discovered in Martian soil by the Phoenix lander in 2008 and have since been detected at multiple sites. Why do perchlorates both help and hinder Mars habitability assessment?',
          a: [
            'Perchlorates help habitability because they are a carbon source for chemolithotrophic life; they hinder it because they form thick crusts that prevent rovers from drilling into potentially habitable subsurface layers',
            'Perchlorates help by lowering the freezing point of water, potentially enabling briny liquid water in the shallow subsurface at temperatures down to −70 °C; they hinder by generating highly reactive chlorine radicals under Martian UV irradiation that rapidly oxidise and destroy organic molecules',
            'Perchlorates help by acting as a UV shield that protects subsurface organics; they hinder because their high concentration in surface soil prevents plant growth, ruling out any possibility of terraforming Mars for human use',
            'Perchlorates help by releasing oxygen when heated, which could sustain aerobic life in subsurface pockets; they hinder because they attract water vapour from the atmosphere, creating highly saline conditions toxic to most known microorganisms',
          ],
          correct: 1,
          explain: 'Perchlorates (ClO₄⁻) were detected at ~0.4–0.6 weight percent in the Martian arctic soil by Phoenix\'s Wet Chemistry Laboratory in 2008 — a concentration much higher than in most Earth soils (where perchlorates are typically measured in parts per billion). Their astrobiological significance is genuinely two-sided. On the enabling side: dissolved perchlorate salts are chaotropic and strongly depress the freezing point of water; magnesium perchlorate brines, for example, remain liquid down to approximately −68 °C at the eutectic, and calcium perchlorate eutectic is near −75 °C. This means perchlorate-rich brines could exist as thin films or pooled water in the shallow subsurface at temperatures routinely reached on Mars, extending the potential liquid water habitat substantially beyond pure water\'s 0 °C limit. On the destructive side: laboratory experiments (e.g. Wadsworth & Cockell, 2017) showed that perchlorates irradiated by UV light at Martian intensities produce reactive chlorine species (Cl•, ClO•) that destroy amino acids and other organic molecules at rates orders of magnitude faster than UV alone. This means that surface organics — whether biological or abiotic — are rapidly destroyed in the presence of perchlorate under Martian surface conditions, complicating the detection of biosignatures and reducing habitability at the surface. The subsurface, shielded from UV, avoids the destructive aspect while retaining the enabling effect.',
        },
      ],
    },
  ],
}

export default marsHabitability
