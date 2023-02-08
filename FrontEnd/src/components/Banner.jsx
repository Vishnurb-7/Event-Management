import React from "react"
import image from "../../public/Banner2.jpg"


function Banner() {
  return (
    <div className="w-[100%] h-[500px] md:h-[727px] lg:h-[927px] bg-cover " style={{backgroundImage: `url(${image})`}}>
        <div className="grid grid-cols-2 h-[70%]">
            <div className='w-full h-full text-white flex justify-center items-center font-Viaoda text-3xl md:text-6xl lg:text-8xl text-center'>From Venue Selection to Event Execution, We’re With You Every Step of the Way!</div>
            <div></div> 
        </div>
 
    </div>
  )
}

export default Banner