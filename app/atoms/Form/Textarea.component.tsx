import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { TextareaProps } from './Form.types'
import { clsx } from 'clsx'
import styles from './Form.module.scss'

export const Textarea = ({
  modifiers = [],
  variant = 'primary',
  padding,
  margin,
  error = false,
  ...rest
}: TextareaProps) => {
  return (
    <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
      <textarea
        className={clsx(
          styles['form__input'],
          styles['is-textarea'],
          styles[`is-${variant}`],
          error && styles['has-error'],
          ...modifiers
        )}
        {...rest}
      />
    </Spacer>
  )
}
