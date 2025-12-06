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

  return (
    <header className='w-full bg-white shadow  md:justify-around justify-between top-0 z-40 absolute'>
      <div className='max-w-6xl mx-auto px-4 flex  h-16'>
        {/* Left: logo + (desktop) search */}
        <div className='flex items-center gap-4'>
          <Link to='/' className='flex items-center'>
            <img src={logo2} alt='Logo' className='w-10 h-10' />
          </Link>

          <div className='flex items-center bg-gray-100 rounded-full px-3 py-2 w-[250px] md:w-[500px] lg:w-[600px]'>
            <FaSearch className='text-gray-500 mr-3' />
            <input type='text' placeholder='Search' className='bg-transparent outline-none w-full text-sm' />
          </div>
        </div>

        {/* Center: nav links (hidden on small screens) */}
        <nav className='flex-1 hidden sm:flex justify-center relative'>
   
          <ul className='flex items-center gap-8'>
            <li className='flex flex-col items-center text-gray-600 hover:text-black'>
              <FaHome className='text-2xl' />
              <span className='text-xs'>Home</span>
            </li>
            <li className='flex flex-col items-center text-gray-600 hover:text-black'>
              <ImUsers className='text-2xl' />
              <span className='text-xs'>My Network</span>
            </li>
            <li className='flex flex-col items-center text-gray-600 hover:text-black'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 8v6m-8-6v6M3 20h18' />
              </svg>
              <span className='text-xs'>Jobs</span>
            </li>
            <li className='flex flex-col items-center text-gray-600 hover:text-black'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 12c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              <span className='text-xs'>Messaging</span>
            </li>
          </ul>
        </nav>

        {/* Right: notifications + profile + mobile menu button */}
        <div className='flex items-center gap-4'>
          <button className='relative p-2 rounded hover:bg-gray-100 sm:inline-flex'>
            <IoNotifications className='text-2xl text-gray-600' />
            <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>3</span>
          </button>

          <div className='relative' ref={profileRef}>
            <button
              onClick={() => setProfileOpen((s) => !s)}
              aria-expanded={profileOpen}
              className='sm:flex items-center gap-2 cursor-pointer'
            >
              <div className='w-10 h-10 m-3 rounded-full overflow-hidden border'>
                <img src={profileDp} alt='Profile' className='w-full h-full object-cover' />
              </div>
            </button>

            {profileOpen && (
              <div className='absolute -right-12 top-12 w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-3 text-sm z-50'>
                <div className='flex items-center gap-3 pb-3'>
                  <div className='w-12 h-11 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold'>
                    {userData?.user?.firstName?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>{userData?.user?.firstName} {userData?.user?.lastName || 'Your Name'}</div>
                    <div className='text-xs text-gray-500'>{userData?.user?.email || 'user@example.com'}</div>
                  </div>
                </div>
                <hr className='my-3' />
                <Link to='/profile' className='block w-full py-2 px-3 rounded text-gray-700 hover:bg-blue-50 text-left'>View Profile</Link>
                <Link to='/network' className='block w-full py-2 px-3 rounded text-gray-700 hover:bg-blue-50 text-left'>My Network</Link>
                <hr className='my-3' />
                <button
                  className='w-full py-2 px-3 rounded text-red-600 hover:bg-red-50 text-left font-medium'
                  onClick={async () => {
                    try {
                      await axios.post(`${serverURL}/api/auth/logout`, {}, { withCredentials: true })
                    } catch (e) {
                      console.warn('Logout failed', e)
                    }
                    setUserData(null)
                    navigate('/login')
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>


        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className='sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md'>
        <ul className='flex justify-around items-center h-16'>
          <li>
            <Link to='/' className='flex flex-col items-center justify-center py-2 text-gray-600 hover:text-black'>
              <FaHome className='w-6 h-6' /> <span className='text-xs mt-1'>Home</span>
            </Link>
          </li>
          <li>
            <Link to='#' className='flex flex-col items-center justify-center py-2 text-gray-600 hover:text-black'>
              <ImUsers className='w-6 h-6' /> <span className='text-xs mt-1'>Network</span>
            </Link>
          </li>
          <li>
            <Link to='#' className='flex flex-col items-center justify-center py-2 text-gray-600 hover:text-black'>
              <span className='text-2xl'>💼</span> <span className='text-xs mt-1'>Jobs</span>
            </Link>
          </li>
          <li>
            <Link to='#' className='flex flex-col items-center justify-center py-2 text-gray-600 hover:text-black'>
              <span className='text-2xl'>💬</span> <span className='text-xs mt-1'>Messaging</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Nav