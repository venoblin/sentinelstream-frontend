import { createContext } from 'react'

const AuthContext = createContext({})

const methods = {}

const AuthProvider = (props: React.PropsWithChildren) => {
  return (
    <AuthContext.Provider value={methods}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
