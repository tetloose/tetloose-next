import type { ImageProps } from '@atoms/Image/Image.types'
import type { GlobalStringId } from '@global/global.types'

export type CommonVideoOptions = {
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
}

export type VideoControls = {
  controls?: boolean
}

export type VideoOptions = {
  playsInline?: boolean
  poster?: string
  preload?: 'auto' | 'metadata' | 'none'
} & CommonVideoOptions &
  VideoControls

export type VideoProps = VideoOptions & Omit<ImageProps, 'alt' | 'position'>

export type VideoEmbedProps = GlobalStringId &
  CommonVideoOptions &
  VideoControls &
  Omit<VideoProps, 'sourceUrl' | 'width' | 'height'>
