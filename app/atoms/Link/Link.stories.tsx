import { Link } from './Link.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    variant: 'primary',
    href: 'https://google.com',
    title: 'Link',
    typography: {
      padding: {
        default: 6
      },
      size: 'body-med'
    }
  }
}
