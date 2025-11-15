import type { FormProps } from './Form.types'
import { clsx } from 'clsx'
import styles from './Form.module.scss'

export const FormRoot = ({ modifiers = [], children, ...rest }: FormProps) => {
  if (!children) return

  return (
    <form className={clsx(styles['form'], ...modifiers)} {...rest}>
      {children}
    </form>
  )
}
