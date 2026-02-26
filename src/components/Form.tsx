import { StackLayout } from '@salt-ds/core'
import type { ReactNode } from 'react'

const Form = (props: {
  onSubmit: (event: React.SubmitEvent) => {}
  children: ReactNode | undefined
}) => {
  return (
    <form onSubmit={props.onSubmit}>
      <StackLayout gap={3}>{props.children}</StackLayout>
    </form>
  )
}

export default Form
