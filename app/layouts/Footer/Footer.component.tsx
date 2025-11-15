import { fetchData } from '@utils/fetch-data/fetch-data.utils'
import { FooterWrapper } from './Footer-wrapper.component'
import type { FooterData } from './Footer.types'

export const Footer = async () => {
  const data = await fetchData<FooterData>({
    url: 'footer',
    params: '',
    resource: '',
    revalidate: 60,
    tags: ['page:footer']
  })

  return <FooterWrapper {...data} />
}
