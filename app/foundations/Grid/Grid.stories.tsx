import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { globalRichTextMock } from '@global/global.mock'
import { Grid } from './Grid.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Grid> = {
  title: 'Foundations/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Grid>

const renderStory = () => {
  return (
    <Grid
      tag={'main'}
      rows={{
        default: ['min-content', 'min-content', 'auto', 'min-content'],
        lrg: ['min-content', 'auto', 'min-content']
      }}
      columns={{
        default: [1],
        lrg: [0.5, 1.5]
      }}
      height={{ default: 'viewport-fullscreen' }}
      border={{
        top: { default: true },
        right: { default: true },
        bottom: { default: true },
        left: { default: true }
      }}
      borderColor={'black'}
    >
      <Grid.Item
        tag={'header'}
        bg={'black'}
        rows={{ default: [1] }}
        columns={{
          default: [1],
          lrg: [1, 3]
        }}
      >
        <Row
          height={{ default: 'parent-fullscreen' }}
          padding={{
            top: { default: 10 },
            right: { default: 10 },
            bottom: { default: 10 },
            left: { default: 10 }
          }}
          align={{
            default: 'center'
          }}
        >
          <Row.Column
            padding={{
              left: { default: 10 },
              right: { default: 10 }
            }}
          >
            <Typography
              tag={'h1'}
              display={{ default: 'block' }}
              textAlign={{ default: 'center' }}
              size={'h3'}
              textTransform={'uppercase'}
              text={'Header'}
              color={'white'}
              fontWeight={'bold'}
            />
          </Row.Column>
        </Row>
      </Grid.Item>
      <Grid.Item
        rows={{
          default: [2]
        }}
        columns={{
          default: [1],
          lrg: [1, 2]
        }}
        border={{
          right: { lrg: true },
          bottom: { default: true, lrg: false }
        }}
        borderColor={'black'}
      >
        <Row>
          <Row.Column
            padding={{
              top: {
                default: 10
              },
              right: {
                default: 10
              },
              bottom: {
                default: 10
              },
              left: {
                default: 10
              }
            }}
          >
            <Typography
              tag={'h2'}
              size={'h3'}
              text={'Sidebar'}
              textTransform={'uppercase'}
              fontWeight={'bold'}
            />
            <Typography
              padding={{ default: 10 }}
              tag={'p'}
              size={'body-med'}
              text={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore error neque, eveniet possimus excepturi ullam, fugit dolores repellendus nemo, illum sapiente vero? Quos iusto a quia rerum facilis eveniet? Culpa.'
              }
            />
          </Row.Column>
        </Row>
      </Grid.Item>
      <Grid.Item
        tag={'section'}
        rows={{
          default: [3],
          lrg: [2]
        }}
        columns={{
          default: [1],
          lrg: [2, 3]
        }}
      >
        <Row>
          <Row.Column
            padding={{
              top: {
                default: 10
              },
              right: {
                default: 10
              },
              bottom: {
                default: 10
              },
              left: {
                default: 10
              }
            }}
          >
            <Typography richText={globalRichTextMock} />
          </Row.Column>
        </Row>
      </Grid.Item>
      <Grid.Item
        bg={'black'}
        tag={'footer'}
        rows={{
          default: [4],
          lrg: [3]
        }}
        columns={{
          default: [1],
          lrg: [1, 3]
        }}
      >
        <Row
          height={{ default: 'parent-fullscreen' }}
          padding={{
            top: { default: 10 },
            right: { default: 10 },
            bottom: { default: 10 },
            left: { default: 10 }
          }}
          align={{
            default: 'center'
          }}
        >
          <Row.Column
            padding={{
              left: { default: 10 },
              right: { default: 10 }
            }}
          >
            <Typography
              tag={'span'}
              display={{ default: 'block' }}
              textAlign={{ default: 'center' }}
              size={'h3'}
              text={'Footer'}
              textTransform={'uppercase'}
              color={'white'}
              fontWeight={'bold'}
            />
          </Row.Column>
        </Row>
      </Grid.Item>
    </Grid>
  )
}

export const Default: Story = {
  render: renderStory
}
