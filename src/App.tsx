import './App.css'
import Logo from './components/Logo'
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router'
import { useContext, useEffect } from 'react'
import {
  BorderItem,
  BorderLayout,
  StackLayout,
  NavigationItem
} from '@salt-ds/core'
import { AuthContext } from './contexts/AuthContext'
import LoginRoute from './routes/LoginRoute'
import RegisterRoute from './routes/RegisterRoute'
import NotFoundRoute from './routes/NotFoundRoute'

const App = () => {
  const authContext = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

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

  useEffect(() => {
    if (location.pathname === '/' && !authContext?.isAuthenticated)
      navigate('/login')
  })

  return (
    <>
      <BorderLayout>
        <BorderItem position="north" padding={3}>
          <Logo />
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
          <StackLayout>
            <Routes>
              {authContext?.isAuthenticated ? (
                <>
                  <Route />
                </>
              ) : (
                <>
                  <Route path="/login" element={<LoginRoute />} />
                  <Route path="/register" element={<RegisterRoute />} />
                  <Route path="*" element={<NotFoundRoute />} />
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
