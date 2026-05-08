import { Telescope, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'astr-101-1-1-3',
  title: 'The Sun: Structure, Energy Generation, and the Solar Wind',
  description: 'The internal structure of the Sun, how nuclear fusion converts hydrogen to helium releasing the energy that powers the Solar System, and how the solar wind shapes space weather.',
  track: 'ast',
  trackName: 'Planetary Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Telescope,
  color: BRAND.amethyst,
  cards: [
    {
      title: 'Solar Structure: From Core to Corona',
      body: `The Sun contains 99.86 % of the Solar System's mass (2 × 10³⁰ kg) and is a main-sequence G2V star. Its structure from inside out:\n\n**Core (0–25 % of radius, ~15 million K):** Where thermonuclear fusion occurs. Density ~150 g/cm³ — 10× denser than lead. Pressure ~250 billion atmospheres supports the Sun against gravitational collapse.\n\n**Radiative zone (25–70 % of radius):** Energy transported by photon diffusion. A photon produced in the core takes ~100,000 years to random-walk to the top of the radiative zone because of the extremely high opacity. This zone rotates nearly as a solid body.\n\n**Tachocline:** A thin shear layer at the radiative-convective boundary where the transition from solid-body to differential rotation generates the Sun's magnetic field via a dynamo mechanism.\n\n**Convective zone (70–100 % of radius):** Energy carried by convection cells (granules, supergranules). Hot plasma rises, cools at the photosphere, sinks — creating the mottled solar surface visible in high-resolution images.\n\n**Photosphere (~5,800 K, optical "surface"):** Where the Sun becomes transparent. Sunspots are cooler (~3,500 K) regions where strong magnetic fields suppress convection. The 11-year sunspot cycle reflects the solar magnetic cycle (22-year Hale cycle including polarity reversal).\n\n**Chromosphere and Corona (>1 million K):** The corona is paradoxically hotter than the photosphere — likely heated by wave dissipation or nanoflare reconnection events. Understanding coronal heating remains an active research area.`,
      icon: Telescope,
      color: BRAND.amethyst,
    },
    {
      title: 'Nuclear Fusion and the Proton-Proton Chain',
      body: `The Sun's energy source is the **proton-proton (pp) chain** — a sequence of nuclear fusion reactions that converts hydrogen into helium, releasing energy via E = mc².\n\nThe dominant branch (pp-I, ~86 % of energy output):\n1. p + p → ²H + e⁺ + νₑ (the slow step — requires weak-force mediated beta decay)\n2. ²H + p → ³He + γ\n3. ³He + ³He → ⁴He + 2p\n\nNet: 4 ¹H → ⁴He + 2e⁺ + 2νₑ + energy\nEnergy released: 26.7 MeV per helium nucleus formed. The positrons annihilate with electrons, contributing ~2 MeV per event.\n\n**Solar neutrinos:** Because step 1 produces electron neutrinos immediately (before the energy is thermalised), neutrinos arrive at Earth ~8 minutes after production with essentially no interaction with Solar material. Solar neutrino detection (Homestake, Super-Kamiokande, SNO experiments) originally found only 1/3 of predicted neutrinos — the **Solar Neutrino Problem**, resolved by **neutrino oscillation**: electron neutrinos transform to muon and tau neutrinos in transit. The SNO experiment (2002, Nobel Prize 2015) proved that total neutrino flux matched solar models once all flavours were counted.\n\n**Stellar lifetime:** At current luminosity the Sun will exhaust its core hydrogen in ~5 Gyr, becoming a red giant and eventually a white dwarf. It is currently ~4.6 Gyr old — roughly halfway through its main-sequence life.`,
      icon: Globe,
      color: BRAND.amethyst,
    },
    {
      title: 'The Solar Wind and Heliosphere',
      body: `The **solar wind** is a continuous stream of charged particles (mostly protons and electrons, plus He²⁺ ions) ejected from the corona at ~400 km/s (slow wind) to ~750 km/s (fast wind emanating from coronal holes). The solar wind carries ~10⁹ kg/s away from the Sun — a tiny fraction of solar mass but the dominant factor shaping the near-planetary environment.\n\n**The heliosphere** is the bubble of solar influence stretching to ~120 AU, where the solar wind pressure equals the interstellar medium pressure (**heliopause**). Voyager 1 crossed the heliopause in 2012 at ~121 AU; Voyager 2 in 2018. Before the heliopause, the solar wind decelerates through a **termination shock** (~85 AU) and the compressed, turbulent **heliosheath**.\n\n**Space weather:** Explosive solar events shape the near-Earth environment:\n- **Solar flares:** Intense X-ray and UV bursts lasting minutes to hours; ionise Earth's upper atmosphere, disrupting radio communications.\n- **Coronal Mass Ejections (CMEs):** Billion-tonne plasma clouds ejected at 1,000–3,000 km/s. When Earth-directed CMEs compress Earth's magnetosphere, they trigger **geomagnetic storms**, inducing currents that can damage power grids (Carrington Event 1859; Quebec blackout 1989), degrade GPS accuracy, and produce auroras at mid-latitudes.\n- **Solar energetic particles (SEPs):** High-energy protons from flares/CMEs pose radiation hazards for astronauts and satellites.\n\n**Earth's magnetosphere** provides critical shielding; planets without global magnetic fields (Mars, Venus) experience direct atmospheric sputtering by solar wind ions.`,
      icon: Wind,
      color: BRAND.amethyst,
    },
  ],
  quiz: [
    {
      question: 'A photon produced in the Sun\'s core takes ~100,000 years to reach the surface, while neutrinos from the same fusion reactions arrive at Earth in ~8 minutes. What accounts for this enormous difference?',
      options: [
        'Photons interact with the dense solar plasma through constant absorption and re-emission, random-walking outward very slowly; neutrinos interact so weakly with matter that they travel through the entire Sun essentially unimpeded at the speed of light',
        'Photons are slowed to ~3 km/s in the radiative zone due to the high refractive index of hot plasma, while neutrinos travel at the speed of light throughout',
        'Photons must travel through the convective zone, which has higher opacity than the radiative zone, adding the extra travel time',
        'Neutrinos are produced at the top of the convective zone rather than in the core, giving them a shorter path to travel',
      ],
      correctIndex: 0,
      explain: 'In the radiative zone, photon mean free path is only ~1 cm. Each photon is absorbed and re-emitted in a random direction ~10²⁶ times on its journey outward — a diffusion process that takes ~100,000 years for the random walk to traverse ~500,000 km. Neutrinos, governed by the weak force, interact so rarely that the entire Sun is essentially transparent to them; they escape at light speed in ~2 seconds.',
    },
    {
      question: 'The Solar Neutrino Problem — that only one-third of predicted solar neutrinos were detected — was resolved by the SNO experiment. What was the key discovery?',
      options: [
        'Neutrinos change flavour (oscillate) in transit: electron neutrinos produced by the pp chain transform into muon and tau neutrinos, which earlier detectors were blind to; total neutrino flux matched solar models once all flavours were counted',
        'The Sun produces only one-third as many neutrinos as standard solar models predict because the core temperature is lower than assumed, reducing fusion rates',
        'Neutrinos have a small but non-zero mass that causes them to lose energy in transit, reducing their detectable flux at Earth by two-thirds',
        'Solar neutrinos are partially absorbed by the Earth\'s core during their passage to underground detectors, creating the apparent deficit',
      ],
      correctIndex: 0,
      explain: 'SNO in Canada used heavy water (D₂O) which is sensitive to all neutrino flavours via neutral-current interactions, unlike earlier detectors that were sensitive only to electron neutrinos. SNO found that the total neutrino flux across all flavours matched solar model predictions perfectly. The deficit was entirely due to oscillation — proving both that the solar models were correct and that neutrinos have non-zero mass.',
    },
    {
      question: 'The 1989 Quebec blackout was caused by a geomagnetic storm following a coronal mass ejection. What physical mechanism links a CME arriving at Earth to large-scale power grid failure?',
      options: [
        'A CME compresses and distorts Earth\'s magnetosphere; the rapidly changing magnetic field induces large electric currents (geomagnetically induced currents, GICs) in long conducting systems like power lines and transformers, overloading and damaging them',
        'CME plasma directly strikes power transmission lines in the upper atmosphere, depositing charge that propagates down to ground-level infrastructure',
        'The X-ray burst from the associated solar flare ionises the upper atmosphere, increasing atmospheric conductivity and allowing charge to leak into the grid',
        'High-energy protons from solar energetic particles penetrate transformer insulation at ground level, causing short circuits',
      ],
      correctIndex: 0,
      explain: 'The key process is electromagnetic induction on a continental scale. A CME causes rapid variations in Earth\'s magnetic field (dB/dt), and by Faraday\'s law, any change in magnetic flux through a conducting loop induces a current. Long-distance power transmission lines act as giant loops; induced quasi-DC currents saturate transformer cores, overheat them, and can cause permanent failure. The Quebec incident knocked out the Hydro-Québec grid in 90 seconds, affecting 6 million people.',
    },
  ],
}

export default lesson
