import { sprinkles, Sprinkles } from '@css/sprinkles.css'
import clsx from 'clsx'
import type { AllHTMLAttributes, ReactNode } from 'react'

export type BoxProps = Sprinkles &
  AllHTMLAttributes<HTMLElement> & {
    children: ReactNode
    as?: keyof JSX.IntrinsicElements
  }

export const Box = ({
  children,
  className,
  as: Tag = 'div',
  ...rest
}: BoxProps) => {
  const { atomicProps, nativeProps } = Object.entries(rest).reduce<{
    atomicProps: Record<string, unknown>
    nativeProps: Record<string, unknown>
  }>(
    (acc, [key, value]) => {
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        acc.atomicProps[key] = value
      } else {
        acc.nativeProps[key] = value
      }
      return acc
    },
    {
      atomicProps: {},
      nativeProps: {},
    }
  )
  return (
    <Tag {...nativeProps} className={clsx(sprinkles(atomicProps), className)}>
      {children}
    </Tag>
  )
}
