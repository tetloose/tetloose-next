import { apiUrls } from '@crud/Api/api-urls'
import type { ApiUrls } from '@crud/Api/api-url.types'

const isApiUrlKey = (key: string): key is ApiUrls => key in apiUrls

export const getSlug = (slug: string[] | undefined): ApiUrls | null => {
  if (!slug || slug.length === 0) return 'homepage'

  const apiSlug = slug.join('/')

  return isApiUrlKey(apiSlug) ? apiSlug : null
}
