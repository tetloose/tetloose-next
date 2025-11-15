import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { SelectProps } from './Form.types'
import { clsx } from 'clsx'
import styles from './Form.module.scss'

export const Select = ({
  modifiers = [],
  variant = 'primary',
  options,
  padding,
  margin,
  error = false,
  ...rest
}: SelectProps) => {
  if (!options) return

  return (
    <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
      <span
        className={clsx(
          styles['form__select'],
          variant ? styles[`is-${variant}`] : '',
          error ? styles['has-error'] : ''
        )}
      >
        <select
          className={clsx(
            styles['form__input'],
            variant ? styles[`is-${variant}`] : '',
            error ? styles['has-error'] : '',
            ...modifiers
          )}
          {...rest}
        >
          {options.map(({ text, ...restOptions }, optionIndex) => (
            <option key={optionIndex} {...restOptions}>
              {text}
            </option>
          ))}
        </select>
      </span>
    </Spacer>
  )
}
