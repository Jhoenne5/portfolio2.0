import { ArchiveCard } from ".";


const Archive = () => {
    return (
      <div className=' px-4 py-24 '>

          <div className="flex items-center gap-20 justify-center my-14 mb-5 md:gap-0">   
          <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[1px] bg-textGreen ml-5 '></span>
            <h2 className='text-2xl font-bodyFont text-textGreen md:text-lg md:pl-5'>Self Projects</h2>
            <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[1px] bg-textGreen ml-5'></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-10 lgl:px-10">
            <ArchiveCard link = {'https://github.com/Jhoenne5/login-system-with-JWT'} title = {'JWT Login System'} language={["Node.js", "EJS", "javaScript"]} description = {'Login System using JWT and Middleware'} />
            <ArchiveCard  link = {'https://github.com/Jhoenne5/kfc'} title={'KFC Ticketing system'} language={["Next.Js", "JavaScript", "React"]} description = {'Simple complaint ticketing system'}/>
           
          </div>
      </div>
    )
  }
  
  export default Archive;
  