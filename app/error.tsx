'use client'

import { NotFound } from '@layouts/Not-found/Not-found.component'
import type { NotFoundErrorProps } from '@layouts/Not-found/Not-found.types'

export default function Error({ error }: NotFoundErrorProps) {
  const { name, message, stack } = error || {}

  return <NotFound title={name} richText={`<p>${message}</p>`} debug={stack} />
}
