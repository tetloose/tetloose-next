import type { GlobalChildren, GlobalClassName } from '@global/global.types'
import type Link from 'next/link'
import type { ButtonHTMLAttributes, ComponentPropsWithoutRef } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

type SharedProps = {
  variant?: ButtonVariant
  label?: string
} & GlobalChildren &
  GlobalClassName

export type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>

export type LinkProps = SharedProps & ComponentPropsWithoutRef<typeof Link>
