import { Logo } from './Logo.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    link: {
      href: '/'
    },
    image: {
      src: 'http://localhost:3000/api/media/logo.svg',
      alt: 'Company Logo',
      width: 600,
      height: 150,
      size: {
        default: 'contain'
      }
    }
  }
}
