'use client'

import { createContext } from '@utils/create-context/create-context.utils'
import { initialApp } from './app.initial'
import type { AppProps } from './app.types'

export const { Provider: AppProvider, useContextProvider: useAppContext } = createContext<AppProps, 'app', 'updateApp'>(
  initialApp,
  'app',
  'updateApp',
  'AppContext'
)
