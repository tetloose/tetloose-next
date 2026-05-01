import { useAppContext } from '@context/app/app.context'

export const useApp = () => {
  const { app, updateApp } = useAppContext()
  const { pageSlug = '' } = app ?? {}

  return {
    app,
    updateApp,
    pageSlug
  }
}
