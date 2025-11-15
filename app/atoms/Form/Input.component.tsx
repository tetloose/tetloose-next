import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { InputProps } from './Form.types'
import { clsx } from 'clsx'
import styles from './Form.module.scss'

export const Input = ({
  modifiers = [],
  variant = 'primary',
  type = 'text',
  padding,
  margin,
  error = false,
  ...rest
}: InputProps) => {
  return (
    <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
      <input
        type={type}
        className={clsx(
          styles['form__input'],
          styles[`is-${variant}`],
          error && styles['has-error'],
          ...modifiers
        )}
        {...rest}
      />
    </Spacer>
  )
}
