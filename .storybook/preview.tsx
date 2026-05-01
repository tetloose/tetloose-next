import { AppProvider } from '@context/app/app.context'
import { Notification } from '@atoms/notification/notification.component'
import type { Preview } from '@storybook/nextjs-vite'
import '@styles/app.css'

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
        order: ['Atoms', 'Molecules', 'Components', 'Layouts']
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
      test: 'todo'
    }
  }
}

export default preview
