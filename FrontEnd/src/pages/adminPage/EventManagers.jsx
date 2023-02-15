import React from 'react'
import EventMangersTable from '../../components/AdminCompoents/EventMangersTable'
import Sidebar from '../../components/AdminCompoents/Sidebar'
const EventManagers = () => {
  return (
    <div className='flex'>
          <Sidebar type="event" />
          <div className='w-full h-screen'>
              <div className='max-w-[1200px] mx-auto bg-white mt-20 rounded-3xl p-8'>
                  <EventMangersTable/>

              </div>
          </div>
    </div>
  )
}

export default EventManagers