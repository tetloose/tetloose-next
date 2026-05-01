import NextLink from 'next/link'
import { LINK_BASE } from './link.variants'
import type { LinkProps } from './link.types'
import clsx from 'clsx'

export const Link = ({ color = 'text-black', className, text, children, ...rest }: LinkProps) => (
  <NextLink className={clsx(LINK_BASE, color, className)} {...rest}>
    {text}
    {children ?? null}
  </NextLink>
)
