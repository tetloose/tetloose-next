import type { TYPOGRAPHY_ALIGN, TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT } from './typography.variants'
import type { GlobalChildren, GlobalClassName, GlobalDisplayProps, GlobalTextColorProps } from '@global/global.types'

export type TypographyTag = (typeof TYPOGRAPHY_TAG)[number]
export type TypographySize = (typeof TYPOGRAPHY_SIZE)[number]
export type TypographyWeight = (typeof TYPOGRAPHY_WEIGHT)[number]
export type TypographyAlign = (typeof TYPOGRAPHY_ALIGN)[number]

export type TypographyProps = {
  tag?: TypographyTag
  text?: string
  size?: TypographySize
  weight?: TypographyWeight
  align?: TypographyAlign
} & GlobalChildren &
  GlobalClassName &
  GlobalDisplayProps &
  GlobalTextColorProps
