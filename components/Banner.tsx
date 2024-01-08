import {motion} from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section
      id='home'
      className='max-width:contentContainer mx-auto  mdl:py-24 flex flex-col gap-4 lgl:gap-4 mdl:px-10 xl:px-2'
    >
      <div className='flex flex-col lg:flex-row justify-between'>

      <motion.div className='lg:w-auto  overflow-hidden xs:hidden xl:inline-block hidden'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2, delay:2.5}}
      >
        <Image className='ml-40' src='/assets/images/me.jpg' alt="me" width={220} height={250} style={{borderRadius: '50%'}}
        
          />
        </motion.div>

        <div >
          <motion.h2 className='text-lg font-bodyFont tracking-wide text-textGreen mdl:text-l mb-2'
            initial={{opacity:0, x:-12}}
            animate={{opacity:1, x:0}}
            transition={{duration:2, delay:2.5}}
          >
            Hello, My Name is
          </motion.h2>
          <motion.h1 className='text-4xl lgl:text-6xl font-bodyFont font-semibold flex flex-col text-white mb-2'
                 initial={{opacity:0, x:-12}}
                 animate={{opacity:1, x:0}}
                 transition={{duration:3, delay:2.5}}>
            Jhoenne Estrecho
          </motion.h1>
          <motion.span className='text-textDark lgl:mt-4 mdl:text-3xl font-bodyFont mdl:my-6 mb-10'
                 initial={{opacity:0, x:-12}}
                 animate={{opacity:1, x:0}}
                 transition={{duration:4, delay:2.5}}>
           Full Stack Web Developer 
          </motion.span>
         
          <motion.p className='text-base md:max-w-[650px] text-gray-400 font-bodyFont pt-2'
                 initial={{opacity:0, x:-12}}
                 animate={{opacity:1, x:0}}
                 transition={{duration:4, delay:2.5}}>
          {""}
          I recently graduated with a computer science degree and have less than a year of experience as a 
          web developer focusing on Web Development. My skills cover both front-end and back-end development, 
          and I have a knack for creating user-friendly, 
          responsive web applications using React and its related tools.
            {""}
    
          </motion.p>
        
       
        </div>

       
      </div>

    </section>
  );
};

export default Banner;
