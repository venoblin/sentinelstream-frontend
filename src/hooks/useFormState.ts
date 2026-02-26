import { useState } from 'react'

const useFormState = (init: string) => {
  const [state, setState] = useState(init)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }

  return [state, onChange, setState] as const
}

export default useFormState
