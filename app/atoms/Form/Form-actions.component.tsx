import { Row } from '@foundations/Row/Row.component'
import { Button } from '@atoms/Button/Button.component'
import type { FormActionsProps } from './Form.types'

export const FormActions = ({
  modifiers = [],
  layout,
  submit,
  reset,
  children
}: FormActionsProps) => {
  if (!submit && !reset) return null

  return (
    <Row modifiers={[...modifiers]}>
      <Row.Column tag={'span'} {...layout}>
        {submit ? <Button {...submit} type={'submit'} /> : null}
        {reset ? <Button {...reset} type={'reset'} /> : null}
        {children ?? null}
      </Row.Column>
    </Row>
  )
}
