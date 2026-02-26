import {
  Dropdown,
  FlexLayout,
  FormField,
  FormFieldLabel,
  Input,
  Option,
  Button
} from '@salt-ds/core'
import { countries } from 'countries-list'
import useFormState from '../hooks/useFormState'
import Form from '../components/Form'
import CenteredLayout from '../components/CenteredLayout'
import { useContext, useState } from 'react'
import { load } from '../utils'
import { AuthContext } from '../contexts/AuthContext'
import Loading from '../components/Loading'
import Toast from '../components/Toast'

const RegisterRoute = () => {
  const authContext = useContext(AuthContext)
  const [firstName, setFirstName, onFirstNameChange] = useFormState('')
  const [lastName, setLastName, onLastNameChange] = useFormState('')
  const [city, setCity, onCityChange] = useFormState('')
  const [email, setEmail, onEmailChange] = useFormState('')
  const [password, setPassword, onPasswordChange] = useFormState('')
  const [country, setCountry] = useFormState('United States')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setCity('')
    setEmail('')
    setPassword('')
    setCountry('United States')
  }

  const onRegister = async (event: React.SubmitEvent) => {
    event.preventDefault()
    setIsError(false)

    try {
      const user = await load(
        authContext?.registerUser({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          locationCity: city,
          locationCountry: country
        }),
        setIsLoading
      )

      resetForm()

      console.log(user)
    } catch {
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
          text="Couldn't register"
          subText="Email already in use"
        />
      )}

      <CenteredLayout>
        <h1>Register</h1>

        <Form onSubmit={onRegister}>
          <FlexLayout>
            <FormField>
              <FormFieldLabel>First Name</FormFieldLabel>
              <Input
                value={firstName}
                onChange={onFirstNameChange}
                inputProps={{
                  type: 'text',
                  id: 'firstName',
                  name: 'firstName',
                  required: true
                }}
              />
            </FormField>

            <FormField>
              <FormFieldLabel>Last Name</FormFieldLabel>
              <Input
                value={lastName}
                onChange={onLastNameChange}
                inputProps={{
                  type: 'text',
                  id: 'lastName',
                  name: 'lastName',
                  required: true
                }}
              />
            </FormField>
          </FlexLayout>

          <FlexLayout>
            <FormField>
              <FormFieldLabel>City</FormFieldLabel>
              <Input
                value={city}
                onChange={onCityChange}
                inputProps={{
                  type: 'text',
                  id: 'city',
                  name: 'city',
                  required: true
                }}
              />
            </FormField>

            <FormField>
              <FormFieldLabel>Country</FormFieldLabel>
              <Dropdown
                selected={country ? [country] : []}
                onSelectionChange={(event, selection) =>
                  setCountry(selection[0] ?? '')
                }
                required={true}
              >
                {Object.values(countries).map((c) => (
                  <Option value={c.name} key={c.name} />
                ))}
              </Dropdown>
            </FormField>
          </FlexLayout>

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
            Register
          </Button>
        </Form>
      </CenteredLayout>
    </>
  )
}

export default RegisterRoute
