import { footerMock } from './Footer.mock'
import { FooterWrapper } from './Footer-wrapper.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof FooterWrapper> = {
  title: 'Layouts/Footer',
  component: FooterWrapper,
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

type Story = StoryObj<typeof FooterWrapper>

export const Primary: Story = {
  args: footerMock
}
