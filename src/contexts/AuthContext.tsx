import { createContext } from 'react'

const AuthContext = createContext({})

const AuthProvider = (props: React.PropsWithChildren) => {
  const methods = {}

  return (
    <AuthContext.Provider value={methods}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
