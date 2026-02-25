import './App.css'
import { Link, useLocation } from 'react-router'
import {
  BorderItem,
  BorderLayout,
  StackLayout,
  NavigationItem
} from '@salt-ds/core'
import Logo from './components/Logo'

const App = () => {
  const location = useLocation()

  const routes = [
    {
      href: '/',
      title: 'Dashboard'
    },
    {
      href: '/customers',
      title: 'Customers'
    },
    {
      href: '/transactions',
      title: 'Transactions'
    },
    {
      href: '/devices',
      title: 'Devices'
    },
    {
      href: '/logs',
      title: 'Logs'
    }
  ]

  return (
    <>
      <BorderLayout>
        <BorderItem position="north" padding={3}>
          <Logo />
        </BorderItem>

        <BorderItem position="west">
          <StackLayout
            as="ul"
            gap="var(--salt-spacing-fixed-100)"
            style={{ listStyle: 'none' }}
          >
            {routes.map((item) => (
              <li key={item.href}>
                <NavigationItem
                  href={item.href}
                  orientation="vertical"
                  render={<Link to={item.href} />}
                  active={location.pathname === item.href}
                >
                  {item.title}
                </NavigationItem>
              </li>
            ))}
          </StackLayout>
        </BorderItem>

        <BorderItem position="center">
          <StackLayout></StackLayout>
        </BorderItem>
      </BorderLayout>
    </>
  )
}

export default App
