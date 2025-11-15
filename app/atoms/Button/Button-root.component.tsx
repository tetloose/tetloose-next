'use client'

import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { ButtonProps } from './Button.types'
import { clsx } from 'clsx'
import styles from './Button.module.scss'

export const ButtonRoot = ({
  modifiers = [],
  variant,
  width,
  gap,
  align,
  justify,
  textAlign,
  fontWeight,
  textTransform,
  label,
  type = 'button',
  children,
  ...rest
}: ButtonProps) => {
  const justifys = getBreakpoints('justify', justify)
  const aligns = getBreakpoints('align', align)
  const gaps = getBreakpoints('gap', gap)
  const widths = getBreakpoints('width', width)
  const textAligns = getBreakpoints('text-align', textAlign)

  return (
    <button
      className={clsx(
        styles['button'],
        variant && styles[variant],
        fontWeight ? styles[`font-weight-${fontWeight}`] : undefined,
        textTransform ? styles[`text-transform-${textTransform}`] : undefined,
        ...(aligns.map((align) => styles[align]) || []),
        ...(justifys.map((justify) => styles[justify]) || []),
        ...(gaps.map((gap) => styles[gap]) || []),
        ...(widths.map((width) => styles[width]) || []),
        ...(textAligns.map((textAlign) => styles[textAlign]) || []),
        ...modifiers
      )}
      type={type}
      {...rest}
    >
      {label ?? null}
      {children ?? null}
    </button>
  )
}
