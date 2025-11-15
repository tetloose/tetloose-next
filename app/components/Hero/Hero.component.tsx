import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Image } from '@atoms/Image/Image.component'
import type { HeroProps } from './Hero.types'
import styles from './Hero.module.scss'

export const Hero = ({ modifiers = [], image, title, ...rest }: HeroProps) => {
  const { src, width, height, alt = '' } = image ?? {}

  return (
    <Row
      tag={'section'}
      modifiers={[styles['hero'], ...modifiers]}
      align={{ default: 'center' }}
      {...rest}
    >
      <Row.Column>
        {title ? (
          <Typography modifiers={[styles['hero__title']]} {...title} />
        ) : null}
        {image ? (
          <Image
            modifiers={[styles['hero__image']]}
            src={src}
            alt={alt}
            width={width}
            height={height}
            size={{ default: 'cover' }}
            {...image}
          />
        ) : null}
      </Row.Column>
    </Row>
  )
}
