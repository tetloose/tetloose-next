import { Image } from '@atoms/Image/Image.component'
import { Link } from '@atoms/Link/Link.component'
import type { LogoProps } from './Logo.types'
import styles from './Logo.module.scss'

export const Logo = ({ link, image }: LogoProps) => {
  if (!link || !image) return null

  return (
    <Link
      modifiers={[styles['logo'], ...(link.modifiers || [])]}
      href={'/'}
      typography={{ display: { default: 'block' } }}
    >
      <Image modifiers={[styles['logo__image']]} alt={image?.alt} {...image} />
    </Link>
  )
}
