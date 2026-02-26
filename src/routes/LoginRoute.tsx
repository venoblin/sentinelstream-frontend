import { Button, FormField, FormFieldLabel, Input } from '@salt-ds/core'
import useFormState from '../hooks/useFormState'
import CenteredLayout from '../components/CenteredLayout'
import Form from '../components/Form'

const LoginRoute = () => {
  const [email, onEmailChange] = useFormState('')
  const [password, onPasswordChange] = useFormState('')

  const onLogin = async (event: React.SubmitEvent) => {
    event.preventDefault()
    console.log('hi')
  }

  return (
    <>
      <CenteredLayout>
        <h1>Login</h1>

        <Form onSubmit={onLogin}>
          <FormField>
            <FormFieldLabel>Email</FormFieldLabel>
            <Input
              inputProps={{
                type: 'email',
                id: 'email',
                name: 'email',
                value: email,
                onChange: onEmailChange,
                required: true
              }}
            />
          </FormField>
          <FormField>
            <FormFieldLabel>Password</FormFieldLabel>
            <Input
              inputProps={{
                type: 'password',
                id: 'password',
                name: 'password',
                value: password,
                onChange: onPasswordChange,
                required: true
              }}
            />
          </FormField>

          <Button type="submit" sentiment="accented" appearance="solid">
            Login
          </Button>
        </Form>
      </CenteredLayout>
    </>
  )
}

export default LoginRoute
