import { useAppContext } from '@context/App/App.context'

export const useApp = () => {
  const { app, updateApp } = useAppContext()
  const { pageSlug = '' } = app ?? {}

  return {
    app,
    updateApp,
    pageSlug
  }
}
