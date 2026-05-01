import type { GLOBAL_DISPLAY, GLOBAL_MARGIN_TOP, GLOBAL_PADDING_TOP, GLOBAL_TEXT_COLOR } from './global.constants'
import type { ReactNode } from 'react'

export type GlobalClassName = Readonly<{
  className?: string
}>

export type GlobalChildren = Readonly<{
  children?: ReactNode | ReactNode[]
}>

export type GlobalDisplay = (typeof GLOBAL_DISPLAY)[number]

export type GlobalDisplayProps = Readonly<{
  display?: GlobalDisplay
}>

export type GlobalTextColor = (typeof GLOBAL_TEXT_COLOR)[number]

export type GlobalTextColorProps = Readonly<{
  color?: GlobalTextColor
}>

export type GlobalMarginTop = (typeof GLOBAL_MARGIN_TOP)[number]

export type GlobalMarginTopProps = Readonly<{
  marginTop?: GlobalMarginTop
}>

export type GlobalPaddingTop = (typeof GLOBAL_PADDING_TOP)[number]

export type GlobalPaddingTopProps = Readonly<{
  paddingTop?: GlobalPaddingTop
}>
