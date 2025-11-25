import { useState, useContext } from 'react'
import logo from '../assets/logo.svg'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'
function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  let {serverURL} = useContext(AuthContext);
  let {userData , setUserData} = useContext(UserDataContext);
  let navigate = Navigate();
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [userName, setUserName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');   
  let [loading , setLoading] = useState(false);
  let [err , setErr] = useState("");
    
   
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
   try{
    let result = await axios.post(`${serverURL}/api/auth/signup`,{
      firstName,
      lastName,
      userName,
      email,
      password
    },{withCredentials:true});
    console.log(result);   
    setUserData(result.data);
    navigate('/');
    setLoading(false);
    setFirstName('');
    setLastName('');
    setUserName('');
    setEmail('');
    setPassword(''); 

   }catch(err){
     setErr(err.response.data.message);
     setLoading(false);
   }
  }
 
  return (
    <div className='w-full h-screen flex flex-col justify-start gap-[10px]'>
      <div className='p-[30px] lg:px-[35px] w-full'>

        <img src={logo} alt="LinkedIn Logo" className='w-32 h-auto' />
      </div>
      <form className='flex flex-col items-center justify-center w-[90%] max-w-[400px] mx-auto h-[80%] gap-6 md:shadow-xl' onSubmit={handleSignup}>
        <h1 className='text-3xl font-bold mt-[-20px]'>Sign Up</h1>
        <input
          type="text"
          placeholder='First Name'
          className='w-[80%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />


        <input
          type="text"
          placeholder='Last Name'
          className='w-[80%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />

        <input
          type="text"
          placeholder='UserName'
          className='w-[80%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
        />

        <input
          type="email"
          placeholder='Email'
          className='w-[80%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
         
        <div className='relative w-[80%]'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10'
          />
          <button
            type='button'
            onClick={() => setShowPassword((s) => !s)}
            aria-pressed={showPassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600'
          >
            {showPassword ? (
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7c1.4 0 2.73.27 3.95.76' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 3l18 18' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
              </svg>
            )}
          </button>
        </div>


        {err && <p className='text-red-600'>{err}</p>}

        <button type="submit" className='w-[80%] p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300' disabled={loading}>{loading ? 'Loading...' : 'Sign Up'}</button>     

        <p>Already have a account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link></p>
      </form>
    </div>
  )
}

export default Signup