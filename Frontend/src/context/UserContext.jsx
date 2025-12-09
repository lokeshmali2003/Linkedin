import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'

export const UserDataContext = createContext()

function UserContext({ children }) {
  const [userData, setUserData] = useState(null)
  const { serverURL } = useContext(AuthContext)
let [edit , setEdit] = useState(false)
  const getCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverURL}/api/v1/user/currentuser`, { withCredentials: true })
      console.log(result)
      setUserData(result.data)
    } catch (error) {
      console.log(error)
      setUserData(null)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  const value = { userData, setUserData , edit , setEdit }

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext