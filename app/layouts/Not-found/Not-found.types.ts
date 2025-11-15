import type { RichText } from '@components/RichText/RichText.types'

export type NotFoundProps = {
  title?: string
  debug?: string
} & RichText

export type NotFoundErrorProps = {
  error: Error
}
