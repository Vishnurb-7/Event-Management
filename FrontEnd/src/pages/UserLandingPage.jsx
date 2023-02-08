import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'


const UserLandingPage = () => {
  const navigate = useNavigate()
  const serviceClickHandler = () =>{
    navigate('/providers')
  }
  return (
    <div>
        <Navbar/>
        <Banner/>
        <div id='services' className='w-full pt-20 md:pt-40'>
      <h1 className='uppercase font-Volkhov m-7 text-2xl md:text-4xl lg:text-5xl text-center'>services</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1300px] mx-auto'>
        <ServiceCard serviceClick={serviceClickHandler} url="../../public/serviceImages/bride-groom-getting-married_52683-32275.png" text="WEDDING PLANNERS"/>
        <ServiceCard url="../../public/serviceImages/business-conference-illustration-with-speaker-stage-audience-cartoon-characters-scientific-presentation-academic-symposium-professional-briefing_575670-644.png" text="PERSONAL EVENTS"/>
        <ServiceCard url="../../public/serviceImages/flat-design-people-business-training_23-2148903887.png" text="COMMERCIAL EVENTS"/>
        <ServiceCard url="../../public/serviceImages/cartoon-kids-birthday-party_23-2149000579.png" text="BIRTHDAY PARTY" />

        <ServiceCard url="../../public/serviceImages/famous-rock-band-playing-music-singing-stage_74855-5828.webp" text="LIVE MUSIC & ORCHESTRA "/>
        <ServiceCard url="../../public/serviceImages/istockphoto-1160689812-170667a.jpg" text="ENTERTAINMENT SHOWS"/>
        <ServiceCard url="../../public/serviceImages/makeup-1262282427-612x612.jpg" text="BRIDAL MAKEUP "/>
        <ServiceCard url="../../public/serviceImages/topvector201100208.webp" text="PHOTOGRAPHY" />

        <ServiceCard url="../../public/serviceImages/travels.jpg" text="TRAVELS"/>
        <ServiceCard url="../../public/serviceImages/catering-1318687011-612x612.jpg" text="CATERING SERVICES"/>
        <ServiceCard url="../../public/serviceImages/banquet-hall-ballroom.webp" text="DECORATION"/>
        <ServiceCard url="../../public/serviceImages/police-man.jpg" text="SECURITY"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default UserLandingPage