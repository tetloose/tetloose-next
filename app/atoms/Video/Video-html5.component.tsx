import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { VideoProps } from './Video.types'
import { clsx } from 'clsx'
import styles from './Video.module.scss'

export const Html5 = ({
  modifiers = [],
  src,
  width,
  height,
  size,
  ratio,
  controls,
  autoPlay,
  muted,
  loop,
  playsInline,
  poster,
  preload,
  ...rest
}: VideoProps) => {
  const imageSize = getBreakpoints('image-size', size)
  const ratios = getBreakpoints('ratio', ratio)

  return (
    <video
      className={clsx(
        styles['video'],
        imageSize ? imageSize.map((size) => styles[size]) : '',
        ratios ? ratios.map((ratio) => styles[ratio]) : '',
        ...modifiers
      )}
      src={src}
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      poster={poster}
      preload={preload}
      {...rest}
    />
  )
}
