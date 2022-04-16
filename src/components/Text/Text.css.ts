import { sprinkles } from '@css/sprinkles.css'
import { vars } from '@css/vars.css'
import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const text = recipe({
  variants: {
    size: {
      '6xl': style([
        sprinkles({
          fontSize: {
            mobile: '4xl',
            tablet: '5xl',
            desktop: '6xl',
          },
        }),
        {
          lineHeight: 1.2,
        },
      ]),
      '5xl': style([
        sprinkles({
          fontSize: {
            mobile: '4xl',
            tablet: '5xl',
          },
        }),
        {
          lineHeight: 1.25,
        },
      ]),
      '4xl': style([
        sprinkles({
          fontSize: {
            mobile: '3xl',
            tablet: '4xl',
          },
        }),
        {
          lineHeight: 1.26,
        },
      ]),
      '3xl': style([
        sprinkles({
          fontSize: {
            mobile: '2xl',
            tablet: '3xl',
          },
        }),
        {
          lineHeight: 1.26,
        },
      ]),
      '2xl': style([
        sprinkles({
          fontSize: {
            mobile: 'xl',
            tablet: '2xl',
          },
        }),
        {
          lineHeight: 1.33,
        },
      ]),
      xl: style([
        sprinkles({
          fontSize: {
            mobile: 'lg',
            tablet: 'xl',
          },
        }),
        {
          lineHeight: 1.5,
        },
      ]),
      lg: style([
        sprinkles({
          fontSize: 'lg',
        }),
        {
          lineHeight: 1.5,
        },
      ]),
      base: style([
        sprinkles({
          fontSize: 'base',
        }),
        {
          lineHeight: 1.5,
        },
      ]),
      sm: style([
        sprinkles({
          fontSize: 'sm',
        }),
        {
          lineHeight: 1.5,
        },
      ]),
      xs: style([
        sprinkles({
          fontSize: 'xs',
        }),
        {
          lineHeight: 1.5,
        },
      ]),
    },
    weight: {
      bold: {
        fontWeight: vars.fontWeight.bold,
      },
      semibold: {
        fontWeight: vars.fontWeight.semibold,
      },
      normal: {
        fontWeight: vars.fontWeight.normal,
      },
    },
    color: {
      black: sprinkles({
        color: 'black',
      }),
      gray90: sprinkles({
        color: 'gray90',
      }),
      gray70: sprinkles({
        color: 'gray70',
      }),
      gray60: sprinkles({
        color: 'gray60',
      }),
      gray50: sprinkles({
        color: 'gray50',
      }),
      brand70: sprinkles({
        color: 'brand70',
      }),
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'black',
    weight: 'normal',
  },
})
export type TextVariants = RecipeVariants<typeof text>
