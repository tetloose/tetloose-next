import { useNotification } from '@hooks/notification/use-notification.hooks'
import { Button } from '@atoms/button/button.component'
import { Notification } from './notification.component'
import { notificationMessages } from './notification.mock'
import type { NotificationType } from '@hooks/notification/use-notification.types'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Notification> = {
  title: 'Atoms/Notification',
  component: Notification,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export default meta

type Story = StoryObj<typeof Notification>

const NotificationDemo = ({ type }: { type: NotificationType }) => {
  const notify = useNotification()

  return (
    <Button variant={'primary'} onClick={() => notify(notificationMessages[type], type)}>
      Show {type} notification
    </Button>
  )
}

export const Default: Story = {
  render: () => <NotificationDemo type={'default'} />
}

export const Success: Story = {
  render: () => <NotificationDemo type={'success'} />
}

export const ErrorMessage: Story = {
  render: () => <NotificationDemo type={'error'} />
}

export const Loading: Story = {
  render: () => <NotificationDemo type={'loading'} />
}
