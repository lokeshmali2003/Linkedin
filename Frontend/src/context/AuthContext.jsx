import React from 'react'
export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const serverURL = 'http://localhost:8000'
  const value = { serverURL }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider