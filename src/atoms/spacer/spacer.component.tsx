import type { SpacerProps } from './spacer.types'
import clsx from 'clsx'

export const Spacer = ({ marginTop, paddingTop, display = 'block', className, children }: SpacerProps) => (
  <span className={clsx(display, marginTop, paddingTop, className)}>{children ?? null}</span>
)
