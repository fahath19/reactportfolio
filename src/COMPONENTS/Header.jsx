import React, { useEffect, useState } from 'react'
import { BsXLg } from "react-icons/bs";
import { Link, animateScroll as scroll } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
     const [hamburgerclick, sethamclick]=useState(false)
   function hamburgerbtn(){
        sethamclick(!hamburgerclick);
   }

   useEffect(()=>{
       let outsidehandler=()=>{
              sethamclick(false);
       }

       document.addEventListener('mousedown',outsidehandler);
           
        return(()=>
             document.removeEventListener("mousedown",outsidehandler)
       )
   })


  return (
    <div id='' className=' md:flex bg-black items-center text-gray-300 md:py-2 md:items-center md:justify-around fixed w-full top-0 left-0 py-4 z-30 '>
       <div className='flex  justify-between'>
       <h2 className='text-2xl font-sans pl-8  '>Abdul</h2>
       <button className=' text-3xl mr-9 lg:hidden ' onClick={()=>hamburgerbtn()}>{hamburgerclick ? <BsXLg/>:<RxHamburgerMenu/> } </button>

       </div>

       

        <ul className=''>
        <div className={ ` ${hamburgerclick ? "visible ":"invisible  duration-75  "} 
     bg-black/40 backdrop-blur-none border-2 border-green-400 lg:border-none

        lg:flex lg:w-auto w-[155px]   h-auto  lg:bg-transparent cursor-pointer absolute lg:relative lg:right-auto lg:top-auto right-7 top-[94%]  rounded-[8px] text-white lg:visible md:py-auto py-3` }>
         <Link to='home'  smooth={true}  activeClass="active"
  duration={500}>
         <li className='p-2 text-[1.4rem] hover:text-blue-400 mx-4  lg:border-none   '>Home</li>
         </Link> 
         <Link to='about' smooth={true}  
  duration={500} offset={-80}>
         <li className='p-2 text-[1.4rem] hover:text-blue-400 mx-4  lg:border-none   '>About</li>
         </Link> 
         <Link to='education' smooth={true}
  duration={500} offset={-90}>
         <li className='p-2 text-[1.4rem] hover:text-blue-400 mx-4  lg:border-none   '>Education</li>
         </Link> 
         <Link to='contact' smooth={true}
  duration={500}>
         <li className='p-2 text-[1.4rem] hover:text-blue-400 mx-4  lg:border-none   '>Contact</li>
         </Link> 
         <Link to='project' smooth={true}
  duration={500} offset={-90}>
         <li className='p-2 text-[1.4rem] hover:text-blue-400 mx-4  lg:border-none   '>Project</li>
         </Link> 
        
        </div>

        </ul>

    </div>
    
  )
}

export default Header
