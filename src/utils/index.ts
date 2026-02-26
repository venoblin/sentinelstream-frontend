export const load = (
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
