import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space
} from '@ewmapp/tokens'
import type * as Stitches from '@stitches/react'
import { createStitches, defaultThemeMap } from '@stitches/react'
export type { VariantProps } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space'
  },

  theme: {
    colors: colors,
    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    radii: radii,
    space: space
  },

  media: {
    bp1: '(min-width: 576px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 992px)',
    bp4: '(min-width: 1200px)',
    bp5: '(min-width: 1400px)'
  }
})

export type CSS = Stitches.CSS<typeof config>
