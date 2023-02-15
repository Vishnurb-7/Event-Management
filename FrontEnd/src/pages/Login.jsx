import React from 'react'
import {FcGoogle} from "react-icons/fc"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const signupHandle = () =>{
    navigate("/signup")
  }
  return (
    <div className='w-fill h-[1007px] grid lg:grid-cols-3 md:grid-cols-5 bg-white'>
      <div className='md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center'>
              <h1 className='font-Viaoda text-7xl mb-8'>Login</h1>
              <input type="text" name='email' value='' placeholder='Email' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center'/>
              <input type="password" name='password' value='' placeholder='Password' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center'/>
              <button className='w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-2xl text-center hover:scale-105 hover:bg-black hover:text-white'>Login</button>
              <p className='mt-5'>Register using <a className='text-blue-900 font-semibold cursor-pointer' onClick={signupHandle}>Signup</a></p>
              <button className='w-[60%] h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-3xl text-center  hover:bg-black hover:text-white'><span className='w-[20%] h-20 flex items-center justify-center'><FcGoogle/></span>Login with google</button>
      </div>
      <div className='hidden md:flex items-center flex-col md:col-span-3 lg:col-span-2'>
              <img src="../../public/logi.jpg" alt="LOGIN" className='w-[75%]' />
              
              <h1 className='font-Viaoda text-7xl text-black-600 absolute top-2/3'>Make everything easy</h1>
      </div>

    </div>
  )
}

export default Login