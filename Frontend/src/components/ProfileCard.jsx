import React, { useContext } from 'react'
import { UserDataContext } from '../context/userContext'

function ProfileCard() {
  const { userData } = useContext(UserDataContext)

  const name = userData?.user?.firstName
    ? `${userData.user.firstName} ${userData.user.lastName || ''}`
    : 'Your Name'

  const headline = userData?.user?.headline || 'MERN DEVELOPER'
  const location = userData?.user?.location || 'India'

  return (
    <aside className='w-full max-w-xs bg-white rounded shadow p-4'>
      <div className='h-20 bg-gray-200 rounded mb-4' />
      <div className='-mt-10 flex items-center gap-3'>
        <div className='w-16 h-16 rounded-full bg-gray-300 border-4 border-white flex items-center justify-center text-white'>
          {name.charAt(0)}
        </div>
        <div>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <p className='text-sm text-gray-500'>{headline}</p>
          <p className='text-xs text-gray-400'>{location}</p>
        </div>
      </div>

      <button className='mt-4 w-full border border-blue-300 text-blue-600 py-2 rounded'>Edit Profile</button>
    </aside>
  )
}

export default ProfileCard
