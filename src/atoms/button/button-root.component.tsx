'use client'

import { BUTTON_BASE, BUTTON_VARIANTS } from './button.variants'
import type { ButtonProps } from './button.types'
import clsx from 'clsx'

export const ButtonRoot = ({ className, variant, label, type = 'button', children, ...rest }: ButtonProps) => {
  return (
    <button className={clsx(BUTTON_BASE, variant && BUTTON_VARIANTS[variant], className)} type={type} {...rest}>
      {label ?? null}
      {children ?? null}
    </button>
  )
}
