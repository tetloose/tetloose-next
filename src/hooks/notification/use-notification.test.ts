import toast from 'react-hot-toast'
import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useNotification } from './use-notification.hooks'

vi.mock('react-hot-toast', () => ({
  default: Object.assign(vi.fn(), {
    success: vi.fn(),
    error: vi.fn(),
    loading: vi.fn()
  })
}))

describe('useNotification', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('calls toast with a string message for default type', () => {
    const { result } = renderHook(() => useNotification())

    result.current('hello', 'default')

    expect(toast).toHaveBeenCalledWith('hello')
  })

  it('calls toast.success with a string message', () => {
    const { result } = renderHook(() => useNotification())

    result.current('saved', 'success')

    expect(toast.success).toHaveBeenCalledWith('saved')
  })

  it('calls toast.error with a string message', () => {
    const { result } = renderHook(() => useNotification())

    result.current('something went wrong', 'error')

    expect(toast.error).toHaveBeenCalledWith('something went wrong')
  })

  it('calls toast.loading with a string message', () => {
    const { result } = renderHook(() => useNotification())

    result.current('loading...', 'loading')

    expect(toast.loading).toHaveBeenCalledWith('loading...')
  })

  it('extracts message from an Error instance', () => {
    const { result } = renderHook(() => useNotification())

    result.current(new Error('network failure'), 'error')

    expect(toast.error).toHaveBeenCalledWith('network failure')
  })
})
