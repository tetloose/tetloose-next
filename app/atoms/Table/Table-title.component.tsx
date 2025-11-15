import { Typography } from '@foundations/Typography/Typography.component'
import type { TableTitleProps } from './Table.types'
import styles from './Table.module.scss'

export const TableTitle = (props: TableTitleProps) => {
  const { modifiers = [] } = props

  return (
    <Typography
      tag={'span'}
      {...props}
      modifiers={[styles['table-title'], ...modifiers]}
    />
  )
}
