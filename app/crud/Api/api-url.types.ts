export type ApiUrls =
  | 'homepage'
  | 'header'
  | 'footer'
  | 'notFound'
  | 'componentsNotFound'

export type ApiUrlProps = {
  url: ApiUrls | null
  resource?: string
  params?: string
  page?: number
}

export type ApiUrlReturn = string
