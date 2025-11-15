import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { StorybookConfig } from '@storybook/nextjs-vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = resolve(__dirname, '../app')
const docs = resolve(__dirname, '../docs')

const config: StorybookConfig = {
  stories: [
    `${docs}/**/*.mdx`,
    `${app}/**/*.mdx`,
    `${app}/**/*.stories.@(ts|tsx)`
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-designs'
  ],
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
    return mergeConfig(base, {
      plugins: [
        tsconfigPaths({
          root: resolve(__dirname, '..')
        })
      ],
      resolve: {
        alias: {
          '@context': resolve(__dirname, '../app/context'),
          '@foundations': resolve(__dirname, '../app/foundations'),
          '@atoms': resolve(__dirname, '../app/atoms'),
          '@components': resolve(__dirname, '../app/components'),
          '@layouts': resolve(__dirname, '../app/layouts'),
          '@hooks': resolve(__dirname, '../app/hooks'),
          '@crud': resolve(__dirname, '../app/crud'),
          '@utils': resolve(__dirname, '../app/utils'),
          '@global': resolve(__dirname, '../app/global'),
          '@styles': resolve(__dirname, '../app/styles'),
          '@images': resolve(__dirname, '../app/images')
        }
      }
    })
  }
}
export default config
