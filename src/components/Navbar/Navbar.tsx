import { Container } from '@components/Container'
import { Logo } from '@components/Logo'
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuLink,
  MenuPopover,
  useMenuButtonContext,
} from '@reach/menu-button'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Link, { LinkProps } from 'next/link'
import { FC, ReactNode, useRef } from 'react'
import {
  header,
  headerContainer,
  headerInnerWrapper,
  menuButton,
  menuButtonIcon,
  menuPopover,
  mobileLink,
  mobileLinks,
  mobileMenu,
  nav,
  navLink,
} from './Navbar.css'

const navItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/posts',
    label: 'Posts',
  },
]

interface NavLinkMobileProps extends LinkProps {
  children: ReactNode
}

const NavLinkMobile = ({ children, ...props }: NavLinkMobileProps) => (
  <Link {...props}>
    <a className={mobileLink}>{children}</a>
  </Link>
)

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <Link {...props}>
      <a className={navLink}>{children}</a>
    </Link>
  )
}

const MobileMenu = () => {
  const shouldReduceMotion = useReducedMotion()
  const { isExpanded } = useMenuButtonContext()
  return (
    <>
      <MenuButton className={menuButton}>
        <svg
          strokeWidth="2"
          viewBox="0 0 24 24"
          fill="none"
          className={menuButtonIcon}
        >
          <motion.path
            d="M18 12.5C18.2761 12.5 18.5 12.2761 18.5 12C18.5 11.7239 18.2761 11.5 18 11.5C17.7239 11.5 17.5 11.7239 17.5 12C17.5 12.2761 17.7239 12.5 18 12.5Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isExpanded ? 'open' : 'closed'}
            variants={{
              closed: { opacity: 1, y: 0 },
              open: { opacity: 0, y: -7 },
            }}
          />
          <motion.path
            d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isExpanded ? 'open' : 'closed'}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            d="M6 12.5C6.27614 12.5 6.5 12.2761 6.5 12C6.5 11.7239 6.27614 11.5 6 11.5C5.72386 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.72386 12.5 6 12.5Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isExpanded ? 'open' : 'closed'}
            variants={{
              closed: { opacity: 1, y: 0 },
              open: { opacity: 0, y: 7 },
            }}
          />
        </svg>
        <svg
          strokeWidth="2"
          viewBox="0 0 24 24"
          fill="none"
          className={menuButtonIcon}
        >
          <motion.path
            d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isExpanded ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, rotate: 0 },
              closed: { opacity: 0, rotate: 360 },
            }}
          />
        </svg>
      </MenuButton>
      <AnimatePresence>
        {isExpanded && (
          <MenuPopover
            className={menuPopover}
            position={(r) => ({
              top: Number(r?.top) + Number(r?.height) + 25,
              left: 0,
              right: 0,
              bottom: 0,
            })}
            style={{ display: 'block' }}
          >
            <motion.div
              key="menu"
              className={mobileMenu}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.15,
                ease: 'linear',
              }}
            >
              <MenuItems className={mobileLinks}>
                {navItems.map(({ href, label }) => (
                  <MenuLink key={href} href={href} as={NavLinkMobile}>
                    {label}
                  </MenuLink>
                ))}
              </MenuItems>
            </motion.div>
          </MenuPopover>
        )}
      </AnimatePresence>
    </>
  )
}

export const Navbar: FC = () => {
  const ref = useRef<HTMLElement>(null)
  return (
    <header className={header} ref={ref}>
      <Container>
        <div className={headerContainer}>
          <div className={headerInnerWrapper}>
            <Logo />
            <div className="md:hidden">
              <Menu>
                <MobileMenu />
              </Menu>
            </div>
          </div>
          <nav className={nav}>
            {navItems.map(({ label, href }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}
