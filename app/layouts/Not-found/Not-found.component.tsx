import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import type { NotFoundProps } from './Not-found.types'

export const NotFound = ({ title, richText, debug }: NotFoundProps) => {
  return (
    <Row
      align={{
        default: 'center'
      }}
      justify={{ default: 'center' }}
      padding={{
        left: { default: 6 },
        right: { default: 6 }
      }}
      height={{
        default: 'viewport-fullscreen'
      }}
    >
      <Row.Column
        width={{
          med: 8
        }}
        border={{
          top: { default: true },
          right: { default: true },
          bottom: { default: true },
          left: { default: true }
        }}
        borderColor={'black'}
        padding={{
          top: { default: 6 },
          right: { default: 6 },
          bottom: { default: 6 },
          left: { default: 6 }
        }}
      >
        {title ? (
          <Typography
            textAlign={{ default: debug ? 'left' : 'center' }}
            tag={'h1'}
            size={'h1'}
            text={title}
          />
        ) : null}
        {richText ? (
          <Typography
            textAlign={{ default: debug ? 'left' : 'center' }}
            padding={{ default: 4 }}
            richText={richText}
          />
        ) : null}
        {debug ? (
          <Typography
            textAlign={{ default: 'left' }}
            tag={'p'}
            size={'body-med'}
            fontStyle={'italic'}
            padding={{ default: 4 }}
            text={debug}
          />
        ) : null}
      </Row.Column>
    </Row>
  )
}
