import { motion } from 'framer-motion'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-2 text-textLight ml-5'>
       <div className='flex flex-col gap-4 '>
        <motion.a
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1, delay:1.5}}
        href="https://www.facebook.com/jawnjawnjawnjawnjawn" target='blank'>
            <span className='w-11 h-11 text-xl bg-hoverColor rounded-full inline-flex first-letter 
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 translate-all duration-300
            '><AiFillFacebook /></span>
        </motion.a>
        <motion.a 
         initial={{y:-10, opacity:0}} 
         animate={{y:0, opacity:1}}
         transition={{duration:2, delay:1.5}}
            href="https://www.linkedin.com/in/jhoenne-estrecho-70a958234/" target='blank'>
            <span className='w-11 h-11 text-xl bg-hoverColor rounded-full inline-flex first-letter 
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 translate-all duration-300
            '><AiFillLinkedin /></span>
        </motion.a>
        <motion.a
          initial={{y:-10, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:3, delay:1.5}}
            href="https://www.instagram.com/jaaaawwwwnnnn/?hl=en" target='blank'>
            <span className='w-11 h-11 text-xl bg-hoverColor rounded-full inline-flex first-letter 
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 translate-all duration-300
            '><AiFillInstagram /></span>
        </motion.a>
        <motion.a
          initial={{y:-10, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:4, delay:1.5}}
            href="https://twitter.com/jawnjawn1234" target='blank'>
            <span className='w-11 h-11 text-xl bg-hoverColor rounded-full inline-flex first-letter 
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 translate-all duration-300
            '><AiFillTwitterCircle /></span>
        </motion.a>
       </div>

       <motion.div
         initial={{y:-10, opacity:0}}
         animate={{y:0, opacity:1}}
         transition={{duration:5, delay:1.5}}
          className='w-[2px] h-40 bg-textGreen '>

       </motion.div>
       
    </div>
  )
}

export default LeftSide
