import type { OpenGraph, Twitter } from './set-seo.types'
import type { Robots, SeoProps } from './set-seo.types'
import type { Metadata } from 'next'

const mapRobots = (robots?: Robots): Metadata['robots'] => {
  if (!robots) return undefined

  const index = robots.index !== 'noindex'
  const follow = robots.follow !== 'nofollow'

  return {
    index,
    follow
  }
}

export const setSeo = async ({ seo }: SeoProps): Promise<Metadata> => {
  if (!seo) {
    return { title: '404 Page not found', description: 'Please try again' }
  }

  const title = seo.title || ''
  const description = seo?.description || seo?.ogDescription || ''

  const ogImages = (seo.ogImage || [])
    .map(({ url, width, height, type }) => ({
      url: url,
      width: width,
      height: height,
      type: type
    }))
    .filter(({ url }) => !!url)

  const twitterImages = seo.twitterImage
    ? [seo.twitterImage]
    : ogImages.length
      ? [ogImages[0].url]
      : undefined

  const ogTitle = seo.ogTitle || title
  const ogDescription = seo.ogDescription || description || undefined

  const siteUrl = seo.ogUrl

  return {
    title,
    description,
    alternates: {
      canonical: siteUrl
    },
    robots: mapRobots(seo.robots),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: seo.ogType || 'website',
      url: siteUrl,
      siteName: seo.ogSiteName || '',
      locale: seo.ogLocale || '',
      images: ogImages,
      updatedTime: seo.articleModifiedTime
    } as OpenGraph,
    twitter: {
      card: seo.twitterCard || 'summary',
      title: ogTitle,
      description: ogDescription,
      images: twitterImages
    } as Twitter
  }
}
