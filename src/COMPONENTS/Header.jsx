import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsXLg } from "react-icons/bs";
import { Link, animateScroll as scroll } from 'react-scroll';

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
    <div id='' className=' md:flex bg-black text-gray-300 md:py-2 md:items-center md:justify-around fixed w-full top-0 left-0 py-4 z-30 '>
       <div className='flex justify-between'>
       <h2 className='text-4xl font-sans pl-4 '>Abdul</h2>
       <button className='navicon text-4xl mr-9 lg:hidden ' onClick={handleburger}>{burger?<BsXLg className='text-[2rem]' />:<RxHamburgerMenu/>}</button>

       </div>
       

        <ul className={`nav menu md:flex md:ml-20   md:relative lg:relative absolute  md:bg-transparent w-8/12 lg:w-auto text-center top-[72px]  md:-right-[0px] lg:top-0 h-[100%]   lg:h-auto  duration-150`}>
        <div className='lee lg:flex  h-[100vh] bg-slate-700 lg:h-auto  lg:bg-transparent cursor-pointer '>
         <Link to='home'  smooth={true}  activeClass="active"
  duration={500}>
         <li className='p-3 text-2xl hover:text-blue-400 mx-4  lg:border-none border-b   '>Home</li>
         </Link> 
         <Link to='about' smooth={true}  
  duration={500} offset={-80}>
         <li className='p-3 text-2xl hover:text-blue-400 mx-4  lg:border-none border-b   '>About</li>
         </Link> 
         <Link to='education' smooth={true}
  duration={500} offset={-90}>
         <li className='p-3 text-2xl hover:text-blue-400 mx-4  lg:border-none border-b   '>Education</li>
         </Link> 
         <Link to='contact' smooth={true}
  duration={500}>
         <li className='p-3 text-2xl hover:text-blue-400 mx-4  lg:border-none border-b   '>Contact</li>
         </Link> 
         <Link to='project' smooth={true}
  duration={500} offset={-90}>
         <li className='p-3 text-2xl hover:text-blue-400 mx-4  lg:border-none border-b   '>Project</li>
         </Link> 
        
        </div>

        </ul>

    </div>
    
  )
}

export default Header
