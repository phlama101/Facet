// All geological feature data for the Living Atlas.
// Coordinates are [lat, lng] tuples for Leaflet.

export type BoundaryType = 'divergent' | 'convergent' | 'transform'
export type VolcanoType = 'shield' | 'stratovolcano' | 'caldera' | 'cinder'
export type CurrentType = 'warm' | 'cold'

export interface PlateBoundary {
  id: string
  name: string
  type: BoundaryType
  description: string
  plates: string
  coordinates: [number, number][]
}

export interface Volcano {
  id: string
  name: string
  lat: number
  lng: number
  type: VolcanoType
  country: string
  elevationM: number
  lastEruption: string
  description: string
  isActive: boolean
}

export interface OceanCurrent {
  id: string
  name: string
  type: CurrentType
  description: string
  coordinates: [number, number][]
}

export interface Hotspot {
  id: string
  name: string
  lat: number
  lng: number
  description: string
  features: string
}

// ─── Plate Boundaries ─────────────────────────────────────────────────────────

export const PLATE_BOUNDARIES: PlateBoundary[] = [
  // DIVERGENT ─────────────────────────────────────────────────────────────────
  {
    id: 'gakkel-ridge',
    name: 'Gakkel Ridge',
    type: 'divergent',
    description: 'The world\'s deepest and slowest-spreading mid-ocean ridge, hidden beneath the Arctic Ocean. Spreading just 6–33 mm/yr.',
    plates: 'North American Plate / Eurasian Plate',
    coordinates: [[85,60],[83,30],[80,10],[78,-5],[75,-7],[72,-8]],
  },
  {
    id: 'mid-atlantic-ridge-north',
    name: 'Mid-Atlantic Ridge (North)',
    type: 'divergent',
    description: 'The world\'s longest mountain range — entirely underwater. The seafloor spreads ~2.5 cm/yr, slowly widening the Atlantic Ocean.',
    plates: 'North American Plate / Eurasian Plate',
    coordinates: [[72,-8],[66,-18],[63,-22],[60,-30],[55,-35],[50,-30],[45,-28],[40,-33],[38,-30]],
  },
  {
    id: 'mid-atlantic-ridge-south',
    name: 'Mid-Atlantic Ridge (South)',
    type: 'divergent',
    description: 'Southern segment of the Mid-Atlantic Ridge, separating South America from Africa. Meets the SW Indian Ridge at the Bouvet Triple Junction.',
    plates: 'South American Plate / African Plate',
    coordinates: [[38,-30],[30,-40],[22,-43],[15,-45],[8,-38],[0,-20],[-5,-14],[-10,-13],[-20,-13],[-30,-14],[-40,-17],[-45,-11],[-50,-8],[-54,0]],
  },
  {
    id: 'east-pacific-rise',
    name: 'East Pacific Rise',
    type: 'divergent',
    description: 'One of Earth\'s fastest-spreading ridges at 6–16 cm/yr. Stretches from the Gulf of California to the Southern Ocean.',
    plates: 'Pacific Plate / Nazca & Cocos Plates',
    coordinates: [[26,-110],[22,-108],[18,-105],[12,-104],[5,-104],[0,-104],[-5,-107],[-10,-110],[-15,-113],[-25,-115],[-35,-112],[-45,-113],[-52,-116]],
  },
  {
    id: 'juan-de-fuca-ridge',
    name: 'Juan de Fuca Ridge',
    type: 'divergent',
    description: 'Small but volcanically active spreading ridge off the Pacific Northwest. The remnant of the ancient Farallon Plate.',
    plates: 'Juan de Fuca Plate / Pacific Plate',
    coordinates: [[49,-130],[47,-129],[45,-130],[43,-130],[41,-131]],
  },
  {
    id: 'carlsberg-central-indian-ridge',
    name: 'Carlsberg & Central Indian Ridge',
    type: 'divergent',
    description: 'Separates the African and Indian plates; runs from the Gulf of Aden south to the Rodriguez Triple Junction.',
    plates: 'African Plate / Indian Plate',
    coordinates: [[12,47],[8,52],[5,60],[0,65],[-5,67],[-10,66],[-20,68],[-30,72],[-38,75]],
  },
  {
    id: 'sw-indian-ridge',
    name: 'Southwest Indian Ridge',
    type: 'divergent',
    description: 'Ultra-slow spreading ridge (~14 mm/yr) connecting the Mid-Atlantic and Indian Ocean ridge systems beneath the Southern Ocean.',
    plates: 'African Plate / Antarctic Plate',
    coordinates: [[-38,75],[-42,65],[-45,50],[-48,38],[-51,25],[-54,12],[-55,5]],
  },
  {
    id: 'se-indian-ridge',
    name: 'Southeast Indian Ridge',
    type: 'divergent',
    description: 'Intermediate-spreading ridge (~67 mm/yr) separating the Australian and Antarctic plates in the Southern Ocean.',
    plates: 'Australian Plate / Antarctic Plate',
    coordinates: [[-38,75],[-40,88],[-42,100],[-44,113],[-47,126],[-50,140],[-53,148]],
  },
  {
    id: 'east-african-rift',
    name: 'East African Rift System',
    type: 'divergent',
    description: 'The African continent is tearing itself apart. In ~10 million years, eastern Africa will separate to form a new ocean basin.',
    plates: 'Nubian Plate / Somali Plate',
    coordinates: [[14,42],[12,42],[8,40],[5,38],[2,36],[0,36],[-3,36],[-8,36],[-12,35],[-16,35],[-20,35]],
  },

  // CONVERGENT ─────────────────────────────────────────────────────────────────
  {
    id: 'cascadia',
    name: 'Cascadia Subduction Zone',
    type: 'convergent',
    description: 'The Juan de Fuca Plate dives beneath North America. A locked megathrust here will produce a magnitude 8–9 earthquake — the "Really Big One" for the Pacific Northwest.',
    plates: 'Juan de Fuca Plate / North American Plate',
    coordinates: [[50,-128],[48,-126],[46,-124],[44,-125],[42,-126],[40,-126]],
  },
  {
    id: 'middle-america-trench',
    name: 'Middle America Trench',
    type: 'convergent',
    description: 'The Cocos Plate subducts beneath the Caribbean Plate, driving the volcanic arc from Mexico through Central America.',
    plates: 'Cocos Plate / Caribbean & North American Plates',
    coordinates: [[19,-105],[16,-100],[13,-93],[10,-88],[8,-83],[5,-79]],
  },
  {
    id: 'peru-chile-trench',
    name: 'Peru-Chile (Andean) Trench',
    type: 'convergent',
    description: 'The Nazca Plate subducts beneath South America, building the Andes — Earth\'s longest continental mountain range. Site of the 1960 Valdivia earthquake (Mw 9.5), the strongest ever recorded.',
    plates: 'Nazca Plate / South American Plate',
    coordinates: [[2,-81],[0,-82],[-5,-81],[-10,-78],[-15,-75],[-20,-72],[-25,-71],[-30,-72],[-35,-74],[-45,-76],[-55,-68]],
  },
  {
    id: 'aleutian-trench',
    name: 'Aleutian Trench',
    type: 'convergent',
    description: 'The Pacific Plate subducts beneath North America along the 3,200 km Aleutian volcanic arc. Site of the 1964 Good Friday earthquake (Mw 9.2).',
    plates: 'Pacific Plate / North American Plate',
    coordinates: [[57,-173],[54,-170],[52,-166],[52,-162],[53,-157],[55,-153],[57,-150],[59,-147],[60,-145]],
  },
  {
    id: 'japan-kuril-trench',
    name: 'Japan-Kuril Trench',
    type: 'convergent',
    description: 'The Pacific Plate dives beneath Eurasia. Site of the 2011 Tōhoku earthquake (Mw 9.1) and tsunami that killed ~18,000 people and triggered the Fukushima nuclear disaster.',
    plates: 'Pacific Plate / Eurasian Plate',
    coordinates: [[48,154],[45,149],[42,145],[40,143],[38,143],[36,142],[34,140],[32,133]],
  },
  {
    id: 'izu-bonin-mariana',
    name: 'Izu-Bonin-Mariana Trench',
    type: 'convergent',
    description: 'Includes Challenger Deep — the deepest point on Earth at 11,034 m. The Pacific Plate dives at a steep angle beneath the Philippine Plate.',
    plates: 'Pacific Plate / Philippine Sea Plate',
    coordinates: [[32,143],[28,143],[24,143],[20,145],[16,147],[13,146],[11,142],[9,141]],
  },
  {
    id: 'philippine-trench',
    name: 'Philippine Trench',
    type: 'convergent',
    description: 'The Philippine Sea Plate subducts beneath the Philippine Islands.',
    plates: 'Philippine Sea Plate / Eurasian Plate',
    coordinates: [[20,125],[18,123],[15,121],[12,125],[10,127],[7,127],[5,127]],
  },
  {
    id: 'ryukyu-arc',
    name: 'Ryukyu Arc',
    type: 'convergent',
    description: 'Subduction zone driving volcanic activity in the Ryukyu Islands between Japan and Taiwan.',
    plates: 'Philippine Sea Plate / Eurasian Plate',
    coordinates: [[32,133],[30,130],[28,128],[26,125],[24,123],[22,121],[20,122]],
  },
  {
    id: 'sunda-trench',
    name: 'Sunda (Java-Sumatra) Trench',
    type: 'convergent',
    description: 'Site of the 2004 Indian Ocean earthquake (Mw 9.1–9.3) and tsunami that killed 230,000 people. The Australian Plate dives beneath Sundaland.',
    plates: 'Australian Plate / Sunda Plate',
    coordinates: [[5,95],[3,97],[0,100],[-3,103],[-5,106],[-7,109],[-9,112],[-9,119],[-8,122]],
  },
  {
    id: 'tonga-kermadec',
    name: 'Tonga-Kermadec Trench',
    type: 'convergent',
    description: 'Second-deepest trench on Earth. Site of the 2022 Hunga Tonga eruption — the most powerful atmospheric explosion recorded in the modern era.',
    plates: 'Pacific Plate / Australian Plate',
    coordinates: [[-15,174],[-18,174],[-22,173],[-25,174],[-28,174],[-32,178],[-36,179]],
  },
  {
    id: 'himalayan-collision',
    name: 'Himalayan Collision Zone',
    type: 'convergent',
    description: 'India has been crashing into Eurasia for ~50 million years, building the Himalayas. The collision continues at ~5 cm/yr, and Mt. Everest grows taller every year.',
    plates: 'Indian Plate / Eurasian Plate',
    coordinates: [[28,67],[30,72],[30,77],[29,83],[28,88],[27,93],[27,97]],
  },
  {
    id: 'alpine-mediterranean',
    name: 'Alpine-Mediterranean Zone',
    type: 'convergent',
    description: 'The African Plate collides with Eurasia in a broad belt from the Alps through the Aegean to the Middle East, producing frequent earthquakes.',
    plates: 'African Plate / Eurasian Plate',
    coordinates: [[44,9],[46,13],[45,17],[43,16],[40,15],[36,20],[35,25],[34,30],[34,34]],
  },
  {
    id: 'zagros-makran',
    name: 'Zagros-Makran Zone',
    type: 'convergent',
    description: 'The Arabian Plate collides with Eurasia, building the Zagros Mountains of Iran and Iraq.',
    plates: 'Arabian Plate / Eurasian Plate',
    coordinates: [[38,47],[36,50],[33,53],[29,57],[27,62],[26,66]],
  },
  {
    id: 'caribbean-arc',
    name: 'Caribbean Arc',
    type: 'convergent',
    description: 'Complex subduction system bounding the Caribbean Plate with volcanic island arcs in the Lesser Antilles.',
    plates: 'Caribbean Plate / North & South American Plates',
    coordinates: [[19,-62],[17,-65],[15,-62],[12,-62],[12,-66],[13,-72],[15,-76],[17,-74],[20,-72],[23,-77],[25,-79]],
  },
  {
    id: 'scotia-arc',
    name: 'Scotia Arc',
    type: 'convergent',
    description: 'Curved island arc and trench system connecting the tip of South America to the Antarctic Peninsula.',
    plates: 'South American Plate / Scotia Plate',
    coordinates: [[-55,-30],[-56,-38],[-57,-46],[-57,-55],[-56,-65]],
  },

  // TRANSFORM ─────────────────────────────────────────────────────────────────
  {
    id: 'san-andreas',
    name: 'San Andreas Fault',
    type: 'transform',
    description: 'The boundary between the Pacific and North American plates slides ~5 cm/yr. The "Big One" — a magnitude 7.8–8.3 quake — is inevitable for California.',
    plates: 'Pacific Plate / North American Plate',
    coordinates: [[37,-122],[36,-121],[35,-120],[34,-119],[33,-116]],
  },
  {
    id: 'north-anatolian',
    name: 'North Anatolian Fault',
    type: 'transform',
    description: 'Turkey\'s most dangerous fault has produced a sequence of devastating earthquakes marching westward toward Istanbul since 1939.',
    plates: 'Anatolian Plate / Eurasian Plate',
    coordinates: [[41,26],[40,30],[40,34],[40,38],[40,42],[39,44]],
  },
]

