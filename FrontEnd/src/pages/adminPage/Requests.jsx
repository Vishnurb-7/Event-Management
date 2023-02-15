import React from 'react'
import MoreRequest from '../../components/AdminCompoents/MoreRequest'
import RequestTable from '../../components/AdminCompoents/RequestTable'
import Sidebar from '../../components/AdminCompoents/Sidebar'
const Requests = () => {
  return (
    <div className='flex'>
          <Sidebar type="req" />
          <div className='w-full h-screen'>
              <div className='max-w-[1200px] mx-auto bg-white mt-20 rounded-3xl p-8'>
                  <RequestTable more={setAddService} />
                  <MoreRequest onClose={addServiceClose} visible={addService}/>

              </div>
          </div>
    </div>
  )
}

export default Requests