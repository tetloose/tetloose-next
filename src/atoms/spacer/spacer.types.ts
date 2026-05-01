import type {
  GlobalChildren,
  GlobalClassName,
  GlobalDisplayProps,
  GlobalMarginTopProps,
  GlobalPaddingTopProps
} from '@global/global.types'

export type SpacerProps = GlobalChildren &
  GlobalClassName &
  GlobalDisplayProps &
  GlobalMarginTopProps &
  GlobalPaddingTopProps
