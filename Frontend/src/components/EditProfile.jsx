import React, { useContext, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { UserDataContext } from '../context/userContext';
import profileDp from '../assets/profileBlanck.webp'
function EditProfile() {
  let { edit, setEdit, userData, setUserData } = useContext(UserDataContext)
  let [ firstName , setFirstName ] = useState(userData.firstName || "");
  let [ lastName , setLastName ] = useState(userData.lastName || "");
  let [ userName , setUserName ] = useState(userData.userName || "");
  let [ headline , setHeadline ] = useState(userData.headline || "");
  let [ location , setLocation ] = useState(userData.location || "");
  let [ gender, setGender ] = useState(userData.gender || "");
  return (
    <div className='w-full h-[100vh] fixed top-0  z-[100] flex-shrink-0 flex justify-center items-center'>
      <div className='w-full h-full bg-black opacity-[0.5] absolute '></div>
      <div className='w-[90%] max-w-[500px] h-[600px] bg-white relative z-[200] shadow-lg rounded-lg p-[10px] overflow-auto'>
        <div className="absolute top-[20px] right-[20px]  "><RxCross2 onClick={() => setEdit(false)} className='w-[25px] h-[25px] text-gray-800 font-bold cursor-pointer' /></div>
        <div className="w-full h-[150px] bg-gray-500 rounded-lg mt-[40px] overflow-hidden">
          <img src="" alt="" className='w-full' />
           <IoCameraOutline className='absolute right-[20px] top-[60px] w-[25px] h-[25px] text-white cursor-pointer'  />
        </div>
        <div className='w-[80px] h-[80px] m-3 rounded-full overflow-hidden border absolute top-[150px] ml-[20px]'>
          <img src={profileDp} alt='Profile' className='w-full h-full object-cover' />

        </div>
         <div className="w-[20px] h-[20px]  bg-[#17c1ff] absolute top-[210px] left-[90px] rounded-full flex justify-center items-center">
                    <FiPlus className='text-white' />
                  </div>
                 <form className='w-full flex flex-col items-center justify-center gap-4 mt-[60px] px-4'>

  <input
    type="text"
    placeholder="First Name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    className="w-full border border-gray-300 rounded-md p-2 bg-white text-black focus:outline-none focus:border-blue-500"
  />

  <input
    type="text"
    placeholder="Last Name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    className="w-full border border-gray-300 rounded-md p-2 bg-white text-black focus:outline-none focus:border-blue-500"
  />

  <input
    type="text"
    placeholder="User Name"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
    className="w-full border border-gray-300 rounded-md p-2 bg-white text-black focus:outline-none focus:border-blue-500"
  />

  <input
    type="text"
    placeholder="Headline"
    value={headline}
    onChange={(e) => setHeadline(e.target.value)}
    className="w-full border border-gray-300 rounded-md p-2 bg-white text-black focus:outline-none focus:border-blue-500"
  />

  <input
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="w-full border border-gray-300 rounded-md p-2 bg-white text-black focus:outline-none focus:border-blue-500"
  />

  <input
    type="text"
    placeholder="Gender (Male / Female / Other)"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    className="w-full border border-gray-300 rounded-md p-2 bg-white text-black focus:outline-none focus:border-blue-500"
  />
  <div>
  <h1>Skilla</h1>

  </div>
</form>

      </div>
    </div>
  )
}
export default EditProfile