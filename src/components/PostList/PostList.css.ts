import { sprinkles } from '@css/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const list = style({
  listStyleType: 'none',
  padding: 0,
})

export const listTitle = sprinkles({
  mb: {
    mobile: 4,
    tablet: 8,
  },
})
