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
       <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Full Stack Web Developer Intern</h3>
       <p className='text-sm font-thin text-textDark'>
        Jan 2023 - Apr 2023 
       </p>
      <ul className='mt-5'>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><AiOutlineCheck/></span>
            Recovering a Db from AWS 
        </li>
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><AiOutlineCheck/></span>
            Developing <span className='text-textGreen hover:text-gray-200'><a target='blank' href="https://euronlabs.com/">euronlabs</a></span>
        </li>
       
        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><AiOutlineCheck/></span>
            QA for one crystal
        </li> 

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><AiOutlineCheck/>  </span> 
         Research for Mj Delivers Deployment
        </li>

        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'><AiOutlineCheck/></span>
          Developing<span className='text-textGreen hover:text-gray-200'><a target='blank' href="http://gamerev-website-static.s3-website-ap-southeast-1.amazonaws.com/">Gamerev</a></span>
        </li>
        
        
        
      </ul>
    </motion.div>  
  )
}
export default History
