import { Navbar } from '@components/Navbar'
import type { ReactNode } from 'react'

export interface LayoutProps {
  meta?: ReactNode
  children: ReactNode
}

export const Layout = ({ meta, children }: LayoutProps) => {
  return (
    <>
      {meta}
      <Navbar />
      <main>{children}</main>
    </>
  )
}
