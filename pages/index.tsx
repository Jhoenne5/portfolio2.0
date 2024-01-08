import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar, LeftSide, RightSide, Middle, 
         Experience, Projects, Contacts, About, Archive } 
         from '@/components'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>  
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight
      overflow-x-hidden  scrollbar scrollbar-thumb-textDark/80 scrollbar-track-textDark/10'>
       <Navbar/>
       <div className='w-full h-[88vh] xl:flex item-center gap-20 justify-between'>
        <div className='hidden xl:inline-flex w-34 h-full fixed left-0 bottom-0'>
          <LeftSide/></div>
          <div className='h-full  mx-auto p-4'>    
            <Middle/>
           <About/>
           <Experience/> 
           <Projects/> 
           <Archive/> 
          <Contacts/>
        </div>        
       <div className='hidden xl:inline-flex w-34 fixed right-0 bottom-10'><RightSide/></div>
       </div>
      </main>
    </>
 
    
  )
}
