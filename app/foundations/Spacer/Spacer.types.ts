import type { GlobalChildren, GlobalModifiers } from '@global/global.types'
import type { BreakpointDisplay } from '@utils/get-breakpoints/get-breakpoints.types'
import type { BreakpointSpacers } from '@utils/get-breakpoints/get-breakpoints.types'
import type { Ref } from 'react'

export type SpacerValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type Spacers = {
  margin?: BreakpointSpacers
  padding?: BreakpointSpacers
}

export type SpacerProps = {
  ref?: Ref<HTMLElement>
} & GlobalChildren &
  GlobalModifiers &
  BreakpointDisplay &
  Spacers

export type SpacerWrapperProps = GlobalChildren & Spacers & BreakpointDisplay
