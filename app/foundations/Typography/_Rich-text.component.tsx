import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import type { RichTextProps } from './Typography.types'
import { clsx } from 'clsx'
import styles from './Typography.module.scss'

export const RichText = ({
  modifiers = [],
  padding,
  margin,
  linkVariant,
  color,
  display,
  textAlign,
  richText,
  ...rest
}: RichTextProps) => {
  const textAligns = getBreakpoints('text-align', textAlign)

  if (!richText) return

  return (
    <Spacer display={display} padding={padding} margin={margin}>
      <span
        className={clsx(
          styles['is-rich-text'],
          styles['typography'],
          styles[`link-${linkVariant}`],
          color ? styles[`color-${color}`] : '',
          ...(textAligns.map((textAlign) => styles[textAlign]) || []),
          ...modifiers
        )}
        dangerouslySetInnerHTML={{ __html: richText }}
        {...rest}
      />
    </Spacer>
  )
}
