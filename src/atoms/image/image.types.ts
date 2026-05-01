import type { GlobalClassName } from '@global/global.types'

export type ImageFit = 'object-cover' | 'object-contain'

export type ImagePosition =
  | 'object-center'
  | 'object-top'
  | 'object-bottom'
  | 'object-left'
  | 'object-left-top'
  | 'object-left-bottom'
  | 'object-right'
  | 'object-right-top'
  | 'object-right-bottom'

export type ImageRatio = 'aspect-square' | 'aspect-[3/2]' | 'aspect-[4/3]' | 'aspect-video' | 'aspect-[21/9]'

export type ImageProps = {
  src?: string
  width?: number
  height?: number
  alt?: string
  fit?: ImageFit
  position?: ImagePosition
  ratio?: ImageRatio
} & GlobalClassName

export type ImageData = {
  image?: Pick<ImageProps, 'src' | 'width' | 'height' | 'alt'>
}
