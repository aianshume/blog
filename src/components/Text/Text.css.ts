import { sprinkles } from '@css/sprinkles.css'
import { vars } from '@css/vars.css'
import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const text = recipe({
  variants: {
    size: {
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
          fontSize: {
            mobile: 'lg',
            tablet: 'base',
          },
        }),
        {
          lineHeight: 1.5,
        },
      ]),
      sm: style([
        sprinkles({
          fontSize: {
            mobile: 'base',
            tablet: 'sm',
          },
        }),
        {
          lineHeight: 1.5,
        },
      ]),
      xs: style([
        sprinkles({
          fontSize: {
            mobile: 'sm',
            tablet: 'xs',
          },
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
      black: vars.color.black,
      brand: vars.color.brand,
      gray: vars.color.gray70,
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'black',
    weight: 'normal',
  },
})
export type TextVariants = RecipeVariants<typeof text>
