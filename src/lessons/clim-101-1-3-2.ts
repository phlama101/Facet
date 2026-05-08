import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-2',
  title: 'Sea Level Rise, Ice Sheet Dynamics, and Cryosphere Change',
  description: 'How the cryosphere — glaciers, ice sheets, sea ice, and permafrost — is responding to warming, what drives sea level rise, and what the projections imply for coastlines this century.',
  track: 'cli',
  trackName: 'Climate Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Globe,
  color: BRAND.jade,
  cards: [
    {
      title: 'Components and Budget of Sea Level Rise',
      body: `Global mean sea level (GMSL) has risen approximately 20 cm since 1900, with the rate accelerating from ~1.7 mm/yr over the 20th century to ~3.7 mm/yr over 2006–2018, and >4 mm/yr in the 2020s (satellite altimetry). The rise has three main components:\n\n1. **Thermal expansion (steric):** Ocean water expands as it warms; this contributes ~40 % of the observed rate.\n2. **Glaciers and ice caps (excluding Greenland and Antarctica):** Mountain glaciers worldwide are retreating; they contribute ~20 % of current rise and are the most sensitive cryosphere component to near-term warming.\n3. **Ice sheets:** Greenland Ice Sheet (GIS) and West Antarctic Ice Sheet (WAIS) are losing mass through surface melt-runoff and dynamic discharge of marine-terminating glaciers; combined they now account for ~40 % of the current rise and represent the main source of long-term uncertainty.\n\nSatellite gravimetry (GRACE/GRACE-FO) since 2002 independently confirms ice mass loss by measuring gravitational changes over Greenland and Antarctica. The ice-sheet contribution has tripled since the 1990s, driven primarily by acceleration of outlet glaciers due to oceanic warming.`,
      icon: Globe,
      color: BRAND.jade,
    },
    {
      title: 'Ice Sheet Dynamics and Marine Ice Sheet Instability',
      body: `The greatest concern for long-term sea level rise is the potential destabilisation of marine ice sheets — ice grounded below sea level. The West Antarctic Ice Sheet sits on a retrograde bed (deepening inland), making it susceptible to Marine Ice Sheet Instability (MISI): warm ocean water intrudes beneath ice shelves, melts them from below, reduces their buttressing effect on outlet glaciers, and allows faster flow. Once a glacier retreats past a grounding-line sill onto a deeper retrograde slope, retreat may become self-sustaining.\n\nKey vulnerable systems:\n• **Thwaites Glacier (WAIS):** Often called the "doomsday glacier." Its grounding line is retreating into deeper water; loss of Thwaites alone could eventually raise sea level by 65 cm, with destabilisation of adjacent glaciers potentially adding several metres over centuries.\n• **Marine Ice Cliff Instability (MICI):** A proposed but debated mechanism whereby tall exposed ice cliffs calve catastrophically after ice shelf loss.\n• **Greenland:** Mass loss is dominated by surface melt (amplified by the ice-albedo feedback) and calving. Greenland contains ~7 m sea level equivalent; complete loss would take centuries to millennia.\n\nIPCC AR6 projects likely GMSL rise of 0.32–0.62 m by 2100 under SSP1-2.6, and 0.63–1.01 m under SSP5-8.5. Low-likelihood high-impact scenarios including MISI could produce >2 m by 2100 and tens of metres over subsequent centuries.`,
      icon: Thermometer,
      color: BRAND.jade,
    },
    {
      title: 'Sea Ice, Permafrost, and Cryosphere Feedbacks',
      body: `**Arctic sea ice** has declined dramatically: September (minimum) extent has decreased ~13 % per decade since 1979, and Arctic sea ice is projected to become essentially ice-free in summer before 2050 under all emission scenarios. This drives the **ice-albedo feedback** — as reflective white ice is replaced by dark open ocean (albedo ~0.07 vs ~0.85), more solar energy is absorbed, amplifying warming. Sea ice loss does not directly raise sea level (floating ice), but reshapes atmospheric circulation, potentially influencing mid-latitude weather patterns through jet stream weakening.\n\n**Permafrost** — perennially frozen ground covering ~24 % of Northern Hemisphere land — stores an estimated 1,500 Gt of carbon (roughly twice the atmospheric CO₂ burden). Thawing permafrost releases CO₂ and CH₄ (the latter ~30× more potent over 100 years) through microbial decomposition of previously frozen organic matter. This constitutes a significant positive feedback loop that most climate models partially underestimate because the relevant soil processes are poorly represented. Current observations show widespread permafrost warming and active-layer deepening across Siberia, Alaska, and northern Canada.\n\n**Mountain glaciers** are retreating on every continent, threatening freshwater supply to hundreds of millions of people (Andes, Himalayas, Alps) and increasing the frequency of glacial lake outburst floods (GLOFs).`,
      icon: Wind,
      color: BRAND.jade,
    },
  ],
  quiz: [
    {
      question: 'The rate of global mean sea level rise has accelerated from ~1.7 mm/yr in the 20th century to >4 mm/yr in the 2020s. What does this acceleration primarily reflect?',
      options: [
        'Growing contributions from ice sheet mass loss (Greenland and Antarctica), which have tripled since the 1990s as marine-terminating glaciers accelerated',
        'Thermal expansion increasing exponentially as deep ocean waters warm faster than surface waters',
        'Mountain glacier loss, which has become the dominant contributor as all glaciers enter rapid retreat',
        'Changes in land water storage from groundwater extraction masking the true rate in earlier decades',
      ],
      correctIndex: 0,
      explain: 'The acceleration is primarily driven by the rising ice-sheet contribution. Glacier discharge from Greenland and Antarctica increased roughly threefold between the 1990s and 2010s as warm ocean water melted ice shelves from below and destabilised grounding lines. Thermal expansion and mountain glaciers contribute significantly but have not tripled in rate.',
    },
    {
      question: 'Why is the West Antarctic Ice Sheet considered particularly vulnerable to rapid, potentially irreversible retreat?',
      options: [
        'Its bed deepens inland (retrograde slope), so once a grounding line retreats past a sill, warm ocean water can access deeper ice, potentially triggering self-sustaining retreat (Marine Ice Sheet Instability)',
        'West Antarctica receives less snowfall than East Antarctica, so mass balance is more easily tipped negative',
        'Its ice shelves are thinner than those of East Antarctica, making them more sensitive to air temperature increases',
        'It sits at lower latitude than East Antarctica and therefore receives more solar radiation',
      ],
      correctIndex: 0,
      explain: 'MISI arises specifically because the retrograde (inland-deepening) bed geometry means retreat moves the grounding line into progressively deeper water. Deeper water drives more basal melting and faster flow, which drives further retreat — a positive feedback. This geometry, rather than snowfall, shelf thickness, or latitude, is the key vulnerability.',
    },
    {
      question: 'Thawing permafrost is considered an important climate feedback. Which statement best explains why most climate models partially underestimate this feedback?',
      options: [
        'Permafrost carbon decomposition processes (soil microbiology, thermokarst dynamics) are poorly represented in Earth system models, so the carbon released per degree of warming is likely larger than current projections suggest',
        'The total carbon stored in permafrost soils is small relative to the ocean carbon reservoir, so the impact is negligible on century timescales',
        'Methane from permafrost oxidises to CO₂ within hours, eliminating its climate impact before it reaches the atmosphere',
        'Permafrost is only found in areas where warming is below the global average, so the local feedback does not influence global temperature',
      ],
      correctIndex: 0,
      explain: 'Permafrost contains ~1,500 Gt of carbon — roughly twice the current atmospheric burden. The biological and hydrological processes that control decomposition rates (thermokarst lake formation, anaerobic vs aerobic pathways, abrupt thaw events) are complex and not well captured by current land-surface schemes. Methane\'s high warming potential and the sheer carbon inventory make this a first-order concern.',
    },
  ],
}

export default lesson
