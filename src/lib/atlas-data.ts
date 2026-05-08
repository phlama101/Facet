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

// ─── Layer definitions ────────────────────────────────────────────────────────

export const ATLAS_LAYERS = [
  {
    id: 'plate-boundaries',
    label: 'Plate Boundaries',
    description: 'Divergent, convergent, and transform boundaries',
    requiresSubscription: false,
    linkedLessonId: 'geol-101-1-4-1',
    linkedLessonLabel: 'GEOL 101 · 1.4.1 — Plate Tectonics Theory',
  },
  {
    id: 'volcanoes',
    label: 'Active Volcanoes',
    description: 'Notable active and historically significant volcanoes',
    requiresSubscription: true,
    linkedLessonId: 'geol-101-1-5-1',
    linkedLessonLabel: 'GEOL 101 · 1.5.1 — Volcanic Landforms',
  },
  {
    id: 'ocean-currents',
    label: 'Ocean Currents',
    description: 'Major warm and cold surface current systems',
    requiresSubscription: true,
    linkedLessonId: 'ocea-101-1-2-3',
    linkedLessonLabel: 'OCEA 101 · 1.2.3 — Ocean Circulation',
  },
  {
    id: 'hotspots',
    label: 'Mantle Hotspots',
    description: 'Volcanic hotspots driven by deep mantle plumes',
    requiresSubscription: true,
    linkedLessonId: 'geol-101-1-4-4',
    linkedLessonLabel: 'GEOL 101 · 1.4.4 — Hotspots & Plumes',
  },
] as const

export type AtlasLayerId = typeof ATLAS_LAYERS[number]['id']
