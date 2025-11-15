import { Navigation } from '@components/Navigation/Navigation.component'
import { Grid } from '@foundations/Grid/Grid.component'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import type { FooterProps } from './Footer.types'

export const FooterWrapper = ({ navigation, description }: FooterProps) => {
  return (
    <Grid.Item
      tag={'footer'}
      bg={'black'}
      rows={{ default: [3] }}
      columns={{ default: [1] }}
    >
      <Row
        padding={{
          top: { default: 6 },
          left: { default: 6 },
          bottom: { default: 6 },
          right: { default: 6 }
        }}
        align={{
          default: 'center'
        }}
      >
        <Row.Column
          padding={{
            left: { default: 6 },
            right: { default: 6 }
          }}
        >
          {navigation ? (
            <Navigation
              variant='inline'
              linkVariant={'secondary'}
              navigation={navigation}
            />
          ) : null}
          {description ? (
            <Typography
              display={{ default: 'block' }}
              textAlign={{ default: 'center' }}
              size={'body-xxlrg'}
              color={'white'}
              padding={{ default: 6 }}
              richText={`<p>${description}</p>`}
              linkVariant={'secondary'}
              fontWeight={'bold'}
            />
          ) : null}
        </Row.Column>
      </Row>
    </Grid.Item>
  )
}
