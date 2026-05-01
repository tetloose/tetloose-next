import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/nextjs-vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-designs', '@chromatic-com/storybook'],
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/nextjs-vite',
    options: {}
  },
  staticDirs: ['../public'],
  viteFinal: async (base) => {
    const { mergeConfig } = await import('vite')

    return mergeConfig(base, {
      resolve: {
        alias: {
          '@app': resolve(__dirname, '../app'),
          '@context': resolve(__dirname, '../src/context'),
          '@global': resolve(__dirname, '../src/global'),
          '@atoms': resolve(__dirname, '../src/atoms'),
          '@molecules': resolve(__dirname, '../src/molecules'),
          '@components': resolve(__dirname, '../src/components'),
          '@layouts': resolve(__dirname, '../src/layouts'),
          '@hooks': resolve(__dirname, '../src/hooks'),
          '@services': resolve(__dirname, '../src/services'),
          '@utils': resolve(__dirname, '../src/utils'),
          '@styles': resolve(__dirname, '../src/styles'),
          '@images': resolve(__dirname, '../src/images')
        }
      }
    })
  }
}

export default config
