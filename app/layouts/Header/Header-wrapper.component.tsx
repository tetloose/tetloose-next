import { Logo } from '@components/Logo/Logo.component'
import { Grid } from '@foundations/Grid/Grid.component'
import { Row } from '@foundations/Row/Row.component'
import type { HeaderProps } from './Header.types'

export const HeaderWrapper = ({ image }: HeaderProps) => {
  return (
    <Grid.Item
      tag={'header'}
      bg={'black'}
      rows={{ default: [1] }}
      columns={{ default: [1] }}
    >
      <Row
        height={{ default: 'parent-fullscreen' }}
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
        {image ? (
          <Row.Column
            width={{ default: 4 }}
            padding={{
              left: { default: 6 },
              right: { default: 6 }
            }}
          >
            <Logo
              link={{
                href: '/'
              }}
              image={{
                src: image.src,
                alt: image.alt,
                width: image.width,
                height: image.height,
                size: { default: 'contain' }
              }}
            />
          </Row.Column>
        ) : null}
      </Row>
    </Grid.Item>
  )
}
