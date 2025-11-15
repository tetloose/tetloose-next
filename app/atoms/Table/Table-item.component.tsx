import { createElement } from 'react'
import { getBorder } from '@utils/get-border/get-border.utils'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { TableItemProps } from './Table.types'
import { clsx } from 'clsx'
import styles from './Table.module.scss'

export const TableItem = ({
  modifiers = [],
  tag = 'td',
  bg,
  border,
  borderColor,
  textAlign,
  hide,
  children,
  ...rest
}: TableItemProps) => {
  if (hide) return null

  const borders = borderColor && getBorder(border, borderColor)
  const textAligns = getBreakpoints('text-align', textAlign)

  return createElement(
    tag,
    {
      className: clsx(
        styles['table-item'],
        styles[tag],
        bg && styles[`bg-${bg}`],
        ...((borders && borders.map((border) => styles[border])) || []),
        ...(textAligns.map((textAlign) => styles[textAlign]) || []),
        ...modifiers
      ),
      ...rest
    },
    children ?? null
  )
}
