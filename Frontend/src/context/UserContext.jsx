export const UserDataContext = createContext()

function UserContext({ children }) {
  const [userData, setUserData] = useState(null)
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(true)

  const { serverURL } = useContext(AuthContext)

  const getCurrentUser = async () => {
    try {
      setLoading(true)
      const result = await axios.get(
        `${serverURL}/api/v1/user/currentuser`,
        { withCredentials: true }
      )
      setUserData(result.data)
    } catch (error) {
      setUserData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (serverURL) getCurrentUser()
  }, [serverURL])

  const value = { 
    userData, 
    setUserData, 
    edit, 
    setEdit,
    getCurrentUser,
    loading
  }

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext
