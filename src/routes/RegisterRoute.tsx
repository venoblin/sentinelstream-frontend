import {
  Dropdown,
  FlexLayout,
  FormField,
  FormFieldLabel,
  Input,
  Option,
  StackLayout
} from '@salt-ds/core'
import { countries } from 'countries-list'
import useFormState from '../hooks/useFormState'
import Form from '../components/Form'
import CenteredLayout from '../components/CenteredLayout'

const RegisterRoute = () => {
  const [firstName, onFirstNameChange] = useFormState('')
  const [lastName, onLastNameChange] = useFormState('')
  const [city, onCityChange] = useFormState('')
  const [email, onEmailChange] = useFormState('')
  const [password, onPasswordChange] = useFormState('')
  const [country, onCountryChange, setCountryChange] = useFormState('')

  const onRegister = async (event: React.SubmitEvent) => {
    event.preventDefault()
  }

  return (
    <>
      <CenteredLayout>
        <h1>Register</h1>

        <Form onSubmit={onRegister}>
          <FlexLayout>
            <FormField>
              <FormFieldLabel>First Name</FormFieldLabel>
              <Input
                inputProps={{
                  id: 'firstName',
                  name: 'firstName',
                  value: firstName,
                  onChange: onFirstNameChange
                }}
              />
            </FormField>

            <FormField>
              <FormFieldLabel>Last Name</FormFieldLabel>
              <Input
                inputProps={{
                  id: 'lastName',
                  name: 'lastName',
                  value: lastName,
                  onChange: onLastNameChange
                }}
              />
            </FormField>
          </FlexLayout>

          <FlexLayout>
            <FormField>
              <FormFieldLabel>City</FormFieldLabel>
              <Input
                inputProps={{
                  id: 'city',
                  name: 'city',
                  value: city,
                  onChange: onCityChange
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

export default RegisterRoute