// ─── Active Volcanoes ──────────────────────────────────────────────────────────

export const VOLCANOES: Volcano[] = [
  // ── Africa & Indian Ocean ──
  { id: 'erta-ale', name: 'Erta Ale', lat: 13.60, lng: 40.67, type: 'shield', country: 'Ethiopia', elevationM: 613, lastEruption: '2024', description: 'One of the few volcanoes with a permanent lava lake; has been continuously active since at least 1906.', isActive: true },
  { id: 'nyiragongo', name: 'Nyiragongo', lat: -1.52, lng: 29.25, type: 'stratovolcano', country: 'DR Congo', elevationM: 3470, lastEruption: '2021', description: 'Contains the world\'s largest active lava lake. Catastrophic 2002 and 2021 eruptions sent lava through the city of Goma.', isActive: true },
  { id: 'ol-doinyo-lengai', name: 'Ol Doinyo Lengai', lat: -2.76, lng: 35.90, type: 'stratovolcano', country: 'Tanzania', elevationM: 2962, lastEruption: '2021', description: 'The world\'s only active carbonatite volcano. Erupts rare low-temperature black natrocarbonatite lava — the coolest volcanic lava on Earth.', isActive: true },
  { id: 'piton-fournaise', name: 'Piton de la Fournaise', lat: -21.24, lng: 55.71, type: 'shield', country: 'Réunion (France)', elevationM: 2632, lastEruption: '2024', description: 'One of the world\'s most active volcanoes; erupts several times per year. Sits above the Réunion hotspot.', isActive: true },
  { id: 'teide', name: 'Teide', lat: 28.27, lng: -16.64, type: 'stratovolcano', country: 'Spain (Canary Islands)', elevationM: 3715, lastEruption: '1909', description: 'Third-tallest volcanic structure on Earth. Spain\'s highest peak; last erupted in 1909 but considered active.', isActive: false },

  // ── Mediterranean ──
  { id: 'etna', name: 'Mount Etna', lat: 37.73, lng: 15.00, type: 'stratovolcano', country: 'Italy (Sicily)', elevationM: 3357, lastEruption: '2024', description: 'Europe\'s highest and most active volcano. It has erupted more than any other volcano in recorded history.', isActive: true },
  { id: 'stromboli', name: 'Stromboli', lat: 38.79, lng: 15.21, type: 'stratovolcano', country: 'Italy', elevationM: 926, lastEruption: '2024', description: 'Called the "Lighthouse of the Mediterranean" for its near-constant mild explosions, visible at sea for centuries.', isActive: true },
  { id: 'vesuvius', name: 'Vesuvius', lat: 40.82, lng: 14.43, type: 'stratovolcano', country: 'Italy', elevationM: 1281, lastEruption: '1944', description: 'Destroyed Pompeii in 79 CE. Considered the world\'s most dangerous volcano; 3 million people live in the hazard zone.', isActive: false },
  { id: 'campi-flegrei', name: 'Campi Flegrei', lat: 40.82, lng: 14.13, type: 'caldera', country: 'Italy', elevationM: 458, lastEruption: '1538', description: 'Massive restless caldera near Naples. Currently experiencing increased seismicity and ground deformation.', isActive: false },
  { id: 'santorini', name: 'Santorini (Nea Kameni)', lat: 36.40, lng: 25.40, type: 'caldera', country: 'Greece', elevationM: 566, lastEruption: '1950', description: 'The ~1600 BCE Minoan eruption created the iconic caldera. One of the largest eruptions in the past 10,000 years.', isActive: false },

  // ── Iceland ──
  { id: 'hekla', name: 'Hekla', lat: 63.98, lng: -19.70, type: 'stratovolcano', country: 'Iceland', elevationM: 1491, lastEruption: '2000', description: 'Known in medieval times as the "Gateway to Hell." One of Iceland\'s most active and unpredictable volcanoes.', isActive: true },
  { id: 'grimsvotn', name: 'Grímsvötn', lat: 64.42, lng: -17.33, type: 'caldera', country: 'Iceland', elevationM: 1725, lastEruption: '2011', description: 'Iceland\'s most frequently erupting volcano. Subglacial eruptions can trigger catastrophic glacial floods (jökulhlaups).', isActive: true },
  { id: 'eyjafjallajokull', name: 'Eyjafjallajökull', lat: 63.63, lng: -19.62, type: 'stratovolcano', country: 'Iceland', elevationM: 1651, lastEruption: '2010', description: '2010 eruption disrupted European air travel for 6 weeks, affecting 10 million passengers and costing €1.3 billion.', isActive: false },
  { id: 'katla', name: 'Katla', lat: 63.63, lng: -19.05, type: 'caldera', country: 'Iceland', elevationM: 1512, lastEruption: '1918', description: 'Powerful subglacial volcano considered overdue for a major eruption. Historically erupts every 40–80 years.', isActive: false },

  // ── North America ──
  { id: 'kilauea', name: 'Kīlauea', lat: 19.41, lng: -155.29, type: 'shield', country: 'USA (Hawaii)', elevationM: 1222, lastEruption: '2023', description: 'The world\'s most continuously active volcano. Has been erupting almost without pause since 1983, adding hundreds of acres to Hawaii\'s Big Island.', isActive: true },
  { id: 'mauna-loa', name: 'Mauna Loa', lat: 19.47, lng: -155.61, type: 'shield', country: 'USA (Hawaii)', elevationM: 4169, lastEruption: '2022', description: 'Earth\'s largest active volcano by volume (75,000 km³). Its 2022 eruption was the first in 38 years.', isActive: true },
  { id: 'mt-st-helens', name: 'Mount St. Helens', lat: 46.20, lng: -122.18, type: 'stratovolcano', country: 'USA', elevationM: 2549, lastEruption: '2008', description: '1980 eruption killed 57 people and removed 400 m from the summit in seconds — the deadliest volcanic event in modern US history.', isActive: true },
  { id: 'yellowstone', name: 'Yellowstone Caldera', lat: 44.43, lng: -110.67, type: 'caldera', country: 'USA', elevationM: 2805, lastEruption: '640000 BP', description: 'Supervolcano underlain by a massive magma chamber. Its three caldera-forming eruptions (2.1 Ma, 1.3 Ma, 640 ka) were among Earth\'s most catastrophic events.', isActive: false },
  { id: 'redoubt', name: 'Redoubt', lat: 60.49, lng: -152.74, type: 'stratovolcano', country: 'USA (Alaska)', elevationM: 3108, lastEruption: '2009', description: 'One of Alaska\'s most active volcanoes. Its 1989–90 eruption caused a 747 to temporarily lose all four engines after flying through the ash cloud.', isActive: true },
  { id: 'shishaldin', name: 'Shishaldin', lat: 54.76, lng: -163.97, type: 'stratovolcano', country: 'USA (Alaska)', elevationM: 2857, lastEruption: '2023', description: 'The most symmetrical conical volcano in North America, rivaling Japan\'s Fuji. One of Alaska\'s most frequently active volcanoes.', isActive: true },
  { id: 'popocatepetl', name: 'Popocatépetl', lat: 19.02, lng: -98.62, type: 'stratovolcano', country: 'Mexico', elevationM: 5426, lastEruption: '2023', description: '"El Popo" is one of Mexico\'s highest peaks, 70 km from Mexico City and its 22 million residents. Has been continuously active since 1994.', isActive: true },
  { id: 'colima', name: 'Volcán de Colima', lat: 19.51, lng: -103.62, type: 'stratovolcano', country: 'Mexico', elevationM: 3850, lastEruption: '2019', description: 'Mexico\'s most active volcano, erupting more than 40 times since 1576. Known for spectacular dome collapses and pyroclastic flows.', isActive: true },

  // ── Central America & Caribbean ──
  { id: 'soufriere-hills', name: 'Soufrière Hills', lat: 16.72, lng: -62.18, type: 'stratovolcano', country: 'Montserrat (UK)', elevationM: 1050, lastEruption: '2010', description: 'Erupting continuously since 1995, destroying the capital Plymouth and forcing the evacuation of two-thirds of the island\'s population.', isActive: true },
  { id: 'la-soufriere', name: 'La Soufrière', lat: 13.33, lng: -61.18, type: 'stratovolcano', country: 'Saint Vincent', elevationM: 1234, lastEruption: '2021', description: '2021 eruption produced spectacular ash columns and forced the evacuation of 16,000 people from the northern half of the island.', isActive: true },

  // ── South America ──
  { id: 'cotopaxi', name: 'Cotopaxi', lat: -0.68, lng: -78.44, type: 'stratovolcano', country: 'Ecuador', elevationM: 5897, lastEruption: '2022', description: 'One of the world\'s highest active volcanoes and Ecuador\'s most hazardous. Its ice-capped cone can trigger devastating lahars.', isActive: true },
  { id: 'tungurahua', name: 'Tungurahua', lat: -1.47, lng: -78.44, type: 'stratovolcano', country: 'Ecuador', elevationM: 5023, lastEruption: '2016', description: 'Known as the "Black Giant." In nearly continuous eruption since 1999, with spectacular lava fountains and ash falls on surrounding towns.', isActive: true },
  { id: 'nevado-ruiz', name: 'Nevado del Ruiz', lat: 4.90, lng: -75.32, type: 'stratovolcano', country: 'Colombia', elevationM: 5321, lastEruption: '2023', description: '1985 eruption melted the summit glacier; the resulting lahars buried the town of Armero, killing 23,000 people in the deadliest volcanic disaster of the 20th century.', isActive: true },
  { id: 'villarrica', name: 'Villarrica', lat: -39.42, lng: -71.93, type: 'stratovolcano', country: 'Chile', elevationM: 2847, lastEruption: '2015', description: 'One of South America\'s most active volcanoes. Its lava lake glows brilliantly at night, visible 100 km away.', isActive: true },

  // ── Indonesia & SE Asia ──
  { id: 'krakatoa', name: 'Anak Krakatau', lat: -6.10, lng: 105.42, type: 'caldera', country: 'Indonesia', elevationM: 338, lastEruption: '2023', description: '"Child of Krakatoa" — the new volcanic island that grew from the crater of the 1883 eruption. The 2018 collapse triggered a deadly tsunami killing 400 people.', isActive: true },
  { id: 'merapi', name: 'Merapi', lat: -7.54, lng: 110.44, type: 'stratovolcano', country: 'Indonesia', elevationM: 2930, lastEruption: '2023', description: 'Indonesia\'s most active and dangerous volcano. Regular dome-building eruptions generate pyroclastic flows. 400,000 people live in the hazard zone.', isActive: true },
  { id: 'sinabung', name: 'Sinabung', lat: 3.17, lng: 98.39, type: 'stratovolcano', country: 'Indonesia', elevationM: 2460, lastEruption: '2021', description: 'Slept for 400 years before awakening violently in 2010. Has produced devastating pyroclastic flows and forced mass evacuations.', isActive: true },
  { id: 'tambora', name: 'Tambora', lat: -8.25, lng: 117.99, type: 'caldera', country: 'Indonesia', elevationM: 2850, lastEruption: '1967', description: 'The 1815 eruption (VEI 7) was the largest in recorded history. It killed 71,000 directly and caused the "Year Without a Summer" (1816), killing crops worldwide.', isActive: false },
  { id: 'taal', name: 'Taal', lat: 14.00, lng: 120.99, type: 'caldera', country: 'Philippines', elevationM: 311, lastEruption: '2022', description: 'A volcanic island within a lake within an island. One of the world\'s smallest active volcanoes but among the most dangerous due to its violent phreatomagmatic eruptions.', isActive: true },
  { id: 'mayon', name: 'Mayon', lat: 13.26, lng: 123.69, type: 'stratovolcano', country: 'Philippines', elevationM: 2462, lastEruption: '2023', description: 'World\'s most perfectly symmetrical volcanic cone. Has erupted 51 times since 1616; pyroclastic flows and lahars regularly threaten surrounding communities.', isActive: true },
  { id: 'pinatubo', name: 'Pinatubo', lat: 15.13, lng: 120.35, type: 'stratovolcano', country: 'Philippines', elevationM: 1486, lastEruption: '1991', description: 'The 1991 eruption (VEI 6) was the second largest of the 20th century. Its aerosols cooled global temperatures by 0.5°C for two years.', isActive: false },

  // ── Japan ──
  { id: 'sakurajima', name: 'Sakurajima', lat: 31.58, lng: 130.66, type: 'stratovolcano', country: 'Japan', elevationM: 1117, lastEruption: '2024', description: 'Japan\'s most active volcano; the city of Kagoshima (600,000 people) lives under near-constant ash fall. Once an island, its 1914 lava flows connected it to the mainland.', isActive: true },
  { id: 'fuji', name: 'Mount Fuji', lat: 35.36, lng: 138.73, type: 'stratovolcano', country: 'Japan', elevationM: 3776, lastEruption: '1707', description: 'Japan\'s highest and most iconic peak. Its last eruption in 1707 deposited ash on Edo (Tokyo). Seismically active and considered an active volcano.', isActive: false },

  // ── Pacific ──
  { id: 'ulawun', name: 'Ulawun', lat: -5.05, lng: 151.33, type: 'stratovolcano', country: 'Papua New Guinea', elevationM: 2334, lastEruption: '2019', description: 'Considered one of the most hazardous volcanoes in the world due to its large volume, steep slopes, and proximity to the Bismarck Sea.', isActive: true },
  { id: 'yasur', name: 'Yasur', lat: -19.53, lng: 169.44, type: 'stratovolcano', country: 'Vanuatu', elevationM: 361, lastEruption: '2024', description: 'One of the world\'s most accessible active volcanoes with nearly continuous Strombolian eruptions. Has been erupting for at least 800 years.', isActive: true },
  { id: 'ruapehu', name: 'Ruapehu', lat: -39.28, lng: 175.57, type: 'stratovolcano', country: 'New Zealand', elevationM: 2797, lastEruption: '2007', description: 'New Zealand\'s largest active volcano with a warm acidic crater lake. Lahars from this volcano killed 151 people in the 1953 Tangiwai disaster.', isActive: true },
  { id: 'erebus', name: 'Erebus', lat: -77.53, lng: 167.17, type: 'stratovolcano', country: 'Antarctica', elevationM: 3794, lastEruption: '2024', description: 'The southernmost active volcano on Earth. Contains a persistent convecting lava lake and ejects rare anorthoclase feldspar crystals.', isActive: true },
]

