import { Waves, Globe, Sun } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const polarOceans: Lesson = {
  id: 'ocea-101-1-3-4',
  title: 'Polar Oceans and Ice-Edge Ecosystems',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 140,
  description: "The Arctic and Southern oceans are the planet's cold engines — driving global ocean circulation, exploding with life each polar summer, and serving as the most sensitive indicators of a rapidly changing climate.",
  sources: [
    { org: 'NOAA',     title: 'Arctic and Antarctic Sea Ice',                                url: 'https://nsidc.org/cryosphere/seaice/' },
    { org: 'NOAA',     title: 'State of the Climate: Global Snow and Ice',                  url: 'https://www.ncei.noaa.gov/access/monitoring/monthly-report/' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 14 (CC-BY 4.0)',           url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'IPCC',     title: 'Special Report on Ocean and Cryosphere (SROCC)',             url: 'https://www.ipcc.ch/srocc/' },
    { org: 'BAS',      title: 'British Antarctic Survey — Southern Ocean Research',         url: 'https://www.bas.ac.uk/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The cold engines of the ocean',
      body: `The polar oceans are among the most extreme and productive environments on Earth. For most of the year they are locked under sea ice or swept by storms, yet every polar spring they erupt with life in some of the most intense biological blooms found anywhere in the ocean. The Arctic Ocean and the Southern Ocean surrounding Antarctica are not simply cold versions of temperate seas — they are fundamentally different ecosystems shaped by sea ice, extreme seasonality, and physical processes that connect them to the global ocean through the deep.

The **Arctic Ocean** is a nearly enclosed sea surrounded by continents, with a shallow continental shelf that covers nearly half its area. It receives large inputs of freshwater from rivers (the Ob, Yenisei, Lena, and Mackenzie), which form a low-salinity surface layer that caps warmer Atlantic and Pacific water below. Sea ice covers most of the basin in winter and retreats dramatically in summer — a pattern that is accelerating rapidly as the Arctic warms at roughly four times the global average rate. The Arctic is home to polar bears, walrus, ringed seals, beluga and bowhead whales, and enormous populations of seabirds.

The **Southern Ocean** is the opposite in physical character: a continuous ring of water around Antarctica with no landmass interrupting the westerly winds that drive the most powerful current in the ocean, the Antarctic Circumpolar Current (ACC). The ACC keeps warm Atlantic, Pacific, and Indian Ocean water away from Antarctica, maintaining an ocean that is both colder and more biologically productive than the Arctic. Antarctic krill — a small shrimp-like crustacean — is the keystone species of the Southern Ocean food web, directly feeding penguins, seals, albatross, and the great baleen whales. Antarctic krill may be the most biomass-rich multi-cellular animal species on Earth.`,
      keyTerms: [
        { term: 'Sea ice',                def: 'Ice formed from the freezing of seawater (not from glaciers or ice sheets, which are freshwater ice). Sea ice is relatively thin (1–4 m (3–13 ft)) and seasonal, and it forms a platform habitat for ice algae, seals, and polar bears. Its extent governs the albedo of polar regions and drives polar circulation through brine rejection.' },
        { term: 'Brine rejection',        def: 'When seawater freezes, sea salts are excluded from the ice crystal structure and concentrated into surrounding water. This cold, salty, dense brine sinks and drives the formation of Antarctic Bottom Water and Arctic deep water, the densest water masses in the ocean and key drivers of global thermohaline circulation.' },
        { term: 'Antarctic krill',        def: 'Euphausia superba — a shrimp-like crustacean 4–6 cm (1.6–2.4 in) long that forms the cornerstone of the Southern Ocean food web. Total biomass estimated at 300–500 million tonnes (551.0 million tons). Eaten by penguins, seals, albatross, and all baleen whale species. Can survive winter by feeding on ice algae and reducing their metabolism.' },
        { term: 'Ice-edge bloom',         def: 'A massive phytoplankton bloom that erupts each spring along the receding sea ice margin. As ice melts, it releases nutrients and stabilises the surface layer with a fresh meltwater lens; combined with increasing light, this triggers explosive phytoplankton growth that forms the base of polar food webs.' },
        { term: 'Polynya',                def: 'An area of persistent open water surrounded by sea ice, maintained by upwelling of warm water or strong winds. Polynyas are biological hotspots — they remain productive year-round when surrounding areas are ice-covered and serve as critical overwintering habitat for penguins, whales, and seals.' },
      ],
    },
    {
      type: 'concept',
      title: 'Sea ice, polar food webs, and climate change',
      body: `**Sea ice as a habitat and climate driver.** Sea ice is not simply a barrier to life — it is a habitat. The underside of sea ice is colonised by **ice algae** (diatoms and other microalgae that grow in the brine channels within the ice), which provide a critical food source for krill, copepods, and amphipods throughout the long polar winter when surface waters are dark. When ice melts in spring, these organisms seed the ice-edge bloom and are released into the water column to be consumed. Ice also provides a platform: ringed seals haul out on ice to give birth; polar bears hunt seals from the ice surface; emperor penguins breed on fast ice attached to the Antarctic continent.

The freezing and melting of sea ice also drives ocean circulation. When seawater freezes, it expels salt (brine rejection), producing extremely cold, dense water that sinks to the deep ocean. In the Arctic, this forms **North Atlantic Deep Water (NADW)**; in the Southern Ocean, it forms **Antarctic Bottom Water (AABW)** — the densest water in the ocean. AABW spreads northward along the ocean floor to fill the deep basins of all the world's oceans. The rate of AABW formation has decreased measurably in recent decades as polar warming freshens the surface ocean, reducing the density contrast that drives sinking; this represents a potential weakening of the global thermohaline circulation.

**The Southern Ocean food web.** Antarctic krill (*Euphausia superba*) is the pivot of the Southern Ocean food web. These animals grow to about 6 cm (2.4 in), live up to 6 years, and aggregate in swarms dense enough to turn the sea red; swarm densities of 10,000–30,000 individuals per cubic metre have been recorded. Krill feed primarily on ice algae and phytoplankton during summer; in winter, they survive by grazing algae from the underside of sea ice and by shrinking their bodies — one of the few animals known to become smaller when food is scarce. Krill are eaten directly by virtually every large Southern Ocean predator: **chinstrap, Adélie, and macaroni penguins** eat little else; **leopard seals and crabeater seals** (despite the name, crabeater seals eat almost exclusively krill); **humpback, blue, and fin whales** migrate from the tropics specifically to feed in krill-rich Antarctic waters.

**Arctic food webs and the sea ice edge.** The Arctic food web has a different structure from the Southern Ocean but is equally tightly coupled to sea ice. **Arctic cod** (*Boreogadus saida*) play the role filled by krill in the Antarctic — they are the critical link between zooplankton and higher predators. Arctic cod spawn under ice, shelter in sea ice habitat as juveniles, and are eaten by ringed seals, beluga whales, narwhals, and seabirds. As sea ice retreats, Pacific and Atlantic cod species are moving poleward, competing with Arctic cod and potentially restructuring the food web. The loss of multiyear sea ice — ice that survives more than one summer — removes the stable habitat that many ice-dependent species require.

**Polar amplification and ecosystem change.** The Arctic is warming at roughly 4× the global average rate — a phenomenon called **polar amplification** — driven partly by **ice-albedo feedback**: as white, reflective ice is replaced by dark ocean water, more solar radiation is absorbed rather than reflected, accelerating warming. Arctic sea ice extent in September (summer minimum) has declined by roughly 13% per decade since satellite records began in 1979; the Arctic Ocean may experience ice-free summers by the 2030s or 2040s. The Southern Ocean has been more variable but its sea ice extent set record lows in 2022 and 2023. Ecological consequences are already visible: polar bear body condition is declining as ice-hunting seasons shorten; Adélie penguin colonies are shifting poleward; the range of Atlantic and Pacific species is expanding into previously Arctic or sub-Antarctic waters. The polar oceans are both the most sensitive indicators of climate change and, through their role in driving global circulation and storing carbon, among the most consequential for the planetary system as a whole.`,
      cards: [
        {
          name: 'Sea Ice Ecology',
          icon: Sun,
          color: BRAND.gold,
          desc: 'Underside of sea ice: colonised by diatoms in brine channels → fed upon by copepods, krill, amphipods through winter darkness. Ice surface: platform for ringed seal pupping, polar bear hunting, emperor penguin breeding. Spring melt releases ice algae, seeding the ice-edge bloom. Multiyear ice (survives >1 summer) provides stable cold-adapted habitat now declining rapidly.',
          examples: 'Ice algae: up to 50% of Arctic primary production in some regions · Emperor penguin: only animal to breed on Antarctic sea ice in winter · Polar bear: depends on sea ice to hunt ringed seals; body condition declining as ice-free season lengthens',
        },
        {
          name: 'Antarctic Krill and Southern Ocean Food Web',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Euphausia superba: 4–6 cm (1.6–2.4 in), total biomass ~300–500 Mt, swarms at 10,000+ per m³. Feeds on ice algae and phytoplankton; survives winter by body shrinkage and ice-algae grazing. Eaten directly by Adélie/chinstrap/macaroni penguins, crabeater seals, leopard seals, humpback/blue/fin/minke whales, albatross. Krill fishery (>200,000 t/yr) managed under CCAMLR.',
          examples: 'Blue whale: feeds almost exclusively on Antarctic krill in southern summer · Crabeater seal: most abundant seal on Earth (~15 Mt), 90%+ diet is krill · Krill body shrinkage: one of the only known cases of adult animals becoming smaller when food is scarce',
        },
        {
          name: 'Polar Amplification and Climate Feedbacks',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Arctic warming 4× global average. Ice-albedo feedback: ice loss → more dark ocean → more solar absorption → more warming. Arctic September ice extent down ~13%/decade since 1979. Ice-free Arctic summers projected for 2030s–2040s. Brine rejection weakening: freshening surface ocean reduces AABW/NADW formation → global circulation slowing. Permafrost thaw: Arctic land releasing methane and CO₂, additional positive feedback.',
          examples: 'Arctic sea ice minimum 2012: record low of 3.41 × 10⁶ km² · Southern Ocean sea ice 2023: record low extent, ~1 × 10⁶ km² below previous records · Atlantic water intrusion: warm Atlantic water now regularly detected under Arctic sea ice ("Atlantification")',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Antarctic Bottom Water (AABW) is described as the densest water in the ocean and the main driver filling deep ocean basins globally. What process produces AABW, and why are scientists concerned that its formation rate may be declining?",
          a: [
            "AABW forms when warm surface water in the tropics evaporates, increasing salinity and eventually sinking at the poles; its formation is declining because tropical evaporation is decreasing as global humidity increases",
            "AABW forms by brine rejection as seawater freezes around Antarctica — expelled salt concentrates in surrounding water, creating extremely cold, salty, dense water that sinks to the seafloor; its formation is declining because polar warming and increased glacial meltwater are freshening the surface ocean, reducing the density contrast needed for sinking",
            "AABW forms when cold Arctic winds cool the surface Southern Ocean to below freezing, causing dense cold water to sink; its formation is declining because Arctic warming is reducing cold wind outflow from the North Pole to the Southern Hemisphere",
            "AABW forms from deep volcanic heating of Antarctic sediments, which drives convective overturn; its formation is declining because volcanic activity beneath Antarctica is decreasing in the current geological era",
          ],
          correct: 1,
          explain: "Tropical evaporation (A) does increase salinity of subtropical water that eventually reaches the poles, but the direct trigger for AABW formation is not tropical evaporation; it is the brine rejection process in Antarctic polynyas and coastal polynyas specifically. Arctic winds cooling the Southern Ocean (C) conflates Northern and Southern Hemisphere processes; while cold atmospheric temperatures help, the formation of AABW requires the specific salt concentration that comes from sea ice formation and brine rejection. Volcanic heating (D) is negligible compared to the density-driven sinking mechanism. The correct answer is B: as seawater freezes into sea ice, the ice crystal structure can only accommodate water molecules, excluding dissolved salts. These salts concentrate into the remaining liquid water, which becomes colder and saltier (denser) than the surrounding ocean and sinks. This process operates most intensively in coastal Antarctic polynyas, where strong katabatic winds blow sea ice away from the coast as fast as it forms, allowing continuous freezing and brine rejection. The concern is that anthropogenic warming is melting the Greenland and Antarctic ice sheets, injecting large volumes of fresh (low-density) meltwater into the polar surface oceans, which dilutes the brine and reduces the density excess that drives sinking; measurements since 2000 show AABW formation has declined measurably.",
        },
        {
          q: "Antarctic krill have been observed to survive Antarctic winter — a season of total darkness when phytoplankton production falls to near zero — by a combination of two unusual strategies. What are these strategies, and what does their evolution reveal about the selective pressure of polar seasonality?",
          a: [
            "Krill hibernate in sediment burrows during winter and enter a dormant state with near-zero metabolism, similar to mammalian hibernation; they also accumulate fat reserves during summer to sustain hibernation, which is why krill are energy-rich prey for baleen whales",
            "Krill feed on ice algae growing on the underside of sea ice and on detritus on the seafloor during winter; they also shrink their bodies — actually becoming smaller as adults, catabolising their own muscle tissue — reducing their metabolic requirements when food is scarce",
            "Krill switch to chemosynthetic feeding during winter, extracting energy from the sulfide-rich sediments around Antarctic deep-sea vents, returning to phytoplankton feeding in spring; body shrinkage allows them to fit through sediment pores to access vent communities",
            "Krill form aggregations during winter and enter a collective dormancy; individual krill in the centre of a swarm reduce metabolism by 90% and are maintained by secretions from krill on the periphery that remain active",
          ],
          correct: 1,
          explain: "Sediment hibernation (A) is not a known krill behaviour; while krill can descend in the water column in winter, they do not burrow into sediments and their winter survival involves active (if reduced) metabolism. The fat-accumulation point in A is partially correct but misidentifies the mechanism; it does not account for how krill feed during winter darkness. Chemosynthetic feeding (C) is not observed or plausible for krill; Antarctic vents are rare and not accessible from the water column to a 4–6 cm (1.6–2.4 in) pelagic crustacean. Collective dormancy with secretion maintenance (D) has no basis in krill biology. The correct answer is B: Antarctic krill exhibit two documented winter survival strategies. First, they graze on **microalgae growing in brine channels on the underside of sea ice** — a food source unique to polar sea ice and one of the key ecological services provided by sea ice habitat. Second, krill are one of the few animals known to reverse growth: when food is scarce, adults actually become smaller in body size, catabolising muscle protein to meet energetic demands. This reduces their metabolic requirements without requiring dormancy. Together these strategies allow a key food-web species to persist through polar winter in functional condition, ready to exploit the spring ice-edge bloom. This reveals intense selection pressure imposed by polar seasonality: species that cannot survive winter with minimal resources cannot persist in polar food webs.",
        },
        {
          q: "The Arctic is warming at approximately four times the global average rate — a phenomenon called polar amplification. The ice-albedo feedback is the primary driver. Explain the feedback mechanism and why it makes the Arctic particularly sensitive to small initial warming.",
          a: [
            "Ice is white and reflects most incoming solar radiation (high albedo ~0.8); as warming melts ice, it is replaced by dark ocean water (low albedo ~0.06), which absorbs far more solar energy; this additional absorption warms the ocean further, melting more ice, creating a self-reinforcing loop that amplifies any initial warming",
            "Sea ice prevents evaporation from the Arctic Ocean; as ice melts, evaporation increases, releasing latent heat into the atmosphere which warms the air above the ocean; this warmed air melts more ice, amplifying the initial warming signal",
            "Ice reflects solar radiation but also emits significant infrared radiation to space; as ice melts, less infrared is emitted, causing the remaining heat to be trapped, warming the ocean, melting more ice, and creating a positive feedback loop",
            "Polar amplification occurs because the Arctic atmosphere is thinner than at lower latitudes, allowing more solar radiation to reach the surface; as warming proceeds, the atmosphere thickens through increased water vapour, trapping more heat and further accelerating warming",
          ],
          correct: 0,
          explain: "While evaporation does increase over open Arctic water (B), this is a secondary effect; latent heat release occurs when vapour condenses higher in the atmosphere, and the primary amplification mechanism is not driven by evaporation. Ice does emit infrared radiation (C), but the claim that it emits more than liquid ocean is incorrect — emissivity of ice and ocean water are both near 1.0, so the difference is negligible; the albedo (visible light reflection) difference is the key, not infrared emission. The atmosphere is not meaningfully thinner at the poles (D); atmospheric pressure at the surface does not vary systematically with latitude in the relevant way. The correct answer is A: the ice-albedo feedback is straightforward in principle but profound in consequence. Sea ice and snow have albedos of 0.5–0.9 (reflecting 50–90% of incoming solar radiation); open ocean has an albedo of ~0.06 (reflecting only 6%, absorbing 94%). When any warming event — whether from greenhouse gases, volcanic forcing, or orbital changes — begins melting Arctic ice, it exposes dark ocean surface that absorbs dramatically more solar energy. This extra energy warms the ocean further, melts more ice, exposes more dark water, and so on. The feedback is a positive loop: the more ice that melts, the stronger the warming, the more ice that melts. This is why the Arctic has warmed ~4°C (39°F) since 1980 while the global average is ~0.9°C (34°F), and why climate models consistently show polar amplification as one of the most robust features of anthropogenic warming.",
        },
        {
          q: 'The Arctic Ocean has a distinctive two-layer structure with a cold, low-salinity surface layer overlying warmer, saltier Atlantic water at depth. What creates and maintains this stratification, and why does it have important consequences for sea ice and Arctic warming?',
          a: [
            'The surface freshwater layer forms because Arctic seawater is less saline than Atlantic water — a difference that dates back to the formation of the Atlantic Ocean; the stratification is a permanent geological feature that will not change with climate',
            'Large Arctic rivers (Ob, Yenisei, Lena, Mackenzie) deliver enormous volumes of freshwater to the Arctic Ocean, creating a low-salinity surface lens; this lens is less dense than the underlying salty Atlantic water and floats above it; the stratification insulates the sea ice from the warm Atlantic water below, allowing ice to persist; as this "halocline" weakens due to increased glacial melt and changing river inputs, warm Atlantic water can mix upward (a process called Atlantification), melting ice from below',
            'The surface freshwater layer forms by evaporation: warm Atlantic water evaporates more rapidly than cold Arctic water, concentrating salt in the Atlantic layer and leaving a fresh surface film; summer sunshine drives this evaporation process, which reverses in winter when ice forms',
            'The layering is maintained by submarine ridges that physically separate fresher Arctic basin water from saltier Atlantic inflow; as climate change erodes these ridges through increased seafloor erosion, the barrier breaks down and warm Atlantic water floods the Arctic basin',
          ],
          correct: 1,
          explain: "Permanent geological differences in salinity (A) is incorrect — the Arctic Ocean's salinity structure is dynamic and responsive to freshwater inputs; it is not a fixed geological feature; the halocline has already measurably changed in recent decades. Evaporation concentrating Atlantic salt (C) is backwards — evaporation removes water and would concentrate all dissolved salts in the remaining water, not create a fresh surface layer; evaporation is not the source of freshwater to the Arctic. Submarine ridge erosion (D) is not a real mechanism — ocean ridges are geological structures maintained by plate tectonics and are not being eroded away by climate change; they do influence ocean circulation by channelling flow but do not physically separate water masses in the way described. The correct answer is B: the Arctic Ocean receives more freshwater input relative to its size than any other ocean — from four of the world's largest rivers, from precipitation, and from seasonal sea ice melt; this freshwater is less dense than seawater and floats on top, forming a cold, low-salinity surface layer called the Arctic halocline; this halocline acts as a density barrier that isolates the warm, salty Atlantic Water (which intrudes at depths of 150–900 m (492–2,953 ft)) from the sea ice above; without this insulating layer, the Atlantic heat would melt ice from below; recent research shows that this barrier is weakening — Atlantification is warming the subsurface Arctic — and represents a destabilising feedback: as ice melts, more freshwater is added to the surface, initially strengthening the halocline, but changes in Atlantic inflow and circulation are simultaneously eroding it, with consequences for sea ice stability that remain an active area of research.",
        },
      ],
    },
  ],
}

export default polarOceans
