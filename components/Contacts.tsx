import React from 'react'
import {IoMdContact} from 'react-icons/io'
import{AiOutlineMail} from 'react-icons/ai'

const Contacts = () => {
  return (
    <div id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
          <span className='flex text-textGreen justify-center items-center'> <IoMdContact size={100} /></span>
          <span className='flex justify-center items-center gap-10'><h2>Get in touch </h2></span>
           <span className='max-w-[600px] text-center text-textDark'>
           <p>
           {"I'm "} actively exploring opportunities in web development that align with my skills and passion, 
            seeking a role where I can contribute and grow professionally
            </p>
            <a href="mailto:jhoenneestrecho12@gmail.com">
              <button className='w-40 h-14 border border-textGreen mt-10 tracking-wider rounded-md hover:bg-hoverColor duration-300 text-textGreen'>
                  Email Me
              </button>
            </a>

           </span>
    </div>
  )
}

export default Contacts
