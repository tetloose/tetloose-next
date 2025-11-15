import type { ButtonProps } from '@atoms/Button/Button.types'
import type { ColumnProps } from '@foundations/Row/Row.types'
import type { Spacers } from '@foundations/Spacer/Spacer.types'
import type { TypographyProps } from '@foundations/Typography/Typography.types'
import type { GlobalChildren, GlobalModifiers } from '@global/global.types'
import type {
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'

type Inputs = {
  layout?: Omit<ColumnProps, 'children' | 'tag'>
  submit?: Pick<ButtonProps, 'variant' | 'label' | 'disabled'>
  reset?: Pick<ButtonProps, 'variant' | 'label' | 'disabled'>
}

type InputType = {
  type?: 'number' | 'password' | 'tel' | 'text' | 'url'
}

type Error = {
  error?: boolean
}

type variant = 'primary'

export type FormVariant = {
  variant?: variant
}

export type FormProps = FormHTMLAttributes<HTMLFormElement> &
  GlobalChildren &
  GlobalModifiers

export type FormActionsProps = Inputs & GlobalChildren & GlobalModifiers

export type SharedFormProps = GlobalModifiers & FormVariant & Spacers & Error

export type LabelProps = {
  label?: Pick<
    TypographyProps,
    | 'size'
    | 'color'
    | 'text'
    | 'fontWeight'
    | 'fontStyle'
    | 'textTransform'
    | 'whiteSpace'
    | 'textAlign'
    | 'children'
  >
} & LabelHTMLAttributes<HTMLLabelElement> &
  Omit<SharedFormProps, 'variant'>

export type RadioCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> &
  LabelProps

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  InputType &
  SharedFormProps

export type Options = {
  text: string
} & OptionHTMLAttributes<HTMLOptionElement>

export type SelectProps = {
  options: Options[]
} & SelectHTMLAttributes<HTMLSelectElement> &
  SharedFormProps

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  SharedFormProps
