import type { ColumnProps, RowProps } from './utils/get-styles.types'
import type {
  GlobalBg,
  GlobalChildren,
  GlobalHtmlTag,
  GlobalModifiers
} from '@global/global.types'
import type { Border } from '@utils/get-border/get-border.types'
import type { BreakpointHeight } from '@utils/get-breakpoints/get-breakpoints.types'

export type GridProps = {
  rows: RowProps
  columns: ColumnProps
} & GlobalModifiers &
  GlobalBg &
  GlobalHtmlTag &
  BreakpointHeight &
  Border &
  GlobalChildren
