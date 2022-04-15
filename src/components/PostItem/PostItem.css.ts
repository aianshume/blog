import { sprinkles } from '@css/sprinkles.css'
import { vars } from '@css/vars.css'
import { style } from '@vanilla-extract/css'

export const listItem = style([
  sprinkles({
    marginTop: 2,
  }),
  {
    ':first-child': {
      marginTop: 0,
    },
  },
])

export const postLink = style([
  sprinkles({
    display: 'flex',
    flexDirection: {
      mobile: 'column',
      tablet: 'row',
    },
    justifyContent: 'space-between',
    alignItems: {
      tablet: 'baseline',
    },
    color: 'black',
    px: 5,
    py: 3,
    mx: '-5',
    borderRadius: 'rounded',
  }),
  {
    ':hover': {
      backgroundColor: vars.color.brand05,
    },
  },
])

export const postTitle = style({
  selectors: {
    [`${postLink}:hover &, ${postLink}:focus &`]: {
      color: vars.color.brand70,
    },
  },
})

export const postDate = style({
  flexShrink: 0,
  selectors: {
    [`${postLink}:hover &, ${postLink}:focus &`]: {
      color: vars.color.brand70,
    },
  },
})
