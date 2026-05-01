import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { createContext } from './create-context.utils'

type TestState = { count: number }

const initialState: TestState = { count: 0 }

const { Provider, useContextProvider } = createContext<TestState, 'test', 'updateTest'>(
  initialState,
  'test',
  'updateTest',
  'TestContext'
)

describe('createContext', () => {
  it('provides initial state', () => {
    const { result } = renderHook(() => useContextProvider(), {
      wrapper: Provider
    })

    expect(result.current.test).toEqual(initialState)
  })

  it('updates state via update function', () => {
    const { result } = renderHook(() => useContextProvider(), {
      wrapper: Provider
    })

    act(() => {
      result.current.updateTest({ count: 5 })
    })

    expect(result.current.test.count).toBe(5)
  })

  it('merges partial state without losing other fields', () => {
    type MultiState = { count: number; label: string }
    const { Provider: P, useContextProvider: useP } = createContext<MultiState, 'multi', 'updateMulti'>(
      { count: 0, label: 'hello' },
      'multi',
      'updateMulti',
      'MultiContext'
    )

    const { result } = renderHook(() => useP(), { wrapper: P })

    act(() => {
      result.current.updateMulti({ count: 99 })
    })

    expect(result.current.multi.count).toBe(99)
    expect(result.current.multi.label).toBe('hello')
  })

  it('throws when used outside provider', () => {
    expect(() => renderHook(() => useContextProvider())).toThrow(
      'TestContext must be used within its corresponding Provider'
    )
  })
})
