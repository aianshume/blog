import clsx from 'clsx'
import { createElement, HTMLProps } from 'react'
import { text, TextVariants } from './Text.css'

export type TextProps = Omit<HTMLProps<HTMLElement>, 'size' | 'color'> &
  TextVariants & {
    as?: keyof JSX.IntrinsicElements
    className?: string
  }

export const Text = ({
  as = 'p',
  size,
  children,
  className,
  color,
  weight,
  ...props
}: TextProps) =>
  createElement(
    as,
    { className: clsx(text({ size, color, weight }), className), ...props },
    children
  )
