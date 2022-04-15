import { vars } from '@css/vars.css'
import { style } from '@vanilla-extract/css'

export const logo = style({
  transition: 'transform 0.3s ease-in-out',
  ':hover': {
    transform: 'rotate(360deg)',
  },
})

export const logoBg = style({
  fill: vars.color.brand50,
  transition: 'fill 0.3s ease-in-out',
  selectors: {
    [`${logo}:hover &`]: {
      fill: vars.color.brand80,
    },
  },
})

export const logoName = style({
  fill: vars.color.gray05,
})
