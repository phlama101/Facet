import { Mountain, Layers, Waves, Wind, Flame, Thermometer, Telescope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson, TrackId, Chapter, LearningPath } from './types'

import rockCycle             from './rock-cycle'
import rockCycleIntermediate  from './rock-cycle-intermediate'
import plateTectonics         from './plate-tectonics'
import minerals               from './minerals'
import oceanCurrents          from './ocean-currents'
import cloudTypes             from './cloud-types'
import earthInternalStructure      from './geol-101-1-1'
import crustContinentalVsOceanic   from './geol-101-1-2'
import mantleConvection            from './geol-101-1-3'
import coreAndMagneticField        from './geol-101-1-4'
import whatDefinesAMineral         from './geol-101-1-2-1'
import identifyingMinerals         from './geol-101-1-2-2'
import rockFormingMinerals         from './geol-101-1-2-3'
import crystalSystems              from './geol-101-1-2-4'
import rockCycleOverview           from './geol-101-1-3-1'
import igneousRocks               from './geol-101-1-3-2'
import sedimentaryRocks           from './geol-101-1-3-3'
import metamorphicRocks           from './geol-101-1-3-4'
import plateTectonicsTheory        from './geol-101-1-4-1'
import plateBoundaries             from './geol-101-1-4-2'
import subductionOrogenesis        from './geol-101-1-4-3'
import hotspotsAndPlumes           from './geol-101-1-4-4'
import volcanicLandforms           from './geol-101-1-5-1'
import weatheringErosion           from './geol-101-1-5-2'
import riverSystems                from './geol-101-1-5-3'
import glacialCoastalLandforms     from './geol-101-1-5-4'
import geol101Capstone             from './geol-101-capstone'
import deepTime                    from './geol-201-2-1-1'
import relativeDating              from './geol-201-2-1-2'
import radiometricDating           from './geol-201-2-1-3'
import calibratingTimescale        from './geol-201-2-1-4'
import sedimentaryFacies           from './geol-201-2-2-1'
import unconformities              from './geol-201-2-2-2'
import sequenceStratigraphy        from './geol-201-2-2-3'
import stratigraphicColumn         from './geol-201-2-2-4'
import howFossilsForm              from './geol-201-2-3-1'
import biostratigraphy             from './geol-201-2-3-2'
import traceFossils                from './geol-201-2-3-3'
import lagerstatten                from './geol-201-2-3-4'
import cambrianExplosion           from './geol-201-2-4-1'
import massExtinctions             from './geol-201-2-4-2'
import conquestOfLand              from './geol-201-2-4-3'
import cenozoic                    from './geol-201-2-4-4'
import geologicalMaps              from './geol-201-2-5-1'
import structuralGeology           from './geol-201-2-5-2'
import stratigraphicSections       from './geol-201-2-5-3'
import rockMineralIdentification   from './geol-201-2-5-4'
import geol201Capstone             from './geol-201-capstone'
import oceanFloorGeography         from './ocea-101-1-1-1'
import midOceanRidges              from './ocea-101-1-1-2'
import oceanTrenches               from './ocea-101-1-1-3'
import seafloorSediments           from './ocea-101-1-1-4'
import seawaterSalinity            from './ocea-101-1-2-1'
import oceanDensityStructure       from './ocea-101-1-2-2'
import oceanCirculation            from './ocea-101-1-2-3'
import wavesAndTides               from './ocea-101-1-2-4'
import atmosphereLayers            from './atmo-101-1-1-1'
import atmosphereComposition       from './atmo-101-1-1-2'
import solarRadiation              from './atmo-101-1-1-3'
import greenhouseEffect            from './atmo-101-1-1-4'
import airMassesFronts             from './atmo-101-1-2-1'
import midLatitudeCyclone          from './atmo-101-1-2-2'
import thunderstorms               from './atmo-101-1-2-3'
import tropicalCyclones            from './atmo-101-1-2-4'
import originOfMagma              from './volc-101-1-1-1'
import magmaComposition           from './volc-101-1-1-2'
import intrusiveBodies            from './volc-101-1-1-3'
import volcanicLandformsLesson    from './volc-101-1-1-4'
import eruptionClassification      from './volc-101-1-2-1'
import effusiveEruptions           from './volc-101-1-2-2'
import explosiveEruptions          from './volc-101-1-2-3'
import volcanicGases               from './volc-101-1-2-4'
import laharsHydrologicalHazards   from './volc-101-1-3-1'
import volcanicTsunamis            from './volc-101-1-3-2'
import volcanicWinter              from './volc-101-1-3-3'
import volcanicMonitoring          from './volc-101-1-3-4'
import climateSystemOverview       from './clim-101-1-1-1'
import atmosphericCirculation      from './clim-101-1-1-2'
import carbonCycle                 from './clim-101-1-1-3'
import extremeWeatherClimate       from './clim-101-1-1-4'
import iceAgesAndMilankovitch      from './clim-101-1-2-1'
import abruptClimateChange         from './clim-101-1-2-2'
import holoceneAndLIA              from './clim-101-1-2-3'
import deepTimeClimate             from './clim-101-1-2-4'
import observedWarming             from './clim-101-1-3-1'
import seaLevelRise                from './clim-101-1-3-2'
import climateImpacts              from './clim-101-1-3-3'
import mitigationAdaptation        from './clim-101-1-3-4'
import clim101Capstone             from './clim-101-capstone'
import solarSystemFormation        from './astr-101-1-1-1'
import differentiationLHB          from './astr-101-1-1-2'
import theSun                      from './astr-101-1-1-3'
import comparativePlanetology      from './astr-101-1-1-4'
import mercuryAndVenus             from './astr-101-1-2-1'
import marsGeology                 from './astr-101-1-2-2'
import theMoon                     from './astr-101-1-2-3'
import asteroidsAndMeteorites      from './astr-101-1-2-4'
import cloudFormation              from './atmo-101-1-3-1'
import precipitation               from './atmo-101-1-3-2'
import atmosphericStability        from './atmo-101-1-3-3'
import weatherPrediction           from './atmo-101-1-3-4'
import marineEcosystems            from './ocea-101-1-3-1'
import phytoplanktonProduction     from './ocea-101-1-3-2'
import coralReefs                  from './ocea-101-1-3-3'
import polarOceans                 from './ocea-101-1-3-4'
import hydrothermalVents           from './ocea-101-1-4-1'
import oceanAcidification          from './ocea-101-1-4-2'
import bioluminescence             from './ocea-101-1-4-3'
import deepOceanSediments          from './ocea-101-1-4-4'

