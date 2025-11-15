import type { GlobalModifiers } from '@global/global.types'
import type {
  BreakpointImagePosition,
  BreakpointImageSize,
  BreakpointRatios
} from '@utils/get-breakpoints/get-breakpoints.types'

export type ImageProps = {
  src?: string
  width?: number
  height?: number
  alt?: string
} & GlobalModifiers &
  BreakpointImageSize &
  BreakpointRatios &
  BreakpointImagePosition

export type Image = {
  image?: Pick<ImageProps, 'src' | 'width' | 'height' | 'alt'>
}
