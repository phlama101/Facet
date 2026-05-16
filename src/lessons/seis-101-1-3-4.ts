import { Activity, Globe, Zap, Radio, Clock } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const earthquakeEarlyWarning: Lesson = {
  id: 'seis-101-1-3-4',
  title: 'Earthquake Early Warning, Forecasting, and Resilience',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 130,
  description: 'From P-wave detection to public alert in seconds: the science of buying time before shaking arrives',
  sources: [
    { org: 'USGS', title: 'USGS — ShakeAlert Earthquake Early Warning', url: 'https://www.shakealert.org/' },
    { org: 'NIED', title: 'NIED Japan — Urgent Earthquake Detection and Alarm System (UrEDAS)', url: 'https://www.bosai.go.jp/e/' },
    { org: 'USGS', title: 'USGS — Probabilistic Seismic Hazard Analysis', url: 'https://earthquake.usgs.gov/hazards/hazmaps/' },
    { org: 'FEMA', title: 'FEMA — Earthquake Hazard Mitigation', url: 'https://www.fema.gov/emergency-managers/risk-management/earthquake' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'From P-wave detection to public alert in seconds: the science of buying time before shaking arrives',
      body: `Earthquake Early Warning (EEW) systems exploit a fundamental physics advantage: electronic signals travel at the speed of light (~300,000 km/s), while seismic S-waves — which cause most structural damage — travel at only 3–5 km/s. By detecting the faster, less damaging P-waves and transmitting an alert electronically, EEW systems can provide seconds to tens of seconds of warning before strong shaking arrives at a distant location. This warning time, though brief, enables automated protective actions (stopping trains, opening fire station doors, slowing surgical robots) and human responses (drop, cover, hold on; evacuation from elevators).

Japan\'s Earthquake Early Warning system (launched publicly in 2007) is the world\'s most comprehensive, serving a population of 126 million. The Japan Meteorological Agency\'s network of ~4,000 seismometers detects P-waves within seconds of an earthquake, estimates magnitude and location, and broadcasts warnings via TV, radio, mobile phones, and industry systems. During the 2011 Tōhoku earthquake, EEW alerts reached most of Japan 8–120 seconds before strong shaking arrived, though areas closest to the epicentre received little or no warning. USGS ShakeAlert covers the US West Coast (California, Oregon, Washington) and delivers alerts to consumers via the MyShake and WEA (Wireless Emergency Alert) systems.

Earthquake forecasting — predicting the time, location, and magnitude of future earthquakes — remains one of geophysics\' greatest unsolved challenges. Deterministic short-term prediction (hours to days before a specific earthquake) has not been achieved reliably. Operational earthquake forecasting (OEF) instead provides probabilistic estimates: given current seismicity and fault parameters, what is the probability of M ≥ X in region Y within the next week? OEF is used actively in aftershock sequence management (the USGS provides real-time aftershock forecasts after M 5+ US earthquakes) and in communicating elevated hazard to emergency managers.

Long-term earthquake resilience integrates hazard maps (Probabilistic Seismic Hazard Analysis, PSHA), building codes, retrofit programmes, community preparedness, and land-use planning. PSHA maps the probability of exceeding a given ground-motion level at each location over a specified time period (e.g., 10% probability of exceedance in 50 years). Modern building codes in Japan, California, New Zealand, and Chile incorporate PSHA-derived design spectra. In Japan, mandatory retrofitting programmes and public drills (held nationwide on September 1 — the anniversary of the 1923 Great Kantō earthquake) contribute to one of the world\'s lowest per-capita earthquake death rates despite very high seismic exposure.`,
      keyTerms: [
        {
          term: 'P-wave Lead Time',
          def: 'Time difference between P-wave detection at a sensor network and S-wave arrival at a target location; the basis for EEW.',
        },
        {
          term: 'EEW (Earthquake Early Warning)',
          def: 'System that detects early P-waves and broadcasts alerts before damaging S-waves and surface waves arrive.',
        },
        {
          term: 'PSHA',
          def: 'Probabilistic Seismic Hazard Analysis: probability of exceeding a ground-motion level at a site over a given time period.',
        },
        {
          term: 'Operational Earthquake Forecasting',
          def: 'Real-time probabilistic forecasts of future earthquake occurrence used in aftershock management and public advisories.',
        },
        {
          term: 'ShakeAlert',
          def: 'USGS earthquake early warning system for the US West Coast, delivering alerts via WEA and apps.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Layers of Earthquake Risk Reduction',
      body: 'No single measure eliminates earthquake risk. The most resilient communities layer multiple approaches: physics-based EEW for immediate response, PSHA-informed building codes for long-term structural safety, operational forecasting for post-event management, and public education for individual preparedness.',
      cards: [
        {
          name: 'Early Warning (EEW)',
          icon: Radio,
          color: BRAND.coral,
          desc: 'P-wave detection → electronic alert → seconds of warning before S-waves. Enables automated safety actions.',
          examples: 'Japan EEW (2007): ~100 s warning in Tokyo for 2011 Tōhoku. Shinkansen auto-braked, preventing derailments.',
        },
        {
          name: 'PSHA Maps',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Probability of exceeding ground motion in 50 years (10% = 475-yr return period). Drives building code design spectra.',
          examples: 'USGS NSHM: 2023 update shows Pacific Northwest and New Madrid highest hazard east of Rockies.',
        },
        {
          name: 'Building Codes',
          icon: Zap,
          color: BRAND.gold,
          desc: 'PSHA-derived design spectra specify minimum structural strength. Updated after damaging earthquakes expose failures.',
          examples: 'Japan 1981 New Seismic Design Code (post-1978 Miyagi): buildings meeting code survived 2011 Tōhoku far better than pre-code.',
        },
        {
          name: 'Operational Forecasting',
          icon: Activity,
          color: BRAND.amethyst,
          desc: `Real-time aftershock probability updates using Omori\'s Law and ETAS models. Guides emergency decisions.`,
          examples: 'USGS provides hourly aftershock forecasts after M 5+ US events. Used in NZ Canterbury sequence 2010-2011.',
        },
        {
          name: 'Community Resilience',
          icon: Clock,
          color: BRAND.accent,
          desc: 'Regular drills, retrofit programmes, land-use zoning, and community preparedness reduce casualties.',
          examples: 'Japan Sept 1 Bousai Day drills; California Resilience Challenge. Both reduce response time and casualties.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'ShakeAlert: P-Wave to Public Alert',
      body: 'How the USGS ShakeAlert system detects an earthquake and delivers warnings before damaging shaking arrives.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'How the USGS ShakeAlert system detects an earthquake and delivers warnings before damaging shaking arrives.',
        nodes: [
          {
            id: 'earthquake-source',
            label: 'Earthquake Originates',
            description: 'Fault ruptures at hypocenter. P-waves radiate outward at 5-7 km/s. Damaging S-waves and surface waves follow 1.7× slower.',
            color: BRAND.coral,
          },
          {
            id: 'sensor-detect',
            label: 'P-Wave Detected',
            description: 'Network of seismometers (ShakeAlert: ~1,675 sensors in CA/OR/WA) detects P-wave arrival. First detection within 1-3 seconds of origin.',
            color: BRAND.gold,
          },
          {
            id: 'magnitude-estimate',
            label: 'Magnitude & Location Estimate',
            description: 'Real-time algorithms estimate magnitude (Pd method, EPIC) and hypocenter. Initial estimate within 3-5 seconds. Updated continuously.',
            color: BRAND.jade,
          },
          {
            id: 'alert-broadcast',
            label: 'Alert Broadcast',
            description: 'Electronic alert sent at speed of light to subscribers: WEA cell broadcast, MyShake app, ShakeAlert API for industry users.',
            color: BRAND.amethyst,
          },
          {
            id: 'automated-actions',
            label: 'Automated Safety Actions',
            description: 'Pre-programmed actions: slow trains, open fire station doors, stop elevators at next floor, pause surgery robots, activate gas shutoffs.',
            color: BRAND.ruby,
          },
          {
            id: 'public-response',
            label: 'Human Response',
            description: 'Public receives alert 5-120 seconds before shaking. Drop, cover, hold on. Evacuate elevators. Children hide under desks. Workers step away from machinery.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'earthquake-source', to: 'sensor-detect', label: 'P-wave at 5-7 km/s' },
          { from: 'sensor-detect', to: 'magnitude-estimate', label: 'Seismic processing (seconds)' },
          { from: 'magnitude-estimate', to: 'alert-broadcast', label: 'Alert triggered' },
          { from: 'alert-broadcast', to: 'automated-actions', label: 'Industry feeds' },
          { from: 'alert-broadcast', to: 'public-response', label: 'WEA / app alerts' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'How does earthquake early warning exploit physics to provide warning time?',
          a: [
            'It predicts earthquakes hours in advance using AI analysis of GPS strain data',
            'Electronic signals travel at the speed of light, far faster than damaging S-waves (3-5 km/s), allowing distant alerts before strong shaking arrives',
            'It detects the initial P-wave velocity increase that always precedes large earthquakes by 30+ seconds',
            'It uses satellite imagery to detect fault creep accelerations that precede major ruptures',
          ],
          correct: 1,
          explain: 'EEW exploits the difference between two speeds: the speed of light (~300,000 km/s) for electronic communications, and the speed of S-waves (3–5 km/s) that cause most structural damage. By detecting P-waves (which arrive first but cause less shaking) at nearby sensors and transmitting an alert electronically, the system can outrun the damaging wavefront. For a sensor 20 km (12 mi) from the epicentre and a city 100 km (62 mi) from the epicentre, the alert can arrive ~15 seconds before S-waves reach the city. This time decreases to zero for locations near the epicentre — the "blind zone" where EEW provides no useful warning.',
        },
        {
          q: 'What is the primary limitation of earthquake early warning for communities close to the earthquake epicentre?',
          a: [
            'EEW systems cannot detect earthquakes smaller than M 6.0',
            'Communities within the "blind zone" receive little or no warning because S-waves arrive almost simultaneously with the P-wave detection',
            'EEW alerts are blocked by tall buildings in urban areas',
            'Modern EEW systems only work in Japan and cannot be deployed elsewhere',
          ],
          correct: 1,
          explain: 'The blind zone is the region so close to the earthquake source that by the time P-waves are detected and an alert is issued, the damaging S-waves have already arrived or have insufficient travel time for the alert to be useful. For a M 7 earthquake with a 5-second processing time, the blind zone radius is approximately 25–35 km (22 mi). Communities within this zone receive no warning or only a few seconds. This is why the 2011 Tōhoku coastal communities nearest to the epicentre received essentially no EEW benefit — they were within the blind zone — while Tokyo (~370 km (230 mi) away) received ~80 seconds of warning.',
        },
        {
          q: 'What does "10% probability of exceedance in 50 years" mean in a PSHA hazard map?',
          a: [
            'There is a 10% chance an earthquake will occur somewhere in the mapped region in the next 50 years',
            'There is a 90% chance that the mapped ground-motion level will not be exceeded at a site during the next 50 years',
            'Ground motion will definitely exceed the mapped level 10 times over 50 years',
            'The earthquake return period is 10 years and the average magnitude is 50% of the maximum possible',
          ],
          correct: 1,
          explain: 'PSHA hazard curves express the probability that a given ground-motion level will be exceeded at a specific location over a specified exposure period. "10% probability of exceedance in 50 years" means there is a 90% probability of NOT exceeding the mapped ground-motion level during 50 years of building occupancy. This corresponds to a mean return period of about 475 years. Building codes use this level (or the 2% in 50 years level = ~2,475-year return period for critical facilities) to specify minimum design forces. The framing is probabilistic because earthquakes are unpredictable in timing — the 475-year return period does not mean earthquakes occur every 475 years, but that on average that ground-motion level is exceeded once per 475 years.',
        },
        {
          q: 'What is operational earthquake forecasting (OEF) and how is it used?',
          a: [
            'Long-range prediction of specific earthquake date, time, and location for public emergency planning',
            'Real-time probabilistic forecasts of future earthquake occurrence used in aftershock sequence management and public advisories',
            'Deterministic modelling of stress accumulation on specific fault segments over 100-year periods',
            'AI-based prediction of earthquake sequences using historical seismicity pattern matching',
          ],
          correct: 1,
          explain: `OEF provides probabilistic statements about near-future seismicity (e.g., "40% probability of M ≥ 5 in the next week in the Canterbury region") based on current seismicity rates, Omori\'s Law decay parameters, and fault interaction models. It is explicitly NOT a deterministic prediction of a specific event. OEF is used by emergency managers to make decisions about building re-entry timelines after damaging earthquakes, school closure policies, and public communication. USGS provides automated OEF reports for any M 5+ US earthquake, and these are actively consulted by state emergency management agencies.`,
        },
        {
          q: 'Japan has very high seismic exposure but relatively low per-capita earthquake fatalities. Which combination of factors best explains this?',
          a: [
            'Japan has fewer active faults than comparable nations, reducing overall seismic risk',
            'Japan\'s building codes, EEW system, retrofit programmes, regular public drills, and land-use planning combine to reduce vulnerability despite high hazard',
            'Japanese buildings are constructed primarily from wood, which is inherently more earthquake-resistant than concrete',
            'Japan\'s mountainous terrain shields most population centres from strong seismic shaking',
          ],
          correct: 1,
          explain: `Japan\'s low fatality rate relative to seismic hazard results from decades of layered investment in earthquake resilience: (1) strict building codes updated after each damaging earthquake (1981 New Seismic Design Code, 2000 revisions for soft-soil response); (2) mandatory retrofit programmes for pre-1981 buildings; (3) the world\'s most extensive EEW system serving 126 million people; (4) Bousai Day (September 1) nationwide drills involving millions of participants; (5) land-use regulations restricting development in liquefaction-prone and tsunami-inundation zones. The 2011 Tōhoku Mw 9.0 — the fourth-largest instrumentally recorded earthquake — killed ~18,500 people (mostly from tsunami). A comparable event striking an unprepared nation would likely have killed hundreds of thousands.`,
        },
      ],
    },
  ],
}

export default earthquakeEarlyWarning
