export const generateUUID = (): string => {
  if (
    typeof globalThis.crypto !== 'undefined' &&
    globalThis.crypto.randomUUID
  ) {
    return globalThis.crypto.randomUUID()
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    (character) => {
      const randomValue = (Math.random() * 16) | 0

      const hexValue =
        character === 'x' ? randomValue : (randomValue & 0x3) | 0x8

      return hexValue.toString(16)
    }
  )
}
