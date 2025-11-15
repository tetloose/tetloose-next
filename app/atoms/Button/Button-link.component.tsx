import Link from 'next/link'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { ButtonLinkProps } from './Button.types'
import { clsx } from 'clsx'
import styles from './Button.module.scss'

export const ButtonLink = ({
  modifiers = [],
  variant,
  width,
  gap,
  align,
  justify,
  textAlign,
  fontWeight,
  textTransform,
  href,
  rel,
  target,
  label,
  children,
  ...rest
}: ButtonLinkProps) => {
  const justifys = getBreakpoints('justify', justify)
  const aligns = getBreakpoints('align', align)
  const gaps = getBreakpoints('gap', gap)
  const widths = getBreakpoints('width', width)
  const textAligns = getBreakpoints('text-align', textAlign)

  return (
    <Link
      href={href}
      rel={rel ? rel : target === '_blank' ? 'noopener noreferrer' : undefined}
      target={target}
      className={clsx(
        styles['button'],
        variant && styles[variant],
        fontWeight ? styles[`font-weight-${fontWeight}`] : undefined,
        textTransform ? styles[`text-transform-${textTransform}`] : undefined,
        ...(aligns.map((align) => styles[align]) || []),
        ...(justifys.map((justify) => styles[justify]) || []),
        ...(gaps.map((gap) => styles[gap]) || []),
        ...(widths.map((width) => styles[width]) || []),
        ...(widths.map((width) => styles[width]) || []),
        ...(textAligns.map((textAlign) => styles[textAlign]) || []),
        ...modifiers
      )}
      {...rest}
    >
      {label ?? null}
      {children ?? null}
    </Link>
  )
}
