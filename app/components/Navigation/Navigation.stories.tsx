import { Navigation } from './Navigation.component'
import { navigationMock } from './Navigation.mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen',
    backgrounds: {
      default: 'Dark'
    }
  }
}

export default meta

type Story = StoryObj<typeof Navigation>

export const Default: Story = {
  args: {
    navigation: navigationMock
  }
}

export const Inline: Story = {
  args: {
    variant: 'inline',
    navigation: navigationMock
  }
}
