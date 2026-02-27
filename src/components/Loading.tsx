import { Spinner } from '@salt-ds/core'

const Loading = () => {
  return (
    <Spinner
      style={{ margin: '2rem auto' }}
      aria-label="loading"
      role="status"
      size="large"
    />
  )
}

export default Loading
