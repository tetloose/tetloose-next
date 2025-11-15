import { Image } from './Image.component'
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
  }
}

export default meta

type Story = StoryObj<typeof Image>

export const Primary: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop',
    alt: 'Image Description',
    width: 1200,
    height: 600,
    ratio: {
      default: '16x9'
    },
    size: {
      default: 'cover'
    }
  }
}
