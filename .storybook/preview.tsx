import { Notification } from '../app/atoms/Notification/Notification.component'
import { AppProvider } from '../app/context/App/App.context'
import type { Preview } from '@storybook/nextjs-vite'
import '../app/styles/app.scss'

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <AppProvider>
          <Notification />
          <Story />
        </AppProvider>
      )
    }
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Documentation',
          ['Introduction'],
          'Foundations',
          'Atoms',
          'Components',
          'Layouts'
        ]
      }
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Light',
          value: '#fff'
        },
        {
          name: 'Dark',
          value: '#000'
        }
      ]
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  }
}

export default preview
