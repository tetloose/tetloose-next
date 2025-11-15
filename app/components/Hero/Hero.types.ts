import type { Image } from '@atoms/Image/Image.types'
import type { TypographyProps } from '@foundations/Typography/Typography.types'
import type { GlobalModifiers } from '@global/global.types'

export type Hero = {
  title?: TypographyProps
} & Image

export type HeroProps = Hero & GlobalModifiers
