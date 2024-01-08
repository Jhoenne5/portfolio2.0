import {motion} from 'framer-motion';
import {AiOutlineCheck} from 'react-icons/ai';
const History = () => {
  return (
    <motion.div
    
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.1}}
      className='w-full'
    
    >
       <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Frontend Developer Intern</h3>
       <p className='text-sm font-thin text-textDark'>
        Sep 2022 - Dec 2022 
       </p>
      <ul className='mt-5'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><AiOutlineCheck/></span>
           Web Slicing Travel Connect
        </li>
   
        
        
      </ul>
    </motion.div>  
  )
}
export default History
