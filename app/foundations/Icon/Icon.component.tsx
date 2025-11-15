import type { IconProps } from './Icon.types'
import { clsx } from 'clsx'
import styles from './Icon.module.scss'

export const Icon = ({
  modifiers = [],
  name,
  size = 'med',
  color,
  ...rest
}: IconProps) => {
  return (
    <i
      className={clsx(
        styles['icon'],
        styles[name],
        styles[`is-${size}`],
        color && styles[color],
        ...modifiers
      )}
      {...rest}
    />
  )
}
