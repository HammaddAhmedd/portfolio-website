import React from 'react'
import Heading from '@/components/heading'
import Card from '@/components/card'
import Image from 'next/image'
import Nevbar from '@/components/nevbar'
import Footer from '@/components/footer'


const data = [
    {
        id: 0,
        title: "Project 1",
        desc:"Resume Builder Form, Build a Stunning Resume in Minutes with Our Advanced, User-Friendly Resume Builder.",
        img:"/resumebuilderform.png",
        tags:["React","Node","Css","Typescript"],
    },
    {
      id: 1,
      title: "Project 2",
      desc:"Coming Soon",
      img:"/coming soon.jpeg",
      tags:["React","Node","Css","Typescript"],
  },
  {
    id: 2,
    title: "Project 3",
    desc:"Coming Soon",
    img:"/coming soon.jpeg",
    tags:["React","Node","Css","Typescript"],
},
{
  id: 3,
  title: "Project 4",
  desc:"Coming Soon",
  img:"/coming soon.jpeg",
  tags:["React","Node","Css","Typescript"],
},
{
  id: 4,
  title: "Project 5",
  desc:"Coming Soon",
  img:"/coming soon.jpeg",
  tags:["React","Node","Css","Typescript"],
},
{
  id: 5,
  title: "Project 6",
  desc:"Coming Soon",
  img:"/coming soon.jpeg",
  tags:["React","Node","Css","Typescript"],
},
]

const projects = () => {
  return (
    <div><Nevbar></Nevbar>
    <div id='projects' className='container pt-24 '>
        <Heading title='Next.js Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 lg:grit-cols-3 place-itum-center'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
             />))}
             
        </div>

      
    </div>
    <Footer />
    </div>
  )
}

export default projects