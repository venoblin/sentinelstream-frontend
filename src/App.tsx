import './App.css'
import Logo from './components/Logo'
import type { RouteType } from './types'
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router'
import { useContext, useEffect, useState } from 'react'
import {
  BorderItem,
  BorderLayout,
  StackLayout,
  NavigationItem,
  FlexLayout
} from '@salt-ds/core'
import { AuthContext } from './contexts/AuthContext'
import Loading from './components/Loading'
import AvatarMenu from './components/AvatarMenu'
import RegisterRoute from './routes/RegisterRoute'
import LoginRoute from './routes/LoginRoute'
import AnalystsRoute from './routes/AnalystsRoute'
import CustomersRoute from './routes/CustomersRoute'
import DashboardRoute from './routes/DashboardRoute'
import DevicesRoute from './routes/DevicesRoute'
import LogsRoute from './routes/LogsRoute'
import TransactionsRoute from './routes/TransactionsRoute'
import ProfileRoute from './routes/ProfileRoute'

const App = () => {
  const authContext = useContext(AuthContext)
  const [isInitializing, setIsInitializing] = useState<boolean>(true)
  const location = useLocation()
  const navigate = useNavigate()

  const routes: RouteType[] = [
    {
      href: '/',
      title: 'Dashboard',
      RouteComponent: DashboardRoute
    },
    { href: '/analysts', title: 'Analysts', RouteComponent: AnalystsRoute },
    {
      href: '/customers',
      title: 'Customers',
      RouteComponent: CustomersRoute
    },
    {
      href: '/transactions',
      title: 'Transactions',
      RouteComponent: TransactionsRoute
    },
    {
      href: '/devices',
      title: 'Devices',
      RouteComponent: DevicesRoute
    },
    {
      href: '/logs',
      title: 'Logs',
      RouteComponent: LogsRoute
    }
  ]

  const checkSession = async () => {
    try {
      const res = await authContext?.getSession()

      if (res) {
        authContext?.setAuthentication(true, res.user)
      }
    } catch {
      authContext?.setAuthentication(false, null)
    } finally {
      setIsInitializing(false)
    }
  }

  useEffect(() => {
    checkSession()
  }, [])

  useEffect(() => {
    if (!isInitializing) {
      if (!authContext?.isAuthenticated && location.pathname !== '/register') {
        navigate('/login')
      }
    }
  }, [])

  if (isInitializing) {
    return <Loading />
  }

  return (
    <>
      <BorderLayout style={{ maxWidth: '1400px', margin: 'auto auto' }}>
        <BorderItem position="north" padding={3}>
          <FlexLayout justify="space-between">
            <Logo />

            {!authContext?.isAuthenticated ? (
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
              )
            ) : (
              <FlexLayout>
                <AvatarMenu />
              </FlexLayout>
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
              {routes.map((r) => (
                <li key={r.href}>
                  <NavigationItem
                    href={r.href}
                    orientation="vertical"
                    render={<Link to={r.href} />}
                    active={location.pathname === r.href}
                  >
                    {r.title}
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
                  {routes.map((r) => (
                    <Route path={r.href} element={<r.RouteComponent />} />
                  ))}
                  <Route path="/profile" element={<ProfileRoute />} />
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
