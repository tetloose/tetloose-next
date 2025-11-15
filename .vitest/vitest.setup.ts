import '@testing-library/jest-dom'
import 'vitest-canvas-mock'
import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import { afterEach, expect } from 'vitest'

expect.extend(matchers)

class ObserverMock {
  observe() {}
  disconnect() {}
  unobserve() {}
}

global.ResizeObserver = ObserverMock

afterEach(() => {
  cleanup()
})
