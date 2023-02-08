import React from 'react'
import Navebar from '../components/Navbar'
import Footer from '../components/Footer'

const Profile = () => {
  return (
    <div>
      <div className='w-full '>
          <Navebar />
          <div className='max-w-[900px] h-[600px] bg-white mt-10 mb-10 ml-2 mr-2 lg:mx-auto flex items-center p-14 flex-col'>
              <h1 className='uppercase text-3xl font-semibold mb-5'>Profile</h1>

              <input type="email" placeholder='Email' value="example@gmail.com" className='text-center text-xl mt-9 border-b-2 border-gray-500' />
              <input type="text" placeholder='Phone' value="8547022049" className='text-center text-xl mt-9 border-b-2 border-gray-500' />
              <input type="password" placeholder='Password' value="......." className='text-center text-xl mt-9 border-b-2 border-gray-500' />
              <input type="password" placeholder='Confirm Password' value="......." className='text-center text-xl mt-9 border-b-2 border-gray-500' />
              <button type='submit' className='uppercase mt-10 w-24 h-11 rounded-xl bg-green-500 hover:bg-green-600 hover:shadow-2xl'>save</button>
          </div>
          <Footer/>
    </div>
    </div>
  )
}

export default Profile