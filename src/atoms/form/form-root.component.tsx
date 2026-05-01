import { FORM_BASE } from './form.variants'
import type { FormProps } from './form.types'
import clsx from 'clsx'

export const FormRoot = ({ className, children, ...rest }: FormProps) => {
  if (!children) return

  return (
    <form className={clsx(FORM_BASE, className)} {...rest}>
      {children}
    </form>
  )
}
