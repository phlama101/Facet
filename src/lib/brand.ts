export const BRAND = {
  bg:          '#0E0F14',
  surface:     '#16181F',
  surfaceHi:   '#1E2028',
  border:      '#2A2D38',
  borderHi:    '#3A3E4D',
  text:        '#EDEEF2',
  textDim:     '#9CA0AE',
  textSubtle:  '#8A8E9D',
  accent:      '#7AD7F0',
  accentHot:   '#5FC5DE',
  gold:        '#E4B74A',
  coral:       '#F28C76',
  jade:        '#7FC29B',
  amethyst:    '#B57EDC',
  ruby:        '#E25B6E',
} as const

export type BrandColor = typeof BRAND[keyof typeof BRAND]
