import type { GlobalChildren, GlobalClassName, GlobalTextColorProps } from '@global/global.types'
import type NextLink from 'next/link'
import type { ComponentProps } from 'react'

export type LinkProps = ComponentProps<typeof NextLink> &
  GlobalChildren &
  GlobalClassName &
  GlobalTextColorProps & {
    text?: string
  }
