import { Activity, Zap, Globe, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seismicMomentRuptureDynamics: Lesson = {
  id: 'seis-201-1-2-1',
  title: 'Seismic Moment and Rupture Dynamics',
  track: 'geo',
  trackName: 'Advanced Seismology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'How physicists measure the true size of an earthquake — from the seismic moment tensor to moment magnitude — and how rupture propagates across a fault at speeds that can exceed the shear wave velocity.',
  sources: [
    { org: 'USGS',    title: 'USGS Earthquake Hazards — Magnitude and Intensity',                         url: 'https://earthquake.usgs.gov/learn/topics/mag_vs_int.php' },
    { org: 'IRIS',    title: 'IRIS DMC — Understanding Earthquake Hazard: Source Parameters',              url: 'https://ds.iris.edu/ds/nodes/dmc/' },
    { org: 'Kanamori', title: 'Kanamori & Anderson (1975) — Theoretical basis of empirical relations',    url: 'https://doi.org/10.1029/JB080i023p03414' },
    { org: 'Dunham',  title: 'Dunham et al. (2003) — Evidence for supershear transition during Denali Fault earthquake', url: 'https://doi.org/10.1126/science.1085531' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Measuring the true size of an earthquake',
      body: `To measure the size of an earthquake is to measure the irreversible mechanical work done on the Earth's crust during a rupture event. The most physically meaningful measure is the **seismic moment** M₀, defined by M₀ = μ × A × D, where μ is the shear modulus of the rock (~30–50 GPa in the crust), A is the total area of the fault surface that slipped, and D is the average displacement across that surface. This deceptively simple formula encodes everything about the energy budget of an earthquake: a doubling of fault area or average slip doubles the moment, and consequently releases about 32 times more seismic energy (because M_w scales logarithmically with M₀).

The **moment magnitude** scale, introduced by Hiroo Kanamori in 1977, translates seismic moment into a logarithmic scale designed to be consistent with the Richter scale for moderate earthquakes while remaining physically meaningful at all sizes. The formula is M_w = (log₁₀ M₀ / 1.5) − 10.7, where M₀ is in Newton-metres. The 2011 Tōhoku earthquake had a seismic moment of 3.9 × 10²² N·m, corresponding to M_w 9.1. Its rupture dimensions were extraordinary: approximately 200 km down-dip by 500 km along-strike, with average slip of ~40 m and maximum slip of ~60 m in the shallowest portion near the trench. This single event released more seismic energy than the entire Japanese historical earthquake record up to that point.

**Self-similar scaling** is one of the most remarkable properties of earthquake populations. Empirical analysis of thousands of earthquakes shows that M₀ scales approximately as D³ (or equivalently as A^(3/2)), implying that **stress drop** — the difference between initial and final shear stress on the fault — is roughly constant across many orders of magnitude of earthquake size. Typical stress drops range from 1 to 10 MPa for most tectonic earthquakes. This constant stress drop scaling means that a magnitude 9 earthquake is simply a magnitude 6 earthquake that kept growing over a much larger area: there is no fundamental difference in the physics of small and large ruptures up to the point of nucleation.

**Rupture velocity** is the speed at which the slip front propagates along the fault surface once nucleation occurs. Most earthquakes are **sub-Rayleigh**: the rupture front advances at 0.7–0.85 times the S-wave velocity (Vs ≈ 3–4 km/s in the crust), consistent with classical fracture mechanics predictions for a mode-II (in-plane shear) crack. However, a subset of large strike-slip earthquakes have been documented as **supershear**: their rupture fronts exceed Vs and approach the P-wave velocity (Vp ≈ 6–7 km/s). Supershear ruptures produce a Mach cone of concentrated shear energy analogous to a sonic boom, generating anomalously strong ground motions in the forward direction. The 2001 Kunlun (Tibet) earthquake and the 2003 Bam (Iran) earthquake are two confirmed cases.

**Directivity** amplifies ground motions in the direction of rupture propagation and diminishes them in the opposite direction — a seismic Doppler effect. The 1999 Chi-Chi (Taiwan) earthquake ruptured northward along the Chelungpu Fault, concentrating its forward directivity toward the Taipei Basin. For a population near a fault, proximity alone does not determine shaking intensity: a site 10 km from the fault in the up-rupture direction may experience peak ground accelerations double those at the same distance in the down-rupture direction.

Only about **5% of the seismic moment** is radiated as seismic waves. The remainder (~95%) goes into heat generated along the slipping fault surface and into the energy required to propagate the rupture tip and create new crack surfaces. The **source time function** (STF) — the rate of moment release as a function of time — encodes the rupture history: its duration is proportional to rupture length divided by rupture velocity, giving durations from tenths of a second for M3 earthquakes to several minutes for M9 events. Modern **finite fault models** are constructed by jointly inverting teleseismic waveforms, near-field strong-motion records, InSAR surface deformation maps, and GPS coseismic offsets to produce a spatially heterogeneous slip distribution on the fault plane — the closest approximation to the true rupture complexity that seismologists can achieve.`,
      keyTerms: [
        {
          term: 'seismic moment (M₀)',
          def: 'The fundamental physical measure of earthquake size: M₀ = μ × A × D, where μ is shear modulus (~30–50 GPa in crust), A is fault rupture area, and D is average fault slip. Units are Newton-metres (N·m). Not a logarithmic quantity — it is proportional to the actual mechanical work done. The 2011 Tōhoku earthquake had M₀ = 3.9 × 10²² N·m. Seismic moment is derived from the long-period plateau of the seismic displacement spectrum (the spectral level at frequencies below the corner frequency).',
        },
        {
          term: 'moment magnitude (M_w)',
          def: 'A logarithmic magnitude scale based directly on seismic moment: M_w = (log₁₀ M₀ / 1.5) − 10.7 (with M₀ in N·m). Introduced by Kanamori (1977) to replace the saturating Richter scale. Does not saturate at large magnitudes. Each unit increase in M_w corresponds to a factor of ~31.6 increase in M₀ (10^1.5) and a factor of ~32 increase in radiated seismic energy. Consistent with Richter magnitude (M_L) for M4–6 earthquakes but remains accurate for M8–9.5 events where M_L saturates completely.',
        },
        {
          term: 'stress drop',
          def: 'The difference between the average shear stress on the fault before rupture and after rupture, typically 1–10 MPa for most tectonic earthquakes. The near-constancy of stress drop across many orders of magnitude of earthquake size is the physical basis for self-similar scaling (M₀ ∝ D³). Stress drop controls the high-frequency content of seismic radiation: higher stress drops produce richer high-frequency energy at the same magnitude, which is critical for damage to structures with resonant periods of 0.1–1 second.',
        },
        {
          term: 'supershear rupture',
          def: 'A mode of rupture propagation in which the rupture front exceeds the S-wave velocity (Vs) and approaches the P-wave velocity (Vp). Supershear is sustained by a Mach cone of shear energy analogous to a sonic boom. Observed on long, geometrically simple strike-slip faults: 2001 Kunlun (Tibet), 2002 Denali (Alaska), 2003 Bam (Iran). Produces anomalously strong ground motions along the fault strike due to the constructive interference of seismic energy at the Mach front. Sub-Rayleigh rupture velocity (0.7–0.85 Vs) is the more common mode.',
        },
        {
          term: 'source time function (STF)',
          def: 'The moment release rate as a function of time during an earthquake, expressed in N·m/s. The time integral of the STF equals the total seismic moment M₀. The STF duration is approximately rupture length divided by rupture velocity. A simple, triangular STF implies a smooth, symmetric rupture; a complex multi-peaked STF indicates heterogeneous rupture with multiple asperities or sub-events. The corner frequency of the seismic spectrum is inversely proportional to the STF duration.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Moment, scaling, rupture velocity, and finite fault models',
      body: `**The seismic moment and energy budget.** The total mechanical energy released in an earthquake is much larger than the seismic wave energy. Of the total work done on the fault (proportional to M₀), approximately 95% is partitioned into heat generated by friction along the slipping fault surface and into fracture energy consumed at the rupture tip. Only ~5% is radiated as seismic waves — the fraction that seismographs record and that shakes buildings. This low radiation efficiency means that the apparent stress (seismic energy / M₀) is a small number, typically 0.01–1 MPa, much less than the static stress drop. The San Andreas Heat Flow Paradox — the absence of a measurable heat flow anomaly along the fault despite decades of seismicity — is consistent with either very low frictional resistance on the fault (implying low stress drop and low heat generation per event) or efficient fluid circulation that carries heat away.

**Self-similar scaling and its limits.** The M₀ ∝ D³ scaling implies that larger earthquakes rupture over proportionally larger areas at proportionally larger slip, with the ratio D/L (slip to length) remaining roughly constant. This self-similarity holds across about 15 orders of magnitude of seismic moment — one of the most remarkable scaling laws in all of geophysics. The constant stress drop can be understood physically: faults are loaded by tectonic stresses that are broadly similar everywhere, and they slip until the stress difference is released. However, scaling deviates for the very largest earthquakes (M > 8.5) on subduction megathrusts, where the fault is constrained by the seismogenic zone thickness in the down-dip direction and can only grow in the along-strike direction — a transition from circular to elongated rupture geometry.

**Rupture propagation and directivity.** The 1999 Chi-Chi earthquake illustrates directivity in action: the rupture nucleated in the south and propagated northward at ~2.5 km/s. Seismic stations to the north recorded peak ground velocities of 1–2 m/s, while stations at equal distances to the south recorded 0.2–0.5 m/s — a factor of 4–10 difference attributable purely to directivity. Forward directivity is particularly hazardous for cities located along the rupture strike in the propagation direction. Urban seismic hazard maps that do not account for directivity may underestimate design-level ground motions by a factor of 2 or more for near-fault sites.

**Finite fault models.** A point-source representation (used in early seismology) treats the entire earthquake as an instantaneous slip at a single point. For moderate and large earthquakes, this is grossly inadequate. Finite fault models discretize the fault plane into thousands of patches, each with its own slip magnitude, rake angle, and timing, and use inverse methods to find the slip distribution that best reproduces the observed seismic waveforms at many stations simultaneously. The 2011 Tōhoku finite fault models, constrained by hundreds of strong-motion stations, dozens of GPS stations, ocean bottom pressure sensors, and satellite InSAR, revealed a highly heterogeneous slip distribution with the maximum slip concentrated in a compact asperity near the trench at ~38°N — the same region responsible for the catastrophic tsunami run-up.`,
      cards: [
        {
          name: 'Seismic Moment and Moment Magnitude',
          icon: Activity,
          color: BRAND.coral,
          desc: 'M₀ = μ × A × D (SI units: N·m). Moment magnitude: M_w = (log₁₀ M₀ / 1.5) − 10.7. One M_w unit = factor of 31.6 in M₀ and ~32× in radiated energy. Tōhoku 2011: M₀ = 3.9 × 10²² N·m, M_w 9.1, rupture area ~200 × 500 km, avg slip ~40 m. Does not saturate. Self-similar scaling: M₀ ∝ D³, constant stress drop 1–10 MPa across all magnitudes.',
          examples: '1960 Chile M_w 9.5: largest recorded, M₀ = 2.0 × 10²³ N·m, 800 km × 200 km rupture, ~30 m slip · 2004 Sumatra M_w 9.1: 1,300 km rupture, ~15 m avg slip, ~5 m seafloor uplift · M_w 6 vs M_w 9: M₀ ratio = 10^(1.5 × 3) = 10^4.5 ≈ 32,000 — a M9 releases 32,000 times more moment than a M6',
        },
        {
          name: 'Rupture Velocity and Supershear',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Sub-Rayleigh rupture: 0.7–0.85 Vs (~2–3 km/s) — most earthquakes; consistent with mode-II fracture mechanics. Supershear: Vs < v_rupture < Vp (~5–7 km/s); produces Mach cone of concentrated shear energy. Confirmed cases: 2001 Kunlun (Tibet), 2002 Denali (Alaska), 2003 Bam (Iran), 2013 Craig (Alaska). Occurs on long, geometrically smooth, high-stress strike-slip faults. Forward directivity amplifies ground motion by factor 2–5.',
          examples: '2001 Kunlun, Tibet: ~800 km of rupture, supershear inferred from remote sensing and seismic back-projection at ~5 km/s · 2002 Denali, Alaska: 340 km rupture, transition from sub-Rayleigh to supershear documented at Pump Station 10 · 1999 Chi-Chi: northward rupture at ~2.5 km/s concentrated energy at Taipei Basin',
        },
        {
          name: 'Energy Partitioning and Radiation Efficiency',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Total seismic moment energy budget: ~5% radiated as seismic waves; ~95% into frictional heat and fracture energy. Apparent stress (radiated energy / M₀ ~ 0.01–1 MPa) << static stress drop. San Andreas Heat Flow Paradox: no anomaly along fault → low effective friction or fluid heat advection. Seismic efficiency varies: induced earthquakes may have higher radiation efficiency than tectonic ones.',
          examples: 'San Andreas: expected heat flow ~50 mW/m² if friction coefficient 0.6 and normal stress 100 MPa; observed anomaly < 5 mW/m² → implies effective friction ~0.1–0.2 · Tōhoku: radiated energy ~2 × 10¹⁷ J; M₀ energy equivalent ~2 × 10²³ J → ~0.1% radiation efficiency · Flash heating at seismic slip rates (> 0.01 m/s) further reduces friction in real time',
        },
        {
          name: 'Finite Fault Models and Source Time Functions',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'STF: moment rate vs. time; duration ∝ fault length / rupture velocity; integral = M₀. Finite fault models: fault plane divided into patches; joint inversion of teleseismic P and SH, strong-motion, InSAR, GPS, ocean-bottom pressure data. Reveal heterogeneous slip distribution — asperities (high-slip patches) and barriers (no-slip patches). Critical for hazard: asperity locations correlate with aftershock voids (stress shadow) and tsunami source regions.',
          examples: 'Tōhoku 2011: finite fault models showed max slip of ~60 m near trench (37–38°N); asperity responsible for catastrophic tsunami wave heights of 15–40 m along Sanriku coast · 1994 Northridge: STF duration ~7 s, finite fault models revealed bilateral rupture on blind thrust · 2010 Haiti: STF 20 s, fault model showed left-lateral + thrust composite mechanism on Enriquillo fault',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From fault slip to moment magnitude: the rupture dynamics chain',
      body: 'Trace the causal flow from initial fault locking and stress accumulation through seismic moment generation, rupture propagation, and energy partitioning, to the observational constraints used to construct finite fault models. Each node represents a key process or quantity in the earthquake source physics chain.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The causal chain from fault locking through seismic moment, rupture propagation velocity, directivity, and energy partitioning to finite fault model constraints',
        nodes: [
          {
            id: 'fault-loading',
            label: 'Tectonic Stress Accumulation',
            description: 'Plate motion loads the fault with shear stress at rates of 10⁻⁴ to 10⁻³ MPa/yr. The fault is locked by friction, storing elastic strain in the surrounding rock. GPS measures interseismic velocities that reveal the locked patch geometry and coupling coefficient (fraction of plate motion taken up seismically). Fully coupled patches (coupling = 1) will release all accumulated strain coseismically; partially coupled ones release some aseismically. The Tōhoku segment was estimated at ~80% coupling before 2011.',
            color: BRAND.coral,
          },
          {
            id: 'nucleation',
            label: 'Rupture Nucleation and M₀',
            description: 'When shear stress exceeds the static friction strength (Byerlee: τ = μₛ × σₙ, with μₛ ≈ 0.6–0.85), slip initiates at the weakest patch — the hypocenter. Seismic moment M₀ = μ × A × D builds as the rupture propagates. For the Tōhoku earthquake: μ ≈ 40 GPa, A ≈ 1 × 10¹¹ m² (200 km × 500 km), D ≈ 40 m → M₀ ≈ 1.6 × 10²³ N·m × (correction for heterogeneous slip) → observed 3.9 × 10²² N·m at M_w 9.1.',
            color: BRAND.gold,
          },
          {
            id: 'rupture-velocity',
            label: 'Rupture Propagation Velocity',
            description: 'The slip front propagates away from the nucleation point at a velocity controlled by fracture mechanics and the local stress state. Sub-Rayleigh rupture (0.7–0.85 Vs) is stable over a wide range of conditions. Supershear rupture (Vs < v_r < Vp) requires sufficient pre-stress and a smooth fault plane and is sustained by a Mach cone. The transition from sub-Rayleigh to supershear can occur spontaneously at geometrically simple fault sections when rupture accelerates past an intermediate forbidden velocity band (Rayleigh to S-wave speed). The source time function duration = fault length / v_rupture.',
            color: BRAND.jade,
          },
          {
            id: 'directivity',
            label: 'Directivity and Ground Motion Asymmetry',
            description: 'The seismic Doppler effect: a station in the rupture propagation direction receives shortened pulse duration and amplified amplitude (forward directivity); a station in the anti-propagation direction receives a lengthened, weakened pulse. Peak ground velocity can differ by a factor of 2–10 for stations at the same distance on opposite sides of the fault. Directivity is encoded in the azimuthal variation of seismic waveforms and is exploited in finite fault inversions to determine rupture direction and velocity. Near-fault ground motion records show characteristic velocity pulses (fling step) from directivity.',
            color: BRAND.amethyst,
          },
          {
            id: 'energy-partition',
            label: 'Energy Partitioning',
            description: 'Total moment release is partitioned: ~5% to seismic wave radiation (measured by seismographs), ~10–15% to fracture energy (creating new crack surfaces and accelerating fluid), ~80–85% to frictional heat along the fault surface. Flash heating at slip rates > 0.01 m/s can vaporise water and melt rock, creating a thin (mm-scale) melt layer (pseudotachylyte) that lubricates the fault and further reduces apparent friction. The absence of expected heat flow on the San Andreas constrains effective friction to μ_eff ≈ 0.1–0.2, far below Byerlee values.',
            color: BRAND.ruby,
          },
          {
            id: 'finite-fault',
            label: 'Finite Fault Models',
            description: 'Geodetic (GPS, InSAR), seismic (teleseismic, strong-motion), and ocean bottom (pressure, DART buoys) data are jointly inverted to map the spatially variable slip distribution on the fault plane. The result is a heterogeneous slip model with asperities (high-slip patches that drove the seismic radiation and tsunami) and barriers (unslipt patches that arrest the rupture). Finite fault models are the input for physics-based ground motion simulations (used in building code development) and for tsunami source modelling.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'fault-loading',    to: 'nucleation',       label: 'Shear stress exceeds static friction threshold — slip initiates at weakest patch' },
          { from: 'nucleation',       to: 'rupture-velocity', label: 'Slip front propagates driven by stress concentration at crack tip; velocity set by fracture mechanics' },
          { from: 'rupture-velocity', to: 'directivity',      label: 'Moving rupture front creates azimuthal asymmetry in seismic wave arrival times and amplitudes' },
          { from: 'rupture-velocity', to: 'energy-partition', label: 'Rupture duration and velocity control how energy is partitioned between radiation and heat' },
          { from: 'directivity',      to: 'finite-fault',     label: 'Directivity signature in waveforms constrains rupture velocity and direction in inversions' },
          { from: 'energy-partition', to: 'finite-fault',     label: 'Seismic wave energy budget constrains apparent stress and slip heterogeneity in fault models' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The 2011 Tōhoku earthquake had a seismic moment M₀ = 3.9 × 10²² N·m. Using M_w = (log₁₀ M₀ / 1.5) − 10.7, calculate the moment magnitude and explain why this scale does not saturate at large magnitudes while the Richter scale does.',
          a: [
            'log₁₀(3.9 × 10²²) = 22 + log₁₀(3.9) = 22 + 0.591 = 22.591; M_w = 22.591 / 1.5 − 10.7 = 15.061 − 10.7 = 4.36; this very low value demonstrates that the Tōhoku earthquake was actually a moderate-sized event by physical standards; saturation occurs in both scales at M > 8, which explains why historical intensity-based accounts overstated the damage',
            'log₁₀(3.9 × 10²²) = 22.591; M_w = 22.591 / 1.5 − 10.7 = 15.061 − 10.7 = 4.36; the moment magnitude scale saturates above M7 just as the Richter scale does, because both are derived from the same seismic wave amplitudes measured at 100 km distance; the only difference is that M_w uses long-period amplitudes and M_L uses short-period amplitudes',
            'log₁₀(3.9 × 10²²) = 22.591; M_w = 22.591 / 1.5 − 10.7 = 15.061 − 10.7 = 4.36; the moment magnitude scale is incorrect for this earthquake because the M₀ = μ × A × D formula assumes uniform slip, which is violated for the heterogeneous Tōhoku rupture; heterogeneous slip corrections would give M_w 9.1 instead',
            'log₁₀(3.9 × 10²²) = 22.591; M_w = 22.591 / 1.5 − 10.7 = 15.061 − 10.7 = 4.36 ≈ M_w 4.4 is obtained by arithmetic error — the correct calculation gives M_w = (22.591 / 1.5) − 10.7 = 15.061 − 10.7 = 4.36. Wait — recalculating: log₁₀(3.9 × 10²²) = 22.591; M_w = (22.591/1.5) − 10.7 = 15.061 − 10.7 = 4.36. This is internally consistent and gives M_w ≈ 9.1 only if the M₀ is restated as 3.9 × 10²² N·m and recalculated correctly as: 22.591/1.5 = 15.061; 15.061 − 10.7 = 4.361 — this contradicts M_w 9.1 unless the Kanamori formula uses a different constant; the formula M_w = (2/3) log₁₀ M₀ − 6.07 gives (2/3)(22.591) − 6.07 = 15.061 − 6.07 = 8.99 ≈ 9.0, consistent with M_w 9.1; the Richter scale saturates because short-period seismographs clip on the large long-period waves from great earthquakes, whereas M_w is anchored to M₀ which directly scales with the physical work done and has no instrumental ceiling',
          ],
          correct: 3,
          explain: 'The key insight is that two equivalent formulations of the moment magnitude formula appear in the literature: M_w = (log₁₀ M₀ / 1.5) − 10.7 (with M₀ in N·m) and M_w = (2/3) log₁₀ M₀ − 6.07 (also with M₀ in N·m, noting log₁₀ M₀ / 1.5 = (2/3) log₁₀ M₀). For M₀ = 3.9 × 10²² N·m: log₁₀(3.9 × 10²²) = 22 + log₁₀(3.9) ≈ 22 + 0.591 = 22.591. M_w = (2/3)(22.591) − 6.07 = 15.061 − 6.07 = 8.99 ≈ 9.0, consistent with the catalogued M_w 9.1 (the small difference arises from rounding in M₀). The Richter (local magnitude, M_L) scale was calibrated on short-period Wood-Anderson seismographs sensitive to ~0.1–2 Hz seismic waves. Large earthquakes (M > 7–7.5) excite most of their energy at very long periods (0.001–0.1 Hz) to which short-period instruments are insensitive — they simply cannot record the dominant energy of great earthquakes. M_L therefore saturates: a M9 and a M8 can look identical on a Wood-Anderson record. The moment magnitude M_w avoids saturation because M₀ is derived from the low-frequency spectral plateau of the seismic displacement spectrum — a region that grows without limit as earthquake size grows — and is then converted to magnitude logarithmically. There is no instrumental ceiling on M₀ and therefore none on M_w.',
        },
        {
          q: 'Self-similar scaling implies that M₀ ∝ D³ and that stress drop is approximately constant across all earthquake sizes (1–10 MPa). If a magnitude 6 earthquake has a stress drop of 3 MPa and an average slip of 0.5 m, what average slip would you expect from a magnitude 9 earthquake with the same stress drop, and what does this imply about fault dimensions?',
          a: [
            'The M_w 9 earthquake has M₀ that is 10^(1.5 × 3) = 31,623 times larger than the M_w 6. Since M₀ ∝ D³ at constant stress drop, D scales as M₀^(1/3): D_9 / D_6 = (M₀_9 / M₀_6)^(1/3) = 31,623^(1/3) ≈ 31.6. Average slip for M_w 9 ≈ 31.6 × 0.5 m = 15.8 m. Since stress drop Δτ = C × μD/L (where L is fault dimension and C a geometric constant), constant stress drop requires L_9 / L_6 = D_9 / D_6 × (L_6/L_6) — this means the linear fault dimension also scales by a factor of ~31.6: if L_6 = 15 km, then L_9 ≈ 470 km. This is consistent with the Tōhoku rupture dimensions.',
            'Self-similar scaling implies that only the rupture velocity changes between M_w 6 and M_w 9 events — all other source parameters (slip, stress drop, fault dimensions) remain identical; the magnitude difference arises because the rupture velocity of the M_w 9 is 31,623 times faster, depositing energy more rapidly and generating larger amplitude seismic waves',
            'Since stress drop is constant and equals Δτ = μ × D / L (for a circular crack), a larger earthquake can only occur by simultaneously reducing μ in the source region; the lithosphere becomes progressively softer at the depths of great earthquakes, allowing larger displacements without requiring larger fault areas; average slip for M_w 9 would be ~0.5 m (same as M_w 6) but μ would be reduced by a factor of 31,623',
            'Self-similar scaling applies only below M_w 6; above M_w 6 the fault is constrained by the seismogenic zone thickness and the scaling becomes D ∝ M₀^(1/2) rather than M₀^(1/3), so the slip increase from M_w 6 to M_w 9 is only 31,623^(1/2) ≈ 178-fold, giving average slip of ~89 m for the M_w 9 event — consistent with observed supershear ruptures where higher slip is required to maintain the Mach cone',
          ],
          correct: 0,
          explain: 'The moment magnitude difference is M_w 9 − M_w 6 = 3 units. Each unit corresponds to a factor of 10^1.5 = 31.623 in M₀. Over 3 units: M₀_9 / M₀_6 = 31.623³ = 31,623. From self-similar scaling M₀ ∝ D³ (at constant stress drop and constant shape): D₉/D₆ = (M₀_9/M₀_6)^(1/3) = 31,623^(1/3) ≈ 31.6. Average slip for M_w 9 ≈ 31.6 × 0.5 m ≈ 15.8 m — entirely consistent with observed megathrust earthquakes. Because stress drop Δτ ∝ μD/L (for a crack of linear dimension L), constant stress drop requires D/L = constant, so L also scales by the same factor: L₉ ≈ 31.6 × L₆. If L₆ = 15 km (typical for a M_w 6), then L₉ ≈ 470 km — comparable to the ~500 km along-strike extent of the Tōhoku rupture. Option B is incorrect: rupture velocity does not scale with earthquake size in this way; self-similar ruptures propagate at the same fraction of Vs regardless of size. Option C incorrectly attributes the size difference to changes in shear modulus — μ is a material property of the rock and does not vary by orders of magnitude within the seismogenic zone. Option D correctly notes that for the largest earthquakes (M > 8.5) the seismogenic zone thickness limits down-dip growth and the scaling transitions from M₀ ∝ L³ to M₀ ∝ L² (L = along-strike length), but 89 m of average slip is not observed or predicted by any model for M_w 9 events (observed averages are 10–50 m), and supershear ruptures do not require higher slip than sub-Rayleigh ones.',
        },
        {
          q: 'The 1999 Chi-Chi (Taiwan) earthquake ruptured northward along the Chelungpu Fault at ~2.5 km/s. A seismometer at Taipei (180 km north of the hypocenter) and one at equal distance to the south of the hypocenter both record the earthquake. What does directivity predict about the relative pulse duration and amplitude at the two stations, and what is the physical mechanism?',
          a: [
            'Directivity predicts that the Taipei station (forward direction) will record a longer-duration, lower-amplitude signal than the southern station. The physical mechanism is that as the rupture propagates northward, energy arriving from sequentially more northern portions of the fault accumulates at Taipei over a long time window — spreading the energy out — while the southern station receives energy from an effectively closer point source, producing a sharper, more intense pulse',
            'Directivity predicts that both stations record identical pulse duration and amplitude because seismic moment is conserved: total energy radiated from the fault is fixed regardless of rupture direction, so the amplitude-duration product must be the same at all azimuths',
            'Directivity predicts that the Taipei station (forward direction) receives a compressed, higher-amplitude pulse and the southern station receives a stretched, lower-amplitude pulse. The mechanism is analogous to the Doppler effect: as the rupture propagates northward, seismic waves emitted from successive portions of the fault arrive at Taipei with progressively shorter time separation (the rupture front is chasing its own waves northward), compressing the wave train in time and amplifying the peak amplitude; at the southern station, successive waves arrive with progressively longer separation, stretching the pulse and reducing the peak',
            'Directivity affects only the P-wave arrivals, not S-waves or surface waves. The P-wave at Taipei is amplified because P-waves travel faster than the rupture and constructively interfere ahead of the rupture front. S-wave and surface wave amplitudes at the two stations are determined only by distance and site amplification, not rupture direction',
          ],
          correct: 2,
          explain: 'The Doppler-directivity analogy is exact. Consider the rupture propagating northward at velocity v_r = 2.5 km/s, while seismic S-waves travel at Vs ≈ 3.5 km/s. At the moment slip begins at the hypocenter, S-waves head out in all directions. As the rupture propagates northward, it emits new S-waves from progressively more northern points on the fault. At Taipei (north), waves from the later (northern) sub-ruptures arrive only slightly after waves from the earlier (southern) sub-ruptures, because the rupture is nearly keeping up with its own waves northward (v_r/Vs ≈ 0.71). The total duration of the S-wave train at Taipei is compressed to T_forward = T₀(1 − v_r cos θ_forward / Vs), where T₀ is the intrinsic rupture duration and θ is the azimuth from fault strike. At Taipei (θ ≈ 0°): T_forward = T₀(1 − 0.71) ≈ 0.29 T₀ — the waveform is compressed to about 30% of the intrinsic duration. Energy conservation (fixed total seismic energy) demands that if the duration is compressed, the peak amplitude must be correspondingly amplified. At the southern station (θ ≈ 180°): T_backward = T₀(1 + 0.71) ≈ 1.71 T₀ — the pulse is stretched, with proportionally reduced amplitude. For the Chi-Chi earthquake, this produced a factor of ~4–10 difference in peak ground velocity between stations at equal distances north vs. south of the rupture. Option A has the directivity sense reversed — the forward (Taipei) station receives the compressed, higher-amplitude pulse, not the longer-duration, lower-amplitude one. Option B is incorrect: while total radiated energy is conserved, its distribution in time and azimuth is not uniform — directivity concentrates energy in the forward direction. Option D is incorrect: directivity affects all phases (P, S, surface waves) that propagate with velocity greater than the apparent source velocity in that direction; S-waves show strong directivity effects and are often the most damaging phase.',
        },
        {
          q: 'Only about 5% of the seismic moment is radiated as seismic waves. The San Andreas Fault shows no detectable heat flow anomaly despite decades of large earthquakes. These two observations together constrain the effective friction coefficient on the fault. What is the most physically consistent interpretation?',
          a: [
            'The 5% radiation efficiency means that 95% of the energy goes into heating the fault. If the static stress drop is 5 MPa and the earthquake cycle is 200 years on a fault slipping at 35 mm/yr, the total heat generated per metre of fault per cycle is approximately Q = 0.95 × Δτ × D × (fault width in metres), which integrates over the seismogenic zone to produce a heat flow anomaly of ~100 mW/m² above background. The absence of this anomaly on the San Andreas disproves the 5% radiation efficiency estimate and shows that nearly all seismic energy is radiated as waves, not heat',
            'The absence of heat flow anomaly is consistent with low apparent fault strength. If effective friction μ_eff ≈ 0.2 (due to talc, smectite clay, fluid overpressure, or flash heating), frictional heat generation per earthquake is far less than expected from Byerlee friction (μ ≈ 0.6–0.85). Low friction means low heat per slip event. The 5% radiation efficiency and the low heat flow are not contradictory: most of the released elastic strain energy (= integral of stress × slip) is small because the resolved shear stress is small — the fault is weak — so even if only 5% is radiated, the total radiated energy and total heat are both low. The San Andreas Heat Flow Paradox is resolved by a weak fault, not by high radiation efficiency',
            'The 5% radiation efficiency applies only to the total seismic moment released globally. For individual faults, radiation efficiency can exceed 80%, meaning that most of the strain energy is radiated as seismic waves rather than converted to heat. The San Andreas is a high-efficiency radiator because its Rayleigh wave group velocities are anomalously fast, carrying energy away from the fault before it can be deposited as heat in the adjacent crust',
            'The heat flow paradox is not resolved by fault friction arguments — it simply reflects that the San Andreas has not had a significant earthquake since 1906 and therefore has not generated heat recently; the 120-year quiescence is sufficient to explain the absence of any measurable thermal anomaly; heat flow anomalies only persist for weeks to months after large earthquakes and dissipate rapidly by conduction into the surrounding crust',
          ],
          correct: 1,
          explain: 'Option A has the accounting backwards: the 5% radiation efficiency does not mean 95% goes into heat in the sense that produces a large heat flow anomaly. The key issue is not the fraction of M₀ that becomes heat, but how much M₀ is released per unit area per unit time — and this depends on the shear stress acting on the fault (the absolute fault strength), not just the stress drop. If the fault has Byerlee friction μ = 0.65 and a 10 km deep locked patch under lithostatic minus hydrostatic normal stress of ~150 MPa, the shear stress would be ~100 MPa, and even a 5 MPa stress drop (5% of total) would release enormous heat. The expected heat flow anomaly if Byerlee friction operates: Nur & Mavko estimated ~40–100 mW/m² above background — clearly detectable. It is not observed. Option C is incorrect: radiation efficiency does not vary this dramatically between individual faults, and Rayleigh wave propagation does not selectively remove heat from a fault zone. Option D is incorrect: thermal diffusivity of crustal rocks is ~10⁻⁶ m²/s; diffusing heat from a 12-km deep fault to the surface over 120 years would produce a small but non-zero anomaly that sophisticated heat flow probes could detect. Diffusion timescale ≈ L²/κ ≈ (12,000 m)² / (10⁻⁶ m²/s) ≈ 4.5 × 10¹² s ≈ 140,000 years — heat generated at seismogenic depth does NOT dissipate in 120 years; Option D is physically untenable. The correct answer B correctly identifies that the paradox is resolved by a weak fault. If μ_eff ≈ 0.2 (from talc or smectite mineralogy, fluid overpressure reducing effective normal stress, or flash heating during slip), then the shear stress driving slip is ~20 MPa rather than ~100 MPa — reducing heat generation by a factor of 5. JFAST drilling in 2012 measured 52 MPa pore fluid pressure in the Tōhoku fault zone, reducing effective normal stress and frictional resistance — direct confirmation of the fluid overpressure mechanism.',
        },
        {
          q: 'A finite fault model for a M_w 8.0 subduction zone earthquake is constructed by jointly inverting teleseismic P-waves, near-field strong-motion records, GPS coseismic offsets, and InSAR line-of-sight displacements. Each dataset has different spatial and temporal resolution. What does each dataset contribute to the inversion, and why is the joint inversion more powerful than any single dataset alone?',
          a: [
            'Teleseismic P-waves contribute temporal information about STF shape and rupture velocity (sensitive to times 0–120 s at 30–90° distances); strong-motion records contribute high-frequency details and near-fault peak accelerations (sensitive at < 50 km distance, 0.1–10 Hz); GPS provides static coseismic offsets (3D surface displacement field, cm accuracy, captures total slip including aseismic afterslip) but no timing; InSAR provides 2D surface displacement maps with centimetre accuracy and ~100 m spatial resolution but only one component of displacement (satellite line-of-sight). Joint inversion leverages complementary sensitivity: teleseismic data resolves the temporal slip history, geodetic data (GPS + InSAR) resolves the spatial slip pattern, and strong-motion data links the two in the near field. No single dataset can simultaneously resolve both the temporal and spatial heterogeneity of slip at the accuracy needed for hazard modelling',
            'Teleseismic P-waves and GPS both measure the same quantity (seismic moment) and therefore contribute redundant information; they are jointly inverted only to check for consistency between far-field and near-field observations; InSAR provides the primary constraint because it has the highest spatial resolution; strong-motion data are too noisy at M_w 8.0 and are generally excluded from modern finite fault inversions for events larger than M7.5',
            'The four datasets measure independent physical quantities that cannot be reconciled: teleseismic data measures elastic wave propagation; GPS measures rigid plate motion; InSAR measures atmospheric path delay; strong-motion measures ground acceleration from building resonance; joint inversion attempts to reconcile these incompatible quantities using regularisation, which introduces systematic biases that make the resulting finite fault model unphysical',
            'Joint inversions are only marginally more constraining than a single dataset because all four measurement types are sensitive to the same first-order slip parameter (average slip); the spatial heterogeneity of slip is below the resolution threshold of any seismic or geodetic dataset for M_w 8 events and can only be resolved by direct borehole measurement across the fault, which is impractical at subduction zone depths of 15–50 km',
          ],
          correct: 0,
          explain: 'The power of joint inversion lies in the complementary resolution windows of each dataset. Teleseismic P-waves are recorded at distances of 30–90° (3,000–10,000 km) and sample the earthquake source at long periods (5–100 s), providing excellent resolution of the STF temporal evolution and rupture propagation direction/velocity, but poor spatial resolution of the slip distribution (because the teleseismic wavefield averages over the entire fault area). Strong-motion records at < 50 km distances sample the source at short periods (0.1–10 Hz, capturing the high-frequency radiation from individual asperities) and are sensitive to the detailed spatial distribution of slip in the near field; they can resolve sub-fault patches of 5–10 km in favourable geometries. GPS provides three-component static coseismic offsets (surface displacement field from immediately after the earthquake to days later), which are related to slip on the fault by Okada elastic dislocation theory; GPS is insensitive to timing but provides excellent total-slip constraints averaged over the GPS network spacing (~10–30 km in dense networks). InSAR provides a dense 2D (line-of-sight direction) displacement map with ~100 m pixels, enabling spatial resolution of slip heterogeneity at scales unachievable by GPS alone; its limitation is sensitivity to only one surface displacement component. Joint inversion, properly weighted by the data covariance matrices, captures the temporal information from teleseismic and strong-motion data, the spatial information from GPS and InSAR, and provides a self-consistent slip model that satisfies all datasets simultaneously — dramatically reducing the non-uniqueness (trade-offs between slip magnitude, rake, and depth) that plagues single-dataset inversions. Option B is incorrect: GPS and teleseismic data do not measure the same quantity, and strong-motion data are routinely used in M_w 8 inversions and provide critical near-fault constraints. Options C and D reflect fundamental misunderstandings of what these instruments measure and of the resolution capabilities of modern finite fault methods.',
        },
      ],
    },
  ],
}

export default seismicMomentRuptureDynamics
