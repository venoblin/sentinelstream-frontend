export const storageGet = (key: string) => {
  const item = localStorage.getItem(key)

  if (item) {
    return JSON.parse(item)
  }
}

export const storageSet = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const storageRemove = (key: string) => {
  localStorage.removeItem(key)
}
