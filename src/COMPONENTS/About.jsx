import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import {userimg} from '../Constant/'
import pdf from '../pdf/resume2.pdf'
const About = () => {
  return (
    <div id='about'>
       <div className='flex items-center justify-center mt-3' >
        <FaUserAlt className='text-3xl'/>
        <h2 className='ml-4 text-4xl font-bold'>About <span className='text-violet-800'> Me</span> </h2>
       </div>

       <div className='flex justify-evenly mt-20 items-center lg:flex-row flex-col'>
          <div className="img  lg:w-[20%] w-7/12 ">
             <img src={userimg} alt="image" className='rounded-[50%]'/>
          </div>
          <div className='info  lg:w-4/12 w-8/12 lg:m-0 mt-10 '>
            <h2 className='text-3xl lg:text-4xl font-bold leading-6 mb-4'>I'm Abdul Bahad</h2>
            <p className='text-2xl font-semibold'>Frontend Developer</p>
            <p className='mt-2 text-justify'> 
             I am a Frontend developer based in Tamil Nadu, India. 
             I am very passionate about improving my coding skills & developing applications & websites. 
              Working for myself to improve my skills.
             </p>
             <p className='mt-2'>bahadabdul539@gmail.com</p>
             <p className='mt-2'>TamilNadu, India - 622504</p>

             <button className='mt-5 bg-violet-800 text-white p-2 px-8 text-2xl rounded '><a href={pdf} download="resume">Resume</a></button>
       </div>
    </div>
    </div>
  )
}

export default About
