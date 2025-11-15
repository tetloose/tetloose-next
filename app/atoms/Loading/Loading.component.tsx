import type { LoadingProps } from './Loading.types'
import { clsx } from 'clsx'
import styles from './Loading.module.scss'

export const Loading = ({
  modifiers = [],
  color = 'black',
  center,
  ...rest
}: LoadingProps) => {
  return (
    <span
      className={clsx(
        styles['loading'],
        styles[`color-${color}`],
        center && styles['is-center'],
        ...modifiers
      )}
      {...rest}
    />
  )
}
