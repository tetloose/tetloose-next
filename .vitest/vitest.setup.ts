import '@testing-library/jest-dom'
import 'vitest-canvas-mock'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

class ObserverMock {
  observe(): void {
    return undefined
  }
  disconnect(): void {
    return undefined
  }
  unobserve(): void {
    return undefined
  }
}

globalThis.ResizeObserver = ObserverMock

Object.defineProperty(globalThis, 'CSS', {
  value: { supports: () => false }
})

Object.defineProperty(globalThis, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false
  })
})

afterEach(() => {
  cleanup()
})
