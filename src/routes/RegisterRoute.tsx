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
  const [firstName, onFirstNameChange] = useFormState('')
  const [lastName, onLastNameChange] = useFormState('')
  const [city, onCityChange] = useFormState('')
  const [email, onEmailChange] = useFormState('')
  const [password, onPasswordChange] = useFormState('')
  const [country, onCountryChange, setCountryChange] =
    useFormState('United States')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

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
                inputProps={{
                  type: 'text',
                  id: 'firstName',
                  name: 'firstName',
                  value: firstName,
                  onChange: onFirstNameChange,
                  required: true
                }}
              />
            </FormField>

            <FormField>
              <FormFieldLabel>Last Name</FormFieldLabel>
              <Input
                inputProps={{
                  type: 'text',
                  id: 'lastName',
                  name: 'lastName',
                  value: lastName,
                  onChange: onLastNameChange,
                  required: true
                }}
              />
            </FormField>
          </FlexLayout>

          <FlexLayout>
            <FormField>
              <FormFieldLabel>City</FormFieldLabel>
              <Input
                inputProps={{
                  type: 'text',
                  id: 'city',
                  name: 'city',
                  value: city,
                  onChange: onCityChange,
                  required: true
                }}
              />
            </FormField>

            <FormField>
              <FormFieldLabel>Country</FormFieldLabel>
              <Dropdown
                selected={country ? [country] : []}
                onSelectionChange={(event, selection) =>
                  setCountryChange(selection[0] ?? '')
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
