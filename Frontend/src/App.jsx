import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { UserDataContext } from './context/userContext.jsx'

function App() {
  const { userData } = React.useContext(UserDataContext)

  return (
    <Routes>
      <Route path='/' element={userData ? <Home /> : <Navigate to="/login" />} />
      <Route path='/login' element={userData ? <Navigate to="/" /> : <Login />} />
      <Route path='/signup' element={userData ? <Navigate to="/" /> : <Signup />} />
    </Routes>
  )
}

export default App