// ─── Ocean Currents ─────────────────────────────────────────────────────────

export const OCEAN_CURRENTS: OceanCurrent[] = [
  {
    id: 'gulf-stream',
    name: 'Gulf Stream / North Atlantic Current',
    type: 'warm',
    description: 'The ocean\'s most powerful current system, carrying warm tropical water northward along the US East Coast and across the Atlantic to Western Europe. It\'s why London is milder than Labrador despite the same latitude.',
    coordinates: [[25,-80],[28,-80],[30,-78],[33,-75],[36,-74],[40,-70],[43,-64],[45,-56],[48,-48],[52,-40],[55,-30],[57,-18],[60,-7],[63,2]],
  },
  {
    id: 'kuroshio',
    name: 'Kuroshio Current',
    type: 'warm',
    description: 'The Pacific\'s counterpart to the Gulf Stream. Flows northward along Japan\'s coast carrying warm tropical water; Japan\'s climate and marine life depend on it.',
    coordinates: [[20,125],[24,125],[28,128],[32,130],[34,137],[36,142],[40,145],[44,150],[48,155]],
  },
  {
    id: 'california-current',
    name: 'California Current',
    type: 'cold',
    description: 'Cold surface water flowing southward along the US West Coast. Drives coastal upwelling that makes California\'s coastal waters among the most biologically productive on Earth.',
    coordinates: [[55,-145],[50,-140],[45,-132],[40,-128],[35,-122],[30,-118],[25,-113]],
  },
  {
    id: 'humboldt-current',
    name: 'Humboldt (Peru) Current',
    type: 'cold',
    description: 'Cold deep water upwelling along South America\'s Pacific coast. Supports the world\'s most productive fishery. Its weakening during El Niño events causes devastating ecological disruption.',
    coordinates: [[-5,-82],[-10,-80],[-15,-76],[-20,-73],[-25,-72],[-30,-72],[-35,-74],[-40,-77]],
  },
  {
    id: 'agulhas',
    name: 'Agulhas Current',
    type: 'warm',
    description: 'One of the world\'s strongest ocean currents, flowing southward along Africa\'s east coast. Famous for dangerous "freak waves" at its southern termination.',
    coordinates: [[-22,40],[-26,37],[-30,33],[-33,28],[-36,24],[-40,20],[-43,18],[-45,20],[-46,28]],
  },
  {
    id: 'antarctic-circumpolar',
    name: 'Antarctic Circumpolar Current',
    type: 'cold',
    description: 'Earth\'s largest ocean current by volume — the only current that circles the globe unimpeded by land. It connects the Atlantic, Pacific, and Indian Oceans and drives global thermohaline circulation.',
    coordinates: [[-55,-80],[-55,-60],[-55,-30],[-55,-5],[-55,20],[-55,50],[-55,80],[-55,110],[-55,140],[-55,170],[-55,-165],[-55,-140],[-55,-115],[-55,-90],[-55,-80]],
  },
  {
    id: 'east-australian',
    name: 'East Australian Current',
    type: 'warm',
    description: 'Flows southward along Australia\'s east coast. Made famous by the film Finding Nemo. It transports warm tropical water south, affecting Australia\'s coastal climate.',
    coordinates: [[-10,147],[-15,152],[-20,154],[-25,154],[-30,154],[-35,152],[-38,150],[-42,150]],
  },
  {
    id: 'labrador-current',
    name: 'Labrador Current',
    type: 'cold',
    description: 'Cold Arctic water flowing southward along the Canadian and US East Coast. It carried the iceberg that sank the Titanic south into North Atlantic shipping lanes.',
    coordinates: [[75,-70],[65,-65],[60,-60],[55,-57],[52,-53],[48,-50],[45,-48],[43,-46]],
  },
  {
    id: 'brazil-current',
    name: 'Brazilian Current',
    type: 'warm',
    description: 'The South Atlantic\'s western boundary current, flowing southward along Brazil\'s coast. Warmer and weaker than the Gulf Stream.',
    coordinates: [[-5,-35],[-10,-37],[-15,-39],[-20,-40],[-25,-44],[-30,-48],[-35,-51]],
  },
  {
    id: 'benguela-current',
    name: 'Benguela Current',
    type: 'cold',
    description: 'Cold upwelling current along Africa\'s southwest coast. Creates the Namib Desert\'s coastal fog and supports rich fisheries. Its periodically shifting flow drives ecosystem changes along the Namibian and South African coast.',
    coordinates: [[-35,18],[-30,16],[-25,14],[-20,13],[-15,12],[-10,13],[-5,10]],
  },
]

