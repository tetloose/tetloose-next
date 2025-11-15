import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { IframeProps } from './Iframe.types'
import { clsx } from 'clsx'
import styles from './Iframe.module.scss'

export const Iframe = ({
  modifiers = [],
  size,
  ratio,
  ...rest
}: IframeProps) => {
  const imageSize = getBreakpoints('image-size', size)
  const ratios = getBreakpoints('ratio', ratio)

  return (
    <iframe
      className={clsx(
        styles['iframe'],
        imageSize ? imageSize.map((size) => styles[size]) : '',
        ratios ? ratios.map((ratio) => styles[ratio]) : '',
        ...modifiers
      )}
      {...rest}
    />
  )
}
