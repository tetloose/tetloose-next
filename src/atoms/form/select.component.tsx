import { FORM_FIELD_BASE, FORM_FIELD_ERROR } from './form.variants'
import type { SelectProps } from './form.types'
import clsx from 'clsx'

export const Select = ({ className, options, error, ...rest }: SelectProps) => {
  if (!options) return

  return (
    <select
      className={clsx(error ? FORM_FIELD_ERROR : FORM_FIELD_BASE, className)}
      aria-invalid={error || undefined}
      {...rest}
    >
      {options.map(({ text, ...restOptions }) => (
        <option key={text} {...restOptions}>
          {text}
        </option>
      ))}
    </select>
  )
}