// ─── Mantle Hotspots ─────────────────────────────────────────────────────────

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'hawaii',
    name: 'Hawaiian Hotspot',
    lat: 19.5,
    lng: -155.6,
    description: 'As the Pacific Plate moves northwestward over this fixed plume, it has created a 6,000 km chain of islands and seamounts — the Hawaiian-Emperor Seamount Chain. Hawaii\'s Big Island is now directly above the hotspot.',
    features: 'Hawaiian-Emperor Seamount Chain',
  },
  {
    id: 'iceland',
    name: 'Iceland Hotspot',
    lat: 65.0,
    lng: -18.0,
    description: 'A superplume beneath the Mid-Atlantic Ridge has produced 30× more volcanic material than normal ridge segments, creating Iceland itself. The only place on Earth where a mid-ocean ridge rises above sea level.',
    features: 'Iceland island, Faroe-Greenland Ridge',
  },
  {
    id: 'yellowstone',
    name: 'Yellowstone Hotspot',
    lat: 44.4,
    lng: -110.6,
    description: 'As the North American Plate moves southwest over this plume, it has produced a track of caldera eruptions visible as a chain of calderas across Idaho. Yellowstone\'s last caldera eruption was 640,000 years ago.',
    features: 'Snake River Plain, Yellowstone National Park',
  },
  {
    id: 'galapagos',
    name: 'Galápagos Hotspot',
    lat: -0.5,
    lng: -91.0,
    description: 'The Galápagos hotspot created the archipelago that inspired Darwin\'s theory of natural selection. Currently active at Fernandina Island, one of the most active volcanoes in the world.',
    features: 'Galápagos Islands, Carnegie Ridge',
  },
  {
    id: 'reunion',
    name: 'Réunion Hotspot',
    lat: -21.2,
    lng: 55.7,
    description: 'The same plume that created the Deccan Traps (~66 Ma) — massive flood basalts linked to the end-Cretaceous extinction — now underlies Réunion Island, one of the world\'s most active volcanic islands.',
    features: 'Réunion Island, Maldive Ridge, Deccan Traps',
  },
  {
    id: 'tristan-da-cunha',
    name: 'Tristan da Cunha Hotspot',
    lat: -37.1,
    lng: -12.3,
    description: 'One of the most remote inhabited places on Earth. The hotspot created the Walvis Ridge (under the Atlantic) and the Rio Grande Rise (under the South Atlantic) as the Atlantic opened.',
    features: 'Tristan da Cunha, Walvis Ridge, Rio Grande Rise',
  },
  {
    id: 'azores',
    name: 'Azores Hotspot',
    lat: 38.7,
    lng: -27.5,
    description: 'Where three tectonic plates meet (North American, Eurasian, African) and a hotspot adds extra volcanic heat. The result: the Azores archipelago, sitting astride the Mid-Atlantic Ridge.',
    features: 'Azores Islands',
  },
  {
    id: 'canary-islands',
    name: 'Canary Islands Hotspot',
    lat: 28.3,
    lng: -15.5,
    description: 'A hotspot beneath the African Plate created the Canary Islands. La Palma erupted submarine in 2011 and dramatically in 2021, with lava reaching the sea.',
    features: 'Canary Islands',
  },
  {
    id: 'kerguelen',
    name: 'Kerguelen Hotspot',
    lat: -49.4,
    lng: 69.2,
    description: 'Created one of Earth\'s largest oceanic plateaus — the Kerguelen Plateau — during massive Cretaceous flood volcanism. The plateau is 3× the size of Japan.',
    features: 'Kerguelen Plateau, Broken Ridge',
  },
  {
    id: 'afar',
    name: 'Afar Hotspot',
    lat: 11.5,
    lng: 41.0,
    description: 'Where the East African Rift meets the Red Sea and Gulf of Aden rifts — a triple junction driven by a mantle plume. The Afar Triangle is one of the lowest and hottest places on Earth.',
    features: 'Afar Triangle, East African Rift',
  },
]

// ─── Tectonic Plates ─────────────────────────────────────────────────────────

export interface TectonicPlate {
  id: string
  name: string
  type: 'oceanic' | 'continental' | 'mixed'
  areaKm2: number        // million km²
  color: string
  coordinates: [number, number][][]   // each inner array is one polygon ring
  description: string
}

