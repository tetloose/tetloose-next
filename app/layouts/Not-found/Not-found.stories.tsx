import { NotFound } from '@layouts/Not-found/Not-found.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof NotFound> = {
  title: 'Layouts/Not Found',
  component: NotFound,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof NotFound>

export const Primary: Story = {
  args: {
    title: '404',
    richText: '<h1>404</h1><p>Page not found</p>',
    debug: 'debug info'
  }
}
