import { ReactNode } from 'react'
import { container } from './Container.css'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className={container}>{children}</div>
)
