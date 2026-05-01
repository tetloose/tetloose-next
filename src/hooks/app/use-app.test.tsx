import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/app/app.context'
import { initialApp } from '@context/app/app.initial'
import { useApp } from './use-app.hooks'

describe('useApp', () => {
  it('returns initial app state', () => {
    const { result } = renderHook(() => useApp(), { wrapper: AppProvider })

    expect(result.current.app).toEqual(initialApp)
    expect(result.current.pageSlug).toBe(initialApp.pageSlug)
  })

  it('updates app state via updateApp', () => {
    const { result } = renderHook(() => useApp(), { wrapper: AppProvider })

    act(() => {
      result.current.updateApp({ pageSlug: 'test-page' })
    })

    expect(result.current.pageSlug).toBe('test-page')
  })

  it('throws when used outside AppProvider', () => {
    expect(() => renderHook(() => useApp())).toThrow()
  })
})
