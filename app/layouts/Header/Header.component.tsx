import { fetchData } from '@utils/fetch-data/fetch-data.utils'
import { HeaderWrapper } from './Header-wrapper.component'
import type { HeaderData } from './Header.types'

export const Header = async () => {
  const data = await fetchData<HeaderData>({
    url: 'header',
    params: '',
    resource: '',
    revalidate: 60,
    tags: ['page:header']
  })

  return <HeaderWrapper {...data} />
}
