import './App.css'
import { Link, useLocation } from 'react-router'
import {
  BorderItem,
  BorderLayout,
  StackLayout,
  NavigationItem
} from '@salt-ds/core'

function App() {
  const location = useLocation()

  const navData = [
    {
      href: '/',
      title: 'Dashboard'
    }
  ]

  return (
    <>
      <BorderLayout>
        <BorderItem position="north"></BorderItem>

        <BorderItem position="west">
          <StackLayout
            as="ul"
            gap="var(--salt-spacing-fixed-100)"
            style={{ listStyle: 'none' }}
          >
            {navData.map((item) => (
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
          <StackLayout>
            <header>SentinelStream</header>
          </StackLayout>
        </BorderItem>
      </BorderLayout>
    </>
  )
}

export default App
