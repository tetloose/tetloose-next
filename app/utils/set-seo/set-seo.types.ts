import type { Metadata } from 'next'

type OgImage = {
  width?: number
  height?: number
  url?: string
  type?: string
}

export type Robots = {
  index?: string
  follow?: string
}

export type Seo = {
  title?: string
  description?: string
  ogLocale?: string
  ogType?: string
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  ogSiteName?: string
  articleModifiedTime?: string
  ogImage?: OgImage[]
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  robots?: Robots
}

export type SeoProps = {
  seo?: Seo
}

export type OpenGraph = NonNullable<Metadata['openGraph']>

export type Twitter = NonNullable<Metadata['twitter']>
