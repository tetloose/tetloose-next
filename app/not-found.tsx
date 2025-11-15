import { fetchData } from '@utils/fetch-data/fetch-data.utils'
import { NotFound } from '@layouts/Not-found/Not-found.component'
import type { PageData } from 'app/[[...slug]]/page.types'

export default async function NotFoundPage() {
  const { title, richText } = await fetchData<PageData>({
    url: 'notFound',
    params: '',
    resource: '',
    revalidate: 60,
    tags: ['page:not-found']
  })

  return <NotFound title={title} richText={richText} />
}