export const LESSONS: Record<string, Lesson> = {
  'rock-cycle':              rockCycle,
  'rock-cycle-intermediate': rockCycleIntermediate,
  'plate-tectonics':         plateTectonics,
  'minerals':                minerals,
  'ocean-currents':          oceanCurrents,
  'cloud-types':             cloudTypes,
  'geol-101-1-1':            earthInternalStructure,
  'geol-101-1-2':            crustContinentalVsOceanic,
  'geol-101-1-3':            mantleConvection,
  'geol-101-1-4':            coreAndMagneticField,
  'geol-101-1-2-1':          whatDefinesAMineral,
  'geol-101-1-2-2':          identifyingMinerals,
  'geol-101-1-2-3':          rockFormingMinerals,
  'geol-101-1-2-4':          crystalSystems,
  'geol-101-1-3-1':          rockCycleOverview,
  'geol-101-1-3-2':          igneousRocks,
  'geol-101-1-3-3':          sedimentaryRocks,
  'geol-101-1-3-4':          metamorphicRocks,
  'geol-101-1-4-1':          plateTectonicsTheory,
  'geol-101-1-4-2':          plateBoundaries,
  'geol-101-1-4-3':          subductionOrogenesis,
  'geol-101-1-4-4':          hotspotsAndPlumes,
  'geol-101-1-5-1':          volcanicLandforms,
  'geol-101-1-5-2':          weatheringErosion,
  'geol-101-1-5-3':          riverSystems,
  'geol-101-1-5-4':          glacialCoastalLandforms,
  'geol-101-capstone':       geol101Capstone,
  'geol-201-2-1-1':          deepTime,
  'geol-201-2-1-2':          relativeDating,
  'geol-201-2-1-3':          radiometricDating,
  'geol-201-2-1-4':          calibratingTimescale,
  'geol-201-2-2-1':          sedimentaryFacies,
  'geol-201-2-2-2':          unconformities,
  'geol-201-2-2-3':          sequenceStratigraphy,
  'geol-201-2-2-4':          stratigraphicColumn,
  'geol-201-2-3-1':          howFossilsForm,
  'geol-201-2-3-2':          biostratigraphy,
  'geol-201-2-3-3':          traceFossils,
  'geol-201-2-3-4':          lagerstatten,
  'geol-201-2-4-1':          cambrianExplosion,
  'geol-201-2-4-2':          massExtinctions,
  'geol-201-2-4-3':          conquestOfLand,
  'geol-201-2-4-4':          cenozoic,
  'geol-201-2-5-1':          geologicalMaps,
  'geol-201-2-5-2':          structuralGeology,
  'geol-201-2-5-3':          stratigraphicSections,
  'geol-201-2-5-4':          rockMineralIdentification,
  'geol-201-capstone':       geol201Capstone,
  'ocea-101-1-1-1':          oceanFloorGeography,
  'ocea-101-1-1-2':          midOceanRidges,
  'ocea-101-1-1-3':          oceanTrenches,
  'ocea-101-1-1-4':          seafloorSediments,
  'ocea-101-1-2-1':          seawaterSalinity,
  'ocea-101-1-2-2':          oceanDensityStructure,
  'ocea-101-1-2-3':          oceanCirculation,
  'ocea-101-1-2-4':          wavesAndTides,
  'atmo-101-1-1-1':          atmosphereLayers,
  'atmo-101-1-1-2':          atmosphereComposition,
  'atmo-101-1-1-3':          solarRadiation,
  'atmo-101-1-1-4':          greenhouseEffect,
  'atmo-101-1-2-1':          airMassesFronts,
  'atmo-101-1-2-2':          midLatitudeCyclone,
  'atmo-101-1-2-3':          thunderstorms,
  'atmo-101-1-2-4':          tropicalCyclones,
  'atmo-101-1-3-1':          cloudFormation,
  'atmo-101-1-3-2':          precipitation,
  'atmo-101-1-3-3':          atmosphericStability,
  'atmo-101-1-3-4':          weatherPrediction,
  'volc-101-1-1-1':          originOfMagma,
  'volc-101-1-1-2':          magmaComposition,
  'volc-101-1-1-3':          intrusiveBodies,
  'volc-101-1-1-4':          volcanicLandformsLesson,
  'volc-101-1-2-1':          eruptionClassification,
  'volc-101-1-2-2':          effusiveEruptions,
  'volc-101-1-2-3':          explosiveEruptions,
  'volc-101-1-2-4':          volcanicGases,
  'volc-101-1-3-1':          laharsHydrologicalHazards,
  'volc-101-1-3-2':          volcanicTsunamis,
  'volc-101-1-3-3':          volcanicWinter,
  'volc-101-1-3-4':          volcanicMonitoring,
  'clim-101-1-1-1':          climateSystemOverview,
  'clim-101-1-1-2':          atmosphericCirculation,
  'clim-101-1-1-3':          carbonCycle,
  'clim-101-1-1-4':          extremeWeatherClimate,
  'clim-101-1-2-1':          iceAgesAndMilankovitch,
  'clim-101-1-2-2':          abruptClimateChange,
  'clim-101-1-2-3':          holoceneAndLIA,
  'clim-101-1-2-4':          deepTimeClimate,
  'clim-101-1-3-1':          observedWarming,
  'clim-101-1-3-2':          seaLevelRise,
  'clim-101-1-3-3':          climateImpacts,
  'clim-101-1-3-4':          mitigationAdaptation,
  'clim-101-capstone':       clim101Capstone,
  'astr-101-1-1-1':          solarSystemFormation,
  'astr-101-1-1-2':          differentiationLHB,
  'astr-101-1-1-3':          theSun,
  'astr-101-1-1-4':          comparativePlanetology,
  'astr-101-1-2-1':          mercuryAndVenus,
  'astr-101-1-2-2':          marsGeology,
  'astr-101-1-2-3':          theMoon,
  'astr-101-1-2-4':          asteroidsAndMeteorites,
  'ocea-101-1-3-1':          marineEcosystems,
  'ocea-101-1-3-2':          phytoplanktonProduction,
  'ocea-101-1-3-3':          coralReefs,
  'ocea-101-1-3-4':          polarOceans,
  'ocea-101-1-4-1':          hydrothermalVents,
  'ocea-101-1-4-2':          oceanAcidification,
  'ocea-101-1-4-3':          bioluminescence,
  'ocea-101-1-4-4':          deepOceanSediments,
}

