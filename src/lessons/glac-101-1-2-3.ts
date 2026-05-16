import { Activity, Globe, Layers, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seaIceArctic: Lesson = {
  id: 'glac-101-1-2-3',
  title: 'Sea Ice: Physics, Ecology, and Arctic Change',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'How sea ice forms and melts, its role in global climate through albedo feedback, and the dramatic decline of Arctic sea ice',
  sources: [
    { org: 'NSIDC', title: 'NSIDC — All About Sea Ice',               url: 'https://nsidc.org/cryosphere/seaice' },
    { org: 'NSIDC', title: 'NSIDC — Arctic Sea Ice News & Analysis',  url: 'https://nsidc.org/arcticseaicenews' },
    { org: 'NASA',  title: 'NASA — Scientific Visualization Studio',  url: 'https://svs.gsfc.nasa.gov' },
    { org: 'WMO',   title: 'WMO — State of Global Climate',           url: 'https://public.wmo.int' },
  ],
  sections: [
    {
      type: 'intro',
      title: `The Arctic\'s floating thermostat: how sea ice shapes climate, ocean, and life`,
      body: `Sea ice is frozen seawater, typically 2–3 m (7–10 ft) thick, and is fundamentally different from glacier ice, which forms from compressed snow and can reach kilometres in thickness. Sea ice forms directly from the ocean surface and carries dissolved salts (at reduced concentration) within its crystal structure, while glacier ice is nearly pure water. This distinction matters for both physical properties and the role each plays in Earth\'s climate system.

Sea ice forms through a progression of stages as seawater cools. The first crystals to appear are frazil ice — tiny, disc-shaped platelets roughly 1 mm across that give the ocean surface a greasy sheen, known as grease ice. As cooling continues, crystals consolidate into thin, elastic sheets called nilas, or in wavy conditions into circular pancake ice discs with characteristic raised rims from collisions. Through winter, pancakes and nilas thicken and consolidate into first-year ice, which typically reaches 1.5–2 m (5–7 ft) by spring. Ice that survives at least one summer melt season becomes multi-year ice — thicker (3–4 m (10–13 ft)), less salty (brine has drained out), and mechanically stronger than first-year ice.

The Arctic sea ice cover follows a strong seasonal cycle. Maximum extent is reached in late February to March, typically ~15 million km² (5,791,500 sq mi), when sea ice spans the Arctic Ocean and extends into the Bering Sea, Hudson Bay, the Sea of Okhotsk, and peripheral Arctic seas. The minimum occurs in September after summer melt, historically around 4–5 million km² (1,544,400–1,930,500 sq mi). This seasonal cycle is driven primarily by solar insolation: the Arctic receives essentially no sunlight in winter, allowing extensive ice formation, then receives intense summer sun (24-hour daylight) that drives rapid melt.

As sea ice forms, it rejects most of its dissolved salt — a process called brine rejection. Dense, cold, salt-enriched water sinks from the sea surface toward the ocean floor, driving deep water formation. Around Antarctica, this process generates Antarctic Bottom Water, the densest and deepest water mass in the global ocean. In the North Atlantic, linked sea ice formation drives North Atlantic Deep Water production. Together these form the thermohaline circulation — the global ocean conveyor belt — redistributing heat and nutrients across ocean basins.

The ice-albedo feedback is the most powerful amplifying mechanism in the Arctic climate system. Snow-covered sea ice reflects 80–85% of incoming solar radiation (albedo ~0.85), while open ocean absorbs ~94% (albedo ~0.06). As sea ice melts, dark ocean water is exposed, absorbing far more solar energy, warming the ocean, and melting yet more ice. This positive feedback is the primary reason the Arctic has warmed 3–4 times faster than the global average since 1979 — a phenomenon called Arctic amplification.

The consequences of this feedback are measurable and accelerating. September Arctic sea ice extent has declined approximately 13% per decade since satellite records began in 1979, from around 7 million km² (2,702,700 sq mi) to ~4–4.5 million km² (1,544,400–1,737,450 sq mi) in recent years. Multi-year ice — the thick, resilient core of the Arctic ice pack — has declined from ~8 million km² (3,088,800 sq mi) in 1980 to ~3 million km² (1,158,300 sq mi) today. Climate models and current trajectory analyses project that the Arctic will experience its first ice-free summer (extent below 1 million km²) by approximately 2040–2050 under intermediate emissions scenarios — a transition unprecedented in at least the past 1,000 years.`,
      keyTerms: [
        {
          term: 'sea ice',
          def: 'Frozen seawater, typically 2–3 m (7–10 ft) thick, that forms directly from ocean surface cooling. Distinguished from glacier ice (compressed snow) by its salt content and ocean origin.',
        },
        {
          term: 'frazil ice',
          def: 'The first stage of sea ice formation: tiny disc-shaped ice crystals ~1 mm (0.04 in) across that form in supercooled seawater, giving the ocean surface a greasy appearance.',
        },
        {
          term: 'multi-year ice',
          def: 'Sea ice that has survived at least one summer melt season; thicker (3–4 m (10–13 ft)), less saline, and mechanically stronger than first-year ice. Declining rapidly in the Arctic.',
        },
        {
          term: 'albedo feedback',
          def: 'Positive feedback loop in which sea ice loss exposes dark ocean water (albedo ~0.06 vs. ~0.85 for ice), increasing solar energy absorption, warming the ocean, and melting more ice.',
        },
        {
          term: 'Arctic amplification',
          def: 'The phenomenon by which the Arctic warms 3–4× faster than the global average, driven primarily by the ice-albedo feedback as sea ice extent declines.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Sea Ice Physics, Circulation, and Ecology',
      body: 'Four interconnected dimensions of sea ice science explain how frozen ocean water drives global climate, circulates the deep ocean, and supports polar ecosystems.',
      cards: [
        {
          name: 'Sea Ice Formation Stages',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Seawater freezes at −1.8°C (29°F) (salinity ~34 psu); progressive stages from frazil to consolidated pack ice; multi-year ice (thicker, less saline, stronger) vs. first-year ice.',
          examples: `Frazil ice: ~1 mm (0.04 in) ice crystals form first, giving the ocean a greasy appearance (\'grease ice\'). Pancake ice: circular discs 30 cm–3 m (1–10 ft) diameter with raised rims from collisions — forms in wavy conditions. First-year ice reaches 1.5–2 m (5–7 ft) thickness by spring; multi-year ice can exceed 3–4 m (10–13 ft) after surviving summer melt.`,
        },
        {
          name: 'Sea Ice and the Global Thermohaline Circulation',
          icon: Globe,
          color: BRAND.jade,
          desc: 'As seawater freezes, salt is expelled (brine rejection), increasing surrounding seawater density; dense, cold, salty water sinks to form North Atlantic Deep Water and Antarctic Bottom Water, driving the global ocean conveyor.',
          examples: 'Sea ice formation around Antarctica produces ~30 Sv of Antarctic Bottom Water — the densest, deepest ocean water. Reduced Arctic sea ice may be disrupting the Atlantic Meridional Overturning Circulation (AMOC). Brine rejection: sea ice of 10 psu forms from 34 psu seawater, expelling ~75% of dissolved salt to the ocean.',
        },
        {
          name: 'Albedo Feedback: The Arctic\'s Climate Amplifier',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Sea ice has high albedo (~0.85 for snow-covered ice) vs. open ocean (~0.06); ice loss exposes dark water that absorbs ~10× more solar energy; this melts more ice in a positive feedback loop — Arctic amplification.',
          examples: 'Arctic has warmed 3–4× faster than the global average since 1979 — primarily from albedo feedback. September Arctic sea ice extent declined from ~7 million km² (2,702,700 sq mi) in 1979 to ~4.5 million km² (1,737,450 sq mi) in 2023 (−13%/decade). Melt ponds on sea ice (albedo ~0.2) further reduce summer surface albedo and accelerate thinning.',
        },
        {
          name: 'Sea Ice Ecology and Indigenous Communities',
          icon: Zap,
          color: BRAND.gold,
          desc: `Sea ice supports ice-associated ecosystems (sympagic algae, polar bears, walrus, ringed seals, bowhead whales) and is central to Arctic Indigenous communities\' food security, travel, and culture.`,
          examples: 'Ice algae blooms under sea ice in spring provide the first food source for Arctic marine food webs. Polar bears depend on sea ice as a platform for hunting seals; shorter ice seasons reduce hunting success. Inuit, Inupiat, Yupik and Iñupiat communities report that thinning, unpredictable ice is disrupting traditional travel and hunting routes.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Arctic Sea Ice Seasonal Cycle and Climate Feedbacks',
      body: 'Trace the seasonal cycle of sea ice formation, growth, and melt, and its climate feedbacks.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace the seasonal cycle of sea ice formation, growth, and melt, and its climate feedbacks',
        nodes: [
          {
            id: 'open-ocean',
            label: 'Open Ocean (Summer)',
            description: 'Dark ocean surface absorbs >94% of solar radiation. Warms rapidly in Arctic summer.',
            color: BRAND.accentHot,
          },
          {
            id: 'frazil-grease',
            label: 'Frazil and Grease Ice',
            description: 'Ocean cools to −1.8°C (29°F). Ice crystals form. Surface takes on oily appearance.',
            color: BRAND.accent,
          },
          {
            id: 'pancake-nilas',
            label: 'Pancake / Nilas Ice',
            description: 'Crystals consolidate into thin sheets (nilas) or disc-shaped pancakes in wavy conditions.',
            color: BRAND.jade,
          },
          {
            id: 'first-year-ice',
            label: 'First-Year Sea Ice',
            description: 'Ice reaches 1.5–2 m (5–7 ft) by spring. Maximum extent ~15 million km² (5,791,500 sq mi) in March.',
            color: BRAND.gold,
          },
          {
            id: 'melt-ponds',
            label: 'Summer Melt Ponds',
            description: 'Blue melt ponds lower albedo to 0.2. Accelerate thinning. Characteristic of Arctic summer.',
            color: BRAND.coral,
          },
          {
            id: 'multi-year-ice',
            label: 'Multi-Year Ice (Surviving Summer)',
            description: 'Thicker (3–4 m (10–13 ft)), less salty, stronger ice. Declining rapidly — now <30% of Arctic ice.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'open-ocean',     to: 'frazil-grease',  label: 'Autumn cooling to −1.8°C' },
          { from: 'frazil-grease',  to: 'pancake-nilas',  label: 'Consolidation and freezing' },
          { from: 'pancake-nilas',  to: 'first-year-ice', label: 'Winter growth adds 1–2 m' },
          { from: 'first-year-ice', to: 'melt-ponds',     label: 'Spring/summer solar insolation' },
          { from: 'melt-ponds',     to: 'open-ocean',     label: 'Most first-year ice melts' },
          { from: 'first-year-ice', to: 'multi-year-ice', label: 'Survives summer (decreasing)' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'At what temperature does seawater with typical ocean salinity (~34 psu) freeze, and why is this lower than the freshwater freezing point?',
          a: [
            '0°C — salt has no effect on the freezing point of seawater',
            '−1.8°C (29°F) — dissolved salts (primarily NaCl) depress the freezing point by disrupting the water\'s crystal lattice formation',
            '−5°C (23°F) — the pressure at the ocean surface lowers the freezing point',
            '−10°C (14°F) — cold Arctic winds remove heat before ice can form at higher temperatures',
          ],
          correct: 1,
          explain: `Freezing point depression is a colligative property — dissolved solutes reduce the chemical potential of liquid water, requiring a lower temperature to reach the solid-liquid equilibrium. For seawater at 34 psu (practical salinity units, approximately 34 g salt per kg seawater), the freezing point is −1.8°C (29°F). The dominant solutes are Na⁺ and Cl⁻. The relationship is approximately ΔTf ≈ −0.054 × S, where S is salinity in psu. When seawater freezes, ice crystals exclude most salt (ice crystal structure cannot accommodate salt ions), concentrating brine in channels within the ice and expelling it to surrounding water. This is why sea ice at 10 psu forms from seawater at 34 psu — freshwater and most salts separate during freezing.`,
        },
        {
          q: 'What is the primary climate mechanism by which Arctic sea ice loss amplifies global warming?',
          a: [
            'Sea ice loss releases trapped methane from frozen Arctic soils, increasing greenhouse gas concentrations',
            'The ice-albedo feedback: replacing high-albedo (~0.85) sea ice with low-albedo (~0.06) open ocean dramatically increases solar energy absorbed by the Arctic',
            'Sea ice loss reduces the reflectivity of clouds above the Arctic, allowing more solar radiation to reach the surface',
            'Melting sea ice adds freshwater to the Arctic Ocean, which is darker than salt water and absorbs more heat',
          ],
          correct: 1,
          explain: `The ice-albedo feedback is the dominant amplifying mechanism. Sea ice and snow have albedos of 0.5–0.85 (reflecting 50–85% of incoming solar radiation), while open ocean has an albedo of ~0.06 (absorbing 94% of solar energy). When sea ice melts, it exposes dark ocean water, dramatically increasing solar energy absorption. This additional energy warms the ocean, melting more ice — a classic positive feedback. The energy difference is enormous: on a summer day, a square kilometre of exposed Arctic Ocean absorbs ~50–100 MJ more energy than it would if ice-covered. This feedback is the primary reason the Arctic is warming 3–4× faster than the global average — a phenomenon called Arctic amplification. Secondary feedbacks (water vapour, lapse rate, Planck response) also contribute but the ice-albedo feedback is the strongest and most direct.`,
        },
        {
          q: 'Multi-year sea ice (ice that survives at least one summer melt season) has been declining rapidly in the Arctic. What physical properties distinguish it from first-year ice?',
          a: [
            'Multi-year ice is thinner and more fragile because it has been weakened by summer melt',
            'Multi-year ice is thicker (3–4 m (10–13 ft) vs. 1.5–2 m (5–7 ft)), less salty, and mechanically stronger because repeated melt-freeze cycles drain brine and consolidate ice crystals',
            'Multi-year ice has a higher albedo because its surface is darker from accumulated ocean sediment',
            'Multi-year ice and first-year ice have identical physical properties — only age differs',
          ],
          correct: 1,
          explain: `When first-year sea ice forms, it traps brine in channels at about 10–15 psu (vs. 34 psu seawater). Over subsequent winters, additional ice growth occurs beneath the existing ice (congelation ice) and snow compacts on top. During summer, meltwater percolates through the ice, flushing out brine pockets ("brine drainage") and leaving lower-salinity ice. After multiple cycles, multi-year ice is: (1) thicker (3–5 m (10–16 ft) vs. 1.5–2 m (5–7 ft) for first-year ice); (2) less salty (~0–4 psu vs. 5–15 psu for first-year ice); (3) mechanically stronger; (4) smoother on top but rougher on the bottom from freeze-melt-refreeze processes. Multi-year ice area in the Arctic declined from ~8 million km² (3,088,800 sq mi) in 1980 to ~3 million km² (1,158,300 sq mi) in recent years — the Arctic is increasingly dominated by thin, fragile first-year ice.`,
        },
        {
          q: 'Brine rejection during sea ice formation contributes to global ocean circulation. What specific mechanism does this drive?',
          a: [
            'Brine rejection warms the surrounding ocean water, driving upwelling of cold deep water to the surface',
            'Dense, cold, salty brine released during freezing sinks to the ocean floor, driving deep water formation that is part of the global thermohaline circulation',
            'Brine rejection creates freshwater lenses under the ice that drive horizontal ocean currents',
            'Expelled brine increases surface water density, driving mixing of the pycnocline layer',
          ],
          correct: 1,
          explain: `As sea ice forms, rejected brine increases the density of surrounding seawater (lower temperature + higher salinity = maximum density). This dense water sinks, forming the thermohaline circulation\'s deep water masses. Around Antarctica, this process forms Antarctic Bottom Water (AABW) — the densest, deepest water mass in the ocean, with temperatures near −0.9°C (30°F) and salinity ~34.7 psu — as sea ice forms over the continental shelves (especially Weddell and Ross Seas). AABW drives the deepest limb of the global conveyor belt, spreading cold, oxygenated water across the global ocean floor. In the North Atlantic, deep convection (linked to sea ice in the Labrador and Nordic Seas) forms North Atlantic Deep Water (NADW). Climate models suggest reduced sea ice formation from warming could weaken both AABW and NADW production, potentially disrupting the global ocean conveyor (AMOC).`,
        },
        {
          q: 'Arctic sea ice extent in September (the annual minimum) has declined at approximately 13% per decade since 1979. If this trend continues linearly, when would September Arctic sea ice reach near-zero extent?',
          a: [
            'By 2030 — the ice is declining so fast it could disappear within a decade',
            'By approximately 2040–2050, consistent with climate model projections for an "ice-free Arctic summer" under intermediate emissions scenarios',
            'By 2100 — ice loss is very gradual and the Arctic will retain significant ice throughout this century',
            'Never — natural variability will cause ice extent to recover before it reaches zero',
          ],
          correct: 1,
          explain: `Starting from ~7 million km² (2,702,700 sq mi) in 1979, declining at ~0.91 million km² (351,351 sq mi)/decade (13% of ~7 million km²), linear extrapolation reaches near-zero around 2050–2055. However, a linear fit is imperfect: the decline has been accelerating, particularly in recent decades. The record minimum was ~3.2 million km² (1,235,520 sq mi) in September 2012, and 2023 set a new record low. IPCC AR6 projects that "practically ice-free" Arctic summers (extent < 1 million km²) are likely to occur before 2050 under intermediate and high emissions scenarios (SSP2-4.5, SSP5-8.5), and possible but less certain under low emissions (SSP1-1.9). This threshold — commonly defined as <1 million km² rather than absolute zero — is considered ecologically and physically significant. Some models suggest it\'s already virtually certain under current trajectories.`,
        },
      ],
    },
  ],
}

export default seaIceArctic
