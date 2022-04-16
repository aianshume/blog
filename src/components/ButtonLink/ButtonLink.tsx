import { button, ButtonVariants } from '@components/Button/Button.css'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { HTMLProps, ReactNode } from 'react'

export type ButtonLinkProps = LinkProps &
  ButtonVariants &
  Omit<HTMLProps<HTMLAnchorElement>, 'href' | 'color'> & {
    children: ReactNode
  }

export const ButtonLink = ({
  children,
  className,
  href,
  color,
  radius,
  size,
  ...rest
}: ButtonLinkProps) => (
  <Link href={href}>
    <a
      className={clsx(
        className,
        button({
          color,
          radius,
          size,
        })
      )}
      {...rest}
    >
      {children}
    </a>
  </Link>
)
