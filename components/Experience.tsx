import React, { useState } from 'react'
import { SectionTitle, History } from '.'
import HistoryTwo from './works/HistoryTwo'


const Experience = () => {
  const [ih, setIh] = useState(true)
  const [viiWorks, setViiWorks] = useState(false)


  const handleIh =  () =>{
  setIh(true)
  setViiWorks(false)
  }

  const handleViiWorks = () =>{
    setIh(false)
    setViiWorks(true)
  }

  return (
    <div className='flex justify-center ' id='experience'  >
   <div 
   className='max-w-container py-10 lgl:py-24 px-4 '
   >
    <SectionTitle title = {'Experience'}/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>

        <ul className='md:w-32 flex flex-col items-center justify-center'>

          <li  onClick={()=> handleIh()} className={` ${ih ? "border-l-textGreen text-textGreen": "" }
          border-l-2 border-l-textGreen bg-transparent
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium ` }
        >      
              Invisible hand Inc.
          </li>

          <li onClick={()=> handleViiWorks()} className={` ${viiWorks? "border-l-textGreen text-textGreen" : ""} border-l-2 border-l-hoverColor bg-transparent
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>ViiWorks Inc.
          </li>    

        </ul> 
                  {ih &&  <History/>}
                  {viiWorks && <HistoryTwo/>}
       
        </div>  
   </div>
    </div>

  )
}

export default Experience
