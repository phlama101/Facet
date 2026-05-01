import { Clock, Layers, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const radiometricDating: Lesson = {
  id: 'geol-201-2-1-3',
  title: 'Radiometric Dating Methods',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '22 min',
  xpReward: 250,
  description: "Every radioactive atom in every rock is ticking at a rate set by quantum mechanics — a rate no geological process can alter. Radiometric dating reads those clocks. It transformed the geologic timescale from a sequence of events into a history with numbers.",
  sources: [
    { org: 'USGS',     title: 'Geochronology — Science for a Changing World',    url: 'https://www.usgs.gov/programs/science-and-decisions/geochronology' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 7 (CC-BY 4.0)',    url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'GSA',      title: 'Geologic Time Scale 2020',                         url: 'https://www.geosociety.org/GSA/Education_Careers/Geologic_Time_Scale/GSA/timescale/home.aspx' },
    { org: 'ICS',      title: 'International Chronostratigraphic Chart v2023',    url: 'https://stratigraphy.org/chart' },
    { org: 'AGI',      title: 'Glossary of Geology, 5th ed.',                     url: 'https://www.americangeosciences.org/pubs/glossary' },
  ],
  sections: [
    {
      type: 'intro',
      title: "Nature's atomic clocks",
      body: `In 1905, Ernest Rutherford stood before an audience at Harvard and proposed something remarkable: the radioactive decay of uranium into lead could be used as a geological clock. The decay rate was known from laboratory measurement; the ratio of uranium to lead in a rock could be measured; the age therefore followed from simple arithmetic. In 1911, Arthur Holmes applied this idea to real rocks and published the first radiometrically calibrated geologic timescale. The oldest rock he could analyse — a Devonian sample — yielded ~370 million years, more than three times older than Lord Kelvin's maximum estimate for the entire age of Earth.

The principle is elegant in its simplicity. A radioactive parent isotope decays into a stable daughter isotope at a rate that is constant, independent of temperature, pressure, or chemistry — a consequence of quantum mechanics that no geological process can override. When a mineral crystallises from magma or grows during metamorphism, it incorporates a known quantity of parent isotope and, in many cases, essentially no daughter. After crystallisation, the mineral is a closed system: parent atoms decay and accumulate as daughter atoms at a fixed rate. Measuring the current ratio of daughter to parent, together with the known decay rate, gives the time elapsed since closure — the age of the rock.

The four major long-lived systems — potassium-argon, rubidium-strontium, samarium-neodymium, and uranium-lead — cover the full span of geological time from thousands to billions of years. Radiocarbon extends the method to the recent past. This lesson covers the physics of decay, the main isotope systems and how they are applied, and the graphical methods — isochrons and concordia diagrams — that allow geochronologists to detect and correct for open-system behaviour.`,
      keyTerms: [
        {
          term: 'Radioactive decay',
          def: "The spontaneous transformation of an unstable atomic nucleus (the parent isotope) into a different nucleus (the daughter isotope) by emission of particles or radiation. The decay rate is described by the decay constant λ — the probability of decay per unit time per atom — which is constant and characteristic of each isotope. The rate cannot be changed by any physical or chemical condition accessible in geology.",
        },
        {
          term: 'Half-life (t½)',
          def: "The time required for exactly half of a given quantity of a radioactive isotope to decay. Related to the decay constant by t½ = ln(2)/λ ≈ 0.693/λ. After n half-lives, the fraction of parent remaining is (½)ⁿ. Half-lives relevant to geology range from 5,730 years (¹⁴C) to 48.8 billion years (⁸⁷Rb), spanning twelve orders of magnitude.",
        },
        {
          term: 'Closed system',
          def: "A rock or mineral that has not gained or lost parent or daughter isotopes since the time being dated (other than by radioactive decay). Closed-system behaviour is the fundamental assumption of all radiometric dating. If the system was open — if parent or daughter was added or removed by metamorphism, fluid flow, or weathering — the calculated age will not reflect the true crystallisation age.",
        },
        {
          term: 'Isochron',
          def: "A straight line on a plot of daughter/reference isotope ratio vs. parent/reference isotope ratio, defined by co-genetic minerals or rocks that all formed at the same time from a common source. The slope of the isochron gives the age; the y-intercept gives the initial daughter isotope ratio. The isochron method solves the problem of unknown initial daughter abundances and simultaneously tests the closed-system assumption.",
        },
        {
          term: 'Concordia',
          def: "A curve on a plot of ²⁰⁷Pb/²³⁵U vs ²⁰⁶Pb/²³⁸U representing the locus of values expected for a closed-system uranium-bearing mineral at any given age. A mineral that has remained closed plots on the concordia; one that has lost lead plots below it (discordant). The U-Pb system's two independent decay chains allow detection and correction of open-system behaviour through the concordia diagram.",
        },
        {
          term: 'Closure temperature',
          def: "The temperature below which a mineral retains its daughter isotopes and effectively becomes a closed system for a given decay system. Above the closure temperature, daughter isotopes diffuse out of the mineral lattice and are lost. Different minerals and systems have different closure temperatures: zircon U-Pb ~900°C; hornblende K-Ar ~530°C; biotite K-Ar ~300°C; apatite fission track ~110°C. Cooling histories can be reconstructed by combining multiple systems with different closure temperatures.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'The physics of radioactive decay and the age equation',
      body: `**Decay as a constant-rate process.** Radioactive nuclei are quantum mechanically unstable — the nucleus has a fixed probability of spontaneously rearranging into a lower-energy configuration by emitting an alpha particle (²He nucleus), a beta particle (electron or positron), or by capturing an orbital electron. This probability per unit time is the **decay constant** λ. Because quantum mechanics governs individual nuclei independently, the rate at which a large population of parent atoms decays is:

dN/dt = −λN

where N is the number of parent atoms at time t. This is a first-order differential equation with the solution:

**N(t) = N₀ · e^(−λt)**

where N₀ is the initial number of parent atoms. The **half-life** is the time for N to halve: setting N = N₀/2 gives t½ = ln(2)/λ. After n half-lives, only (½)ⁿ of the original parent remains. After 10 half-lives, only ~0.1% remains — below this, measurement becomes difficult. After 1/100 of a half-life, the accumulated daughter may be too small to measure above analytical noise. These constraints define the practical dating range of each system.

**The age equation.** The number of daughter atoms D at any time is:

D = D₀ + (N₀ − N) = D₀ + N(e^(λt) − 1)

where D₀ is the initial number of daughter atoms present when the clock started (at mineral crystallisation or metamorphic recrystallisation). Rearranging for t:

**t = (1/λ) · ln(1 + (D − D₀)/P)**

where P = N = the current number of parent atoms. This is the fundamental equation of geochronology. The challenge in applying it is determining D₀ — the initial daughter content — which cannot be directly measured in an ancient rock. Different dating systems handle this problem in different ways.

**The four major long-lived systems.** The practical utility of a radiometric system depends on: (1) the half-life matching the time range of interest; (2) the parent isotope being present in geologically common minerals at measurable concentrations; (3) the initial daughter being zero or independently estimable; (4) the system having a high closure temperature (so it survives geological heating without resetting).

**Potassium-Argon (K-Ar) and Argon-Argon (Ar-Ar).** ⁴⁰K decays to ⁴⁰Ar (11.2%) and ⁴⁰Ca (88.8%) with a combined effective half-life of ~1,250 Ma. Argon is a noble gas — it does not bond chemically and escapes completely from molten magma; when lava solidifies, the newly crystallised minerals begin with essentially zero ⁴⁰Ar (D₀ = 0), which eliminates the initial-daughter problem. The clock starts at solidification. Potassium is abundant in common minerals (feldspar, biotite, hornblende, muscovite), so K-Ar is widely applicable to volcanic and plutonic rocks. The **Ar-Ar method** is a refinement: the sample is irradiated with fast neutrons to convert ³⁹K → ³⁹Ar; the ⁴⁰Ar/³⁹Ar ratio in the gas released by step-heating then gives the age without needing a separate K measurement, and the step-heating profile reveals whether the system was disturbed.

**Rubidium-Strontium (Rb-Sr).** ⁸⁷Rb decays to ⁸⁷Sr with a half-life of ~48,800 Ma — one of the longest half-lives used in geochronology. Rb substitutes for K in feldspars and micas, so these minerals can have high Rb/Sr ratios. Unlike Ar, the initial ⁸⁷Sr is not zero — rocks contain pre-existing Sr from the mantle/crust. The **isochron method** solves this: if multiple co-genetic minerals (or whole rocks) formed at the same time from the same magma, they all had the same initial ⁸⁷Sr/⁸⁶Sr ratio but different Rb/Sr ratios. On a plot of ⁸⁷Sr/⁸⁶Sr vs ⁸⁷Rb/⁸⁶Sr, the data define a horizontal line at t = 0 (all same initial ratio). As time passes, high-Rb/Sr minerals generate more ⁸⁷Sr, rotating the data array into a line with positive slope. The slope of this **isochron** equals (e^(λt) − 1), from which t is calculated; the y-intercept gives the initial ⁸⁷Sr/⁸⁶Sr.

**Samarium-Neodymium (Sm-Nd).** ¹⁴⁷Sm decays to ¹⁴³Nd with a half-life of ~106,000 Ma — extremely long, making this system particularly useful for very old rocks. Sm and Nd are both rare earth elements that strongly partition into garnet and clinopyroxene relative to other minerals, generating large Sm/Nd variations useful for isochrons. The Sm-Nd system is more resistant to resetting than Rb-Sr because Nd diffuses more slowly, making it valuable for dating Archean metamorphic events. It also records information about crustal vs. mantle source regions (mantle and crust have distinct Nd isotope evolutions) that is used for provenance and crustal growth studies.

**Uranium-Lead (U-Pb).** The U-Pb system is considered the gold standard of geochronology. ²³⁵U decays to ²⁰⁷Pb (t½ = 703.8 Ma) and ²³⁸U decays to ²⁰⁶Pb (t½ = 4,468 Ma) — two independent decay chains running simultaneously. The mineral **zircon** (ZrSiO₄) is almost ideal for U-Pb dating: it strongly incorporates U (up to thousands of ppm) but excludes Pb at crystallisation (D₀ ≈ 0); it has a very high closure temperature (~900 °C) so it survives most metamorphic events; it is extremely resistant to physical and chemical weathering; and it is present as an accessory mineral in most igneous and many metamorphic rocks. Having two independent isotope clocks in the same mineral allows the **concordia diagram** to detect and characterise open-system behaviour — a capability no single-clock system can match.

**Radiocarbon (¹⁴C).** ¹⁴C is produced continuously in the upper atmosphere when cosmic ray neutrons strike ¹⁴N: ¹⁴N + n → ¹⁴C + p. The ¹⁴C mixes into the global carbon cycle and enters all living organisms through photosynthesis and the food chain. While an organism is alive, its ¹⁴C/¹²C ratio is in equilibrium with the atmosphere. At death, ¹⁴C intake stops and the existing ¹⁴C decays (t½ = 5,730 yr). Measuring the residual ¹⁴C/¹²C ratio gives the time since death. The system is limited to ~50,000 years (beyond which too little ¹⁴C remains), but within that range it can date organic material — wood, bone, shell, charcoal, peat — with precision of ±decades for recent samples. A critical complication: atmospheric ¹⁴C/¹²C has not been constant (solar activity, cosmic ray flux variations, and anthropogenic ¹²C additions from fossil fuel burning all affect it). Calibration against tree-ring chronologies (the IntCal curves) corrects for these variations and converts radiocarbon ages to calendar years.`,
      cards: [
        {
          name: 'The Decay Clock',
          icon: Clock,
          color: BRAND.amethyst,
          desc: "Decay constant λ = probability of decay per unit time; set by quantum mechanics, unchanged by any geological condition. N(t) = N₀e^(−λt). Half-life t½ = ln(2)/λ. After n half-lives: (½)ⁿ of parent remains (1 half-life → 50%; 2 → 25%; 10 → ~0.1%). Age equation: t = (1/λ) × ln(1 + D/P) when D₀ = 0. Practical range: ~0.01–10 half-lives. K-Ar t½ = 1,250 Ma · Rb-Sr t½ = 48,800 Ma · U-Pb (²³⁸U) t½ = 4,468 Ma · ¹⁴C t½ = 5,730 yr.",
          examples: "³²Si: t½ = ~150 yr — useful for decadal oceanographic tracing · ²¹⁰Pb: t½ = 22 yr — sediment accumulation rates · ¹⁴C: t½ = 5,730 yr — archaeology, Holocene geology · ²³⁸U: t½ = 4,468 Ma — planetary geochronology",
        },
        {
          name: 'Major Dating Systems',
          icon: Layers,
          color: BRAND.gold,
          desc: "K-Ar/Ar-Ar: ⁴⁰K→⁴⁰Ar; Ar escapes melt → D₀ = 0; K in feldspar, mica, hornblende; range 10 ka–4.5 Ga; closure T: biotite ~300°C, hornblende ~530°C. Rb-Sr: ⁸⁷Rb→⁸⁷Sr; requires isochron (D₀ ≠ 0); K-bearing minerals; range 10 Ma–4.5 Ga. Sm-Nd: ¹⁴⁷Sm→¹⁴³Nd; garnet, clinopyroxene; resistant to resetting; Archean metamorphics. U-Pb: ²³⁵U→²⁰⁷Pb + ²³⁸U→²⁰⁶Pb; zircon; D₀ ≈ 0; concordia allows Pb-loss correction; gold standard. ¹⁴C: cosmic-ray produced; organic material; 0–50 ka; requires IntCal calibration.",
          examples: "Ar-Ar step-heating: K-T boundary tektites dated to 65.5 Ma · Rb-Sr isochron: Lewisian Gneiss ~2.7 Ga · U-Pb zircon: Jack Hills grains 4,400 Ma · ¹⁴C: Ötzi the Iceman ~5,300 BP",
        },
        {
          name: 'Isochrons and Concordia',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Isochron (Rb-Sr): plot ⁸⁷Sr/⁸⁶Sr vs ⁸⁷Rb/⁸⁶Sr for co-genetic minerals; slope = e^(λt) − 1 → gives age; y-intercept = initial ⁸⁷Sr/⁸⁶Sr; straight line validates closed system; scatter indicates open system. Concordia (U-Pb): curve of concordant ²⁰⁶Pb/²³⁸U vs ²⁰⁷Pb/²³⁵U values at each age; zircon on curve = closed; below curve = Pb lost (discordant); discordia chord upper intercept = crystallisation age; lower intercept = Pb-loss age.",
          examples: "Morton Gneiss (MN): Rb-Sr isochron ~3.5 Ga · Acasta Gneiss (Canada): U-Pb concordia ~4.03 Ga (oldest known intact crustal rock) · Discordant Apollo 14 zircons: upper intercept ~4.2 Ga",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Applying radiometric methods: choosing and interpreting',
      body: `**The isochron in practice.** The power of the isochron method is that it simultaneously solves for the age and the initial isotope ratio, while providing an internal test of the closed-system assumption. Consider a suite of co-genetic minerals from a granite — say, K-feldspar, plagioclase, biotite, and whole-rock — each with a different Rb/Sr ratio. At the moment of crystallisation, all shared the same magmatic ⁸⁷Sr/⁸⁶Sr ratio (because they came from the same melt). On a plot of ⁸⁷Sr/⁸⁶Sr vs ⁸⁷Rb/⁸⁶Sr, they initially define a horizontal line. As time passes, biotite (high Rb/Sr) generates the most ⁸⁷Sr; K-feldspar generates intermediate amounts; plagioclase (very low Rb/Sr) generates almost none. The horizontal array rotates counterclockwise into a line with positive slope. Today, the slope of that line equals (e^(λt) − 1), from which t follows directly.

If one of the minerals re-equilibrated its isotopes during a later thermal event — say, a metamorphic overprint — it would plot off the line defined by the others. The scatter around the isochron is therefore diagnostic: a good isochron with low scatter confirms closed-system behaviour and a precise age; scatter indicates open-system disturbance and warns the geochronologist that the age is compromised. This self-diagnostic feature is one of the key advantages of isochron methods over simpler two-point calculations.

**The concordia diagram in practice.** The U-Pb concordia is constructed by calculating, for each age t, the values of ²⁰⁶Pb/²³⁸U and ²⁰⁷Pb/²³⁵U expected if the system has remained closed. These are:

²⁰⁶Pb/²³⁸U = e^(λ₂₃₈·t) − 1
²⁰⁷Pb/²³⁵U = e^(λ₂₃₅·t) − 1

Plotting these against each other for all ages produces a curved line — the concordia curve — with age marked at regular intervals. A zircon that crystallised at 2,500 Ma and has remained perfectly closed plots at the 2,500 Ma point on the concordia curve. If lead was lost at 500 Ma — during a metamorphic event, for example — the two U-Pb clocks are reset to different degrees (because ²³⁵U and ²³⁸U have different decay rates), and the zircon plots below the concordia at a position that reflects both the crystallisation age and the age of the disturbance.

When multiple zircons from the same sample have lost different amounts of lead, they define a straight chord — the discordia line — cutting across the concordia. The upper intersection of the discordia with the concordia gives the crystallisation age; the lower intersection gives the age of the lead-loss event. This ability to recover two ages from discordant data, rather than simply declaring the analysis failed, makes the U-Pb system uniquely powerful.

**Selecting the right method.** The practical question geochronologists face is: given a particular sample and a particular geological question, which dating system should be used?

For **recent volcanic rocks** (thousands to a few million years old), K-Ar or Ar-Ar is standard. The zero-argon starting condition makes the mathematics straightforward; feldspars and mafic minerals are common in volcanics and provide measurable ⁴⁰Ar accumulations. For events younger than ~50,000 years with associated organic material, ¹⁴C is far more precise than K-Ar.

For **ancient igneous and metamorphic rocks**, U-Pb zircon is the preferred method when zircon is present (it almost always is in felsic igneous rocks). The high closure temperature means it survives most metamorphic events as a record of original crystallisation; metamorphic overgrowth rims on older cores can be dated separately using high-spatial-resolution techniques (SHRIMP, LA-ICP-MS), giving both the protolith age and the metamorphic age from a single grain.

For **metamorphic events** where zircon may not have recrystallised, Sm-Nd garnet-whole rock isochrons are valuable — garnet grows during metamorphism and has a high Sm/Nd ratio; the Sm-Nd closure temperature is high enough to record peak metamorphic conditions rather than cooling. Ar-Ar dates on white mica and hornblende record cooling through progressively lower closure temperatures and can be used to reconstruct the exhumation history of a metamorphic terrane.

For **sedimentary rocks**, direct radiometric dating is difficult because the grains were eroded from older rocks and the depositional age is not the same as the grain age. However, **detrital zircon U-Pb** dating is powerful for provenance — the age distributions of detrital zircons tell you where the sediment came from. **Glauconite K-Ar** dating can give approximate depositional ages in marine sediments where glauconite grew authigenically on the seafloor. Re-Os dating of organic-rich shales is a newer approach that can directly date deposition.

**Sources of uncertainty.** Every radiometric date has an associated uncertainty. Major contributors include: analytical measurement precision of isotope ratios (typically ±0.1–0.5% for modern mass spectrometry); uncertainty in the decay constants themselves (the ⁸⁷Rb half-life is known to ~3%, limiting Rb-Sr precision); the accuracy of the initial isotope ratio estimate (isochron methods minimise this but do not eliminate it); and geological factors such as unrecognised open-system behaviour. A well-run U-Pb zircon analysis on a pristine Archean sample can achieve precisions of ±0.1% or better; a K-Ar date on a weathered volcanic sample may be uncertain to ±5% or more. Modern geochronology reports ages with two-sigma uncertainties and documents all analytical assumptions.`,
      cards: [
        {
          name: 'Method Selection Guide',
          icon: Clock,
          color: BRAND.jade,
          desc: "Recent volcanic (0–50 ka + organic): ¹⁴C. Recent volcanic (50 ka–4.5 Ga): K-Ar/Ar-Ar. Igneous/metamorphic, any age, zircon present: U-Pb zircon (best precision, open-system correction). Metamorphic events, garnet present: Sm-Nd garnet-whole rock. Cooling/exhumation history: Ar-Ar step-heating (multiple closure temperatures). Ancient crust/mantle: Sm-Nd or Lu-Hf. Sediment provenance: detrital zircon U-Pb. Marine sediment age: glauconite K-Ar or Re-Os black shale.",
          examples: "Deccan Traps eruption age: Ar-Ar on basalt flows → 66.0 ± 0.1 Ma · Himalayan thrust belt: U-Pb zircon + Ar-Ar mica combined · Crawford Bay Archean: Sm-Nd garnet isochron ~2.7 Ga",
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A radioactive isotope has a half-life of 100 million years. A sample originally contained 800 atoms of the parent isotope. After 300 million years (3 half-lives), how many parent atoms remain, and what fraction of the original amount is that?",
          a: [
            "400 atoms remain; one half-life has elapsed so half the original remains",
            "100 atoms remain; (½)³ = 1/8 of 800 = 100; after 3 half-lives, 1/8 of the original parent remains",
            "200 atoms remain; 800 − 300 = 500 atoms decay, leaving 300, rounded to 200",
            "0 atoms remain; after 3 half-lives the parent is completely consumed",
          ],
          correct: 1,
          explain: "After each half-life, exactly half the remaining parent atoms decay. After 1 half-life: 800 × ½ = 400. After 2 half-lives: 400 × ½ = 200. After 3 half-lives: 200 × ½ = 100. The general formula is N = N₀ × (½)ⁿ where n is the number of half-lives: 800 × (½)³ = 800 × (1/8) = 100. The fraction remaining is (½)³ = 1/8. Option A applies only one half-life. Option C applies subtraction rather than multiplication — decay is multiplicative, not subtractive. Option D is incorrect — even after 10 half-lives, ~0.1% of the original parent remains; complete consumption is never achieved in finite time.",
        },
        {
          q: "Why is the K-Ar system well-suited for dating volcanic rocks, and what fundamental assumption must hold for the resulting age to be valid?",
          a: [
            "K-Ar is well-suited because potassium is abundant in volcanic rocks and the half-life is long enough to measure ancient lavas; the key assumption is that K concentrations have not changed since eruption",
            "K-Ar is well-suited because argon is a noble gas that escapes completely from molten magma; when lava solidifies, the mineral begins with zero radiogenic ⁴⁰Ar (D₀ = 0), eliminating the initial-daughter problem; the assumption required is that the mineral has remained a closed system since solidification — no argon has been gained from the atmosphere or lost by subsequent heating",
            "K-Ar is well-suited because ⁴⁰K has a half-life of exactly 1 billion years, making it easy to calculate ages; the key assumption is that the K/Ar ratio has been measured accurately",
            "K-Ar is well-suited because volcanic rocks cool quickly, freezing in a precise record; the key assumption is that the volcano erupted only once so there is no mixing of magmas",
          ],
          correct: 1,
          explain: "The zero-argon starting condition is what makes K-Ar uniquely powerful for volcanic rocks. Argon (a noble gas) has no chemical affinity for any mineral — it does not substitute for any element in a crystal lattice. In a silicate melt, any ⁴⁰Ar produced by prior decay diffuses freely and escapes to the atmosphere. When the melt solidifies into crystals, argon is physically trapped in the mineral lattice but the initial trapped ⁴⁰Ar from radioactive decay is essentially zero. All subsequent ⁴⁰Ar accumulates by in-situ decay of ⁴⁰K after crystallisation. This means D₀ = 0 and the age equation simplifies to t = (1/λ) × ln(1 + ⁴⁰Ar/⁴⁰K). The critical closed-system assumption is that no ⁴⁰Ar has been gained (atmospheric contamination) or lost (by reheating above the closure temperature, ~300°C for biotite) since solidification. Option A identifies an important feature (K abundance) but misidentifies the key assumption. Option C has the half-life wrong (⁴⁰K effective half-life is ~1,250 Ma, not 1,000 Ma, though this is a minor distinction) and the key assumption described is too trivial. Option D describes irrelevant magmatic history.",
        },
        {
          q: "A Rb-Sr isochron plot for a granite shows four data points from co-genetic minerals, but rather than defining a straight line, the points scatter randomly. What geological interpretation should the geochronologist consider?",
          a: [
            "The scatter indicates the granite is too young to produce measurable ⁸⁷Sr — more time is needed before an isochron will develop",
            "The scatter most likely indicates open-system behaviour — one or more minerals gained or lost Rb or Sr after crystallisation (during metamorphism, hydrothermal alteration, or weathering), disturbing the systematic relationship between Rb/Sr ratio and ⁸⁷Sr/⁸⁶Sr ratio; the system cannot be reliably dated without additional investigation",
            "The scatter is normal and expected — isochron plots always show scatter; the age is obtained from the average of the four individual two-point calculations",
            "The scatter indicates the minerals are not co-genetic — they crystallised from different magmas at different times and should not be plotted together",
          ],
          correct: 1,
          explain: "The isochron method relies on co-genetic minerals all having started with the same initial ⁸⁷Sr/⁸⁶Sr ratio and since remaining closed systems. If this is true, they define a straight line whose slope increases with age. Random scatter — points off the line — means at least one mineral has deviated from the expected closed-system trajectory, most likely because it gained or lost Rb or Sr during some post-crystallisation event. Common causes include: hydrothermal fluid circulation (which readily mobilises Rb and Sr); metamorphic recrystallisation (which can reset individual minerals to different extents); or weathering and supergene alteration near the surface. The geochronologist should examine the petrography for evidence of alteration, consider whether any single mineral seems anomalous, and potentially add more analyses or use a different dating system. A granite's age is not too young to yield Rb-Sr data (A) unless it is younger than a few million years with low Rb/Sr ratios. Averaging scattered points (C) would give a meaningless result. Non-co-genetic minerals (D) is possible but less likely if the sample was correctly selected from a single igneous body.",
        },
        {
          q: "A zircon from an Archean gneiss plots below the concordia curve on a U-Pb concordia diagram. What does 'below the concordia' mean physically, and how can this still yield useful geological information?",
          a: [
            "Below the concordia means the zircon incorporated excess lead at crystallisation, making it appear older than it is; this ruins the analysis",
            "Below the concordia (discordant) means the zircon has lost some radiogenic lead after crystallisation — the two U-Pb clocks have been partially reset to different degrees; if multiple discordant zircons define a straight discordia chord, the upper intersection of that chord with the concordia gives the original crystallisation age, and the lower intersection gives the approximate age of the lead-loss event",
            "Below the concordia means the measured U/Pb ratio is incorrect due to laboratory contamination; the analysis must be repeated",
            "Below the concordia means the mineral is not actually zircon — only true zircon plots on the concordia; minerals below are impure and cannot be dated",
          ],
          correct: 1,
          explain: "Discordance — plotting below the concordia — occurs when a zircon has lost radiogenic Pb after crystallisation. Because ²³⁵U and ²³⁸U have different decay constants, Pb loss disturbs the two isotope ratios by different amounts, moving the point from its original concordant position down and to the left along a chord toward the origin. The key insight is that multiple zircons from the same sample that experienced the same Pb-loss event (e.g., a metamorphic episode) each lose different proportions of their Pb depending on their individual Pb/U ratios, so they scatter along the same discordia chord. The upper intercept of this chord with the concordia recovers the crystallisation age; the lower intercept constrains the Pb-loss age. This ability to extract two geologically meaningful ages from what appears to be compromised data is one of the main reasons U-Pb zircon is the gold standard of geochronology. Excess Pb (A) would plot above the concordia, not below. Laboratory contamination (C) would affect all analyses in a run, not individual zircons in a systematic pattern. The concordia applies to any U-bearing mineral (D), not just zircon, though zircon is the most commonly used.",
        },
        {
          q: "A researcher wants to determine the crystallisation age of a 3-billion-year-old granite. They consider three options: ¹⁴C dating, K-Ar dating, and U-Pb zircon dating. Which is most appropriate and why are the others unsuitable?",
          a: [
            "K-Ar is best because it has been used successfully on billions-of-year-old rocks and potassium is abundant in granite; ¹⁴C cannot be used on inorganic material; U-Pb is too complicated",
            "U-Pb zircon is most appropriate: zircon is common in granites, has a closure temperature of ~900°C so it survives most post-crystallisation events, D₀ ≈ 0 (zircon excludes Pb at crystallisation), and the concordia allows detection and correction of later disturbances; ¹⁴C is completely unsuitable (effective range <50,000 years — a 3 Ga granite contains essentially no surviving ¹⁴C); K-Ar may be reset by any metamorphic or hydrothermal event above the closure temperature (~300°C for biotite), and 3 Ga of geological history almost certainly includes such events",
            "¹⁴C is best because it directly dates carbon-bearing minerals in the granite; the other two methods are indirect and less precise for ancient rocks",
            "All three methods are equally valid for a 3 Ga granite; the choice depends only on which isotopes happen to be present in higher concentrations",
          ],
          correct: 1,
          explain: "U-Pb zircon is the clear choice. ¹⁴C (A, C) is completely inapplicable: its half-life is 5,730 years, so after ~50,000 years essentially no ¹⁴C remains above detection limits; a 3-billion-year-old granite contains effectively zero ¹⁴C; granite also contains no organic carbon. K-Ar (A) can technically work on ancient rocks but has serious limitations for a 3 Ga granite: over 3 billion years, any episode of metamorphism, plutonic intrusion, or hydrothermal activity that raised biotite or feldspar above their K-Ar closure temperatures (300–530°C) would partially or fully reset the clock; K-Ar records cooling through the closure temperature, not crystallisation; a 3 Ga granite has had ample opportunity for such resetting. U-Pb zircon addresses both problems: zircon's closure temperature (~900°C) is far above any post-crystallisation event short of melting; multiple analyses can be plotted on a concordia to detect and account for any Pb loss; the precision achievable with modern LA-ICP-MS or SHRIMP analysis (±0.1–0.5%) is far better than K-Ar for ancient samples. The methods are emphatically not equally valid (D).",
        },
      ],
    },
  ],
}

export default radiometricDating
