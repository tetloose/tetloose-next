import { afterEach, describe, expect, it, vi } from 'vitest'
import { generateUUID } from './uuid.utils'

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

describe('generateUUID', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns a valid UUID v4 via crypto.randomUUID', () => {
    const result = generateUUID()

    expect(result).toMatch(UUID_REGEX)
  })

  it('returns a valid UUID v4 via fallback when crypto.randomUUID is unavailable', () => {
    vi.spyOn(globalThis, 'crypto', 'get').mockReturnValue({
      ...globalThis.crypto,
      randomUUID: undefined as unknown as () => `${string}-${string}-${string}-${string}-${string}`
    })

    const result = generateUUID()

    expect(result).toMatch(UUID_REGEX)
  })

  it('returns unique values on each call', () => {
    const results = new Set(Array.from({ length: 10 }, () => generateUUID()))

    expect(results.size).toBe(10)
  })
})
