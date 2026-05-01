import type { ButtonVariant } from './button.types'

export const BUTTON_BASE =
  'cursor-pointer appearance-none inline-flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:select-none'

export const BUTTON_LINK_BASE = 'cursor-pointer inline-flex items-center justify-center'

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-widest border border-black hover:bg-white hover:text-black disabled:hover:bg-black disabled:hover:text-white transition{background-color,color} duration-200',
  secondary:
    'bg-transparent bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white disabled:hover:bg-white disabled:hover:text-black transition{background-color,color} duration-200'
}
