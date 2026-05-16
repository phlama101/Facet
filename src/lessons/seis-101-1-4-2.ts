import { Activity, Radio, Wifi, AlertTriangle, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const earthquakeEarlyWarningSystems: Lesson = {
  id: 'seis-101-1-4-2',
  title: 'Earthquake Early Warning Systems',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'When a major earthquake strikes, the difference between life and death can be measured in seconds. Earthquake Early Warning systems exploit the gap between the speed of light and the speed of seismic waves to buy critical moments before shaking arrives — but the physics imposes hard limits that no amount of technology can fully overcome.',
  sources: [
    { org: 'USGS', title: 'USGS — ShakeAlert Earthquake Early Warning System', url: 'https://www.shakealert.org/' },
    { org: 'IRIS', title: 'IRIS/EarthScope — Seismology in Society: Early Warning', url: 'https://www.iris.edu/hq/programs/education_and_outreach' },
    { org: 'NIST', title: 'NIST — Performance Metrics for Earthquake Early Warning', url: 'https://www.nist.gov/topics/earthquake-engineering' },
    { org: 'INGV', title: 'INGV — PRESTo and PRobabilistic and Evolutionary early warning System', url: 'https://www.ingv.it/it/stampa-e-urp/produzione-scientifica' },
    { org: 'Caltech SCEDC', title: 'Caltech SCEDC — Southern California Seismic Network Data', url: 'https://scedc.caltech.edu/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Racing the Wavefront: The Physics of Buying Time',
      body: `Earthquake Early Warning (EEW) exploits a fundamental asymmetry in nature: electronic signals travel at the speed of light (~300,000 km/s), while the **S-waves** that cause most structural damage travel at only 3–5 km/s. By detecting the first-arriving, less-destructive **P-waves** at seismometers near the earthquake source and transmitting an alert electronically before the S-wave front reaches distant communities, an EEW system can provide seconds to tens of seconds of warning. In those seconds, automated systems can stop bullet trains, open fire-station doors, pause surgical robots, and move elevator cars to the nearest floor — and individuals can drop, cover, and hold on.

The **alert latency** — the time from earthquake origin to alert delivery at a user's device — is the sum of P-wave travel time to the nearest sensor (typically 1–3 s), processing time to estimate magnitude and location (2–5 s), and telecommunications latency (<0.1 s on modern networks). Total system latency for ShakeAlert, the USGS EEW system covering California, Oregon, and Washington, averages 4–8 seconds from origin time. For a site 80 km (50 mi) from the epicentre, S-waves need ~16 seconds to arrive, leaving a usable **lead time** of roughly 8–12 seconds. Lead time increases with distance and decreases toward zero at the epicentre, defining the unavoidable **epicentral blind zone** — the region so close to the fault that damaging shaking arrives before any alert can be issued.

Japan's system, operated by the Japan Meteorological Agency (JMA) and built on research by NIED (National Research Institute for Earth Science and Disaster Resilience), is the world's most comprehensive EEW network. With ~4,000 seismometers — one of the densest national networks on Earth — it has delivered public alerts since 2007. During the 2011 Tōhoku Mw 9.1, alerts reached Tokyo (~370 km (230 mi) away) approximately 80 seconds before strong shaking, triggering automatic braking of Shinkansen bullet trains, which prevented derailments despite peak accelerations exceeding design limits along parts of the route. Coastal communities within 100 km (62 mi) of the rupture zone received 0–20 seconds of warning, insufficient for tsunami evacuation but enough for some automated protective actions.

ShakeAlert serves approximately 52 million people on the US West Coast through 1,675 seismic stations. Public alerting is delivered via the Wireless Emergency Alert (WEA) system — the same channel used for Amber Alerts — and through the MyShake smartphone app. ShakeAlert began limited public rollout in California in 2019 and statewide in Oregon and Washington by 2021. The system's performance during the July 2019 Ridgecrest sequence (M 6.4 and M 7.1) demonstrated both its capabilities — Los Angeles received ~45 seconds of warning for the M 7.1 — and its limitations, including magnitude underestimation in the first seconds of a large rupture.`,
      keyTerms: [
        {
          term: 'P-wave',
          def: 'Primary (compressional) seismic wave; the fastest-traveling wave type (5–7 km/s in crust) and the one detected first by EEW sensors, though it causes less shaking than the following S-waves.',
        },
        {
          term: 'Alert Latency',
          def: 'The total elapsed time from earthquake origin to alert delivery at a user device, typically 4–10 seconds for modern systems; it sets the minimum radius of the epicentral blind zone.',
        },
        {
          term: 'Lead Time',
          def: 'The usable warning interval between alert receipt and arrival of damaging shaking at a specific location; equals S-wave travel time minus alert latency, and increases with distance from the epicentre.',
        },
        {
          term: 'Epicentral Blind Zone',
          def: 'The region surrounding the earthquake source within which S-waves arrive before or simultaneously with EEW alerts, providing zero useful warning; its radius approximates alert latency multiplied by S-wave velocity (~20–40 km (25 mi) for modern systems).',
        },
        {
          term: 'ShakeAlert',
          def: 'USGS earthquake early warning system for California, Oregon, and Washington, delivering real-time alerts via the WEA cell-broadcast system and the MyShake app to 52 million people.',
        },
        {
          term: 'Magnitude Saturation',
          def: 'The tendency of EEW magnitude algorithms to underestimate the final magnitude of very large (M >7) earthquakes in the first few seconds of P-wave analysis, before the full rupture has developed; a key limitation for the largest, most dangerous events.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'How EEW Works: Detection to Alert',
      body: 'A modern EEW system is a real-time signal-processing pipeline in which every added second of processing reduces the epicentral blind zone but adds to alert latency. System designers continuously balance these competing demands.',
      cards: [
        {
          name: 'P-wave Detection and Characterisation',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Seismometers detect the P-wave onset. Algorithms extract key parameters (predominant period τ_c, initial displacement amplitude P_d) within the first 3–4 seconds of P-wave arrival to estimate magnitude without waiting for the full wave train.',
          examples: 'ShakeAlert uses EPIC (Earthquake Point-source Integrated Code) and FinDer (Finite-fault rupture Detector) algorithms. EPIC provides rapid point-source estimates; FinDer resolves rupture length for M >6 events, reducing blind zones.',
        },
        {
          name: 'Alert Threshold and Decision Logic',
          icon: AlertTriangle,
          color: BRAND.gold,
          desc: 'The system only sends public alerts if estimated shaking at a user location exceeds a threshold (e.g., MMI IV, light shaking). This filtering reduces false alerts from small earthquakes while ensuring warnings for potentially damaging events.',
          examples: `ShakeAlert WEA alert threshold: predicted MMI ≥ 4 at the user\'s location. Japan JMA: magnitude estimate ≥ 5.0 OR predicted intensity ≥ 4 at any station. Tuning these thresholds trades false-alarm rate vs. missed-alert rate.`,
        },
        {
          name: 'Delivery Infrastructure',
          icon: Wifi,
          color: BRAND.jade,
          desc: 'Alerts propagate through redundant paths: WEA cell broadcast (milliseconds, reaches all phones without app), MyShake and third-party apps (customisable thresholds), and industry API feeds for automated safety systems.',
          examples: `Japan EEW reaches 126 million people via TV interrupts, mobile phone broadcasts, and loudspeakers in factories and schools. Mexico\'s CIRES system uses a dedicated radio broadcast network with public loudspeakers — effective for a low-smartphone-penetration population.`,
        },
        {
          name: 'Automated Safety Actions',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'Industrial EEW applications trigger pre-programmed actions without human intervention: slowing or stopping trains, opening fire-station doors, halting factory assembly lines, shutting gas valves, and pausing computer-controlled surgical systems.',
          examples: 'Japan Shinkansen: 2011 Tōhoku triggered automatic braking on 27 trains; none derailed. San Francisco Bay Area BART: automated slow-to-stop protocol for ≥MMI 5 alerts. Portland water bureau: automated valve closure on ShakeAlert trigger.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Fundamental Limitations of EEW',
      body: 'EEW systems face three irreducible physical constraints. Understanding these limitations is as important as understanding the capabilities — both for system designers and for communities deciding how to respond to alerts.',
      cards: [
        {
          name: 'The Epicentral Blind Zone',
          icon: Radio,
          color: BRAND.coral,
          desc: 'Communities closest to the fault — where shaking is typically most severe — receive little or no lead time. The blind zone radius (≈ alert latency × S-wave velocity) is ~20–40 km (25 mi) for modern systems with 5–8 s latency.',
          examples: '2011 Tōhoku: coastal communities within 80 km (50 mi) of the subduction zone received 0–15 s of warning. 1994 Northridge M 6.7, epicentre beneath suburban LA: a system with 6 s latency would have given downtown LA only ~4 s warning.',
        },
        {
          name: 'Magnitude Underestimation for Large Events',
          icon: AlertTriangle,
          color: BRAND.gold,
          desc: 'For M >7 earthquakes, the first 3–4 s of P-wave signal represents only a small fraction of the total rupture. EEW algorithms that characterise magnitude from early P-wave amplitudes systematically underestimate final magnitude, potentially triggering weaker-than-warranted alerts before updating.',
          examples: '2011 Tōhoku: JMA initial magnitude estimate was M 7.2 (updated to M 9.0 over 3 minutes). 2019 Ridgecrest M 7.1: ShakeAlert initial magnitude ~6.5, updated within 15 s. Underestimation shrinks predicted shaking and can reduce WEA coverage area in first alert.',
        },
        {
          name: 'False Alerts and Public Trust',
          icon: AlertTriangle,
          color: BRAND.ruby,
          desc: 'Sensor malfunctions, lightning strikes, and instrument noise can trigger false alerts. Each false alarm erodes public trust and compliance — the "cry wolf" effect. System designers accept some missed events to keep false-alert rates below ~1 per year per region.',
          examples: `Japan JMA issued a false nationwide EEW alert in 2016 due to simultaneous noise on two sensors. South Korea\'s EEW falsely triggered alerts during 2016 Gyeongju M 5.8 due to processing errors. Both events required immediate public communication and system audits.`,
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Fault Rupture to Public Alert: The ShakeAlert Pipeline',
      body: 'How a major earthquake on the Hayward Fault (San Francisco Bay Area) would propagate through the ShakeAlert system to reach 7 million Bay Area residents before S-waves arrive.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The real-time signal processing chain from fault rupture to public EEW alert delivery, including the critical timing constraints at each stage',
        nodes: [
          {
            id: 'rupture',
            label: 'Fault Rupture Initiates',
            description: 'Hayward Fault rupture begins at depth. P-waves radiate outward at 6 km/s. Damaging S-waves follow at 3.5 km/s. The 2-km nearest seismic station will record P-wave arrival in ~0.3 seconds.',
            color: BRAND.coral,
          },
          {
            id: 'pwave-detect',
            label: 'P-Wave Detection',
            description: 'Multiple BART seismometers and ShakeAlert network stations trigger within 1–2 seconds. Station data streams in real time to the ShakeAlert processing centre in Seattle (0.05 s latency).',
            color: BRAND.gold,
          },
          {
            id: 'magnitude-location',
            label: 'Magnitude & Location Estimation',
            description: 'EPIC and FinDer algorithms estimate hypocenter location (±5 km (3.1 mi) accuracy in first estimate) and magnitude from τ_c and P_d parameters within 3–4 seconds. FinDer begins resolving rupture length as more stations report.',
            color: BRAND.jade,
          },
          {
            id: 'shaking-prediction',
            label: 'Shaking Prediction per ZIP Code',
            description: 'ShakeAlert estimates predicted MMI and PGA at every ZIP code using the initial magnitude, estimated location, GMPEs, and VS30 site maps. Locations exceeding the alert threshold (MMI ≥ 4) are flagged.',
            color: BRAND.amethyst,
          },
          {
            id: 'alert-delivery',
            label: 'Alert Delivery (Speed of Light)',
            description: 'WEA cell broadcast reaches all opted-in phones simultaneously. MyShake app alerts follow. Industry API feeds trigger automated responses. Total system latency from origin: ~6–8 seconds for a well-recorded Hayward event.',
            color: BRAND.ruby,
          },
          {
            id: 'lead-time',
            label: 'Lead Time at User Location',
            description: 'San Francisco (10 km (6.2 mi) from Hayward Fault): S-wave arrives ~3 s after origin. With 6–8 s system latency, lead time is negative — BLIND ZONE. Oakland Hills (8 km (5.0 mi)): similar. Berkeley (4 km (2.5 mi) from fault): S-wave arrives in ~1 s — no warning possible at any latency.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'rupture', to: 'pwave-detect', label: 'P-wave at 6 km/s (~0.3 s to nearest sensor)' },
          { from: 'pwave-detect', to: 'magnitude-location', label: 'Real-time data stream (2–3 s processing)' },
          { from: 'magnitude-location', to: 'shaking-prediction', label: 'GMPE applied per site (~0.5 s)' },
          { from: 'shaking-prediction', to: 'alert-delivery', label: 'Alert triggered if MMI ≥ 4' },
          { from: 'alert-delivery', to: 'lead-time', label: 'Alert at speed of light vs S-wave at 3.5 km/s' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A city is 60 km (37 mi) from an earthquake epicentre. ShakeAlert has a total system latency of 7 seconds. If S-waves travel at 3.5 km/s, what is the approximate lead time for residents of that city?',
          a: [
            'About 7 seconds — the system latency determines all lead time',
            'About 10 seconds — S-waves take 17 seconds to travel 60 km (37 mi), minus the 7-second system latency',
            'About 17 seconds — lead time equals S-wave travel time regardless of latency',
            'Zero seconds — the city is within the epicentral blind zone',
          ],
          correct: 1,
          explain: 'B is correct: S-wave travel time = 60 km (37 mi) ÷ 3.5 km/s ≈ 17 s. Lead time = S-wave travel time − system latency = 17 − 7 = 10 s. A is wrong: latency reduces lead time but does not define it. C is wrong: S-wave travel time is the maximum possible lead time, reduced by system latency. D is wrong: the blind zone radius at 7 s latency is approximately 7 s × 3.5 km/s = 24.5 km (15 mi); a city at 60 km (37 mi) is well outside the blind zone.',
        },
        {
          q: `During the 2011 Tōhoku Mw 9.1 earthquake, Japan\'s EEW system initially estimated the magnitude as M 7.2, not M 9.1. What physical limitation caused this underestimation, and why does it matter for warning quality?`,
          a: [
            'The seismic network was too sparse to record the full wavefield in the first seconds',
            'EEW algorithms characterise magnitude from the first 3–4 seconds of P-wave data, capturing only the early part of a rupture that grew over ~3 minutes; this produces systematically low estimates for M >7 events, reducing predicted shaking and geographic coverage of the alert',
            'The subduction zone geometry means P-waves arrive at sensors with a delay that compressed apparent magnitude',
            'Japanese sensors were saturated (clipped) by the violent shaking and could not record accurate amplitudes',
          ],
          correct: 1,
          explain: `B is correct: large earthquake ruptures take time to develop. The M 9.1 Tōhoku rupture propagated over ~3 minutes and ~500 km (311 mi) of fault. In the first 3–4 s that EEW algorithms analyse, only the initial small patch has ruptured, producing signals consistent with M ~7. The underestimate matters because the WEA alert coverage area and automated responses (e.g., Shinkansen braking distance and speed reduction level) depend on the magnitude estimate. An M 7.2 estimate triggers a smaller-magnitude alert than the actual threat warrants. A is wrong: Japan\'s ~4,000-station network has excellent coverage. C is wrong: subduction geometry affects waveforms but not the first-principles timing argument. D has some truth (clipping of near-field sensors) but is not the primary reason for the global magnitude underestimate.`,
        },
        {
          q: 'What distinguishes the "epicentral blind zone" from a technical limitation that could eventually be engineered away?',
          a: [
            'The blind zone is a software limitation caused by insufficient processing power, which will shrink as computers get faster',
            'The blind zone is a fundamental physical constraint: alert latency cannot be reduced below the time for P-waves to reach at least one sensor and be processed, while the S-wave arrival time at near-source locations is fixed by Earth\'s structure',
            'The blind zone only affects underground facilities; surface buildings receive alerts regardless of proximity to the epicentre',
            'The blind zone can be eliminated by placing sensors directly on known fault traces so P-waves arrive at zero delay',
          ],
          correct: 1,
          explain: `B is correct: the blind zone represents a physical irreducibility. Even with instantaneous processing (zero latency), you cannot issue an alert until at least one sensor has detected a P-wave — and that takes time proportional to the sensor\'s distance from the hypocenter. In practice, the minimum detection latency is 1–3 seconds. Multiply by the S-wave velocity to get a minimum blind zone radius of ~4–10 km (6.2 mi) even in the best possible system. For sites within that radius, S-waves cannot be outrun by any alert system. A is wrong: faster computers reduce processing latency by 1–2 s at most, not to zero. C is wrong: location above or below ground doesn\'t change wave travel time. D is partially correct (sensors on faults reduce detection latency) but still cannot eliminate the finite travel time to even the nearest sensor.`,
        },
        {
          q: 'Why do EEW system designers set a minimum shaking threshold (e.g., MMI IV) before issuing a public WEA alert, rather than alerting for all detected earthquakes?',
          a: [
            'Lower thresholds would require more sensors, increasing system cost',
            'Alerting for all earthquakes would cause frequent false-alarm-like interruptions for unfelt events, eroding public trust and compliance when a genuine damaging earthquake occurs — the "cry wolf" effect',
            'WEA technology cannot distinguish between MMI levels and can only send binary alerts',
            'Legal liability prevents alerting below MMI IV since below this level no damage occurs',
          ],
          correct: 1,
          explain: `B is correct: public EEW effectiveness depends critically on appropriate human and automated response. If alerts are issued for every M 2–3 microearthquake, people will habituate and ignore or disable alerts, defeating the system\'s purpose. The MMI IV threshold (~light shaking, felt by most) represents a balance: low enough to warn before structural damage, high enough to suppress alerts for the dozens of unfelt events that occur weekly in California. A is wrong: sensor density is driven by detection capability, not alert thresholding. C is wrong: WEA can carry variable-content messages with intensity information. D is partially true (MMI IV is roughly the onset of minor damage potential) but the primary driver is behavioural science and system credibility, not legal constraints.`,
        },
        {
          q: 'Mexico City and Tokyo both receive EEW alerts despite being far from their primary seismic source zones. Which statement best explains why distance is advantageous for EEW in these cities?',
          a: [
            'Distant earthquakes are always smaller, so ground motion is lower and easier to survive without warning',
            'Greater source-to-city distance means S-waves take longer to arrive, increasing lead time above system latency and making meaningful warning physically possible',
            'Long-distance earthquakes arrive primarily as P-waves rather than S-waves, so EEW\'s P-wave detection is more effective',
            'Both cities use satellite-based detection that bypasses the epicentral blind zone constraint',
          ],
          correct: 1,
          explain: 'B is correct: lead time = S-wave travel time − system latency. Tokyo is ~370 km (230 mi) from the Tōhoku subduction zone: S-wave travel time ≈ 105 s; with ~5 s system latency, lead time is ~100 s. Mexico City is ~350 km (217 mi) from the Guerrero subduction zone: similar calculation yields ~80–100 s warning. This large lead time enables meaningful responses including Shinkansen braking and building evacuation. A is wrong: the 2011 Tōhoku Mw 9.1 at 370 km (230 mi) still produced dangerous shaking (MMI V–VI) in Tokyo. C is wrong: EEW alerts users before S-waves, not because P-waves are the main hazard — it uses P-waves only for early detection. D is wrong: both cities use ground-based seismometer networks.',
        },
      ],
    },
  ],
}

export default earthquakeEarlyWarningSystems
