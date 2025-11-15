import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { Row } from '@foundations/Row/Row.component'
import { Button } from '@atoms/Button/Button.component'
import { Notification } from './Notification.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Notification> = {
  title: 'Atoms/Notification',
  component: Notification,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof Notification>

const NotificationDemo = ({
  type
}: {
  type: 'default' | 'success' | 'error' | 'loading'
}) => {
  const notify = useNotification()

  const messages = {
    default: 'This is a notification',
    success: 'Success! Your action completed',
    error: 'Error! Something went wrong',
    loading: 'Loading... Please wait'
  }

  return (
    <Row>
      <Row.Column>
        <Notification />
        <Button
          onClick={() => notify(messages[type], type)}
          variant={'primary'}
        >
          Show {type} notification
        </Button>
      </Row.Column>
    </Row>
  )
}

export const Default: Story = {
  render: () => <NotificationDemo type='default' />
}

export const Success: Story = {
  render: () => <NotificationDemo type='success' />
}

export const Error: Story = {
  render: () => <NotificationDemo type='error' />
}

export const Loading: Story = {
  render: () => <NotificationDemo type='loading' />
}
