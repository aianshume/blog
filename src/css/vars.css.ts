import { createGlobalTheme } from '@vanilla-extract/css'

const space = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  13: '3.25rem', // 52px
  14: '3.5rem', // 56px
  15: '3.75rem', // 60px
  16: '4rem', // 64px
  17: '4.25rem', // 68px
  18: '4.5rem', // 72px
  19: '4.75rem', // 76px
  20: '5rem', // 80px
  '-1': '-0.25rem', // -4px
  '-2': '-0.5rem', // -8px
  '-3': '-0.75rem', // -12px
  '-4': '-1rem', // -16px
  '-5': '-1.25rem', // -20px
  '-6': '-1.5rem', // -24px
  '-7': '-1.75rem', // -28px
  '-8': '-2rem', // -32px
  '-9': '-2.25rem', // -36px
  '-10': '-2.5rem', // -40px
  '-11': '-2.75rem', // -44px
  '-12': '-3rem', // -48px
  '-13': '-3.25rem', // -52px
  '-14': '-3.5rem', // -56px
  '-15': '-3.75rem', // -60px
  '-16': '-4rem', // -64px
  '-17': '-4.25rem', // -68px
  '-18': '-4.5rem', // -72px
  '-19': '-4.75rem', // -76px
  '-20': '-5rem', // -80px
  full: '100%',
  auto: 'auto',
}

export const vars = createGlobalTheme(':root', {
  space,
  borderRadius: {
    rounded: space['1'],
    full: '999px',
    none: '0',
  },
  color: {
    white: '#fff',
    black: '#000',
    // Orange scale
    brand025: `hsla(29, 90%, 98%, 1)`,
    brand05: `hsla(29, 90%, 96%, 1)`,
    brand10: `hsla(30, 90%, 92%, 1)`,
    brand20: `hsla(36, 86%, 83%, 1)`,
    brand30: `hsla(27, 89%, 72%, 1)`,
    brand40: `hsla(23, 88%, 61%, 1)`,
    brand50: `hsla(21, 87%, 53%, 1)`,
    brand60: `hsla(17, 82%, 48%, 1)`,
    brand70: `hsla(13, 80%, 40%, 1)`,
    brand80: `hsla(11, 71%, 34%, 1)`,
    brand90: `hsla(11, 67%, 28%, 1)`,
    // Gray scale
    gray025: `hsla(59, 10%, 99%, 1)`,
    gray05: `hsla(59, 10%, 98%, 1)`,
    gray10: `hsla(59, 6%, 96%, 1)`,
    gray20: `hsla(19, 7%, 90%, 1)`,
    gray30: `hsla(23, 7%, 83%, 1)`,
    gray40: `hsla(23, 6%, 64%, 1)`,
    gray50: `hsla(24, 6%, 45%, 1)`,
    gray60: `hsla(32, 6%, 32%, 1)`,
    gray70: `hsla(29, 7%, 25%, 1)`,
    gray80: `hsla(11, 7%, 15%, 1)`,
    gray90: `hsla(23, 11%, 10%, 1)`,
  },
  fontFamily: {
    main: 'Inter, system-ui',
    alt: 'Inter var, system-ui',
  },
  gridRepeat: {
    '4x': 'repeat(4, 1fr)',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    normal: '400',
    semibold: '500',
    bold: '700',
  },
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  },
})
