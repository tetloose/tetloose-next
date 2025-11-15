import { getBorder } from '@utils/get-border/get-border.utils'
import type { TableProps } from './Table.types'
import { clsx } from 'clsx'
import styles from './Table.module.scss'

export const TableRoot = ({
  modifiers = [],
  layout,
  borderCollapse,
  verticalAlign,
  bg,
  border,
  borderColor,
  hide,
  children,
  ...rest
}: TableProps) => {
  if (hide) return null

  const borders = borderColor && getBorder(border, borderColor)

  return (
    <table
      className={clsx(
        styles['table'],
        bg && styles[`bg-${bg}`],
        layout && styles[`table-layout-${layout}`],
        borderCollapse && styles[`table-border-${borderCollapse}`],
        verticalAlign && styles[`vertical-align-${verticalAlign}`],
        borders && borders.map((name) => styles[name]),
        ...modifiers
      )}
      {...rest}
    >
      {children ?? null}
    </table>
  )
}
