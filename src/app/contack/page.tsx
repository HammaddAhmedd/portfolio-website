import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import Nevbar from '@/components/nevbar'
import Footer from '@/components/footer';

const Contact = () => {
  return (
    <div><Nevbar></Nevbar>
    <div id='Contact' className='pt-32 container'>
        <div className='grid md:drid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl text-green-500' data-aos="zoom-in-up">Contact Us Now</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                    Call Us,Or send messages by submitting the form.
                </p>
                <div className='flex gap-3 itum-center' data-aos="zoom-in-up">
                <MdMarkEmailRead size={32}/> abc@gmail.com
                </div>
                <div className='flex gap-3 itum-center' data-aos="zoom-in-up">
                <BsTelephoneInbound size={32}/> 999-333
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'data-aos="zoom-in-up" >
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        className='h-[30px] bg-transparent border border-accent'
                        id='name'/>
                    </div>
                    
                    <div className='flex flex-col gap-1'data-aos="zoom-in-up" >
                        <label htmlFor="email">Email</label>
                        <input type="text"
                        className='h-[30px] bg-transparent border border-accent'
                        id='email'/>
                    </div>
                    
                    <div className='flex flex-col gap-1'data-aos="zoom-in-up" >
                        <label htmlFor="msg">Message</label>
                        <textarea
                        className='bg-transparent border border-accent'
                        id='msg' rows={8}>
                        </textarea>
                    </div>
                    <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
                
            </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>
      
  )
}

export default Contact