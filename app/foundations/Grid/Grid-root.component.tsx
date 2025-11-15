import { getBorder } from '@utils/get-border/get-border.utils'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { generateUUID } from '@utils/uuid/uuid.utils'
import { getClassName } from './utils/get-class-name.utils'
import { getStyles } from './utils/get-styles.utils'
import type { GridProps } from './Grid.types'
import { clsx } from 'clsx'
import styles from './Grid.module.scss'

export const GridRoot = ({
  modifiers = [],
  tag = 'main',
  bg,
  border,
  borderColor,
  height,
  rows,
  columns,
  children,
  ...rest
}: GridProps) => {
  const id = generateUUID()
  const Element = tag
  const className = getClassName(styles['grid'], id)
  const borders = borderColor && getBorder(border, borderColor)
  const heights = getBreakpoints('height', height)

  const inlineStyles = getStyles({
    className,
    rows,
    columns,
    template: true
  })

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: inlineStyles }} />

      <Element
        className={clsx(
          styles['grid'],
          bg && styles[`bg-${bg}`],
          ...((borders && borders.map((border) => styles[border])) || []),
          ...((heights && heights.map((height) => styles[height])) || []),
          className,
          ...modifiers
        )}
        {...rest}
      >
        {children}
      </Element>
    </>
  )
}
