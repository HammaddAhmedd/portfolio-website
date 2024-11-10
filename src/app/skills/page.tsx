import React from 'react'
import Nevbar from '@/components/nevbar'
import Footer from '@/components/footer'

const skills = () => {
  return (
    <div><Nevbar></Nevbar>
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl text-green-500'>Technologies I work with</h2>
                <p className='text-gray-400 pt-2'>Hi, I'm Hammad Ahmed, a skilled front-end developer with expertise in crafting dynamic and visually appealing web applications. With a strong foundation in JavaScript, HTML, and CSS, I excel in utilizing cutting-edge technologies like Tailwind and React to deliver responsive, efficient, and user-friendly solutions. My passion for innovative problem-solving and commitment to staying up to date with industry trends enables me to consistently deliver high quality results.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>

                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                        
                    </div>
                </div>
            </div>
        </div>
     
    </div>
    <Footer />
    </div>
  )
}

export default skills