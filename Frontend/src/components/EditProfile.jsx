import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { UserDataContext } from '../context/userContext';
import profileDp from '../assets/profileBlanck.webp'
function EditProfile() {
  let { edit, setEdit, userData, setUserData } = useContext(UserDataContext)
  return (
    <div className='w-full h-[100vh] fixed top-0  z-[100] flex-shrink-0 flex justify-center items-center'>
      <div className='w-full h-full bg-black opacity-[0.5] absolute '></div>
      <div className='w-[90%] max-w-[500px] h-[600px] bg-white relative z-[200] shadow-lg rounded-lg p-[10px]'>
        <div className="absolute top-[20px] right-[20px] "><RxCross2 onClick={() => setEdit(false)} className='w-[25px] h-[25px] text-gray-800 font-bold cursor-pointer' /></div>
        <div className="w-full h-[150px] bg-gray-500 rounded-lg mt-[40px] overflow-hidden">
          <img src="" alt="" className='w-full' />
        </div>
        <div className='w-[80px] h-[80px] m-3 rounded-full overflow-hidden border absolute top-[150px] ml-[20px]'>
          <img src={profileDp} alt='Profile' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default EditProfile