import NextImage from 'next/image'
import type { ImageProps } from './image.types'
import clsx from 'clsx'

export const Image = ({ className, src, width, height, alt, fit, position, ratio }: ImageProps) => {
  if (!src) return

  return (
    <NextImage
      className={clsx('h-auto w-full', fit, position, ratio, className)}
      src={src}
      width={width}
      height={height}
      alt={alt ?? ''}
      loading={'lazy'}
      sizes={'(min-width:1280px) 1024px, (min-width:768px) 768px, (min-width:480px) 480px, 100vw'}
    />
  )
}
