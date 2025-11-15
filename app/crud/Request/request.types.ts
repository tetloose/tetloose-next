export type RequestNextOptions = {
  revalidate?: number
  tags?: string[]
}

export type Methods = 'PUT' | 'PATCH' | 'POST' | 'DELETE'

export type RequestMethod = 'GET' | Methods

export type RequestProps = {
  url: string
  method: RequestMethod
  headers?: HeadersInit
  body?: Record<string, unknown>
  next?: RequestNextOptions
  cache?: RequestCache
}
