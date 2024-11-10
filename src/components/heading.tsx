import React from 'react'

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-4xl pd-8'>

        <p className='border-b-5 inline-block pb-5'>{title}</p>
      
    </div>
  )
}

export default Heading
