import 'server-only'
import { notFound } from 'next/navigation'
import { apiUrl } from '@crud/Api/api-url.crud'
import { request } from '@crud/Request/request.crud'
import type { GlobalFetchProps } from '@global/global.types'

export const fetchData = async <T>({
  url,
  params,
  resource,
  revalidate = 60,
  tags = []
}: GlobalFetchProps): Promise<T> => {
  const path = apiUrl({ url, resource, params })

  if (!url || !path) notFound()

  const data = await request<T>({
    url: path,
    method: 'GET',
    next: { revalidate, tags }
  })

  return data
}
