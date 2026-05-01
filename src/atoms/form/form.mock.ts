import type { Options } from './form.types'

export const formDefaultValues = {
  username: '',
  email: '',
  password: '',
  message: '',
  color: '',
  accept: false
}

export const formSelectOptions: Options[] = [
  { text: 'Select a colour', value: '' },
  { text: 'Blue', value: 'blue' },
  { text: 'Green', value: 'green' },
  { text: 'Pink', value: 'pink' }
]
