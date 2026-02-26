import { FormField, FormFieldLabel, Input, StackLayout } from '@salt-ds/core'
import useFormState from '../hooks/useFormState'
import CenteredLayout from '../components/CenteredLayout'
import Form from '../components/Form'

const LoginRoute = () => {
  const [email, onEmailChange] = useFormState('')
  const [password, onPasswordChange] = useFormState('')

  const onLogin = async (event: React.SubmitEvent) => {
    event.preventDefault()
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
                id: 'email',
                name: 'email',
                value: email,
                onChange: onEmailChange
              }}
            />
          </FormField>
          <FormField>
            <FormFieldLabel>Password</FormFieldLabel>
            <Input
              inputProps={{
                id: 'password',
                name: 'password',
                value: password,
                onChange: onPasswordChange
              }}
            />
          </FormField>
        </Form>
      </CenteredLayout>
    </>
  )
}

export default LoginRoute
