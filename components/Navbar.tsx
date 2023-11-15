import { Logo } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle,  } from 'react-icons/ai'
import { useRef, useState } from "react";
import { link } from "fs";
import {MdOutlineClose} from 'react-icons/md'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef<string | any> ("")

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h[12vh] sticky top-0 z-50 bg-bodyColor">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex  justify-between items-center">
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2, delay:1}}
        style={{borderRadius:"50%", overflow:"hidden"}}
        >
          <Image  src={Logo} className="w-14" alt="logo"  />
        </motion.div>

        <div className="hidden mdl:inline-flex items-center gap-7" >
          <ul className="flex flex-row gap-7 text-base">
          

            <Link href="#about" className="font-bold text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
            <motion.li
               
                initial={{y:-10, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.5, delay:0.7}}
              >Project</motion.li>
            </Link>

            <Link href="#experience" className="font-bold text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
            <motion.li
                initial={{y:-10, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.5, delay:0.6}}
              >Experience</motion.li>
            </Link>
            
            <Link href="#about" className="font-bold text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
            <motion.li
                initial={{y:-10, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.5, delay:0.5}}
              >About</motion.li>
            </Link>

            <Link href="#contact" className="font-bold text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link"
             >
            <motion.li
                initial={{y:-10, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.5, delay:0.4}}
              >Contact</motion.li>
            </Link>
          
          </ul>
        
        </div>
        <div>
            
        </div>
        <ul className=" mdl:inline-flex items-center gap-7  hidden">
            <a href="/assets/resume.pdf" target="blank">
        <motion.button
        className="px-4 py-1 text-textLight text-base border border-textLight hover:text-textGreen hover:border-textGreen " 
            initial={{y:-10, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5, delay:0.1}}
          >
            Resume
            </motion.button>
            </a>
  
            <motion.li 
            initial={{y:-10, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5, delay:0.1}}

            className="hover:text-textGreen"><a href="https://github.com/Jhoenne5" target="blank"><AiFillGithub style={{width:"40px", height:"40px"}}/></a></motion.li>
        </ul>
        <div 
              onClick={()=>setShowMenu(true)}    
            className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden
                 text-4xl text-textLight cursor-pointer overflow-hidden group ">
                <span className="w-full h-[2px] bg-textLight inline-flex transform 
                group-hover:translate-x-2 transition-all ease-in-out duration-300 "></span>

                    <span className="w-full h-[2px] bg-textLight inline-flex transform 
                translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>

                    <span className="w-full h-[2px] bg-textLight inline-flex transform 
                    translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      {
        showMenu && (
          <div ref ={(node)=>(ref.current = node )}
          className="absolute mdl:hidden top-0  right-0 w-full h-screen bg-black
          bg-opacity-50 flex flex-col items-end">
            <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
             className="w-[80%] h-full overflow-y-scroll bg-[#112240] flex flex-col items-center px-4 py-10 relative justify-center"
            style={{ overflow: 'hidden' }}
                >
                <MdOutlineClose onClick={()=>setShowMenu(false)} className="text-3xl text-gray-300 cursor-pointer 
                hover:text-textGreen absolute top-4 right-4" />
                     <ul className="flex flex-col gap-7 text-base text-[1rem] pl-10">
          

          <Link href="#about" className="font-bold text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link"
         >
          <motion.li
             
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.5, delay:0.7}}
            >Project</motion.li>
          </Link>

          <Link href="#experience" className="font-bold text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link"
           >
          <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.5, delay:0.6}}
            >Experience</motion.li>
          </Link>
          
          <Link href="#about" className="font-bold text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link"
           >
          <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
            >About</motion.li>
          </Link>

          <Link href="#contact" className="font-bold text-textLight hover:text-textGreen cursor-pointer duration-300 nav-link"
             >
          <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.5, delay:0.4}}
            >Contact</motion.li>
          </Link>
        
          <div>
            
          </div>
          <a href="/assets/resume.pdf" target="blank">
        <motion.button
        className="px-4 py-1 text-textLight text-base border border-textLight hover:text-textGreen hover:border-textGreen " 
            initial={{y:-10, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5, delay:0.1}}
          >
            Resume
            </motion.button>
            </a>
  
            <motion.li 
            initial={{y:-10, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5, delay:0.1}}

            className="hover:text-textGreen"><a href="https://github.com/Jhoenne5" target="blank"><AiFillGithub style={{width:"40px", height:"40px"}}/></a></motion.li>
             <div className='flex flex-row gap-4 '>
        <motion.a
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1, delay:1.5}}
        href="" target='blank'>
            <span className='w-11 h-11 text-xl bg-hoverColor rounded-full inline-flex first-letter 
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 translate-all duration-300
            '><AiFillFacebook /></span>
        </motion.a>
        <motion.a 
         initial={{y:-10, opacity:0}}
         animate={{y:0, opacity:1}}
         transition={{duration:2, delay:1.5}}
            href="" target='blank'>
            <span className='w-11 h-11 text-xl bg-hoverColor rounded-full inline-flex first-letter 
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 translate-all duration-300
            '><AiFillLinkedin /></span>
        </motion.a>
        <motion.a
          initial={{y:-10, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:3, delay:1.5}}
            href="" target='blank'>
            <span className='w-11 h-11 text-xl bg-hoverColor rounded-full inline-flex first-letter 
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 translate-all duration-300
            '><AiFillInstagram /></span>
        </motion.a>
        <motion.a
          initial={{y:-10, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:4, delay:1.5}}
            href="" target='blank'>
            <span className='w-11 h-11 text-xl bg-hoverColor rounded-full inline-flex first-letter 
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 translate-all duration-300
            '><AiFillTwitterCircle /></span>
        </motion.a>
       </div>

        </ul>
      
              </motion.div>
          </div>
        )
      }

      </div>

        
    </div>
  );
};


export default Navbar;