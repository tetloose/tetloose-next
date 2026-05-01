import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider, useAppContext } from './app.context'
import { initialApp } from './app.initial'

describe('AppContext', () => {
  it('provides initial state', () => {
    const { result } = renderHook(() => useAppContext(), {
      wrapper: AppProvider
    })

    expect(result.current.app).toEqual(initialApp)
  })

  it('throws when used outside provider', () => {
    expect(() => renderHook(() => useAppContext())).toThrow('AppContext must be used within its corresponding Provider')
  })
})
