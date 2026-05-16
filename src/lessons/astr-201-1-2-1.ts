import { Wind, Globe, Activity, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const atmosphericOriginEvolution: Lesson = {
  id: 'astr-201-1-2-1',
  title: 'Atmospheric Origin and Evolution',
  track: 'ast',
  trackName: 'Planetary Geology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'How do planetary atmospheres form, persist, and vanish? From primordial nebular capture to volcanic outgassing and the slow stripping of Mars by the solar wind — the physics and history of atmospheric origin and escape.',
  sources: [
    { org: 'NASA MAVEN', title: 'MAVEN Mission — Mars Atmosphere and Volatile EvolutioN',                url: 'https://lasp.colorado.edu/maven/' },
    { org: 'Zahnle',     title: 'Zahnle et al. (2010) — Emergence of a Habitable Planet',               url: 'https://doi.org/10.1089/ast.2009.0427' },
    { org: 'Catling',    title: 'Catling & Kasting (2017) — Atmospheric Evolution on Inhabited and Lifeless Worlds', url: 'https://doi.org/10.1017/9781139020558' },
    { org: 'Lovelock',   title: 'Lovelock (1979) — Gaia: A New Look at Life on Earth',                  url: 'https://global.oup.com/academic/product/gaia-9780198784883' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'From nebular gas to vanishing air — the divergent stories of planetary atmospheres',
      body: `Every rocky planet in the inner solar system began with a similar raw material budget: a disk of gas and dust orbiting the young Sun, followed by bombardment from comets and asteroids delivering volatile-rich impactors, and then a prolonged epoch of volcanic outgassing that supplied gases from the planetary interior. Yet today, Venus bakes under a 92-bar blanket of CO₂, Earth hosts a thin but life-sustaining nitrogen–oxygen mix, Mars clings to a wisp of 6 mbar, and the Moon and Mercury have almost nothing at all. Explaining this extraordinary divergence is the central problem of comparative atmospheric science.

**Primary vs secondary atmospheres.** The gas giant planets — Jupiter, Saturn, Uranus, Neptune — retained **primary atmospheres**: hydrogen and helium captured directly from the solar nebula during planetary accretion. This was possible because their gravitational fields were strong enough to hold nebular gas before the young Sun's intense radiation and solar wind dispersed the protoplanetary disk (within roughly 1–10 million years). Rocky planets were too small and too close to the Sun to gravitationally capture nebular hydrogen in bulk. Their present atmospheres are **secondary**: they were built up after formation through volcanic outgassing (CO₂, H₂O, SO₂, N₂ from the mantle), delivery by cometary and asteroid impacts (H₂O, CO₂, N₂, noble gases), and, on Earth uniquely, biochemical modification over billions of years. Venus, Earth, and Mars all received broadly similar volatile inventories — yet their atmospheric trajectories diverged dramatically within the first billion years.

**The inventory problem.** Venus and Earth are near-twins in mass and bulk composition, yet Venus carries ~90 bar of atmospheric CO₂ while Earth's atmosphere contains only 0.0004 bar of CO₂ (most of Earth's CO₂ is sequestered as limestone in the crust, roughly equivalent to 60 bar if released). Mars started with enough volatiles to produce an early atmosphere estimated at 1–2 bar of CO₂ plus significant water vapour. Today it retains 0.006 bar. Where did the rest go?

**Escape processes: Jeans escape.** Once an atmosphere exists, it faces continuous loss to space through two broad categories. **Jeans escape** (thermal escape) operates because the Maxwell–Boltzmann distribution of molecular speeds in any gas has a tail extending to arbitrarily high velocities. For a molecule at the exobase (the altitude at which the mean free path exceeds the scale height — typically 200–500 km (311 mi) altitude) with an upward velocity exceeding the **escape velocity** v_esc = √(2GM/R), the molecule exits the atmosphere permanently. The Jeans escape parameter λ = (v_esc/v_th)² = GMm/(kTR), where m is molecular mass, T is exobase temperature, and k is Boltzmann's constant. Jeans escape is exponentially sensitive to molecular mass: light hydrogen (m = 1.67 × 10⁻²⁷ kg) escapes readily at current terrestrial exobase temperatures (~1000 K), but oxygen (16× heavier) has a loss rate billions of times lower. This mass selectivity means Jeans escape acts as a slow hydrogen filter: it bleeds off H and He but struggles to remove heavier species (O, N, C, CO₂) on geologically meaningful timescales — except on low-gravity worlds like Mars.

**Non-thermal escape mechanisms.** Several processes driven by solar radiation and solar wind can eject heavier atoms and ions that Jeans escape cannot remove. **Photochemical escape**: UV photons dissociate molecules (e.g., CO₂ → CO + O) and can produce hot atoms with enough energy to escape from a low-gravity planet — particularly important for oxygen escape from Mars. **Sputtering**: solar wind ions strike the upper atmosphere, transferring momentum and ejecting atmospheric neutrals. **Ion pickup (ion sputtering)**: solar wind electrons ionise neutral atmospheric atoms; the resulting ions are then swept up by the interplanetary magnetic field and accelerated away from the planet. Ion pickup is the dominant non-thermal escape route measured at Mars today by the MAVEN spacecraft.

**Solar wind interaction: the magnetosphere factor.** Earth's global dipole magnetic field deflects the solar wind at the magnetopause, protecting the upper atmosphere from direct solar wind exposure and greatly suppressing ion pickup loss. Mars lacks a global magnetic field (it lost its internal dynamo ~4 billion years ago) and Venus also has no intrinsic dipole. Both interact directly with the solar wind, though in different ways: Venus has a dense atmosphere that creates an **induced magnetosphere** through ionospheric currents, providing partial protection; Mars, with its thin atmosphere, is more vulnerable. The MAVEN mission (Mars Atmosphere and Volatile EvolutioN, launched 2013) directly measured current atmospheric escape rates: approximately 100 grams per second of ions are lost to space under average solar conditions, rising to ~2–3 kg/s during solar storms. Back-extrapolation over 4 Ga — accounting for the Sun's more intense EUV output in youth — suggests Mars lost the equivalent of 1.5 bar of CO₂ and a global liquid water layer 10–30 metres deep to space.

**Atmospheric composition patterns.** A striking planetary-scale pattern emerges: **nitrogen-dominated atmospheres** (Earth: 78% N₂; Titan: 98% N₂; Pluto: ~99% N₂) represent worlds where CO₂ has been removed by carbonate formation (Earth), cold-trapping (Pluto), or photochemical processing (Titan), leaving the relatively non-reactive N₂. **CO₂-dominated atmospheres** (Venus: 96.5% CO₂; Mars: 95.3% CO₂) represent worlds where CO₂ has neither been sequestered into rocks (no carbonate–silicate cycle on Venus due to stagnant lid; no liquid water on present Mars) nor consumed by biology.

**Biological modification of Earth's atmosphere.** Earth's current atmosphere is spectacularly out of thermodynamic equilibrium: it contains 21% O₂ coexisting with abundant reduced gases (CH₄, for instance). In a purely abiotic atmosphere at chemical equilibrium, O₂ and CH₄ would react and disappear on timescales of thousands of years. James Lovelock noted this disequilibrium in the 1960s as a potential biosignature visible from space: the simultaneous presence of O₂ and CH₄ requires continuous biological replenishment. Life — particularly oxygenic photosynthesis — has maintained Earth's O₂ for roughly 2.4 billion years (the Great Oxidation Event), while methanogenic archaea continuously replenish CH₄. Without biology, Earth's atmosphere would drift toward a CO₂-dominated composition similar to Venus or Mars.`,
      keyTerms: [
        {
          term: 'primary atmosphere',
          def: `An atmosphere composed of gases captured directly from the solar nebula during planetary accretion, dominated by the primordial solar mixture of hydrogen and helium. Only the giant planets retained primary atmospheres; rocky planets lack sufficient gravity and were too close to the young Sun\'s photoevaporative radiation to hold nebular gas. Contrast with secondary atmosphere, which forms after the nebula disperses.`,
        },
        {
          term: 'secondary atmosphere',
          def: 'An atmosphere that formed after planetary accretion ended, built up by volcanic outgassing of volatiles from the planetary interior (H₂O, CO₂, SO₂, N₂), delivery by impacting comets and asteroids, and — on Earth uniquely — biochemical modification. The terrestrial planets all have secondary atmospheres. Their compositions have diverged dramatically depending on escape rates, surface chemistry, and biological activity.',
        },
        {
          term: 'Jeans escape',
          def: 'Thermal atmospheric escape driven by the high-velocity tail of the Maxwell–Boltzmann molecular speed distribution. At the exobase, molecules moving upward faster than the local escape velocity exit the atmosphere permanently. The Jeans escape parameter λ = GMm/(kTR) quantifies the ratio of gravitational to thermal energy; escape is exponential in λ, making it extremely sensitive to molecular mass and exobase temperature. Efficient for light species (H, He) but negligible for heavy ones (O, N, CO₂) except on low-gravity worlds.',
        },
        {
          term: 'non-thermal escape',
          def: 'Atmospheric escape mechanisms driven by solar radiation or solar wind rather than thermal energy alone, capable of removing heavier atoms and ions that Jeans escape cannot. Includes photochemical escape (UV-heated hot atoms), sputtering (solar wind ion momentum transfer), and ion pickup (solar wind ionisation of neutrals followed by magnetic field acceleration). Dominant on Mars, measured directly by MAVEN at ~100 g/s average.',
        },
        {
          term: 'exobase',
          def: 'The level in a planetary atmosphere above which the mean free path of molecules exceeds the atmospheric scale height, so that upward-moving molecules travel on ballistic trajectories without further collisions. Typically located at 200–500 km (311 mi) altitude on terrestrial planets. The exobase is the critical boundary from which Jeans and non-thermal escape are calculated — it is effectively the "top" of the collisional atmosphere.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Escape physics, magnetospheres, and the divergence of terrestrial atmospheres',
      body: `**The Jeans escape criterion in detail.** For a molecule at the exobase to escape, its upward velocity component must exceed v_esc = √(2GM/R). For Mars (M = 6.4 × 10²³ kg, R = 3.39 × 10⁶ m), v_esc ≈ 5.0 km/s, compared to Earth's 11.2 km/s. The thermal velocity of an atom is v_th = √(2kT/m). For hydrogen at the Martian exobase (~250 K for today's cold Mars; much hotter early Mars), v_th ≈ 2.1 km/s. The Jeans parameter λ = (v_esc/v_th)² ≈ 5.7 for H on Mars — a relatively small value, meaning Jeans escape of hydrogen is efficient and rapid. For oxygen (m = 16× larger), λ ≈ 91, and the escape rate is orders of magnitude lower. For Earth, λ for hydrogen is ~7–10 at the exobase, still allowing significant H loss. The key insight is that Jeans escape is mass-selective and exponentially sensitive: it efficiently removes H and He everywhere, effectively removes H from early (hot, low-gravity) Mars, but cannot remove heavier species from Earth or Venus within the age of the solar system.

**MAVEN at Mars: measuring loss directly.** The MAVEN spacecraft entered Martian orbit in September 2014 and has spent over a decade measuring ion escape rates through multiple instruments (STATIC, SWIA, NGIMS). Its key findings: average total ion escape ~100 g/s (dominated by O⁺, O₂⁺, CO₂⁺); during the X-class solar flare events of September 2017, escape rates spiked to 10–25× background. The early Sun emitted 5–10× more extreme ultraviolet (EUV) radiation than today, driving both larger ionisation rates (more ions to be picked up) and larger exosphere temperatures (more Jeans escape). Scaling MAVEN-era measurements backward through the Sun's evolution suggests Mars lost a global equivalent layer of water 10–30 m (98 ft) deep and roughly 1–1.5 bar of CO₂ over 4 Ga. This is significant but likely not the whole story — carbonate mineralogy at the surface may have sequestered additional CO₂, and impact erosion during the Late Heavy Bombardment may have removed atmosphere too.

**The magnetosphere shield: Earth vs Mars vs Venus.** Earth's dipole magnetic field deflects most solar wind protons and electrons well above the atmosphere at the magnetopause (~10 Earth radii on the dayside). Ion pickup loss from Earth is consequently suppressed by orders of magnitude relative to an unmagnetized planet at 1 AU. Mars lost its dynamo-generated magnetic field roughly 4.1 Ga (evidenced by the lack of present global field and the ancient crustal remanent magnetism in the southern highlands — the oldest surviving record of a Martian dynamo). Thereafter, Mars was exposed to full solar wind interaction, and ion pickup loss became the dominant escape mechanism. Venus, despite lacking an intrinsic field, is protected somewhat by its ionosphere: solar wind pressure compresses the ionosphere into an **induced magnetosphere**, creating a bow shock and magnetosheath analogous to Earth's, though at much lower altitude. The result is that Venus loses atmosphere at rates similar to Mars (~100–300 g/s), even though it is closer to the Sun and has more atmosphere — the induced magnetosphere provides partial but real shielding.

**Why Earth's CO₂ is missing from the atmosphere.** Earth has not lost its CO₂ to space (the Jeans/non-thermal escape rates for CO₂ at Earth's gravity are negligible). Instead, CO₂ is stored in the **carbonate–silicate cycle**: atmospheric CO₂ dissolves in rainwater to form carbonic acid (H₂CO₃), which weathers silicate rocks and produces calcium carbonate (CaCO₃, limestone). Ocean organisms also precipitate CaCO₃ shells. These carbonates are then subducted at tectonic plate boundaries and heated in the mantle, releasing CO₂ back through volcanism — a geological thermostat operating on 100,000–million year timescales. If Earth's tectonic recycling stopped, CO₂ would accumulate from volcanism and the planet would eventually resemble Venus. Venus lacks this cycle (stagnant lid tectonics, no active subduction), explaining its CO₂ buildup.`,
      cards: [
        {
          name: 'Primary vs Secondary Atmospheres',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'Giant planets captured primary H/He atmospheres directly from the solar nebula. Rocky planets built secondary atmospheres from volcanic outgassing (CO₂, H₂O, SO₂, N₂), cometary/asteroid delivery, and biological modification. All four inner planets started with similar volatile inventories; their divergence reflects escape, sequestration, and biology.',
          examples: 'Jupiter: 89% H₂, 10% He — primordial nebular composition · Earth: 78% N₂, 21% O₂ — biologically maintained out-of-equilibrium mixture · Venus: 96.5% CO₂, 3.5% N₂ — no biosphere, no carbonate recycling · Mars: 95.3% CO₂, 2.6% N₂ — escaped and sequestered atmosphere',
        },
        {
          name: 'Jeans Escape & Mass Selectivity',
          icon: Wind,
          color: BRAND.accent,
          desc: `Thermal escape removes molecules whose upward velocity exceeds escape velocity (v_esc = √2GM/R). Jeans parameter λ = GMm/kTR — exponentially controls escape rate. Light atoms (H, He) escape readily from all rocky planets. Heavier species (O, N, CO₂) require low gravity (Mars) or extreme heating (early solar EUV) for significant escape. Mars escape velocity 5.0 km/s vs Earth\'s 11.2 km/s.`,
          examples: 'H escape from Earth: ~3 × 10⁸ molecules/cm²/s at exobase — slow but continuous · H escape from early Mars (hotter exosphere, weaker gravity): 100–1000× faster · O escape from modern Mars via photochemical escape: key contribution to total loss budget · MAVEN measured O⁺ as dominant ion escaping present-day Mars',
        },
        {
          name: 'Non-Thermal Escape & Solar Wind',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Ion pickup: solar wind ionises exospheric neutrals; ions swept away by interplanetary magnetic field. Sputtering: solar wind protons transfer momentum to atmospheric atoms. Photochemical escape: UV-dissociated hot atoms exceed escape velocity. All three scale with solar EUV output — 5–10× higher at 4 Ga. MAVEN measures ~100 g/s average ion loss from Mars today.',
          examples: 'MAVEN September 2017 solar storm: ion escape spiked 10–25× above average · Total Mars ion loss over 4 Ga: equivalent ~1.5 bar CO₂ + 10–30 m (98 ft) global water layer · Venus induced magnetosphere: ionospheric currents partially mimic dipole protection without intrinsic field · Earth dipole: suppresses ion pickup loss by orders of magnitude vs unmagnetized planet at 1 AU',
        },
        {
          name: 'Lovelock\'s Gaia Evidence & Biological Atmosphere',
          icon: ArrowRight,
          color: BRAND.jade,
          desc: `Earth\'s atmosphere is thermodynamically out of equilibrium: 21% O₂ + trace CH₄ cannot coexist at chemical equilibrium (they react). Continuous biological sources required: oxygenic photosynthesis maintains O₂; methanogens maintain CH₄. Without life, Earth\'s atmosphere would equilibrate to ~CO₂ + N₂ (Venus/Mars-like). This disequilibrium is a potential remote biosignature.`,
          examples: 'Great Oxidation Event ~2.4 Ga: cyanobacterial O₂ production overwhelmed sinks for first time · Atmospheric CH₄ residence time: ~10 years — replenished by wetlands, termites, livestock, oceanic archaea · O₂ + CH₄ simultaneous detection in an exoplanet spectrum: compelling biosignature · Abiotic Venus atmosphere: in thermodynamic near-equilibrium with no detectable disequilibrium pairs',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From nebular gas to divergent worlds: the causal chain of atmospheric evolution',
      body: `Trace how planetary atmospheres originate in nebular capture and volatile delivery, then diverge based on planetary mass, distance from the Sun, magnetic field history, and the presence or absence of life. Each node represents a key process or state; each edge the physical or chemical mechanism that connects them. Follow the pathways from a common starting point to the radically different endpoints of Venus, Earth, Mars, and the gas giants.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The causal chain from solar nebula through volatile delivery, escape processes, and biological modification to the divergent atmospheric compositions of Venus, Earth, Mars, and the giant planets',
        nodes: [
          {
            id: 'nebula',
            label: 'Solar nebula & protoplanetary disk',
            description: `The cloud of gas (mostly H/He) and dust from which the solar system formed. Within 1–10 million years, the young Sun\'s radiation and stellar wind (T Tauri phase) photoevaporated the gas disk. Giant planets formed quickly enough to capture massive H/He envelopes — their primary atmospheres. Rocky planets in the inner solar system (within ~4–5 AU) formed too slowly and lacked sufficient gravity to retain primary H/He against this photoevaporative stripping. Their atmospheric histories begin instead with volatile delivery and outgassing.`,
            color: BRAND.amethyst,
          },
          {
            id: 'volatile-delivery',
            label: 'Volatile delivery & outgassing',
            description: `Rocky planets acquired their volatile budgets from two sources: (1) accretion of hydrated silicates and carbonaceous chondrite material that incorporated water and CO₂ from the outer solar system, and (2) late heavy bombardment by comets and asteroids ~3.9–4.1 Ga (though the isotopic evidence for cometary vs. asteroidal origin of Earth\'s water remains debated). Simultaneously, volcanic outgassing released H₂O, CO₂, SO₂, N₂, and noble gases from the mantle — the dominant ongoing atmospheric source. Venus, Earth, and Mars received broadly similar volatile inventories per unit mass; their subsequent histories differ in what happened to those volatiles.`,
            color: BRAND.gold,
          },
          {
            id: 'jeans-nonthermal',
            label: 'Jeans & non-thermal escape',
            description: `Atmospheric loss to space via thermal (Jeans) and non-thermal (ion pickup, sputtering, photochemical) escape. The rate depends on: planetary escape velocity (v_esc ∝ √M/R), exobase temperature (controlled by solar EUV heating), solar EUV flux (5–10× higher at 4 Ga), and whether the planet has a magnetic field. Mars (low gravity, no dynamo after ~4.1 Ga) lost ~1.5 bar CO₂ equivalent and significant water. Earth (high gravity, active dynamo) retains most of its volatile inventory. The early Sun\'s high EUV meant escape was most rapid in the first billion years.`,
            color: BRAND.coral,
          },
          {
            id: 'carbonate-silicate',
            label: 'Carbonate–silicate cycle (Earth)',
            description: 'On Earth, CO₂ is continuously cycled between the atmosphere and the crust via weathering and volcanism. CO₂ + H₂O → carbonic acid → weathers silicate rocks → CaCO₃ (limestone) deposited in ocean. Subduction carries carbonates into the mantle, where heat releases CO₂ back through arc volcanism. This cycle acts as a geological thermostat: more CO₂ → warmer → more precipitation → more weathering → more sequestration → cooling. It requires active plate tectonics and liquid water. Venus lacks this cycle (stagnant lid), which is the primary reason its CO₂ builds up in the atmosphere rather than being sequestered.',
            color: BRAND.jade,
          },
          {
            id: 'biology',
            label: 'Biological modification (Earth)',
            description: `Earth is unique among known worlds in having a biosphere that fundamentally alters atmospheric composition. Oxygenic photosynthesis (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂) has maintained ~21% O₂ for 2.4 billion years. Methanogenic archaea replenish CH₄ (~1.8 ppm) on ~10-year timescales. Nitrogen fixation and denitrification cycle N₂. Without biology, Earth\'s atmosphere would drift to CO₂ dominance. James Lovelock identified the O₂–CH₄ chemical disequilibrium as a remote biosignature in 1965, providing the theoretical basis for spectroscopic life detection on exoplanets.`,
            color: BRAND.accent,
          },
          {
            id: 'divergent-outcomes',
            label: 'Divergent planetary atmospheres',
            description: `The end states reflect each planet\'s unique combination of escape, sequestration, and biology. Venus: 92 bar CO₂ — no carbonate cycle, no escape (high gravity + induced magnetosphere adequate), no biology. Earth: 1 bar N₂–O₂ — CO₂ sequestered in carbonates (60 bar equivalent), O₂ sustained by photosynthesis, N₂ left as inert residual. Mars: 0.006 bar CO₂ — ~1.5 bar lost to space, possible carbonates in crust, no biology. Giant planets: primary H/He retained since formation, enormous mass and gravity prevent any meaningful escape.`,
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'nebula',             to: 'volatile-delivery',   label: 'Rocky planets too small to retain nebular gas; receive volatiles via accretion and impactor delivery instead' },
          { from: 'volatile-delivery',  to: 'jeans-nonthermal',    label: 'Outgassed and delivered volatiles enter the atmosphere and are subject to continuous loss to space' },
          { from: 'volatile-delivery',  to: 'carbonate-silicate',  label: 'CO₂ enters the weathering cycle if liquid water and silicate rocks are available (Earth, possibly early Mars)' },
          { from: 'carbonate-silicate', to: 'biology',             label: 'Stable liquid water and moderate CO₂ levels enabled life; life then further transforms the atmosphere' },
          { from: 'jeans-nonthermal',   to: 'divergent-outcomes',  label: 'Mars loses ~1.5 bar to space over 4 Ga; Earth and Venus retain bulk volatiles due to higher gravity and/or shielding' },
          { from: 'carbonate-silicate', to: 'divergent-outcomes',  label: 'Earth sequesters ~60 bar CO₂ equivalent into limestone; Venus without this cycle accumulates 92 bar CO₂' },
          { from: 'biology',            to: 'divergent-outcomes',  label: 'Photosynthesis adds 21% O₂; biological disequilibrium signature distinguishes Earth from all other known worlds' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A rocky planet at 1.5 AU has a mass of 0.1 Earth masses, lost its magnetic dynamo 3.5 billion years ago, and has no liquid water on its surface. Which atmospheric loss mechanism would you expect to dominate over geologic time, and why?',
          a: [
            'Jeans escape of CO₂ would dominate because the planet\'s low mass means its exobase temperature is very high — comparable to the Sun\'s photosphere — which gives CO₂ molecules sufficient thermal velocity to exceed the escape velocity continuously',
            'Ion pickup and sputtering (non-thermal escape) would dominate: without a magnetic field, the solar wind interacts directly with the upper atmosphere; the low planetary mass means a low escape velocity, making non-thermal ejection of O⁺, CO₂⁺, and other heavy ions efficient. This mechanism, measured at Mars by MAVEN, scales with solar wind flux and EUV intensity over geological time',
            'The carbonate–silicate cycle would dominate atmospheric loss because, without liquid water, CO₂ would be rapidly absorbed by silicate rocks through dry silicate hydration reactions, sequestering the entire atmosphere into the crust within 100 million years',
            'Photochemical escape of nitrogen would dominate because UV radiation at 1.5 AU preferentially dissociates N₂ into nitrogen atoms, which are light enough to escape even at low exobase temperatures; this process stripped Mars of its nitrogen-rich primary atmosphere within the first 500 million years',
          ],
          correct: 1,
          explain: `Jeans escape of CO₂ (A) is negligible even for low-mass planets: CO₂ has a molecular mass of 44 amu, and the Jeans parameter λ = GMm/kTR for CO₂ at Mars-like conditions exceeds 200, making thermal escape of CO₂ essentially zero regardless of mass. The exobase temperature is not comparable to the solar photosphere — it is typically 200–1000 K depending on solar EUV heating, not tens of thousands of kelvin. The carbonate–silicate cycle (C) requires liquid water as the weathering agent; without liquid water, dry silicate hydration is geologically very slow and not the dominant loss process. Nitrogen is not the primary constituent mentioned (D), and early Mars did have significant N₂, but nitrogen photochemical escape is a minor component of total loss compared to oxygen and CO₂ species. The correct answer is B: ion pickup and sputtering are the dominant escape mechanisms for unmagnetized planets. Without a dynamo-generated magnetic field, the solar wind directly ionises the exosphere. Low escape velocity (v_esc ∝ √M/R; at 0.1 Earth mass and similar radius, v_esc ≈ 3.5 km/s) means even modest solar wind energy transfer can accelerate heavy ions (O⁺, CO₂⁺, O₂⁺) to escape. MAVEN demonstrated this at Mars: ~100 g/s ion escape at current solar activity, scalable to much higher rates when the early Sun\'s EUV was 5–10× stronger. Over 3.5 Ga without magnetic shielding, this mechanism accounts for the bulk of the estimated ~1.5 bar CO₂-equivalent loss from Mars.`,
        },
        {
          q: `Venus and Earth have nearly identical masses and bulk compositions, yet Venus has a 92-bar CO₂ atmosphere while Earth\'s atmosphere is dominated by N₂ with only 0.04% CO₂. What single mechanism most directly explains this difference, and what would be needed to reverse it?`,
          a: [
            'The difference is explained primarily by non-thermal escape: Venus, being closer to the Sun, experiences higher solar wind flux and higher EUV irradiance, which stripped Earth\'s CO₂ to space while Venus retained its full inventory; reversing this would require moving Venus to Earth\'s orbital distance',
            'The difference is explained primarily by the carbonate–silicate cycle: Earth has active plate tectonics that subduct carbonates, releasing CO₂ through volcanism on one hand, but the dominant net effect is that Earth has sequestered approximately 60 bar CO₂ equivalent into ocean-floor limestone, while Venus, with its stagnant lid and no active subduction, cannot sequester CO₂ into rocks at the same rate; reversing the difference would require introducing plate tectonics and liquid water to Venus',
            'The difference is explained primarily by Jeans escape: CO₂ is lighter than N₂ on a per-molecule basis in the upper atmosphere after UV photodissociation produces C and O atoms, which escape more readily from Venus\'s weaker gravity; Earth retained CO₂ because its stronger magnetic field trapped the dissociation products',
            'The difference is explained primarily by the runaway greenhouse effect: Earth experienced a runaway greenhouse 2 billion years ago but recovered due to biological drawdown of CO₂ by photosynthesis; Venus never had biology and so could not arrest its runaway, resulting in the current 92-bar CO₂ accumulation',
          ],
          correct: 1,
          explain: `Non-thermal escape (A) does operate at Venus and explains the loss of water (through hydrogen escape after photodissociation of H₂O) — but Venus has not lost its CO₂ this way. Venus\'s high gravity (similar to Earth\'s at 0.9 g) and induced magnetosphere suppress heavy-ion escape. The escape mechanism explains water loss, not CO₂ retention. CO₂ dissociation products (C, O) can escape from low-gravity planets like Mars, but not efficiently from Venus (C is incorrect on this basis too). Earth\'s magnetic field does suppress ion escape, but this is not the primary explanation for sequestered CO₂ — Earth\'s atmosphere was not magnetically "trapped" into carbonates; carbonate formation requires liquid water and silicate weathering, independent of the magnetic field. The runaway greenhouse (D) occurred on Venus, not Earth — Earth has never entered a full runaway greenhouse. The correct answer is B: Earth\'s "missing" CO₂ is not missing at all — it is stored as calcium carbonate (limestone, CaCO₃) in the ocean floor and continental crust, amounting to the equivalent of roughly 60 bar of atmospheric CO₂. The carbonate–silicate cycle continuously weathers CO₂ from the atmosphere into solution, precipitates it as limestone, and returns it via subduction and volcanism. This cycle requires (1) liquid water to drive chemical weathering, and (2) active plate tectonics to subduct carbonates and recycle CO₂. Venus has neither: its surface water was lost (explained by Venus Lesson 2), and it operates under stagnant lid tectonics with no active subduction. Without the carbonate cycle, all volcanic CO₂ accumulates in the atmosphere — 92 bar is the integrated output of billions of years of Venusian volcanism without sequestration.`,
        },
        {
          q: 'MAVEN measured atmospheric escape from Mars at approximately 100 grams per second under average solar conditions in 2014–2024. Why cannot this present-day rate simply be multiplied by the age of Mars (4.5 Ga) to calculate total past atmospheric loss?',
          a: [
            'Because MAVEN\'s instruments measure only ionised species and miss neutral atom escape entirely; neutral atom sputtering and Jeans escape of neutral hydrogen represent 90% of total escape and were not measured by MAVEN, making the 100 g/s figure a severe underestimate of even present-day loss',
            'Because the current 100 g/s rate is representative only of modern solar conditions; the early Sun emitted 5–10× more extreme ultraviolet radiation 4 Ga, which drove proportionally higher ionisation rates and exosphere temperatures; escape rates during the Noachian were orders of magnitude higher, so the simple time-multiplication vastly underestimates total loss — and the rate also varied with solar activity cycles, coronal mass ejections, and the intensity of the Late Heavy Bombardment',
            'Because Mars\'s atmosphere was chemically different 4 Ga, being dominated by H₂ and He (a primary atmosphere) rather than CO₂; the escape mechanisms and rates for hydrogen are completely different from those measured today for oxygen and CO₂, invalidating direct comparison',
            'Because MAVEN only operated for 2 years before its instruments degraded; extrapolating a 2-year dataset to 4.5 Ga introduces statistical uncertainty so large that all conclusions about past atmospheric loss are scientifically unreliable',
          ],
          correct: 1,
          explain: `MAVEN does measure both ions and neutral atoms through its comprehensive instrument suite (STATIC for ions, NGIMS for neutral and ion composition, IUVS for UV emissions); the 100 g/s figure represents the best available total estimate including multiple loss channels, not just ionised species. A refers to a real technical consideration but misrepresents MAVEN\'s capabilities and the magnitude of the effect. Mars never had a primary H/He atmosphere (C); it is a rocky planet that formed secondary atmosphere through outgassing and impact delivery, as described. The MAVEN spacecraft was operational as of 2024 for over 10 years, not 2 years (D), and statistical uncertainty in escape rate measurements is not the primary reason simple extrapolation fails. The correct answer is B: the fundamental problem with simple temporal extrapolation is that the Sun itself has evolved. The Sun formed with higher luminosity in the EUV (extreme ultraviolet, which drives ionospheric escape) and its EUV output has declined over 4.5 Ga as its solar wind has become less intense. At ~3.9 Ga, EUV flux at Mars was 5–10× the modern value. Higher EUV means higher ionospheric electron density, higher exosphere temperatures, larger Jeans escape rates for hydrogen, higher ion pickup production rates, and stronger solar wind-driven sputtering. The escape rates during the Noachian (>3.7 Ga) were likely 100–1000× higher than the modern baseline, concentrated in the early epoch when the bulk of atmospheric loss occurred. Moreover, solar energetic particle events and coronal mass ejections — which spike escape rates by 10–25× for hours to days — were more frequent around the young Sun. Properly accounting for solar evolution is essential to reconstruct the full integrated loss budget.`,
        },
        {
          q: `Earth\'s atmosphere is described as "thermodynamically out of chemical equilibrium" because it contains both O₂ and CH₄ simultaneously. What is the significance of this observation for planetary science?`,
          a: [
            'It demonstrates that Earth\'s atmosphere is geologically young — only a few million years old — because equilibrium would be reached on billion-year timescales; any planet with a similarly young atmosphere would also show chemical disequilibrium regardless of biology',
            'It demonstrates that Earth\'s atmospheric chemistry is dominated by abiotic volcanic processes: volcanoes simultaneously emit O₂ (from high-temperature dissociation of CO₂) and CH₄ (from mantle serpentinization), and biological processes play a minor secondary role in maintaining the observed mixing ratios',
            'The simultaneous presence of O₂ and CH₄ requires continuous biological replenishment because O₂ and CH₄ react (CH₄ + 2O₂ → CO₂ + 2H₂O) on timescales of thousands of years; without continuous biological sources, both would disappear. This disequilibrium is therefore a biosignature: its remote detection in an exoplanet\'s spectrum would provide strong evidence for biological activity, as proposed by Lovelock in the 1960s as a criterion for detecting life from space',
            'The disequilibrium is maintained by tidal heating from the Moon, which continuously injects energy into the atmosphere to prevent equilibrium; planets without large moons cannot maintain atmospheric disequilibrium and therefore cannot support life',
          ],
          correct: 2,
          explain: `Earth\'s atmosphere is not geologically young (A): it has existed for ~4.5 Ga and its composition has been biologically maintained. Chemical equilibrium in a lifeless N₂–CO₂–H₂O atmosphere would be reached on million-year timescales through geochemical reactions, not billion-year timescales, so a young atmosphere would not in itself explain the observed O₂–CH₄ disequilibrium. Volcanoes do not emit O₂ (B): volcanic gases are predominantly CO₂, H₂O, SO₂, and H₂S — all reduced or mildly oxidised species. Volcanoes emit CH₄ from serpentinization reactions in limited contexts, but they are not sources of atmospheric O₂; O₂ is produced exclusively by photosynthesis (and in trace amounts by UV photodissociation of H₂O). Tidal heating from the Moon (D) affects Earth\'s oceans and interior but plays no direct role in maintaining atmospheric chemical disequilibrium; the Moon\'s tidal influence is gravitational, not energetic in an atmospheric chemistry sense, and life on Earth predates the current Moon-Earth tidal configuration. The correct answer is C: O₂ and CH₄ react according to CH₄ + 2O₂ → CO₂ + 2H₂O with a lifetime of thousands of years for CH₄ in an O₂-rich atmosphere. For both to coexist at measurable levels requires simultaneous biological sources: oxygenic photosynthesis producing O₂ at a rate sufficient to maintain 21% concentration, and methanogenic archaea (and other biological and geological CH₄ sources) replenishing CH₄ faster than it is consumed. James Lovelock recognised in 1965 that this coexistence was a thermodynamic impossibility without life, and proposed it as a remote sensing biosignature — a spectroscopic signal that could be detected in an exoplanet\'s transmission or emission spectrum by a sufficiently powerful telescope, identifying life without requiring in situ measurement.`,
        },
        {
          q: `Mars lost its global magnetic dynamo approximately 4.1 billion years ago. What are the two major consequences of this event for Mars\'s atmospheric evolution, and what evidence records the pre-dynamo magnetic field?`,
          a: [
            'The two consequences are: (1) Mars\'s core froze completely, halting all internal heat flow and ending volcanism; (2) without volcanic outgassing, the atmosphere could no longer be replenished after escape losses. Evidence for the pre-dynamo field: paleomagnetism of the northern lowlands, which shows alternating magnetic stripes analogous to Earth\'s seafloor spreading record',
            'The two consequences are: (1) Mars became exposed to direct solar wind interaction, dramatically increasing non-thermal atmospheric escape rates (ion pickup, sputtering); (2) without magnetic protection, atmospheric CO₂ and water were progressively stripped, contributing to the transition from a warmer, wetter Noachian climate to the cold desert observed today. Evidence: ancient crustal remanent magnetism in the heavily cratered southern highlands preserves magnetisation patterns from the era of an active Martian dynamo',
            'The two consequences are: (1) without a magnetic field, cosmic rays penetrated to the surface, destroying surface organic molecules and preventing the origin of life; (2) the solar wind compressed Mars\'s ionosphere to ground level, making the surface uninhabitable. Evidence for the pre-dynamo field: isotopic anomalies in Martian meteorites showing elevated ⁵³Cr/⁵²Cr ratios consistent with magnetic field-driven isotope separation in the early mantle',
            'The two consequences are: (1) the loss of the magnetic field caused Mars\'s rotational axis to become unstable, increasing its obliquity variability; (2) high obliquity variability redistributed polar ice, leading to global desiccation. Evidence for the pre-dynamo field: MAVEN\'s direct measurement of a decaying residual field in the Martian magnetotail',
          ],
          correct: 1,
          explain: `Loss of the dynamo did not halt volcanism on Mars (A): Mars continued to be volcanically active for billions of years after the dynamo ended — Olympus Mons and the Tharsis volcanoes show evidence of eruptions as recently as 25 million years ago. The northern lowlands magnetic stripes (A) are not analogous to seafloor spreading; Mars does not have plate tectonics, and the northern lowlands show weak magnetisation, not the strong alternating patterns of oceanic crust. Cosmic ray penetration (C) did increase without magnetic shielding, and this does affect surface chemistry, but "atmospheric CO₂ and water stripped by cosmic rays" is not a correct mechanism — cosmic rays affect surface sterilisation, not direct atmospheric escape; also, ⁵³Cr/⁵²Cr ratios in meteorites reflect redox history of the mantle, not magnetic field separation. Obliquity instability (D) is a real Martian phenomenon, but it is caused by the lack of a large stabilising moon and by resonances with Jupiter — not by loss of the magnetic dynamo. MAVEN does not measure a "decaying residual field in the magnetotail"; it measures current solar wind interaction. The correct answer is B: the two primary consequences of dynamo loss were (1) direct solar wind exposure of the upper atmosphere, eliminating magnetic shielding and vastly increasing ion pickup escape rates (MAVEN estimates this accelerated loss by a factor of 5–10× compared to a magnetized Mars), and (2) enhanced atmospheric stripping over 4 Ga contributing significantly to the transition from the early warmer, wetter Noachian climate (valley networks, phyllosilicates, probable surface water) to the current 6-mbar cold desert. The pre-dynamo field is recorded in remanent magnetisation of ancient southern highland rocks — primarily in the Noachian-aged heavily cratered terrain — where crustal minerals were magnetised in the presence of the global field and have preserved that signal despite 4 billion years of subsequent heating and cratering. These crustal magnetic anomalies, detected by Mars Global Surveyor\'s magnetometer, are some of the strongest evidence that Mars had an active core dynamo before ~4.1 Ga.`,
        },
      ],
    },
  ],
}

export default atmosphericOriginEvolution