export const TECTONIC_PLATES: TectonicPlate[] = [
  {
    id: 'pacific',
    name: 'Pacific Plate',
    type: 'oceanic',
    areaKm2: 103,
    color: '#3A8FA8',
    // Split at antimeridian: east half uses negative lngs, west half uses positive
    coordinates: [
      [
        [57,-173],[52,-162],[53,-157],[57,-147],[50,-140],
        [35,-132],[20,-120],[5,-108],[-5,-107],[-20,-112],
        [-35,-112],[-52,-116],[-60,-150],[-60,-180],[57,-180],
      ],
      [
        [57,180],[57,162],[48,154],[42,145],[32,143],
        [20,145],[11,142],[0,150],[-15,168],[-25,174],
        [-32,178],[-60,178],[-60,180],
      ],
    ],
    description: 'The world\'s largest tectonic plate, covering ~103 million km² of almost entirely oceanic crust. It moves northwest at 5–10 cm/yr and is subducting beneath surrounding plates all around its perimeter — driving the volcanic "Ring of Fire" and generating the majority of the world\'s largest earthquakes.',
  },
  {
    id: 'north-american',
    name: 'North American Plate',
    type: 'continental',
    areaKm2: 76,
    color: '#3D7A50',
    coordinates: [[
      [72,-8],[55,-35],[22,-43],[8,-38],
      [8,-80],[16,-88],[20,-105],[26,-115],
      [37,-122],[45,-130],[52,-168],[58,-175],
      [66,-180],[82,-100],[80,-10],[72,-8],
    ]],
    description: 'Carries North America, Greenland, and the western North Atlantic. Moving west-southwest away from Eurasia as the Mid-Atlantic Ridge spreads. The Cascadia Subduction Zone on its western edge is locked and accumulating strain for a future magnitude 8–9 megathrust earthquake.',
  },
  {
    id: 'south-american',
    name: 'South American Plate',
    type: 'continental',
    areaKm2: 43,
    color: '#8A6A30',
    coordinates: [[
      [8,-38],[-5,-14],[-20,-13],[-30,-14],
      [-40,-17],[-45,-11],[-54,0],
      [-56,-38],[-55,-65],[-45,-76],
      [-20,-72],[0,-82],[8,-80],[8,-38],
    ]],
    description: 'Carries South America and the South Atlantic. The Nazca Plate subducts beneath its western edge at ~7 cm/yr, building the Andes and producing Earth\'s most powerful earthquakes, including the M 9.5 Valdivia quake in 1960 — the largest ever recorded.',
  },
  {
    id: 'eurasian',
    name: 'Eurasian Plate',
    type: 'continental',
    areaKm2: 68,
    color: '#6A4A8A',
    coordinates: [[
      [72,-8],[66,-18],[60,-30],[45,-28],[38,-30],
      [36,-6],[36,28],[34,40],[26,57],
      [28,67],[28,95],[25,100],[30,130],
      [36,142],[45,149],[57,164],[65,178],
      [72,160],[82,60],[85,0],[82,-30],[72,-8],
    ]],
    description: 'The second-largest plate, carrying all of Europe and most of Asia. India collides into its southern edge at ~5 cm/yr, raising the Himalayas. In the east, the Pacific Plate subducts beneath it along Japan\'s coast — producing frequent devastating earthquakes.',
  },
  {
    id: 'african',
    name: 'African Plate',
    type: 'continental',
    areaKm2: 61,
    color: '#8A4A3A',
    coordinates: [[
      [36,-6],[36,28],[34,40],
      [12,43],[5,38],[0,36],[-20,35],[-38,24],
      [-54,0],[-45,-11],[-40,-17],
      [-20,-13],[-5,-14],[0,-20],
      [8,-17],[20,-20],[30,-12],[36,-6],
    ]],
    description: 'The African Plate is slowly tearing itself apart along the East African Rift System. Eastern Africa (the Somali Plate) will separate into a new island continent in ~10 million years, forming a new ocean. The plate collides with Eurasia to the north, building the Atlas Mountains.',
  },
  {
    id: 'australian',
    name: 'Australian Plate',
    type: 'continental',
    areaKm2: 47,
    color: '#3A7A6A',
    coordinates: [[
      [-38,75],[-42,90],[-45,110],
      [-50,130],[-53,147],[-48,160],
      [-40,172],[-32,178],[-20,170],
      [-10,150],[-5,147],[-5,133],
      [-5,105],[-9,119],[5,96],
      [5,78],[-38,75],
    ]],
    description: 'The fastest-moving continental plate, drifting north at ~7 cm/yr. Australia has moved ~1,500 km north in 35 million years and is expected to collide with Southeast Asia within ~100 million years. Its northern boundary is the complex Sunda subduction zone.',
  },
  {
    id: 'antarctic',
    name: 'Antarctic Plate',
    type: 'continental',
    areaKm2: 60,
    color: '#4A6A8A',
    coordinates: [[
      [-54,0],[-56,-30],[-58,-60],[-60,-100],
      [-60,-150],[-60,-180],[-60,180],
      [-55,150],[-50,130],[-45,110],
      [-42,90],[-38,75],
      [-42,60],[-45,40],[-50,20],[-54,0],
    ]],
    description: 'The only plate almost entirely surrounded by divergent boundaries — mid-ocean ridges on nearly all sides. This means it moves very slowly (~1–2 cm/yr). Contains the Antarctic Ice Sheet, Earth\'s largest freshwater reservoir, holding ~70% of the planet\'s fresh water.',
  },
  {
    id: 'nazca',
    name: 'Nazca Plate',
    type: 'oceanic',
    areaKm2: 15,
    color: '#A85A3A',
    coordinates: [[
      [0,-100],[0,-82],[-5,-81],[-10,-78],
      [-20,-72],[-30,-72],[-45,-76],[-55,-68],
      [-52,-116],[-35,-112],[-20,-115],
      [-5,-107],[0,-104],[0,-100],
    ]],
    description: 'A purely oceanic plate west of South America, subducting beneath the continent at ~7 cm/yr. This subduction drives Earth\'s most seismically active region, built the Andes, and produced the 1960 Chile M 9.5 earthquake — the largest ever recorded. The Galápagos hotspot sits above it.',
  },
  {
    id: 'caribbean',
    name: 'Caribbean Plate',
    type: 'oceanic',
    areaKm2: 3.2,
    color: '#3A6A8A',
    coordinates: [[
      [20,-87],[17,-65],[12,-62],
      [10,-72],[8,-83],[10,-88],
      [16,-88],[20,-87],
    ]],
    description: 'A small, relatively stable plate wedged between North and South America. Its eastern boundary — the Lesser Antilles volcanic arc — is where Atlantic oceanic crust subducts westward, producing islands like Martinique (Mount Pelée) and Montserrat (Soufrière Hills).',
  },
  {
    id: 'philippine',
    name: 'Philippine Sea Plate',
    type: 'oceanic',
    areaKm2: 5.5,
    color: '#6A3A8A',
    coordinates: [[
      [32,133],[26,125],[20,122],
      [12,125],[8,127],[9,141],
      [15,148],[20,148],[24,147],
      [28,145],[32,143],[32,133],
    ]],
    description: 'Entirely bounded by subduction zones. The Mariana Trench — Earth\'s deepest point at 11,034 m — formed where the Pacific Plate dives beneath this plate. Japan, the Philippines, and Taiwan all lie at or near its boundaries, accounting for some of the world\'s highest earthquake frequency.',
  },
  {
    id: 'arabian',
    name: 'Arabian Plate',
    type: 'continental',
    areaKm2: 5,
    color: '#8A7A3A',
    coordinates: [[
      [38,47],[33,53],[22,60],[16,50],
      [12,43],[20,38],[28,35],
      [34,36],[38,40],[38,47],
    ]],
    description: 'Rifted away from Africa ~30 million years ago, creating the Red Sea. Now colliding with Eurasia at ~2.5 cm/yr, building the Zagros Mountains of Iran. The triple junction at the Afar Triangle — where the Arabian, African, and Somali plates meet — is one of the most tectonically active regions on Earth.',
  },
  {
    id: 'indian',
    name: 'Indian Plate',
    type: 'continental',
    areaKm2: 12,
    color: '#3A7A5A',
    coordinates: [[
      [28,67],[28,95],[15,93],[0,80],
      [-38,75],[-10,65],[5,60],
      [12,43],[20,38],[28,55],
      [38,47],[28,67],
    ]],
    description: 'Has traveled ~9,000 km northward in ~100 million years — the fastest-moving continental plate in geological history. Its ongoing collision with Eurasia, starting ~50 Ma ago, built the Himalayas and the Tibetan Plateau (the "Roof of the World"). Mt. Everest grows taller at ~5 mm/yr.',
  },
  {
    id: 'cocos',
    name: 'Cocos Plate',
    type: 'oceanic',
    areaKm2: 2.9,
    color: '#5A3A2A',
    coordinates: [[
      [22,-108],[13,-93],[10,-88],
      [8,-83],[0,-82],[0,-104],
      [12,-104],[22,-108],
    ]],
    description: 'A young oceanic plate subducting beneath Central America at 7–8 cm/yr — one of Earth\'s fastest subduction rates. This drives intense volcanism across Mexico and Central America and causes frequent large earthquakes, including the 1985 Mexico City disaster that killed ~9,500 people.',
  },
  {
    id: 'juan-de-fuca',
    name: 'Juan de Fuca Plate',
    type: 'oceanic',
    areaKm2: 0.25,
    color: '#3A5A7A',
    coordinates: [[
      [49,-130],[47,-129],[45,-130],[43,-130],[41,-131],
      [40,-126],[42,-126],[44,-125],[46,-124],[48,-126],[49,-130],
    ]],
    description: 'A tiny remnant of the ancient Farallon Plate, fully subducting beneath North America. Its locked contact with the North American Plate on the Cascadia Subduction Zone has built up centuries of strain — expected to rupture in a magnitude 8–9 earthquake that will affect Seattle, Portland, and Vancouver.',
  },
]

// ─── Major Earthquakes ────────────────────────────────────────────────────────

export interface MajorEarthquake {
  id: string
  name: string
  lat: number
  lng: number
  magnitude: number
  year: number
  country: string
  deaths: string
  tsunamiGenerated: boolean
  description: string
}

