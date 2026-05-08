import { Mountain, Waves, Wind, Flame, Thermometer, Telescope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson, TrackId } from './types'

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
import marineEcosystems            from './ocea-101-1-3-1'
import phytoplanktonProduction     from './ocea-101-1-3-2'
import coralReefs                  from './ocea-101-1-3-3'
import polarOceans                 from './ocea-101-1-3-4'

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
  'ocea-101-1-3-1':          marineEcosystems,
  'ocea-101-1-3-2':          phytoplanktonProduction,
  'ocea-101-1-3-3':          coralReefs,
  'ocea-101-1-3-4':          polarOceans,
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

export interface CourseModule {
  id: string
  title: string
  lessonIds: string[]
}

export const GEOL_101_MODULES: CourseModule[] = [
  {
    id: 'geol-101-m1-1',
    title: 'Module 1.1 — Earth\'s Internal Structure',
    lessonIds: ['geol-101-1-1', 'geol-101-1-2', 'geol-101-1-3', 'geol-101-1-4'],
  },
  {
    id: 'geol-101-m1-2',
    title: 'Module 1.2 — Minerals',
    lessonIds: ['geol-101-1-2-1', 'geol-101-1-2-2', 'geol-101-1-2-3', 'geol-101-1-2-4'],
  },
  {
    id: 'geol-101-m1-3',
    title: 'Module 1.3 — The Three Rock Families',
    lessonIds: ['geol-101-1-3-1', 'geol-101-1-3-2', 'geol-101-1-3-3', 'geol-101-1-3-4'],
  },
  {
    id: 'geol-101-m1-4',
    title: 'Module 1.4 — Plate Tectonics',
    lessonIds: ['geol-101-1-4-1', 'geol-101-1-4-2', 'geol-101-1-4-3', 'geol-101-1-4-4'],
  },
  {
    id: 'geol-101-m1-5',
    title: 'Module 1.5 — Reading the Landscape',
    lessonIds: ['geol-101-1-5-1', 'geol-101-1-5-2', 'geol-101-1-5-3', 'geol-101-1-5-4'],
  },
  {
    id: 'geol-101-capstone',
    title: 'GEOL 101 Final Exam',
    lessonIds: ['geol-101-capstone'],
  },
]

export const GEOL_201_MODULES: CourseModule[] = [
  {
    id: 'geol-201-m2-1',
    title: 'Module 2.1 — Telling Geologic Time',
    lessonIds: ['geol-201-2-1-1', 'geol-201-2-1-2', 'geol-201-2-1-3', 'geol-201-2-1-4'],
  },
  {
    id: 'geol-201-m2-2',
    title: 'Module 2.2 — Stratigraphy and the Rock Record',
    lessonIds: ['geol-201-2-2-1', 'geol-201-2-2-2', 'geol-201-2-2-3', 'geol-201-2-2-4'],
  },
  {
    id: 'geol-201-m2-3',
    title: 'Module 2.3 — The Fossil Record',
    lessonIds: ['geol-201-2-3-1', 'geol-201-2-3-2', 'geol-201-2-3-3', 'geol-201-2-3-4'],
  },
  {
    id: 'geol-201-m2-4',
    title: 'Module 2.4 — Major Events in Earth History',
    lessonIds: ['geol-201-2-4-1', 'geol-201-2-4-2', 'geol-201-2-4-3', 'geol-201-2-4-4'],
  },
  {
    id: 'geol-201-m2-5',
    title: 'Module 2.5 — Field Methods Introduction',
    lessonIds: ['geol-201-2-5-1', 'geol-201-2-5-2', 'geol-201-2-5-3', 'geol-201-2-5-4'],
  },
  {
    id: 'geol-201-capstone',
    title: 'GEOL 201 Final Exam',
    lessonIds: ['geol-201-capstone'],
  },
]

export const OCEA_101_MODULES: CourseModule[] = [
  {
    id: 'ocea-101-m1-1',
    title: 'Module 1.1 — The Ocean Basin',
    lessonIds: ['ocea-101-1-1-1', 'ocea-101-1-1-2', 'ocea-101-1-1-3', 'ocea-101-1-1-4'],
  },
  {
    id: 'ocea-101-m1-2',
    title: 'Module 1.2 — Seawater and Ocean Structure',
    lessonIds: ['ocea-101-1-2-1', 'ocea-101-1-2-2', 'ocea-101-1-2-3', 'ocea-101-1-2-4'],
  },
  {
    id: 'ocea-101-m1-3',
    title: 'Module 1.3 — Marine Biology',
    lessonIds: ['ocea-101-1-3-1', 'ocea-101-1-3-2', 'ocea-101-1-3-3', 'ocea-101-1-3-4'],
  },
]

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
