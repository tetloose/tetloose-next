import type { TypographyProps } from '@foundations/Typography/Typography.types'
import type { GlobalChildren, GlobalModifiers } from '@global/global.types'
import type { LinkProps as NextLinkProps } from 'next/link'
import type { RefAttributes } from 'react'

export type LinkTarget = '_self' | '_blank' | '_parent' | '_top'

export type LinkVariant = 'primary' | 'secondary'

export type LinkRel =
  | 'noopener'
  | 'noreferrer'
  | 'nofollow'
  | 'ugc'
  | 'sponsored'
  | 'external'
  | 'noopener noreferrer'

export type LinkProps = {
  variant?: LinkVariant
  typography?: Omit<
    TypographyProps,
    'modifiers' | 'tag' | 'richtext' | 'color' | 'text' | 'linkVariant'
  >
  title?: string
  target?: LinkTarget
  rel?: LinkRel
  activeClass?: string
} & GlobalModifiers &
  GlobalChildren &
  NextLinkProps &
  RefAttributes<HTMLAnchorElement>

export type ContentLink = LinkProps
