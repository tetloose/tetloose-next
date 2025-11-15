import { getBorder } from '@utils/get-border/get-border.utils'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { getPadding } from '@utils/get-padding/get-padding.utils'
import type { ColumnProps } from './Row.types'
import { clsx } from 'clsx'
import styles from './Row.module.scss'

export const Column = ({
  modifiers = [],
  tag = 'div',
  bg,
  border,
  borderColor,
  display,
  align,
  direction,
  justify,
  wrap,
  gap,
  padding,
  width,
  height,
  children,
  ref,
  ...rest
}: ColumnProps) => {
  const Element = tag
  const borders = borderColor && getBorder(border, borderColor)
  const displays = getBreakpoints('display', display)
  const aligns = getBreakpoints('align', align)
  const directions = getBreakpoints('direction', direction)
  const justifys = getBreakpoints('justify', justify)
  const wraps = getBreakpoints('wrap', wrap)
  const gaps = getBreakpoints('gap', gap)
  const heights = getBreakpoints('height', height)
  const widths = getBreakpoints('width', width)
  const paddings = getPadding(padding)

  return (
    <Element
      ref={ref}
      className={clsx(
        styles['row__column'],
        bg && styles[`bg-${bg}`],
        ...((borders && borders.map((border) => styles[border])) || []),
        ...(displays.map((display) => styles[display]) || []),
        ...(aligns.map((align) => styles[align]) || []),
        ...(directions.map((direction) => styles[direction]) || []),
        ...(wraps.map((wrap) => styles[wrap]) || []),
        ...(justifys.map((justify) => styles[justify]) || []),
        ...(gaps.map((gap) => styles[gap]) || []),
        ...(heights.map((height) => styles[height]) || []),
        ...(widths.map((width) => styles[width]) || []),
        ...(paddings.map((padding) => styles[padding]) || []),
        ...modifiers
      )}
      {...rest}
    >
      {children ?? null}
    </Element>
  )
}
