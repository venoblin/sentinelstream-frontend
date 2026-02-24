import './App.css'
import { Button, StackLayout, Text } from '@salt-ds/core'
import { NotificationIcon } from '@salt-ds/icons'

function App() {
  return (
    <>
      <h1>SentinelStream</h1>

      <StackLayout gap={2} style={{ padding: 20 }}>
        <Text styleAs="h1">SentinelStream Dashboard</Text>
        <Button variant="cta">
          <NotificationIcon /> Acknowledge Fraud Alert
        </Button>
      </StackLayout>
    </>
  )
}

export default App
