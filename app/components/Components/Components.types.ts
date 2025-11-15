import type { Hero } from '@components/Hero/Hero.types'
import type { RichText } from '@components/RichText/RichText.types'

type Layout = 'hero' | 'richText'

export type Components = {
  layout: Layout
} & Hero &
  RichText

export type ComponentsProps = {
  components?: Components[]
}
