import type { LinkVariant } from '@atoms/Link/Link.types'
import type { RichText } from '@components/RichText/RichText.types'
import type { Spacers } from '@foundations/Spacer/Spacer.types'
import type {
  GlobalChildren,
  GlobalColor,
  GlobalModifiers
} from '@global/global.types'
import type {
  BreakpointDisplay,
  BreakpointTextAlign,
  BreakpointWhiteSpace
} from '@utils/get-breakpoints/get-breakpoints.types'

export type FontStyles = {
  linkVariant?: LinkVariant
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold'
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase'
  fontStyle?: 'italic' | 'oblique'
}

export type TypographyTags =
  | 'span'
  | 'nav'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'em'
  | 'label'
  | 'time'
  | 'ul'
  | 'ol'
  | 'li'

type Size =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-xxlrg'
  | 'body-xlrg'
  | 'body-lrg'
  | 'body-med'
  | 'body-sml'

type SharedProps = GlobalModifiers &
  GlobalColor &
  BreakpointWhiteSpace &
  BreakpointTextAlign &
  BreakpointDisplay &
  Spacers &
  FontStyles &
  RichText

export type TypographyProps = {
  tag?: TypographyTags
  size?: Size
  text?: string
} & GlobalChildren &
  SharedProps

export type RichTextProps = Omit<
  SharedProps,
  'fontWeight' | 'fontStyle' | 'textTransform' | 'whiteSpace'
>
