import { Checkbox } from './checkbox.component'
import { FormActions } from './form-actions.component'
import { FormRoot } from './form-root.component'
import { Input } from './input.component'
import { Label } from './label.component'
import { Radio } from './radio.component'
import { Select } from './select.component'
import { Textarea } from './textarea.component'

export const Form = Object.assign(FormRoot, {
  Actions: FormActions,
  Label,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Select
})
