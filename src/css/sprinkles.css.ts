import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from './vars.css'

const responsiveAtomicProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: [
      'none',
      'flex',
      'block',
      'inline',
      'grid',
      'inline-flex',
      'inline-block',
    ],
    flexDirection: ['row', 'column'],
    gridTemplateColumns: vars.gridRepeat,
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    textAlign: ['center', 'left', 'right'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
    marginBottom: vars.space,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    width: vars.space,
    height: vars.space,
    zIndex: vars.zIndex,
    borderRadius: vars.borderRadius,
  },
  shorthands: {
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mb: ['marginBottom'],
    mt: ['marginTop'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const colorAtomicProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.color,
    background: vars.color,
    stroke: vars.color,
  },
  shorthands: {
    bg: ['background'],
  },
})

export const sprinkles = createSprinkles(
  responsiveAtomicProperties,
  colorAtomicProperties
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
