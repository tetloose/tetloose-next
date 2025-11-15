import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import type { RichTextProps } from './RichText.types'

export const RichText = ({
  modifiers = [],
  richText,
  ...rest
}: RichTextProps) => {
  return (
    <Row
      tag={'section'}
      modifiers={[...modifiers]}
      align={{ default: 'center' }}
      justify={{ default: 'center' }}
      padding={{
        top: {
          default: 6
        }
      }}
      {...rest}
    >
      <Row.Column
        width={{ default: 10 }}
        padding={{
          top: {
            default: 6
          }
        }}
      >
        {richText && <Typography richText={richText} />}
      </Row.Column>
    </Row>
  )
}
