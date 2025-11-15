import { Components } from './Components.component'
import { componentsMock } from './Components.mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Components> = {
  title: 'Components/Components',
  component: Components,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Components>

export const Primary: Story = {
  args: {
    components: componentsMock
  }
}
