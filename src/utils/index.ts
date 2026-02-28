export const load = async (
  promise: Promise<any> | undefined,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!promise) return Promise.resolve()

  setIsLoading(true)

  return promise
    .then((res) => {
      setIsLoading(false)
      return res
    })
    .catch((error) => {
      setIsLoading(false)
      throw error
    })
}

export const capitalizeStr = (str: string): string => {
  if (str === '') return ''

  const firstLetter = str[0].toUpperCase()

  if (str.length >= 2) {
    const restOfStr = str.slice(1)
    return firstLetter + restOfStr
  }

  return firstLetter
}
