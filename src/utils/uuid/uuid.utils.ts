export const generateUUID = (): string => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID()
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replaceAll(/[xy]/g, (character) => {
    const randomValue = Math.trunc(Math.random() * 16)

    const hexValue = character === 'x' ? randomValue : (randomValue & 0x3) | 0x8

    return hexValue.toString(16)
  })
}
