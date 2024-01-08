import React from 'react'
import Image from 'next/image'

import { project1, project2, project3, project6 } from '@/public/assets/images'

import { SectionTitle } from '.'

const Projects = () => {
  return (
   
  
 <div id='project' className='max-w-container mx-auto lgl:px-20 py-24 '>
    <div>

    </div>
      <div className=' flex justify-center items-center text-center'>

      <SectionTitle title = "Some of my projects during internship and A task from CorePH Web Solutions Inc"/>
      </div>
      <div className='w-full grid xl:grid-cols-2 my-10 sml:grid-cols-1'>



      <div className="flex-1 group  rounded overflow-hidden shadow-lg mx-4 my-4">
          
          <div className=" group-hover:scale-105 transform transition-transform duration-300 ease-in-out ">
            <a href="https://www.euronlabs.com/" target="blank">
            <Image
            className="rounded-lg  object-contain"
            alt="project1"
            width={1000}
            height={400}
           src={project1}
            />
            </a>
            </div>
            <div className="font-sans flex justify-between">
          <div>
           <h1 className="font-bold text-xl">Internship project</h1>
            <h2 className="text-l">wordpress project</h2>
            <h2 className="text-l text-textGreen ">Euron labs</h2>
          </div> 
        </div>
      </div>

  
    <div className=" flex-1 group rounded overflow-hidden shadow-lg mx-4 my-4">  
        <div className=" group-hover:scale-105 transform transition-transform duration-300 ease-in-out ">
          <a href="http://gamerev-website-static.s3-website-ap-southeast-1.amazonaws.com/" target="blank">
          <Image
          className="rounded-lg object-contain"
          alt="project3"
          width={1000}
          height={400}
         src={project3}
          />
          </a>
          </div>
          <div className="font-sans flex justify-between">
        <div>
         <h1 className="font-bold text-xl">Internship project</h1>
          <h2 className="text-l">Frontend project</h2>
          <h2 className="text-l text-textGreen ">Game Rev</h2>
        </div> 
      </div>
    </div>

    <div className=" flex-1 group rounded overflow-hidden shadow-lg mx-4 my-4 ">  
        <div className=" group-hover:scale-105 transform transition-transform duration-300 ease-in-out ">
          <a href="https://jhoenne5.github.io/HackerNews/?fbclid=IwAR0JEecObfS7ziempDa9K1tWk-_AFz_MPMfFh-X7h2g_u54wPgjGGC6wTLs" target="blank">
          <Image
          className="rounded-lg object-contain "
          alt="project4"
          width={1000}
          height={400}
         src={project6}
          />
          </a>
          </div>
          <div className="font-sans flex justify-between">
        <div>
         <h1 className="font-bold text-xl">CorePH Web Solutions Inc. Task</h1>
          <h2 className="text-l">API project</h2>
          <h2 className="text-l text-textGreen ">Hacking news API</h2>
        </div> 
      </div>
    </div>

    <div className="flex-1 group  rounded overflow-hidden shadow-lg mx-4 my-4">
          
        <div className=" group-hover:scale-105 transform transition-transform duration-300 ease-in-out ">
          <a href="https://jhoenne5.github.io/jhoenneEstrecho.github.io/" target="blank">
          <Image
          className="rounded-lg object-contain"
          alt="project2"
          width={1000}
          height={400}
         src={project2}
          />
          </a>
          </div>
          <div className="font-sans flex justify-between">
        <div>
         <h1 className="font-bold text-xl">Internship project</h1>
          <h2 className="text-l">Frontend project</h2>
          <h2 className="text-l text-textGreen ">Travel Connect</h2>
        </div> 
      </div>
    </div>

    
      </div>

        </div>
  

   
  )
}

export default Projects
