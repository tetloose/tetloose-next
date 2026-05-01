'use client'

import { useEffect } from 'react'
import { useNotification } from '@hooks/notification/use-notification.hooks'
import { Button } from '@atoms/button/button.component'
import { Spacer } from '@atoms/spacer/spacer.component'
import { Typography } from '@atoms/typography/typography.component'

type ErrorProps = Readonly<{
  error: Error & { digest?: string }
  reset: () => void
}>

export default function ErrorPage({ error, reset }: ErrorProps) {
  const notify = useNotification()

  useEffect(() => {
    notify(error, 'error')
  }, [error, notify])

  return (
    <>
      <Typography tag='h1' size='text-4xl' color='text-black' text='Something went wrong' />
      <Spacer paddingTop='pt-2' />
      <Button onClick={reset} label='Try again' />
    </>
  )
}
