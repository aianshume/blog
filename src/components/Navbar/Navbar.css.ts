import { sprinkles } from '@css/sprinkles.css'
import { vars } from '@css/vars.css'
import { style } from '@vanilla-extract/css'

export const mobileMenu = style([
  sprinkles({
    width: 'full',
    bg: 'gray025',
    display: 'flex',
    flexDirection: 'column',
  }),
  {
    overflowY: 'scroll',
  },
])

export const mobileLink = style([
  sprinkles({
    width: 'full',
    px: 4,
    py: 6,
    fontSize: 'lg',
    color: 'black',
  }),
  {
    ':hover': {
      backgroundColor: vars.color.brand10,
      color: vars.color.brand70,
    },
  },
])

export const mobileLinks = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
})

export const menuButton = style([
  sprinkles({
    alignItems: 'center',
    borderRadius: 'full',
    color: 'gray90',
    display: {
      mobile: 'flex',
      tablet: 'none',
    },
    height: 10,
    justifyContent: 'center',
    width: 10,
  }),
  {
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transformOrigin: 'center center',
    transition: 'background-color 0.2s ease-in-out',
    ':hover': {
      backgroundColor: vars.color.brand10,
      color: vars.color.brand70,
    },
  },
])

export const menuButtonIcon = style([
  sprinkles({
    width: 6,
  }),
  {
    position: 'absolute',
  },
])

export const menuPopover = sprinkles({
  zIndex: 50,
  bg: 'gray025',
})

export const header = sprinkles({
  width: 'full',
})

export const navLink = style([
  sprinkles({
    px: 4,
    py: 2,
    width: 'full',
    color: 'gray90',
    fontSize: 'sm',
    display: {
      mobile: 'none',
      tablet: 'flex',
    },
    borderRadius: 'full',
  }),
  {
    ':hover': {
      color: vars.color.brand70,
      backgroundColor: vars.color.brand05,
    },
    ':focus': {
      color: vars.color.brand70,
      backgroundColor: vars.color.brand05,
    },
  },
])

export const headerContainer = style([
  sprinkles({
    display: {
      tablet: 'flex',
    },
    justifyContent: {
      tablet: 'space-between',
    },
  }),
  {
    position: 'relative',
  },
])

export const nav = sprinkles({
  display: {
    mobile: 'none',
    tablet: 'flex',
  },
  alignItems: 'center',
})
