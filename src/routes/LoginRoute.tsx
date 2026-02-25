import {
  Dropdown,
  FlexLayout,
  FormField,
  FormFieldLabel,
  Input,
  Option
} from '@salt-ds/core'
import { countries } from 'countries-list'

const LoginRoute = () => {
  return (
    <>
      <h1>Login</h1>

      <FlexLayout>
        <FormField>
          <FormFieldLabel>First Name</FormFieldLabel>
          <Input />
        </FormField>

        <FormField>
          <FormFieldLabel>Last Name</FormFieldLabel>
          <Input />
        </FormField>
      </FlexLayout>

      <FlexLayout>
        <FormField>
          <FormFieldLabel>City</FormFieldLabel>
          <Input />
        </FormField>

        <FormField>
          <FormFieldLabel>Country</FormFieldLabel>
          <Dropdown>
            {Object.values(countries).map((c) => (
              <Option value={c.name} key={c.name} />
            ))}
          </Dropdown>
        </FormField>
      </FlexLayout>

      <FormField>
        <FormFieldLabel>Email</FormFieldLabel>
        <Input />
      </FormField>
      <FormField>
        <FormFieldLabel>Password</FormFieldLabel>
        <Input />
      </FormField>
    </>
  )
}

export default LoginRoute
