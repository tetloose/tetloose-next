import { FORM_CHECK_BASE } from './form.variants'
import { Label } from './label.component'
import type { RadioCheckboxProps } from './form.types'
import clsx from 'clsx'

export const Checkbox = ({ className, label, error, ...rest }: RadioCheckboxProps) => (
  <Label error={error} className={clsx(FORM_CHECK_BASE, className)}>
    <input type={'checkbox'} aria-invalid={error || undefined} {...rest} />
    {label}
  </Label>
)
