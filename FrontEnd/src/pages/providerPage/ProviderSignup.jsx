
import React from 'react'
import { FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'


const ProviderSignup = () => {

    const navigate = useNavigate()
    const loginHandle = () =>{
        navigate("/providerlogin")
    }

  return (
    <div className='w-full h-full grid lg:grid-cols-3 md:grid-cols-5 bg-white'>
    <div className='md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center'>
        <h1 className='font-Viaoda text-7xl mb-10'>Signup</h1>
        <input type="text" name='companyName'  placeholder='Company Name' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <textarea name="description" placeholder='Description' id="" className='w-[90%] max-h-40 mt-10 text-3xl border-2 border-black rounded-3xl text-center show-scrollbar'></textarea>
        <select name="services"  id="" className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center'>
          <option value="">-- Choose your service --</option>
          <option value="">Wedding planning</option>
          <option value="">Travels</option>
          <option value="">Photography</option>
        </select>
        <input type="text" name='Phone' value='' placeholder='Phone' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center'/>
        <input type="email" name='email' value='' placeholder='Email' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <input type="password" name='email' value='' placeholder='Password' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <input type="file" name='certificate' aria-label='Gov.Approved Certificate' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <label htmlFor="file">Gov.Approved Certificate</label>
        <input type="file" name='certificate' placeholder='Gov.Approved Certificate' className='w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center' />
        <label htmlFor="file">Choose your logo</label>
        <button className='w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center'>Signup</button>
        <p className='mt-5'>Already a member?<a className='text-blue-900 font-semibold cursor-pointer' onClick={loginHandle}>Login</a></p>
        <button className='w-[60%] h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-3xl text-center'><span className='w-[20%] h-20 flex items-center justify-center'><FcGoogle/></span>Login with google</button>
    </div>
    <div className='hidden md:flex items-center flex-col md:col-span-3 lg:col-span-2'>
        <img src="plogin.jpg" alt="LOGIN" className='w-[100%] top-1 sticky' />
        <h1 className='font-Viaoda text-7xl text-blank-500 absolute top-2/3 top-0 bottom-64 sticky'>Make everything easy</h1>
    </div>


</div>
  )
}

export default ProviderSignup