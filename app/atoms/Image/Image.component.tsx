import NextImage from 'next/image'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { ImageProps } from './Image.types'
import { clsx } from 'clsx'
import styles from './Image.module.scss'

export const Image = ({
  modifiers = [],
  src,
  width,
  height,
  alt,
  size,
  ratio,
  position
}: ImageProps) => {
  const imageSize = getBreakpoints('image-size', size)
  const positions = getBreakpoints('image-position', position)
  const ratios = getBreakpoints('ratio', ratio)

  if (!src) return

  return (
    <NextImage
      className={clsx(
        styles['image'],
        imageSize ? imageSize.map((size) => styles[size]) : [],
        positions ? positions.map((position) => styles[position]) : [],
        ratios ? ratios.map((ratio) => styles[ratio]) : [],
        ...modifiers
      )}
      src={src}
      width={width}
      height={height}
      alt={alt ?? ''}
      loading={'lazy'}
      sizes={
        '(min-width:1280px) 1024px, (min-width:768px) 768px, (min-width:480px) 480px, 100vw'
      }
    />
  )
}
