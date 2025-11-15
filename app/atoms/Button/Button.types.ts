import type { FontStyles } from '@foundations/Typography/Typography.types'
import type { GlobalChildren, GlobalModifiers } from '@global/global.types'
import type {
  BreakpointFlexAlign,
  BreakpointGap,
  BreakpointJustify,
  Breakpoints
} from '@utils/get-breakpoints/get-breakpoints.types'
import type { BreakpointTextAlign } from '@utils/get-breakpoints/get-breakpoints.types'
import type { LinkProps as NextLinkProps } from 'next/link'
import type { ButtonHTMLAttributes } from 'react'

type ButtonType = 'button' | 'submit' | 'reset'

type Width = 'auto' | 'full'

type LinkTarget = '_self' | '_blank' | '_parent' | '_top'

type SharedProps = {
  variant?: ButtonVariant
  label?: string
} & GlobalModifiers &
  ButtonWidth &
  GlobalChildren &
  Pick<FontStyles, 'fontWeight' | 'textTransform'> &
  BreakpointTextAlign &
  BreakpointFlexAlign &
  BreakpointJustify &
  BreakpointGap

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonWidth = {
  width?: {
    [key in Breakpoints]?: Width
  }
}

export type ButtonProps = {
  type?: ButtonType
} & SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonLinkProps = {
  href: string
  target?: LinkTarget
  rel?: string
} & SharedProps &
  Omit<NextLinkProps, 'href'>
