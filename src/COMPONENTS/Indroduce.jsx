import React from 'react'
import av1 from '../PERSONAL IMG/indian-man-smiling-cheerful-expression-closeup-portrait.jpg'
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Cursor, useTypewriter,  } from 'react-simple-typewriter';
const Indroduce = () => {

  const [typing]=useTypewriter({
    words:['Frontend Developer'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:40
  })
  return (
    <div className='flex    bg-gray-200 h-[90vh] lg:justify-around lg:items-center flex-col lg:flex-row mt-6  '>
      <div className='pl-6 lg:pl-0'>
       <h2 className='text-6xl   lg:text-7xl mt-14 lg:mt-10 font-sans lg:font-semibold font-mediun '>Hi There,</h2>
       <h2 className='text-4xl lg:text-6xl mt-4 font-semibold'>I'm Abdul <span className='text-orange-500'>Bahad</span> </h2>

       <p className='text-3xl lg:text-4xl mt-3 font-medium -z-30 '>I Am Into <span className='text-red-500 text-[1.9rem] '>{typing}</span> <span className=' -z-30'
       > <Cursor cursorStyle='' /> </span> </p>
      
       <div className="share-icon ">
           <ul className='flex text-4xl mt-4 cursor-pointer'>
            <li className='p-3 bg-black text-white rounded-[50%] text-[1.5rem] mr-2 hover:bg-blue-600'> <a href="https://www.linkedin.com/in/abdul-bahad-4a4461282/" target="_blank"><FaLinkedin className='m-auto ' /></a> </li>
            <li className='p-3 bg-black text-white rounded-[50%] text-[1.5rem] mr-2 hover:bg-violet-800 '> <a href="#"> <FaGithub/></a>  </li>
            <li className='p-3 bg-black text-white rounded-[50%] text-[1.5rem] mr-2 hover:bg-pink-600'>  <a href="#"> <FaInstagram/> </a> </li>
           </ul>
       </div>
      </div>
      <div className=' lg:w-4/12 w-8/12 mx-auto mt-10 lg:m-0'>
        <img src={av1} alt="avimage"  className='rounded-[50%] '/>
      </div>

    </div>

  )
}

export default Indroduce
