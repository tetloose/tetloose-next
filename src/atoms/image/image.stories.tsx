import { Image } from './image.component'
import { imageMock } from './image.mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  },
  argTypes: {
    fit: {
      control: 'select',
      options: [undefined, 'object-cover', 'object-contain']
    },
    position: {
      control: 'select',
      options: [
        undefined,
        'object-center',
        'object-top',
        'object-bottom',
        'object-left',
        'object-left-top',
        'object-left-bottom',
        'object-right',
        'object-right-top',
        'object-right-bottom'
      ]
    },
    ratio: {
      control: 'select',
      options: [undefined, 'aspect-square', 'aspect-[3/2]', 'aspect-[4/3]', 'aspect-video', 'aspect-[21/9]']
    }
  }
}

export default meta

type Story = StoryObj<typeof Image>

export const Default: Story = {
  args: imageMock
}
