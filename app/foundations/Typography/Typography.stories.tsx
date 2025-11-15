import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { globalRichTextMock } from '@global/global.mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Typography> = {
  title: 'Foundations/Typography',
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  render: () => (
    <Row
      padding={{
        left: { default: 6 },
        right: { default: 6 }
      }}
    >
      <Row.Column
        padding={{
          right: { default: 3 },
          bottom: { default: 6 },
          left: { default: 6 }
        }}
        width={{ default: 6 }}
      >
        <Typography
          tag={'h1'}
          size={'h1'}
          text={'H1'}
          padding={{ default: 6 }}
        />
        <Typography
          tag={'h2'}
          size={'h2'}
          text={'H2'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h3'}
          size={'h3'}
          text={'H3'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h4'}
          size={'h4'}
          text={'H4'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h5'}
          size={'h5'}
          text={'H5'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'h6'}
          size={'h6'}
          text={'H6'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-sml'}
          text={'Body sml'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-med'}
          text={'Body med'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-lrg'}
          text={'Body lrg'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-xlrg'}
          text={'Body xlrg'}
          padding={{ default: 5 }}
        />
        <Typography
          tag={'p'}
          size={'body-xxlrg'}
          text={'Body xxlrg'}
          padding={{ default: 5 }}
        />
        <Typography tag={'ul'}>
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 5 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
        </Typography>
        <Typography tag={'ol'}>
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 5 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
          <Typography
            tag={'li'}
            size={'body-med'}
            padding={{ default: 1 }}
            text={'Congue suscipit et velit amet felis adipiscing.'}
          />
        </Typography>
      </Row.Column>
      <Row.Column
        padding={{
          right: { default: 6 },
          bottom: { default: 6 },
          left: { default: 3 }
        }}
        width={{ default: 6 }}
      >
        <Typography
          color={'black'}
          linkVariant={'primary'}
          padding={{ default: 6 }}
          richText={globalRichTextMock}
        />
      </Row.Column>
    </Row>
  )
}
