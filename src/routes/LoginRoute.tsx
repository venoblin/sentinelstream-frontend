import { Button, FormField, FormFieldLabel, Input } from '@salt-ds/core'
import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { load } from '../utils'
import useFormState from '../hooks/useFormState'
import CenteredLayout from '../components/CenteredLayout'
import Form from '../components/Form'
import Loading from '../components/Loading'
import Toast from '../components/Toast'

const LoginRoute = () => {
  const authContext = useContext(AuthContext)
  const [email, setEmail, onEmailChange] = useFormState('')
  const [password, setPassword, onPasswordChange] = useFormState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const onLogin = async (event: React.SubmitEvent) => {
    event.preventDefault()

    try {
      setIsError(false)

      const user = await load(
        authContext?.loginUser({
          email: email,
          password: password
        }),
        setIsLoading
      )

      resetForm()

      console.log(user)
    } catch {
      resetForm()
      setIsError(true)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      {isError && (
        <Toast
          status="error"
          text="Couldn't log in"
          subText="Email or password is incorrect"
        />
      )}

      <CenteredLayout>
        <h1>Login</h1>

        <Form onSubmit={onLogin}>
          <FormField>
            <FormFieldLabel>Email</FormFieldLabel>
            <Input
              value={email}
              onChange={onEmailChange}
              inputProps={{
                type: 'email',
                id: 'email',
                name: 'email',
                required: true
              }}
            />
          </FormField>
          <FormField>
            <FormFieldLabel>Password</FormFieldLabel>
            <Input
              value={password}
              onChange={onPasswordChange}
              inputProps={{
                type: 'password',
                id: 'password',
                name: 'password',
                required: true
              }}
            />
          </FormField>

          <Button
            type="submit"
            sentiment="accented"
            appearance="solid"
            style={{ width: 'fit-content' }}
          >
            Login
          </Button>
        </Form>
      </CenteredLayout>
    </>
  )
}

export default LoginRoute
