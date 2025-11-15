import { Nav } from '@foundations/Nav/Nav.component'
import { Link } from '@atoms/Link/Link.component'
import type { NavigationProps } from './Navigation.types'
import styles from './Navigation.module.scss'

export const Navigation = ({
  modifiers = [],
  variant,
  linkVariant = 'primary',
  navigation
}: NavigationProps) => {
  if (!navigation) return

  return (
    <Nav
      modifiers={[
        styles['navigation'],
        ...modifiers,
        variant ? styles[variant] : ''
      ]}
    >
      <Nav.Ul>
        {navigation.map(({ id, href, title, target, subNav }) => (
          <Nav.Li key={id}>
            <Link
              variant={linkVariant}
              href={href ?? ''}
              target={target}
              title={title}
              activeClass={styles['is-active']}
            />
            {subNav ? (
              <Nav.Ul>
                {subNav.map(({ id, href, title, target }) => (
                  <Nav.Li key={id}>
                    <Link
                      variant={linkVariant}
                      href={href ?? ''}
                      target={target}
                      title={title}
                      activeClass={styles['is-active']}
                    />
                  </Nav.Li>
                ))}
              </Nav.Ul>
            ) : null}
          </Nav.Li>
        ))}
      </Nav.Ul>
    </Nav>
  )
}
