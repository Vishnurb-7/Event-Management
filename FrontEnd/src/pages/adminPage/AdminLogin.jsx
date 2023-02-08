import React from 'react'
// import { FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-[1007px] grid lg:grid-cols-3 md:grid-cols-5 bg-white'>
    <div className='md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center'>
        <h1 className='font-Viaoda text-7xl mb-10'>Login</h1>
        <input type="text" name='email' value='' placeholder='Email' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center'/>
        <input type="password" name='email' value='' placeholder='Password' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-2xl text-center'/>
        <button className='w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center  hover:bg-black hover:text-white'>Login</button>
    </div>
    <div className='hidden md:flex items-center flex-col md:col-span-3 lg:col-span-2'>
        <img src="../../public/adminLogin.jpg" alt="LOGIN" className='w-[75%]' />
        <h1 className='font-Viaoda text-7xl text-black-500 absolute top-2/3'>Make everything easy</h1>
    </div>


</div>
  )
}

export default AdminLogin