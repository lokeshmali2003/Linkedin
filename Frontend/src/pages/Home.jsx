import React, { useContext } from 'react'
import Nav from '../components/Nav.jsx'
import dp from '../assets/profileBlanck.webp'
import { FiPlus } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { UserDataContext } from '../context/userContext.jsx';
function Home() {
    const { userData, setUserData } = useContext(UserDataContext)
  return (
    <div className='w-full min-h-[100vh] bg-[#f0efe7] pt-[100px] flex items-start justify-center gap-[20px] px-[20px] flex-col lg:flex-row'>
      <Nav />
      <div className='w-full lg:w-[25%] rounded-lg min-h-[200px] bg-white shadow-lg p-[10px] relative' >
        <div className='w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden flex items-center justify-center'>
          <img src='' alt='' className='w-full' />
           <IoCameraOutline className='absolute right-[20px] top-[20px] w-[25px] h-[25px] text-gray-800 cursor-pointer'  />
        </div>
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden items-center justify-center absolute top-[65px] left-[35px] cursor-pointer' >
          <img src={dp} alt='' className='h-full' />
          
        </div>
         <div className="w-[20px] h-[20px]  bg-[#17c1ff] absolute top-[105px] left-[90px] rounded-full flex justify-center items-center">
            <FiPlus className='text-white' />
          </div>
          <div className='mt-[30px] pl-[20px] text-[19px] font-semibold text-gray-700'>
            <div>{`${userData?.user?.firstName} ${userData?.user?.lastName}`}</div>
            <div className='text-[15px] font-semibold text-gray-700'>{`${userData?.user?.headline || ""}`}</div>
            <div className='text-[15px] text-gray-500' >{`${userData?.user?.location}` }</div>
          </div>
      </div>

      <div className='w-full lg:w-[50%] min-h-[200px] bg-white shadow-lg'></div>

      <div className='w-full lg:w-[25%] min-h-[200px] bg-white shadow-lg'></div>
      
    </div>
  )
}

export default Home