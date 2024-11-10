import React from 'react'
import Nevbar from '@/components/nevbar'
import Footer from '@/components/footer'
const About = () => {
  return (  
  <div><Nevbar></Nevbar>
    <div id='about' className='container p-32' >
      <h2 className='text-4xl md:text-5xl text-green-500' data-aos="zoom-in-up" >About Me</h2>
      <p className='text-gray-400 pt-4' data-aos="zoom-in-up">Hello! I'm Hammad Ahmed a passionate IT student with a keen interest in web development. Currently, I'm honing my skills in Next.js, HTML, Tailwind CSS, and TypeScript. With a drive to create innovative and efficient solutions, I'm dedicated to building dynamic and user-friendly applications. As I continue to learn and grow, I'm excited to explore the vast possibilities of web development and contribute to the ever-evolving tech landscape.</p>
     <p className='text-gray-400 pt-4' data-aos="zoom-in-up">As a seasoned website developer, I craft captivating digital experiences with expertise in HTML, CSS, JavaScript, PHP, React, Angular, and Vue. I deliver seamless functionality, stunning designs, and exceptional results, exceeding client expectations with meticulous attention.</p>
    </div>
    <Footer />
  </div>
  )
}

export default About
