import { headerMock } from './Header.mock'
import { HeaderWrapper } from './Header-wrapper.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof HeaderWrapper> = {
  title: 'Layouts/Header',
  component: HeaderWrapper,
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

type Story = StoryObj<typeof HeaderWrapper>

export const Primary: Story = {
  args: headerMock
}
