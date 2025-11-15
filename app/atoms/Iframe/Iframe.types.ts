import type { ImageProps } from '@atoms/Image/Image.types'
import type { IframeHTMLAttributes } from 'react'

export type IframeProps = IframeHTMLAttributes<HTMLIFrameElement> &
  Omit<ImageProps, 'alt' | 'position'>
