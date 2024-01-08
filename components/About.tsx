import React from 'react'
import { SectionTitle } from '.'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {BiLogoNodejs,BiLogoMongodb} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiExpress} from 'react-icons/si'
import Image from 'next/image';
import Profile from '../public/assets/images/profile.jpg'



const About = () => {
  return (
    <div className='max-w-containerSmall mx-auto lgl:py-32 flex flex-col gap-y-8 mt-20 md:my-9 md:mx-9  ' id='about'>
      
      <div className='xl:ml-20'>

      <SectionTitle title={'About'}  />
      </div>
   
  
      <div className='flex flex-col lgl:flex-row gap-16 xl:ml-20 '> 
     
        <div className='w-full lgl:w-2/3 text-base flex flex-col gap-4'>
          <p className='font-thin'>As a recent <span className='text-textGreen font-bold'>Computer Science graduate with major in software engineering</span>, my passion lies in crafting captivating user experiences within the technology industry, 
            specifically in the realm of front-end development.
            <br /> <br />
            Throughout my academic journey, I immersed myself in<span className='text-textGreen font-bold'> mastering  React</span>, 
            honing my skills to build modern, interactive, and efficient user interfaces. Embracing the principles of component-based architecture and delving deep into state management, {"I've"} cultivated a knack for developing web applications that offer not just functionality, but a seamless and responsive user experience.
           {" I'm driven"} by a commitment to translating ideas into tangible, 
            user-centric solutions, leveraging my expertise in React to create intuitive and 
            engaging digital experiences. 
            <br /> <br />
            My goal is to continue <span className='text-textGreen font-bold'>innovating and contributing to the ever-evolving landscape of technology</span>, bringing forth dynamic and user-focused applications that resonate with {"today's"} fast-paced digital world.</p>

            <p className='font-bold'>Here are some of the tech stacks I have been working with</p>
              <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-3 mt-6 md:mx-auto md:gap-5' >
                <li className='flex items-center gap-5'><span><SiJavascript size={30} style={{color:'#64ffda'}}/></span> <span className='font-bold'>JavaScript</span></li>
                <li className='flex items-center gap-5' ><span><FaReact size={30} style={{color:'#64ffda'}}/> </span> <span className='font-bold'>React.Js</span></li>
                  <li className='flex items-center gap-5'> <span><BiLogoNodejs size={30} style={{color:'#64ffda'}}/></span> <span className='font-bold'>Node.Js</span></li>
                  <li className='flex items-center gap-5'> <span><TbBrandNextjs size={30} style={{color:'#64ffda'}}/></span> <span className='font-bold'>Next.JS</span></li>
                  <li className='flex items-center gap-5'> <span><BiLogoMongodb size={30}style={{color:'#64ffda'}} /></span> <span className='font-bold'>MongoDB</span></li>
                  <li className='flex items-center gap-5'> <span><SiExpress size={30} style={{color:'#64ffda'}}/></span> <span className='font-bold'> Express.JS</span></li>
              </ul>
              
        </div>

      <div className='w-full lgl:w-1/3 h-30 flex flex-1 lgl:mb-20 lgl:h[100px] mdl:mt-20 xs:mt-[8rem] '>    
            <Image 
            className=' h-[130px] object-contain md:block lgl:h-[200px]  '
            src={Profile} 
            alt='me'
          style={{borderRadius:'50px'}}
            />  
      </div>
      </div>  
     
    </div>
  )
}

export default About
