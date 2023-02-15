import React from 'react'
import Sidebar from '../../components/AdminCompoents/Sidebar'

import UserManagementTable from '../../components/AdminCompoents/UserManagementTable'

const UserManagement = () => {
  return (
    <div className='flex'>
        <Sidebar type="user" />
        <div className='w-full h-screen'>
        <div className='max-w-[1200px] mx-auto bg-white mt-20 rounded-3xl p-8'>
                  <UserManagementTable />

              </div>
        </div>
    </div>
  )
}

export default UserManagement