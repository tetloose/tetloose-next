import { createElement } from 'react'
import { getBreakpoints } from '@utils/get-breakpoints/get-breakpoints.utils'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { RichText } from './_Rich-text.component'
import type { TypographyProps } from './Typography.types'
import { clsx } from 'clsx'
import styles from './Typography.module.scss'

export const Typography = ({
  modifiers = [],
  tag = 'span',
  padding,
  margin,
  size,
  linkVariant = 'primary',
  color = 'black',
  fontWeight,
  display,
  fontStyle,
  textTransform,
  whiteSpace,
  textAlign,
  text,
  richText,
  children,
  ...rest
}: TypographyProps) => {
  const displays = getBreakpoints('display', display)
  const whiteSpaces = getBreakpoints('white-space', whiteSpace)
  const textAligns = getBreakpoints('text-align', textAlign)

  const element =
    !richText && tag
      ? createElement(
          tag,
          {
            className: clsx(
              styles['typography'],
              !richText && tag && (tag === 'ol' || tag === 'ul')
                ? styles[tag]
                : '',
              !richText && size ? styles[size] : '',
              ...(displays.map((display) => styles[display]) || []),
              ...(whiteSpaces.map((whiteSpace) => styles[whiteSpace]) || []),
              ...(textAligns.map((textAlign) => styles[textAlign]) || []),
              fontWeight ? styles[`font-weight-${fontWeight}`] : undefined,
              fontStyle ? styles[`font-style-${fontStyle}`] : undefined,
              textTransform
                ? styles[`text-transform-${textTransform}`]
                : undefined,
              styles[`link-${linkVariant}`],
              styles[`color-${color}`],
              ...modifiers
            ),
            ...rest
          },
          tag === 'ol' || tag === 'ul' ? (
            <>
              {text && text}
              {children ?? null}
            </>
          ) : (
            <Spacer
              display={{ default: 'inline-block' }}
              padding={padding}
              margin={margin}
            >
              {text && text}
              {children ?? null}
            </Spacer>
          )
        )
      : undefined

  return richText ? (
    <RichText
      modifiers={modifiers}
      padding={padding}
      margin={margin}
      linkVariant={linkVariant}
      color={color}
      display={{ default: 'block' }}
      textAlign={textAlign}
      richText={richText}
      {...rest}
    />
  ) : tag === 'ol' || tag === 'ul' ? (
    <Spacer display={{ default: 'block' }} padding={padding} margin={margin}>
      {element}
    </Spacer>
  ) : (
    element
  )
}
