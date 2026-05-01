import { useNotification } from '@hooks/notification/use-notification.hooks'
import { Button } from './button.component'
import { buttonLinkMock, buttonMock } from './button.mock'
import type { ButtonProps } from './button.types'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    }
  }
}

export default meta

const RenderButton = (args: ButtonProps) => {
  const notify = useNotification()

  return <Button {...args} onClick={() => notify('Button clicked', 'success')} />
}

export const Default: StoryObj<typeof Button> = {
  args: buttonMock,
  render: (args) => <RenderButton {...args} />
}

export const Link: StoryObj<typeof Button.Link> = {
  args: buttonLinkMock,
  render: (args) => <Button.Link {...args} />
}
