
import {BsStars} from 'react-icons/bs'
import {TbWorldDownload} from 'react-icons/tb'

interface Data{
  title:string,
  language: string[],
  description:string,
  link:string
  
}

const ArchiveCard = ({title, language, description, link}:Data) => {
  return (
    <a href={link} target='blank'>
  <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col 
    justify-center gap-6 hover:translate-y-2 transition-transform duration-300 group"
    '>
      <div className='flex justify-between items-center'>
        <BsStars size={30} style={{color:'#64ffda'}}/>
        <TbWorldDownload size={30} style={{color:'#64ffda'}}/>
      </div>
      <div>
        
        <h2 className='text-xl font-bodyFont font-semibold hover:text-textGreen'>{title}</h2>
        <p className='text-sm mt-4'>{description}</p>
      </div>
      <ul className='text-xs mdl:text-sm text-textDark flex justify-between flex-wrap items-center gap-2'>
        {language.map(item => 
          <li key={item}>{item}</li>
          )}
      </ul>
    </div>
    </a>
  )
}

export default ArchiveCard




   
     