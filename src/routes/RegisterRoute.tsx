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
                selected={country ? [country] : ['United States']}
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

          <Button type="submit" sentiment="accented" appearance="solid">
            Register
          </Button>
        </Form>
      </CenteredLayout>
    </>
  )
}

export default RegisterRoute
