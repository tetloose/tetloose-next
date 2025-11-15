import type { ComponentsProps } from '@components/Components/Components.types'
import type { RichText } from '@components/RichText/RichText.types'
import type { SeoProps } from '@utils/set-seo/set-seo.types'

export type PageData = {
  date?: number
  title?: string
} & RichText &
  ComponentsProps &
  SeoProps
