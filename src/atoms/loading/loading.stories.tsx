import { GLOBAL_TEXT_COLOR } from '@global/global.constants'
import { Loading } from './loading.component'
import { loadingMock } from './loading.mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Loading> = {
  title: 'Atoms/Loading',
  component: Loading,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    centred: { control: 'boolean' },
    color: { control: 'select', options: [...GLOBAL_TEXT_COLOR] }
  }
}

export default meta

type Story = StoryObj<typeof Loading>

export const Default: Story = {
  args: loadingMock
}
