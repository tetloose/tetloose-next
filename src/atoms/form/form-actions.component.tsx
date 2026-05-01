import { Button } from '@atoms/button/button.component'
import { FORM_ACTIONS_BASE } from './form.variants'
import type { FormActionsProps } from './form.types'
import clsx from 'clsx'

export const FormActions = ({ className, submit, reset, children }: FormActionsProps) => {
  if (!submit && !reset) return null

  return (
    <div className={clsx(FORM_ACTIONS_BASE, className)}>
      {submit ? <Button {...submit} type={'submit'} /> : null}
      {reset ? <Button {...reset} type={'reset'} /> : null}
      {children ?? null}
    </div>
  )
}
