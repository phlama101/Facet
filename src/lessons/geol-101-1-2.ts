import { Mountain, Waves, ArrowUpDown } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const crustContinentalVsOceanic: Lesson = {
  id: 'geol-101-1-2',
  title: 'The Crust — Continental vs. Oceanic',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "The ocean floor and the land beneath your feet are made of completely different rock — and that difference explains almost everything about Earth's surface.",
  sources: [
    { org: 'USGS',       title: 'This Dynamic Earth (Kious & Tilling)',       url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'NOAA',       title: 'Ocean Service — How deep is the ocean?',     url: 'https://oceanservice.noaa.gov/facts/oceandepth.html' },
    { org: 'NASA',       title: 'Earth Facts — By the Numbers',               url: 'https://science.nasa.gov/earth/facts/' },
    { org: 'OpenStax',   title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',      url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: "Earth's Interior",    url: 'https://scied.ucar.edu/learning-zone/earth/earths-interior' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Two kinds of floor',
      body: `The ground beneath a beach in California and the rock 5 km below the Pacific Ocean look nothing alike — yet both are called "crust." That single word hides one of the most consequential distinctions in all of geology.

Stand on a beach and look out at the ocean. You are standing at one of the most important geological boundaries on Earth — not just between land and sea, but between two fundamentally different types of rock. The ground beneath your feet and the floor of the ocean are not the same material. They have different compositions, different densities, different thicknesses, and very different ages.

In Lesson 1.1.1, we learned that the crust — Earth's thin outermost layer — ranges in thickness from about **7 km** beneath the ocean floor to as much as **70 km** beneath major mountain ranges. That is a tenfold difference. We promised to explain why. This lesson delivers that explanation.

The short answer is: **there are two kinds of crust**, and they are made of different rock. One kind is thin and dense; the other is thick and less dense. That single difference in density turns out to explain an enormous amount — including why continents sit thousands of meters above sea level while the ocean floor sits thousands of meters below it.

By the end of this lesson you will understand the key differences between the two crust types, why they sit at such different elevations, and what the remarkable age difference between ocean floor and continental rock tells us about Earth's restless interior.`,
      keyTerms: [
        {
          term: 'Oceanic crust',
          def: "The thin (~7 km), dense (~3.0 g/cm³) layer of basaltic rock that forms the floor of the world's ocean basins. It is continuously created and destroyed and is never older than about 200 million years.",
        },
        {
          term: 'Continental crust',
          def: "The thick (30–70 km), less dense (~2.7 g/cm³) layer of granitic rock that forms Earth's continents and the shallow seafloor near the coasts. It can preserve rocks billions of years old.",
        },
        {
          term: 'Basalt',
          def: "A dark, fine-grained volcanic rock that makes up the bulk of the oceanic crust. It is rich in iron and magnesium, which makes it denser than the rocks that make up continental crust.",
        },
        {
          term: 'Granite',
          def: "A light-colored, coarse-grained rock that is representative of continental crust. It is rich in silicon and aluminum, making it less dense than basalt. You can often see its characteristic speckled texture in kitchen countertops.",
        },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Tectonic_plates.png',
        alt: 'World map showing the major tectonic plates and their boundaries',
        aspectRatio: '16/9',
        credit: 'USGS / Wikimedia Commons',
        annotations: [
          {
            id: '1',
            x: 28,
            y: 45,
            label: 'Mid-Atlantic Ridge',
            description: 'A divergent plate boundary where the North American and Eurasian plates pull apart. New oceanic crust is continuously created here at a rate of about 2.5 cm per year on each side.',
          },
          {
            id: '2',
            x: 80,
            y: 35,
            label: 'Pacific Plate',
            description: 'The largest tectonic plate on Earth, composed almost entirely of dense oceanic crust. Its edges are subducting beneath surrounding plates, creating the "Ring of Fire."',
          },
          {
            id: '3',
            x: 65,
            y: 55,
            label: 'Indo-Australian Plate',
            description: 'A plate carrying both continental and oceanic crust. Its collision with the Eurasian plate is building the Himalayas — Earth\'s highest mountain range.',
          },
          {
            id: '4',
            x: 15,
            y: 60,
            label: 'South American Plate',
            description: 'Continental plate where the Andes mountains form along its western edge as the Nazca oceanic plate subducts beneath it, illustrating how oceanic-continental collision builds mountain ranges.',
          },
          {
            id: '5',
            x: 48,
            y: 30,
            label: 'Eurasian Plate',
            description: 'The world\'s largest continental plate, carrying most of Europe and Asia. Its southern boundary with the African and Indo-Australian plates is a zone of active collision and mountain-building.',
          },
        ],
      },
    },
    {
      type: 'callout' as const,
      variant: 'fact',
      headline: 'No oceanic crust on Earth is older than ~200 million years — yet Earth itself is 4.54 billion years old',
      body: 'Continental rocks can be over 4 billion years old, but the entire ocean floor is geologically young. The oldest oceanic crust known — small patches in the eastern Mediterranean and western Pacific — dates to only about 180–200 million years ago. This means that in the time since those oldest ocean-floor rocks formed, the entire global ocean floor has been recycled roughly 22 times. The relentless creation and destruction of oceanic crust is one of the most dramatic planetary-scale processes on Earth.',
    },
    {
      type: 'concept',
      title: 'Composition, isostasy, and the age of the ocean floor',
      body: `The most important difference between the two types of crust is **chemistry** — what they are made of. Every other difference (thickness, elevation, age) flows from that. Just as a wooden board floats higher in water than a steel plate of the same size — because wood is less dense — continental crust floats higher on the mantle than oceanic crust because granite is less dense than basalt.

**Oceanic crust: dense and thin.** The ocean floor is built almost entirely from **basalt** — a dark, heavy volcanic rock. Basalt is loaded with iron and magnesium, which makes it dense. Geologists describe this as **mafic** (a word blending "magnesium" and the Latin word for iron, ferrum). The average density of oceanic crust is about 3.0 g/cm³. It is also remarkably thin — only about 7 km on average. If you drove from the ocean surface to the bottom of the oceanic crust, you would travel roughly the same distance as driving across a large city.

**Continental crust: less dense and thick.** The continents are built from a fundamentally different type of rock. The most representative rock is **granite** — the speckled, light-colored stone you see in building facades and kitchen countertops. Granite is rich in silicon and aluminum, which makes it less dense than basalt. Geologists call this type of rock **felsic** (from "feldspar" and "silica," its main mineral components). The average density of continental crust is about 2.7 g/cm³ — noticeably lighter than oceanic crust. And it is far thicker: typically 35–40 km in quiet, stable regions, and up to 70 km beneath young mountain ranges like the Himalayas, which have a deep crustal "root" pushed down by the collision of two continents.

**Why does any of this matter?** The density difference is the key to understanding one of Earth's most visible features: why continents are high and ocean basins are low.

**Isostasy — why continents float high.** Both types of crust rest on the denser mantle below (density ~3.3 g/cm³). Think of the crust as floating on the mantle the way objects float on water — except here, the "water" is hot, slowly flowing mantle rock, and the floating happens over millions of years rather than instantly.

Now think about icebergs. A large iceberg sits higher above the water's surface than a small one — but it also extends deeper below the surface. Both are in balance: the weight of the iceberg equals the weight of the water it displaces. This balance is called **isostasy**, and it applies to the crust in exactly the same way.

Continental crust is less dense than oceanic crust. Because it is less dense, it floats higher on the mantle — both above and below the surface. This is why the continents stand several kilometres above sea level. The base of the continental crust also pushes deeper into the mantle as a root. Where mountains are especially heavy (like the Himalayas), the root extends particularly deep — the crust there is nearly twice as thick as in flat, stable regions.

Oceanic crust is denser. It floats lower. So the ocean basins sit roughly **3 to 5 km below sea level** — not because the ocean is deep, but because the rock forming the ocean floor is heavy enough to sit that far down. The water fills in from above.

**What isostasy does not explain.** Isostasy tells us *that* continental crust floats higher — it does not explain *why* there are two types of crust in the first place, or why oceanic crust forms at spreading centres and gets recycled at subduction zones. Those explanations belong to Module 1.4 on plate tectonics. For now, the key takeaway is: **composition drives density, and density determines elevation**.

**The striking age difference.** Here is a remarkable fact: no oceanic crust anywhere on Earth is older than about **200 million years**. That is young by geological standards — Earth is 4.54 billion years old. The oldest oceanic crust currently on the seafloor is in a small part of the eastern Mediterranean and the western Pacific, and even those patches are only ~180–200 million years old.

Continental rocks tell a very different story. Stable ancient cores of continents — called **cratons** — preserve rocks that are billions of years old. The oldest intact rock formations are found in Canada, Greenland, and Australia, with ages exceeding 4 billion years. The oldest mineral grain ever dated — a tiny zircon crystal from the Jack Hills of Western Australia — is approximately 4.4 billion years old.

Why is the ocean floor so young? Something must be continuously creating fresh oceanic crust somewhere and destroying old oceanic crust somewhere else. That "something" is an active planetary-scale process — the same process responsible for earthquakes, volcanoes, and mountain ranges. We will explore it fully in Module 1.4. For now, keep in mind that the youthfulness of the ocean floor is not a coincidence: it is a clue that the ocean floor is always in motion.

**How do we know all this?** Three main lines of evidence:
- **Seismic refraction surveys** — geologists set off controlled explosions (or use earthquake waves) and measure how fast the waves travel through the crust. The speed reveals the rock type and the thickness. Oceanic crust and continental crust produce distinctly different seismic signatures.
- **Ocean-floor drilling** — since the 1960s, a series of international programs (DSDP, ODP, IODP) has drilled cores from the ocean floor all over the world. In every case, the dominant rock is basalt — confirming what seismic data predicted.
- **Direct rock sampling** — onshore outcrops, river samples, and deep mine exposures allow geologists to sample continental crust directly, confirming its granitic, felsic character.

All three methods point to the same picture, giving geologists very high confidence in the two-crust model.`,
      cards: [
        {
          name: 'Continental Crust',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Thick (30–70 km), less dense (~2.7 g/cm³), and dominated by felsic rocks like granite. Because it is less dense than the mantle, it floats relatively high — explaining why continents stand above sea level. Continental crust is ancient: stable cratons preserve rocks over 3–4 billion years old. It also thickens beneath mountain ranges, where colliding plates force the crust to pile up and grow a deep root into the mantle.",
          examples: 'Canadian Shield: rocks 4+ Ga old · Himalayan root: ~70 km thick · Average stable continent: ~35 km · Jack Hills zircon (Australia): oldest mineral grain 4.4 Ga · ~2.7 g/cm³ density',
        },
        {
          name: 'Oceanic Crust',
          icon: Waves,
          color: BRAND.accent,
          desc: "Thin (~7 km), dense (~3.0 g/cm³), and made almost entirely of mafic basalt. Its greater density relative to the mantle is just small enough to keep it floating, but it floats low — which is why ocean basins sit 3–5 km below sea level. Oceanic crust is geologically young: the oldest intact patches are only about 180–200 million years old, a tiny fraction of Earth's 4.54-billion-year age.",
          examples: 'West Pacific oldest patches: ~180–200 Ma · Average thickness ~7 km · ~3.0 g/cm³ · DSDP/ODP drill cores confirm basalt everywhere · New crust forming today at Mid-Atlantic Ridge',
        },
        {
          name: 'Isostasy',
          icon: ArrowUpDown,
          color: BRAND.jade,
          desc: "The gravitational equilibrium that determines how high or low crustal blocks sit on the mantle — just as icebergs of different sizes float at different heights in water. Less dense continental crust floats high; denser oceanic crust floats low. Where mountains add extra crustal mass, the crust below thickens into a root that reaches deeper into the mantle. Remove that mass (by erosion over millions of years) and the crust slowly rebounds upward — a process called isostatic rebound.",
          examples: 'Continental high · Oceanic low · Mountain roots · Glacial rebound',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Which set of properties correctly describes oceanic crust?',
          a: [
            'Thick (30–70 km), low density (~2.7 g/cm³), granitic, up to billions of years old',
            'Thin (~7 km), high density (~3.0 g/cm³), basaltic, never older than ~200 Ma',
            'Thin (~7 km), low density (~2.7 g/cm³), granitic, never older than ~200 Ma',
            'Thick (30–70 km), high density (~3.0 g/cm³), basaltic, up to billions of years old',
          ],
          correct: 1,
          explain: "Option A describes continental crust, not oceanic — thick, granitic, and ancient are all continental properties. Option B is correct: oceanic crust is thin (~7 km), denser than continental crust (~3.0 g/cm³), composed mainly of basalt, and is never older than roughly 200 million years because it is continuously recycled by plate-tectonic processes. Option C mixes the thickness and composition of oceanic crust with the density and rock type of continental crust — no such crust type exists. Option D reverses the thickness and density: the thick, granitic type is continental, and ancient crust is also continental, not oceanic.",
        },
        {
          q: 'Why does continental crust stand several kilometres higher than oceanic crust, even though continental crust is thicker and heavier overall?',
          a: [
            'Continental crust is pushed up by volcanoes erupting beneath it',
            'Continental crust is older, and older rock expands and rises over time',
            'Continental crust is less dense than oceanic crust, so it floats higher on the mantle — the same reason a larger iceberg sits higher in water',
            'Continental crust is held up by the rigid lithosphere acting like a platform',
          ],
          correct: 2,
          explain: "Volcanoes (A) can locally uplift the crust but are not the reason continents in general sit above sea level — most of the continental interior has no active volcanism at all. Age-related expansion (B) is not a recognised geological mechanism; old rocks do not float higher simply because they are old. The correct answer is C: isostasy means that less dense material floats higher on a denser substrate, exactly as a large wooden block floats higher in water than a small iron block even though it is heavier in absolute terms. Continental crust at ~2.7 g/cm³ floats higher on the ~3.3 g/cm³ mantle than oceanic crust at ~3.0 g/cm³. The lithosphere (D) does provide rigidity but rigidity alone does not determine elevation — density and the principle of isostatic equilibrium do.",
        },
        {
          q: 'No oceanic crust on Earth is older than about 200 million years, yet continental rocks can be over 4 billion years old. What is the most direct implication of this age contrast?',
          a: [
            'The oceans formed only 200 million years ago, so no older ocean floor could exist',
            'Oceanic crust is destroyed and replaced by fresh rock on a continuous basis, suggesting an active large-scale process',
            'Continental crust slowly slides into the ocean and becomes oceanic crust over time',
            'Erosion by seawater dissolves oceanic crust faster than continental crust weathers on land',
          ],
          correct: 1,
          explain: "The oceans (A) are far older than 200 million years — liquid water has existed on Earth for at least 4 billion years, so the absence of old ocean floor is not explained by the oceans being young. The correct answer is B: the uniform youthfulness of ocean floor worldwide is direct evidence that oceanic crust is being continuously generated somewhere and destroyed somewhere else — an active planetary-scale process (which we will identify as seafloor spreading and subduction in Module 1.4). Continental crust does not slide into the ocean and become oceanic crust (C) — the two are fundamentally different rock types formed by different processes. Seawater erosion (D) is a real but minor and very slow process at the seafloor; it could not account for the complete absence of crust older than 200 Ma across the entire global ocean floor.",
        },
      ],
    },
  ],
}

export default crustContinentalVsOceanic
