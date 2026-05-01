'use client'

import { Toaster } from 'react-hot-toast'
import type { NotificationProps } from './notification.types'

export const Notification = (props: NotificationProps) => <Toaster {...props} />
