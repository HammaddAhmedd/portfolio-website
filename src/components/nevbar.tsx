import React from 'react'
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link';

const nevbar = () => {
  return (
    <header className="text-gray-50 body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl text-green-500">Portfolio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-green-500" href='/'>Home</a>
      <a className="mr-5 hover:text-green-500" href='/about'>About</a>
      <a className="mr-5 hover:text-green-500" href='/projects'>Projects</a>
      <a className="mr-5 hover:text-green-500" href='/skills'>Skills</a>
      <a className="mr-5 hover:text-green-500" href='/contack'>Contack</a>
    </nav>
   
        <path d="M5 12h14M12 5l7 7-7 7"></path>
  
  </div>
</header>
  )
}

export default nevbar