export const MAJOR_EARTHQUAKES: MajorEarthquake[] = [
  {
    id: 'lisbon-1755',
    name: 'Lisbon Earthquake',
    lat: 37.0, lng: -9.0,
    magnitude: 8.7, year: 1755, country: 'Portugal',
    deaths: '~60,000', tsunamiGenerated: true,
    description: 'Struck on All Saints\' Day as worshippers filled churches. The tsunami and fires that followed killed tens of thousands more. It fundamentally shifted European philosophy — Voltaire cited it as evidence against naive optimism in Candide, sparking the Enlightenment debate on the problem of evil.',
  },
  {
    id: 'new-madrid-1811',
    name: 'New Madrid Earthquakes',
    lat: 36.5, lng: -89.6,
    magnitude: 7.7, year: 1811, country: 'USA',
    deaths: '<1,000', tsunamiGenerated: false,
    description: 'The most powerful earthquake sequence in the contiguous US east of the Rockies — three M>7 quakes in three months changed the course of the Mississippi River and were felt from Canada to the Gulf Coast. Occurring far from any plate boundary, it exposed the seismic hazard of ancient intraplate fault zones.',
  },
  {
    id: 'san-francisco-1906',
    name: 'San Francisco Earthquake',
    lat: 37.7, lng: -122.5,
    magnitude: 7.9, year: 1906, country: 'USA',
    deaths: '~3,000', tsunamiGenerated: false,
    description: 'A 477 km rupture of the San Andreas Fault. The earthquake and three-day fires destroyed ~28,000 buildings and 508 city blocks. It was the first earthquake systematically studied by scientists, establishing the "elastic rebound" theory of earthquake mechanics — the foundation of modern seismology.',
  },
  {
    id: 'messina-1908',
    name: 'Messina Earthquake',
    lat: 38.2, lng: 15.6,
    magnitude: 7.1, year: 1908, country: 'Italy',
    deaths: '~75,000', tsunamiGenerated: true,
    description: 'Struck at 5:20 AM, destroying the cities of Messina and Reggio Calabria as residents slept. The deadliest earthquake in European history. A tsunami struck immediately after, killing thousands more along the coastline. Most buildings, constructed without seismic codes, collapsed instantly.',
  },
  {
    id: 'haiyuan-1920',
    name: 'Haiyuan Earthquake',
    lat: 36.5, lng: 105.7,
    magnitude: 8.5, year: 1920, country: 'China',
    deaths: '~273,000', tsunamiGenerated: false,
    description: 'Struck Gansu and Shaanxi provinces, triggering catastrophic landslides that buried entire villages. Whole rivers were temporarily dammed, creating lakes overnight. One of the deadliest earthquakes in recorded history — occurring in a remote region with slow communications, full damage reports took months to compile.',
  },
  {
    id: 'kanto-1923',
    name: 'Great Kantō Earthquake',
    lat: 35.3, lng: 139.5,
    magnitude: 7.9, year: 1923, country: 'Japan',
    deaths: '~143,000', tsunamiGenerated: true,
    description: 'Struck Tokyo and Yokohama at lunchtime as cooking fires were lit across millions of homes. The resulting firestorm killed more than 100,000 people. It drove Japan to develop some of the world\'s most advanced earthquake engineering and preparedness systems over the following decades.',
  },
  {
    id: 'assam-1950',
    name: 'Assam-Tibet Earthquake',
    lat: 28.4, lng: 96.7,
    magnitude: 8.6, year: 1950, country: 'India/China',
    deaths: '~4,000', tsunamiGenerated: false,
    description: 'One of the largest earthquakes of the 20th century, occurring in one of the most tectonically active regions — where the Indian Plate drives into Eurasia. Triggered massive landslides in the Himalayas; dammed rivers later burst, sending walls of water and debris downstream.',
  },
  {
    id: 'chile-1960',
    name: 'Valdivia Earthquake',
    lat: -38.3, lng: -73.6,
    magnitude: 9.5, year: 1960, country: 'Chile',
    deaths: '~5,700', tsunamiGenerated: true,
    description: 'The largest earthquake ever recorded. The 1,000 km rupture of the Nazca-South American plate boundary generated a tsunami that crossed the Pacific, killing hundreds in Hawaii, Japan, and the Philippines. The Earth vibrated like a bell for weeks; the quake permanently displaced parts of the Chilean coast by 3–4 metres.',
  },
  {
    id: 'alaska-1964',
    name: 'Good Friday Earthquake',
    lat: 61.0, lng: -147.7,
    magnitude: 9.2, year: 1964, country: 'USA (Alaska)',
    deaths: '~131', tsunamiGenerated: true,
    description: 'The second-largest earthquake ever recorded. Anchorage neighbourhoods dropped several metres in minutes; entire hillsides liquefied. The resulting trans-Pacific tsunami killed people as far away as Crescent City, California. Its low death toll reflects Alaska\'s sparse population.',
  },
  {
    id: 'tangshan-1976',
    name: 'Tangshan Earthquake',
    lat: 39.6, lng: 118.2,
    magnitude: 7.8, year: 1976, country: 'China',
    deaths: '~242,000', tsunamiGenerated: false,
    description: 'Struck the industrial city of Tangshan at 3:42 AM with no warning. Within 23 seconds, ~85% of buildings collapsed, burying residents in their sleep. The Chinese government suppressed the true casualty figures for years; some estimates suggest up to 650,000 deaths, potentially the deadliest earthquake of the 20th century.',
  },
  {
    id: 'mexico-1985',
    name: 'Mexico City Earthquake',
    lat: 18.1, lng: -102.9,
    magnitude: 8.1, year: 1985, country: 'Mexico',
    deaths: '~9,500', tsunamiGenerated: false,
    description: 'The Cocos Plate rupture sent waves northward that were dramatically amplified by Mexico City\'s soft lake-bed sediments, destroying buildings that survived the initial shaking far inland. This "basin amplification" effect — where soft sediments trap and magnify seismic waves — is now a central consideration in urban seismic risk assessment worldwide.',
  },
  {
    id: 'kobe-1995',
    name: 'Great Hanshin Earthquake',
    lat: 34.6, lng: 135.0,
    magnitude: 6.9, year: 1995, country: 'Japan',
    deaths: '~6,434', tsunamiGenerated: false,
    description: 'Struck the modern port city of Kobe at 5:46 AM, collapsing elevated expressways and railways, and triggering fires that burned for two days. Despite Japan\'s advanced seismic codes, many older structures failed. The disaster transformed global seismic building standards and urban disaster planning.',
  },
  {
    id: 'sumatra-2004',
    name: 'Indian Ocean Earthquake',
    lat: 3.3, lng: 95.8,
    magnitude: 9.1, year: 2004, country: 'Indonesia',
    deaths: '~227,000', tsunamiGenerated: true,
    description: 'The third-largest earthquake ever recorded — a 1,600 km rupture of the Sunda megathrust. The tsunami reached 14 countries with waves up to 30 m tall, killing ~227,000 people. It catalysed the creation of the Indian Ocean Tsunami Warning System and transformed global tsunami preparedness.',
  },
  {
    id: 'kashmir-2005',
    name: 'Kashmir Earthquake',
    lat: 34.5, lng: 73.6,
    magnitude: 7.6, year: 2005, country: 'Pakistan/India',
    deaths: '~87,000', tsunamiGenerated: false,
    description: 'Struck the mountainous Kashmir region along the Indian-Eurasian collision zone, triggering massive landslides. With relief access hampered by steep terrain and damaged roads, ~3.5 million people were left homeless heading into a Himalayan winter — a secondary humanitarian disaster.',
  },
  {
    id: 'sichuan-2008',
    name: 'Sichuan Earthquake',
    lat: 31.0, lng: 103.3,
    magnitude: 7.9, year: 2008, country: 'China',
    deaths: '~87,000', tsunamiGenerated: false,
    description: 'The eastern margin of the Tibetan Plateau ruptured beneath densely populated mountains. Thousands of schoolchildren were killed in collapsed "tofu buildings" — poorly constructed school buildings that failed while adjacent government offices stood. The disaster spurred significant reform in Chinese construction standards.',
  },
  {
    id: 'haiti-2010',
    name: 'Haiti Earthquake',
    lat: 18.5, lng: -72.5,
    magnitude: 7.0, year: 2010, country: 'Haiti',
    deaths: '~160,000', tsunamiGenerated: false,
    description: 'Struck 25 km from Port-au-Prince on a previously unmapped fault. The combination of extremely shallow depth, proximity to the capital, inadequate building construction, and pre-existing poverty produced catastrophic damage. One of the most devastating natural disasters in the Western Hemisphere in modern history.',
  },
  {
    id: 'chile-2010',
    name: 'Maule Earthquake',
    lat: -36.1, lng: -72.9,
    magnitude: 8.8, year: 2010, country: 'Chile',
    deaths: '~521', tsunamiGenerated: true,
    description: 'The sixth-largest earthquake ever recorded, striking the same Nazca-South American boundary as the 1960 Valdivia quake. Chile\'s strict seismic building codes, developed in direct response to 1960, limited the death toll to ~521 for a quake 500 times more energetic than the Haiti earthquake two months earlier.',
  },
  {
    id: 'tohoku-2011',
    name: 'Tōhoku Earthquake',
    lat: 38.3, lng: 142.4,
    magnitude: 9.1, year: 2011, country: 'Japan',
    deaths: '~20,000', tsunamiGenerated: true,
    description: 'The Pacific Plate slipped 50–60 m beneath Japan along a 500 km rupture, generating tsunami waves up to 40 m tall. The 18-minute warning was insufficient for many coastal towns. The resulting flooding disabled the Fukushima Daiichi nuclear plant — triggering the worst nuclear disaster since Chernobyl.',
  },
  {
    id: 'nepal-2015',
    name: 'Gorkha Earthquake',
    lat: 28.1, lng: 84.7,
    magnitude: 7.8, year: 2015, country: 'Nepal',
    deaths: '~9,000', tsunamiGenerated: false,
    description: 'The India-Eurasia collision zone ruptured beneath Nepal, flattening mountain villages. Kathmandu\'s soft sediment basin amplified shaking. An Everest avalanche killed 22 people at Base Camp. A M 7.3 aftershock struck 17 days later. The disaster killed nearly 9,000 and left 3.5 million homeless.',
  },
  {
    id: 'turkey-2023',
    name: 'Kahramanmaraş Earthquakes',
    lat: 37.2, lng: 37.0,
    magnitude: 7.8, year: 2023, country: 'Turkey/Syria',
    deaths: '~60,000', tsunamiGenerated: false,
    description: 'Two M 7.8 and M 7.5 earthquakes struck southeastern Turkey and northern Syria within 9 hours on the East Anatolian Fault. Over 50,000 people were killed across 10 Turkish provinces. Winter temperatures, the scale of destruction, and conflict in Syria severely hampered rescue operations.',
  },
]

// ─── Hydrothermal Vent Fields ─────────────────────────────────────────────────

export interface HydrothermalVentField {
  id: string
  name: string
  lat: number
  lng: number
  ocean: string
  depthM: number
  maxTempC: number
  discoveredYear: number
  description: string
  features: string
}

export const HYDROTHERMAL_VENTS: HydrothermalVentField[] = [
  {
    id: 'galapagos-rift',
    name: 'Galápagos Rift',
    lat: 0.8, lng: -86.2,
    ocean: 'Pacific', depthM: 2450, maxTempC: 17, discoveredYear: 1977,
    description: 'The discovery site of all vent biology. In February 1977, a Woods Hole/USGS team in the submersible Alvin descended and found warm water shimmering with dense clam beds and tube worms — completely rewriting the rules of life on Earth. The vents here are warm-water "temperature anomaly" vents, not the black-smoker variety discovered two years later.',
    features: 'Warm-water vents, giant clam beds, tube worms — site of initial 1977 discovery',
  },
  {
    id: 'epr-21n',
    name: 'East Pacific Rise 21°N',
    lat: 21.0, lng: -109.1,
    ocean: 'Pacific', depthM: 2600, maxTempC: 380, discoveredYear: 1979,
    description: 'Site of the first black smoker vent ever observed (1979). A Franco-American expedition in Alvin and the French submersible Cyana found plumes of dark fluid at 380°C — far exceeding boiling point at surface pressure. The iconic image of black smoker chimneys (up to 60 m tall) billowing dark mineral-laden fluid originated here.',
    features: 'Black smokers, zinc-iron sulfide chimneys, first high-temperature vent discovered',
  },
  {
    id: 'epr-9n',
    name: 'East Pacific Rise 9–10°N',
    lat: 9.8, lng: -104.3,
    ocean: 'Pacific', depthM: 2500, maxTempC: 403, discoveredYear: 1989,
    description: 'The most intensively studied vent field on Earth. A 1991 volcanic eruption was directly observed in real time, and the colonization of the fresh lava by vent organisms was documented over years — revealing the resilience and dispersal dynamics of chemosynthetic ecosystems. Hosts the densest known aggregations of Riftia pachyptila tube worms.',
    features: 'Riftia tube worm forests, highest-temperature vents, eruption directly observed (1991)',
  },
  {
    id: 'endeavour-jdf',
    name: 'Endeavour Segment (Juan de Fuca Ridge)',
    lat: 47.9, lng: -129.0,
    ocean: 'Pacific (NE)', depthM: 2200, maxTempC: 340, discoveredYear: 1982,
    description: 'One of the most thermally active vent fields on the NE Pacific. Five major vent clusters across 3 km produce 60% of the entire ridge segment\'s heat output. Continuously monitored for 40+ years, it has provided critical long-term data on how vent communities evolve and respond to seismic activity.',
    features: 'Main Endeavour, Mothra, High Rise vent clusters; long-term ONC monitoring',
  },
  {
    id: 'axial-seamount',
    name: 'Axial Seamount',
    lat: 45.9, lng: -130.0,
    ocean: 'Pacific (NE)', depthM: 1520, maxTempC: 312, discoveredYear: 1986,
    description: 'The most active submarine volcano on the Juan de Fuca Ridge, erupting in 1998, 2011, and 2015. Equipped with the world\'s most comprehensive deep-sea observatory network (OOI Cabled Array), enabling real-time monitoring of seafloor earthquakes, deformation, and fluid flow. The 2015 eruption was successfully forecast weeks in advance.',
    features: 'Active caldera, OOI real-time observatory, predictable eruption cycles',
  },
  {
    id: 'lost-city',
    name: 'Lost City Hydrothermal Field',
    lat: 30.1, lng: -42.1,
    ocean: 'Atlantic (Mid-Atlantic Ridge)', depthM: 800, maxTempC: 91, discoveredYear: 2000,
    description: 'Discovered in 2000, Lost City shattered the established paradigm. Rather than volcanic heat, it is powered by serpentinization — seawater reacting with mantle peridotite. This produces alkaline, hydrogen-rich fluids and white carbonate chimneys up to 60 m tall. Some structures are estimated to be >120,000 years old. Its chemistry closely resembles what scientists think early Earth conditions looked like — making it the leading candidate site for the origin of life.',
    features: 'White carbonate towers, alkaline H₂-rich fluids, >120,000-year-old structures; origin-of-life candidate',
  },
  {
    id: 'tag-field',
    name: 'Trans-Atlantic Geotraverse (TAG)',
    lat: 26.1, lng: -44.8,
    ocean: 'Atlantic (Mid-Atlantic Ridge)', depthM: 3650, maxTempC: 366, discoveredYear: 1985,
    description: 'The largest active hydrothermal mound on the seafloor — 200 m wide and 50 m tall. The TAG mound has cycled on and off for ~140,000 years. In 1994, the first scientific ocean drilling into an active hydrothermal mound (ODP Leg 158) revealed how massive sulfide ore deposits form at spreading ridges.',
    features: 'Largest active sulfide mound on Earth, scientific drilling site',
  },
  {
    id: 'rainbow-field',
    name: 'Rainbow Vent Field',
    lat: 36.2, lng: -33.9,
    ocean: 'Atlantic (Mid-Atlantic Ridge)', depthM: 2300, maxTempC: 365, discoveredYear: 1997,
    description: 'An unusually metal-rich field located where the mantle rock peridotite is exposed at the seafloor. The serpentinization reaction produces extraordinary concentrations of iron and hydrogen. Despite fluid temperatures hostile to most life, dense communities thrive here — demonstrating how life exploits even the most extreme chemical gradients.',
    features: 'Metal-rich peridotite-hosted vents; exceptional iron and hydrogen concentrations',
  },
  {
    id: 'lau-basin',
    name: 'Lau Basin Vent Fields',
    lat: -21.0, lng: -176.5,
    ocean: 'Pacific (SW)', depthM: 1900, maxTempC: 334, discoveredYear: 1989,
    description: 'A back-arc basin behind the Tonga subduction zone with the world\'s most diverse vent fauna — a hotspot of evolutionary radiation for vent organisms. Fluid pH can drop below 2, among the most acidic vent fluids known. The subducted Pacific slab adds arc-like chemistry, making each vent field within the basin dramatically different from its neighbors.',
    features: 'Extreme acid vents (pH<2), Alviniconcha snail forests, highest vent diversity on Earth',
  },
  {
    id: 'guaymas-basin',
    name: 'Guaymas Basin',
    lat: 27.0, lng: -111.4,
    ocean: 'Pacific (Gulf of California)', depthM: 2000, maxTempC: 315, discoveredYear: 1980,
    description: 'A vent field buried in thick organic-rich sediment from high biological productivity in the Gulf of California. Hydrothermal fluids "cook" the sediments, generating a remarkable mix of hydrocarbons and amino acids — essentially a natural abiotic synthesis laboratory. A prime site for studying how organic molecules that could seed life form under hydrothermal conditions.',
    features: 'Sediment-hosted vents, petroleum-like hydrocarbons, natural amino acid synthesis',
  },
  {
    id: 'kairei-cir',
    name: 'Kairei Vent Field',
    lat: -25.3, lng: 70.0,
    ocean: 'Indian (Central Indian Ridge)', depthM: 2450, maxTempC: 360, discoveredYear: 2001,
    description: 'The first high-temperature vent field discovered in the Indian Ocean. Features a unique biogeographic mixture: Atlantic Rimicaris shrimp and Pacific Alvinocarid shrimp occur side by side — revealing that the Indian Ocean is a mixing zone between the two major global vent biogeographic provinces that evolved in isolation.',
    features: 'Atlantic-Pacific biogeographic mixing zone; dual shrimp species co-occurrence',
  },
  {
    id: 'east-scotia-ridge',
    name: 'East Scotia Ridge Vents',
    lat: -56.1, lng: -30.3,
    ocean: 'Southern', depthM: 2400, maxTempC: 382, discoveredYear: 2009,
    description: 'The first vents discovered in the Southern Ocean, and home to a completely unknown ecosystem. Dominated by yeti crabs (Kiwa tyleri) piled in massive aggregations around vent chimneys. No tube worms — abundant everywhere else — were found. The Drake Passage appears to act as a biogeographic barrier, isolating Antarctic vent fauna from the rest of the ocean.',
    features: 'Yeti crab aggregations (Kiwa tyleri), tube-worm-absent unique Antarctic ecosystem',
  },
  {
    id: 'mid-cayman',
    name: 'Mid-Cayman Spreading Centre',
    lat: 18.5, lng: -81.7,
    ocean: 'Atlantic (Caribbean)', depthM: 5000, maxTempC: 398, discoveredYear: 2010,
    description: 'The world\'s deepest known hydrothermal vents, discovered in 2010 by ROV. Found two chemically distinct fields just 2 km apart — one basalt-hosted (Piccard), one peridotite-hosted (Von Damm) — allowing direct comparison of both vent types. At 5,000 m depth, extreme pressure alters fluid chemistry and biology in ways not seen at shallower sites.',
    features: 'Deepest known vent system; Piccard and Von Damm fields; dual vent chemistry',
  },
]

// ─── Coral Reef Systems ───────────────────────────────────────────────────────

export interface CoralReef {
  id: string
  name: string
  coordinates: [number, number][]
  region: string
  lengthKm: number
  bleachingRisk: 'critical' | 'high' | 'moderate' | 'low'
  description: string
}

