import './App.css'
import Logo from './components/Logo'
import type { RouteType } from './types'
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router'
import { useContext, useEffect } from 'react'
import {
  BorderItem,
  BorderLayout,
  StackLayout,
  NavigationItem,
  FlexLayout
} from '@salt-ds/core'
import { AuthContext } from './contexts/AuthContext'
import LoginRoute from './routes/LoginRoute'
import RegisterRoute from './routes/RegisterRoute'

const App = () => {
  const authContext = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const routes: RouteType[] = [
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

  useEffect(() => {
    if (
      (!authContext?.isAuthenticated && location.pathname !== '/login') ||
      location.pathname !== '/register'
    ) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <BorderLayout style={{ maxWidth: '1400px', margin: 'auto auto' }}>
        <BorderItem position="north" padding={3}>
          <FlexLayout justify="space-between">
            <Logo />

            {!authContext?.isAuthenticated &&
            location.pathname === '/register' ? (
              <NavigationItem
                href="/login"
                orientation="horizontal"
                render={<Link to="/login" />}
                active={true}
              >
                Login
              </NavigationItem>
            ) : (
              <NavigationItem
                href="/register"
                orientation="horizontal"
                render={<Link to="/register" />}
                active={true}
              >
                Register
              </NavigationItem>
            )}
          </FlexLayout>
        </BorderItem>

        {authContext?.isAuthenticated && (
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
        )}

        <BorderItem position="center">
          <StackLayout style={{ maxWidth: '1200px', margin: 'auto auto' }}>
            <Routes>
              {authContext?.isAuthenticated ? (
                <>
                  <Route />
                </>
              ) : (
                <>
                  <Route path="/register" element={<RegisterRoute />} />
                  <Route path="*" element={<LoginRoute />} />
                </>
              )}
            </Routes>
          </StackLayout>
        </BorderItem>
      </BorderLayout>
    </>
  )
}

export default App
