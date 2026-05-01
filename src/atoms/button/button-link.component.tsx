'use client'

import Link from 'next/link'
import { BUTTON_LINK_BASE, BUTTON_VARIANTS } from './button.variants'
import type { LinkProps } from './button.types'
import clsx from 'clsx'

export const ButtonLink = ({ className, variant, label, rel, target, children, ...rest }: LinkProps) => {
  return (
    <Link
      className={clsx(BUTTON_LINK_BASE, variant && BUTTON_VARIANTS[variant], className)}
      rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      target={target}
      {...rest}
    >
      {label ?? null}
      {children ?? null}
    </Link>
  )
}
