import React from 'react'

import Sidebar from '../../components/AdminCompoents/Sidebar'
import Banner from '../../components/Banner'

const AdminLanding = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className=''>
        <Banner type='admin'/>
          </div>
    </div>
  )
}

export default AdminLanding