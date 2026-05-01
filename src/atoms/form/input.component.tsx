import { FORM_FIELD_BASE, FORM_FIELD_ERROR } from './form.variants'
import type { InputProps } from './form.types'
import clsx from 'clsx'

export const Input = ({ className, type = 'text', error, ...rest }: InputProps) => (
  <input
    type={type}
    className={clsx(error ? FORM_FIELD_ERROR : FORM_FIELD_BASE, className)}
    aria-invalid={error || undefined}
    {...rest}
  />
)
