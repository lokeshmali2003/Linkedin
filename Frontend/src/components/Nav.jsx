import React from 'react'
import logo2 from '../assets/logo2.png'
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import profileDp from '../assets/profileBlanck.webp'
function Nav() {
  return (
    <div className='w-full h-[80px] bg-white top-0
    shadow-lg justify-center items-center flex'>
      <div className='flex justify-center items-center gap-[10px]'>
        <div>
      <img src={logo2} alt="" className='w-[50px]  ' />
        </div>
        <form className='w-[300px] h-[30px] bg-[#e9e5d4]'>
            <div className='flex items-center gap-2 border rounded-full px-4 py-2 w-[300px] md:w-[500px] lg:w-[600px]'>
                <FaSearch className='text-gray-500' />
                <input 
                  type="text" 
                  placeholder='Search' 
                  className='w-full focus:outline-none'
                />
            </div>
             
        </form>
        </div>

        <div>
          <div>
            <FaHome className='text-2xl'/>
            <div>Home</div>
          </div>
          <div>
            <ImUsers className='text-2xl'/>
            <div>My Network</div>
          </div>
          <div>
            <IoNotifications className='text-2xl'/>
            <div>Notifications</div>
          </div>
          <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
            <img src={profileDp} alt="Profile" className='w-full h-full' />
          </div>
        </div>
      </div>
  )
}

export default Nav