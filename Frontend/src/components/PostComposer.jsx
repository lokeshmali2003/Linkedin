import React, { useContext, useState } from 'react'
import { UserDataContext } from '../context/userContext'

function PostComposer() {
  const { userData } = useContext(UserDataContext)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now just clear the composer; integration with backend feed can be added
    setText('')
  }

  const name = userData?.user?.firstName ? `${userData.user.firstName}` : 'You'

  return (
    <div className='w-full bg-white rounded shadow p-4'>
      <div className='flex items-start gap-3'>
        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white'>
          {name.charAt(0)}
        </div>
        <form onSubmit={handleSubmit} className='flex-1'>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Start a post'
            className='w-full border rounded-full px-4 py-3 text-sm bg-gray-50 focus:outline-none'
          />
        </form>
      </div>
    </div>
  )
}

export default PostComposer
