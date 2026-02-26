import { StackLayout } from '@salt-ds/core'

const CenteredLayout = (props: React.PropsWithChildren) => {
  return (
    <StackLayout
      style={{ minWidth: '500px', maxWidth: '750px', margin: 'auto auto' }}
    >
      {props.children}
    </StackLayout>
  )
}

export default CenteredLayout
