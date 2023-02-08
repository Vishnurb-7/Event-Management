import React from 'react'
import { FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()
  const loginHandle = ()=>{
    navigate("/login")
  }
  return (
    <div>
      <div className='w-full h-[1007px] grid lg:grid-cols-3 md:grid-cols-5 bg-white'>
    <div className='md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center'>
        <h1 className='font-Viaoda text-7xl mb-8'>Signup</h1>
        <input type="text" name='email' value='' placeholder='Email' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center' />
        <input type="text" name='Phone' value='' placeholder='Phone' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center'/>
        <input type="password" name='email' value='' placeholder='Password' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center'/>
        <button className='w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center'>Signup</button>
        <p className='mt-5'>Already a member?<a className='text-blue-900 font-semibold cursor-pointer' onClick={loginHandle}>Login</a></p>
        <button className='w-[60%] h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-2xl text-center'><span className='w-[20%] h-20 flex items-center justify-center'><FcGoogle/></span>Login with google</button>
    </div>
    <div className='hidden md:flex items-center flex-col md:col-span-3 lg:col-span-2'>
        <img src="../../public/logi.jpg" alt="LOGIN" className='w-[75%]' />
        <h1 className='font-Viaoda text-7xl text-black-500 absolute top-2/3'>Make everything easy</h1>
    </div>


</div>
    </div>
  )
}

export default Signup