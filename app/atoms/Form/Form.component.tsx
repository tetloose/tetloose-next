import { Checkbox } from './Checkbox.component'
import { FormActions } from './Form-actions.component'
import { FormRoot } from './Form-root.component'
import { Input } from './Input.component'
import { Label } from './Label.component'
import { Radio } from './Radio.component'
import { Select } from './Select.component'
import { Textarea } from './Textarea.component'

export const Form = Object.assign(FormRoot, {
  Actions: FormActions,
  Label,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Select
})
