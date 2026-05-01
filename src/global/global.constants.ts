export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const LOCALE = process.env.NEXT_PUBLIC_LOCALE ?? 'en'

export const GLOBAL_DISPLAY = ['block', 'inline-block', 'flex', 'inline-flex'] as const

export const GLOBAL_TEXT_COLOR = ['text-black', 'text-white', 'text-red-500'] as const

export const GLOBAL_MARGIN_TOP = [
  'mt-1',
  'mt-2',
  'mt-3',
  'mt-4',
  'mt-5',
  'mt-6',
  'mt-7',
  'mt-8',
  'mt-9',
  'mt-10',
  'mt-11',
  'mt-12'
] as const

export const GLOBAL_PADDING_TOP = [
  'pt-1',
  'pt-2',
  'pt-3',
  'pt-4',
  'pt-5',
  'pt-6',
  'pt-7',
  'pt-8',
  'pt-9',
  'pt-10',
  'pt-11',
  'pt-12'
] as const
