import { Hero } from './Hero.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    title: {
      tag: 'h1',
      text: 'Hero',
      size: 'h1',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: { default: 'center' }
    },
    image: {
      src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop',
      alt: 'Hero image',
      width: 1200,
      height: 600
    }
  }
}
