import { Suspense } from 'react'
import { fetchData } from '@utils/fetch-data/fetch-data.utils'
import { getSlug } from '@utils/get-slug/get-slug.utils'
import { setSeo } from '@utils/set-seo/set-seo.utils'
import { Components } from '@components/Components/Components.component'
import { Spacer } from '@foundations/Spacer/Spacer.component'
import { Loading } from '@atoms/Loading/Loading.component'
import { SeoSchema } from '@utils/set-seo/set-seo.types'
import type { PageData } from './page.types'
import type { GlobalPageProps } from '@global/global.types'

export const generateMetadata = async ({ params }: GlobalPageProps) => {
  const { slug } = await params
  const pageUrl = getSlug(slug)

  const { seo } = await fetchData<PageData>({
    url: pageUrl,
    params: '',
    resource: '',
    revalidate: 60,
    tags: [`page-seo:${pageUrl}`]
  })

  return await setSeo({ seo: SeoSchema.parse(seo) })
}

const Page = async ({ params }: GlobalPageProps) => {
  const { slug } = await params
  const pageUrl = getSlug(slug)

  const { components } = await fetchData<PageData>({
    url: pageUrl,
    params: '',
    resource: '',
    revalidate: 60,
    tags: [`page:${pageUrl}`]
  })

  return (
    <Suspense fallback={<Loading center={true} />}>
      <Components components={components} />
      <Spacer display={{ default: 'block' }} padding={{ default: 12 }} />
    </Suspense>
  )
}

export default Page
