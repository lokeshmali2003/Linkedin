import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { UserDataContext } from '../context/userContext';
function EditProfile() {
  let {edit , setEdit, userData , setUserData}= useContext(UserDataContext)
  return (
    <div className='w-full h-[100vh] fixed top-0  z-[100] flex-shrink-0 flex justify-center items-center'>
        <div className='w-full h-full bg-black opacity-[0.5] absolute'></div>
        <div className='w-[90%] max-w-[500px] h-[600px] bg-white relative z-[200] shadow-lg rounded-lg'>
         <div className="absolute top-[20px] right-[20px] "><RxCross2 onClick={()=> setEdit(false)} className='w-[25px] h-[25px] text-gray-800 font-bold cursor-pointer' /></div>
        </div>
        </div>
  )
}

export default EditProfile