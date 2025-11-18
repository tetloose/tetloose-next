import * as z from 'zod'
import type { Metadata } from 'next'

const OgImage = z.object({
  width: z.number().optional(),
  height: z.number().optional(),
  url: z.string().optional(),
  type: z.string().optional()
})

const Robots = z.object({
  index: z.string().optional(),
  follow: z.string().optional()
})

export const SeoSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogLocale: z.string().optional(),
    ogType: z.string().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    ogUrl: z.string().optional(),
    ogSiteName: z.string().optional(),
    articleModifiedTime: z.string().optional(),
    ogImage: z.array(OgImage).optional(),
    twitterCard: z.string().optional(),
    twitterTitle: z.string().optional(),
    twitterDescription: z.string().optional(),
    twitterImage: z.string().optional(),
    robots: Robots.optional()
  })
  .optional()

type Seo = z.infer<typeof SeoSchema>

export type Robots = z.infer<typeof Robots>

export type SeoProps = {
  seo?: Seo
}

export type OpenGraph = NonNullable<Metadata['openGraph']>

export type Twitter = NonNullable<Metadata['twitter']>
