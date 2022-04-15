import { vars } from '@css/vars.css'
import { globalStyle } from '@vanilla-extract/css'

// Based on Josh's Custom CSS Reset
// https://www.joshwcomeau.com/css/custom-css-reset/

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*', {
  margin: 0,
})

globalStyle('html', {
  fontFamily: vars.fontFamily.main,
  '@supports': {
    '(font-variation-settings: normal)': {
      fontFamily: vars.fontFamily.alt,
    },
  },
})

globalStyle('html, body', {
  height: '100%',
})

globalStyle('body', {
  fontSize: 16,
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
  color: vars.color.black,
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle('#__next', {
  isolation: 'isolate',
})

globalStyle('a', {
  textDecoration: 'none',
  color: vars.color.brand70,
})
