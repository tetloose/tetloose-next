import type { ApiUrlProps } from '@crud/Api/api-url.types'
import type { RequestNextOptions } from '@crud/Request/request.types'
import type { Size } from '@utils/get-breakpoints/get-breakpoints.types'
import type { ReactNode } from 'react'

export type GlobalModifiers = {
  modifiers?: string[]
}

export type GlobalChildren = {
  children?: ReactNode | ReactNode[]
}

export type GlobalFontSize = {
  size?: Size
}

export type Color = 'black' | 'white' | 'red'

export type BgColor = 'black' | 'white'

export type BorderColor = 'black' | 'white'

export type GlobalColor = {
  color?: Color
}

export type GlobalBg = {
  bg?: BgColor
}

export type Tags =
  | 'main'
  | 'div'
  | 'nav'
  | 'span'
  | 'section'
  | 'article'
  | 'footer'
  | 'header'
  | 'aside'

export type GlobalHtmlTag = {
  tag?: Tags
}

export type Directions = 'top' | 'right' | 'bottom' | 'left'

export type GlobalFetchProps = Pick<
  ApiUrlProps,
  'url' | 'params' | 'resource'
> &
  RequestNextOptions

export type GlobalPageProps = {
  params: {
    slug?: string[]
  }
}

export type GlobalStringId = {
  id?: string
}
