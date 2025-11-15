import type { NavProps } from './Nav.types'
import { clsx } from 'clsx'

const NavWrapper = ({ modifiers = [], children }: NavProps) => {
  return <nav className={clsx(...modifiers)}>{children}</nav>
}

const NavUl = ({ modifiers = [], children }: NavProps) => {
  return <ul className={clsx(...modifiers)}>{children}</ul>
}

const NavLi = ({ modifiers = [], children }: NavProps) => {
  return <li className={clsx(...modifiers)}>{children}</li>
}

export const Nav = Object.assign(NavWrapper, {
  Ul: NavUl,
  Li: NavLi
})
