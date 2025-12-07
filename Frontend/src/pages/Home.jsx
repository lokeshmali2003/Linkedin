import React from 'react'
import Nav from '../components/Nav.jsx'
import dp from '../assets/profileBlanck.webp'
function Home() {
  return (
    <div className='w-full min-h-[100vh] bg-[#f0efe7] pt-[100px] flex items-start justify-center gap-[20px] px-[20px] flex-col lg:flex-row'>
      <Nav />
      <div className='w-full lg:w-[25%] rounded-lg min-h-[200px] bg-white shadow-lg p-[10px]' >
        <div className='w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden flex items-center justify-center'>
          <img src='' alt='' className='w-full' />
        </div>
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden items-center justify-center relative top-[-45px] left-[30px]' >
          <img src={dp} alt='' className='h-full' />
        </div>
      </div>

      <div className='w-full lg:w-[50%] min-h-[200px] bg-white shadow-lg'></div>

      <div className='w-full lg:w-[25%] min-h-[200px] bg-white shadow-lg'></div>
      
    </div>
  )
}

export default Home