import { useState } from 'react'

const useFormState = (init: string) => {
  const [state, setState] = useState(init)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }

  return [state, setState, onChange] as const
}

export default useFormState
