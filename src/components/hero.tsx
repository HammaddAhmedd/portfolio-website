import React from 'react'
import Nevbar from './nevbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/keelan-moscot.png)] bg-cover'
    style={{backgroundSize: "35%", backgroundPosition:"left 100px top 100px"}}
    >
      <Nevbar />
      <div className='container grit lg:grit-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[50px] font-bold leading-tight flex justify-center itum-center'>
         <div>
          <p data-aos="zoom-in-up">I'm</p>
          <p data-aos="zoom-in-up">Hammad</p>
          <p data-aos="zoom-in-up">Ahmed</p>
        
         </div>
          </div>
        </div>
      
      </div>
  )
}

export default Hero
