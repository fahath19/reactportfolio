import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancelPresentation } from "react-icons/md";
const Header = () => {
  const [burger,setburger]=useState(0);
 function handleburger(){
         setburger(!burger)
 }





  return (
    <div className=' md:flex bg-black text-gray-300 py-2 md:items-center md:justify-around fixed w-full top-0 left-0   '>
       <div className='flex justify-around'>
       <h2 className='text-4xl font-sans pl-4 '>Abdul</h2>
       <button className=' text-5xl mr-9 lg:hidden' onClick={handleburger}>{burger?<MdOutlineCancelPresentation/>:<RxHamburgerMenu/>}</button>

       </div>
       

        <ul className={`menu md:flex md:ml-20   md:relative absolute bg-violet-900 md:bg-transparent w-8/12 lg:w-auto text-center top-[60px] right-[0px] lg:top-0 h-[100%]  z-20 lg:h-auto ${burger ?'block':'hidden'}`}>
        <div className='lg:flex  h-[100vh] lg:h-auto bg-violet-900 lg:bg-transparent cursor-pointer '>
          <li className='p-3 text-2xl hover:text-blue-400 border-b-2 border-gray-400  '>Home</li>
          <li className='p-3 text-2xl hover:text-blue-400 border-b- border-gray-400'>About</li>
          <li className='p-3 text-2xl hover:text-blue-400 border-b- border-gray-400'>Skills</li>
          <li className='p-3 text-2xl hover:text-blue-400 border-b- border-gray-400'>Project</li>
          <li className='p-3 text-2xl hover:text-blue-400 border-b-2 border-gray-400'>Contact</li>
        </div>

        </ul>

    </div>
    
  )
}

export default Header
