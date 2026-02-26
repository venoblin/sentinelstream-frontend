export const load = (
  promise: Promise<any> | undefined,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true)
  return promise
    ?.then((res) => {
      setIsLoading(false)
      return res
    })
    .catch((error) => {
      setIsLoading(false)
      throw new Error(error)
    })
}
