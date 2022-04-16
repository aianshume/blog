import { sprinkles } from '@css/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  sprinkles({
    mx: 'auto',
    px: {
      mobile: 4,
      tablet: 8,
      desktop: 0,
    },
  }),
  {
    maxWidth: 920,
  },
])
