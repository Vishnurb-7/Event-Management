import React from 'react'
import { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()

  const homeHandle = () =>{
    navigate('/')

  }

  const profileHandle =() =>{
    navigate("/profile")
  }
  const handleNav = ()=>{
    setNav(!nav)
  }

  const [nav, setNav] = useState("nav")
  return (
    <div className='h-20 px-8 z-50 bg-white top-0 sticky shadow-md'>
      <div className='flex items-center h-20 max-w-[1240px] mx-auto justify-between'>
      <h1 className='w-full text-3xl font-bold'>LOGO</h1>
      <ul className='hidden md:flex'>
        <li onClick={homeHandle} className='p-4 font-bold cursor-pointer'>HOME</li>


          <li onClick={profileHandle} className='p-4 font-bold cursor-pointer'>PROFILE</li>
          <li className='p-4 font-bold cursor-pointer'>MESSAGES</li>
          <li className='p-4 font-bold cursor-pointer'>LOGOUT</li>
        </ul>
        <div className='block md:hidden' onClick={handleNav}>
          {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}

        </div>
        <div className= {!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-white ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4'>LOGO</h1>
        <ul className='p-4 uppercase'>
        <li onClick={homeHandle} className='p-4 border-b border-gray-600 font-bold cursor-pointer'>HOME</li>


            <li className='p-4 border-b border-gray-600 font-bold cursor-pointer'>PROFILE</li>
            <li className='p-4 border-b border-gray-600 font-bold cursor-pointer'>LOGOUT</li>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar