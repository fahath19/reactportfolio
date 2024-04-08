import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancelPresentation } from "react-icons/md";
const Header = () => {
  const [burger,setburger]=useState(0);
 function handleburger(){
      let nav=document.querySelector('.nav');

         setburger(!burger)
         if(!burger){
             //document.querySelector('.nav').style.right='0';
              nav.classList.add('active')
             setburger(!burger);

         }
         else{
          
         // document.querySelector('.nav').style.right='-2000px';
           nav.classList.remove('active');
         }
 }





  return (
    <div className=' md:flex bg-black text-gray-300 py-2 md:items-center md:justify-around fixed w-full top-0 left-0  '>
       <div className='flex justify-around'>
       <h2 className='text-4xl font-sans pl-4 '>Abdul</h2>
       <button className='navicon text-5xl mr-9 lg:hidden ' onClick={handleburger}>{burger?<MdOutlineCancelPresentation />:<RxHamburgerMenu/>}</button>

       </div>
       

        <ul className={`nav menu md:flex md:ml-20   md:relative lg:relative absolute  md:bg-transparent w-8/12 lg:w-auto text-center top-[60px]  md:-right-[0px] lg:top-0 h-[100%]   lg:h-auto  duration-150`}>
        <div className='lee lg:flex  h-[100vh] bg-slate-500 lg:h-auto  lg:bg-transparent cursor-pointer '>
          <li className='p-3 text-2xl hover:text-blue-400  lg:border-none border-b-2 border-gray-400 '>Home</li>
          <li className='p-3 text-2xl hover:text-blue-400 border-b- border-gray-400' > <a href="about">About</a> </li>
          <li className='p-3 text-2xl hover:text-blue-400 border-b- border-gray-400'>Skills</li>
          <li className='p-3 text-2xl hover:text-blue-400 border-b- border-gray-400'>Project</li>
          <li className='p-3 text-2xl hover:text-blue-400  lg:border-none border-b-2 border-gray-400'>Contact</li>
        </div>

        </ul>

    </div>
    
  )
}

export default Header
