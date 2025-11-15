import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Label } from './Label.component'
import type { RadioCheckboxProps } from './Form.types'
import { clsx } from 'clsx'
import styles from './Form.module.scss'

export const Radio = ({
  modifiers = [],
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
          styles['form__radio'],
          error ? styles['has-error'] : '',
          ...modifiers
        ]}
        error={error}
        label={{ ...label }}
      >
        <input
          type={'radio'}
          className={clsx(styles['form__radio-input'])}
          {...rest}
        />
      </Label>
    </Spacer>
  )
}
