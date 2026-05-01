import type { TypographyProps } from './typography.types'
import clsx from 'clsx'

export const Typography = ({
  tag: Tag = 'span',
  display,
  color = 'text-black',
  size,
  weight,
  align,
  className,
  text,
  children
}: TypographyProps) => (
  <Tag className={clsx(display, color, size, weight, align, className)}>
    {text}
    {children ?? null}
  </Tag>
)
