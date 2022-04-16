import { sprinkles } from '@css/sprinkles.css'
import { vars } from '@css/vars.css'
import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const button = recipe({
  base: [sprinkles({ borderRadius: 'rounded' })],
  variants: {
    color: {
      primary: style([
        sprinkles({
          background: 'brand05',
          color: 'brand70',
        }),
        {
          ':hover': {
            background: vars.color.brand10,
          },
          ':focus': {
            background: vars.color.brand10,
          },
          ':active': {
            background: vars.color.brand05,
          },
        },
      ]),
    },
    size: {
      medium: sprinkles({
        px: 4,
        py: 1,
        fontSize: 'base',
      }),
    },
    radius: {
      rounded: sprinkles({
        borderRadius: 'rounded',
      }),
      full: sprinkles({
        borderRadius: 'full',
      }),
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
    radius: 'rounded',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
