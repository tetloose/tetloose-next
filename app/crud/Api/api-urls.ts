import type { ApiUrls } from './api-url.types'

export const apiUrls: Record<ApiUrls, string> = {
  homepage: process.env.NEXT_PUBLIC_HOMEPAGE || '',
  header: process.env.NEXT_PUBLIC_HEADER || '',
  footer: process.env.NEXT_PUBLIC_FOOTER || '',
  notFound: process.env.NEXT_PUBLIC_NOT_FOUND || '',
  componentsNotFound: process.env.NEXT_PUBLIC_COMPONENTS_NOT_FOUND || ''
}
