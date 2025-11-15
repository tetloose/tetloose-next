import { getBorder } from '@utils/get-border/get-border.utils'
import { generateUUID } from '@utils/uuid/uuid.utils'
import { getClassName } from './utils/get-class-name.utils'
import { getStyles } from './utils/get-styles.utils'
import type { GridProps } from './Grid.types'
import { clsx } from 'clsx'
import styles from './Grid.module.scss'

export const GridItem = ({
  modifiers = [],
  tag = 'section',
  rows,
  columns,
  bg,
  border,
  borderColor,
  children,
  ...rest
}: GridProps) => {
  const id = generateUUID()
  const Element = tag
  const className = getClassName(styles['grid__item'], id)
  const borders = borderColor && getBorder(border, borderColor)

  const inlineStyles = getStyles({
    className,
    rows,
    columns,
    template: false
  })

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: inlineStyles }} />
      <Element
        className={clsx(
          styles['grid__item'],
          bg && styles[`bg-${bg}`],
          ...((borders && borders.map((border) => styles[border])) || []),
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
