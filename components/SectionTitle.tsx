interface Props{
    title:string
}

const SectionTitle = ({title}:Props) => {
  return (
    
    <h2 className='font-fontTitle text-l font-bold flex items-center text-textGreen'>
        {title}
    <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[1px] bg-textGreen ml-5'></span>
    </h2>
  )
}

export default SectionTitle
