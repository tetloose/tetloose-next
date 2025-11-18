import type { RequestProps } from './request.types'

export const request = async <T>({
  url,
  method,
  headers,
  body,
  // next, // testing only, implement cache bust
  cache = 'no-store' // testing only, implement cache bust
}: RequestProps) => {
  const fetchOptions: RequestInit = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      ...headers
    },
    credentials: 'include',
    // next, // testing only, implement cache bust
    cache
  }

  if (body) fetchOptions.body = JSON.stringify(body)

  const response = await fetch(url, fetchOptions)

  if (!response.ok) {
    const msg = await response.text().catch(() => '')

    throw new Error(
      `Network error (${response.status}): ${msg || response.statusText}`
    )
  }

  return response.json() as Promise<T>
}
