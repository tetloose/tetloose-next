import type { ButtonProps } from '@atoms/button/button.types'
import type { GlobalChildren, GlobalClassName } from '@global/global.types'
import type {
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'

type Error = {
  error?: boolean
}

export type Options = {
  text: string
} & OptionHTMLAttributes<HTMLOptionElement>

export type FormProps = FormHTMLAttributes<HTMLFormElement> & GlobalChildren

export type FormActionsProps = {
  submit?: Pick<ButtonProps, 'variant' | 'label' | 'disabled'>
  reset?: Pick<ButtonProps, 'variant' | 'label' | 'disabled'>
} & GlobalChildren &
  GlobalClassName

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> &
  Error &
  GlobalChildren & {
    label?: string
  }

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Error & {
    type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url'
  }

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  Error & {
    options: Options[]
  }

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Error

export type RadioCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Error & {
    label?: string
  }
