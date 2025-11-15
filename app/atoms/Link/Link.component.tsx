'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Typography } from '@foundations/Typography/Typography.component'
import type { LinkProps } from './Link.types'

const normalizePath = (path: string): string => {
  if (!path || path === '/') return '/'

  return path.replace(/\/+$/, '')
}

const getTargetPathname = (href: LinkProps['href']): string => {
  if (typeof href === 'string') return href

  return href?.pathname ?? '/'
}

export const Link = ({
  modifiers = [],
  variant = 'primary',
  href,
  rel = 'noreferrer',
  target,
  title,
  typography,
  activeClass,
  children,
  ref,
  ...rest
}: LinkProps) => {
  const currentPathname = usePathname() || '/'
  const normalizeCurrent = normalizePath(currentPathname)
  const targetPathname = getTargetPathname(href)
  const normalizeTarget = normalizePath(targetPathname)
  const isActive =
    normalizeCurrent === normalizeTarget ||
    normalizeCurrent.startsWith(`${normalizeTarget}/`)

  return (
    <Typography
      tag={'span'}
      linkVariant={variant}
      modifiers={[...modifiers, isActive ? (activeClass ?? '') : '']}
      {...typography}
    >
      <NextLink ref={ref} href={href} rel={rel} target={target} {...rest}>
        {title}
        {children ?? null}
      </NextLink>
    </Typography>
  )
}
