import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'astr-101-1-2-1',
  title: 'Mercury and Venus: Extremes of the Inner Solar System',
  description: 'A comparative study of the two innermost planets — Mercury\'s iron-rich composition and lobate scarp tectonics, and Venus\'s runaway greenhouse effect and volcanic resurfacing.',
  track: 'ast',
  trackName: 'Planetary Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Globe,
  color: BRAND.amethyst,
  cards: [
    {
      title: 'Mercury: A Shrunken World of Iron and Scarps',
      body: `Mercury is the smallest and innermost planet (radius 2,440 km, 0.38 Earth radii) yet has the second-highest mean density of any planet (5,430 kg/m³). This paradox — high density for such a small body — implies an anomalously large iron core comprising ~85 % of the planet's radius and ~70 % of its mass, compared to ~30 % by mass for Earth.\n\nTwo hypotheses explain the iron enrichment:\n1. **Giant impact stripping:** A large impactor removed most of Mercury's silicate mantle early in Solar System history, leaving a core-dominated remnant — analogous to the process proposed for the Moon, but more extreme.\n2. **Photophoretic sorting:** Early solar radiation pressure preferentially pushed lighter silicate particles outward from the innermost disc, concentrating iron-rich material close to the Sun.\n\n**Surface geology:** Mercury's heavily cratered highlands record the Late Heavy Bombardment. The **Caloris Basin** (1,550 km diameter) is one of the Solar System's largest impact structures; its formation sent seismic waves around the planet, creating chaotic "weird terrain" antipodally. Most remarkable are **lobate scarps** — thrust fault scarps hundreds of kilometres long and up to 3 km high — that crosscut craters of all ages, indicating planet-wide contraction (~7 km reduction in radius) as the interior cooled and solidified. **MESSENGER** (2011–2015) and **BepiColombo** (launched 2018, arrival ~2025) have mapped Mercury's surface and detected evidence for water ice in permanently shadowed polar craters.`,
      icon: Globe,
      color: BRAND.amethyst,
    },
    {
      title: 'Venus: Runaway Greenhouse and Volcanic Enigma',
      body: `Venus is Earth's near-twin in size (0.95 Earth radii, 0.81 Earth masses) but experiences a profoundly alien environment. Its surface temperature of ~465 °C exceeds Mercury's dayside, sustained by a dense CO₂ atmosphere (96.5 % CO₂, 3.5 % N₂, 92 bar surface pressure) that produces one of the most effective greenhouse effects in the Solar System.\n\n**Why is Venus so hot?** The runaway greenhouse hypothesis: Venus orbits ~30 % closer to the Sun than Earth. Greater insolation caused early oceans to evaporate; water vapour further amplified the greenhouse effect, leading to complete ocean loss via photodissociation and hydrogen escape. Without liquid water, the carbonate-silicate weathering cycle cannot remove volcanic CO₂, which accumulated over billions of years.\n\n**Geology:** The Soviet **Venera** landers (1970s–80s) and **Magellan** radar mapping (1990–1994) revealed a young-looking surface (~500–800 Ma mean age) dominated by volcanic plains, shield volcanoes (Maat Mons at 8 km height), coronae (circular tectonic collapse structures), and tesserae (heavily deformed ancient highland terrain). The resurfacing interpretation is debated: either Venus experienced a catastrophic global resurfacing event ~700 Ma ago, or it has continuous but episodic volcanism. The **DAVINCI**, **VERITAS** (NASA), and **EnVision** (ESA) missions planned for the 2030s will address whether Venus is volcanically active today and whether it was once habitable.\n\n**Rotation anomaly:** Venus rotates retrograde (opposite to its orbital direction) and extremely slowly — one Venusian day is ~243 Earth days, longer than its year (~225 days). The cause may be a giant impact or tidal coupling with the Sun.`,
      icon: Telescope,
      color: BRAND.amethyst,
    },
    {
      title: 'Comparative Atmospheres and Habitability History',
      body: `Venus and Earth started with similar inventories of volatiles (CO₂, water, nitrogen), delivered by cometary and asteroid bombardment. Their divergent histories offer a natural experiment in planetary habitability:\n\n**Venus's lost ocean:** Isotopic evidence from Venera measurements shows Venus's atmosphere has a D/H ratio ~150× Earth's. Because deuterium (²H) is heavier than protium (¹H) and escapes more slowly to space, a high D/H ratio indicates that a large water inventory was lost — consistent with ocean evaporation followed by hydrogen escape.\n\n**Was Venus ever habitable?** Some climate models (Way et al. 2016; 2020) suggest that a slowly rotating ancient Venus with a liquid ocean could have maintained moderate surface temperatures for up to ~3 billion years before a solar luminosity increase or volcanic CO₂ outgassing triggered the runaway. This would mean Venus was potentially habitable longer than Mars, fundamentally changing our view of the Solar System's habitable zone history.\n\n**Greenhouse comparisons:**\n- Earth: ~33 °C greenhouse effect, ~0.04 % CO₂ — within stable bounds due to the silicate-carbonate thermostat.\n- Venus: ~500 °C greenhouse effect, 96.5 % CO₂ — positive feedback has run to completion.\n- Mars: very weak greenhouse, <1 % CO₂ at 6 mbar — insufficient to warm the surface above freezing.\n\nThis trio illustrates how small differences in orbital distance, initial water inventory, and feedback strength can push otherwise similar planets to vastly different climate states.`,
      icon: Wind,
      color: BRAND.amethyst,
    },
  ],
  quiz: [
    {
      question: 'Mercury has the second-highest density of any planet despite being the smallest. What is the most widely accepted explanation?',
      options: [
        'A large early impact stripped most of Mercury\'s silicate mantle, leaving a disproportionately large iron core comprising ~70 % of Mercury\'s mass',
        'Mercury formed entirely from iron-rich planetesimals that happened to dominate the innermost disc, with no silicate mantle ever forming',
        'Mercury\'s strong magnetic field compresses its interior to higher density than would be expected from its composition alone',
        'High solar gravity near Mercury\'s orbit preferentially retained heavy iron atoms while lighter silicates escaped to space',
      ],
      correctIndex: 0,
      explain: 'The giant impact hypothesis is the leading explanation. It mirrors the lunar formation scenario but at much larger scale: a large protoplanet collided with proto-Mercury, ejecting silicate mantle material into space or into nearby orbits while the dense iron core remained bound. Mercury\'s surface composition (low-iron basalts, high sulfur) provides additional chemical constraints on this history.',
    },
    {
      question: 'Venus\'s D/H ratio in atmospheric water vapour is ~150× Earth\'s. How does this constrain Venus\'s water history?',
      options: [
        'Preferential loss of lighter hydrogen (¹H) over deuterium (²H) to space over time produces a high D/H ratio; the extreme enrichment implies a large initial water inventory that was gradually depleted, consistent with a lost ancient ocean',
        'A high D/H ratio indicates that Venus\'s water was delivered by D-rich comets from the outer Solar System, not by early Solar System bombardment',
        'The high D/H ratio reflects contamination of the Venusian atmosphere by cometary impacts over the past billion years, not ancient ocean loss',
        'D/H ratios are controlled by temperature alone; Venus\'s extreme surface heat fractionates hydrogen isotopes, producing the observed enrichment regardless of water history',
      ],
      correctIndex: 0,
      explain: 'Hydrogen escapes to space via hydrodynamic escape and photodissociation. The escape rate is inversely proportional to atomic mass, so ¹H escapes ~√2 times faster than ²H. Over geological time, preferential ¹H loss enriches the residual water in deuterium. The very high D/H ratio on Venus means that only a tiny fraction of the original water inventory remains — consistent with the evaporation and loss of an ancient ocean.',
    },
    {
      question: 'Venus\'s surface appears relatively young (~500–800 Ma mean crater age) and lacks the heavily cratered terrain that dominates Mercury and the Moon. What does this imply?',
      options: [
        'Venus experienced either a catastrophic global volcanic resurfacing event ~700 Ma ago that buried older craters, or ongoing volcanism that continuously repaves the surface, erasing the crater record',
        'Venus\'s thick atmosphere efficiently burns up all incoming impactors, preventing craters from forming at the surface regardless of surface age',
        'Impacts on Venus create shallow craters that erode rapidly due to the high-pressure, high-temperature atmosphere and sulfuric acid rain',
        'Venus\'s young surface age is an artefact of Magellan radar resolution — older craters exist but were too small to detect with 1990s technology',
      ],
      correctIndex: 0,
      explain: 'Venus\'s thick atmosphere does filter small impactors, but large impactors still create craters. The near-uniform age distribution of craters (no concentration in highlands vs. lowlands) and the scarcity of degraded ancient craters points to a resurfacing event rather than continuous slow erosion. The debate is whether this was one catastrophic event or distributed episodic volcanism — the upcoming VERITAS and DAVINCI missions are designed to resolve this.',
    },
  ],
}

export default lesson
