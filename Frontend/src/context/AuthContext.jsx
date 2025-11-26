import React from 'react'
export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  // Backend server URL (matches Backend/index.js PORT in .env)
  const serverURL = 'http://localhost:8000'
  const value = { serverURL }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider