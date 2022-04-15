import { sprinkles } from '@css/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  sprinkles({
    mx: 'auto',
    px: {
      mobile: 4,
      tablet: 0,
    },
  }),
  {
    maxWidth: 640,
  },
])
