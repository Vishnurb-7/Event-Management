import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const MoreRequest = ({ visible, onClose }) => {

    const handleOnClose = (e) => {
       if(e.target.id ==="container") onClose()
    };

    if (!visible) return null;

  return (

    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>

<div className='bg-white w-[1000px] h-[700px] flex flex-col rounded-3xl m-2'>
    <div className='flex flex-row-reverse text-4xl p-4 border-b-2 border-black'>
        <button onClick={onClose} ><AiFillCloseCircle/></button>
</div>
<div className='h-full w-full  grid grid-cols-5'>
    <div className='w-full h-full p-4 col-span-2 grid grid-rows-2 gap-4'>
        <div className='bg-gray-400'></div>
        <div className='bg-gray-700'></div>
    </div>
    <div className='col-span-3 flex flex-col pt-7'>
        <h1 className='text-center text-3xl font-semibold uppercase'>Company Name</h1>
        <p className='mt-10 shadow-2xl pl-4 h-60 mr-4 overflow-y-scroll no-scrollbar text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit autem non hic commodi nulla beatae quas perferendis dolores tenetur corrupti, accusamus, cupiditate, laborum blanditiis nihil nemo exercitationem perspiciatis! Harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae commodi aut distinctio adipisci, itaque ducimus, expedita laudantium reprehenderit nam culpa quasi architecto officia impedit odit vitae recusandae minima vel. Praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aperiam porro iure est nemo totam quam id cum dolore inventore corporis quas harum placeat corrupti voluptate delectus voluptatum, iste magni! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, modi! Blanditiis consequuntur minima, repellat eum dolorem alias, nulla enim, quia sequi dignissimos necessitatibus sapiente dolor nobis placeat iste facilis obcaecati.</p>
        <div className='mt-10 flex flex-row'>
            <h2 className='text-xl font-medium uppercase'>category  :</h2>
            <h2 className='ml-2 text-xl'>gfdr</h2>
        </div> 
        <div className='mt-10 flex flex-row'>
            <h2 className='text-xl font-medium uppercase'>location  :</h2>
            <h2 className='ml-2 text-xl'>gfdr</h2>
        </div>
        <div className='mt-10 flex flex-row justify-end gap-4 mr-8'>
            <button className='py-3 px-10 rounded-full bg-green-500 hover:bg-green-600 text-xl font-medium uppercase'>approve</button>
            <button className='py-3 px-10 rounded-full bg-red-400 hover:bg-red-600 text-xl font-medium uppercase'>reject</button>
        </div>
    </div>
</div>
</div>


</div>
  )
}

export default MoreRequest