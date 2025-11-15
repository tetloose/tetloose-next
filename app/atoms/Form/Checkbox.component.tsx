import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Label } from './Label.component'
import type { RadioCheckboxProps } from './Form.types'
import { clsx } from 'clsx'
import styles from './Form.module.scss'

export const Checkbox = ({
  modifiers = [],
  color = 'black',
  label,
  padding,
  margin,
  error = false,
  ...rest
}: RadioCheckboxProps) => {
  return (
    <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
      <Label
        modifiers={[
          styles['form__checkbox'],
          color && styles[`is-${color}`],
          error ? styles['has-error'] : '',
          ...modifiers
        ]}
        color={color}
        error={error}
        label={{ ...label }}
      >
        <input
          type={'checkbox'}
          className={clsx(styles['form__checkbox-input'])}
          {...rest}
        />
      </Label>
    </Spacer>
  )
}