export const LESSON_LIST: Lesson[] = Object.values(LESSONS)

export interface Track {
  id: TrackId
  name: string
  icon: LucideIcon
  color: string
}

export const TRACKS: Track[] = [
  { id: 'geo', name: 'Geology',      icon: Mountain,    color: BRAND.coral },
  { id: 'oce', name: 'Oceanography', icon: Waves,       color: BRAND.accent },
  { id: 'atm', name: 'Meteorology',  icon: Wind,        color: BRAND.gold },
  { id: 'vol', name: 'Volcanology',  icon: Flame,       color: BRAND.ruby },
  { id: 'cli', name: 'Climate',      icon: Thermometer, color: BRAND.jade },
  { id: 'ast', name: 'Planetary',    icon: Telescope,   color: BRAND.amethyst },
]

export const TRACK_MAP = Object.fromEntries(TRACKS.map(t => [t.id, t])) as Record<TrackId, Track>

export interface Institution {
  name: string
  abbr: string
  type: string
  url: string
  contributes: string
  color: string
}

// CourseModule is an alias for backwards compatibility with existing consumers.
export type CourseModule = Chapter
export type { Chapter, LearningPath }

// ─── Learning paths ───────────────────────────────────────────────────────────
// Single source of truth. Legacy named exports below are derived from this array.
// To add new content: append a Chapter to an existing path, or append a new LearningPath.
// Icons: drop /public/icons/chapters/{iconId}.webp or /public/icons/paths/{iconId}.webp.

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'earth-foundations',
    title: 'Earth Foundations',
    subtitle: 'How our planet is built — from deep interior to the minerals, rocks, and tectonic forces that shape its surface.',
    tagline: 'Start here.',
    track: 'geo',
    level: 'Foundations',
    color: BRAND.coral,
    icon: Mountain,
    iconId: 'path-earth-foundations',
    chapters: [
      {
        id: 'earth-interior',
        title: "Earth's Interior",
        description: 'Crust, mantle, outer core, inner core — and the geophysical methods that revealed them.',
        lessonIds: ['geol-101-1-1', 'geol-101-1-2', 'geol-101-1-3', 'geol-101-1-4'],
        iconId: 'chapter-earth-interior',
      },
      {
        id: 'minerals-crystals',
        title: 'Minerals & Crystals',
        description: 'The five criteria that define a mineral, identification techniques, and how crystals grow.',
        lessonIds: ['geol-101-1-2-1', 'geol-101-1-2-2', 'geol-101-1-2-3', 'geol-101-1-2-4'],
        iconId: 'chapter-minerals-crystals',
      },
      {
        id: 'rock-families',
        title: 'The Rock Families',
        description: 'Igneous, sedimentary, and metamorphic rocks — how they form and how to read them.',
        lessonIds: ['geol-101-1-3-1', 'geol-101-1-3-2', 'geol-101-1-3-3', 'geol-101-1-3-4'],
        iconId: 'chapter-rock-families',
      },
      {
        id: 'plate-tectonics',
        title: 'Plate Tectonics',
        description: 'The theory that unified geology — moving plates, divergent and convergent boundaries, and hotspots.',
        lessonIds: ['geol-101-1-4-1', 'geol-101-1-4-2', 'geol-101-1-4-3', 'geol-101-1-4-4'],
        iconId: 'chapter-plate-tectonics',
      },
      {
        id: 'surface-processes',
        title: 'Surface Processes',
        description: 'Weathering, erosion, rivers, glaciers, and coastlines — how landscapes are sculpted over time.',
        lessonIds: ['geol-101-1-5-1', 'geol-101-1-5-2', 'geol-101-1-5-3', 'geol-101-1-5-4'],
        iconId: 'chapter-surface-processes',
      },
      {
        id: 'earth-foundations-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all five chapters of Earth Foundations.',
        lessonIds: ['geol-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'deep-time',
    title: 'Deep Time',
    subtitle: 'Billions of years of Earth history — reading the rock record, dating ancient events, and tracing life\'s story.',
    tagline: 'Intermediate geology.',
    track: 'geo',
    level: 'Intermediate',
    color: BRAND.coral,
    icon: Layers,
    iconId: 'path-deep-time',
    prerequisites: ['earth-foundations'],
    chapters: [
      {
        id: 'geologic-time',
        title: 'Geologic Time',
        description: 'Relative and absolute dating, the geologic timescale, and how we measure deep time.',
        lessonIds: ['geol-201-2-1-1', 'geol-201-2-1-2', 'geol-201-2-1-3', 'geol-201-2-1-4'],
        iconId: 'chapter-geologic-time',
      },
      {
        id: 'stratigraphy',
        title: 'Rock Records & Stratigraphy',
        description: 'Sedimentary facies, unconformities, sequence stratigraphy, and stratigraphic columns.',
        lessonIds: ['geol-201-2-2-1', 'geol-201-2-2-2', 'geol-201-2-2-3', 'geol-201-2-2-4'],
        iconId: 'chapter-stratigraphy',
      },
      {
        id: 'fossil-record',
        title: 'The Fossil Record',
        description: 'How fossils form, biostratigraphy, trace fossils, and extraordinary preservation sites.',
        lessonIds: ['geol-201-2-3-1', 'geol-201-2-3-2', 'geol-201-2-3-3', 'geol-201-2-3-4'],
        iconId: 'chapter-fossil-record',
      },
      {
        id: 'life-through-ages',
        title: 'Life Through the Ages',
        description: 'The Cambrian explosion, mass extinctions, the conquest of land, and the Cenozoic.',
        lessonIds: ['geol-201-2-4-1', 'geol-201-2-4-2', 'geol-201-2-4-3', 'geol-201-2-4-4'],
        iconId: 'chapter-life-through-ages',
      },
      {
        id: 'field-methods',
        title: 'Field Methods',
        description: 'Geological maps, structural geology, stratigraphic sections, and rock identification in the field.',
        lessonIds: ['geol-201-2-5-1', 'geol-201-2-5-2', 'geol-201-2-5-3', 'geol-201-2-5-4'],
        iconId: 'chapter-field-methods',
      },
      {
        id: 'deep-time-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all five chapters of Deep Time.',
        lessonIds: ['geol-201-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'ocean-systems',
    title: 'Ocean Systems',
    subtitle: 'The ocean floor, seawater chemistry, global circulation, waves, and the ecosystems that depend on it all.',
    track: 'oce',
    level: 'Foundations',
    color: BRAND.accent,
    icon: Waves,
    iconId: 'path-ocean-systems',
    chapters: [
      {
        id: 'ocean-basin',
        title: 'The Ocean Basin',
        description: 'Mid-ocean ridges, trenches, abyssal plains, and the sediments that blanket the seafloor.',
        lessonIds: ['ocea-101-1-1-1', 'ocea-101-1-1-2', 'ocea-101-1-1-3', 'ocea-101-1-1-4'],
        iconId: 'chapter-ocean-basin',
      },
      {
        id: 'seawater-structure',
        title: 'Seawater & Ocean Structure',
        description: 'Salinity, density, thermohaline circulation, waves, and tides.',
        lessonIds: ['ocea-101-1-2-1', 'ocea-101-1-2-2', 'ocea-101-1-2-3', 'ocea-101-1-2-4'],
        iconId: 'chapter-seawater-structure',
      },
      {
        id: 'marine-life',
        title: 'Marine Life',
        description: 'Ocean ecosystems from surface to hadal zone — phytoplankton, coral reefs, and polar seas.',
        lessonIds: ['ocea-101-1-3-1', 'ocea-101-1-3-2', 'ocea-101-1-3-3', 'ocea-101-1-3-4'],
        iconId: 'chapter-marine-life',
      },
      {
        id: 'deep-ocean',
        title: 'The Deep Ocean',
        description: 'Hydrothermal vents, ocean acidification, bioluminescence, and the sediments and mineral resources of the abyssal seafloor.',
        lessonIds: ['ocea-101-1-4-1', 'ocea-101-1-4-2', 'ocea-101-1-4-3', 'ocea-101-1-4-4'],
        iconId: 'chapter-deep-ocean',
      },
    ],
  },
  {
    id: 'atmosphere-weather',
    title: 'Atmosphere & Weather',
    subtitle: 'The invisible ocean above us — atmospheric layers, the energy budget, weather systems, and forecasting.',
    track: 'atm',
    level: 'Foundations',
    color: BRAND.gold,
    icon: Wind,
    iconId: 'path-atmosphere-weather',
    chapters: [
      {
        id: 'atmospheric-structure',
        title: 'Atmospheric Structure',
        description: 'The layers of the atmosphere, composition, solar radiation, and the greenhouse effect.',
        lessonIds: ['atmo-101-1-1-1', 'atmo-101-1-1-2', 'atmo-101-1-1-3', 'atmo-101-1-1-4'],
        iconId: 'chapter-atmospheric-structure',
      },
      {
        id: 'weather-systems',
        title: 'Weather Systems',
        description: 'Air masses, fronts, mid-latitude cyclones, thunderstorms, and tropical cyclones.',
        lessonIds: ['atmo-101-1-2-1', 'atmo-101-1-2-2', 'atmo-101-1-2-3', 'atmo-101-1-2-4'],
        iconId: 'chapter-weather-systems',
      },
      {
        id: 'clouds-forecasting',
        title: 'Clouds & Forecasting',
        description: 'Cloud formation, precipitation processes, atmospheric stability, and weather prediction.',
        lessonIds: ['atmo-101-1-3-1', 'atmo-101-1-3-2', 'atmo-101-1-3-3', 'atmo-101-1-3-4'],
        iconId: 'chapter-clouds-forecasting',
      },
    ],
  },
  {
    id: 'volcanoes',
    title: 'Volcanoes',
    subtitle: 'Where the interior meets the surface — magma generation, eruption styles, and the hazards that follow.',
    track: 'vol',
    level: 'Foundations',
    color: BRAND.ruby,
    icon: Flame,
    iconId: 'path-volcanoes',
    chapters: [
      {
        id: 'magma-volcanism',
        title: 'Magma & Volcanism',
        description: 'How magma originates, its composition and viscosity, intrusive bodies, and volcanic landforms.',
        lessonIds: ['volc-101-1-1-1', 'volc-101-1-1-2', 'volc-101-1-1-3', 'volc-101-1-1-4'],
        iconId: 'chapter-magma-volcanism',
      },
      {
        id: 'eruption-styles',
        title: 'Eruption Styles',
        description: 'Effusive versus explosive eruptions, eruption classification, pyroclastic flows, and volcanic gases.',
        lessonIds: ['volc-101-1-2-1', 'volc-101-1-2-2', 'volc-101-1-2-3', 'volc-101-1-2-4'],
        iconId: 'chapter-eruption-styles',
      },
      {
        id: 'volcanic-hazards',
        title: 'Volcanic Hazards',
        description: 'Lahars, volcanic tsunamis, volcanic winter, and modern monitoring systems.',
        lessonIds: ['volc-101-1-3-1', 'volc-101-1-3-2', 'volc-101-1-3-3', 'volc-101-1-3-4'],
        iconId: 'chapter-volcanic-hazards',
      },
    ],
  },
  {
    id: 'climate-past-future',
    title: 'Climate, Past & Future',
    subtitle: 'The climate system, its history over millions of years, and what rising CO₂ means for the planet ahead.',
    track: 'cli',
    level: 'Foundations',
    color: BRAND.jade,
    icon: Thermometer,
    iconId: 'path-climate-past-future',
    chapters: [
      {
        id: 'climate-system',
        title: 'The Climate System',
        description: 'Climate drivers, atmospheric and ocean circulation, the carbon cycle, and extreme weather.',
        lessonIds: ['clim-101-1-1-1', 'clim-101-1-1-2', 'clim-101-1-1-3', 'clim-101-1-1-4'],
        iconId: 'chapter-climate-system',
      },
      {
        id: 'climate-history',
        title: 'Climate Through History',
        description: 'Ice ages, Milankovitch cycles, abrupt climate shifts, the Holocene, and deep-time climates.',
        lessonIds: ['clim-101-1-2-1', 'clim-101-1-2-2', 'clim-101-1-2-3', 'clim-101-1-2-4'],
        iconId: 'chapter-climate-history',
      },
      {
        id: 'modern-climate-change',
        title: 'Modern Climate Change',
        description: 'Observed warming, sea level rise, climate impacts, and the pathways for mitigation.',
        lessonIds: ['clim-101-1-3-1', 'clim-101-1-3-2', 'clim-101-1-3-3', 'clim-101-1-3-4'],
        iconId: 'chapter-modern-climate-change',
      },
      {
        id: 'climate-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all three chapters of Climate, Past & Future.',
        lessonIds: ['clim-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'solar-system',
    title: 'Solar System',
    subtitle: 'From dust to worlds — how our solar system formed, and what comparative planetology reveals about each body.',
    track: 'ast',
    level: 'Foundations',
    color: BRAND.amethyst,
    icon: Telescope,
    iconId: 'path-solar-system',
    chapters: [
      {
        id: 'solar-system-formation',
        title: 'Solar System Formation',
        description: 'Nebular hypothesis, planetesimal accretion, differentiation, the Late Heavy Bombardment, and the Sun.',
        lessonIds: ['astr-101-1-1-1', 'astr-101-1-1-2', 'astr-101-1-1-3', 'astr-101-1-1-4'],
        iconId: 'chapter-solar-system-formation',
      },
      {
        id: 'terrestrial-worlds',
        title: 'Terrestrial Worlds',
        description: 'Mercury, Venus, Mars, the Moon, and asteroids — geology and surface evolution of rocky bodies.',
        lessonIds: ['astr-101-1-2-1', 'astr-101-1-2-2', 'astr-101-1-2-3', 'astr-101-1-2-4'],
        iconId: 'chapter-terrestrial-worlds',
      },
    ],
  },
]

// ─── Legacy named exports (derived from LEARNING_PATHS) ───────────────────────
// Kept for backwards compatibility with skill-tree/page.tsx and profile/page.tsx.

export const GEOL_101_MODULES = LEARNING_PATHS.find(p => p.id === 'earth-foundations')!.chapters
export const GEOL_201_MODULES = LEARNING_PATHS.find(p => p.id === 'deep-time')!.chapters
export const OCEA_101_MODULES = LEARNING_PATHS.find(p => p.id === 'ocean-systems')!.chapters
export const ATMO_101_MODULES = LEARNING_PATHS.find(p => p.id === 'atmosphere-weather')!.chapters
export const VOLC_101_MODULES = LEARNING_PATHS.find(p => p.id === 'volcanoes')!.chapters
export const CLIM_101_MODULES = LEARNING_PATHS.find(p => p.id === 'climate-past-future')!.chapters
export const ASTR_101_MODULES = LEARNING_PATHS.find(p => p.id === 'solar-system')!.chapters

export const INSTITUTIONS: Institution[] = [
  { name: 'U.S. Geological Survey',                abbr: 'USGS',       type: 'Federal Agency · Public Domain',   url: 'usgs.gov',                  contributes: 'Rocks, minerals, volcanoes, earthquakes, tectonics, water resources', color: BRAND.jade },
  { name: 'National Aeronautics and Space Administration', abbr: 'NASA', type: 'Federal Agency · Public Domain', url: 'science.nasa.gov/earth',     contributes: 'Planetary science, climate data, Earth observation, atmospheric research', color: BRAND.accent },
  { name: 'National Oceanic and Atmospheric Administration', abbr: 'NOAA', type: 'Federal Agency · Public Domain', url: 'noaa.gov',               contributes: 'Ocean circulation, weather, climate, atmospheric dynamics', color: BRAND.accentHot },
  { name: 'National Science Foundation',            abbr: 'NSF',        type: 'Federal Agency · Public Domain',   url: 'nsf.gov',                   contributes: 'Research-grade curricular resources, field programs', color: BRAND.amethyst },
  { name: 'American Geosciences Institute',         abbr: 'AGI',        type: 'Nonprofit Federation',             url: 'americangeosciences.org',    contributes: 'Glossary of Geology, career resources, workforce data', color: BRAND.gold },
  { name: 'Paleontological Research Institution',   abbr: 'PRI',        type: 'Nonprofit · Earth@Home',           url: 'priweb.org',                 contributes: 'Digital Encyclopedia of Earth Science, fossil records, deep time', color: BRAND.coral },
  { name: 'OpenStax (Rice University)',             abbr: 'OpenStax',   type: 'CC-BY Licensed Textbooks',         url: 'openstax.org',               contributes: 'Peer-reviewed introductory textbook material', color: BRAND.accent },
  { name: 'UCAR Center for Science Education',      abbr: 'UCAR',       type: 'NSF-Funded Consortium',            url: 'scied.ucar.edu',             contributes: 'Atmospheric science, clouds, weather systems', color: BRAND.accentHot },
  { name: 'Smithsonian Global Volcanism Program',   abbr: 'SI-GVP',     type: 'Smithsonian Institution',          url: 'volcano.si.edu',             contributes: 'Volcano databases, eruption records', color: BRAND.ruby },
  { name: 'EarthScope Consortium (IRIS)',           abbr: 'EarthScope', type: 'NSF-Funded Consortium',            url: 'earthscope.org',             contributes: 'Seismology data, geophysics education', color: BRAND.amethyst },
]
