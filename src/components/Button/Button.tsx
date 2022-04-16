import { button, ButtonVariants } from '@components/Button/Button.css'
import clsx from 'clsx'
import type { HTMLProps, ReactNode } from 'react'

export type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'color' | 'type'> &
  ButtonVariants & {
    children: ReactNode
    type?: 'submit' | 'reset' | 'button'
  }

export const Button = ({
  children,
  className,
  type = 'button',
  color,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        className,
        button({
          color,
        })
      )}
      {...props}
    >
      {children}
    </button>
  )
}
