import type { NotificationType } from '@hooks/notification/use-notification.types'

export const notificationMessages: Record<NotificationType, string> = {
  default: 'This is a notification',
  success: 'Success! Your action completed',
  error: 'Error! Something went wrong',
  loading: 'Loading... Please wait'
}
