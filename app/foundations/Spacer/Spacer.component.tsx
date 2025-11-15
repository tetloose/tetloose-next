import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import type { SpacerProps } from './Spacer.types'
import { clsx } from 'clsx'
import styles from './Spacer.module.scss'

export const Spacer = ({
  modifiers = [],
  display,
  margin,
  padding,
  children,
  ref,
  ...rest
}: SpacerProps) => {
  if (!margin && !padding && !display) return children ?? null

  const paddings = getBreakpoints('padding', padding)
  const margins = getBreakpoints('margin', margin)
  const displays = getBreakpoints('display', display)

  return (
    <span
      ref={ref}
      className={clsx(
        styles['spacer'],
        ...(displays.map((display) => styles[display]) || []),
        ...((paddings && paddings.map((padding) => styles[padding])) || []),
        ...((margins && margins.map((margin) => styles[margin])) || []),
        ...modifiers
      )}
      {...rest}
    >
      {children ?? null}
    </span>
  )
}
