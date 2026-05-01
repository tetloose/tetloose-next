import { Loader } from 'lucide-react'
import { LOADING_BASE, LOADING_CENTRED } from './loading.variants'
import type { LoadingProps } from './loading.types'
import clsx from 'clsx'

export const Loading = ({ centred, color = 'text-black', className }: LoadingProps) => (
  <Loader className={clsx(LOADING_BASE, color, centred && LOADING_CENTRED, className)} />
)
