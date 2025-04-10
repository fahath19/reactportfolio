import React from 'react'
import av1 from '../PERSONAL IMG/indian-man-smiling-cheerful-expression-closeup-portrait.jpg'
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Cursor, useTypewriter,  } from 'react-simple-typewriter';
import personimg2 from '../PERSONAL IMG/businessman-on-isolated-png.png'
import personimg from '../PERSONAL IMG/WhatsApp Image 2025-04-08 at 7.54.20 PM.jpeg'
import userimg from '../PERSONAL IMG/bahad.jpg'

const Indroduce = () => {

  const [typing]=useTypewriter({
    words:['Frontend Developer','ui designer'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:40
  })
  return (
    <div id='home' className='flex text-white   bg-black h-[100vh] lg:justify-around lg:items-center  lg:flex-row  flex-col-reverse   '>
      <div className='p-10 md:p-auto pl-6 lg:pl-[5rem]  md:w-[600px] '>
       <h2 className='text-5xl   lg:text-7xl mt-14 lg:mt-10 font-sans lg:font-semibold font-mediun '>Hi There,</h2>
       <h2 className='text-4xl lg:text-6xl mt-4 font-semibold'>I'm Abdul <span className='text-[#0018A8]'>Bahad</span> </h2>

       <p className='text-2xl lg:text-4xl mt-3 font-medium -z-30 '>i am into <span className='text-[#00CCFF] text-[1.5rem] lg:text-4xl '>{typing}</span> <span className=' -z-30'
       > <Cursor cursorStyle='' /> </span> </p>
      
       <div className="share-icon ">
           <ul className='flex text-4xl mt-4 cursor-pointer'>
            <li className='p-3 border-2 text-white rounded-[50%] text-[1.5rem] mr-2 hover:bg-blue-600'> <a href="https://www.linkedin.com/in/abdul-bahad-4a4461282/" target="_blank"><FaLinkedin className='m-auto ' /></a> </li>
            <li className='p-3 border-2  text-white rounded-[50%] text-[1.5rem] mr-2 hover:bg-violet-800 '> <a href="https://github.com/fahath19" target="_blank" > <FaGithub/></a>  </li>
            <li className='p-3 border-2 text-white rounded-[50%] text-[1.5rem] mr-2 hover:bg-pink-600'>  <a href="https://www.instagram.com/" target='_blank'> <FaInstagram/> </a> </li>
           </ul>
       </div>
      </div>
      <div className=' lg:w-[380px] lg:h-[350px] w-[250px]  h-[250px] mx-auto md:mt-10 lg:m-0   rounded-[50%] relative 2    lg:mt-10  mt-20'>

      <div className=' md:w-[450px] md:h-[450px] w-[280px] h-[280px]  absolute mx-auto md:-bottom-0 md:-left-[2.8rem] -left-7 '>
      <img src={personimg} alt="avimage"  className='rounded-[50%]   w-[100%] h-[100%]'/>

      </div>
      </div>

    </div>

  )
}

export default Indroduce