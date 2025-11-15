import type { EXPORT_NAMEProps } from './COMPONENT_NAME.types'
import { clsx } from 'clsx'
import styles from './COMPONENT_NAME.module.scss'

export const EXPORT_NAME = ({
  variants,
  modifiers = [],
  children,
  ...rest
}: EXPORT_NAMEProps) => {
  return (
    <div
      className={clsx(
        styles['CLASS_NAME'],
        variants ? variants.map((variant) => styles[variant]) : '',
        ...modifiers
      )}
      {...rest}
    >
      Happy Coding!
      {children ? children : null}
    </div>
  )
}
