import { globalRichTextMock } from '@global/global.mock'
import { RichText } from './RichText.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof RichText> = {
  title: 'Components/RichText',
  component: RichText,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof RichText>

export const Primary: Story = {
  args: {
    richText: globalRichTextMock
  }
}
