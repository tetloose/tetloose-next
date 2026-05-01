import { GLOBAL_TEXT_COLOR } from '@global/global.constants'
import { Typography } from '@atoms/typography/typography.component'
import { Link } from './link.component'
import { linkMock } from './link.mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    color: {
      control: 'select',
      options: [...GLOBAL_TEXT_COLOR]
    },
    target: {
      control: 'select',
      options: [undefined, '_blank', '_self']
    }
  }
}

export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: linkMock,
  render: (args) => (
    <Typography tag={'p'} size={'text-base'}>
      This is some text with an inline <Link {...args} /> inside a paragraph.
    </Typography>
  )
}
