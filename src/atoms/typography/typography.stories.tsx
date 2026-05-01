import { GLOBAL_DISPLAY, GLOBAL_TEXT_COLOR } from '@global/global.constants'
import { Typography } from './typography.component'
import { typographyMock } from './typography.mock'
import { TYPOGRAPHY_ALIGN, TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT } from './typography.variants'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    tag: {
      control: 'select',
      options: [...TYPOGRAPHY_TAG]
    },
    display: {
      control: 'select',
      options: [undefined, ...GLOBAL_DISPLAY]
    },
    color: {
      control: 'select',
      options: [...GLOBAL_TEXT_COLOR]
    },
    size: {
      control: 'select',
      options: [undefined, ...TYPOGRAPHY_SIZE]
    },
    weight: {
      control: 'select',
      options: [undefined, ...TYPOGRAPHY_WEIGHT]
    },
    align: {
      control: 'select',
      options: [undefined, ...TYPOGRAPHY_ALIGN]
    }
  }
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: typographyMock
}
