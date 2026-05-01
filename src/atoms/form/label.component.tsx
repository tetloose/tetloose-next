import { FORM_LABEL_BASE, FORM_LABEL_ERROR } from './form.variants'
import type { LabelProps } from './form.types'
import clsx from 'clsx'

export const Label = ({ className, label, error, children, ...rest }: LabelProps) => (
  <label className={clsx(error ? FORM_LABEL_ERROR : FORM_LABEL_BASE, className)} {...rest}>
    {label}
    {children ?? null}
  </label>
)
