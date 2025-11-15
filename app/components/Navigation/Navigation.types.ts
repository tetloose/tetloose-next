import type { LinkRel, LinkTarget } from '@atoms/Link/Link.types'
import type { LinkVariant } from '@atoms/Link/Link.types'
import type { GlobalModifiers } from '@global/global.types'

type Variant = 'inline'

export type NavigationVariant = {
  variant?: Variant
}

export type NavigationItem = {
  id?: number
  href?: string
  title?: string
  target?: LinkTarget
  rel?: LinkRel
  subNav?: NavigationItem[]
}

export type Navigation = {
  navigation?: NavigationItem[]
}

export type NavigationProps = {
  linkVariant?: LinkVariant
} & GlobalModifiers &
  NavigationVariant &
  Navigation