export const CORAL_REEFS: CoralReef[] = [
  {
    id: 'great-barrier-reef',
    name: 'Great Barrier Reef',
    coordinates: [[-10,143],[-14,145],[-18,147],[-22,152],[-24,154]],
    region: 'Australia (Queensland)',
    lengthKm: 2300,
    bleachingRisk: 'critical',
    description: 'Earth\'s largest living structure and largest coral reef system, visible from space. Has suffered five mass bleaching events since 1998. Back-to-back bleaching in 2016–17 killed ~50% of shallow corals in the northern section. At current warming trajectories, annual bleaching events are projected by the 2030s, leaving insufficient recovery time.',
  },
  {
    id: 'mesoamerican-reef',
    name: 'Mesoamerican Barrier Reef',
    coordinates: [[20,-87.5],[18,-87.7],[16,-88],[14,-87],[12,-83.5]],
    region: 'Mexico, Belize, Honduras, Guatemala',
    lengthKm: 1000,
    bleachingRisk: 'high',
    description: 'The world\'s second-largest barrier reef system, supporting thousands of species and the livelihoods of ~2 million people. Bleaching frequency has dramatically increased since 2005. In summer 2023, record-high Caribbean sea surface temperatures triggered one of the most severe bleaching events in the reef\'s recorded history.',
  },
  {
    id: 'coral-triangle-indo',
    name: 'Coral Triangle (Indonesia)',
    coordinates: [[-5,107],[-5,120],[-5,132],[0,135],[0,145]],
    region: 'Indonesia',
    lengthKm: 3000,
    bleachingRisk: 'high',
    description: 'The "Amazon of the Seas" — the Indo-Pacific Coral Triangle contains 76% of all coral species and 37% of all coral reef fish. Indonesia alone contains more marine biodiversity than any other nation. It faces intense pressure from overfishing, destructive fishing practices, coastal development, and accelerating thermal bleaching events.',
  },
  {
    id: 'coral-triangle-phil',
    name: 'Coral Triangle (Philippines)',
    coordinates: [[10,118],[10,121],[8,123],[7,126],[5,127]],
    region: 'Philippines',
    lengthKm: 1800,
    bleachingRisk: 'high',
    description: 'The Philippines section of the Coral Triangle contains some of the highest reef fish diversity on Earth and supports millions of subsistence fishers. Tubbataha Reef Natural Park — a UNESCO World Heritage Site in the Sulu Sea — demonstrates how strict marine protection can maintain reef health even under regional bleaching pressure.',
  },
  {
    id: 'red-sea-reef',
    name: 'Red Sea Coral Reefs',
    coordinates: [[26,37],[24,38],[22,38],[18,41],[15,42]],
    region: 'Saudi Arabia, Egypt, Yemen, Eritrea',
    lengthKm: 2000,
    bleachingRisk: 'moderate',
    description: 'The most thermally tolerant coral reefs on Earth. Red Sea corals survive temperatures that would kill reefs elsewhere — having evolved in naturally warmer, more variable conditions. Scientists are studying their heat-resistance genes as a potential source of "super coral" genetics that might help reef restoration elsewhere survive future ocean warming.',
  },
  {
    id: 'florida-reef',
    name: 'Florida Reef Tract',
    coordinates: [[24.5,-80.5],[25.5,-80.2],[27,-80.5],[28,-80.7]],
    region: 'USA (Florida)',
    lengthKm: 580,
    bleachingRisk: 'critical',
    description: 'The only living coral barrier reef in the continental USA, and among the world\'s most degraded. Has lost ~90% of living coral since the 1970s. In summer 2023, water temperatures in Florida Bay reached 38°C — warmer than a hot tub — causing mass bleaching with many scientists describing it as potentially irreversible at current warming rates.',
  },
  {
    id: 'hawaiian-reefs',
    name: 'Hawaiian Coral Reefs',
    coordinates: [[22,-160],[21,-157],[20,-156],[19,-155.5]],
    region: 'USA (Hawaii)',
    lengthKm: 410,
    bleachingRisk: 'high',
    description: 'Evolved in geographic isolation, Hawaiian reefs contain ~25% endemic species found nowhere else. The Papahānaumokuākea Marine National Monument — one of the world\'s largest marine protected areas — protects the Northwestern Hawaiian Islands. Back-to-back bleaching events in 2015 and 2019 affected reefs across the archipelago.',
  },
  {
    id: 'maldives-reefs',
    name: 'Maldives Atolls',
    coordinates: [[5,73],[3,73.5],[1,73],[-1,73.5],[-2,73]],
    region: 'Maldives (Indian Ocean)',
    lengthKm: 1500,
    bleachingRisk: 'critical',
    description: 'The Maldives — the world\'s lowest country, averaging 1.5 m above sea level — sits entirely on coral atolls. Both sea-level rise and bleaching threaten national existence. The 1998 bleaching event killed 90% of corals in some areas. Climate models project the islands could be uninhabitable by 2100, making this the most existential bleaching risk on Earth.',
  },
  {
    id: 'new-caledonia-reef',
    name: 'New Caledonia Lagoon',
    coordinates: [[-20,164],[-22,165],[-22.5,167],[-22,168]],
    region: 'France (New Caledonia)',
    lengthKm: 1600,
    bleachingRisk: 'moderate',
    description: 'The world\'s most extensive lagoon system and a UNESCO World Heritage Site. Contains the second-largest barrier reef outside Australia and remarkable endemic species, including unique dugong populations. Relatively lower human population pressure compared to most major reef systems has allowed it to maintain higher coral cover.',
  },
  {
    id: 'chagos-reefs',
    name: 'Chagos / BIOT Reefs',
    coordinates: [[-6,71.5],[-6.5,72],[-7,72.5],[-6.5,73]],
    region: 'British Indian Ocean Territory',
    lengthKm: 440,
    bleachingRisk: 'low',
    description: 'Among the most pristine coral reefs on Earth, protected by one of the world\'s largest no-take marine reserves (640,000 km²). With virtually no human impact from fishing or pollution, Chagos reefs recovered far faster from the 1998 bleaching event than any other major reef — demonstrating that reducing local stressors dramatically improves climate resilience.',
  },
  {
    id: 'ningaloo-reef',
    name: 'Ningaloo Reef',
    coordinates: [[-21.5,114],[-22,113.8],[-23,113.6],[-24,113.4]],
    region: 'Australia (Western Australia)',
    lengthKm: 300,
    bleachingRisk: 'moderate',
    description: 'The world\'s largest fringing reef — one of the few places where a large coral reef is accessible directly from shore. Hosts annual whale shark aggregations (March–July) and manta ray populations. 2011 and 2013 bleaching events damaged sections, but recovery was observed at less-affected areas within years.',
  },
  {
    id: 'andaman-reefs',
    name: 'Andaman Sea Reefs',
    coordinates: [[13,98],[10,98.5],[8,98.5],[6,99],[3,99]],
    region: 'Thailand, Myanmar, Andaman Islands',
    lengthKm: 900,
    bleachingRisk: 'high',
    description: 'Some of the highest coral diversity in the Indian Ocean, spanning the Andaman Islands, Mergui Archipelago, and Similan Islands. The 2004 Indian Ocean tsunami devastated coastal reefs in the immediate aftermath, but protected sites showed faster recovery than expected — a significant finding for reef resilience and marine protected area design.',
  },
]

// ─── Layer definitions ────────────────────────────────────────────────────────

export const ATLAS_LAYERS = [
  {
    id: 'plate-boundaries',
    label: 'Plate Boundaries',
    description: 'Divergent, convergent, and transform boundaries',
    requiresSubscription: false,
    linkedLessonId: 'geol-101-1-4-1',
    linkedLessonLabel: 'Earth Foundations · Plate Tectonics Theory',
  },
  {
    id: 'tectonic-fills',
    label: 'Tectonic Plates',
    description: 'Colour-coded territory fills for 14 major plates',
    requiresSubscription: false,
    linkedLessonId: 'geol-101-1-4-1',
    linkedLessonLabel: 'Earth Foundations · Plate Tectonics Theory',
  },
  {
    id: 'earthquakes',
    label: 'Major Earthquakes',
    description: 'Historical M 7+ events sized by magnitude',
    requiresSubscription: false,
    linkedLessonId: 'geol-101-1-4-1',
    linkedLessonLabel: 'Earth Foundations · Plate Tectonics Theory',
  },
  {
    id: 'volcanoes',
    label: 'Active Volcanoes',
    description: 'Notable active and historically significant volcanoes',
    requiresSubscription: true,
    linkedLessonId: 'geol-101-1-5-1',
    linkedLessonLabel: 'Earth Foundations · Volcanic Landforms',
  },
  {
    id: 'ocean-currents',
    label: 'Ocean Currents',
    description: 'Major warm and cold surface current systems',
    requiresSubscription: true,
    linkedLessonId: 'ocea-101-1-2-3',
    linkedLessonLabel: 'Ocean Systems · Ocean Circulation',
  },
  {
    id: 'hotspots',
    label: 'Mantle Hotspots',
    description: 'Volcanic hotspots driven by deep mantle plumes',
    requiresSubscription: true,
    linkedLessonId: 'geol-101-1-4-4',
    linkedLessonLabel: 'Earth Foundations · Hotspots & Plumes',
  },
  {
    id: 'vent-fields',
    label: 'Hydrothermal Vents',
    description: 'Known deep-sea hydrothermal vent fields',
    requiresSubscription: true,
    linkedLessonId: 'ocea-101-1-4-1',
    linkedLessonLabel: 'Deep Ocean · Hydrothermal Vents & Chemosynthetic Life',
  },
  {
    id: 'coral-reefs',
    label: 'Coral Reef Systems',
    description: 'Major reefs colour-coded by bleaching risk',
    requiresSubscription: true,
    linkedLessonId: 'ocea-101-1-4-2',
    linkedLessonLabel: 'Deep Ocean · Ocean Acidification',
  },
] as const

export type AtlasLayerId = typeof ATLAS_LAYERS[number]['id']
