import { Typography } from '@foundations/Typography/Typography.component'
import type { LabelProps } from './Form.types'
import { clsx } from 'clsx'
import styles from './Form.module.scss'

export const Label = ({
  modifiers = [],
  label,
  padding,
  margin,
  error = false,
  children,
  ...rest
}: LabelProps) => (
  <label className={clsx(...modifiers)} {...rest}>
    {label && (
      <Typography
        modifiers={[styles['form__label'], error ? styles['has-error'] : '']}
        tag={'span'}
        padding={padding}
        margin={margin}
        {...label}
      />
    )}
    {children ?? null}
  </label>
)
