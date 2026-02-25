import type { FormStateType } from '../types/hooks'
import { useState } from 'react'

const useFormState = (obj: FormStateType) => {
  const [state, setState] = useState(obj.init)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }

  return [state, onChange, setState]
}

export default useFormState
