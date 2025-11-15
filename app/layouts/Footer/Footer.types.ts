import type { Navigation } from '@components/Navigation/Navigation.types'

export type FooterData = {
  description?: string
} & Navigation

export type FooterProps = Partial<FooterData>
