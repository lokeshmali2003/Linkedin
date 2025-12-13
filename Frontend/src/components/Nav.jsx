import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/logo2.png'
import { FaSearch, FaHome } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'
import { IoNotifications } from 'react-icons/io5'
import { FiMenu, FiX } from 'react-icons/fi'
import profileDp from '../assets/profileBlanck.webp'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'
import { AuthContext } from '../context/AuthContext'

function Nav() {
  const [profileOpen, setProfileOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const profileRef = useRef(null)
  const navigate = useNavigate()
  const { userData, setUserData } = useContext(UserDataContext)
  const { serverURL } = useContext(AuthContext)

  useEffect(() => {
    function onDoc(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const handleLogout = async () => {
    try {
      await axios.post(`${serverURL}/api/auth/logout`, {}, { withCredentials: true })
    } catch (e) {
      console.warn('Logout failed', e)
    }
    setUserData(null)
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-full px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <img src={logo2} alt="Logo" className="h-10 w-auto" />
            </Link>
            
            {/* Desktop Search - Hidden on mobile */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-56">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Center: Desktop Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition">
              <FaHome size={20} />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link to="/network" className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition">
              <ImUsers size={20} />
              <span className="text-xs mt-1">Network</span>
            </Link>
          </div>

          {/* Right: Notifications + Profile + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative text-gray-700 hover:text-blue-600 transition p-2">
              <IoNotifications size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>

            {/* Profile Dropdown - Hidden on mobile */}
            <div ref={profileRef} className="hidden sm:block relative">
              <button
                onClick={() => setProfileOpen((s) => !s)}
                aria-expanded={profileOpen}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-full p-2 transition"
              >
                <img
                  src={profileDp}
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium hidden md:block text-gray-700">
                  {userData?.user?.firstName || 'User'}
                </span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={profileDp}
                        alt="Profile"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">
                          {userData?.user?.firstName} {userData?.user?.lastName || 'Your Name'}
                        </p>
                        <p className="text-xs text-gray-600">{userData?.user?.email || 'user@example.com'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition">
                      View Profile
                    </Link>
                    <Link to="/network" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition">
                      My Network
                    </Link>
                  </div>

                  <div className="border-t border-gray-100 px-4 py-2">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Visible only on small screens */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-3">
              <Link to="/" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>
                <FaHome size={20} />
                <span>Home</span>
              </Link>
              <Link to="/network" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>
                <ImUsers size={20} />
                <span>Network</span>
              </Link>
              <hr className="my-2" />
              <button
                onClick={() => {
                  handleLogout()
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition font-medium w-full"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav