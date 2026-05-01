import { FORM_FIELD_BASE, FORM_FIELD_ERROR } from './form.variants'
import type { TextareaProps } from './form.types'
import clsx from 'clsx'

export const Textarea = ({ className, error, ...rest }: TextareaProps) => (
  <textarea
    className={clsx(error ? FORM_FIELD_ERROR : FORM_FIELD_BASE, className)}
    aria-invalid={error || undefined}
    {...rest}
  />
)
