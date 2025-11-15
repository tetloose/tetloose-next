import { Fragment } from 'react'
import { Hero } from '@components/Hero/Hero.component'
import { RichText } from '@components/RichText/RichText.component'
import type { ComponentsProps } from './Components.types'

export const Components = ({ components }: ComponentsProps) => {
  return components
    ? components.map(({ layout, ...rest }, componentIndex) => (
        <Fragment key={`${layout}-${componentIndex}`}>
          {layout === 'hero' ? <Hero {...rest} /> : null}
          {layout === 'richText' ? <RichText {...rest} /> : null}
        </Fragment>
      ))
    : null
}
